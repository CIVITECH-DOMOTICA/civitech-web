import { Injectable } from '@angular/core';
import { UseCase } from '../models/use-case.model';

@Injectable({
    providedIn: 'root'
})
export class UseCasesService {

    private useCases: UseCase[] = [
        {
            id: '1',
            slug: 'energia-inteligente', // URL friendly
            titulo: 'Energía Inteligente',
            subtitulo: 'Solar, Clima y Carga Inteligente',
            descripcion: 'Tu hogar, eficiente por naturaleza. El sistema orquesta persianas, excedentes solares y cargador de coche para reducir tu factura al mínimo. Empieza con lo que necesitas, ahorra desde el primer día.',
            descripcionDetallada: 'Transforma tu casa en un ecosistema activo que reduce tu factura cada día. Energía Inteligente no es solo poner placas solares: es integrar Climatización, Persianas y Cargadores para que trabajen juntos. El sistema aprovecha automáticamente las horas de luz más barata para cargar baterías y tu coche eléctrico, y desvía cada vatio de excedente solar para calentar agua o climatizar gratis, garantizando que no regalas energía a la red.',
            imagen: '/assets/images/usecase-solar.png', // Reutilizamos imagen solar
            video: 'assets/videos/excedente-solar.mp4',
            icono: 'fa-solar-panel',
            categoria: 'Ahorro',
            ahorroEstimado: '40-60% en factura',
            tiempoImplementacion: '2-3 días',
            roi: '12-18 meses',
            beneficios: [
                'Persianas Térmicas que bloquean el sol en verano para no gastar en aire',
                'Tu coche cargándose gratis automáticamente con la energía solar sobrante',
                'Agua caliente lista sin encender la caldera',
                'Un sistema que consulta la previsión meteorológica para tomar decisiones de ahorro antes de que tú lo pienses',
                'Todo automático, todo sin cuotas'
            ],
            casosUso: [
                'Viviendas con fotovoltaica',
                'Chalets con piscina y termo',
                'Hogares con alta factura de clima',
                'Usuarios concienciados con eficiencia'
            ],
            tecnologias: [
                { nombre: 'Home Assistant', logo: 'assets/logos/home-assistant.svg', url: 'https://www.home-assistant.io/' },
                { nombre: 'Shelly', logo: 'assets/logos/shelly.png', url: 'https://www.shelly.com/es' },
                { nombre: 'Victron Energy', logo: 'assets/logos/victron.svg', url: 'https://www.victronenergy.com.es/' },
                { nombre: 'Netatmo', logo: 'assets/logos/netatmo_vector.svg', url: 'https://www.netatmo.com/es-es' },
                { nombre: 'Huawei Solar', logo: 'assets/logos/huawei.svg', url: 'https://solar.huawei.com/' }
            ],
            ejemplos: [
                {
                    titulo: 'Chalet Autosuficiente en Zaragoza',
                    descripcion: 'Cliente con 8kW en placas que regalaba el 40% a la red.',
                    resultado: 'Ahora el sistema calienta la piscina y el agua sanitaria solo con el sol sobrante. Factura de gas reducida un 70%.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Funciona con mi inversor solar actual?',
                    respuesta: 'Sí, integramos casi todas las marcas (Huawei, Fronius, SMA, Solax...) para leer la producción en tiempo real.'
                },
                {
                    pregunta: '¿Y si no tengo placas solares?',
                    respuesta: 'El sistema priorizará las horas más baratas de tu tarifa de luz para los consumos fuertes (lavadora, termo).'
                }
            ]
        },
        {
            id: '2',
            slug: 'seguridad-inteligente',
            titulo: 'Seguridad Inteligente',
            subtitulo: 'Alarmas sin cuotas, Cámaras IA y Accesos',
            descripcion: 'Protección total que no descansa. Videovigilancia que distingue amenazas reales, sirenas que disuaden y control total desde tu móvil. Sin cuotas mensuales, para siempre.',
            descripcionDetallada: 'Seguridad profesional sin letras pequeñas. Olvídate de cuotas mensuales. Tu casa se defiende sola: si detecta una intrusión real, baja persianas, enciende luces rojas y suena la alarma. Cuando viajas, simula que estás dentro. Y gracias a las Cerraduras Inteligentes, olvídate de las llaves: abre con tu huella o el móvil. Además, recibe notificaciones inmediatas con captura de imagen si se detecta algo inusual.',
            imagen: '/assets/images/home_assistant_dashboard.png', // Detalle: Dashboard con cámaras
            imagenCard: '/assets/images/usecase_security_chalet.png', // Card: Chalet con seguridad
            icono: 'fa-shield-halved',
            categoria: 'Seguridad',
            ahorroEstimado: '50€/mes (Cuota Alarma)',
            tiempoImplementacion: '2-3 días',
            roi: 'Inmediato (Tranquilidad)',
            beneficios: [
                'Sin cuotas mensuales de por vida',
                'Defensa Activa: Persianas abajo, luces rojas y sirena',
                'Simulación de presencia cuando viajas',
                'Cerraduras Inteligentes: Acceso con huella o móvil',
                'Notificaciones inmediatas con captura de imagen ante eventos'
            ],
            casosUso: [
                'Chalets unifamiliares',
                'Segundas residencias vacías',
                'Negocios y oficinas',
                'Comunidades de vecinos'
            ],
            tecnologias: [
                { nombre: 'Reolink', logo: 'assets/logos/reolink.png', url: 'https://reolink.com/' },
                { nombre: 'Frigate NVR', logo: 'assets/logos/frigate_text.png', url: 'https://frigate.video/' },
                { nombre: 'Ajax Systems', logo: 'assets/logos/ajax_real.png', url: 'https://ajax.systems/es/' },
                { nombre: 'Aqara', logo: 'assets/logos/aqara_official.png', url: 'https://www.aqara.com/' },
                { nombre: 'Home Assistant', logo: 'assets/logos/home-assistant.svg', url: 'https://www.home-assistant.io/' }
            ],
            ejemplos: [
                {
                    titulo: 'Intrusión Frustrada',
                    descripcion: 'Cámara térmica detectó salto de valla en jardín trasero.',
                    resultado: 'Al instante: focos encendidos, persianas bajadas y sirena a toda potencia. Los intrusos huyeron sin intentar forzar puertas.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Qué pasa si cortan la luz o internet?',
                    respuesta: 'El sistema incluye SAI (Batería) y conexión 4G de respaldo. Sigue grabando y protegiendo.'
                },
                {
                    pregunta: '¿Es legal grabar?',
                    respuesta: 'Sí, configuramos máscaras de privacidad para grabar solo tu propiedad, cumpliendo la LOPD estrictamente.'
                }
            ]
        },
        {
            id: '3',
            slug: 'confort',
            titulo: 'Confort',
            subtitulo: 'Iluminación, Cine y Ambiente Perfecto',
            descripcion: 'El lujo de no tener que hacer nada. Luces que se ajustan a tu estado de ánimo, cine en casa con un toque y persianas que siguen al sol. Tu hogar, a tus órdenes.',
            descripcionDetallada: 'Vive tu hogar como nunca. ¿Noche de cine? Di "Alexa, cine" y la magia ocurre: luces tenues, persianas abajo, sonido envolvente. Despierta con luz natural suave, nunca con alarma estridente. Controla cada rincón con tu voz o desde una app preciosa. Empieza por el salón, y querrás toda la casa.',
            imagen: '/assets/images/usecase-lighting.png', // Reutilizamos iluminación
            icono: 'fa-couch',
            categoria: 'Estilo de Vida',
            ahorroEstimado: 'Confort Invaluable',
            tiempoImplementacion: '1-2 días',
            roi: 'Diario (Bienestar)',
            beneficios: [
                'Máxima Comodidad y Confort',
                'Control por Voz y App unificado',
                'Persianas automáticas según sol/viento',
                'Escenas de Cine (Luces, TV, Sonido)',
                'Iluminación circadiana (salud visual)',
                'Diseño minimalista (menos interruptores)'
            ],
            casosUso: [
                'Salones de diseño',
                'Salas de Home Cinema',
                'Dormitorios principales',
                'Terrazas y exteriores'
            ],
            tecnologias: [
                { nombre: 'Philips Hue', logo: 'assets/logos/philips_hue.png', url: 'https://www.philips-hue.com/es-es' },
                { nombre: 'Somfy', logo: 'assets/logos/somfy_real.png', url: 'https://www.somfy.es/' },
                { nombre: 'Sonos', logo: 'assets/logos/sonos.png', url: 'https://www.sonos.com/es-es/home' },
                { nombre: 'Shelly', logo: 'assets/logos/shelly.png', url: 'https://www.shelly.com/es' },
                { nombre: 'Home Assistant', logo: 'assets/logos/home-assistant.svg', url: 'https://www.home-assistant.io/' }
            ],
            ejemplos: [
                {
                    titulo: 'Escena "Noche de Cine"',
                    descripcion: 'Cliente cansado de usar 4 mandos y levantarse a apagar luces.',
                    resultado: 'Ahora dice "Alexa, pon una peli": TV enciende, persianas bajan, luces se atenúan y sonido pasa a modo envolvente.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Tengo que cambiar todas las bombillas?',
                    respuesta: 'No. Podemos hacer inteligentes tus lámparas actuales instalando módulos invisibles detrás de los interruptores.'
                }
            ]
        },

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

