import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de-nosotros',
  templateUrl: './acerca-de-nosotros.component.html',
  styleUrls: ['./acerca-de-nosotros.component.scss']
})
export class AcercaDeNosotrosComponent {

      opiniones = [
      {
        src:'../../../../assets/images/cliente3.jpg',
        nombre: 'Montse',
        resenia: 'Se instalo un pequeño aparato en mi chalet de Barcelona para monitorizar el consumo de energia en casa. Desde ese dia puedo ver cuanto estoy gastando en cualquier momento y lo que llevo gastado en el día o en el mes, ya no me llevo sorpresas en las facturas y he podido ahorrar al conocer mis consumos! Super rapido, sin polvo, cables ni ruido.'
      },
      {
        src:'../../../../assets/images/cliente1.jpg',
        nombre: 'José Maria',
        resenia: 'La instalación de paneles solares en mi casa de Asturias fue perfecta. Desde el primer día notamos la diferencia en la factura de la luz. Además, el equipo de Civitec nos explicó todo de manera clara, desde el número de paneles hasta el proceso de instalación. Recomiendo totalmente sus servicios, son rápidos, eficientes y muy profesionales.'
      },
      {
        src:'../../../../assets/images/cliente2.jpg',
        nombre: 'Teresa',
        resenia: 'Decidimos domotizar y reformar nuestro piso en Castellon y fue una de las mejores decisiones que hemos tomado. Ahora controlamos las luces, la calefacción y las persianas desde el móvil, ¡incluso desde fuera de casa! Civitec nos ayudó a integrar todo con Alexa, y el proceso fue muy sencillo gracias a su equipo de expertos por hacer esto posible. '
      }
    ];


}
