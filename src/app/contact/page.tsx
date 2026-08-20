import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { areas } from "@/data/areas";
import { officeNeighbourhood } from "@/data/photos";
import { services } from "@/data/services";
import { addressSingleLine, site } from "@/data/site";
import { isDraftToken } from "@/lib/public-copy";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Hampstead Property Services Group. ${site.phoneDisplay}, ${site.email}, ${addressSingleLine}.`,
};

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${site.geo.longitude - 0.01}%2C${site.geo.latitude - 0.006}%2C${site.geo.longitude + 0.01}%2C${site.geo.latitude + 0.006}&layer=mapnik&marker=${site.geo.latitude}%2C${site.geo.longitude}`;

const fieldClass = "field";

export default function ContactPage() {
  const formAction = site.formEndpoint ?? `mailto:${site.email}`;

  return (
    <>
      <Container className="pt-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact/" },
          ]}
        />
      </Container>
      <Container className="grid gap-12 pb-20 sm:pb-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-5 h-px w-12 bg-gold" aria-hidden="true" />
          <h1 className="font-display text-5xl font-medium sm:text-6xl">Contact</h1>
          <p className="mt-6 max-w-measure text-base leading-relaxed text-grey-700">
            Tell us about the property and the rooms in scope. We visit before we
            write a proposal.
          </p>
          <p className="mt-10 font-display text-4xl font-medium text-navy">
            <a href={`tel:${site.phoneTel}`} className="hover:text-gold">
              {site.phoneDisplay}
            </a>
          </p>
          <address className="mt-8 text-base not-italic leading-relaxed text-grey-700">
            <p>
              <a href={`mailto:${site.email}`} className="text-navy hover:text-gold">
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
        <form
          action={formAction}
          method={site.formEndpoint ? "post" : "get"}
          className="space-y-7 lg:col-span-7 lg:pt-16"
        >
          <p className="text-sm text-grey-600">
            {site.formEndpoint
              ? "Send an enquiry."
              : "The form opens an email to contact@hpsg.co.uk."}
          </p>
          <label className="block text-sm text-navy">
            Name
            <input required name="name" className={fieldClass} />
          </label>
          <label className="block text-sm text-navy">
            Email
            <input required type="email" name="email" className={fieldClass} />
          </label>
          <label className="block text-sm text-navy">
            Phone
            <input name="phone" className={fieldClass} />
          </label>
          <label className="block text-sm text-navy">
            Area
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
          <label className="block text-sm text-navy">
            Service
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
          <label className="block text-sm text-navy">
            Message
            <textarea required name="message" rows={5} className={fieldClass} />
          </label>
          <button type="submit" className="btn btn-primary">
            Send enquiry
          </button>
        </form>
      </Container>
    </>
  );
}
