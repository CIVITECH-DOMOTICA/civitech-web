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
            response: '¡Para nada! Nuestra prioridad es simplificar tu vida. Diseñamos sistemas **totalmente flexibles y fáciles de usar**, pensados tanto para niños como para personas mayores. Tú nos dices qué necesitas y nosotros lo hacemos sencillo. 👵👶'
        },
        {
            keywords: ['marca', 'shelly', 'sonoff', 'aqara', 'fabricante', 'dispositivo'],
            response: 'Trabajamos con un gran abanico de marcas principales para asegurar que el sistema funcione perfectamente. 🛡️\n\nSi tienes dispositivos de marcas menos conocidas o específicas, podemos **estudiar tu caso** para integrarlas, pero siempre priorizamos la calidad y estabilidad del servicio para ti.'
        },
        {
            keywords: ['ahorro', 'factura', 'luz', 'energia', 'ahorrar'],
            response: 'Con una gestión inteligente del clima y la iluminación, nuestros clientes suelen conseguir un **ahorro de entre un 20% y un 30%** en su factura energética. 📉💸 La domótica se acaba pagando sola.'
        },
        {
            keywords: ['garantia', 'soporte', 'mantenimiento', 'rompe', 'problema'],
            response: 'Total tranquilidad: ofrecemos **2 años de garantía** en nuestras instalaciones. Además, disponemos de planes de **mantenimiento por suscripción** para que tu sistema esté siempre actualizado y funcionando al 100% sin que te preocupes de nada. 🛠️'
        },
        {
            keywords: ['madrid', 'barcelona', 'bilbao', 'pais vasco', 'fuera', 'lejos'],
            response: 'Nuestra base está en Zaragoza (Aragón), pero realizamos proyectos en **Madrid, Barcelona y Bilbao**. 🚗 Para otras zonas, contáctanos y estudiaremos tu proyecto con detalle.'
        },
        {
            keywords: ['precio', 'coste', 'cuanto cuesta', 'presupuesto', 'honora', 'tarifa'],
            response: 'Nuestras transformaciones inteligentes suelen oscilar entre 1.000€ y 3.000€ para un piso estándar, dependiendo de lo que quieras controlar (luces, clima, persianas...). \n\nLo mejor es que es **sin obras** y totalmente modular. ¿Te gustaría que te contactemos para un presupuesto exacto?'
        },
        {
            keywords: ['reform', 'obra', 'albañil'],
            response: 'En Civitech **no hacemos reformas convencionales**, nosotros **transformamos viviendas en hogares inteligentes** mediante domótica avanzada. Lo mejor es que nuestra tecnología es inalámbrica, por lo que no necesitamos picar paredes ni ensuciar. 🧹✨'
        },
        {
            keywords: ['sistema', 'app', 'tecnologia', 'home assistant', 'alexa', 'google'],
            response: 'Utilizamos tecnología de estándar abierto y procesado local. Esto significa que **tus datos se quedan en tu casa** (privacidad total) y no dependes de nubes externas. Todo se controla desde una única App diseñada a medida para ti, compatible con Alexa, Google y Siri.'
        },
        {
            keywords: ['contacto', 'telefono', 'llamar', 'correo', 'email'],
            response: 'Claro, puedes contactarnos directamente al 📞 **624 074 920** o escribirnos a **civitecreformas@gmail.com**. O si prefieres, déjame aquí tu teléfono y te llamamos gratis.'
        },
        {
            keywords: ['calefaccion', 'clima', 'frio', 'calor', 'aerotermia'],
            response: 'Automatizar el clima es una de las mejores inversiones. Podemos zonificar tu calefacción, integrar tu aire acondicionado o aerotermia para que se activen solo cuando sea necesario, ahorrando hasta un **30% en tu factura**. 💸'
        }
    ];

    private defaultResponse = 'Entiendo. Para darte una respuesta más precisa sobre tu caso concreto, lo ideal sería que un técnico lo revise. ¿Te gustaría dejarnos tu contacto o que te llamemos?';

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

        // Check contact data (phone/email detection)
        if (/\b\d{9}\b/.test(lowerMsg) || /@/.test(lowerMsg)) {
            console.log('Sending lead data to EmailJS...');
            this.sendEmailNotification(message);
            return '¡Gracias! He anotado tus datos correctamente y he avisado a nuestro equipo. 📝\n\nUn técnico revisará tu caso y te contactará en breve (normalmente en menos de 24h) para asesorarte sin compromiso. 🚀';
        }

        const match = this.knowledgeBase.find(kb =>
            kb.keywords.some(keyword => lowerMsg.includes(keyword))
        );

        return match ? match.response : this.defaultResponse;
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
