/**
 * The site map: every page, its URL, its menu label and its search metadata.
 * Titles stay under ~60 characters and descriptions under ~155 so Google
 * shows them in full.
 */

export type PageId = 'home' | 'services' | 'wigs' | 'academy' | 'reviews' | 'contact' | 'notfound';

export type PageMeta = {
  id: PageId;
  path: string;
  /** Output HTML file, relative to the project root. */
  file: string;
  menu?: string;
  title: string;
  description: string;
  /** Short name used in breadcrumbs. */
  crumb: string;
  image: string;
  imageAlt: string;
};

export const pages: Record<PageId, PageMeta> = {
  home: {
    id: 'home',
    path: '/',
    file: 'index.html',
    menu: 'Home',
    crumb: 'Home',
    title: 'Mimie X Eyecandy | Braids, Nails, Lashes & Wigs in Kraaifontein',
    description:
      'Beauty salon at 65 Brighton Road, Kraaifontein, Cape Town: knotless & box braids, straight-back cornrows, gel nails, cluster lashes, hair wash, wig installs and human hair wigs. Book on WhatsApp.',
    image: 'sleek-bob-wig-portrait',
    imageAlt: 'Client with a sleek black bob wig and soft glam make-up on a dark background',
  },
  services: {
    id: 'services',
    path: '/services/',
    file: 'services/index.html',
    menu: 'Services & prices',
    crumb: 'Services & prices',
    title: 'Salon Prices Kraaifontein | Braids, Gel Nails, Lashes, Wig Installs',
    description:
      'Price list for Mimie X Eyecandy, Kraaifontein: straight-back cornrows from R285, knotless & box braids from R450, gel hands from R120, cluster lashes from R150, wig installs from R200.',
    image: 'cornrow-straight-back-braids',
    imageAlt: 'Neat straight-back cornrow braids with laid edges, side view',
  },
  wigs: {
    id: 'wigs',
    path: '/wigs/',
    file: 'wigs/index.html',
    menu: 'Wig shop',
    crumb: 'Wig shop',
    title: 'Human Hair Wigs & Bundles Cape Town | Eye Candy Wig Shop',
    description:
      'Shop Eye Candy human hair wigs in Cape Town: bob wigs, pixie cuts, kinky curly, deep wave, 13x4 frontal and 360 lace wigs, plus 13A straight bundles with 4x4 closure from R800. Order on WhatsApp.',
    image: 'kinky-curly-long-human-hair-wig',
    imageAlt: 'Woman wearing a long kinky curly human hair wig outdoors in the sun',
  },
  academy: {
    id: 'academy',
    path: '/academy/',
    file: 'academy/index.html',
    menu: 'Classes & reseller',
    crumb: 'Classes & reseller',
    title: 'Wig Installation Class Cape Town & Hair Reseller Program',
    description:
      'Learn wig revamping and installation in a one-day hands-on class in Cape Town (R800, tools included), or start your own hair business with Eye Candy: 15% commission, no stock needed, we deliver.',
    image: 'wig-installation-client-salon',
    imageAlt: 'Client in the Mimie X Eyecandy salon after a sleek straight wig installation',
  },
  reviews: {
    id: 'reviews',
    path: '/reviews/',
    file: 'reviews/index.html',
    menu: 'Reviews & gallery',
    crumb: 'Reviews & gallery',
    title: 'Client Reviews & Hair Gallery | Mimie X Eyecandy Kraaifontein',
    description:
      'Read what clients say about Eye Candy wigs and Mimie X Eyecandy salon services, and browse our gallery of braids, cornrows, gel nails, bob wigs, pixie cuts and curly installs.',
    image: 'bob-wig-bangs-happy-client',
    imageAlt: 'Smiling client wearing a glossy bob wig with a full fringe',
  },
  contact: {
    id: 'contact',
    path: '/contact/',
    file: 'contact/index.html',
    menu: 'Contact & booking',
    crumb: 'Contact & booking',
    title: 'Book an Appointment | 65 Brighton Road, Kraaifontein | Mimie X Eyecandy',
    description:
      'Book braids, nails, lashes or a wig install at Mimie X Eyecandy, 65 Brighton Road, Kraaifontein 7570. WhatsApp 073 950 1982, call 065 101 7695 or email ecboutiquestore@outlook.com.',
    image: 'honey-finger-wave-pixie-wig',
    imageAlt: 'Client with a honey-blonde finger-wave pixie wig against a blue marble wall',
  },
  notfound: {
    id: 'notfound',
    path: '/404.html',
    file: '404.html',
    crumb: 'Page not found',
    title: 'Page not found | Mimie X Eyecandy',
    description: 'This page has moved. Explore braids, nails, lashes and wigs at Mimie X Eyecandy, Kraaifontein.',
    image: 'sleek-bob-wig-portrait',
    imageAlt: 'Client with a sleek black bob wig',
  },
};

/** Menu order. */
export const menuPages: PageId[] = ['home', 'services', 'wigs', 'academy', 'reviews', 'contact'];
