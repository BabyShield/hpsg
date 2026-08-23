import { areaFacts } from "./area-facts";
import { areas } from "./areas";
import { SERVICE_SLUGS, type ServiceSlug } from "./types";

const TIER_1 = areas.filter((area) => area.tier === 1).map((area) => area.slug);

export const serviceHubFacts: Record<ServiceSlug, string[]> = {
  "kitchen-renovation": [
    "Hampstead Property Services Group Limited (company no. 17404557) plans and fits kitchens from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN.",
    "Kitchen addresses on this site sit in Camden, Westminster, Barnet and Haringey — skip licences follow the council on the frontage, not the neighbourhood name.",
    "The ordinary conversion kitchen in West Hampstead, Kentish Town and Kilburn is a rear-return galley: one window, a party wall and a door that swings into the run.",
    "The ordinary mansion-flat kitchen in St John's Wood, Maida Vale and Swiss Cottage is a compact rear room on original risers, not an island.",
    "Westminster designated the St John's Wood Conservation Area in 1968; extract on those elevations is a consent question, not a default grille.",
    "Camden has had an Article 4 direction in Primrose Hill Conservation Area since 3 March 1983.",
    "Hampstead Garden Suburb Conservation Area was designated in 1967; the Trust runs a separate Scheme of Management, and an extract grille is not a casual extra.",
    "Hampstead Underground, opened in 1907, is 58.5 metres below street level — the deepest on the network — but kitchen deliveries still use Heath Street and the High Street at grade.",
    "Gas work is by a Gas Safe registered engineer. New electrical circuits are notified where the regulations require it.",
    "Forming a structural opening or a kitchen-diner that removes a wall is not kitchen renovation on this site; that sits with Hampstead Renovations.",
  ],
  "bathroom-renovation": [
    "Hampstead Property Services Group Limited (company no. 17404557) renovates bathrooms from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN.",
    "Converted Victorian and Edwardian houses in Hampstead, West Hampstead, Belsize Park and Kentish Town typically have timber intermediate floors — tanking is a documented system, not a paint-on afterthought.",
    "Purpose-built mansion flats in Maida Vale date mainly from the 1890s–1910s; bathrooms sit on stacked wastes over a neighbour.",
    "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey; the skip licence follows the borough on the address.",
    "The Queen's Park Estate cottages were built from 1875 by the Artizans', Labourers' and General Dwellings Company; Westminster's Estate conservation area is a separate map from Brent's Queen's Park Conservation Area.",
    "Internal bathrooms without a window need mechanical extract with a clear route to outside. We will not leave a room dependent on a fan that dumps into a void.",
    "A Victorian conversion rarely has the floor build-up of a new-build slab. Level-access wet rooms are specified only where the joists will take the fall.",
    "Lord's Cricket Ground affects access on St John's Wood streets on match days; bathroom crates often go up the stair, not in the lift.",
    "Leasehold flats usually need a licence to alter if wastes move or extract is cut through a common void. Consent is the freeholder's, not ours.",
    "Crouch End Conservation Area was designated by Haringey on 25 October 1974. Purpose-built mansion-block bathrooms are the exception there, not the rule.",
  ],
  "painting-decorating": [
    "Hampstead Property Services Group Limited (company no. 17404557) decorates period interiors from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN.",
    "Lime plaster, gypsum patches and previous coatings of unknown type are the ordinary Hampstead, Belsize Park and Highgate Village substrates — they are not treated as the same wall.",
    "Occupied-home sequencing is the default: a kitchen, a bathroom and a bedroom are kept usable where the programme allows.",
    "Camden's Article 4 direction in Primrose Hill has applied since 3 March 1983 and controls windows and elevations, not interior emulsion.",
    "In Hampstead Garden Suburb, internal decoration that does not change the elevation is ordinary work; a new outside colour needs Trust consent and often Barnet planning.",
    "Muswell Hill Conservation Area and Fortis Green Conservation Area were both designated by Haringey on 1 March 1974.",
    "Sash windows, shutters, picture rails and original doors are programmed as joinery. Failed cords, staff beads or putty are not a paint item.",
    "Spray is specified per room. Empty rooms can take it; furnished mansion flats in St John's Wood and Maida Vale usually take brush and roller.",
    "Common parts of a conversion or a mansion block are a separate instruction unless the freeholder is the client.",
    "West Hampstead has three stations on West End Lane — Underground, Overground and Thameslink — so decorating deliveries are planned off the high street.",
  ],
  "light-refurbishment": [
    "Hampstead Property Services Group Limited (company no. 17404557) runs light-refurbishment programmes from Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN.",
    "Light refurbishment on this site is kitchen, bathroom, decoration, flooring and joinery in the rooms that exist — one programme and one account.",
    "Structural openings, loft conversions, extensions and basement works sit with Hampstead Renovations (hampsteadrenovations.co.uk), not on this site.",
    "A typical West Hampstead conversion programme is a rear-return kitchen, a half-landing bathroom, decoration and floors, with the shared stair protected.",
    "A typical St John's Wood or Maida Vale programme is a mansion apartment as leased, written through a licence to alter before strip-out.",
    "Hampstead Heath is managed by the City of London Corporation, not by Camden; Heath-facing extract is a different consent question from an interior fit-out.",
    "Highgate is not a single council: skip licences are issued by Camden, Haringey or, on some streets, Islington, confirmed from the address.",
    "Unknowns — hidden damp, failed subfloors, redundant wiring — are listed as provisional items after survey, not buried in a lump sum.",
    "Three stations on West End Lane make a whole-flat skip on the high street the wrong working assumption.",
    "Hampstead Garden Suburb Conservation Area was designated in 1967; an Article 4 direction has been in force since the 1970s, and the Trust boundary is a separate map.",
  ],
};

