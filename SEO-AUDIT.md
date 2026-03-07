# Civitech.es -- Full SEO & B2B Audit

**Date:** 2026-03-06
**Site:** https://www.civitech.es
**Stack:** Angular 16 (CSR-only), Bootstrap 5, SCSS
**Pages indexed in sitemap:** 23

---

## SEVERITY: CRITICAL (Fix immediately)

### 1. No Server-Side Rendering (SSR) -- THE #1 PROBLEM

The site is 100% client-side rendered. When Google, Bing, LinkedIn, or Facebook crawl any page, they see this:

```html
<body>
  <app-root></app-root>
</body>
```

**Everything else** -- headings, text, images, links, meta tags -- loads via JavaScript AFTER the page loads. While Googlebot can execute JS, it does so on a second pass (days to weeks later). Bing, LinkedIn preview, Facebook preview, and most other crawlers **do not execute JS at all**.

**Impact:** Your SeoService, schema markup, heading hierarchy, alt tags -- all that good work is invisible to most crawlers. The site is essentially a blank page to search engines.

**Fix:** Add Angular Universal (SSR) or migrate to prerendering. This is the single most impactful change. Without it, every other SEO fix has limited effect.

---

### 2. Sitemap lists 15 service pages but only 3 exist

The sitemap references 15 URLs under `/domotica/`:
- optimizacion-solar, climatizacion-inteligente, persianas-automaticas, seguridad-simulacion, control-fugas, iluminacion-diseno, control-unificado, carga-vehiculo-electrico, gestion-electrodomesticos, riego-inteligente, home-cinema, cuidado-mascotas, cuidado-mayores, gestion-red-wifi, seguridad-alarmas-sin-cuotas, negocios-locales-inteligentes

But `use-cases.service.ts` only has **3 slugs**: `energia-inteligente`, `seguridad-inteligente`, `confort`.

**The other 12+ URLs redirect to `/domotica-informacion`** because the slug lookup fails. Google is crawling dead URLs, getting soft 404s, and this tanks your crawl budget and trust.

**Fix:** Either create the missing 12 use cases in the service, or remove the dead URLs from sitemap.xml.

---

### 3. Homepage redirects instead of serving content

```typescript
{ path: '', redirectTo: '/acerca-de-nosotros', pathMatch: 'full' }
```

The root URL `https://civitech.es/` (priority 1.0 in sitemap) immediately redirects to `/acerca-de-nosotros`. This wastes the most authoritative URL on the domain.

**Fix:** Make `/` serve the homepage directly, or change the sitemap canonical to `/acerca-de-nosotros`.

---

### 4. OpenAI API key exposed in frontend code

```typescript
dangerouslyAllowBrowser: true  // chatbot.service.ts
```

The OpenAI API key is bundled in the client-side JavaScript. Anyone can open DevTools, extract the key, and run up your bill. This is a security vulnerability.

**Fix:** Move the chatbot API calls to a backend endpoint (a simple API proxy).

---

### 5. Bootstrap loaded TWICE

- `index.html` line 91: CDN Bootstrap 5.3.0 CSS
- `index.html` line 95: CDN Bootstrap 5.3.0 JS
- `angular.json` lines 35-42: node_modules Bootstrap CSS + JS

Both are bundled into the final build. This adds ~200KB of duplicated CSS/JS, hurting page load speed (a Core Web Vitals ranking factor).

**Fix:** Remove the CDN references from `index.html`. Keep only the `angular.json` ones.

---

## SEVERITY: HIGH (Fix this week)

### 6. /instaladores page missing from sitemap

Your most important B2B page (`/instaladores` -- the partner program) is **not in sitemap.xml**. Google may crawl it via internal links, but you're not explicitly telling search engines this page exists.

**Fix:** Add `/instaladores` to sitemap.xml with priority 0.9.

---

### 7. Meta tags are static for crawlers without JS

The SeoService dynamically updates title, description, OG tags per route -- but only after JavaScript executes. Without SSR, every crawl sees the same static `index.html` defaults:

- **Title:** "Domótica Zaragoza | Civitech - Instalación de Casa Inteligente" (same for ALL pages)
- **Description:** "Civitech: Expertos en Domótica Zaragoza..." (same for ALL pages)

**Impact:** Google sees 23 pages with identical titles and descriptions. This causes duplicate content signals and keyword cannibalization.

