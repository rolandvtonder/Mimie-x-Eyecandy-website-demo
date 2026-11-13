import Lenis from 'lenis';

/**
 * One rAF loop for the whole page. Lenis advances first, then every
 * scroll-driven component reads its own rect and writes styles directly —
 * nothing here goes through React state, so scrolling never re-renders.
 */

type Tick = (time: number) => void;

const subscribers = new Set<Tick>();
let lenis: Lenis | null = null;

export function startScroll(reducedMotion: boolean): () => void {
  if (!reducedMotion) {
    lenis = new Lenis({lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9, anchors: {offset: -24}});
  }

  let raf = 0;
  const loop = (time: number) => {
    lenis?.raf(time);
    subscribers.forEach((fn) => fn(time));
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  // Arriving from another page with a #hash (e.g. /services/#nails): land on it.
  if (location.hash.length > 1) {
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el) requestAnimationFrame(() => (lenis ? lenis.scrollTo(el, {immediate: true, offset: -24}) : el.scrollIntoView()));
  }

  return () => {
    cancelAnimationFrame(raf);
    lenis?.destroy();
    lenis = null;
  };
}

export function onFrame(fn: Tick): () => void {
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
  };
}

/** Pause / resume smooth scrolling (while the menu is open). */
export function lockScroll(locked: boolean) {
  if (!lenis) {
    document.documentElement.style.overflow = locked ? 'hidden' : '';
    return;
  }
  if (locked) lenis.stop();
  else lenis.start();
}

export function scrollToEl(el: HTMLElement) {
  if (lenis) lenis.scrollTo(el, {duration: 1.4, offset: -24});
  else el.scrollIntoView();
}
