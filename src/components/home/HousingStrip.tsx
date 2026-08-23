import Link from "next/link";

import { homeHousing } from "@/data/home";

import { Container } from "../ui/Container";
import { ContentImage } from "../ui/ContentImage";

export function HousingStrip() {
  return (
    <section className="border-y border-grey-200 bg-grey-50/60 py-24 sm:py-32">
      <Container>
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker mb-6">The housing</p>
            <h2 className="max-w-xl font-display text-4xl font-light sm:text-5xl">
              Conversions, mansion flats and family houses
            </h2>
          </div>
          <p className="lede max-w-md text-xl text-grey-600 lg:col-span-5">
            The rooms decide the layout. The building decides the licence, the
            stair and the hours. We write the programme to the stock in front of
            us, not to a catalogue plan.
          </p>
        </div>
        <ul className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {homeHousing.map((item) => (
            <li key={item.title}>
              <ContentImage
                photo={item.photo}
                className="aspect-[4/3] w-full"
                imageClassName="object-center"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
              <p className="caption mt-4">{item.caption}</p>
              <h3 className="mt-5 font-display text-3xl font-normal">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-grey-700">{item.text}</p>
              <p className="mt-5">
                <Link href={item.href} className="btn-line text-navy">
                  {item.linkLabel}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
