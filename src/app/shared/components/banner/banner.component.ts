import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'banner-civitech',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() imageUrl: string = '';
  @Input() videoUrl: string = ''; // Nuevo input para vídeo
  @Input() mensaje: string = '';
  @Input() textoBoton: string = '';
  @Input() urlBoton: string = '';

  constructor(private router: Router) { }

  navigate(): void {
    if (this.urlBoton) {
      this.router.navigateByUrl(this.urlBoton);
    } else {
      console.warn('URL de destino no válida');
    }
  }
}
