import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { areas } from "@/data/areas";
import { officeNeighbourhood } from "@/data/photos";
import { services } from "@/data/services";
import { addressSingleLine, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, contactPageSchema } from "@/lib/schema";
import { isDraftToken } from "@/lib/public-copy";

export const metadata = pageMetadata({
  title: "Contact HPSG | Quotes in North West London",
  description: `Request a quote for kitchen, bathroom, painting or light refurbishment work in North West London. ${site.phoneDisplay}. Finchley Road, NW3.`,
  path: "/contact/",
  image: officeNeighbourhood.src,
  imageAlt: officeNeighbourhood.alt,
});

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${site.geo.longitude - 0.01}%2C${site.geo.latitude - 0.006}%2C${site.geo.longitude + 0.01}%2C${site.geo.latitude + 0.006}&layer=mapnik&marker=${site.geo.latitude}%2C${site.geo.longitude}`;

const fieldClass = "field";

export default function ContactPage() {
  const formAction = site.formEndpoint ?? `mailto:${site.email}`;

  return (
    <>
      <JsonLd
        data={contactPageSchema(
          absoluteUrl("/contact/"),
          `Contact ${site.tradingName}`,
          `Request a quote for kitchen renovation, bathroom renovation, painting and decorating or light refurbishment in North West London. ${site.phoneDisplay}.`,
        )}
      />
      <Container className="pt-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact/" },
          ]}
        />
      </Container>
      <Container className="grid gap-16 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="rule mb-8" aria-hidden="true" />
          <h1 className="font-display text-5xl font-light sm:text-6xl">Contact</h1>
          <p className="lede mt-8 max-w-measure text-xl text-grey-600">
            Request a quote for kitchen renovation, bathroom renovation, painting
            or light refurbishment in Hampstead and North West London.
          </p>
          <div className="mt-6 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
            <p>
              Tell us the property and the rooms in scope. We visit before we
              write a proposal. Photographs help us prepare; they are not a
              quotation. The office is at {addressSingleLine}, a short run from
              Hampstead, Belsize Park and Swiss Cottage.
            </p>
            <p>
              Useful in the message: the address, whether it is a conversion,
              mansion flat or house, kitchen and/or bathroom, whether you are
              staying, and whether a managing agent or freeholder is involved.
            </p>
          </div>
          <p className="mt-12 font-display text-4xl font-light text-navy sm:text-5xl">
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          </p>
          <address className="mt-8 text-base not-italic leading-relaxed text-grey-700">
            <p>
              <a href={`mailto:${site.email}`} className="quiet-link text-navy">
                {site.email}
              </a>
            </p>
            <p className="mt-4">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.postcode}
            </p>
            {isDraftToken(site.openingHours) ? null : (
              <p className="mt-4">Opening hours: {site.openingHours}</p>
            )}
          </address>
          <ContentImage
            photo={officeNeighbourhood}
            className="mt-10 aspect-[4/3] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="mt-3 aspect-[16/9] w-full overflow-hidden bg-grey-100">
            <iframe
              title="Map of Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-xs text-grey-600">
            Map of {site.address.postcode}.{" "}
            <a
              href={`https://www.openstreetmap.org/?mlat=${site.geo.latitude}&mlon=${site.geo.longitude}#map=17/${site.geo.latitude}/${site.geo.longitude}`}
              className="underline decoration-gold underline-offset-4"
            >
              View larger map
            </a>
          </p>
        </div>

        <div className="space-y-14 lg:col-span-12">
          <section>
            <h2 className="font-display text-3xl font-normal sm:text-4xl">
              What to include in an enquiry
            </h2>
            <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
              None of this is required to make contact, but it shortens the route
              to a useful visit.
            </p>
            <ul className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
              {[
                "The address, or at least the street and postcode.",
                "Whether it is a conversion flat, a mansion flat or a house.",
                "The rooms in scope — a kitchen, a bathroom, decoration, or a whole flat.",
                "Whether you will be staying in the property while the work runs.",
                "Whether a freeholder or managing agent has to consent to the work.",
                "Anything already drawn, specified or ordered.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-base leading-relaxed text-grey-700"
                >
                  <span className="mt-3 h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl font-normal sm:text-4xl">
              How quoting works
            </h2>
            <div className="mt-5 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
              <p>
                We visit, then write a proposal against a defined scope. There is
                no price list on this site and no figure from photographs: the
                room as found, the access, the extract route, the tenure and any
                conservation or freeholder process change the work too much for a
                standard price to mean anything.
              </p>
              <p>
                The proposal sets out the scope, the specification and a
                programme. Items that depend on what is found once the room is
                opened up are listed as provisional rather than buried in a single
                figure. Variations after that are written, not verbal.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-normal sm:text-4xl">
              Where we work
            </h2>
            <div className="mt-5 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
              <p>
                North West London, across Camden, Westminster, Barnet and
                Haringey, worked from the Finchley Road office. The neighbourhood
                pages set out what the housing stock means in practice — for
                example{" "}
                <Link href="/kitchen-renovation/hampstead/" className="quiet-link text-navy">
                  kitchen renovation in Hampstead NW3
                </Link>
                ,{" "}
                <Link href="/bathroom-renovation/st-johns-wood/" className="quiet-link text-navy">
                  bathroom renovation in St John&rsquo;s Wood NW8
                </Link>{" "}
                and{" "}
                <Link href="/light-refurbishment/west-hampstead/" className="quiet-link text-navy">
                  light refurbishment in West Hampstead NW6
                </Link>
                .
              </p>
              <p>
                The full list is on the{" "}
                <Link href="/areas/" className="quiet-link text-navy">
                  areas we cover
                </Link>{" "}
                page. If the property sits just outside it, contact us and we will
                say whether we can take it on rather than guess.
              </p>
            </div>
          </section>
        </div>
        <form
          action={formAction}
          method={site.formEndpoint ? "post" : "get"}
          className="space-y-8 border-t border-gold/50 pt-10 lg:col-span-7 lg:border-t-0 lg:border-l lg:border-gold/40 lg:pl-14 lg:pt-20"
        >
          <p className="kicker">Enquiry</p>
          <p className="text-sm text-grey-600">
            {site.formEndpoint
              ? "Send an enquiry."
              : "The form opens an email to contact@hpsg.co.uk."}
          </p>
          <label className="block">
            <span className="kicker text-navy">Name</span>
            <input required name="name" className={fieldClass} />
          </label>
          <label className="block">
            <span className="kicker text-navy">Email</span>
            <input required type="email" name="email" className={fieldClass} />
          </label>
          <label className="block">
            <span className="kicker text-navy">Phone</span>
            <input name="phone" className={fieldClass} />
          </label>
          <label className="block">
            <span className="kicker text-navy">Area</span>
            <select name="area" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select an area
              </option>
              {areas.map((area) => (
                <option key={area.slug} value={area.slug}>
                  {area.name} {area.postcode}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="kicker text-navy">Service</span>
            <select name="service" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="kicker text-navy">Message</span>
            <textarea required name="message" rows={5} className={fieldClass} />
          </label>
          <p className="text-sm leading-relaxed text-grey-600">
            After we receive the enquiry we will contact you to arrange a visit.
            We do not send a price from photographs. Enquiry details are used
            only to respond; see the{" "}
            <Link href="/privacy/" className="underline decoration-gold underline-offset-4">
              privacy notice
            </Link>
            .
          </p>
          <button type="submit" className="btn btn-primary">
            Send enquiry
          </button>
        </form>
      </Container>
    </>
  );
}
