# 🤖 Guía de Automatización: Noticias Domótica (SEO Automático)

Esta guía explica cómo configurar un sistema que busca, reescribe y publica noticias automáticamente en tu web `civitech-web`, mejorando tu SEO sin esfuerzo.

## 🛠️ Herramientas Necesarias
1.  **n8n** (Automatizador de procesos). Puedes usar la versión Cloud (20€/mes) o instalarla gratis en tu PC (`npm install n8n -g`).
2.  **OpenAI API Key** (Cerebro). Para reescribir las noticias con tu tono.
3.  **GitHub Token** (Manos). Para subir el archivo `news.json` actualizado.

## 🌊 El Flujo de Trabajo (Workflow)

El proceso que debes montar en n8n es el siguiente:

1.  **Cron (Trigger)**: Ejecutar cada Lunes a las 9:00 AM.
2.  **RSS Read**: Leer feeds de noticias del sector.
    *   *Fuentes recomendadas*: Xataka Home, Casadomo, Domótica Doméstica.
3.  **Filtro**: Quedarse solo con noticias que contengan palabras clave: "Matter", "Ahorro", "Subvenciones", "Iluminación".
4.  **OpenAI (GPT-4o)**:
    *   *Prompt*: "Eres un experto en domótica de la empresa Civitech. Resume esta noticia para clientes residenciales. Tono profesional pero cercano. Título atractivo. Extrae una conclusión sobre por qué es útil."
5.  **GitHub File Operation**:
    *   Leer el archivo actual `src/assets/data/news.json`.
    *   Añadir la nueva noticia al principio del array.
    *   Mantener solo las últimas 6 noticias (borrar las viejas).
    *   Hacer commit automático: "update: nueva noticia semanal".

## 📝 Estructura del JSON
El robot debe generar un objeto con este formato exacto:

```json
{
    "id": 123456789,
    "title": "Subvenciones 2026 para Aerotermia",
    "summary": "El Gobierno de Aragón anuncia nuevas ayudas...",
    "date": "2026-02-01",
    "image": "https://imagen-generada-o-capturada.jpg",
    "tag": "Subvenciones",
    "link": "#"
}
```

## 🚀 Beneficios
*   **SEO Fresco**: Google ve que tu web cambia cada semana.
*   **Autoridad**: Te posicionas como experto que está al día.
*   **Cero Esfuerzo**: Una vez montado, funciona solo.
