I'll perform a comprehensive technical audit of your repository. Let me start by loading the repo-overview ability and then systematically analyze the codebase.Now I'll gather comprehensive evidence about this repository to conduct the technical audit you've requested.Now let me read key files to understand the project structure:# Comprehensive Technical Audit: Variety-EME Repository

## What This Is

**Variety-EME** is a TypeScript/React-based static marketing website for an Ethiopian electromechanical engineering company specializing in telecommunications, power systems, ICT infrastructure, and managed services. The site uses Vite for bundling, pre-renders all routes at build time for SEO, and is optimized for deployment on static hosting (Netlify/Vercel). The codebase was recently transitioned from a multi-language architecture to English-only, making this an ideal checkpoint for cleanup and optimization.

### Stack
- **Language(s):** TypeScript (97.9%), minimal other (2.1%)
- **Framework / runtime:** React 19 + Vite 6 + Server-Side Rendering (Node.js for pre-rendering)
- **Notable libraries:** 
  - **i18next** (internationalization framework, now single-language)
  - **Framer Motion** (animation library)
  - **Tailwind CSS 4** (utility-first styling)
  - **React Helmet Async** (meta tag management for SEO)
  - **Lucide React** (icon library)

---

## How It's Organized

```
src/
  App.tsx              Core routing & page orchestration (massive 27KB monolith)
  main.tsx             React entry point
  types.ts             PageID union type (46 routes), NavItem, NavConfig interfaces
  i18n.ts              i18next configuration (forced to 'en' only)
  index.css            Global styles
  fonts.css            Font face declarations

  components/
    layout/            Layout wrapper, header, footer, navigation
    hero/              Hero slider and banner sections
    home/              Home-specific sections (OurServices, Testimonials, CTA, FAQ, News)
    Brand.tsx          Company branding component
    LogoSymbol.tsx     Logo SVG component
    ContactModal.tsx   Form handling (13KB, complex state)
    MetaTags.tsx       SEO metadata injection
    PageSections.tsx   MASSIVE: 65KB file with 40+ service/corporate page components
    CorporatePages.tsx Service page modules (Identity, Leadership, Board, Portfolio, Presence)
    SubPageLayout.tsx  Template for service sub-pages
    ErrorBoundary.tsx  Error handling wrapper
    ServiceCard.tsx    Reusable card component
    Section.tsx        Layout container
    CountUp.tsx        Animated counter utility
    HeroImage.tsx      Image lazy-loading wrapper
    HeroSlider.tsx     Carousel for hero images
    PortfolioSlider.tsx Project carousel
    LegalPage.tsx      Privacy/Terms pages (14KB)
    SuccessStoriesSection.tsx, QuickStats.tsx, PageSidebar.tsx, etc.

  data/
    constants.ts       Monolithic data hub: SITE, HERO, PARTNERS, STATS, NAV_CONFIG, ISO_DATA (871KB file)
    heroSlides.ts      Hero carousel images
    academyData.ts     Training program content
    ictData.ts         ICT service details
    mspData.ts         Managed services content
    powerData.ts       Power & energy content
    telecomData.ts     Telecom service content
    portfolioData.ts   Project portfolio
    projectShowcase.ts Project showcase items
    portfolioWidgetData.ts Portfolio widget definitions
    imageConfig.ts     Image paths and optimization config
    animationConstants.ts Framer Motion animation variants

  pages/
    TelecomPage.tsx    Telecom landing page
    ICTPage.tsx        ICT landing page
    PowerPage.tsx      Power landing page
    MSPPage.tsx        Managed services page (17KB)
    AcademyPage.tsx    Training academy page

  utils/
    routes.ts          Route mapping & navigation helpers

  hooks/               (appears empty)

public/
  assets/
    images/            Hero images, partners, portfolio, testimonials
    fonts/             Custom font files
  locales/en/          English translation JSON (single language now)
  .htaccess            Apache rewrite rules
  _redirects           Netlify redirect config
  contact.php          Backend PHP form handler
  robots.txt           SEO crawler directives
  sitemap.xml          Generated sitemap

scripts/
  prerender.ts         SSR/SSG: renders all routes at build time using Vite
  generate-sitemap.ts  Generates sitemap.xml
  compress-images.mjs  Image optimization utility

Build & Config:
  vite.config.ts       Bundler config with manual chunk splitting (vendor-react, vendor-motion, etc.)
  tailwind.config.ts   Tailwind utilities + responsive font scaling
  tsconfig.json        ES2022 target, strict mode
  package.json         Build scripts, dependencies pinned for stability
  netlify.toml         Netlify deployment config
```

