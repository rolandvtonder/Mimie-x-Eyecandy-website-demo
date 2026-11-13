# Mimie X Eyecandy — website

Six-page site for the salon at 65 Brighton Road, Kraaifontein: Home, Services & prices, Wig shop, Classes & reseller, Reviews & gallery, Contact & booking.

## Run it

```bash
npm install
npm run dev        # local preview while editing
npm run build      # production site in dist/ (pre-rendered HTML, sitemap, robots.txt)
npm run preview    # serve the built site
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, cPanel hosting).

## Where to edit

| What | File |
| --- | --- |
| Domain, phone numbers, email, address, **opening hours**, socials | `src/site.ts` |
| Page titles & Google descriptions | `src/content/pages.ts` |
| Salon price list | `src/content/services.ts` |
| Wigs, bundle prices, lace guide, wig care | `src/content/wigs.ts` |
| Class, reseller program, reviews, FAQs, gallery, home copy | `src/content/more.ts` |

Adding photos: drop the JPG into `media/`, give it a name in `scripts/optimize-images.mjs`, then run `npm run images`.

## Before going live

1. Set your real domain in `src/site.ts` (`url`). It's used for canonical links, the sitemap and share cards.
2. Add your opening hours in `src/site.ts` (`hours`). Until then the site says "by appointment".
3. Check the prices in `src/content/services.ts` and `src/content/wigs.ts`.
4. Submit `https://<your-domain>/sitemap.xml` in Google Search Console, and claim your Google Business Profile at the same address.

## Demo on GitHub Pages

Every push to `main` builds the site and publishes it with `.github/workflows/deploy.yml`.
One-time setup: on GitHub open **Settings → Pages** and set **Source** to **GitHub Actions**.
The demo lives at `https://<user>.github.io/<repo>/`. To build for a sub-folder locally, set `BASE_PATH=/<repo>/` before `npm run build`.
