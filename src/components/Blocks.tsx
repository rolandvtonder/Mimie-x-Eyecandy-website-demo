import type {ReactNode} from 'react';
import type {Faq, Review} from '../content/more';
import {bookText, site, wa, withBase} from '../site';
import {Arrow, WhatsApp} from './Icons';
import type {Line} from './Hero';

/** Section heading: small gold kicker over a display h2 with italic lines. */
export function Heading({kicker, lines, id, as = 'h2', className = ''}: {kicker: string; lines: Line[]; id?: string; as?: 'h2' | 'h3'; className?: string}) {
  const H = as;
  return (
    <div className={className} data-reveal>
      <p className="caps text-gold-deep [.dark_&]:text-gold">{kicker}</p>
      <H id={id} className="display mt-4 text-[clamp(38px,6vw,92px)]">
        {lines.map((l) => (
          <span key={l.t} className={`block ${l.i ? 'it' : ''}`}>
            {l.t}
          </span>
        ))}
      </H>
    </div>
  );
}

export function Section({children, tone = 'dark', id, className = '', labelledBy}: {children: ReactNode; tone?: 'dark' | 'light' | 'ink2'; id?: string; className?: string; labelledBy?: string}) {
  const t = tone === 'light' ? 'on-light bg-pearl text-ink' : tone === 'ink2' ? 'dark bg-ink-2 text-pearl' : 'dark bg-ink text-pearl';
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative ${t} ${className}`}>
      <div className="mx-auto max-w-[1680px] px-5 py-24 md:px-14 md:py-32">{children}</div>
    </section>
  );
}

export function Faqs({items, id = 'faq', lines = [{t: 'Questions,'}, {t: 'answered.', i: true}]}: {items: Faq[]; id?: string; lines?: Line[]}) {
  return (
    <div id={id} className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <Heading kicker="Good to know" id={`${id}-title`} lines={lines} />
      <div className="divide-y divide-current/15 border-y border-current/15">
        {items.map((f, i) => (
          <details key={f.q} className="faq group" data-reveal style={{['--d' as string]: `${i * 0.05}s`}}>
            <summary className="flex min-h-16 items-center justify-between gap-6 py-5">
              <h3 className="font-display text-[22px] leading-snug font-medium md:text-[26px]">{f.q}</h3>
              <span className="plus grid size-10 shrink-0 place-items-center rounded-full border border-current/30 text-[20px] leading-none" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="max-w-[60ch] pb-6 text-[16px] leading-[1.75] opacity-80">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function ReviewCard({r, i = 0}: {r: Review; i?: number}) {
  return (
    <figure className="flex h-full flex-col justify-between border border-current/15 p-7 md:p-9" data-reveal style={{['--d' as string]: `${(i % 3) * 0.08}s`}}>
      <div>
        <span className="block font-display text-[64px] leading-[0.5] text-gold" aria-hidden="true">
          “
        </span>
        <blockquote className="mt-4 font-display text-[24px] leading-[1.3] italic md:text-[27px]">{r.quote}</blockquote>
      </div>
      <figcaption className="caps mt-8 opacity-70">
        — {r.name} · <span className="opacity-80">{r.topic}</span>
      </figcaption>
    </figure>
  );
}

/** Big closing call to action. */
export function BookBand({title = ['Your chair', 'is waiting.'], text, what}: {title?: [string, string]; text?: string; what?: string}) {
  return (
    <section className="relative overflow-hidden bg-gold text-ink on-light" aria-labelledby="book-band">
      <div className="mx-auto flex max-w-[1680px] flex-col gap-10 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-14 md:py-28">
        <div data-reveal>
          <p className="caps text-ink/70">Book on WhatsApp</p>
          <h2 id="book-band" className="display mt-4 text-[clamp(44px,7vw,112px)]">
            <span className="block">{title[0]}</span>
            <span className="block font-normal italic">{title[1]}</span>
          </h2>
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] text-ink/80">
            {text ??
              `Send us the style you want and a photo of your inspiration on ${site.whatsapp.display}. We reply with your price and the next open slot at ${site.address.street}, ${site.address.suburb}.`}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col" data-reveal style={{['--d' as string]: '0.1s'}}>
          <a href={wa(bookText(what))} target="_blank" rel="noopener" className="btn btn-ink">
            <WhatsApp className="size-5" /> WhatsApp {site.whatsapp.display}
          </a>
          <a href={withBase('/contact/')} className="btn border border-ink/40 text-ink hover:bg-ink hover:text-pearl">
            Directions & contact <Arrow className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function TextLink({href, children}: {href: string; children: ReactNode}) {
  return (
    <a href={href} className="caps group inline-flex min-h-11 items-center gap-3 border-b border-current/40 pb-1 hover:border-current">
      {children}
      <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
