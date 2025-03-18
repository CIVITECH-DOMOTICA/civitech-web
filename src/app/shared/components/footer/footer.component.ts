import { Component  } from '@angular/core';

@Component({
  selector: 'footer-civitech',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  anioActual: number = new Date().getFullYear();
}
