import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosService } from '../../core/services/proyectos.service';
import { Proyecto } from '../../core/models/proyecto.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  urlBoton: string = '/acerca-de-nosotros';
  proyectos: Proyecto[] = [];

  constructor(
    private router: Router,
    private proyectosService: ProyectosService
  ) { }

  ngOnInit(): void {
    this.proyectos = this.proyectosService.getProyectos();
  }

  navigate(): void {
    if (this.urlBoton) {
      this.router.navigateByUrl(this.urlBoton);
    } else {
      console.warn('URL de destino no válida');
    }
  }

  verDetalle(proyecto: Proyecto): void {
    if (proyecto && proyecto.slug) {
      this.router.navigate(['/proyectos', proyecto.slug]);
    }
  }
}
