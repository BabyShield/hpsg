import Link from "next/link";

import { bathroomRoomPhotos, servicePhotos } from "@/data/photos";
import { services } from "@/data/services";

import { Container } from "../ui/Container";
import { PhotoTile } from "../ui/PhotoTile";

const tiles = [
  {
    service: services[0],
    photo: servicePhotos["kitchen-renovation"],
    caption: "Period conversion",
    className: "min-h-[22rem] lg:col-span-8 lg:row-span-2 lg:min-h-[42rem]",
    sizes: "(min-width: 1024px) 66vw, 100vw",
  },
  {
    service: services[1],
    photo: bathroomRoomPhotos.shower,
    caption: "Walk-in shower",
    className: "min-h-[16rem] lg:col-span-4 lg:min-h-[21rem]",
    sizes: "(min-width: 1024px) 33vw, 100vw",
  },
  {
    service: services[2],
    photo: servicePhotos["painting-decorating"],
    caption: "Period interior",
    className: "min-h-[16rem] lg:col-span-4 lg:min-h-[21rem]",
    sizes: "(min-width: 1024px) 33vw, 100vw",
  },
] as const;

export function FeaturedProjects() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="kicker mb-5">Work</p>
            <h2 className="font-display text-4xl font-light sm:text-5xl">Typical rooms</h2>
            <p className="lede mt-6 max-w-measure text-xl text-grey-600">
              Photographs show the kind of kitchens, bathrooms and interiors we
              take on. Named case studies will follow from supplied summaries.
            </p>
          </div>
          <Link href="/projects/" className="btn-line text-navy">
            All work
          </Link>
        </div>
      </Container>
      <div className="bleed mt-16">
        <ul className="mosaic grid-cols-1 lg:grid-cols-12">
          {tiles.map((tile) => (
            <li key={tile.service.slug} className={tile.className}>
              <PhotoTile
                photo={tile.photo}
                href={`/${tile.service.slug}/`}
                title={tile.service.name}
                caption={tile.caption}
                className="h-full min-h-[16rem] lg:min-h-full"
                sizes={tile.sizes}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
