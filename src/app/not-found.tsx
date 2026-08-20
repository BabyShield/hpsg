import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { tier1Areas } from "@/lib/matrix";

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <p className="font-display text-7xl font-light text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl font-light sm:text-6xl">Page not found</h1>
      <p className="mt-6 max-w-measure text-lg leading-relaxed text-grey-700">
        That address is not a page on hpsg.co.uk. These are the services we
        take on, and some of the neighbourhoods we cover from the Hampstead
        office.
      </p>
      <ul className="mosaic mt-16 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug} className="min-h-[14rem]">
            <ServiceCard service={service} className="h-full min-h-[14rem]" />
          </li>
        ))}
      </ul>
      <div className="mt-16">
        <h2 className="kicker">
          Areas
        </h2>
        <ul className="mt-5 flex flex-col gap-2 text-navy sm:columns-2">
          {tier1Areas()
            .slice(0, 10)
            .map((area) => (
              <li key={area.slug} className="break-inside-avoid">
                <Link href={`/areas/${area.slug}/`} className="quiet-link">
                  {area.name} {area.postcode}
                </Link>
              </li>
            ))}
          <li className="break-inside-avoid">
            <Link href="/areas/" className="quiet-link">
              All areas
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-16">
        <Link href="/" className="btn-line text-navy">
          Return to the homepage
        </Link>
      </p>
    </Container>
  );
}
