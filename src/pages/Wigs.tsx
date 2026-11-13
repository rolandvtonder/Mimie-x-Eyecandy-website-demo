import {BookBand, Faqs, Heading, Section} from '../components/Blocks';
import {Hero} from '../components/Hero';
import {Check, WhatsApp} from '../components/Icons';
import {Img} from '../components/Img';
import {faqs} from '../content/more';
import {bundlePrices, laceGuide, wigCare, wigCollections} from '../content/wigs';
import {useReveals} from '../hooks/useReveals';
import {site, wa} from '../site';

const orderText = (wig: string) => `Hi Eye Candy! I'm interested in the ${wig} wig. Is it in stock, and what lengths and prices do you have?`;

export function Wigs() {
  const ref = useReveals<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Hero
        page="wigs"
        eyebrow="Human hair wigs, bundles & closures — Cape Town"
        lines={[{t: 'The Eye Candy'}, {t: 'Wig shop.', i: true}]}
        body="Bob wigs, pixie cuts, kinky curly and deep wave units, bone-straight frontals, 360 lace and 13A bundles with closures. Order on WhatsApp, collect in Kraaifontein or have it delivered — and book an install while you are here."
        ctas={[
          {label: 'Browse the collection', href: '#bob-wigs'},
          {label: 'Order on WhatsApp', href: wa('Hi Eye Candy! I would like to order a wig.'), kind: 'line', external: true},
        ]}
      />

      <nav aria-label="Wig collections" className="border-y border-gold/15 bg-ink">
        <ul className="mx-auto flex max-w-[1680px] gap-1 overflow-x-auto px-5 py-2 md:px-14 [scrollbar-width:none]">
          {[...wigCollections.map((c) => ({id: c.id, n: c.name})), {id: 'bundles', n: 'Bundles & closures'}, {id: 'lace-guide', n: 'Lace guide'}, {id: 'wig-care', n: 'Wig care'}].map((c) => (
            <li key={c.id} className="shrink-0">
              <a href={`#${c.id}`} className="caps inline-flex min-h-11 items-center px-3 text-pearl/75 hover:text-gold-light">
                {c.n}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {wigCollections.map((c, idx) => {
        const light = idx % 2 === 1;
        return (
          <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className={`scroll-mt-6 ${light ? 'on-light bg-pearl text-ink' : 'dark bg-ink text-pearl'}`}>
            <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-14 md:py-28">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <Heading kicker={`Collection 0${idx + 1}`} id={`${c.id}-title`} lines={[{t: c.title[0]}, {t: c.title[1], i: true}]} />
                <p className={`max-w-[460px] text-[16px] leading-[1.75] ${light ? 'text-cocoa' : 'text-pearl/80'}`} data-reveal>
                  {c.intro}
                </p>
              </div>
              <ul className="mt-14 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {c.wigs.map((w, i) => (
                  <li key={w.slug} data-reveal style={{['--d' as string]: `${(i % 4) * 0.07}s`}}>
                    <article className="group">
                      <div className="overflow-hidden">
                        <Img slug={w.slug} alt={w.alt} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-silk group-hover:scale-[1.05]" />
                      </div>
                      <h3 className="mt-5 font-display text-[26px] leading-tight font-medium">{w.name}</h3>
                      <p className="mt-1 text-[14px] opacity-70">{w.detail}</p>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <span className={`font-display text-[22px] ${light ? 'text-gold-deep' : 'text-gold-light'}`}>{w.price ?? 'Ask for price'}</span>
                        <a
                          href={wa(orderText(w.name))}
                          target="_blank"
                          rel="noopener"
                          className="caps inline-flex min-h-11 items-center gap-2 border-b border-current/40 hover:border-current"
                        >
                          <WhatsApp className="size-4" /> Order <span className="sr-only">{w.name}</span>
                        </a>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Bundles */}
      <Section id="bundles" tone="ink2" labelledBy="bundles-title">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div data-reveal>
            <Img slug="straight-bundles-4x4-closure-13a" alt="Three straight 13A human hair bundles with a 4x4 lace closure" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <Heading kicker="Bundles & closures" id="bundles-title" lines={[{t: '3 bundles'}, {t: '+ 4x4 closure.', i: true}]} />
            <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.8] text-pearl/80" data-reveal>
              Straight 13A human hair: three bundles plus a matching 4x4 lace closure — everything you need for a full sew-in or to build your own
              closure wig. Ask us to make it into a unit for you.
            </p>
            <table className="mt-10 w-full border-collapse text-left" data-reveal>
              <caption className="caps mb-3 text-left text-gold">Straight 13A · price per set</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Length</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {bundlePrices.map((b) => (
                  <tr key={b.length} className="border-b border-pearl/15">
                    <th scope="row" className="py-4 font-display text-[24px] font-medium">
                      {b.length}
                    </th>
                    <td className="py-4 text-right font-display text-[24px] text-gold-light">R{b.price.toLocaleString('en-ZA')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href={wa('Hi Eye Candy! I would like to order 3 bundles with a 4x4 closure. Length: ')} target="_blank" rel="noopener" className="btn btn-gold mt-10" data-reveal>
              <WhatsApp className="size-5" /> Order bundles
            </a>
          </div>
        </div>
      </Section>

      {/* Lace guide */}
      <Section id="lace-guide" tone="light" labelledBy="lace-title">
        <Heading kicker="Which lace is right for you?" id="lace-title" lines={[{t: 'The lace'}, {t: 'guide.', i: true}]} />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {laceGuide.map((l, i) => (
            <li key={l.name} className="border-t-2 border-gold-deep pt-6" data-reveal style={{['--d' as string]: `${i * 0.07}s`}}>
              <h3 className="font-display text-[30px] font-medium">{l.name}</h3>
              <p className="mt-3 text-[16px] leading-[1.75] text-cocoa">{l.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Care */}
      <Section id="wig-care" labelledBy="care-title">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Heading kicker="Make it last" id="care-title" lines={[{t: 'Wig care,'}, {t: 'the Eye Candy way.', i: true}]} />
          <ol className="space-y-6">
            {wigCare.map((t, i) => (
              <li key={t} className="flex gap-5 border-b border-pearl/15 pb-6" data-reveal style={{['--d' as string]: `${i * 0.05}s`}}>
                <Check className="mt-1 size-5 shrink-0 text-gold" />
                <p className="text-[16px] leading-[1.75] text-pearl/85">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ink2" labelledBy="wigs-faq-title">
        <Faqs items={faqs.wigs} id="wigs-faq" />
      </Section>

      <BookBand
        title={['Find your', 'next look.']}
        text={`Tell us the style, colour and length you love and we will send pictures of what is in stock. WhatsApp ${site.whatsapp.display} — and book your install at the same time.`}
        what="a wig and installation"
      />
    </div>
  );
}