const kitchenArea: Record<string, string[]> = {
  hampstead: [
    "Hampstead kitchens are conversion galleys and village-house rooms scribed to chimney breasts, not catalogue islands dropped into a square box.",
    "Camden's Hampstead Conservation Area and a high concentration of listed buildings around Heath Street control where an extract grille may sit.",
    "Village lanes off Heath Street and the High Street were not drawn for a kitchen delivery; drops are timed and recorded at survey.",
    "Hampstead Underground opened in 1907 and is 58.5 metres below street level; the kitchen still arrives at grade on those lanes.",
    "Forming a kitchen-diner that removes a wall is not this service in the village or in a conversion.",
    "Skip and scaffolding licences for a Hampstead kitchen are issued by Camden.",
  ],
  "west-hampstead": [
    "West Hampstead kitchens typically live in rear returns: one window, a party wall, and a door that swings into the run.",
    "Three stations sit on West End Lane — Underground, Overground and Thameslink — so carcasses are planned off the high street, not on it.",
    "Bathrooms in the same conversions are often stacked on half-landings; the kitchen still follows the stack and the window that exist.",
    "Party-wall hours belong in the kitchen programme. Rubbing down and first-fix are noisy work in a terrace.",
    "Some streets toward Fortune Green sit in conservation areas; extract is checked on the map for the address.",
    "An island is specified only if the rear-return and the services will take it — most will not.",
  ],
  "belsize-park": [
    "Belsize Park kitchens are often inserted into former bedrooms or service rooms; extract and drainage come before the run of units.",
    "Camden's Belsize Conservation Area is a separate designation from Hampstead Conservation Area.",
    "Village streets are tight for vans; the avenues — Belsize Avenue, Haverstock Hill — more often have mansion flats and a managing agent.",
    "High ceilings change access and filling if the ceiling is in the envelope; they do not move the stack.",
    "Cabinetry is scribed to original chimney breasts rather than boxed out as a convenience.",
    "Article 4 directions apply to parts of Belsize; windows and stucco are common consent issues for extract.",
  ],
  "st-johns-wood": [
    "St John's Wood kitchens are typically compact rooms on original risers in late-Victorian and Edwardian mansion blocks toward Wellington Road and Prince Albert Road.",
    "Westminster designated the St John's Wood Conservation Area in 1968.",
    "Carcasses are assumed up the stair until the lift is measured; many mansion-block lifts will not take a kitchen run.",
    "Licence-to-alter packs are ordinary before cabinets come out. Consent is the agent's, not ours.",
    "Lord's Cricket Ground can restrict access on surrounding streets on match days.",
    "Most of the residential core is Westminster; Camden holds a smaller adjoining conservation area on the borough edge.",
  ],
  "maida-vale": [
    "Maida Vale kitchens sit in 1890s–1910s mansion-block rear rooms on stacked drainage, with a long corridor back to the hall.",
    "Westminster's Maida Vale Conservation Area covers a substantial part of W9.",
    "Little Venice houses and mews are a different construction and a different access problem from the terracotta blocks.",
    "Canal-side frontages may involve the Canal & River Trust as well as Westminster — checked on the specific property.",
    "Relocating a sink is only possible if the drainage will serve the new position without cutting into another demise.",
    "A skip on a principal mansion-block street is not the working assumption.",
  ],
  "swiss-cottage": [
    "The HPSG office is at Unit 3 Palace Court, 250 Finchley Road, London NW3 6DN, in this neighbourhood.",
    "Avenue Road leans to mansion-block galleys on original risers; the streets toward Belsize and Frognal lean to conversion kitchens around chimney breasts.",
    "Camden renamed the Swiss Cottage Conservation Area the South Hampstead Conservation Area; many residential streets off Finchley Road remain inside it.",
    "Belsize Conservation Area adjoins to the east — the map is checked for the address.",
    "Finchley Road loading is a corridor process, not a side-street skip.",
    "Being next to the office shortens the visit. It does not skip the measured survey of lift, stair and extract.",
  ],
  "primrose-hill": [
    "Primrose Hill kitchens sit in park-facing terraces and lower-ground rooms; moisture is solved before units go on the wall.",
    "Camden has had an Article 4 direction in Primrose Hill Conservation Area since 3 March 1983.",
    "An extract grille on a park-facing wall is a consent question, not a default.",
    "Weekend visitors around the park affect van access; drops are planned away from peak hours where we can.",
    "Forming a new rear kitchen is not this service. We re-fit rooms that exist.",
    "Chalcot Square and Regent's Park Road are characteristic of the core; the kitchen still follows the stack in the house.",
  ],
  highgate: [
    "Highgate is not a single council: Village and slope addresses sit in Camden and Haringey, with some streets in Islington.",
    "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey.",
    "Village houses need joinery treated as joinery and extract routed away from a Heath-facing or principal front wherever the building allows.",
    "Slope villas often have larger family kitchens in existing rear rooms — still out of square, still not a structural opening.",
    "The skip licence is issued by the borough the address sits in, confirmed from the address, not from N6.",
    "Holly Lodge Estate is a separate conservation designation from Highgate Conservation Area.",
  ],
  "golders-green": [
    "Golders Green kitchens are more often Edwardian and inter-war family rooms on the Barnet side than compact mansion-block galleys.",
    "This is not Hampstead Garden Suburb unless the map says so. Trust rules are not applied by default.",
    "Golders Green Road is a loading problem; the crescents behind it, with more off-street parking, are not.",
    "Pebbledash houses hide out-of-square walls and later partitions as readily as a Camden conversion.",
    "Golders Hill Park sits on the Hampstead edge; selected streets nearby are designated, most inter-war streets are not.",
    "Skip and scaffolding licences are issued by Barnet.",
  ],
  "queens-park": [
    "Queen's Park straddles Brent and Westminster; the kitchen licence follows the frontage, not the neighbourhood name.",
    "The Queen's Park Estate cottages were built from 1875; original joinery is specified, not boxed in.",
    "Brent's Queen's Park Conservation Area and Westminster's Queen's Park Estate Conservation Area are separate maps.",
    "Salusbury Road is a busy spine and a poor default loading point for carcasses.",
    "Terrace rear-returns on the Brent streets are a different grain from cottage-scale Estate kitchens.",
    "Extract on an Estate cottage elevation is a consent question.",
  ],
  "muswell-hill": [
    "Muswell Hill kitchens are Edwardian family rooms on a slope, or tighter flats above the Broadway.",
    "Muswell Hill Conservation Area was designated on 1 March 1974; Fortis Green Conservation Area was designated the same day.",
    "Muswell Hill has no Underground station; the hill still decides the van for a kitchen delivery.",
    "An extract grille on the Broadway is a different consent path from a rear garden elevation on the slope.",
    "Alexandra Palace sits immediately to the south-east; it does not change the kitchen specification, only the geography.",
    "Skip and scaffolding licences are issued by Haringey.",
  ],
  "crouch-end": [
    "Crouch End kitchens are typically rear rooms in converted Victorian and Edwardian houses, not mansion-block galleys.",
    "Crouch End Conservation Area was designated by Haringey on 25 October 1974.",
    "The clock tower marks the Broadway; a skip on the Broadway is not the working assumption.",
    "Original mouldings and tiled halls outside the kitchen envelope are protected, not treated as a site path.",
    "Hornsey Town Hall sits on the Broadway civic cluster; the kitchen is still a rear-room fit-out on a residential side street.",
    "Purpose-built mansion blocks are the exception. Converted houses are the local type.",
  ],
  "kentish-town": [
    "Kentish Town kitchens sit in rear returns and lower-ground rooms of a denser Victorian grain than Hampstead.",
    "Lower-ground moisture is a survey item. We will not hang units on a wet wall.",
    "Kentish Town Road is a mixed-use corridor and a poor skip location; side streets take the vans.",
    "Kentish Town station is served by the Northern line and by Thameslink.",
    "Conservation-area coverage is by street, including toward Dartmouth Park, not uniform along the High Street.",
    "The Forum on Highgate Road is a Grade II listed former cinema; it does not set the kitchen layout, the stack does.",
  ],
  kilburn: [
    "Kilburn High Road is the historic borough boundary: east is Camden, west is Brent. The kitchen licence follows the address.",
    "East toward West Hampstead the kitchens are more uniformly Victorian conversion galleys.",
    "Flats above shops are a narrow-stair and extract problem; we measure before we order carcasses.",
    "An extract grille through a shopfront elevation is not a default.",
    "Kilburn Underground is on the Jubilee line; Kilburn High Road station is on London Overground.",
    "The High Road is a major route and a poor default skip site.",
  ],
  "hampstead-garden-suburb": [
    "A Suburb kitchen is an internal fit-out under an Arts and Crafts envelope planned by Unwin, with Lutyens responsible for Central Square.",
    "Hampstead Garden Suburb Conservation Area was designated in 1967. An Article 4 direction has been in force since the 1970s.",
    "The Hampstead Garden Suburb Trust runs a Scheme of Management under its own Act of Parliament. The Trust boundary and the conservation-area boundary are not identical.",
    "Internal replacement often sits outside Trust consent; an extract grille, soil pipe or window that breaks the envelope does not.",
    "Closes and greens are not loading bays. Deliveries are planned for the setting.",
    "Most external works need Barnet planning permission and separate written Trust consent.",
  ],
};

