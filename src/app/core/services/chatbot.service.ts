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
            response: '¡Hola! Soy el asistente virtual de Civitech. 👋 ¿En qué puedo ayudarte hoy? Puedo informarte sobre cómo transformamos tu casa en un hogar inteligente, ahorro energético o darte un presupuesto aproximado.'
        },
        {
            keywords: ['precio', 'coste', 'cuando cuesta', 'presupuesto', 'honora', 'tarifa'],
            response: 'Nuestras transformaciones inteligentes suelen oscilar entre 1.000€ y 3.000€ para un piso estándar, dependiendo de lo que quieras controlar (luces, clima, persianas...). \n\nLo mejor es que es **sin obras** y totalmente modular. ¿Te gustaría que te contactemos para un presupuesto exacto?'
        },
        {
            keywords: ['reform', 'obra', 'albañil'],
            response: 'En Civitech **no hacemos reformas convencionales**, nosotros **transformamos viviendas en hogares inteligentes** mediante domótica avanzada. Lo mejor es que nuestra tecnología es inalámbrica, por lo que no necesitamos picar paredes ni ensuciar. 🧹✨'
        },
        {
            keywords: ['sistema', 'app', 'tecnologia', 'home assistant'],
            response: 'Utilizamos tecnología de estándar abierto y procesado local. Esto significa que **tus datos se quedan en tu casa** (privacidad total) y no dependes de nubes externas. Todo se controla desde una única App diseñada a medida para ti. 📱'
        },
        {
            keywords: ['contacto', 'telefono', 'llamar', 'correo', 'email'],
            response: 'Claro, puedes contactarnos directamente al 📞 **624 074 920** o escribirnos a **civitecreformas@gmail.com**. O si prefieres, déjame aquí tu teléfono y te llamamos gratis.'
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
            console.log('CAPTURED LEAD DATA:', message); // Integration point for backend
            return '¡Gracias! He anotado tus datos correctamente. 📝\n\nUn compañero del equipo técnico revisará tu caso y te contactará en breve (normalmente en menos de 24h) para asesorarte sin compromiso. 🚀';
        }

        const match = this.knowledgeBase.find(kb =>
            kb.keywords.some(keyword => lowerMsg.includes(keyword))
        );

        return match ? match.response : this.defaultResponse;
    }
}
