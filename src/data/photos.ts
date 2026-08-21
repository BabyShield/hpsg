import type { ServiceSlug } from "./types";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const wide = { width: 1600, height: 900 };

export const homeHero: Photo = {
  src: "/images/home/hero.jpg",
  alt: "A quiet cream-painted Hampstead mews in morning light, empty cobbles and clipped box",
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
    alt: "Kitchen renovation in a North West London period house — pale cabinetry, marble and a garden sash",
    ...wide,
  },
  "bathroom-renovation": {
    src: "/images/services/bathroom-renovation.jpg",
    alt: "Bathroom renovation in a North West London house — stone bath, brass fittings and morning light",
    ...wide,
  },
  "painting-decorating": {
    src: "/images/services/painting-decorating.jpg",
    alt: "A freshly decorated drawing room in a Hampstead period house — pale walls, cornicing and herringbone",
    ...wide,
  },
  "light-refurbishment": {
    src: "/images/services/light-refurbishment.jpg",
    alt: "A light refurbishment in a London mansion-flat, looking from a pale reception into a new kitchen",
    ...wide,
  },
};

export const kitchenRoomPhotos = {
  galley: {
    src: "/images/services/kitchen-galley.jpg",
    alt: "A rear-return galley kitchen in a North West London conversion — cream cabinets, marble and a sash",
    ...wide,
  },
  compact: {
    src: "/images/services/kitchen-compact.jpg",
    alt: "A compact kitchen in a London mansion flat — short runs, marble worktops and a lightwell sash",
    ...wide,
  },
  chimney: {
    src: "/images/services/kitchen-chimney.jpg",
    alt: "A kitchen scribed around an original chimney breast in a North West London period house",
    ...wide,
  },
} as const satisfies Record<string, Photo>;

export const bathroomRoomPhotos = {
  compact: {
    src: "/images/services/bathroom-compact.jpg",
    alt: "A compact ensuite in a London mansion flat — stone basin, brass taps and a sash onto a lightwell",
    ...wide,
  },
  shower: {
    src: "/images/services/bathroom-shower.jpg",
    alt: "A walk-in shower in a North West London conversion — stone tiles, brass fittings and a garden sash",
    ...wide,
  },
  wetWall: {
    src: "/images/services/bathroom-wet-wall.jpg",
    alt: "A tiled shower wall with a brass niche in a period North West London bathroom",
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
