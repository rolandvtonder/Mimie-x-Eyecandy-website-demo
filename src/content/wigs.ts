/**
 * Eye Candy wig shop. Prices shown are the most recent ones Eye Candy posted;
 * styles without a price are "ask for price" because stock and lengths change.
 */

export type Wig = {
  slug: string;
  name: string;
  detail: string;
  alt: string;
  price?: string;
};

export type WigCollection = {
  id: string;
  title: [string, string];
  name: string;
  intro: string;
  wigs: Wig[];
};

export const wigCollections: WigCollection[] = [
  {
    id: 'bob-wigs',
    title: ['Bob', 'Wigs'],
    name: 'Bob wigs',
    intro:
      'Our best sellers. Sharp, swingy bobs that are easy to wear every day — in natural black, burgundy #99J and honey-blonde highlights.',
    wigs: [
      {slug: 'straight-bob-lace-wig', name: 'Straight lace bob', detail: 'Middle part · natural black', alt: 'Straight black lace bob wig with a middle part', price: 'from R1100'},
      {slug: 'burgundy-99j-bob-wig', name: 'Burgundy #99J bob', detail: 'Lace front · rich wine colour', alt: 'Burgundy 99J straight bob wig shown from four angles'},
      {slug: 'honey-blonde-highlight-bob-wig', name: 'Honey highlight bob', detail: 'Piano-colour highlights', alt: 'Honey blonde highlighted bob wig on a model and on a stand'},
      {slug: 'straight-bob-closure-wig', name: 'Closure bob', detail: '4x4 closure · beginner friendly', alt: 'Straight black closure bob wig on a mannequin head'},
      {slug: 'kinky-curly-frontal-and-bang-bob-wigs', name: 'Bob with bangs, 14"', detail: 'Glueless · straight', alt: 'Kinky curly 13x4 frontal wig and a straight bob wig with bangs, both 14 inch'},
    ],
  },
  {
    id: 'pixie-short-wigs',
    title: ['Pixie &', 'Short cuts'],
    name: 'Pixie & short wigs',
    intro:
      'Short, chic and low-maintenance. Finger waves, curly pixies and soft cropped cuts that need nothing more than a shake in the morning.',
    wigs: [
      {slug: 'honey-finger-wave-pixie-wig', name: 'Honey finger-wave pixie', detail: 'Lace front · sculpted waves', alt: 'Honey-blonde finger-wave pixie wig worn by a client'},
      {slug: 'short-curly-pixie-wig-angles', name: 'Curly pixie', detail: 'Tight curls · wash & go', alt: 'Short curly pixie wig shown from the front and both sides'},
      {slug: 'black-pixie-cut-wig', name: 'Classic pixie cut', detail: 'Natural black · swept fringe', alt: 'Black pixie cut wig with a soft side-swept fringe'},
      {slug: 'curly-bob-wig-with-bangs', name: 'Curly bob with bangs', detail: 'Bouncy curls · full fringe', alt: 'Curly black bob wig with bangs, front, side and back views'},
    ],
  },
  {
    id: 'curly-wavy-wigs',
    title: ['Curly &', 'Wavy'],
    name: 'Curly & wavy wigs',
    intro:
      'Volume for days. Kinky curly, deep wave and water wave units with soft, defined curls that you can wear out, half-up or in a high puff.',
    wigs: [
      {slug: 'kinky-curly-long-human-hair-wig', name: 'Kinky curly, long', detail: 'Full volume · natural texture', alt: 'Long voluminous kinky curly human hair wig'},
      {slug: 'long-deep-wave-lace-wig', name: 'Deep wave lace wig', detail: 'Lace front · long length', alt: 'Two mannequins wearing long deep wave lace front wigs'},
      {slug: 'curly-highlight-wig-client', name: 'Curly highlight', detail: 'Brown ombré curls', alt: 'Client wearing a shoulder-length curly wig with brown highlights'},
      {slug: 'long-curly-wig-client', name: 'Long water wave', detail: 'Soft defined curls', alt: 'Client wearing a long water wave curly wig'},
    ],
  },
  {
    id: 'long-straight-wigs',
    title: ['Long', 'Straight'],
    name: 'Long straight wigs',
    intro:
      'Silky, sleek and long. Frontals and 360 lace units you can part anywhere, pull into a high ponytail or wear bone-straight.',
    wigs: [
      {slug: 'long-straight-lace-frontal-wig', name: 'Straight 13x4 frontal', detail: 'Bone straight · free part', alt: 'Long bone-straight lace frontal wig worn down and in a half-up style'},
      {slug: '360-lace-straight-wig', name: '360 lace wig', detail: 'High ponytail & bun ready', alt: '360 lace straight wig shown in a ponytail and a bun'},
      {slug: 'kinky-straight-long-lace-wig', name: 'Kinky straight', detail: 'Blow-out texture', alt: 'Long kinky straight lace wig on a mannequin'},
      {slug: 'blonde-613-straight-lace-wig', name: '613 blonde', detail: 'Ready to tone or wear', alt: 'Platinum 613 blonde straight lace wig'},
      {slug: 'brown-straight-lace-front-wig', name: 'Brown lace front', detail: 'Shoulder length · soft brown', alt: 'Brown shoulder-length straight lace front wig on a mannequin'},
    ],
  },
];

export type BundlePrice = {length: string; price: number};

/** 3 bundles + 4x4 closure, 13A straight. */
export const bundlePrices: BundlePrice[] = [
  {length: '8"', price: 800},
  {length: '10"', price: 900},
  {length: '12"', price: 1000},
  {length: '14"', price: 1150},
  {length: '16"', price: 1280},
  {length: '18"', price: 1390},
];

export const laceGuide = [
  {
    name: '4x4 closure',
    text: 'A 4-by-4-inch lace piece at the parting. Easy to install, very natural at the part, and the most beginner-friendly option.',
  },
  {
    name: '13x4 frontal',
    text: 'Lace from ear to ear across the hairline. Lets you part your hair anywhere at the front and wear it swept back.',
  },
  {
    name: '360 lace',
    text: 'Lace all the way around the perimeter, so you can wear high ponytails and buns with a natural hairline on every side.',
  },
  {
    name: 'Glueless',
    text: 'Units with combs and an adjustable band that sit securely without adhesive — perfect if you take your wig off at night.',
  },
];

export const wigCare = [
  'Wash every 10–15 wears with a sulphate-free shampoo and always condition — human hair has no scalp to feed it.',
  'Detangle gently from the ends up with a wide-tooth comb before washing, never when the hair is soaking wet and knotted.',
  'Use a heat protectant before flat-ironing or curling, and keep tools below about 180°C to protect the cuticle.',
  'Let curly units air-dry and refresh curls with water and a leave-in rather than brushing them out.',
  'Store your wig on a stand or in a satin bag, and sleep with a satin bonnet if you wear it overnight.',
  'When it starts to feel dry or dull, book a wig revamp — we will wash, treat and restyle it for you.',
];
