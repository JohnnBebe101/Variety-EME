import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const routes = [
  { path: '/', page: 'home' },
  { path: '/telecom', page: 'telecom' },
  { path: '/power', page: 'power' },
  { path: '/ict', page: 'ict' },
  { path: '/ai-iot', page: 'ai-iot' },
  { path: '/mobility', page: 'mobility' },
  { path: '/identity', page: 'identity' },
  { path: '/leadership', page: 'leadership' },
  { path: '/board', page: 'board' },
  { path: '/portfolio-detailed', page: 'portfolio-detailed' },
  { path: '/presence', page: 'presence' },
  { path: '/om', page: 'om' },
  { path: '/mobile-network', page: 'mobile-network' },
  { path: '/energy-mgmt', page: 'energy-mgmt' },
  { path: '/coresite', page: 'coresite' },
  { path: '/datacenters', page: 'datacenters' },
  { path: '/awards', page: 'awards' },
  { path: '/iso', page: 'iso' },
  { path: '/academy', page: 'academy' },
  { path: '/consultancy', page: 'consultancy' },
  { path: '/ehs', page: 'ehs' },
];

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

    // Load translations manually for SSR
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

    console.log('Test translation in prerender.ts:', i18n.t('common.heroTitle'));
    
    for (const route of routes) {
      const helmetData = new HelmetData({});
      
      // Render the app for the current route
      const appHtml = ReactDOMServer.renderToString(
        React.createElement(HelmetProvider, { helmetData },
          React.createElement(App, { initialPage: route.page, i18n })
        )
      );

      console.log(`Rendered HTML length for ${route.path}: ${appHtml.length}`);
      console.log('helmetData keys:', Object.keys(helmetData));
      console.log('helmetData.context keys:', Object.keys(helmetData.context));
      
      const { helmet } = helmetData.context;
      if (!helmet) {
        console.error('Helmet context not populated for route:', route.path);
        console.log('helmetData.context keys:', Object.keys(helmetData.context));
        continue;
      }

      // Inject the rendered HTML and meta tags into the template
      let html = template
        .replace('<!--ssr-outlet-->', appHtml)
        .replace('<!-- helmet-title -->', helmet.title.toString())
        .replace('<!-- helmet-meta -->', helmet.meta.toString())
        .replace('<!-- helmet-link -->', helmet.link.toString())
        .replace('<!-- helmet-script -->', helmet.script.toString());

      // Determine output path
      const outDir = path.resolve(root, 'dist', route.path.slice(1));
      await fs.ensureDir(outDir);
      await fs.writeFile(path.join(outDir, 'index.html'), html);
      
      console.log(`Pre-rendered: ${route.path}`);
    }
  } catch (e) {
    console.error(e);
  } finally {
    await vite.close();
  }
}

prerender();
