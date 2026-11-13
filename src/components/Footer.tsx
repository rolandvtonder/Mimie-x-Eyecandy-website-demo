import {menuPages, pages} from '../content/pages';
import {services} from '../content/services';
import {useFitText} from '../hooks/useFitText';
import {bookText, fullAddress, hoursLines, site, wa, withBase} from '../site';
import {Clock, Facebook, Instagram, Mail, Phone, Pin, WhatsApp} from './Icons';

/** Footer with name / address / phone (the trio local search relies on), every page and service, and socials. */
export function Footer() {
  const mark = useFitText<HTMLSpanElement>();
  const hours = hoursLines();

  return (
    <footer className="relative border-t border-gold/20 bg-ink pt-20 pb-28 md:pb-24">
      <div className="mx-auto max-w-[1680px] px-5 md:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="caps text-gold">Visit the salon</h2>
            <address className="mt-4 space-y-3 text-[15px] leading-relaxed text-pearl/80 not-italic">
              <a href={site.mapsUrl} target="_blank" rel="noopener" className="flex gap-3 hover:text-gold-light">
                <Pin className="mt-0.5 size-5 shrink-0 text-gold" />
                <span>
                  {site.name}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.suburb}, {site.address.city}, {site.address.postal}
                </span>
              </a>
              <p className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                <span>{hours ? hours.map((h) => <span key={h} className="block">{h}</span>) : 'By appointment — WhatsApp us for today’s slots'}</span>
              </p>
            </address>
          </div>

          <div>
            <h2 className="caps text-gold">Book & ask</h2>
            <ul className="mt-4 space-y-1 text-[15px] text-pearl/80">
              <li>
                <a href={wa(bookText())} target="_blank" rel="noopener" className="flex min-h-11 items-center gap-3 hover:text-gold-light">
                  <WhatsApp className="size-5 text-gold" /> WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone2.e164}`} className="flex min-h-11 items-center gap-3 hover:text-gold-light">
                  <Phone className="size-5 text-gold" /> Call {site.phone2.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-3 break-all hover:text-gold-light">
                  <Mail className="size-5 shrink-0 text-gold" /> {site.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="caps text-gold">Explore</h2>
            <ul className="mt-4 grid grid-cols-1 text-[15px] text-pearl/80">
              {menuPages.map((id) => (
                <li key={id}>
                  <a href={withBase(pages[id].path)} className="inline-flex min-h-10 items-center hover:text-gold-light">
                    {pages[id].menu}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="caps text-gold">Services</h2>
            <ul className="mt-4 text-[15px] text-pearl/80">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={withBase(`/services/#${s.id}`)} className="inline-flex min-h-10 items-center hover:text-gold-light">
                    {s.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={withBase('/wigs/')} className="inline-flex min-h-10 items-center hover:text-gold-light">
                  Human hair wigs & bundles
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={site.instagram.url} target="_blank" rel="noopener" aria-label={`Instagram ${site.instagram.handle}`} className="grid size-12 place-items-center border border-pearl/20 text-pearl/80 hover:border-gold hover:text-gold">
                <Instagram className="size-5" />
              </a>
              <a href={site.facebook.url} target="_blank" rel="noopener" aria-label="Facebook" className="grid size-12 place-items-center border border-pearl/20 text-pearl/80 hover:border-gold hover:text-gold">
                <Facebook className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-3xl text-[14px] leading-relaxed text-pearl/55">
          {site.name} is a beauty salon and wig boutique in {site.address.suburb}, {site.address.city}, offering braids, knotless and box braids,
          straight-back cornrows, gel nails, cluster lashes, hair washes, wig installation and revamps, and Eye Candy human hair wigs and bundles. We
          welcome clients from {site.areas.slice(1, -1).join(', ')} and {site.areas[site.areas.length - 1]}.
        </p>

        <div className="mt-14 overflow-hidden" aria-hidden="true">
          <span ref={mark} className="gold-text inline-block font-mark leading-[0.9] whitespace-nowrap">
            MIMIE X EYECANDY
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[13px] text-pearl/45 md:flex-row md:justify-between">
          <p>
            © {new Date(site.openedOn).getFullYear()} {site.name} · {site.alternateName} · {fullAddress}
          </p>
          <p>{site.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
