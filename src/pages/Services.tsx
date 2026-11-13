import {BookBand, Faqs, Section} from '../components/Blocks';
import {Hero} from '../components/Hero';
import {WhatsApp} from '../components/Icons';
import {Img} from '../components/Img';
import {faqs} from '../content/more';
import {formatPrice, priceNote, services} from '../content/services';
import {useReveals} from '../hooks/useReveals';
import {bookText, wa} from '../site';

export function Services() {
  const ref = useReveals<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Hero
        page="services"
        eyebrow="Salon services & prices — Kraaifontein, Cape Town"
        lines={[{t: 'Braids, nails'}, {t: '& lashes.', i: true}]}
        body="Straight-back cornrows, knotless and box braids, gel nails, cluster lashes, hair washes and wig installs — with honest “from” prices and combo specials. Pick your service, then book it on WhatsApp."
        ctas={[
          {label: 'See the price list', href: '#braids'},
          {label: 'Book on WhatsApp', href: wa(bookText()), kind: 'line', external: true},
        ]}
      />

      {/* Jump links */}
      <nav aria-label="Service categories" className="border-y border-gold/15 bg-ink">
        <ul className="mx-auto flex max-w-[1680px] gap-1 overflow-x-auto px-5 py-2 md:px-14 [scrollbar-width:none]">
          {services.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="caps inline-flex min-h-11 items-center px-3 text-pearl/75 hover:text-gold-light">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((c, idx) => {
        const light = idx % 2 === 1;
        return (
          <section
            key={c.id}
            id={c.id}
            aria-labelledby={`${c.id}-title`}
            className={`scroll-mt-16 ${light ? 'on-light bg-pearl text-ink' : 'dark bg-ink text-pearl'}`}
          >
            <div className="mx-auto grid max-w-[1680px] gap-12 px-5 py-24 md:px-14 md:py-32 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
              <div className={`lg:sticky lg:top-24 lg:self-start ${light ? 'lg:order-2' : ''}`} data-reveal>
                <Img slug={c.image} alt={c.alt} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div>
                <div data-reveal>
                  <p className={`caps ${light ? 'text-gold-deep' : 'text-gold'}`}>0{idx + 1} · {c.name}</p>
                  <h2 id={`${c.id}-title`} className="display mt-4 text-[clamp(44px,6vw,96px)]">
                    <span className="block">{c.title[0]}</span>
                    <span className="it block">{c.title[1]}</span>
                  </h2>
                  <p className="mt-6 font-display text-[24px] leading-snug italic md:text-[28px]">{c.intro}</p>
                </div>

                <ul className="mt-10 border-t border-current/20" data-reveal>
                  {c.items.map((item) => (
                    <li key={item.name} className="border-b border-current/15 py-5">
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-display text-[22px] leading-tight font-medium md:text-[25px]">{item.name}</h3>
                        <span className="leader" aria-hidden="true" />
                        <span className={`shrink-0 font-display text-[22px] md:text-[25px] ${light ? 'text-gold-deep' : 'text-gold-light'}`}>{formatPrice(item)}</span>
                      </div>
                      {item.note ? <p className="mt-1 text-[14px] opacity-70">{item.note}</p> : null}
                    </li>
                  ))}
                </ul>

                <div className={`prose-mxe mt-10 max-w-[62ch] text-[16px] leading-[1.8] ${light ? 'text-cocoa' : 'text-pearl/80'}`} data-reveal>
                  {c.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>

                <a
                  href={wa(bookText(c.name))}
                  target="_blank"
                  rel="noopener"
                  className={`btn mt-10 ${light ? 'btn-ink' : 'btn-gold'}`}
                  data-reveal
                >
                  <WhatsApp className="size-5" /> Book {c.name.toLowerCase()}
                </a>
              </div>
            </div>
          </section>
        );
      })}

      <Section tone="ink2">
        <p className="mx-auto max-w-[70ch] text-center font-display text-[22px] leading-relaxed italic text-pearl/85 md:text-[26px]" data-reveal>
          {priceNote}
        </p>
      </Section>

      <Section tone="light" labelledBy="services-faq-title">
        <Faqs items={faqs.services} id="services-faq" />
      </Section>

      <BookBand what="a salon appointment" />
    </div>
  );
}
