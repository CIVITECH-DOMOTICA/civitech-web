import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import emailjs from '@emailjs/browser';

export interface ChatMessage {
    text: string;
    isUser: boolean;
    timestamp: Date;
}

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {

    private knowledgeBase = [
        {
            keywords: ['hola', 'buenos', 'buenas', 'hi', 'hello', 'empezar'],
            response: '¡Hola! 👋 Soy la IA de Civitech. ¿Quieres saber cómo **controlar tu casa desde el móvil**, sacar partido a tu vivienda o convertirla en un verdadero hogar inteligente? Pregúntame lo que quieras.'
        },
        {
            keywords: ['dificil', 'complejo', 'mayor', 'abuela', 'padres', 'niños', 'facil'],
            response: '¡Para nada! Nuestra prioridad es simplificar tu vida. Diseñamos sistemas **totalmente flexibles y fáciles de usar**, pensados tanto para niños como para personas mayores. Tú nos dices qué necesitas y nosotros lo hacemos sencillo. 👵👶\n\n¿Quieres que te llamemos y te contemos cómo funciona?'
        },
        {
            keywords: ['marca', 'shelly', 'sonoff', 'aqara', 'fabricante', 'dispositivo'],
            response: 'Trabajamos con un gran abanico de marcas principales para asegurar que el sistema funcione perfectamente. 🛡️\n\nSi tienes dispositivos específicos, podemos estudiar tu caso. **Déjame tu teléfono** y un técnico te confirmará si son compatibles.'
        },
        {
            keywords: ['ejemplo', 'ver', 'demo', 'caso', 'enseña', 'muestra', 'proyecto'],
            response: '¡Claro! Aquí tienes dos casos de éxito reales de Civitech:\n\n1️⃣ **Ático en Zaragoza (Sur)**: Automatizamos sus toldos. Antes se asaban a 35°C, ahora **la casa baja 8°C sola** antes de que lleguen. Inversión mínima, confort total.\n\n2️⃣ **Casa Rural en Teruel**: El dueño vivía intranquilo. Instalamos **simulación de presencia** (luces/ruido). Resultado: 0 robos en 2 años.\n\n¿Tu caso se parece a alguno? **Déjame tu teléfono** y te explico cómo lo haríamos contigo.'
        },
        {
            keywords: ['seguridad', 'camara', 'alarma', 'ladron', 'vigilancia', 'proteger', 'robo'],
            response: '¡Genial! Podemos blindar tu casa. 🛡️ Mira nuestro caso en **Teruel**: instalamos un sistema que cierra persianas y enciende luces si detecta intrusos en el jardín.\n\nEl sistema "se defiende solo". Si te interesa esta tranquilidad, **déjame tu teléfono** y te hacemos un estudio de seguridad gratuito.'
        },
        {
            keywords: ['riego', 'jardin', 'exterior', 'piscina', 'terraza'],
            response: 'El exterior es clave. 🌿 En un jardín ventoso de Zaragoza, logramos **ahorrar un 60% de agua** instalando un sensor de viento que para los aspersores si hace aire.\n\nTambién controlamos luces y depuradoras. ¿Tienes jardín o terraza? Cuéntame y te damos ideas.'
        },
        {
            keywords: ['ahorro', 'factura', 'luz', 'energia', 'ahorrar'],
            response: 'El ahorro es real. 📉 En un chalet con placas solares, logramos que el cliente **ahorrara 35€/mes extra** haciendo que el termo se caliente solo con la energía que le sobraba, sin gastar de la red.\n\n¿Quieres un estudio de ahorro? Déjanos tu contacto.'
        },
        {
            keywords: ['persiana', 'toldo', 'cortina', 'store'],
            response: 'Las persianas inteligentes son clave para el ahorro. ☀️ Se bajan solas en verano para que no entre calor (ahorrando aire acondicionado) y se suben en invierno para calentar la casa gratis con el sol. \n\n¿Cuántas persianas tienes? Podemos motorizarlas todas.'
        },
        {
            keywords: ['luz', 'luces', 'iluminacion', 'led', 'bombilla'],
            response: 'Olvídate de interruptores. 💡 Crea "escenas" (ej: "Modo Cine" o "Modo Relax") y asegúrate de que todo se apaga al salir de casa con un solo comando. Ahorro y diseño van de la mano.'
        },
        {
            keywords: ['calefaccion', 'clima', 'frio', 'calor', 'aerotermia'],
            response: 'Automatizar el clima ahorra hasta un **30% en tu factura**. 💸 Podemos zonificar tu calefacción o integrar tu aire acondicionado.\n\n¿Quieres saber cuánto ahorrarías tú? Déjanos tu teléfono y te hacemos el cálculo.'
        },
        {
            keywords: ['que se puede hacer', 'que haces', 'resumen', 'servicios', 'posibilidades', 'todo'],
            response: '¡Prácticamente todo! 🚀 Aquí tienes un resumen de lo que podemos automatizar:\n\n🌡️ **Clima:** Calefacción y A/C eficiente.\n💡 **Luces:** Ambientes y apagado general.\n🛡️ **Seguridad:** Alarmas y cámaras.\n☀️ **Persianas:** Suben/bajan solas según el sol.\n💦 **Exterior:** Riego y piscina.\n\n¿Qué te llama más la atención? Escríbeme tu duda o déjame tu teléfono.'
        },
        {
            keywords: ['domotica', 'inteligente', 'smart', 'automatizar', 'controlar', 'casa', 'hogar'],
            response: '¡Esa es nuestra especialidad! 🏠 Transformamos tu vivienda actual en una **Smart Home completa sin hacer obras**. \n\nPodrás controlar luces, persianas y clima desde el móvil. ¿Te gustaría ver un ejemplo o prefieres que te llamemos para explicarte tu caso?'
        }
    ];

    private defaultResponse = 'Entiendo. Para darte la mejor respuesta a tu caso concreto, lo ideal es que lo vea un técnico. 👨‍🔧\n\n**¿Me dejas tu teléfono?** Te llamamos en un momento y te lo aclaramos todo sin compromiso.';

    constructor() {
        // Initialize EmailJS with Public Key
        emailjs.init("toWAFkM86-kDoWQa-");
    }

    sendMessage(userMessage: string): Observable<string> {
        const response = this.findResponse(userMessage);
        // Simulate thinking delay between 1 and 2 seconds
        const delayMs = 1000 + Math.random() * 1000;
        return of(response).pipe(delay(delayMs));
    }

    private findResponse(message: string): string {
        const lowerMsg = message.toLowerCase();

        // 1. Check contact data (phone/email detection) - Top Priority
        if (/\b\d{9}\b/.test(lowerMsg) || /@/.test(lowerMsg)) {
            console.log('Sending lead data to EmailJS...');
            this.sendEmailNotification(message);
            return '¡Gracias! He anotado tus datos correctamente y he avisado a nuestro equipo. 📝\n\nUn técnico revisará tu caso y te contactará en breve (normalmente en menos de 24h) para asesorarte sin compromiso. 🚀';
        }

        // 2. Filter out generic greetings if there's more content
        // Define greeting keywords
        const greetingKeywords = ['hola', 'buenos', 'buenas', 'hi', 'hello', 'empezar'];

        // Find all matches
        const matches = this.knowledgeBase.filter(kb =>
            kb.keywords.some(keyword => lowerMsg.includes(keyword))
        );

        // If we have matches, look for non-greeting ones first
        const specificMatch = matches.find(m =>
            !m.keywords.some(k => greetingKeywords.includes(k))
        );

        if (specificMatch) {
            return specificMatch.response;
        }

        // If no specific match, returns greeting if present
        const greetingMatch = matches.find(m =>
            m.keywords.some(k => greetingKeywords.includes(k))
        );

        if (greetingMatch) {
            return greetingMatch.response;
        }

        // 3. Default fallback
        return this.defaultResponse;
    }

    private sendEmailNotification(message: string) {
        const templateParams = {
            message: message, // Corresponds to {{message}} in the template
            to_name: 'Civitech Team',
            from_name: 'Civitech Chatbot'
        };

        emailjs.send('service_cvyech4', 'template_8uy4o9g', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
}
