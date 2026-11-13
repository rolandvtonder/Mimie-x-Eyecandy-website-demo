import {useEffect, useRef, useState, type CSSProperties} from 'react';
import {menuPages, pages, type PageId} from '../content/pages';
import {fullAddress, site, wa, bookText, withBase} from '../site';

/**
 * The menu: three slabs wipe in from the right one after another
 * (ink, gold, pearl); the pearl one stays and holds the items. Hovering an
 * item makes it shimmer like silk — an SVG turbulence + displacement filter
 * whose strength and phase are animated per frame.
 */
export function Menu({open, current, onClose}: {open: boolean; current: PageId; onClose: () => void}) {
  const [hover, setHover] = useState(-1);
  const turb = useRef<SVGFETurbulenceElement>(null);
  const disp = useRef<SVGFEDisplacementMapElement>(null);
  const first = useRef<HTMLAnchorElement>(null);

  // Animate the shimmer only while something is hovered.
  useEffect(() => {
    if (hover < 0) return;
    let raf = 0;
    let t = 0;
    let amp = 0;
    const loop = () => {
      t += 0.016;
      amp = Math.min(1, amp + 0.08);
      turb.current?.setAttribute('baseFrequency', `${(0.012 + Math.sin(t * 2.1) * 0.004).toFixed(4)} ${(0.06 + Math.cos(t * 1.7) * 0.02).toFixed(4)}`);
      turb.current?.setAttribute('seed', String(Math.floor(t * 12) % 50));
      disp.current?.setAttribute('scale', (amp * 7).toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [hover]);

  useEffect(() => {
    if (!open) {
      setHover(-1);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    // Move focus into the menu once the pearl slab has arrived.
    const id = window.setTimeout(() => first.current?.focus({preventScroll: true}), 420);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(id);
    };
  }, [open, onClose]);

  const slab = (extra: string) =>
    `absolute inset-y-0 right-0 w-[min(34vw,480px)] max-lg:w-[min(70vw,480px)] max-sm:w-full transition-transform duration-[800ms] ease-wipe ${extra} ${
      open ? 'translate-x-0' : 'translate-x-[104%]'
    }`;
  // Open: ink → gold → pearl, staggered. Close: the reverse, faster.
  const delay = (k: number): CSSProperties => ({transitionDelay: `${open ? k * 0.09 : (2 - k) * 0.06}s`});

  return (
    <div id="site-menu" className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} inert={!open}>
      <svg className="absolute size-0" aria-hidden="true">
        <filter id="shimmer" x="-5%" y="-30%" width="110%" height="160%">
          <feTurbulence ref={turb} type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="2" seed="2" result="n" />
          <feDisplacementMap ref={disp} in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Click-away */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className={`absolute inset-0 cursor-default bg-ink/40 transition-opacity duration-700 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className={slab('bg-ink')} style={delay(0)} />
      <div className={slab('bg-gold')} style={delay(1)} />
      <nav
        className={slab('on-light flex flex-col justify-between overflow-y-auto bg-pearl px-8 pt-24 pb-28 text-ink sm:px-10')}
        style={delay(2)}
        aria-label="Main menu"
      >
        <ul onMouseLeave={() => setHover(-1)}>
          {menuPages.map((id, i) => {
            const p = pages[id];
            const here = id === current;
            return (
              <li
                key={id}
                className={`transition-[opacity,transform] duration-700 ease-silk ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{transitionDelay: open ? `${0.42 + i * 0.06}s` : '0s'}}
              >
                <a
                  ref={i === 0 ? first : undefined}
                  href={withBase(p.path)}
                  aria-current={here ? 'page' : undefined}
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  onClick={() => {
                    if (here) onClose();
                  }}
                  className={`display relative inline-flex min-h-12 items-center py-1 text-[clamp(26px,7vw,40px)] lg:text-[clamp(30px,2.6vw,44px)] transition-opacity duration-300 ${
                    hover >= 0 && hover !== i ? 'opacity-35' : 'opacity-100'
                  }`}
                  style={{filter: hover === i ? 'url(#shimmer)' : 'none'}}
                >
                  {here ? <span className="mr-3 inline-block size-2 rounded-full bg-gold-deep" aria-hidden="true" /> : null}
                  {p.menu}
                  <sup className="caps absolute -right-7 top-2 text-[10px] tracking-normal text-ink/45 max-sm:hidden">0{i + 1}</sup>
                </a>
              </li>
            );
          })}
        </ul>

        <div className={`mt-10 space-y-5 transition-opacity delay-700 duration-700 ${open ? 'opacity-100' : 'opacity-0'}`}>
          <a href={wa(bookText())} className="btn btn-ink w-full" rel="noopener" target="_blank">
            Book on WhatsApp · {site.whatsapp.display}
          </a>
          <p className="text-[14px] leading-relaxed text-ink/75">{fullAddress}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={site.instagram.url} className="caps inline-flex min-h-11 items-center text-ink/80 hover:text-gold-deep" rel="noopener" target="_blank">
              Instagram
            </a>
            <a href={site.facebook.url} className="caps inline-flex min-h-11 items-center text-ink/80 hover:text-gold-deep" rel="noopener" target="_blank">
              Facebook
            </a>
            <a href={`tel:${site.phone2.e164}`} className="caps inline-flex min-h-11 items-center text-ink/80 hover:text-gold-deep">
              Call {site.phone2.display}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
