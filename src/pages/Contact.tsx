import {BookBand, Faqs, Heading, Section} from '../components/Blocks';
import {Hero} from '../components/Hero';
import {Clock, Facebook, Instagram, Mail, Phone, Pin, WhatsApp} from '../components/Icons';
import {faqs} from '../content/more';
import {services} from '../content/services';
import {useReveals} from '../hooks/useReveals';
import {bookText, hoursLines, site, wa, withBase} from '../site';

export function Contact() {
  const ref = useReveals<HTMLDivElement>();
  const hours = hoursLines();

  const rows = [
    {icon: WhatsApp, label: 'WhatsApp bookings', value: site.whatsapp.display, href: wa(bookText()), ext: true},
    {icon: Phone, label: 'Call us', value: site.phone2.display, href: `tel:${site.phone2.e164}`},
    {icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`},
    {icon: Instagram, label: 'Instagram', value: site.instagram.handle, href: site.instagram.url, ext: true},
    {icon: Facebook, label: 'Facebook', value: 'facebook.com/vmkentreprise', href: site.facebook.url, ext: true},
  ];

  return (
    <div ref={ref}>
      <Hero
        page="contact"
        eyebrow="Contact & booking — 65 Brighton Road, Kraaifontein"
        lines={[{t: 'Book your'}, {t: 'chair.', i: true}]}
        body="WhatsApp is the quickest way to book. Tell us the service you want, send a picture of your inspiration and we will reply with your price and the next available slot."
        ctas={[
          {label: 'WhatsApp 073 950 1982', href: wa(bookText()), external: true},
          {label: 'Get directions', href: site.mapsUrl, kind: 'line', external: true},
        ]}
      />

      <Section tone="light" labelledBy="contact-title">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Heading kicker="Get in touch" id="contact-title" lines={[{t: 'We would love'}, {t: 'to see you.', i: true}]} />
            <address className="mt-10 not-italic" data-reveal>
              <p className="flex gap-4 text-[18px] leading-relaxed">
                <Pin className="mt-1 size-6 shrink-0 text-gold-deep" />
                <span>
                  <strong className="font-semibold">{site.name}</strong>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.suburb}, {site.address.city}
                  <br />
                  {site.address.region}, {site.address.postal}
                </span>
              </p>
              <p className="mt-6 flex gap-4 text-[17px] leading-relaxed">
                <Clock className="mt-1 size-6 shrink-0 text-gold-deep" />
                <span>{hours ? hours.map((h) => <span key={h} className="block">{h}</span>) : 'By appointment — WhatsApp us to check today’s availability.'}</span>
              </p>
              <ul className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
                {rows.map((r) => (
                  <li key={r.label}>
                    <a href={r.href} {...(r.ext ? {target: '_blank', rel: 'noopener'} : {})} className="group flex min-h-16 items-center gap-4 py-4 hover:text-gold-deep">
                      <r.icon className="size-6 shrink-0 text-gold-deep" />
                      <span className="caps w-40 shrink-0 text-ink/60 max-sm:hidden">{r.label}</span>
                      <span className="font-display text-[22px] break-all sm:text-[24px]">
                        <span className="sr-only sm:hidden">{r.label}: </span>
                        {r.value}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>

          <div data-reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-champagne lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <iframe
                title={`Map showing ${site.name} at ${site.address.street}, ${site.address.suburb}`}
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.4] sepia-[0.25]"
              />
            </div>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="caps mt-4 inline-flex min-h-11 items-center gap-2 text-gold-deep hover:underline">
              Open in Google Maps
            </a>
          </div>
        </div>
      </Section>

      <Section labelledBy="what-title">
        <Heading kicker="Booking a specific service?" id="what-title" lines={[{t: 'Tap to'}, {t: 'start a booking.', i: true}]} />
        <ul className="mt-12 grid gap-[3px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.id} data-reveal style={{['--d' as string]: `${(i % 3) * 0.06}s`}}>
              <a href={wa(bookText(s.name))} target="_blank" rel="noopener" className="group flex min-h-28 items-center justify-between gap-4 bg-ink-2 p-7 hover:bg-ink-3">
                <span className="font-display text-[28px] leading-tight">{s.name}</span>
                <WhatsApp className="size-6 shrink-0 text-gold transition-transform group-hover:scale-110" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[64ch] text-[16px] leading-[1.75] text-pearl/75" data-reveal>
          We welcome clients from across Cape Town’s Northern Suburbs — {site.areas.slice(0, -1).join(', ')} and {site.areas[site.areas.length - 1]}. Wig
          orders can be collected at the salon or delivered.
        </p>
      </Section>

      <Section tone="ink2" labelledBy="contact-faq-title">
        <Faqs items={faqs.contact} id="contact-faq" />
      </Section>

      <BookBand />
    </div>
  );
}

export function NotFound() {
  return (
    <Hero
      page="notfound"
      tall
      eyebrow="404 — page not found"
      lines={[{t: 'Lost your'}, {t: 'way?', i: true}]}
      body="The page you were looking for has moved. Start again from the home page, browse our services and prices, or message us on WhatsApp."
      ctas={[
        {label: 'Back to home', href: withBase('/')},
        {label: 'Services & prices', href: withBase('/services/'), kind: 'line'},
      ]}
    />
  );
}
