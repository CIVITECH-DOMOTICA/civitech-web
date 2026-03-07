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
                description: 'Civitech: Somos tu empresa líder en domótica en Zaragoza. Instalación sin obras, sistemas abiertos y control centralizado. Ahorra hasta 30% en tu factura. Presupuesto gratis en 24h.',
                keywords: 'domotica zaragoza, empresa domotica zaragoza, instalador domotica zaragoza, casa inteligente zaragoza, civitech',
                url: this.baseUrl
            },
            '/acerca-de-nosotros': {
                title: 'Domótica Zaragoza | Civitech - Expertos en Casa Inteligente',
                description: 'Civitech: Somos tu empresa líder en domótica en Zaragoza. Instalación sin obras, sistemas abiertos y control centralizado. Ahorra hasta 30% en tu factura. Presupuesto gratis en 24h.',
                keywords: 'domotica zaragoza, empresa domotica zaragoza, instalador domotica zaragoza, casa inteligente zaragoza, civitech',
                url: this.baseUrl
            },
            '/domotica-informacion': {
                title: 'Domótica Zaragoza : Soluciones y Control Total del Hogar | Civitech',
                description: 'Descubre cómo la domótica puede transformar tu hogar en Zaragoza: ahorro energético, seguridad y confort. Instaladores de domótica sin obras. Pide presupuesto.',
                keywords: 'domotica zaragoza, instalaciones domotica zaragoza, smart home zaragoza, automatizacion vivienda zaragoza',
                url: `${this.baseUrl}/domotica-informacion`
            },
            '/proyectos': {
                title: 'Proyectos de Domótica Realizados en Zaragoza | Casos de Éxito | Civitech',
                description: 'Explora nuestros proyectos de domótica en Zaragoza: pisos, chalets y oficinas automatizadas. Testimonios reales de clientes satisfechos. Más de 500 instalaciones.',
                keywords: 'proyectos domótica zaragoza, instalaciones domótica, casos éxito domótica, testimonios clientes',
                url: `${this.baseUrl}/proyectos`
            },
            '/contactanos': {
                title: 'Contacta con Civitech | Presupuesto Gratis Domótica Zaragoza en 24h',
                description: 'Solicita tu presupuesto gratuito de domótica en Zaragoza. Respuesta en 24 horas. Llámanos al 624074920 o escríbenos. Instalación profesional sin obras.',
                keywords: 'presupuesto domótica zaragoza, contacto civitech, instalación domótica precio, consulta gratis',
                url: `${this.baseUrl}/contactanos`
            },
            '/instaladores': {
                title: 'Programa Partners Civitech | Domótica para Instaladores y Reformistas',
                description: 'Únete a la red de partners de Civitech. Ofrece domótica en tus reformas sin complicaciones técnicas. Aumenta tu ticket medio y diferénciate.',
                keywords: 'partners domótica, instaladores domótica zaragoza, colaboración reformas zaragoza, civitech partners',
                url: `${this.baseUrl}/instaladores`
            }
        };

        return configs[url] || {
            title: 'Domótica Zaragoza | Civitech - Instaladores de Casas Inteligentes',
            description: 'Empresa especializada en domótica e IoT en Zaragoza. Instalación sin obras con control centralizado. Ahorra energía, mejora tu seguridad. Presupuesto gratis en 24h.',
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
            description: 'Empresa especializada en domótica e IoT en Zaragoza. Instalación profesional sin obras con control centralizado.',
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
            priceRange: '€€',
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '18:00'
                }
            ],
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '47'
            },
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
