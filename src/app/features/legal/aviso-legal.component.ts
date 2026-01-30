import { Component } from '@angular/core';

@Component({
    selector: 'app-aviso-legal',
    template: `
    <div class="legal-page">
      <div class="container">
        <h1 class="page-title">Aviso Legal y Términos de Uso</h1>
        <div class="legal-content">
          <p class="last-updated">Última actualización: Enero 2026</p>

          <section>
            <h2>1. Información General</h2>
            <p>En cumplimiento de la Ley de Servicios de la Sociedad de la Información, se informa que el titular de este sitio web es <strong>Civitech Domótica</strong>.</p>
            <p><strong>Domicilio:</strong> Calle Nuestra Señora de Covadonga 39, Zaragoza<br>
            <strong>Email:</strong> info@civitech.es<br>
            <strong>Teléfono:</strong> 624074920</p>
          </section>

          <section>
            <h2>2. Propiedad Intelectual</h2>
            <p>Todo el contenido de este sitio web (imágenes, textos, diseños, logotipos) es propiedad intelectual de Civitech o de terceros que han autorizado su uso. Queda prohibida la reproducción total o parcial sin autorización expresa.</p>
          </section>

          <section>
            <h2>3. Responsabilidad</h2>
            <p>Civitech no se hace responsable de los daños derivados del uso incorrecto de este sitio web o de la interrupción del servicio por causas de fuerza mayor. El contenido sobre instalación de dispositivos es meramente informativo y no sustituye la labor de un técnico cualificado.</p>
          </section>

          <section>
            <h2>4. Legislación Aplicable</h2>
            <p>El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española. Para la resolución de cualquier conflicto o litigio, las partes se someterán a los Juzgados y Tribunales de Zaragoza.</p>
          </section>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .legal-page { padding: 120px 0 80px; background: #f9fafb; min-height: 100vh; }
    .container { max-width: 900px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 2.5rem; margin-bottom: 2rem; color: #1a1a1a; text-align: center; }
    .legal-content { background: white; padding: 3rem; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    .last-updated { color: #666; font-style: italic; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
    h2 { font-size: 1.5rem; color: #2d3748; margin-top: 2rem; margin-bottom: 1rem; font-weight: 700; }
    p, li { color: #4a5568; line-height: 1.7; margin-bottom: 1rem; font-size: 1rem; }
    @media (max-width: 768px) { .legal-content { padding: 1.5rem; } .page-title { font-size: 2rem; } }
  `]
})
export class AvisoLegalComponent { }