**How It Fits Together:** 
The app is a client-side router wrapped in a pre-render pipeline. `App.tsx` is the central hub that switches between 46 page states (home, telecom, power, ict, academy, msp, and 40+ sub-pages). Each route is pre-rendered to static HTML at build time using `scripts/prerender.ts`, which hydrates a React app server-side and extracts meta tags via React Helmet. The pre-rendered pages are committed to `dist/`, then pushed to Netlify. Client-side navigation uses `history.pushState()` and re-renders the same App component. Data flows from centralized files in `src/data/` into components; there is no database or API (contact form posts to PHP backend at `/public/contact.php`).

---

## How to Run It

```bash
# Install dependencies
npm install

# Development server (hot reload on port 3000)
npm run dev

# Build for production (Vite bundling + SSR pre-render + sitemap generation)
npm run build

# Preview production build locally
npm run preview

# Type checking only (no emit)
npm run lint

# Compress images (one-time optimization)
node scripts/compress-images.mjs
```

**Required Environment Variables:**
- `VITE_PROXY_URL` (optional): Backend API proxy URL for future form submissions
- `GEMINI_API_KEY` (optional): AI feature flag (referenced in vite.config.ts but unused in code)

---

## Architectural & Code Health Assessment

### 1. Legacy Code & Debt Audit

#### **Obsolete Multilingual Infrastructure** ✗ HIGH PRIORITY
- **Issue:** i18next framework is fully wired but forced to English-only (`lng: 'en'` hardcoded in `src/i18n.ts`). All translation files exist (`public/locales/en/`) but are now single-language cargo cult.
- **Evidence:** 
  - Dependencies: `i18next`, `i18next-http-backend`, `react-i18next` (3 packages for a single language)
  - Config: `i18n.ts` loads translations at runtime from `/locales/{{lng}}/{{ns}}.json`, but no dynamic language switching
  - Build: `scripts/prerender.ts` initializes i18n for SSR, consuming build time
- **Cleanup Task:** Remove i18n entirely; hardcode strings or migrate to a lightweight `enUS.json` constants file.

#### **Massive Monolithic Files** ✗ MEDIUM-HIGH PRIORITY
1. **`src/components/PageSections.tsx` (65KB)**
   - Contains 40+ component exports (InfrastructurePages, ServicePages, ExcellencePages, etc.)
   - Each component represents a full page (e.g., `TelecommunicationsMobileRollout`, `PowerTransmissionDistribution`)
   - Violates single responsibility; impossible to tree-shake individual sections
   - **Action:** Split into `src/components/infrastructure/`, `src/components/services/`, etc.

2. **`src/data/constants.ts` (871KB import size)**
   - Stores SITE, HERO, NAV_CONFIG, ISO_DATA, HOME_SERVICE_CARDS, TESTIMONIAL_DATA, WHAT_WE_OFFER_ITEMS, FAQ_DATA, NEWS_DATA in one file
   - All imported at bundle time even if only one piece is used
   - **Action:** Split into `src/data/siteConfig.ts`, `src/data/navigationConfig.ts`, `src/data/contentFAQ.ts`, etc.

3. **`src/App.tsx` (27KB)**
   - Master routing switch with 46 case statements covering every PageID
   - Contains inline schema definitions, event handlers, state management
   - Impossible to lazy-load page logic
   - **Action:** Extract routing to a separate `usePageRouter()` hook; use code-splitting with `React.lazy()` for large pages.

