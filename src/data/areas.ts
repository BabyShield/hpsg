import type { Area } from "./types";

export const areas: Area[] = [
  {
    slug: "hampstead",
    name: "Hampstead",
    postcode: "NW3",
    tier: 1,
    council: "London Borough of Camden",
    housingStock:
      "Hampstead village and the streets off Heath Street and High Street mix Georgian and early-Victorian houses, later stucco villas, and mansion blocks on the busier approaches. Converted houses supply many of the flats; original joinery, lime plaster and uneven floors are the norm. Larger family houses sit toward the Heath and along Frognal, often with later kitchen extensions that we do not form — we work within the rooms as they stand.",
    conservationNotes:
      "Much of Hampstead is in Camden's Hampstead Conservation Area, with a high concentration of listed buildings around the village core. External painting, replacement windows and extract grilles are tightly controlled. [VERIFY the conservation-area boundary and listed status on the specific property via Camden's map.]",
    localNotes:
      "Access on the village lanes is tight; vans need timed loading and a skip licence from Camden. Controlled parking applies across most of NW3 [VERIFY CPZ code for the street]. Typical work is kitchen and bathroom replacement in conversions, whole-flat decoration, and joinery repairs on original sashes.",
    landmarks: [
      "Hampstead Heath",
      "Hampstead High Street",
      "Burgh House",
      "Hampstead Underground station",
    ],
    nearbyAreaSlugs: ["frognal", "hampstead-heath", "belsize-park", "swiss-cottage"],
  },
  {
    slug: "west-hampstead",
    name: "West Hampstead",
    postcode: "NW6",
    tier: 1,
    council: "London Borough of Camden",
    housingStock:
      "West Hampstead is largely Victorian and Edwardian terraces and semi-detached houses, many converted to flats, with later mansion blocks near the transport interchange. West End Lane is the commercial spine; the residential streets behind it are brick terraces with original bay windows, timber floors and stacked bathrooms on half-landings. Kitchens are often in rear returns.",
    conservationNotes:
      "Parts of the area sit in Camden conservation areas, including streets around Fortune Green and the South Hampstead approaches [VERIFY the named CA for the address]. Unlisted terraces may still be subject to Article 4 directions on windows. [VERIFY Article 4 on the street.]",
    localNotes:
      "Three stations on West End Lane make daytime loading competitive. Camden skip and scaffolding licences are required. Typical projects are light refurbishment of converted flats, kitchen replacements in rear returns, and occupied-home decorating. Party-wall noise in terraces belongs in the programme, not as an afterthought.",
    landmarks: [
      "West End Lane",
      "West Hampstead station interchange",
      "Fortune Green",
      "Hampstead Cemetery",
    ],
    nearbyAreaSlugs: ["south-hampstead", "frognal", "kilburn", "queens-park"],
  },
  {
    slug: "belsize-park",
    name: "Belsize Park",
    postcode: "NW3",
    tier: 1,
    council: "London Borough of Camden",
    housingStock:
      "Belsize is defined by mid- and late-Victorian stucco and brick houses, many now laterally converted, together with mansion flats on the larger roads such as Belsize Avenue and Haverstock Hill. Ceiling heights are generous; kitchens and bathrooms have often been inserted into former bedrooms or service rooms. The Village streets are finer-grain; the avenues are broader and more likely to include purpose-built blocks.",
    conservationNotes:
      "Belsize Conservation Area (Camden) covers a large part of the neighbourhood, on the rising land between Chalk Farm / Haverstock Hill and South Hampstead. Stucco repair, window design and roofscape are common consent issues. Article 4 directions apply to parts of the area. [VERIFY CA boundary, Article 4 and listed status with Camden.]",
    localNotes:
      "Haverstock Hill is a busy corridor; side streets are CPZ [VERIFY which authority controls a given frontage]. Typical work: ensuites in conversions, kitchen layouts around chimney breasts, and decoration of high-ceilinged rooms that show every prep shortcut.",
    landmarks: [
      "Belsize Village",
      "Haverstock Hill",
      "Belsize Park Underground station",
    ],
    nearbyAreaSlugs: ["swiss-cottage", "primrose-hill", "hampstead", "kentish-town"],
  },
  {
    slug: "st-johns-wood",
    name: "St John's Wood",
    postcode: "NW8",
    tier: 1,
    council: "City of Westminster",
    housingStock:
      "St John's Wood mixes detached and semi-detached villas on tree-lined streets with large late-Victorian and Edwardian mansion blocks, particularly toward Wellington Road and Prince Albert Road. Flats in those blocks have original service risers, compact kitchens and bathrooms stacked through the building, and common parts that managing agents protect closely. The villas and mews supply family houses with later interior alterations.",
    conservationNotes:
      "Westminster designated the St John's Wood Conservation Area in 1968; it covers much of NW8's residential core. Camden holds a smaller adjoining St John's Wood Conservation Area on its side of the borough boundary. Westminster controls fenestration, front boundaries and roof alterations tightly. Many mansion blocks also sit behind freeholder design guides that are stricter than planning. [VERIFY CA and listed status; confirm any estate scheme of management.]",
    localNotes:
      "Westminster scaffolding and skip licences, plus mansion-block working-hours clauses, drive the programme. Typical work is kitchen and bathroom replacement in mansion flats, licence-to-alter packs, and decoration of principal rooms. Lord's match days affect access on surrounding streets [VERIFY event restrictions with the building].",
    landmarks: [
      "Lord's Cricket Ground",
      "St John's Wood High Street",
      "Abbey Road",
    ],
    nearbyAreaSlugs: ["maida-vale", "primrose-hill", "regents-park", "swiss-cottage"],
  },
  {
    slug: "maida-vale",
    name: "Maida Vale",
    postcode: "W9",
    tier: 1,
    council: "City of Westminster",
    housingStock:
      "Maida Vale is mansion-block country: purpose-built red-brick and terracotta flats from the 1890s–1910s line the principal streets, with canal-side houses and later infill toward Little Venice. Interiors are often original in plan — long corridors, a kitchen at the back, a bathroom off the hall — so layout work has to respect stacks and service ducts. The mews behind the avenues are a different construction altogether.",
    conservationNotes:
      "Maida Vale Conservation Area (Westminster) covers a substantial part of W9. Exterior painting of previously painted brick, window replacement and balcony work are frequent consent topics. Canal-side properties may have additional Canal & River Trust considerations [VERIFY on the specific frontage].",
    localNotes:
      "Westminster CPZ and mansion-block porters' rules shape deliveries. Lifts in older blocks are small; kitchen carcasses often go up the stairs. Typical projects: compact kitchen re-fits, bathroom tanking over timber intermediate floors, and whole-flat light refurbishment.",
    landmarks: [
      "Little Venice",
      "Maida Vale Underground station",
      "The Grand Union / Regent's Canal junction",
      "Clifton Road",
    ],
    nearbyAreaSlugs: ["st-johns-wood", "queens-park", "kilburn", "regents-park"],
  },
  {
    slug: "swiss-cottage",
    name: "Swiss Cottage",
    postcode: "NW3",
    tier: 1,
    council: "London Borough of Camden",
    housingStock:
      "Swiss Cottage sits between Belsize and South Hampstead: mansion blocks and inter-war flats along Finchley Road and Avenue Road, with Victorian houses on the side streets toward Belsize and Frognal. Finchley Road itself is mixed-use; the better residential stock is a street back, where conversions and purpose-built blocks sit side by side. Ceiling heights and window sizes vary sharply between the Victorian houses and the later blocks.",
    conservationNotes:
      "Camden renamed the Swiss Cottage Conservation Area to the South Hampstead Conservation Area; it still covers many of the residential streets off Finchley Road and Avenue Road. Belsize Conservation Area adjoins to the east. Finchley Road mixed-use frontages are less likely to be in a conservation area but extract on those buildings can still need consent. [VERIFY which CA applies to the address.]",
    localNotes:
      "Finchley Road is a major corridor; scaffolding and loading on the main road are a different process from the side streets [VERIFY the highway authority]. Typical work is mansion-block kitchens and bathrooms, decoration of conversions, and coordination with managing agents in the larger Avenue Road blocks. The HPSG office at 250 Finchley Road is in this neighbourhood.",
    landmarks: [
      "Swiss Cottage Library",
      "Hampstead Theatre",
      "Finchley Road",
      "Swiss Cottage Underground station",
    ],
    nearbyAreaSlugs: ["belsize-park", "south-hampstead", "frognal", "st-johns-wood"],
  },
  {
    slug: "primrose-hill",
    name: "Primrose Hill",
    postcode: "NW1",
    tier: 1,
    council: "London Borough of Camden",
    housingStock:
      "Primrose Hill is Victorian terraces and larger houses facing the park, with later mansion blocks toward Regent's Park Road. Many houses remain single-family; others are split into garden and upper-floor flats with kitchens in rear closets or lower-ground rooms. Stock brick, stucco dressings and original sashes are characteristic. The streets are quieter than Camden Town to the east.",
    conservationNotes:
      "Primrose Hill Conservation Area covers the core streets and the setting of the park. Camden has had an Article 4 direction here since 3 March 1983. Rooflines, front gardens and windows are sensitive. Properties backing onto the park may have additional visibility from public open space [VERIFY].",
    localNotes:
      "Narrow streets and weekend visitors around the park affect van access. Camden CPZ. Typical work: family-house decoration, kitchen replacements in lower-ground rooms (damp and extract to be solved properly), and bathrooms in split houses where drainage runs are long.",
    landmarks: [
      "Primrose Hill park and viewpoint",
      "Regent's Park Road",
      "Chalcot Square",
    ],
    nearbyAreaSlugs: ["regents-park", "belsize-park", "kentish-town", "st-johns-wood"],
  },
  {
    slug: "highgate",
    name: "Highgate",
    postcode: "N6",
    tier: 1,
    council:
      "London Boroughs of Camden and Haringey; some streets sit in Islington [VERIFY the council for the specific address — Highgate is not a single-authority area.]",
    housingStock:
      "Highgate Village is Georgian and Victorian houses around Pond Square and Highgate High Street, with larger Victorian villas on the slopes toward the Heath and Archway. Later streets add Edwardian terraces and some inter-war houses. Converted houses and purpose-built mansion flats both appear; the Village itself is finer-grain and more listed. Woods and steep plots affect access and external works more than in the inner NW postcodes.",
    conservationNotes:
      "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey (Haringey later extended its side, including toward Archway). Islington and Barnet conservation areas abut the edges. Holly Lodge Estate is a separate designation. Each council's appraisal, and any Article 4, must be read for the actual address. [VERIFY which authority and which CA name apply.]",
    localNotes:
      "Steep roads, limited turning, and Village pedestrian traffic constrain vans and skips. Typical work: decoration of original interiors, kitchen replacements in villas and conversions, and bathrooms where stacks are a long way from the proposed ensuite. Tree constraints on Heath-facing plots are common [VERIFY TPO and CA tree notice with the correct borough].",
    landmarks: [
      "Highgate Village and Pond Square",
      "Highgate Cemetery",
      "Waterlow Park",
      "Highgate Wood",
    ],
    nearbyAreaSlugs: ["dartmouth-park", "east-finchley", "muswell-hill", "archway"],
  },
  {
    slug: "golders-green",
    name: "Golders Green",
    postcode: "NW11",
    tier: 1,
    council: "London Borough of Barnet",
    housingStock:
      "Golders Green is mainly Edwardian and inter-war family houses — brick, pebbledash and later mock-Tudor — with mansion flats and purpose-built blocks along the main roads and toward Golders Hill Park. Plots are larger than in Camden conversions; kitchens are more often original family rooms than inserted closets. The high street mix along Golders Green Road is separate from the quieter residential crescents behind.",
    conservationNotes:
      "Selected streets and the setting of Golders Hill Park sit in conservation areas [VERIFY Barnet CA map for the address]. Most of the inter-war stock is undesignated but still subject to ordinary Barnet planning if windows or front boundaries change.",
    localNotes:
      "Barnet skip and scaffolding licences. Off-street parking is more common than in NW3, which eases material drops. Typical work: family-house kitchens, bathroom replacements, and whole-house decoration. Finchley Road / Golders Green Road loading at peak hours is the main access friction.",
    landmarks: [
      "Golders Hill Park",
      "Golders Green Hippodrome",
      "Golders Green Underground station",
      "Golders Green Road",
    ],
    nearbyAreaSlugs: [
      "hampstead-garden-suburb",
      "temple-fortune",
      "east-finchley",
      "hampstead",
    ],
  },
  {
    slug: "queens-park",
    name: "Queen's Park",
    postcode: "NW6",
    tier: 1,
    council:
      "London Borough of Brent and City of Westminster — the neighbourhood straddles both [VERIFY the borough for the specific address].",
    housingStock:
      "Queen's Park is late-Victorian and Edwardian terraces and larger houses around the park, with the Queen's Park Estate (Westminster) a distinct grid of decorative brick cottages. Converted flats are common on the larger roads; family houses remain on the quieter streets toward Kensal Rise. Bay windows, patterned brick and original tiled paths are characteristic.",
    conservationNotes:
      "Brent's Queen's Park Conservation Area covers streets around the park; Westminster's Queen's Park Estate Conservation Area is a separate designation with its own audit. [VERIFY which CA and which council apply.]",
    localNotes:
      "Two councils means two licensing regimes for skips and scaffolding. Typical work: kitchen and bathroom replacement in terraces, light refurbishment of conversions, and decoration that has to respect original joinery in the Estate cottages. Salusbury Road is the commercial spine and a busy loading environment.",
    landmarks: [
      "Queen's Park (the park)",
      "Salusbury Road",
      "Queen's Park station",
    ],
    nearbyAreaSlugs: ["kensal-rise", "kilburn", "west-hampstead", "maida-vale"],
  },
  {
    slug: "muswell-hill",
    name: "Muswell Hill",
    postcode: "N10",
    tier: 1,
    council: "London Borough of Haringey",
    housingStock:
      "Muswell Hill is Edwardian shopping parades on the Broadway with substantial Edwardian and late-Victorian houses on the slopes — many still family houses, others converted. Red brick, timber sash windows and generous halls are typical. Flats above the Broadway and later infill blocks add a smaller mansion-flat stock. Plots and rear gardens are larger than in inner Camden.",
    conservationNotes:
      "Muswell Hill Conservation Area was designated by Haringey on 1 March 1974 and covers the Broadway and many of the surrounding residential streets. Fortis Green Conservation Area (also 1 March 1974) sits on the north-west side. Shopfronts and residential fenestration are both sensitive. [VERIFY Haringey CA boundary and any Article 4.]",
    localNotes:
      "The hill affects material handling; some streets are steep and poorly suited to long-wheelbase vans. Haringey CPZ on many roads [VERIFY]. Typical work: family-house kitchens and bathrooms, whole-house decoration, and conversion flats above and behind the Broadway.",
    landmarks: [
      "Muswell Hill Broadway",
      "Alexandra Park and Palace (views and nearby grounds) [VERIFY how the site is described on Haringey materials]",
      "Fortis Green",
    ],
    nearbyAreaSlugs: ["highgate", "crouch-end", "east-finchley", "hampstead-garden-suburb"],
  },
  {
    slug: "crouch-end",
    name: "Crouch End",
    postcode: "N8",
    tier: 1,
    council: "London Borough of Haringey",
    housingStock:
      "Crouch End is Victorian and Edwardian terraces and larger houses around the Broadway, with a strong conversion-flat market in the bigger properties. The clock tower marks the centre; residential streets climb toward Highgate and fall toward Hornsey. Original mouldings, tiled halls and rear additions (already built) are common. Purpose-built blocks are the exception, not the rule.",
    conservationNotes:
      "Crouch End Conservation Area was designated by Haringey on 25 October 1974 and covers the Broadway and a ring of residential streets. [VERIFY Haringey CA map.] Unlisted terraces outside the CA still need ordinary planning for some window replacements.",
    localNotes:
      "The Broadway is busy; residential side streets are the practical loading points. Typical work: light refurbishment of converted houses, kitchen replacements in rear rooms, and occupied decorating. Parking is a mix of CPZ and less restricted streets [VERIFY street by street].",
    landmarks: [
      "Crouch End clock tower",
      "Crouch End Broadway",
      "Hornsey Town Hall [VERIFY current use / public access]",
    ],
    nearbyAreaSlugs: ["muswell-hill", "highgate", "archway", "tufnell-park"],
  },
  {
    slug: "kentish-town",
    name: "Kentish Town",
    postcode: "NW5",
    tier: 1,
    council: "London Borough of Camden",
    housingStock:
      "Kentish Town is Victorian terraces, former workshops and later infill, with a denser, more mixed grain than Hampstead. Many houses are converted to flats; kitchens sit in rear returns or lower-ground rooms that need damp and extract solving properly. Larger streets toward Tufnell Park and Dartmouth Park become more residential and more likely to include original family houses.",
    conservationNotes:
      "Several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park [VERIFY the named CA for the address]. The High Street itself is mixed-use and less uniformly designated.",
    localNotes:
      "Kentish Town Road is a busy corridor. Side streets take the vans. Typical work: conversion kitchens and bathrooms, whole-flat decoration, and joinery repairs. Noise and neighbour proximity in terraces should be written into the working-hours plan.",
    landmarks: [
      "Kentish Town Road",
      "The Forum",
      "Kentish Town station",
    ],
    nearbyAreaSlugs: ["dartmouth-park", "tufnell-park", "belsize-park", "primrose-hill"],
  },
  {
    slug: "kilburn",
    name: "Kilburn",
    postcode: "NW6",
    tier: 1,
    council:
      "London Boroughs of Camden and Brent; Kilburn High Road is the historic boundary [VERIFY the borough for the specific address].",
    housingStock:
      "Kilburn mixes Victorian terraces, mansion blocks and later local-authority and infill housing. East of the High Road (Camden) the streets toward West Hampstead are more uniformly Victorian conversions; west of it (Brent) the grain includes larger blocks and a wider mix of periods. Flats above shops on the High Road are a different construction and access problem from the residential streets behind.",
    conservationNotes:
      "Named conservation areas cover selected streets rather than the whole of Kilburn [VERIFY Camden and Brent CA maps]. High Road shopfronts and upper-floor windows may have separate design guidance.",
    localNotes:
      "Two boroughs, two licensing regimes. The High Road is a major route; do not assume a skip can sit on it. Typical work: light refurbishment of conversion flats, kitchen and bathroom swaps, and decoration. Access through shop premises or narrow side doors needs a method statement.",
    landmarks: [
      "Kilburn High Road",
      "Kilburn Park",
      "Kilburn station",
    ],
    nearbyAreaSlugs: ["west-hampstead", "queens-park", "south-hampstead", "maida-vale"],
  },
  {
    slug: "hampstead-garden-suburb",
    name: "Hampstead Garden Suburb",
    postcode: "NW11",
    tier: 1,
    council: "London Borough of Barnet",
    housingStock:
      "The Suburb is Arts and Crafts and later houses planned by Unwin and Lutyens: cottages, larger free-standing houses, and grouped compositions around greens and closes. Interiors vary from modest cottage rooms to substantial family houses. Kitchens and bathrooms have almost all been altered since the original build; the external appearance has not, which is the point of the Trust. Purpose-built mansion blocks are not the local type.",
    conservationNotes:
      "Hampstead Garden Suburb Conservation Area was designated in 1967. An Article 4 direction has been in force since the 1970s. The Hampstead Garden Suburb Trust also runs a Scheme of Management under its own Act of Parliament. Most external works need Barnet planning permission and separate written Trust consent. The Trust boundary and the conservation-area boundary are not identical. [VERIFY both maps and whether Trust consent is required for the specific property.]",
    localNotes:
      "Do not assume permitted development. Even painting of previously painted surfaces, hedges and hardstandings can sit with the Trust [VERIFY the current Trust guidelines for the item of work]. Typical HPSG work is internal: kitchens, bathrooms, decoration and flooring that do not change the street elevation. Material deliveries on closes and greens need extra care.",
    landmarks: [
      "Central Square",
      "The Institute / Free Church / St Jude's grouping",
      "Hampstead Garden Suburb Trust",
    ],
    nearbyAreaSlugs: ["golders-green", "temple-fortune", "east-finchley", "highgate"],
  },
  {
    slug: "hampstead-heath",
    name: "Hampstead Heath",
    postcode: "NW3",
    tier: 2,
    council: "London Borough of Camden",
    housingStock:
      "The streets that take their name from the Heath — toward Parliament Hill, South End Green and the Vale of Health — are Victorian and later houses looking onto Metropolitan Open Land, with some cottage-scale properties in the Vale. Many are substantial family houses; flats exist in converted villas. The Heath edge means gardens, levels and trees do as much to shape a project as the plan of the house.",
    conservationNotes:
      "Heath-edge properties often sit in the Hampstead Conservation Area or adjoining designations, with additional sensitivity where elevations are seen from the Heath. Trees may be protected by CA rules or TPOs. [VERIFY CA, listing and TPO on the plot.]",
    localNotes:
      "Narrow lanes (Vale of Health especially) restrict vehicles. Typical work: decoration, kitchen and bathroom replacement in family houses, and coordination of extract so it does not land on a Heath-facing elevation. Skip and scaffold licences must respect the open-space setting.",
    landmarks: [
      "Hampstead Heath",
      "Parliament Hill",
      "South End Green",
      "Vale of Health",
    ],
    nearbyAreaSlugs: ["hampstead", "highgate", "dartmouth-park", "kentish-town"],
  },
  {
    slug: "regents-park",
    name: "Regent's Park",
    postcode: "NW1",
    tier: 2,
    council:
      "City of Westminster and London Borough of Camden [VERIFY the borough for the specific address — the park sits between both].",
    housingStock:
      "The park fringe includes Nash terraces and later mansion blocks of a scale unlike anywhere else on this list, together with more ordinary Victorian streets toward Albany Street and toward Primrose Hill. Many flats are in listed or highly controlled buildings with original plan forms, shared services and managing agents who run a tight ship. This is not conversion-terrace stock.",
    conservationNotes:
      "Regent's Park Conservation Area (Westminster) and adjoining Camden designations, with a high density of listed Nash terraces. External work, windows and even internal alterations in listed buildings need consent. [VERIFY listing grade and CA.]",
    localNotes:
      "The Crown Estate and other large freeholders add a layer of approval beyond the council [VERIFY the estate for the building]. Typical HPSG work, where we are instructed, is internal kitchen, bathroom and decoration within an existing demise — not facade or structural work. Access, loading bays and porter hours are building-specific.",
    landmarks: [
      "Regent's Park",
      "Nash terraces",
      "London Zoo (northern fringe of the park)",
    ],
    nearbyAreaSlugs: ["primrose-hill", "st-johns-wood", "maida-vale", "belsize-park"],
  },
  {
    slug: "archway",
    name: "Archway",
    postcode: "N19",
    tier: 2,
    council: "London Borough of Islington",
    housingStock:
      "Archway is Victorian terraces climbing toward Highgate, later local-authority and infill blocks around the gyratory, and mixed parades on Holloway Road and Junction Road. Converted houses on the slopes toward Dartmouth Park and Highgate are closer to the rest of our NW London stock; the gyratory-side buildings are a different construction and tenure mix.",
    conservationNotes:
      "Conservation-area coverage is patchy compared with Highgate or Dartmouth Park; some streets toward the Village edge are designated, many around the gyratory are not. [VERIFY Islington CA map.]",
    localNotes:
      "The gyratory and Holloway Road are poor places to park a skip. Residential side streets toward Highgate are the practical base. Typical work: conversion kitchens and bathrooms, decoration, and light refurbishment of flats. Islington licensing for skips and scaffolding.",
    landmarks: [
      "Archway gyratory / Archway Tower setting",
      "Junction Road",
      "Archway Underground station",
    ],
    nearbyAreaSlugs: ["highgate", "tufnell-park", "crouch-end", "dartmouth-park"],
  },
  {
    slug: "frognal",
    name: "Frognal",
    postcode: "NW3",
    tier: 2,
    council: "London Borough of Camden",
    housingStock:
      "Frognal runs from the top of Finchley Road up toward Hampstead village: large Victorian and Edwardian houses, some still family homes, many converted into generous flats, with mansion blocks on the lower stretch. The houses are bigger-boned than West Hampstead terraces — wider halls, larger rooms, more original joinery. University and institutional neighbours sit among the residential stock.",
    conservationNotes:
      "Frognal and Fitzjohn's Conservation Area covers a large part of the street and its tributaries. [VERIFY Camden CA name and boundary.] Listed buildings are scattered rather than continuous.",
    localNotes:
      "Frognal is a steep hill; parking and loading are easier than in the Village but the gradient affects material handling. Typical work: kitchens in converted houses, bathrooms, and decoration of large rooms. Finchley Road end has different highway constraints from the Village end.",
    landmarks: [
      "Frognal (the street and hill)",
      "University College School setting [VERIFY how to describe the campus publicly]",
      "Finchley Road (lower end)",
    ],
    nearbyAreaSlugs: ["hampstead", "west-hampstead", "swiss-cottage", "south-hampstead"],
  },
  {
    slug: "temple-fortune",
    name: "Temple Fortune",
    postcode: "NW11",
    tier: 2,
    council: "London Borough of Barnet",
    housingStock:
      "Temple Fortune is the shopping parade on Finchley Road with inter-war and later family houses on the streets behind, toward the Suburb and toward Golders Green. Houses are typically brick, often with original tiled front paths and modest rear gardens. Flats exist above the parade and in later blocks; the residential streets are still mostly houses.",
    conservationNotes:
      "The parade and some adjoining streets have a different status from Hampstead Garden Suburb immediately to the east; do not apply Trust rules by default. [VERIFY whether the address is inside the Suburb Trust / CA or ordinary Barnet planning.]",
    localNotes:
      "Finchley Road loading at Temple Fortune is competitive. Behind the parade, off-street parking is more common. Typical work: family-house kitchens and bathrooms, decoration, and flat refurbishment above shops (access and extract are the usual constraints).",
    landmarks: [
      "Temple Fortune parade",
      "Finchley Road (NW11 stretch)",
    ],
    nearbyAreaSlugs: [
      "golders-green",
      "hampstead-garden-suburb",
      "east-finchley",
      "hampstead",
    ],
  },
  {
    slug: "dartmouth-park",
    name: "Dartmouth Park",
    postcode: "NW5",
    tier: 2,
    council: "London Borough of Camden",
    housingStock:
      "Dartmouth Park is Victorian houses on the slope between Highgate and Kentish Town: wider streets than Kentish Town proper, more original family houses, and conversions in the larger properties. Brick, bay windows and raised ground floors are typical. The high ground gives long views; the housing is residential and relatively consistent in period.",
    conservationNotes:
      "Dartmouth Park Conservation Area covers the core of the neighbourhood. [VERIFY Camden CA boundary.] Original windows and front boundaries are sensitive.",
    localNotes:
      "Sloping streets and a tight CPZ. Typical work: family-house decoration, kitchen replacements, and bathrooms in conversions. Access is straightforward compared with Highgate Village, but skip placement still needs a Camden licence and neighbour notice.",
    landmarks: [
      "Dartmouth Park (the neighbourhood and slope)",
      "Highgate Road",
      "Parliament Hill fields (nearby)",
    ],
    nearbyAreaSlugs: ["tufnell-park", "highgate", "kentish-town", "hampstead-heath"],
  },
  {
    slug: "tufnell-park",
    name: "Tufnell Park",
    postcode: "N19",
    tier: 2,
    council:
      "London Borough of Islington and London Borough of Camden [VERIFY the borough for the specific address].",
    housingStock:
      "Tufnell Park is Victorian terraces and larger houses around Tufnell Park Road and the streets toward Dartmouth Park and Holloway. A high proportion of conversions; family houses remain on some of the broader roads. The stock is closer to Kentish Town than to Highgate Village: rear returns, half-landing bathrooms, and timber floors that move.",
    conservationNotes:
      "Tufnell Park Conservation Area (and adjoining Camden designations) cover parts of the neighbourhood [VERIFY which council and which CA]. Coverage is not uniform.",
    localNotes:
      "Two possible licensing authorities. Typical work: conversion kitchens and bathrooms, light refurbishment, and occupied decorating. Tufnell Park Road is the obvious van route; residential side streets fill with resident permits by morning.",
    landmarks: [
      "Tufnell Park Road",
      "Tufnell Park Underground station",
    ],
    nearbyAreaSlugs: ["kentish-town", "dartmouth-park", "archway", "highgate"],
  },
  {
    slug: "east-finchley",
    name: "East Finchley",
    postcode: "N2",
    tier: 2,
    council: "London Borough of Barnet",
    housingStock:
      "East Finchley is Edwardian and inter-war family houses, some Victorian survivals toward Highgate, and later infill. High Road is mixed-use; the residential streets toward the Suburb and toward Muswell Hill are quieter and more uniformly houses. Kitchens are typically family-sized rather than mansion-block compact. Cherry Tree Wood and the cemetery edge some of the quieter streets.",
    conservationNotes:
      "Conservation-area coverage is selective [VERIFY Barnet CA map]. Proximity to Hampstead Garden Suburb does not bring a property under the Trust — that is a separate boundary.",
    localNotes:
      "Barnet licences. Off-street parking is more common than in Camden conversions. Typical work: family-house kitchens, bathrooms and decoration. High Road loading is the main constraint for properties on the commercial spine.",
    landmarks: [
      "East Finchley Underground station",
      "Cherry Tree Wood",
      "East Finchley High Road",
    ],
    nearbyAreaSlugs: [
      "highgate",
      "muswell-hill",
      "golders-green",
      "hampstead-garden-suburb",
    ],
  },
  {
    slug: "kensal-rise",
    name: "Kensal Rise",
    postcode: "NW10",
    tier: 2,
    council: "London Borough of Brent",
    housingStock:
      "Kensal Rise is Victorian and Edwardian terraces around Chamberlayne Road, with conversions common and a smaller number of purpose-built flats. The stock is close in type to Queen's Park: bay-fronted terraces, original joinery, modest rear gardens. Toward Kensal Green the grain mixes with cemetery-edge streets and later housing.",
    conservationNotes:
      "Conservation-area coverage includes streets toward Queen's Park and Kensal Green [VERIFY Brent CA names and boundaries]. Much of Chamberlayne Road itself is undesignated mixed-use.",
    localNotes:
      "Brent skip and scaffolding licences. Chamberlayne Road is the commercial spine and a tight loading environment. Typical work: kitchen and bathroom replacement in terraces, light refurbishment of conversions, and decoration. Overground station traffic affects daytime parking.",
    landmarks: [
      "Chamberlayne Road",
      "Kensal Rise station",
      "Queen's Park (nearby)",
    ],
    nearbyAreaSlugs: ["queens-park", "kilburn", "west-hampstead", "maida-vale"],
  },
  {
    slug: "south-hampstead",
    name: "South Hampstead",
    postcode: "NW6",
    tier: 2,
    council: "London Borough of Camden",
    housingStock:
      "South Hampstead sits between Swiss Cottage, Finchley Road and West Hampstead: Victorian houses converted to flats, mansion blocks, and some later infill. The streets around Netherhall and Belsize Road mix stucco and brick; toward the railway the grain is tighter. It reads as a residential hinterland of Swiss Cottage rather than as a village high street of its own.",
    conservationNotes:
      "South Hampstead Conservation Area covers a substantial part of the neighbourhood [VERIFY Camden CA boundary]. Adjacency to Swiss Cottage and Belsize CAs means the correct appraisal must be checked, not assumed.",
    localNotes:
      "Camden CPZ and a dense residential parking pattern. Typical work: mansion-block and conversion kitchens and bathrooms, decoration, and light refurbishment. The railway and Finchley Road constrain some access routes; side streets are the practical loading points.",
    landmarks: [
      "South Hampstead station",
      "Belsize Road",
      "Finchley Road (eastern edge)",
    ],
    nearbyAreaSlugs: ["swiss-cottage", "west-hampstead", "frognal", "st-johns-wood"],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}

export const TIER_1_AREA_SLUGS = areas.filter((area) => area.tier === 1).map((area) => area.slug);

export const TIER_2_AREA_SLUGS = areas.filter((area) => area.tier === 2).map((area) => area.slug);
