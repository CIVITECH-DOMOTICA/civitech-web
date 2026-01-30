import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instaladores',
  templateUrl: './instaladores.component.html',
  styleUrls: ['./instaladores.component.scss']
})
export class InstalladoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Scroll suave para anclas
    this.setupSmoothScroll();
  }

  private setupSmoothScroll(): void {
    setTimeout(() => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (link as HTMLAnchorElement).getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });
    }, 100);
  }

}