4. **`src/components/ContactModal.tsx` (13KB)**
   - Full form logic, validation, API submission in one component
   - **Action:** Extract form logic to a custom hook (`useContactForm.ts`) and validation utility.

#### **Hardcoded Brand Assets & Content** ✗ MEDIUM PRIORITY
- **Evidence:**
  - Company name "Variety ElectroMechanical Engineering" hardcoded in `constants.ts`
  - Partner logos hardcoded in PARTNERS array (`NOKIA`, `SAFARICOM`, `ETHIO TELECOM`, `HUAWEI`, `ERICSSON`, `ZTE`, `ABB`)
  - Contact email `info@varietyeme.com` hardcoded in `constants.ts` and `public/contact.php`
  - Phone `+251 11 000 0000` hardcoded
  - Address "Bole Sub-city, Addis Ababa, Ethiopia" hardcoded
  - Testimonial author "Dr. Abraham Belay" (former Minister) hardcoded
  - News stories with specific dates and projects (July 2026) hardcoded
  - Hero images and portfolio paths assume `/assets/images/` structure
- **Blocker for New Client:** These will need systematic replacement. Create a client config object.
- **Action:** Extract all brand/content into `src/config/client.ts` with environment-based overrides.

#### **Unused/Legacy Dependencies & APIs** ✗ LOW-MEDIUM PRIORITY
- **GEMINI_API_KEY:** Referenced in `vite.config.ts` but never imported or used in components
- **i18next-fs-backend:** Dependency in `package.json` but code uses only `HttpBackend`
- **Lighthouse & Sharp:** Dev dependencies for build-time image optimization; `scripts/compress-images.mjs` exists but is manual (not integrated into build pipeline)
- **PHP Contact Form:** Backend at `public/contact.php` sends mail directly; no email validation, CSRF protection, or rate limiting
- **Action:** Audit used vs. unused; remove noise.

#### **Legacy Routing Artifacts**
- **types.ts PageID enum:** Contains deprecated routes like `'telecom'`, `'om'`, `'mobile-network'`, `'energy-mgmt'`, `'coresite'`, `'ai-iot'`, `'mobility'`, `'datacenters'`, `'awards'`, `'iso'` that are NOT in NAV_CONFIG and likely dead.
- **App.tsx switch:** No catch-all fallback; missing pages will silently render home
- **Action:** Audit and prune unused PageID entries.

---

### 2. SWOT Analysis

#### **STRENGTHS**
✅ **Clean Component Separation (at micro level)**
   - Individual components like `Brand.tsx`, `ServiceCard.tsx`, `Section.tsx` are small and focused
   - Good use of composition (ServiceCard embedded in multiple pages)

✅ **SEO Infrastructure**
   - React Helmet Async properly integrated for dynamic meta tags
   - Pre-rendering at build time ensures every page is crawlable as static HTML
   - Sitemap generation automated
   - Schema.org Organization markup in place (organizationSchema in App.tsx)

✅ **Performance Foundation**
   - Static site generation eliminates server overhead
   - Tailwind CSS with Vite bundling is lightweight and modern
   - Manual code-splitting config for vendor bundles (vendor-react, vendor-motion, vendor-i18n, vendor-lucide)
   - Lazy-loading image wrapper (HeroImage.tsx) in place but underutilized

✅ **Responsive Design**
   - Tailwind's `clamp()` utility for fluid font scaling (display, h1, h2, h3)
   - Mobile-first navigation (isMobileOpen state in App.tsx)
   - Portfolio and testimonial sliders for touch-friendly content

✅ **Modern Stack**
   - React 19, Vite 6, TypeScript 5.8, Tailwind 4 are current and stable
   - Framer Motion for polished animations (already used in hero/modal)
   - ESM modules throughout (no CommonJS friction)

#### **WEAKNESSES**
❌ **Monolithic Bundle Strategy**
   - App.tsx imports ALL page components upfront (no code-splitting/lazy-loading)
   - All data files imported at startup regardless of which page is viewed
   - 46 routes pre-rendered means 46 full HTML pages; if content changes, entire site rebuilds
   - **Impact:** Slower cold builds, larger client JS payload than necessary

