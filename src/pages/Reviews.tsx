import {useCallback, useEffect, useRef, useState} from 'react';
import {BookBand, Heading, ReviewCard, Section} from '../components/Blocks';
import {Hero} from '../components/Hero';
import {Arrow} from '../components/Icons';
import {Img, mediaUrl} from '../components/Img';
import {gallery, reviews, type GalleryItem} from '../content/more';
import {useReveals} from '../hooks/useReveals';
import {site} from '../site';

const TAGS = ['All', 'Braids', 'Wigs', 'Nails', 'Clients'] as const;
type Tag = (typeof TAGS)[number];

export function Reviews() {
  const ref = useReveals<HTMLDivElement>();
  const [tag, setTag] = useState<Tag>('All');
  const [index, setIndex] = useState(-1);
  const dialog = useRef<HTMLDialogElement>(null);

  const shown: GalleryItem[] = tag === 'All' ? gallery : gallery.filter((g) => g.tag === tag);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback((d: number) => setIndex((i) => (i + d + shown.length) % shown.length), [shown.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!el.open) return;
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step]);

  const current = index >= 0 ? shown[index] : null;

  return (
    <div ref={ref}>
      <Hero
        page="reviews"
        eyebrow="Client reviews & hair gallery"
        lines={[{t: 'Loved by'}, {t: 'our clients.', i: true}]}
        body="Real messages from Eye Candy clients after their wigs and hair arrived, and a gallery of braids, cornrows, gel nails, bobs, pixies and curly installs."
        ctas={[
          {label: 'Read the reviews', href: '#reviews'},
          {label: 'See the gallery', href: '#gallery', kind: 'line'},
        ]}
      />

      <Section id="reviews" tone="light" labelledBy="reviews-list-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Heading kicker="From our clients" id="reviews-list-title" lines={[{t: 'In their'}, {t: 'own words.', i: true}]} />
          <p className="max-w-[440px] text-[16px] leading-[1.75] text-cocoa" data-reveal>
            These are messages our clients sent us on WhatsApp and Instagram — shared with their first names, exactly as they wrote them.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>
        <p className="mt-12 text-[15px] text-cocoa" data-reveal>
          Had your hair done with us?{' '}
          <a href={site.facebook.url} target="_blank" rel="noopener" className="underline decoration-gold-deep underline-offset-4 hover:text-gold-deep">
            Leave us a review on Facebook
          </a>{' '}
          or tag{' '}
          <a href={site.instagram.url} target="_blank" rel="noopener" className="underline decoration-gold-deep underline-offset-4 hover:text-gold-deep">
            {site.instagram.handle}
          </a>
          .
        </p>
      </Section>

      <Section id="gallery" labelledBy="gallery-title">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Heading kicker="Gallery" id="gallery-title" lines={[{t: 'The work'}, {t: 'speaks.', i: true}]} />
          <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2" data-reveal>
            {TAGS.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tag === t}
                onClick={() => setTag(t)}
                className={`caps min-h-11 border px-4 transition-colors ${tag === t ? 'border-gold bg-gold text-ink' : 'border-pearl/25 text-pearl/80 hover:border-gold hover:text-gold-light'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {shown.length} photos{tag === 'All' ? '' : ` of ${tag.toLowerCase()}`}.
        </p>

        <ul className="mt-12 columns-2 gap-[3px] md:columns-3 lg:columns-4">
          {shown.map((g, i) => (
            <li key={g.slug} className="mb-[3px] break-inside-avoid">
              <button type="button" onClick={() => open(i)} className="group relative block w-full cursor-zoom-in overflow-hidden" aria-label={`Enlarge photo: ${g.alt}`}>
                <Img slug={g.slug} alt={g.alt} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="h-auto w-full transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.04]" />
                <span className="caps absolute top-3 left-3 bg-ink/70 px-2 py-1 text-[10px] text-pearl">{g.tag}</span>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      <dialog
        ref={dialog}
        aria-label="Photo viewer"
        onClose={() => setIndex(-1)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[100svh] max-w-[100vw] overflow-hidden bg-transparent p-0 text-pearl backdrop:bg-ink/90"
      >
        {current ? (
          <figure className="relative flex max-h-[92svh] flex-col items-center px-4">
            <img src={mediaUrl(current.slug, 1600)} alt={current.alt} className="max-h-[72svh] w-auto max-w-[min(92vw,1100px)] object-contain" />
            <figcaption className="mt-4 max-w-[60ch] text-center text-[15px] text-pearl/80">{current.alt}</figcaption>
            <div className="mt-4 flex gap-3">
              <button type="button" onClick={() => step(-1)} className="btn btn-line" aria-label="Previous photo">
                <Arrow className="size-4 rotate-180" />
              </button>
              <button type="button" onClick={close} className="btn btn-gold" autoFocus>
                Close
              </button>
              <button type="button" onClick={() => step(1)} className="btn btn-line" aria-label="Next photo">
                <Arrow className="size-4" />
              </button>
            </div>
          </figure>
        ) : null}
      </dialog>

      <BookBand title={['Be our', 'next glow-up.']} />
    </div>
  );
}
