import Link from "next/link";

import { bathroomRoomPhotos, kitchenRoomPhotos, paintingRoomPhotos, refurbRoomPhotos } from "@/data/photos";

import { Container } from "../ui/Container";
import { PhotoTile } from "../ui/PhotoTile";

const tiles = [
  {
    href: "/kitchen-renovation/",
    photo: kitchenRoomPhotos.chimney,
    title: "Kitchen renovation",
    caption: "Scribed to a chimney breast",
    className: "min-h-[18rem] lg:col-span-6 lg:min-h-[28rem]",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    href: "/bathroom-renovation/",
    photo: bathroomRoomPhotos.shower,
    title: "Bathroom renovation",
    caption: "Walk-in shower in stone",
    className: "min-h-[18rem] lg:col-span-6 lg:min-h-[28rem]",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    href: "/painting-decorating/",
    photo: paintingRoomPhotos.sashes,
    title: "Painting and decorating",
    caption: "Original sashes as joinery",
    className: "min-h-[18rem] lg:col-span-6 lg:min-h-[28rem]",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    href: "/light-refurbishment/",
    photo: refurbRoomPhotos.sitting,
    title: "Light refurbishment",
    caption: "Reception, floors and decoration",
    className: "min-h-[18rem] lg:col-span-6 lg:min-h-[28rem]",
    sizes: "(min-width: 1024px) 50vw, 100vw",
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
              Photographs illustrate the kind of kitchens, bathrooms and interiors
              we take on in North West London housing. They show the stock, not
              named projects.
            </p>
          </div>
          <Link href="/projects/" className="btn-line text-navy">
            All work
          </Link>
        </div>
      </Container>
      <div className="bleed mt-16">
        <ul className="mosaic grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          {tiles.map((tile) => (
            <li key={tile.href} className={tile.className}>
              <PhotoTile
                photo={tile.photo}
                href={tile.href}
                title={tile.title}
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
