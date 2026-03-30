import { Component } from '@angular/core';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
    selector: 'whatsapp-button',
    templateUrl: './whatsapp-button.component.html',
    styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
    phoneNumber = '34624074920';
    defaultMessage = '¡Hola! Me interesa obtener más información sobre domótica para mi hogar.';

    constructor(private analytics: AnalyticsService) {}

    openWhatsApp(): void {
        this.analytics.trackWhatsAppClick();
        const encodedMessage = encodeURIComponent(this.defaultMessage);
        const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
}
