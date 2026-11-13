/**
 * Business details — the ONE place to edit names, numbers, address, hours and
 * the domain. Everything else (page copy, footer, Google structured data,
 * sitemap, share cards) reads from here.
 */

export type OpeningHours = {
  /** Schema.org day names, e.g. ['Monday', 'Tuesday'] */
  days: string[];
  /** 24h "HH:MM" */
  opens: string;
  closes: string;
};

export const site = {
  name: 'Mimie X Eyecandy',
  alternateName: 'Eye Candy Beautyshop',
  tagline: 'Reveal your inner beauty',

  /**
   * TODO(owner): replace with your real domain before going live.
   * Canonical links, the sitemap, robots.txt and social share cards use it.
   * No trailing slash.
   */
  url: 'https://www.mimiexeyecandy.co.za',

  whatsapp: {display: '073 950 1982', e164: '+27739501982', wa: '27739501982'},
  phone2: {display: '065 101 7695', e164: '+27651017695'},
  email: 'ecboutiquestore@outlook.com',

  address: {
    street: '65 Brighton Road',
    suburb: 'Kraaifontein',
    city: 'Cape Town',
    region: 'Western Cape',
    postal: '7570',
    country: 'ZA',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=65+Brighton+Road%2C+Kraaifontein%2C+7570',
  mapsEmbed: 'https://www.google.com/maps?q=65+Brighton+Road,+Kraaifontein,+7570&output=embed',

  /**
   * TODO(owner): opening hours. Leave as `null` until confirmed — the site
   * then says "by appointment" and Google is not given made-up hours.
   * Example:
   *   [{days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00'},
   *    {days: ['Saturday'], opens: '08:00', closes: '16:00'}]
   */
  hours: null as OpeningHours[] | null,

  instagram: {handle: '@eye_candy_beautyshop', url: 'https://www.instagram.com/eye_candy_beautyshop/'},
  facebook: {handle: 'vmkentreprise', url: 'https://www.facebook.com/vmkentreprise/'},

  /** Suburbs we mention for local search. */
  areas: ['Kraaifontein', 'Brackenfell', 'Durbanville', 'Kuils River', 'Scottsdene', 'Wallacedene', 'Bellville', 'the Northern Suburbs of Cape Town'],

  openedOn: '2026-08-01',
};

declare const __BASE__: string | undefined;

/**
 * Folder the site is served from: "/" on its own domain, or e.g.
 * "/Mimie-x-Eyecandy-website-demo/" on GitHub Pages. Set with BASE_PATH at build time.
 */
export const BASE: string =
  typeof __BASE__ !== 'undefined' ? __BASE__ : ((globalThis as {process?: {env: Record<string, string | undefined>}}).process?.env.BASE_PATH ?? '/');

/** Prefix a root-relative path ("/services/") with the base folder. */
export const withBase = (p: string) => (p.startsWith('/') ? BASE + p.slice(1) : p);

export const fullAddress = `${site.address.street}, ${site.address.suburb}, ${site.address.city}, ${site.address.postal}`;

/** WhatsApp click-to-chat link with an optional pre-filled message. */
export const wa = (text?: string) =>
  `https://wa.me/${site.whatsapp.wa}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const bookText = (what?: string) =>
  what ? `Hi Mimie X Eyecandy! I'd like to book: ${what}. When do you have a slot?` : `Hi Mimie X Eyecandy! I'd like to book an appointment.`;

const DAY_SHORT: Record<string, string> = {
  Monday: 'Mon', Tuesday: 'Tue', Wednesday: 'Wed', Thursday: 'Thu', Friday: 'Fri', Saturday: 'Sat', Sunday: 'Sun',
};

/** Human-readable hours lines, or null while hours are unconfirmed. */
export function hoursLines(): string[] | null {
  if (!site.hours) return null;
  return site.hours.map((h) => {
    const d = h.days.map((x) => DAY_SHORT[x] ?? x);
    const days = d.length > 2 ? `${d[0]}–${d[d.length - 1]}` : d.join(' & ');
    return `${days} · ${h.opens}–${h.closes}`;
  });
}
