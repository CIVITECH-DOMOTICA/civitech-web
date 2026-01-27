# 🎯 PLAN DE MEJORAS PENDIENTES - Civitech Web

**Fecha:** 27 de Enero de 2026  
**Estado Actual:** Sistema de proyectos implementado

---

## ⚠️ PROBLEMAS DETECTADOS (Prioridad ALTA)

### 1. **Problemas Visuales a Corregir**

#### Texto sobre imágenes difícil de leer
- [ ] Hero sections de use cases - añadir overlay más oscuro
- [ ] Hero del home - mejorar contraste del texto
- [ ] Cards con imágenes de fondo - overlay gradient

#### Hovers que no se ven bien
- [ ] Cards de use cases en domotica-informacion
- [ ] Botones de navegación en mobile
- [ ] Links en footer pueden necesitar más contraste

#### Imágenes faltantes/en inglés
- [ ] `/assets/images/solar-dashboard.png` (en inglés)
- [ ] `/assets/images/clima-zones.png` (en inglés)
- [ ] `/assets/images/persianas-control.png` (en inglés)
- [ ] Hero images de use cases (actualmente placeholders o en inglés)

### 2. **SEO - Schema Markup FALTANTE** ⚡

#### Tipos de Schema a implementar:

**Service Schema** (para cada Use Case):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Domótica - [nombre del servicio]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Civitech"
  },
  "areaServed": "Zaragoza, España"
}
```

**Product/Service Catalog** (página domotica-informacion)

**Case Study Schema** (para cada proyecto):
```json
{
  "@type": "Article",
  "headline": "[Nombre del proyecto]",
  "author": {
    "@type": "Organization",
    "name": "Civitech"
  }
}
```

**Organization Schema** (global):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Civitech",
  "description": "Especialistas en domótica profesional en Zaragoza",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zaragoza"
  },
  "telephone": "624074920"
}
```

---

## 🚀 MEJORAS PLANIFICADAS

### FASE 1: Correcciones Visuales (1-2h)

#### 1.1 Mejorar Overlays en Hero Sections
- [ ] use-case-detalle.component.scss - hero-overlay más oscuro
- [ ] proyecto-detalle.component.scss - verificar legibilidad
- [ ] acerca-de-nosotros - hero text contrast

#### 1.2 Arreglar Hovers y Estados Interactivos
- [ ] Añadir transition suaves faltantes
- [ ] Mejorar feedback visual en botones
- [ ] Estados disabled más claros

#### 1.3 Añadir Imágenes Adicionales
- [ ] Mockups de dashboards EN ESPAÑOL para use cases
- [ ] Más fotos de proyectos reales (si disponibles)
- [ ] Iconos específicos por categoría

### FASE 2: SEO Schema Markup (30min) ⚡

#### 2.1 Crear Servicio de Schema
```typescript
// schema.service.ts
- generateServiceSchema(useCase)
- generateProjectSchema(proyecto)
- generateOrganizationSchema()
- generateBreadcrumbSchema()
```

#### 2.2 Inyectar en Meta Tags
- [ ] app.component.ts - organization schema global
- [ ] use-case-detalle - service schema
- [ ] proyecto-detalle - case study schema
- [ ] domotica-informacion - service catalog

### FASE 3: Contenido Expandido (2-3h)

#### 3.1 Nuevos Use Cases a Crear

**1. Carga Vehículo Eléctrico**
- Slug: `carga-vehiculo-electrico`
- Icono: `fa-charging-station`
- Categoría: Sostenibilidad
- Beneficios: Carga con excedente solar, horarios valle, integración con baterías

**2. Gestión de Electrodomésticos**
- Slug: `gestion-electrodomesticos`
- Icono: `fa-blender`
- Categoría: Automatización
- Beneficios: Lavadora en hora valle, secadora con excedente, notificaciones

**3. Jardín/Riego Inteligente**
- Slug: `riego-inteligente`
- Icono: `fa-seedling`
- Categoría: Jardín
- Beneficios: Riego según meteorología, sensores humedad, ahorro agua

**4. Home Cinema**
- Slug: `home-cinema`
- Icono: `fa-film`
- Categoría: Entretenimiento
- Beneficios: Escenas automatizadas, control AV centralizado, luces automáticas

**5. Cuidado Mascotas**
- Slug: `cuidado-mascotas`
- Icono: `fa-paw`
- Categoría: Cuidado
- Beneficios: Cámaras con IA, dispensador automático, temperatura controlada

