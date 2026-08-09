import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.scss']
})
export class GraciasComponent implements OnInit {

  constructor(
    private seoService: SeoService,
    private analytics: AnalyticsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // SEO de la página de confirmación — noindex para no indexar páginas de conversión
    this.seoService.updateSeo({
      title: '¡Solicitud Recibida! | Civitec Domótica — Domótica Zaragoza',
      description: 'Hemos recibido tu solicitud de presupuesto. Un técnico de Civitec Domótica te contactará en menos de 24 horas. Gracias por confiar en nosotros.',
      url: 'https://civitech.es/gracias'
    });

    // Marcar como noindex (página de confirmación, no debe indexarse)
    this.seoService.setRobotsTag('noindex, nofollow');

    // Disparar evento de conversión GA4 — configúralo como goal en GA4
    // Este es el evento principal de conversión del embudo
    if (isPlatformBrowser(this.platformId)) {
      this.analytics.trackConversion();
    }
  }
}
