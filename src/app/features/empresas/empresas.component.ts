import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { EmpresaSegmentosService, EmpresaSegmento } from '../../core/services/empresa-segmentos.service';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
    selector: 'app-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

    segmentos: EmpresaSegmento[] = [];

    packs = [
        {
            icon: 'fa-shield-halved',
            nombre: 'Pack Seguridad Pro',
            tag: 'Protección total',
            descripcion: 'Para negocios que necesitan vigilancia y control de acceso sin pagar mensualidades.',
            incluye: [
                'Cámaras con IA (detección de personas)',
                'Control de acceso digital (tarjeta / PIN / app)',
                'Alarma perimetral integrada',
                'Grabación local — sin cloud ni cuotas',
                'Alertas al móvil en tiempo real'
            ],
            precio: 'Desde 1.500 €',
            popular: false
        },
        {
            icon: 'fa-solar-panel',
            nombre: 'Pack Ahorro Energético Pro',
            tag: 'El más solicitado',
            descripcion: 'Para negocios con facturas altas. Amortización típica en 18-24 meses.',
            incluye: [
                'Climatización inteligente por zonas y horarios',
                'Presencia — el local no consume en vacío',
                'Gestión de excedentes solares (si hay placas)',
                'Apagado total automático al cierre',
                'Informes de consumo en tiempo real'
            ],
            precio: 'Desde 2.000 €',
            popular: true
        },
        {
            icon: 'fa-building',
            nombre: 'Pack Negocio Inteligente',
            tag: 'Solución completa',
            descripcion: 'Seguridad + Ahorro + Confort + Conectividad. Gestiona tu negocio desde cualquier lugar.',
            incluye: [
                'Todo del Pack Seguridad Pro',
                'Todo del Pack Ahorro Energético Pro',
                'WiFi mesh profesional sin puntos muertos',
                'Escenas de luz por horario/día',
                'Control remoto total desde el móvil'
            ],
            precio: 'Desde 3.500 €',
            popular: false
        }
    ];

    constructor(
        private seo: SeoService,
        private segmentosService: EmpresaSegmentosService,
        private analytics: AnalyticsService
    ) { }

    trackPhoneClick(): void {
        this.analytics.trackPhoneCall();
    }

    trackPresupuestoClick(packName?: string): void {
        this.analytics.trackButtonClick('pedir_presupuesto', packName || 'empresas');
    }

    ngOnInit(): void {
        this.segmentos = this.segmentosService.getAll();

        this.seo.updateSeo({
            title: 'Domótica para Empresas en Zaragoza | Sin Cuotas | Civitech',
            description: 'Domótica profesional para negocios en Zaragoza: lavanderías, hostelería, oficinas, apartamentos turísticos, gimnasios, clínicas y comercios. Control total desde el móvil. Sin cuotas. Presupuesto gratis en 24h.',
            keywords: 'domótica empresas zaragoza, automatización negocios zaragoza, control acceso empresas, cámaras vigilancia sin cuotas, ahorro energético negocios, domótica hostelería, domótica lavanderías, domótica oficinas, domótica zaragoza b2b, civitech empresas',
            url: 'https://civitech.es/empresas'
        });
    }
}
