import { writeFileSync } from 'node:fs';
import { categories, products } from '../src/data/products2.js';

const SITE_URL = process.env.VITE_SITE_URL || 'https://srindco-technosolution.vercel.app';

const staticRoutes = ['/home', '/about', '/features', '/services', '/products', '/careers'];

function toProductSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(path, priority = '0.8', changefreq = 'weekly') {
  const loc = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  ...staticRoutes.map((route) => urlEntry(route, route === '/home' ? '1.0' : '0.8')),
  ...categories.map((category) =>
    urlEntry(`/products/${encodeURIComponent(category.categoryId)}`, '0.7'),
  ),
  ...products.map((product) =>
    urlEntry(
      `/products/${encodeURIComponent(product.categoryId)}/${toProductSlug(product.name)}`,
      '0.6',
      'monthly',
    ),
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemap, 'utf8');
console.log(`Generated sitemap with ${urls.length} URLs.`);
