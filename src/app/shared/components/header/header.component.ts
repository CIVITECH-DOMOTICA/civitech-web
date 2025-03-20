import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'header-civitech',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  isMenuOpen = false; // Estado del menú

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route).then(() => {
      console.log('Navegación exitosa a:', route); // Debugging
      setTimeout(() => this.closeMenu(), 100);
    });
  }
}
