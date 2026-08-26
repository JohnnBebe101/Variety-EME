# Variety EME - Static Site

Ethiopia's leading provider of Telecom Infrastructure, ICT Systems Design, and Electro-Mechanical Engineering.

## Quick Start

### Prerequisites
- Node.js (v20+)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
Runs: `vite build` -> `prerender` (31 routes) -> `generate-sitemap`.

### Testing
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Linting & Formatting
```bash
npm run lint          # Check for lint errors
npm run lint:fix      # Auto-fix lint errors
npm run format        # Format with Prettier
npm run format:check  # Check formatting
```

## Project Structure

```
src/
  config/routes.config.ts  — Single source of truth for all routes (57 entries)
  utils/routes.ts          — Navigation helpers (getRouteFromPath, getPathFromPageId)
  utils/ssrSafeLazy.ts     — SSR-safe lazy loading utility
  components/
    sections/              — Page section components (services/, excellence/, infrastructure/)
    layout/                — Header, Footer, Layout
    home/                  — HomePage, ContactQuoteForm, OurServices, etc.
  hooks/                   — Custom React hooks
  pages/                   — Full-page components (MSPPage, LegalPage, etc.)
  data/constants.ts        — Site content, navigation, ISO data, partners
scripts/
  prerender.ts             — SSG: pre-renders all routes to HTML
  generate-sitemap.ts      — Generates sitemap.xml
public/
  _headers                 — Netlify security headers
  _redirects               — SPA fallback rules
  .htaccess                — Apache security headers + caching
```

## Key Architecture Decisions

- **Route Config**: All routes defined once in `src/config/routes.config.ts`. App.tsx, prerender.ts, and sitemap derive from this.
- **Code Splitting**: Page components use `ssrSafeLazy()` for SSR-compatible lazy loading. 14 lazy chunks, ~266KB main bundle.
- **Contact Forms**: Both `ContactQuoteForm` and `ContactModal` submit via Netlify Forms (form-name: `contact-quote` and `contact-modal`).
- **State Management**: React Context for global UI state (current page, contact modal). No external state library.
- **SSR/SSG**: Pre-renders 31 routes at build time using `ReactDOMServer.renderToString()`.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SITE_URL` | Canonical URL for sitemap generation |

## Deployment

Deploy to Netlify. The `dist/` folder is the publish directory.

- `public/_headers` — Security headers (CSP, HSTS, X-Frame-Options)
- `public/_redirects` — SPA fallback for client-side routing
- `netlify.toml` — Build configuration (Node 20, publish dir: dist)

## Maintenance

- **Adding Routes**: Add entry to `src/config/routes.config.ts`. Everything else derives from this.
- **Updating Page Content**: Edit component files under `src/components/sections/` or `src/pages/`.
- **Adding Tests**: Place test files alongside source files (`*.test.ts` / `*.test.tsx`).
