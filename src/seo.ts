/**
 * Search & share metadata for every page — <title>, description, canonical,
 * Open Graph / Twitter cards and Schema.org JSON-LD. Read by the Vite plugin in
 * vite.config.ts, which writes it into each page's <head> in dev and build, so
 * the tags are in the HTML Google downloads (no JavaScript needed to see them).
 */
import {faqs, reseller, wigClass, type Faq} from './content/more';
import {pages, type PageId, menuPages} from './content/pages';
import {services} from './content/services';
import {bundlePrices, wigCollections} from './content/wigs';
import {BASE, site, withBase} from './site';

/** Demo copies (e.g. GitHub Pages) stay out of Google so they never compete with the real domain. */
const isDemo = BASE !== '/';

const abs = (p: string) => `${site.url}${p}`;
const img = (slug: string, w = 1600) => abs(`/media/${slug}-${w}.webp`);
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const FONTS =
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Montserrat:wght@400;500;600&display=swap';

const salonId = `${site.url}/#salon`;

function salon() {
  return {
    '@type': ['BeautySalon', 'HairSalon', 'NailSalon'],
    '@id': salonId,
    name: site.name,
    alternateName: site.alternateName,
    slogan: site.tagline,
    description: pages.home.description,
    url: abs('/'),
    logo: abs('/media/mimie-x-eyecandy-logo.jpg'),
    image: [abs('/og-image.jpg'), img('sleek-bob-wig-portrait'), img('cornrow-straight-back-braids')],
    telephone: site.whatsapp.e164,
    email: site.email,
    priceRange: 'R120 – R1390',
    currenciesAccepted: 'ZAR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    hasMap: site.mapsUrl,
    areaServed: site.areas.map((name) => ({'@type': 'Place', name})),
    contactPoint: [
      {'@type': 'ContactPoint', contactType: 'bookings', telephone: site.whatsapp.e164, availableLanguage: ['English']},
      {'@type': 'ContactPoint', contactType: 'customer service', telephone: site.phone2.e164, email: site.email},
    ],
    sameAs: [site.instagram.url, site.facebook.url],
    foundingDate: site.openedOn,
    ...(site.hours
      ? {
          openingHoursSpecification: site.hours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
  };
}

function offerCatalog() {
  return {
    '@type': 'OfferCatalog',
    '@id': `${site.url}/services/#catalog`,
    name: 'Salon services & prices',
    itemListElement: services.map((c) => ({
      '@type': 'OfferCatalog',
      name: c.name,
      itemListElement: c.items.map((i) => ({
        '@type': 'Offer',
        itemOffered: {'@type': 'Service', name: i.name, provider: {'@id': salonId}, areaServed: site.address.suburb},
        ...(typeof i.price === 'number'
          ? {priceSpecification: {'@type': 'PriceSpecification', minPrice: i.price, priceCurrency: 'ZAR'}}
          : {}),
      })),
    })),
  };
}

function wigCatalog() {
  return {
    '@type': 'OfferCatalog',
    '@id': `${site.url}/wigs/#catalog`,
    name: 'Eye Candy wigs & bundles',
    itemListElement: [
      ...wigCollections.map((c) => ({
        '@type': 'OfferCatalog',
        name: c.name,
        itemListElement: c.wigs.map((w) => ({
          '@type': 'Offer',
          itemOffered: {'@type': 'Product', name: w.name, description: w.detail, image: img(w.slug, 960), category: c.name},
        })),
      })),
      {
        '@type': 'OfferCatalog',
        name: '13A straight bundles with 4x4 closure',
        itemListElement: bundlePrices.map((b) => ({
          '@type': 'Offer',
          price: b.price,
          priceCurrency: 'ZAR',
          itemOffered: {'@type': 'Product', name: `3 bundles + 4x4 closure, straight 13A, ${b.length}`},
        })),
      },
    ],
  };
}

function faqPage(list: Faq[], pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: list.map((f) => ({'@type': 'Question', name: f.q, acceptedAnswer: {'@type': 'Answer', text: f.a}})),
  };
}

function breadcrumb(id: PageId) {
  const items = id === 'home' ? [pages.home] : [pages.home, pages[id]];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(pages[id].path)}#breadcrumb`,
    itemListElement: items.map((p, i) => ({'@type': 'ListItem', position: i + 1, name: p.crumb, item: abs(p.path)})),
  };
}

