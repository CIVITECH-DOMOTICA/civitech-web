import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
    providedIn: 'root'
})
export class ProyectosService {

    private proyectos: Proyecto[] = [
        {
            id: 'casa-huesca',
            slug: 'casa-huesca-integral',
            nombre: 'Domótica Integral Casa 4 Plantas',
            ubicacion: 'Huesca (Pirineo)',
            tipo: 'Residencial Gran Escala',
            resumen: 'Control total de 4 plantas. 120 dispositivos gestionados: Shelly, Daikin VRV (Modbus) y Seguridad IA.',
            descripcionCompleta: 'Proyecto masivo en vivienda unifamiliar de 4 alturas en la montaña. El sistema integra más de 70 dispositivos Shelly para iluminación y válvulas, videovigilancia 4K con IA que envía capturas al móvil, y una gestión climática profesional integrada por Modbus (Daikin VRV) con pasarelas locales. Destaca la automatización por geolocalización: la casa detecta cuando la familia sale de Madrid y pre-calienta la vivienda automáticamente para su llegada.',
            imagenPrincipal: 'assets/images/proyecto_huesca.png',
            imagenes: [
                'assets/images/proyecto_huesca.png'
            ],
            fecha: 'Abril 2025',
            duracion: '5 semanas',
            presupuesto: '25.000€ - 30.000€',
            clienteNombre: 'Familia Pirineos',
            testimonioCliente: 'La tranquilidad de controlar los 4 pisos desde las tablets o la voz es total. Y que la casa se caliente sola cuando venimos de viaje es el mayor lujo.',
            valoracionEstrellas: 5,
            superficieM2: 400,
            habitaciones: 6,
            dispositivosInstalados: [
                { nombre: 'Shelly (Luces/Válvulas)', cantidad: 70, categoria: 'iluminacion' },
                { nombre: 'Cámaras 4K', cantidad: 6, categoria: 'seguridad' },
                { nombre: 'Tablets Control', cantidad: 4, categoria: 'otros' },
                { nombre: 'Nodos WiFi Mesh', cantidad: 4, categoria: 'multimedia' },
                { nombre: 'Pasarela Modbus Daikin', cantidad: 1, categoria: 'climatizacion' }
            ],
            tecnologiasUtilizadas: [
                { nombre: 'Shelly', url: 'https://www.shelly.com', logo: 'assets/logos/shelly.png' },
                { nombre: 'Daikin VRV', url: 'https://www.daikin.es', logo: 'assets/logos/daikin.png' },
                { nombre: 'Home Assistant', url: 'https://www.home-assistant.io', logo: 'assets/logos/home-assistant.svg' },
                { nombre: 'Alexa', url: 'https://alexa.amazon.com', logo: 'assets/logos/alexa.png' },
                { nombre: 'WiFi Mesh', url: '', logo: 'assets/logos/wifi.png' }
            ],
            ahorroEnergetico: '40% (Clima Eficiente)',
            tiempoRespuesta: 'Realtime',
            satisfaccionCliente: '100%',
            fases: [
                { titulo: 'Despliegue Red Mesh', descripcion: 'Instalación de 4 nodos para cubrir las 4 plantas sin zonas muertas', duracion: '1 semana', completada: true },
                { titulo: 'Integración Shelly', descripcion: 'Instalación de 70 relés en cuadros y cajas para control total de luces y persianas', duracion: '2 semanas', completada: true },
                { titulo: 'Clima & Geolocalización', descripcion: 'Configuración pasarela Modbus Daikin y automatización "Coming Home" desde Madrid', duracion: '1 semana', completada: true }
            ],
            caracteristicas: [
                'Geolocalización avanzada (Madrid -> Huesca)',
                'Integración Modbus Industrial VRV',
                'Notificaciones con captura de cámara',
                'Tablets de control por planta'
            ],
            retos: [
                { reto: 'Cubrir 4 plantas con WiFi estable', solucion: 'Red Mesh profesional cableada entre nodos para máxima velocidad' },
                { reto: 'Unificar 120 dispositivos', solucion: 'Home Assistant como orquestador único con interfaz simplificada en tablets' }
            ]
        },
        {
            id: 'lavanderia-24h',
            slug: 'lavanderia-autowash',
            nombre: 'Gestión Integral Lavandería Autoservicio 24h',
            ubicacion: 'Zaragoza (Actur)',
            tipo: 'Local Comercial Desatendido',
            resumen: 'Automatización total 24/7. Seguridad activa con IA, control de accesos y gestión remota de vending.',
            descripcionCompleta: 'Transformación de un local comercial en un negocio 100% desatendido y seguro. El sistema integra cámaras con detección de humanos (IA en borde) que notifican intrusiones fuera de horario. La iluminación es astronómica (sigue al sol) y las persianas se gestionan en remoto. Como medida antisabotaje, la máquina de vending incorpora sensores de vibración Aqara que alertan de intentos de robo o vandalismo al instante.',
            imagenPrincipal: 'https://images.pexels.com/photos/8774367/pexels-photo-8774367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imagenes: [
                'https://images.pexels.com/photos/8774367/pexels-photo-8774367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ],
            fecha: 'Enero 2026',
            duracion: '3 semanas',
            presupuesto: '12.000€ - 15.000€',
            clienteNombre: 'Lavanderías Express S.L.',
            testimonioCliente: 'Desde que automatizamos, no he tenido que ir al local ni una vez por falsas alarmas. El sistema se paga solo.',
            valoracionEstrellas: 5,
            superficieM2: 120,
            habitaciones: 2,
            dispositivosInstalados: [
                { nombre: 'Cámaras Reolink POE', cantidad: 4, categoria: 'seguridad' },
                { nombre: 'NVR Frigate IA', cantidad: 1, categoria: 'seguridad' },
                { nombre: 'Sensor Vibración Aqara', cantidad: 2, categoria: 'seguridad' },
                { nombre: 'Persiana Shelly 2PM', cantidad: 1, categoria: 'otros' },
                { nombre: 'Iluminación Astronomica', cantidad: 8, categoria: 'iluminacion' }
            ],
            tecnologiasUtilizadas: [
                { nombre: 'Home Assistant', url: 'https://www.home-assistant.io', logo: 'assets/logos/home-assistant.svg' },
                { nombre: 'Reolink AI', url: 'https://reolink.com', logo: 'assets/logos/reolink.png' },
                { nombre: 'Shelly', url: 'https://www.shelly.com', logo: 'assets/logos/shelly.png' },
                { nombre: 'Aqara', url: 'https://www.aqara.com', logo: 'assets/logos/aqara_official.png' },
                { nombre: 'Ethernet POE', url: '', logo: '' }
            ],
            ahorroEnergetico: 'Seguridad 24/7',
            tiempoRespuesta: '< 1s',
            satisfaccionCliente: '100%',
            fases: [
                { titulo: 'Diseño de Seguridad', descripcion: 'Estudio de puntos ciegos y ubicación de sensores antisabotaje', duracion: '1 semana', completada: true },
                { titulo: 'Cableado Estructurado', descripcion: 'Instalación de cableado Ethernet CAT6 para cámaras POE y gestión de datos', duracion: '3 días', completada: true },
                { titulo: 'Automatización', descripcion: 'Programación de reglas horarias y alertas push a móvil', duracion: '1 semana', completada: true }
            ],
            caracteristicas: [
                'Detección de personas fuera de horario',
                'Sensor de impacto en vending',
                'Apertura remota de emergencia',
                'Iluminación automática solar',
                'Grabación local 24/7 sin cuotas nube'
            ],
            retos: [
                { reto: 'Falsas alarmas por movimiento', solucion: 'Uso de IA (Frigate) que distingue entre personas, gatos y sombras' },
                { reto: 'Seguridad en máquina de cambio', solucion: 'Sensores de vibración de alta sensibilidad con alerta prioritaria' }
            ]
        },
        {
            id: 'chalet-tesla',
            slug: 'chalet-tesla-airzone',
            nombre: 'Climatización Industrial y Carga EV',
            ubicacion: 'Zaragoza (Miralbueno)',
            tipo: 'Residencial Alto Standing',
            resumen: 'Gestión inteligente de excedentes: Prioridad dinámica entre Clima Toshiba y Carga Tesla.',
            descripcionCompleta: 'Integración avanzada de máquinas de conductos industriales Toshiba mediante pasarelas Airzone Aidoo Pro. El sistema lee el excedente solar en tiempo real desde el **inversor Tesla** y ejecuta un algoritmo de prioridad: primero pre-enfría la vivienda aprovechando la inercia térmica, y luego deriva la potencia restante al **Tesla Wall Connector** mediante Ethernet. Doble integración Tesla: inversor solar + cargador de vehículo.',
            imagenPrincipal: 'https://images.pexels.com/photos/9800009/pexels-photo-9800009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imagenes: [
                'https://images.pexels.com/photos/9800009/pexels-photo-9800009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ],
            fecha: 'Diciembre 2025',
            duracion: '4 semanas',
            presupuesto: '20.000€ - 25.000€',
            clienteNombre: 'Familia S.',
            testimonioCliente: 'El coche se carga "gratis" solo con el sol. La casa siempre está a 21º cuando llegamos y no hemos tocado el termostato en meses.',
            valoracionEstrellas: 5,
            superficieM2: 350,
            habitaciones: 5,
            dispositivosInstalados: [
                { nombre: 'Cargador Tesla Wall', cantidad: 1, categoria: 'energia' },
                { nombre: 'Pasarela Airzone Aidoo', cantidad: 3, categoria: 'climatizacion' },
                { nombre: 'Inversor Híbrido', cantidad: 1, categoria: 'energia' },
                { nombre: 'Lavadoras Conectadas', cantidad: 2, categoria: 'otros' }
            ],
            tecnologiasUtilizadas: [
                { nombre: 'Toshiba VRF', url: 'https://www.toshiba-aircon.co.uk', logo: 'assets/logos/toshiba.svg' },
                { nombre: 'Airzone Cloud', url: 'https://www.airzonecontrol.com', logo: 'assets/logos/airzone.svg' },
                { nombre: 'Tesla', url: 'https://www.tesla.com/es_es/', logo: 'assets/logos/tesla.png' },
                { nombre: 'Home Assistant', url: 'https://www.home-assistant.io', logo: 'assets/logos/home-assistant.svg' },
                { nombre: 'Ethernet Ind', url: '', logo: '' }
            ],
            ahorroEnergetico: '40% Solar',
            tiempoRespuesta: 'Realtime',
            satisfaccionCliente: '100%',
            fases: [
                { titulo: 'Integración Clima', descripcion: 'Conexión de pasarelas WiFi en máquinas de conductos', duracion: '1 semana', completada: true },
                { titulo: 'Gestión de Carga', descripcion: 'Cableado Ethernet a cargador y programación de script de excedentes', duracion: '1 semana', completada: true },
                { titulo: 'Puesta en Marcha', descripcion: 'Pruebas de carga dinámica y ajuste de curvas de confort', duracion: '1 semana', completada: true }
            ],
            caracteristicas: [
                'Algoritmo de prioridad de cargas',
                'Control de clima industrial por zonas',
                'Conectividad Ethernet para máxima fiabilidad',
                'Gestión de electrodomésticos según precio luz'
            ],
            retos: [
                { reto: 'Integrar máquinas industriales Toshiba', solucion: 'Uso de interfaces Airzone Aidoo Pro para control local total' },
                { reto: 'Optimizar carga de coche con nubes', solucion: 'Algoritmos suavizados que evitan arranques/paradas continuos del cargador' }
            ]
        },
        {
            id: 'casa-rural-asturias',
            slug: 'casa-rural-control-total',
            nombre: 'Control Remoto Segunda Vivienda',
            ubicacion: 'Asturias (Oviedo)',
            tipo: 'Casa Rural Inteligente',
            resumen: 'Confort y seguridad a distancia. Clima Daikin, deshumidificador automático y sensores de puerta Zigbee.',
            descripcionCompleta: 'Automatización integral de una segunda residencia para garantizar el confort antes de la llegada. El sistema permite encender la calefacción Daikin en remoto, monitorear la humedad para activar el deshumidificador automáticamente y recibir alertas de intrusión con foto (captura de cámara) si se detecta movimiento. Al abrir ventanas, el clima se apaga solo para no desperdiciar energía.',
            imagenPrincipal: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imagenes: [
                'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ],
            fecha: 'Noviembre 2025',
            duracion: '2 semanas',
            presupuesto: '8.000€ - 10.000€',
            clienteNombre: 'Javier M.',
            testimonioCliente: 'Llegar un viernes noche y que la casa esté a 21 grados y sin olor a cerrado es impagable. Además, estoy tranquilo sabiendo que si entra alguien me entero al segundo.',
            valoracionEstrellas: 5,
            superficieM2: 180,
            habitaciones: 4,
            dispositivosInstalados: [
                { nombre: 'Split Daikin WiFi', cantidad: 3, categoria: 'climatizacion' },
                { nombre: 'Sensor Puerta Zigbee', cantidad: 8, categoria: 'seguridad' },
                { nombre: 'Deshumidificador Smart', cantidad: 1, categoria: 'climatizacion' },
                { nombre: 'Cámaras Tapo Interior', cantidad: 2, categoria: 'seguridad' }
            ],
            tecnologiasUtilizadas: [
                { nombre: 'Daikin Onecta', url: 'https://www.daikin.eu', logo: 'assets/logos/daikin.png' },
                { nombre: 'Tapo (TP-Link)', url: 'https://www.tapo.com', logo: 'assets/logos/tapo.svg' },
                { nombre: 'Home Assistant', url: 'https://www.home-assistant.io', logo: 'assets/logos/home-assistant.svg' },
                { nombre: 'WiFi', url: '', logo: 'assets/logos/wifi.png' },
                { nombre: 'Zigbee', url: 'https://csa-iot.org', logo: 'assets/logos/zigbee.svg' }
            ],
            ahorroEnergetico: '30% (Corte auto)',
            tiempoRespuesta: 'Instantáneo',
            satisfaccionCliente: '100%',
            fases: [
                { titulo: 'Instalación Sensores', descripcion: 'Colocación de magnéticos en todas las ventanas y puertas', duracion: '2 días', completada: true },
                { titulo: 'Integración Clima', descripcion: 'Conexión de Daikin al WiFi y programación reglas de corte', duracion: '1 día', completada: true },
                { titulo: 'Lógica Deshumidificador', descripcion: 'Automatización basada en sensor de humedad (>60% ON)', duracion: '1 día', completada: true }
            ],
            caracteristicas: [
                'Corte automático clima al abrir ventana',
                'Control de humedad y olores',
                'Simulación de presencia con luces',
                ' Aviso con foto al móvil si hay intrusión'
            ],
            retos: [
                { reto: 'Gestionar humedad en casa cerrada meses', solucion: 'Automatización de deshumidificador Daikin que mantiene la casa "sana" sola' },
                { reto: 'Evitar consumo fantasma', solucion: 'Enchufes inteligentes que apagan termo y TV cuando no hay nadie' }
            ]
        },
        {
            id: 'taller-ia-zaragoza',
            slug: 'taller-ia-carga-zaragoza',
            nombre: 'Taller 4.0: IA y Carga EV',
            ubicacion: 'Zaragoza (Delicias)',
            tipo: 'Industrial / Electricidad',
            resumen: 'Seguridad perimetral con IA facial y gestión de flota eléctrica. Frigate NVR y cargadores V2C integrados.',
            descripcionCompleta: 'Modernización tecnológica de un taller de electricistas en el barrio de las Delicias. Se implementó un sistema de videovigilancia 4K con IA (Frigate) capaz de reconocer caras conocidas ("¿Ha estado Pepe hoy?") y buscar eventos por persona. Además, se instaló un control de acceso RFID que registra quién entra y cuándo, generando un log completo de eventos. Los cargadores V2C gestionados por Home Assistant permiten controlar costes y tiempos de carga de las furgonetas de empresa en tiempo real.',
            imagenPrincipal: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imagenes: [
                'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ],
            fecha: 'Febrero 2026',
            duracion: '1 mes',
            presupuesto: '15.000€ - 18.000€',
            clienteNombre: 'Instalaciones Eléctricas Delicias',
            testimonioCliente: 'Buscar en el vídeo "cuándo vino el proveedor" escribiendo su nombre es ciencia ficción. Y controlar los cargadores desde el móvil nos ahorra mucho lío.',
            valoracionEstrellas: 5,
            superficieM2: 500,
            habitaciones: 3,
            dispositivosInstalados: [
                { nombre: 'Cámaras Reolink 4K POE', cantidad: 6, categoria: 'seguridad' },
                { nombre: 'Servidor IA Frigate', cantidad: 1, categoria: 'seguridad' },
                { nombre: 'Cargador V2C Trydan', cantidad: 2, categoria: 'energia' },
                { nombre: 'Tablet Control Taller', cantidad: 1, categoria: 'otros' }
            ],
            tecnologiasUtilizadas: [
                { nombre: 'Frigate NVR', url: 'https://frigate.video', logo: 'assets/logos/frigate_text.png' },
                { nombre: 'Home Assistant', url: 'https://www.home-assistant.io', logo: 'assets/logos/home-assistant.svg' },
                { nombre: 'V2C', url: 'https://v2charge.com/es/', logo: 'assets/logos/v2c_real.png' },
                { nombre: 'Reolink 4K', url: 'https://reolink.com', logo: 'assets/logos/reolink.png' },
                { nombre: 'Ethernet POE', url: '', logo: '' }
            ],
            ahorroEnergetico: 'Control de costes',
            tiempoRespuesta: 'Realtime',
            satisfaccionCliente: '100%',
            fases: [
                { titulo: 'Cableado Red POE', descripcion: 'Despliegue de red gigabit para soportar flujo de vídeo 4K continuo', duracion: '1 semana', completada: true },
                { titulo: 'Servidor IA', descripcion: 'Configuración de Coral TPU y entrenamiento básico de caras', duracion: '3 días', completada: true },
                { titulo: 'Integración V2C', descripcion: 'Conexión de cargadores vía Modbus/WiFi a HA para gestión de potencia', duracion: '2 días', completada: true }
            ],
            caracteristicas: [
                'Búsqueda de vídeo por caras (Face Rec)',
                'Detección de matrículas (LPR)',
                'Gestión de potencia de carga dinámica',
                'Alertas de intrusión nocturna selectiva'
            ],
            retos: [
                { reto: 'Falsos positivos con herramientas/piezas', solucion: 'Máscaras de privacidad y ajuste fino de zonas de detección en Frigate' },
                { reto: 'Gestión de ancho de banda 4K', solucion: 'Subnet separada para videovigilancia para no saturar la red de oficina' }
            ]
        },
        {
            id: 'vivienda-autosuficiente-ia',
            slug: 'vivienda-autosuficiente-ia',
            nombre: 'Vivienda Autosuficiente con Voz Local',
            ubicacion: 'Zaragoza (Centro)',
            tipo: 'Residencial Premium',
            resumen: 'El hogar que te escucha. Integración total Schneider Wiser con gestión de excedentes solares y comandos de voz naturales.',
            descripcionCompleta: 'El pináculo de la integración domótica. Una vivienda que gestiona su propia energía: cuando la batería está llena, el sistema deriva excedentes al termo Ariston o climatiza la casa automáticamente. Todo controlado por una IA de voz avanzada que entiende contextos complejos como "Me voy de viaje 2 días", ajustando la calefacción para tener la casa lista a tu regreso preciso.',
            imagenPrincipal: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imagenes: [
                'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ],
            fecha: 'Marzo 2025',
            duracion: '3 semanas',
            presupuesto: '18.000€ - 22.000€',
            clienteNombre: 'Familia R.',
            testimonioCliente: 'Le digo a la casa que me voy fuera y ella sola apaga todo, activa la alarma y calcula cuándo encender la calefacción para mi vuelta. Es magia.',
            valoracionEstrellas: 5,
            superficieM2: 240,
            habitaciones: 4,
            dispositivosInstalados: [
                { nombre: 'Termostatos Schneider Wiser', cantidad: 6, categoria: 'climatizacion' },
                { nombre: 'Luces y Persianas Zigbee', cantidad: 18, categoria: 'iluminacion' },
                { nombre: 'Sensores (Fugas/Movim.)', cantidad: 5, categoria: 'seguridad' },
                { nombre: 'Altavoces Assist', cantidad: 3, categoria: 'multimedia' },
                { nombre: 'Inversor Solarman', cantidad: 1, categoria: 'energia' }
            ],
            tecnologiasUtilizadas: [
                { nombre: 'Schneider Wiser', url: 'https://www.se.com/es/es/', logo: 'assets/logos/schneider.svg' },
                { nombre: 'Home Assistant Assist', url: 'https://www.home-assistant.io/voice_control/', logo: 'assets/logos/home-assistant.svg' },
                { nombre: 'Solarman PV', url: 'https://www.solarmanpv.com/', logo: 'assets/logos/solarman.png' },
                { nombre: 'Tuya Smart', url: 'https://www.tuya.com/', logo: 'assets/logos/tuya.png' },
                { nombre: 'Ariston Net', url: 'https://www.ariston.com/es-es/', logo: 'assets/logos/ariston_real.png' },
                { nombre: 'Daikin', url: 'https://www.daikin.es/', logo: 'assets/logos/daikin.png' }
            ],
            ahorroEnergetico: '35-40% Ahorro Energético',
            tiempoRespuesta: 'Voz Local < 0.5s',
            satisfaccionCliente: '100%',
            fases: [
                { titulo: 'Integración Solar', descripcion: 'Lectura de inversor Solarman para lógica de derivación de excedentes', duracion: '3 días', completada: true },
                { titulo: 'Seguridad Técnica', descripcion: 'Despliegue de sensores de fugas de agua con corte de suministro automático', duracion: '2 días', completada: true },
                { titulo: 'Wiser & Assist', descripcion: 'Configuración de voz local (sin nube) para control de clima y TV', duracion: '1 semana', completada: true }
            ],
            caracteristicas: [
                'Control por voz 100% privado (Assist)',
                'Corte de agua automático si hay fugas',
                'Gestión predictiva de confort vuelta a casa',
                'Integración TV: "Pon Netflix" al detectar sofá'
            ],
            retos: [
                { reto: 'Unificar marcas cerradas', solucion: 'Home Assistant como cerebro central orquestando WiFi y Zigbee en una sola app' },
                { reto: 'Maximizar batería solar', solucion: 'Algoritmo que solo gasta energía en confort térmico cuando la batería rebosa' }
            ]
        }
    ];

    constructor() { }

    getProyectos(): Proyecto[] {
        return this.proyectos;
    }

    getProyectoBySlug(slug: string): Proyecto | undefined {
        return this.proyectos.find(p => p.slug === slug);
    }

    getProyectoById(id: string): Proyecto | undefined {
        return this.proyectos.find(p => p.id === id);
    }
}
