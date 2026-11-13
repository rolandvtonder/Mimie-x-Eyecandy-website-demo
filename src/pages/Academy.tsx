import {BookBand, Faqs, Heading, Section} from '../components/Blocks';
import {Hero} from '../components/Hero';
import {Check, Mail, WhatsApp} from '../components/Icons';
import {Img} from '../components/Img';
import {faqs, reseller, wigClass} from '../content/more';
import {useReveals} from '../hooks/useReveals';
import {site, wa} from '../site';

export function Academy() {
  const ref = useReveals<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Hero
        page="academy"
        eyebrow="Wig installation class & hair reseller program — Cape Town"
        lines={[{t: 'Learn it.'}, {t: 'Earn it.', i: true}]}
        body="Turn your love of hair into a skill and an income. Learn to revamp and install wigs in one hands-on day, or sell Eye Candy wigs to your own clients for 15% commission — no stock needed."
        ctas={[
          {label: 'The wig class', href: '#wig-class'},
          {label: 'Become a reseller', href: '#reseller', kind: 'line'},
        ]}
      />

      {/* Class */}
      <Section id="wig-class" tone="light" labelledBy="class-title">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <Heading kicker="One-day masterclass" id="class-title" lines={[{t: 'Wig revamp'}, {t: '& installation.', i: true}]} />
            <p className="mt-8 max-w-[60ch] text-[17px] leading-[1.8] text-cocoa" data-reveal>
              {wigClass.intro}
            </p>

            <h3 className="caps mt-14 text-gold-deep" data-reveal>
              What you will learn
            </h3>
            <ol className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {wigClass.modules.map((m, i) => (
                <li key={m.t} className="border-t border-ink/20 pt-5" data-reveal style={{['--d' as string]: `${(i % 2) * 0.07}s`}}>
                  <span className="caps text-ink/50">0{i + 1}</span>
                  <h4 className="mt-1 font-display text-[26px] leading-tight font-medium">{m.t}</h4>
                  <p className="mt-2 text-[15px] leading-[1.75] text-cocoa/85">{m.d}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Class details" data-reveal>
            <div className="bg-ink p-8 text-pearl md:p-10">
              <p className="caps text-gold">Class details</p>
              <p className="mt-4 font-display text-[64px] leading-none">R{wigClass.price}</p>
              <dl className="mt-8 space-y-4 text-[15px]">
                <div className="flex justify-between gap-4 border-b border-pearl/15 pb-4">
                  <dt className="text-pearl/60">Time</dt>
                  <dd>{wigClass.time}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-pearl/15 pb-4">
                  <dt className="text-pearl/60">Length</dt>
                  <dd>{wigClass.duration}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-pearl/15 pb-4">
                  <dt className="text-pearl/60">Where</dt>
                  <dd className="text-right">
                    {site.address.street}, {site.address.suburb}
                  </dd>
                </div>
              </dl>
              <ul className="mt-8 space-y-3 text-[15px] text-pearl/85">
                {wigClass.includes.map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check className="size-5 shrink-0 text-gold" /> {x}
                  </li>
                ))}
              </ul>
              <a href={wa(`Hi Eye Candy! I'd like to book a seat in the next ${wigClass.name}.`)} target="_blank" rel="noopener" className="btn btn-gold mt-10 w-full">
                <WhatsApp className="size-5" /> Reserve my seat
              </a>
              <p className="mt-5 text-[13px] leading-relaxed text-pearl/60">{wigClass.note}</p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Reseller */}
      <Section id="reseller" labelledBy="reseller-title">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Heading kicker="Eye Candy reseller program" id="reseller-title" lines={[{t: reseller.headline[0]}, {t: reseller.headline[1], i: true}]} />
            <p className="mt-8 max-w-[56ch] text-[17px] leading-[1.8] text-pearl/80" data-reveal>
              {reseller.intro}
            </p>
            <ul className="mt-12 grid gap-px bg-pearl/10 sm:grid-cols-2">
              {reseller.perks.map((p, i) => (
                <li key={p.t} className="bg-ink p-7" data-reveal style={{['--d' as string]: `${i * 0.06}s`}}>
                  <h3 className="gold-text font-display text-[32px] leading-tight font-medium">{p.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-pearl/75">{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div data-reveal>
              <Img slug="honey-blonde-highlight-bob-wig" alt="Honey blonde highlighted bob wig — one of the units resellers can sell" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-square w-full object-cover" />
            </div>
            <h3 className="caps mt-12 text-gold" data-reveal>
              How it works
            </h3>
            <ol className="mt-6 space-y-5">
              {reseller.steps.map((s, i) => (
                <li key={s} className="flex items-baseline gap-5 border-b border-pearl/15 pb-5" data-reveal style={{['--d' as string]: `${i * 0.06}s`}}>
                  <span className="font-display text-[34px] leading-none text-gold italic">{i + 1}</span>
                  <p className="text-[16px] leading-[1.7] text-pearl/85">{s}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal>
              <a href={wa('Hi Eye Candy! I would like to join the reseller program and earn 15% commission.')} target="_blank" rel="noopener" className="btn btn-gold">
                <WhatsApp className="size-5" /> Join on WhatsApp
              </a>
              <a href={`mailto:${site.email}?subject=${encodeURIComponent('Eye Candy reseller program')}`} className="btn btn-line">
                <Mail className="size-5" /> Email us
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="academy-faq-title">
        <Faqs items={faqs.academy} id="academy-faq" />
      </Section>

      <BookBand title={['Your hair', 'business starts here.']} what="a seat in the wig class" />
    </div>
  );
}
