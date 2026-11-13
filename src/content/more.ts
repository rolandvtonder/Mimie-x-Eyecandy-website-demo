/**
 * Academy, reseller program, reviews, FAQs, gallery and home-page copy.
 */

/* ---------------------------------------------------------------- academy */

export const wigClass = {
  name: 'Wig Revamp & Installation Class',
  price: 800,
  time: '10:00 – 16:00',
  duration: 'One full day (6 hours)',
  includes: ['All tools for the day', 'Light refreshments'],
  intro:
    'A hands-on, one-day class for beginners and side-hustlers who want to install and revamp wigs like a pro — for themselves, for family, or as a paying service.',
  modules: [
    {t: 'Prepping the natural hair', d: 'Washing, braiding a flat wig line and protecting edges so the unit lies flat and the hair underneath stays healthy.'},
    {t: 'Knowing your lace', d: 'The difference between closures, frontals, 360 and glueless units — and which one suits which client.'},
    {t: 'Customising the unit', d: 'Measuring and adjusting the cap, cutting the lace along the hairline and blending it to the skin.'},
    {t: 'Installing for a natural finish', d: 'Glued and glueless methods, melting the lace, laying edges and styling the parting.'},
    {t: 'Revamping a tired wig', d: 'Washing, deep conditioning, detangling and restyling a unit until it looks brand new.'},
    {t: 'Aftercare & business basics', d: 'What to tell your clients about care, how long installs last, and how to price your work.'},
  ],
  note:
    'Classes run in small groups so everyone gets one-on-one time. New dates are announced on Instagram and WhatsApp — message us to reserve your seat for the next class.',
};

export const reseller = {
  headline: ['Build your own', 'hair business'] as [string, string],
  intro:
    'Earn from wigs without buying stock. Join the Eye Candy reseller program, share our catalogue with your network and earn commission on every wig you sell — we handle the rest.',
  perks: [
    {t: '15% commission', d: 'Earn 15% on every wig sold through you.'},
    {t: 'No stock needed', d: 'No upfront buying, no storage, no risk.'},
    {t: 'We deliver', d: 'We pack and deliver straight to your customer.'},
    {t: 'Catalogues & prices', d: 'Ready-made product pictures and price lists to share.'},
  ],
  steps: [
    'Send us a WhatsApp or email to join.',
    'Receive the Eye Candy catalogue and your price list.',
    'Share it on your status, socials and with friends.',
    'We deliver the order and you earn 15% on every wig.',
  ],
};

/* ---------------------------------------------------------------- reviews */

export type Review = {name: string; quote: string; topic: string};

export const reviews: Review[] = [
  {name: 'Raissa', topic: 'Wig quality', quote: 'Thank you for the wig received, I love the quality dear and I definitely wouldn’t mind to get another one.'},
  {name: 'Dr Lethabo', topic: 'Customer service', quote: 'Thank you for the best customer service received and for a quality hair provided.'},
  {name: 'Deborah', topic: 'Delivery', quote: 'Thank you, I received the package. Thank you for the brush and hair spray, will definitely order soon for my sis in law and mum.'},
  {name: 'Jay', topic: 'Hair', quote: 'Thank you so much for my hair, you will definitely be getting more orders from me soon.'},
  {name: 'Dineo', topic: 'Wig quality', quote: 'I love your hair quality and the free goodies received with it ♥.'},
  {name: 'Keneilwe', topic: 'Happy client', quote: 'Issa happy client, I love it.'},
  {name: 'Wendy', topic: 'Wig', quote: 'The wig is just ♥, thank you so much.'},
  {name: 'Germaine', topic: 'Delivery', quote: 'I received the package. Thank you for the hair and spray.'},
  {name: 'Ablonia', topic: 'Hair', quote: 'I got the hair, thank you. Looks nice.'},
];

/* ---------------------------------------------------------------- gallery */

export type GalleryItem = {slug: string; alt: string; tag: 'Braids' | 'Wigs' | 'Nails' | 'Clients'};

