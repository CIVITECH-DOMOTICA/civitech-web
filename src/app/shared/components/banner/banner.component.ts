import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'banner-civitech',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() imageUrl: string = '';
  @Input() videoUrl: string = ''; // Nuevo input para vídeo
  @Input() mensaje: string = '';
  @Input() textoBoton: string = '';
  @Input() urlBoton: string = '';
  @Input() isH1: boolean = false;
  // Si se rellena, muestra un botón secundario de WhatsApp (canal donde más convierten los leads)
  @Input() whatsappTexto: string = '';

  private whatsappNumero = '34624074920';
  private whatsappMensaje = '¡Hola! Me interesa un presupuesto de domótica para mi hogar/negocio.';

  constructor(private router: Router, private analytics: AnalyticsService) { }

  navigate(): void {
    if (this.urlBoton) {
      this.router.navigateByUrl(this.urlBoton);
    } else {
      console.warn('URL de destino no válida');
    }
  }

  openWhatsApp(): void {
    this.analytics.trackWhatsAppClick();
    const url = `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(this.whatsappMensaje)}`;
    window.open(url, '_blank');
  }
}
