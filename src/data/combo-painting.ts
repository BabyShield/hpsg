import { combo } from "./combo-build";
import type { ComboContent } from "./types";

export const paintingCombos: Record<string, ComboContent> = {
  hampstead: combo({
    lede:
      "Painting and decorating in Hampstead is preparation on original fabric: lime plaster, original sashes, listed village interiors, and lanes that were not drawn for a spray van.",
    intro: [
      "Hampstead (NW3) is Camden. The village core around Heath Street and the High Street is Georgian and early-Victorian houses, later stucco villas, and mansion blocks on the busier approaches. Converted houses supply many of the flats. Original joinery, lime plaster and floors that have moved are the norm. Larger family houses sit toward the Heath and along Frognal; we decorate the rooms as they stand, not as a vacant new-build.",
      "The decorating fabric here is rarely a gypsum box. Lime plaster, hairline movement at chimney breasts, and original sashes decide the specification before a colour is chosen. North-facing village rooms and Heath-edge light do not read the same emulsion as a showroom. We sample on the wall in the room. Occupied houses are the default; a village interior cannot usually be emptied for a spray shop.",
      "Much of Hampstead sits in Camden's Hampstead Conservation Area, with a high concentration of listed buildings around the village core. External painting, replacement windows and coatings on original joinery are tightly controlled. Interior decoration is ordinary work until the elevation, the windows or the listed fabric are altered. [VERIFY the conservation-area boundary and listed status on the specific property via Camden's map.]",
    ],
    rooms:
      "Typical instructions are whole-flat decoration in conversions, principal rooms in village houses, and original sashes priced as joinery rather than as a cut-in. Lime plaster that has moved will telegraph through a thin fill; lining paper is specified where that movement would show, not slipped in on the day. High rooms toward Frognal need access written into the programme. Occupied sequencing — a kitchen, a bathroom and a bedroom kept usable — is the working assumption unless the house is empty.",
    working: [
      "Camden issues skip and scaffolding licences. Controlled parking covers most of NW3 [VERIFY the CPZ code for the street]. Village lanes need timed loading; a scaffold on a listed front is a consent question as well as an access one. A conversion that shares a stair needs common-parts protection written into the method.",
      "Where a freeholder or managing agent controls common parts, hall decoration is a separate scope from the demise. External colour on a conservation-area or listed elevation is checked before it is quoted. We sequence occupied rooms; we do not assume the house can be emptied. [VERIFY listing and tenure on the address.]",
    ],
    specification: [
      "The specification is written after a room-by-room survey of substrates, previous coatings, damp staining and joinery. Lime and gypsum are not treated as the same wall. Prep standard, product type, number of coats and sheen are written down. Colour is sampled on the wall in Hampstead light, not chosen from a card in a different room.",
      "Sash windows, shutters, picture rails and original doors are programmed and priced as joinery. Failed cords, staff beads or putty are not a paint item; we say so before we start. [VERIFY listed-window constraints.] Spray is used where a room is empty and the method is cleaner; brush and roller remain the default around furnished original fabric. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Do you decorate listed interiors in the village?",
        a: "Interior decoration within existing rooms is ordinary work. Listed constraints bite when coatings, windows or external joinery change. We check listing on the address before we open a tin. [VERIFY.]",
      },
      {
        q: "Can ordinary emulsion go on lime plaster?",
        a: "Not as a default. The coating follows the substrate. We will not put a modern film over lime that needs to breathe, and we will not pretend a later gypsum patch is the same wall.",
      },
      {
        q: "Will you spray a village house?",
        a: "Empty rooms, sometimes. Occupied original joinery, usually brush and roller. The method is chosen per room, not as a house slogan.",
      },
      {
        q: "How do deliveries work off Heath Street?",
        a: "They are timed. Village lanes are not loading bays. The survey records the vehicle and the drop point.",
      },
    ],
    metaDescription:
      "Painting and decorating in Hampstead NW3 village houses and conversions. Lime plaster, original sashes. 020 7101 3168.",
  }),

  "west-hampstead": combo({
    lede:
      "West Hampstead decorating is conversion plaster, party-wall hours, and rooms sequenced around a household still living behind West End Lane.",
    intro: [
      "West Hampstead (NW6) is Camden. The stock is largely Victorian and Edwardian terraces and semi-detached houses, many converted to flats, with later mansion blocks near the transport interchange. West End Lane is the commercial spine. Behind it, brick terraces hold original bay windows, timber floors and stacked bathrooms on half-landings. Rear returns and half-landings are the rooms that show every thin fill.",
      "The decorating fabric is conversion plaster: later patches on original walls, lining that has been painted until it fails, and joinery that has been cut in around a family still in occupation. Occupied-home sequencing is the default, not a courtesy. Three stations on West End Lane — Underground, London Overground and Thameslink — make daytime loading competitive; materials are planned off the high street.",
      "Parts of the area sit in Camden conservation areas, including streets around Fortune Green and the South Hampstead approaches. Unlisted terraces may still be subject to Article 4 directions on windows. External painting of previously painted joinery is checked against that map, not assumed as permitted development. [VERIFY the named conservation area and any Article 4 for the address.]",
    ],
    rooms:
      "A typical instruction is a conversion flat decorated around occupation: rear-return walls that have moved, half-landing joinery, and a hallway shared with the rest of the house. Lining paper is specified where movement would telegraph through paint, not added as a silent extra. Party-wall noise from rubbing down belongs in the working hours. Mansion-block rooms near the interchange are a different tenure and a different agent, not a different honesty about filling.",
    working: [
      "Camden skip and scaffolding licences are required. Controlled parking applies on the residential streets [VERIFY the CPZ]. Loading from West End Lane is rarely the default; we use side streets with a licence, timed around the interchange. A kitchen, a bathroom and a bedroom are kept usable where the programme allows.",
      "Conversions share stairs and hallways. Common-parts protection and neighbour notice are part of the method. Where a freeholder controls the hall, that decoration is a separate instruction. [VERIFY tenure.]",
    ],
    specification: [
      "We survey each room's substrate, previous coating and joinery. Conversion plaster is mixed; the specification follows the wall, not the decade of the conversion. Prep standard, coats and sheen are written. Colour is sampled on the wall in the light the room actually has — a rear return on a terrace is not a west-facing bay.",
      "Sashes in the bays are priced as joinery. Lining is on the proposal where it is needed. Spray is rarely the default in a furnished conversion. Snagging is in daylight and with the lights on, including on the half-landing where the light is poorest.",
    ],
    faqs: [
      {
        q: "Can you decorate while we stay?",
        a: "Yes. Occupied-home sequencing is the default here. A kitchen, bathroom and bedroom are kept usable where the programme allows.",
      },
      {
        q: "Do you specify lining paper in a conversion?",
        a: "Where movement would telegraph through paint, yes. It is written into the proposal, not slipped in on the day.",
      },
      {
        q: "Do party walls change the programme?",
        a: "They change the hours. Rubbing down in a terrace is noisy work and is programmed, not left as an all-day default.",
      },
      {
        q: "Is Fortune Green in a conservation area?",
        a: "Some streets toward Fortune Green are. We check the map for the address rather than treating all of West Hampstead as one designation. [VERIFY.]",
      },
    ],
    metaDescription:
      "Painting and decorating in West Hampstead NW6 conversions, including occupied homes. 020 7101 3168.",
  }),

  "belsize-park": combo({
    lede:
      "Belsize decorating is high ceilings and stucco-era interiors that punish a shortcut in filling; Village rooms and avenue mansion flats differ in access, not in the need for a prep specification.",
    intro: [
      "Belsize Park (NW3) is Camden. The neighbourhood is defined by mid- and late-Victorian stucco and brick houses, many now laterally converted, together with mansion flats on the larger roads such as Belsize Avenue and Haverstock Hill. Ceiling heights are generous. Kitchens and bathrooms have often been inserted into former bedrooms, which leaves mixed plaster in the rooms that remain to be decorated. The Village streets are finer-grain; the avenues are broader and more likely to include purpose-built blocks.",
      "The decorating fabric is stucco-era interiors: cornice, picture rails, original joinery and walls that have been patched through a century of conversions. High ceilings look generous on a listing photograph and then show every joint in the fill. Colour is sampled on the wall; a tall north room on a Village street does not read the same sheen as a west-facing bay on an avenue.",
      "Belsize Conservation Area covers a large part of the neighbourhood, on the rising land between Chalk Farm / Haverstock Hill and South Hampstead. Stucco, windows and roofscape are common consent issues. Article 4 directions apply to parts of the area. External painting of previously painted stucco is a conservation question, not a weekend extra. [VERIFY the conservation-area boundary, Article 4 and listed status with Camden.]",
    ],
    rooms:
      "Typical rooms are high-ceilinged reception rooms in conversions, compact mansion-flat interiors on the avenues, and original joinery that has to be treated as joinery. Stucco-era mouldings outside the paint-only brief stay; inside the brief they are prepared, not emulsioned as a wall. Occupied sequencing is ordinary in both Village houses and avenue flats. Lining paper is specified where later patches would telegraph through a modern coating.",
    working: [
      "Haverstock Hill is a busy corridor; side streets are controlled parking [VERIFY which authority controls a given frontage]. Camden licences apply for skips and scaffolding. Village streets are tight for vans; the avenues are easier but more likely to be mansion flats with a managing agent and set hours.",
      "Mansion flats on the avenues often need the agent's rules for common-parts protection even when only the demise is being painted. Conversions need party-wall hours. High rooms need access equipment written into the programme, not borrowed on the day.",
    ],
    specification: [
      "Measured survey first: substrate, previous coating, ceiling height, cornice and joinery. We do not start a Belsize decorate from photographs. High rooms scale prep and access; that is written into the programme, not discovered on a ladder.",
      "Prep standard, coats and sheen are on the specification. Colour is sampled on the wall in the room's own light. Sashes and shutters are joinery. Spray is used in empty rooms where it is cleaner; brush and roller remain the default around furnished stucco-era fabric. Snagging is in daylight and with the lights on, including at cornice height.",
    ],
    faqs: [
      {
        q: "High ceilings — more time or more access?",
        a: "Both, because prep and access scale with the room. We write it into the programme rather than discovering it on a ladder.",
      },
      {
        q: "Village or avenue — does it change the decorate?",
        a: "Access and tenure change. The Village is tighter; the avenues more often have porters and an agent. The prep specification is still written from the wall.",
      },
      {
        q: "Is Belsize Conservation Area the same as Hampstead?",
        a: "No. It is a separate Camden designation covering a large part of this neighbourhood. [VERIFY the map for the address.]",
      },
      {
        q: "Common parts in a conversion?",
        a: "If instructed, with the freeholder's rules. Hall decoration is a separate scope from the flat.",
      },
    ],
    metaDescription:
      "Painting and decorating in Belsize Park NW3, including high-ceilinged conversions. 020 7101 3168.",
  }),

  "st-johns-wood": combo({
    lede:
      "St John's Wood decorating in mansion blocks is as much porter hours and common-parts protection as it is paint; villa interiors are original joinery at a different scale.",
    intro: [
      "St John's Wood (NW8) is the City of Westminster for most of the residential core, with a smaller Camden conservation area on the borough edge. The stock mixes detached and semi-detached villas on tree-lined streets with large late-Victorian and Edwardian mansion blocks, particularly toward Wellington Road and Prince Albert Road. Flats in those blocks have original joinery, compact rooms, and common parts that managing agents protect closely.",
      "The decorating fabric in the blocks is shared corridors, previous coatings of unknown type, and a demise that must be painted without marking the stair the agent inspects. Villa interiors are a different grain: larger rooms, original joinery, occupied family houses. In both cases colour is sampled on the wall. Old coatings in these blocks are rarely a single product; matching 'what is there' is a sample, not a code from a faded tin.",
      "Westminster designated the St John's Wood Conservation Area in 1968. Fenestration, front boundaries and roof alterations are tightly controlled. Many mansion blocks also sit behind freeholder design guides that are stricter than planning. External painting of previously painted joinery or masonry is checked against both. [VERIFY conservation-area and listed status; confirm any estate scheme of management.]",
    ],
    rooms:
      "Most instructions are mansion-flat interiors: walls, ceilings and joinery in a compact demise, with the common parts protected even when they are not being painted. Villa and mews houses supply principal rooms and original sashes that are priced as joinery. Occupied sequencing is ordinary; spray is rarely the default in a furnished flat. Lining paper is specified where movement in later partitions would show.",
    working: [
      "Westminster scaffolding and skip licences, plus mansion-block working-hours clauses, drive the programme. Porters' rules and loading bays are building-specific. Lord's match days affect access on surrounding streets. [VERIFY event restrictions with the building.]",
      "Common-parts protection is written, not offered as a courtesy. Hall decoration, if instructed, follows the agent's specification and hours. Consent for work in common parts is the agent's or freeholder's, not ours. [VERIFY whether the building requires notice for internal decoration.]",
    ],
    specification: [
      "Survey records the demise, the common parts that must be protected, the lift and stair for materials, and the substrate in each room. Prep standard, coats and sheen are written. Colour is sampled on the wall in the flat's light, which is not the corridor's light.",
      "Sashes and original doors are joinery. We do not claim an exclusive heritage palette; colours come from established generic ranges. Spray is used where a room is empty and the building allows it; brush and roller remain the default in occupied mansion flats. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Will you protect common parts?",
        a: "Yes. Agents notice floors and stairs first. Protection is in the method, not an afterthought on day one.",
      },
      {
        q: "Can you match an existing mansion-flat colour?",
        a: "We sample on the wall. Old coatings in these blocks are rarely a single product, so a code from a faded tin is not a specification.",
      },
      {
        q: "Is this Camden or Westminster?",
        a: "Most of NW8's residential core is Westminster. Camden holds a smaller adjoining conservation area on its side of the boundary. We confirm from the address.",
      },
      {
        q: "Do Lord's match days stop the work?",
        a: "They can restrict access on surrounding streets. We check with the building rather than assuming a clear run. [VERIFY.]",
      },
    ],
    metaDescription:
      "Painting and decorating in St John's Wood NW8 mansion flats and villas. 020 7101 3168.",
  }),

  "maida-vale": combo({
    lede:
      "Maida Vale decorating is long mansion corridors, original joinery in terracotta blocks, and neighbours who share walls; spray is rarely the default in a furnished flat.",
    intro: [
      "Maida Vale (W9) is the City of Westminster. It is mansion-block country: purpose-built red-brick and terracotta flats from the 1890s–1910s line the principal streets, with canal-side houses and later infill toward Little Venice. Interiors are often original in plan — long corridors, rooms off a hall, original joinery — so decoration has to respect the demise, the neighbour, and the agent's common parts.",
      "The decorating fabric is those corridors, previous coatings built up on original doors, and rooms that share walls with the next flat. A furnished mansion flat is not a spray shop. Colour is sampled on the wall; a long internal corridor does not read the same emulsion as a west-facing room toward Little Venice. The mews behind the avenues are a different construction and a different access problem.",
      "Maida Vale Conservation Area covers a substantial part of W9. Exterior painting of previously painted brick, window replacement and balcony work are frequent consent topics. Canal-side properties may have additional Canal & River Trust considerations. [VERIFY the conservation area and any canal-side constraint on the specific frontage.]",
    ],
    rooms:
      "Typical rooms are compact mansion-flat interiors and the long corridor that joins them, plus larger rooms in Little Venice houses and mews. Original joinery is prepared as joinery. Occupied sequencing is ordinary. Lining paper is specified where later plaster in a conversion-like alteration would telegraph through paint. We will not paint a hallway we have not been given; common parts need the agent.",
    working: [
      "Westminster skip and scaffolding licences. Porters' hours are building-specific. A skip on a principal mansion-block street is not the working assumption. Lifts in older blocks are small; decorating materials often go up the stairs.",
      "Licence or notice for common-parts work is ordinary in the blocks. Canal-side houses add a different access and, on some frontages, a third party at the water. Occupied flats are sequenced room by room. [VERIFY Canal & River Trust involvement on the specific property.]",
    ],
    specification: [
      "We survey the demise, the corridor, the joinery and the previous coating. Quartz and timber are kitchen categories; here the written items are prep standard, product type, coats and sheen. Colour is sampled on the wall in the room, then checked in the corridor where the light drops.",
      "Heritage colours are taken from established generic ranges; we do not claim an exclusive palette. Sashes and original doors are joinery. Spray is rarely the default in a furnished flat. Snagging is in daylight and with the lights on, including in the long hall.",
    ],
    faqs: [
      {
        q: "Corridors and common parts — will you paint them?",
        a: "The demise we are instructed on. Common parts need the agent. We will not paint a hallway we have not been given.",
      },
      {
        q: "Heritage colours?",
        a: "From established generic ranges, sampled in the room. No exclusive palette claim.",
      },
      {
        q: "Does Little Venice change the decorate?",
        a: "The houses and mews are a different construction and a different access problem from the mansion blocks. The method — survey, then a written prep specification — is the same.",
      },
      {
        q: "Is the canal a planning issue for painting?",
        a: "On some frontages, Canal & River Trust questions can arise for external work. We do not assume they apply to every W9 address. [VERIFY.]",
      },
    ],
    metaDescription:
      "Painting and decorating in Maida Vale W9 mansion flats and Little Venice houses. 020 7101 3168.",
  }),

  "swiss-cottage": combo({
    lede:
      "Swiss Cottage decorating covers mansion flats on Finchley Road and Avenue Road, and converted houses a street back. Our office is in this neighbourhood.",
    intro: [
      "Swiss Cottage (NW3) is Camden. The neighbourhood sits between Belsize and South Hampstead: mansion blocks and inter-war flats along Finchley Road and Avenue Road, with Victorian houses on the side streets toward Belsize and Frognal. Finchley Road itself is mixed-use. The better residential stock is a street back. Ceiling heights and window sizes vary sharply between the Victorian houses and the later blocks.",
      "The decorating fabric is two stocks, not one. Inter-war blocks have different substrates from Victorian conversions; they do not have a different honesty about filling. Occupied flats on the main roads and occupied houses a street back both need room sequencing. Colour is sampled on the wall: Finchley Road west light and a north room toward Frognal do not read the same emulsion.",
      "Camden renamed the Swiss Cottage Conservation Area to the South Hampstead Conservation Area; it still covers many of the residential streets off Finchley Road and Avenue Road. Belsize Conservation Area adjoins to the east. External painting is checked against the map that applies to the address. [VERIFY which conservation area applies.]",
    ],
    rooms:
      "Avenue Road leans to mansion-flat interiors on original joinery, with common parts protected. The streets toward Belsize and Frognal lean to conversion plaster, chimney-breast movement and original sashes. Lining paper is specified where later patches would show. Occupied sequencing is ordinary in both. High rooms in the Victorian houses need access written in; inter-war flats more often need the agent's hours.",
    working: [
      "Finchley Road scaffold and loading are a different process from a side street [VERIFY the highway authority on the specific frontage]. Camden licences apply on the residential streets. Managing agents in the larger Avenue Road blocks run working-hours and common-parts rules even for internal decoration.",
      "The HPSG office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. That does not change the method — enquiry, visit, written proposal — but it does change how quickly we can visit. Period walls and shared corridors are rarely as drawings suggest.",
    ],
    specification: [
      "Survey of each room's substrate, previous coating, joinery and access. In blocks we record lift, stair and the agent's rules. In conversions we record the chimney breast, the party wall and the mixed plaster. Prep standard, coats and sheen are written. Colour is sampled on the wall in local light.",
      "Sashes in the Victorian houses are joinery. Inter-war windows are specified from the frame that exists, not from a slogan about the decade of the block. Spray is used in empty rooms where it is cleaner; brush and roller remain the default in occupied interiors. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Are you based in Swiss Cottage?",
        a: "The office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. The work is on site, not from a van parked at the office.",
      },
      {
        q: "Inter-war flats — different paint system?",
        a: "Different substrates. The specification follows the wall, not the decade of the block as a slogan.",
      },
      {
        q: "Is Swiss Cottage still a conservation area?",
        a: "Camden now calls that designation the South Hampstead Conservation Area. Many residential streets off Finchley Road remain inside it. [VERIFY the map.]",
      },
      {
        q: "Can you load on Finchley Road?",
        a: "It is a major corridor. We treat it as a different process from a side street, and we plan the drop at survey.",
      },
    ],
    metaDescription:
      "Painting and decorating in Swiss Cottage NW3, from our Finchley Road office. 020 7101 3168.",
  }),

  "primrose-hill": combo({
    lede:
      "Primrose Hill decorating is original sashes, park-facing light, and lower-ground rooms that need moisture understood before they are painted.",
    intro: [
      "Primrose Hill (NW1) is Camden. The stock is Victorian terraces and larger houses facing the park, with later mansion blocks toward Regent's Park Road. Many houses remain single-family; others are split into garden and upper-floor flats. Stock brick, stucco dressings and original sashes are characteristic. The streets are quieter than Camden Town to the east, except when the park is busy.",
      "The decorating fabric is those original sashes, park-facing rooms with a light that changes through the day, and lower-ground interiors where staining is often moisture rather than a tired emulsion. We prepare; we do not coat over damp. Colour is sampled on the wall in the room — a park-facing first floor and a lower-ground rear room are not the same sample.",
      "Primrose Hill Conservation Area covers the core streets and the setting of the park. Camden has had an Article 4 direction here since 3 March 1983. Rooflines, front gardens and windows are sensitive. External painting of previously painted joinery or masonry, and any change to sash detailing, is checked against that direction. [VERIFY.]",
    ],
    rooms:
      "Family-house principal rooms with original sashes; split-house interiors with mixed plaster; lower-ground rooms that need a moisture view before a paint system is chosen. Sashes are priced as joinery. Failed cords and putty are not a paint item. [VERIFY listed windows.] Lining paper is specified where movement would telegraph through paint. Occupied sequencing is ordinary; weekend visitor pressure around the park is an access problem, not a decorating one.",
    working: [
      "Camden controlled parking. Weekend visitor pressure around the park is real. We plan drops away from peak hours where we can. Skip placement on park-facing streets needs extra notice.",
      "Article 4 means window and elevation changes are not assumed as permitted development. External colour on a park-facing wall is a consent question, not a default. Occupied houses are sequenced so a kitchen, a bathroom and a bedroom remain usable. [VERIFY.]",
    ],
    specification: [
      "Survey of the rooms, the moisture condition in lower-ground spaces, the sashes and the previous coating. We will not decorate over a damp wall as a finish. Prep standard, coats and sheen are written. Colour is sampled on the wall in park light and in the darker rear rooms.",
      "Sash windows in the conservation area often need more than a coat of paint. If cords, staff beads or putty have failed, we say so before we start. Spray is used in empty rooms where it is cleaner; brush and roller remain the default around furnished original fabric. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Lower-ground rooms looking tired?",
        a: "Often moisture. We will not paint a damp wall as a finish.",
      },
      {
        q: "Sash windows as well as walls?",
        a: "If instructed, as joinery. Failed cords and putty are not a paint item. [VERIFY listed windows.]",
      },
      {
        q: "What is the Article 4 direction?",
        a: "Camden has had an Article 4 direction in Primrose Hill Conservation Area since 3 March 1983. It removes some permitted-development rights, including on windows. We check what it means for the actual elevation. [VERIFY.]",
      },
      {
        q: "Does the park affect the programme?",
        a: "It affects access. We plan drops away from peak visitor hours where we can.",
      },
    ],
    metaDescription:
      "Painting and decorating in Primrose Hill NW1 houses and splits. Preparation first. 020 7101 3168.",
  }),

  highgate: combo({
    lede:
      "Highgate decorating follows the house and the council, not the postcode: Village interiors, villa joinery, a slope, and more than one authority.",
    intro: [
      "Highgate (N6) is not a single-authority area. Highgate Village sits around Pond Square and Highgate High Street; larger Victorian villas occupy the slopes toward the Heath and Archway. Later streets add Edwardian terraces and some inter-war houses. The Village is finer-grain and more listed. Woods and steep plots affect access and external works more than in the inner NW postcodes.",
      "The decorating fabric changes with that grain. Village interiors need original joinery treated as joinery and, often, lime or mixed plaster behind later coatings. Slope villas have high rooms and a different light. Conversion flats toward Archway are closer to a Camden terrace decorate. Colour is sampled on the wall; Heath-facing rooms and Village north rooms do not read the same sheen.",
      "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey (Haringey later extended its side, including toward Archway). Islington and Barnet conservation areas abut the edges. Holly Lodge Estate is a separate designation. Listing is concentrated in the Village. [VERIFY which authority and which conservation-area name apply to the address.]",
    ],
    rooms:
      "Village houses and listed interiors need joinery and coatings treated with the listing in view. Slope villas often have larger principal rooms and original sashes priced as joinery. Conversion flats toward Archway show mixed plaster and lining that has been over-painted. Occupied sequencing is ordinary. Lining paper is specified where movement would telegraph through paint. Heath-facing elevations are not a place to trial a new external colour without checking.",
    working: [
      "Skip and scaffolding licences are issued by the borough the address sits in — Camden, Haringey or, on some streets, Islington. We confirm it from the address, not from the neighbourhood name. Village lanes are tight. Steep roads decide the van.",
      "Tree notice may apply even when the decorate is internal, if a scaffold or a skip sits on a root zone. External painting in the Village is where listing and conservation bite. Occupied houses are sequenced room by room. [VERIFY TPO and conservation-area tree notice with the correct borough.]",
    ],
    specification: [
      "Survey records the authority, the conservation designation, listing, access, and the substrate in each room. Lime and gypsum are not treated as the same wall. Prep standard, coats and sheen are written. Colour is sampled on the wall in the light the room has — Village, slope or later street.",
      "Sashes are joinery. External colour on a previously painted elevation is checked before it is quoted. [VERIFY.] Spray is used in empty rooms where access and the method allow; brush and roller remain the default around furnished original fabric. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "External painting in the Village?",
        a: "Where previously painted and where consent allows. We check before we quote a colour on an elevation. [VERIFY.]",
      },
      {
        q: "Which council?",
        a: "Camden, Haringey or Islington depending on the street. We confirm it from the address.",
      },
      {
        q: "When was the conservation area designated?",
        a: "Highgate Conservation Area was designated on 21 December 1967. It is split between Camden and Haringey. Listing is concentrated in the Village. [VERIFY which side the property sits on.]",
      },
      {
        q: "Do trees stop a decorate?",
        a: "They can constrain access and any scaffold that touches the ground or the elevation. Internal decoration still needs a drop point that respects the plot. [VERIFY TPO.]",
      },
    ],
    metaDescription:
      "Painting and decorating in Highgate N6 Village houses and villas. Authority checked by address. 020 7101 3168.",
  }),

  "golders-green": combo({
    lede:
      "Golders Green decorating is family houses more often than stacked flats: more rooms, more joinery, more chance of working around occupation. Barnet is the council.",
    intro: [
      "Golders Green (NW11) is the London Borough of Barnet. The stock is mainly Edwardian and inter-war family houses — brick, pebbledash and later mock-Tudor — with mansion flats and purpose-built blocks along the main roads and toward Golders Hill Park. Plots are larger than in Camden conversions. Off-street parking is more common than in NW3, which eases material drops.",
      "The decorating fabric is those family houses: more joinery, more rooms to sequence, pebbledash exteriors that are a different specification from a Camden stucco front, and occupied households as the ordinary brief. Colour is sampled on the wall. A north room on a crescent and a west room toward Golders Hill Park do not read the same emulsion. This is not Hampstead Garden Suburb: the Suburb is next door and has its own Trust.",
      "Selected streets and the setting of Golders Hill Park sit in conservation areas. Most of the inter-war stock is undesignated but still subject to ordinary Barnet planning if windows or front boundaries change. External painting of previously painted masonry is checked against that map. We do not apply Hampstead Garden Suburb Trust rules by default. [VERIFY Barnet's conservation-area map for the address.]",
    ],
    rooms:
      "Typical instructions are whole-house decoration in family houses, sequenced around occupation, and compact interiors in mansion flats on the main roads. Pebbledash exteriors, where previously painted, are a masonry specification, not a wall emulsion. Internal sashes and doors are joinery. Lining paper is specified where later partitions would telegraph through paint. Empty is faster; occupied is the usual brief.",
    working: [
      "Barnet skip and scaffolding licences. Finchley Road / Golders Green Road loading at peak hours is the main access friction for properties on those spines. Off-street parking, where it exists, is used for drops.",
      "We do not apply Hampstead Garden Suburb Trust rules by default. The Trust boundary is a separate map. Occupied houses are sequenced so a kitchen, a bathroom and a bedroom remain usable. [VERIFY whether the address is inside the Suburb.]",
    ],
    specification: [
      "Measured survey of rooms, joinery, previous coatings and any external masonry in scope. Family-house walls still need scribing and filling; they are not square because they are suburban. Prep standard, coats and sheen are written. Colour is sampled on the wall in the house's light.",
      "Sashes and original doors are joinery. Previously painted pebbledash is specified as masonry, with access and weather in the programme. Bare pebbledash is a different specification. Spray is used in empty rooms where it is cleaner; brush and roller remain the default around occupation. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Whole-house decorate while we stay?",
        a: "Yes, sequenced. Empty is faster. We will say which after survey.",
      },
      {
        q: "Pebbledash exteriors?",
        a: "Previously painted masonry, where access and weather allow, is in scope. Bare pebbledash is a different specification.",
      },
      {
        q: "Is this Hampstead Garden Suburb?",
        a: "No. The Suburb is next door and has its own Trust. Golders Green is ordinary Barnet planning unless the map says otherwise. [VERIFY.]",
      },
      {
        q: "Is off-street parking useful for decorating?",
        a: "Often, yes. It eases material drops compared with a Camden conversion. We still write a drop point at survey.",
      },
    ],
    metaDescription:
      "Painting and decorating in Golders Green NW11 family houses. Barnet. 020 7101 3168.",
  }),

  "queens-park": combo({
    lede:
      "Queen's Park decorating covers late-Victorian terraces and, on the Westminster side, the Estate cottages, whose joinery is the point of the conservation audit.",
    intro: [
      "Queen's Park (NW6) straddles the London Borough of Brent and the City of Westminster. [VERIFY the borough for the specific address.] Late-Victorian and Edwardian terraces and larger houses sit around the park. The Queen's Park Estate in Westminster is a distinct grid of decorative brick cottages. Converted flats are common on the larger roads; family houses remain on the quieter streets toward Kensal Rise.",
      "The decorating fabric splits with that grain. Terrace conversions show mixed plaster, party-wall hours and occupied sequencing. Estate interiors have original joinery that should not be boxed in or cut in as a convenience; filling and coating follow a written specification. Colour is sampled on the wall. A cottage room and a bay-fronted terrace do not read the same sheen.",
      "Brent's Queen's Park Conservation Area covers streets around the park. Westminster's Queen's Park Estate Conservation Area is a separate designation with its own audit. They are not the same map. External painting and joinery colour on the Estate are conservation matters. [VERIFY which conservation area and which council apply.]",
    ],
    rooms:
      "Terrace rear-returns and conversion interiors on the Brent streets; cottage-scale rooms with original joinery on the Westminster Estate. Patterned brick and original tiled paths are characteristic outside. Inside, sashes and doors are priced as joinery. Lining paper is specified where conversion plaster would telegraph through paint. Occupied sequencing is ordinary. We do not paint original tiled dados as a default.",
    working: [
      "Confirm Brent or Westminster first. The licence for a skip is issued by the borough the frontage sits in, not by the neighbourhood name. Salusbury Road is a poor default loading point.",
      "Estate cottages need original joinery treated as joinery. Terrace conversions need party-wall hours and common-parts protection. Occupied houses and flats are sequenced room by room. Hall decoration, if instructed, follows the freeholder's rules.",
    ],
    specification: [
      "Survey of the rooms, the tenure, the council and the conservation designation. Prep standard, coats and sheen are written. Colour is sampled on the wall in the room's light. Extract and external colour on an Estate cottage elevation are consent questions, not extras.",
      "Estate joinery is specified rather than boxed in. Terrace sashes are joinery. Spray is used in empty rooms where it is cleaner; brush and roller remain the default around occupation. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Estate original joinery?",
        a: "Treated as joinery. Filling and coating follow a written specification, not a one-day cut-in.",
      },
      {
        q: "Does it matter which side of Queen's Park I am on?",
        a: "For licensing and conservation, yes. Interior decorating method is similar; the paperwork is not.",
      },
      {
        q: "Are the two conservation areas the same?",
        a: "No. Brent's Queen's Park Conservation Area and Westminster's Queen's Park Estate Conservation Area are separate designations. [VERIFY.]",
      },
      {
        q: "Is Salusbury Road usable for deliveries?",
        a: "It is a busy spine. We plan a drop on a residential street unless the building forces otherwise.",
      },
    ],
    metaDescription:
      "Painting and decorating in Queen's Park NW6 terraces and Estate cottages. 020 7101 3168.",
  }),

  "muswell-hill": combo({
    lede:
      "Muswell Hill decorating is high Edwardian rooms on a slope, and tighter flats above the Broadway. The hill is a delivery constraint.",
    intro: [
      "Muswell Hill (N10) is the London Borough of Haringey. Edwardian shopping parades sit on the Broadway; substantial Edwardian and late-Victorian houses occupy the slopes — many still family houses, others converted. Red brick, timber sash windows and generous halls are typical. Flats above the Broadway and later infill blocks add a smaller, tighter stock. Plots and rear gardens are larger than in inner Camden.",
      "The decorating fabric is those high Edwardian rooms: cornice, picture rails, original joinery, and plaster that has moved on a slope. Broadway flats are a different access problem and a different extract of light. Colour is sampled on the wall. A tall room on the slope and a flat over a shop do not read the same emulsion. Occupied-home working is ordinary in both.",
      "Muswell Hill Conservation Area was designated by Haringey on 1 March 1974 and covers the Broadway and many of the surrounding residential streets. Fortis Green Conservation Area, also designated 1 March 1974, sits on the north-west side. Shopfronts and residential fenestration are both sensitive. External painting of previously painted joinery is checked against the map the address sits on. [VERIFY the conservation-area boundary and any Article 4.]",
    ],
    rooms:
      "Family-house principal rooms with high ceilings and original mouldings; conversion interiors on the slopes; Broadway flats with tighter access and spray rarely the default in a furnished space. Edwardian halls and joinery, if in scope, are specified as plaster and joinery, not as a quick emulsion. Lining paper is specified where movement would telegraph through paint. Sashes are priced as joinery.",
    working: [
      "Haringey skip and scaffolding licences. Controlled parking on many roads [VERIFY]. Steep streets decide the van, not the other way round. Long-wheelbase is not always possible; we plan vehicle and drop point at survey.",
      "Conservation-area windows and shopfronts are elevation issues. An external colour on the Broadway is a different consent path from a rear elevation on the slope. Occupied houses are sequenced so a kitchen, a bathroom and a bedroom remain usable.",
    ],
    specification: [
      "Survey of the rooms, the slope, the vehicle, the joinery and the substrate. High Edwardian rooms scale prep and access; that is written into the programme. Prep standard, coats and sheen are on the specification. Colour is sampled on the wall in the room's light.",
      "Sashes and mouldings are joinery and plaster, not a cut-in. Spray is used in empty rooms where it is cleaner; brush and roller remain the default around occupation, including in Broadway flats. Snagging is in daylight and with the lights on, including at cornice height.",
    ],
    faqs: [
      {
        q: "Broadway flats — can you decorate occupied?",
        a: "Yes, with dust control. Spray is rarely the default in a furnished flat.",
      },
      {
        q: "Edwardian halls and mouldings?",
        a: "If they are in scope, they are specified as joinery and plaster, not as a quick emulsion.",
      },
      {
        q: "When was the conservation area designated?",
        a: "Muswell Hill Conservation Area was designated by Haringey on 1 March 1974. Fortis Green Conservation Area was designated the same day. [VERIFY which map the address sits on.]",
      },
      {
        q: "Is the hill a real issue for decorating deliveries?",
        a: "For long-wheelbase vans, yes. We plan vehicle and drop point at survey.",
      },
    ],
    metaDescription:
      "Painting and decorating in Muswell Hill N10 Edwardian houses and Broadway flats. 020 7101 3168.",
  }),

  "crouch-end": combo({
    lede:
      "Crouch End decorating is converted-house plaster, original mouldings and tiled halls, sequenced around occupied family rooms. The Broadway is not a loading plan.",
    intro: [
      "Crouch End (N8) is the London Borough of Haringey. Victorian and Edwardian terraces and larger houses sit around the Broadway, with a strong conversion-flat market in the bigger properties. The clock tower marks the centre. Residential streets climb toward Highgate and fall toward Hornsey. Original mouldings, tiled halls and rear rooms already in the envelope are common. Purpose-built blocks are the exception, not the rule.",
      "The decorating fabric is those conversions: mixed plaster, original mouldings that should not be lost under a thick fill, and tiled halls that are not a paint surface by default. Occupied family rooms around the Broadway are the ordinary brief. Colour is sampled on the wall. A high-ceilinged front room and a rear conversion do not read the same sheen.",
      "Crouch End Conservation Area was designated by Haringey on 25 October 1974 and covers the Broadway and a ring of residential streets. Unlisted terraces outside the conservation area still need ordinary planning for some window replacements. External painting of previously painted joinery is checked against that map. [VERIFY Haringey's map.]",
    ],
    rooms:
      "Converted-house interiors, original mouldings in principal rooms, and tiled halls that we do not paint as a default. Rear rooms already in the envelope are decorated as found. Lining paper is specified where conversion plaster would telegraph through paint. Sashes are joinery. Occupied sequencing is the working assumption. We do not form a new rear addition as this service.",
    working: [
      "Haringey licences. Parking is a mix of controlled and less restricted streets [VERIFY street by street]. A skip on the Broadway is not the working assumption; we licence a residential side street.",
      "Conversion party walls and occupied houses shape the hours. Original halls and tiled floors outside the decorating envelope are protected, not treated as a site path without thought. Room sequence is part of the proposal.",
    ],
    specification: [
      "Survey of the rooms, the mouldings, the tiled hall, the substrate and the previous coating. Mouldings that are sound and in scope are prepared as plaster and joinery. Tiled dados stay unless the brief says otherwise. Prep standard, coats and sheen are written. Colour is sampled on the wall in local light.",
      "Sashes are joinery. Lining is on the proposal where it is needed. Spray is used in empty rooms where it is cleaner; brush and roller remain the default around occupation. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Tiled Victorian halls — paint or keep?",
        a: "We do not paint original tiled dados as a default. Scope is written after survey.",
      },
      {
        q: "Occupied conversions?",
        a: "Yes. Room sequence is part of the proposal. A kitchen, a bathroom and a bedroom are kept usable where the programme allows.",
      },
      {
        q: "When was the conservation area designated?",
        a: "Crouch End Conservation Area was designated by Haringey on 25 October 1974. [VERIFY whether the address sits inside it.]",
      },
      {
        q: "Can a skip sit on the Broadway?",
        a: "That is not the working assumption. We licence a residential side street.",
      },
    ],
    metaDescription:
      "Painting and decorating in Crouch End N8 conversions, including occupied homes. 020 7101 3168.",
  }),

  "kentish-town": combo({
    lede:
      "Kentish Town decorating is dense terraces, conversion plaster, and close neighbours. Prep on mixed later patches is the work.",
    intro: [
      "Kentish Town (NW5) is Camden. Victorian terraces, former workshops and later infill give a denser, more mixed grain than Hampstead. Many houses are converted to flats. Larger streets toward Tufnell Park and Dartmouth Park become more residential and more likely to include original family houses. The High Street itself is mixed-use.",
      "The decorating fabric is conversion plaster: original walls, later partitions, workshop conversions with a different substrate again, and lower-ground rooms where staining is often moisture. Hours are written down because the neighbours are close. Colour is sampled on the wall. A lower-ground room and a first-floor terrace front do not read the same emulsion.",
      "Several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park. The High Street itself is mixed-use and less uniformly designated. External painting is checked by street, not by the neighbourhood name. [VERIFY the named conservation area for the address.]",
    ],
    rooms:
      "Conversion interiors with mixed old and new plaster, rear-return rooms, and lower-ground spaces that need moisture understood before they are painted. We will not coat a damp wall as a finish. Lining paper is specified where movement would telegraph through paint. Sashes, where they remain, are joinery. Occupied sequencing is ordinary. Rubbing down in a terrace is noisy work and belongs in the programme.",
    working: [
      "Camden skip and scaffolding licences. Kentish Town Road is a poor skip location. Side streets and a written method for common parts are the default. Neighbour proximity in terraces belongs in the working-hours plan.",
      "Noise from preparation is programmed, not left as an all-day default. Lower-ground moisture is a survey item, not a finish. Occupied flats keep a kitchen, a bathroom and a bedroom usable where the programme allows.",
    ],
    specification: [
      "Survey of each room's substrate — mixed old and new plaster is common — the previous coating, joinery, and moisture in lower-ground spaces. The specification follows the wall in each room. Prep standard, coats and sheen are written. Colour is sampled on the wall in the light that room has.",
      "Sashes are joinery. Lining is specified where it is needed, not slipped in. Spray is rarely the default in a furnished conversion. Snagging is in daylight and with the lights on, including in the rooms where the light is poorest.",
    ],
    faqs: [
      {
        q: "Mixed old and new plaster?",
        a: "Common. The specification follows the substrate in each room. Lining paper is specified where movement would telegraph through paint.",
      },
      {
        q: "Noisy prep in a terrace?",
        a: "Rubbing down is programmed into hours, not left as an all-day default.",
      },
      {
        q: "Lower-ground rooms looking tired?",
        a: "Often moisture. We will not paint a damp wall as a finish.",
      },
      {
        q: "Are there conservation areas here?",
        a: "Coverage is by street, including toward Dartmouth Park. We check the map for the address. [VERIFY.]",
      },
    ],
    metaDescription:
      "Painting and decorating in Kentish Town NW5 conversions and terraces. 020 7101 3168.",
  }),

  kilburn: combo({
    lede:
      "Kilburn decorating sits either side of a borough boundary. We confirm Camden or Brent before a skip is licensed, then prepare the rooms.",
    intro: [
      "Kilburn (NW6) is split. Kilburn High Road is the historic boundary: east of it the streets toward West Hampstead are more uniformly Victorian conversions in Camden; west of it (Brent) the grain includes larger blocks and a wider mix of periods. [VERIFY the borough for the specific address.] Flats above shops on the High Road are a different construction and access problem from the residential streets behind.",
      "The decorating fabric follows that split. Conversion interiors toward West Hampstead show mixed plaster, party walls and occupied sequencing. Toward Brent the rooms vary more. Shop-flat interiors are reached by a narrow stair, with dust into the shop a method question, not an afterthought. Colour is sampled on the wall. A High Road flat and a terrace behind it do not read the same light.",
      "Named conservation areas cover selected streets rather than the whole of Kilburn. High Road shopfronts and upper-floor windows may have separate design guidance. External painting is checked on the map, not assumed from the neighbourhood name. [VERIFY Camden and Brent conservation-area maps.]",
    ],
    rooms:
      "Conversion interiors toward West Hampstead; a wider mix of rooms toward Brent; shop-flat rooms reached by a narrow stair, with protection written so the stair is not a chute. Lining paper is specified where conversion plaster would telegraph through paint. Sashes, where they remain, are joinery. Occupied sequencing is ordinary. The room decides the paint system; the council decides the licence.",
    working: [
      "Confirm Camden or Brent from the address. High Road loading is a last resort. Shop-flat access is measured before materials are brought in. Dust, hours and protection of the stair are written into the method.",
      "Conservation-area coverage is patchy. We check the map rather than treating all of Kilburn as designated or undesignated. Occupied flats keep a kitchen, a bathroom and a bedroom usable where the programme allows. [VERIFY.]",
    ],
    specification: [
      "Survey of the rooms, the stair, the substrate and the borough. Flats above shops often cannot take a casual external colour or a grille without a route and a permission path. Prep standard, coats and sheen are written. Colour is sampled on the wall in the room's light.",
      "The wall still decides the system; the borough changes the licence, not the honesty of the fill. Sashes are joinery. Spray is rarely the default in a furnished conversion or a shop flat. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Flats above shops — dust into the shop?",
        a: "Protection and hours are written. We will not treat the stair as a chute.",
      },
      {
        q: "Does the borough change the paint specification?",
        a: "It changes the licence. The wall still decides the system.",
      },
      {
        q: "Does the High Road boundary change the decorate?",
        a: "It changes the council. The room still decides the preparation.",
      },
      {
        q: "Is all of Kilburn in a conservation area?",
        a: "No. Coverage is by street. [VERIFY Camden and Brent maps.]",
      },
    ],
    metaDescription:
      "Painting and decorating in Kilburn NW6, Camden and Brent sides of the High Road. 020 7101 3168.",
  }),

  "hampstead-garden-suburb": combo({
    lede:
      "Decorating in Hampstead Garden Suburb is internal coatings under an Arts and Crafts envelope the Trust cares about. External colour is not a casual extra.",
    intro: [
      "Hampstead Garden Suburb (NW11) is the London Borough of Barnet. The Suburb is Arts and Crafts and later houses planned by Unwin and Lutyens: cottages, larger free-standing houses, and grouped compositions around greens and closes. Interiors vary from modest cottage rooms to substantial family houses. Purpose-built mansion blocks are not the local type.",
      "The decorating fabric is those interiors: original joinery, cottage-scale rooms, later internal alterations, and an elevation that has been held still. Internal decoration is ordinary work if the elevation is unchanged. External painting of previously painted surfaces may need Trust consent. [VERIFY.] Colour is sampled on the wall in the room; a cottage north room and a larger house on a close do not read the same emulsion. Occupied sequencing is ordinary.",
      "Hampstead Garden Suburb Conservation Area was designated in 1967. An Article 4 direction has been in force since the 1970s. The Hampstead Garden Suburb Trust also runs a Scheme of Management under its own Act of Parliament. Most external works need Barnet planning permission and separate written Trust consent. The Trust boundary and the conservation-area boundary are not identical. [VERIFY both maps and whether Trust consent is required for the specific property.]",
    ],
    rooms:
      "Cottage-scale interiors and larger family rooms in free-standing houses, almost all already altered internally. Original joinery is prepared as joinery. Lining paper is specified where later plaster would telegraph through paint. We re-decorate the rooms that exist. We do not treat the elevation as a place to trial a new colour without checking. Occupied houses are sequenced room by room.",
    working: [
      "Internal work that does not change the elevation is our ordinary decorating instruction, but we do not assume that if a window, a previously painted external surface or a colour on the street front is involved. [VERIFY.]",
      "Closes and greens are not loading bays. Deliveries are planned for the setting. Barnet licences still apply. Occupied houses keep a kitchen, a bathroom and a bedroom usable where the programme allows.",
    ],
    specification: [
      "Survey of the rooms, the elevation, the Trust boundary and the conservation-area map. Prep standard, coats and sheen are written. Colour is sampled on the wall in local light. Anything that breaks or recasts the envelope is checked before we quote an external colour.",
      "Sashes and original doors are joinery. Internal emulsion, eggshell and joinery coatings follow the written specification. External painting may need Trust consent even on previously painted surfaces. [VERIFY the current Trust guidelines for the item of work.] Spray is used in empty rooms where it is cleaner; brush and roller remain the default around occupation. Snagging is in daylight and with the lights on.",
    ],
    faqs: [
      {
        q: "Can I change the outside colour?",
        a: "Not as a casual extra. External painting may need Trust consent, and Barnet planning may also apply. [VERIFY.]",
      },
      {
        q: "Is interior emulsion still controlled?",
        a: "Interior decoration is ordinary work if the elevation is unchanged. The envelope is where the extra consents sit. [VERIFY.]",
      },
      {
        q: "Is the Trust the same as the conservation area?",
        a: "No. The Trust boundary and the conservation-area boundary are not identical. Most external works need both Barnet planning permission and written Trust consent. [VERIFY both maps.]",
      },
      {
        q: "When was the conservation area designated?",
        a: "In 1967. An Article 4 direction has been in force since the 1970s.",
      },
    ],
    metaDescription:
      "Painting and decorating in Hampstead Garden Suburb NW11. Interiors under Trust and Barnet rules. 020 7101 3168.",
  }),
};