export const gallery: GalleryItem[] = [
  {slug: 'cornrow-straight-back-braids', tag: 'Braids', alt: 'Straight-back cornrows with neat parts and laid edges'},
  {slug: 'honey-goddess-braids-kraaifontein', tag: 'Braids', alt: 'Long honey and copper goddess braids with curly ends, done in Kraaifontein'},
  {slug: 'knotless-box-braids-salon', tag: 'Braids', alt: 'Long black knotless box braids in the salon'},
  {slug: 'lilac-gel-nails', tag: 'Nails', alt: 'Glossy lilac gel nails'},
  {slug: 'wig-installation-client-salon', tag: 'Clients', alt: 'Client after a middle-part straight wig install in the salon'},
  {slug: 'honey-finger-wave-pixie-wig', tag: 'Clients', alt: 'Client wearing a honey finger-wave pixie wig'},
  {slug: 'bob-wig-bangs-happy-client', tag: 'Clients', alt: 'Smiling client in a bob wig with a full fringe'},
  {slug: 'curly-highlight-wig-client', tag: 'Clients', alt: 'Client wearing a curly wig with brown highlights'},
  {slug: 'sleek-ponytail-client', tag: 'Clients', alt: 'Client with a sleek, slicked-back ponytail'},
  {slug: 'curly-wig-client-selfie', tag: 'Clients', alt: 'Client mirror selfie in a curly highlight wig and French tip nails'},
  {slug: 'long-curly-wig-client', tag: 'Clients', alt: 'Client in a long water wave wig'},
  {slug: 'kinky-curly-long-human-hair-wig', tag: 'Wigs', alt: 'Long kinky curly human hair wig'},
  {slug: 'sleek-bob-wig-portrait', tag: 'Wigs', alt: 'Sleek black middle-part bob wig'},
  {slug: 'burgundy-99j-bob-wig', tag: 'Wigs', alt: 'Burgundy 99J bob wig from four angles'},
  {slug: 'honey-blonde-highlight-bob-wig', tag: 'Wigs', alt: 'Honey blonde highlight bob wig'},
  {slug: 'curly-bob-wig-with-bangs', tag: 'Wigs', alt: 'Curly bob wig with bangs, three views'},
  {slug: 'short-curly-pixie-wig-angles', tag: 'Wigs', alt: 'Short curly pixie wig from three angles'},
  {slug: 'black-pixie-cut-wig', tag: 'Wigs', alt: 'Black pixie cut wig'},
  {slug: 'long-straight-wig-glam-lashes', tag: 'Wigs', alt: 'Long straight wig with glam make-up and lashes'},
  {slug: 'long-deep-wave-lace-wig', tag: 'Wigs', alt: 'Long deep wave lace wigs on mannequins'},
  {slug: 'long-straight-lace-frontal-wig', tag: 'Wigs', alt: 'Bone-straight lace frontal wig'},
  {slug: '360-lace-straight-wig', tag: 'Wigs', alt: '360 lace wig in a ponytail and bun'},
  {slug: 'blonde-613-straight-lace-wig', tag: 'Wigs', alt: '613 blonde straight lace wig'},
  {slug: 'long-straight-human-hair-bundles', tag: 'Wigs', alt: 'Long straight human hair bundles with closures'},
];

/* ---------------------------------------------------------------- FAQs */

export type Faq = {q: string; a: string};

