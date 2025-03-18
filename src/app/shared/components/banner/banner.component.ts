import { Component, Input } from '@angular/core';

@Component({
  selector: 'banner-civitech',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() imageUrl: string = '';
  @Input() mensaje: string = '';
  @Input() textoBoton: string='';

}
