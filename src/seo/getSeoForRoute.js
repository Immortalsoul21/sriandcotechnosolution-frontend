import { categories, products } from '@/data/products1';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  absoluteUrl,
  toProductSlug,
} from './siteConfig';

const STATIC_PAGES = {
  '/home': {
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    keywords:
      'RF components, microwave components, electronic components distributor, aerospace components, defence electronics, Bangalore, Sri and Co Techno Solutions',
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Learn about Sri and Co Techno Solutions — a trusted distributor of RF, microwave, and electronic components serving aerospace, defence, and industrial sectors worldwide.',
    keywords: 'about Sri and Co, RF distributor India, electronic components company Bangalore',
  },
  '/features': {
    title: `Features & Capabilities | ${SITE_NAME}`,
    description:
      'Explore our precision engineering, global distribution network, same-day shipping, certified suppliers, and dedicated technical support for RF and electronic components.',
    keywords: 'RF component features, certified suppliers, same-day shipping electronics',
  },
  '/services': {
    title: `Services | ${SITE_NAME}`,
    description:
      'Quick delivery, import solutions, flexible MOQ, competitive pricing, and independent distribution services for RF, microwave, and electronic components.',
    keywords: 'component import services, flexible MOQ, electronics distribution services',
  },
  '/products': {
    title: `Products | ${SITE_NAME}`,
    description:
      'Browse RF & microwave components, antennas, electronics, robotics, cables, resistors, capacitors, and more from Sri and Co Techno Solutions.',
    keywords: 'RF products, microwave products, antennas, electronic components catalog',
  },
  '/careers': {
    title: `Careers | ${SITE_NAME}`,
    description: 'Join Sri and Co Techno Solutions. Explore career opportunities in RF and electronic components distribution.',
    keywords: 'careers Sri and Co, electronics jobs Bangalore',
    noindex: true,
  },
};

function findProduct(categoryParam, productSlug) {
  const category = decodeURIComponent(categoryParam || '');
  return products.find(
    (product) =>
      product.categoryId === category &&
      toProductSlug(product.name) === productSlug,
  );
}

function getCategorySeo(categoryParam) {
  const category = decodeURIComponent(categoryParam || '');
  const categoryData = categories.find((item) => item.categoryId === category);
  const title = categoryData?.value || category;
  const count = products.filter((product) => product.categoryId === category).length;

  return {
    title: `${title} | ${SITE_NAME}`,
    description: `Shop ${count}+ ${title.toLowerCase()} from ${SITE_NAME}. Certified RF and electronic components with fast delivery across India and worldwide.`,
    keywords: `${title}, RF components, ${SITE_NAME}`,
  };
}

function getProductSeo(categoryParam, productSlug, stateProduct) {
  const product = stateProduct || findProduct(categoryParam, productSlug);

  if (!product) {
    return {
      title: `Product | ${SITE_NAME}`,
      description: SITE_DESCRIPTION,
    };
  }

  const description =
    product.description?.slice(0, 155) ||
    `${product.name} — ${product.subcategoryId || product.categoryId} available from ${SITE_NAME}.`;

  return {
    title: `${product.name} | ${SITE_NAME}`,
    description,
    keywords: `${product.name}, ${product.categoryId}, ${product.subcategoryId || ''}, electronic components`,
    image: product.image?.startsWith('http') ? product.image : absoluteUrl(product.image),
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description,
      image: product.image?.startsWith('http') ? product.image : absoluteUrl(product.image),
      sku: product.productId || product.partNo,
      brand: {
        '@type': 'Brand',
        name: product.manufacturer || SITE_NAME,
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
        url: absoluteUrl(
          `/products/${encodeURIComponent(product.categoryId)}/${toProductSlug(product.name)}`,
        ),
      },
    },
  };
}

export function getSeoForRoute(pathname, params = {}, locationState = {}) {
  const normalizedPath = pathname === '/' ? '/home' : pathname.replace(/\/+$/, '') || '/home';

  if (STATIC_PAGES[normalizedPath]) {
    return {
      path: normalizedPath,
      ...STATIC_PAGES[normalizedPath],
    };
  }

  const productDetailMatch = normalizedPath.match(/^\/products\/([^/]+)\/([^/]+)$/);
  if (productDetailMatch) {
    const [, categoryParam, productSlug] = productDetailMatch;
    return {
      path: normalizedPath,
      ...getProductSeo(categoryParam, productSlug, locationState?.product),
    };
  }

  const categoryMatch = normalizedPath.match(/^\/products\/([^/]+)$/);
  if (categoryMatch) {
    const [, categoryParam] = categoryMatch;
    return {
      path: normalizedPath,
      ...getCategorySeo(categoryParam),
    };
  }

  return {
    path: normalizedPath,
    title: `Page Not Found | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    noindex: true,
  };
}