❌ **State Management Chaos**
   - App.tsx manages 8 state variables (currentPage, isContactOpen, contactSubject, activeISO, isScrolled, activeMenu, isMobileOpen)
   - No centralized state container (no Context, Redux, Zustand); all lifted to App level
   - Prop drilling through Layout → Navigation → menus
   - **Impact:** Hard to extend; contact modal open/close logic scattered across App, Layout, Navigation

❌ **Poor Documentation & Type Safety**
   - No comments in `src/data/constants.ts` explaining data structure
   - PageID union type has 46 entries with no comments; impossible to know which are active
   - NAV_CONFIG and routes in prerender.ts can drift (manual sync required)
   - **Impact:** Onboarding developers is slow; regressions from mismatched routing

❌ **Brittle Routing**
   - Two source-of-truth problems:
     1. `types.ts` defines PageID
     2. `scripts/prerender.ts` maintains a separate routes array
     3. `src/data/constants.ts` defines NAV_CONFIG with paths
   - These must stay in sync manually
   - **Impact:** Easy to add a page and forget to pre-render it

❌ **Asset & Image Handling Issues**
   - Image paths hardcoded throughout data files (e.g., `/assets/images/hero/telecom.webp`)
   - No central image registry or lazy-loading strategy
   - HeroImage.tsx has lazy-loading wrapper but only used for hero images
   - Sharp dependency present but image compression is manual, not automated
   - **Impact:** Missing/broken images are invisible until production; no optimization strategy

❌ **Weak Backend Integration**
   - Contact form uses bare PHP (`public/contact.php`)
   - No input sanitization beyond `filter_var(EMAIL)`
   - No rate limiting, CSRF tokens, or spam protection (honeypot is basic)
   - Direct mail() call is unreliable (no logging, retry, or fallback)
   - Hardcoded recipient email `info@varietyeme.com`
   - **Impact:** Form could silently fail; new client will need to update email endpoint

❌ **Incomplete i18n Removal**
   - Framework still wired; unused for new single-language context
   - Translation files still in repo; creates confusion
   - PreRender.ts loads i18next even though it's not needed
   - **Impact:** Build time waste; tech debt that confuses new developers

❌ **Test Coverage Absent**
   - No Jest/Vitest configuration
   - No test files in repo
   - Manual QA checklist in README (5 items) is the only safety net
   - **Impact:** Regressions from refactoring go undetected

#### **OPPORTUNITIES**
🚀 **Consolidate Routing & Data**
   - Create a single `routes.config.ts` that defines pages, paths, components, data sources
   - Eliminate PageID enum; use route config as source of truth
   - Auto-generate pre-render routes and sitemap from config

🚀 **Extract Layout System**
   - SubPageLayout.tsx is a good template, but hero/hero-image variations are repeated
   - Create a layout factory or CSS Grid system for consistent page structure
   - Reduce duplicate code in CorporatePages.tsx and PageSections.tsx

🚀 **Lazy-Load Pages & Data**
   - Use React.lazy() + Suspense for non-home pages
   - Split data files by page (academyData.ts loads only when academy is viewed)
   - Reduce initial JS bundle size by 40-50%

🚀 **Image Optimization Pipeline**
   - Integrate Sharp into build pipeline to auto-generate WebP variants, thumbnails
   - Create an image registry (src/data/images.ts) that maps logical names to optimized asset URLs
   - Use native <picture> or <source> tags for responsive images

🚀 **Centralized Client Config**
   - Extract all brand-specific data into `src/config/client.ts` or `src/config/varieties-eme.ts`
   - Make it importable and overridable via environment
   - Simplifies client transition (just swap config file)

🚀 **State Management Modernization**
   - Adopt Zustand or Context for global nav/modal state
   - Eliminate prop drilling through Layout
   - Enable easy undo/redo and time-travel debugging

🚀 **Testing Infrastructure**
   - Add Vitest + React Testing Library
   - Test routing, form validation, page rendering
   - Catch breaking changes early

