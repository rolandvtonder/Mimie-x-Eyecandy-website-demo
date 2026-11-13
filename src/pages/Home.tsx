import {BookBand, Faqs, Heading, ReviewCard, Section, TextLink} from '../components/Blocks';
import {Hero} from '../components/Hero';
import {Check, Clock, Pin, WhatsApp} from '../components/Icons';
import {Img} from '../components/Img';
import {Rituals, type Ritual} from '../components/Rituals';
import {faqs, home, reviews, wigClass} from '../content/more';
import {services, lowestPrice} from '../content/services';
import {bookText, hoursLines, site, wa, withBase} from '../site';
import {useReveals} from '../hooks/useReveals';

const from = (id: string) => {
  const c = services.find((s) => s.id === id)!;
  return `R${lowestPrice(c)}`;
};

const rituals: Ritual[] = [
  {
    id: 'braids',
    name: ['Braids &', 'Cornrows'],
    href: withBase('/services/#braids'),
    image: 'cornrow-straight-back-braids',
    alt: 'Straight-back cornrow braids, side view',
    specs: [
      ['From', from('braids')],
      ['Includes', 'Fibre + free wash'],
    ],
  },
  {
    id: 'wigs',
    name: ['Wigs &', 'Installs'],
    href: withBase('/wigs/'),
    image: 'kinky-curly-long-human-hair-wig',
    alt: 'Long kinky curly human hair wig',
    specs: [
      ['Installs from', 'R200'],
      ['Bundles from', 'R800'],
    ],
  },
  {
    id: 'nails',
    name: ['Gel', 'Nails'],
    href: withBase('/services/#nails'),
    image: 'lilac-gel-nails',
    alt: 'Glossy lilac gel nails',
    specs: [
      ['Gel hands from', from('nails')],
      ['Hands & toes', 'R200'],
    ],
  },
  {
    id: 'lashes',
    name: ['Cluster', 'Lashes'],
    href: withBase('/services/#lashes'),
    image: 'long-straight-wig-glam-lashes',
    alt: 'Glam make-up with full cluster lashes',
    specs: [
      ['From', from('lashes')],
      ['Look', 'Natural to full glam'],
    ],
  },
];

