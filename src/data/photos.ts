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
  alt: "Victorian terraces and a red-brick mansion block on a quiet North West London street",
  ...wide,
};

export const officeNeighbourhood: Photo = {
  src: "/images/about/office-neighbourhood.jpg",
  alt: "Edwardian mansion block and shops on Finchley Road near the Hampstead office",
  ...wide,
};

export const servicePhotos: Record<ServiceSlug, Photo> = {
  "kitchen-renovation": {
    src: "/images/services/kitchen-renovation.jpg",
    alt: "Kitchen renovation in a London period conversion — galley layout, chimney breast and sash window",
    ...wide,
  },
  "bathroom-renovation": {
    src: "/images/services/bathroom-renovation.jpg",
    alt: "Bathroom renovation in a London conversion — tiled wet room, bath and shower",
    ...wide,
  },
  "painting-decorating": {
    src: "/images/services/painting-decorating.jpg",
    alt: "Painting and decorating in an occupied North West London period sitting room",
    ...wide,
  },
  "light-refurbishment": {
    src: "/images/services/light-refurbishment.jpg",
    alt: "Light refurbishment of a London flat, looking from a reception into a compact kitchen",
    ...wide,
  },
};

export const areaPhotos: Record<string, Photo> = {
  hampstead: {
    src: "/images/areas/hampstead.jpg",
    alt: "Narrow brick and stucco lane typical of Hampstead village, NW3",
    ...wide,
  },
  "west-hampstead": {
    src: "/images/areas/west-hampstead.jpg",
    alt: "Victorian bay-fronted terraces typical of West Hampstead, NW6",
    ...wide,
  },
  "belsize-park": {
    src: "/images/areas/belsize-park.jpg",
    alt: "Tall stucco houses typical of Belsize Park, NW3",
    ...wide,
  },
  "st-johns-wood": {
    src: "/images/areas/st-johns-wood.jpg",
    alt: "Tree-lined villas and a mansion block typical of St John's Wood, NW8",
    ...wide,
  },
  "maida-vale": {
    src: "/images/areas/maida-vale.jpg",
    alt: "Red-brick and terracotta mansion blocks beside the canal in Maida Vale, W9",
    ...wide,
  },
  "swiss-cottage": {
    src: "/images/areas/swiss-cottage.jpg",
    alt: "Finchley Road mansion blocks typical of Swiss Cottage, NW3",
    ...wide,
  },
  "primrose-hill": {
    src: "/images/areas/primrose-hill.jpg",
    alt: "Park-facing Victorian terraces typical of Primrose Hill, NW1",
    ...wide,
  },
  highgate: {
    src: "/images/areas/highgate.jpg",
    alt: "Brick houses around a small square typical of Highgate Village, N6",
    ...wide,
  },
  "golders-green": {
    src: "/images/areas/golders-green.jpg",
    alt: "Inter-war family houses typical of Golders Green, NW11",
    ...wide,
  },
  "queens-park": {
    src: "/images/areas/queens-park.jpg",
    alt: "Decorative brick cottages facing the park, typical of Queen's Park, NW6",
    ...wide,
  },
  "muswell-hill": {
    src: "/images/areas/muswell-hill.jpg",
    alt: "Edwardian red-brick houses on a slope, typical of Muswell Hill, N10",
    ...wide,
  },
  "crouch-end": {
    src: "/images/areas/crouch-end.jpg",
    alt: "Victorian terraces near the Broadway, typical of Crouch End, N8",
    ...wide,
  },
  "kentish-town": {
    src: "/images/areas/kentish-town.jpg",
    alt: "Dense stock-brick terraces typical of Kentish Town, NW5",
    ...wide,
  },
  kilburn: {
    src: "/images/areas/kilburn.jpg",
    alt: "Mixed Victorian terraces off a main road, typical of Kilburn, NW6",
    ...wide,
  },
  "hampstead-garden-suburb": {
    src: "/images/areas/hampstead-garden-suburb.jpg",
    alt: "Arts and Crafts houses around a close, typical of Hampstead Garden Suburb, NW11",
    ...wide,
  },
  "hampstead-heath": {
    src: "/images/areas/hampstead-heath.jpg",
    alt: "Houses looking onto open grassland, typical of the Hampstead Heath edge, NW3",
    ...wide,
  },
  "regents-park": {
    src: "/images/areas/regents-park.jpg",
    alt: "Cream stucco terrace beside the park, typical of the Regent's Park fringe, NW1",
    ...wide,
  },
  archway: {
    src: "/images/areas/archway.jpg",
    alt: "Victorian terraces climbing away from a busy junction, typical of Archway, N19",
    ...wide,
  },
  frognal: {
    src: "/images/areas/frognal.jpg",
    alt: "Large Victorian and Edwardian houses on a hill, typical of Frognal, NW3",
    ...wide,
  },
  "temple-fortune": {
    src: "/images/areas/temple-fortune.jpg",
    alt: "Family houses typical of Temple Fortune and adjoining NW11 streets",
    ...wide,
  },
  "dartmouth-park": {
    src: "/images/areas/dartmouth-park.jpg",
    alt: "Wide sloping street of Victorian bays, typical of Dartmouth Park, NW5",
    ...wide,
  },
  "tufnell-park": {
    src: "/images/areas/tufnell-park.jpg",
    alt: "Stock-brick conversion terraces typical of Tufnell Park, N19",
    ...wide,
  },
  "east-finchley": {
    src: "/images/areas/east-finchley.jpg",
    alt: "Suburban high road and family houses typical of East Finchley, N2",
    ...wide,
  },
  "kensal-rise": {
    src: "/images/areas/kensal-rise.jpg",
    alt: "Victorian terraces by the railway bridge, typical of Kensal Rise, NW10",
    ...wide,
  },
  "south-hampstead": {
    src: "/images/areas/south-hampstead.jpg",
    alt: "Mixed stucco and brick houses beside the railway, typical of South Hampstead, NW6",
    ...wide,
  },
};

export const photoCredit =
  "Photographs illustrate typical North West London housing and interiors. They are not named case studies and do not show a specific client or address.";
