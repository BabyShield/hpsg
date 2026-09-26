"use client";

import Link from "next/link";
import { useState } from "react";
import { enquiryHref } from "@/lib/enquiry-links";

type Group = { slug: string; name: string; services: { slug: string; name: string }[] };

export function ServiceFinder({ groups }: { groups: Group[] }) {
  const [query, setQuery] = useState("");
  const words = query.toLocaleLowerCase("en-GB").trim().split(/\s+/).filter(Boolean);
  const results = groups.flatMap((group) => group.services.map((service) => ({ ...service, group })));
  const matching = words.length ? results.filter((service) => {
    const haystack = `${service.name} ${service.group.name}`.toLocaleLowerCase("en-GB");
    return words.every((word) => haystack.includes(word));
  }) : [];

  return (
    <section aria-labelledby="find-service" className="mt-12 max-w-3xl border-t border-gold/40 pt-8">
      <h2 id="find-service" className="font-display text-3xl">Find a service</h2>
      <label htmlFor="service-search" className="mt-5 block text-sm text-grey-700">Search by the work you need</label>
      <input id="service-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} maxLength={100} placeholder="For example: loft, boiler or flooring" className="mt-3 w-full border border-grey-300 bg-white px-4 py-3 text-base focus:outline-2 focus:outline-gold" aria-describedby="service-search-status" />
      <p id="service-search-status" role="status" className="mt-3 text-sm text-grey-600">{words.length ? `${matching.length} matching ${matching.length === 1 ? "service" : "services"}.` : "Or browse the categories below."}</p>
      {words.length ? <ul className="mt-5 divide-y divide-grey-200">
        {matching.map((service) => <li key={service.slug} className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div><Link className="quiet-link text-navy" href={`/other-services/${service.group.slug}/#${service.slug}`}>{service.name}</Link><p className="mt-1 text-xs text-grey-600">{service.group.name}</p></div>
          <Link className="quiet-link text-sm" href={enquiryHref(service.slug)} aria-label={`Enquire about ${service.name.toLowerCase()}`}>Enquire</Link>
        </li>)}
      </ul> : null}
      {words.length && !matching.length ? <p className="mt-4 text-sm">Try a shorter search, browse the categories below or <Link className="quiet-link" href="/contact/">describe the work to us</Link>.</p> : null}
    </section>
  );
}
