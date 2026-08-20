import { publicCopy } from "@/lib/public-copy";

import { Container } from "./Container";

export function LocalFacts({
  areaName,
  facts,
}: {
  areaName: string;
  facts: string[];
}) {
  const visible = facts.map((fact) => publicCopy(fact)).filter(Boolean);
  if (visible.length === 0) return null;

  return (
    <section className="border-y border-grey-200 py-20 sm:py-28">
      <Container>
        <h2 className="font-display text-4xl font-medium sm:text-5xl">
          Ten facts about {areaName}
        </h2>
        <p className="mt-5 max-w-measure text-base leading-relaxed text-grey-700">
          Checkable local facts that shape access, conservation and the building
          — not marketing copy.
        </p>
        <ol className="mt-12 divide-y divide-grey-200 border-y border-grey-200">
          {visible.map((fact, index) => (
            <li key={fact} className="grid grid-cols-[auto_1fr] gap-6 py-5 sm:gap-10">
              <span className="font-display text-2xl text-gold">
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
