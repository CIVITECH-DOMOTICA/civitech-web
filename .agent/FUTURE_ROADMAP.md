# 🚀 Roadmap Futuro: Civitech 2026

Este documento detalla los pasos sugeridos para escalar la plataforma web y el negocio digital de Civitech.

## 1. Automatización de Portfolio (n8n + Git)
**Objetivo**: Publicar nuevos proyectos realizados sin tocar una línea de código.

**Arquitectura Propuesta**:
1.  **Input**: Google Forms o Airtable.
    *   Campos: Título, Cliente, Descripción, Fotos, Categoría (Iluminación, Clima...), Testimonio.
2.  **Procesamiento (n8n)**:
    *   Webhook recibe los datos.
    *   Optimización de imágenes (TinyPNG API).
    *   **Git Node**: Hace un commit al archivo `src/assets/data/proyectos.json`.
3.  **Frontend**:
    *   Modificar Angular para leer de `proyectos.json` en lugar de tenerlos hardcoded.
4.  **Despliegue**:
    *   GitHub Actions / Vercel detecta el commit y despliega la nueva versión automáticamente.

## 2. Estrategia SEO & Contenidos (Tráfico Orgánico)
**Objetivo**: Aparecer primero en Google para "Domótica Zaragoza".

*   **Blog / Casos de Estudio**: Crear una sección `/blog`.
    *   *Idea 1*: "Ahorra un 30% en calefacción: Caso real en Montecanal".
    *   *Idea 2*: "Instalación de Home Assistant en piso antiguo sin obras".
*   **Landing Pages Locales**:
    *   Crear páginas específicas: `civitech.es/domotica-huesca`, `civitech.es/domotica-teruel`.

## 3. Área Privada de Cliente (Fidelización)
**Objetivo**: Ofrecer un valor añadido post-venta Premium.

*   Login simple con el email del cliente.
*   **Dashboard**:
    *   Descarga de facturas.
    *   Manuales PDF de sus dispositivos.
    *   Botón directo de "Soporte Prioritario" (Ticket system).

## 4. Analítica Avanzada
*   **Mapas de Calor (Hotjar)**: Ver dónde hacen clic los usuarios y si ven el vídeo entero.
*   **Embudos de Conversión**: Medir cuántos que abren el Chatbot terminan pidiendo presupuesto.

---
**Recursos Técnicos**:
*   Repo actual: Angular 16+
*   Estilos: SCSS + Bootstrap (Custom Premium)
*   Chatbot: Typebot.io (V4)
