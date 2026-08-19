import type { ServiceSlug } from "./types";

export type ServiceHubContent = {
  intro: string[];
  forWhom: string[];
  specification: string[];
  areasIntro: string;
};

export const serviceHubContent: Record<ServiceSlug, ServiceHubContent> = {
  "kitchen-renovation": {
    intro: [
      "A kitchen renovation in North West London is usually a problem of the building, not of the catalogue. Period conversions, mansion-block apartments and family houses in Hampstead, Belsize Park, St John's Wood and Maida Vale were not drawn around a modern run of units. Chimney breasts, shared extracts, stacked drainage and walls that are out of square decide the layout before a worktop is chosen.",
      "Hampstead Property Services Group plans and fits kitchens in that stock. The work is a coordinated fit-out: measured survey, layout, first and second fix, cabinetry, worktops, appliances and a clean handover. We do not treat the kitchen as a product drop-in. The room stays as the building planned it; we do not form new openings to make a kitchen-diner.",
      "The typical instruction is a replacement within the existing room, sometimes with a modest change of layout that the services will actually support. In a mansion flat the kitchen is often a compact rear room on original risers. In a Victorian conversion it may be a rear return with a single window and a neighbour the other side of the party wall. Both can be excellent kitchens if the extract, the lighting and the working triangle are solved honestly.",
      "We visit before we write a proposal. Photographs flatten levels, conceal failed floors and miss the managing agent's rules for the common parts. A survey in the room is the difference between a programme that holds and a strip-out that stops on day two.",
    ],
    forWhom: [
      "The work is for owner-occupiers and landlords in North West London housing: converted flats in Hampstead, West Hampstead and Kentish Town; mansion blocks in St John's Wood, Maida Vale and Swiss Cottage; family houses in Highgate, Muswell Hill and Hampstead Garden Suburb. The common thread is original fabric and limited service routes, not a new-build envelope.",
      "Leasehold flats usually need a licence to alter before cabinets come out. Freeholders and managing agents want drawings, a method statement and evidence of insurance. We can assemble that pack. Consent itself is granted by the building, not by us, and lead-in varies by agent [VERIFY typical timescales with the specific building].",
      "Where the kitchen shares an extract or a soil stack with flats above and below, the layout has to respect those routes. We will not promise an island, a range cooker or a relocated sink if the building cannot take them without work we do not do.",
    ],
    specification: [
      "Cabinetry is scribed to walls that have moved. Worktops are specified in generic material categories — quartz or solid timber are typical — rather than as a branded partnership. Appliances are client-supplied or specified without exclusive manufacturer claims. Splashbacks, flooring within the kitchen envelope and decoration are part of the same sequence so the room is handed over as one.",
      "Extract is designed for the elevation you actually have. Conservation-area and listed buildings cannot always take a visible grille on the principal front; we will say so at survey [VERIFY on listed fabric]. Gas work is by a Gas Safe registered engineer. Electrical circuits added or altered are notified where the regulations require it.",
      "We do not specify structural steels, box-outs that conceal an opening we have formed, or kitchen-diner conversions that remove a wall. Those are a different class of project.",
    ],
    areasIntro:
      "Kitchen combination pages for each Tier 1 neighbourhood sit below. Tier 2 areas are served from the area hubs and from this North West London page.",
  },
  "bathroom-renovation": {
    intro: [
      "Bathrooms in North West London fail from water, not from taste. Converted houses have timber floors, uneven joists and stacks that are a long way from the room you want as an ensuite. Mansion blocks have shared drainage, compact footprints and neighbours below the waste. A renovation that does not treat waterproofing, falls and extract as the first decisions will leak, stain or stay damp.",
      "We renovate family bathrooms, shower rooms and ensuites with tanking, ventilation and pipework planned for the building they sit in. The finish — tiling, sanitaryware, brassware — is the last part of the sequence, not the brief.",
      "Internal bathrooms in conversions are common: no window, a long duct run, and a door that opens the wrong way for a shower. Compact ensuites in mansion flats have the opposite problem — a window onto a lightwell, but no space for a bath and a basin without losing the door swing. Both are ordinary work for us, provided the drainage can reach a stack without cutting through another demise.",
      "As with kitchens, we survey in the room. Concealed wastes, previous leaks and failed plywood under a tray only show when you look. A written layout and specification follow the visit; strip-out does not start until long-lead sanitaryware is dated.",
    ],
    forWhom: [
      "The work is in the same North West London stock as our kitchens: period conversions, mansion blocks and family houses. Typical instructions are a single family bathroom, a shower room replacing a failed suite, or an ensuite formed in a former dressing room or box room where the building will accept it.",
      "Waterproofing on timber intermediate floors is not optional. We tank wet areas to a documented system. Paint-on afterthoughts over boarded floors are how the flat below gets involved.",
      "Freeholder consent applies to bathrooms as it does to kitchens where the lease requires a licence to alter — especially if wastes move or an extract is cut through a common void [VERIFY the lease and the building's process]. We will identify that at proposal stage.",
    ],
    specification: [
      "Sanitaryware and brassware are specified as products, not as partnerships. Concealed cisterns, thermostatic showers and tiled wet rooms are ordinary items; they still need a substrate that can take them. Underfloor heating, where used, is treated as an electrical and floor-build-up problem, not as a brochure extra.",
      "Mechanical extract is designed for internal rooms. We will not leave a bathroom dependent on a window that does not exist, and we will not punch an insensitive grille through a conservation elevation if another route exists [VERIFY duct route on survey].",
      "Drainage alterations stay within the existing stacks wherever the building allows. Pumps are a last resort and are written into the proposal if they are the only way the layout works. We do not form new external soil pipes on principal elevations as a convenience.",
    ],
    areasIntro:
      "Bathroom combination pages for each Tier 1 neighbourhood sit below. Tier 2 coverage is via the area hubs and this North West London page.",
  },
  "painting-decorating": {
    intro: [
      "Decorating in North West London is mostly preparation. Lime and gypsum backgrounds, original joinery, previous coatings of unknown type, and hairline movement in converted houses will telegraph through any finish that is applied too soon. The work is washing down, filling, lining where it is needed, and a coating system that suits the substrate — not a quick refresh with a fashionable colour.",
      "Hampstead Property Services Group paints and decorates occupied houses and flats as well as empty ones. Dust control, room sequencing and a written prep specification matter more here than in a vacant new-build. A family still living in a West Hampstead terrace, or a mansion-flat owner who cannot decant, is a normal brief.",
      "Heritage interiors — picture rails, shutters, sash windows, original doors — are joinery as much as they are painting. They are programmed and priced as such. Spray is used where it is the cleaner method for an empty room; brush and roller remain the default around furnished, original fabric.",
      "We do not sell a house style. Colour is sampled on the wall, in the light the room actually has. North-facing Hampstead rooms and west-facing Maida Vale mansion flats do not read the same emulsion in the same way.",
    ],
    forWhom: [
      "The work is for people who want the plaster and the joinery treated properly: whole-house decoration, a floor of a conversion, common-parts making-good after other trades, or exterior painting of previously painted windows and joinery where access and weather allow.",
      "Occupied-home working is planned room by room so a kitchen, a bathroom and a bedroom remain usable. In mansion blocks we also follow the building's hours. We will not run spray equipment in a furnished flat as a default method.",
      "Failed plaster, rising damp and timber decay are not decorating items. We isolate the cause and, where it sits inside a light refurbishment, include the repair rather than paint over it.",
    ],
    specification: [
      "Prep standard, product type, number of coats and sheen are written down. That is what we snag against, in daylight and with the lights on. Heritage colours are taken from established generic ranges; we do not claim an exclusive palette or manufacturer relationship.",
      "Sash windows in conservation areas often need more than a coat of paint. If cords, staff beads or putty have failed, we say so before we start [VERIFY listed-window constraints on the specific property]. Exterior work is programmed around weather, not around a calendar promise.",
      "Making-good after kitchens, bathrooms and flooring is part of a light-refurbishment programme. Decorating is then the last trade, not the first.",
    ],
    areasIntro:
      "Where this site has a painting combination page for a neighbourhood, it is listed below. Where a group painting microsite already exists for an area, the area hub will link out to that specialist company instead. [TBC: painting microsite list].",
  },
  "light-refurbishment": {
    intro: [
      "Light refurbishment is the coordinated refresh of a flat or house: decoration, flooring, joinery, kitchen and bathroom replacements, and the plumbing and electrical work those rooms need. It is one programme and one account. It is not structural alteration, not an extension, and not a loft conversion.",
      "In North West London that usually means a mansion-block apartment or a converted house where the plan stays as it is and the rooms are brought up to a single standard. The kitchen and bathroom are replaced, floors are refinished or renewed, joinery is repaired, and the whole is decorated. Occupied or empty, the sequence is the same: wet and dusty trades first, finishes last.",
      "Hampstead Property Services Group takes that instruction from a Hampstead office, with the four trades on this site held in one programme. If you need walls moved, a loft converted or an extension, that is a different company in the same family: Hampstead Renovations. We will say so at the first visit rather than stretch the word refurbishment to cover work we do not deliver.",
      "The value of a light-refurbishment instruction is coordination. A kitchen that is decorated before the plumber has finished, or a floor laid before the bathroom is watertight, is how programmes slip and finishes get damaged. We write the order down.",
    ],
    forWhom: [
      "The work is for owners who want a flat or house brought to a consistent standard without changing its structure: buy-to-let refresh, a home after years of piecemeal work, or a mansion-block apartment where the lease and the building rules allow internal replacement but not alteration of the carcass.",
      "Moving out is often faster and cleaner for a whole-flat programme. A single kitchen or bathroom can usually be done around you. We will give an honest view after survey. Working hours are [TBC: confirm standard hours], and mansion blocks add their own rules.",
      "Unknowns in this housing stock — hidden damp, failed subfloors, redundant wiring — are listed as provisional items, not buried in a lump sum. When we open a wall and find something, we stop and write a variation before continuing.",
    ],
    specification: [
      "Decoration, flooring and joinery are specified as systems: prep standard, product type, board finish, ironmongery. Kitchens and bathrooms follow the specifications on those service pages. Rewiring or replumbing is of the rooms in scope, coordinated with the existing installation, not a speculative whole-house strip unless that is the written brief.",
      "Building-control and freeholder notices for the non-structural work that needs them are started in the lead-in. We do not strip rooms and then discover a licence was required.",
      "Explicitly excluded: structural openings, loft conversions, extensions, basement works, and design-and-build of a new envelope. For those, a single introduction to Hampstead Renovations.",
    ],
    areasIntro:
      "Light-refurbishment combination pages for each Tier 1 neighbourhood sit below. Tier 2 areas are covered from the area hubs and from this page.",
  },
};
