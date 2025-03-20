import { Component  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-civitech',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
   constructor(private router: Router) {}
  anioActual: number = new Date().getFullYear();

  navigateTo(route: string): void {
    this.router.navigateByUrl(route).then(() => {
      console.log('Navegación exitosa a:', route);
    });
  }
}
