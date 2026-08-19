import type { Faq } from "./types";

export type AreaHubContent = {
  intro: string;
  working: string;
  faqs: Faq[];
};

export const areaHubContent: Record<string, AreaHubContent> = {
  hampstead: {
    intro:
      "Hampstead remains a village in plan even as it sits inside Camden: Heath Street and the High Street are the commercial spine, with residential lanes that were never drawn for modern vans. The housing is Georgian and early-Victorian around the core, later villas toward the Heath, and mansion blocks on the approaches. Converted houses supply many of the flats; lime plaster, original joinery and floors that have moved are ordinary finds, not defects to be surprised by. Kitchen and bathroom work here is almost always a negotiation with original fabric and, on many streets, with listed-building and conservation-area rules. We work from the Finchley Road office, which is a short run from the village, and the typical instruction is a flat or house that must stay in occupation, or a conversion where the common parts are as sensitive as the rooms themselves.",
    working:
      "Camden issues skip and scaffolding licences; controlled parking covers most of NW3 [VERIFY CPZ code for the street]. Village lanes need timed loading. Extract grilles, replacement windows and external painting are frequently conservation matters — we will not assume permitted development. Tree constraints on Heath-facing plots are common [VERIFY TPO and conservation-area tree notice]. Typical projects are kitchen and bathroom replacement in conversions, whole-flat decoration, and joinery repairs on original sashes.",
    faqs: [
      {
        q: "Do you work in Hampstead village as well as the wider NW3 streets?",
        a: "Yes. Village lanes, Heath-edge houses and the mansion blocks on the approaches are all ordinary territory. Access and conservation constraints change by street; the survey is where we record them.",
      },
      {
        q: "Will conservation-area rules affect a kitchen or bathroom?",
        a: "Internally, often less than people fear. Externally — extract, soil pipes, windows — they often do. Much of Hampstead is in Camden's Hampstead Conservation Area, with listed buildings in the village core. [VERIFY the boundary and listing on the property.]",
      },
      {
        q: "Can you work while we stay in the property?",
        a: "A single kitchen or bathroom, often yes. A whole-flat light refurbishment is usually cleaner if you decant. We will say which, after we have seen the plan.",
      },
      {
        q: "Are you based nearby?",
        a: "The office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "west-hampstead": {
    intro:
      "West Hampstead is a Victorian and Edwardian terrace town that happens to have three stations on West End Lane. The residential streets toward Fortune Green and toward South Hampstead are brick bays, timber floors and kitchens in rear returns — the classic converted-house plan of NW6. Mansion blocks sit nearer the interchange. The work is less listed-village than Hampstead and more about party walls, stacked bathrooms on half-landings, and a high street that makes daytime loading competitive. Light refurbishment of a conversion flat, a kitchen in a rear return, and occupied-home decorating are the usual briefs. We do not treat West Hampstead as an overflow of the village; the stock, the parking and the neighbour pattern are their own.",
    working:
      "Camden licences for skips and scaffold. The three-station interchange makes West End Lane a poor place to leave a vehicle; side streets are CPZ and fill early [VERIFY zone]. Party-wall noise in terraces belongs in the working-hours plan. Some streets toward Fortune Green and South Hampstead sit in conservation areas [VERIFY the named CA]. Typical access is a narrow rear return and a shared hallway.",
    faqs: [
      {
        q: "Do you refurbish converted flats off West End Lane?",
        a: "Yes. That is a large part of the local work: kitchen, bathroom, decoration and floors in a conversion, with protection of the common parts.",
      },
      {
        q: "Is parking difficult for trades?",
        a: "On West End Lane, yes. We plan loading and skip placement on the residential streets, with a Camden licence, rather than assuming a space on the high street.",
      },
      {
        q: "Are the houses listed?",
        a: "Most terraces are not listed, but conservation-area and Article 4 constraints can still apply to windows. [VERIFY on the street.]",
      },
      {
        q: "What is a typical kitchen here?",
        a: "A rear return with a single window, out-of-square walls and a neighbour the other side of the party wall. Layouts are designed around that, not around a showroom island.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "belsize-park": {
    intro:
      "Belsize Park is stucco, high ceilings and two different grains: the Village streets, which are fine and tight, and the avenues — Belsize Avenue, Haverstock Hill — where mansion flats sit among converted houses. Kitchens and bathrooms have often been inserted into former bedrooms or service rooms, which is why extract and drainage are the first questions, not the last. Ceiling heights that look generous on a listing photograph also show every shortcut in preparation. We take on that stock as kitchen, bathroom, painting and light-refurbishment work, with conservation-area assumptions switched on until the map says otherwise.",
    working:
      "Belsize Park Conservation Area covers a large part of the neighbourhood [VERIFY boundary with Camden]. Stucco repair and window design are common consent issues even when the interior work is straightforward. Haverstock Hill is a busy corridor; the Village lanes are not van-friendly. Typical projects: ensuites in conversions, kitchens around chimney breasts, decoration of principal rooms.",
    faqs: [
      {
        q: "Do you work in Belsize Village as well as the mansion blocks?",
        a: "Yes. The constraints differ — access in the Village, managing agents in the blocks — but the interior trades are the same.",
      },
      {
        q: "Will you decorate high-ceilinged rooms?",
        a: "Yes, with a prep specification that matches the plaster. High rooms do not forgive a thin fill.",
      },
      {
        q: "Do I need freeholder consent for a bathroom?",
        a: "In a mansion block or a converted house that has been split, often yes if wastes move or an extract is cut through a common void. [VERIFY the lease.]",
      },
      {
        q: "Which council is it?",
        a: "London Borough of Camden.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "st-johns-wood": {
    intro:
      "St John's Wood is Westminster: tree-lined villas on one street, large late-Victorian and Edwardian mansion blocks on the next. The flats have original service risers, compact kitchens, stacked bathrooms and porters who enforce working hours more tightly than a terrace neighbour will. Lord's, Abbey Road and the High Street sit in the same few hundred metres, which is relevant only because match days and visitors change access. Interior work — kitchen, bathroom, decoration, light refurbishment — is done inside a demise the freeholder still cares about. Licence-to-alter packs are ordinary here, not exceptional.",
    working:
      "Westminster scaffolding and skip licences. Many blocks add their own design guides and hours. The St John's Wood Conservation Area covers much of NW8 [VERIFY]. Typical work is mansion-flat kitchens and bathrooms, with drawings the agent will actually accept. Loading on Circus Road and Wellington Road needs timing. Lord's event days affect surrounding streets [VERIFY with the building].",
    faqs: [
      {
        q: "Do you handle licence-to-alter drawings?",
        a: "We can prepare drawings and a method statement. The freeholder or managing agent grants consent, not us. Lead-in varies by building [VERIFY with the specific agent].",
      },
      {
        q: "Are the lifts large enough for a kitchen?",
        a: "Often not. Carcasses go up the stairs more often than people expect. We measure the lift and the stair before we order units.",
      },
      {
        q: "Is this Camden or Westminster?",
        a: "City of Westminster.",
      },
      {
        q: "Can you decorate a villa as well as a mansion flat?",
        a: "Yes. The joinery and the plaster are different problems from a purpose-built block, and we specify them as such.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "maida-vale": {
    intro:
      "Maida Vale is purpose-built red-brick and terracotta mansion flats, with canal-side houses toward Little Venice and mews behind the avenues. The plan of a typical flat is still the 1890s plan: a long corridor, a kitchen at the back, a bathroom off the hall. Layout work that ignores stacks and ducts is how you end up with a sink that cannot drain. Lifts are small; common parts are polished; porters have views about when a skip may appear. We renovate kitchens and bathrooms inside that discipline, and we decorate and refurbish flats without pretending they are suburban houses.",
    working:
      "Westminster CPZ and mansion-block rules. Maida Vale Conservation Area covers a substantial part of W9 [VERIFY]. Canal-side properties may have Canal & River Trust issues on the frontage [VERIFY]. Typical projects: compact kitchen re-fits, bathroom tanking over timber intermediate floors, whole-flat light refurbishment. Material goes up stairs more often than in a lift.",
    faqs: [
      {
        q: "Can you put an island in a Maida Vale kitchen?",
        a: "Only if the room and the services support it. Most original kitchens here are compact rear rooms. We will not draw an island that the stack and the extract cannot serve.",
      },
      {
        q: "Do you tank bathrooms as standard?",
        a: "Wet areas are waterproofed to a documented system, which matters on timber intermediate floors above a neighbour.",
      },
      {
        q: "What about Little Venice houses as opposed to the blocks?",
        a: "Houses and mews are a different construction. We still survey before we propose; canal-side external work may involve additional consents [VERIFY].",
      },
      {
        q: "Which council?",
        a: "City of Westminster.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "swiss-cottage": {
    intro:
      "Swiss Cottage is the neighbourhood our office sits in: Unit 3 Palace Court, 250 Finchley Road. The housing is mixed in a way Hampstead village is not — mansion blocks and inter-war flats along Finchley Road and Avenue Road, Victorian houses a street back toward Belsize and Frognal. Ceiling heights and window sizes change between those types. Finchley Road itself is a corridor; the residential work is usually off it, where managing agents, conversions and purpose-built blocks sit side by side. Kitchen, bathroom, painting and light refurbishment are the services we take on here, not a redesign of the building.",
    working:
      "Camden for most residential streets; Finchley Road loading is a different highway problem [VERIFY the authority on the frontage]. Adjoining conservation areas (Belsize, Swiss Cottage, South Hampstead) cover many side streets [VERIFY which CA applies]. Typical work is mansion-block kitchens and bathrooms and decoration of conversions, with agent coordination in the larger Avenue Road buildings.",
    faqs: [
      {
        q: "Are you actually based in Swiss Cottage?",
        a: "The office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN, in this neighbourhood.",
      },
      {
        q: "Do you work on Finchley Road itself?",
        a: "Where the property is residential and the work is in our scope, yes. Scaffold and loading on the main road need a different method from a side street.",
      },
      {
        q: "Mansion block or conversion — which is more common?",
        a: "Both. Avenue Road and Finchley Road lean to blocks; the streets toward Belsize and Frognal lean to converted houses.",
      },
      {
        q: "Which council?",
        a: "London Borough of Camden.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "primrose-hill": {
    intro:
      "Primrose Hill still reads as a residential enclave facing a park: Victorian terraces and larger houses, some still single-family, others split into garden and upper-floor flats. Kitchens in lower-ground rooms are a local speciality — and a local problem, because damp and extract have to be solved properly rather than painted over. Stock brick, stucco dressings and original sashes are the character the conservation area is there to keep. Weekend visitors around the park are an access issue, not a marketing line. We take on kitchen, bathroom, decoration and light-refurbishment work in that setting.",
    working:
      "Primrose Hill Conservation Area covers the core streets [VERIFY]. Camden CPZ. Narrow streets and park-facing skip placement need extra notice. Typical work: family-house decoration, lower-ground kitchens, bathrooms in split houses where drainage runs are long. Rooflines and front gardens are sensitive even when the interior is not.",
    faqs: [
      {
        q: "Do you work on the park-facing houses?",
        a: "Yes, with the extra visibility that implies. External alterations are not our service; internal kitchens, bathrooms and decoration are.",
      },
      {
        q: "Lower-ground kitchens — will they feel damp?",
        a: "They can, if extract and incoming moisture are ignored. We survey the room as found and will not decorate over a damp problem.",
      },
      {
        q: "Is weekend access a problem?",
        a: "Around the park, yes. We plan material drops away from peak visitor hours where we can.",
      },
      {
        q: "Which council?",
        a: "London Borough of Camden.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  highgate: {
    intro:
      "Highgate is not a single council. The Village sits across Camden and Haringey, with some streets in Islington, and conservation areas that follow those boundaries rather than the idea of Highgate. Georgian and Victorian houses around Pond Square, villas on the slopes, Edwardian terraces further out: the work changes with the plot. Steep roads, woods and tree protection affect access and anything that touches an elevation. We take on interior kitchen, bathroom, painting and light-refurbishment work once we know which authority the address actually sits in.",
    working:
      "Confirm the borough before any licence is applied for [VERIFY]. Highgate Conservation Area is split; each council's appraisal and Article 4 direction must be read for the address. Steep roads and Village pedestrian traffic constrain vans. Tree constraints on Heath-facing plots are common [VERIFY TPO]. Typical work: decoration of original interiors, kitchens in villas and conversions, bathrooms where stacks are a long run from the proposed ensuite.",
    faqs: [
      {
        q: "Which council will my Highgate property fall under?",
        a: "Camden, Haringey or, on some streets, Islington. We confirm it from the address, not from the postcode N6 alone.",
      },
      {
        q: "Do you work in Highgate Village?",
        a: "Yes. Access, listing and the conservation area are tighter there than on the later streets toward East Finchley.",
      },
      {
        q: "Are trees a planning issue?",
        a: "Often, on Heath-facing and wooded plots. Conservation-area tree notice or a TPO can apply even when the interior work does not. [VERIFY.]",
      },
      {
        q: "Can you form an ensuite in a villa?",
        a: "Where drainage can reach a stack without damaging principal rooms. We will say if it cannot.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "golders-green": {
    intro:
      "Golders Green is Barnet: Edwardian and inter-war family houses, pebbledash and later mock-Tudor, with mansion flats along the main roads and toward Golders Hill Park. Plots are larger than Camden conversions; kitchens are more often original family rooms than inserted closets. Off-street parking is more common, which changes how materials arrive. The high street on Golders Green Road is a separate grain from the crescents behind it. Our services here are the same four — kitchen, bathroom, painting, light refurbishment — applied to family houses more often than to stacked mansion flats.",
    working:
      "Barnet skip and scaffolding licences. Selected streets and the setting of Golders Hill Park sit in conservation areas [VERIFY Barnet CA map]. Typical work: family-house kitchens, bathroom replacements, whole-house decoration. Finchley Road / Golders Green Road loading at peak hours is the main access friction on the commercial spine.",
    faqs: [
      {
        q: "Do you mainly do houses rather than flats in Golders Green?",
        a: "Houses are more of the stock, but we also work in mansion flats along the main roads. The survey records which you have.",
      },
      {
        q: "Is this the same as Hampstead Garden Suburb?",
        a: "No. The Suburb is next door and has its own Trust and conservation regime. Golders Green addresses are ordinary Barnet planning unless the map says otherwise.",
      },
      {
        q: "Do I need to move out for a kitchen?",
        a: "Often not, if there is a second sink or a temporary arrangement. We will say at survey.",
      },
      {
        q: "Which council?",
        a: "London Borough of Barnet.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "queens-park": {
    intro:
      "Queen's Park straddles Brent and Westminster, and the housing tells you which side you are on. Around the park, late-Victorian and Edwardian houses and conversions; on the Westminster side, the Queen's Park Estate is a distinct grid of decorative brick cottages with its own conservation audit. Two councils means two licensing regimes for the same neighbourhood name. Salusbury Road is the commercial spine. We take on kitchen, bathroom, painting and light-refurbishment work in both grains, once the address has told us which authority we are writing to.",
    working:
      "Confirm borough first [VERIFY]. Brent's Queen's Park Conservation Area and Westminster's Queen's Park Estate Conservation Area are separate designations. Typical work: kitchens and bathrooms in terraces, light refurbishment of conversions, decoration that respects original joinery in the Estate cottages. Skips and scaffold must be licensed by the correct council.",
    faqs: [
      {
        q: "Is Queen's Park in Brent or Westminster?",
        a: "Both. The neighbourhood straddles the boundary. We confirm the council from the address before applying for any licence.",
      },
      {
        q: "Do the Estate cottages need special care?",
        a: "Yes. The Queen's Park Estate Conservation Area has its own character; original joinery and brick detail are the point. Interior work still has to respect that where it meets the elevation.",
      },
      {
        q: "What is a typical project?",
        a: "A terrace kitchen and bathroom, or a conversion light refurbishment, with decoration to a written prep standard.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "muswell-hill": {
    intro:
      "Muswell Hill is Haringey, Edwardian, and on a hill. The Broadway is the shopping parade; the slopes hold substantial houses — many still family homes, others converted — with red brick, timber sashes and halls that are larger than inner-Camden conversions. Flats above the Broadway add a smaller, tighter stock. Material handling on steep streets is a practical matter. We take on kitchens, bathrooms, painting and light refurbishment here as family-house work more often than as mansion-block work, which is the reverse of Maida Vale.",
    working:
      "Muswell Hill Conservation Area covers the Broadway and many surrounding streets [VERIFY Haringey CA and any Article 4]. Steep streets are poorly suited to long-wheelbase vans. CPZ on many roads [VERIFY]. Typical work: family-house kitchens and bathrooms, whole-house decoration, conversion flats above and behind the Broadway.",
    faqs: [
      {
        q: "Do you work on the Broadway flats as well as the houses?",
        a: "Yes. Access and extract on a parade building are a different method from a house on the slope.",
      },
      {
        q: "Is the hill a real constraint?",
        a: "For deliveries, yes. We plan vehicle type and drop points rather than assuming a level driveway.",
      },
      {
        q: "Which council?",
        a: "London Borough of Haringey.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "crouch-end": {
    intro:
      "Crouch End gathers around a Broadway and a clock tower, with Victorian and Edwardian houses climbing toward Highgate and falling toward Hornsey. Converted houses are the bulk of the flat market; purpose-built blocks are the exception. Original mouldings, tiled halls and rear additions already built are what a survey actually finds. The work is light refurbishment of conversions, kitchens in rear rooms, and occupied decorating — Haringey licensing, conservation-area rules on the core streets, and a Broadway that is a poor place to leave a skip.",
    working:
      "Crouch End Conservation Area covers the Broadway and a ring of residential streets [VERIFY Haringey CA map]. The Broadway is busy; side streets are the loading points. Parking is a mix of CPZ and less restricted streets [VERIFY street by street]. Typical work as above.",
    faqs: [
      {
        q: "Do you refurbish converted houses in Crouch End?",
        a: "Yes. That is the typical local brief: kitchen, bathroom, decoration and floors in a conversion, with the original hall and joinery kept where they are sound.",
      },
      {
        q: "Is Hornsey Town Hall relevant to a domestic project?",
        a: "Only as a landmark. Your property's constraints are the conservation area, the council and the building itself. [VERIFY current public use of the Town Hall if mentioned in passing.]",
      },
      {
        q: "Which council?",
        a: "London Borough of Haringey.",
      },
      {
        q: "Can you work around an occupied house?",
        a: "Yes. Rooms are sequenced so a kitchen, bathroom and bedroom remain usable where the programme allows.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "kentish-town": {
    intro:
      "Kentish Town is denser and more mixed than Hampstead: Victorian terraces, former workshops, later infill, and a High Street that is a corridor rather than a village. Converted houses dominate; kitchens sit in rear returns or lower-ground rooms that need damp and extract solved properly. Toward Tufnell Park and Dartmouth Park the streets become more residential and more likely to include original family houses. The work is conversion kitchens and bathrooms, whole-flat decoration, and joinery repairs — Camden licensing, neighbour proximity, and a high street that is a poor place to park a skip.",
    working:
      "Several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park [VERIFY the named CA]. Kentish Town Road is a busy corridor; side streets take the vans. Typical work as in the intro. Noise in terraces should be written into the working-hours plan.",
    faqs: [
      {
        q: "Do you work on Kentish Town Road as well as the side streets?",
        a: "Residential properties, yes. Loading on the main road is rarely the right method; we use the side streets with a Camden licence.",
      },
      {
        q: "Are lower-ground kitchens a problem?",
        a: "They can be, if moisture and extract are ignored. We survey the room as found.",
      },
      {
        q: "Which council?",
        a: "London Borough of Camden.",
      },
      {
        q: "Is this the same as Camden Town?",
        a: "No. Kentish Town is its own neighbourhood and housing grain, even though both sit in the same borough.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  kilburn: {
    intro:
      "Kilburn High Road is a boundary as well as a high street: Camden to the east, Brent to the west, with Victorian terraces, mansion blocks and later infill on both sides. East toward West Hampstead the streets are more uniformly Victorian conversions; west, the mix is wider. Flats above shops are a different access problem from the residential streets behind. Two boroughs means two licensing regimes. We take on kitchen, bathroom, painting and light-refurbishment work once the address has told us which council we are writing to.",
    working:
      "Confirm borough first [VERIFY]. Conservation-area coverage is by selected streets, not the whole of Kilburn [VERIFY Camden and Brent maps]. The High Road is a major route; do not assume a skip can sit on it. Typical work: light refurbishment of conversion flats, kitchen and bathroom swaps, decoration. Access through shop premises or narrow side doors needs a method statement.",
    faqs: [
      {
        q: "Is my Kilburn flat in Camden or Brent?",
        a: "The High Road is the historic boundary. We confirm the council from the address before any licence is applied for.",
      },
      {
        q: "Do you work in flats above shops?",
        a: "Yes, where the work is in our scope. Access and extract are the usual constraints, and they are recorded at survey.",
      },
      {
        q: "Can a skip go on Kilburn High Road?",
        a: "Usually not as a default. We plan placement on a side street with the correct borough licence.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "hampstead-garden-suburb": {
    intro:
      "Hampstead Garden Suburb is a planned Arts and Crafts landscape, not a Victorian conversion neighbourhood. Cottages, larger houses and grouped compositions around greens sit under three overlapping controls: Barnet's conservation area, an Article 4 direction, and the Hampstead Garden Suburb Trust's Scheme of Management. The Trust boundary and the conservation-area boundary are not identical. External work is not a casual extra. Our services here are internal: kitchens, bathrooms, decoration and flooring that do not change the street elevation. Permitted development is not the working assumption.",
    working:
      "Most external works need Barnet planning permission and separate written Trust consent [VERIFY both maps and whether Trust consent is required for the property]. Even painting of previously painted surfaces, hedges and hardstandings can sit with the Trust [VERIFY current Trust guidelines for the item]. Material deliveries on closes and greens need extra care. Typical HPSG work is inside the envelope.",
    faqs: [
      {
        q: "Do I need Trust consent for a kitchen?",
        a: "Internal kitchens that do not change the elevation often sit outside Trust consent, but we do not assume it. If an extract grille or a window is involved, Trust and Barnet both come into play. [VERIFY for the property.]",
      },
      {
        q: "Is Trust consent the same as Barnet planning?",
        a: "No. They are separate. Many jobs need both.",
      },
      {
        q: "Do you change roofs or add storeys in the Suburb?",
        a: "No. That is not light refurbishment, and it is not our service. We will say so at the first visit.",
      },
      {
        q: "Which council?",
        a: "London Borough of Barnet, plus the Hampstead Garden Suburb Trust where the Scheme of Management applies.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "hampstead-heath": {
    intro:
      "The streets that take their name from the Heath — toward Parliament Hill, South End Green and the Vale of Health — look onto Metropolitan Open Land. Victorian and later houses, some cottage-scale in the Vale, many substantial family houses, with flats in converted villas. Gardens, levels and trees do as much to shape a project as the plan of the house. Narrow lanes restrict vehicles. Our work is interior: decoration, kitchens and bathrooms, with extract planned so it does not land on a Heath-facing elevation as a convenience.",
    working:
      "Heath-edge properties often sit in the Hampstead Conservation Area or adjoining designations [VERIFY CA, listing and TPO]. Camden licences. Vale of Health lanes are a particular access constraint. Typical work: family-house decoration, kitchen and bathroom replacement, coordination of extract and scaffold so the open-space setting is respected.",
    faqs: [
      {
        q: "Is the Vale of Health accessible for a kitchen fit-out?",
        a: "Yes, with the right vehicle and timing. The lanes were not drawn for large vans; we plan for that.",
      },
      {
        q: "Will extract be visible from the Heath?",
        a: "We will not place a grille on a Heath-facing elevation as a convenience. Routes are agreed at survey. [VERIFY on the specific house.]",
      },
      {
        q: "Which council?",
        a: "London Borough of Camden.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "regents-park": {
    intro:
      "The park fringe is a different class of building from a West Hampstead terrace: Nash terraces, later mansion blocks of serious scale, and more ordinary Victorian streets toward Albany Street and Primrose Hill. Many flats are listed or highly controlled, with original plans, shared services and freeholders — including, on some buildings, the Crown Estate — who run a tight approval process. Our instruction, where we take it, is internal kitchen, bathroom and decoration within an existing demise. Facade and carcass work is not the service.",
    working:
      "Regent's Park Conservation Area (Westminster) and adjoining Camden designations [VERIFY listing grade, CA and borough]. Confirm the estate and the council before any pack is issued. Access, loading bays and porter hours are building-specific. Typical HPSG work is internal replacement, not elevation work.",
    faqs: [
      {
        q: "Do you work in Nash terraces?",
        a: "Where the instruction is internal kitchen, bathroom or decoration within the demise, and the listed-building and estate processes are followed. We will not take on facade work.",
      },
      {
        q: "Is it Westminster or Camden?",
        a: "The park sits between both. We confirm the borough from the address.",
      },
      {
        q: "Will the Crown Estate be involved?",
        a: "On some buildings, yes. That is in addition to the council. [VERIFY the estate for the building.]",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  archway: {
    intro:
      "Archway is Islington at the gyratory, and something closer to Highgate on the slopes. Victorian terraces climb toward the Village; later blocks and mixed parades sit around Holloway Road and Junction Road. Converted houses on the high ground are closer to the rest of our North West London stock; gyratory-side buildings are a different construction and tenure mix. The gyratory is a poor place to park a skip. We take on conversion kitchens and bathrooms, decoration and light refurbishment on the residential streets, with Islington licensing.",
    working:
      "Conservation-area coverage is patchy compared with Highgate or Dartmouth Park [VERIFY Islington CA map]. Residential side streets toward Highgate are the practical base for vans. Typical work: conversion kitchens and bathrooms, decoration, light refurbishment of flats.",
    faqs: [
      {
        q: "Do you work around the gyratory?",
        a: "On residential properties in scope, yes. Loading is planned on side streets, not on the gyratory.",
      },
      {
        q: "Is Archway the same as Highgate?",
        a: "No. Highgate Village is a different grain, often a different council, and a tighter conservation regime. Archway addresses are confirmed on their own terms.",
      },
      {
        q: "Which council?",
        a: "London Borough of Islington for the core of Archway. [VERIFY for the specific street if it sits toward a boundary.]",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  frognal: {
    intro:
      "Frognal is the hill between Finchley Road and Hampstead village: large Victorian and Edwardian houses, some still family homes, many converted into generous flats, with mansion blocks on the lower stretch. The houses are bigger-boned than West Hampstead terraces — wider halls, larger rooms, more original joinery. University and institutional neighbours sit among the residential stock. The gradient affects material handling. Our work is kitchens in converted houses, bathrooms, and decoration of large rooms, under Camden licensing and, on much of the street, the Frognal and Fitzjohn's Conservation Area.",
    working:
      "Frognal and Fitzjohn's Conservation Area covers a large part of the street and its tributaries [VERIFY]. Listed buildings are scattered rather than continuous. Parking is easier than in the Village; the hill is the constraint. Finchley Road end has different highway rules from the Village end. Typical work as in the intro.",
    faqs: [
      {
        q: "Are Frognal houses usually conversions?",
        a: "Many are. Some remain family houses. The survey records which, because access, stacks and occupation differ.",
      },
      {
        q: "Is Frognal in the Hampstead Conservation Area?",
        a: "Much of it sits in Frognal and Fitzjohn's Conservation Area, which is a separate Camden designation. [VERIFY the named CA for the address.]",
      },
      {
        q: "Which council?",
        a: "London Borough of Camden.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "temple-fortune": {
    intro:
      "Temple Fortune is a Finchley Road parade with inter-war and later family houses on the streets behind, toward the Suburb and toward Golders Green. The risk on this page is treating a Temple Fortune address as if it were inside Hampstead Garden Suburb. Some are; many are ordinary Barnet planning. Houses are typically brick, with modest rear gardens; flats exist above the parade and in later blocks. Our work is family-house kitchens and bathrooms, decoration, and flat refurbishment above shops, once we have checked which regime the address sits under.",
    working:
      "Do not apply Trust rules by default [VERIFY whether the address is inside the Suburb Trust / CA or ordinary Barnet planning]. Finchley Road loading at the parade is competitive; behind it, off-street parking is more common. Typical work as in the intro. Extract on flats above shops is a usual constraint.",
    faqs: [
      {
        q: "Is Temple Fortune part of Hampstead Garden Suburb?",
        a: "Sometimes, by the map. We check the Trust and conservation-area boundaries rather than assuming from the neighbourhood name.",
      },
      {
        q: "Do you refurbish flats above the parade?",
        a: "Yes. Access and extract are the items that decide the method.",
      },
      {
        q: "Which council?",
        a: "London Borough of Barnet.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "dartmouth-park": {
    intro:
      "Dartmouth Park sits on the slope between Highgate and Kentish Town: wider streets than Kentish Town proper, more original family houses, and conversions in the larger properties. Brick, bay windows and raised ground floors are typical. The high ground gives long views; the housing is residential and relatively consistent in period. It is a conservation-area neighbourhood with a tight CPZ, not a high-street neighbourhood. Our work is family-house decoration, kitchen replacements, and bathrooms in conversions, with Camden licences and neighbour notice for skips.",
    working:
      "Dartmouth Park Conservation Area covers the core [VERIFY Camden CA boundary]. Original windows and front boundaries are sensitive. Sloping streets and a tight CPZ. Access is straightforward compared with Highgate Village. Typical work as in the intro.",
    faqs: [
      {
        q: "Is Dartmouth Park the same as Tufnell Park?",
        a: "No. They adjoin. Dartmouth Park is the higher, more consistently Victorian residential slope, largely Camden; Tufnell Park straddles Camden and Islington.",
      },
      {
        q: "Do you need a skip licence?",
        a: "Yes, from Camden, with neighbour notice. The CPZ does not leave casual space on the street.",
      },
      {
        q: "Which council?",
        a: "London Borough of Camden.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "tufnell-park": {
    intro:
      "Tufnell Park is Victorian terraces and larger houses around Tufnell Park Road, toward Dartmouth Park and toward Holloway. A high proportion of conversions; family houses remain on some of the broader roads. The stock is closer to Kentish Town than to Highgate Village: rear returns, half-landing bathrooms, timber floors that move. The neighbourhood name covers Islington and Camden streets. We take on conversion kitchens and bathrooms, light refurbishment and occupied decorating once the address has named the council.",
    working:
      "Tufnell Park Conservation Area and adjoining Camden designations cover parts of the neighbourhood, not all of it [VERIFY which council and which CA]. Two possible licensing authorities. Tufnell Park Road is the van route; residential side streets fill with permits by morning. Typical work as in the intro.",
    faqs: [
      {
        q: "Is Tufnell Park in Islington or Camden?",
        a: "Both. We confirm the borough from the address before applying for licences.",
      },
      {
        q: "What is a typical bathroom here?",
        a: "A half-landing or rear-return room in a conversion, often with a long run to the stack. Layout follows the drainage, not the other way round.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
      {
        q: "Can you decorate an occupied conversion?",
        a: "Yes. Rooms are sequenced, with dust control, as on our painting service.",
      },
    ],
  },
  "east-finchley": {
    intro:
      "East Finchley is Barnet family housing: Edwardian and inter-war houses, some Victorian survivals toward Highgate, later infill, a mixed-use High Road, and quieter residential streets toward the Suburb and Muswell Hill. Kitchens are typically family-sized rather than mansion-block compact. Cherry Tree Wood and the cemetery edge some of the quieter streets. Proximity to Hampstead Garden Suburb does not bring a property under the Trust. Our work is family-house kitchens, bathrooms and decoration, with Barnet licences and High Road loading as the main constraint on the commercial spine.",
    working:
      "Conservation-area coverage is selective [VERIFY Barnet CA map]. Off-street parking is more common than in Camden conversions. Typical work as in the intro. Do not apply Suburb Trust rules unless the map puts the address inside that boundary.",
    faqs: [
      {
        q: "Does being near the Suburb mean Trust consent?",
        a: "No. The Trust has a mapped boundary. East Finchley addresses are ordinary Barnet planning unless that map says otherwise.",
      },
      {
        q: "Do you mainly work in houses here?",
        a: "Houses are the bulk of the stock. We will still take a flat where the work is in scope.",
      },
      {
        q: "Which council?",
        a: "London Borough of Barnet.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "kensal-rise": {
    intro:
      "Kensal Rise is Brent: Victorian and Edwardian terraces around Chamberlayne Road, conversions common, a smaller number of purpose-built flats. The stock is close in type to Queen's Park — bay-fronted terraces, original joinery, modest rear gardens — without being the same neighbourhood or the same conservation audit. Toward Kensal Green the grain mixes with cemetery-edge streets and later housing. Chamberlayne Road is a tight commercial spine. Our work is kitchen and bathroom replacement in terraces, light refurbishment of conversions, and decoration, with Brent licences and Overground-station parking pressure.",
    working:
      "Conservation-area coverage includes streets toward Queen's Park and Kensal Green [VERIFY Brent CA names]. Much of Chamberlayne Road is undesignated mixed-use. Typical work as in the intro. Overground traffic affects daytime parking.",
    faqs: [
      {
        q: "Is Kensal Rise the same as Queen's Park?",
        a: "They adjoin and the housing is related, but Kensal Rise is Brent and has its own streets, station and licensing. Queen's Park also straddles Westminster.",
      },
      {
        q: "Do you work on Chamberlayne Road?",
        a: "On residential properties in scope, yes. Loading on the spine is tight; we plan it.",
      },
      {
        q: "Which council?",
        a: "London Borough of Brent.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
  "south-hampstead": {
    intro:
      "South Hampstead is the residential hinterland between Swiss Cottage, Finchley Road and West Hampstead: Victorian houses converted to flats, mansion blocks, some later infill. The streets around Netherhall and Belsize Road mix stucco and brick; toward the railway the grain is tighter. It does not have a village high street of its own, which is the point — the work is in the streets, under Camden licensing and, on a substantial part of the neighbourhood, South Hampstead Conservation Area. Typical instructions are mansion-block and conversion kitchens and bathrooms, decoration, and light refurbishment.",
    working:
      "South Hampstead Conservation Area covers a substantial part of the neighbourhood [VERIFY]. Adjacency to Swiss Cottage and Belsize conservation areas means the correct appraisal must be checked. Camden CPZ, dense residential parking. The railway and Finchley Road constrain some access routes; side streets are the practical loading points.",
    faqs: [
      {
        q: "Is South Hampstead just Swiss Cottage under another name?",
        a: "No. It is the residential streets between Swiss Cottage, Finchley Road and West Hampstead, with its own conservation-area designation on much of the stock.",
      },
      {
        q: "Do you work in the mansion blocks?",
        a: "Yes. Managing-agent hours and licence-to-alter processes apply as they do in other purpose-built stock.",
      },
      {
        q: "Which council?",
        a: "London Borough of Camden.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Fully insured. [INSURANCE_TBC]",
      },
    ],
  },
};
