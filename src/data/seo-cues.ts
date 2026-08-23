import type { ServiceSlug } from "./types";

export type ServiceAreaCue = {
  title: string;
  opening: string;
};

const kitchen: Record<string, ServiceAreaCue> = {
  hampstead: {
    title: "Galleys and village houses",
    opening:
      "Hampstead kitchens are conversion galleys and village-house rooms scribed to chimney breasts; deliveries on lanes off Heath Street are timed.",
  },
  "west-hampstead": {
    title: "Rear-return galleys",
    opening:
      "West Hampstead kitchens live in rear returns: one window, a party wall, and loading planned off West End Lane rather than on it.",
  },
  "belsize-park": {
    title: "Inserted rooms and stucco",
    opening:
      "Belsize Park kitchens are often inserted into former bedrooms or service rooms; extract and drainage come before the run of units.",
  },
  "st-johns-wood": {
    title: "Mansion-flat risers",
    opening:
      "St John's Wood kitchens are compact rooms on original risers; carcasses are assumed up the stair until the lift is measured.",
  },
  "maida-vale": {
    title: "1890s mansion flats",
    opening:
      "Maida Vale kitchens sit in 1890s mansion-block rear rooms on stacked drainage; the canal-side houses are a different, larger brief.",
  },
  "swiss-cottage": {
    title: "Finchley Road corridor",
    opening:
      "Swiss Cottage kitchens are mansion flats and conversions on the Finchley Road corridor, a short run from the office.",
  },
  "primrose-hill": {
    title: "Park terraces and Article 4",
    opening:
      "Primrose Hill kitchens sit in park-facing terraces and lower-ground rooms; Article 4 streets control extract and windows, not the layout inside.",
  },
  highgate: {
    title: "Village houses and slope flats",
    opening:
      "Highgate kitchens sit in village houses and slope conversions, with conservation fabric split across Camden, Haringey and Islington.",
  },
  "golders-green": {
    title: "Barnet family houses",
    opening:
      "Golders Green kitchens are Edwardian and inter-war family rooms on the Barnet side — more generous than a Camden galley, still out of square.",
  },
  "queens-park": {
    title: "Terraces and Estate cottages",
    opening:
      "Queen's Park kitchens sit in late-Victorian terraces and Estate cottages across Brent and Westminster, with party walls deciding the hours.",
  },
  "muswell-hill": {
    title: "Edwardian family rooms",
    opening:
      "Muswell Hill kitchens are Edwardian family rooms and Broadway conversions; extract still has to respect the elevation.",
  },
  "crouch-end": {
    title: "Broadway conversions",
    opening:
      "Crouch End kitchens sit in Victorian conversions around the Broadway; stacked services and shared stairs are the working assumption.",
  },
  "kentish-town": {
    title: "Half-landing conversions",
    opening:
      "Kentish Town kitchens are Victorian conversion rooms with stacked bathrooms on half-landings and party-wall hours written into the programme.",
  },
  kilburn: {
    title: "Camden and Brent boundary",
    opening:
      "Kilburn kitchens sit in conversion flats on the Camden and Brent boundary; the council, the parking and the stair change by street.",
  },
  "hampstead-garden-suburb": {
    title: "Trust interiors",
    opening:
      "Suburb kitchens are internal fit-outs. The Trust and Barnet sit on the outside of the house; an extract grille is not a casual extra.",
  },
};

