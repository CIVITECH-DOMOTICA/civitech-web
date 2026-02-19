import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-civitech',
  templateUrl: './faq-civitech.component.html',
  styleUrls: ['./faq-civitech.component.scss']
})
export class FaqCivitechComponent {
  activeIndex: number | null = null;

  faqs: FaqItem[] = [
    {
      question: '¿Es necesario realizar obras en casa?',
      answer: 'No. Nuestras soluciones se basan en dispositivos inalámbricos y modulares que se integran en tu instalación eléctrica actual sin picar paredes ni cambiar el cableado.'
    },
    {
      question: '¿Qué pasa si se cae la conexión a internet?',
      answer: 'Tus dispositivos seguirán funcionando localmente. Podrás seguir controlando las luces y otros sistemas desde los interruptores físicos y algunos controles remotos locales.'
    },
    {
      question: '¿Es compatible con Alexa, Google Home o Apple HomeKit?',
      answer: 'Sí. Utilizamos Home Assistant como cerebro central, lo que nos permite ofrecer una compatibilidad total con los principales ecosistemas del mercado.'
    },
    {
      question: '¿Cuánto tiempo tarda la instalación?',
      answer: 'Para un piso estándar en Zaragoza, la instalación suele completarse en un solo día. Configuramos todo y te enseñamos a usarlo antes de irnos.'
    },
    {
      question: '¿Tenéis soporte post-venta?',
      answer: 'Por supuesto. Ofrecemos mantenimiento y soporte para asegurar que tu sistema esté siempre actualizado y funcionando perfectamente.'
    },
    {
      question: '¿Prestáis servicio fuera de Zaragoza?',
      answer: 'Nuestra sede está en Zaragoza y operamos presencialmente en todo Aragón. Para proyectos grandes, consultad disponibilidad nacional.'
    }
  ];

  toggleFaq(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
