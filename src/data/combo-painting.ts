import type { ComboContent } from "./types";

export const paintingCombos: Record<string, ComboContent> = {
  hampstead: {
    intro:
      "Painting and decorating in Hampstead is preparation on original fabric: lime plaster, sash windows, listed interiors around the village core, and occupied houses that cannot be emptied for a spray shop. We write a prep specification, sequence rooms, and sample colour on the wall in NW3 light — which is not showroom light.",
    localNote:
      "Hampstead Conservation Area and listed buildings [VERIFY]. Village-lane access. Sash joinery is priced as joinery, not as a quick cut-in.",
    localFaqs: [
      {
        q: "Do you decorate listed interiors?",
        a: "Interior decoration is ordinary work. Listed constraints bite when coatings, windows or external joinery change. [VERIFY listing.]",
      },
      {
        q: "Spray in a village house?",
        a: "Empty rooms, sometimes. Occupied original joinery, usually brush and roller.",
      },
    ],
    metaDescription:
      "Painting and decorating in Hampstead NW3: preparation, sashes, occupied homes. 020 7101 3168.",
  },
  "west-hampstead": {
    intro:
      "West Hampstead decorating is conversion plaster, party-wall hours, and rooms sequenced around a family still living on West End Lane's hinterland. Rear returns and half-landings show every thin fill. We prepare properly, then coat to a written sheen.",
    localNote:
      "Camden licences, CPZ, possible CA toward Fortune Green [VERIFY]. Occupied-home sequencing is the default.",
    localFaqs: [
      {
        q: "Can you decorate while we stay?",
        a: "Yes. A kitchen, bathroom and bedroom are kept usable where the programme allows.",
      },
      {
        q: "Lining paper in a conversion?",
        a: "Where movement would telegraph through paint, yes. It is specified, not slipped in.",
      },
    ],
    metaDescription:
      "Painting and decorating in West Hampstead NW6 conversions, including occupied homes. 020 7101 3168.",
  },
  "belsize-park": {
    intro:
      "Belsize decorating is high ceilings and stucco-era interiors that punish a shortcut in filling. Village rooms and avenue mansion flats both need a prep specification; only the access and the agent change. Colour is sampled on the wall.",
    localNote:
      "Belsize Park Conservation Area [VERIFY]. High rooms, original joinery, tight Village access.",
    localFaqs: [
      {
        q: "High ceilings — more cost or more time?",
        a: "More of both, because access and prep scale with the room. We write it into the programme.",
      },
      {
        q: "Common parts in a conversion?",
        a: "If instructed, with the freeholder's rules. Hall decoration is a separate scope from the flat.",
      },
    ],
    metaDescription:
      "Painting and decorating in Belsize Park NW3, including high-ceilinged conversions. 020 7101 3168.",
  },
  "st-johns-wood": {
    intro:
      "St John's Wood decorating in mansion blocks is as much porter hours and common-parts protection as it is paint. Villa interiors are original joinery at a different scale. We decorate to a written spec, in Westminster, with the building's rules in the programme.",
    localNote:
      "Westminster, St John's Wood CA [VERIFY], block hours, Lord's days [VERIFY].",
    localFaqs: [
      {
        q: "Will you protect common parts?",
        a: "Yes. Agents notice floors and stairs first.",
      },
      {
        q: "Can you match an existing mansion-flat colour?",
        a: "We sample on the wall. Old coatings in these blocks are rarely a single product.",
      },
    ],
    metaDescription:
      "Painting and decorating in St John's Wood NW8 mansion flats and villas. 020 7101 3168.",
  },
  "maida-vale": {
    intro:
      "Maida Vale decorating is long corridors, original joinery in terracotta blocks, and neighbours who share walls. Spray is rarely the default in a furnished flat. We prepare, coat, and snag in daylight and with the lights on.",
    localNote:
      "Westminster, Maida Vale CA [VERIFY], small lifts, porters.",
    localFaqs: [
      {
        q: "Corridors and common parts?",
        a: "The demise we are instructed on. Common parts need the agent. We will not paint a hallway we have not been given.",
      },
      {
        q: "Heritage colours?",
        a: "From established generic ranges, sampled in the room. No exclusive palette claim.",
      },
    ],
    metaDescription:
      "Painting and decorating in Maida Vale W9 mansion flats, occupied or empty. 020 7101 3168.",
  },
  "swiss-cottage": {
    intro:
      "Swiss Cottage decorating covers mansion flats on the main roads and converted houses a street back. Our office is on Finchley Road. Inter-war blocks and Victorian conversions need different prep; they do not need a different honesty about filling.",
    localNote:
      "Camden, adjoining CAs [VERIFY]. Finchley Road access versus side streets.",
    localFaqs: [
      {
        q: "Do you decorate from the Finchley Road office?",
        a: "The office is at 250 Finchley Road. The work is on site, not from a van parked at the office.",
      },
      {
        q: "Inter-war flats — different paint system?",
        a: "Different substrates. The specification follows the wall, not the decade of the block as a slogan.",
      },
    ],
    metaDescription:
      "Painting and decorating in Swiss Cottage NW3, from our Finchley Road office. 020 7101 3168.",
  },
  "primrose-hill": {
    intro:
      "Primrose Hill decorating is original sashes, park-facing light, and weekend access that must be planned. Lower-ground rooms need moisture understood before they are painted. We prepare, we do not coat over damp.",
    localNote:
      "Primrose Hill CA [VERIFY]. Park visitor traffic. Camden CPZ.",
    localFaqs: [
      {
        q: "Lower-ground rooms looking tired?",
        a: "Often moisture. We will not paint a damp wall as a finish.",
      },
      {
        q: "Sash windows as well as walls?",
        a: "If instructed, as joinery. Failed cords and putty are not a paint item. [VERIFY listed windows.]",
      },
    ],
    metaDescription:
      "Painting and decorating in Primrose Hill NW1 houses and splits. Preparation first. 020 7101 3168.",
  },
  highgate: {
    intro:
      "Highgate decorating follows the house and the council, not the postcode. Village interiors, villa joinery, steep access, trees: we confirm the authority, then write a prep spec. Heath-facing elevations are not a place to trial a new external colour without checking.",
    localNote:
      "Split boroughs and CAs [VERIFY]. Steep access. Tree constraints [VERIFY TPO].",
    localFaqs: [
      {
        q: "External painting in the Village?",
        a: "Where previously painted and where consent allows. We check before we quote a colour on an elevation. [VERIFY]",
      },
      {
        q: "Which council?",
        a: "Camden, Haringey or Islington depending on the street. We confirm it from the address.",
      },
    ],
    metaDescription:
      "Painting and decorating in Highgate N6 Village houses and villas. Authority checked by address. 020 7101 3168.",
  },
  "golders-green": {
    intro:
      "Golders Green decorating is family houses more often than stacked flats: more rooms, more joinery, more chance of working around occupation. Barnet licensing, off-street parking, a high street that is awkward at peak hours. We write a prep spec and sequence the house.",
    localNote:
      "Barnet. Selected CA streets [VERIFY]. Not Trust by default.",
    localFaqs: [
      {
        q: "Whole-house decorate while we stay?",
        a: "Yes, sequenced. Empty is faster. We will say which after survey.",
      },
      {
        q: "Pebbledash exteriors?",
        a: "Previously painted masonry, where access and weather allow, is in scope. Bare pebbledash is a different specification.",
      },
    ],
    metaDescription:
      "Painting and decorating in Golders Green NW11 family houses. Barnet. 020 7101 3168.",
  },
  "queens-park": {
    intro:
      "Queen's Park decorating covers terraces and Estate cottages. The cottages' joinery is the point of the conservation audit; it is not boxed in. Two councils, two licences. We prepare and paint the demise we are given.",
    localNote:
      "Brent / Westminster [VERIFY]. Two CA names. Salusbury Road is busy.",
    localFaqs: [
      {
        q: "Estate original joinery?",
        a: "Treated as joinery. Filling and coating follow a written spec, not a one-day cut-in.",
      },
      {
        q: "Two boroughs?",
        a: "Yes. Licences follow the address.",
      },
    ],
    metaDescription:
      "Painting and decorating in Queen's Park NW6 terraces and Estate cottages. 020 7101 3168.",
  },
  "muswell-hill": {
    intro:
      "Muswell Hill decorating is Edwardian interiors on a slope and flats above the Broadway. The conservation area watches shopfronts and fenestration; we watch the plaster. Van type is planned for the hill.",
    localNote:
      "Haringey, Muswell Hill CA [VERIFY], steep streets.",
    localFaqs: [
      {
        q: "Broadway flats — can you decorate occupied?",
        a: "Yes, with dust control. Spray is rarely the default in a furnished flat.",
      },
      {
        q: "Edwardian halls and mouldings?",
        a: "If they are in scope, they are specified as joinery and plaster, not as a quick emulsion.",
      },
    ],
    metaDescription:
      "Painting and decorating in Muswell Hill N10 Edwardian houses and Broadway flats. 020 7101 3168.",
  },
  "crouch-end": {
    intro:
      "Crouch End decorating is converted-house plaster, tiled halls, and occupied family rooms around the Broadway. We sequence, prepare, and coat. The clock tower is not a loading plan.",
    localNote:
      "Haringey, Crouch End CA on the core [VERIFY]. Side-street loading.",
    localFaqs: [
      {
        q: "Tiled Victorian halls — paint or keep?",
        a: "We do not paint original tiled dados as a default. Scope is written after survey.",
      },
      {
        q: "Occupied conversions?",
        a: "Yes. Room sequence is part of the proposal.",
      },
    ],
    metaDescription:
      "Painting and decorating in Crouch End N8 conversions, including occupied homes. 020 7101 3168.",
  },
  "kentish-town": {
    intro:
      "Kentish Town decorating is dense terraces, workshop conversions, and close neighbours. Prep on mixed later patches is the work. Hours are written down. The High Street is a corridor, not a paint store.",
    localNote:
      "Camden, CA by street [VERIFY]. Neighbour proximity.",
    localFaqs: [
      {
        q: "Mixed old and new plaster?",
        a: "Common. The spec follows the substrate in each room.",
      },
      {
        q: "Noisy prep in a terrace?",
        a: "Rubbing down is programmed into hours, not left as an all-day default.",
      },
    ],
    metaDescription:
      "Painting and decorating in Kentish Town NW5 conversions and terraces. 020 7101 3168.",
  },
  kilburn: {
    intro:
      "Kilburn decorating sits both sides of the High Road. Conversion interiors toward West Hampstead, a wider mix toward Brent, flats above shops with awkward access. We confirm the council, then prepare the rooms.",
    localNote:
      "Camden or Brent [VERIFY]. High Road is not a skip default.",
    localFaqs: [
      {
        q: "Flats above shops — dust into the shop?",
        a: "Protection and hours are written. We will not treat the stair as a chute.",
      },
      {
        q: "Does the borough change the paint spec?",
        a: "It changes the licence. The wall still decides the system.",
      },
    ],
    metaDescription:
      "Painting and decorating in Kilburn NW6, Camden and Brent sides of the High Road. 020 7101 3168.",
  },
  "hampstead-garden-suburb": {
    intro:
      "Decorating in the Suburb is internal coatings under an envelope the Trust cares about. External colour, windows and previously painted surfaces can sit with Trust and Barnet. We decorate interiors to a written prep spec and we do not trial a new elevation colour without checking.",
    localNote:
      "Trust + Barnet + Article 4 [VERIFY]. Closes and greens are not loading bays.",
    localFaqs: [
      {
        q: "Can I change the outside colour?",
        a: "Not as a casual extra. Trust and Barnet may both apply. [VERIFY]",
      },
      {
        q: "Interior emulsion — still controlled?",
        a: "Interior decoration is our ordinary work. The envelope is where the extra consents sit.",
      },
    ],
    metaDescription:
      "Painting and decorating in Hampstead Garden Suburb NW11. Interiors under Trust and Barnet rules. 020 7101 3168.",
  },
};
