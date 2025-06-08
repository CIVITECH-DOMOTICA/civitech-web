import { Component } from '@angular/core';

@Component({
  selector: 'domotica-civitech',
  templateUrl: './domotica.component.html',
  styleUrls: ['./domotica.component.scss']
})
export class DomoticaComponent {

  categorias = [
    {
      icon: 'fa-regular fa-lightbulb',
      titulo: 'Automatización de Luces',
      descripcion: 'Controla luces de forma remota y automática.',
      id: 'automatizacion-luces'
    },
    {
      icon: 'fa-regular fa-window-maximize',
      titulo: 'Control de Persianas',
      descripcion: 'Automatiza persianas para máximo confort.',
      id: 'control-persianas'
    },
    {
      icon: 'fa-solid fa-shield-halved', 
      titulo: 'Seguridad Inteligente',
      descripcion: 'Controla accesos, cámaras y alarmas desde tu smartphone.',
      id: 'seguridad-inteligente'
    },
    {
      icon: 'fa-solid fa-temperature-half',
      titulo: 'Eficiencia Energética',
      descripcion: 'Optimiza el consumo de energía y reduce tu factura.',
      id: 'eficiencia-energetica'
    }
  ];

  casosExito = [
    {
      imagen: '/assets/images/home.jpg',
      titulo: 'Angras Integras es',
      ubicacion: 'Casa Rural',
      descripcion: 'Domotización Casa Rural en Asturias',
      link: '/proyectos/casa-rural'
    },
    {
      imagen: '/assets/images/contacto.jpg',
      titulo: 'Monitorización de Consumo',
      ubicacion: 'Barcelona',
      descripcion: 'Control de energía eficiente en chalet moderno.',
      link: '/proyectos/consumo-barcelona'
    },
    {
      imagen: '/assets/images/home.jpg',
      titulo: 'Vivienda Unifamiliar',
      ubicacion: 'Madrid',
      descripcion: 'Automatización integral de iluminación y seguridad.',
      link: '/proyectos/vivienda-madrid'
    }
  ];

}
