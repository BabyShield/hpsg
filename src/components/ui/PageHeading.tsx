import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";

import { Container } from "./Container";
import { EntityRail } from "./EntityRail";

export function PageHeading({
  crumbs,
  kicker,
  title,
  lede,
  aside,
}: {
  crumbs: Crumb[];
  kicker?: string;
  title: string;
  lede?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <>
      <section className="bg-grey-50/80">
        <Container className="pb-12 pt-10 sm:pb-16">
          <Breadcrumbs items={crumbs} />
          <div className="mt-12 grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              {kicker ? <p className="kicker mb-5">{kicker}</p> : <p className="rule mb-6" aria-hidden="true" />}
              <h1 className="font-display text-5xl font-light sm:text-6xl">{title}</h1>
            </div>
            {lede ? (
              <p className="lede max-w-md text-xl text-grey-600 lg:col-span-5 md:text-2xl">{lede}</p>
            ) : null}
          </div>
          {aside ? (
            <div className="mt-10 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">{aside}</div>
          ) : null}
        </Container>
      </section>
      <EntityRail />
    </>
  );
}