const bathroom: Record<string, ServiceAreaCue> = {
  hampstead: {
    title: "Timber floors and extract",
    opening:
      "Hampstead bathrooms sit on timber floors in conversions; tanking and extract that a conservation elevation will accept decide the layout.",
  },
  "west-hampstead": {
    title: "Stacked half-landings",
    opening:
      "West Hampstead bathrooms are often stacked on half-landings in conversions; the stack and the neighbour below decide what the room can take.",
  },
  "belsize-park": {
    title: "Inserted ensuites",
    opening:
      "Belsize Park bathrooms are often ensuites formed in former dressing rooms; drainage and extract are the first questions, not the last.",
  },
  "st-johns-wood": {
    title: "Stacked mansion flats",
    opening:
      "St John's Wood bathrooms are compact stacked rooms in mansion blocks; wastes and extract share the building, and hours follow the block.",
  },
  "maida-vale": {
    title: "Mansion-block wastes",
    opening:
      "Maida Vale bathrooms sit over a neighbour's ceiling void in mansion blocks; tanking and testing are the job, not the tiles.",
  },
  "swiss-cottage": {
    title: "Corridor mansion flats",
    opening:
      "Swiss Cottage bathrooms are mansion-flat and conversion rooms on the Finchley Road corridor, planned around existing stacks.",
  },
  "primrose-hill": {
    title: "Lower-ground wet rooms",
    opening:
      "Primrose Hill bathrooms include lower-ground rooms and compact terraces; Article 4 streets control extract, not the sanitaryware.",
  },
  highgate: {
    title: "Slope conversions",
    opening:
      "Highgate bathrooms sit in village houses and slope conversions; floor depth and a split-borough conservation map decide wet rooms.",
  },
  "golders-green": {
    title: "Family bathrooms",
    opening:
      "Golders Green bathrooms are family rooms in Edwardian and inter-war houses; more space than a conversion, still a timber-floor problem.",
  },
  "queens-park": {
    title: "Terrace stacks",
    opening:
      "Queen's Park bathrooms sit on terrace stacks in Estate cottages and later conversions; party-wall hours belong in the programme.",
  },
  "muswell-hill": {
    title: "Edwardian family bathrooms",
    opening:
      "Muswell Hill bathrooms are Edwardian family rooms and conversion ensuites; extract still has to leave the house honestly.",
  },
  "crouch-end": {
    title: "Conversion stacks",
    opening:
      "Crouch End bathrooms sit on conversion stacks around the Broadway; the room below and the shared stair set the method.",
  },
  "kentish-town": {
    title: "Half-landing bathrooms",
    opening:
      "Kentish Town bathrooms are stacked on half-landings in Victorian conversions; the waste run is the survey, not an afterthought.",
  },
  kilburn: {
    title: "Boundary conversions",
    opening:
      "Kilburn bathrooms sit in conversion flats on the Camden and Brent boundary; stacks, parking and the stair change by street.",
  },
  "hampstead-garden-suburb": {
    title: "Trust interiors",
    opening:
      "Suburb bathrooms are internal renovations. Trust and Barnet rules sit on the elevation; a grille or a window change is not a casual extra.",
  },
};

const painting: Record<string, ServiceAreaCue> = {
  hampstead: {
    title: "Lime plaster and sashes",
    opening:
      "Hampstead decorating is preparation on original fabric: lime plaster, village sashes, and occupied houses that cannot be emptied for a spray shop.",
  },
  "west-hampstead": {
    title: "Occupied conversions",
    opening:
      "West Hampstead decorating is occupied conversion flats and terrace rooms; dust control on a shared stair is part of the method.",
  },
  "belsize-park": {
    title: "High rooms and stucco",
    opening:
      "Belsize Park decorating is high-ceilinged principal rooms and original joinery; every prep shortcut shows in that light.",
  },
  "st-johns-wood": {
    title: "Mansion-flat interiors",
    opening:
      "St John's Wood decorating is mansion-flat receptions and common parts as a separate scope; the building's hours apply.",
  },
  "maida-vale": {
    title: "Mansion-block joinery",
    opening:
      "Maida Vale decorating is mansion-block joinery and high rooms; west-facing flats do not read the same emulsion as a north village room.",
  },
  "swiss-cottage": {
    title: "Corridor interiors",
    opening:
      "Swiss Cottage decorating sits in mansion flats and conversions on the Finchley Road corridor, sequenced around occupied rooms.",
  },
  "primrose-hill": {
    title: "Park-facing rooms",
    opening:
      "Primrose Hill decorating is park-facing terraces and original joinery; Article 4 streets control exterior colour, not the interior spec.",
  },
  highgate: {
    title: "Village joinery",
    opening:
      "Highgate decorating is village-house joinery and slope conversions; listed fabric is checked before a coating is chosen.",
  },
  "golders-green": {
    title: "Family-house interiors",
    opening:
      "Golders Green decorating is Edwardian and inter-war family interiors; occupied sequencing is ordinary, not an extra.",
  },
  "queens-park": {
    title: "Terrace interiors",
    opening:
      "Queen's Park decorating is terrace interiors and Estate cottages; party-wall hours and shared stairs belong in the programme.",
  },
  "muswell-hill": {
    title: "Edwardian interiors",
    opening:
      "Muswell Hill decorating is Edwardian family rooms and Broadway conversions; high rooms need access written into the spec.",
  },
  "crouch-end": {
    title: "Broadway interiors",
    opening:
      "Crouch End decorating is Victorian conversion interiors around the Broadway; occupied flats and shared stairs are the default.",
  },
  "kentish-town": {
    title: "Conversion interiors",
    opening:
      "Kentish Town decorating is Victorian conversion interiors; common-parts protection is part of the method, not a courtesy.",
  },
  kilburn: {
    title: "Boundary conversions",
    opening:
      "Kilburn decorating sits in conversion flats on the Camden and Brent boundary; the stair and the hours change by street.",
  },
  "hampstead-garden-suburb": {
    title: "Trust interiors",
    opening:
      "Suburb decorating is Arts and Crafts interiors under Trust and Barnet rules; exterior colour is not a chart decision.",
  },
};