const bathroomArea: Record<string, string[]> = {
  hampstead: [
    "Hampstead bathrooms typically sit on timber floors in conversions; tanking and extract that a conservation elevation will accept decide the layout.",
    "Camden's Hampstead Conservation Area and listed fabric around the village control new extract grilles on principal fronts.",
    "Village lanes off Heath Street are not loading bays for a bath crate; the survey records the vehicle and the drop.",
    "An ensuite in a former dressing room is possible only where drainage can reach a stack without damaging a principal room.",
    "Hampstead Heath is managed by the City of London Corporation; Heath-edge extract is a different question from an interior bathroom.",
    "Burgh House on New End Square is a listed early-eighteenth-century landmark; listing on a bathroom address is still checked on the map, not assumed.",
  ],
  "west-hampstead": [
    "West Hampstead bathrooms are often stacked on half-landings; the stack and the neighbour below decide what the room can take.",
    "Three stations on West End Lane make daytime loading competitive; sanitaryware is planned off the high street.",
    "Timber intermediate floors in these conversions need tanking as a system, not a paint-on afterthought.",
    "A wet room on a half-landing is specified only where the floor depth will take the fall.",
    "Party-wall hours belong in the bathroom programme.",
    "Fortune Green streets may sit in a conservation area — extract is checked for the address.",
  ],
  "belsize-park": [
    "Belsize Park bathrooms are often ensuites formed in former dressing rooms; drainage and extract are the first questions, not the last.",
    "Belsize Conservation Area is a separate Camden designation from Hampstead.",
    "High ceilings change access and filling; they do not move the soil stack.",
    "Village streets are tight for a bath delivery; avenue mansion flats more often have an agent and set hours.",
    "Article 4 directions apply to parts of the area; extract through stucco is a consent question.",
    "Tanking is required in both conversion timber floors and stacked avenue bathrooms.",
  ],
  "st-johns-wood": [
    "St John's Wood bathrooms are compact stacked rooms in mansion blocks; wastes and extract share the building.",
    "Westminster designated the conservation area in 1968. Many blocks also sit behind freeholder design guides stricter than planning.",
    "Bath crates often go up the stair, not in the lift.",
    "Licence to alter is ordinary where wastes or extract move. We do not strip while the agent's pack is outstanding.",
    "Lord's match days can restrict access on surrounding streets.",
    "Working hours follow the block. Common-parts protection is written, not offered as a courtesy.",
  ],
  "maida-vale": [
    "Maida Vale bathrooms sit over a neighbour's ceiling void in 1890s–1910s mansion blocks; tanking and testing are the job, not the tiles.",
    "Westminster's Maida Vale Conservation Area covers a substantial part of W9.",
    "A wet room in a mansion flat is only possible if the floor build-up and the waterproofing system will take the fall.",
    "Little Venice houses are a different construction from the terracotta blocks.",
    "Canal & River Trust questions can arise on some canal-side frontages for anything that touches the elevation.",
    "Lifts in older blocks are small; stairs take sanitaryware more often than lifts.",
  ],
  "swiss-cottage": [
    "The office is at Unit 3 Palace Court, 250 Finchley Road — it shortens the visit, not the tanking, extract or licence.",
    "Avenue Road leans to stacked mansion-flat bathrooms on original risers; streets toward Belsize lean to conversion half-landings.",
    "Camden now calls the local designation the South Hampstead Conservation Area.",
    "Finchley Road is a major corridor; bathroom deliveries are a different process from a side street.",
    "Swiss Cottage Library is a Grade II listed Basil Spence building of 1964; it does not set the bathroom layout, the stack does.",
    "Tanking is required in both the block stock and the conversion stock.",
  ],
  "primrose-hill": [
    "Primrose Hill bathrooms include lower-ground rooms and compact terraces; damp is isolated before sanitaryware is set.",
    "An Article 4 direction has applied since 3 March 1983. It controls windows and elevations, not the brassware.",
    "A park-facing extract grille is a consent question.",
    "Weekend visitor pressure around the park affects van access.",
    "Forming a new rear bathroom is not this service.",
    "Primrose Hill park is Metropolitan Open Land looking south over central London; visibility from the park can matter for elevations.",
  ],
  highgate: [
    "Highgate bathrooms sit in village houses and slope conversions; floor depth and a split-borough conservation map decide wet rooms.",
    "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey.",
    "The skip licence follows the borough on the address — Camden, Haringey or, on some streets, Islington.",
    "Trees can constrain a scaffold or a skip even when the bathroom is internal. [VERIFY TPO with the correct borough.]",
    "Village listing is concentrated around Pond Square and Highgate High Street.",
    "An ensuite in a slope villa is ordinary where the stack will serve it without a structural opening.",
  ],
  "golders-green": [
    "Golders Green bathrooms are family rooms in Edwardian and inter-war houses — more space than a conversion, still a timber-floor problem.",
    "Barnet is the council. Hampstead Garden Suburb Trust rules do not apply unless the address is inside the Trust boundary.",
    "Off-street parking often eases a bath delivery compared with a Camden conversion.",
    "Pebbledash houses still need a survey; walls are out of square.",
    "Golders Green Underground is on the Northern line (Edgware branch).",
    "Selected streets near Golders Hill Park sit in conservation areas; most inter-war streets do not.",
  ],
  "queens-park": [
    "Queen's Park bathrooms sit on terrace stacks and in Estate cottages; two councils mean two licensing regimes.",
    "The Estate cottages date from 1875. Original joinery is specified, not boxed in, and a wet room is not assumed.",
    "Brent's Queen's Park Conservation Area and Westminster's Estate conservation area are separate designations.",
    "Salusbury Road is a poor default loading point.",
    "Tanking is the same requirement in an Estate cottage as in a terrace conversion — the floor still has to take water.",
    "Queen's Park station is served by the Bakerloo line and London Overground.",
  ],
  "muswell-hill": [
    "Muswell Hill bathrooms are Edwardian family rooms and conversion ensuites; extract still has to leave the house honestly.",
    "Muswell Hill Conservation Area was designated on 1 March 1974.",
    "The hill is a real constraint for a bath crate in a long-wheelbase van.",
    "Broadway flats over shops are a different extract and access problem from a house on the slope.",
    "Muswell Hill has no Underground station.",
    "Internal bathrooms without a window still need mechanical extract with a clear route to outside.",
  ],
  "crouch-end": [
    "Crouch End bathrooms sit on conversion stacks around the Broadway; the room below and the shared stair set the method.",
    "Crouch End Conservation Area was designated on 25 October 1974.",
    "A skip on the Broadway is not the working assumption.",
    "Purpose-built mansion-block bathrooms are the exception. Converted houses are the local type.",
    "Rear additions already built can be renovated as rooms that exist. Forming a new one is not this service.",
    "The clock tower marks the centre; residential side streets take the vans.",
  ],
  "kentish-town": [
    "Kentish Town bathrooms are stacked on half-landings in Victorian conversions; the waste run is the survey, not an afterthought.",
    "Lower-ground bathrooms often have moisture questions. We will not decorate over a damp wall as a finish.",
    "Kentish Town Road is a corridor. We use side streets.",
    "Conservation-area coverage is by street, including toward Dartmouth Park.",
    "The housing is denser and more mixed than Hampstead: terraces, former workshops and later infill.",
    "Kentish Town station is served by the Northern line and by Thameslink.",
  ],
  kilburn: [
    "Kilburn bathrooms sit in conversion flats on the Camden and Brent boundary; stacks, parking and the stair change by street.",
    "Shop-flat bathrooms are a narrow-stair and extract problem. We will not punch a grille through a shopfront as a convenience.",
    "East of the High Road the stock is more uniformly Victorian conversions toward West Hampstead.",
    "Two boroughs mean two skip regimes. The High Road is a poor default skip site.",
    "Kilburn Underground is on the Jubilee line.",
    "Conservation-area coverage is by selected streets, not the whole of Kilburn.",
  ],
  "hampstead-garden-suburb": [
    "Suburb bathrooms are internal renovations. Trust and Barnet rules sit on the elevation; a grille or a window change is not a casual extra.",
    "The conservation area was designated in 1967. An Article 4 direction has been in force since the 1970s.",
    "The Trust Scheme of Management is a separate map from the conservation-area boundary.",
    "Internal replacement of a bathroom often sits outside Trust consent; extract that breaks the envelope does not.",
    "Central Square groups the Institute, the Free Church and St Jude's — the bathroom is still an interior in a cottage or a villa.",
    "Closes and greens are not loading bays for sanitaryware.",
  ],
};

