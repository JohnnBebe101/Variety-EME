import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { PRERENDER_ROUTES } from '../src/config/routes.config';
import { registerSSRModule } from '../src/utils/ssrSafeLazy';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const template = await fs.readFile(path.resolve(root, 'dist/index.html'), 'utf-8');
    const { default: i18next } = await vite.ssrLoadModule('i18next');
    const i18n = i18next.createInstance();
    const { I18nextProvider, initReactI18next } = await vite.ssrLoadModule('react-i18next');
    const { default: App, HelmetProvider } = await vite.ssrLoadModule('/src/App.tsx');
    const { HelmetData } = await vite.ssrLoadModule('react-helmet-async');

    // Pre-load all lazy modules so renderToString resolves them synchronously
    const lazyModules = [
      // Barrel chunks (used by React.lazy indirect property access)
      { key: '/src/components/CorporatePages.tsx',         path: '/src/components/CorporatePages.tsx',              ssr: false },
      { key: '/src/components/sections/services/index.ts', path: '/src/components/sections/services/index.ts',      ssr: false },
      { key: '/src/components/sections/excellence/index.ts', path: '/src/components/sections/excellence/index.ts',  ssr: false },
      { key: '/src/components/sections/infrastructure/TelecomOverview.tsx', path: '/src/components/sections/infrastructure/TelecomOverview.tsx', ssr: false },
      // Direct page chunks (used by ssrSafeLazy — must register default export)
      { key: '/src/pages/TelecomPage.tsx',     path: '/src/pages/TelecomPage.tsx',     ssr: true },
      { key: '/src/pages/ICTPage.tsx',         path: '/src/pages/ICTPage.tsx',         ssr: true },
      { key: '/src/pages/PowerPage.tsx',       path: '/src/pages/PowerPage.tsx',       ssr: true },
      { key: '/src/pages/MSPPage.tsx',         path: '/src/pages/MSPPage.tsx',         ssr: true },
      { key: '/src/pages/AcademyPage.tsx',     path: '/src/pages/AcademyPage.tsx',     ssr: true },
      { key: '/src/components/LegalPage.tsx',  path: '/src/components/LegalPage.tsx',  ssr: true },
      { key: '/src/components/home/HomePage.tsx', path: '/src/components/home/HomePage.tsx', ssr: true },
      { key: '/src/components/ContactModal.tsx', path: '/src/components/ContactModal.tsx', ssr: true },
    ];
    for (const mod of lazyModules) {
      const loaded = await vite.ssrLoadModule(mod.path);
      if (mod.ssr) {
        registerSSRModule(mod.key, loaded.default);
      }
    }

    const translations = await fs.readJson(path.resolve(root, 'public/locales/en/translation.json'));

    i18n.use(initReactI18next);
    await i18n.init({
      lng: 'en',
      fallbackLng: 'en',
      resources: {
        en: {
          translation: translations
        }
      },
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      }
    });

    let successCount = 0;
    let failCount = 0;

    for (const route of PRERENDER_ROUTES) {
      try {
        const helmetData = new HelmetData({});

        const appHtml = ReactDOMServer.renderToString(
          React.createElement(HelmetProvider, { helmetData },
            React.createElement(App, { initialPage: route.page, i18n })
          )
        );

        const { helmet } = helmetData.context;
        if (!helmet) {
          console.error(`[SKIP] Helmet context not populated for ${route.path}`);
          failCount++;
          continue;
        }

        let html = template
          .replace('<!--ssr-outlet-->', appHtml)
          .replace('<!-- helmet-title -->', helmet.title.toString())
          .replace('<!-- helmet-meta -->', helmet.meta.toString())
          .replace('<!-- helmet-link -->', helmet.link.toString())
          .replace('<!-- helmet-script -->', helmet.script.toString());

        const outDir = path.resolve(root, 'dist', route.path.slice(1));
        await fs.ensureDir(outDir);
        await fs.writeFile(path.join(outDir, 'index.html'), html);

        successCount++;
        console.log(`  \u2713 ${route.path}`);
      } catch (e) {
        failCount++;
        console.error(`  \u2717 FAILED: ${route.path}`, e);
      }
    }

    console.log(`\nPre-render complete: ${successCount} succeeded, ${failCount} failed`);
  } catch (e) {
    console.error('Pre-render aborted:', e);
  } finally {
    await vite.close();
  }
}

prerender();