#### **THREATS**
⚠️ **Build Regression Risk**
   - Pre-render script uses Vite in middleware mode; SSR setup is fragile
   - If a component throws in renderToString(), entire build fails silently
   - No error boundaries in prerender.ts; hard to debug which route failed
   - **Mitigation:** Add try-catch per route; log detailed errors

⚠️ **Tight Coupling to Node Version**
   - netlify.toml pins NODE_VERSION = "20"
   - If Netlify upgrades or dependencies require Node 22, build breaks
   - No version manager (.nvmrc, .tool-versions)
   - **Mitigation:** Add .nvmrc; test with multiple Node versions

⚠️ **Dependency Mutation Risk**
   - package-lock.json is 220KB; indicates deep dependency tree
   - No dependency auditing in CI (no `npm audit` step)
   - Framer Motion, React, Vite all have frequent updates that could break SSR
   - **Mitigation:** Lock transitive dependencies; add security scanning in CI

⚠️ **Content Freshness & SEO**
   - News and testimonials are hardcoded with specific dates (July 2026)
   - No CMS or content API; all content requires code changes + rebuild
   - Search engines may de-rank static content if not frequently updated
   - **Mitigation:** Plan CMS integration (Contentful, Strapi, or headless backend)

⚠️ **Performance Cliff as Content Grows**
   - Pre-render approach works for 46 pages; if you add 1000 service pages, build time explodes
   - Each page must be hydrated by React, rendered to string, written to disk
   - No incremental builds or partial pre-rendering
   - **Mitigation:** Migrate to ISR (Incremental Static Regeneration) or on-demand rendering if content grows

⚠️ **Brand Leakage Risk**
   - Hardcoded company name, email, phone, address in code makes client transition error-prone
   - Copy-paste mistakes could expose old client branding
   - **Mitigation:** Enforce client config abstraction; add a pre-deploy check

⚠️ **Mobile Performance Unknown**
   - Lighthouse reports in repo (lighthouse-full-report.json, lighthouse-report.json) are not integrated into CI
   - No performance budget; no regression detection
   - Framer Motion animations could be heavy on mobile (JavaScript cost)
   - **Mitigation:** Add Lighthouse CI; enforce performance thresholds

---

### 3. Performance & Architecture Optimization Areas

#### **Bundle Analysis**
```
Current bottlenecks (inferred from code):
- vendor-react: ~45KB (React 19 + React DOM)
- vendor-motion: ~35KB (Framer Motion - used extensively for hero, modal animations)
- vendor-i18n: ~25KB (i18next + react-i18next - UNUSED for single language)
- vendor-lucide: ~15KB (Icon library - all icons pre-loaded, no tree-shaking in use)
- App.tsx + PageSections.tsx + data/constants.ts: ~100KB (all routes merged into one JS file)

Total estimated JS: ~220KB (uncompressed)
```

**Recommendations:**

1. **Remove i18n (save ~25KB)**
   ```typescript
   // Before: App.tsx imports useTranslation
   const { t } = useTranslation(undefined, { i18n: i18nProp });
   
   // After: Use a constants file
   import { SITE, NAV_LABELS } from '@/config/content.en';
   const heading = NAV_LABELS.telecom; // No runtime overhead
   ```

2. **Code-Split Pages (save ~40KB initial load, 10-15KB per page)**
   ```typescript
   // Before:
   import TelecomPage from './pages/TelecomPage';
   import PowerPage from './pages/PowerPage';
   
   // After:
   const TelecomPage = React.lazy(() => import('./pages/TelecomPage'));
   const PowerPage = React.lazy(() => import('./pages/PowerPage'));
   
   // Only load when navigated to
   ```

3. **Tree-Shake Lucide (save ~5KB)**
   ```typescript
   // Before: import { Radio, Server, Zap, ... } in data/constants.ts
   // After: Import only needed icons where used
   import { Radio } from 'lucide-react'; // Only in telecom nav item
   ```

