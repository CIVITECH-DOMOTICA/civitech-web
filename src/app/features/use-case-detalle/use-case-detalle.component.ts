import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { UseCase } from '../../core/models/use-case.model';
import { UseCasesService } from '../../core/services/use-cases.service';

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
    private titleService: Title,
    private metaService: Meta
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

  updateMetaTags(): void {
    if (!this.useCase) return;

    // Title
    this.titleService.setTitle(`${this.useCase.titulo} | Domótica Zaragoza | Civitech`);

    // Description
    this.metaService.updateTag({
      name: 'description',
      content: `${this.useCase.descripcion} ${this.useCase.ahorroEstimado ? 'Ahorra hasta ' + this.useCase.ahorroEstimado : ''}. Instalación profesional en Zaragoza.`
    });

    // Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: `${this.useCase.titulo}, domótica ${this.useCase.categoria}, ${this.useCase.tecnologias?.map(t => t.nombre).join(', ')}, Zaragoza, Aragón`
    });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: this.useCase.titulo });
    this.metaService.updateTag({ property: 'og:description', content: this.useCase.descripcion });
    this.metaService.updateTag({ property: 'og:image', content: this.useCase.imagen });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.useCase.titulo });
    this.metaService.updateTag({ name: 'twitter:description', content: this.useCase.descripcion });
    this.metaService.updateTag({ name: 'twitter:image', content: this.useCase.imagen });
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

    let script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
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
