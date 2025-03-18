import { Component, Input } from '@angular/core';

@Component({
  selector: 'separador-civitech',
  templateUrl: './separador.component.html',
  styleUrls: ['./separador.component.scss']
})
export class SeparadorComponent {
  @Input() title: string = '';
}
