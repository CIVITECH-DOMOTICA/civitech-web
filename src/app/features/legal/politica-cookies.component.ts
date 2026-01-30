import { Component } from '@angular/core';

@Component({
    selector: 'app-politica-cookies',
    template: `
    <div class="legal-page">
      <div class="container">
        <h1 class="page-title">Política de Cookies</h1>
        <div class="legal-content">
          <p class="last-updated">Última actualización: Enero 2026</p>

          <section>
            <h2>1. ¿Qué son las cookies?</h2>
            <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>
          </section>

          <section>
            <h2>2. Cookies que utilizamos</h2>
            <p>Este sitio web utiliza las siguientes cookies:</p>
            <ul>
              <li><strong>Cookies Técnicas (Estrictamente necesarias):</strong> Necesarias para el funcionamiento básico de la web, como mantener la sesión segura o recordar sus preferencias de privacidad.</li>
              <li><strong>Cookies Analíticas (Opcionales):</strong> Utilizamos Google Analytics y herramientas similares para entender cómo los usuarios interactúan con nuestra web de forma anónima (páginas visitadas, tiempo de estancia).</li>
            </ul>
          </section>

          <section>
            <h2>3. Desactivación de cookies</h2>
            <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador (Chrome, Firefox, Safari, Edge).</p>
          </section>

          <section>
            <h2>4. Consentimiento</h2>
            <p>Al utilizar este sitio web, usted acepta la instalación y uso de las cookies. Puede retirar su consentimiento en cualquier momento eliminando las cookies de su navegador.</p>
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
    @media (max-width: 768px) { .legal-content { padding: 1.5rem; } .page-title { font-size: 2rem; } }
  `]
})
export class PoliticaCookiesComponent { }
