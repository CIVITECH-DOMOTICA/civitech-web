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
            response: '¡Claro! Aquí tienes dos casos reales de nuestros proyectos:\n\n1️⃣ **Casa en Huesca (4 plantas)**: La casa detecta por GPS cuando la familia sale de Madrid y **enciende la calefacción sola**. Llegan siempre a 21°C sin tocar nada.\n\n2️⃣ **Chalet en Miralbueno**: Prioridad Solar. El sistema usa los excedentes para enfriar la casa gratis y, lo que sobra, **carga el Tesla a coste cero**.\n\n¿Cuál te encaja más? Déjame tu teléfono y lo vemos.'
        },
        {
            keywords: ['seguridad', 'camara', 'alarma', 'ladron', 'vigilancia', 'proteger', 'robo'],
            response: 'Seguridad Inteligente real. 🛡️ En una **Lavandería 24h** de Zaragoza instalamos cámaras con IA que distinguen personas de sombras.\n\nResultado: **0 falsas alarmas** y aviso inmediato al móvil con vídeo si entra alguien fuera de horario. ¿Te interesa esta tranquilidad? Déjanos tu contacto.'
        },
        {
            keywords: ['solar', 'placa', 'fotovoltaica', 'bateria', 'excedente', 'vertido'],
            response: '¡No regales tu energía! ☀️ Con nuestro sistema de **Vertido Cero**, el excedente solar calienta tu agua, carga el coche o climatiza la casa automáticamente. \n\nAhorros del 30-50%. ¿Tienes placas o piensas ponerlas?'
        },
        {
            keywords: ['mascota', 'perro', 'gato', 'animal', 'comida'],
            response: 'Amamos a los animales. 🐾 Podemos instalar cámaras para verles, **dispensadores de comida automáticos** y control de clima para que no pasen calor en verano.\n\n¿Qué mascota tienes?'
        },
        {
            keywords: ['mayor', 'abuelo', 'padres', 'asistencia', 'caida', 'seguridad', 'teleasistencia', 'dependiente'],
            response: 'Tranquilidad para ti y para ellos. 👵 Nuestro sistema de **Cuidado Activo** detecta caídas o inactividad sin usar cámaras (privacidad total) y te avisa al móvil.\n\nEs mejor que una alarma. ¿Te gustaría saber más?'
        },
        {
            keywords: ['cine', 'peli', 'serie', 'netflix', 'tv', 'television'],
            response: 'Montamos tu **Cine en Casa**. 🍿 Al pulsar un botón: bajan las persianas, se atenúan las luces y el sonido se ajusta al modo película.\n\nSolo te faltan las palomitas. ¿Te imaginas tener esto en tu salón?'
        },
        {
            keywords: ['wifi', 'internet', 'lento', 'conexion', 'cobertura', 'red'],
            response: '¿Problemas con el WiFi? 📶 Instalamos redes profesionales (Mesh) que cubren toda la casa, jardín incluido. Sin cortes y con **bloqueo de publicidad** para todos tus dispositivos.\n\nDi adiós al lag. ¿Quieres que revisemos tu red?'
        },
        {
            keywords: ['riego', 'jardin', 'exterior', 'piscina', 'terraza', 'cesped', 'planta'],
            response: 'Tu jardín, inteligente. 🌿 Nuestro sistema **predice el tiempo**: no riega si va a llover y para aspersores si hace viento (ahorrando hasta 50% de agua). \n\nTambién detectamos fugas o tuberías rotas. ¿Quieres que cuidemos de tu jardín?'
        },
        {
            keywords: ['ahorro', 'factura', 'luz', 'energia', 'ahorrar'],
            response: 'Nuestros clientes logran la máxima eficiencia. 📉 En nuestro proyecto de **Miralbueno**, el sistema decide: primero usa el sol para el aire acondicionado y luego para cargar el coche eléctrico.\n\nResultado: **Autosuficiencia casi total**. ¿Quieres un estudio de ahorro? Déjanos tu teléfono.'
        },
        {
            keywords: ['persiana', 'toldo', 'cortina', 'store'],
            response: 'En nuestros proyectos (como en la **Lavandería 24h**), las persianas se gestionan solas por seguridad y clima. ☀️ Se bajan en verano para que no entre calor y se cierran si salta la alarma.\n\n¿Cuántas persianas tienes? Podemos motorizarlas todas.'
        },
        {
            keywords: ['notificacion', 'aviso', 'alerta', 'mensaje', 'movil', 'telegram', 'whatsapp'],
            response: '¡Por supuesto! 📲 Configuranos notificaciones a medida: "La lavadora ha terminado", "Fuga de agua detectada" o "Alguien ha entrado en el jardín". \n\nTe llegan al instante (Telegram o App) con fotos o vídeo si es necesario.'
        },
        {
            keywords: ['internet', 'wifi', 'offline', 'cae', 'corte', 'router'],
            response: 'Aquí está la magia de Home Assistant: **Tu casa sigue funcionando SIN internet**. 🔌\n\nLas luces, persianas y sensores son locales. Solo necesitas internet para recibir avisos fuera de casa. Privacidad y velocidad máxima.'
        },
        {
            keywords: ['marca', 'xiaomi', 'philips', 'sonoff', 'apple', 'android', 'mezclar', 'compatible'],
            response: 'Lo integramos TODO. 🤝 No te cases con una marca. Hacemos que la bombilla de IKEA hable con el sensor de Xiaomi y la caldera Vaillant. \n\nUnificamos todas tus apps en una sola.'
        },
        {
            keywords: ['obra', 'cable', 'romper', 'pared', 'albañil', 'polvo'],
            response: 'Cero obras. 🧹 Usamos tecnología inalámbrica profesional (Zigbee/WiFi) y módulos que se esconden detrás de tus interruptores actuales. \n\nTu casa se vuelve inteligente invisiblemente.'
        },
        {
            keywords: ['interruptor', 'manual', 'abuela', 'padres', 'visita'],
            response: '¡Tranquilidad! Tus interruptores de siempre seguirán funcionando. 👴👵\n\nLa domótica suma, no resta. Si se cae el sistema (que no pasa), puedes encender la luz con la mano como toda la vida.'
        },
        {
            keywords: ['viejo', 'antiguo', 'caldera', 'lavadora', 'aire'],
            response: 'No hace falta comprar electrodomésticos nuevos. 🔌 Ponemos "cerebro" a tu caldera vieja, tu aire acondicionado de hace 10 años o tu lavadora clásica. \n\n¿Qué aparato te gustaría controlar?'
        },
        {
            keywords: ['calefaccion', 'clima', 'frio', 'calor', 'aerotermia'],
            response: 'Automatizar el clima ahorra hasta un **30% en tu factura**. 💸 Podemos zonificar tu calefacción o integrar tu aire acondicionado.\n\n¿Quieres saber cuánto ahorrarías tú? Déjanos tu teléfono y te hacemos el cálculo.'
        },
        {
            keywords: ['que se puede hacer', 'que haces', 'resumen', 'servicios', 'posibilidades', 'todo', 'mas', 'otra', 'otro', 'saber'],
            response: '¡Uf, muchísimas cosas! 🤯 El límite es tu imaginación. Además de luces y clima, hacemos cosas muy chulas:\n\n☀️ **Solar:** Gestión de excedentes y carga de coche gratis.\n👵 **Mayores:** Detectamos caídas sin usar cámaras.\n🐾 **Mascotas:** Comida y vigilancia automática.\n🍿 **Cine:** Escenas de película con un click.\n\nPuedes ver todos nuestros casos detallados en la sección de **Domótica** de esta web. ¿Te da curiosidad alguno de estos temas?'
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