4. **Extract Data by Page (save ~30KB on initial load)**
   ```typescript
   // Before: constants.ts has FAQ, news, testimonials imported everywhere
   // After:
   export const FAQ_DATA = lazy(() => import('./faq.data.ts'));
   // Load FAQ_DATA only on home page render
   ```

5. **Image Optimization**
   - Compress hero images to WebP + JPEG fallback
   - Generate srcset for responsive images
   - Lazy-load below-the-fold images
   - Estimated saving: 50-60% image file size

**Projected Optimizations:**
- Initial JS: ~220KB → ~110KB (50% reduction)
- Time to Interactive: reduced by ~40%
- Lighthouse Performance score: likely 70+ → 85+

---

### 4. Actionable Remainder Checklist

#### **PHASE 1: CRITICAL (Before Launch)**
- [ ] **Remove i18n Framework** (2-3 hours)
  - Delete i18next, react-i18next, i18next-http-backend dependencies
  - Replace `useTranslation()` with direct imports from a `content.en.ts` file
  - Remove translations loading from prerender.ts
  - Delete `public/locales/` directory
  - Update vite.config.ts to remove i18next from SSR externals

- [ ] **Extract Client Config** (3-4 hours)
  - Create `src/config/varieties-eme.ts` (or `new-client.ts`) with:
    ```typescript
    export const CLIENT = {
      name: 'Variety ElectroMechanical Engineering',
      email: 'info@varietyeme.com',
      phone: '+251 11 000 0000',
      address: 'Bole Sub-city, Addis Ababa, Ethiopia',
      partners: [...],
      testimonial: {...},
      siteUrl: 'https://varietyeme.com',
    };
    ```
  - Replace all hardcoded brand references with `CLIENT.*` imports
  - Update `public/contact.php` to use environment variable for recipient email
  - Add `CLIENT_EMAIL` to .env.example

- [ ] **Sanitize Routing** (2-3 hours)
  - Audit all PageID entries in types.ts; remove unused ones (telecom, om, mobile-network, energy-mgmt, coresite, ai-iot, mobility, datacenters, awards, iso)
  - Create a single `routes.config.ts` as source of truth:
    ```typescript
    export const ROUTES = [
      { id: 'home', path: '/', component: HomePage, label: 'Home' },
      { id: 'telecommunications', path: '/telecommunications', component: TelecomPage, label: 'Telecommunications' },
      // ... 45 more
    ];
    ```
  - Generate PageID enum and pre-render routes from this file
  - Update App.tsx to use ROUTES config instead of massive switch

- [ ] **Fix Contact Form Security** (2-3 hours)
  - Add CSRF token generation and validation
  - Implement rate limiting (e.g., 5 submissions per IP per hour)
  - Add input sanitization beyond email validation
  - Log all submissions for audit
  - Return proper error messages on failure
  - Test spam scenarios (honeypot bypass, malformed input)

- [ ] **Run Full QA Checklist** (4-6 hours)
  - Navigation: Click every menu item, verify correct page loads
  - SEO: Inspect page source for unique <title>, <meta name="description">
  - Responsiveness: Test on 5+ breakpoints (mobile, tablet, desktop, large desktop, ultrawide)
  - Performance: Run Lighthouse 5 times, average score must be 85+
  - Console: No red errors or warnings
  - Forms: Submit contact form with valid/invalid data; verify backend response
  - Images: Check all images load; verify WebP support on modern browsers
  - Links: Test internal navigation, external links, PDF links (if any)

- [ ] **Remove Unused Dependencies** (1 hour)
  - Uninstall: `i18next`, `i18next-http-backend`, `i18next-fs-backend`, `react-i18next`
  - Verify: `npm audit` passes
  - Clean install: `rm -rf node_modules && npm install`

#### **PHASE 2: HIGH PRIORITY (Within 2-3 weeks)**

- [ ] **Split Monolithic Components** (6-8 hours)
  - Break PageSections.tsx into:
    - `src/components/infrastructure/TelecommunicationsMobileRollout.tsx`
    - `src/components/infrastructure/TelecommunicationsFiberOptics.tsx`
    - ... (5 more telecom, 4 power, 5 ICT, 4 academy components)
    - `src/components/corporate/IdentityPage.tsx`, etc.
  - Update imports in App.tsx
  - Verify bundle size remains the same (no tree-shaking yet; Phase 3 enables that)