const paintingArea: Record<string, string[]> = {
  hampstead: [
    "Hampstead decorating is preparation on original fabric: lime plaster, village sashes, and occupied houses that cannot be emptied for a spray shop.",
    "Ordinary emulsion is not the default on lime. The coating follows the substrate.",
    "Camden's Hampstead Conservation Area and listed interiors around the village bite when coatings, windows or external joinery change.",
    "Colour is sampled on the wall in village light. A north-facing room off Heath Street and a Heath-edge drawing room do not read the same emulsion.",
    "Hampstead Underground is 58.5 metres down; decorating materials still arrive on lanes that were not drawn for a spray van.",
    "Sash windows are priced as joinery. Failed cords and putty are not a paint item.",
  ],
  "west-hampstead": [
    "West Hampstead decorating is occupied conversion flats; dust control on a shared stair is part of the method.",
    "Three stations on West End Lane make daytime loading competitive; materials are planned off the high street.",
    "Lining paper is specified where conversion plaster would telegraph through paint, not slipped in on the day.",
    "Party-wall rubbing down is programmed into hours, not left as an all-day default.",
    "Hall decoration is a separate scope from the demise unless the freeholder is the client.",
    "Some streets toward Fortune Green are in conservation areas; exterior colour is checked on the map.",
  ],
  "belsize-park": [
    "Belsize Park decorating is high-ceilinged principal rooms and original joinery; every prep shortcut shows in that light.",
    "Belsize Conservation Area is a separate Camden designation from Hampstead.",
    "High rooms scale prep and access. That is written into the programme, not discovered on a ladder.",
    "Village streets are tight; the avenues more often have porters and an agent.",
    "Lining is specified where later patches in inserted rooms would telegraph through a modern coating.",
    "External painting of previously painted stucco is a conservation question, not a weekend extra.",
  ],
  "st-johns-wood": [
    "St John's Wood decorating is mansion-flat receptions; common parts are a separate scope and the building's hours apply.",
    "Westminster designated the conservation area in 1968.",
    "Matching an existing mansion-flat colour is a sample on the wall, not a code from a faded tin.",
    "Lord's match days can restrict access on surrounding streets.",
    "Spray is rarely the default in a furnished compact apartment.",
    "Most of NW8's residential core is Westminster; Camden holds a smaller adjoining conservation area.",
  ],
  "maida-vale": [
    "Maida Vale decorating is long mansion corridors and original joinery in 1890s terracotta blocks.",
    "A furnished mansion flat is not a spray shop. Brush and roller remain the default around original doors.",
    "Westminster's Maida Vale Conservation Area covers a substantial part of W9.",
    "A long internal corridor does not read the same emulsion as a west-facing room toward Little Venice.",
    "Common parts need the agent. We will not paint a hallway we have not been given.",
    "Canal-side houses may have Canal & River Trust questions for external work.",
  ],
  "swiss-cottage": [
    "The office is at Unit 3 Palace Court, 250 Finchley Road. Period walls are still surveyed; we do not quote from the pavement.",
    "Inter-war blocks on Finchley Road and Avenue Road have different substrates from Victorian conversions a street back.",
    "Camden now calls the local designation the South Hampstead Conservation Area.",
    "Managing agents in the larger Avenue Road blocks run hours and common-parts rules even for internal decoration.",
    "Colour is sampled on the wall: Finchley Road west light and a north room toward Frognal do not read the same emulsion.",
    "Swiss Cottage Library (Grade II, Basil Spence, 1964) sits in the civic cluster; the decorate is still a room-by-room specification.",
  ],
  "primrose-hill": [
    "Primrose Hill decorating is original sashes, park-facing light, and lower-ground rooms that need moisture understood before they are painted.",
    "An Article 4 direction has applied since 3 March 1983. It controls exterior colour and windows, not interior emulsion.",
    "We will not paint a damp lower-ground wall as a finish.",
    "Weekend visitors around the park affect van access.",
    "Park-facing first floors and lower-ground rear rooms are not the same colour sample.",
    "Primrose Hill park is Metropolitan Open Land; elevations seen from it are sensitive.",
  ],
  highgate: [
    "Highgate decorating follows the house and the council: Village joinery, villa rooms, a slope, and more than one authority.",
    "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey.",
    "Listing is concentrated in the Village around Pond Square.",
    "External colour on a Village elevation is a consent question, not a weekend extra.",
    "Trees can constrain a scaffold even when the decorate is internal.",
    "The skip licence follows the borough on the address.",
  ],
  "golders-green": [
    "Golders Green decorating is family houses more often than stacked flats: more rooms, more joinery, occupancy sequenced.",
    "Barnet is the council. Trust rules apply only if the address is inside Hampstead Garden Suburb.",
    "Previously painted pebbledash is a masonry specification, not a wall emulsion. Bare pebbledash is a different specification.",
    "Off-street parking often eases decorating drops compared with a Camden conversion.",
    "Golders Green Underground is on the Northern line (Edgware branch).",
    "A north room on a crescent and a west room toward Golders Hill Park do not read the same emulsion.",
  ],
  "queens-park": [
    "Queen's Park decorating covers late-Victorian terraces and, on the Westminster side, the Estate cottages of 1875.",
    "Original Estate joinery is treated as joinery. Tiled dados are not painted as a default.",
    "Two conservation areas — Brent's Queen's Park and Westminster's Estate — are separate maps.",
    "The skip licence follows Brent or Westminster, confirmed from the address.",
    "Salusbury Road is a poor default loading point.",
    "Party-wall hours in terrace conversions belong in the decorating programme.",
  ],
  "muswell-hill": [
    "Muswell Hill decorating is high Edwardian rooms on a slope: cornice, picture rails and plaster that has moved.",
    "Muswell Hill Conservation Area was designated on 1 March 1974; Fortis Green Conservation Area the same day.",
    "High rooms change access as well as prep. That is written into the programme.",
    "Broadway flats are tighter; spray is rarely the default in a furnished space.",
    "The hill decides the van. Muswell Hill has no Underground station.",
    "Skip licences are issued by Haringey.",
  ],
  "crouch-end": [
    "Crouch End decorating is converted-house plaster, original mouldings and tiled halls, sequenced around occupied family rooms.",
    "Crouch End Conservation Area was designated on 25 October 1974.",
    "Original tiled dados are not painted as a default.",
    "A skip on the Broadway is not the working assumption.",
    "Purpose-built blocks are the exception. Converted houses are the local type.",
    "The clock tower marks the centre; residential side streets take the vans.",
  ],
  "kentish-town": [
    "Kentish Town decorating is mixed old and new plaster in dense terraces; the specification follows the wall in each room.",
    "Lower-ground rooms looking tired are often moisture. We will not paint a damp wall as a finish.",
    "Noisy prep in a terrace is programmed into hours.",
    "Kentish Town Road is a poor skip location.",
    "Conservation-area coverage is by street, including toward Dartmouth Park.",
    "The Forum is a Grade II listed former cinema on Highgate Road; the decorate still follows the substrate in the room.",
  ],
  kilburn: [
    "Kilburn decorating sits either side of the High Road boundary. Camden or Brent is confirmed before a skip is licensed.",
    "Shop-flat interiors are a dust-into-the-shop method question. The stair is not a chute.",
    "East toward West Hampstead the stock is more uniformly Victorian conversions.",
    "The wall still decides the paint system; the borough changes the licence.",
    "Kilburn Underground is on the Jubilee line; High Road station is on Overground.",
    "Conservation-area coverage is by street, not the whole of Kilburn.",
  ],
  "hampstead-garden-suburb": [
    "Suburb decorating is Arts and Crafts interiors under Trust and Barnet rules. Exterior colour is not a chart decision.",
    "The conservation area was designated in 1967. An Article 4 direction has been in force since the 1970s.",
    "Internal emulsion that does not change the elevation is ordinary work. A new outside colour is not.",
    "The Trust Scheme of Management is a separate map from the conservation-area boundary.",
    "Cottage-scale doors and sashes are programmed as joinery, not as a cut-in.",
    "Closes and greens are not loading bays. Central Square groups the Institute, the Free Church and St Jude's.",
  ],
};

