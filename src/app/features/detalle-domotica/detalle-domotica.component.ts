import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { domoticaItems } from '../../shared/data/domotica-items';

@Component({
  selector: 'app-detalle-domotica',
  templateUrl: './detalle-domotica.component.html',
  styleUrls: ['./detalle-domotica.component.scss']
})
export class DetalleDomoticaComponent {
  // item: { id: string; titulo: string; subtitulo: string; imagenPrincipal: string; caracteristicas: { icono: string; titulo: string; descripcion: string; }[]; imagenSecundaria: string; testimonio: { nombre: string; calificacion: number; comentario: string; }; estadisticas?: undefined; } | { id: string; titulo: string; subtitulo: string; imagenPrincipal: string; caracteristicas: { icono: string; titulo: string; descripcion: string; }[]; estadisticas: { valor: string; descripcion: string; }[]; imagenSecundaria?: undefined; testimonio?: undefined; } | undefined;
  item: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.url[1].path; 
    this.item = domoticaItems.find(d => d.id === id);
  }

  irAContacto(): void {
    this.router.navigate(['/contactanos']).then(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
