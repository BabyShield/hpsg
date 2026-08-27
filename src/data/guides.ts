import { areas } from "./areas";
import { SERVICE_SLUGS, type Faq, type ServiceSlug } from "./types";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuideComboLink = {
  service: ServiceSlug;
  area: string;
};

export type Guide = {
  slug: string;
  /** H1 and card title. */
  title: string;
  /** The question a reader is actually asking. Internal note, not rendered. */
  primaryQuery: string;
  metaTitle: string;
  metaDescription: string;
  /** One-sentence standfirst under the H1. */
  lede: string;
  sections: GuideSection[];
  faqs?: Faq[];
  /** At least two service hubs, linked in the body and the footer of the page. */
  relatedServices: ServiceSlug[];
  /** At least three Tier-1 service-in-area pages. */
  relatedCombos: GuideComboLink[];
  relatedGuides: string[];
  datePublished: string;
  dateModified: string;
};

const PUBLISHED = "2026-08-25";

export const guides: Guide[] = [
  {
    slug: "licence-to-alter-kitchen-bathroom",
    title: "Licence to alter: kitchens and bathrooms in leasehold flats",
    primaryQuery: "licence to alter kitchen renovation",
    metaTitle: "Licence to Alter for a Kitchen or Bathroom | HPSG",
    metaDescription:
      "What a licence to alter is, when replacing a kitchen or bathroom in a leasehold flat triggers one, and what a managing agent usually asks for. 020 7101 3168.",
    lede:
      "Most flats in North West London are leasehold, and most kitchen and bathroom work in them needs the freeholder's written permission before anything is taken out.",
    sections: [
      {
        heading: "What a licence to alter actually is",
        paragraphs: [
          "A licence to alter is written consent from your freeholder, usually administered by a managing agent, permitting a specific alteration to a specific flat. It sits entirely separately from planning permission and building control. Planning is a public process run by the council and concerns itself mainly with the outside of the building; a licence to alter is a private matter between you and the person who owns the building, and concerns itself with what you are proposing to do to their asset.",
          "The requirement comes from your lease rather than from legislation, so the trigger differs building to building. Some leases catch any alteration to the fabric. Others catch only structural work, or only work affecting services shared with other flats. Reading the lease is the first step, and it is worth doing before a design is settled rather than after cabinetry is ordered.",
        ],
      },
      {
        heading: "When a kitchen or bathroom triggers one",
        paragraphs: [
          "Replacing units and appliances in the same positions, on existing services, often falls outside the requirement. What tends to trigger it is movement: relocating a waste or a soil connection, cutting a new extract through an external wall or into a shared duct, altering the floor build-up over the flat below, or changing anything that could affect another leaseholder's demise.",
          "Bathrooms trigger it more often than kitchens, because a bathroom sits directly above someone else's ceiling and a failed waterproofing detail becomes their problem rather than yours. Wet rooms and level-access showers attract particular attention for the same reason, and some agents will ask for the waterproofing system to be specified and tested before tiling.",
          "Where the answer is genuinely unclear, agents would generally rather be asked than not. An enquiry costs a fortnight; discovering mid-strip-out that consent was needed costs considerably more.",
        ],
      },
      {
        heading: "What the pack usually contains",
        paragraphs: [
          "Requirements vary, but a typical pack includes drawings showing the existing and proposed layouts, a written specification, a method statement covering hours and access, evidence that the contractor is insured, and confirmation that gas and electrical work will be carried out by appropriately registered people. Some agents ask for a schedule of condition for the common parts. Some ask for a deposit against damage to them.",
          "We prepare drawings and a method statement as part of the lead-in on the work we take on. What we cannot do is grant the consent: that is the freeholder's, and holding a share of the freehold changes who signs rather than whether a signature is needed. In a converted house with a shared freehold, the people signing are your neighbours, formally.",
        ],
      },
      {
        heading: "Where it sits in the programme",
        paragraphs: [
          "The wait belongs in the lead-in, alongside survey and ordering, not between strip-out and first fix. An agent's response time is outside anyone's control, and a flat with no kitchen waiting on a letter is the worst place to discover that.",
          "In practice that means the consent process starts as soon as the scope is settled and runs while cabinetry, sanitaryware and stone are on order. The strip-out date is set once consent is in hand and the long-lead items have confirmed dates. It is a slower start and a shorter disruption.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we start while the licence is still being considered?",
        a: "Not on anything the licence covers. Work carried out without consent that the lease required can put you in breach of it, and a freeholder can require reinstatement. Where part of the scope is plainly outside the requirement — decoration, for example — that can sometimes run first, but the question is settled with the agent rather than assumed.",
      },
      {
        q: "Who pays the freeholder's costs?",
        a: "The leaseholder, usually. Agents commonly charge an administration fee and pass on the professional costs they incur reviewing the application. The amounts are set by the freeholder or their agent, not by us, and they are worth asking about early so they sit in your budget rather than arriving as a surprise.",
      },
      {
        q: "Does a share of the freehold mean we can skip it?",
        a: "No. It means you are one of the people granting the consent rather than a reason it is unnecessary. The lease still governs what may be altered, and the freehold company still gives permission in writing. In a small converted house that is a conversation with your neighbours, but it is a formal one.",
      },
    ],
    relatedServices: ["kitchen-renovation", "bathroom-renovation"],
    relatedCombos: [
      { service: "kitchen-renovation", area: "st-johns-wood" },
      { service: "bathroom-renovation", area: "maida-vale" },
      { service: "light-refurbishment", area: "swiss-cottage" },
    ],
    relatedGuides: ["mansion-flat-renovation", "conservation-area-renovation-consent"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "conservation-area-renovation-consent",
    title: "Renovating in a conservation area: what consent actually covers",
    primaryQuery: "do you need permission to renovate in a conservation area",
    metaTitle: "Conservation Area Renovation: What Needs Consent | HPSG",
    metaDescription:
      "Internal work, external work and the line between them in a conservation area, plus what Article 4 directions and listing change. 020 7101 3168.",
    lede:
      "Much of North West London sits in a conservation area, and the rules bite far harder on the outside of a building than on the rooms inside it.",
    sections: [
      {
        heading: "The line that matters: inside versus the envelope",
        paragraphs: [
          "Conservation-area designation is about the character and appearance of an area, which in practice means what can be seen. Replacing a kitchen or a bathroom inside an existing room, on existing services, is generally not something the designation reaches. The moment work touches the envelope — a new extract grille, an enlarged opening, a replacement window, external decoration in a different colour — it becomes a matter for the council.",
          "This is why the extract route is settled at survey rather than drilled as a hole of convenience on the day. A principal elevation in a conservation area is not somewhere a grille is assumed, and where no acceptable route exists the honest answer is a recirculating hood, said before the ceiling closes rather than after.",
        ],
      },
      {
        heading: "Article 4 directions",
        paragraphs: [
          "Permitted development rights let you make certain changes without applying for planning permission. An Article 4 direction removes specified rights for a defined area, which is how councils protect features that would otherwise disappear one house at a time — original windows and doors being the usual targets.",
          "Article 4 directions are made street by street rather than borough by borough, so two houses a few minutes apart can sit under different rules. Primrose Hill has carried one since 1983 [VERIFY the current extent]. The only reliable answer is the council's own map for the specific address, which is why we check rather than generalise.",
        ],
      },
      {
        heading: "Listing is a different and stricter regime",
        paragraphs: [
          "A listed building is protected inside as well as out. Where a house is listed, internal alterations can require listed building consent in their own right — including work that would be entirely unremarkable in the house next door. Chimneypieces, joinery, plaster mouldings, staircases and original layout are all capable of being part of what is listed.",
          "Listing and conservation-area designation are separate and can overlap. A property can be listed, in a conservation area, and under an Article 4 direction at the same time. We read the entry before anything is priced in detail, and where the answer changes what is possible we say so at survey. [VERIFY the listing entry and grade on the address.]",
        ],
      },
      {
        heading: "What this means in practice",
        paragraphs: [
          "For most kitchen and bathroom work in North West London it means the interior proceeds much as it would anywhere, while the elevation is treated as a constraint rather than a surface. Extract, soil pipes, flues and windows are the recurring flashpoints.",
          "For decoration it means external colour and the treatment of original joinery are worth checking before a colour is chosen, particularly on a terrace where a run of houses reads as a single composition. Internal decoration is unaffected, whatever the designation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a conservation area stop us fitting a new kitchen?",
        a: "No. It controls what the building looks like from outside, so it can restrict where an extract grille goes, or rule out a visible one on a principal front. The kitchen itself is a matter of the room, the services and, in a leasehold flat, the lease. We plan the extract route at survey so the constraint shapes the design rather than interrupting it.",
      },
      {
        q: "How do we find out what applies to our address?",
        a: "The council's planning pages carry conservation-area maps and any Article 4 directions, and Historic England's list entry gives the listing and grade. We check the specific address rather than assuming that a street's designation extends to it, because boundaries frequently run along the middle of a street rather than around it.",
      },
    ],
    relatedServices: ["kitchen-renovation", "painting-decorating"],
    relatedCombos: [
      { service: "kitchen-renovation", area: "hampstead" },
      { service: "bathroom-renovation", area: "highgate" },
      { service: "painting-decorating", area: "primrose-hill" },
    ],
    relatedGuides: [
      "licence-to-alter-kitchen-bathroom",
      "extract-ventilation-period-flats",
      "hampstead-garden-suburb-internal-works",
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "mansion-flat-renovation",
    title: "Renovating a mansion flat: lifts, risers and common parts",
    primaryQuery: "renovating a mansion flat London",
    metaTitle: "Mansion Flat Renovation in North West London | HPSG",
    metaDescription:
      "Purpose-built mansion blocks have their own discipline: original risers, stacked wet rooms, lifts, porters and building hours. What that means for the work. 020 7101 3168.",
    lede:
      "A purpose-built mansion block is not a large flat in a converted house. The building itself sets most of the terms.",
    sections: [
      {
        heading: "Original risers decide the layout",
        paragraphs: [
          "Blocks of the 1890s to the 1930s were planned around service risers that carried soil and water vertically through the building, with kitchens and bathrooms arranged against them. Those risers are still where the drainage is, and they are usually shared with the flats above and below.",
          "The practical consequence is that a layout is a negotiation with the stack rather than a blank sheet. Moving a WC or a sink any distance means finding fall that the floor build-up frequently cannot offer without work that steps outside a kitchen or bathroom instruction. An island in a mansion-flat kitchen is unusual for the same reason: the services will not reach it honestly."
        ],
      },
      {
        heading: "You are working above someone's ceiling",
        paragraphs: [
          "Wet rooms in these blocks are stacked, so your bathroom floor is the neighbour's ceiling. Waterproofing is therefore specified as a documented system and tested before tiling, and the floor build-up carries an acoustic layer as well. Neither is an optional upgrade in this stock.",
          "The same logic governs noise. Cutting and breaking carry through a solid structure far better than people expect, so noisy work is banded into hours the building has agreed and the neighbours have been told about.",
        ],
      },
      {
        heading: "Lifts, porters and common parts",
        paragraphs: [
          "A passenger lift in a period block will frequently not take a run of kitchen carcasses, a bath, or a full-height fridge. That is a measurement taken at survey, not an assumption: the lift car, the doorway, the turn at the top of the stair and the drop point outside all get recorded, because between them they decide what can be ordered.",
          "Common parts are treated as part of the site. Dust screens, protected floors and an agreed route in and out are written into the method rather than offered as a courtesy. Many blocks have a porter, and a porter who knows what is arriving and when is the single most useful relationship on the job. Redecorating those common parts, though, is the freeholder's business and not part of a flat's instruction.",
        ],
      },
      {
        heading: "The paperwork runs ahead of everything",
        paragraphs: [
          "Almost every mansion flat is leasehold, so a licence to alter is the norm rather than the exception, and the managing agent will usually have standing rules about working hours, deliveries, waste and insurance evidence.",
          "All of that belongs in the lead-in. The programme is written so consent and long-lead items resolve before the flat loses its kitchen or bathroom, which makes the start slower and the disruption shorter.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the kitchen move to a different room?",
        a: "Occasionally, but drainage decides it rather than taste. Waste has to reach the original riser at a workable fall, and a long concealed run across a flat rarely finds it without lifting floors — which is a larger job than a kitchen instruction. Extract is the second obstacle, since a mansion-block elevation is not somewhere a new grille is assumed.",
      },
      {
        q: "Can we stay in the flat while the work runs?",
        a: "For a single kitchen or bathroom, often yes, provided dust can be isolated and there is an alternative for the room being worked on. For a whole-flat programme it is usually cleaner to decant: the sequence is faster, and living behind screens in a flat with one bathroom is harder than it sounds. We will say which after seeing the plan.",
      },
    ],
    relatedServices: ["light-refurbishment", "kitchen-renovation"],
    relatedCombos: [
      { service: "kitchen-renovation", area: "st-johns-wood" },
      { service: "bathroom-renovation", area: "maida-vale" },
      { service: "light-refurbishment", area: "swiss-cottage" },
    ],
    relatedGuides: ["licence-to-alter-kitchen-bathroom", "bathroom-tanking-timber-floors"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "kitchen-bathroom-renovation-cost-factors",
    title: "What decides the cost of a kitchen or bathroom renovation",
    primaryQuery: "what affects the cost of a kitchen renovation",
    metaTitle: "What Decides Kitchen & Bathroom Renovation Cost | HPSG",
    metaDescription:
      "The factors that move the figure on a kitchen or bathroom renovation in a period building: the room as found, services, access, tenure and consent. 020 7101 3168.",
    lede:
      "There is no price list on this site. What follows is what actually moves the figure, so that a proposal reads as a set of decisions rather than a number.",
    sections: [
      {
        heading: "The room as found",
        paragraphs: [
          "The single largest variable is what is behind the existing finish. A room whose services are sound, whose floor is level enough and whose walls are in reasonable condition is a different job from one where the boards have dropped, the wiring serves something unexpected and there is lath and plaster behind the units.",
          "None of that is visible until the old room comes out, which is why items that depend on it are listed as provisional after survey rather than buried in a single figure. Findings are recorded while the room is open, priced as a written variation against the agreed scope, and put to you before anything is done about them.",
        ],
      },
      {
        heading: "Whether services move",
        paragraphs: [
          "Replacing a kitchen or bathroom on existing service positions is materially different from relocating them. Moving a waste means finding fall; moving a sink or a WC any distance in a period building often means lifting a floor. Extract is the other half of the same question: a short duct through a wall that will accept one is straightforward, and a route that has to cross a flat or land on a controlled elevation is not.",
          "This is also where scope boundaries matter. Forming or widening a structural opening, or joining two rooms, is not part of a kitchen or bathroom instruction on this site; that work sits with Hampstead Renovations.",
        ],
      },
      {
        heading: "Access and the building",
        paragraphs: [
          "Getting materials in is a real cost in this part of London. A house with a driveway is not the same proposition as a third-floor flat up a shared stair with a lift that will not take a carcass, or a village lane with a single timed delivery window and no standing.",
          "Shared buildings add protection of common parts, restricted working hours and, frequently, a waiting period for consent. Controlled parking, skip licences and bay suspensions are ordinary line items rather than surprises.",
        ],
      },
      {
        heading: "Tenure, consent and specification",
        paragraphs: [
          "Leasehold work usually needs a licence to alter, and the freeholder's administration and professional costs sit with the leaseholder. Conservation-area and listed-building constraints can change what is possible on the envelope, and listing can reach the interior as well.",
          "Specification is the part most people think of first and it does move the figure, but in generic categories — the difference between a laminate and a stone worktop, or between a standard tile and a handmade one — rather than through brand partnerships, which we do not have. Occupied working is slower than empty working, and that is written into the programme rather than discovered halfway through.",
        ],
      },
      {
        heading: "How we price it",
        paragraphs: [
          "We visit, then write a proposal against a defined scope. We do not send a figure from photographs, because a photograph shows the finish and hides every one of the factors above.",
          "The proposal sets out the scope, the specification and a programme. Variations after that are written, not verbal. If you want a sense of the range before committing to a visit, the honest answer is that a telephone number is not a substitute for seeing the room.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why will you not give a rough figure over the telephone?",
        a: "Because in this housing stock the range is wide enough that a rough figure would be misleading rather than helpful. Two kitchens of the same size in the same street can differ substantially depending on whether services move, whether the building needs consent, and what is behind the plaster. A visit is quicker than the correspondence that follows a bad estimate.",
      },
      {
        q: "What is a provisional item?",
        a: "A line in the proposal for work that is likely but cannot be scoped until the room is open — a length of failed waste, a subfloor that will not take a finish, wiring that serves something not on any drawing. It is listed with an allowance so the figure is honest about uncertainty rather than pretending there is none, and it is confirmed or released once the position is known.",
      },
    ],
    relatedServices: ["kitchen-renovation", "bathroom-renovation"],
    relatedCombos: [
      { service: "kitchen-renovation", area: "st-johns-wood" },
      { service: "bathroom-renovation", area: "hampstead" },
      { service: "light-refurbishment", area: "kilburn" },
    ],
    relatedGuides: [
      "licence-to-alter-kitchen-bathroom",
      "order-of-works-flat-refurbishment",
      "living-through-a-renovation",
    ],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
  {
    slug: "rear-return-kitchen-layouts",
    title: "The rear-return kitchen: layouts that work",
    primaryQuery: "rear return kitchen layout Victorian terrace",
    metaTitle: "Rear-Return Kitchen Layouts in Period Terraces | HPSG",
    metaDescription:
      "One window, a party wall and a door that swings into the run: how a rear-return kitchen is actually laid out in a London conversion. 020 7101 3168.",
    lede:
      "The standard conversion kitchen in NW6, NW5 and N8 is a narrow rear return, and its width decides almost everything about it.",
    sections: [
      {
        heading: "What you are working with",
        paragraphs: [
          "A Victorian or Edwardian terrace typically has a two-room main body and a narrower back addition — the closet wing, or rear return — which held the original scullery. In a converted flat that return is now the kitchen. It usually offers one window, one external wall, a party wall shared with the neighbour, and a door that opens into the space.",
          "The width of the return, measured at its narrowest point, is the number that governs the design. It determines worktop depth, whether appliances can stand opposite each other, and whether a run can pass the door swing without becoming a corridor. That measurement is taken before any layout is drawn.",
        ],
      },
      {
        heading: "Galley or single run",
        paragraphs: [
          "Below roughly 2.4 metres of clear width, a galley with runs on both sides stops working: two people cannot pass, and drawers on opposite sides foul each other. A single run down the longer wall with a tall bank at one end is usually the better answer, even though it looks like less storage on paper.",
          "Above that width a galley becomes viable, and it is generally the most efficient use of a return because it keeps both long walls in service. The sink goes on the window wall wherever the existing waste allows, since that is both the pleasant position and the cheapest one.",
          "An L-shape appears where the return opens into a wider rear room. It works, but the corner is dead space unless it is properly fitted out, and the run should not turn a corner simply because the wall does.",
        ],
      },
      {
        heading: "What we will not draw",
        paragraphs: [
          "An island. A return of this width cannot serve one: the floor will not carry services to the middle of the room without being lifted, and the circulation space disappears. Where a client has seen one in a neighbouring flat, it is almost always because that flat's side return was filled in — a structural job, and not this service.",
          "A kitchen that ignores the stack. Waste leaves these terraces at the back, and a layout that puts the sink at the far end of the flat needs fall it will not find. We would rather rework the return properly than push services the length of a property.",
          "Opening the return into the room beside it is the usual temptation, and it is structural work that sits with Hampstead Renovations rather than with a kitchen instruction.",
        ],
      },
      {
        heading: "Scribing, and why period walls change the order",
        paragraphs: [
          "Walls in this stock are rarely square and floors have usually settled toward the party wall. Carcasses are levelled and packed, and end panels and worktops are scribed to the wall rather than the wall being made good to the run. Template for stone is taken after the carcasses are in and level, never from a drawing.",
          "That is also why cabinetry is ordered after a measured survey of the room as found rather than from the estate agent's floor plan. A centimetre of assumption at the drawing stage becomes a visible wedge at the handover.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we have a dishwasher and a full-height fridge in a narrow return?",
        a: "Sometimes, but rarely both plus a decent run of worktop. The honest conversation happens at survey with the real measurement in front of us: usually it is a choice between one tall appliance and a longer preparation run, or between the dishwasher and undercounter storage. We would rather set that out early than fit a kitchen you have to squeeze past.",
      },
      {
        q: "Where does the extractor go?",
        a: "Through the return's rear or side wall where there is an acceptable route, which is short and effective. Two things rule it out: a neighbour's window immediately adjacent, and a controlled elevation in a conservation area. Where neither route works we specify a recirculating hood and say so at survey rather than after the ceiling is closed.",
      },
    ],
    relatedServices: ["kitchen-renovation", "light-refurbishment"],
    relatedCombos: [
      { service: "kitchen-renovation", area: "west-hampstead" },
      { service: "kitchen-renovation", area: "kentish-town" },
      { service: "kitchen-renovation", area: "crouch-end" },
    ],
    relatedGuides: ["extract-ventilation-period-flats", "kitchen-bathroom-renovation-cost-factors"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "bathroom-tanking-timber-floors",
    title: "Tanking and waterproofing bathrooms on timber floors",
    primaryQuery: "tanking a bathroom with timber floors",
    metaTitle: "Tanking a Bathroom on Timber Floors | HPSG",
    metaDescription:
      "Why a converted period bathroom needs a documented waterproofing system rather than a paint-on afterthought, and where wet rooms are honest. 020 7101 3168.",
    lede:
      "In a converted house or a mansion flat your bathroom floor is somebody else's ceiling, and timber moves.",
    sections: [
      {
        heading: "Why timber changes the problem",
        paragraphs: [
          "A suspended timber floor deflects under load, and it moves seasonally as moisture content changes. Tile and grout do not. The junction between them is where failures start, which is why waterproofing in this stock is treated as a system with movement designed into it, rather than a coat of something applied before tiling.",
          "In practice that means a rigid, decoupled substrate rather than tiling straight to floorboards, a waterproof membrane taken up the walls to a defined height, sealed corners and junctions, and a proper detail where the floor meets the wall. Nothing about that is exotic; it is simply not optional here.",
        ],
      },
      {
        heading: "Where the water actually goes",
        paragraphs: [
          "Most leaks that reach a neighbour are not dramatic. They are slow, and they come from the same handful of places: the joint between a shower tray and the wall, the perimeter of a bath, a poorly formed corner in a wet room, and the seal around a waste. Each is a detail rather than a product.",
          "Half-landing bathrooms in converted terraces deserve particular attention because they sit directly over a shared hallway or another flat's room, often on the shortest joist span in the house, and because they were rarely designed as bathrooms in the first place.",
        ],
      },
      {
        heading: "Wet rooms: where they are honest",
        paragraphs: [
          "A level-access wet room needs fall across the floor to a drain, and on a timber floor that fall has to be built into the structure or the floor build-up. Where joist depth allows it to be formed properly, a wet room is a good answer. Where it does not, forming one means notching structure, and that is a different job from a bathroom refit.",
          "The alternative is a low-profile tray, which achieves most of the look with none of the structural argument. We will say which the floor supports at survey rather than discovering it once the room is open.",
        ],
      },
      {
        heading: "Testing before the room closes",
        paragraphs: [
          "Waterproofing is tested before tiling, and the wet areas are tested again before decoration closes around them. It is a slower sequence than tiling straight over and hoping, and it is the only way to find a problem while it is still cheap.",
          "Where a managing agent asks for evidence as part of a licence to alter, this is usually what they mean: the system specified, and confirmation it was tested. It is worth doing whether or not anyone asks.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is tanking really necessary if we are only replacing like for like?",
        a: "In a shower area, yes, whatever was there before. Older bathrooms in this stock frequently had no membrane at all, which is why we so often find damp timber under a tray that looked sound. Replacing the fittings and leaving the substrate as found means the next failure is only a matter of time, and it will not be your ceiling it lands on.",
      },
      {
        q: "Can you match a bathroom to the one below to keep drainage simple?",
        a: "Where the stack allows it, keeping wet rooms stacked is genuinely the easier engineering, and we will usually recommend it. What we will not do is force a layout to align with a flat we have not surveyed. The connection that matters is to the stack and at a workable fall, and that is measured on your floor rather than inferred from the plan below.",
      },
    ],
    relatedServices: ["bathroom-renovation", "light-refurbishment"],
    relatedCombos: [
      { service: "bathroom-renovation", area: "belsize-park" },
      { service: "bathroom-renovation", area: "west-hampstead" },
      { service: "bathroom-renovation", area: "kentish-town" },
    ],
    relatedGuides: ["mansion-flat-renovation", "licence-to-alter-kitchen-bathroom"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "extract-ventilation-period-flats",
    title: "Extract and ventilation in period flats",
    primaryQuery: "kitchen extractor in a conservation area",
    metaTitle: "Kitchen & Bathroom Extract in Period Flats | HPSG",
    metaDescription:
      "Why the extract route is agreed at survey rather than drilled on the day, what conservation areas control, and when recirculation is the honest answer. 020 7101 3168.",
    lede:
      "The extract route is one of the few things in a kitchen or bathroom that the building can simply refuse to provide.",
    sections: [
      {
        heading: "Why it is settled first",
        paragraphs: [
          "In a new-build the duct route is a detail. In a period flat it is a constraint that shapes the layout, because there may be only one wall it can honestly leave through — and sometimes none. Deciding it late means either a hole somewhere regrettable or a hood that does not vent.",
          "So the route is agreed at survey, while the old kitchen is still standing: which wall, what run length, how many bends, where the terminal lands and what it looks like from outside.",
        ],
      },
      {
        heading: "What a conservation area controls",
        paragraphs: [
          "Conservation-area designation concerns the appearance of the area, so it reaches the terminal rather than the fan. A grille on a principal elevation — the front of the house, or any elevation prominent from the street — is the case most likely to attract objection, and on a listed building the position is stricter still.",
          "A rear or flank wall not visible from the public realm is usually a different conversation. None of this is decided by generalisation: the answer depends on the address, and we check rather than assume permitted development. [VERIFY the designation and any Article 4 for the property.]",
        ],
      },
      {
        heading: "Internal bathrooms and shared ducts",
        paragraphs: [
          "An internal bathroom with no external wall needs mechanical extract with a real route to outside. What it must not have is a fan discharging into a ceiling void or a roof space, which simply moves the moisture somewhere it will do damage quietly.",
          "In mansion blocks there is often a shared duct serving stacked bathrooms. Connecting into it is usually the right answer and usually needs the freeholder's consent, because it is common fabric. Where an existing connection is being reused, it is worth checking it is still clear: decades of accumulated grease and lint are common.",
        ],
      },
      {
        heading: "When recirculation is the right answer",
        paragraphs: [
          "Where no acceptable duct route exists, a recirculating hood with carbon filtration is the honest specification. It handles smell and grease reasonably well and does nothing for moisture, so it works best in a kitchen with an openable window.",
          "We would rather specify that openly at survey than duct into a void and describe it as extraction. Filters need replacing on a schedule; that is a maintenance point worth knowing before you choose it rather than after.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the extractor vent through the roof instead of a wall?",
        a: "Sometimes, in a top-floor flat, though it needs a proper terminal and a route that does not run through insulation or a cold void where condensation will form in the duct. It also usually reaches common fabric, so in a leasehold building it becomes a consent question. It is worth investigating where a wall route is unavailable, but it is not a simple substitute.",
      },
      {
        q: "How much does duct length matter?",
        a: "A great deal. Every bend and every metre reduces what the fan actually moves, and a long convoluted run through cupboards can leave a powerful hood performing poorly. That is why route length is part of the layout decision rather than something worked out afterwards by the fitter.",
      },
    ],
    relatedServices: ["kitchen-renovation", "bathroom-renovation"],
    relatedCombos: [
      { service: "kitchen-renovation", area: "hampstead" },
      { service: "bathroom-renovation", area: "st-johns-wood" },
      { service: "kitchen-renovation", area: "primrose-hill" },
    ],
    relatedGuides: ["conservation-area-renovation-consent", "rear-return-kitchen-layouts"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "decorating-period-plaster",
    title: "Decorating period plaster: lime, patches and lining paper",
    primaryQuery: "painting lime plaster walls",
    metaTitle: "Decorating Period Plaster and Lime Walls | HPSG",
    metaDescription:
      "One wall in a period house is rarely one substrate. What that means for preparation, lining paper and the coating specification. 020 7101 3168.",
    lede:
      "A wall in a converted Victorian house is usually three or four different materials wearing the same colour.",
    sections: [
      {
        heading: "What is actually on the wall",
        paragraphs: [
          "Original lime plaster on riven lath, gypsum patches from a previous repair, filler over old fixings, and somewhere under it all a coating nobody recorded. Each of those takes paint differently, which is why a period room that has been rolled with two coats of emulsion so often looks patchy in raking light.",
          "Preparation is therefore the specification rather than a preamble to it. Establishing what is sound, what has lost its key and what has to come off is the first substantive piece of work, and it happens wall by wall rather than room by room.",
        ],
      },
      {
        heading: "Lime, and why it is worth keeping",
        paragraphs: [
          "Sound lime plaster is worth retaining. It is breathable, it is part of how a solid-walled building manages moisture, and replacing it wholesale with a hard gypsum skim changes how the wall behaves. A skimmed wall over damp lime tends to crack along the laths within a couple of years.",
          "Where lime has blown in patches it can be re-fixed and made good in compatible materials. Where it has failed comprehensively, replacement is the honest answer. That judgement is made by testing adhesion in a few places, not by assuming either outcome.",
        ],
      },
      {
        heading: "When lining paper is right, and when it is a shortcut",
        paragraphs: [
          "Lining paper earns its place where a wall is sound but cosmetically uneven — fine crazing, historic movement, a patchwork of repairs — and where the alternative is a full re-skim that the wall does not otherwise need. It bridges hairline variation and gives a consistent surface for paint.",
          "It is a shortcut when it is used to cover something that needed fixing: a live crack, a damp problem, or plaster that has lost its key and will take the paper off with it. Lining is written into the proposal with a reason attached, not added on the day to save preparation.",
        ],
      },
      {
        heading: "Coatings and sequence",
        paragraphs: [
          "New or exposed plaster takes a mist coat before finish coats, thinned so it soaks in rather than sitting on the surface. Where breathability matters — solid walls, older lime — the finish is chosen to suit rather than defaulting to whatever is on the van.",
          "Decoration is the close of a programme, not the first trade on site. Where a kitchen, bathroom or floor is also being done, painting follows them so that a late plumber is not cutting into a finished wall. In an occupied house rooms are sequenced so that a bedroom and a bathroom stay usable throughout.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you match an existing colour that has faded?",
        a: "We can get close, but honestly: a faded wall and a fresh tin of the original colour will not match, because what has faded is the paint on the wall rather than the reference. Where a single wall is being redecorated in an otherwise untouched room, we will say if the result is likely to read as a patch, and usually recommend taking the whole room instead.",
      },
      {
        q: "Do you spray or brush?",
        a: "Per room rather than as a policy. Empty rooms with a lot of flat wall can take spray, which is cleaner and faster. Furnished period interiors with original joinery, cornices and mouldings generally take brush and roller, because masking to a good standard costs more time than it saves. We decide with the room in front of us.",
      },
    ],
    relatedServices: ["painting-decorating", "light-refurbishment"],
    relatedCombos: [
      { service: "painting-decorating", area: "hampstead" },
      { service: "painting-decorating", area: "belsize-park" },
      { service: "painting-decorating", area: "muswell-hill" },
    ],
    relatedGuides: ["painting-original-sash-windows", "order-of-works-flat-refurbishment"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "painting-original-sash-windows",
    title: "Original sash windows: decorating them as joinery",
    primaryQuery: "painting original sash windows",
    metaTitle: "Painting Original Sash Windows | HPSG",
    metaDescription:
      "Cords, beads, putty and paint build: why an original sash is surveyed as joinery rather than cut in with the walls. 020 7101 3168.",
    lede:
      "A sash window that sticks, rattles or will not stay up has a joinery problem, and no amount of paint is the answer to it.",
    sections: [
      {
        heading: "What a sash actually is",
        paragraphs: [
          "A box sash is a mechanism: two sliding sashes hung on cords over pulleys, counterbalanced by weights inside the boxes at each side, running against parting beads and held in by staff beads. Glass is bedded in putty. Every one of those parts wears.",
          "Decorating a sash therefore means deciding what is a paint item and what is not. Cords, beads, pulleys, putty and easing are repairs; they are surveyed and priced as such rather than absorbed into a decorating rate and then skipped.",
        ],
      },
      {
        heading: "Paint build, and why windows stick",
        paragraphs: [
          "The most common cause of a sash that will not move is decades of paint bridging the gap between the sash and the bead. Painting over it again makes it worse. The work is to cut the seal, remove enough build to restore clearance, and ease the sash so it runs before it is finished.",
          "That is also why a properly decorated sash takes longer than the wall it sits in. Preparation is the job; the finish coats are the short part at the end.",
        ],
      },
      {
        heading: "Putty, glass and the parts that fail quietly",
        paragraphs: [
          "Failed putty lets water sit against the timber in the bottom rail, which is where sash windows rot first. Localised putty replacement and repair to a sound rail is ordinary work. A bottom rail that has gone soft through is a joinery repair, and we will say so rather than filling it and painting over.",
          "Cords are consumable. If one has broken, the others are the same age, and replacing all of them while the sash is out is cheaper than doing it four times over four years.",
        ],
      },
      {
        heading: "Conservation, listing and colour",
        paragraphs: [
          "Original windows are frequently the feature an Article 4 direction exists to protect, and on a listed building they are usually part of what is listed. That governs replacement rather than redecoration, but it also means external colour can be controlled, particularly on a terrace that reads as a single composition.",
          "We check the designation on the address before quoting external work, and we do not assume a permitted-development right that may have been removed. [VERIFY the conservation area, any Article 4 and the listing entry.]",
        ],
      },
      {
        heading: "Working around occupied rooms",
        paragraphs: [
          "Sash work means an open window for part of a day and a room that cannot be fully closed up while a sash is out. In an occupied house that is sequenced room by room, weather permitting, so the property is never comprehensively open.",
          "Where windows are in scope alongside internal decoration, windows go first: they are the messiest and the most weather-dependent part of the programme.",
        ],
      },
    ],
    faqs: [
      {
        q: "Our sashes are painted shut. Can they be freed without damage?",
        a: "Usually. The seal is cut carefully and paint build removed from the running surfaces, then the sash is eased until it moves properly. Where a sash has been screwed or nailed shut — common where a cord broke years ago — that is repaired rather than forced. Occasionally a sash has been overpainted so heavily that stripping is the only honest route, and we would say so before starting.",
      },
      {
        q: "Is it worth redecorating windows separately from the rest of the house?",
        a: "External joinery is on a different cycle from internal decoration, so yes, quite often. Windows weather and want attention sooner; interiors are usually driven by how the rooms look. Where both are in scope they are sequenced together, but there is no reason to defer window maintenance until an interior needs doing.",
      },
    ],
    relatedServices: ["painting-decorating", "light-refurbishment"],
    relatedCombos: [
      { service: "painting-decorating", area: "highgate" },
      { service: "painting-decorating", area: "crouch-end" },
      { service: "painting-decorating", area: "queens-park" },
    ],
    relatedGuides: ["decorating-period-plaster", "conservation-area-renovation-consent"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "living-through-a-renovation",
    title: "Living through a renovation: occupied-home sequencing",
    primaryQuery: "can you live in a house during renovation",
    metaTitle: "Living in the Property During Renovation | HPSG",
    metaDescription:
      "When staying put works, when decanting is cleaner, and what occupied sequencing actually means day to day. 020 7101 3168.",
    lede:
      "Most people can stay for a single room. Very few enjoy staying for a whole flat.",
    sections: [
      {
        heading: "The honest dividing line",
        paragraphs: [
          "A single kitchen or a single bathroom can usually be worked around you, provided there is an alternative for the room being replaced — a second WC, or somewhere to make tea that is not the building site. A whole-flat programme with one bathroom is a different proposition, and in that case decanting is usually both faster and cheaper than it looks.",
          "The reason is sequence. Occupied working means the site is set up and broken down around your day, dust separation has to hold continuously rather than just while the trade is in the room, and some tasks cannot run in parallel. That adds time, and time is the thing an occupied programme is short of.",
        ],
      },
      {
        heading: "What occupied working actually involves",
        paragraphs: [
          "In practice: dust screens at room thresholds and, where possible, negative pressure in the work area; protected routes from the front door to the room; a daily tidy-down rather than a weekly one; and noisy work banded into agreed hours, particularly in a converted house or a mansion block where the neighbours have been told what to expect.",
          "It also involves agreeing what stays usable. Typically that is a bedroom, a bathroom and somewhere to eat, and the programme is written so those three are not compromised at the same moment.",
        ],
      },
      {
        heading: "The pinch points",
        paragraphs: [
          "Water and power. Isolating either affects the whole flat rather than one room, so those interruptions are scheduled and told in advance rather than discovered. In a shared building, isolating a riser can affect neighbours, which brings the freeholder or the porter into the conversation.",
          "Dust from cutting and chasing is the other. It is the reason first fix and any breaking-out are concentrated rather than spread across the programme, and the reason decoration comes last.",
        ],
      },
      {
        heading: "Deciding it at survey",
        paragraphs: [
          "We will say which way the balance falls once we have seen the property and the plan, and we would rather say it plainly than let a client discover a month in that they should have moved out.",
          "Where decanting is right but not possible, the answer is not to pretend otherwise; it is to write a longer, more heavily sequenced programme and price it as such.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we keep working from home during the work?",
        a: "For decoration and much of a single-room refit, often yes, if the work is at the other end of the flat. For strip-out, first fix and any breaking-out, no — that is genuinely loud, and no amount of planning changes it. Those days are identified in the programme so you can arrange to be elsewhere rather than finding out on the morning.",
      },
      {
        q: "How do you keep dust out of the rest of the flat?",
        a: "Screened thresholds, protected floors along the route in and out, dust extraction at the tool where the tool takes it, and a tidy-down at the end of each day rather than at the end of the week. It is not perfect — no occupied site is — but the difference between a managed site and an unmanaged one is the entire experience of living through it.",
      },
    ],
    relatedServices: ["light-refurbishment", "bathroom-renovation"],
    relatedCombos: [
      { service: "light-refurbishment", area: "west-hampstead" },
      { service: "kitchen-renovation", area: "golders-green" },
      { service: "painting-decorating", area: "muswell-hill" },
    ],
    relatedGuides: ["order-of-works-flat-refurbishment", "kitchen-bathroom-renovation-cost-factors"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "order-of-works-flat-refurbishment",
    title: "The order of works in a light refurbishment",
    primaryQuery: "what order to renovate a flat",
    metaTitle: "Order of Works for a Flat Refurbishment | HPSG",
    metaDescription:
      "Strip-out, first fix, wet rooms, floors, decoration: why sequence is the product in a whole-flat refurbishment, and where the waits sit. 020 7101 3168.",
    lede:
      "In a whole-flat programme the sequence is the thing you are buying. Everything else is materials and labour.",
    sections: [
      {
        heading: "The sequence, and why it is that way round",
        paragraphs: [
          "Strip-out first, then first fix — the plumbing, electrics and extract that live inside walls and floors. Wet rooms are formed, waterproofed and tested next, because they are the elements most expensive to revisit. Then floors, then second fix, and decoration last.",
          "Decoration goes last for a plain reason: every trade that follows a decorator damages what the decorator did. A programme that paints early to make the flat feel finished is buying a fortnight of morale at the cost of a fortnight of making good.",
        ],
      },
      {
        heading: "Where the waits actually are",
        paragraphs: [
          "Two of them, and both belong in the lead-in rather than the middle. The first is consent: a licence to alter in a leasehold flat is outside anyone's control, and a flat stripped out while a letter is awaited is the worst outcome in this whole subject.",
          "The second is long-lead materials — cabinetry, stone, sanitaryware, sometimes tiles. Ordering happens once dimensions are confirmed on site, and the strip-out date is set against confirmed delivery dates rather than hope. There are also drying times that cannot be compressed: screeds, plaster and waterproofing systems all want their time.",
        ],
      },
      {
        heading: "Provisional items and what they are for",
        paragraphs: [
          "In a period building, some of the work cannot be scoped until the floors are up and the walls are open. Rather than pretend otherwise, those items are listed as provisional with an allowance: a length of failed waste, a subfloor that will not take a finish, wiring that serves something not on any drawing.",
          "They are confirmed or released once the position is known, and any change is written rather than agreed verbally in a corridor. A proposal with no provisional items in this housing stock is usually a proposal that has not looked.",
        ],
      },
      {
        heading: "Where this service stops",
        paragraphs: [
          "Light refurbishment covers kitchens, bathrooms, decoration, flooring and joinery within the existing rooms. It does not cover forming or widening structural openings, dropping a floor, or adding a storey. That work sits with Hampstead Renovations, and we would rather name the boundary once, clearly, than blur it.",
          "The practical consequence is that the plan you start with is the plan you finish with. Where a brief genuinely needs walls to move, it is a different kind of project and should be scoped as one from the beginning.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can decoration start in finished rooms while other rooms are still in first fix?",
        a: "Sometimes, in a large flat where the areas are genuinely separated and the route in and out does not pass through finished space. In a typical conversion flat it is a false economy: the traffic, dust and the inevitable return visit to a first-fix detail undo it. We will say where the flat allows it.",
      },
      {
        q: "What happens if something unexpected is found once the floors are up?",
        a: "It is recorded while the area is open, priced as a written variation against the agreed scope, and put to you before anything is done about it. Where it was anticipated as a provisional item, the allowance is confirmed or adjusted against what is actually there. Nothing gets absorbed silently in either direction.",
      },
    ],
    relatedServices: ["light-refurbishment", "painting-decorating"],
    relatedCombos: [
      { service: "light-refurbishment", area: "kentish-town" },
      { service: "light-refurbishment", area: "swiss-cottage" },
      { service: "bathroom-renovation", area: "kilburn" },
    ],
    relatedGuides: ["living-through-a-renovation", "kitchen-bathroom-renovation-cost-factors"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },

  {
    slug: "hampstead-garden-suburb-internal-works",
    title: "Hampstead Garden Suburb: internal work under the Trust",
    primaryQuery: "Hampstead Garden Suburb Trust alterations",
    metaTitle: "Internal Work in Hampstead Garden Suburb | HPSG",
    metaDescription:
      "A double regime: Barnet's conservation area and Article 4 alongside the Trust's Scheme of Management. What that means for a kitchen or bathroom. 020 7101 3168.",
    lede:
      "The Suburb is one of the few places in London where two separate consent regimes apply to the same house at the same time.",
    sections: [
      {
        heading: "Two regimes, not one",
        paragraphs: [
          "The first is the ordinary planning one: the Suburb is a conservation area designated by Barnet in 1968, with an Article 4 direction removing permitted-development rights that would otherwise allow changes to windows, doors and elevations. [VERIFY the designation date and the current extent of the Article 4.]",
          "The second is the Hampstead Garden Suburb Trust's Scheme of Management, a private arrangement running with the properties and administered separately from the council. It concerns the appearance and upkeep of houses and their gardens, and it applies whether or not the council is interested in a particular change. [VERIFY which properties are within the Scheme.]",
          "They overlap but are not the same, and consent from one is not consent from the other. That is the single most useful thing to understand before planning work here.",
        ],
      },
      {
        heading: "What internal work usually does and does not touch",
        paragraphs: [
          "Replacing a kitchen or a bathroom inside an existing room, on existing services, generally sits outside both regimes. Neither the council's conservation interest nor the Trust's remit is engaged by cabinetry, tiling or decoration that cannot be seen from outside.",
          "What does engage them is anything breaking the envelope. A new extract grille, a replacement window, an external door, a flue, a change to external paint colour, or work to boundary treatment and front gardens are all capable of needing consent — sometimes from both.",
        ],
      },
      {
        heading: "The houses themselves",
        paragraphs: [
          "The Suburb's Arts and Crafts stock has its own habits: leaded casements rather than sashes in much of it, generous but awkwardly proportioned service rooms, and kitchens that were planned for a different domestic arrangement. Room proportions are frequently better than the plan implies once the layout is reconsidered.",
          "Original joinery and plasterwork are typically intact and worth keeping, which pushes the work toward careful scribing and repair rather than stripping back to a shell.",
        ],
      },
      {
        heading: "Access on the closes and greens",
        paragraphs: [
          "The Suburb was planned around closes, greens and narrow service approaches rather than around vans. Some houses are approached across communal green space; some have no practical standing at all near the front door.",
          "That affects skip placement, scaffolding and delivery of anything large, and it is recorded at survey along with the room. Barnet licenses skips and scaffolding, and communal land may bring the Trust into the conversation as well. [VERIFY the arrangement for the specific address.]",
        ],
      },
    ],
    faqs: [
      {
        q: "Do we need Trust consent for a new kitchen?",
        a: "For the kitchen itself, generally not — the Scheme of Management is concerned with the appearance and upkeep of the property rather than with your cabinets. If the work involves an extract terminal, a window, or anything else visible externally, it very likely does. Ask early: the answer costs a letter, and assuming wrongly costs considerably more. [VERIFY with the Trust for the address.]",
      },
      {
        q: "Can original leaded casements be replaced with double glazing?",
        a: "That is exactly the kind of change both regimes exist to control, and it is not something to plan around an assumption. It is a question for Barnet and, where the Scheme applies, the Trust — before anything is ordered. Repair and draught-proofing of existing casements is a different and much less contentious proposition.",
      },
    ],
    relatedServices: ["kitchen-renovation", "light-refurbishment"],
    relatedCombos: [
      { service: "kitchen-renovation", area: "hampstead-garden-suburb" },
      { service: "painting-decorating", area: "hampstead-garden-suburb" },
      { service: "light-refurbishment", area: "hampstead-garden-suburb" },
    ],
    relatedGuides: ["conservation-area-renovation-consent", "extract-ventilation-period-flats"],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
  },
];

/** Guides that reference a given service hub. */
export function guidesForService(service: ServiceSlug): Guide[] {
  return guides.filter((guide) => guide.relatedServices.includes(service));
}

/** Guides that reference a given service-in-area page. */
export function guidesForCombo(service: ServiceSlug, areaSlug: string): Guide[] {
  return guides.filter((guide) =>
    guide.relatedCombos.some((item) => item.service === service && item.area === areaSlug),
  );
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

// Build-time invariants: guides exist to route readers into the commercial
// pages, so a guide that links nowhere is a bug rather than a style choice.
const seenSlugs = new Set<string>();
const tier1 = new Set(areas.filter((area) => area.tier === 1).map((area) => area.slug));
for (const guide of guides) {
  if (seenSlugs.has(guide.slug)) throw new Error(`Duplicate guide slug: ${guide.slug}`);
  seenSlugs.add(guide.slug);
  if (guide.relatedServices.length < 2) {
    throw new Error(`Guide ${guide.slug} links to fewer than 2 services`);
  }
  for (const service of guide.relatedServices) {
    if (!SERVICE_SLUGS.includes(service)) {
      throw new Error(`Guide ${guide.slug} references unknown service ${service}`);
    }
  }
  if (guide.relatedCombos.length < 3) {
    throw new Error(`Guide ${guide.slug} links to fewer than 3 local pages`);
  }
  for (const combo of guide.relatedCombos) {
    if (!tier1.has(combo.area)) {
      throw new Error(`Guide ${guide.slug} references non-Tier-1 area ${combo.area}`);
    }
  }
}
for (const guide of guides) {
  for (const related of guide.relatedGuides) {
    if (!seenSlugs.has(related)) {
      throw new Error(`Guide ${guide.slug} references unknown guide ${related}`);
    }
  }
}
