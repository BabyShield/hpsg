import {
  bathroomRoomPhotos,
  kitchenRoomPhotos,
  paintingRoomPhotos,
  refurbRoomPhotos,
  servicePhotos,
  type Photo,
} from "./photos";
import type { ServiceSlug } from "./types";

export type HubSection = {
  title: string;
  text: string;
  links: { href: string; label: string }[];
};

export type HubNote = {
  title: string;
  text: string;
  photo?: Photo;
  href?: string;
  linkLabel?: string;
};

export type ServiceHubContent = {
  intro: string[];
  forWhom: string[];
  housing: HubSection[];
  permissions: string[];
  specification: string[];
  areasIntro: string;
  failures?: HubNote[];
  failuresHeading?: string;
  failuresLede?: string;
  typicalRooms?: HubNote[];
  roomsHeading?: string;
  roomsLede?: string;
};

export const serviceHubContent: Record<ServiceSlug, ServiceHubContent> = {
  "kitchen-renovation": {
    intro: [
      "Kitchen renovation in North West London is a problem of the building, not of the catalogue. Period conversions in Hampstead, West Hampstead and Belsize Park, mansion flats in St John's Wood, Maida Vale and Swiss Cottage, and family houses in Highgate and the Suburb were not drawn around a modern run of units. Chimney breasts, shared extracts, stacked drainage and walls that are out of square decide the layout before a worktop is chosen.",
      "Hampstead Property Services Group plans and fits kitchens from a Finchley Road office. The work is a coordinated fit-out: measured survey, layout, first and second fix, cabinetry scribed to the room, worktops, appliances and a clean handover. We do not drop in a catalogue kitchen. The room stays as the building planned it. We do not form new openings to make a kitchen-diner — that is a different class of project.",
      "The typical instruction is a replacement within the existing envelope, sometimes with a modest change of layout that the services will actually support. In a mansion flat the kitchen is often a compact rear room on original risers. In a Victorian conversion it is often a rear-return galley: one window, a party wall, a door that swings into the run. In a family house the room may wrap a chimney breast. All three can be excellent kitchens if extract, lighting and the working triangle are solved honestly.",
      "Islands, range cookers and relocated sinks are specified only where the drainage, the extract and the floor will take them. A St John's Wood lift will often not take a run of carcasses; the stair is the working assumption until we measure. We will not promise a suburban layout in a room that cannot accept it.",
      "We visit before we write a proposal. Photographs flatten levels, conceal failed floors and miss the managing agent's rules for the common parts. A survey in the room is the difference between a programme that holds and a strip-out that stops on day two. We do not quote kitchen renovation in Hampstead or anywhere else from photographs.",
    ],
    forWhom: [
      "The work is for owner-occupiers and landlords in North West London housing: converted flats in Hampstead, West Hampstead, Belsize Park and Kentish Town; mansion blocks in St John's Wood, Maida Vale and Swiss Cottage; family houses in Highgate, Primrose Hill, Muswell Hill, Golders Green and Hampstead Garden Suburb. The common thread is original fabric and limited service routes, not a new-build envelope.",
      "Leasehold flats usually need a licence to alter before cabinets come out. Freeholders and managing agents want drawings, a method statement and evidence of insurance. We can assemble that pack. Consent itself is granted by the building, not by us, and lead-in varies by agent [VERIFY typical timescales with the specific building].",
      "Where the kitchen shares an extract or a soil stack with flats above and below, the layout has to respect those routes. Occupied homes are ordinary: we will say at survey whether a second sink, a temporary set-up or a short decant is the cleaner route. We will not promise an island, a range cooker or a relocated sink if the building cannot take them without work we do not do.",
    ],
    failuresHeading: "What has to be right before the cabinets",
    failuresLede:
      "Kitchen renovation in this housing stock fails from the envelope, the extract and the stacks — not from the choice of worktop.",
    failures: [
      {
        title: "The envelope",
        text:
          "The kitchen stays in the room that exists. We do not form structural openings or kitchen-diners that remove a wall. If the brief is to change the carcass of the house, that sits with Hampstead Renovations, not on this site.",
      },
      {
        title: "Extract",
        text:
          "Conservation-area and listed elevations in Hampstead, Highgate and the Suburb cannot always take a visible grille on the principal front. The route is planned at survey. We will not punch a hole as a convenience.",
      },
      {
        title: "Services",
        text:
          "Layout follows the stacks and risers that exist. Relocating a sink is only possible if the drainage will serve the new position without cutting into another demise. Gas work is by a Gas Safe registered engineer.",
      },
      {
        title: "Access",
        text:
          "Lifts in mansion blocks often will not take a run of carcasses. Village lanes were not drawn for a kitchen delivery. We measure the stair, the lift and the drop point before units are ordered.",
      },
    ],
    roomsHeading: "Typical kitchens we renovate",
    roomsLede:
      "Rear-return galleys, compact mansion-flat rooms, chimney-breast L-shapes and family kitchens — each written to the building it sits in.",
    typicalRooms: [
      {
        title: "Family kitchens",
        text:
          "Larger rooms in village houses and family houses toward the Heath, Highgate, Muswell Hill and the Suburb. More generous than a Camden galley, but walls are still out of square and extract still has to respect the elevation. Islands only where the footprint and the services will take them.",
        photo: servicePhotos["kitchen-renovation"],
      },
      {
        title: "Rear-return galleys",
        text:
          "The West Hampstead and conversion type: one window, a party wall, a door that swings into the run. Layout follows the window, the stack and the door, not a catalogue island. Units are scribed to walls that have moved.",
        photo: kitchenRoomPhotos.galley,
      },
      {
        title: "Compact mansion-flat kitchens",
        text:
          "Original rear rooms on risers in St John's Wood, Maida Vale and Swiss Cottage. A short L or a galley, not an island. Licence-to-alter packs are ordinary. Carcasses often go up the stair until we measure the lift.",
        photo: kitchenRoomPhotos.compact,
      },
      {
        title: "Chimney-breast kitchens",
        text:
          "Inserted or original rooms in Hampstead, Belsize Park and Frognal conversions where the breast is in the wrong place for a showroom run. We scribe cabinetry to it rather than pretending the wall is square.",
        photo: kitchenRoomPhotos.chimney,
      },
      {
        title: "Inserted kitchens in conversions",
        text:
          "Former bedrooms or service rooms, often with a high ceiling that then shows every joint. Extract and drainage come first. Highgate and Belsize Village streets add access constraints; the avenues more often have a managing agent.",
        photo: kitchenRoomPhotos.galley,
      },
      {
        title: "Suburb and Trust interiors",
        text:
          "Hampstead Garden Suburb kitchens are internal fit-outs. The Trust and Barnet sit on the outside of the house. An extract grille or a window change is not a casual extra. Permitted development is not the working assumption.",
        photo: kitchenRoomPhotos.suburb,
      },
    ],
    housing: [
      {
        title: "Kitchen renovation in period conversions",
        text:
          "Converted Victorian and Edwardian houses are the bulk of the kitchen work in Hampstead, West Hampstead, Belsize Park, Kentish Town, Kilburn and Crouch End. Rear returns, chimney breasts and party walls decide the run. Layouts are galley or L-shape unless the existing envelope already allows more. We scribe cabinetry to walls that have moved rather than pretending the room is square.",
        links: [
          { href: "/kitchen-renovation/hampstead/", label: "Kitchen renovation in Hampstead" },
          { href: "/kitchen-renovation/west-hampstead/", label: "Kitchen renovation in West Hampstead" },
          { href: "/kitchen-renovation/belsize-park/", label: "Kitchen renovation in Belsize Park" },
          { href: "/kitchen-renovation/kentish-town/", label: "Kitchen renovation in Kentish Town" },
          { href: "/kitchen-renovation/kilburn/", label: "Kitchen renovation in Kilburn" },
          { href: "/kitchen-renovation/crouch-end/", label: "Kitchen renovation in Crouch End" },
        ],
      },
      {
        title: "Kitchen renovation in mansion blocks",
        text:
          "St John's Wood, Maida Vale and Swiss Cottage kitchens are typically compact rear rooms on original risers. Lifts often will not take a run of carcasses; the stair is the working assumption until we measure. Licence-to-alter packs are ordinary. We write the kitchen to the stacks that exist, not to a hope that the sink can move.",
        links: [
          { href: "/kitchen-renovation/st-johns-wood/", label: "Kitchen renovation in St John's Wood" },
          { href: "/kitchen-renovation/maida-vale/", label: "Kitchen renovation in Maida Vale" },
          { href: "/kitchen-renovation/swiss-cottage/", label: "Kitchen renovation in Swiss Cottage" },
          { href: "/kitchen-renovation/queens-park/", label: "Kitchen renovation in Queen's Park" },
        ],
      },
      {
        title: "Kitchen renovation in family houses",
        text:
          "Highgate, Muswell Hill, Golders Green and Hampstead Garden Suburb supply larger family rooms. Plots and rear windows are more generous than a Camden galley, but walls are still out of square and extract still has to respect the elevation. In the Suburb, Trust and Barnet rules sit on the outside of the house; the kitchen is an internal fit-out unless the envelope is involved.",
        links: [
          { href: "/kitchen-renovation/highgate/", label: "Kitchen renovation in Highgate" },
          { href: "/kitchen-renovation/primrose-hill/", label: "Kitchen renovation in Primrose Hill" },
          { href: "/kitchen-renovation/muswell-hill/", label: "Kitchen renovation in Muswell Hill" },
          { href: "/kitchen-renovation/golders-green/", label: "Kitchen renovation in Golders Green" },
          { href: "/kitchen-renovation/hampstead-garden-suburb/", label: "Kitchen renovation in Hampstead Garden Suburb" },
        ],
      },
    ],
    permissions: [
      "Leasehold flats usually need a licence to alter before cabinets come out. We can prepare drawings and a method statement. Consent is granted by the freeholder or managing agent, not by us. Lead-in varies by building [VERIFY the building's process].",
      "Conservation-area and listed buildings in Hampstead, Highgate, Primrose Hill and the Suburb cannot always take a visible extract grille on the principal front. We plan the route at survey and will not punch a hole as a convenience. [VERIFY on listed fabric.]",
      "Gas work is by a Gas Safe registered engineer. Electrical circuits added or altered are notified where the regulations require it. Building-control is identified at proposal stage, not after strip-out.",
      "We do not form structural openings or kitchen-diners that remove a wall. If the brief is to change the carcass of the house, that sits with Hampstead Renovations.",
    ],
    specification: [
      "Cabinetry is scribed to walls that have moved and to original chimney breasts. Worktops are specified in generic material categories — quartz or solid timber are typical — rather than as a branded partnership. Appliances are client-supplied or specified without exclusive manufacturer claims.",
      "Splashbacks, flooring within the kitchen envelope and decoration are part of the same sequence so the room is handed over as one. Extract is designed for the elevation you actually have. Conservation-area and listed buildings cannot always take a visible grille on the principal front; we will say so at survey [VERIFY on listed fabric].",
      "Units are ordered only once lift, stair and room dimensions are confirmed on site. We do not specify structural steels, box-outs that conceal an opening we have formed, or kitchen-diner conversions that remove a wall. Those are a different class of project.",
    ],
    areasIntro:
      "Local kitchen renovation pages for Hampstead, West Hampstead, Belsize Park, St John's Wood, Maida Vale, Swiss Cottage, Highgate and the wider North West London list sit below. Each page is written for that housing stock, council and conservation designation — not a renamed copy of this one.",
  },
  "bathroom-renovation": {
    intro: [
      "Bathroom renovation in North West London is a water problem before it is a finishes problem. Converted Victorian and Edwardian houses have timber intermediate floors, uneven joists and soil stacks that sit a long way from the room you want as an ensuite. Purpose-built mansion flats in St John's Wood, Maida Vale and Swiss Cottage have shared drainage, compact footprints and a neighbour below the waste. A renovation that treats tanking, falls and extract as afterthoughts will leak, stain or stay damp — whatever the tiles cost.",
      "Hampstead Property Services Group renovates family bathrooms, shower rooms and ensuites from a Finchley Road office. The work is a coordinated fit-out: measured survey, layout, waterproofing to a documented system, first and second fix, tiling, sanitaryware, mechanical extract and a watertightness check before handover. We do not drop in a catalogue suite. The room stays as the building planned it unless the stack and the extract will honestly support a change.",
      "Internal bathrooms in Hampstead, West Hampstead, Belsize Park and Kentish Town conversions are ordinary: no window, a long duct run, a door that opens the wrong way for a shower. Compact ensuites in mansion flats have the opposite problem — a sash onto a lightwell, but no space for a bath and a basin without losing the door swing. Half-landing bathrooms in terraces are a third type: the stack is on the party wall and the room is whatever is left. All three can be excellent bathrooms if waterproofing, ventilation and drainage are solved in that order.",
      "Wet rooms are specified only where the floor depth and the waterproofing system will take them. A Victorian conversion rarely has the build-up of a new-build slab. We will not draw a level-access wet room onto joists that cannot accept the fall. A pump is a last resort, written into the proposal if it is the only way the layout works, not hidden as a day-two extra.",
      "We survey in the room. Concealed wastes, previous leaks, failed plywood under a tray and extract that dies in a void only show when you look. A written layout and specification follow the visit. Strip-out does not start until long-lead sanitaryware and tiles are dated. We do not quote bathroom renovation in Hampstead or anywhere else from photographs.",
    ],
    forWhom: [
      "The work is for owner-occupiers and landlords in the same North West London stock as our kitchens: converted flats, mansion blocks and family houses. Typical instructions are a single family bathroom, a shower room replacing a failed suite, an ensuite in a former dressing room or box room where the building will accept it, or two bathrooms in one programme so the house is not opened twice.",
      "Waterproofing on timber intermediate floors is not optional. We tank wet areas to a documented system. Paint-on afterthoughts over boarded floors are how the flat below gets involved. In a mansion block we isolate, test, and do not cut into another demise without the building's process.",
      "Leasehold flats usually need a licence to alter if wastes move or an extract is cut through a common void. We can prepare drawings and a method statement. Consent is granted by the freeholder or managing agent, not by us [VERIFY the lease and the building's process]. Occupied homes are ordinary: we will say at survey whether a second bathroom or a short decant is the cleaner route.",
    ],
    failuresHeading: "What has to be right before the tiles",
    failuresLede:
      "Bathroom renovation in this housing stock fails from water, air and the stack — not from the choice of brassware.",
    failures: [
      {
        title: "Waterproofing",
        text:
          "Timber floors in conversions and stacked mansion flats need tanking as a system, with falls that actually drain. A coat of tanking paint over boarded floor is not a system. This is the decision that protects the room below.",
      },
      {
        title: "Extract",
        text:
          "Internal bathrooms cannot rely on a window that does not exist. Duct routes through common parts, roof voids or a conservation elevation are agreed before we open up. We will not punch an insensitive grille through a principal front as a convenience.",
      },
      {
        title: "Drainage",
        text:
          "Layout follows the stack that exists. Moving a WC a long way, or forming an ensuite that cannot reach a soil pipe without cutting another demise, is often the item that is not possible. Pumps are last resort, written down if needed.",
      },
      {
        title: "The room as found",
        text:
          "Door swings, chimney breasts, half-landings and out-of-square walls decide whether a bath, a shower or both will fit. We survey before we specify sanitaryware. Concealed leaks and failed trays only show in the room.",
      },
    ],
    roomsHeading: "Typical bathrooms we renovate",
    roomsLede:
      "Family bathrooms, compact mansion-flat rooms, shower rooms, ensuites and half-landing stacks — each written to the building it sits in.",
    typicalRooms: [
      {
        title: "Family bathrooms",
        text:
          "A bath, a separate shower where the plan allows, a basin and a WC in village houses and family houses toward the Heath, Highgate, Muswell Hill and the Suburb. Weight, floor build-up and extract on the elevation are recorded before a stone bath is ordered.",
        photo: servicePhotos["bathroom-renovation"],
      },
      {
        title: "Compact mansion-flat bathrooms",
        text:
          "Original rear rooms on risers in St John's Wood, Maida Vale and Swiss Cottage. A short bath or a shower, a basin, a sash onto a lightwell. Lifts often will not take a bath crate; the stair is the working assumption until we measure. Licence to alter is ordinary if wastes or extract move.",
        photo: bathroomRoomPhotos.compact,
      },
      {
        title: "Shower rooms",
        text:
          "A replacement for a failed suite, or a second room where a bath is not needed. Frameless screens and stone trays still need a substrate and a fall. We do not treat a shower as a simpler bathroom; the waterproofing is the same work.",
        photo: bathroomRoomPhotos.shower,
      },
      {
        title: "Ensuites in conversions",
        text:
          "Former dressing rooms and box rooms in Hampstead, Belsize Park and West Hampstead houses. Possible where drainage can reach a stack without damaging a principal room, and extract can be routed without an insensitive grille. Some rooms cannot take a shower without a pump; we will say so at survey.",
        photo: bathroomRoomPhotos.wetWall,
      },
      {
        title: "Internal bathrooms",
        text:
          "No window, a long duct, a door that fights the shower tray. Common in conversions. Mechanical extract with a clear route to outside is not optional. We will not leave the room dependent on a fan that dumps into a void.",
        photo: bathroomRoomPhotos.compact,
      },
      {
        title: "Half-landing stacked bathrooms",
        text:
          "The West Hampstead and Kentish Town type: the soil stack is on the party wall and the room is the remainder. Layout follows the stack. Moving the WC a long way is often the item that is not possible without work we do not do.",
        photo: bathroomRoomPhotos.shower,
      },
    ],
    housing: [
      {
        title: "Bathroom renovation in conversions",
        text:
          "Timber intermediate floors, stacked half-landing bathrooms and long drainage runs are the ordinary conversion problem in Hampstead, West Hampstead, Belsize Park, Kentish Town, Kilburn and Crouch End. Waterproofing is a system, not a paint-on afterthought. A room that cannot reach a stack is not forced into an ensuite.",
        links: [
          { href: "/bathroom-renovation/hampstead/", label: "Bathroom renovation in Hampstead" },
          { href: "/bathroom-renovation/west-hampstead/", label: "Bathroom renovation in West Hampstead" },
          { href: "/bathroom-renovation/belsize-park/", label: "Bathroom renovation in Belsize Park" },
          { href: "/bathroom-renovation/kentish-town/", label: "Bathroom renovation in Kentish Town" },
          { href: "/bathroom-renovation/kilburn/", label: "Bathroom renovation in Kilburn" },
          { href: "/bathroom-renovation/crouch-end/", label: "Bathroom renovation in Crouch End" },
        ],
      },
      {
        title: "Bathroom renovation in mansion blocks",
        text:
          "St John's Wood, Maida Vale and Swiss Cottage bathrooms sit on original risers, often over a neighbour. Lifts are small; a bath crate is a stair problem. Licence to alter is ordinary where wastes or extract move. We isolate, test, and do not cut into another demise without the building's process.",
        links: [
          { href: "/bathroom-renovation/st-johns-wood/", label: "Bathroom renovation in St John's Wood" },
          { href: "/bathroom-renovation/maida-vale/", label: "Bathroom renovation in Maida Vale" },
          { href: "/bathroom-renovation/swiss-cottage/", label: "Bathroom renovation in Swiss Cottage" },
          { href: "/bathroom-renovation/queens-park/", label: "Bathroom renovation in Queen's Park" },
        ],
      },
      {
        title: "Bathroom renovation in family houses",
        text:
          "Highgate, Primrose Hill, Muswell Hill, Golders Green and Hampstead Garden Suburb take family bathrooms and occasional ensuites in existing rooms. Extract on a conservation or Trust elevation is checked before we open up. Internal bathrooms without a window need mechanical extract with a clear route to outside.",
        links: [
          { href: "/bathroom-renovation/highgate/", label: "Bathroom renovation in Highgate" },
          { href: "/bathroom-renovation/primrose-hill/", label: "Bathroom renovation in Primrose Hill" },
          { href: "/bathroom-renovation/muswell-hill/", label: "Bathroom renovation in Muswell Hill" },
          { href: "/bathroom-renovation/hampstead-garden-suburb/", label: "Bathroom renovation in Hampstead Garden Suburb" },
          { href: "/bathroom-renovation/golders-green/", label: "Bathroom renovation in Golders Green" },
        ],
      },
    ],
    permissions: [
      "Leasehold flats usually need a licence to alter if wastes move, a soil stack is altered, or an extract is cut through a common void. We can prepare drawings and a method statement. Consent is granted by the freeholder or managing agent, not by us. Lead-in varies by building [VERIFY the lease and the agent's process].",
      "Building-control notification is arranged where the work falls within the current regulations — new electrical circuits, a change to drainage, or extra-low-voltage underfloor heating. We identify that at proposal stage, not after strip-out. Gas work, if a boiler or a fire shares the room or the flue, is by a Gas Safe registered engineer.",
      "Mechanical extract is designed for the elevation you have. Conservation-area and listed buildings in Hampstead, Highgate, Primrose Hill and the Suburb cannot always take a visible grille on the principal front. We plan the route at survey. [VERIFY duct route and listing on the address.]",
      "Wet areas are waterproofed to a documented system, particularly on timber floors. Drainage stays on existing stacks wherever the building allows. We do not form new external soil pipes on principal elevations as a convenience.",
    ],
    specification: [
      "Sanitaryware and brassware are specified as products, not as brand partnerships. Concealed cisterns, thermostatic showers, stone or ceramic trays and tiled wet walls are ordinary items; they still need a substrate that can take them. A stone bath is a weight and access problem in a conversion stair as much as it is a finishes choice.",
      "Underfloor heating, where used, is treated as an electrical circuit and a floor-build-up problem, not as a brochure extra. In a conversion the available depth often decides whether it belongs. We will say so at survey rather than thin the insulation to make it fit.",
      "Mechanical extract is designed for internal rooms. We will not leave a bathroom dependent on a window that does not exist, and we will not punch an insensitive grille through a conservation elevation if another route exists [VERIFY duct route on survey]. Decoration of the envelope, seals and a watertightness check close the room.",
      "Drainage alterations stay within the existing stacks wherever the building allows. Pumps are a last resort and are written into the proposal if they are the only way the layout works. Tiling over existing tiles is not the default; failed adhesive and trapped moisture in this housing stock make it a false economy.",
    ],
    areasIntro:
      "Local bathroom renovation pages for Hampstead, West Hampstead, Belsize Park, St John's Wood, Maida Vale, Swiss Cottage, Primrose Hill, Highgate and the wider North West London list sit below. Each is written for that building type, council and conservation designation — not a renamed copy of this page.",
  },
  "painting-decorating": {
    intro: [
      "Painting and decorating in North West London is mostly preparation. Lime and gypsum backgrounds, original joinery, previous coatings of unknown type, and hairline movement in converted houses will telegraph through any finish that is applied too soon. The work is washing down, filling, lining where it is needed, and a coating system that suits the substrate — not a quick refresh with a fashionable colour.",
      "Hampstead Property Services Group paints and decorates occupied houses and flats as well as empty ones, from a Finchley Road office. Dust control, room sequencing and a written prep specification matter more here than in a vacant new-build. A family still living in a West Hampstead terrace, or a mansion-flat owner in St John's Wood who cannot decant, is a normal brief.",
      "Heritage interiors in Hampstead, Belsize Park, Primrose Hill and Highgate — picture rails, shutters, sash windows, original doors — are joinery as much as they are painting. They are programmed and priced as such. Spray is used where it is the cleaner method for an empty room; brush and roller remain the default around furnished, original fabric.",
      "We do not sell a house style. Colour is sampled on the wall, in the light the room actually has. A north-facing Hampstead drawing room and a west-facing Maida Vale mansion flat do not read the same emulsion in the same way. Heritage colours are taken from established generic ranges; we do not claim an exclusive palette or manufacturer relationship.",
      "Failed plaster, rising damp and timber decay are not decorating items. We isolate the cause and, where it sits inside a light refurbishment, include the repair rather than paint over it. Exterior colour on a conservation-area or listed elevation, and any new outside colour in Hampstead Garden Suburb, is checked before it is quoted.",
    ],
    forWhom: [
      "The work is for owner-occupiers and landlords who want the plaster and the joinery treated properly: whole-house decoration, a floor of a conversion, a mansion-flat reception, common-parts making-good after other trades, or exterior painting of previously painted windows and joinery where access and weather allow.",
      "Occupied-home working is planned room by room so a kitchen, a bathroom and a bedroom remain usable. In mansion blocks we also follow the building's hours. We will not run spray equipment in a furnished flat as a default method.",
      "Making-good after kitchens, bathrooms and flooring is part of a light-refurbishment programme. Decorating is then the last trade, not the first. We will not paint a room that a plumber still has to open.",
    ],
    failuresHeading: "What has to be right before the colour",
    failuresLede:
      "Painting in this housing stock fails from the substrate, the joinery and the sequence — not from the choice of emulsion.",
    failures: [
      {
        title: "Preparation",
        text:
          "Washing down, filling, lining and rubbing down take the majority of the time. A cheap paint on unprepared walls is not the work. Prep standard, number of coats and sheen are written down. That is what we snag against.",
      },
      {
        title: "The substrate",
        text:
          "Lime, gypsum, previous coatings of unknown type, and hairline movement in conversions will telegraph through a finish applied too soon. Failed plaster, damp and timber decay are isolated, not painted over.",
      },
      {
        title: "Joinery",
        text:
          "Sashes, shutters, picture rails and original doors are programmed as joinery, not as a cut-in. Conservation-area and listed windows often need more than a coat of paint. If cords, staff beads or putty have failed, we say so before we start.",
      },
      {
        title: "The household",
        text:
          "Occupied houses and flats are sequenced so you keep a kitchen, a bathroom and a bedroom. Spray is for empty rooms. In a furnished period interior, brush and roller remain the default. Mansion blocks add their own hours.",
      },
    ],
    roomsHeading: "Typical interiors we decorate",
    roomsLede:
      "Period drawing rooms, sashes and shutters, mansion-flat receptions, occupied conversions and conservation joinery — each written to the building it sits in.",
    typicalRooms: [
      {
        title: "Period drawing rooms",
        text:
          "Hampstead, Belsize Park, Primrose Hill and Highgate interiors with cornicing, picture rails and lime plaster. Colour is sampled on the wall in the light the room has. A thin fill will show. High ceilings are access as well as decoration.",
        photo: servicePhotos["painting-decorating"],
      },
      {
        title: "Sashes, shutters and joinery",
        text:
          "Box frames, staff beads and original doors need more than a cut-in. Conservation-area and listed windows are checked before they are quoted. If the timber or the cords have failed, that is joinery, not a coat of paint.",
        photo: paintingRoomPhotos.sashes,
      },
      {
        title: "Mansion-flat interiors",
        text:
          "St John's Wood, Maida Vale and Swiss Cottage receptions: high rooms, original doors, common parts that are a separate scope from the demise. Working hours are the building's. Spray is not the default in a furnished flat.",
        photo: paintingRoomPhotos.flat,
      },
      {
        title: "Empty period rooms",
        text:
          "A vacant house or a cleared floor is where spray can be the cleaner method. Prep is still the majority of the time. We will not undercoat over defects we have not addressed.",
        photo: paintingRoomPhotos.drawing,
      },
      {
        title: "Occupied conversions",
        text:
          "West Hampstead, Kentish Town and Kilburn terraces where the household stays. Rooms are sequenced. Furniture is moved or covered by agreement, not as an afterthought on the first morning.",
        photo: paintingRoomPhotos.flat,
      },
      {
        title: "Conservation exteriors and the Suburb",
        text:
          "Previously painted windows, doors and joinery where access and weather allow. A new outside colour in a conservation area or under the Suburb Trust is not assumed. Internal decoration that does not change the elevation is ordinary work.",
        photo: paintingRoomPhotos.sashes,
      },
    ],
    housing: [
      {
        title: "Painting and decorating in period interiors",
        text:
          "Hampstead, Belsize Park, Primrose Hill, Muswell Hill and Golders Green interiors are lime plaster, original sashes and rooms that telegraph a thin fill. Colour is sampled on the wall in the light the room has. Sashes, shutters and picture rails are programmed as joinery, not as a cut-in.",
        links: [
          { href: "/painting-decorating/hampstead/", label: "Painting and decorating in Hampstead" },
          { href: "/painting-decorating/belsize-park/", label: "Painting and decorating in Belsize Park" },
          { href: "/painting-decorating/primrose-hill/", label: "Painting and decorating in Primrose Hill" },
          { href: "/painting-decorating/muswell-hill/", label: "Painting and decorating in Muswell Hill" },
          { href: "/painting-decorating/golders-green/", label: "Painting and decorating in Golders Green" },
        ],
      },
      {
        title: "Painting occupied conversions and mansion flats",
        text:
          "West Hampstead, Kentish Town, Kilburn, Queen's Park, St John's Wood and Maida Vale are often occupied. We sequence rooms so a kitchen, a bathroom and a bedroom remain usable. Mansion common parts are a separate scope from the demise. Spray is not the default in a furnished flat.",
        links: [
          { href: "/painting-decorating/west-hampstead/", label: "Painting and decorating in West Hampstead" },
          { href: "/painting-decorating/st-johns-wood/", label: "Painting and decorating in St John's Wood" },
          { href: "/painting-decorating/maida-vale/", label: "Painting and decorating in Maida Vale" },
          { href: "/painting-decorating/kentish-town/", label: "Painting and decorating in Kentish Town" },
          { href: "/painting-decorating/kilburn/", label: "Painting and decorating in Kilburn" },
          { href: "/painting-decorating/queens-park/", label: "Painting and decorating in Queen's Park" },
        ],
      },
      {
        title: "Painting in conservation areas and the Suburb",
        text:
          "External colour on a conservation-area or listed elevation is checked before it is quoted. In Hampstead Garden Suburb, internal decoration that does not change the elevation is ordinary work; a new outside colour is not. Highgate Village listing is checked on the address.",
        links: [
          { href: "/painting-decorating/hampstead-garden-suburb/", label: "Painting and decorating in Hampstead Garden Suburb" },
          { href: "/painting-decorating/highgate/", label: "Painting and decorating in Highgate" },
          { href: "/painting-decorating/swiss-cottage/", label: "Painting and decorating in Swiss Cottage" },
          { href: "/painting-decorating/crouch-end/", label: "Painting and decorating in Crouch End" },
        ],
      },
    ],
    permissions: [
      "Interior decoration within existing rooms is ordinary work. Listed and conservation constraints bite when coatings, windows or external joinery change. We check listing on the address before we quote an elevation. [VERIFY listing and conservation-area colour rules.]",
      "In Hampstead Garden Suburb, internal decoration that does not change the elevation is ordinary work. A new outside colour is not. Trust consent and Barnet planning are separate. [VERIFY both maps for the property.]",
      "Failed plaster, rising damp and timber decay are not decorating items. We isolate the cause rather than paint over it. Where the repair sits inside a light refurbishment, it is written into the proposal.",
      "Occupied-home working is planned room by room. In mansion blocks we also follow the building's hours. Common parts are a separate scope from the demise.",
    ],
    specification: [
      "Prep standard, product type, number of coats and sheen are written down. That is what we snag against, in daylight and with the lights on. Heritage colours are taken from established generic ranges; we do not claim an exclusive palette or manufacturer relationship. Samples are painted on the wall.",
      "Sash windows in conservation areas often need more than a coat of paint. If cords, staff beads or putty have failed, we say so before we start [VERIFY listed-window constraints on the specific property]. Exterior work is programmed around weather, not around a calendar promise.",
      "Spray is specified per room, not as a house rule. Empty, large rooms can take it. Furnished period interiors usually cannot. Making-good after kitchens, bathrooms and flooring is part of a light-refurbishment programme; decorating is then the last trade, not the first.",
    ],
    areasIntro:
      "Local painting and decorating pages for Hampstead, West Hampstead, Belsize Park, St John's Wood, Maida Vale, Highgate, the Suburb and the wider North West London list sit below. Each is written for that housing stock and conservation designation. Where a group painting microsite already exists for an area, the area hub will link out instead of duplicating that page.",
  },
  "light-refurbishment": {
    intro: [
      "Light refurbishment in North West London is the coordinated refresh of a flat or house: kitchen and bathroom replacements, decoration, flooring, joinery, and the plumbing and electrical work those rooms need. It is one programme and one account. It is not structural alteration, not an extension, and not a loft conversion.",
      "In Hampstead, West Hampstead, St John's Wood and Maida Vale that usually means a mansion-block apartment or a converted house where the plan stays as it is and the rooms are brought up to a single standard. The kitchen and bathroom are replaced, floors are refinished or renewed, joinery is repaired, and the whole is decorated. Occupied or empty, the sequence is the same: wet and dusty trades first, finishes last.",
      "Hampstead Property Services Group takes that instruction from a Finchley Road office, with the four trades on this site held in one programme. If you need walls moved, a loft converted or an extension, that is a different company in the same family: Hampstead Renovations. We will say so at the first visit rather than stretch the word refurbishment to cover work we do not deliver.",
      "The value of the instruction is coordination. A kitchen that is decorated before the plumber has finished, or a floor laid before the bathroom is watertight, is how programmes slip and finishes get damaged. We write the order down. A typical conversion flat — rear-return kitchen, half-landing bathroom, decoration and floors, with common-parts protection — is core work. So is a mansion-flat apartment where the lease allows internal replacement but not alteration of the carcass.",
      "We visit before we write a proposal. Unknowns in this housing stock — hidden damp, failed subfloors, redundant wiring — are listed as provisional items, not buried in a lump sum. When we open a wall and find something, we stop and write a variation before continuing.",
    ],
    forWhom: [
      "The work is for owner-occupiers and landlords who want a flat or house brought to a consistent standard without changing its structure: a buy-to-let refresh, a home after years of piecemeal work, or a mansion-block apartment where the building's rules allow internal replacement but not a new envelope.",
      "Moving out is often faster and cleaner for a whole-flat programme. A single kitchen or bathroom can usually be done around you. We will give an honest view after survey. Mansion blocks add their own hours and, often, a licence to alter for the wet rooms.",
      "Leasehold notices and building-control for the non-structural work that needs them are started in the lead-in. We do not strip rooms and then discover a licence was required.",
    ],
    failuresHeading: "What has to be right before the programme",
    failuresLede:
      "Light refurbishment in this housing stock fails from the envelope, the sequence and the unknowns — not from the choice of paint.",
    failures: [
      {
        title: "The envelope",
        text:
          "The plan stays as it is. We do not form structural openings, loft conversions, extensions or basements. If that is the brief, a single introduction to Hampstead Renovations. Light refurbishment is the rooms that already exist.",
      },
      {
        title: "Sequence",
        text:
          "Kitchens and bathrooms first, then floors and joinery, decoration last. Paint before the plumber has finished is how finishes get destroyed. The order is written into the programme.",
      },
      {
        title: "The building",
        text:
          "Licence to alter, mansion-block hours and common-parts protection are ordinary. Building-control for the non-structural work that needs it is started in the lead-in, not after strip-out.",
      },
      {
        title: "Unknowns",
        text:
          "Hidden damp, failed subfloors and redundant wiring are listed as provisional items. When we open a wall and find something, we stop, show you, and write a variation. They are not used as a blank cheque.",
      },
    ],
    roomsHeading: "Typical programmes we take on",
    roomsLede:
      "Mansion-flat apartments, conversion flats, a storey of a family house — kitchen, bathroom, floors and decoration as one account, without changing the structure.",
    typicalRooms: [
      {
        title: "Mansion-flat apartments",
        text:
          "St John's Wood, Maida Vale and Swiss Cottage: the plan stays as it is. Kitchen and bathroom replaced, floors and decoration brought to one standard, the building's hours and licence-to-alter process followed. We do not alter the carcass.",
        photo: servicePhotos["light-refurbishment"],
      },
      {
        title: "Conversion flats",
        text:
          "West Hampstead, Belsize Park, Kentish Town and Kilburn: rear-return kitchen, stacked bathroom, decoration and floors, with common-parts protection. One programme, wet trades first, paint last.",
        photo: refurbRoomPhotos.hall,
      },
      {
        title: "Family-house interiors",
        text:
          "Hampstead, Highgate, Primrose Hill and the Suburb: a storey or a whole interior to one standard. Listed fabric and Trust rules are checked where the envelope is involved. Structural openings are not this service.",
        photo: refurbRoomPhotos.sitting,
      },
      {
        title: "Kitchen in the programme",
        text:
          "A replacement within the existing room: galleys, chimney breasts, compact mansion-flat kitchens. Specified and sequenced with the bathrooms and the decoration, not as a separate contractor.",
        photo: servicePhotos["kitchen-renovation"],
        href: "/kitchen-renovation/",
        linkLabel: "Kitchen renovation in North West London",
      },
      {
        title: "Bathroom in the programme",
        text:
          "Tanking, extract and compact layouts. Finished and tested before floors and decoration close around them, so a late plumber is not destroying paint.",
        photo: servicePhotos["bathroom-renovation"],
        href: "/bathroom-renovation/",
        linkLabel: "Bathroom renovation in North West London",
      },
      {
        title: "Floors, joinery and decoration",
        text:
          "Sanded boards where they will take it, joinery repaired, then decoration last. Prep, coating and sequence follow the painting pages. Decorating is the close of the programme, not the first trade on site.",
        photo: refurbRoomPhotos.bedroom,
        href: "/painting-decorating/",
        linkLabel: "Painting and decorating in North West London",
      },
    ],
    housing: [
      {
        title: "Light refurbishment of conversion flats",
        text:
          "West Hampstead, Kentish Town, Belsize Park, Kilburn, Crouch End and Queen's Park conversions are the usual whole-flat brief: rear-return kitchen, half-landing bathroom, decoration and floors, with common-parts protection. One programme, wet trades first, paint last.",
        links: [
          { href: "/light-refurbishment/west-hampstead/", label: "Light refurbishment in West Hampstead" },
          { href: "/light-refurbishment/kentish-town/", label: "Light refurbishment in Kentish Town" },
          { href: "/light-refurbishment/belsize-park/", label: "Light refurbishment in Belsize Park" },
          { href: "/light-refurbishment/kilburn/", label: "Light refurbishment in Kilburn" },
          { href: "/light-refurbishment/crouch-end/", label: "Light refurbishment in Crouch End" },
          { href: "/light-refurbishment/queens-park/", label: "Light refurbishment in Queen's Park" },
        ],
      },
      {
        title: "Light refurbishment of mansion-block apartments",
        text:
          "St John's Wood, Maida Vale and Swiss Cottage apartments stay as the plan is. The kitchen and bathroom are replaced, floors and decoration brought to one standard, and the building's hours and licence-to-alter process are followed. We do not alter the carcass.",
        links: [
          { href: "/light-refurbishment/st-johns-wood/", label: "Light refurbishment in St John's Wood" },
          { href: "/light-refurbishment/maida-vale/", label: "Light refurbishment in Maida Vale" },
          { href: "/light-refurbishment/swiss-cottage/", label: "Light refurbishment in Swiss Cottage" },
        ],
      },
      {
        title: "Light refurbishment of family houses",
        text:
          "Hampstead, Highgate, Primrose Hill, Golders Green, Muswell Hill and Hampstead Garden Suburb houses take a storey or a whole interior to one standard. Listed fabric and Trust rules are checked where the envelope is involved. Structural openings, lofts and extensions are not this service.",
        links: [
          { href: "/light-refurbishment/hampstead/", label: "Light refurbishment in Hampstead" },
          { href: "/light-refurbishment/highgate/", label: "Light refurbishment in Highgate" },
          { href: "/light-refurbishment/primrose-hill/", label: "Light refurbishment in Primrose Hill" },
          { href: "/light-refurbishment/hampstead-garden-suburb/", label: "Light refurbishment in Hampstead Garden Suburb" },
          { href: "/light-refurbishment/golders-green/", label: "Light refurbishment in Golders Green" },
          { href: "/light-refurbishment/muswell-hill/", label: "Light refurbishment in Muswell Hill" },
        ],
      },
    ],
    permissions: [
      "Light refurbishment does not include structural openings, loft conversions, extensions or basement works. For those, a single introduction to Hampstead Renovations. We will say so at the first visit rather than stretch the word to cover work we do not deliver.",
      "Leasehold flats usually need a licence to alter for kitchen or bathroom replacement. We can prepare drawings and a method statement. Consent is granted by the freeholder or agent, not by us. Building-control for the non-structural work that needs it is started in the lead-in.",
      "Unknowns — hidden damp, failed subfloors, redundant wiring — are listed as provisional items. When we open a wall and find something, we stop and write a variation. They are not used as a blank cheque.",
      "Occupied homes and mansion-block hours are written into the programme. Common-parts protection is part of the method, not a courtesy.",
    ],
    specification: [
      "Decoration, flooring and joinery are specified as systems: prep standard, product type, board finish, ironmongery. Kitchens and bathrooms follow the specifications on those service pages. Rewiring or replumbing is of the rooms in scope, coordinated with the existing installation, not a speculative whole-house strip unless that is the written brief.",
      "The sequence is written: wet rooms and first fix, then floors and joinery, decoration last. A single snag and a single account close the programme, not room by room in isolation.",
      "Explicitly excluded: structural openings, loft conversions, extensions, basement works, and design-and-build of a new envelope. For those, a single introduction to Hampstead Renovations.",
    ],
    areasIntro:
      "Local light-refurbishment pages for Hampstead, West Hampstead, Belsize Park, Kentish Town, Kilburn, St John's Wood, Maida Vale, Swiss Cottage, Primrose Hill, Highgate and the wider North West London list sit below. Each page is the housing stock of that neighbourhood, not a renamed copy of this one.",
  },
};
