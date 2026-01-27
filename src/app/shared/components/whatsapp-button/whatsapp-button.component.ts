import { Component } from '@angular/core';

@Component({
    selector: 'whatsapp-button',
    templateUrl: './whatsapp-button.component.html',
    styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
    phoneNumber = '34624074920'; // Número sin el +
    defaultMessage = '¡Hola! Me interesa obtener más información sobre domótica para mi hogar.';

    openWhatsApp(): void {
        const encodedMessage = encodeURIComponent(this.defaultMessage);
        const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
}
