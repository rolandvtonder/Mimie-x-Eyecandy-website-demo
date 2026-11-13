/**
 * Salon menu. Prices are "from" prices taken from the August 2026 grand-opening
 * flyer and the March salon special. Update them here and the Services page,
 * the home page panels and Google's price data all follow.
 */

export type PriceItem = {
  name: string;
  /** Price in rand, or a word such as "Included" / "Quote". */
  price: number | string;
  /** Show "from" before the price. */
  from?: boolean;
  note?: string;
};

export type ServiceCategory = {
  id: string;
  /** Two-line display title; the second line is italic. */
  title: [string, string];
  /** Plain name for lists, booking messages and structured data. */
  name: string;
  image: string;
  alt: string;
  intro: string;
  body: string[];
  items: PriceItem[];
};

export const priceNote =
  'All prices are in South African rand and are "from" prices — the final price depends on length, size and the hair you choose. Send us a WhatsApp with a picture of the style you want and we will confirm your exact price before you come in.';

export const services: ServiceCategory[] = [
  {
    id: 'braids',
    title: ['Braids &', 'Cornrows'],
    name: 'Braids & cornrows',
    image: 'cornrow-straight-back-braids',
    alt: 'Straight-back cornrows with neat, even parts and soft laid edges',
    intro:
      'Straight-back cornrows, knotless braids, box braids and goddess braids — neat parts, gentle tension and edges laid the way you like them.',
    body: [
      'Braids are the heart of the Mimie X Eyecandy salon in Kraaifontein. Every style starts with clean, detangled hair and clean sectioning, because neat parts are what make braids look expensive and last for weeks. We braid with light, even tension so your scalp stays comfortable and your edges stay healthy.',
      'Our straight-back cornrows come in medium and long lengths and include braiding fibre plus a free wash. Knotless and box braids are priced from R450 including fibre, and we also do goddess and boho braids with curly ends in your choice of colour — from classic 1B black to honey blonde and copper.',
      'Not sure what size or length to choose? Send us a photo of your inspiration on WhatsApp and we will tell you how long it takes and what it costs.',
    ],
    items: [
      {name: 'Straight-back cornrows (medium)', price: 285, from: true, note: 'Includes fibre + free wash'},
      {name: 'Straight-back cornrows (long)', price: 320, from: true, note: 'Includes fibre + free wash'},
      {name: 'Knotless or box braids', price: 450, from: true, note: 'Includes fibre'},
      {name: 'Goddess / boho braids', price: 'Quote', note: 'Curly ends, any colour'},
      {name: 'Freestyle & patterned cornrows', price: 'Quote', note: 'Send us your inspiration photo'},
    ],
  },
  {
    id: 'wig-installs',
    title: ['Wig installs', '& Revamps'],
    name: 'Wig installation & revamp',
    image: 'wig-installation-client-salon',
    alt: 'Client in the salon with a freshly installed, middle-part straight wig',
    intro:
      'Wig lines, natural-looking lace installs and full revamps that bring a tired unit back to life.',
    body: [
      'A great wig is only as good as its install. We prep your natural hair with a flat wig line, customise the lace to your hairline and blend it so the wig looks like it grows from your scalp. Bring your own unit or choose one from the Eye Candy wig shop.',
      'Our wig revamp service washes, deep conditions and restyles a wig that has lost its shine — straightened, curled or refreshed — so it looks new again. Combine a revamp with an install and walk out ready.',
    ],
    items: [
      {name: 'Wig lines', price: 120, from: true, note: 'Flat cornrow base for your unit'},
      {name: 'Basic wig installation', price: 200, from: true},
      {name: 'Wash + wig line', price: 150, from: true},
      {name: 'Wig revamp + install', price: 380, from: true, note: 'Wash, condition, restyle and install'},
    ],
  },
  {
    id: 'nails',
    title: ['Gel', 'Nails'],
    name: 'Gel nails',
    image: 'lilac-gel-nails',
    alt: 'Glossy lilac gel polish on short square nails',
    intro: 'Gel hands, gel toes, gel tips, French tips and nail art that stays glossy for weeks.',
    body: [
      'Our nail menu keeps things simple and beautiful: long-lasting gel colour on natural nails, gel tips for extra length, crisp French tips and design nails for when you want something special. Every set starts with cuticle care and shaping so the colour sits perfectly.',
      'Add gel toes to your hands for a full set at a better price, or pair your nails with braids or a wig install on the same visit.',
    ],
    items: [
      {name: 'Gel hands', price: 120, from: true},
      {name: 'Gel toes', price: 120, from: true},
      {name: 'Gel hands & toes', price: 200, from: true},
      {name: 'Plain gel tips', price: 150, from: true},
      {name: 'French tips', price: 180, from: true},
      {name: 'Design nails', price: 250, from: true, note: 'Nail art, chrome, ombré & more'},
    ],
  },
  {
    id: 'lashes',
    title: ['Cluster', 'Lashes'],
    name: 'Cluster lashes',
    image: 'long-straight-wig-glam-lashes',
    alt: 'Client with full fluttery lashes, glam make-up and a long straight wig',
    intro: 'Full, fluttery cluster lashes — from soft and natural to dramatic glam.',
    body: [
      'Cluster lashes are the quickest way to wake up your whole face. We apply lightweight clusters along your natural lash line and shape them to suit your eyes, whether you want a soft everyday look or full drama for an event, a shoot or a night out.',
      'Ask us about lash length and fullness when you book and we will match the look to your face shape.',
    ],
    items: [
      {name: 'Cluster lashes', price: 150, from: true, note: 'Natural to full glam'},
    ],
  },
  {
    id: 'hair-wash',
    title: ['Hair wash', '& Care'],
    name: 'Hair wash & care',
    image: 'sleek-ponytail-client',
    alt: 'Client with a sleek, glossy slicked-back ponytail and laid edges',
    intro: 'A proper wash, condition and prep — the step that makes every style last longer.',
    body: [
      'Healthy hair under your braids or wig means longer-lasting styles and less breakage. Our hair wash cleanses your scalp, conditions your hair and leaves it detangled and ready for braiding or a wig line.',
      'A wash is included free with our straight-back cornrow styles, and you can add one to any other service.',
    ],
    items: [
      {name: 'Wash with straight-back cornrows', price: 'Included'},
      {name: 'Wash + wig line', price: 150, from: true},
      {name: 'Hair wash add-on', price: 'Ask us', note: 'Add to any service'},
    ],
  },
  {
    id: 'combos',
    title: ['Combo', 'Specials'],
    name: 'Combo specials',
    image: 'knotless-box-braids-salon',
    alt: 'Long knotless box braids done in the Mimie X Eyecandy salon',
    intro: 'Do more in one visit and pay less — our most-loved pairings.',
    body: [
      'Combos are perfect when you want to leave fully done: braids with matching hands and toes, or a fresh wig install with gel nails. Book them together on WhatsApp and we set aside enough time for both.',
    ],
    items: [
      {name: 'Box braids + gel hands + gel toes', price: 600, from: true},
      {name: 'Wig install + gel hands', price: 300, from: true},
    ],
  },
];

export const formatPrice = (p: PriceItem) =>
  typeof p.price === 'number' ? `${p.from ? 'from ' : ''}R${p.price}` : p.price;

/** Lowest numeric "from" price in a category. */
export const lowestPrice = (c: ServiceCategory) => {
  const n = c.items.map((i) => i.price).filter((x): x is number => typeof x === 'number');
  return n.length ? Math.min(...n) : null;
};
