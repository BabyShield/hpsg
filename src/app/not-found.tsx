import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { tier1Areas } from "@/lib/matrix";

export default function NotFound() {
  return (
    <Container className="py-16 sm:py-20">
      <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
      <h1 className="text-4xl sm:text-5xl">Page not found</h1>
      <p className="mt-6 max-w-measure text-lg text-grey-700">
        That address is not a page on hpsg.co.uk. These are the services and
        some of the areas we cover.
      </p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
            Services
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-navy">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}/`} className="hover:text-gold">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-grey-600">
            Areas
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-navy">
            {tier1Areas()
              .slice(0, 8)
              .map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}/`} className="hover:text-gold">
                    {area.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/areas/" className="hover:text-gold">
                All areas
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-12">
        <Link href="/" className="text-navy underline decoration-gold underline-offset-4">
          Return to the homepage
        </Link>
      </p>
    </Container>
  );
}
