# 🚀 Roadmap Futuro: Civitech 2026

Este documento detalla el plan estratégico técnico y de negocio para escalar Civitech al siguiente nivel.

## 🟢 Prioridad 1: Multimedia & UX Premium (Q1 2026)
**Estado Actual**: Solución robusta pero con assets genéricos/locales.
**Objetivo**: Profesionalizar la imagen de marca.

*   **Producción de Video Propio**:
    *   Sustituir los vídeos de stock (Pexels) por grabaciones reales de instalaciones Civitech (calidad 4K, drones, testimonios).
    *   *Acción*: Contratar videógrafo por días para rodar 3 casos de éxito (Huesca, Lavandería, Zaragoza).
*   **CDN de Video**:
    *   Migrar los archivos `.mp4` locales de `src/assets` a un hosting de video especializado (Cloudinary, Vimeo Pro o AWS S3 + Cloudfront).
    *   *Motivo*: Evitar saturar el servidor web y mejorar la velocidad de carga en móviles.
*   **Fotografía Real**:
    *   Sustituir renders de IA por fotografías profesionales de los proyectos entregados.
    *   *Impacto*: Aumenta la tasa de conversión y confianza del cliente final.

## 🟡 Prioridad 2: Mejoras Técnicas & SEO (Q2 2026)
**Estado Actual**: Angular SPA (Single Page Application). Rápida pero mejorable en Google.
**Objetivo**: Dominar keywords locales ("Domótica Huesca", "Instaladores Zaragoza").

*   **SSR (Server Side Rendering) / Angular Universal**:
    *   Implementar SSR para que Google indexe todo el texto de los proyectos dinámicos.
    *   Generar sitemaps dinámicos automáticos.
*   **Lazy Loading Real**:
    *   Refactorizar módulos para carga diferida estricta (que el vídeo "Domótica" no descargue ni un byte hasta que entres en la sección).
*   **Cumplimiento Legal (RGPD)**:
    *   Crear páginas reales de `/politica-privacidad`, `/aviso-legal` y `/cookies`.
    *   Implementar Banner de Cookies funcional (bloqueo real de scripts hasta aceptar).

## 🔵 Prioridad 3: Automatización de Negocio (Q3 2026)
**Objetivo**: Escalar sin aumentar carga administrativa.

1.  **Automatización de Portfolio (n8n + Git)**:
    *   *Input*: Formulario Google para técnicos -> *Proceso*: n8n sube fotos y crea JSON -> *Output*: Web actualizada autom.
2.  **Área Privada de Cliente**:
    *   Acceso a manuales, facturas y tickets de soporte.
    *   Integración con Stripe para pagos de mantenimiento.
3.  **CRM Integrado**:
    *   Conectar Web3Forms con un CRM (HubSpot free o Airtable) para seguimiento de leads.

## 🧪 Analítica & Conversión
*   **Mapas de Calor (Hotjar)**: Analizar si los usuarios ven los nuevos vídeos completos.
*   **A/B Testing**: Probar si el botón "Contáctanos" convierte mejor en rojo (#D32F2F) o en el gradiente corporativo.

---
**Stack Tecnológico Actual**:
*   **Core**: Angular 16+
*   **Estilos**: SCSS (Diseño Glassmorphism Premium)
*   **Video**: HTML5 Nativo (Local Assets)
*   **Contacto**: Web3Forms (Serverless)
*   **Deploy**: Verificable en Netlify/Vercel/Firebase.