- [ ] **Split Data Files** (4-5 hours)
  - Create:
    - `src/data/siteConfig.ts` (SITE constant)
    - `src/data/navConfig.ts` (NAV_CONFIG + ISO_DATA)
    - `src/data/homeContent.ts` (TESTIMONIAL_DATA, WHAT_WE_OFFER_ITEMS, FAQ_DATA, NEWS_DATA, HOME_SERVICE_CARDS)
    - `src/data/heroContent.ts` (HERO, heroSlides imports)
    - `src/data/partners.ts` (PARTNERS)
  - Update imports throughout components
  - Verify no circular dependencies

- [ ] **Improve Error Handling** (2-3 hours)
  - Add per-route error boundaries in prerender.ts:
    ```typescript
    try {
      const appHtml = ReactDOMServer.renderToString(...);
    } catch (e) {
      console.error(`FAILED TO RENDER ${route.path}:`, e);
      // Fall back to error page or skip route
    }
    ```
  - Add Sentry or similar error tracking for production
  - Log build failures with context (which component, which page)

- [ ] **Image Audit & Optimization** (4-6 hours)
  - Inventory all images (hero, partners, portfolio, testimonials)
  - Generate WebP variants using Sharp:
    ```bash
    node scripts/compress-images.mjs --output dist/assets
    ```
  - Create image manifest: `src/data/images.ts`
    ```typescript
    export const IMAGES = {
      hero: {
        telecom: { webp: '/assets/images/hero/telecom.webp', jpeg: '/assets/images/hero/telecom.jpg' },
        datacenter: { ... }
      },
      partners: { nokia: { src: '...', alt: 'Nokia' }, ... }
    };
    ```
  - Replace hardcoded paths with `IMAGES.*`
  - Add lazy-loading to below-the-fold images

- [ ] **Add Pre-Deployment Validation** (2-3 hours)
  - Create `scripts/validate-deploy.ts`:
    - Check all routes in ROUTES are in prerender.ts
    - Check all data imports are used
    - Check no hardcoded client brand names in src/
    - Check no secrets in .env files
    - Check no console.log() in production code
  - Run before `npm run build` via npm hook:
    ```json
    "prebuild": "tsx scripts/validate-deploy.ts"
    ```

- [ ] **Set Up .nvmrc & Node Version Testing** (1 hour)
  - Create `.nvmrc`: `20.18.0`
  - Test build on Node 20, 22

- [ ] **Add Type Checking to CI** (1-2 hours)
  - Ensure `npm run lint` (tsc --noEmit) passes in pre-commit hook
  - Add GitHub Actions workflow:
    ```yaml
    - name: Type Check
      run: npm run lint
    ```

#### **PHASE 3: MEDIUM PRIORITY (Within 1 month)**

- [ ] **Code-Split Page Components** (6-8 hours)
  - Wrap non-home page imports with React.lazy():
    ```typescript
    const TelecomPage = React.lazy(() => import('./pages/TelecomPage'));
    ```
  - Add Suspense boundary in App.tsx
  - Measure bundle size reduction (target: 40% smaller initial load)

- [ ] **Lazy-Load Data by Page** (4-5 hours)
  - Move page-specific data into separate files:
    - `src/data/pages/telecom.data.ts` (telecomData, telecomServices, etc.)
    - `src/data/pages/academy.data.ts` (academyData, programs, etc.)
  - Import lazily in page components (not at App level)
  - Measure: Does home page load without telecomData? Verify in DevTools Network tab

- [ ] **Set Up Lighthouse CI** (2-3 hours)
  - Add GitHub Actions workflow to run Lighthouse on every PR
  - Set thresholds:
    - Performance: 75+
    - Accessibility: 90+
    - Best Practices: 85+
    - SEO: 90+
  - Fail build if thresholds not met

