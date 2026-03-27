import { Injectable } from '@angular/core';

export interface Dispositivo {
    icon: string;
    nombre: string;
    desc: string;
}

export interface PainPoint {
    icon: string;
    titulo: string;
    desc: string;
}

export interface PasoFuncionamiento {
    paso: number;
    titulo: string;
    desc: string;
}

export interface Beneficio {
    numero: string;
    label: string;
}

export interface EmpresaSegmento {
    slug: string;
    nombre: string;
    seoTitle: string;  // keyword-rich h1 for the detail page
    icon: string;
    colorClass: string;
    heroSubtitulo: string;
    introParrafo: string;
    painPoints: PainPoint[];
    solucionIntro: string;
    dispositivos: Dispositivo[];
    comoFunciona: PasoFuncionamiento[];
    beneficios: Beneficio[];
    seo: { title: string; description: string; keywords: string };
}

@Injectable({ providedIn: 'root' })
export class EmpresaSegmentosService {

    private segmentos: EmpresaSegmento[] = [
        {
            slug: 'lavanderias',
            nombre: 'Lavanderías',
            seoTitle: 'Domótica para Lavanderías en Zaragoza',
            icon: 'fa-soap',
            colorClass: 'azul',
            heroSubtitulo: 'Gestiona tu lavandería desde el móvil. Sin desplazamientos. Sin sorpresas.',
            introParrafo: 'Las lavanderías son negocios con mucha autonomía pero también muchos problemas operativos: hay que estar presente para abrir y cerrar, las máquinas consumen aunque no haya nadie, y cualquier incidencia obliga a desplazarse. Con domótica cambia todo eso.',
            painPoints: [
                { icon: 'fa-car', titulo: 'Desplazamientos innecesarios', desc: 'Abriries y cierres, incidencias con máquinas, revisiones... Si vives lejos, cada visita cuesta tiempo y dinero.' },
                { icon: 'fa-bolt', titulo: 'Consumo aunque nadie esté', desc: 'Las máquinas en standby, la iluminación permanente y la calefacción mal gestionada disparan la factura.' },
                { icon: 'fa-eye-slash', titulo: 'Sin visibilidad remota', desc: 'No sabes si hay clientes, si alguna máquina falla o si alguien accede fuera de horario.' }
            ],
            solucionIntro: 'Instalamos un sistema que te permite controlar todo desde el móvil: apertura remota, medición de consumo y videovigilancia sin cuotas. Tú decides cuándo abrir.',
            dispositivos: [
                { icon: 'fa-plug', nombre: 'Shelly Pro', desc: 'Relé inteligente para encender/apagar circuitos de máquinas y luces remotamente. Mide el consumo real en tiempo real.' },
                { icon: 'fa-video', nombre: 'Cámaras con IA (Frigate)', desc: 'Detectan personas vs. movimiento irrelevante. Grabación local, sin cloud, sin cuotas. Alerta al móvil en segundos.' },
                { icon: 'fa-door-open', nombre: 'Cerradura inteligente', desc: 'Abre y cierra el local desde cualquier lugar. Puedes programar horarios automáticos o abrir puntualmente.' },
                { icon: 'fa-mobile-screen', nombre: 'App de control central', desc: 'Un panel desde el que ver cámaras, gestionar el acceso y consultar el consumo. Sin suscripción.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Instalación en un día', desc: 'Visitamos el local, instalamos los dispositivos sin obras, integramos todo en la plataforma de control.' },
                { paso: 2, titulo: 'Configuras tus horarios', desc: 'Decides a qué hora se encienden las luces, cuándo se activa la cerradura, qué circuitos se apagan a las 22h.' },
                { paso: 3, titulo: 'Gestionas desde el móvil', desc: 'Desde cualquier lugar, ves si hay alguien en el local, abres si un cliente te llama, recibes alertas si algo falla.' },
                { paso: 4, titulo: 'Ahorras desde el primer mes', desc: 'Al eliminar el standby innecesario y los desplazamientos, la factura cae notablemente desde el primer mes.' }
            ],
            beneficios: [
                { numero: '0', label: 'Cuotas mensuales' },
                { numero: '40%', label: 'Ahorro en factura típico' },
                { numero: '1 día', label: 'Instalación completa' },
                { numero: '24/7', label: 'Acceso y monitorización' }
            ],
            seo: {
                title: 'Domótica para Lavanderías en Zaragoza | Control Remoto | Civitech',
                description: 'Gestiona tu lavandería desde el móvil: apertura remota, cámaras sin cuotas y control de consumo por circuito. Instalación en 1 día. Sin cuotas mensuales.',
                keywords: 'domótica lavanderías zaragoza, control remoto lavandería, apertura remota negocio, cámaras vigilancia lavandería, ahorro energético lavandería'
            }
        },
        {
            slug: 'hosteleria',
            nombre: 'Hostelería',
            seoTitle: 'Domótica para Bares y Restaurantes en Zaragoza',
            icon: 'fa-utensils',
            colorClass: 'naranja',
            heroSubtitulo: 'El ambiente perfecto, en el momento justo, sin que nadie tenga que recordarlo.',
            introParrafo: 'La hostelería vive de la experiencia. La iluminación, la temperatura y el ambiente son tan importantes como la carta. Con domótica creas la atmósfera perfecta de forma automática, ahorras en climatización y proteges el local fuera de horario.',
            painPoints: [
                { icon: 'fa-thermometer-half', titulo: 'Climatización que nadie apaga', desc: 'El aire o la calefacción funcionan horas después del cierre porque alguien se olvida. O recalientas un local vacío.' },
                { icon: 'fa-lightbulb', titulo: 'Iluminación rígida sin ambiente', desc: 'Las mismas luces en el servicio del mediodía que a las 10 de la noche. Sin escenas, sin personalidad.' },
                { icon: 'fa-shield', titulo: 'Sin seguridad fuera de horario', desc: 'El local vacío de noche sin vigilancia real. Las alarmas tradicionales con cuotas mensuales encarecen todo.' }
            ],
            solucionIntro: 'Automatizamos la iluminación por escenas, la climatización por horario real y añadimos vigilancia sin cuotas. Tu local se gestiona solo.',
            dispositivos: [
                { icon: 'fa-sun', nombre: 'Iluminación inteligente', desc: 'Escenas programadas por momento: apertura tranquila, servicio animado, cierre tenue. Philips Hue o Shelly según la instalación.' },
                { icon: 'fa-temperature-half', nombre: 'Termostato inteligente', desc: 'Se apaga automáticamente al cierre y se pre-calienta antes de abrir. Nunca climatizas de más.' },
                { icon: 'fa-video', nombre: 'Cámaras IA Frigate', desc: 'Vigilancia interior y exterior con detección de personas. Grabación local, 0€ de cuota, alertas instantáneas.' },
                { icon: 'fa-mobile-screen', nombre: 'Panel de control único', desc: 'Enciendes todo con un tap al abrir y lo apagas todo al cerrar. O lo automatizas por completo.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Diseñamos tus escenas', desc: 'Definimos contigo las escenas de luz y temperatura para cada momento del día y día de la semana.' },
                { paso: 2, titulo: 'Instalamos sin cerrar', desc: 'Trabajamos fuera del horario de servicio. No interrumpimos la operativa del local.' },
                { paso: 3, titulo: 'Desde el día 1 funciona solo', desc: 'Al abrir, se activa la escena de apertura. Al cerrar, todo se apaga. También puedes intervenir manualmente.' },
                { paso: 4, titulo: 'Recibes alertas si algo falla', desc: 'Si hay movimiento fuera de horario o un dispositivo da error, te avisamos al instante.' }
            ],
            beneficios: [
                { numero: '35%', label: 'Ahorro en climatización' },
                { numero: '0 €', label: 'Cuotas de vigilancia' },
                { numero: '3', label: 'Escenas de luz configurables' },
                { numero: '1 día', label: 'Instalación sin cerrar' }
            ],
            seo: {
                title: 'Domótica para Bares y Restaurantes Zaragoza | Civitech',
                description: 'Automatiza la iluminación, climatización y seguridad de tu bar o restaurante en Zaragoza. Escenas de luz automáticas, termostato inteligente y cámaras sin cuotas.',
                keywords: 'domótica hostelería zaragoza, automatización restaurantes, iluminación inteligente bar, climatización automática restaurante, cámaras sin cuotas hostelería'
            }
        },
        {
            slug: 'apartamentos',
            nombre: 'Apartamentos Turísticos',
            seoTitle: 'Domótica para Apartamentos Turísticos en Zaragoza',
            icon: 'fa-bed',
            colorClass: 'morado',
            heroSubtitulo: 'Check-in autónomo 24h, sin llaves físicas, sin coordinación a distancia.',
            introParrafo: 'Gestionar apartamentos turísticos a distancia es un reto constante: coordinar llaves, atender incidencias, controlar si el piso consume cuando está vacío. La domótica elimina todos esos problemas y mejora la valoración del huésped.',
            painPoints: [
                { icon: 'fa-key', titulo: 'La logística de las llaves', desc: 'Coordinar entrega y recogida de llaves con huéspedes que llegan a cualquier hora es un quebradero de cabeza.' },
                { icon: 'fa-bolt', titulo: 'Consumo entre estancias', desc: 'El AC o la calefacción funcionando entre huéspedes, luces encendidas, dispositivos en standby.' },
                { icon: 'fa-phone-slash', titulo: 'Incidencias sin respuesta rápida', desc: 'El huésped llama por un problema de acceso a las 2 de la mañana y no hay manera de resolverlo rápido.' }
            ],
            solucionIntro: 'Eliminamos las llaves físicas, gestionamos el consumo por estancia y damos al huésped una experiencia autónoma que se refleja en las reseñas.',
            dispositivos: [
                { icon: 'fa-lock', nombre: 'Cerradura Nuki / smart lock', desc: 'Código único por huésped que se genera y expira automáticamente. Sin duplicar llaves, sin riesgo de acceso no autorizado.' },
                { icon: 'fa-temperature-half', nombre: 'Termostato inteligente', desc: 'Se apaga cuando la estancia está vacía y se pre-acondiciona antes de la llegada del siguiente huésped.' },
                { icon: 'fa-plug', nombre: 'Shelly para circuitos', desc: 'Corta la corriente de todo (luces, TV, etc.) cuando el huésped hace check-out. Ahorro inmediato y automático.' },
                { icon: 'fa-video', nombre: 'Cámara de acceso exterior', desc: 'Monitoriza el acceso al edificio o puerta principal. Sin grabar el interior del piso.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Configuras cada reserva', desc: 'Defines el código de acceso válido para las fechas de la reserva. Se envía automáticamente al huésped.' },
                { paso: 2, titulo: 'El huésped entra solo', desc: 'Sin esperar, sin coordinación de horarios. El código abre la puerta y tiene todo el apartamento disponible.' },
                { paso: 3, titulo: 'Al check-out todo se apaga', desc: 'El código deja de funcionar y el sistema apaga los circuitos no esenciales automáticamente.' },
                { paso: 4, titulo: 'Tú gestionas todo a distancia', desc: 'Desde el móvil controlas quién tiene acceso, qué consume y puedes abrir manualmente si hay alguna incidencia.' }
            ],
            beneficios: [
                { numero: '0', label: 'Llaves físicas' },
                { numero: '24h', label: 'Check-in autónomo' },
                { numero: '30%', label: 'Ahorro entre estancias' },
                { numero: '⭐⭐⭐⭐⭐', label: 'Mejor valoración huéspedes' }
            ],
            seo: {
                title: 'Domótica Apartamentos Turísticos Zaragoza | Check-in Sin Llaves | Civitech',
                description: 'Gestiona tus apartamentos turísticos en Zaragoza de forma autónoma: cerraduras inteligentes, códigos temporales, control de consumo entre estancias. Sin cuotas.',
                keywords: 'domótica apartamentos turísticos zaragoza, check-in sin llaves, cerradura inteligente apartamento, gestión remota apartamento, Nuki zaragoza'
            }
        },
        {
            slug: 'gimnasios',
            nombre: 'Gimnasios',
            seoTitle: 'Domótica para Gimnasios en Zaragoza',
            icon: 'fa-dumbbell',
            colorClass: 'verde',
            heroSubtitulo: 'Acceso automatizado, climatización inteligente y menos personal de recepción.',
            introParrafo: 'Los gimnasios tienen retos únicos: gestionar el acceso de cientos de abonados, climatizar grandes espacios por zonas y controlar el consumo en horarios de baja ocupación. La domótica resuelve todo esto sin aumentar personal.',
            painPoints: [
                { icon: 'fa-users', titulo: 'Control de acceso manual', desc: 'Necesitar personal en recepción solo para controlar quién entra encarece mucho la operativa.' },
                { icon: 'fa-temperature-high', titulo: 'Climatización sobredimensionada', desc: 'Climatizar la sala completa cuando solo hay 3 personas a las 7 de la mañana es un gasto innecesario.' },
                { icon: 'fa-door-open', titulo: 'Acceso no autorizado', desc: 'Sin control digital, es imposible saber si alguien presta su tarjeta o accede fuera de su horario contratado.' }
            ],
            solucionIntro: 'Instalamos tornos o lectores de acceso inteligente, climatización por zonas y aforo, y un sistema de gestión completo sin hardware caro.',
            dispositivos: [
                { icon: 'fa-id-card', nombre: 'Lector RFID / NFC', desc: 'Cada abonado tiene su tarjeta o usa el móvil. El sistema registra entradas y salidas con timestamp.' },
                { icon: 'fa-temperature-half', nombre: 'Termostatos por zona', desc: 'Sala de máquinas, vestuarios, sala de clases: cada zona tiene su temperatura según la ocupación real.' },
                { icon: 'fa-gauge', nombre: 'Sensor de aforo', desc: 'Sabe cuántas personas hay en tiempo real. Activa la ventilación extra cuando se supera el umbral.' },
                { icon: 'fa-video', nombre: 'Cámaras de seguridad IA', desc: 'Cobertura total del local con grabación local. Detecta accesos fuera de horario automáticamente.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Alta de abonados en el sistema', desc: 'Cada abonado recibe una credencial (tarjeta o código en el móvil) asociada a su tipo de tarifa.' },
                { paso: 2, titulo: 'Acceso autónomo 24/7', desc: 'El abonado llega, pasa la tarjeta y entra. El sistema verifica si tiene acceso en ese horario.' },
                { paso: 3, titulo: 'La climatización se adapta sola', desc: 'Según el aforo detectado y la hora, el sistema activa o desactiva zonas de climatización.' },
                { paso: 4, titulo: 'Informes de uso', desc: 'Sabes qué horas son las más concurridas, qué zonas y puedes optimizar horarios de personal.' }
            ],
            beneficios: [
                { numero: '24/7', label: 'Acceso sin recepcionista' },
                { numero: '40%', label: 'Ahorro en climatización' },
                { numero: '0', label: 'Cuotas mensuales' },
                { numero: '100%', label: 'Trazabilidad de accesos' }
            ],
            seo: {
                title: 'Domótica para Gimnasios Zaragoza | Control de Acceso | Civitech',
                description: 'Automatiza el acceso de abonados, climatización por zonas y seguridad en tu gimnasio en Zaragoza. Sin cuotas. Control total desde el móvil.',
                keywords: 'domótica gimnasios zaragoza, control acceso gimnasio, lector RFID gimnasio, climatización inteligente gimnasio, seguridad gimnasio sin cuotas'
            }
        },
        {
            slug: 'clinicas',
            nombre: 'Clínicas y Consultas',
            seoTitle: 'Domótica para Clínicas y Consultas en Zaragoza',
            icon: 'fa-stethoscope',
            colorClass: 'cian',
            heroSubtitulo: 'Control de acceso por zonas, cámaras sin cloud y climatización sala a sala.',
            introParrafo: 'Las clínicas y consultas tienen zonas de acceso restringido, necesitan discreción en las grabaciones y un ambiente controlado sala por sala. Todo sin depender de sistemas de terceros con costes recurrentes.',
            painPoints: [
                { icon: 'fa-lock-open', titulo: 'Zonas sin control de acceso', desc: 'El almacén de medicamentos, el archivo de historiales o el área de diagnóstico accesibles para cualquiera.' },
                { icon: 'fa-cloud', titulo: 'Cámaras con datos en la nube', desc: 'Los sistemas de vigilancia cloud almacenan vídeo fuera de tu clínica. Problema de privacidad y coste mensual.' },
                { icon: 'fa-temperature-arrow-up', titulo: 'Temperatura igual en todas las salas', desc: 'La sala de espera y la de consulta necesitan temperaturas distintas, pero el termostato es el mismo para todo.' }
            ],
            solucionIntro: 'Implementamos acceso por zona con tarjeta NFC, grabación local de cámaras (sin cloud, sin cuotas) y termostatos independientes por sala.',
            dispositivos: [
                { icon: 'fa-shield-halved', nombre: 'Control de acceso NFC por zona', desc: 'Cada puerta tiene su lector. El personal solo accede a las zonas asignadas. Registro completo de movimientos.' },
                { icon: 'fa-video', nombre: 'Cámaras Frigate (grabación local)', desc: 'Todo el vídeo se almacena en tu servidor local. Sin cloud, sin cuotas, sin datos fuera de la clínica.' },
                { icon: 'fa-temperature-half', nombre: 'Termostatos by room', desc: 'Consulta 1, Consulta 2, sala de espera: cada espacio con su temperatura, programada por horario de uso.' },
                { icon: 'fa-tablet-screen-button', nombre: 'Panel de gestión', desc: 'El director médico o responsable ve en tiempo real qué puertas están abiertas y qué temperaturas hay.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Mapeamos las zonas', desc: 'Identificamos qué zonas requieren acceso restringido y qué personal accede a cada una.' },
                { paso: 2, titulo: 'Instalamos sin interrumpir', desc: 'Trabajamos por fases para no interrumpir la actividad. La clínica no cierra durante la instalación.' },
                { paso: 3, titulo: 'Alta del personal', desc: 'Cada empleado recibe su credencial con los permisos correspondientes a su puesto.' },
                { paso: 4, titulo: 'Monitorización continua', desc: 'Sabes en tiempo real quién está en cada zona, qué temperatura tiene cada sala y recibes alertas de accesos extraños.' }
            ],
            beneficios: [
                { numero: '0 €', label: 'Cuotas cloud de cámaras' },
                { numero: '100%', label: 'Datos dentro de la clínica' },
                { numero: 'Por zona', label: 'Control de acceso granular' },
                { numero: '3 años', label: 'Garantía de equipamiento' }
            ],
            seo: {
                title: 'Domótica para Clínicas y Consultas Zaragoza | Control Acceso | Civitech',
                description: 'Seguridad y control para clínicas en Zaragoza: acceso por zonas con NFC, cámaras de grabación local sin cuotas y climatización por sala.',
                keywords: 'domótica clínicas zaragoza, control acceso consulta médica, cámaras sin cloud clínica, seguridad clínica zaragoza, termostato por sala consulta'
            }
        },
        {
            slug: 'oficinas',
            nombre: 'Oficinas y Talleres',
            seoTitle: 'Domótica para Oficinas y Talleres en Zaragoza',
            icon: 'fa-briefcase',
            colorClass: 'gris',
            heroSubtitulo: 'Nadie se olvida de apagar las luces. Porque ya no depende de nadie.',
            introParrafo: 'En oficinas y talleres el gasto energético y el control de acceso son los grandes problemas. Con domótica consigues apagado automático al salir, climatización programada y control de quién entra y cuándo, sin complicaciones.',
            painPoints: [
                { icon: 'fa-lightbulb', titulo: 'Luces y AC que nadie apaga', desc: 'El último en salir apaga (o no). Los viernes por la tarde, el AC funciona hasta el lunes sin que nadie lo sepa.' },
                { icon: 'fa-key', titulo: 'Acceso sin trazabilidad', desc: 'Llaves físicas que se pierden, copias sin control, no sabes quién entró ni cuándo.' },
                { icon: 'fa-bolt', titulo: 'Facturas altas fuera de horario', desc: 'El consumo de viernes noche a lunes mañana equivale a varios días de trabajo. Un coste evitable.' }
            ],
            solucionIntro: 'Automatizamos el apagado completo al detectar que no hay nadie, gestionamos el acceso con tarjeta registrada y programamos la climatización por horario laboral.',
            dispositivos: [
                { icon: 'fa-plug', nombre: 'Shelly para circuitos', desc: 'Corta la corriente de luces, pantallas y equipos no esenciales cuando no hay nadie. Apagado total en un tap.' },
                { icon: 'fa-id-card', nombre: 'Control de acceso con tarjeta', desc: 'Cada empleado tiene su tarjeta. Registro de entradas/salidas. Sin copias de llaves, sin acceso no controlado.' },
                { icon: 'fa-temperature-half', nombre: 'Termostato programado', desc: 'Se activa 30 minutos antes de que llegue el primer trabajador y se apaga automáticamente al cierre.' },
                { icon: 'fa-video', nombre: 'Cámaras de seguridad', desc: 'Interior y exterior. Detección de personas fuera de horario, alertas inmediatas, grabación local.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Definimos el horario laboral', desc: 'Configuramos cuándo debe encenderse y apagarse cada sistema según los horarios reales de la empresa.' },
                { paso: 2, titulo: 'Alta de empleados', desc: 'Cada persona recibe su tarjeta de acceso. Podemos crear grupos (contabilidad, taller, dirección) con permisos distintos.' },
                { paso: 3, titulo: 'El sistema trabaja solo', desc: 'Llueves llega el primero: la calefacción ya estaba encendida. Sale el último: todo se apaga automáticamente.' },
                { paso: 4, titulo: 'Control desde dirección', desc: 'El responsable ve en el móvil consumo, accesos y puede abrir/cerrar puertas a distancia.' }
            ],
            beneficios: [
                { numero: '40%', label: 'Reducción en factura eléctrica' },
                { numero: '0', label: 'Llaves físicas' },
                { numero: 'Auto', label: 'Apagado al salir la oficina' },
                { numero: '100%', label: 'Trazabilidad de accesos' }
            ],
            seo: {
                title: 'Domótica para Oficinas y Talleres Zaragoza | Civitech',
                description: 'Automatiza tu oficina o taller en Zaragoza: apagado automático al cierre, control de acceso con tarjeta y climatización programada. Sin cuotas. Presupuesto gratis.',
                keywords: 'domótica oficinas zaragoza, control acceso empresas, apagado automático oficina, ahorro energético taller, domótica pymes zaragoza'
            }
        },
        {
            slug: 'comercio',
            nombre: 'Comercio y Retail',
            seoTitle: 'Domótica para Comercios y Tiendas en Zaragoza',
            icon: 'fa-store',
            colorClass: 'rojo',
            heroSubtitulo: 'Alarma con IA sin cuotas, apertura automatizada y apagado total al cerrar.',
            introParrafo: 'El comercio tiene dos grandes necesidades: seguridad (sin pagar mensualidades de alarma) y ahorro energético (el local consume de noche aunque nadie esté). La domótica resuelve ambas con una sola instalación.',
            painPoints: [
                { icon: 'fa-sack-xmark', titulo: 'Cuotas mensuales de alarma', desc: 'Las empresas de seguridad tradicionales cobran entre 30 y 80€ al mes por un servicio que a veces falla o da falsas alarmas.' },
                { icon: 'fa-moon', titulo: 'Consumo nocturno innecesario', desc: 'Escaparates, refrigeración comercial mal gestionada, iluminación de fondo encendida toda la noche.' },
                { icon: 'fa-triangle-exclamation', titulo: 'Falsas alarmas constantes', desc: 'Los sistemas tradicionales disparan la alarma por gatos, coches pasando o cambios de luz. Nadie los toma en serio.' }
            ],
            solucionIntro: 'Instalamos un sistema de seguridad con IA que distingue personas reales, apagado automático nocturno y apertura programada. Sin cuotas, sin falsas alarmas.',
            dispositivos: [
                { icon: 'fa-video', nombre: 'Cámaras IA Frigate', desc: 'Detectan personas específicamente, ignorando coches, animales y cambios de luz. 0 falsas alarmas. Alerta real al móvil.' },
                { icon: 'fa-shield-halved', nombre: 'Alarma perimetral local', desc: 'Sensores en puertas y ventanas conectados al sistema. Grabación de todo evento. Sin dependencia de central externa.' },
                { icon: 'fa-plug', nombre: 'Shelly para circuitos nocturnos', desc: 'Al cierre, corta automáticamente iluminación interior, rótulos y cualquier circuito no esencial.' },
                { icon: 'fa-mobile-screen', nombre: 'Alertas instantáneas', desc: 'Si Frigate detecta una persona en el local fuera de horario, recibes notificación con clip de vídeo en segundos.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Mapeamos el local', desc: 'Identificamos puntos de acceso, zonas de mayor riesgo y circuitos que deben apagarse al cierre.' },
                { paso: 2, titulo: 'Instalamos sin cerrar', desc: 'La instalación es rápida y no requiere que el comercio cierre. Trabajamos en horas de menor afluencia.' },
                { paso: 3, titulo: 'Defines el horario de protección', desc: 'A partir de X hora, el sistema activa la alarma y monitoriza. Las cámaras solo alertan fuera de horario comercial.' },
                { paso: 4, titulo: 'Olvídares de la alarma', desc: 'El sistema funciona solo. Tú recibes alerta solo si hay un evento real. Sin falsas alarmas, sin cuotas.' }
            ],
            beneficios: [
                { numero: '0 €', label: 'Cuotas de alarma al mes' },
                { numero: '0', label: 'Falsas alarmas con IA' },
                { numero: '30%', label: 'Ahorro energético nocturno' },
                { numero: '3 años', label: 'Garantía completa' }
            ],
            seo: {
                title: 'Domótica Comercios y Tiendas Zaragoza | Alarma Sin Cuotas | Civitech',
                description: 'Protege tu comercio en Zaragoza con alarma IA sin cuotas, apagado automático nocturno y control total desde el móvil. Presupuesto gratis en 24h.',
                keywords: 'alarma sin cuotas comercio zaragoza, domótica tiendas zaragoza, seguridad retail sin mensualidad, cámaras IA comercio, ahorro energético tienda zaragoza'
            }
        },
        {
            slug: 'hoteles',
            nombre: 'Hoteles',
            seoTitle: 'Domótica para Hoteles en Zaragoza — Control por Habitación y Eficiencia Energética',
            icon: 'fa-bed',
            colorClass: 'morado',
            heroSubtitulo: 'Control de temperatura por habitación, monitorización de consumo real y cero cuotas mensuales.',
            introParrafo: 'Un hotel de 30 habitaciones puede desperdiciar hasta 8.500€ al año en climatización: huéspedes que dejan la ventana abierta con el AC al máximo, habitaciones vacías climatizando, sin visibilidad del consumo real por zona. Con nuestros sistemas instalados por Civitech, cada habitación tiene control independiente y el gestor ve en tiempo real dónde se va la energía.',
            painPoints: [
                { icon: 'fa-temperature-arrow-up', titulo: 'Consumo incontrolado por habitación', desc: 'Sin TRV individual, el sistema climatiza igual una habitación ocupada que una vacía, o una con la ventana abierta. No hay manera de detectarlo ni corregirlo.' },
                { icon: 'fa-eye-slash', titulo: 'Sin visibilidad de eficiencia', desc: 'El gestor del hotel recibe una factura eléctrica global. No sabe qué planta, qué zona o qué habitación consume más. Imposible tomar decisiones de mejora.' },
                { icon: 'fa-wrench', titulo: 'Mantenimiento reactivo y caro', desc: 'Los sistemas de hotel tradicionales (Honeywell, Siemens) requieren contratos de mantenimiento anuales de 5.000-15.000€. Y cuando fallan, dependes de su técnico.' }
            ],
            solucionIntro: 'Instalamos válvulas termostáticas inteligentes por habitación, monitorización de consumo eléctrico por zonas y un panel de gestión centralizado que no requiere plataforma open source. El gestor del hotel tiene control real sin necesitar un técnico de IT.',
            dispositivos: [
                { icon: 'fa-temperature-half', nombre: 'Válvula termostática inteligente por habitación', desc: 'Control individual de temperatura en cada habitación. Detecta ventana abierta y para la calefacción automáticamente. Ahorro inmediato sin obras.' },
                { icon: 'fa-gauge-high', nombre: 'Medidor de consumo por zonas', desc: 'Mide consumo eléctrico y de agua por planta o ala del hotel en tiempo real. El gestor ve en el dashboard dónde se va la energía y actúa antes de recibir la factura.' },
                { icon: 'fa-tablet-screen-button', nombre: 'Panel de gestión centralizado', desc: 'Interfaz simple y profesional. Sin Home Assistant ni configuración técnica. El recepcionista puede cambiar la temperatura de cualquier habitación, ver el estado de todas y detectar anomalías.' },
                { icon: 'fa-mobile-screen', nombre: 'Control remoto para el director', desc: 'El gerente puede ver el consumo en tiempo real, programar temperaturas por tipo de habitación y recibir alertas si una zona supera el umbral de consumo.' }
            ],
            comoFunciona: [
                { paso: 1, titulo: 'Auditoría inicial del hotel', desc: 'Analizamos la instalación existente, el número de habitaciones, el sistema de climatización actual (fancoil, radiadores, splits) y diseñamos la solución óptima para el hotel.' },
                { paso: 2, titulo: 'Instalación por fases, sin cerrar el hotel', desc: 'Instalamos habitación a habitación o planta a planta. El hotel no interrumpe su actividad. Cada válvula inteligente se instala en 15-20 minutos por habitación.' },
                { paso: 3, titulo: 'Configuración del panel centralizado', desc: 'Programamos las temperaturas por tipo de habitación, horarios de limpieza, gestión de check-in/check-out y alertas de consumo anómalo.' },
                { paso: 4, titulo: 'Ahorro desde el primer mes', desc: 'Con presencia detectada y ventanas monitorizadas, el consumo HVAC cae entre un 35-45%. En un hotel de 30 habitaciones, el retorno de inversión típico es en 18-24 meses.' }
            ],
            beneficios: [
                { numero: '~8.500€', label: 'Ahorro anual estimado en hotel de 30 hab.' },
                { numero: '0 €', label: 'Contrato de mantenimiento anual' },
                { numero: 'Por hab.', label: 'Control de temperatura individual' },
                { numero: '18-24m', label: 'Retorno típico de inversión' }
            ],
            seo: {
                title: 'Domótica para Hoteles Zaragoza | Control por Habitación | Civitech',
                description: 'Climatización inteligente por habitación para hoteles en Zaragoza. Monitorización de consumo real, cero cuotas de mantenimiento. Ahorro de hasta 8.500€/año en un hotel de 30 habitaciones.',
                keywords: 'domótica hoteles zaragoza, control temperatura habitación hotel, monitorización consumo hotel, ahorro energético hotel, gestión hotel inteligente zaragoza, válvula termostata hotel, climatización hotel por zonas'
            }
        }
    ];

    getAll(): EmpresaSegmento[] {
        return this.segmentos;
    }

    getBySlug(slug: string): EmpresaSegmento | undefined {
        return this.segmentos.find(s => s.slug === slug);
    }
}
