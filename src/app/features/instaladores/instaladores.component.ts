import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-instaladores',
  templateUrl: './instaladores.component.html',
  styleUrls: ['./instaladores.component.scss']
})
export class InstalladoresComponent implements OnInit, OnDestroy {
  private jsonLdScript: HTMLScriptElement | null = null;

  constructor(
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    // 1. Configurar Metadatos SEO
    this.title.setTitle('Hazte Partner Domótico | Gana más en tus Reformas - Civitech');

    this.meta.updateTag({
      name: 'description',
      content: 'Únete a la red de instaladores Civitech en Zaragoza. Ofrece domótica profesional en tus reformas sin complicaciones técnicas y aumenta tu ticket medio.'
    });

    // 2. Insertar Schema.org JSON-LD (ProfessionalService)
    this.addStructuredData();

    // 3. Scroll suave
    this.setupSmoothScroll();
  }

  ngOnDestroy(): void {
    // Limpiar JSON-LD al salir para no duplicar
    if (this.jsonLdScript) {
      this.renderer.removeChild(this.document.head, this.jsonLdScript);
    }
  }

  private addStructuredData(): void {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Civitech - Programa de Partners",
      "description": "Servicio de instalación y consultoría domótica para reformistas e instaladores eléctricos.",
      "provider": {
        "@type": "Organization",
        "name": "Civitech",
        "url": "https://civitech.es"
      },
      "areaServed": "Zaragoza",
      "offers": {
        "@type": "Offer",
        "description": "Diseño, suministro y configuración de sistemas domóticos"
      }
    };

    this.jsonLdScript = this.renderer.createElement('script');

    if (this.jsonLdScript) {
      this.jsonLdScript.type = 'application/ld+json';
      this.jsonLdScript.text = JSON.stringify(schema);
      this.renderer.appendChild(this.document.head, this.jsonLdScript);
    }
  }

  private setupSmoothScroll(): void {
    setTimeout(() => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (link as HTMLAnchorElement).getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });
    }, 100);
  }

}
