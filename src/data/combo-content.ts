import { paintingCombos } from "./combo-painting";
import { refurbCombos } from "./combo-refurb";
import type { ComboContent } from "./types";

const kitchen: Record<string, ComboContent> = {
  hampstead: {
    intro:
      "Kitchen renovation in Hampstead is usually a conversion or a village house, not a blank box. Chimney breasts, lime plaster and floors that have moved decide the run of units before a worktop is chosen. Lanes off Heath Street were not drawn for kitchen deliveries; the survey records access as well as the room. We fit kitchens inside the existing envelope, with extract planned for a conservation-area elevation rather than punched through the principal front as a convenience.",
    localNote:
      "Camden licences, village-lane timing, and listed or Hampstead Conservation Area constraints on external grilles are the usual extras to the fit-out itself. [VERIFY listing and CA on the property.]",
    localFaqs: [
      {
        q: "Can you fit a kitchen in a Hampstead conversion while we stay?",
        a: "Often, if there is a second sink or a temporary arrangement and we can isolate dust. In a one-bedroom village flat it may be more practical to decant kitchen use for the programme.",
      },
      {
        q: "Will the conservation area stop a new extract?",
        a: "It can restrict where the grille sits. We will not assume a hole in the principal elevation. [VERIFY on the specific house.]",
      },
    ],
    metaDescription:
      "Kitchen renovation in Hampstead NW3 conversions and village houses. Survey-led fit-out from Finchley Road. 020 7101 3168.",
  },
  "west-hampstead": {
    intro:
      "West Hampstead kitchens live in rear returns: a single window, a party wall, and a hallway shared with the rest of the conversion. The three stations on West End Lane make daytime loading competitive, so carcasses are planned off the high street. We replace and re-plan those rooms as kitchen renovation, not as a suburban island dropped into a Victorian footprint.",
    localNote:
      "Camden skip licences and CPZ on the residential streets. Party-wall noise belongs in the working hours. Some streets toward Fortune Green sit in a conservation area [VERIFY].",
    localFaqs: [
      {
        q: "Are rear-return kitchens too small for a proper fit-out?",
        a: "They are compact, not impossible. Layout follows the window, the stack and the door swing, not a catalogue island.",
      },
      {
        q: "Can you load from West End Lane?",
        a: "Rarely as a default. We use the side streets with a licence, timed around the interchange.",
      },
    ],
    metaDescription:
      "Kitchen renovation in West Hampstead NW6 rear returns and conversion flats. Hampstead Property Services Group. 020 7101 3168.",
  },
  "belsize-park": {
    intro:
      "Belsize kitchens are often later insertions: a former bedroom, a service room, a chimney breast in the wrong place. High ceilings look generous and then show every joint. Village streets are tight for vans; the avenues are easier but more likely to be mansion flats with a managing agent. We survey the room as found and fit a kitchen that the extract and the drainage will actually support.",
    localNote:
      "Belsize Park Conservation Area covers a large part of NW3 here [VERIFY]. Stucco and windows are elevation issues; the kitchen is an interior one unless extract lands on the front.",
    localFaqs: [
      {
        q: "Can you work around a chimney breast?",
        a: "Yes. We scribe cabinetry to it rather than pretending the wall is square.",
      },
      {
        q: "Village or avenue — does it change the job?",
        a: "Access and tenure change. The Village is tighter; the avenues more often have porters and a licence to alter. The fit-out sequence is the same.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Belsize Park NW3 conversions and mansion flats. Survey-led, conservation-aware. 020 7101 3168.",
  },
  "st-johns-wood": {
    intro:
      "St John's Wood kitchens are typically compact rooms in mansion blocks, on original risers, with a lift that will not take a run of carcasses. Villas and mews are the other stock — larger rooms, different joinery, still Westminster. Licence-to-alter packs are ordinary. We measure the lift and the stair before we order units, and we write the kitchen to the stacks that already exist.",
    localNote:
      "Westminster licences, block working hours, St John's Wood Conservation Area [VERIFY]. Lord's match days affect surrounding streets [VERIFY with the building].",
    localFaqs: [
      {
        q: "Will the managing agent need drawings?",
        a: "Usually, for a licence to alter. We can prepare drawings and a method statement. Consent is the agent's, not ours.",
      },
      {
        q: "Do units go in the lift?",
        a: "Often they do not. We plan the stair as the route.",
      },
    ],
    metaDescription:
      "Kitchen renovation in St John's Wood NW8 mansion flats and villas, including licence-to-alter packs. 020 7101 3168.",
  },
  "maida-vale": {
    intro:
      "A Maida Vale kitchen is still, in most mansion flats, the 1890s back room: long corridor, stack in a fixed place, a lift too small for a hopeful island. Little Venice houses and the mews are a different construction and a different access problem. We re-fit those rooms as kitchen renovation — quartz or timber worktops as generic categories, appliances installed, extract agreed before strip-out — without pretending the flat is a house.",
    localNote:
      "Westminster CPZ, porters' rules, Maida Vale Conservation Area [VERIFY]. Canal-side frontages may add Canal & River Trust questions [VERIFY].",
    localFaqs: [
      {
        q: "Can you relocate the sink in a mansion flat?",
        a: "Only if the drainage will serve the new position without cutting into another demise. We will say at survey.",
      },
      {
        q: "Are the lifts usable?",
        a: "For people, yes. For kitchen carcasses, often not. Stairs are the working assumption until we measure.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Maida Vale W9 mansion blocks and Little Venice houses. Compact layouts, survey-led. 020 7101 3168.",
  },
  "swiss-cottage": {
    intro:
      "Swiss Cottage kitchens sit in two stocks: mansion blocks on Finchley Road and Avenue Road, and converted Victorian houses a street back. Our office is in this neighbourhood, which does not change the method — it does change how quickly we can visit. Finchley Road loading is a corridor problem; the side streets are a Camden one. Layouts follow the block's risers or the conversion's chimney breast, not a generic plan.",
    localNote:
      "Adjoining conservation areas cover many residential streets [VERIFY which CA]. Finchley Road scaffold is a different process from a side street [VERIFY highway authority].",
    localFaqs: [
      {
        q: "Are you based in Swiss Cottage?",
        a: "The office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN.",
      },
      {
        q: "Block or conversion — which do you see more?",
        a: "Both. Avenue Road leans to blocks; the streets toward Belsize and Frognal lean to conversions.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Swiss Cottage NW3 mansion blocks and conversions, from our Finchley Road office. 020 7101 3168.",
  },
  "primrose-hill": {
    intro:
      "Primrose Hill kitchens are often lower-ground rooms in split houses, or compact rear spaces in terraces facing the park. Damp and extract are the first questions in a lower-ground kitchen, not the colour of the door. Park-facing streets add weekend van pressure. We fit kitchens inside those constraints, with conservation-area assumptions on windows and grilles until the map says otherwise.",
    localNote:
      "Primrose Hill Conservation Area [VERIFY]. Camden CPZ. Skip placement on park-facing streets needs extra notice.",
    localFaqs: [
      {
        q: "Will a lower-ground kitchen work?",
        a: "It can, if moisture and extract are solved. We will not decorate over a damp wall as part of a kitchen handover.",
      },
      {
        q: "Does the park affect the programme?",
        a: "It affects access. We plan drops away from peak visitor hours where we can.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Primrose Hill NW1 terraces and lower-ground rooms. Conservation-aware fit-out. 020 7101 3168.",
  },
  highgate: {
    intro:
      "Highgate kitchens sit in villas, Village houses and conversions on a slope, under more than one council. Confirming Camden, Haringey or Islington is part of the survey, not an afterthought. Steep roads and tree constraints affect deliveries and anything that touches an elevation. We fit kitchens internally, with extract routed away from a principal or Heath-facing front wherever the building allows.",
    localNote:
      "Split conservation areas and licensing [VERIFY the authority for the address]. Steep access; Village lanes are tight. Tree notice may apply even when the kitchen is internal [VERIFY TPO].",
    localFaqs: [
      {
        q: "Which council licences the skip?",
        a: "The borough the address sits in — Camden, Haringey or, on some streets, Islington. We confirm it from the address.",
      },
      {
        q: "Can you work in Highgate Village?",
        a: "Yes. Listing and access are tighter there than on the later streets toward East Finchley.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Highgate N6 villas and Village houses. Council and conservation checked by address. 020 7101 3168.",
  },
  "golders-green": {
    intro:
      "Golders Green kitchens are more often family rooms in Edwardian and inter-war houses than compact mansion-block galleys. Plots are larger, off-street parking is more common, and Barnet is the council. We still survey: pebbledash houses hide out-of-square walls and later partitions as readily as a Camden conversion. The high street on Golders Green Road is a loading problem; the crescents behind it are not.",
    localNote:
      "Barnet licences. Selected streets near Golders Hill Park are in a conservation area [VERIFY]. Typical instruction is a family-house replacement, not a stacked-riser galley.",
    localFaqs: [
      {
        q: "Do you fit family-house kitchens as well as flats?",
        a: "Yes. Houses are the bulk of the local stock.",
      },
      {
        q: "Is this Hampstead Garden Suburb?",
        a: "No. The Suburb is next door and has its own Trust. Golders Green is ordinary Barnet planning unless the map says otherwise.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Golders Green NW11 family houses and mansion flats. Barnet, survey-led. 020 7101 3168.",
  },
  "queens-park": {
    intro:
      "Queen's Park kitchens sit in late-Victorian terraces, conversion flats, and — on the Westminster side — the Estate cottages, which are a different joinery problem. Two councils mean two skip regimes. We fit kitchens to the room that exists: bay-fronted terraces with rear returns, or Estate interiors that should not be treated as a blank box.",
    localNote:
      "Confirm Brent or Westminster first [VERIFY]. Two conservation-area names apply to different parts of the neighbourhood. Salusbury Road is a busy loading spine.",
    localFaqs: [
      {
        q: "Does it matter which side of Queen's Park I am on?",
        a: "For licensing and conservation, yes. Interior kitchen method is similar; the paperwork is not.",
      },
      {
        q: "Can you work in the Estate cottages?",
        a: "Yes, with the original joinery treated as joinery, not as a surface to box in.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Queen's Park NW6 terraces and Estate cottages. Brent and Westminster addresses. 020 7101 3168.",
  },
  "muswell-hill": {
    intro:
      "Muswell Hill kitchens are Edwardian family rooms on a slope, or tighter flats above the Broadway. The hill is a delivery constraint; the conservation area is a window-and-shopfront constraint. We fit kitchens as a measured interior job, with van type and drop point planned rather than assumed.",
    localNote:
      "Haringey licences. Muswell Hill Conservation Area on the Broadway and many residential streets [VERIFY]. Steep streets; CPZ on many roads [VERIFY].",
    localFaqs: [
      {
        q: "Is the hill a real issue for a kitchen delivery?",
        a: "For long-wheelbase vans, yes. We plan vehicle and drop point at survey.",
      },
      {
        q: "Broadway flat or house on the slope?",
        a: "Both occur. Access and extract differ; the fit-out sequence does not.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Muswell Hill N10 Edwardian houses and Broadway flats. Haringey. 020 7101 3168.",
  },
  "crouch-end": {
    intro:
      "Crouch End kitchens are typically rear rooms in converted Victorian and Edwardian houses, not mansion-block galleys. The Broadway is for shopping, not for leaving a skip. We re-fit those rooms with the original hall left alone where it is sound, and with Haringey licensing on the side streets.",
    localNote:
      "Crouch End Conservation Area on the core [VERIFY]. Side streets are the loading points. Parking mix of CPZ and less restricted roads [VERIFY].",
    localFaqs: [
      {
        q: "Do you keep original mouldings?",
        a: "Where they are sound and outside the kitchen envelope, yes. Inside the room, the specification is written after survey.",
      },
      {
        q: "Can a skip sit on the Broadway?",
        a: "That is not the working assumption. We licence a residential side street.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Crouch End N8 converted houses. Rear-room layouts, Haringey licences. 020 7101 3168.",
  },
  "kentish-town": {
    intro:
      "Kentish Town kitchens sit in rear returns and lower-ground rooms of a denser Victorian grain than Hampstead. Former workshops and later infill mix with terraces. Damp in lower-ground rooms is a survey item. We fit kitchens here as conversion work: party walls, shared hallways, Camden licences, and a High Street that is a corridor.",
    localNote:
      "Conservation-area coverage is by street [VERIFY]. Kentish Town Road is a poor skip location. Neighbour noise belongs in the programme.",
    localFaqs: [
      {
        q: "Lower-ground kitchen — is damp a blocker?",
        a: "It can be, until it is understood. We will not hang units on a wet wall.",
      },
      {
        q: "Is Kentish Town the same as Camden Town for this work?",
        a: "No. The housing grain and the streets are different even though both are Camden.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Kentish Town NW5 conversions and rear returns. Camden, survey-led. 020 7101 3168.",
  },
  kilburn: {
    intro:
      "Kilburn kitchens sit either side of a borough boundary. East of the High Road the stock leans to Victorian conversions toward West Hampstead; west, the mix is wider. Flats above shops add a stair and extract problem. We confirm Camden or Brent before a skip is licensed, then fit the kitchen to the room — not to the neighbourhood name.",
    localNote:
      "Two licensing regimes [VERIFY borough]. High Road is a major route. Access through shop premises needs a method statement.",
    localFaqs: [
      {
        q: "Does the High Road boundary change the kitchen?",
        a: "It changes the council. The room still decides the layout.",
      },
      {
        q: "Flats above shops — can you get units in?",
        a: "Usually via a narrow stair. We measure before we order.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Kilburn NW6 conversions and flats above shops. Camden and Brent addresses. 020 7101 3168.",
  },
  "hampstead-garden-suburb": {
    intro:
      "A kitchen in Hampstead Garden Suburb is an internal job under a planned Arts and Crafts envelope. The Trust, Barnet planning and an Article 4 direction sit on the outside of the house. We re-fit kitchens without treating the elevation as a place to land an extract grille by default. Permitted development is not the working assumption. Closes and greens need quieter, smaller deliveries than a Camden terrace.",
    localNote:
      "Verify Trust boundary and CA — they are not identical [VERIFY]. External extract, windows and painting can need both Barnet and Trust consent. Interior kitchens that do not change the elevation are still checked, not assumed.",
    localFaqs: [
      {
        q: "Do I need Trust consent to replace a kitchen?",
        a: "Internal work that does not change the elevation often sits outside Trust consent, but we do not assume it if an extract or window is involved. [VERIFY.]",
      },
      {
        q: "Can you work on a close or a green?",
        a: "Yes, with deliveries planned for the setting. These streets are not loading bays.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Hampstead Garden Suburb NW11. Internal fit-out under Trust and Barnet rules. 020 7101 3168.",
  },
};

const bathroom: Record<string, ComboContent> = {
  hampstead: {
    intro:
      "Bathroom renovation in Hampstead is waterproofing in old fabric: timber floors in conversions, listed or conservation elevations that will not take a casual grille, and village lanes that constrain when a bath can be carried in. We tank wet areas, set falls, and route extract before sanitaryware is chosen. A village ensuite that cannot reach a stack is not forced.",
    localNote:
      "Camden licences, Hampstead Conservation Area and listed buildings around the village core [VERIFY]. Timed loading on lanes.",
    localFaqs: [
      {
        q: "Can you form an ensuite in a Hampstead conversion?",
        a: "Where drainage and extract can be routed without damaging principal rooms or the elevation. Some rooms cannot take a shower without a pump; we will say so.",
      },
      {
        q: "Do you tank as standard?",
        a: "Wet areas are waterproofed to a documented system, particularly on timber floors.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Hampstead NW3 conversions and village houses, with tanking and extract planned. 020 7101 3168.",
  },
  "west-hampstead": {
    intro:
      "West Hampstead bathrooms are often stacked on half-landings in converted terraces. The soil stack is where it is; the room is a remainder. We renovate those bathrooms as waterproofing and drainage problems first, finishes second, with party-wall neighbours written into the hours.",
    localNote:
      "Camden licences, competitive loading off West End Lane, possible CA toward Fortune Green [VERIFY].",
    localFaqs: [
      {
        q: "Half-landing bathrooms — can the layout change?",
        a: "Within what the stack will serve. Moving a WC a long way is often the item that is not possible without work we do not do.",
      },
      {
        q: "Will the neighbours hear it?",
        a: "In a terrace, yes, if we ignore hours. Noisy work is programmed, not left to chance.",
      },
    ],
    metaDescription:
      "Bathroom renovation in West Hampstead NW6 conversions, including half-landing stacked rooms. 020 7101 3168.",
  },
  "belsize-park": {
    intro:
      "Belsize bathrooms are frequently later insertions in high-ceilinged conversions, or compact rooms in mansion flats on the avenues. Extract through a stucco elevation is a conservation question. We tank, set wastes, and only then tile. The Village and the avenues differ in access; they do not differ in the need for waterproofing on timber floors.",
    localNote:
      "Belsize Park Conservation Area [VERIFY]. Haverstock Hill is a corridor; Village lanes are tight.",
    localFaqs: [
      {
        q: "Can you add a shower to a former bedroom?",
        a: "If a stack and an extract route exist or can be formed without cutting another demise. Survey first.",
      },
      {
        q: "Are mansion-block bathrooms different?",
        a: "Shared drainage and a managing agent usually, yes. The tanking standard is the same.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Belsize Park NW3 conversions and mansion flats. Tanking, extract, compact layouts. 020 7101 3168.",
  },
  "st-johns-wood": {
    intro:
      "St John's Wood bathrooms in mansion blocks are stacked, compact, and watched by an agent. A leak is a neighbour problem. We tank to a documented system, coordinate wastes, and work to the building's hours. Villa bathrooms are larger but often still on timber, still Westminster, still conservation-area if the elevation is touched.",
    localNote:
      "Westminster licences, block rules, St John's Wood Conservation Area [VERIFY]. Lord's days affect access [VERIFY].",
    localFaqs: [
      {
        q: "Will you work with the porter's hours?",
        a: "Yes. The building's rules sit in the programme.",
      },
      {
        q: "Do wastes go through the flat below?",
        a: "Sometimes connections sit in a void. We do not cut into another demise without the building's process.",
      },
    ],
    metaDescription:
      "Bathroom renovation in St John's Wood NW8 mansion flats and villas. Licence-to-alter and tanking. 020 7101 3168.",
  },
  "maida-vale": {
    intro:
      "Maida Vale bathrooms sit on timber intermediate floors above a neighbour, in purpose-built flats whose wastes were drawn in the 1890s. Tanking is not a nice-to-have. Little Venice houses add canal-side constraints if anything hits the elevation. We renovate the room as a waterproofing and drainage job that happens to include sanitaryware.",
    localNote:
      "Westminster, Maida Vale Conservation Area [VERIFY], small lifts, porters. Canal Trust on some frontages [VERIFY].",
    localFaqs: [
      {
        q: "Why does tanking matter more here?",
        a: "Because the floor is often timber over another flat. A failed seal is not a private problem.",
      },
      {
        q: "Can you do a wet room?",
        a: "Where the floor build-up and the waterproofing system will take it. Not every mansion-flat floor can.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Maida Vale W9 mansion blocks, with tanking on timber floors. 020 7101 3168.",
  },
  "swiss-cottage": {
    intro:
      "Swiss Cottage bathrooms are mansion-block stacked rooms on Avenue Road and Finchley Road, or conversion bathrooms a street back. Our Finchley Road office is in the neighbourhood. Extract on a main-road elevation and extract on a conservation side street are different permissions. We survey the stack and the grille location before we strip the room.",
    localNote:
      "Camden; adjoining CAs on many side streets [VERIFY]. Finchley Road loading is a corridor issue.",
    localFaqs: [
      {
        q: "Can you visit quickly because you are nearby?",
        a: "We are based at 250 Finchley Road. Survey still happens in the room; proximity only helps the diary.",
      },
      {
        q: "Block bathrooms versus conversion bathrooms?",
        a: "Shared risers and agents in blocks; party walls and half-landings in conversions. Tanking in both.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Swiss Cottage NW3, from our Finchley Road office. Tanking and extract planned. 020 7101 3168.",
  },
  "primrose-hill": {
    intro:
      "Primrose Hill bathrooms in split houses often sit a long way from the stack, with a park-facing elevation that will not take a casual extract grille. Lower-ground rooms add moisture. We will not force an ensuite where the drainage cannot go. Conservation-area windows and roofscape stay out of the bathroom unless the map and the listing allow it.",
    localNote:
      "Primrose Hill Conservation Area [VERIFY]. Weekend access around the park. Camden CPZ.",
    localFaqs: [
      {
        q: "Long drainage runs in split houses — a problem?",
        a: "They can be. Falls, pumps and stack location are survey items. We will not hide a bad run behind tiling.",
      },
      {
        q: "Park-facing extract?",
        a: "Not as a convenience. Routes are agreed so the elevation stays as the conservation area expects. [VERIFY]",
      },
    ],
    metaDescription:
      "Bathroom renovation in Primrose Hill NW1 houses and splits, with drainage and extract surveyed. 020 7101 3168.",
  },
  highgate: {
    intro:
      "Highgate bathrooms depend on which slope and which council the house sits on. Village listed fabric, villa stacks a long way from a proposed ensuite, steep access for a bath: all ordinary, none assumed from the postcode N6. We confirm the authority, then tank and ventilate the room we actually have.",
    localNote:
      "Camden / Haringey / Islington [VERIFY]. Split CAs. Trees and steep roads. Village access is tight.",
    localFaqs: [
      {
        q: "Can you add an ensuite in a Highgate villa?",
        a: "Where the stack can be reached without damaging principal rooms. If not, we will say so.",
      },
      {
        q: "Do I need different permission in the Village?",
        a: "Often tighter listing and CA rules, and a different council from the later streets. We confirm both.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Highgate N6 villas and Village houses. Authority and extract checked by address. 020 7101 3168.",
  },
  "golders-green": {
    intro:
      "Golders Green bathrooms are more often family bathrooms in houses than stacked mansion-flat rooms. That does not remove tanking or extract. Barnet licensing, larger plots, and a high street that is awkward at peak hours are the local difference. We renovate the room as found, including later first-floor additions already built — we do not form those additions.",
    localNote:
      "Barnet licences. Selected CA streets [VERIFY]. Off-street parking is more common than in NW3.",
    localFaqs: [
      {
        q: "Family bathroom rather than a compact ensuite?",
        a: "That is the typical local room. Compact ensuites exist in the flats along the main roads.",
      },
      {
        q: "Is Trust consent involved?",
        a: "Not by default. That is the Suburb next door. [VERIFY the map.]",
      },
    ],
    metaDescription:
      "Bathroom renovation in Golders Green NW11 family houses and flats. Barnet, tanking as standard. 020 7101 3168.",
  },
  "queens-park": {
    intro:
      "Queen's Park bathrooms sit in terraces and in Estate cottages. Two boroughs, two conservation audits. A cottage bathroom is a joinery-and-space problem; a terrace conversion is a stack-and-party-wall problem. We tank both. Licences are applied to the council the address actually sits in.",
    localNote:
      "Brent and Westminster [VERIFY]. Separate CAs. Salusbury Road loading is busy.",
    localFaqs: [
      {
        q: "Estate cottages — can they take a modern wet room?",
        a: "Some can, if the floor and the waterproofing will take it. Some cannot without losing the character the CA is there to keep. Survey first.",
      },
      {
        q: "Which council for a skip?",
        a: "The one the address is in. We do not guess from the neighbourhood name.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Queen's Park NW6 terraces and Estate cottages. Brent and Westminster. 020 7101 3168.",
  },
  "muswell-hill": {
    intro:
      "Muswell Hill bathrooms in Edwardian houses have more space than a Maida Vale ensuite and a hill that complicates deliveries. Broadway flats are the compact version. Haringey conservation area on the core streets. We tank, ventilate internal rooms, and plan the van for the slope.",
    localNote:
      "Haringey, Muswell Hill CA [VERIFY], steep streets, CPZ [VERIFY].",
    localFaqs: [
      {
        q: "Internal bathrooms without a window?",
        a: "They need mechanical extract with a clear route to outside. We will not leave them on a window that does not exist.",
      },
      {
        q: "House on the slope — access?",
        a: "We plan vehicle type. Long-wheelbase is not always possible.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Muswell Hill N10 Edwardian houses and Broadway flats. Haringey. 020 7101 3168.",
  },
  "crouch-end": {
    intro:
      "Crouch End bathrooms are conversion rooms: rear additions already built, half-landings, original houses split into flats. The Broadway clock tower is a landmark, not a loading bay. We renovate with Haringey licences on the side streets and a waterproofing specification that does not care about the postcard.",
    localNote:
      "Crouch End Conservation Area on the core [VERIFY]. Side-street loading.",
    localFaqs: [
      {
        q: "Rear addition bathrooms — are they ours to form?",
        a: "We renovate rooms that exist. Forming a new rear addition is not light refurbishment and is not this service.",
      },
      {
        q: "Occupied house — can you still do the bathroom?",
        a: "Yes, if a second bathroom exists or you can live around a short programme. We will say at survey.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Crouch End N8 conversions. Tanking, Haringey side-street access. 020 7101 3168.",
  },
  "kentish-town": {
    intro:
      "Kentish Town bathrooms share the dense Victorian grain of the kitchens: rear returns, lower-ground moisture, stacked conversions, a High Street corridor. We tank timber floors, respect the stack, and keep noisy work inside a written programme because the neighbours are close.",
    localNote:
      "Camden, CA by street [VERIFY]. Kentish Town Road is a poor skip site.",
    localFaqs: [
      {
        q: "Lower-ground bathroom and damp?",
        a: "Survey first. Waterproofing a wet structure is not a finish.",
      },
      {
        q: "How close are the neighbours?",
        a: "Close enough that hours and protection of common parts are part of the method, not a courtesy.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Kentish Town NW5 conversions. Tanking, Camden terraces. 020 7101 3168.",
  },
  kilburn: {
    intro:
      "Kilburn bathrooms sit on both sides of the High Road. Conversion stacked rooms toward West Hampstead, a wider mix toward Brent, flats above shops with awkward extract. We confirm the borough, then waterproof the room. A skip on the High Road is not the plan.",
    localNote:
      "Camden or Brent [VERIFY]. Major-road loading. Shop-flat access needs a method statement.",
    localFaqs: [
      {
        q: "Flats above shops — extract?",
        a: "A real constraint. We will not punch a grille without a route and a permission path.",
      },
      {
        q: "Two boroughs — two specifications?",
        a: "Two licensing regimes. One tanking standard.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Kilburn NW6, both Camden and Brent sides of the High Road. 020 7101 3168.",
  },
  "hampstead-garden-suburb": {
    intro:
      "A bathroom in the Suburb is internal work under an Arts and Crafts envelope. Extract grilles, soil pipes and window changes are where Trust and Barnet planning arrive. We tank and ventilate inside the room, and we do not treat the close as a place to sit a skip without thought. Permitted development is not assumed.",
    localNote:
      "Trust + Barnet + Article 4 [VERIFY both maps]. Deliveries on greens and closes are planned.",
    localFaqs: [
      {
        q: "Can extract go through the roof or the elevation?",
        a: "Only with the consents the property actually needs. We will not assume a grille. [VERIFY]",
      },
      {
        q: "Is an internal bathroom still controlled?",
        a: "The interior fit-out is our work. Anything that breaks the envelope is checked against Trust and Barnet before we open up.",
      },
    ],
    metaDescription:
      "Bathroom renovation in Hampstead Garden Suburb NW11. Internal tanking under Trust and Barnet rules. 020 7101 3168.",
  },
};

export const comboContent: Record<string, Record<string, ComboContent>> = {
  "kitchen-renovation": kitchen,
  "bathroom-renovation": bathroom,
  "painting-decorating": paintingCombos,
  "light-refurbishment": refurbCombos,
};

export function getComboContent(
  serviceSlug: string,
  areaSlug: string,
): ComboContent | undefined {
  return comboContent[serviceSlug]?.[areaSlug];
}
