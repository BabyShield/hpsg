import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "./Container";

export function PolicyPage({ title, path, revised, sections }: { title: string; path: string; revised: string; sections: { heading: string; paragraphs: string[] }[] }) {
  return <Container className="py-16 sm:py-24">
    <Breadcrumbs items={[{name:"Home",href:"/"},{name:title,href:path}]} />
    <h1 className="mt-10 font-display text-5xl font-light sm:text-6xl">{title}</h1>
    <p className="mt-5 text-sm text-grey-600">Updated {revised}</p>
    <div className="mt-12 max-w-measure space-y-10">{sections.map((section) => <section key={section.heading}><h2 className="font-display text-3xl font-normal text-navy">{section.heading}</h2><div className="mt-5 space-y-5 leading-relaxed text-grey-700">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div>
    <nav className="mt-12 flex flex-wrap gap-6" aria-label="Policies"><Link className="quiet-link" href="/privacy/">Privacy notice</Link><Link className="quiet-link" href="/terms/">Website terms</Link><a className="quiet-link" href="https://ico.org.uk/make-a-complaint/">Contact the ICO</a></nav>
  </Container>;
}
