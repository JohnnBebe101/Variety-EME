import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const DOMAIN = 'https://varietyeme.com';

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/telecom', priority: '0.8' },
  { path: '/power', priority: '0.8' },
  { path: '/ict', priority: '0.8' },
  { path: '/ai-iot', priority: '0.7' },
  { path: '/mobility', priority: '0.7' },
  { path: '/identity', priority: '0.6' },
  { path: '/leadership', priority: '0.6' },
  { path: '/board', priority: '0.6' },
  { path: '/portfolio-detailed', priority: '0.7' },
  { path: '/presence', priority: '0.6' },
  { path: '/om', priority: '0.7' },
  { path: '/mobile-network', priority: '0.7' },
  { path: '/energy-mgmt', priority: '0.7' },
  { path: '/coresite', priority: '0.7' },
  { path: '/datacenters', priority: '0.7' },
  { path: '/awards', priority: '0.5' },
  { path: '/iso', priority: '0.6' },
  { path: '/academy', priority: '0.7' },
  { path: '/consultancy', priority: '0.7' },
  { path: '/ehs', priority: '0.6' },
];

async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  await fs.writeFile(path.resolve(root, 'public/sitemap.xml'), sitemap);
  console.log('Sitemap generated in public/sitemap.xml');
  
  // Also copy to dist if it exists
  const distPath = path.resolve(root, 'dist/sitemap.xml');
  if (await fs.pathExists(path.resolve(root, 'dist'))) {
    await fs.writeFile(distPath, sitemap);
    console.log('Sitemap copied to dist/sitemap.xml');
  }
}

generateSitemap();
