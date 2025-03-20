import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent {

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

}
