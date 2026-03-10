import { Component, Inject, PLATFORM_ID, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'footer-civitech',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  anioActual: number = new Date().getFullYear();

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadHabitissimoWidget();
    }
  }

  private loadHabitissimoWidget(): void {
    // Check if script is already injected to avoid duplicates
    if (this.document.getElementById('habitissimo-script')) return;

    const script = this.renderer.createElement('script');
    script.id = 'habitissimo-script';
    script.src = 'https://api.habitissimo.es/widget/habitissimo_profile/civitech.js';
    script.async = true;
    script.defer = true;

    // Append to the habitissimo div
    const container = this.document.getElementById('habitissimo-habitissimo_profile');
    if (container) {
      this.renderer.appendChild(container, script);
    }
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route).then(() => {
      console.log('Navegación exitosa a:', route);
    });
  }
}