export function jsonLd(id: PageId) {
  const p = pages[id];
  const url = abs(p.path);
  const graph: object[] = [
    salon(),
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: abs('/'),
      name: site.name,
      inLanguage: 'en-ZA',
      publisher: {'@id': salonId},
    },
    {
      '@type': id === 'contact' ? 'ContactPage' : id === 'reviews' ? 'CollectionPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: p.title,
      description: p.description,
      isPartOf: {'@id': `${site.url}/#website`},
      about: {'@id': salonId},
      primaryImageOfPage: {'@type': 'ImageObject', url: img(p.image)},
      breadcrumb: {'@id': `${url}#breadcrumb`},
      inLanguage: 'en-ZA',
    },
    breadcrumb(id),
  ];
  if (id === 'services') graph.push(offerCatalog());
  if (id === 'wigs') graph.push(wigCatalog());
  if (id === 'academy') {
    graph.push({
      '@type': 'Course',
      name: wigClass.name,
      description: wigClass.intro,
      provider: {'@id': salonId},
      offers: {'@type': 'Offer', price: wigClass.price, priceCurrency: 'ZAR', category: 'Paid'},
      hasCourseInstance: {'@type': 'CourseInstance', courseMode: 'Onsite', courseWorkload: 'PT6H', location: {'@id': salonId}},
    });
    graph.push({
      '@type': 'Service',
      name: 'Eye Candy wig reseller program',
      description: reseller.intro,
      provider: {'@id': salonId},
      serviceType: 'Hair business reseller program',
    });
  }
  if (id !== 'notfound' && id !== 'reviews' && faqs[id as keyof typeof faqs]) {
    graph.push(faqPage(faqs[id as keyof typeof faqs], url));
  }
  return {'@context': 'https://schema.org', '@graph': graph};
}

/** Everything that goes inside <head> for a page. */
export function headHtml(id: PageId): string {
  const p = pages[id];
  const url = abs(p.path);
  const ogImage = abs('/og-image.jpg');
  const tags = [
    '<meta charset="UTF-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />',
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.description)}" />`,
    id === 'notfound' || isDemo ? '<meta name="robots" content="noindex, follow" />' : '<meta name="robots" content="index, follow, max-image-preview:large" />',
    id === 'notfound' ? '' : `<link rel="canonical" href="${url}" />`,
    '<meta name="theme-color" content="#15100a" />',
    '<meta name="format-detection" content="telephone=yes" />',
    `<meta name="geo.region" content="ZA-WC" />`,
    `<meta name="geo.placename" content="${site.address.suburb}, ${site.address.city}" />`,
    // Social share cards
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${site.name}" />`,
    '<meta property="og:locale" content="en_ZA" />',
    `<meta property="og:title" content="${esc(p.title)}" />`,
    `<meta property="og:description" content="${esc(p.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${site.name} logo — ${site.tagline}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(p.title)}" />`,
    `<meta name="twitter:description" content="${esc(p.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    // Icons & app
    `<link rel="icon" href="${withBase('/favicon.svg')}" type="image/svg+xml" />`,
    `<link rel="icon" href="${withBase('/icon-192.png')}" type="image/png" sizes="192x192" />`,
    `<link rel="apple-touch-icon" href="${withBase('/apple-touch-icon.png')}" />`,
    `<link rel="manifest" href="${withBase('/site.webmanifest')}" />`,
    // Fonts
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    `<link href="${FONTS}" rel="stylesheet" />`,
    // Hero image first — it is the largest thing on every page.
    `<link rel="preload" as="image" type="image/webp" imagesrcset="${withBase(`/media/${p.image}-480.webp`)} 480w, ${withBase(`/media/${p.image}-960.webp`)} 960w, ${withBase(`/media/${p.image}-1600.webp`)} 1600w" imagesizes="(min-width: 768px) 62vw, 100vw" fetchpriority="high" />`,
    // Lets CSS hide scroll-reveal content only when JavaScript will reveal it.
    '<script>document.documentElement.classList.add("js")</script>',
    `<script type="application/ld+json">${JSON.stringify(jsonLd(id)).replace(/</g, '\\u003c')}</script>`,
  ];
  return tags.filter(Boolean).join('\n    ');
}

export function sitemapXml(): string {
  const today = new Date().toISOString().slice(0, 10);
  const prio: Partial<Record<PageId, string>> = {home: '1.0', services: '0.9', wigs: '0.9', contact: '0.8'};
  const urls = menuPages
    .map((id) => {
      const p = pages[id];
      return `  <url>\n    <loc>${abs(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${prio[id] ?? '0.7'}</priority>\n    <image:image><image:loc>${img(p.image)}</image:loc></image:image>\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
}

export function robotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`;
}

export function webManifest(): string {
  return JSON.stringify(
    {
      name: site.name,
      short_name: 'Mimie X Eyecandy',
      description: pages.home.description,
      start_url: withBase('/'),
      display: 'standalone',
      background_color: '#15100a',
      theme_color: '#15100a',
      icons: [
        {src: withBase('/icon-192.png'), sizes: '192x192', type: 'image/png'},
        {src: withBase('/icon-512.png'), sizes: '512x512', type: 'image/png'},
      ],
    },
    null,
    2,
  );
}

/** Which page a given HTML file belongs to. */
export function pageForHtml(file: string): PageId {
  const f = file.replace(/\\/g, '/').replace(/^\//, '');
  const hit = (Object.values(pages) as {id: PageId; file: string}[]).find((p) => f.endsWith(p.file) && (p.file !== 'index.html' || f === 'index.html'));
  return hit?.id ?? 'home';
}