- [ ] **Automated Image Compression** (2-3 hours)
  - Integrate Sharp into build pipeline:
    ```typescript
    // vite.config.ts plugin
    {
      name: 'compress-images',
      apply: 'build',
      async generateBundle() {
        // Run compress-images.mjs
      }
    }
    ```
  - Ensure all images in public/assets/images/ are automatically optimized on build

- [ ] **Add Vitest + Testing** (6-8 hours)
  - Install Vitest, React Testing Library, jsdom
  - Write tests for:
    - Route navigation (does /telecommunications load TelecomPage?)
    - Contact form validation
    - Page component rendering (home page renders without crashing)
    - Data structure integrity (all routes have required fields)
  - Achieve 60%+ coverage on critical paths

- [ ] **Documentation** (2-3 hours)
  - Update README.md with:
    - Architecture overview (client config, data structure, routing model)
    - How to add a new page (step-by-step: add PageID, add route, add component, add data)
    - How to change brand/client (point to CLIENT config file)
    - Performance budget & targets
  - Create DEVELOPER.md with setup, debugging, testing instructions
  - Add JSDoc comments to complex functions

#### **PHASE 4: NICE-TO-HAVE (Within 2 months)**

- [ ] **State Management Modernization** (4-6 hours)
  - Adopt Zustand or Context API for global nav/modal state
  - Eliminate prop drilling from App → Layout → Navigation
  - Move contactSubject, isContactOpen, activeISO, etc. to store

- [ ] **CMS Integration Planning** (2-3 hours)
  - Evaluate Contentful, Strapi, Sanity for dynamic content
  - Plan migration of hardcoded news, FAQ, testimonials to CMS
  - Design API contract for content endpoints

- [ ] **PWA Features** (3-4 hours)
  - Add service worker for offline support
  - Manifest.json for app install prompts
  - Cache busting strategy for pre-rendered HTML

- [ ] **A/B Testing Framework** (2-3 hours)
  - Integrate Optimizely or custom A/B testing for CTA buttons, hero copy

- [ ] **Analytics Setup** (1-2 hours)
  - Integrate Google Analytics 4 or Plausible
  - Track page views, form submissions, link clicks
  - Set up funnels for contact/quote conversion

---

## Summary: Risk-to-Reward Scorecard

| Task | Risk if Skipped | Effort | Priority | Launch Blocker? |
|------|---|---|---|---|
| Remove i18n | Tech debt, slow builds, confusion | 3h | HIGH | YES |
| Extract client config | Brand leakage, manual errors | 4h | HIGH | YES |
| Sanitize routing | Broken pages, 404s, maintenance hell | 3h | HIGH | YES |
| Fix contact form security | Spam, data leaks, lost submissions | 3h | HIGH | YES |
| QA checklist | Poor UX, broken links, low SEO | 6h | HIGH | YES |
| Split monolithic files | Hard to maintain, slow to extend | 8h | MEDIUM | NO |
| Image optimization | Slow pages, poor Lighthouse scores | 6h | MEDIUM | NO |
| Code-split pages | Large initial bundle, slow FCP | 8h | MEDIUM | NO |
| Testing | Regressions, broken deploys | 8h | MEDIUM | NO |
| Lighthouse CI | Performance regressions undetected | 3h | MEDIUM | NO |
| Documentation | Onboarding friction, mistakes | 3h | MEDIUM | NO |

---

## Immediate Next Steps (Before Launching to New Client)

1. **This Week:** Complete PHASE 1 (remove i18n, extract config, fix routing, secure form, QA)
2. **Next 2-3 Weeks:** Complete PHASE 2 (split files, error handling, images, validation)
3. **Deploy:** Once PHASE 1 & 2 done, build and deploy to staging; run full manual + automated QA
4. **Launch:** Only after green light from QA; monitor Lighthouse and error logs for first 48 hours
5. **Post-Launch:** Begin PHASE 3 (code-splitting, lazy-loading, CI/CD) while supporting live site

This audit should give you a clear roadmap to transform Variety-EME into a clean, maintainable, and performant foundation for the new client—without the accumulated cruft of its multilingual predecessor.