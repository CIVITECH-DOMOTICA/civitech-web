import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

export interface ChatMessage {
    text: string;
    isUser: boolean;
    timestamp: Date;
    type?: 'text' | 'options' | 'whatsapp_link';
    options?: { label: string; value: string; action?: string }[];
}

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {

    /**
     * URL del proxy n8n que actúa como intermediario hacia OpenAI.
     * La API key de OpenAI NUNCA sale del servidor n8n — el frontend
     * solo envía el mensaje y el historial al webhook.
     */
    private chatbotWebhookUrl: string = environment.chatbotWebhookUrl || '';
    private conversationHistory: { role: 'user' | 'assistant'; content: string }[] = [];
    private contactCaptured = false;

    constructor() {
        emailjs.init(environment.emailJsPublicKey || '');

        if (!this.chatbotWebhookUrl) {
            console.warn('[Chatbot] chatbotWebhookUrl no configurado — usando fallback local');
        }
    }

    /** Main entry point — every message goes through here */
    sendMessage(userMessage: string): Observable<ChatMessage> {
        if (!this.contactCaptured && this.looksLikeContact(userMessage)) {
            return from(this.handleContactDetected(userMessage));
        }

        if (!this.chatbotWebhookUrl) {
            return of(this.localFallback(userMessage));
        }

        return from(this.askViaProxy(userMessage)).pipe(
            catchError((err) => {
                console.error('[Chatbot] Proxy call failed:', err?.message || err);
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

    /**
     * Envía el mensaje al proxy n8n.
     * n8n recibe: { message, history } → llama a OpenAI → devuelve { reply }
     * La API key de OpenAI se configura en n8n, NUNCA en el frontend.
     */
    private async askViaProxy(userMessage: string): Promise<ChatMessage> {
        this.conversationHistory.push({ role: 'user', content: userMessage });
        const recentHistory = this.conversationHistory.slice(-12);

        const response = await fetch(this.chatbotWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: userMessage,
                history: recentHistory
            })
        });

        if (!response.ok) {
            const errBody = await response.text();
            console.error('[Chatbot] Proxy HTTP error:', response.status, errBody);
            throw new Error(`Proxy HTTP ${response.status}`);
        }

        const data = await response.json();
        // n8n puede devolver { reply: "..." } o { output: "..." } según el workflow
        const aiText = data.reply || data.output || data.text || '¿Puedes repetirlo?';
        this.conversationHistory.push({ role: 'assistant', content: aiText });

        return { text: aiText, isUser: false, timestamp: new Date(), type: 'text' };
    }

    private async handleContactDetected(contact: string): Promise<ChatMessage> {
        this.contactCaptured = true;
        this.sendEmailNotification(contact);

        const waMsg = `Hola Civitech! He hablado con vuestro asistente y me gustaría más información sobre domótica.`;
        const waLink = `https://wa.me/34624074920?text=${encodeURIComponent(waMsg)}`;

        this.conversationHistory.push({ role: 'user', content: contact });

        let aiText = `¡Perfecto! 🚀 He apuntado tus datos. Un técnico de Civitech te contactará pronto. ¿Hay algún horario que te venga mejor?`;

        if (this.chatbotWebhookUrl) {
            try {
                const response = await fetch(this.chatbotWebhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: contact,
                        history: this.conversationHistory
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    const reply = data.reply || data.output || data.text;
                    if (reply) aiText = reply;
                }
            } catch { /* keep default aiText */ }
        }

        this.conversationHistory.push({ role: 'assistant', content: aiText });

        return {
            text: aiText,
            isUser: false,
            timestamp: new Date(),
            type: 'whatsapp_link',
            options: [{ label: '💬 Abrir WhatsApp Ahora', value: waLink, action: 'link' }]
        };
    }

    /** Fallback cuando el proxy n8n no está disponible */
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

        return { text: '¿En qué te puedo ayudar exactamente? Cuéntame tu situación y te oriento. Somos especialistas en domótica en Zaragoza — sin cuotas, sin complicaciones. ☎️ +34 624 074 920', isUser: false, timestamp: new Date(), type: 'text' };
    }

    private looksLikeContact(text: string): boolean {
        const phoneRegex = /(\+?34\s?)?[6789]\d{8}/;
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        return phoneRegex.test(text) || emailRegex.test(text);
    }

    private sendEmailNotification(contact: string) {
        emailjs.send(
            environment.emailJsServiceId || '',
            environment.emailJsTemplateId || '', {
            message: `Nuevo Lead desde Chatbot: ${contact}`,
            to_name: 'Civitech Team',
            from_name: 'Chatbot v2'
        }).catch(err => console.error('EmailJS error:', err));
    }
}
