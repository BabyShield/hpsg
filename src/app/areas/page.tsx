import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { areaPhotos } from "@/data/photos";
import { pageMetadata } from "@/lib/metadata";
import { tier1Areas, tier2Areas } from "@/lib/matrix";

export const metadata = pageMetadata({
  title: "North West London areas | Kitchens, bathrooms and decorating | HPSG",
  description:
    "Kitchen renovation, bathroom renovation, painting and light refurbishment in Hampstead, West Hampstead, Belsize Park, St John's Wood, Maida Vale, Highgate and 25 North West London neighbourhoods. 020 7101 3168.",
  path: "/areas/",
});

export default function AreasIndexPage() {
  const tier1 = tier1Areas();
  const [featured, ...rest] = tier1;
  const featuredPhoto = featured ? areaPhotos[featured.slug] : undefined;

  return (
    <>
      <Container className="py-16 sm:py-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Areas", href: "/areas/" },
          ]}
        />
        <p className="rule mb-8" aria-hidden="true" />
        <h1 className="font-display text-5xl font-light sm:text-6xl">
          North West London areas we cover
        </h1>
        <p className="lede mt-8 max-w-measure text-xl text-grey-600">
          Kitchen renovation, bathroom renovation, painting and light
          refurbishment from a Finchley Road office across North West London.
          Neighbourhood pages sit here. Local service pages for Hampstead, West
          Hampstead, Belsize Park, St John&apos;s Wood, Maida Vale, Highgate and
          the rest of the main list sit under each service.
        </p>
        {featured && featuredPhoto ? (
          <div className="mt-16 min-h-[24rem] lg:min-h-[36rem]">
            <PhotoTile
              photo={featuredPhoto}
              href={`/areas/${featured.slug}/`}
              title={featured.name}
              caption={featured.postcode}
              className="h-full min-h-[24rem] lg:min-h-[36rem]"
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
