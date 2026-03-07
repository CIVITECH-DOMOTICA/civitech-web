import { Injectable } from '@angular/core';
import { UseCase } from '../models/use-case.model';

@Injectable({
    providedIn: 'root'
})
export class UseCasesService {

    private useCases: UseCase[] = [
        {
            id: '1',
            slug: 'energia-inteligente',
            titulo: 'Energía Inteligente',
            subtitulo: 'Solar, Clima y Carga Inteligente',
            descripcion: 'Tu hogar, eficiente por naturaleza. El sistema orquesta persianas, excedentes solares y cargador de coche para reducir tu factura al mínimo.',
            descripcionDetallada: 'Transforma tu casa en un ecosistema activo que reduce tu factura cada día. Energía Inteligente no es solo poner placas solares: es integrar Climatización, Persianas y Cargadores para que trabajen juntos. El sistema aprovecha automáticamente las horas de luz más barata para cargar baterías y tu coche eléctrico, y desvía cada vatio de excedente solar para calentar agua o climatizar gratis, garantizando que no regalas energía a la red.',
            imagen: '/assets/images/usecase-solar.png',
            video: 'assets/videos/excedente-solar.mp4',
            icono: 'fa-solar-panel',
            categoria: 'Ahorro',
            ahorroEstimado: '40-60% en factura',
            tiempoImplementacion: '2-3 días',
            roi: '12-18 meses',
            beneficios: [
                { texto: 'Persianas Térmicas que bloquean el sol en verano', icono: 'fa-temperature-arrow-down' },
                { texto: 'Coche cargándose gratis con excedentes', icono: 'fa-charging-station' },
                { texto: 'Agua caliente sin encender la caldera', icono: 'fa-shower' },
                { texto: 'Decisión basada en previsión meteorológica', icono: 'fa-cloud-sun' }
            ],
            tecnologias: [
                { nombre: 'Shelly', logo: 'assets/logos/shelly.png', url: 'https://www.shelly.com/es' },
                { nombre: 'Victron Energy', logo: 'assets/logos/victron.svg', url: 'https://www.victronenergy.com.es/' }
            ],
            faqs: [
                { pregunta: '¿Funciona con mi inversor actual?', respuesta: 'Sí, integramos casi todas las marcas (Huawei, Fronius, SMA...).' }
            ]
        },
        {
            id: '2',
            slug: 'seguridad-inteligente',
            titulo: 'Seguridad Inteligente',
            subtitulo: 'Alarmas sin cuotas y Cámaras IA',
            descripcion: 'Protección total sin letras pequeñas. Videovigilancia que distingue amenazas reales y disuasión activa automática.',
            descripcionDetallada: 'Seguridad profesional sin cuotas mensuales. Tu casa se defiende sola: si detecta una intrusión real, baja persianas, enciende luces rojas y suena la alarma. Cuando viajas, simula presencia. Gracias a las Cerraduras Inteligentes, abre con tu huella o el móvil. Notificaciones inmediatas con captura de imagen ante cualquier movimiento sospechoso.',
            imagen: '/assets/images/usecase_security_chalet.png',
            icono: 'fa-shield-halved',
            categoria: 'Seguridad',
            ahorroEstimado: '50€/mes (Cuotas)',
            tiempoImplementacion: '2-3 días',
            beneficios: [
                { texto: 'Sin cuotas mensuales de por vida', icono: 'fa-piggy-bank' },
                { texto: 'Defensa Activa: Persianas y Luces', icono: 'fa-shield-dog' },
                { texto: 'Simulación de presencia real', icono: 'fa-user-clock' }
            ],
            tecnologias: [
                { nombre: 'Ajax systems', logo: 'assets/logos/ajax_real.png', url: 'https://ajax.systems/es/' },
                { nombre: 'Reolink', logo: 'assets/logos/reolink.png', url: 'https://reolink.com/' }
            ]
        },
        {
            id: '3',
            slug: 'confort',
            titulo: 'Confort y Estilo de Vida',
            subtitulo: 'Iluminación y Ambiente Perfecto',
            descripcion: 'El lujo de no tener que hacer nada. Luces que se ajustan a tu ánimo y escenas de cine con un toque.',
            descripcionDetallada: 'Vive tu hogar como nunca. ¿Noche de cine? Di "Alexa, cine" y las persianas bajan, las luces se atenúan y el sonido envuelve la sala. Despierta con luz natural gradual. Controla cada rincón con tu voz o una app intuitiva diseñada para tu comodidad diaria.',
            imagen: '/assets/images/usecase-lighting.png',
            icono: 'fa-couch',
            categoria: 'Bienestar',
            beneficios: [
                { texto: 'Control por Voz y App unificado', icono: 'fa-microphone' },
                { texto: 'Escenas personalizadas (Cine, Relax)', icono: 'fa-film' },
                { texto: 'Iluminación circadiana saludable', icono: 'fa-lightbulb' }
            ]
        },
        {
            id: '4',
            slug: 'optimizacion-solar',
            titulo: 'Optimización Solar',
            subtitulo: 'Exprime cada vatio de tus placas',
            descripcion: 'Maximiza el autoconsumo desviando excedentes a termos, depuradoras y calefacción. No regales energía.',
            descripcionDetallada: 'Si tienes placas solares, ya sabes que regalar excedentes a la red es un mal negocio. Nuestro sistema lee la producción en tiempo real y activa consumos inteligentes justo cuando te sobra energía. Calienta el agua, filtra la piscina o enciende el lavavajillas gratis.',
            imagen: '/assets/images/solar-dashboard.png',
            icono: 'fa-solar-panel',
            categoria: 'Ahorro'
        },
        {
            id: '5',
            slug: 'climatizacion-inteligente',
            titulo: 'Clima Inteligente',
            subtitulo: 'Temperatura ideal habitación por habitación',
            descripcion: 'Zonifica tu calefacción y aire acondicionado. Ahorra hasta un 30% calentando solo donde estás.',
            descripcionDetallada: '¿Por qué calentar el salón si estás durmiendo? La domótica permite controlar válvulas termostáticas y splits de forma individual. El sistema aprende tus horarios y ajusta la temperatura para que siempre estés a gusto con el mínimo gasto.',
            imagen: '/assets/images/usecase-climate.png',
            icono: 'fa-temperature-high',
            categoria: 'Ahorro'
        },
        {
            id: '6',
            slug: 'persianas-automaticas',
            titulo: 'Persianas Automáticas',
            subtitulo: 'Control solar y privacidad total',
            descripcion: 'Persianas que se mueven solas con el sol para mantener el fresco en verano y el calor en invierno.',
            descripcionDetallada: 'No son simples motores. Son persianas inteligentes que consultan la posición del sol y la temperatura exterior. En invierno se abren para calentar la casa con el sol; en verano se cierran para mantener la sombra y ahorrar en aire acondicionado.',
            imagen: '/assets/images/usecase-blinds.png',
            icono: 'fa-window-maximize',
            categoria: 'Confort'
        },
        {
            id: '7',
            slug: 'control-fugas',
            titulo: 'Protección contra Inundaciones',
            subtitulo: 'Cierra el agua antes de que sea un desastre',
            descripcion: 'Sensores de humedad que cortan el suministro general si detectan una fuga. Tranquilidad absoluta.',
            descripcionDetallada: 'Una fuga de agua puede destrozar tu casa mientras estás fuera. Instalamos sensores en zonas críticas (cocina, baños, lavadero) que, al detectar humedad, envían orden a una electroválvula para cortar el agua e inmediatamente te avisan al móvil.',
            imagen: '/assets/images/usecase-leak.png',
            icono: 'fa-droplet-slash',
            categoria: 'Seguridad'
        },
        {
            id: '8',
            slug: 'carga-vehiculo-electrico',
            titulo: 'Carga de Coche Eléctrico',
            subtitulo: 'Carga inteligente y balanceo de carga',
            descripcion: 'Carga tu coche sin que salte el automático. Prioriza la energía solar y ajusta la potencia según el consumo de la casa.',
            descripcionDetallada: 'Cargar el coche eléctrico no tiene por qué ser un problema de potencia contratada. El cargador inteligente "habla" con la casa y le da al coche solo la energía que sobra, protegiendo tus electrodomésticos y cargando al máximo en horas valle.',
            imagen: '/assets/images/usecase-ev-charging.png',
            icono: 'fa-charging-station',
            categoria: 'Ahorro'
        },
        {
            id: '9',
            slug: 'riego-inteligente',
            titulo: 'Riego Inteligente',
            subtitulo: 'Riega solo si hace falta',
            descripcion: 'Integramos tu riego con el clima de AEMET. Si va a llover, el sistema ahorra agua y no riega.',
            descripcionDetallada: 'Deja de regar cuando llueve. Nuestra central de riego consulta la previsión meteorológica y mide la humedad del suelo. Si ha llovido o hay previsión de lluvia inminente, el ciclo se cancela automáticamente, ahorrando miles de litros al año.',
            imagen: '/assets/images/usecase-garden.png',
            icono: 'fa-faucet-drip',
            categoria: 'Sostenibilidad'
        },
        {
            id: '10',
            slug: 'negocios-locales-inteligentes',
            titulo: 'Domótica para Negocios',
            subtitulo: 'Eficiencia y Seguridad para tu local',
            descripcion: 'Control de luces, clima y persianas para bares, tiendas y oficinas. Todo desde una única app.',
            descripcionDetallada: 'Optimiza los costes de tu negocio. Asegúrate de que todo se apaga al cerrar, monitoriza el consumo eléctrico y recibe alertas de seguridad. Ideal para locales con alto gasto energético como restaurantes o centros de estética en Zaragoza.',
            imagen: '/assets/images/usecase-business.png',
            icono: 'fa-shop',
            categoria: 'B2B'
        },
        {
            id: '11',
            slug: 'gestion-red-wifi',
            titulo: 'Redes WiFi Profesionales',
            subtitulo: 'WiFi total en cada rincón',
            descripcion: 'Se acabaron las zonas sin cobertura. Instalamos redes malladas (Mesh) profesionales para que nunca pierdas la conexión.',
            descripcionDetallada: 'Una casa inteligente necesita una red inteligente. Olvida los repetidores de mala calidad. Instalamos puntos de acceso profesionales que crean una red única y robusta, capaz de soportar decenas de dispositivos domóticos sin cortes.',
            imagen: '/assets/images/usecase-wifi.png',
            icono: 'fa-wifi',
            categoria: 'Infraestructura'
        },
        {
            id: '12',
            slug: 'cuidado-mayores',
            titulo: 'Cuidado de Mayores',
            subtitulo: 'Tranquilidad para toda la familia',
            descripcion: 'Sensores de actividad no intrusivos que te avisan si hay alguna anomalía en la rutina de tus seres queridos.',
            descripcionDetallada: 'Domótica asistencial que no invade la privacidad. Si el sistema no detecta movimiento durante el desayuno o si se deja la puerta abierta demasiado tiempo, envía una notificación suave a los familiares. Seguridad y autonomía para ellos.',
            imagen: '/assets/images/usecase-seniors.png',
            icono: 'fa-heart-pulse',
            categoria: 'Seguridad'
        }
    ];


    constructor() { }

    getUseCases(): UseCase[] {
        return this.useCases;
    }

    getUseCaseBySlug(slug: string): UseCase | undefined {
        return this.useCases.find(uc => uc.slug === slug);
    }

    getUseCaseById(id: string): UseCase | undefined {
        return this.useCases.find(uc => uc.id === id);
    }
}

