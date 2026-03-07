import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import OpenAI from 'openai';
import { environment } from '../../../environments/environment';

export interface ChatMessage {
    text: string;
    isUser: boolean;
    timestamp: Date;
    type?: 'text' | 'options' | 'whatsapp_link';
    options?: { label: string; value: string; action?: string }[];
}

const SYSTEM_PROMPT = `Eres el asistente virtual de Civitech, expertos en Domótica e IoT en Zaragoza, España.

## TU PERSONALIDAD
Eres un técnico experto pero con un trato cercano y humano. Hablas con naturalidad, como un amigo que sabe mucho del tema. Usas algún emoji ocasionalmente (sin pasarte). Siempre en español.

## CONOCIMIENTO TÉCNICO (demuéstralo cuando sea relevante)
- **Plataforma**: Sistema de automatización propio basado en tecnología open-source (sin nube externa, sin cuotas)
- **Integración energie**: Gestionamos excedentes fotovoltaicos para cargar coches (Wallbox/EVSE), climatización, ACS. Normalmente logramos facturas de luz en torno a 0€ varios meses al año con una buena gestión.
- **Seguridad**: Cámaras con IA (Frigate, detección de personas/vehículos), sensores Zigbee/Z-Wave, integración con alarmas. Detección perimetral sin cuotas de CloudCompanies.
- **Confort**: Persianas y toldos motorizados (Somfy, Nice, tubos de espuma), iluminación circadiana (Philips Hue, IKEA Tradfri, Shelly), escenas personalizadas (Cine, Cena, Trabajo).
- **Redes**: WiFi mesh (Ubiquiti UniFi, TP-Link Omada), VLANs, QoS para streaming/gaming.
- **Hardware**: Shelly, Zigbee2MQTT, ZigStar, Sonoff, ESPHome, Raspberry Pi / NUC like mini-PC.
- **Protocolo**: Zigbee, Z-Wave, WiFi, KNX (instalaciones nuevas).
- **Sin obras**: El 90% de instalaciones no requieren obra. Actuamos sobre cajas de mecanismos existentes.

## EMPRESA
- Zona: Zaragoza y Aragón
- Sin cuotas mensuales (pago único por instalación)
- 3 años de garantía en equipos e instalación
- Teléfono: +34 624 074 920
- Email: civitecreformas@gmail.com
- Presupuesto gratuito en 24h

## OBJETIVO ESTRATÉGICO
1. Responde con conocimiento técnico real que genere confianza
2. Haz preguntas de calificación de forma natural (¿tienes placas ya? ¿chalet o piso? ¿qué tienes ahora?)
3. Cuando detectes interés real, propón mostrar casos reales o enviar más info via WhatsApp/correo
4. Captura el contacto de forma natural, NO invasiva: "¿te parece si te enviamos un presupuesto orientativo a tu WhatsApp?"

## CAPTURA DE CONTACTO - MUY IMPORTANTE
Cuando el usuario dé un teléfono o email, responde con una confirmación entusiasta y que conectarás con el equipo.
Ejemplo de respuesta cuando te den un contacto:
"¡Perfecto [número/email]! 🚀 He anotado tus datos. Un técnico de Civitech te contactará pronto para hablar de tu proyecto sin compromiso. ¿Hay algún horario que te venga mejor para la llamada?"

NO intentes ser demasiado comercial desde el principio. Primero da valor, luego pide el contacto.`;

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {

    private openai: OpenAI | null = null;
    private conversationHistory: { role: 'user' | 'assistant'; content: string }[] = [];
    private contactCaptured = false;

    constructor() {
        emailjs.init(environment.emailJsPublicKey || 'toWAFkM86-kDoWQa-');

        const key = environment.openAiApiKey;
        console.log('[Chatbot] API key present:', !!key, '| starts with:', key?.substring(0, 10));

        if (key && key !== 'sk-PLACEHOLDER') {
            this.openai = new OpenAI({
                apiKey: key,
                dangerouslyAllowBrowser: true
            });
            console.log('[Chatbot] OpenAI client initialized ✅');
        } else {
            console.warn('[Chatbot] OpenAI key missing or placeholder — will use local fallback ⚠️');
        }
    }

    /** Main entry point — every message goes through here */
    sendMessage(userMessage: string): Observable<ChatMessage> {
        // Detect contact info and handle it specially
        if (!this.contactCaptured && this.looksLikeContact(userMessage)) {
            return from(this.handleContactDetected(userMessage));
        }

        if (!this.openai) {
            console.warn('[Chatbot] No OpenAI client — using local fallback');
            return of(this.localFallback(userMessage));
        }

        // Everything else goes to OpenAI
        return from(this.askOpenAI(userMessage)).pipe(
            catchError((err) => {
                console.error('[Chatbot] OpenAI call failed:', err?.message || err);
                return of(this.localFallback(userMessage));
            })
        );
    }

    /** Initial welcome message shown on open */
    getWelcomeMessage(): ChatMessage {
        this.conversationHistory = [];
        this.contactCaptured = false;
        return {
            text: '¡Hola! 👋 Soy el asistente de **Civitech**. Llevamos años instalando domótica en Zaragoza y Aragón. ¿En qué te puedo ayudar?',
            isUser: false,
            timestamp: new Date(),
            type: 'options',
            options: [
                { label: '☀️ Ahorro energético', value: 'Me interesa el ahorro energético y gestión solar' },
                { label: '🛡️ Seguridad', value: 'Quiero saber sobre seguridad inteligente sin cuotas' },
                { label: '🛋️ Confort y automatización', value: 'Me interesa automatizar el confort de mi hogar' },
                { label: '💬 Tengo una pregunta', value: 'Tengo una pregunta sobre domótica' }
            ]
        };
    }

    private async askOpenAI(userMessage: string): Promise<ChatMessage> {
        // Add to history
        this.conversationHistory.push({ role: 'user', content: userMessage });

        // Keep last 12 messages for context
        const recentHistory = this.conversationHistory.slice(-12);

        let completion: any;
        try {
            completion = await this.openai!.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...recentHistory
                ],
                max_tokens: 300,
                temperature: 0.75,
            });
            console.log('[Chatbot] Raw completion:', completion);
        } catch (apiErr: any) {
            console.error('[Chatbot] API request error:', apiErr?.status, apiErr?.message, apiErr?.error);
            throw apiErr;
        }

        if (!completion || !completion.choices || completion.choices.length === 0) {
            console.error('[Chatbot] Unexpected completion shape:', completion);
            throw new Error('Invalid completion response');
        }

        const aiText = completion.choices[0].message.content || '¿Puedes repetirlo?';
        this.conversationHistory.push({ role: 'assistant', content: aiText });

        return {
            text: aiText,
            isUser: false,
            timestamp: new Date(),
            type: 'text'
        };
    }

    private async handleContactDetected(contact: string): Promise<ChatMessage> {
        this.contactCaptured = true;

        // Notify via email
        this.sendEmailNotification(contact);

        // Generate WhatsApp link
        const waMsg = `Hola Civitech! He hablado con vuestro asistente y me gustaría más información sobre domótica.`;
        const waLink = `https://wa.me/34624074920?text=${encodeURIComponent(waMsg)}`;

        // Also let OpenAI generate a warm response
        this.conversationHistory.push({ role: 'user', content: contact });
        const completion = await this.openai!.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...this.conversationHistory
            ],
            max_tokens: 150,
            temperature: 0.7,
        });

        const aiText = completion.choices[0].message.content ||
            `¡Perfecto! 🚀 He apuntado tus datos. Un técnico de Civitech te contactará pronto. ¿Hay algún horario que te venga mejor?`;

        this.conversationHistory.push({ role: 'assistant', content: aiText });

        return {
            text: aiText,
            isUser: false,
            timestamp: new Date(),
            type: 'whatsapp_link',
            options: [{ label: '💬 Abrir WhatsApp Ahora', value: waLink, action: 'link' }]
        };
    }

    /** Fallback when OpenAI is unavailable */
    private localFallback(message: string): ChatMessage {
        const lower = message.toLowerCase();

        if (lower.includes('precio') || lower.includes('cuánto') || lower.includes('coste')) {
            return { text: 'Los precios varían según el proyecto. Podemos empezar desde instalaciones básicas hasta proyectos completos. Lo mejor es que te hagamos una valoración gratuita — ¿me dejas tu teléfono o email?', isUser: false, timestamp: new Date(), type: 'text' };
        }
        if (lower.includes('solar') || lower.includes('placa') || lower.includes('energi')) {
            return { text: 'La gestión solar es nuestro punto fuerte. ☀️ Con nuestro sistema de automatización y el hardware adecuado conseguimos que los excedentes fotovoltaicos carguen el coche, calienten el agua o enfríen la casa según prioridades. ¿Tienes ya instalación solar?', isUser: false, timestamp: new Date(), type: 'text' };
        }
        if (lower.includes('seguridad') || lower.includes('camara') || lower.includes('alarma')) {
            return { text: 'Sin cuotas y sin nube externa. 🛡️ Usamos Frigate (IA local) para distinguir personas, coches o animales. Notificaciones instantáneas al móvil con vídeo clip. ¿Es para una vivienda principal o segunda residencia?', isUser: false, timestamp: new Date(), type: 'text' };
        }

        return { text: 'Interesante. Aunque ahora mismo tengo un problema de conexión, puedo decirte que somos especialistas en esto. Lo mejor es que hablemos directamente: +34 624 074 920. ¿O prefieres que te llamemos nosotros?', isUser: false, timestamp: new Date(), type: 'text' };
    }

    private looksLikeContact(text: string): boolean {
        const phoneRegex = /(\+?34\s?)?[6789]\d{8}/;
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        return phoneRegex.test(text) || emailRegex.test(text);
    }

    private sendEmailNotification(contact: string) {
        emailjs.send(
            environment.emailJsServiceId || 'service_cvyech4',
            environment.emailJsTemplateId || 'template_8uy4o9g', {
            message: `Nuevo Lead desde Chatbot: ${contact}`,
            to_name: 'Civitech Team',
            from_name: 'Chatbot v2'
        }).catch(err => console.error('EmailJS error:', err));
    }
}