const refurbArea: Record<string, string[]> = {
  hampstead: [
    "Hampstead light refurbishment is a conversion or village-house interior: kitchen, bathroom, floors and decoration, without opening the carcass.",
    "Camden's Hampstead Conservation Area and listed village fabric are checked where extract, windows or the elevation are involved.",
    "A whole-flat strip generates more waste than a single kitchen; village lanes need a programmed drop, not a hopeful skip on Heath Street.",
    "Original boards are sanded only where they will take it. Failed subfloors are listed at survey.",
    "Changing the plan of a listed house is not light refurbishment.",
    "Hampstead Heath is City of London open space; it does not licence the skip — Camden does.",
  ],
  "west-hampstead": [
    "A West Hampstead light refurbishment is typically a conversion flat: rear-return kitchen, half-landing bathroom, decoration and floors, through a shared hallway.",
    "Three stations on West End Lane make a skip on the high street the wrong working assumption.",
    "Common-parts protection is part of the method, not a courtesy.",
    "Party-wall hours belong in the programme.",
    "A whole-flat programme is usually cleaner empty; a single wet room can often be done around you.",
    "Some streets toward Fortune Green sit in conservation areas — the map is checked for the address.",
  ],
  "belsize-park": [
    "Belsize light refurbishment is high-ceilinged conversions and avenue mansion flats brought to one interior standard, rooms left where they stand.",
    "Belsize Conservation Area is a separate Camden designation from Hampstead.",
    "Inserted kitchens and ensuites stay in the rooms that exist. Moving walls is not this service.",
    "High ceilings change prep and access. That is written into the programme.",
    "Conversion common parts sit in the brief only if the freeholder is the client.",
    "Article 4 directions apply to parts of the neighbourhood.",
  ],
  "st-johns-wood": [
    "St John's Wood light refurbishment is usually a mansion-flat interior written through a licence to alter, with materials up a lift that will not take a kitchen run.",
    "Westminster designated the conservation area in 1968.",
    "The licence sits in the lead-in. We do not strip kitchen and bathroom while the agent's pack is outstanding.",
    "Lord's match days can restrict access on surrounding streets.",
    "Villas take the same definition at a larger scale. The carcass is still left.",
    "Most of the residential core is Westminster.",
  ],
  "maida-vale": [
    "A Maida Vale light refurbishment keeps the 1890s plan of the mansion flat and replaces what sits in it: compact kitchen, tanked bathroom, long corridor, floors.",
    "Westminster's Maida Vale Conservation Area covers a substantial part of W9.",
    "Original boards in this stock often have previous bitumen; sanding is listed at survey, not promised from a photograph.",
    "Little Venice houses and mews are a different construction from the blocks.",
    "Canal & River Trust questions can arise if anything touches the elevation or the water.",
    "The kitchen usually stays a compact rear room unless drainage will serve a new position without cutting another demise.",
  ],
  "swiss-cottage": [
    "The office is at Unit 3 Palace Court, 250 Finchley Road. A block on Avenue Road and a conversion toward Frognal are still two different programmes.",
    "Camden now calls the local designation the South Hampstead Conservation Area.",
    "Finchley Road loading for a whole-flat strip is a corridor process.",
    "Swiss Cottage Library is Grade II (Basil Spence, 1964); the refurbishment is still the demise as leased.",
    "Licence to alter is ordinary in the larger Avenue Road blocks.",
    "Being next to the office shortens the visit, not the survey of lift, stair and extract.",
  ],
  "primrose-hill": [
    "Primrose Hill light refurbishment is a house or split brought to one interior standard, with lower-ground moisture solved before decoration.",
    "An Article 4 direction has applied since 3 March 1983.",
    "One demise, one programme. We do not refurbish a neighbour's floor as a courtesy.",
    "Park-facing elevations are left alone unless consent exists.",
    "Weekend visitors around the park affect access.",
    "A new rear addition is not this service.",
  ],
  highgate: [
    "Highgate light refurbishment starts with the council name, then the house: Village, villa or conversion, interiors coordinated, carcass left.",
    "Highgate Conservation Area was designated on 21 December 1967 and is split between Camden and Haringey.",
    "A slope villa can take a whole-interior programme without a structural opening. A new storey cannot.",
    "The skip licence follows the borough on the address.",
    "Holly Lodge Estate is a separate designation.",
    "Trees can constrain access even when the work is internal.",
  ],
  "golders-green": [
    "Golders Green light refurbishment is more often a family house than a stacked flat, sequenced around occupancy, under Barnet rather than the Suburb Trust.",
    "Trust rules apply only if the address is inside the Suburb boundary.",
    "Pebbledash houses take the same interior definition — kitchen, bathrooms, decoration, floors — with larger rooms and more occupancy sequencing.",
    "Off-street parking eases material drops compared with a Camden conversion.",
    "Golders Green Underground is on the Northern line (Edgware branch).",
    "Skip licences are issued by Barnet.",
  ],
  "queens-park": [
    "Queen's Park light refurbishment is terrace conversions and Estate cottages under two councils: joinery treated as joinery.",
    "The Estate cottages date from 1875. Brent's and Westminster's conservation areas are separate maps.",
    "The skip licence follows the frontage, not the neighbourhood name.",
    "Salusbury Road is a poor default loading point for a whole-flat strip.",
    "Cottage-scale rooms and terrace rear-returns are different grains of the same service.",
    "We do not form a new rear addition as this service.",
  ],
  "muswell-hill": [
    "Muswell Hill light refurbishment is Edwardian houses on a slope, and the occasional Broadway flat, as one sequence.",
    "Muswell Hill Conservation Area was designated on 1 March 1974.",
    "The hill is a real handling problem for a multi-room delivery.",
    "A family house can often stay occupied if a kitchen and a bedroom can be kept; a Broadway flat is usually cleaner empty.",
    "Muswell Hill has no Underground station.",
    "We do not form a new rear addition or a loft as this service.",
  ],
  "crouch-end": [
    "Crouch End light refurbishment is converted houses: kitchen, bathroom, decoration and floors, original halls left where they are sound.",
    "Crouch End Conservation Area was designated on 25 October 1974.",
    "A skip on the Broadway is not the working assumption.",
    "Rear additions already there can be renovated. Building a new one is not this service.",
    "Purpose-built mansion blocks are the exception.",
    "Original halls and tiled floors outside the envelope are protected.",
  ],
  "kentish-town": [
    "Kentish Town light refurbishment is dense conversion stock: rear-return kitchen, bathroom, decoration and floors, with lower-ground moisture treated as a survey item.",
    "Kentish Town Road is a poor skip location.",
    "A landlord conversion refresh is often this service if the plan stays as it is — we do not invent a package price.",
    "Conservation-area coverage is by street, including toward Dartmouth Park.",
    "Kentish Town station is served by the Northern line and by Thameslink.",
    "We will not hang a kitchen on a wet lower-ground wall.",
  ],
  kilburn: [
    "Kilburn light refurbishment follows the High Road boundary: Camden conversions on one side, a wider mix on the other, once the council is confirmed.",
    "A shop-flat is a narrow stair, extract as a constraint, and a method statement where the route is through a shop.",
    "A conversion toward West Hampstead is party-wall hours and a protected hallway.",
    "The High Road is a major route and a poor default skip site.",
    "Kilburn Underground is on the Jubilee line.",
    "Conservation-area coverage is by street, not the whole of Kilburn.",
  ],
  "hampstead-garden-suburb": [
    "Suburb light refurbishment is internal work inside an Arts and Crafts envelope the Trust and Barnet both watch.",
    "The conservation area was designated in 1967. An Article 4 direction has been in force since the 1970s.",
    "The Trust Scheme of Management is a separate map from the conservation-area boundary.",
    "Internal kitchens, bathrooms, decoration and floors often sit outside Trust consent. Extract that breaks the envelope does not.",
    "The layout was planned by Unwin, with Lutyens responsible for Central Square.",
    "Closes and greens are not loading bays.",
  ],
};