const refurb: Record<string, ServiceAreaCue> = {
  hampstead: {
    title: "Whole-flat interiors",
    opening:
      "Hampstead light refurbishment is a conversion or village-house interior: kitchen, bathroom, floors and decoration, without opening the carcass.",
  },
  "west-hampstead": {
    title: "Rear-return conversions",
    opening:
      "West Hampstead light refurbishment is the conversion-flat brief: rear-return kitchen, stacked bathroom, decoration and floors as one programme.",
  },
  "belsize-park": {
    title: "Stucco conversions",
    opening:
      "Belsize Park light refurbishment is a stucco conversion brought to one standard; inserted kitchens and ensuites stay in the rooms that exist.",
  },
  "st-johns-wood": {
    title: "Licence-to-alter apartments",
    opening:
      "St John's Wood light refurbishment is a mansion apartment as the plan is: kitchen and bathroom replaced, floors and decoration to one standard.",
  },
  "maida-vale": {
    title: "1890s mansion flats",
    opening:
      "Maida Vale light refurbishment is a mansion-block apartment: wet rooms first, decoration last, the building's hours and licence process followed.",
  },
  "swiss-cottage": {
    title: "Corridor apartments",
    opening:
      "Swiss Cottage light refurbishment is a mansion flat or conversion on the Finchley Road corridor, sequenced as one account from the office nearby.",
  },
  "primrose-hill": {
    title: "Park-terrace interiors",
    opening:
      "Primrose Hill light refurbishment is a terrace interior to one standard; Article 4 and listed fabric are checked where the envelope is involved.",
  },
  highgate: {
    title: "Village interiors",
    opening:
      "Highgate light refurbishment is a village-house storey or conversion interior; structural openings and lofts are not this service.",
  },
  "golders-green": {
    title: "Family-house interiors",
    opening:
      "Golders Green light refurbishment is a family-house interior brought to one standard, without forming a new envelope.",
  },
  "queens-park": {
    title: "Estate cottages and terraces",
    opening:
      "Queen's Park light refurbishment is a terrace or Estate cottage interior: kitchen, bathroom, decoration and floors as one programme.",
  },
  "muswell-hill": {
    title: "Edwardian interiors",
    opening:
      "Muswell Hill light refurbishment is an Edwardian house or Broadway conversion interior, sequenced as one programme.",
  },
  "crouch-end": {
    title: "Broadway conversions",
    opening:
      "Crouch End light refurbishment is a Victorian conversion around the Broadway: wet rooms first, paint last, the stair protected.",
  },
  "kentish-town": {
    title: "Half-landing conversions",
    opening:
      "Kentish Town light refurbishment is a Victorian conversion flat: kitchen, half-landing bathroom, decoration and floors as one account.",
  },
  kilburn: {
    title: "Boundary conversions",
    opening:
      "Kilburn light refurbishment is a conversion flat on the Camden and Brent boundary; one programme, the stair protected.",
  },
  "hampstead-garden-suburb": {
    title: "Trust interiors",
    opening:
      "Suburb light refurbishment is an Arts and Crafts interior. Trust and Barnet sit on the outside; the plan of the house stays as it is.",
  },
};

const byService: Record<ServiceSlug, Record<string, ServiceAreaCue>> = {
  "kitchen-renovation": kitchen,
  "bathroom-renovation": bathroom,
  "painting-decorating": painting,
  "light-refurbishment": refurb,
};

export function serviceAreaCue(
  serviceSlug: ServiceSlug,
  areaSlug: string,
): ServiceAreaCue | undefined {
  return byService[serviceSlug]?.[areaSlug];
}

export const areaTitleCue: Record<string, string> = {
  hampstead: "Village conversions",
  "west-hampstead": "Rear-return flats",
  "belsize-park": "Stucco conversions",
  "st-johns-wood": "Mansion flats",
  "maida-vale": "Mansion blocks",
  "swiss-cottage": "Finchley Road corridor",
  "primrose-hill": "Park terraces",
  highgate: "Village houses",
  "golders-green": "Barnet family houses",
  "queens-park": "Terraces and Estate cottages",
  "muswell-hill": "Edwardian houses",
  "crouch-end": "Broadway conversions",
  "kentish-town": "Victorian conversions",
  kilburn: "Camden and Brent boundary",
  "hampstead-garden-suburb": "Trust houses",
  "hampstead-heath": "Heath-edge houses",
  "regents-park": "Listed terraces",
  archway: "Highgate-slope conversions",
  frognal: "Hill conversions",
  "temple-fortune": "Barnet family houses",
  "dartmouth-park": "Highgate-slope houses",
  "tufnell-park": "Conversion streets",
  "east-finchley": "Barnet family houses",
  "kensal-rise": "Victorian terraces",
  "south-hampstead": "Mansion flats",
};
