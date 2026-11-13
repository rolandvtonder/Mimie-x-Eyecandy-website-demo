import {withBase} from '../site';
import {useEffect, useRef} from 'react';
import {pages, type PageId} from '../content/pages';
import {clamp} from '../lib/math';
import {onFrame} from '../lib/scroll';
import {Arrow} from './Icons';
import {Img} from './Img';

export type Line = {t: string; i?: boolean};
export type Cta = {label: string; href: string; kind?: 'gold' | 'line'; external?: boolean};

/**
 * Full-bleed hero: the photograph drifts slowly like a film behind a large
 * serif headline that mixes upright and italic-gold lines. Scrolling on, the
 * whole stage blurs, dims and shrinks back — a camera pull-back as the page
 * transition into the content below.
 */
export function Hero({
  page,
  lines,
  eyebrow,
  body,
  ctas,
  tall = false,
}: {
  page: PageId;
  lines: Line[];
  eyebrow: string;
  body: string;
  ctas: Cta[];
  tall?: boolean;
}) {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const meta = pages[page];

  useEffect(
    () =>
      onFrame(() => {
        const el = root.current;
        const s = stage.current;
        if (!el || !s) return;
        const r = el.getBoundingClientRect();
        if (r.bottom < -50) return;
        const p = clamp(-r.top / Math.max(1, r.height));
        s.style.transform = `translate3d(0, ${(p * r.height * 0.45).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(4)})`;
        s.style.filter = p > 0.01 ? `blur(${(p * 16).toFixed(1)}px) brightness(${(1 - p * 0.55).toFixed(3)})` : 'none';
      }),
    [],
  );

  return (
    <section ref={root} id="top" className={`relative overflow-hidden bg-ink ${tall ? 'min-h-svh' : 'min-h-[86svh]'}`}>
      <div ref={stage} className="absolute inset-0 origin-center will-change-transform">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-[62%]">
          <div className="drift absolute inset-0">
            <Img
              slug={meta.image}
              alt={meta.imageAlt}
              priority
              sizes="(min-width: 768px) 62vw, 100vw"
              className="h-full w-full object-cover object-[50%_22%]"
            />
          </div>
        </div>
        {/* Ink fades: from the left on desktop, from the bottom on phones. */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-ink)_0%,var(--color-ink)_34%,rgb(21_16_10/0.55)_55%,rgb(21_16_10/0.05)_80%)] max-md:hidden" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(21_16_10/0.6)_0%,rgb(21_16_10/0.6)_40%,rgb(21_16_10/0.94)_75%,var(--color-ink)_100%)] md:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,var(--color-ink),transparent)]" />
      </div>

      <div className={`relative mx-auto flex max-w-[1680px] flex-col justify-end px-5 pb-28 md:justify-center md:px-14 md:pb-24 ${tall ? 'min-h-svh pt-32' : 'min-h-[86svh] pt-36'}`}>
        {page !== 'home' ? (
          <nav aria-label="Breadcrumb" className="caps mb-6 text-pearl/60 rise">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href={withBase('/')} className="hover:text-gold-light">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold">
                {meta.crumb}
              </li>
            </ol>
          </nav>
        ) : null}

        <p className="caps max-w-[520px] text-gold rise" style={{['--d' as string]: '0.05s'}}>
          {eyebrow}
        </p>

        <h1 className="display mt-6 text-[clamp(40px,10.5vw,68px)] text-pearl drop-shadow-[0_4px_30px_rgb(0_0_0/0.35)] md:text-[clamp(56px,6.8vw,124px)]">
          {lines.map((l, i) => (
            <span
              key={l.t}
              className={`rise block ${l.i ? 'it' : ''} ${i === 0 && lines.length > 2 ? 'md:pl-[1.2em]' : ''}`}
              style={{['--d' as string]: `${0.12 + i * 0.09}s`}}
            >
              {l.t}
            </span>
          ))}
        </h1>

        <p className="rise mt-8 max-w-[470px] text-[16px] leading-[1.75] text-pearl/85 md:ml-[clamp(0px,12vw,220px)] md:text-[17px]" style={{['--d' as string]: '0.5s'}}>
          {body}
        </p>

        <div className="rise mt-8 flex flex-wrap gap-3 md:ml-[clamp(0px,12vw,220px)]" style={{['--d' as string]: '0.6s'}}>
          {ctas.map((c) => (
            <a key={c.href} href={c.href} className={`btn ${c.kind === 'line' ? 'btn-line' : 'btn-gold'}`} {...(c.external ? {target: '_blank', rel: 'noopener'} : {})}>
              {c.label}
              <Arrow className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
