# 🧠 Estrategia Comercial para el Chatbot de Civitech

## El Dilema: ¿Dar precio automático o no?

### 🚫 Riesgos de la Cotización Automática
1.  **Pérdida de Valor**: El precio sin explicación de valor ("por qué cuesta esto") suele percibirse como caro.
2.  **Fricción**: Si el precio es alto, el cliente abandona sin dejar contacto.
3.  **Expectativas**: Riesgo de dar un precio demasiado bajo que luego no se puede cumplir.

### ✅ La Solución: "Cualificación Automatizada"

Usar el chatbot (**Typebot**) como herramienta de **toma de datos (Data Entry)** y **generación de expectativa**, no como cotizador final.

#### Flujo Propuesto (High Conversion):

1.  **Bienvenida**: *"Hola, soy el asistente virtual de Civitech. ¿Te ayudo a configurar tu hogar inteligente?"*
2.  **Cualificación (Preguntas clave)**:
    *   ¿Tipo de vivienda? (Piso / Unifamiliar / Obra nueva)
    *   ¿M2 aproximados?
    *   ¿Qué te interesa más? (Ahorro energía / Seguridad / Confort / Todo)
3.  **El "Gancho" (Hook)**:
    *   *Bot:* "Genial. Tenemos packs para viviendas de esas características que incluyen [Beneficio Clave según respuesta anterior]."
4.  **Captura de Contacto (Lead Call to Action)**:
    *   *Bot:* "Para darte un presupuesto 100% real y no una estimación genérica, uno de nuestros ingenieros analizará tus respuestas. Déjanos tu email/WhatsApp y te enviamos una propuesta en PDF en menos de 24h."
5.  **Cierre**:
    *   *Bot:* "¡Gracias! Datos recibidos. Hablamos pronto."

#### Automatización con n8n (Backend)
1.  **Trigger**: Recibe los datos del Typebot.
2.  **Acción 1**: Guarda el lead en Google Sheets / CRM.
3.  **Acción 2**: Te envía una alerta a TI (Telegram/Email) -> *"Nuevo Lead: Piso 90m2, Interés: Seguridad. Tel: 666..."*.
4.  **Acción 3 (Opcional)**: Envía un email automático al cliente confirmando recepción + Dossier corporativo PDF (para hacer tiempo mientras tú calculas).

### Ventajas
*   **No pierdes leads por precio.**
*   **Recibes la información estructurada** antes de llamar (sabes qué venderle).
*   **Imagen muy profesional** y tecnológica.
