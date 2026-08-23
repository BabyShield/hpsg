import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AreaLinkGrid } from "@/components/ui/AreaLinkGrid";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { areaPhotos } from "@/data/photos";
import { addressSingleLine } from "@/data/site";
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
        <div className="mt-8 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
          <p className="lede text-xl text-grey-600 md:text-2xl">
            Kitchen renovation, bathroom renovation, painting and light
            refurbishment from {addressSingleLine} across twenty-five
            neighbourhoods.
          </p>
          <p>
            The housing is not one type. Hampstead and Highgate are village
            houses and listed fabric. West Hampstead, Belsize Park, Kentish Town
            and Kilburn are conversion flats and rear-return kitchens. St
            John&apos;s Wood, Maida Vale and Swiss Cottage are mansion blocks on
            original risers. Primrose Hill, the Suburb and Golders Green are
            family houses with their own conservation and Trust rules.
          </p>
          <p>
            Each neighbourhood page is the stock of that place — council,
            conservation notes and how we actually work on those streets — not a
            renamed copy of this index. Local service pages for kitchen,
            bathroom, painting and light refurbishment sit under each service
            for the main list.
          </p>
          <p>
            Addresses here sit with Camden, Westminster, Barnet and Haringey. We
            check the address rather than assuming permitted development. If the
            property sits just outside these pages, contact us and we will say
            whether we can take it on.
          </p>
        </div>
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
      <CtaBand
        title="Request a quote for work in North West London"
        text="Tell us the neighbourhood and the rooms in scope. We visit before we write a proposal."
      />
    </>
  );
}
