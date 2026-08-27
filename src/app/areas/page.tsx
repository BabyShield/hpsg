import Link from "next/link";
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
  title: "Areas We Cover in North West London | HPSG",
  description:
    "Kitchen, bathroom, painting and light refurbishment in Hampstead, St John's Wood, Maida Vale, Highgate and 25 NW London neighbourhoods. 020 7101 3168.",
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

        <section className="mt-24 border-t border-grey-200 pt-16">
          <p className="rule mb-8" aria-hidden="true" />
          <h2 className="font-display text-4xl font-normal sm:text-5xl">
            Four kinds of housing, four kinds of job
          </h2>
          <p className="lede mt-6 max-w-measure text-xl text-grey-600">
            The neighbourhood decides the constraint long before the
            specification does.
          </p>
          <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            <div>
              <h3 className="caption text-grey-500">Village and listed fabric</h3>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                Hampstead, Highgate and Frognal hold Georgian and early-Victorian
                houses, later villas and a high concentration of listed
                buildings. Lime plaster on lath, original joinery and floors that
                have settled are the ordinary findings. Kitchens are scribed to
                chimney breasts rather than dropped into a square box, and the
                extract route is a conservation question before it is a technical
                one. Lanes that were never drawn for a van decide how material
                arrives.
              </p>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                See{" "}
                <Link href="/kitchen-renovation/hampstead/" className="quiet-link text-navy">
                  kitchen renovation in Hampstead NW3
                </Link>{" "}
                and{" "}
                <Link href="/areas/highgate/" className="quiet-link text-navy">
                  Highgate N6
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="caption text-grey-500">Conversion terraces</h3>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                West Hampstead, Kentish Town, Kilburn, Crouch End, Queen&apos;s
                Park and Kensal Rise are largely bay-fronted Victorian and
                Edwardian terraces divided into flats. The kitchen is usually in
                the rear return and the bathroom on a half-landing over someone
                else&apos;s ceiling, which is why waterproofing and acoustic
                separation matter more here than the tile. The shared stair is
                treated as part of the site.
              </p>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                See{" "}
                <Link href="/kitchen-renovation/west-hampstead/" className="quiet-link text-navy">
                  kitchen renovation in West Hampstead NW6
                </Link>{" "}
                and{" "}
                <Link href="/bathroom-renovation/kentish-town/" className="quiet-link text-navy">
                  bathroom renovation in Kentish Town NW5
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="caption text-grey-500">Purpose-built mansion blocks</h3>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                St John&apos;s Wood, Maida Vale, Swiss Cottage and South
                Hampstead carry blocks of the 1890s to the 1930s, planned around
                service risers that are still where the drainage is. Layouts
                follow the stack, lifts frequently will not take a run of
                carcasses, and almost every flat is leasehold — so a licence to
                alter is the norm and the programme is written around it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                See{" "}
                <Link href="/bathroom-renovation/maida-vale/" className="quiet-link text-navy">
                  bathroom renovation in Maida Vale W9
                </Link>{" "}
                and the{" "}
                <Link href="/guides/mansion-flat-renovation/" className="quiet-link text-navy">
                  mansion flat guide
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="caption text-grey-500">Family houses and the Suburb</h3>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                Golders Green, Muswell Hill, Temple Fortune, East Finchley and
                Hampstead Garden Suburb are Edwardian and inter-war family
                houses on larger plots. Rooms are generous and original fabric is
                often intact. The Suburb adds a second regime on top of the
                conservation area: the Trust&apos;s Scheme of Management runs
                alongside Barnet&apos;s controls, and consent from one is not
                consent from the other.
              </p>
              <p className="mt-4 text-base leading-relaxed text-grey-700">
                See{" "}
                <Link
                  href="/kitchen-renovation/hampstead-garden-suburb/"
                  className="quiet-link text-navy"
                >
                  kitchen renovation in Hampstead Garden Suburb NW11
                </Link>{" "}
                and{" "}
                <Link href="/painting-decorating/muswell-hill/" className="quiet-link text-navy">
                  painting and decorating in Muswell Hill N10
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-grey-200 pt-16">
          <h2 className="font-display text-3xl font-normal sm:text-4xl">
            How the council map works
          </h2>
          <div className="mt-6 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
            <p>
              Four authorities cover these pages: Camden, Westminster, Barnet and
              Haringey, with some addresses falling to Brent or Islington. Skip
              licences, scaffolding licences and conservation process follow the
              borough on the frontage rather than the neighbourhood name, and
              several places here are split. Highgate runs across Camden and
              Haringey, Queen&apos;s Park across Brent and Westminster, Kilburn
              across Camden and Brent.
            </p>
            <p>
              That is why we check the address rather than assuming a single set
              of rules for North West London, and why conservation-area
              boundaries are read from the council&apos;s own map instead of a
              street name.
            </p>
            <p>
              The ten &ldquo;also covering&rdquo; neighbourhoods above are worked
              from the North West London service pages rather than having local
              pages of their own. The method is the same; only the page
              structure differs.
            </p>
          </div>
        </section>
      </Container>
      <CtaBand
        title="Request a quote for work in North West London"
        text="Tell us the neighbourhood and the rooms in scope. We visit before we write a proposal."
      />
    </>
  );
}
