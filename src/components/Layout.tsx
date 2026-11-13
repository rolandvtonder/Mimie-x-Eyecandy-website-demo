import {useCallback, useEffect, useRef, useState, type ReactNode} from 'react';
import {type PageId} from '../content/pages';
import {prefersReducedMotion, useReducedMotion} from '../hooks/useReducedMotion';
import {lockScroll, startScroll} from '../lib/scroll';
import {bookText, wa, withBase} from '../site';
import {Footer} from './Footer';
import {Lotus, WhatsApp} from './Icons';
import {Menu} from './Menu';

/**
 * Shell shared by every page: wordmark, menu button, floating WhatsApp
 * booking button, menu, footer, page-leave wipe and film grain.
 */
export function Layout({page, children}: {page: PageId; children: ReactNode}) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => startScroll(reduced), [reduced]);

  const close = useCallback(() => {
    setOpen(false);
    menuBtn.current?.focus({preventScroll: true});
  }, []);

  useEffect(() => lockScroll(open), [open]);

  // Leaving for another page: the ink and gold slabs wipe across first, so
  // every page change reads as one continuous move.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest('a');
      if (!a || a.target || a.hasAttribute('download')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // same page (hash links) — let Lenis handle it
      if (prefersReducedMotion()) return;
      e.preventDefault();
      setLeaving(true);
      window.setTimeout(() => location.assign(url.href), 620);
    };
    // Coming back via the back button restores this page from cache — reset.
    const onShow = (e: PageTransitionEvent) => e.persisted && (setLeaving(false), setOpen(false));
    document.addEventListener('click', onClick);
    window.addEventListener('pageshow', onShow);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('pageshow', onShow);
    };
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <a
        href={withBase('/')}
        aria-label="Mimie X Eyecandy — home"
        className="fixed top-4 left-4 z-[55] flex min-h-12 items-center gap-2.5 text-white mix-blend-difference md:top-6 md:left-10"
      >
        <Lotus className="size-8 md:size-10" />
        <span className="font-mark text-[12.5px] leading-none tracking-[0.16em] sm:text-[15px] md:text-[17px] md:tracking-[0.22em]">MIMIE X EYECANDY</span>
      </a>

      <button
        ref={menuBtn}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="site-menu"
        className={`caps fixed top-4 right-4 z-[55] flex min-h-12 items-center gap-3 px-4 py-3 backdrop-blur-md transition-colors duration-500 sm:px-6 md:top-6 md:right-8 ${
          open ? 'bg-ink text-pearl' : 'bg-white/15 text-white hover:bg-white/25'
        }`}
      >
        {open ? 'Close' : 'Menu'}
        <span className={`text-[18px] leading-none transition-transform duration-500 ease-silk ${open ? 'rotate-45' : ''}`} aria-hidden="true">
          +
        </span>
      </button>

      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>

      <Footer />

      <a
        href={wa(bookText())}
        target="_blank"
        rel="noopener"
        className={`caps fixed right-4 bottom-4 z-[55] flex min-h-12 items-center gap-3 px-5 py-3.5 shadow-[0_10px_40px_rgb(0_0_0/0.35)] transition-colors duration-500 md:right-8 md:bottom-7 md:px-7 ${
          open ? 'bg-gold text-ink' : 'bg-pearl text-ink hover:bg-gold'
        }`}
      >
        <WhatsApp className="size-5" />
        <span>
          Book <em className="font-display text-[15px] normal-case tracking-normal italic">now</em>
        </span>
      </a>

      <Menu open={open} current={page} onClose={close} />

      {/* Page-leave wipe */}
      <div className="pointer-events-none fixed inset-0 z-[70]" aria-hidden="true">
        {['bg-ink', 'bg-gold', 'bg-ink'].map((c, k) => (
          <div
            key={k}
            className={`absolute inset-0 ${c} transition-transform duration-[650ms] ease-wipe ${leaving ? 'translate-x-0' : 'translate-x-[104%]'}`}
            style={{transitionDelay: leaving ? `${k * 0.08}s` : '0s'}}
          />
        ))}
      </div>

      <div className="grain" aria-hidden="true" />
    </>
  );
}