**Fix:** SSR (see #1) solves this automatically. The SeoService code is already correct -- it just needs to run server-side.

---

### 8. Missing canonical link in static HTML

There's no `<link rel="canonical">` in `index.html`. The SeoService creates one dynamically, but again -- invisible without JS.

**Fix:** Add a static canonical in `index.html` as a fallback: `<link rel="canonical" href="https://civitech.es/">`. SSR will override it per page.

---

### 9. No `<link rel="alternate" hreflang>` tags

If you ever want to rank in other Spanish-speaking markets or in English, you'll need hreflang. Not critical now, but note it.

---

### 10. Schema.org inconsistencies

- `seo.service.ts` email: `civitecreformas@gmail.com`
- `schema.service.ts` email: `info@civitech.es`
- `seo.service.ts` hours: closes 18:00
- `schema.service.ts` hours: closes 19:00
- Schema `sameAs` is missing LinkedIn (`https://www.linkedin.com/company/civitech-es`) -- your main B2B channel

**Fix:** Unify all schema data to a single source of truth. Add LinkedIn to sameAs.

---

### 11. No B2B-specific service pages

You have ONE B2B-related page (`/instaladores` for partners). But there are no pages targeting B2B search queries like:
- "monitorizacion energetica empresas zaragoza"
- "domotica oficinas zaragoza"
- "automatizacion edificios zaragoza"
- "domotica negocios lavanderias"

The sitemap lists `/domotica/negocios-locales-inteligentes` but the page doesn't exist (no matching slug).

**Fix:** Create dedicated B2B landing pages for each target vertical (offices, laundries, buildings, retail). Each page targeting specific B2B keywords.

---

## SEVERITY: MEDIUM (Fix this month)

### 12. EmailJS service ID and OpenAI key in plain code

- `emailjs.init('toWAFkM86-kDoWQa-')` hardcoded in chatbot.service.ts
- Web3Forms access key hardcoded in the form template
- OpenAI key in environment file (bundled in client)

**Fix:** Move all API keys to environment variables that are NOT bundled client-side.

---

### 13. Image optimization issues

- Hero video (`domotica_final.mp4`) loads on every visit to `/domotica-informacion`. No fallback poster image, no lazy loading on video.
- OG image (`logo_negro_horizontal.png`) is a logo, not a rich preview image. LinkedIn/Facebook shares look generic.

**Fix:** Create dedicated OG images per page (1200x630). Add poster attribute to video tags.

---

### 14. Thin content on service pages

The 3 existing use case pages have decent content in the TypeScript service (descriptions, FAQs, benefits). But without SSR, none of this reaches crawlers. Even with SSR, consider expanding each service page to 800-1500 words for competitive keywords.

---

### 15. No blog / content marketing section

There's no `/blog` route. Technical blog posts are one of the most effective ways to rank for long-tail B2B keywords and establish authority.

**Fix:** Add a blog section. Each LinkedIn post can be expanded into a longer blog article targeting specific keywords.

---

### 16. Multiple H1 tags on some pages

`proyectos.component.html` has two H1 tags (lines 13 and 20). Some shared components (`banner`, `tecnologia`, `mensaje-domotica`) also inject H1 tags, meaning pages can end up with 3-4 H1s.

**Fix:** Each page should have exactly one H1. Use H2 for sub-sections.

---

### 17. Font Awesome loaded from CDN

`index.html` line 92 loads the full Font Awesome CSS (~80KB). Most pages use a handful of icons.

**Fix:** Use only the icons you need via tree-shaking, or switch to SVG icons.

---

## WHAT'S DONE WELL

- **SeoService architecture** -- The service is well-built with per-route configs, OG tags, Twitter cards, canonical URLs, and geo tags. It just needs SSR to work.
- **Schema.org markup** -- LocalBusiness, Service, FAQ, Breadcrumb, and Project schemas are all implemented.
- **Lazy loading** -- 26 images use `loading="lazy"`, banner uses `fetchpriority="high"`.
- **Alt text coverage** -- ~90% of images have meaningful alt attributes.
- **URL structure** -- Clean, Spanish-language, keyword-rich URLs.
- **Google Analytics + GTM** -- Properly configured.
- **Chatbot** -- AI-powered lead capture with contact detection and WhatsApp integration.
- **Partner page** -- The `/instaladores` page is rich, well-structured B2B content with clear CTAs.

---

## PRIORITY ACTION PLAN

| # | Action | Impact | Effort | Timeline |
|---|--------|--------|--------|----------|
| 1 | **Add SSR (Angular Universal) or prerendering** | Critical | High | 1-2 weeks |
| 2 | **Fix sitemap -- remove dead URLs or create missing pages** | Critical | Medium | 2-3 days |
| 3 | **Remove duplicate Bootstrap CDN** | High | 5 min | Today |
| 4 | **Move OpenAI key to backend proxy** | High | 1 day | This week |
| 5 | **Add /instaladores to sitemap** | High | 5 min | Today |
| 6 | **Unify schema data (emails, hours, add LinkedIn)** | High | 1 hour | Today |
| 7 | **Fix homepage redirect (serve content at /)** | High | 30 min | Today |
| 8 | **Create B2B service pages** (offices, buildings, laundries) | High | 1-2 weeks | This month |
| 9 | **Fix multiple H1 tags per page** | Medium | 2 hours | This week |
| 10 | **Create rich OG images per page** | Medium | 1 day | This week |
| 11 | **Add blog section** | Medium | 1 week | This month |
| 12 | **Optimize Font Awesome loading** | Low | 1 hour | When convenient |

---

## B2B SELLING STRATEGY (Beyond SEO)

### Google Business Profile
- Make sure it's claimed, verified, and optimized
- Add all services, photos of installations, and respond to every review
- Post weekly updates (reuse LinkedIn content)

### B2B Landing Pages to Create
1. `/domotica/empresas` -- General B2B overview
2. `/domotica/monitorizacion-energetica-empresas` -- Energy monitoring for businesses
3. `/domotica/oficinas-inteligentes` -- Smart office automation
4. `/domotica/automatizacion-edificios` -- Building automation
5. `/domotica/negocios-locales` -- Local businesses (laundries, restaurants, retail)

Each page should target specific keywords, include a case study, pricing indication, and a CTA to request a proposal.

### Google Ads (When Ready)
Target high-intent B2B keywords:
- "domotica empresas zaragoza"
- "monitorizacion energetica negocio"
- "automatizacion oficina zaragoza"

### LinkedIn as B2B Sales Funnel
LinkedIn post (awareness) -> Service page (consideration) -> Contact form (conversion)

Each post should link to the relevant service page on civitech.es.
