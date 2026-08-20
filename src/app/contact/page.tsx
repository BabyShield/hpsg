import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { areas } from "@/data/areas";
import { officeNeighbourhood, photoCredit } from "@/data/photos";
import { services } from "@/data/services";
import { addressSingleLine, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Hampstead Property Services Group. ${site.phoneDisplay}, ${site.email}, ${addressSingleLine}.`,
};

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${site.geo.longitude - 0.01}%2C${site.geo.latitude - 0.006}%2C${site.geo.longitude + 0.01}%2C${site.geo.latitude + 0.006}&layer=mapnik&marker=${site.geo.latitude}%2C${site.geo.longitude}`;

export default function ContactPage() {
  const formAction = site.formEndpoint ?? `mailto:${site.email}`;

  return (
    <Container className="py-16 sm:py-20">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact/" },
        ]}
      />
      <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
      <h1 className="text-4xl sm:text-5xl">Contact</h1>
      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <div>
          <address className="max-w-measure text-base not-italic text-grey-700">
            <p>
              <a href={`tel:${site.phoneTel}`} className="text-navy hover:text-gold">
                {site.phoneDisplay}
              </a>
            </p>
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
            <p className="mt-4">Opening hours: {site.openingHours}</p>
          </address>
          <div className="mt-8">
            <ContentImage
              photo={officeNeighbourhood}
              className="w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <p className="mt-2 text-xs text-grey-600">{photoCredit}</p>
          </div>
          <div className="mt-8 aspect-[4/3] w-full border border-grey-200">
            <iframe
              title="Map of Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-xs text-grey-600">
            Map marker [VERIFY coords for 250 Finchley Road].{" "}
            <a
              href={`https://www.openstreetmap.org/?mlat=${site.geo.latitude}&mlon=${site.geo.longitude}#map=17/${site.geo.latitude}/${site.geo.longitude}`}
              className="underline"
            >
              View larger map
            </a>
          </p>
        </div>
        <form action={formAction} method={site.formEndpoint ? "post" : "get"} className="space-y-4">
          <p className="text-sm text-grey-600">
            {site.formEndpoint
              ? "Send an enquiry."
              : "Form endpoint is not yet configured. This form currently opens an email to contact@hpsg.co.uk. [TBC: form endpoint]"}
          </p>
          <label className="block text-sm text-navy">
            Name
            <input
              required
              name="name"
              className="mt-1 w-full border border-grey-300 bg-bone px-3 py-2 text-base text-ink"
            />
          </label>
          <label className="block text-sm text-navy">
            Email
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full border border-grey-300 bg-bone px-3 py-2 text-base text-ink"
            />
          </label>
          <label className="block text-sm text-navy">
            Phone
            <input
              name="phone"
              className="mt-1 w-full border border-grey-300 bg-bone px-3 py-2 text-base text-ink"
            />
          </label>
          <label className="block text-sm text-navy">
            Area
            <select
              name="area"
              className="mt-1 w-full border border-grey-300 bg-bone px-3 py-2 text-base text-ink"
              defaultValue=""
            >
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
            <select
              name="service"
              className="mt-1 w-full border border-grey-300 bg-bone px-3 py-2 text-base text-ink"
              defaultValue=""
            >
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
            <textarea
              required
              name="message"
              rows={6}
              className="mt-1 w-full border border-grey-300 bg-bone px-3 py-2 text-base text-ink"
            />
          </label>
          <button
            type="submit"
            className="bg-navy px-6 py-3 text-sm font-medium tracking-wide text-bone"
          >
            Send enquiry
          </button>
        </form>
      </div>
    </Container>
  );
}
