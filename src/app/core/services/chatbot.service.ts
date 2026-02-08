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
            keywords: ['ahorro', 'factura', 'luz', 'energia', 'ahorrar'],
            response: 'Con una gestión inteligente del clima y la iluminación, nuestros clientes suelen conseguir un **ahorro de entre un 20% y un 30%** en su factura energética. 📉💸 La domótica se acaba pagando sola.\n\n¿Te gustaría un estudio de ahorro gratuito? Déjanos tu contacto.'
        },
        {
            keywords: ['garantia', 'soporte', 'mantenimiento', 'rompe', 'problema'],
            response: 'Total tranquilidad: ofrecemos **2 años de garantía** en nuestras instalaciones y planes de **mantenimiento por suscripción**. 🛠️\n\nSi quieres saber precios de los planes, déjame tu número y te informamos.'
        },
        {
            keywords: ['madrid', 'barcelona', 'bilbao', 'pais vasco', 'fuera', 'lejos'],
            response: 'Nuestra base está en Zaragoza (Aragón), pero realizamos proyectos en **Madrid, Barcelona y Bilbao**. 🚗 Para otras zonas, déjanos tu teléfono y ciudad, y estudiaremos si podemos desplazarnos.'
        },
        {
            keywords: ['precio', 'coste', 'cuanto cuesta', 'presupuesto', 'honora', 'tarifa'],
            response: 'Nuestras transformaciones inteligentes suelen oscilar entre 1.000€ y 3.000€ para un piso estándar. \n\nPero cada casa es un mundo. **¿Me dejas tu teléfono?** Te llamamos nosotros y te damos un presupuesto exacto en 5 minutos. 📞'
        },
        {
            keywords: ['reform', 'obra', 'albañil'],
            response: 'En Civitech **no hacemos reformas convencionales**, nosotros **transformamos viviendas en hogares inteligentes** mediante domótica inalámbrica sin obras. 🧹✨\n\n¿Te interesa saber más? Déjanos tu número y te explicamos el proceso.'
        },
        {
            keywords: ['sistema', 'app', 'tecnologia', 'home assistant', 'alexa', 'google'],
            response: 'Utilizamos tecnología de estándar abierto y procesado local (privacidad total). Todo se controla desde una única App diseñada a medida para ti. 📱\n\nSi quieres ver una demo, déjanos tu contacto y te enseñamos cómo funciona.'
        },
        {
            keywords: ['contacto', 'telefono', 'llamar', 'correo', 'email'],
            response: 'Claro, puedes contactarnos al 📞 **624 074 920** o a **civitecreformas@gmail.com**. O mejor aún: **escribe aquí tu número** y te llamamos nosotros gratis ahora mismo.'
        },
        {
            keywords: ['calefaccion', 'clima', 'frio', 'calor', 'aerotermia'],
            response: 'Automatizar el clima ahorra hasta un **30% en tu factura**. 💸 Podemos zonificar tu calefacción o integrar tu aire acondicionado.\n\n¿Quieres saber cuánto ahorrarías tú? Déjanos tu teléfono y te hacemos el cálculo.'
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
