# 🏗️ Guía de Automatización: Portafolio de Proyectos

Sistema para subir fotos y descripciones de obras realizadas directamente desde el móvil, actualizando la sección "Proyectos" de la web al instante.

## 📱 El Concepto
En lugar de editar código cada vez que terminas una obra, rellenas un formulario simple y la web se actualiza sola.

## 🛠️ Herramientas
1.  **Tally.so / Google Forms / Typebot** (Entrada de datos).
2.  **n8n** (Procesador).
3.  **GitHub** (Almacenamiento).

## 🌊 El Flujo de Trabajo (Workflow)

1.  **Webhook (Trigger)**: Recibe los datos del formulario.
    *   Campos: *Nombre del Proyecto*, *Cliente (Anónimo)*, *Descripción*, *Fotos (archivos)*.
2.  **Procesamiento de Imágenes**:
    *   Redimensionar fotos a 800x600 (para no pesar en la web).
    *   Convertir a WebP (opcional, para velocidad).
3.  **OpenAI (Opcional)**:
    *   Mejorar la descripción breve que escribiste en el móvil ("Puse luces led") a algo comercial ("Instalación integral de iluminación LED regulable con escenas DALI...").
4.  **GitHub File Operation (Imágenes)**:
    *   Subir las fotos a la carpeta `src/assets/images/projects/`.
5.  **GitHub File Operation (JSON)**:
    *   Leer `src/assets/data/proyectos.json`.
    *   Añadir el nuevo proyecto.
    *   Guardar cambios.

## 📝 Formato del JSON Objetivo
Asegúrate de que n8n genere esto:

```json
{
    "id": "ref-piso-centro",
    "titulo": "Reforma Integral Piso Centro",
    "descripcion": "Control total de clima y persianas.",
    "imagen": "assets/images/projects/piso-centro-1.jpg",
    "categoria": "Residencial",
    "servicios": ["Iluminación", "Clima"]
}
```

## ✅ Pasos para Implementar
1.  Crea el formulario en **Typebot** (es gratis y ya lo usas).
2.  Conecta Typebot con un Webhook de n8n.
3.  Configura n8n para recibir el JSON y hacer los commits en GitHub.
4.  ¡Listo! Saca fotos en la obra y súbelas antes de salir por la puerta.
