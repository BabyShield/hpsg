import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { tier1Areas } from "@/lib/matrix";

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <p className="font-display text-7xl font-medium text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium sm:text-6xl">Page not found</h1>
      <p className="mt-6 max-w-measure text-lg leading-relaxed text-grey-700">
        That address is not a page on hpsg.co.uk. These are the services and
        some of the areas we cover.
      </p>
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-grey-500">
            Services
          </h2>
          <ul className="mt-5 flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}/`}
                  className="font-display text-2xl font-medium text-navy hover:text-gold"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-grey-500">
            Areas
          </h2>
          <ul className="mt-5 flex flex-col gap-2 text-navy">
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
      <p className="mt-16">
        <Link href="/" className="btn-line text-navy">
          Return to the homepage
        </Link>
      </p>
    </Container>
  );
}
