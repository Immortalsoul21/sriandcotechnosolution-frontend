export const SITE_NAME = 'Sri and Co Techno Solutions';
export const SITE_TAGLINE = 'RF, Microwave & Electronic Components Distributor';
export const SITE_DESCRIPTION =
  'Leading distributor of RF, microwave, and electronic components for aerospace, defence, and industrial sectors. Same-day shipping, certified supply chain, and global delivery from Bangalore, India.';
export const SITE_URL =
  import.meta.env.VITE_SITE_URL || 'https://srindco-technosolution.vercel.app';
export const SITE_LOCALE = 'en_IN';
export const DEFAULT_OG_IMAGE = '/images/logo.png';
export const TWITTER_HANDLE = '@sriandcotechno';

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: 'Sri and Co Techno Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: 'info@sriandco.com',
  telephone: '+91-9999999999',
  address: {
    streetAddress: '123 Electronics Plaza',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/sri-and-co-techno-solutions-72a238385/',
    'https://www.facebook.com/profile.php?id=61559063276562',
    'https://www.instagram.com/sri_and_co_techno_solutions/',
    'https://x.com/sriandcotechno',
  ],
};

export function absoluteUrl(path = '/') {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function toProductSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}
