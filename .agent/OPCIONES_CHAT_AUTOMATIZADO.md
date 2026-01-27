# 🤖 Estrategia de Chat Automatizado con n8n y Métricas

Para lograr tu objetivo de **captar métricas** y **generar presupuestos automáticos** conectando con n8n, la solución actual (Tawk.to) se queda corta.

## 🏆 La Mejor Opción: Typebot.io (Recomendada)
Typebot es un constructor de chatbots visual (drag & drop) open-source que se integra nativamente con n8n.

### ¿Por qué es ideal para Civitech?
1.  **Experiencia Conversacional**: En lugar de un formulario aburrido, el bot pregunta: *"¿Qué tipo de vivienda tienes?"*, *"¿Cuántos m2?"*.
2.  **Integración Directa con n8n**:
    *   El usuario responde las preguntas.
    *   Typebot envía los datos (JSON) a tu Webhook de n8n.
    *   n8n calcula el presupuesto y devuelve la respuesta al chat en segundos.
3.  **Captación de Leads**: Puedes pedir el email antes de dar el precio.
4.  **Estética Premium**: Se puede embeber en una burbuja flotante moderna que encaja perfecto con el diseño de la web.

### 🏗️ Cómo Implementarlo

#### 1. Crear el flujo en Typebot
Diseña un flujo sencillo:
- **Bienvenida**: "Hola, soy el asistente de Civitech. ¿Te ayudo a calcular un presupuesto rápido?"
- **Input 1**: Tipo de vivienda (Piso/Chalet).
- **Input 2**: Metros cuadrados.
- **Input 3**: Intereses (Iluminación, Clima, Seguridad...).
- **Bloque HTTP Request**: Enviar estos datos a tu URL de webhook de n8n.

#### 2. Configurar n8n
- **Webhook Trigger**: Recibe los datos.
- **Lógica**: Calcula precio base + extras.
- **Google Sheets (Opcional)**: Guarda el lead.
- **Respond to Webhook**: Devuelve un JSON con el texto: *"Tu presupuesto estimado es de 1.500€. ¿Quieres que te contactemos?"*.

#### 3. Insertar en la Web
Typebot te da un código similar al de Tawk.to. Solo hay que pegar ese script en `index.html` (reemplazando el actual).

---

## 🥈 Opción 2: Tawk.to + Webhooks (Limitada)
Tawk.to tiene webhooks, pero son para "eventos" (inicio de chat, fin de chat). No es fácil hacer un flujo de preguntas y respuestas estructurado para calcular un presupuesto en tiempo real. Es más para soporte humano.

## 🥉 Opción 3: Flowise / LangChain (IA Avanzada)
Si quieres que una IA (GPT-4) hable libremente y calcule cosas. Es más potente pero más complejo de configurar y controlar (alucinaciones de precios). Para un presupuesto estructurado, Typebot es más seguro y efectivo.

---

### 🚀 Próximos Pasos Recomendados
1.  **Crear cuenta en Typebot.io** (o instalarlo en tu servidor si prefieres self-hosted).
2.  **Diseñar el flujo** de preguntas clave.
3.  **Conectar con tu n8n**.
4.  **Pasarme el script de instalación** para que yo reemplace el de Tawk.to en la web.