**6. Cuidado Personas Mayores**
- Slug: `cuidado-mayores`
- Icono: `fa-user-shield`
- Categoría: Asistencia
- Beneficios: Detección caídas, recordatorios medicación, alertas familiares

**7. Gestión de Red WiFi**
- Slug: `gestion-red-wifi`
- Icono: `fa-wifi`
- Categoría: Infraestructura
- Beneficios: Cobertura total, control parental, priorización dispositivos

#### 3.2 Iconos Más Descriptivos

**Cambios propuestos:**
- Optimización Solar: `fa-solar-panel` ✅ (ya está bien)
- Climatización: `fa-temperature-half` (en lugar de fa-house-chimney)
- Persianas: `fa-blinds-raised` (más específico)
- Seguridad: `fa-shield-heart` (más friendly)
- Fugas: `fa-faucet-drip` (más descriptivo que fa-droplet-slash)
- Iluminación: `fa-lightbulb-on` (en lugar de solo fa-lightbulb)
- Control Unificado: `fa-grid-2-plus` (más moderno)

### FASE 4: Home Assistant Destacado (15min)

#### 4.1 Añadir Badges Oficiales
- [ ] Logo de Home Assistant en footer
- [ ] Badge "Powered by Home Assistant" en use-case-detalle
- [ ] Link a comunidad oficial

#### 4.2 Sección "¿Por qué Home Assistant?"
- [ ] Explicar beneficios open source
- [ ] Destacar privacidad local
- [ ] Mencionar comunidad activa
- [ ] Diferenciador competitivo

---

## 📋 CHECKLIST DE AUDITORÍA (Para revisar manualmente)

### Contraste y Legibilidad
- [ ] Texto en hero sections se lee perfectamente
- [ ] Botones tienen suficiente contraste (WCAG AA)
- [ ] Links son identificables
- [ ] Estados hover son obvios

### Imágenes y Media
- [ ] Todas las imágenes tienen alt text
- [ ] Imágenes en español donde corresponda
- [ ] No hay imágenes rotas
- [ ] Lazy loading implementado

### Interactividad
- [ ] Todos los hovers funcionan
- [ ] Estados activos claros
- [ ] Feedback táctil en mobile
- [ ] Animations suaves (no bruscas)

### SEO Técnico
- [ ] Titles únicos por página
- [ ] Meta descriptions personalizadas
- [ ] Schema markup implementado
- [ ] Breadcrumbs correctos
- [ ] URLs amigables
- [ ] Sitemap.xml generado

### Rendimiento
- [ ] Lighthouse score > 90
- [ ] Imágenes optimizadas (WebP)
- [ ] CSS/JS minificados
- [ ] Fonts optimizados

---

## ⏰ ESTIMACIÓN DE TIEMPO

| Fase | Tiempo Estimado | Prioridad |
|------|----------------|-----------|
| Correcciones Visuales | 1-2h | 🔴 ALTA |
| Schema Markup SEO | 30min | 🔴 ALTA |
| 7 Use Cases Nuevos | 2-3h | 🟡 MEDIA |
| Mejoras Home Assistant | 15min | 🟢 BAJA |
| Imágenes en Español | (PENDIENTE CUOTA) | 🟡 MEDIA |

**TOTAL:** ~4-6 horas de trabajo

---

## 🎯 RECOMENDACIÓN DE ORDEN:

1. ✅ **Implementar Schema Markup** (30min, máximo impacto SEO)
2. ✅ **Corregir overlays y contraste** (30min, mejora UX inmediata)
3. ✅ **Arreglar hovers** (30min)
4. ⏸️ **Esperar cuota de imágenes** (2h 47min) y regenerar en español
5. ✅ **Añadir 7 use cases nuevos** (2-3h con datos detallados)
6. ✅ **Destacar Home Assistant** (15min, credibilidad)

---

## 📌 NOTAS IMPORTANTES

### Imágenes
- Cuota de generación se resetea a las 02:26 AM
- Guardar prompts para regenerar después
- Mientras tanto, usar placeholders actuales

### SEO
- Schema Markup es **crítico** para Google Rich Results
- Implementar ANTES de cualquier otra cosa
- Validar con https://search.google.com/test/rich-results

### UX
- Priorizar legibilidad sobre estética
- Asegurar WCAG AA mínimo
- Testing en mobile real obligatorio

---

**Estado:** ⏳ Esperando aprobación para empezar