export function Home() {
  const ref = useReveals<HTMLDivElement>();
  const hours = hoursLines();

  return (
    <div ref={ref}>
      <Hero
        page="home"
        tall
        eyebrow={home.eyebrow}
        lines={home.lines}
        body={home.body}
        ctas={[
          {label: 'Book on WhatsApp', href: wa(bookText()), external: true},
          {label: 'Services & prices', href: withBase('/services/'), kind: 'line'},
        ]}
      />

      <Rituals items={rituals} />

      {/* About */}
      <Section tone="light" labelledBy="about-title">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-24">
          <div>
            <Heading
              kicker="About Mimie X Eyecandy"
              id="about-title"
              lines={[{t: 'One salon.'}, {t: 'Every ritual.', i: true}]}
            />
            <div className="prose-mxe mt-10 max-w-[62ch] text-[17px] leading-[1.8] text-cocoa" data-reveal>
              {home.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {home.promises.map((p, i) => (
                <li key={p.t} className="border-t border-ink/20 pt-5" data-reveal style={{['--d' as string]: `${i * 0.08}s`}}>
                  <Check className="size-6 text-gold-deep" />
                  <h3 className="mt-3 font-display text-[26px] font-medium">{p.t}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-cocoa/80">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative" data-reveal style={{['--d' as string]: '0.15s'}}>
            <Img
              slug="wig-installation-client-salon"
              alt="A client in the Mimie X Eyecandy salon in Kraaifontein after her wig install"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-8 -left-4 w-[46%] bg-ink p-2 shadow-2xl md:-left-10">
              <Img slug="honey-goddess-braids-kraaifontein" alt="Honey goddess braids with curly ends done at the salon" sizes="20vw" className="aspect-[3/4] w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* Wig shop teaser */}
      <Section labelledBy="wigs-title">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Heading kicker="Eye Candy wig shop" id="wigs-title" lines={[{t: 'Hair that'}, {t: 'turns heads.', i: true}]} />
          <p className="max-w-[440px] text-[16px] leading-[1.75] text-pearl/80" data-reveal>
            Bobs, pixies, kinky curly, deep wave and bone-straight units, plus 13A straight bundles with 4x4 closures from R800. Buy online, collect in Kraaifontein — or have it installed while you are here.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-[3px] md:grid-cols-4">
          {[
            {s: 'sleek-bob-wig-portrait', n: 'Sleek bob', a: 'Sleek black bob wig'},
            {s: 'honey-finger-wave-pixie-wig', n: 'Finger-wave pixie', a: 'Honey finger-wave pixie wig'},
            {s: 'long-deep-wave-lace-wig', n: 'Deep wave', a: 'Long deep wave lace wigs'},
            {s: 'burgundy-99j-bob-wig', n: '#99J burgundy bob', a: 'Burgundy 99J bob wig'},
          ].map((w, i) => (
            <li key={w.s} className="group relative overflow-hidden" data-reveal style={{['--d' as string]: `${i * 0.08}s`}}>
              <a href={withBase('/wigs/')} className="block">
                <Img slug={w.s} alt={w.a} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.05]" />
                <span className="caps absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgb(21_16_10/0.85),transparent)] p-5 pt-14 text-pearl">{w.n}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <TextLink href={withBase('/wigs/')}>Shop all wigs & bundles</TextLink>
        </div>
      </Section>

      {/* Reviews teaser */}
      <Section tone="ink2" labelledBy="reviews-title">
        <Heading kicker="Kind words" id="reviews-title" lines={[{t: 'Loved by'}, {t: 'our clients.', i: true}]} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>
        <div className="mt-10">
          <TextLink href={withBase('/reviews/')}>Read all reviews & see the gallery</TextLink>
        </div>
      </Section>

      {/* Academy teaser */}
      <Section tone="light" labelledBy="academy-title">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal>
            <Img slug="long-straight-lace-frontal-wig" alt="Bone-straight lace frontal wig on a mannequin, used for teaching installs" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[5/4] w-full object-cover" />
          </div>
          <div>
            <Heading kicker="Classes & reseller program" id="academy-title" lines={[{t: 'Learn it.'}, {t: 'Earn it.', i: true}]} />
            <p className="mt-8 max-w-[56ch] text-[17px] leading-[1.8] text-cocoa" data-reveal>
              Join our one-day {wigClass.name.toLowerCase()} ({wigClass.time}, R{wigClass.price}, tools and refreshments included), or start your own
              hair business with the Eye Candy reseller program — 15% commission on every wig, no stock to buy, and we handle delivery.
            </p>
            <div className="mt-8" data-reveal>
              <TextLink href={withBase('/academy/')}>Classes & reseller details</TextLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Visit */}
      <Section labelledBy="visit-title">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Heading kicker="Visit us" id="visit-title" lines={[{t: '65 Brighton'}, {t: 'Road.', i: true}]} />
            <p className="mt-8 max-w-[52ch] text-[17px] leading-[1.8] text-pearl/80" data-reveal>
              Find us in {site.address.suburb}, minutes from Brackenfell, Durbanville and Kuils River in Cape Town’s Northern Suburbs. Book ahead on
              WhatsApp so your chair is ready when you arrive.
            </p>
            <ul className="mt-10 space-y-4 text-[16px] text-pearl/85" data-reveal>
              <li className="flex gap-3">
                <Pin className="size-5 shrink-0 text-gold" />
                <a href={site.mapsUrl} target="_blank" rel="noopener" className="hover:text-gold-light">
                  {site.address.street}, {site.address.suburb}, {site.address.postal}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="size-5 shrink-0 text-gold" />
                <span>{hours ? hours.join(' · ') : 'By appointment — WhatsApp for today’s slots'}</span>
              </li>
              <li className="flex gap-3">
                <WhatsApp className="size-5 shrink-0 text-gold" />
                <a href={wa(bookText())} target="_blank" rel="noopener" className="hover:text-gold-light">
                  {site.whatsapp.display}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center" data-reveal>
            <img
              src={withBase('/media/mimie-x-eyecandy-logo-600.webp')}
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
              alt="Mimie X Eyecandy logo: a gold lotus with a pearl — Reveal your inner beauty. Braids, nails, lashes, hair wash."
              className="w-full max-w-[460px] rounded-full"
            />
          </div>
        </div>
      </Section>

      <Section tone="ink2" labelledBy="home-faq-title">
        <Faqs items={faqs.home} id="home-faq" lines={[{t: 'Quick'}, {t: 'answers.', i: true}]} />
      </Section>

      <BookBand />
    </div>
  );
}
