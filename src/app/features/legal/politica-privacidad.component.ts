import { Component } from '@angular/core';

@Component({
    selector: 'app-politica-privacidad',
    template: `
    <div class="legal-page">
      <div class="container">
        <h1 class="page-title">Política de Privacidad</h1>
        <div class="legal-content">
          <p class="last-updated">Última actualización: Enero 2026</p>

          <section>
            <h2>1. Responsable del Tratamiento</h2>
            <p>Civitech Domótica ("nosotros", "nuestro/a") se compromete a proteger su privacidad. Esta política describe cómo tratamos sus datos personales.</p>
            <p><strong>Contacto:</strong> info@civitech.es</p>
          </section>

          <section>
            <h2>2. Qué datos recopilamos</h2>
            <p>Recopilamos información que usted nos proporciona directamente al:</p>
            <ul>
              <li>Rellenar nuestro formulario de contacto (Nombre, Email, Teléfono).</li>
              <li>Suscribirse a nuestras comunicaciones.</li>
              <li>Contratar nuestros servicios de instalación.</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalidad del tratamiento</h2>
            <p>Sus datos se utilizan exclusivamente para:</p>
            <ul>
              <li>Gestionar sus consultas y solicitudes de presupuesto.</li>
              <li>Prestar los servicios contratados de instalación y mantenimiento.</li>
              <li>Enviarle información relevante sobre actualizaciones o alertas de seguridad de sus dispositivos.</li>
            </ul>
          </section>

          <section>
            <h2>4. Cookies y Tecnologías Similares</h2>
            <p>Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y analizar el tráfico web. Puede consultar el detalle en nuestra <a routerLink="/politica-cookies">Política de Cookies</a>.</p>
          </section>

          <section>
            <h2>5. Sus Derechos</h2>
            <p>Puede ejercer sus derechos de acceso, rectificación, supresión y oposición enviando un email a info@civitech.es.</p>
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
    ul { padding-left: 1.5rem; margin-bottom: 1.5rem; }
    a { color: #56317b; text-decoration: underline; cursor: pointer; }
    a:hover { color: #6d4298; }
    @media (max-width: 768px) { .legal-content { padding: 1.5rem; } .page-title { font-size: 2rem; } }
  `]
})
export class PoliticaPrivacidadComponent { }
