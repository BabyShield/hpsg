import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getOtherServiceGroup, otherServiceGroups } from "@/data/other-services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return otherServiceGroups.map((group) => ({ category: group.slug }));
}
type Props = { params: Promise<{ category: string }> };
export async function generateMetadata({ params }: Props) {
  const group = getOtherServiceGroup((await params).category);
  if (!group) notFound();
  return pageMetadata({title:`${group.name} | Other services | HPSG`, description:group.intro, path:`/other-services/${group.slug}/`});
}
export default async function OtherServiceCategory({ params }: Props) {
  const group = getOtherServiceGroup((await params).category);
  if (!group) notFound();
  return (
    <Container className="py-16 sm:py-24">
      <Breadcrumbs items={[{name:"Home",href:"/"},{name:"Other services",href:"/other-services/"},{name:group.name,href:`/other-services/${group.slug}/`}]} />
      <p className="kicker mt-10">Other services</p>
      <h1 className="mt-5 max-w-4xl font-display text-5xl font-light sm:text-7xl">{group.name}</h1>
      <p className="lede mt-8 max-w-measure text-xl text-grey-600">{group.intro}</p>
      <div className="mt-16 grid gap-x-14 gap-y-10 md:grid-cols-2">
        {group.services.map((service) => (
          <section id={service.slug} key={service.slug} className="scroll-mt-32 border-t border-grey-200 pt-7">
            <h2 className="font-display text-2xl font-normal">{service.name}</h2>
            <p className="mt-4 leading-relaxed text-grey-700">{service.detail}</p>
          </section>
        ))}
      </div>
      <section className="mt-20 border-t border-gold/40 pt-10">
        <h2 className="font-display text-3xl font-normal">What to include in your enquiry</h2>
        <ul className="mt-6 max-w-measure list-disc space-y-3 pl-6 text-grey-700">{group.prepare.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="mt-7 max-w-measure leading-relaxed text-grey-700">Scope, availability and the business responsible for the work are confirmed in a written proposal before an instruction. A listing does not confirm an appointment or a response time.</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link className="btn btn-primary" href="/contact/">Enquire about this work</Link>
          <a className="quiet-link" href={site.whatsappUrl}>WhatsApp {site.whatsappDisplay}</a>
        </div>
      </section>
      <Link className="btn-line mt-14" href="/other-services/">All other services</Link>
    </Container>
  );
}
