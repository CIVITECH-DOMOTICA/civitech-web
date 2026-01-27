import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
    providedIn: 'root'
})
export class ProyectosService {

    private proyectos: Proyecto[] = [
        {
            id: '1',
            slug: 'casa-rural-asturias',
            nombre: 'Domotización Casa Rural en Asturias',
            ubicacion: 'Asturias, España',
            tipo: 'Casa Rural',
            resumen: 'Transformación completa de una casa rural en un hogar inteligente que combina tradición y tecnología de vanguardia.',
            descripcionCompleta: 'Este proyecto pionero consistió en la integración de sistemas domóticos avanzados en una casa rural asturiana del siglo XIX, preservando su encanto tradicional mientras se incorporaban las últimas tecnologías en automatización del hogar. El desafío principal fue integrar la tecnología de manera invisible, respetando la estética rústica del inmueble.',
            imagenPrincipal: '/assets/images/proyecto1.png',
            imagenes: [
                '/assets/images/proyecto1.png',
                '/assets/images/proyecto2.png',
                '/assets/images/proyecto3.png'
            ],
            fecha: 'Junio 2023',
            duracion: '3 meses',
            presupuesto: '45.000€ - 60.000€',

            clienteNombre: 'Familia García',
            testimonioCliente: 'Increíble cómo han logrado modernizar nuestra casa sin perder su esencia tradicional. Ahora controlamos todo desde el móvil y hemos reducido significativamente el consumo energético. ¡Altamente recomendable!',
            valoracionEstrellas: 5,

            superficieM2: 280,
            habitaciones: 5,
            dispositivosInstalados: [
                { nombre: 'Luces Inteligentes', cantidad: 32, categoria: 'iluminacion' },
                { nombre: 'Termostatos WiFi', cantidad: 4, categoria: 'climatizacion' },
                { nombre: 'Cámaras de Seguridad', cantidad: 6, categoria: 'seguridad' },
                { nombre: 'Enchufes Inteligentes', cantidad: 18, categoria: 'energia' },
                { nombre: 'Sensores de Puerta/Ventana', cantidad: 12, categoria: 'seguridad' },
                { nombre: 'Asistentes de Voz', cantidad: 5, categoria: 'multimedia' }
            ],
            tecnologiasUtilizadas: [
                'KNX',
                'Zigbee',
                'Google Home',
                'Amazon Alexa',
                'Home Assistant',
                'Shelly'
            ],

            ahorroEnergetico: '42%',
            tiempoRespuesta: '< 500ms',
            satisfaccionCliente: '98%',

            fases: [
                {
                    titulo: 'Análisis y Planificación',
                    descripcion: 'Estudio detallado de la vivienda, necesidades del cliente y diseño del sistema',
                    duracion: '2 semanas',
                    completada: true
                },
                {
                    titulo: 'Instalación de Infraestructura',
                    descripcion: 'Cableado estructurado, instalación de centralita y dispositivos base',
                    duracion: '4 semanas',
                    completada: true
                },
                {
                    titulo: 'Configuración y Programación',
                    descripcion: 'Programación de automatizaciones, escenas y ajuste de parámetros',
                    duracion: '3 semanas',
                    completada: true
                },
                {
                    titulo: 'Formación y Entrega',
                    descripcion: 'Capacitación al cliente y documentación completa del sistema',
                    duracion: '1 semana',
                    completada: true
                }
            ],

            caracteristicas: [
                'Control total desde smartphone',
                'Gestión inteligente de climatización',
                'Iluminación adaptativa según hora del día',
                'Sistema de seguridad 24/7 con alertas',
                'Monitorización de consumo energético en tiempo real',
                'Integración con asistentes de voz',
                'Escenas personalizadas (Cine, Fiesta, Dormir)',
                'Automatización basada en presencia'
            ],

            retos: [
                {
                    reto: 'Integración tecnológica sin impacto visual en la decoración rústica',
                    solucion: 'Uso de dispositivos empotrados y selección de elementos que combinan con la estética tradicional'
                },
                {
                    reto: 'Cobertura WiFi en construcción con muros de piedra de 80cm',
                    solucion: 'Instalación de sistema mesh profesional con 4 puntos de acceso estratégicos'
                },
                {
                    reto: 'Compatibilidad entre diferentes ecosistemas domóticos',
                    solucion: 'Implementación de Home Assistant como hub central unificado'
                }
            ]
        },
        {
            id: '2',
            slug: 'chalet-barcelona',
            nombre: 'Monitorización de Consumo Energético - Chalet Barcelona',
            ubicacion: 'Barcelona, España',
            tipo: 'Chalet',
            resumen: 'Sistema avanzado de monitorización y optimización energética en chalet de lujo con piscina y jardín.',
            descripcionCompleta: 'Proyecto centrado en la eficiencia energética mediante la instalación de un sistema completo de monitorización, control y optimización del consumo. Incluye gestión inteligente de piscina, riego automático y producción solar fotovoltaica con baterías de almacenamiento.',
            imagenPrincipal: '/assets/images/proyecto2.png',
            imagenes: [
                '/assets/images/proyecto2.png',
                '/assets/images/proyecto3.png',
                '/assets/images/proyecto1.png'
            ],
            fecha: 'Septiembre 2023',
            duracion: '2.5 meses',
            presupuesto: '55.000€ - 75.000€',

            clienteNombre: 'Sr. Martínez',
            testimonioCliente: 'El ROI ha sido increíble. En 8 meses hemos reducido nuestra factura eléctrica en un 65%. El dashboard es muy intuitivo y poder ver todo el consumo en tiempo real nos ha ayudado a ser mucho más eficientes.',
            valoracionEstrellas: 5,

            superficieM2: 450,
            habitaciones: 6,
            dispositivosInstalados: [
                { nombre: 'Paneles Solares', cantidad: 24, categoria: 'energia' },
                { nombre: 'Batería de Almacenamiento', cantidad: 2, categoria: 'energia' },
                { nombre: 'Medidores de Consumo', cantidad: 15, categoria: 'energia' },
                { nombre: 'Controlador de Piscina', cantidad: 1, categoria: 'otros' },
                { nombre: 'Sistema de Riego', cantidad: 8, categoria: 'otros' },
                { nombre: 'Termostatos Inteligentes', cantidad: 6, categoria: 'climatizacion' },
                { nombre: 'Cargador Vehículo Eléctrico', cantidad: 1, categoria: 'energia' }
            ],
            tecnologiasUtilizadas: [
                'Victron Energy',
                'Shelly EM',
                'Home Assistant',
                'Grafana',
                'InfluxDB',
                'MQTT'
            ],

            ahorroEnergetico: '65%',
            tiempoRespuesta: '< 200ms',
            satisfaccionCliente: '100%',

            fases: [
                {
                    titulo: 'Auditoría Energética',
                    descripcion: 'Análisis completo de consumos y propuesta de optimización',
                    duracion: '1 semana',
                    completada: true
                },
                {
                    titulo: 'Instalación Fotovoltaica',
                    descripcion: 'Instalación de paneles solares y sistema de baterías',
                    duracion: '3 semanas',
                    completada: true
                },
                {
                    titulo: 'Sistema de Monitorización',
                    descripcion: 'Instalación de medidores y configuración del dashboard',
                    duracion: '2 semanas',
                    completada: true
                },
                {
                    titulo: 'Optimización y Ajustes',
                    descripcion: 'Ajuste fino de automatizaciones y maximización de ahorro',
                    duracion: '2 semanas',
                    completada: true
                }
            ],

            caracteristicas: [
                'Dashboard en tiempo real de producción y consumo',
                'Gestión automática de baterías para máximo ahorro',
                'Control inteligente de piscina con ahorro de químicos',
                'Riego automático según predicción meteorológica',
                'Alertas de consumos anómalos',
                'Carga inteligente de vehículo eléctrico con excedente solar',
                'Reportes mensuales automáticos',
                'Predicción de ahorro anual'
            ],

            retos: [
                {
                    reto: 'Maximizar autoconsumo fotovoltaico con consumos variables',
                    solucion: 'Algoritmo de gestión inteligente que prioriza cargas según disponibilidad solar'
                },
                {
                    reto: 'Integración de sistemas de diferentes fabricantes',
                    solucion: 'Desarrollo de conectores personalizados MQTT para unificar todos los datos'
                },
                {
                    reto: 'Visualización clara de datos complejos para usuarios no técnicos',
                    solucion: 'Dashboard personalizado en Grafana con gráficos intuitivos y códigos de color'
                }
            ]
        },
        {
            id: '3',
            slug: 'piso-castellon',
            nombre: 'Domotización Piso en Castellón de la Plana',
            ubicacion: 'Castellón de la Plana, España',
            tipo: 'Apartamento',
            resumen: 'Renovación integral de apartamento urbano con enfoque en confort, seguridad y eficiencia energética.',
            descripcionCompleta: 'Proyecto de domotización completa de un piso céntrico en Castellón, optimizado para una pareja joven con necesidades de conectividad, seguridad y eficiencia. Sistema modular que permite futuras ampliaciones sin obra adicional.',
            imagenPrincipal: '/assets/images/proyecto3.png',
            imagenes: [
                '/assets/images/proyecto3.png',
                '/assets/images/proyecto1.png',
                '/assets/images/proyecto2.png'
            ],
            fecha: 'Noviembre 2023',
            duracion: '1.5 meses',
            presupuesto: '18.000€ - 25.000€',

            clienteNombre: 'Ana y Carlos',
            testimonioCliente: 'Vivir aquí ahora es otra experiencia completamente diferente. Todo funciona de manera automática, las luces, la calefacción, las persianas... Y la tranquilidad que nos da el sistema de seguridad no tiene precio.',
            valoracionEstrellas: 5,

            superficieM2: 95,
            habitaciones: 3,
            dispositivosInstalados: [
                { nombre: 'Luces Inteligentes', cantidad: 18, categoria: 'iluminacion' },
                { nombre: 'Termostato WiFi', cantidad: 1, categoria: 'climatizacion' },
                { nombre: 'Cámaras IP', cantidad: 2, categoria: 'seguridad' },
                { nombre: 'Cerradura Inteligente', cantidad: 1, categoria: 'seguridad' },
                { nombre: 'Persianas Motorizadas', cantidad: 4, categoria: 'otros' },
                { nombre: 'Sensores de Movimiento', cantidad: 5, categoria: 'seguridad' },
                { nombre: 'Hub Zigbee', cantidad: 1, categoria: 'otros' },
                { nombre: 'Altavoces Inteligentes', cantidad: 3, categoria: 'multimedia' }
            ],
            tecnologiasUtilizadas: [
                'Philips Hue',
                'Zigbee',
                'Nuki Smart Lock',
                'Google Nest',
                'Home Assistant',
                'Sonoff'
            ],

            ahorroEnergetico: '35%',
            tiempoRespuesta: '< 300ms',
            satisfaccionCliente: '95%',

            fases: [
                {
                    titulo: 'Consultoría Inicial',
                    descripcion: 'Reunión con clientes y definición de necesidades',
                    duracion: '1 semana',
                    completada: true
                },
                {
                    titulo: 'Instalación Core',
                    descripcion: 'Instalación de hub, iluminación y climatización',
                    duracion: '2 semanas',
                    completada: true
                },
                {
                    titulo: 'Seguridad y Automatización',
                    descripcion: 'Instalación de cámaras, sensores y configuración de escenas',
                    duracion: '1.5 semanas',
                    completada: true
                },
                {
                    titulo: 'Formación y Soporte',
                    descripcion: 'Formación personalizada y periodo de soporte inicial',
                    duracion: '1 semana',
                    completada: true
                }
            ],

            caracteristicas: [
                'Control unificado desde una sola app',
                'Escenas personalizadas (Despertar, Trabajo, Noche)',
                'Cerradura inteligente con acceso temporal para invitados',
                'Detección de presencia para ahorro energético',
                'Persianas automáticas según luz solar',
                'Notificaciones en tiempo real ante eventos',
                'Control por voz multihabitación',
                'Modo vacaciones con simulación de presencia'
            ],

            retos: [
                {
                    reto: 'Instalación sin obras en piso alquilado',
                    solucion: 'Uso exclusivo de dispositivos inalámbricos y adhesivos, todo reversible'
                },
                {
                    reto: 'Presupuesto ajustado con máxima funcionalidad',
                    solucion: 'Selección de dispositivos con mejor relación calidad-precio y priorización de funciones'
                },
                {
                    reto: 'Compatibilidad futura para ampliaciones',
                    solucion: 'Arquitectura basada en estándares abiertos (Zigbee, MQTT) para máxima flexibilidad'
                }
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
