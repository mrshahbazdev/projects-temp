# MarkMartinaj.com

Digital Governance & Distributed Systems Architecture

## Quick Start

```bash
npm install
npm run build
npm run dev   # development server
```

## Feature Toggles

Edit `lib/constants.ts`:

| Feature | Default | Description |
|---------|---------|-------------|
| `PICTURE_ENABLED` | `false` | Profile picture display |
| `GDPR_ENABLED` | `true` | GDPR compliance (always on) |
| `ANALYTICS_ENABLED` | `false` | Privacy-focused analytics (Plausible) |
| `CONTACT_FORM_ENABLED` | `false` | Contact form (increases attack surface) |
| `DARK_MODE_ENABLED` | `false` | Dark mode toggle |
| `SERVICE_WORKER_ENABLED` | `false` | Offline capability |

## Enable Profile Picture

1. Set `PICTURE_ENABLED: true` in `lib/constants.ts`
2. Add `profile.jpg` (512x512px, <50KB) to `/public/`
3. Rebuild: `npm run build`

## Project Structure

```
app/            → Next.js app router (layout, pages, robots, sitemap)
components/     → React components (Header, Index, Statement, Contact, Schema, Picture)
lib/            → Constants and utilities (feature flags, GDPR config, SEO config)
public/         → Static assets (favicon, humans.txt, ai.txt, .well-known/, sw.js)
.github/        → CI/CD (dependabot, deploy workflow)
scripts/        → Build utilities (size-check)
```

## Deploy

### Cloudflare Pages (Recommended)
1. Push to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` to GitHub secrets

### Vercel
1. Import project
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify
- `public/_redirects` and `public/_headers` are pre-configured

## Security

- DNSSEC: Enable at your registrar
- HSTS preload: Submit at https://hstspreload.org
- CSP: No external resources loaded
- Static export: Zero server-side execution

## GDPR

- No cookies
- No tracking (unless `ANALYTICS_ENABLED: true`)
- Server log retention: 7 days
- Data controller: contact@markmartinaj.com

## Post-Deployment Checklist

- [ ] Add photo: set `PICTURE_ENABLED: true` + upload `/public/profile.jpg`
- [ ] Add `SEO.verification.google` (Search Console)
- [ ] Add `SEO.verification.bing` (Bing Webmaster Tools)
- [ ] Add social profiles to `SEO.sameAs`
- [ ] Add GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- [ ] Enable DNSSEC at registrar
- [ ] Submit HSTS preload request
- [ ] Register with Google Search Console
- [ ] Register with Bing Webmaster Tools
- [ ] Update `security.txt` Expires date annually

## Performance Targets

| Metric | Target |
|--------|--------|
| Page weight | < 50KB |
| LCP | < 1.2s |
| FCP | < 800ms |
| TTFB | < 200ms |
| Lighthouse | 100 |
