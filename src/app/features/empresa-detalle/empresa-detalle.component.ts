import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaSegmentosService, EmpresaSegmento } from '../../core/services/empresa-segmentos.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
    selector: 'app-empresa-detalle',
    templateUrl: './empresa-detalle.component.html',
    styleUrls: ['./empresa-detalle.component.scss']
})
export class EmpresaDetalleComponent implements OnInit, OnDestroy {

    segmento: EmpresaSegmento | undefined;

    private heroGradients: { [key: string]: string } = {
        'azul': 'linear-gradient(135deg, #0a1628 0%, #0d2241 60%, #0a1628 100%)',
        'naranja': 'linear-gradient(135deg, #1a0d00 0%, #2d1800 60%, #1a0d00 100%)',
        'morado': 'linear-gradient(135deg, #130a1e 0%, #1e0d30 60%, #130a1e 100%)',
        'verde': 'linear-gradient(135deg, #071a0e 0%, #0d2c18 60%, #071a0e 100%)',
        'cian': 'linear-gradient(135deg, #071a1a 0%, #0d2c2c 60%, #071a1a 100%)',
        'gris': 'linear-gradient(135deg, #0f1117 0%, #1c2028 60%, #0f1117 100%)',
        'rojo': 'linear-gradient(135deg, #1a0000 0%, #2d0000 60%, #1a0000 100%)'
    };

    get heroStyle(): { [key: string]: string } {
        const colorClass = this.segmento?.colorClass || 'azul';
        return { background: this.heroGradients[colorClass] || this.heroGradients['azul'] };
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private segmentosService: EmpresaSegmentosService,
        private seo: SeoService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const slug = params.get('slug') || '';
            this.segmento = this.segmentosService.getBySlug(slug);

            if (!this.segmento) {
                this.router.navigate(['/empresas']);
                return;
            }

            const s = this.segmento;

            // Standard meta tags
            this.seo.updateSeo({
                title: s.seo.title,
                description: s.seo.description,
                keywords: s.seo.keywords,
                url: `https://civitech.es/empresas/${slug}`
            });

            // JSON-LD: Service schema
            this.seo.addStructuredData({
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: s.seoTitle,
                description: s.seo.description,
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'Civitech',
                    url: 'https://civitech.es',
                    telephone: '+34624074920',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Zaragoza',
                        addressRegion: 'Aragón',
                        addressCountry: 'ES'
                    }
                },
                areaServed: {
                    '@type': 'City',
                    name: 'Zaragoza'
                },
                serviceType: 'Domótica y Automatización Empresarial',
                url: `https://civitech.es/empresas/${slug}`,
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'EUR',
                    availability: 'https://schema.org/InStock',
                    description: 'Presupuesto gratuito en 24 horas. Sin cuotas mensuales.'
                }
            }, 'schema-service');

            // JSON-LD: BreadcrumbList schema
            this.seo.addStructuredData({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://civitech.es' },
                    { '@type': 'ListItem', position: 2, name: 'Empresas', item: 'https://civitech.es/empresas' },
                    { '@type': 'ListItem', position: 3, name: s.nombre, item: `https://civitech.es/empresas/${slug}` }
                ]
            }, 'schema-breadcrumb');
        });
    }

    ngOnDestroy(): void {
        this.seo.removeStructuredData('schema-service');
        this.seo.removeStructuredData('schema-breadcrumb');
    }
}
