import { Helmet } from 'react-helmet-async';
import {
  SITE_NAME,
  SITE_LOCALE,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  ORGANIZATION,
  absoluteUrl,
} from '@/seo/siteConfig';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORGANIZATION.name,
  legalName: ORGANIZATION.legalName,
  url: ORGANIZATION.url,
  logo: ORGANIZATION.logo,
  email: ORGANIZATION.email,
  telephone: ORGANIZATION.telephone,
  address: {
    '@type': 'PostalAddress',
    ...ORGANIZATION.address,
  },
  sameAs: ORGANIZATION.sameAs,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: ORGANIZATION.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${ORGANIZATION.url}/products?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function SeoHead({
  title,
  description,
  path = '/home',
  image,
  keywords,
  noindex = false,
  jsonLd,
  includeOrganizationSchema = false,
}) {
  const canonical = absoluteUrl(path);
  const ogImage = image || absoluteUrl(DEFAULT_OG_IMAGE);
  const structuredData = [
    websiteJsonLd,
    ...(includeOrganizationSchema ? [organizationJsonLd] : []),
    ...(jsonLd ? [jsonLd] : []),
  ];

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonical} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={SITE_LOCALE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="author" content={SITE_NAME} />
      <meta name="theme-color" content="#0f172a" />

      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
