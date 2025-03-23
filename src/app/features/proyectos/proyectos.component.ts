import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  constructor(private router: Router) {}
  urlBoton: string ='/acerca-de-nosotros'
  opiniones = [

    {
      src:'/../../../../assets/images/cliente1.jpg',
      nombre: 'Domotizacion Casa Rural en Asturias',
      resenia: 'Nos especializamos en Domotica con enfoque en estilo, funcionalidad y soluciones tecnológicas. '
    },
    {
      src:'/../../../../assets/images/cliente3.jpg',
      nombre: 'Monitorizacion de Consumo Energetico Chalet en Barcelona',
      resenia: 'Nos especializamos en Domotica con enfoque en estilo, funcionalidad y soluciones tecnológicas. '
    },
    {
      src:'/../../../../assets/images/cliente2.jpg',
      nombre: 'Domotizacion Piso en Castellon de la Plana',
      resenia: 'Nos especializamos en Domotica con enfoque en estilo, funcionalidad y soluciones tecnológicas. '
    }
  ];

  navigate(): void {
    if (this.urlBoton) {
      this.router.navigateByUrl(this.urlBoton);
    } else {
      console.warn('URL de destino no válida');
    }
  }
}
