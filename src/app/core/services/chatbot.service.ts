import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
            keywords: ['hola', 'buenos', 'buenas', 'hi', 'hello'],
            response: '¡Hola! Soy el asistente virtual de Civitech. 👋 ¿En qué puedo ayudarte hoy? Puedo informarte sobre domótica, reformas sin obras, Home Assistant o darte un presupuesto aproximado.'
        },
        {
            keywords: ['precio', 'coste', 'cuando cuesta', 'presupuesto', 'honora', 'tarifa'],
            response: 'Nuestras instalaciones de domótica suelen oscilar entre 1.000€ y 3.000€ para un piso estándar, dependiendo de lo que quieras controlar (luces, clima, persianas...). \n\nLo mejor es que es **sin obras** y totalmente modular. ¿Te gustaría que te contactemos para un presupuesto exacto?'
        },
        {
            keywords: ['reform', 'obra', 'albañil'],
            response: '¡Exacto! Nuestra especialidad es la **domótica sin obras**. Utilizamos tecnología inalámbrica profesional (Zigbee/Matter) que se instala en las cajas de registro existentes. No rompemos paredes ni ensuciamos. 🧹✨'
        },
        {
            keywords: ['home assistant', 'homeassistant', 'sistema', 'app'],
            response: 'Trabajamos con **Home Assistant**, el sistema más potente y privado del mercado. A diferencia de Alexa o Google Home, tus datos se quedan en tu casa (local) y no dependes de la nube. Además, integramos todos tus dispositivos en una sola App personalizada para ti. 📱'
        },
        {
            keywords: ['contacto', 'telefono', 'llamar', 'correo', 'email'],
            response: 'Claro, puedes contactarnos directamente al 📞 **624 074 920** o escribirnos a **civitecreformas@gmail.com**. También puedes dejarme aquí tu teléfono y te llamamos nosotros.'
        },
        {
            keywords: ['zaragoza', 'huesca', 'aragon', 'donde'],
            response: 'Estamos ubicados en **Zaragoza**, pero realizamos proyectos en todo Aragón (Huesca, Teruel) y zonas limítrofes. ¡Vamos donde nos necesites! 🚗'
        },
        {
            keywords: ['alexa', 'google', 'siri', 'voz'],
            response: 'Sí, por supuesto. Nuestros sistemas son compatibles con **Alexa, Google Assistant y Siri**. Podrás controlar tu casa con la voz, pero con la potencia extra de nuestra programación profesional.'
        },
        {
            keywords: ['calefaccion', 'clima', 'frio', 'calor', 'aerotermia'],
            response: 'Automatizar el clima es una de las mejores inversiones. Podemos zonificar tu calefacción, integrar tu aire acondicionado o aerotermia para que se activen solo cuando sea necesario, ahorrando hasta un **30% en tu factura**. 💸'
        }
    ];

    private defaultResponse = 'Entiendo. Para darte una respuesta más precisa sobre tu caso concreto, lo ideal sería que un técnico lo revise. ¿Te gustaría dejarnos tu contacto o que te llamemos?';

    constructor() { }

    sendMessage(userMessage: string): Observable<string> {
        const response = this.findResponse(userMessage);
        // Simulate thinking delay between 1 and 2 seconds
        const delayMs = 1000 + Math.random() * 1000;
        return of(response).pipe(delay(delayMs));
    }

    private findResponse(message: string): string {
        const lowerMsg = message.toLowerCase();

        // Check contact data (phone/email detection could act here)
        if (/\b\d{9}\b/.test(lowerMsg) || /@/.test(lowerMsg)) {
            return '¡Gracias! He anotado tus datos. Un compañero del equipo técnico te contactará lo antes posible (normalmente en menos de 24h) para asesorarte sin compromiso. 🚀';
        }

        const match = this.knowledgeBase.find(kb =>
            kb.keywords.some(keyword => lowerMsg.includes(keyword))
        );

        return match ? match.response : this.defaultResponse;
    }
}
