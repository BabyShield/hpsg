import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({title:"HPSG main and other services",description:"How the main HPSG services and wider Other services catalogue fit together.",path:"/group/"});
export default function GroupPage() {
  return <Container className="py-16 sm:py-24">
    <Breadcrumbs items={[{name:"Home",href:"/"},{name:"Group",href:"/group/"}]} />
    <h1 className="mt-10 max-w-4xl font-display text-5xl font-light sm:text-6xl">One main website, a wider service catalogue</h1>
    <p className="lede mt-8 max-w-measure text-xl text-grey-600">hpsg.co.uk is the main website for Hampstead Property Services Group. Kitchens, bathrooms, painting and light refurbishment remain the main services. The wider catalogue sits under Other services.</p>
    <section className="mt-14 border-t border-gold/40 pt-8"><h2 className="font-display text-3xl font-normal">Main services</h2><ul className="mt-6 space-y-3">{services.map((service)=><li key={service.slug}><Link className="quiet-link" href={`/${service.slug}/`}>{service.name}</Link></li>)}</ul></section>
    <section className="mt-14 border-t border-gold/40 pt-8"><h2 className="font-display text-3xl font-normal">Other services</h2><p className="mt-5 max-w-measure leading-relaxed text-grey-700">Building projects, design and planning, joinery, finishes, building services, maintenance and outdoor work are grouped by the type of enquiry. Each category explains what information helps define the requirement.</p><Link className="btn-line mt-6" href="/other-services/">Explore Other services</Link></section>
    <section className="mt-14 border-t border-gold/40 pt-8"><h2 className="font-display text-3xl font-normal">Who is responsible for the work?</h2><p className="mt-5 max-w-measure leading-relaxed text-grey-700">{site.legalName}, company number {site.companyNumber}, operates this website. The written proposal for a particular job identifies the business responsible, the scope and any specialist appointments before you instruct work. A service listing does not itself confirm an appointment.</p><Link className="quiet-link mt-6 inline-block" href="/terms/">Read the website terms</Link></section>
  </Container>;
}
