import manifest from '../media-manifest.json';
import {withBase} from '../site';

type Manifest = Record<string, {w: number; h: number}>;
const sizesOf = manifest as Manifest;
const WIDTHS = [480, 960, 1600];

export const mediaUrl = (slug: string, w = 960) => withBase(`/media/${slug}-${w}.webp`);

/**
 * Responsive WebP picture with intrinsic width/height (no layout shift) and a
 * srcset so phones download the 480px file and big screens the 1600px one.
 */
export function Img({
  slug,
  alt,
  className,
  sizes = '100vw',
  priority = false,
}: {
  slug: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const dim = sizesOf[slug];
  if (!dim) throw new Error(`Unknown image ${slug} — run npm run images`);
  const seen = new Set<number>();
  const srcSet = WIDTHS.map((w) => {
    const real = Math.min(w, dim.w);
    if (seen.has(real)) return null;
    seen.add(real);
    return `${mediaUrl(slug, w)} ${real}w`;
  })
    .filter(Boolean)
    .join(', ');

  return (
    <img
      src={mediaUrl(slug, 960)}
      srcSet={srcSet}
      sizes={sizes}
      width={dim.w}
      height={dim.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      className={className}
    />
  );
}
