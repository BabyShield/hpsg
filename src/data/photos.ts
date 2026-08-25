import type { ServiceSlug } from "./types";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const wide = { width: 1280, height: 720 };

export const homeHero: Photo = {
  src: "/images/home/hero.jpg",
  alt: "A cream-stucco Hampstead house with a magnolia, York stone path and tidy lawn",
  ...wide,
};

export const officeNeighbourhood: Photo = {
  src: "/images/about/office-neighbourhood.jpg",
  alt: "Edwardian red-brick mansion block with a quiet garden court near the Hampstead office",
  ...wide,
};

export const servicePhotos: Record<ServiceSlug, Photo> = {
  "kitchen-renovation": {
    src: "/images/services/kitchen-renovation.jpg",
    alt: "A family kitchen in a Hampstead house — Hague Blue cabinets, oak worktops and a black Aga",
    ...wide,
  },
  "bathroom-renovation": {
    src: "/images/services/bathroom-renovation.jpg",
    alt: "A family bathroom in a Hampstead house — porcelain bath, sage zellige and brass taps",
    ...wide,
  },
  "painting-decorating": {
    src: "/images/services/painting-decorating.jpg",
    alt: "A decorated Hampstead drawing room — olive walls, cornicing, herringbone and a linen sofa",
    ...wide,
  },
  "light-refurbishment": {
    src: "/images/services/light-refurbishment.jpg",
    alt: "Looking from a mansion-flat reception through original doors into a new oak kitchen",
    ...wide,
  },
};

export const kitchenRoomPhotos = {
  galley: {
    src: "/images/services/kitchen-galley.jpg",
    alt: "A rear-return galley in a London conversion — sage cabinets, metro tiles and a garden sash",
    ...wide,
  },
  compact: {
    src: "/images/services/kitchen-compact.jpg",
    alt: "A compact mansion-flat kitchen — walnut cabinets, stone worktop and a lightwell sash",
    ...wide,
  },
  chimney: {
    src: "/images/services/kitchen-chimney.jpg",
    alt: "A kitchen scribed around a chimney breast with a black range in a Hampstead house",
    ...wide,
  },
  suburb: {
    src: "/images/services/kitchen-suburb.jpg",
    alt: "An Arts and Crafts Hampstead Garden Suburb kitchen — cream cabinets, green tiles and a leaded casement",
    ...wide,
  },
} as const satisfies Record<string, Photo>;

export const refurbRoomPhotos = {
  sitting: {
    src: "/images/services/refurb-sitting.jpg",
    alt: "A period sitting room after light refurbishment — blue-grey walls, marble chimneypiece and a linen sofa",
    ...wide,
  },
  hall: {
    src: "/images/services/refurb-hall.jpg",
    alt: "A conversion-flat hallway after light refurbishment — original doors, oak boards and a bedroom beyond",
    ...wide,
  },
  bedroom: {
    src: "/images/services/refurb-bedroom.jpg",
    alt: "A period bedroom after light refurbishment — pale walls, original door, marble chimneypiece and sanded boards",
    ...wide,
  },
} as const satisfies Record<string, Photo>;

export const paintingRoomPhotos = {
  drawing: {
    src: "/images/services/painting-drawing.jpg",
    alt: "A decorated Hampstead drawing room — Setting Plaster walls, marble chimneypiece and sanded boards",
    ...wide,
  },
  sashes: {
    src: "/images/services/painting-sashes.jpg",
    alt: "Freshly painted sash windows and shutters against grey-green walls in a Hampstead bay",
    ...wide,
  },
  flat: {
    src: "/images/services/painting-flat.jpg",
    alt: "A decorated mansion-flat reception — pale grey walls, parquet, a green armchair and a lightwell sash",
    ...wide,
  },
} as const satisfies Record<string, Photo>;

export const bathroomRoomPhotos = {
  compact: {
    src: "/images/services/bathroom-compact.jpg",
    alt: "A compact ensuite in a London mansion flat — dark limestone, chrome taps and a lightwell sash",
    ...wide,
  },
  shower: {
    src: "/images/services/bathroom-shower.jpg",
    alt: "A walk-in shower in a North West London conversion — limestone tiles, chrome fittings and a garden sash",
    ...wide,
  },
  wetWall: {
    src: "/images/services/bathroom-wet-wall.jpg",
    alt: "A shower wall of handmade blue-green metro tiles with a brass niche",
    ...wide,
  },
} as const satisfies Record<string, Photo>;

