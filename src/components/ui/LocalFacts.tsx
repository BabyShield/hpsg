import { publicCopy } from "@/lib/public-copy";

import { Container } from "./Container";

export function LocalFacts({
  areaName,
  facts,
  heading,
  lede,
}: {
  areaName: string;
  facts: string[];
  heading?: string;
  lede?: string;
}) {
  const visible = facts.map((fact) => publicCopy(fact)).filter(Boolean);
  if (visible.length === 0) return null;

  return (
    <section className="border-y border-grey-200 py-24 sm:py-32">
      <Container>
        <p className="rule mb-8" aria-hidden="true" />
        <h2 className="font-display text-4xl font-normal sm:text-5xl">
          {heading ?? `Ten facts about ${areaName}`}
        </h2>
        <p className="lede mt-6 max-w-xl text-xl text-grey-600 md:text-2xl">
          {lede ?? "Checkable local facts that shape access, conservation and the building."}
        </p>
        <ol className="mt-16 grid gap-x-20 gap-y-12 md:grid-cols-2">
          {visible.map((fact, index) => (
            <li key={fact} className="grid grid-cols-[auto_1fr] items-start gap-5">
              <span className="font-display text-3xl leading-none text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-grey-700">{fact}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
