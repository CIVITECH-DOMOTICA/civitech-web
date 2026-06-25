import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Página no encontrada (404) | Civitech',
      description: 'Esta página no existe. Encuentra todo sobre domótica en Zaragoza, automatización del hogar y soluciones inteligentes en Civitech.',
      url: 'https://civitech.es/404'
    });
    this.seoService.setRobotsTag('noindex, nofollow');
  }
}
