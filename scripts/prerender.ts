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
  { path: '/telecommunications', page: 'telecommunications' },
  { path: '/telecommunications/mobile-rollout', page: 'telecommunications_mobile_rollout' },
  { path: '/telecommunications/fiber-optics', page: 'telecommunications_fiber_optics' },
  { path: '/telecommunications/tower-civil-works', page: 'telecommunications_tower_civil_works' },
  { path: '/telecommunications/operations-maintenance', page: 'telecommunications_operations_maintenance' },
  { path: '/telecommunications/warehouse-management', page: 'telecommunications_warehouse_management' },
  { path: '/ict-datacenter', page: 'ict_datacenter' },
  { path: '/ict-datacenter/data-center-design', page: 'ict_datacenter_data_center_design' },
  { path: '/ict-datacenter/enterprise-networking', page: 'ict_datacenter_enterprise_networking' },
  { path: '/ict-datacenter/system-development', page: 'ict_datacenter_system_development' },
  { path: '/ict-datacenter/cybersecurity-managed', page: 'ict_datacenter_cybersecurity_managed' },
  { path: '/ict-datacenter/training-consultancy', page: 'ict_datacenter_training_consultancy' },
  { path: '/power', page: 'power' },
  { path: '/power/transmission-distribution', page: 'power_transmission_distribution' },
  { path: '/power/minigrid-systems', page: 'power_minigrid_systems' },
  { path: '/power/backup-power', page: 'power_backup_power' },
  { path: '/power/building-electromechanical', page: 'power_building_electromechanical' },
  { path: '/academy', page: 'academy' },
  { path: '/academy/overview', page: 'academy_overview' },
  { path: '/academy/fiber-optics-certification', page: 'academy_fiber_optics_certification' },
  { path: '/academy/telecom-automation-training', page: 'academy_telecom_automation_training' },
  { path: '/academy/managed-services', page: 'academy_managed_services' },
  { path: '/academy/institutional-partnerships', page: 'academy_institutional_partnerships' },
  { path: '/portfolio', page: 'portfolio' },
  { path: '/about', page: 'about' },
  { path: '/contact', page: 'contact' },
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
