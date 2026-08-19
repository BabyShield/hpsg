import Link from "next/link";

import { Container } from "../ui/Container";

const placeholders = [1, 2, 3] as const;

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <Container>
        <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
        <h2 className="text-3xl">Selected work</h2>
        <p className="mt-4 max-w-measure text-base text-grey-700">
          Case studies will be published from supplied project summaries. We do
          not invent projects, clients or addresses. [TBC: 6 HR project
          summaries and photographs]
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {placeholders.map((slot) => (
            <li key={slot}>
              <Link
                href="/projects/"
                className="block border border-grey-200 bg-grey-50 p-8 hover:border-gold"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-grey-600">
                  Project {slot}
                </p>
                <p className="mt-4 text-base text-navy">
                  Placeholder for a forthcoming case study.
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
