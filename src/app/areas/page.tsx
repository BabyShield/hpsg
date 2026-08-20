import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { areaPhotos } from "@/data/photos";
import { pageMetadata } from "@/lib/metadata";
import { tier1Areas, tier2Areas } from "@/lib/matrix";

export const metadata = pageMetadata({
  title: "Areas we cover in North West London | HPSG",
  description:
    "Kitchen, bathroom, painting and light refurbishment across North West London, from Hampstead, Belsize Park and St John's Wood to Highgate, Queen's Park and the wider list. 020 7101 3168.",
  path: "/areas/",
});

export default function AreasIndexPage() {
  const tier1 = tier1Areas();
  const [featured, ...rest] = tier1;
  const featuredPhoto = featured ? areaPhotos[featured.slug] : undefined;

  return (
    <>
      <Container className="py-16 sm:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Areas", href: "/areas/" },
          ]}
        />
        <p className="mb-6 h-px w-12 bg-gold" aria-hidden="true" />
        <h1 className="font-display text-5xl font-medium sm:text-6xl">Areas we cover</h1>
        <p className="mt-6 max-w-measure text-lg leading-relaxed text-grey-700">
          We work from a Finchley Road office across North West London.
          Neighbourhood pages sit here. Kitchen, bathroom, painting and light
          refurbishment pages for Hampstead, West Hampstead, Belsize Park, St
          John&apos;s Wood, Maida Vale and the rest of the main list sit under
          each service.
        </p>
        {featured && featuredPhoto ? (
          <div className="mt-14 min-h-[22rem] lg:min-h-[32rem]">
            <PhotoTile
              photo={featuredPhoto}
              href={`/areas/${featured.slug}/`}
              title={featured.name}
              caption={featured.postcode}
              className="h-full min-h-[22rem] lg:min-h-[32rem]"
              sizes="100vw"
            />
          </div>
        ) : null}
        <div className="mt-12 space-y-16">
          <AreaLinkGrid areas={rest} heading="North West London" withPhotos />
          <AreaLinkGrid areas={tier2Areas()} heading="Also covering" withPhotos />
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
