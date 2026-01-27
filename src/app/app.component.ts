import { Component, OnInit } from '@angular/core';
import { SeoService } from './core/services/seo.service';
import { AnalyticsService } from './core/services/analytics.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Civitech.Web';

  urlPrincipal: string = '/../../../../assets/images/contact_3.jpg';

  constructor(
    private seoService: SeoService,
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
    // Initialize SEO with local business schema
    this.seoService.addLocalBusinessSchema();

    // Initialize Google Analytics (Replace with your GA4 ID)
    this.analyticsService.init('G-XXXXXXXXXX');

    // Initialize Animate on Scroll
    AOS.init({
      duration: 800, // Smoother feel
      easing: 'ease-out-quad',
      once: true,
      mirror: false
    });
  }
}
