import { Component, OnInit, OnDestroy, Inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-instaladores',
  templateUrl: './instaladores.component.html',
  styleUrls: ['./instaladores.component.scss']
})
export class InstalladoresComponent implements OnInit, OnDestroy {
  private jsonLdScript: HTMLScriptElement | null = null;
  private isBrowser: boolean;

  constructor(
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // 1. Configurar Metadatos SEO
    this.title.setTitle('Hazte Partner Domótico | Gana más en tus Reformas - Civitech');

    this.meta.updateTag({
      name: 'description',
      content: 'Únete a la red de instaladores Civitech en Zaragoza. Ofrece domótica profesional en tus reformas sin complicaciones técnicas y aumenta tu ticket medio.'
    });

    // 2. Insertar Schema.org JSON-LD (ProfessionalService)
    this.addStructuredData();

    // 3. Scroll suave (browser only)
    if (this.isBrowser) {
      this.setupSmoothScroll();
    }
  }

  ngOnDestroy(): void {
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
      const links = this.document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (link as HTMLAnchorElement).getAttribute('href');
          if (href) {
            const target = this.document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });
    }, 100);
  }

}
