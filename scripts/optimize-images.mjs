/**
 * Turns the raw Facebook/Instagram exports in /media into web-ready files:
 *  - WebP at 480 / 960 / 1600 px wide under public/media/<slug>-<w>.webp
 *    (descriptive slugs help image search; widths feed srcset)
 *  - src/media-manifest.json with each slug's intrinsic size, so every <img>
 *    can declare width/height and the page never shifts while loading
 *  - the social-share image, favicon PNGs and the logo
 *
 * Run once with `npm run images` whenever photos in /media change.
 */
import {mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'media';
const OUT = 'public/media';
const WIDTHS = [480, 960, 1600];

/** source file prefix -> descriptive slug */
const MAP = {
  '510973562': 'sleek-bob-wig-portrait',
  '503834329': 'cornrow-straight-back-braids',
  '503949505': 'honey-goddess-braids-kraaifontein',
  '626443480': 'knotless-box-braids-salon',
  '504471966': 'lilac-gel-nails',
  '504988882': 'wig-installation-client-salon',
  '470210928': 'long-straight-wig-glam-lashes',
  '480736690': 'kinky-curly-long-human-hair-wig',
  '746716106': 'honey-finger-wave-pixie-wig',
  '470220772': 'curly-bob-wig-with-bangs',
  '470207968': 'short-curly-pixie-wig',
  '480904796': 'short-curly-pixie-wig-angles',
  '470220007': 'straight-bob-closure-wig',
  '481677992': 'straight-bob-lace-wig',
  '478416646': 'burgundy-99j-bob-wig',
  '480215565': 'honey-blonde-highlight-bob-wig',
  '480249072': 'long-straight-lace-frontal-wig',
  '479277698': 'brown-straight-lace-front-wig',
  '479454879': 'long-deep-wave-lace-wig',
  '480358465': 'blonde-613-straight-lace-wig',
  '480401928': 'kinky-straight-long-lace-wig',
  '480835578': '360-lace-straight-wig',
  '480712258': 'black-pixie-cut-wig',
  '481449562': 'bob-wig-bangs-happy-client',
  '481260689': 'curly-highlight-wig-client',
  '480580766': 'curly-wig-client-selfie',
  '480701045': 'long-curly-wig-client',
  '482014898': 'sleek-ponytail-client',
  '480353419': 'straight-bundles-4x4-closure-13a',
  '477803616': 'long-straight-human-hair-bundles',
  '481203832': 'kinky-curly-frontal-and-bang-bob-wigs',
};

const manifest = {};

await mkdir(OUT, {recursive: true});

for (const [prefix, slug] of Object.entries(MAP)) {
  const {readdir} = await import('node:fs/promises');
  const file = (await readdir(SRC)).find((f) => f.startsWith(prefix));
  if (!file) throw new Error(`No source photo for ${prefix}`);
  const input = path.join(SRC, file);
  const meta = await sharp(input).metadata();
  manifest[slug] = {w: meta.width, h: meta.height};
  for (const w of WIDTHS) {
    await sharp(input)
      .rotate()
      .resize({width: w, withoutEnlargement: true})
      .webp({quality: 78, effort: 5})
      .toFile(path.join(OUT, `${slug}-${w}.webp`));
  }
  console.log('✓', slug);
}

// Logo (kept as the brand's own artwork) + social share card + icons.
const logo = path.join(SRC, 'logo.jpg');
await sharp(logo).resize(600).webp({quality: 85}).toFile(path.join(OUT, 'mimie-x-eyecandy-logo-600.webp'));
await sharp(logo).resize(600).jpeg({quality: 85}).toFile(path.join(OUT, 'mimie-x-eyecandy-logo.jpg'));
const logoForCard = await sharp(logo).resize(560).toBuffer();
await sharp({create: {width: 1200, height: 630, channels: 3, background: '#15100a'}})
  .composite([{input: logoForCard, top: 35, left: 320}])
  .jpeg({quality: 86})
  .toFile('public/og-image.jpg');
await sharp(logo).resize(180).png().toFile('public/apple-touch-icon.png');
await sharp(logo).resize(512).png().toFile('public/icon-512.png');
await sharp(logo).resize(192).png().toFile('public/icon-192.png');

await writeFile('src/media-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log('Wrote src/media-manifest.json');