export const faqs: Record<'home' | 'services' | 'wigs' | 'academy' | 'contact', Faq[]> = {
  home: [
    {q: 'Where is Mimie X Eyecandy?', a: 'Our salon is at 65 Brighton Road, Kraaifontein, Cape Town, 7570 — easy to reach from Brackenfell, Durbanville, Kuils River and the rest of the Northern Suburbs.'},
    {q: 'What services do you offer?', a: 'Braids (straight-back cornrows, knotless, box and goddess braids), gel nails, cluster lashes, hair washes, wig lines, wig installation and wig revamps. We also sell Eye Candy human hair wigs and bundles.'},
    {q: 'How do I book?', a: 'Send us a WhatsApp on 073 950 1982 with the service you want and a picture of your inspiration. We will confirm the price and give you the next available slot.'},
    {q: 'Do braid prices include hair?', a: 'Yes. Our straight-back cornrows and knotless or box braids include braiding fibre, and straight-back styles include a free wash.'},
  ],
  services: [
    {q: 'Are your prices fixed?', a: 'Our prices are "from" prices. The final price depends on the length and size of your braids or the type of nails and lashes you choose. Send us a photo on WhatsApp and we will confirm your exact price.'},
    {q: 'Does the price include braiding hair?', a: 'Straight-back cornrows and knotless or box braids include fibre. For goddess or boho braids with curly human-hair ends we quote separately depending on the hair used.'},
    {q: 'Is a hair wash included?', a: 'A wash is included with our straight-back cornrow styles. For other services you can add a wash, or book a wash plus wig line from R150.'},
    {q: 'Can I bring my own wig to be installed or revamped?', a: 'Absolutely. Bring your own unit for a basic install from R200, or a revamp and install from R380. You can also buy a wig from the Eye Candy wig shop.'},
    {q: 'Can I combine services in one visit?', a: 'Yes — try our combos, such as box braids with gel hands and toes from R600, or a wig install with gel hands from R300. Let us know when you book so we reserve enough time.'},
  ],
  wigs: [
    {q: 'What hair are Eye Candy wigs and bundles made of?', a: 'Our straight bundles with 4x4 closures are 13A grade human hair. Ask us on WhatsApp for the hair type, grade, density and length of any wig before you buy.'},
    {q: 'How do I order a wig?', a: 'Choose a style, then send us a WhatsApp on 073 950 1982 with the name of the wig and the length you want. We will confirm stock, price and delivery.'},
    {q: 'Do you deliver?', a: 'Yes. You can collect in Kraaifontein or we can arrange delivery to you — many of our clients receive their hair by courier. Ask on WhatsApp for delivery options and costs.'},
    {q: 'Can you install the wig I buy?', a: 'Yes. Buy your wig and book a wig line and install at the salon, from R200, so it looks natural from day one.'},
    {q: 'Which lace should I choose?', a: 'A 4x4 closure is the easiest and most beginner-friendly. A 13x4 frontal lets you part anywhere at the front. A 360 lace unit lets you wear high ponytails and buns.'},
  ],
  academy: [
    {q: 'Do I need experience for the wig class?', a: 'No. The class is designed for beginners as well as people who already do installs and want to improve their finish.'},
    {q: 'What does the class cost and what is included?', a: 'The one-day class is R800 and runs from 10:00 to 16:00. Tools and light refreshments are included.'},
    {q: 'How do I join the reseller program?', a: 'Send us a WhatsApp on 073 950 1982 or an email to ecboutiquestore@outlook.com. We will send you the catalogue and price list so you can start selling.'},
    {q: 'Do I have to buy stock to resell?', a: 'No. You sell from our catalogue, we deliver to your customer, and you earn 15% commission on every wig sold.'},
  ],
  contact: [
    {q: 'What are your opening hours?', a: 'We work by appointment. Send us a WhatsApp on 073 950 1982 to check today’s availability and book your slot.'},
    {q: 'Can I buy wigs at the salon?', a: 'Yes. Mimie X Eyecandy is also home to the Eye Candy wig shop, so you can see units in person, buy and have your wig installed in one visit.'},
    {q: 'I am not in Cape Town — can I still order?', a: 'Yes. Order on WhatsApp and we will arrange delivery of your wig or bundles to you. Ask us for courier options and costs.'},
  ],
};

/* ---------------------------------------------------------------- home */

export const home = {
  eyebrow: 'Braids · Nails · Lashes · Hair wash · Wigs — Kraaifontein, Cape Town',
  /** `i` lines are set in italic gold. */
  lines: [
    {t: 'Reveal your'},
    {t: 'Inner beauty.', i: true},
    {t: 'Crowned in'},
    {t: 'Kraaifontein', i: true},
  ],
  body:
    'Mimie X Eyecandy is a beauty salon and wig boutique on Brighton Road, Kraaifontein. From neat straight-back cornrows and knotless braids to gel nails, cluster lashes and flawless wig installs — walk in as you are, leave as your most confident self.',
  about: [
    'Mimie X Eyecandy brings two loves under one roof: the Eye Candy Beautyshop wig boutique that so many clients already know from Instagram, and a full-service salon chair for braids, nails, lashes and hair care.',
    'We opened our doors at 65 Brighton Road, Kraaifontein on 1 August 2026 with one promise — great prices, great service and a great experience. Every client is welcomed like family, every style is finished with care, and every wig we sell is one we would wear ourselves.',
    'Whether you are getting ready for a wedding, a matric dance, a job interview or simply a Tuesday, we will help you reveal your inner beauty.',
  ],
  promises: [
    {t: 'Great prices', d: 'Honest "from" prices and combo specials.'},
    {t: 'Great service', d: 'Neat work, gentle hands, on time.'},
    {t: 'Great experience', d: 'Relax, chat and leave feeling new.'},
  ],
};
