import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private baseUrl = 'https://civitech.es';
    private defaultImage = `${this.baseUrl}/assets/images/logo_negro_horizontal.png`;
    private isBrowser: boolean;

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private router: Router,
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.setupRouteListener();
    }

    private setupRouteListener(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.updateSeoForCurrentRoute();
            });
    }

    private updateSeoForCurrentRoute(): void {
        const currentUrl = this.router.url;
        const config = this.getSeoConfigForRoute(currentUrl);
        this.updateSeo(config);
    }

    private getSeoConfigForRoute(url: string): SeoConfig {
        const configs: { [key: string]: SeoConfig } = {
            '/': {
                title: 'Domótica Zaragoza | Civitech - Expertos en Casa Inteligente',
                description: 'Civitech: Empresa líder en domótica en Zaragoza. Instalación sin obras, sistemas abiertos y control centralizado. Ahorra hasta 30% en tu factura. Presupuesto gratis en 24h.',
                keywords: 'domotica zaragoza, empresa domotica zaragoza, instalador domotica zaragoza, casa inteligente zaragoza, civitech',
                url: this.baseUrl,
                image: `${this.baseUrl}/assets/images/home.jpg`
            },
            '/acerca-de-nosotros': {
                title: 'Domótica Zaragoza | Civitech - Expertos en Casa Inteligente',
                description: 'Civitech: Empresa líder en domótica en Zaragoza. Instalación sin obras, sistemas abiertos y control centralizado. Ahorra hasta 30% en tu factura. Presupuesto gratis en 24h.',
                keywords: 'domotica zaragoza, empresa domotica zaragoza, instalador domotica zaragoza, casa inteligente zaragoza, civitech',
                url: this.baseUrl,
                image: `${this.baseUrl}/assets/images/home.jpg`
            },
            '/domotica-informacion': {
                title: 'Domótica Zaragoza : Soluciones y Control Total del Hogar | Civitech',
                description: 'Descubre cómo la domótica puede transformar tu hogar en Zaragoza: ahorro energético, seguridad y confort. Instaladores de domótica sin obras. Pide presupuesto.',
                keywords: 'domotica zaragoza, instalaciones domotica zaragoza, smart home zaragoza, automatizacion vivienda zaragoza',
                url: `${this.baseUrl}/domotica-informacion`,
                image: `${this.baseUrl}/assets/images/smart_home_control.png`
            },
            '/proyectos': {
                title: 'Proyectos de Domótica Realizados en Zaragoza | Casos de Éxito | Civitech',
                description: 'Explora nuestros proyectos de domótica en Zaragoza: pisos, chalets y oficinas automatizadas. Testimonios reales de clientes satisfechos. Más de 500 instalaciones.',
                keywords: 'proyectos domótica zaragoza, instalaciones domótica, casos éxito domótica, testimonios clientes',
                url: `${this.baseUrl}/proyectos`,
                image: `${this.baseUrl}/assets/images/proyecto1.png`
            },
            '/contactanos': {
                title: 'Contacta con Civitech | Presupuesto Gratis Domótica Zaragoza en 24h',
                description: 'Solicita tu presupuesto gratuito de domótica en Zaragoza. Respuesta en 24 horas. Llámanos al 624074920 o escríbenos. Instalación profesional sin obras.',
                keywords: 'presupuesto domótica zaragoza, contacto civitech, instalación domótica precio, consulta gratis',
                url: `${this.baseUrl}/contactanos`,
                image: `${this.baseUrl}/assets/images/contacto.jpg`
            },
            '/instaladores': {
                title: 'Programa Partners Civitech | Domótica para Instaladores y Reformistas',
                description: 'Únete a la red de partners de Civitech. Ofrece domótica en tus reformas sin complicaciones técnicas. Aumenta tu ticket medio y diferénciate.',
                keywords: 'partners domótica, instaladores domótica zaragoza, colaboración reformas zaragoza, civitech partners',
                url: `${this.baseUrl}/instaladores`,
                image: `${this.baseUrl}/assets/images/partnership_collaboration.png`
            },
            '/empresas': {
                title: 'Domótica para Empresas en Zaragoza | Sin Cuotas | Civitech',
                description: 'Domótica profesional para negocios en Zaragoza: lavanderías, hostelería, oficinas, apartamentos turísticos, gimnasios, clínicas y comercios. Control total desde el móvil. Sin cuotas mensuales. Presupuesto gratis en 24h.',
                keywords: 'domótica empresas zaragoza, automatización negocios zaragoza, control acceso empresas, cámaras vigilancia sin cuotas, ahorro energético negocios, domótica hostelería, domótica lavanderías, domótica oficinas, domótica zaragoza b2b, civitech empresas',
                url: `${this.baseUrl}/empresas`,
                image: `${this.baseUrl}/assets/images/usecase-business.png`
            },
            '/empresas/lavanderias': {
                title: 'Domótica para Lavanderías en Zaragoza | Apertura Remota Sin Cuotas | Civitech',
                description: 'Gestiona tu lavandería en Zaragoza desde el móvil: apertura remota, cámaras IA sin cuotas mensuales y control de consumo por circuito. Instalación en 1 día. Presupuesto gratis.',
                keywords: 'domótica lavanderías zaragoza, control remoto lavandería zaragoza, apertura remota negocio, cámaras vigilancia lavandería sin cuotas, ahorro energético lavandería, automatización lavandería, shelly lavandería',
                url: `${this.baseUrl}/empresas/lavanderias`,
                image: `${this.baseUrl}/assets/images/usecase-appliances.png`
            },
            '/empresas/hosteleria': {
                title: 'Domótica para Bares y Restaurantes en Zaragoza | Civitech',
                description: 'Automatiza la iluminación, climatización y seguridad de tu bar o restaurante en Zaragoza. Escenas de luz automáticas, termostato inteligente y cámaras sin cuotas mensuales.',
                keywords: 'domótica hostelería zaragoza, automatización restaurantes zaragoza, iluminación inteligente bar, climatización automática restaurante, cámaras sin cuotas hostelería, domótica bar zaragoza',
                url: `${this.baseUrl}/empresas/hosteleria`,
                image: `${this.baseUrl}/assets/images/usecase-lighting.png`
            },
            '/empresas/apartamentos': {
                title: 'Domótica Apartamentos Turísticos Zaragoza | Check-in Sin Llaves | Civitech',
                description: 'Gestiona tus apartamentos turísticos en Zaragoza de forma autónoma: cerraduras inteligentes, códigos temporales por huésped, control de consumo entre estancias. Sin cuotas.',
                keywords: 'domótica apartamentos turísticos zaragoza, check-in sin llaves zaragoza, cerradura inteligente apartamento, gestión remota apartamento, Nuki zaragoza, apartamentos turísticos automatizados',
                url: `${this.baseUrl}/empresas/apartamentos`,
                image: `${this.baseUrl}/assets/images/smart_home_phone_es.png`
            },
            '/empresas/gimnasios': {
                title: 'Domótica para Gimnasios en Zaragoza | Control de Acceso sin Cuotas | Civitech',
                description: 'Automatiza el acceso de abonados, climatización por zonas y seguridad en tu gimnasio en Zaragoza. Lectores RFID, cámaras IA y termostatos inteligentes. Sin cuotas.',
                keywords: 'domótica gimnasios zaragoza, control acceso gimnasio zaragoza, lector RFID gimnasio, climatización inteligente gimnasio, seguridad gimnasio sin cuotas, automatización gimnasio zaragoza',
                url: `${this.baseUrl}/empresas/gimnasios`,
                image: `${this.baseUrl}/assets/images/usecase-business.png`
            },
            '/empresas/clinicas': {
                title: 'Domótica para Clínicas y Consultas en Zaragoza | Control Acceso NFC | Civitech',
                description: 'Seguridad y control para clínicas en Zaragoza: acceso por zonas con NFC, cámaras de grabación local sin cuotas de cloud y climatización por sala. Instalación sin obras.',
                keywords: 'domótica clínicas zaragoza, control acceso consulta médica zaragoza, cámaras sin cloud clínica, seguridad clínica zaragoza, termostato por sala consulta, automatización clínica',
                url: `${this.baseUrl}/empresas/clinicas`,
                image: `${this.baseUrl}/assets/images/usecase-security.png`
            },
            '/empresas/oficinas': {
                title: 'Domótica para Oficinas y Talleres en Zaragoza | Ahorro Energético | Civitech',
                description: 'Automatiza tu oficina o taller en Zaragoza: apagado automático al cierre, control de acceso con tarjeta y climatización programada por horario laboral. Sin cuotas. Presupuesto gratis.',
                keywords: 'domótica oficinas zaragoza, control acceso empresas zaragoza, apagado automático oficina, ahorro energético taller, domótica pymes zaragoza, automatización oficina zaragoza',
                url: `${this.baseUrl}/empresas/oficinas`,
                image: `${this.baseUrl}/assets/images/smart_home_control.png`
            },
            '/empresas/comercio': {
                title: 'Domótica Comercios y Tiendas Zaragoza | Alarma Sin Cuotas Mensuales | Civitech',
                description: 'Protege tu comercio en Zaragoza con alarma IA sin cuotas mensuales, apagado automático nocturno y control total desde el móvil. Cámaras Frigate. Presupuesto gratis en 24h.',
                keywords: 'alarma sin cuotas comercio zaragoza, domótica tiendas zaragoza, seguridad retail sin mensualidad, cámaras IA comercio zaragoza, ahorro energético tienda zaragoza, automatización comercio',
                url: `${this.baseUrl}/empresas/comercio`,
                image: `${this.baseUrl}/assets/images/usecase-security.png`
            },
            '/empresas/hoteles': {
                title: 'Domótica para Hoteles Zaragoza | Control por Habitación | Civitech',
                description: 'Climatización inteligente por habitación para hoteles en Zaragoza. Ahorro de hasta 8.500€/año. Monitorización de consumo real, cero cuotas de mantenimiento.',
                keywords: 'domótica hoteles zaragoza, control temperatura habitación hotel, monitorización consumo hotel, ahorro energético hotel, gestión hotel inteligente zaragoza, válvula termostata hotel',
                url: `${this.baseUrl}/empresas/hoteles`,
                image: `${this.baseUrl}/assets/images/smart_home_control.png`
            }
        };

        return configs[url] || {
            title: 'Domótica Zaragoza | Civitech - Instaladores de Casas Inteligentes',
            description: 'Civitech: Empresa líder en domótica en Zaragoza. Instalación sin obras y control centralizado. Ahorra hasta 30% en tu factura. Presupuesto gratis en 24h.',
            keywords: 'domotica zaragoza, instalaciones domotica zaragoza, automatizacion, smart home, civitech',
            url: `${this.baseUrl}${url}`
        };
    }

    updateSeo(config: SeoConfig): void {
        // Update title
        this.titleService.setTitle(config.title);

        // Update standard meta tags
        this.metaService.updateTag({ name: 'description', content: config.description });
        this.metaService.updateTag({ name: 'keywords', content: config.keywords || '' });
        this.metaService.updateTag({ name: 'author', content: 'Civitech' });
        this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

        // Open Graph (Facebook, LinkedIn)
        this.metaService.updateTag({ property: 'og:type', content: 'website' });
        this.metaService.updateTag({ property: 'og:site_name', content: 'Civitech' });
        this.metaService.updateTag({ property: 'og:title', content: config.title });
        this.metaService.updateTag({ property: 'og:description', content: config.description });
        this.metaService.updateTag({ property: 'og:image', content: config.image || this.defaultImage });
        this.metaService.updateTag({ property: 'og:url', content: config.url || this.baseUrl });
        this.metaService.updateTag({ property: 'og:locale', content: 'es_ES' });

        // Twitter Card
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaService.updateTag({ name: 'twitter:title', content: config.title });
        this.metaService.updateTag({ name: 'twitter:description', content: config.description });
        this.metaService.updateTag({ name: 'twitter:image', content: config.image || this.defaultImage });

        // Geo tags for local SEO
        this.metaService.updateTag({ name: 'geo.region', content: 'ES-Z' });
        this.metaService.updateTag({ name: 'geo.placename', content: 'Zaragoza' });
        this.metaService.updateTag({ name: 'geo.position', content: '41.648823;-0.889085' });
        this.metaService.updateTag({ name: 'ICBM', content: '41.648823, -0.889085' });

        // Add canonical URL
        this.updateCanonicalUrl(config.url || this.baseUrl);
    }

    private updateCanonicalUrl(url: string): void {
        let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');

        if (!link) {
            link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
        }

        link.setAttribute('href', url);
    }

    addStructuredData(data: any, id: string = 'schema-main'): void {
        const existingScript = this.document.getElementById(id);
        if (existingScript) {
            existingScript.remove();
        }

        const script = this.document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        this.document.head.appendChild(script);
    }

    removeStructuredData(id: string): void {
        const script = this.document.getElementById(id);
        if (script) {
            script.remove();
        }
    }

    addLocalBusinessSchema(): void {
        const localBusiness = {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://civitech.es',
            name: 'Civitech',
            description: 'Civitech: Empresa líder en domótica en Zaragoza. Instalación sin obras y control centralizado. Ahorra hasta 30% en tu factura.',
            image: `${this.baseUrl}/assets/images/logo_negro_horizontal.png`,
            url: this.baseUrl,
            telephone: '+34624074920',
            email: 'info@civitech.es',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Zaragoza, España',
                addressLocality: 'Zaragoza',
                addressRegion: 'Aragón',
                postalCode: '50001',
                addressCountry: 'ES'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 41.648823,
                longitude: -0.889085
            },
            areaServed: {
                '@type': 'City',
                name: 'Zaragoza'
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '19:00'
                }
            ],
            sameAs: [
                'https://www.facebook.com/share/1A3PRQzJHb/',
                'https://www.instagram.com/civitech.es',
                'https://www.tiktok.com/@civitech.es',
                'https://www.linkedin.com/company/civitech-es'
            ]
        };

        this.addStructuredData(localBusiness);
    }
}
