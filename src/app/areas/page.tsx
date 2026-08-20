import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { tier1Areas, tier2Areas } from "@/lib/matrix";

export const metadata: Metadata = {
  title: "Areas we cover in North West London",
  description:
    "Property services across North West London, from Hampstead, Belsize Park and St John's Wood to Highgate, Queen's Park and the wider list of areas. 020 7101 3168.",
};

export default function AreasIndexPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Areas", href: "/areas/" },
          ]}
        />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="text-4xl">Areas we cover</h1>
        <p className="mt-6 max-w-measure text-lg text-grey-700">
          Local pages for the neighbourhoods we work in. Service detail for
          each Tier 1 area lives on the kitchen, bathroom, painting and
          refurbishment combination pages.
        </p>
        <div className="mt-12 space-y-12">
          <AreaLinkGrid areas={tier1Areas()} heading="Tier 1" withPhotos />
          <AreaLinkGrid areas={tier2Areas()} heading="Also covering" withPhotos />
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
