import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Proyecto } from '../../core/models/proyecto.model';
import { ProyectosService } from '../../core/services/proyectos.service';

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.scss']
})
export class ProyectoDetalleComponent implements OnInit {
  proyecto?: Proyecto;
  imagenActual: string = '';
  imagenIndex: number = 0;
  lightboxVisible: boolean = false;

  // Para animaciones de contadores
  ahorroNumerico: number = 0;
  satisfaccionNumerica: number = 0;
  totalDispositivos: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proyectosService: ProyectosService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.proyecto = this.proyectosService.getProyectoBySlug(slug);

      if (this.proyecto) {
        this.imagenActual = this.proyecto.imagenPrincipal;
        this.animarContadores();
        this.updateSEO();
      } else {
        // Redirigir si el proyecto no existe
        this.router.navigate(['/proyectos']);
      }
    }
  }

  updateSEO(): void {
    if (!this.proyecto) return;

    // SEO: Title
    this.titleService.setTitle(`${this.proyecto.nombre} | Caso de Éxito | Civitech`);

    // SEO: Meta Description
    this.metaService.updateTag({
      name: 'description',
      content: `${this.proyecto.resumen} Proyecto de ${this.proyecto.tipo} en ${this.proyecto.ubicacion}. ${this.proyecto.ahorroEnergetico ? 'Ahorro energético del ' + this.proyecto.ahorroEnergetico : ''}`
    });

    // SEO: Open Graph
    this.metaService.updateTag({ property: 'og:title', content: this.proyecto.nombre });
    this.metaService.updateTag({ property: 'og:description', content: this.proyecto.resumen });
    this.metaService.updateTag({ property: 'og:image', content: this.proyecto.imagenPrincipal });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });

    // SEO: Schema.org Article
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": this.proyecto.nombre,
      "description": this.proyecto.descripcionCompleta,
      "image": this.proyecto.imagenPrincipal,
      "author": {
        "@type": "Organization",
        "name": "Civitech"
      },
      "publisher": {
        "@type": "LocalBusiness",
        "name": "Civitech",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Zaragoza",
          "addressCountry": "ES"
        }
      },
      "datePublished": this.convertirFecha(this.proyecto.fecha),
      "about": {
        "@type": "Thing",
        "name": `Domótica ${this.proyecto.tipo}`
      }
    };

    let script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-proyecto';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  convertirFecha(fecha: string): string {
    // Convertir "Junio 2023" a "2023-06-01"
    const meses: { [key: string]: string } = {
      'enero': '01', 'febrero': '02', 'marzo': '03', 'abril': '04',
      'mayo': '05', 'junio': '06', 'julio': '07', 'agosto': '08',
      'septiembre': '09', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
    };
    const parts = fecha.toLowerCase().split(' ');
    if (parts.length === 2) {
      const mes = meses[parts[0]] || '01';
      return `${parts[1]}-${mes}-01`;
    }
    return new Date().toISOString();
  }

  animarContadores(): void {
    if (!this.proyecto) return;

    // Animar ahorro energético
    if (this.proyecto.ahorroEnergetico) {
      const ahorro = parseInt(this.proyecto.ahorroEnergetico);
      this.animarNumero(0, ahorro, 2000, (val) => this.ahorroNumerico = val);
    }

    // Calcular y animar total de dispositivos
    if (this.proyecto.dispositivosInstalados) {
      const total = this.proyecto.dispositivosInstalados.reduce((acc: number, curr: any) => acc + curr.cantidad, 0);
      this.animarNumero(0, total, 2000, (val) => this.totalDispositivos = Math.floor(val));
    }

    // Animar satisfacción
    if (this.proyecto.satisfaccionCliente) {
      const satisfaccion = parseInt(this.proyecto.satisfaccionCliente);
      this.animarNumero(0, satisfaccion, 2000, (val) => this.satisfaccionNumerica = val);
    }
  }

  animarNumero(inicio: number, fin: number, duracion: number, callback: (val: number) => void): void {
    const range = fin - inicio;
    const increment = range / (duracion / 16);
    let current = inicio;

    const timer = setInterval(() => {
      current += increment;
      if (current >= fin) {
        current = fin;
        clearInterval(timer);
      }
      callback(Math.floor(current));
    }, 16);
  }

  cambiarImagen(index: number): void {
    if (this.proyecto && this.proyecto.imagenes[index]) {
      this.imagenActual = this.proyecto.imagenes[index];
      this.imagenIndex = index;
    }
  }

  abrirLightbox(imagen: string): void {
    this.imagenActual = imagen;
    this.lightboxVisible = true;
  }

  cerrarLightbox(): void {
    this.lightboxVisible = false;
  }

  volverAProyectos(): void {
    this.router.navigate(['/proyectos']);
  }

  irAContacto(): void {
    this.router.navigate(['/contactanos']);
  }

  getTechName(tech: string | { nombre: string, url?: string }): string {
    return typeof tech === 'string' ? tech : tech.nombre;
  }

  getTechUrl(tech: string | { nombre: string, url?: string, logo?: string }): string | undefined {
    return typeof tech === 'string' ? undefined : tech.url;
  }

  hasTechUrl(tech: string | { nombre: string, url?: string, logo?: string }): boolean {
    return typeof tech !== 'string' && !!tech.url;
  }

  getTechLogo(tech: string | { nombre: string, url?: string, logo?: string }): string | undefined {
    if (typeof tech === 'string') return undefined;
    return tech.logo;
  }

  hasTechLogo(tech: string | { nombre: string, url?: string, logo?: string }): boolean {
    return typeof tech !== 'string' && !!tech.logo;
  }

  getIconoTecnologia(tech: string | { nombre: string, url?: string, logo?: string }): string {
    const name = this.getTechName(tech).toLowerCase();

    if (name.includes('wifi') || name.includes('wireless') || name.includes('mesh')) return 'fa-wifi';
    if (name.includes('reolink') || name.includes('cámara') || name.includes('nvr') || name.includes('frigate') || name.includes('tapo')) return 'fa-video';
    if (name.includes('home assistant') || name.includes('ha')) return 'fa-house-signal';
    if (name.includes('shelly') || name.includes('nube') || name.includes('cloud')) return 'fa-cloud';
    if (name.includes('zigbee') || name.includes('z-wave')) return 'fa-share-nodes';
    if (name.includes('tesla') || name.includes('cargador') || name.includes('ev') || name.includes('batería')) return 'fa-bolt';
    if (name.includes('daikin') || name.includes('toshiba') || name.includes('clima') || name.includes('airzone')) return 'fa-temperature-half';
    if (name.includes('ethernet') || name.includes('cable') || name.includes('red') || name.includes('modbus')) return 'fa-network-wired';
    if (name.includes('aqara') || name.includes('sensor')) return 'fa-eye';

    return 'fa-microchip'; // Fallback por si acaso
  }

  handleImageError(tech: string | { nombre: string, url?: string, logo?: string }): void {
    if (typeof tech !== 'string') {
      tech.logo = undefined; // Si falla, quitamos el logo para mostrar el icono
    }
  }

  getIconoCategoria(categoria: string): string {
    const iconos: { [key: string]: string } = {
      'iluminacion': 'fa-lightbulb',
      'climatizacion': 'fa-temperature-half',
      'seguridad': 'fa-shield-halved',
      'multimedia': 'fa-tv',
      'energia': 'fa-bolt',
      'otros': 'fa-microchip'
    };
    return iconos[categoria] || 'fa-microchip';
  }

  getEstrellas(cantidad: number = 5): number[] {
    return Array(cantidad).fill(0);
  }
}
