import {useEffect, useRef, useState, type CSSProperties} from 'react';
import {Arrow} from './Icons';
import {Img} from './Img';

export type Ritual = {
  id: string;
  name: [string, string];
  href: string;
  image: string;
  alt: string;
  specs: [string, string][];
};

/**
 * Four tall panels slide in from the right one after another as the section
 * arrives — braids, wigs, nails, lashes. Each panel links to its price list.
 * Without JavaScript the panels are simply in place.
 */
export function Rituals({items}: {items: Ritual[]}) {
  const root = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = root.current!;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      {threshold: 0.18},
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={root} id="rituals" aria-labelledby="rituals-title" className="relative bg-ink">
      <h2 id="rituals-title" className="sr-only">
        Our services: braids, wigs, nails and lashes
      </h2>
      <div className="grid min-h-[620px] grid-cols-1 gap-[3px] overflow-hidden sm:grid-cols-2 lg:h-svh lg:grid-cols-4">
        {items.map((b, i) => (
          <article
            key={b.id}
            className={`ritual group relative overflow-hidden bg-ink-2 transition-transform duration-[1100ms] ease-wipe max-lg:h-[78svh] max-lg:min-h-[520px] ${
              shown ? 'is-in' : ''
            }`}
            style={{transitionDelay: `${0.1 + i * 0.14}s`} as CSSProperties}
          >
            <Img
              slug={b.image}
              alt={b.alt}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-silk group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(21_16_10/0.7),rgb(21_16_10/0.05)_40%,rgb(21_16_10/0.15)_60%,rgb(21_16_10/0.85))]" />
            <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
              <h3 className="display text-[clamp(38px,3.4vw,60px)] text-pearl">
                <span className="block">{b.name[0]}</span>
                <span className="it block">{b.name[1]}</span>
              </h3>
              <div>
                <dl className={`space-y-3 transition-opacity delay-[1200ms] duration-700 ${shown ? 'opacity-100' : 'js-fade'}`}>
                  {b.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt className="caps text-pearl/65">{k}</dt>
                      <dd className="font-display text-[24px] text-pearl">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a href={b.href} className="caps mt-6 inline-flex min-h-11 items-center gap-3 border-b border-gold/60 pb-1 text-gold-light hover:border-gold-light">
                  See prices <span className="sr-only">for {b.name.join(' ')}</span>
                  <Arrow className="size-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
