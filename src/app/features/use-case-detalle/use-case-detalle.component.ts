import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UseCase } from '../../core/models/use-case.model';
import { UseCasesService } from '../../core/services/use-cases.service';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-use-case-detalle',
  templateUrl: './use-case-detalle.component.html',
  styleUrls: ['./use-case-detalle.component.scss']
})
export class UseCaseDetalleComponent implements OnInit {
  useCase?: UseCase;
  faqExpandido: { [key: number]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private useCasesService: UseCasesService,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.useCase = this.useCasesService.getUseCaseBySlug(slug);
      if (!this.useCase) {
        this.router.navigate(['/domotica-informacion']);
      } else {
        this.updateMetaTags();
        this.addSchemaMarkup();
      }
    }
  }

  // Update SEO using the centralized service
  updateMetaTags(): void {
    if (!this.useCase) return;

    this.seoService.updateSeo({
      title: `${this.useCase.titulo} | Domótica Zaragoza | Civitech`,
      description: `${this.useCase.descripcion} ${this.useCase.ahorroEstimado ? 'Ahorra hasta ' + this.useCase.ahorroEstimado : ''}. Instalación profesional en Zaragoza.`,
      keywords: `${this.useCase.titulo}, domótica ${this.useCase.categoria}, ${this.useCase.tecnologias?.map(t => t.nombre).join(', ')}, Zaragoza, Aragón`,
      image: this.useCase.imagen,
      url: window.location.href
    });
  }

  addSchemaMarkup(): void {
    if (!this.useCase) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": this.useCase.titulo,
      "description": this.useCase.descripcionDetallada,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Civitech",
        "telephone": "+34-624-074-920",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Zaragoza",
          "addressRegion": "Aragón",
          "addressCountry": "ES"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": "Aragón, España"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    };

    this.seoService.addStructuredData(schema, 'schema-service-detail');
  }

  volver(): void {
    this.router.navigate(['/domotica-informacion']);
  }

  contactar(): void {
    this.router.navigate(['/contactanos']);
  }

  toggleFaq(index: number): void {
    this.faqExpandido[index] = !this.faqExpandido[index];
  }
}
