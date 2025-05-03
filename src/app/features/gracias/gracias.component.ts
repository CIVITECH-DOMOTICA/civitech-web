import { Component } from '@angular/core';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.scss']
})
export class GraciasComponent {
  opiniones = [
    {
      src:'/../../../../assets/images/cliente1.jpg',
      nombre: 'Domotización Casa Rural en Asturias',
      resenia: 'Nos especializamos en domótica con enfoque en estilo, funcionalidad y soluciones tecnológicas.'
    },
    {
      src:'/../../../../assets/images/cliente3.jpg',
      nombre: 'Monitorización de Consumo Energético en Barcelona',
      resenia: 'Nos especializamos en domótica con enfoque en estilo, funcionalidad y soluciones tecnológicas.'
    },
    {
      src:'/../../../../assets/images/cliente2.jpg',
      nombre: 'Domotización Piso en Castellón de la Plana',
      resenia: 'Nos especializamos en domótica con enfoque en estilo, funcionalidad y soluciones tecnológicas.'
    }
  ];
}
