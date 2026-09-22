import type { ComboPitfallsMap } from "./combo-extra";

/**
 * Bathroom renovation: failure modes and a further question set, per area.
 * A bathroom fails quietly and expensively, so these blocks stay on the
 * things that actually cause it in each kind of building.
 */
export const bathroomPitfalls: ComboPitfallsMap = {
  hampstead: {
    pitfalls: [
      "The failure that costs most in a village conversion is tiling onto a floor that moves. A timber deck with noticeable deflection will crack tile and grout at the perimeter within the first year, and once the cracks open, water reaches the structure and the household below. No adhesive or membrane compensates for movement. The deck is assessed at survey and stiffened before anything is laid, and that item is the one most often missing from a cheap quotation.",
      "The second is a wet zone defined too narrowly. Tanking only the panel behind the mixer looks like economy until water finds the junction at the tray, the waste penetration or an internal corner, and by then the failure is behind finished tile. The whole floor and a generously drawn wet zone are tanked as a documented system from one manufacturer, and the membrane is photographed before it disappears.",
      "The third is a fan that ventilates nothing. Internal bathrooms in this stock are frequently found, on strip-out, to have been extracting into a ceiling void or a redundant duct for years, which is why the room has always felt damp. A fan is only ventilation if it has a real route to a real terminal, and in a conservation-area house that route has to be established before the room is stripped rather than improvised after.",
    ],
    moreFaqs: [
      {
        q: "How do we know the tanking was actually done properly?",
        a: "Because you are shown it. The membrane is photographed at every stage before tile covers it — corners, junctions, the tray upstand and each waste penetration — and you receive that record with the system details at handover. It is the only way anyone will ever see the waterproofing again, and it matters both for your own confidence and for any future conversation with a household below.",
      },
      {
        q: "Can the bathroom be made larger by moving a wall?",
        a: "Not under this service. Moving or removing a wall is structural work and sits with Hampstead Renovations, and in a listed or conservation-area village house it is a consent question as well. What we can do inside the existing room is often more than people expect: a wall-hung basin, a reconfigured layout and a better door swing can transform a small bathroom without touching the structure.",
      },
      {
        q: "Is underfloor heating worth it in a period bathroom?",
        a: "Often, and the constraint is depth rather than cost. An electric mat needs to sit above the tanking with insulation beneath it to be worth running, and the resulting build-up still has to clear the door. In a village conversion the available depth is frequently marginal, so we measure at the survey and say plainly whether it works or whether it would leave you with a threshold you catch your foot on.",
      },
      {
        q: "How long before the new bathroom can be used properly?",
        a: "Usable at handover, fully cured a little later. Grout and silicone need time before the room takes heavy use, and we advise against a long hot shower on the first evening for that reason. The longer waits are inside the programme rather than after it: the tanking cure before tiling is fixed by the manufacturer and compressing it is how a defect gets built in.",
      },
    ],
  },

  "west-hampstead": {
    pitfalls: [
      "A half-landing bathroom fails at the junction between the bath or tray and the floor. The deck flexes a few hundred times a week, the silicone line at that junction opens, and water tracks into a floor sitting directly above another household. It is a small failure with a large consequence in a converted house. The deck is stiffened before tiling and that junction is detailed as part of the tanking system rather than sealed at the end.",
      "The second is specifying a shower against a supply nobody measured. Upper-floor conversion flats frequently have the weakest flow in the building, and a large rainfall head chosen from a brochure will underperform from the first morning. Flow and pressure are measured at the outlet during the survey, and where the supply will not drive what you want, we say so while the fitting can still be changed.",
      "The third is an item that cannot make the half-landing turn. A cast bath, a one-piece stone tray or a pallet of large-format tile defeats a shared Victorian stair more often than people expect, and it happens once the old bathroom is already out. Measuring the route against the actual items before ordering is a few minutes at the survey and prevents the whole problem.",
    ],
    moreFaqs: [
      {
        q: "Can we have a bath and a separate shower in a half-landing room?",
        a: "Rarely, and it is better to hear that at the survey than after a drawing. These rooms are compact, the stack position fixes where wastes can go, and fitting both usually means neither works properly. A generously sized shower over a bath, or a well-designed shower enclosure in place of the bath, will serve the room better. We would rather say so than draw something that makes the room worse.",
      },
      {
        q: "What happens if water gets into the flat below during the work?",
        a: "It should not, because the supply is isolated for the duration of the wet work and the room is tested under controlled conditions before it is handed over. If something does go wrong, we deal with it directly with the household below rather than leaving you to. Hampstead Property Services Group Limited is fully insured, and the protection and method are written down before anything starts. [INSURANCE_TBC]",
      },
      {
        q: "Do you need to turn off the water for the whole house?",
        a: "Sometimes briefly, and in a converted house that affects the other flats, which is why it is planned rather than sprung. We establish at the survey where the isolations are, who they serve and who can operate them, and any isolation affecting another household is notified in advance with a time window. It is a short interruption when it is arranged and a genuine grievance when it is not.",
      },
      {
        q: "Can the bathroom stay usable while the work runs?",
        a: "Partly, for a while, and then not at all. The room is kept in service until the strip-out morning and returns at second fix, but between those points it is a building site with the floor open. What we can do is concentrate the fully unusable days rather than spreading them across a month, and we give you that number after measuring rather than a vague range.",
      },
    ],
  },

  "belsize-park": {
    pitfalls: [
      "An inserted bathroom fails at its partitions. Where a room was taken out of a bedroom by a previous owner, the walls are often lighter than they look, and a wall-hung basin or a concealed cistern hung on optimism rather than a proper frame will work loose within a couple of years. The construction is established at strip-out and a frame is built for what is actually there rather than for what the drawing assumed.",
      "The second is tiling a tall room to full height without drawing the top. A tile dying into a moulded cornice is the detail that makes an otherwise expensive bathroom look careless, and once it is set there is no retrieving it. The junction is drawn at full size before anything is ordered, and in most Belsize rooms a properly detailed wet zone with a painted finish above is both better looking and considerably cheaper.",
      "The third is ordering against an ungranted consent. On the avenues, a managing agent's alteration pack runs to the building's timetable, and sanitaryware delivered into a flat that has not been cleared to start is stock standing in a hall while a porter takes a view. Nothing is ordered here until the licence is in hand, and we would rather hold a date than lose a month.",
    ],
    moreFaqs: [
      {
        q: "Our bathroom is an inserted room with no window. What can be done about it?",
        a: "Ventilation, properly, and light by design rather than by opening. A correctly sized fan with a real duct to a real terminal and a run-on timer makes more difference than anything else, and it is the thing most often found to have been missing. Beyond that: a pale scheme, a mirror placed to bounce whatever borrowed light exists, and lighting specified as part of the room rather than left to a single ceiling fitting.",
      },
      {
        q: "Can we keep the original cornice if we are retiling?",
        a: "Usually, and we would encourage it. The wet zone is stopped cleanly below the cornice with a considered transition, and the cornice itself is protected during the work and made good afterwards. Where a previous fit-out has already cut into it, we will say honestly whether it can be repaired convincingly. Losing an original cornice to a tile line is not a trade most clients would make knowingly.",
      },
      {
        q: "Will the flat below be affected?",
        a: "They will hear the floor work, which is a matter of days rather than the whole programme, and they sit under everything you install. That is why we specify acoustic isolation under the tile and detail the waste penetration carefully: it reduces what they hear permanently, and it cannot be added later without lifting the floor. They are told the noisy dates in advance rather than discovering them.",
      },
      {
        q: "Do we need consent just to replace a bathroom?",
        a: "In a leasehold flat, more often than for a kitchen. Leases commonly treat anything touching a waste, a supply or a common void as an alteration, and in a stacked block your bathroom is attached to a system serving other flats. Holding a share of the freehold makes you one of the consenting parties rather than an exception. We prepare the drawings and method statement; the consent is the freeholder's. [VERIFY the lease.]",
      },
    ],
  },

  "st-johns-wood": {
    pitfalls: [
      "The NW8 failure that stops a job is designing something the licence will not permit. Many packs here restrict moving a waste at all and set out how a floor may be penetrated, so a layout drawn without reading them produces an application that comes back refused rather than merely queried. The pack is read before anything is drawn, and what we present is a bathroom the building will actually consent to.",
      "The second is omitting acoustic isolation because it is invisible. A hard-tiled bathroom over a neighbour's bedroom in a managed block generates a complaint that arrives at the managing agent, and the remedy means lifting a floor that was finished a month earlier. Matting, perimeter isolation and careful detailing at the penetration are cheap at specification and effectively impossible to retrofit.",
      "The third is a delivery the building will not admit. Passenger lifts in these blocks are lined and protected, and many agents will not allow a cast bath or a pallet of tile into them regardless of whether the item fits. Establishing that at the survey means the bath goes up a protected stair as a planned operation rather than standing in a lobby while somebody makes a telephone call.",
    ],
    moreFaqs: [
      {
        q: "Can two bathrooms be refurbished in one visit?",
        a: "Yes, and in a flat with more than one it is usually the sensible approach. They share a licence application, a protection set-up, a first fix and a delivery plan, which makes them considerably cheaper together than a year apart. We sequence them so one wet room stays in service throughout, and the flat ends up with a consistent standard rather than two bathrooms from different decades.",
      },
      {
        q: "What if the licence application is refused?",
        a: "Then we redesign to what the building will accept rather than argue with it. Refusals here almost always concern moving a waste or penetrating a floor, and in most cases a layout can be achieved on the existing connections that serves you nearly as well. We would rather establish the constraints before drawing, which is why the pack is read first and refusals are uncommon on the schemes we present.",
      },
      {
        q: "Do the neighbours need to be told?",
        a: "The building tells them or we do, depending on the agent's practice, and either way they should know. In a stacked block the flats above and below are attached to the same system, and a planned isolation or a noisy day is much better notified than discovered. We give the porter the programme so that questions come to us rather than arriving at your door.",
      },
      {
        q: "Can the work happen while we are away?",
        a: "Frequently, and it is a good arrangement if the building and the licence allow it. We would agree key-holding and access formally with you and the managing agent rather than informally, keep you updated at agreed points, and hold any decision that genuinely needs you until you are back. Nothing that changes the specification is decided in your absence without your agreement.",
      },
    ],
  },

  "maida-vale": {
    pitfalls: [
      "The W9 failure most likely to reach a managing agent is a bathroom installed without acoustic thought above a timber floor. These blocks transmit impact noise efficiently, and a hard-tiled room over a neighbour's living space will be heard. The isolation has to be under the tile, at the perimeter and at the penetration, which means it is specified before the order or not at all — lifting a finished floor to add it is not a real option.",
      "The second is a level-access shower drawn against a depth that does not exist. A level entry needs room for fall, a waste and a trap below the finished surface, and a shallow timber build-up frequently will not give it. Raising the floor to create it collides with the door. The depth is measured at the survey so the answer — level entry, low-profile tray, or a stepped threshold — is settled before a drawing rather than after.",
      "The third is a heavy item ordered without measuring the stair. Lifts here are small and often barred to goods, so a cast bath or a one-piece stone tray has to negotiate three flights and their half-landing turns. It defeats more deliveries in this neighbourhood than anything else, and by the time it happens the old bathroom is out and the room is waiting.",
    ],
    moreFaqs: [
      {
        q: "Can the original bathroom position be kept but the layout improved?",
        a: "Usually, and it is often the best answer here. Staying on the existing connections avoids a consent you would otherwise need and keeps the drainage reliable, while the layout inside the room can change considerably: a wall-hung basin, a different bath position, a proper shower enclosure, and storage where there was none. We draw what the fixed points allow rather than starting from a blank rectangle.",
      },
      {
        q: "The pipework looks very old. Will it all need replacing?",
        a: "Within your demise, whatever is not fit to build onto — and in buildings from the 1890s to the 1910s that is a genuine question. You will typically find original stacks with modern branches, or the reverse. We inspect what we can reach at the survey and list the rest as provisional items. Finding a section that needs renewing at first fix is ordinary and far better than finding it in five years.",
      },
      {
        q: "How long will we be without the bathroom?",
        a: "A defined number of days given after measuring rather than a range. The sequence is fixed — strip-out, floor, first fix, tanking with its stated cure, tiling, grout, second fix, water test — and the cure and grout times cannot be compressed without building in a defect. In a flat with a second wet room it barely matters; where yours is the only one, we concentrate those days.",
      },
      {
        q: "Is there anything the porter needs from us?",
        a: "Usually notice, sometimes a copy of the licence, and occasionally a deposit or an agreed protection standard. We collect all of it at the survey and deal with the porter directly for the duration so you are not fielding questions. What helps most from you is simply letting the building know early that work is planned, because lead times on approvals in these blocks are longer than people expect.",
      },
    ],
  },

  "swiss-cottage": {
    pitfalls: [
      "The mistake particular to this neighbourhood is choosing a tile format for the wrong building. Large-format porcelain with narrow joints looks superb in an inter-war block where the walls are true, and produces visible tapers or a great deal of preparation on a settled Victorian wall a street away. The building type is established at the survey and the format chosen to suit it rather than from a photograph.",
      "The second is assuming the riser is open. In the purpose-built blocks a planned duct makes a bathroom straightforward, but some managing agents keep risers closed to new services, and discovering that after a layout has been drawn means redesigning around a waste that has to cross a floor. It is a written question to the agent at the survey, not an optimistic assumption on site.",
      "The third, above a commercial unit, is underestimating how hard a future leak would be to reach. Access to a ceiling below a shop may be impossible during trading hours, so a wet room there deserves more careful detailing and a considered inspection provision than the same room above another flat. That is a survey finding that changes the specification, and it is worth the small extra at the outset.",
    ],
    moreFaqs: [
      {
        q: "Can you match a bathroom to one you fitted elsewhere in the building?",
        a: "Where the products are still available and the room will take the same layout, yes, and the references are the reason we record them. Sanitaryware ranges change every few years, so an exact match is not always possible and we would say so rather than supply a near miss. What can usually be matched is the standard: the same tanking system, the same detailing and the same approach.",
      },
      {
        q: "How quickly can you get to us if something fails later?",
        a: "Quickly, and being at 250 Finchley Road in this neighbourhood is the practical reason. With a bathroom that matters more than with most work, because a small leak above another flat or a business becomes somebody else's problem within hours rather than weeks. Telephone 020 7101 3168 or write to office@hpsg.co.uk and we will come and look rather than asking you to describe it.",
      },
      {
        q: "Is a wet room realistic in a 1930s block?",
        a: "More often than in a Victorian conversion, because the floor build-up is frequently better, but it is still a measurement rather than an assumption. A level entry needs depth for fall, a waste and a trap, and the finished floor still has to clear the door. We measure at the survey and give a straight answer. Where it works, these rooms take a wet room well.",
      },
      {
        q: "Will the work disturb the shop below us?",
        a: "Some of it will be audible, and the answer is to plan around their trading rather than apologise afterwards. Strip-out, floor work and tile cutting are the loud operations and they are named as dates. In some cases a business below prefers early starts and quiet afternoons, which can suit both parties. We establish their position at the survey rather than discovering it through a complaint.",
      },
    ],
  },

  "primrose-hill": {
    pitfalls: [
      "Tanking a shower in a room where moisture is coming through the wall is the failure that wastes the most money here. The two problems are separate: a membrane stops water from the shower reaching the structure, and does nothing about water arriving from the ground. Covering one with the other hides it for a year or two and then costs twice. Moisture is investigated at the survey and reported plainly before anything is specified.",
      "The second is a waste run laid at whatever gradient was convenient. In a split house the bathroom can be a long way from the drainage the building uses, and a run that loses its fall halfway behaves acceptably in summer and reveals itself in winter. The gradient is measured before design, and sanitaryware positions follow from it rather than from a layout drawn first.",
      "The third is extract from below ground terminating somewhere it should not. A duct discharging into a light well recirculates its own air, and one discharging into a void does nothing at all. In a conservation area with an Article 4 direction the acceptable positions are limited, so the route is worked out at the survey and, where none exists, we say so rather than fitting and hoping.",
    ],
    moreFaqs: [
      {
        q: "Can a shower room be added to a lower-ground flat?",
        a: "Often, and the three questions are drainage, ventilation and whether the structure is dry. The waste needs fall to reach the drainage the building uses, the extract needs a real route to an acceptable terminal, and any moisture in the walls has to be dealt with before anything is tanked over it. We answer all three at the survey rather than designing first and discovering later.",
      },
      {
        q: "Will a pumped waste be noisy?",
        a: "Noticeably, yes, which is why we would rather move a fitting to where gravity works. A pump is a legitimate answer where there is genuinely no fall available, and it brings power, sound and a servicing requirement with it. Where one is the only option we specify it openly, explain what it will sound like and what it will need, and position it as thoughtfully as the room allows.",
      },
      {
        q: "Can the work avoid weekends?",
        a: "Yes, and near the park we prefer it. Weekend traffic makes deliveries unreliable, residents' parking is already scarce and noisy work into a neighbouring terrace on a Saturday costs goodwill worth more than the day. We add time midweek instead. Heavy deliveries — a bath, a tray, a pallet of tile — are booked midweek for the same reason.",
      },
      {
        q: "Do we need the freeholder's permission in a split house?",
        a: "For anything touching the drainage, the stack or a shared extract route, usually yes, because in a split house those are rarely yours alone. Your lease governs what may be altered within your demise and the freeholder consents to the rest, which where the flats hold the freehold between them means your neighbours. We prepare the drawings and method statement. [VERIFY the lease.]",
      },
    ],
  },

  highgate: {
    pitfalls: [
      "Tiling a springy floor is the failure that recurs most in these houses. A timber deck with noticeable deflection will crack tile and grout, usually at the perimeter and usually within the first year, and no membrane or adhesive compensates. Joist size, span and condition are established at the survey and the deck is stiffened or overboarded before anything is laid. It is the item most commonly left out of a cheap bathroom quotation.",
      "The second is an ensuite added where the drainage will not reach. Bathrooms added to bedrooms in Highgate villas are frequently a long way from the stack, and a run laid at whatever fall was available drains poorly from the start. The gradient decides whether the room works by gravity at all, and that is measured before a layout rather than discovered when it will not clear.",
      "The third is disturbing listed fabric because it was the convenient wall. Chasing into historic plaster, fixing into original panelling or cutting a terminal through protected material turns a bathroom into an enforcement matter. The listing is checked on the address, what is original in and around the room is identified, and the work is fitted within the fabric rather than into it.",
    ],
    moreFaqs: [
      {
        q: "Can we add an ensuite to a bedroom?",
        a: "Often, and the question is drainage rather than floor area. The run to the stack in a Highgate villa can be long, and the fall available over that distance decides whether it works by gravity. We measure it at the survey and give a straight answer. Where gravity will not do it, a pumped solution is possible with power, noise and servicing attached, and we would rather you chose that knowingly.",
      },
      {
        q: "Will a skip on a steep road be a problem?",
        a: "It needs a position chosen for safe loading rather than for proximity, which sometimes means a longer carry. On some of these streets the gradient and the limited turning make the nearest kerb the wrong one. We agree the position at the survey with whichever borough holds the frontage, and the strip-out day is booked to it rather than hoping one becomes available. [VERIFY the authority.]",
      },
      {
        q: "Can original floorboards outside the bathroom be protected?",
        a: "Yes, and in these houses they should be. The route from the door carries every heavy item, and a board floor damaged by a trolley is difficult to repair convincingly. It is boarded and covered for the duration, photographed before we start and checked with you at handover. Where the boards inside the bathroom are original, we say honestly whether they can survive a wet room build-up.",
      },
      {
        q: "Does the exposure up here affect the bathroom?",
        a: "Indirectly, through condensation rather than weather. A room on an exposed elevation with a cold external wall will show the limits of poor ventilation more quickly than a sheltered one, which is another reason the extract route matters here. We size the fan for the room and the duct length rather than fitting a standard unit, and we specify a run-on timer as a matter of course.",
      },
    ],
  },

  "golders-green": {
    pitfalls: [
      "The failure that repeats in these houses is a tiled floor cracking along a straight line. It happens where a bathroom spans the junction between the original house and a rear addition built decades later: the two halves sit at slightly different levels and move differently, and a tile laid across that line without a movement joint and a decoupling membrane will split. It is entirely predictable and entirely avoidable at the preparation stage.",
      "The second is asking a supply plumbed for one bathroom to serve three. Adding an ensuite or a second shower to a house that was never designed for simultaneous demand produces two showers that both disappoint, and the cause is the supply rather than the fittings. Flow and pressure are measured at the survey and we say what the system will actually support before anything is specified.",
      "The third is sequencing that leaves a family with no bathroom. With two or three wet rooms in scope, doing them in the wrong order — or simultaneously, to save time — means the household has nowhere to wash for a fortnight. The order is agreed before anything is ordered, so one room is always in service, and that sequence is the programme rather than a scheduling afterthought.",
    ],
    moreFaqs: [
      {
        q: "Can all the bathrooms be given the same specification?",
        a: "Yes, and in a house with three it is worth doing. The same tanking system, compatible brassware and matched sanitaryware references mean that servicing in ten years is one conversation rather than three, and the house reads as considered rather than as a set of rooms done in different decades. It also costs less than specifying them individually, because the ordering and the trades overlap.",
      },
      {
        q: "Our ensuite has always drained slowly. Can you fix it?",
        a: "Usually, and the cause is nearly always fall rather than a blockage. Ensuites added later in these houses are often a long way from the stack with a waste laid at whatever gradient was available at the time. We survey the run, establish what fall actually exists, and say whether it can be re-made properly, whether a fitting needs to move, or whether a pump is the realistic answer.",
      },
      {
        q: "Is there room for a freestanding bath?",
        a: "In many of these bathrooms, yes, and it is one of the genuine advantages of the stock. The considerations are the floor's capacity to carry it with water and an occupant in it, the waste position, and leaving enough circulation to clean around it. We check the joists at the survey rather than assuming, because a freestanding bath is a concentrated load on a timber floor.",
      },
      {
        q: "Do you deal with the old sanitaryware?",
        a: "Yes, and it is in the proposal. Old suites, broken tile and wet plaster are heavy and sharp, so they are bagged or wrapped at the room and carried out on a protected route rather than dragged through the house. Where the skip stands on your own drive, that happens continuously; where it needs a street position, Barnet's licence is arranged and the strip-out is paced to it.",
      },
    ],
  },

  "queens-park": {
    pitfalls: [
      "In a small bathroom the failure is nearly always the frame, or the absence of one. Where a room was inserted into a bedroom corner or a rear addition, the partitions are lighter than they look, and a wall-hung basin or a concealed cistern fixed to them without a proper supporting frame will work loose. The construction is established at strip-out and a frame is built for what is actually there rather than for what was assumed.",
      "The second is a bath that will not reach the room. A narrow front gate, a decorative tiled path that will not take a loaded trolley, a Victorian front door and a turn into the hall defeat a cast bath more reliably than anything else here. Measuring the route against the actual item before ordering costs nothing; discovering it with a bath on the pavement and the old one already out costs a week.",
      "The third is damage to the path itself. These encaustic and quarry-tiled paths chip under point loads rather than footfall, and a broken original tile is difficult to match and rarely convincing once replaced. Boarding the route before anything crosses it, and carrying rather than wheeling, prevents the problem entirely. It is one of the few things in this work that cannot be put right afterwards.",
    ],
    moreFaqs: [
      {
        q: "Can a small bathroom take a proper shower?",
        a: "Usually, and it is often the better use of the space than keeping a bath nobody uses. A well-planned enclosure with a clear screen, a wall-hung basin that leaves floor visible and storage built into the layout will make a cottage bathroom far more usable. The constraints are the stack position and the floor depth for the tray, both established at the survey rather than assumed.",
      },
      {
        q: "Which council do we need for a skip?",
        a: "Whichever holds your frontage, and in this neighbourhood that is a genuine question rather than a formality. Brent and Westminster both licence streets here with no marking on the ground to tell you which, and each has its own application, fee and timescale. We confirm it from the address before applying, because a licence from the wrong borough is not a licence at all. [VERIFY.]",
      },
      {
        q: "Will the whole house be disrupted?",
        a: "The bathroom and the route to it, rather than the whole house, but in a cottage those are close together and you will be aware of the work. We seal the room at its door, protect the stair and the hall, extract dust at the tool and clean down at the end of each day. We are honest at the survey that in a house this size the job is present rather than tucked away.",
      },
      {
        q: "Can original features in the bathroom be kept?",
        a: "Where they survive and can live with a wet room, yes. An original door, an architrave or a section of boarding can usually be protected, removed and stored, or adapted reversibly. What rarely survives sensibly is an original floor directly under a shower, because the build-up a wet room needs is incompatible with it. We say which is which before anything comes out rather than after.",
      },
    ],
  },

  "muswell-hill": {
    pitfalls: [
      "A large tiled floor in a generous Edwardian bathroom is a lot of weight, and the failure is the same as in any timber-floored house but more visible: a deck with deflection cracks tile and grout at the perimeter, and in a big room that line runs a long way. Joist size, span and condition are established at the survey and the floor stiffened before tiling, which in a room this size matters more rather than less.",
      "The second is a window that needed joinery and got paint. A sash in a wet room with a failed cord, perished putty or a soft sill will not improve, and dealing with it after the room is tiled means working around new finishes. It is the natural moment while the room is stripped, and it is quoted honestly as joinery rather than folded into a decorating line.",
      "The third is scale. A large bathroom tempts a specification with five materials meeting in one room, and the result reads as busy rather than generous. Two finishes doing the work, with the space used for a separate bath and shower or for proper storage, will look better in ten years. That is a decision taken on the plan rather than recovered afterwards.",
    ],
    moreFaqs: [
      {
        q: "Is there room for a separate bath and shower?",
        a: "In most Muswell Hill bathrooms, yes, and it is one of the real advantages of the stock. The rooms are large enough for both without either feeling squeezed and the stack is usually close. The questions are whether the floor will carry the additional weight and whether the supply will drive the shower properly with everything else in the house running. Both are measured at the survey.",
      },
      {
        q: "Can a bath get up the hill and into the house?",
        a: "Getting to the house is the harder half. Some of these streets are steep with limited turning, and a loaded vehicle on a slope is a safety question rather than a preference, so we choose the vehicle to suit or transfer to a smaller van. Once at the door, the wide halls and generous doorways in these houses make the rest straightforward.",
      },
      {
        q: "Should the window be repaired before the bathroom?",
        a: "If it needs it, yes, and this is the moment. Repairing cords, beads, putty or a sill while the room is stripped is considerably cheaper and less disruptive than doing it once new tile and sanitaryware are in. It is joinery, quoted separately, and it is your decision whether it goes into scope. We will tell you plainly at the survey which windows need more than paint.",
      },
      {
        q: "Do you work on the flats above the Broadway?",
        a: "Yes, and they are a different job from the houses on the slopes. Access is usually a narrow side door and a straight stair rather than a wide hall, which is the hard part for a bath or a tray, and the commercial tenant below affects both the hours and how a future leak would be reached. The conservation area covers the Broadway, so anything on the elevation is a consent question. [VERIFY.]",
      },
    ],
  },

  "crouch-end": {
    pitfalls: [
      "The failure that causes most trouble in a converted house is a floor that was altered before you bought it. Notched joists, patched boards and a step where a partition once stood are all common under these bathrooms, and a tiled floor finds every one of them. Opening up enough at the survey to see what is there, and making the deck sound before tiling, is what separates a bathroom that lasts from one that cracks in its first year.",
      "The second is an extract terminal placed for convenience. In a house of flats a rear grille can sit directly under a neighbour's bedroom window, and a bathroom fan running at eleven at night becomes a standing grievance by the second month. The position is chosen with the windows around it in mind, and where there is no good one we rethink the route rather than cutting the nearest brick.",
      "The third is treating the shared hall as somebody else's problem. A tiled Victorian hall carries every heavy item into and out of the job, and damage to a common part is a dispute with the freeholder and two other households rather than a snag on a list. It is boarded for the duration, photographed before we start, and cleared every evening.",
    ],
    moreFaqs: [
      {
        q: "Can the bathroom be moved within the flat?",
        a: "It is a much larger question in a conversion than it sounds. A new position means running waste across a floor that sits over another household, finding fall you may not have, and extracting from a wall that may not be available. It usually needs the freeholder's consent and sometimes the building will not support it at all. We give a straight answer at the survey rather than drawing something unbuildable.",
      },
      {
        q: "How do we handle the neighbours during the work?",
        a: "We tell them rather than leaving it to you. They get the noisy dates, the skip day and the shape of the job before anything starts. In a house of three flats sharing one front door and one hall, that single courtesy does more to keep a job running smoothly than anything else we do. A neighbour who knows what is happening plans around it; one who does not, complains.",
      },
      {
        q: "Will the bathroom be warmer afterwards?",
        a: "Usually, and for three reasons rather than one: proper ventilation removing moisture instead of leaving it on cold surfaces, insulation board under any underfloor heating so the heat goes upward rather than into the joists, and a room that is genuinely sealed rather than leaking air into a void. We would rather explain what actually makes the difference than promise a temperature.",
      },
      {
        q: "Can the work be done while we are away?",
        a: "Often, and it is a good arrangement where your bathroom is the only one. We agree key-holding and access formally rather than casually, keep you updated at set points, and hold any decision that genuinely needs you. Nothing that changes the specification or the figure is decided in your absence without your agreement, and the freeholder and neighbours are told in the usual way.",
      },
    ],
  },

  "kentish-town": {
    pitfalls: [
      "A bathroom built over moisture in the structure is the expensive failure here. In a lower-ground room a tanked shower stops water going one way and does nothing about water arriving from the ground, and covering one problem with the other hides it until it reappears behind finished work. The condition is investigated at the survey and reported plainly, because it is the decision that cannot be reversed cheaply.",
      "The second is inheriting an extract that goes nowhere. Fans discharging into ceiling voids, redundant ducts or roof spaces are among the commonest finds when a bathroom fitted by somebody else is stripped, and the room has usually been quietly unventilated for years. A fan is ventilation only if it has a route to a real terminal, and in this stock that has to be traced rather than assumed.",
      "The third is a wall-hung fitting on a wall nobody tested. Party walls here are often thinner than expected and previous conversions built partitions from whatever was to hand, so a basin or a concealed cistern fixed without a proper supporting frame will loosen. The construction is established at strip-out and the frame built for what is there rather than for what the specification assumed.",
    ],
    moreFaqs: [
      {
        q: "Our bathroom always feels damp. Will a new one fix it?",
        a: "If the cause is ventilation, yes, and that is the most common answer in this stock. We trace where the existing fan actually discharges, which is frequently a void rather than outside, and specify a correctly sized unit with a real duct, a real terminal and a run-on timer. If the cause is moisture in the structure instead, a new bathroom will not fix it, and we would say so at the survey.",
      },
      {
        q: "Can a bathroom go into a former workshop space?",
        a: "Yes, and the questions are drainage, ventilation and what the floor is. These buildings were not built for domestic wet rooms, so the waste route, the fall and the structure all need establishing rather than assuming. The access is often much easier than in a conversion, which helps. We survey the structure honestly and say what it will take before anything is designed.",
      },
      {
        q: "How do you stop the rest of the flat filling with dust?",
        a: "A sealed screen at the door, a covered route, and a second screen at the stair where the bathroom is below ground, because dust from a lower-ground strip-out rises through a building. Cutting that can be done outside is done outside, and we clean down at the end of every day. No strip-out is spotless and we will not pretend otherwise, but sealing the boundary properly makes a real difference.",
      },
      {
        q: "Can you work shorter hours for our neighbours?",
        a: "Yes, and it is better planned than negotiated. Party walls here are thin and tile cutting carries clearly, so where a neighbour works from home we build shorter noisy windows into the dates from the start. That lengthens the calendar rather than changing the work. We ask about neighbours at the survey for exactly this reason and we give them the dates ourselves.",
      },
    ],
  },

  kilburn: {
    pitfalls: [
      "The delivery that fails here is the bath. A narrow side door and a steep straight stair with a turn defeats a cast bath and a one-piece stone tray far more often than people expect, and it happens once the old bathroom is already out. The route is measured against the actual items at the survey, and where something will not pass we say so while a lighter equivalent can still be chosen.",
      "The second is fixing into a wall that is not what it appears to be. The stock here runs from solid Victorian brick through mansion-block construction to later panel systems, sometimes within one flat, and a wall-hung basin or a concealed cistern on a partition that cannot carry it is a hazard rather than a snag. The construction is established at the survey and frames are built accordingly.",
      "The third, above a commercial unit, is not planning for how a leak would be reached. Access to a ceiling below a shop may be impossible during trading, which makes the tanking detailing and the inspection provision matter more than they would above another flat. It is a modest extra at the specification stage and the difference between a contained problem and a serious one.",
    ],
    moreFaqs: [
      {
        q: "Which council issues our skip licence?",
        a: "It depends which side of Kilburn High Road you are on. The road is the historic boundary: east toward West Hampstead is generally Camden, west of it is Brent, each with its own application, fee and conditions. We confirm it from the address at the survey. With a bathroom strip-out already bagged and waiting, a licence from the wrong borough costs a week rather than a phone call. [VERIFY.]",
      },
      {
        q: "Can a bathroom be done in a flat above a shop?",
        a: "Yes, with the route and the business both settled first. Access is usually a narrow side door and a steep stair, which shapes what can be specified as well as what it costs, and the tenant below sets what hours are tolerable — sometimes generously. We agree the use of any shared or commercial route in writing rather than at the door, and we time deliveries so nothing blocks a shopfront.",
      },
      {
        q: "Is a bathroom in a later block easier than in a conversion?",
        a: "In some respects. The walls are usually true, there may be a documented riser and the rooms are plainer, which suits a straightforward specification. What can be harder is that these buildings have been altered repeatedly with no record, and sound transfers efficiently downward, which makes acoustic isolation worth specifying. We survey the construction rather than assuming either type is simpler.",
      },
      {
        q: "What if we find asbestos or something similar?",
        a: "Work stops in that area and we tell you immediately rather than continuing. Materials of that kind need specialist assessment and, where required, specialist removal by a licensed contractor before ordinary work resumes. It is not something we would disturb or work around. In buildings of this range of dates it is a possibility worth knowing about, which is why suspicious material is treated cautiously. [VERIFY the material.]",
      },
    ],
  },

  "hampstead-garden-suburb": {
    pitfalls: [
      "The mistake that causes most difficulty here is treating the extract terminal as a detail. The external appearance of these houses is controlled by Barnet planning, by a long-standing Article 4 direction and separately by the Trust under its own Scheme of Management, and a grille cut through an elevation without consent is an enforcement matter rather than a snag. Whether an acceptable position exists at all is settled at the survey, before a fan is chosen.",
      "The second is losing original material in a strip-out. What comes out is usually the third or fourth bathroom the room has had, and in the middle of that it is easy for an original window fitting, a door or a section of board floor to go into a skip because nobody identified it. What stays is marked before anything is lifted, and those decisions are taken with you.",
      "The third is a level-access shower drawn against a depth these houses do not have. A level entry needs room for fall, a waste and a trap below the finished floor, and raising the floor to create it collides with an original door. The depth is measured at the survey so the answer is settled before a drawing rather than after a threshold you have to step over appears.",
    ],
    moreFaqs: [
      {
        q: "Can a bathroom be refurbished without any external work at all?",
        a: "In most cases, yes, and for most clients here that is the brief. Sanitaryware, tiling, tanking, services within the room, flooring and decoration change nothing the street can see. The single item that can cross the line is the extract terminal, which is why it is resolved at the survey and, where no acceptable position exists, specified accordingly and explained before anything is ordered.",
      },
      {
        q: "Our house has more than one bathroom. Should they be done together?",
        a: "Usually yes, if they are both going to be done within a few years. They share a protection set-up, a first fix and a delivery plan, and running them in sequence keeps one in service throughout. The house then has one standard rather than two bathrooms from different decades. Where that is the brief, it becomes a light-refurbishment instruction and we would set it out that way.",
      },
      {
        q: "Will a modern bathroom look wrong in an Arts and Crafts house?",
        a: "Not if it is quiet rather than fashionable. What tends to jar is a scheme with heavy metallic finishes and very tight tolerances, partly because it fights the room and partly because hand-built walls will not hold those tolerances anyway. Simple tile, honest sanitaryware and a wet zone that stops cleanly rather than dying into an original reveal sits comfortably in these rooms.",
      },
      {
        q: "Where will material and waste stand during the work?",
        a: "Somewhere agreed before the first delivery, on a surface that will take it, and not on a green or a planted verge. Barnet issues the licence for a highway position; where the frontage is shared or private the arrangement may differ and it is checked rather than assumed. On a close with limited standing, waste sometimes leaves by van in loads instead, which is slower and priced as such. [VERIFY.]",
      },
    ],
  },
};
