import { combo } from "./combo-build";
import type { ComboContent } from "./types";

export const kitchenCombos: Record<string, ComboContent> = {
  hampstead: combo({
    lede:
      "Kitchen renovation in Hampstead is conversion and village-house work: chimney breasts, lime plaster, and lanes that were not drawn for a kitchen delivery.",
    intro: [
      "Hampstead (NW3) is Camden. The village core around Heath Street and the High Street is Georgian and early-Victorian houses, later stucco villas, and mansion blocks on the busier approaches. Converted houses supply many of the flats. Original joinery, lime plaster and floors that have moved are the norm. Larger family houses sit toward the Heath and along Frognal; we work inside the rooms as they stand, not by forming a new envelope.",
      "A kitchen here is rarely a blank box. The run of units is decided by the chimney breast, the out-of-square wall and the extract route that a conservation-area elevation will actually accept. We do not punch a grille through a principal front as a convenience. Deliveries on lanes off Heath Street are timed; the survey records access as well as the room.",
      "Much of Hampstead sits in Camden's Hampstead Conservation Area, with a high concentration of listed buildings around the village. External painting, replacement windows and extract grilles are tightly controlled. [VERIFY the conservation-area boundary and listed status on the specific property via Camden's map.]",
    ],
    rooms:
      "Typical instructions are galley and L-shaped kitchens in conversions, compact rooms behind a chimney breast, and family kitchens in village houses where the existing envelope already includes a later rear room. Islands are uncommon because the footprint will not take them. Worktops are specified in generic categories such as quartz or solid timber. Appliances are client-supplied or specified without brand-partnership claims.",
    working: [
      "Camden issues skip and scaffolding licences. Controlled parking covers most of NW3 [VERIFY the CPZ code for the street]. Village lanes need timed loading. A kitchen that shares a stair with other flats in a conversion needs common-parts protection written into the method, not added as a courtesy.",
      "Where a freeholder or managing agent requires a licence to alter, we can prepare drawings and a method statement. Consent is granted by the freeholder or agent, not by us. Gas work is by a Gas Safe registered engineer. [VERIFY whether the tenure needs a licence for the specific kitchen.]",
    ],
    specification: [
      "The specification is written after a measured survey of services, extract routes and structural openings as found. Period walls in Hampstead are rarely square; cabinetry is scribed to the building. We flag items that need listed-building or conservation-area consent before they are priced in detail.",
      "Strip-out, first- and second-fix plumbing and electrics, cabinetry, worktops, splashbacks, flooring within the kitchen envelope, and decoration to a clean handover are the core. Extract is planned for the elevation that exists. We do not quote from photographs.",
    ],
    faqs: [
      {
        q: "Can you fit a kitchen in a Hampstead conversion while we stay?",
        a: "Often, if there is a second sink or a temporary arrangement and we can isolate dust. In a one-bedroom village flat it is usually more practical to decant kitchen use for the programme.",
      },
      {
        q: "Will the conservation area stop a new extract?",
        a: "It can restrict where the grille sits. We will not assume a hole in the principal elevation. [VERIFY on the specific house.]",
      },
      {
        q: "Do you work on listed buildings in the village?",
        a: "Internal kitchen fit-out within existing rooms is ordinary work. Listed constraints bite when the elevation, windows or plan change. We check listing on the address before we open up. [VERIFY.]",
      },
      {
        q: "How do deliveries work off Heath Street?",
        a: "They are timed. Village lanes are not loading bays. The survey records the vehicle and the drop point.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Hampstead NW3 conversions and village houses. Survey-led fit-out from Finchley Road. 020 7101 3168.",
  }),

  "west-hampstead": combo({
    lede:
      "West Hampstead kitchens live in rear returns: a single window, a party wall, and a hallway shared with the rest of the conversion.",
    intro: [
      "West Hampstead (NW6) is Camden. The stock is largely Victorian and Edwardian terraces and semi-detached houses, many converted to flats, with later mansion blocks near the transport interchange. West End Lane is the commercial spine. Behind it, brick terraces hold original bay windows, timber floors and stacked bathrooms on half-landings. Kitchens are often in rear returns.",
      "Three stations on West End Lane — Underground, London Overground and Thameslink — make daytime loading competitive. Carcasses are planned off the high street, not assumed from it. Party-wall noise in terraces belongs in the working hours. We replace and re-plan those rooms as kitchen renovation, not as a suburban island dropped into a Victorian footprint.",
      "Parts of the area sit in Camden conservation areas, including streets around Fortune Green and the South Hampstead approaches. Unlisted terraces may still be subject to Article 4 directions on windows. [VERIFY the named conservation area and any Article 4 for the address.]",
    ],
    rooms:
      "A typical West Hampstead kitchen is a rear-return galley: one window, a stack on the party wall, a door that swings into the run. Some mansion-block kitchens near the interchange are compact rooms on original risers. Layout follows the window, the stack and the door, not a catalogue island.",
    working: [
      "Camden skip and scaffolding licences are required. Controlled parking applies on the residential streets [VERIFY the CPZ]. Loading from West End Lane is rarely the default; we use side streets with a licence, timed around the interchange.",
      "Conversions share stairs and hallways. Common-parts protection and neighbour notice are part of the method. Where a freeholder is involved, a licence to alter may be needed before first fix. [VERIFY tenure.]",
    ],
    specification: [
      "We survey the existing kitchen, services, extract and structural openings as found. Rear returns are out of square; units are scribed. Extract is routed to a position the elevation and the neighbours will accept, not to the nearest brick.",
      "The written proposal after survey is the contract scope: strip-out, first- and second-fix, cabinetry, worktops in generic material categories, appliance installation, decoration of the kitchen envelope, waste removal and a snagging pass.",
    ],
    faqs: [
      {
        q: "Are rear-return kitchens too small for a proper fit-out?",
        a: "They are compact, not impossible. Layout follows the window, the stack and the door swing.",
      },
      {
        q: "Can you load from West End Lane?",
        a: "Rarely as a default. We use the side streets with a licence, timed around the interchange.",
      },
      {
        q: "Do party walls change the programme?",
        a: "They change the hours and the protection. Noisy work is written into the programme, not left as an afterthought.",
      },
      {
        q: "Is Fortune Green in a conservation area?",
        a: "Some streets toward Fortune Green are. We check the map for the address rather than treating all of West Hampstead as one designation. [VERIFY.]",
      },
    ],
    metaDescription:
      "Kitchen renovation in West Hampstead NW6 rear returns and conversion flats. Hampstead Property Services Group. 020 7101 3168.",
  }),

  "belsize-park": combo({
    lede:
      "Belsize kitchens are often later insertions: a former bedroom, a service room, a chimney breast in the wrong place, and ceilings that show every joint.",
    intro: [
      "Belsize Park (NW3) is Camden. The neighbourhood is defined by mid- and late-Victorian stucco and brick houses, many now laterally converted, together with mansion flats on the larger roads such as Belsize Avenue and Haverstock Hill. Ceiling heights are generous. Kitchens and bathrooms have often been inserted into former bedrooms or service rooms. The Village streets are finer-grain; the avenues are broader and more likely to include purpose-built blocks.",
      "Belsize Conservation Area covers a large part of the neighbourhood, on the rising land between Chalk Farm / Haverstock Hill and South Hampstead. Stucco, windows and roofscape are common consent issues. Article 4 directions apply to parts of the area. [VERIFY the conservation-area boundary, Article 4 and listed status with Camden.]",
      "Village streets are tight for vans; the avenues are easier but more likely to be mansion flats with a managing agent. We survey the room as found and fit a kitchen that the extract and the drainage will actually support.",
    ],
    rooms:
      "Typical rooms are inserted kitchens around a chimney breast in a conversion, or compact galleys in avenue mansion flats on original risers. High ceilings look generous and then show every joint in the run. Layouts are scribed to the fabric, not copied from a showroom.",
    working: [
      "Haverstock Hill is a busy corridor; side streets are controlled parking [VERIFY which authority controls a given frontage]. Camden licences apply for skips and scaffolding. Stucco repair and window design are elevation issues; the kitchen is an interior one unless extract lands on the front.",
      "Mansion flats on the avenues often need a licence to alter. Conversions need party-wall hours and common-parts protection. The fit-out sequence is the same; the paperwork is not.",
    ],
    specification: [
      "Measured survey first: services, extract, chimney breast, floor levels. We do not start a Belsize kitchen from photographs. High rooms need access equipment written into the programme where the ceiling is in the envelope.",
      "Cabinetry is scribed to out-of-square walls and original chimney breasts. Extract is agreed before strip-out. Worktops and appliances are specified in generic categories, with client-supplied units installed where that is the brief.",
    ],
    faqs: [
      {
        q: "Can you work around a chimney breast?",
        a: "Yes. We scribe cabinetry to it rather than pretending the wall is square.",
      },
      {
        q: "Village or avenue — does it change the job?",
        a: "Access and tenure change. The Village is tighter; the avenues more often have porters and a licence to alter.",
      },
      {
        q: "Is Belsize Park Conservation Area the same as Hampstead?",
        a: "No. It is a separate Camden designation covering a large part of this neighbourhood. [VERIFY the map for the address.]",
      },
      {
        q: "Do high ceilings change the kitchen?",
        a: "They change prep and access if the ceiling is in the envelope. The plan of the room is still set by the stack and the chimney breast.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Belsize Park NW3 conversions and mansion flats. Survey-led, conservation-aware. 020 7101 3168.",
  }),

  "st-johns-wood": combo({
    lede:
      "St John's Wood kitchens are typically compact rooms in mansion blocks, on original risers, with a lift that will not take a run of carcasses.",
    intro: [
      "St John's Wood (NW8) is the City of Westminster for most of the residential core, with a smaller Camden conservation area on the borough edge. The stock mixes detached and semi-detached villas on tree-lined streets with large late-Victorian and Edwardian mansion blocks, particularly toward Wellington Road and Prince Albert Road. Flats in those blocks have original service risers, compact kitchens stacked through the building, and common parts that managing agents protect closely.",
      "Westminster designated the St John's Wood Conservation Area in 1968. Fenestration, front boundaries and roof alterations are tightly controlled. Many mansion blocks also sit behind freeholder design guides that are stricter than planning. [VERIFY conservation-area and listed status; confirm any estate scheme of management.]",
      "We measure the lift and the stair before we order units, and we write the kitchen to the stacks that already exist. Lord's match days affect access on surrounding streets. [VERIFY event restrictions with the building.]",
    ],
    rooms:
      "Most instructions are compact mansion-flat kitchens on original risers — a galley or a short L, not an island. Villas and mews supply larger family rooms with different joinery and a different access problem. In both cases the layout follows the drainage that exists, not a hope that the stack can move.",
    working: [
      "Westminster scaffolding and skip licences, plus mansion-block working-hours clauses, drive the programme. Porters' rules and loading bays are building-specific. Units often go up the stair, not in the lift.",
      "Licence-to-alter packs are ordinary here. We can prepare drawings and a method statement. Consent is the agent's or freeholder's, not ours. [VERIFY whether the building requires a licence for the kitchen.]",
    ],
    specification: [
      "Survey records the lift dimensions, the stair, the risers, and the extract route the block will accept. Cabinetry is ordered only once those dimensions are confirmed on site.",
      "The specification covers strip-out with common-parts protection, first- and second-fix on the existing stacks, scribed cabinetry, worktops in generic categories, appliance installation, and a snagging pass. We do not claim exclusive brand partnerships.",
    ],
    faqs: [
      {
        q: "Will the managing agent need drawings?",
        a: "Usually, for a licence to alter. We can prepare drawings and a method statement. Consent is the agent's, not ours.",
      },
      {
        q: "Do units go in the lift?",
        a: "Often they do not. We plan the stair as the route until we measure.",
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
      "Kitchen renovation in St John's Wood NW8 mansion flats and villas, including licence-to-alter packs. 020 7101 3168.",
  }),

  "maida-vale": combo({
    lede:
      "A Maida Vale kitchen is still, in most mansion flats, the 1890s back room: long corridor, stack in a fixed place, a lift too small for a hopeful island.",
    intro: [
      "Maida Vale (W9) is the City of Westminster. It is mansion-block country: purpose-built red-brick and terracotta flats from the 1890s–1910s line the principal streets, with canal-side houses and later infill toward Little Venice. Interiors are often original in plan — long corridors, a kitchen at the back, a bathroom off the hall — so layout work has to respect stacks and service ducts. The mews behind the avenues are a different construction altogether.",
      "Maida Vale Conservation Area covers a substantial part of W9. Exterior painting of previously painted brick, window replacement and balcony work are frequent consent topics. Canal-side properties may have additional Canal & River Trust considerations. [VERIFY the conservation area and any canal-side constraint on the specific frontage.]",
      "Westminster controlled parking and mansion-block porters' rules shape deliveries. Lifts in older blocks are small; kitchen carcasses often go up the stairs. We re-fit those rooms without pretending the flat is a house.",
    ],
    rooms:
      "Typical rooms are compact rear galleys on original risers in mansion flats, and larger kitchens in Little Venice houses and mews. Relocating a sink is only possible if the drainage will serve the new position without cutting into another demise. We will say at survey.",
    working: [
      "Westminster skip and scaffolding licences. Porters' hours are building-specific. A skip on a principal mansion-block street is not the working assumption.",
      "Licence to alter is ordinary in the blocks. Canal-side houses add a different access and, on some frontages, a third party at the water. [VERIFY Canal & River Trust involvement on the specific property.]",
    ],
    specification: [
      "We survey the existing kitchen, the lift, the stair, the stacks and the extract. Quartz or solid timber are specified as generic worktop categories. Appliances are installed, not branded as a partnership.",
      "Strip-out with common-parts protection, first- and second-fix on the existing services, scribed cabinetry, decoration of the envelope, and a documented snagging pass. Extract is agreed before we open the room.",
    ],
    faqs: [
      {
        q: "Can you relocate the sink in a mansion flat?",
        a: "Only if the drainage will serve the new position without cutting into another demise. We will say at survey.",
      },
      {
        q: "Are the lifts usable?",
        a: "For people, yes. For kitchen carcasses, often not. Stairs are the working assumption until we measure.",
      },
      {
        q: "Does Little Venice change the kitchen?",
        a: "The houses and mews are a different construction and a different access problem from the mansion blocks. The method — survey, then a written proposal — is the same.",
      },
      {
        q: "Is the canal a planning issue?",
        a: "On some frontages, Canal & River Trust questions can arise. We do not assume they apply to every W9 address. [VERIFY.]",
      },
    ],
    metaDescription:
      "Kitchen renovation in Maida Vale W9 mansion blocks and Little Venice houses. Compact layouts, survey-led. 020 7101 3168.",
  }),

  "swiss-cottage": combo({
    lede:
      "Swiss Cottage kitchens sit in two stocks: mansion blocks on Finchley Road and Avenue Road, and converted Victorian houses a street back. Our office is in this neighbourhood.",
    intro: [
      "Swiss Cottage (NW3) is Camden. The neighbourhood sits between Belsize and South Hampstead: mansion blocks and inter-war flats along Finchley Road and Avenue Road, with Victorian houses on the side streets toward Belsize and Frognal. Finchley Road itself is mixed-use. The better residential stock is a street back. Ceiling heights and window sizes vary sharply between the Victorian houses and the later blocks.",
      "Camden renamed the Swiss Cottage Conservation Area to the South Hampstead Conservation Area; it still covers many of the residential streets off Finchley Road and Avenue Road. Belsize Conservation Area adjoins to the east. [VERIFY which conservation area applies to the address.]",
      "The HPSG office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN. That does not change the method — enquiry, visit, written proposal — but it does change how quickly we can visit. Finchley Road loading is a corridor problem; the side streets are a Camden one.",
    ],
    rooms:
      "Avenue Road leans to mansion-block galleys on original risers. The streets toward Belsize and Frognal lean to conversion kitchens around chimney breasts. Layouts follow the block's risers or the conversion's fabric, not a generic plan.",
    working: [
      "Finchley Road scaffold and loading are a different process from a side street [VERIFY the highway authority on the specific frontage]. Camden licences apply on the residential streets. Managing agents in the larger Avenue Road blocks run licence-to-alter processes.",
      "The office being in the neighbourhood does not mean we quote without a visit. Period walls and shared risers are rarely as drawings suggest.",
    ],
    specification: [
      "Survey of the existing kitchen, services, extract and access. In blocks we record lift and stair. In conversions we record the chimney breast and the party wall. Units are ordered after dimensions are confirmed on site.",
      "The core is strip-out, first- and second-fix, cabinetry scribed to the room, worktops in generic categories, appliance installation, decoration of the envelope, and snagging. Extract is planned for the elevation that exists.",
    ],
    faqs: [
      {
        q: "Are you based in Swiss Cottage?",
        a: "The office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN.",
      },
      {
        q: "Block or conversion — which do you see more?",
        a: "Both. Avenue Road leans to blocks; the streets toward Belsize and Frognal lean to conversions.",
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
      "Kitchen renovation in Swiss Cottage NW3 mansion blocks and conversions, from our Finchley Road office. 020 7101 3168.",
  }),

  "primrose-hill": combo({
    lede:
      "Primrose Hill kitchens are often lower-ground rooms in split houses, or compact rear spaces in terraces facing the park. Damp and extract are the first questions.",
    intro: [
      "Primrose Hill (NW1) is Camden. The stock is Victorian terraces and larger houses facing the park, with later mansion blocks toward Regent's Park Road. Many houses remain single-family; others are split into garden and upper-floor flats with kitchens in rear closets or lower-ground rooms. Stock brick, stucco dressings and original sashes are characteristic.",
      "Primrose Hill Conservation Area covers the core streets and the setting of the park. Camden has had an Article 4 direction here since 3 March 1983. Rooflines, front gardens and windows are sensitive. Properties backing onto the park may have additional visibility from public open space. [VERIFY.]",
      "Narrow streets and weekend visitors around the park affect van access. Skip placement on park-facing streets needs extra notice. We fit kitchens inside those constraints, with conservation-area assumptions on windows and grilles until the map says otherwise.",
    ],
    rooms:
      "Lower-ground kitchens need moisture and extract solved before units go on the wall. Upper-floor split-house kitchens are compact rear rooms with long drainage runs. Park-facing family houses can take a larger kitchen within an existing rear room — we do not form a new addition as this service.",
    working: [
      "Camden controlled parking. Weekend visitor pressure around the park is real. We plan drops away from peak hours where we can.",
      "Article 4 means window and elevation changes are not assumed as permitted development. An extract grille on a park-facing wall is a consent question, not a default. [VERIFY.]",
    ],
    specification: [
      "Survey of the room, the moisture condition in lower-ground spaces, the stack, and the extract route. We will not hang a kitchen on a wet wall or decorate over a damp one as part of handover.",
      "Strip-out, tanking or moisture work where the survey requires it, first- and second-fix, scribed cabinetry, worktops in generic categories, appliance installation, decoration of the envelope, snagging.",
    ],
    faqs: [
      {
        q: "Will a lower-ground kitchen work?",
        a: "It can, if moisture and extract are solved. We will not decorate over a damp wall as part of a kitchen handover.",
      },
      {
        q: "Does the park affect the programme?",
        a: "It affects access. We plan drops away from peak visitor hours where we can.",
      },
      {
        q: "What is the Article 4 direction?",
        a: "Camden has had an Article 4 direction in Primrose Hill Conservation Area since 3 March 1983. It removes some permitted-development rights. We check what it means for the actual elevation. [VERIFY.]",
      },
      {
        q: "Do you form new rear kitchens?",
        a: "No. Kitchen renovation on this site is a fit-out of rooms that exist. Forming a new envelope is not this service.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Primrose Hill NW1 terraces and lower-ground rooms. Conservation-aware fit-out. 020 7101 3168.",
  }),

  highgate: combo({
    lede:
      "Highgate kitchens sit in villas, Village houses and conversions on a slope, under more than one council. Confirming the authority is part of the survey.",
    intro: [
      "Highgate (N6) is not a single-authority area. Highgate Village sits around Pond Square and Highgate High Street; larger Victorian villas occupy the slopes toward the Heath and Archway. Later streets add Edwardian terraces and some inter-war houses. The Village is finer-grain and more listed. Woods and steep plots affect access and external works more than in the inner NW postcodes.",
      "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey (Haringey later extended its side, including toward Archway). Islington and Barnet conservation areas abut the edges. Holly Lodge Estate is a separate designation. [VERIFY which authority and which conservation-area name apply to the address.]",
      "Steep roads and tree constraints affect deliveries and anything that touches an elevation. We fit kitchens internally, with extract routed away from a principal or Heath-facing front wherever the building allows.",
    ],
    rooms:
      "Village houses and listed interiors need joinery treated as joinery. Slope villas often have larger family kitchens in existing rear rooms. Conversion flats toward Archway are closer to a Camden terrace kitchen. The council on the address decides the skip licence; the room decides the layout.",
    working: [
      "Skip and scaffolding licences are issued by the borough the address sits in — Camden, Haringey or, on some streets, Islington. We confirm it from the address, not from the neighbourhood name.",
      "Village lanes are tight. Tree notice may apply even when the kitchen is internal, if access or a skip sits on a root zone. [VERIFY TPO and conservation-area tree notice with the correct borough.]",
    ],
    specification: [
      "Survey records the authority, the conservation designation, the access, and the room. Extract is not assumed on a Heath-facing or principal elevation.",
      "The fit-out is the same core as elsewhere: strip-out, first- and second-fix, scribed cabinetry, generic worktop categories, appliance installation, decoration of the envelope, snagging. The paperwork changes with the borough.",
    ],
    faqs: [
      {
        q: "Which council licences the skip?",
        a: "The borough the address sits in — Camden, Haringey or, on some streets, Islington. We confirm it from the address.",
      },
      {
        q: "Can you work in Highgate Village?",
        a: "Yes. Listing and access are tighter there than on the later streets toward East Finchley.",
      },
      {
        q: "When was the conservation area designated?",
        a: "Highgate Conservation Area was designated on 21 December 1967. It is split between Camden and Haringey. [VERIFY which side the property sits on.]",
      },
      {
        q: "Do trees stop a kitchen renovation?",
        a: "They can constrain access and any work that touches the elevation or the ground. Internal fit-out still needs a drop point that respects the plot. [VERIFY TPO.]",
      },
    ],
    metaDescription:
      "Kitchen renovation in Highgate N6 villas and Village houses. Council and conservation checked by address. 020 7101 3168.",
  }),

  "golders-green": combo({
    lede:
      "Golders Green kitchens are more often family rooms in Edwardian and inter-war houses than compact mansion-block galleys. Barnet is the council.",
    intro: [
      "Golders Green (NW11) is the London Borough of Barnet. The stock is mainly Edwardian and inter-war family houses — brick, pebbledash and later mock-Tudor — with mansion flats and purpose-built blocks along the main roads and toward Golders Hill Park. Plots are larger than in Camden conversions. Kitchens are more often original family rooms than inserted closets.",
      "Selected streets and the setting of Golders Hill Park sit in conservation areas. Most of the inter-war stock is undesignated but still subject to ordinary Barnet planning if windows or front boundaries change. [VERIFY Barnet's conservation-area map for the address.]",
      "The high street on Golders Green Road is a loading problem; the crescents behind it are not. Off-street parking is more common than in NW3, which eases material drops. This is not Hampstead Garden Suburb: the Suburb is next door and has its own Trust.",
    ],
    rooms:
      "Typical instructions are family-house replacements: a larger footprint, a rear window, sometimes an existing breakfast room already in the envelope. Mansion-flat galleys exist on the main roads. We still survey — pebbledash houses hide out-of-square walls and later partitions as readily as a Camden conversion.",
    working: [
      "Barnet skip and scaffolding licences. Finchley Road / Golders Green Road loading at peak hours is the main access friction for properties on those spines.",
      "We do not apply Hampstead Garden Suburb Trust rules by default. The Trust boundary is a separate map. [VERIFY whether the address is inside the Suburb.]",
    ],
    specification: [
      "Measured survey of the existing kitchen, services and extract. Family-house rooms still need scribing; they are not square because they are suburban.",
      "Strip-out, first- and second-fix, cabinetry, worktops in generic categories, appliance installation, decoration of the envelope, waste removal, snagging. Extract is planned for the elevation that exists.",
    ],
    faqs: [
      {
        q: "Do you fit family-house kitchens as well as flats?",
        a: "Yes. Houses are the bulk of the local stock.",
      },
      {
        q: "Is this Hampstead Garden Suburb?",
        a: "No. The Suburb is next door and has its own Trust. Golders Green is ordinary Barnet planning unless the map says otherwise. [VERIFY.]",
      },
      {
        q: "Is off-street parking useful?",
        a: "Often, yes. It eases material drops compared with a Camden conversion. We still write a drop point at survey.",
      },
      {
        q: "Do pebbledash houses need a different kitchen?",
        a: "They need a survey. Walls and later partitions are as out of square as anywhere else.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Golders Green NW11 family houses and mansion flats. Barnet, survey-led. 020 7101 3168.",
  }),

  "queens-park": combo({
    lede:
      "Queen's Park kitchens sit in late-Victorian terraces, conversion flats, and — on the Westminster side — the Estate cottages, which are a different joinery problem.",
    intro: [
      "Queen's Park (NW6) straddles the London Borough of Brent and the City of Westminster. [VERIFY the borough for the specific address.] Late-Victorian and Edwardian terraces and larger houses sit around the park. The Queen's Park Estate in Westminster is a distinct grid of decorative brick cottages. Converted flats are common on the larger roads; family houses remain on the quieter streets toward Kensal Rise.",
      "Brent's Queen's Park Conservation Area covers streets around the park. Westminster's Queen's Park Estate Conservation Area is a separate designation with its own audit. They are not the same map. [VERIFY which conservation area and which council apply.]",
      "Two councils mean two skip and scaffolding regimes. Salusbury Road is the commercial spine and a busy loading environment. We fit kitchens to the room that exists: bay-fronted terraces with rear returns, or Estate interiors that should not be treated as a blank box.",
    ],
    rooms:
      "Terrace rear-returns and conversion galleys on the Brent streets; cottage-scale rooms with original joinery on the Westminster Estate. Patterned brick and original tiled paths are characteristic outside. Inside, we scribe to the walls and we do not box in original joinery as a convenience.",
    working: [
      "Confirm Brent or Westminster first. The licence for a skip is issued by the borough the frontage sits in, not by the neighbourhood name.",
      "Estate cottages need original joinery treated as joinery. Terrace conversions need party-wall hours. Salusbury Road is a poor default loading point.",
    ],
    specification: [
      "Survey of the room, the tenure, the council and the conservation designation. Extract on an Estate cottage elevation is a consent question.",
      "Core fit-out as elsewhere, with joinery in Estate interiors specified rather than boxed in. Worktops in generic categories. No brand-partnership claims.",
    ],
    faqs: [
      {
        q: "Does it matter which side of Queen's Park I am on?",
        a: "For licensing and conservation, yes. Interior kitchen method is similar; the paperwork is not.",
      },
      {
        q: "Can you work in the Estate cottages?",
        a: "Yes, with the original joinery treated as joinery, not as a surface to box in.",
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
      "Kitchen renovation in Queen's Park NW6 terraces and Estate cottages. Brent and Westminster addresses. 020 7101 3168.",
  }),

  "muswell-hill": combo({
    lede:
      "Muswell Hill kitchens are Edwardian family rooms on a slope, or tighter flats above the Broadway. The hill is a delivery constraint.",
    intro: [
      "Muswell Hill (N10) is the London Borough of Haringey. Edwardian shopping parades sit on the Broadway; substantial Edwardian and late-Victorian houses occupy the slopes — many still family houses, others converted. Red brick, timber sash windows and generous halls are typical. Flats above the Broadway and later infill blocks add a smaller mansion-flat stock. Plots and rear gardens are larger than in inner Camden.",
      "Muswell Hill Conservation Area was designated by Haringey on 1 March 1974 and covers the Broadway and many of the surrounding residential streets. Fortis Green Conservation Area, also designated 1 March 1974, sits on the north-west side. Shopfronts and residential fenestration are both sensitive. [VERIFY the conservation-area boundary and any Article 4.]",
      "The hill affects material handling. Some streets are steep and poorly suited to long-wheelbase vans. We plan vehicle and drop point at survey rather than assuming a flat Camden terrace.",
    ],
    rooms:
      "Family-house kitchens with a rear window and a larger footprint than a mansion galley; Broadway flats with tighter access and extract over a shop or a parade. Both occur. Access and extract differ; the fit-out sequence does not.",
    working: [
      "Haringey skip and scaffolding licences. Controlled parking on many roads [VERIFY]. Steep streets decide the van, not the other way round.",
      "Conservation-area windows and shopfronts are elevation issues. An extract grille on the Broadway is a different consent path from a rear garden elevation on the slope.",
    ],
    specification: [
      "Survey of the room, the slope, the vehicle, and the elevation for extract. Family-house rooms are still scribed; Edwardian walls move.",
      "Strip-out, first- and second-fix, cabinetry, generic worktop categories, appliance installation, decoration of the envelope, snagging. We do not quote from photographs.",
    ],
    faqs: [
      {
        q: "Is the hill a real issue for a kitchen delivery?",
        a: "For long-wheelbase vans, yes. We plan vehicle and drop point at survey.",
      },
      {
        q: "Broadway flat or house on the slope?",
        a: "Both occur. Access and extract differ; the fit-out sequence does not.",
      },
      {
        q: "When was the conservation area designated?",
        a: "Muswell Hill Conservation Area was designated by Haringey on 1 March 1974. Fortis Green Conservation Area was designated the same day. [VERIFY which map the address sits on.]",
      },
      {
        q: "Do you work above the Broadway shops?",
        a: "Yes, where access and extract can be solved. Those flats are a different construction from a house on the slope.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Muswell Hill N10 Edwardian houses and Broadway flats. Haringey. 020 7101 3168.",
  }),

  "crouch-end": combo({
    lede:
      "Crouch End kitchens are typically rear rooms in converted Victorian and Edwardian houses, not mansion-block galleys. The Broadway is for shopping, not for leaving a skip.",
    intro: [
      "Crouch End (N8) is the London Borough of Haringey. Victorian and Edwardian terraces and larger houses sit around the Broadway, with a strong conversion-flat market in the bigger properties. The clock tower marks the centre. Residential streets climb toward Highgate and fall toward Hornsey. Original mouldings, tiled halls and rear rooms (already built) are common. Purpose-built blocks are the exception, not the rule.",
      "Crouch End Conservation Area was designated by Haringey on 25 October 1974 and covers the Broadway and a ring of residential streets. Unlisted terraces outside the conservation area still need ordinary planning for some window replacements. [VERIFY Haringey's map.]",
      "The Broadway is busy. Residential side streets are the practical loading points. We re-fit rear rooms with the original hall left alone where it is sound, and with Haringey licensing on those side streets.",
    ],
    rooms:
      "Rear-room kitchens in converted houses, sometimes a former scullery already in the envelope. High-ceilinged rooms with original mouldings outside the kitchen. We do not form a new rear addition as this service.",
    working: [
      "Haringey licences. Parking is a mix of controlled and less restricted streets [VERIFY street by street]. A skip on the Broadway is not the working assumption.",
      "Conversion party walls and occupied houses shape the hours. Original halls and tiled floors outside the kitchen envelope are protected, not treated as a site path without thought.",
    ],
    specification: [
      "Survey of the rear room, the drainage, the extract and the hall. Mouldings that are sound and outside the envelope stay. Inside the room, the specification is written after survey.",
      "Core fit-out: strip-out, first- and second-fix, scribed cabinetry, generic worktops, appliance installation, decoration of the envelope, snagging.",
    ],
    faqs: [
      {
        q: "Do you keep original mouldings?",
        a: "Where they are sound and outside the kitchen envelope, yes. Inside the room, the specification is written after survey.",
      },
      {
        q: "Can a skip sit on the Broadway?",
        a: "That is not the working assumption. We licence a residential side street.",
      },
      {
        q: "When was the conservation area designated?",
        a: "Crouch End Conservation Area was designated by Haringey on 25 October 1974. [VERIFY whether the address sits inside it.]",
      },
      {
        q: "Is this mansion-block work?",
        a: "Rarely. Converted houses are the local type. Purpose-built blocks are the exception.",
      },
    ],
    metaDescription:
      "Kitchen renovation in Crouch End N8 converted houses. Rear-room layouts, Haringey licences. 020 7101 3168.",
  }),

  "kentish-town": combo({
    lede:
      "Kentish Town kitchens sit in rear returns and lower-ground rooms of a denser Victorian grain than Hampstead. Damp in lower-ground rooms is a survey item.",
    intro: [
      "Kentish Town (NW5) is Camden. Victorian terraces, former workshops and later infill give a denser, more mixed grain than Hampstead. Many houses are converted to flats. Kitchens sit in rear returns or lower-ground rooms that need damp and extract solving properly. Larger streets toward Tufnell Park and Dartmouth Park become more residential and more likely to include original family houses.",
      "Several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park. The High Street itself is mixed-use and less uniformly designated. [VERIFY the named conservation area for the address.]",
      "Kentish Town Road is a busy corridor. Side streets take the vans. Neighbour proximity in terraces should be written into the working-hours plan. We fit kitchens here as conversion work: party walls, shared hallways, Camden licences.",
    ],
    rooms:
      "Rear-return galleys, lower-ground rooms with moisture questions, and the occasional family-house kitchen toward Dartmouth Park. We will not hang units on a wet wall.",
    working: [
      "Camden skip and scaffolding licences. Kentish Town Road is a poor skip location. Side streets and a written method for common parts are the default.",
      "Noise and neighbour proximity in terraces belong in the programme. Lower-ground moisture is a survey item, not a finish.",
    ],
    specification: [
      "Survey of the room, moisture in lower-ground spaces, the stack, extract, and the shared hallway. Layout follows the drainage that exists.",
      "Strip-out, moisture work where required, first- and second-fix, scribed cabinetry, generic worktops, appliance installation, decoration of the envelope, snagging.",
    ],
    faqs: [
      {
        q: "Lower-ground kitchen — is damp a blocker?",
        a: "It can be, until it is understood. We will not hang units on a wet wall.",
      },
      {
        q: "Is Kentish Town the same as Camden Town for this work?",
        a: "No. The housing grain and the streets are different even though both are Camden.",
      },
      {
        q: "Can you load on Kentish Town Road?",
        a: "It is a corridor. We use side streets.",
      },
      {
        q: "Are there conservation areas here?",
        a: "Coverage is by street, including toward Dartmouth Park. We check the map for the address. [VERIFY.]",
      },
    ],
    metaDescription:
      "Kitchen renovation in Kentish Town NW5 conversions and rear returns. Camden, survey-led. 020 7101 3168.",
  }),

  kilburn: combo({
    lede:
      "Kilburn kitchens sit either side of a borough boundary. We confirm Camden or Brent before a skip is licensed, then fit the kitchen to the room.",
    intro: [
      "Kilburn (NW6) is split. Kilburn High Road is the historic boundary: east of it the streets toward West Hampstead are more uniformly Victorian conversions in Camden; west of it (Brent) the grain includes larger blocks and a wider mix of periods. [VERIFY the borough for the specific address.] Flats above shops on the High Road are a different construction and access problem from the residential streets behind.",
      "Named conservation areas cover selected streets rather than the whole of Kilburn. High Road shopfronts and upper-floor windows may have separate design guidance. [VERIFY Camden and Brent conservation-area maps.]",
      "Two boroughs, two licensing regimes. The High Road is a major route; we do not assume a skip can sit on it. Access through shop premises or narrow side doors needs a method statement.",
    ],
    rooms:
      "Conversion galleys toward West Hampstead; a wider mix of rooms toward Brent; shop-flat kitchens reached by a narrow stair, with extract as a real constraint. The room still decides the layout. The council decides the paperwork.",
    working: [
      "Confirm Camden or Brent from the address. High Road loading is a last resort. Shop-flat access is measured before units are ordered.",
      "Conservation-area coverage is patchy. We check the map rather than treating all of Kilburn as designated or undesignated. [VERIFY.]",
    ],
    specification: [
      "Survey of the room, the stair, extract, and the borough. Flats above shops often cannot take a grille without a route and a permission path.",
      "Core fit-out on the existing services. Scribed cabinetry. Generic worktop categories. Snagging. We do not quote from photographs.",
    ],
    faqs: [
      {
        q: "Does the High Road boundary change the kitchen?",
        a: "It changes the council. The room still decides the layout.",
      },
      {
        q: "Flats above shops — can you get units in?",
        a: "Usually via a narrow stair. We measure before we order.",
      },
      {
        q: "Can extract go through a shopfront elevation?",
        a: "Not as a default. We will not punch a grille without a route and a permission path.",
      },
      {
        q: "Is all of Kilburn in a conservation area?",
        a: "No. Coverage is by street. [VERIFY Camden and Brent maps.]",
      },
    ],
    metaDescription:
      "Kitchen renovation in Kilburn NW6 conversions and flats above shops. Camden and Brent addresses. 020 7101 3168.",
  }),

  "hampstead-garden-suburb": combo({
    lede:
      "A kitchen in Hampstead Garden Suburb is an internal job under a planned Arts and Crafts envelope. The Trust, Barnet planning and an Article 4 sit on the outside of the house.",
    intro: [
      "Hampstead Garden Suburb (NW11) is the London Borough of Barnet. The Suburb is Arts and Crafts and later houses planned by Unwin and Lutyens: cottages, larger free-standing houses, and grouped compositions around greens and closes. Interiors vary from modest cottage rooms to substantial family houses. Kitchens and bathrooms have almost all been altered since the original build; the external appearance has not, which is the point of the Trust. Purpose-built mansion blocks are not the local type.",
      "Hampstead Garden Suburb Conservation Area was designated in 1967. An Article 4 direction has been in force since the 1970s. The Hampstead Garden Suburb Trust also runs a Scheme of Management under its own Act of Parliament. Most external works need Barnet planning permission and separate written Trust consent. The Trust boundary and the conservation-area boundary are not identical. [VERIFY both maps and whether Trust consent is required for the specific property.]",
      "Permitted development is not the working assumption. Even painting of previously painted surfaces, hedges and hardstandings can sit with the Trust. [VERIFY the current Trust guidelines for the item of work.] Material deliveries on closes and greens need extra care.",
    ],
    rooms:
      "Cottage-scale kitchens and larger family rooms in free-standing houses, almost all already altered internally. We re-fit the room that exists. We do not treat the elevation as a place to land an extract grille by default.",
    working: [
      "Internal work that does not change the elevation often sits outside Trust consent, but we do not assume that if an extract or window is involved. [VERIFY.]",
      "Closes and greens are not loading bays. Deliveries are planned for the setting. Barnet licences still apply.",
    ],
    specification: [
      "Survey of the room, the elevation, the Trust boundary and the conservation-area map. Extract, soil pipes and window changes are where Trust and Barnet planning arrive.",
      "Internal fit-out: strip-out, first- and second-fix, cabinetry scribed to cottage or villa walls, generic worktops, appliance installation, decoration of the envelope, snagging. Anything that breaks the envelope is checked before we open up.",
    ],
    faqs: [
      {
        q: "Do I need Trust consent to replace a kitchen?",
        a: "Internal work that does not change the elevation often sits outside Trust consent, but we do not assume it if an extract or window is involved. [VERIFY.]",
      },
      {
        q: "Can you work on a close or a green?",
        a: "Yes, with deliveries planned for the setting. These streets are not loading bays.",
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
      "Kitchen renovation in Hampstead Garden Suburb NW11. Internal fit-out under Trust and Barnet rules. 020 7101 3168.",
  }),
};
