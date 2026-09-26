import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { otherServiceGroups } from "@/data/other-services";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Other property services | HPSG",
  description: "Explore HPSG's wider property service catalogue, from building projects and joinery to maintenance and outdoor spaces. Enquire about your requirements.",
  path: "/other-services/",
});

export default function OtherServicesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <Breadcrumbs items={[{name:"Home",href:"/"},{name:"Other services",href:"/other-services/"}]} />
      <p className="kicker mt-10">Hampstead Property Services Group</p>
      <h1 className="mt-5 font-display text-5xl font-light sm:text-7xl">Other services</h1>
      <p className="lede mt-8 max-w-measure text-xl text-grey-600">
        The wider HPSG service catalogue. Choose a category to see the work covered
        and what to include in an enquiry. Scope, availability and the business
        responsible for the work are confirmed before an instruction.
      </p>
      <section className="mt-14 border-y border-gold/40 py-8" aria-labelledby="main-services">
        <h2 id="main-services" className="kicker">Our main services</h2>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {services.map((service) => <li key={service.slug}><Link className="quiet-link text-navy" href={`/${service.slug}/`}>{service.name}</Link></li>)}
        </ul>
      </section>
      <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
        {otherServiceGroups.map((group, index) => (
          <section key={group.slug} className="border-t border-grey-200 pt-8">
            <p className="kicker text-gold-deep">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 font-display text-3xl font-normal"><Link className="quiet-link" href={`/other-services/${group.slug}/`}>{group.name}</Link></h2>
            <p className="mt-5 leading-relaxed text-grey-700">{group.intro}</p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-grey-700">
              {group.services.map((service) => <li key={service.slug}><Link className="underline decoration-gold/50 underline-offset-4" href={`/other-services/${group.slug}/#${service.slug}`}>{service.name}</Link></li>)}
            </ul>
          </section>
        ))}
      </div>
      <section className="mt-20 border-t border-gold/40 pt-10">
        <h2 className="font-display text-3xl font-normal">Tell us what you need</h2>
        <p className="mt-5 max-w-measure leading-relaxed text-grey-700">Include the property location and a short description of the work. We can then discuss the appropriate next step and identify the business responsible in the proposal.</p>
        <Link className="btn btn-primary mt-7" href="/contact/">Make an enquiry</Link>
      </section>
    </Container>
  );
}
