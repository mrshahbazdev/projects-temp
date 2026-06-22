# MarjanaKoceku.com

Personal website for Marjana Ko&#231;eku &#8212; independent MP for Shkod&#235;r County, from Dukagjin.

Bilingual (Albanian / English), static Next.js export.

## Quick Start

```bash
npm install
npm run build
npm run dev   # development server
```

## Project Structure

```
app/            &#8594; Next.js app router (SQ pages at root, EN pages under /en/)
components/     &#8594; Shared React components (Header, Navigation, Footer, ContactForm, PageLayout)
lib/            &#8594; Constants, i18n translations, schema
public/         &#8594; Static assets (images, favicon, .well-known/, robots.txt, ai.txt)
.github/        &#8594; CI/CD (dependabot, deploy workflow)
scripts/        &#8594; Build utilities (size-check)
```

## Pages

| Path | SQ | EN |
|------|----|----|
| Home | `/` | `/en/` |
| Rrug&#235;timi / My Story | `/rrugtimi/` | `/en/rrugtimi/` |
| NeoMalsore | `/neomalsore/` | `/en/neomalsore/` |
| N&#8217;Parlament / Parliament | `/parlament/` | `/en/parlament/` |
| Media / Press | `/media/` | `/en/media/` |
| Kontakt / Contact | `/kontakt/` | `/en/kontakt/` |
| Siguria / Security | `/siguria/` | `/en/siguria/` |
| Privat&#235;sia / Privacy | `/privatesia/` | `/en/privatesia/` |

## Deploy

### Cloudflare Pages (Recommended)
1. Push to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output directory: `dist`

### Vercel
1. Import project
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `dist`

## Security

- Static export: Zero server-side execution
- HSTS preload enabled
- CSP: No external resources except Formspree and Cloudflare Turnstile
- No cookies, no tracking

## GDPR

- No cookies
- No tracking
- Contact form data used only to reply
- Data controller: contact@marjanakoceku.com