export const areaPhotos: Record<string, Photo> = {
  hampstead: {
    src: "/images/areas/hampstead.jpg",
    alt: "Cream and stock-brick cottages with wisteria, typical of Hampstead village, NW3",
    ...wide,
  },
  "west-hampstead": {
    src: "/images/areas/west-hampstead.jpg",
    alt: "Cream stucco bays and hydrangeas, typical of West Hampstead, NW6",
    ...wide,
  },
  "belsize-park": {
    src: "/images/areas/belsize-park.jpg",
    alt: "Tall cream stucco houses and clipped yew, typical of Belsize Park, NW3",
    ...wide,
  },
  "st-johns-wood": {
    src: "/images/areas/st-johns-wood.jpg",
    alt: "A white stucco villa and empty gravel court, typical of St John's Wood, NW8",
    ...wide,
  },
  "maida-vale": {
    src: "/images/areas/maida-vale.jpg",
    alt: "Red-brick and terracotta mansion block with a quiet garden court, typical of Maida Vale, W9",
    ...wide,
  },
  "swiss-cottage": {
    src: "/images/areas/swiss-cottage.jpg",
    alt: "A red-brick mansion block and garden, typical of Swiss Cottage, NW3",
    ...wide,
  },
  "primrose-hill": {
    src: "/images/areas/primrose-hill.jpg",
    alt: "Cream park-facing terraces and a quiet garden, typical of Primrose Hill, NW1",
    ...wide,
  },
  highgate: {
    src: "/images/areas/highgate.jpg",
    alt: "Brick houses around a paved square, typical of Highgate Village, N6",
    ...wide,
  },
  "golders-green": {
    src: "/images/areas/golders-green.jpg",
    alt: "An inter-war house and rose garden, typical of Golders Green, NW11",
    ...wide,
  },
  "queens-park": {
    src: "/images/areas/queens-park.jpg",
    alt: "Decorative brick cottages and box gardens, typical of Queen's Park, NW6",
    ...wide,
  },
  "muswell-hill": {
    src: "/images/areas/muswell-hill.jpg",
    alt: "Edwardian red-brick houses with timber porches, typical of Muswell Hill, N10",
    ...wide,
  },
  "crouch-end": {
    src: "/images/areas/crouch-end.jpg",
    alt: "Victorian bay terraces in morning light, typical of Crouch End, N8",
    ...wide,
  },
  "kentish-town": {
    src: "/images/areas/kentish-town.jpg",
    alt: "A quiet stock-brick mews, typical of Kentish Town, NW5",
    ...wide,
  },
  kilburn: {
    src: "/images/areas/kilburn.jpg",
    alt: "Cream stucco bays and box hedges, typical of quieter Kilburn streets, NW6",
    ...wide,
  },
  "hampstead-garden-suburb": {
    src: "/images/areas/hampstead-garden-suburb.jpg",
    alt: "Arts and Crafts houses around a close, typical of Hampstead Garden Suburb, NW11",
    ...wide,
  },
  "hampstead-heath": {
    src: "/images/areas/hampstead-heath.jpg",
    alt: "A brick house looking onto grassland, typical of the Hampstead Heath edge, NW3",
    ...wide,
  },
  "regents-park": {
    src: "/images/areas/regents-park.jpg",
    alt: "A cream stucco terrace and garden, typical of the Regent's Park fringe, NW1",
    ...wide,
  },
  archway: {
    src: "/images/areas/archway.jpg",
    alt: "Stock-brick terraces on a slope, typical of Archway, N19",
    ...wide,
  },
  frognal: {
    src: "/images/areas/frognal.jpg",
    alt: "A large Victorian villa and garden, typical of Frognal, NW3",
    ...wide,
  },
  "temple-fortune": {
    src: "/images/areas/temple-fortune.jpg",
    alt: "A family house and rose garden, typical of Temple Fortune, NW11",
    ...wide,
  },
  "dartmouth-park": {
    src: "/images/areas/dartmouth-park.jpg",
    alt: "Wide Victorian bays in pale stone, typical of Dartmouth Park, NW5",
    ...wide,
  },
  "tufnell-park": {
    src: "/images/areas/tufnell-park.jpg",
    alt: "Stock-brick conversion terraces and fern gardens, typical of Tufnell Park, N19",
    ...wide,
  },
  "east-finchley": {
    src: "/images/areas/east-finchley.jpg",
    alt: "A suburban family house and magnolia, typical of East Finchley, N2",
    ...wide,
  },
  "kensal-rise": {
    src: "/images/areas/kensal-rise.jpg",
    alt: "Victorian bays and an empty flagged pavement, typical of Kensal Rise, NW10",
    ...wide,
  },
  "south-hampstead": {
    src: "/images/areas/south-hampstead.jpg",
    alt: "Mixed stucco and brick houses, typical of South Hampstead, NW6",
    ...wide,
  },
};

