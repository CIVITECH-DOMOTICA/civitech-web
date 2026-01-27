import { Injectable } from '@angular/core';
import { UseCase } from '../models/use-case.model';

@Injectable({
    providedIn: 'root'
})
export class UseCasesService {

    private useCases: UseCase[] = [
        {
            id: '1',
            slug: 'optimizacion-solar',
            titulo: 'Optimización Solar y Excedentes (Vertido Cero)',
            subtitulo: '¿Tienes placas solares? No regales tu energía',
            descripcion: 'Nuestro sistema detecta cuando hay excedente y enciende automáticamente el termo o el aire acondicionado según la temperatura exterior, maximizando tu ahorro real.',
            descripcionDetallada: 'Sistema inteligente de gestión de excedentes fotovoltaicos que maximiza el autoconsumo. Detecta en tiempo real cuándo tienes excedente solar y lo aprovecha automáticamente calentando el termo, activando el aire acondicionado, cargando vehículos eléctricos o activando otros consumos según tus prioridades configuradas.',
            imagen: '/assets/images/usecase-solar.png',
            icono: 'fa-solar-panel',
            categoria: 'Energía',
            ahorroEstimado: '30-50% en factura eléctrica',
            tiempoImplementacion: '1-2 días',
            roi: '12-18 meses',
            beneficios: [
                'Aprovechamiento máximo de energía solar producida',
                'Reducción drástica de vertido a red (y por tanto penalizaciones)',
                'Calentamiento de agua "gratis" con excedente solar',
                'Climatización optimizada sin costes adicionales',
                'Carga inteligente de vehículo eléctrico',
                'Informes de producción vs consumo en tiempo real'
            ],
            casosUso: [
                'Viviendas con instalación fotovoltaica',
                'Chalets con piscina y termo eléctrico',
                'Hogares con vehículo eléctrico',
                'Instalaciones con baterías de almacenamiento'
            ],
            tecnologias: [
                'Home Assistant',
                'Shelly EM',
                'Victron Energy',
                'MQTT',
                'Node-RED'
            ],
            ejemplos: [
                {
                    titulo: 'Chalet en Zaragoza con 8kW fotovoltaicos',
                    descripcion: 'Cliente con excedentes de hasta 5kW en verano que iban a la red sin aprovechar.',
                    resultado: 'Tras la instalación, el termo eléctrico se calienta automáticamente con el excedente, ahorrando 120€/mes de media.'
                },
                {
                    titulo: 'Piso con coche eléctrico',
                    descripcion: 'Propietario que cargaba el coche por la noche con tarifa cara.',
                    resultado: 'Ahora el sistema carga el coche cuando hay excedente solar. Reducción del 80% en coste de carga.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Funciona con cualquier marca de placas solares?',
                    respuesta: 'Sí, el sistema es agnóstico al fabricante. Solo necesitamos medir la producción y el consumo.'
                },
                {
                    pregunta: '¿Qué pasa si no hay suficiente excedente?',
                    respuesta: 'El sistema solo activa los dispositivos cuando hay excedente suficiente. No consumirás de la red si no lo programas así.'
                },
                {
                    pregunta: '¿Puedo priorizar qué dispositivos se activan primero?',
                    respuesta: 'Absolutamente. Configuramos tus prioridades: primero termo, luego clima, luego vehículo, etc.'
                }
            ]
        },
        {
            id: '2',
            slug: 'climatizacion-inteligente',
            titulo: 'Climatización Inteligente y Predictiva',
            subtitulo: 'Tu casa preparada antes de llegar',
            descripcion: 'El sistema aprende de tus hábitos y apaga la calefacción si se abre una ventana o si no hay nadie en casa, evitando derroches innecesarios en tu factura.',
            descripcionDetallada: 'Control inteligente de climatización con aprendizaje automático. El sistema aprende cuándo llegas a casa y precalienta/enfría el hogar. Detecta ventanas abiertas y reduce o apaga el sistema automáticamente. Gestiona zonas independientes y se integra con la previsión meteorológica.',
            imagen: '/assets/images/usecase-climate.png',
            icono: 'fa-house-chimney',
            categoria: 'Confort',
            ahorroEstimado: '25-40% en climatización',
            tiempoImplementacion: '1 día',
            roi: '8-15 meses',
            beneficios: [
                'Casa siempre a temperatura ideal cuando llegas',
                'Detección automática de ventanas abiertas',
                'Gestión por zonas (habitaciones independientes)',
                'Apagado automático cuando no hay nadie',
                'Integración con meteorología para anticipación',
                'Control por horarios y presencia'
            ],
            casosUso: [
                'Viviendas con climatización central',
                'Hogares con suelo radiante',
                'Apartamentos con splits',
                'Chalets con múltiples zonas'
            ],
            tecnologias: [
                'Nest Thermostat',
                'Tado',
                'Sensores de ventana Zigbee',
                'Home Assistant',
                'Integración API meteorológica'
            ],
            ejemplos: [
                {
                    titulo: 'Piso en Castellón con suelo radiante',
                    descripcion: 'Cliente gastaba mucho en gas porque el suelo radiante estaba encendido todo el día.',
                    resultado: 'Sistema aprendió los horarios y precalienta 30min antes de llegar. Ahorro del 35% en gas.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Funciona con mi termostato actual?',
                    respuesta: 'En la mayoría de casos sí. Evaluamos tu instalación y buscamos compatibilidad o te recomendamos el mejor termostato inteligente.'
                },
                {
                    pregunta: '¿Cómo sabe cuándo llego a casa?',
                    respuesta: 'Puedes usar geolocalización del móvil, sensores de presencia o simplemente horarios configurables.'
                }
            ]
        },
        {
            id: '3',
            slug: 'persianas-automaticas',
            titulo: 'Persianas y Toldos Automáticos',
            subtitulo: 'Gestión energética pasiva inteligente',
            descripcion: 'Aprovecha el sol en invierno y protégete del calor en verano. Automatiza según la posición del sol o el pronóstico del tiempo.',
            descripcionDetallada: 'Automatización inteligente de persianas, toldos y cortinas según posición solar, temperatura y meteorología. El sistema calcula la posición óptima para maximizar ganancia solar en invierno y protección en verano, reduciendo dramáticamente la necesidad de climatización.',
            imagen: '/assets/images/usecase-blinds.png',
            icono: 'fa-blinds',
            categoria: 'Eficiencia',
            ahorroEstimado: '15-25% en clima',
            tiempoImplementacion: '0.5-1 día',
            roi: '24-36 meses',
            beneficios: [
                'Aprovechamiento de calor solar en invierno',
                'Protección automática en verano',
                'Ahorro en climatización sin consumo activo',
                'Control por horario y posición solar',
                'Integración con alarma (simulación presencia)',
                'Protección ante viento fuerte (sensores)'
            ],
            casosUso: [
                'Viviendas con orientación sur (mucho sol)',
                'Áticos y últimas plantas',
                'Chalets con grandes ventanales',
                'Locales comerciales con escaparates'
            ],
            tecnologias: [
                'Motores Somfy RTS/IO',
                'Control Zigbee/Z-Wave',
                'Sensores de viento y luminosidad',
                'Home Assistant',
                'Cálculo astronómico de posición solar'
            ],
            ejemplos: [
                {
                    titulo: 'Ático en Zaragoza orientación sur',
                    descripcion: 'Cliente con temperatura de 35°C en verano dentro de casa por ventanales.',
                    resultado: 'Toldos se despliegan automáticamente a las 14h. Reducción de 8°C en temperatura interior.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Puedo seguir usando mis persianas manualmente?',
                    respuesta: 'Por supuesto. La automatización es asistencia, siempre puedes subir/bajar manualmente.'
                },
                {
                    pregunta: '¿Qué pasa si hay tormenta?',
                    respuesta: 'Con sensores de viento, el toldo se recoge automáticamente para evitar daños.'
                }
            ]
        },
        {
            id: '4',
            slug: 'seguridad-simulacion',
            titulo: 'Seguridad y Simulación de Presencia',
            subtitulo: 'Protección inteligente 24/7',
            descripcion: 'Vigila tu hogar y tus mascotas desde cualquier lugar. Si detecta algo extraño, puede avisarte, grabar y hasta simular que hay gente en casa.',
            descripcionDetallada: 'Sistema completo de seguridad con cámaras IP, sensores de movimiento, apertura y notificaciones inteligentes. Incluye simulación de presencia realista cuando estás de vacaciones y monitorización de mascotas.',
            imagen: '/assets/images/usecase-security.png',
            icono: 'fa-shield-halved',
            categoria: 'Seguridad',
            ahorroEstimado: 'Tranquilidad',
            tiempoImplementacion: '1-2 días',
            roi: 'Invaluable',
            beneficios: [
                'Vigilancia 24/7 desde cualquier lugar',
                'Notificaciones instantáneas ante intrusión',
                'Grabación automática de eventos',
                'Simulación presencia realista (vacaciones)',
                'Detección de humo/agua/gas',
                'Monitorización de mascotas'
            ],
            casosUso: [
                'Segundas residencias',
                'Hogares con mascotas',
                'Viviendas en zonas aisladas',
                'Familias con niños pequeños'
            ],
            tecnologias: [
                'Cámaras Reolink/Hikvision',
                'Sensores Zigbee',
                'Frigate NVR',
                'Notificaciones móviles',
                'Detección IA de personas'
            ],
            ejemplos: [
                {
                    titulo: 'Casa rural en Teruel',
                    descripcion: 'Propietario preocupado por robos en vivienda vacía entre semana.',
                    resultado: 'Sistema detecta movimiento y envía foto. Simulación de presencia disuade intrusos. Sin incidentes en 2 años.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Las cámaras graban siempre?',
                    respuesta: 'Configurable. Pueden grabar solo ante eventos o 24/7. Almacenamiento local o en nube.'
                },
                {
                    pregunta: '¿Funciona sin internet?',
                    respuesta: 'Sí. Las grabaciones son locales. Solo las notificaciones por móvil requieren internet.'
                }
            ]
        },
        {
            id: '5',
            slug: 'control-fugas',
            titulo: 'Control de Fugas y Consumos',
            subtitulo: 'Evita inundaciones y sustos',
            descripcion: 'Monitoriza en tiempo real tu consumo de luz, agua y gas. Si hay una fuga de agua, el sistema puede cortar la llave principal automáticamente.',
            descripcionDetallada: 'Monitorización completa de servicios con detección de fugas de agua, consumos anómalos de electricidad y gas, y corte automático en caso de emergencia. Dashboard en tiempo real de todos los consumos.',
            imagen: '/assets/images/usecase-leak.png',
            icono: 'fa-droplet-slash',
            categoria: 'Prevención',
            ahorroEstimado: 'Evita daños >5.000€',
            tiempoImplementacion: '1 día',
            roi: '1 fuga evitada',
            beneficios: [
                'Detección inmediata de fugas',
                'Corte automático de suministro',
                'Monitorización de consumo en tiempo real',
                'Alertas de consumos anómalos',
                'Histórico de consumos',
                'Detección de electroválvulas abiertas'
            ],
            casosUso: [
                'Pisos en comunidades',
                'Segundas residencias',
                'Hogares con ancianos',
                'Locales comerciales'
            ],
            tecnologias: [
                'Sensores de agua Zigbee',
                'Electroválvulas',
                'Medidores de caudal',
                'Shelly EM',
                'Home Assistant'
            ],
            ejemplos: [
                {
                    titulo: 'Piso en comunidad',
                    descripcion: 'Fuga en baño durante vacaciones. Vecinos inundados.',
                    resultado: 'Con el sistema, se detecta la fuga en 30 segundos y se corta el agua automáticamente. Daños evitados: 8.000€.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Dónde se colocan los sensores de agua?',
                    respuesta: 'Bajo fregadero, lavadora, lavavajillas, baño, termo... cualquier punto de riesgo.'
                },
                {
                    pregunta: '¿Puedo ver mi consumo en tiempo real?',
                    respuesta: 'Sí, en la app ves gráficas de consumo por hora/día/mes de agua, luz y gas.'
                }
            ]
        },
        {
            id: '6',
            slug: 'iluminacion-diseno',
            titulo: 'Iluminación de Diseño y Eficiencia',
            subtitulo: 'Escenas para cada momento de tu vida',
            descripcion: 'Crea escenas para cada momento: cine, cena o relax. Todas tus luces se apagan solas cuando te vas, asegurando que nunca gastas un vatio de más.',
            descripcionDetallada: 'Sistema de iluminación inteligente con creación de escenas, control por zonas, automatización por presencia y horario, y apagado inteligente. Eficiencia energética sin renunciar al diseño y ambiente.',
            imagen: '/assets/images/usecase-lighting.png',
            icono: 'fa-lightbulb',
            categoria: 'Confort + Eficiencia',
            ahorroEstimado: '40-60% en iluminación',
            tiempoImplementacion: '0.5-1 día',
            roi: '12-24 meses',
            beneficios: [
                'Escenas personalizadas (Cine, Cena, Lectura, Fiesta)',
                'Control individual por zonas',
                'Apagado automático al salir',
                'Ajuste de intensidad y temperatura color',
                'Control por voz',
                'Simulación de amanecer/atardecer'
            ],
            casosUso: [
                'Salones con múltiples ambientes',
                'Dormitorios (despertar progresivo)',
                'Cocinas y comedores',
                'Terrazas y exteriores'
            ],
            tecnologias: [
                'Philips Hue',
                'IKEA Trådfri',
                'Zigbee',
                'Interruptores inteligentes Shelly',
                'Home Assistant'
            ],
            ejemplos: [
                {
                    titulo: 'Salón con home cinema',
                    descripcion: 'Cliente quería ambiente de cine sin levantarse a apagar luces.',
                    resultado: 'Escena "Cine" apaga todo excepto LED tenue detrás de TV. Activable por voz o un botón.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Necesito cambiar todas mis bombillas?',
                    respuesta: 'No necesariamente. Podemos usar interruptores inteligentes que controlen tus bombillas actuales.'
                },
                {
                    pregunta: '¿Puedo seguir usando los interruptores normales?',
                    respuesta: 'Sí. Los interruptores inteligentes funcionan como los tradicionales + funciones Smart.'
                }
            ]
        },
        {
            id: '7',
            slug: 'control-unificado',
            titulo: 'Tu Hogar, Una Sola App (Local)',
            subtitulo: 'Centraliza todo, máxima privacidad',
            descripcion: 'Se acabó tener 10 apps. Centralizamos todo en un panel intuitivo que funciona sin internet. Máxima privacidad, máxima velocidad.',
            descripcionDetallada: 'Hub central local que unifica todos los dispositivos de tu hogar en una sola interfaz. Funciona completamente offline para máxima privacidad y velocidad. Integración con +1000 marcas diferentes.',
            imagen: '/assets/images/usecase-unified.png',
            icono: 'fa-tablet-screen-button',
            categoria: 'Control Central',
            ahorroEstimado: 'Tiempo + Comodidad',
            tiempoImplementacion: 'Incluido en instalación',
            roi: 'Inmediato (calidad de vida)',
            beneficios: [
                'Una sola app para todo',
                'Control 100% local (sin internet)',
                'Máxima privacidad (datos en tu casa)',
                'Velocidad instantánea',
                'Compatible con +1000 marcas',
                'Personalización total del dashboard'
            ],
            casosUso: [
                'Cualquier vivienda con >3 dispositivos',
                'Usuarios preocupados por privacidad',
                'Hogares con múltiples marcas',
                'Instalaciones complejas'
            ],
            tecnologias: [
                'Home Assistant',
                'MQTT',
                'Zigbee2MQTT',
                'Node-RED',
                'Lovelace UI'
            ],
            ejemplos: [
                {
                    titulo: 'Piso con 8 marcas diferentes',
                    descripcion: 'Cliente tenía: Philips Hue, Nest, Xiaomi, Sonos, Ring, Roomba... 6 apps.',
                    resultado: 'Todo unificado en Home Assistant. Una sola app, un solo dashboard. Simplificación total.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Qué pasa si se va internet?',
                    respuesta: 'Tu sistema sigue funcionando al 100%. Solo pierdes notificaciones remotas.'
                },
                {
                    pregunta: '¿Mis datos van a la nube?',
                    respuesta: 'No. Todo se procesa localmente en un servidor en tu casa. Máxima privacidad.'
                },
                {
                    pregunta: '¿Puedo acceder desde fuera de casa?',
                    respuesta: 'Sí, mediante VPN segura o acceso cifrado configurado por nosotros.'
                }
            ]
        },
        {
            id: '8',
            slug: 'carga-vehiculo-electrico',
            titulo: 'Carga de Vehículo Eléctrico Inteligente',
            subtitulo: 'Tu coche listo por la mañana, tu factura bajo control',
            descripcion: 'Olvídate de "enchufar y rezar". El sistema carga tu coche solo en las horas más baratas o exclusivamente con el excedente de tus placas solares. Integración total con tu cargador.',
            descripcionDetallada: 'Gestión inteligente del punto de carga de tu vehículo eléctrico (EV). El sistema modula la potencia de carga dinámicamente para no sobrepasar tu potencia contratada (evitando que salten los plomos) y prioriza la carga con energía solar excedente o tarifas valle super reducidas.',
            imagen: '/assets/images/usecase-ev-charging.png',
            icono: 'fa-charging-station',
            categoria: 'Sostenibilidad',
            ahorroEstimado: '70-90% en coste de combustible',
            tiempoImplementacion: '1 día',
            roi: '6-12 meses',
            beneficios: [
                'Carga 100% solar (Gratis)',
                'Carga automática en horario valle',
                'Protección contra sobrecarga de la casa',
                'Integración con cualquier inversor solar',
                'Histórico de costes de carga',
                'Aviso si te olvidas de enchufarlo'
            ],
            casosUso: [
                'Propietarios de Tesla/EV',
                'Chalets con fotovoltaica',
                'Garajes comunitarios con poca potencia',
                'Flotas de empresa'
            ],
            tecnologias: [
                'Wallbox / V2C / Tesla Gen3',
                'OCPP Protocol',
                'Home Assistant Energy',
                'Shelly EM (medición)',
                'Modbus TCP'
            ],
            ejemplos: [
                {
                    titulo: 'Tesla Model 3 + 5kW Solar',
                    descripcion: 'Cliente quería cargar el coche "solo con el sol".',
                    resultado: 'Sistema configurado para iniciar carga solo cuando sobra >1.5kW. En 6 meses, 12.000km recorridos por 0€.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Necesito un cargador específico?',
                    respuesta: 'Recomendamos cargadores "Smart" con protocolo OCPP o Modbus, pero podemos inteligente cualquier enchufe hasta cierto punto.'
                },
                {
                    pregunta: '¿Si necesito cargar rápido urgentemente?',
                    respuesta: 'Tienes un botón "Modo Boost" en la app que ignora el ahorro y carga a máxima potencia inmediatamente.'
                }
            ]
        },
        {
            id: '9',
            slug: 'gestion-electrodomesticos',
            titulo: 'Gestión Inteligente de Electrodomésticos',
            subtitulo: 'Tus aparatos trabajan cuando la luz es gratis',
            descripcion: 'La lavadora se pone sola cuando hay sol. El lavavajillas termina justo cuando llegas. Recibe notificaciones si te dejas la puerta del frigo abierta.',
            descripcionDetallada: 'Automatización de electrodomésticos de gran consumo. No necesitas comprar aparatos "Smart" carísimos; nosotros los hacemos inteligentes. Monitorización de consumo ciclo a ciclo y avisos de mantenimiento preventivo.',
            imagen: '/assets/images/usecase-appliances.png',
            icono: 'fa-blender',
            categoria: 'Ahorro',
            ahorroEstimado: '150-200€ anuales',
            tiempoImplementacion: '2-3 horas',
            roi: 'Inmediato',
            beneficios: [
                'Inicio automático por excedente solar',
                'Aviso de "Lavadora Terminada" en el móvil/altavoz',
                'Detección de filtro sucio / avería',
                'Apagado total de Standby',
                'Control parental de TV/Consolas',
                'Alertas de puerta abierta (frigorífico)'
            ],
            casosUso: [
                'Familias numerosas',
                'Viviendas con tarifa horaria',
                'Electrodomésticos antiguos (hacerlos smart)',
                'Apartamentos de alquiler (control uso)'
            ],
            tecnologias: [
                'Enchufes con medición de consumo',
                'Sensor de vibración (para saber si terminó)',
                'Sensor de contacto (puertas)',
                'Home Assistant Automation',
                'Notificaciones Alexa/Google'
            ],
            ejemplos: [
                {
                    titulo: 'Lavadora "vieja" inteligente',
                    descripcion: 'Lavadora de 10 años que no tiene WiFi ni app.',
                    resultado: 'Con un enchufe inteligente de 15€, ahora avisa por los altavoces de la casa: "La ropa está limpia, tiéndela".'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Vale para mi lavadora de hace 8 años?',
                    respuesta: 'Sí. Si tiene botón físico o retoma el programa al volver la luz, es perfecta para automatizar.'
                },
                {
                    pregunta: '¿Realmente ahorra dinero?',
                    respuesta: 'Mover los consumos fuertes a horas valle o solares es la forma #1 de reducir la factura eléctrica.'
                }
            ]
        },
        {
            id: '10',
            slug: 'riego-inteligente',
            titulo: 'Jardín y Riego Inteligente Predictivo',
            subtitulo: 'Un jardín verde que no derrocha agua',
            descripcion: '¿Va a llover mañana? El riego no se activa hoy. Ahorra agua y cuida tus plantas con sensores de humedad en tierra real.',
            descripcionDetallada: 'Sistema de riego avanzado que consulta la previsión meteorológica local y mide la humedad real del suelo antes de regar. Divide tu jardín en zonas (césped, goteo, macetas) con necesidades hídricas diferentes. Evita hongos por exceso de riego.',
            imagen: '/assets/images/usecase-garden.png',
            icono: 'fa-seedling',
            categoria: 'Exterior',
            ahorroEstimado: '30-50% en agua',
            tiempoImplementacion: '1 día',
            roi: '1 verano',
            beneficios: [
                'Ajuste dinámico según lluvia/viento/calor',
                'Riego secuencial (mantiene presión)',
                'Detección de tubería rota',
                'Control de iluminación exterior',
                'Gestión de depuradora piscina',
                'Calendario anual automático'
            ],
            casosUso: [
                'Chalets con jardín',
                'Terrazas urbanas con macetas',
                'Segundas residencias',
                'Huertos domésticos'
            ],
            tecnologias: [
                'Controladores de electroválvulas',
                'Sensores Mi Flora / humedad suelo',
                'Integración AEMET/OpenWeather',
                'Zigbee de largo alcance',
                'Home Assistant Garden'
            ],
            ejemplos: [
                {
                    titulo: 'Jardín en zona ventosa',
                    descripcion: 'El riego por aspersión con viento fuerte desperdiciaba el 60% del agua.',
                    resultado: 'Si viento > 15km/h, el sistema pospone el riego hasta que el viento pare.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Funciona con goteo y aspersores?',
                    respuesta: 'Sí, controlamos circuitos independientes. Cada uno con su lógica (el césped necesita más agua que los cactus).'
                },
                {
                    pregunta: '¿Tengo que tirar cables al jardín?',
                    respuesta: 'Generalmente no. Usamos controladores a pilas de larga duración o aprovechamos arquetas existentes.'
                }
            ]
        },
        {
            id: '11',
            slug: 'home-cinema',
            titulo: 'Experiencia Home Cinema Total',
            subtitulo: 'Siente la magia del cine con un solo botón',
            descripcion: 'Pulsas "Ver Película": las luces bajan suavemente, las persianas se cierran, la TV se enciende, el sonido se ajusta. Solo te faltan las palomitas.',
            descripcionDetallada: 'Integración total de audio, vídeo e iluminación. Creamos la atmósfera perfecta eliminando la necesidad de usar 4 mandos a distancia. Control unificado de Smart TV, Proyector, Apple TV, Amplificador y Luces.',
            imagen: '/assets/images/usecase-cinema.png',
            icono: 'fa-film',
            categoria: 'Entretenimiento',
            ahorroEstimado: 'Confort Premium',
            tiempoImplementacion: '4-6 horas',
            roi: 'Cada noche de peli',
            beneficios: [
                'Un solo mando para todo',
                'Escenas inmersivas (luces sincronizadas)',
                'Control por voz ("Pon Netflix")',
                'Gestión multiroom de audio',
                'Pausa automática si llaman al timbre',
                'Modo "No molestar" en notificaciones'
            ],
            casosUso: [
                'Salones multimedia',
                'Salas de cine dedicadas',
                'Gamers (Escena "Juego")',
                'Amantes de la música'
            ],
            tecnologias: [
                'Logitech Harmony / Broadlink',
                'Philips Hue Sync',
                'Sonos / Denon / Yamaha',
                'Android TV / Apple TV / WebOS',
                'Home Assistant Media'
            ],
            ejemplos: [
                {
                    titulo: 'La Pausa Inteligente',
                    descripcion: 'Al pausar la película para ir al baño, las luces de pasillo se encienden tenues al 20%.',
                    resultado: 'Al darle a Play de nuevo, todo se apaga suavemente. Magia pura.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Necesito una TV especial?',
                    respuesta: 'Cualquier Smart TV moderna sirve. Si es antigua, le ponemos un Chromecast/FireTV y listo.'
                },
                {
                    pregunta: '¿Es compatible con proyectores?',
                    respuesta: 'Sí, e incluso podemos automatizar la bajada de la pantalla motorizada.'
                }
            ]
        },
        {
            id: '12',
            slug: 'cuidado-mascotas',
            titulo: 'Cuidado y Monitorización de Mascotas',
            subtitulo: 'Tranquilidad cuando ellos se quedan solos',
            descripcion: 'Vigila que estén bien, háblales por la cámara y asegúrate de que comen y beben. Climatización automática si hace mucho calor para ellos.',
            descripcionDetallada: 'Ecosistema pensado para el bienestar animal. Dispensadores de comida inteligentes, fuentes de agua monitorizadas, cámaras con IA que detectan ladridos/maullidos y control de temperatura para evitar golpes de calor.',
            imagen: '/assets/images/usecase-pets.png',
            icono: 'fa-paw',
            categoria: 'Cuidado',
            ahorroEstimado: 'Bienestar animal',
            tiempoImplementacion: '2-4 horas',
            roi: 'Salud de tu mascota',
            beneficios: [
                'Alimentación automática programada',
                'Aviso si falta agua en la fuente',
                'Cámara con detección de mascota',
                'Aviso de ladridos continuos',
                'Encendido de AC si Tª > 28ºC',
                'Luces nocturnas si se hace tarde'
            ],
            casosUso: [
                'Dueños que trabajan fuera',
                'Viajes de fin de semana',
                'Mascotas con dieta estricta',
                'Animales mayores o enfermos'
            ],
            tecnologias: [
                'Cámaras con Audio Bidireccional',
                'Comederos WiFi (Tuya/Xiaomi)',
                'Sensores de temperatura',
                'Home Assistant',
                'Detección de sonido IA'
            ],
            ejemplos: [
                {
                    titulo: 'Golpe de calor evitado',
                    descripcion: 'Ola de calor en Zaragoza. El perro estaba en casa.',
                    resultado: 'La temperatura subió a 29ºC. El sistema avisó al dueño y activó el Aire Acondicionado remotamente.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Puedo darles de comer desde el móvil?',
                    respuesta: 'Sí, pulsas un botón y el dispensador suelta una ración exacta. Puedes verles comer por la cámara.'
                },
                {
                    pregunta: '¿Funciona con gatos?',
                    respuesta: 'Ideal para gatos (areneros inteligentes, fuentes) y perros.'
                }
            ]
        },
        {
            id: '13',
            slug: 'cuidado-mayores',
            titulo: 'Asistencia Activa para Mayores (AAM)',
            subtitulo: 'Independencia para ellos, paz mental para ti',
            descripcion: 'Sistema no intrusivo que aprende sus rutinas. Si no hay movimiento en la cocina a la hora del desayuno habitual, te avisa. Detección de caídas y botón SOS.',
            descripcionDetallada: 'Solución de teleasistencia avanzada sin cuotas mensuales. Basada en sensores de movimiento y apertura (no cámaras, para preservar privacidad). Detecta anomalías en patrones de vida: falta de movimiento, puerta de calle abierta a deshoras, baño demasiado largo (posible caída), etc.',
            imagen: '/assets/images/usecase-seniors.png',
            icono: 'fa-user-shield',
            categoria: 'Asistencia',
            ahorroEstimado: 'Alternativa a residencia',
            tiempoImplementacion: '1 día',
            roi: 'Seguridad familiar',
            beneficios: [
                'Privacidad total (sin cámaras)',
                'Detección de caídas (radar mmWave)',
                'Alertas de inactividad anómala',
                'Monitorización de medicación (cajón)',
                'Botones de pánico inalámbricos',
                'Iluminación automática nocturna (evita caídas)'
            ],
            casosUso: [
                'Personas mayores viviendo solas',
                'Usuarios con movilidad reducida',
                'Recuperaciones post-operatorias',
                'Familias preocupadas'
            ],
            tecnologias: [
                'Radares presencia mmWave (Aqara FP2)',
                'Sensores puerta/movimiento',
                'Botones Zigbee SOS',
                'Notificaciones Telegram/WhatsApp',
                'Home Assistant Health'
            ],
            ejemplos: [
                {
                    titulo: 'La rutina del café',
                    descripcion: 'La abuela siempre va a la cocina entre 8:00 y 9:00.',
                    resultado: 'Si son las 9:15 y no ha habido movimiento en cocina, el sistema envía alerta crítica a los hijos.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿Necesitan llevar una pulsera?',
                    respuesta: 'No necesariamente. El sistema funciona con sensores ambientales en la casa. No requiere acción por su parte.'
                },
                {
                    pregunta: '¿Necesitan internet?',
                    respuesta: 'Es recomendable para enviarte las alertas, pero el sistema local (luces, avisos sonoros) funciona sin internet.'
                }
            ]
        },
        {
            id: '14',
            slug: 'gestion-red-wifi',
            titulo: 'Gestión Avanzada de Red y WiFi',
            subtitulo: 'WiFi que vuela, seguro y en cada rincón',
            descripcion: 'Se acabaron los puntos muertos y el lag. Priorizamos tu trabajo sobre la consola de los niños. Red de invitados aislada y bloqueo de publicidad en toda la casa.',
            descripcionDetallada: 'Auditoría completa y despliegue de infraestructura de red profesional. Instalamos puntos de acceso WiFi 6 Mesh, cableado estructurado certificado y Firewall avanzado para proteger tus dispositivos IoT. Incluimos gestión de ancho de banda (QoS) para priorizar lo importante, bloqueo de publicidad en toda la red y configuración de tu propia Nube Privada (NAS) para guardar tus fotos y archivos sin pagar suscripciones.',
            imagen: '/assets/images/usecase-wifi.png',
            icono: 'fa-wifi',
            categoria: 'Infraestructura',
            ahorroEstimado: 'Suscripciones Cloud y Productividad',
            tiempoImplementacion: '1-3 días',
            roi: 'Seguridad y Privacidad',
            beneficios: [
                'Cobertura 100% garantizada (Mesh WiFi 6)',
                'Bloqueador de anuncios en toda la casa (AdGuard/Pi-hole)',
                'Nube Privada (NAS): Tus fotos y datos en tu casa, accesibles desde el móvil',
                'Red de invitados aislada (seguridad total)',
                'Priorización inteligente (QoS) para Videollamadas',
                'VPN WireGuard: Accede a tu red como si estuvieras en casa'
            ],
            casosUso: [
                'Teletrabajadores que necesitan estabilidad',
                'Familias que quieren dejar de pagar Google/iCloud (NAS)',
                'Casas grandes o con muros gruesos',
                'Eliminar publicidad en Smart TVs y móviles'
            ],
            tecnologias: [
                'Unifi Ubiquiti / Mikrotik',
                'Synology / TrueNAS',
                'AdGuard Home',
                'WiFi 6 / 6E Mesh',
                'VLANs de seguridad'
            ],
            ejemplos: [
                {
                    titulo: 'Nube Privada y Sin Anuncios',
                    descripcion: 'Cliente pagaba 30€/mes en nubes y sufría anuncios en la TV.',
                    resultado: 'Instalamos un NAS (ahorro recurrente) y un bloqueador de red. Navegación limpia y datos bajo su control.'
                }
            ],
            faqs: [
                {
                    pregunta: '¿El bloqueador, quita los anuncios de YouTube?',
                    respuesta: 'Reduce el 90% de la publicidad web y rastro, aunque algunos anuncios de YouTube integrados son difíciles de bloquear por DNS.'
                },
                {
                    pregunta: '¿Puedo ver las fotos del NAS desde 4G fuera de casa?',
                    respuesta: 'Sí, configuramos acceso seguro (VPN o Proxy Inverso) para que tengas tu propia nube tipo Google Photos pero privada.'
                }
            ]
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

