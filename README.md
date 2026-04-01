# InfinEth Solutions - Static Site

Ethiopia's leading provider of Telecom Infrastructure, ICT Systems Design, and Electro-Mechanical Engineering.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Development
Run the local development server with hot reload:
```bash
npm run dev
```

### Build for Production
Generate a production-ready static site in the `dist/` folder:
```bash
npm run build
```
This command performs the following steps:
1. `vite build`: Compiles assets and generates the base SPA.
2. `npm run prerender`: Pre-renders all static routes into HTML files for SEO.
3. `npm run generate-sitemap`: Generates `sitemap.xml` for search engines.

## 📁 Project Structure

- `src/data/constants.ts`: **Primary location for content updates.** Edit this file to change navigation, ISO data, or partner lists.
- `public/locales/en/translation.json`: Contains all UI text strings for easy internationalization management.
- `scripts/`: Contains build-time scripts for SSG and Sitemap generation.
- `src/components/PageSections.tsx`: Contains the content for various sub-pages.

## 🌐 Environment Variables

Create a `.env` file in the root directory for any environment-specific configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_PROXY_URL` | URL for the backend API proxy (if used for forms/contact) | - |
| `GEMINI_API_KEY` | API key for AI-powered features (if enabled) | - |

## 🛠 Deployment

The `dist/` folder is ready to be uploaded to any static hosting provider.

### Netlify / Vercel
The project includes a `public/_redirects` file to handle client-side routing fallbacks. Ensure your deployment settings point to the `dist` directory as the publish directory.

## 🧪 Quality Assurance Checklist

Before every production deployment, verify the following:
1. **Navigation**: Click through all menu items and ensure routes render correctly.
2. **SEO**: Check that each page has a unique `<title>` and `<meta name="description">` in the source code.
3. **Responsiveness**: Test on mobile, tablet, and desktop resolutions.
4. **Performance**: Run a Lighthouse audit; scores should ideally be 90+.
5. **Console**: Ensure no red errors appear in the browser developer console.

## 📄 Maintenance

- **Adding Routes**: To add a new pre-rendered page, update the `routes` array in both `scripts/prerender.ts` and `scripts/generate-sitemap.ts`.
- **Updating Dependencies**: Dependencies are pinned in `package.json` for stability. Use `npm update` cautiously and test thoroughly.
