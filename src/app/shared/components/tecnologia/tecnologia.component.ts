import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tecnologia-civitech',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent {
  @Input()  mensaje: string ='';
  @Input() boton: string ='';
  @Input() urlBoton: string ='';
  constructor(private router: Router) {}

  navigate(): void {
    if (this.urlBoton) {
      this.router.navigateByUrl(this.urlBoton);
    } else {
      console.warn('URL de destino no válida');
    }
  }
}
