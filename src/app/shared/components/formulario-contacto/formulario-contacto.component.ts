import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'formulario-contacto-civitech',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.scss']
})
export class FormularioContactoComponent {
  private isBrowser: boolean;
  private n8nWebhookUrl = 'https://nonfragile-dudishly-marlys.ngrok-free.dev/webhook/civitech-lead';

  constructor(
    private analytics: AnalyticsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onFormSubmit(event: Event): void {
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Track in GA4
    this.analytics.trackFormSubmit('contacto');

    // Send to n8n webhook (non-blocking, don't interfere with Web3Forms)
    if (this.isBrowser) {
      const leadData = {
        name: formData.get('name'),
        apellido: formData.get('apellido'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        message: formData.get('message'),
        source: 'web_form',
        timestamp: new Date().toISOString()
      };

      fetch(this.n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      }).catch(() => {}); // Silent fail - Web3Forms is primary
    }

    // Let the form submit normally to Web3Forms
  }
}