const byService: Record<ServiceSlug, Record<string, string[]>> = {
  "kitchen-renovation": kitchenArea,
  "bathroom-renovation": bathroomArea,
  "painting-decorating": paintingArea,
  "light-refurbishment": refurbArea,
};

function uniqueFacts(facts: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const fact of facts) {
    const trimmed = fact.trim();
    if (!trimmed || seen.has(trimmed)) continue;
    seen.add(trimmed);
    out.push(trimmed);
  }
  return out;
}

export function getServiceHubFacts(slug: ServiceSlug): string[] {
  return serviceHubFacts[slug] ?? [];
}

export function getServiceAreaFacts(service: ServiceSlug, areaSlug: string): string[] {
  const overlay = byService[service]?.[areaSlug] ?? [];
  const civic = areaFacts[areaSlug] ?? [];
  return uniqueFacts([...overlay, ...civic]).slice(0, 10);
}

for (const slug of SERVICE_SLUGS) {
  if (serviceHubFacts[slug].length !== 10) {
    throw new Error(`serviceHubFacts.${slug} has ${serviceHubFacts[slug].length}; 10 required`);
  }
  for (const areaSlug of TIER_1) {
    const overlay = byService[slug][areaSlug]?.length ?? 0;
    if (overlay !== 6) {
      throw new Error(`${slug}/${areaSlug} has ${overlay} overlay facts; 6 required`);
    }
    if (getServiceAreaFacts(slug, areaSlug).length !== 10) {
      throw new Error(`${slug}/${areaSlug} merged facts are not 10`);
    }
  }
}