export const photoCredit =
  "Photographs illustrate typical North West London housing and interiors. They are not named case studies and do not show a specific client or address.";

/**
 * Room photography per service, ordered so index 0 is the general hero.
 * Used by getComboPhotos() to give every service-in-area page its own pairing.
 */
const roomSets: Record<ServiceSlug, Photo[]> = {
  "kitchen-renovation": [
    kitchenRoomPhotos.galley,
    kitchenRoomPhotos.compact,
    kitchenRoomPhotos.chimney,
    kitchenRoomPhotos.suburb,
    servicePhotos["kitchen-renovation"],
  ],
  "bathroom-renovation": [
    bathroomRoomPhotos.compact,
    bathroomRoomPhotos.shower,
    bathroomRoomPhotos.wetWall,
    servicePhotos["bathroom-renovation"],
  ],
  "painting-decorating": [
    paintingRoomPhotos.drawing,
    paintingRoomPhotos.sashes,
    paintingRoomPhotos.flat,
    servicePhotos["painting-decorating"],
  ],
  "light-refurbishment": [
    refurbRoomPhotos.sitting,
    refurbRoomPhotos.hall,
    refurbRoomPhotos.bedroom,
    servicePhotos["light-refurbishment"],
  ],
};

/**
 * Which room photograph honestly represents each area's housing character.
 * Keyed to the housing type described in the page copy (see seo-cues.ts), so
 * the image agrees with the text rather than being decoration.
 */
const comboRoomIndex: Record<ServiceSlug, Record<string, number>> = {
  // 0 galley · 1 compact (mansion flat) · 2 chimney (village house) · 3 suburb · 4 general
  "kitchen-renovation": {
    "west-hampstead": 0,
    kilburn: 0,
    "kentish-town": 0,
    "crouch-end": 0,
    "queens-park": 0,
    "st-johns-wood": 1,
    "maida-vale": 1,
    "swiss-cottage": 1,
    "primrose-hill": 1,
    hampstead: 2,
    highgate: 2,
    "belsize-park": 2,
    "hampstead-garden-suburb": 3,
    "golders-green": 3,
    "muswell-hill": 3,
  },
  // 0 compact ensuite · 1 walk-in shower · 2 tiled wet wall · 3 general
  "bathroom-renovation": {
    "st-johns-wood": 0,
    "maida-vale": 0,
    "swiss-cottage": 0,
    "kentish-town": 0,
    hampstead: 1,
    highgate: 1,
    "belsize-park": 1,
    "hampstead-garden-suburb": 1,
    "west-hampstead": 2,
    kilburn: 2,
    "queens-park": 2,
    "crouch-end": 2,
    "primrose-hill": 3,
    "golders-green": 3,
    "muswell-hill": 3,
  },
  // 0 drawing room · 1 sashes · 2 mansion-flat reception · 3 general
  "painting-decorating": {
    hampstead: 0,
    "belsize-park": 0,
    highgate: 0,
    "primrose-hill": 0,
    "muswell-hill": 1,
    "crouch-end": 1,
    "queens-park": 1,
    "hampstead-garden-suburb": 1,
    "st-johns-wood": 2,
    "maida-vale": 2,
    "swiss-cottage": 2,
    kilburn: 2,
    "west-hampstead": 3,
    "kentish-town": 3,
    "golders-green": 3,
  },
  // 0 sitting room · 1 hall · 2 bedroom · 3 general
  "light-refurbishment": {
    hampstead: 0,
    "belsize-park": 0,
    highgate: 0,
    "golders-green": 0,
    "west-hampstead": 1,
    "kentish-town": 1,
    kilburn: 1,
    "crouch-end": 1,
    "st-johns-wood": 2,
    "maida-vale": 2,
    "swiss-cottage": 2,
    "queens-park": 2,
    "primrose-hill": 3,
    "muswell-hill": 3,
    "hampstead-garden-suburb": 3,
  },
};

/** Stable fallback so an unmapped area still gets a deterministic photo. */
function slugIndex(slug: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) hash = (hash * 31 + slug.charCodeAt(i)) % 100000;
  return hash % length;
}

/**
 * The three photographs for a service-in-area page: the room (hero), a second
 * room from the same set, and the street. No two of the three repeat.
 */
export function getComboPhotos(
  service: ServiceSlug,
  areaSlug: string,
): { hero: Photo; secondary: Photo; area: Photo | undefined } {
  const set = roomSets[service];
  const mapped = comboRoomIndex[service][areaSlug];
  const heroIndex = mapped ?? slugIndex(areaSlug, set.length);
  return {
    hero: set[heroIndex],
    secondary: set[(heroIndex + 1) % set.length],
    area: areaPhotos[areaSlug],
  };
}
