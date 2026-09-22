import type { ComboExtraMap } from "./combo-extra";

/**
 * Bathroom renovation: the second per-area layer.
 *
 * One block per Tier 1 area. A bathroom is a waterproofing job with tiles on
 * it, so these sections stay on the things that decide whether one survives:
 * the floor, the stack, the extract, the water, and the household below.
 */
export const bathroomExtra: ComboExtraMap = {
  hampstead: {
    survey: [
      {
        title: "What the floor will actually carry",
        text: "Timber intermediate floors in a village conversion were not built for a stone-tiled bathroom with a bath full of water in it. We establish joist size, span and direction, the condition of what is bearing on them, and how much deflection the structure has. A tiled floor on a deck that moves will crack at the perimeter within a year, and no adhesive corrects that.",
      },
      {
        title: "Fall, and whether a level shower is honest",
        text: "A level-access tray needs depth for fall, a waste and a trap, and a Hampstead conversion floor rarely has the build-up a new-build slab gives you. We measure the available depth at survey and say plainly whether a level entry is achievable, a low-profile tray is the answer, or a stepped threshold is the honest solution.",
      },
      {
        title: "Where the extract terminates",
        text: "An internal bathroom needs mechanical extract with a genuine route to outside, and in a conservation-area house the elevation it can reach is constrained. We trace the duct route, check for an existing redundant one, and establish the terminal position before anything is stripped. A fan discharging into a roof void is not ventilation. [VERIFY the designation for the address.]",
      },
      {
        title: "The water you actually have",
        text: "Village conversions run on a mixture of arrangements — a combination boiler, a cylinder in a cupboard, a tank in a roof space shared with other flats. We test the flow and the pressure rather than reading the boiler badge, because a large shower head specified against inadequate flow is a disappointment that arrives on the last day.",
      },
      {
        title: "Who is directly below",
        text: "In a converted house, the room under your bathroom belongs to somebody else. We establish what it is, how the ceiling below is constructed, and what access exists if a waste ever needs reaching. That informs the layout, the tanking and the inspection provision, and it is a survey finding rather than an afterthought.",
      },
    ],
    materials: [
      "Waterproofing is specified as a documented system rather than as a product from a tin. Boards, primers, tapes, corner details and the liquid membrane are all from one manufacturer's system so the components are designed to work together, and the sequence is recorded as it is laid. In a village conversion, the shower area and the whole of any floor taking water are treated as the wet zone, not just the panel behind the mixer.",
      "Tiles are chosen against the room rather than the sample board. Hampstead bathrooms are often small, often with a single sash and sometimes with none, and a large-format dark tile in that room closes it down entirely. Slip resistance matters on a floor that gets wet, and a tile that performs in a showroom photograph may be unpleasant underfoot wet. We would rather show you the options in the room than rely on a chart.",
      "Sanitaryware is specified as identifiable products with model references, so what is ordered is what arrives and what can be serviced in ten years. Brassware is chosen against the water pressure the survey actually measured. Where a client has fallen for a fitting the supply will not drive, we say so before it is ordered rather than commissioning it to a disappointing result.",
    ],
    programme: [
      {
        title: "Consent, and the neighbour below",
        text: "The lease position is settled and, where the waste or the extract is changing, the freeholder's licence is obtained. The household below is told what is happening above their ceiling. None of this makes noise and all of it comes first.",
      },
      {
        title: "Protection and strip-out",
        text: "The route through a shared hall and up a village stair is protected, then the room is stripped to the structure. Everything that follows depends on seeing the floor and the walls bare, which is why a bathroom cannot be properly priced from photographs.",
      },
      {
        title: "Structure, then first fix",
        text: "The floor is made sound and level, wastes and supplies are run, the extract duct is installed to its terminal and circuits are pulled. Anything the survey listed as provisional is resolved here, in the open.",
      },
      {
        title: "Tanking, and time to cure",
        text: "Boards, tapes, corners and membrane go on as a system, and the system needs its stated curing time before tiling. This pause is not padding. A bathroom tiled over a membrane that has not cured is a bathroom with a hidden defect.",
      },
      {
        title: "Tiling, second fix, watertightness",
        text: "Tiling set out from the datum that matters, then grout, sanitaryware, brassware and the fan commissioned. The room is tested with water before it is handed over, not after somebody reports a stain on a ceiling.",
      },
    ],
    access: [
      "Village lanes give a bathroom the same access problem as a kitchen with one difference: the heaviest single items — a bath, a stone tray, a run of large-format tiles — arrive in awkward shapes rather than in flat boxes. We measure the stair turn and the door widths at survey specifically against those items. A cast bath that will not make the half-landing is a delivery that has to be sent back, and it is entirely avoidable with a tape measure at the right moment.",
      "Camden issues the skip and scaffolding licences and controlled parking covers most of NW3 [VERIFY the CPZ code for the street]. A bathroom strip-out produces a smaller volume than a kitchen but a heavier and sharper one — broken tile, old sanitaryware, wet plaster — and it is bagged rather than carried loose down a shared village stair. Nothing is left standing on a lane, and the hall is cleared every evening.",
    ],
    costDrivers: [
      {
        title: "What the floor needs before tiling",
        text: "A sound, stiff deck is an ordinary preparation. A floor that needs strengthening, overboarding or levelling before it will carry tile is real work and it is priced as work. It is also the item most often left out of a cheap quotation and most often the reason tiles crack.",
      },
      {
        title: "Whether the waste moves",
        text: "Keeping sanitaryware near the existing waste is straightforward. Moving it means fall, a route through a floor that sits over another household, and frequently a further consent. It is the largest single variable on a conversion bathroom.",
      },
      {
        title: "The extract route you can get",
        text: "A short duct to an available terminal is inexpensive. A long route to an elevation the conservation area will accept costs more and takes cabinetry or boxing with it. This is settled at the survey because it cannot be improvised later.",
      },
      {
        title: "How much tile, and what shape",
        text: "Large-format tile in a small, out-of-square village room means more cutting, more waste and slower setting out. Mosaic and intricate patterns are slower still. The material cost is the smaller half of that; the labour is the real driver.",
      },
    ],
    living: [
      "The question is whether there is a second bathroom. A village house with a cloakroom or a second wet room absorbs the programme easily, and most clients stay. A one-bathroom conversion means washing elsewhere for the duration, and we would rather say that clearly at the survey than let it emerge in week two. Where there is only one, we keep the room usable as long as possible and we concentrate the fully out-of-service days rather than spreading them.",
      "Bathroom work is loud in short bursts and quiet for long stretches. Strip-out and any structural attention to the floor are the noisy part; tanking, curing and tiling are not. In a converted village house the household below hears the floor being worked on directly above their ceiling, so those days are named in advance and kept inside Camden's hours and the building's, whichever is tighter.",
    ],
    handover: [
      "We hand over with the room tested rather than merely finished: the shower run long enough to prove the fall, the waste filled and emptied, the fan checked for actual air movement rather than for noise. You get the tanking record, the sanitaryware references for future servicing, Gas Safe documentation where gas work was involved and electrical notification where the wiring regulations require it. The snag list is ours to write. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Bathrooms declare themselves in the first few months of real use. Silicone shrinks a little, grout settles, and a timber floor in an old house moves as the heating comes on. We expect to return for a silicone line and a minor adjustment, and we would rather do that than have you ignore a gap that is letting water somewhere it should not go. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can we have a walk-in shower in a Hampstead conversion?",
        a: "Often, and the limiting factor is floor depth rather than floor area. A level entry needs room for fall, a waste and a trap below the finished surface, and a Victorian or Georgian timber floor rarely gives what a new-build slab does. We measure the available build-up at the survey. Where it is not there, a low-profile tray achieves nearly the same look honestly, and we say which you can have before you pay for a drawing.",
      },
      {
        q: "What happens if the bathroom leaks into the flat below?",
        a: "The point of the specification is that it does not. The wet zone is tanked as a documented system with recorded detailing at the corners, junctions and waste penetrations, and the room is tested with water before handover rather than trusted. If something does go wrong later, you have a record of what was installed and by whom, which matters both for the repair and for any conversation with the household below. We are fully insured. [INSURANCE_TBC]",
      },
      {
        q: "Our bathroom has no window. Is that a problem?",
        a: "Only if the extract is not solved properly. An internal bathroom needs mechanical extract with a real route to outside and enough capacity for the room, and in a conservation-area house the acceptable terminal may not be the nearest wall. We trace the route at the survey. A fan that discharges into a roof void or a redundant duct is not ventilation, and it is a common thing to find when stripping out a bathroom somebody else fitted.",
      },
      {
        q: "Can you keep the original cast-iron bath?",
        a: "Sometimes, and where it is sound it is worth keeping. The questions are whether the floor will carry it once you allow for the water and the occupant, whether the enamel is in a condition worth re-using, and how it will be moved while the room is stripped. Re-enamelling is a specialist trade and we will say honestly whether the piece justifies it. What we will not do is put a heavy bath back onto a floor we have not verified.",
      },
      {
        q: "How long is the bathroom out of use?",
        a: "Longer than the work looks, because of the curing. Tanking has a stated cure time before tiling can start, and grout and silicone need their own time before the room takes water. Compressing those is exactly how a bathroom fails quietly. We write dates after the room has been measured and we concentrate the fully unusable days rather than spreading them across a month.",
      },
      {
        q: "Do we need Camden's permission for a new extract grille?",
        a: "Inside the room, replacing a bathroom is not planning's business. A new terminal on an elevation in the Hampstead Conservation Area often is, and on a listed building near the village core the question may be listed building consent instead. [VERIFY the designation and listing for the address.] We establish which applies before the duct route is designed, and where no acceptable terminal exists we say so rather than cutting first.",
      },
    ],
  },

  "west-hampstead": {
    survey: [
      {
        title: "Stacked bathrooms on a half-landing",
        text: "The typical arrangement here puts bathrooms above one another on the half-landings of a converted terrace, sharing a stack and a structural line. We establish what is directly above and below yours, because a layout change in the middle of a stack affects two other households and frequently needs their building's process rather than just yours.",
      },
      {
        title: "Half-landing structure and access",
        text: "A half-landing bathroom sits on a short span between floors, often over a stair, and the construction is not always what the rest of the house is. We open up enough to know what we are tiling on, and we check how a bath or a tray can physically be brought to a room reached by a turn in a shared stair.",
      },
      {
        title: "Fall available to the stack",
        text: "The distance from the proposed waste positions to the stack, and the fall available across that distance, is measured rather than assumed. In a half-landing room the run is short, which is good, but the floor depth is often shallow, which is not. Both numbers are taken at the survey.",
      },
      {
        title: "Water pressure at the top of the house",
        text: "Upper-floor flats in these conversions frequently have the weakest flow in the building, and a shower specified without measuring it will underperform from the first day. We test at the outlet rather than at the boiler, and we say what the supply will and will not drive before anything is chosen.",
      },
      {
        title: "What the elevation will take",
        text: "Extract from a half-landing bathroom generally terminates on the rear elevation, and in a house of flats that puts it near somebody's window. We check the position against the windows around it and against any conservation-area designation or Article 4 direction on the street. [VERIFY the named area for the address.]",
      },
    ],
    materials: [
      "Half-landing bathrooms are small, and the specification should make them feel larger rather than busier. A single wall tile carried through, a floor tone that is not fighting it, a wall-hung basin that leaves floor visible beneath, and a shower screen rather than a curtain rail all buy apparent space. Where the room has a window, we keep the sill clear rather than running tile over it and losing the light.",
      "Tanking is a documented system, and in a room this size the detailing is most of the work: internal corners, the junction at the tray or the bath, the waste penetration, and the upstand behind a wall-hung fitting. We use one manufacturer's system throughout so the components are compatible as tested, and we photograph the membrane before tile goes over it, because that record is the only way anyone will ever see it again.",
      "Heavy items and narrow stairs govern some choices here. A stone shower tray or a large-format porcelain slab that cannot make the turn onto a half-landing is not a specification, it is a delivery failure waiting to happen. We measure the route at survey against the actual items, and where the stair rules something out we say so while there is still time to choose a lighter or smaller alternative.",
    ],
    programme: [
      {
        title: "Tenure, licence and neighbour notice",
        text: "The lease is checked, the freeholder's licence obtained where the waste or the extract moves, and the households above and below told what is happening on the stack. In a stacked conversion this sequence is not optional.",
      },
      {
        title: "Protect the stair, then strip out",
        text: "The shared stair and the half-landing are protected along the full route. Strip-out takes the room back to structure, because the floor and the walls have to be seen before anything can be specified with confidence.",
      },
      {
        title: "Floor made sound, then first fix",
        text: "The deck is made stiff and level, wastes and supplies are run to the stack, the extract duct is installed to its terminal and circuits are pulled. Provisional items from the survey are resolved here rather than absorbed.",
      },
      {
        title: "Tanking, photographed, then cured",
        text: "The system goes on in its correct sequence, the detailing is recorded, and it is given its stated cure time. Tiling does not begin early because the programme is tight. That is how a hidden defect gets built in.",
      },
      {
        title: "Tile, second fix, water test",
        text: "Tiling from a proper datum, then grout, sanitaryware, brassware and a commissioned fan. The room is tested with water, the stair protection lifted, and the common parts checked before the job is called finished.",
      },
    ],
    access: [
      "The hard part of a West Hampstead bathroom delivery is not the street, it is the half-landing. A bath, a stone tray or a stack of large tiles has to come through a shared front door, along a hall, and round a turn in a stair used by two or three households. We measure that turn against the actual items at the survey. Where an item will not make it, we say so before it is ordered, and where the room can only take smaller components we specify accordingly.",
      "Camden issues the skip and scaffolding licences, and controlled parking applies on the residential streets [VERIFY the CPZ]. West End Lane, with three stations on it, is the wrong place to unload, so the position is licensed on a side street and the drop is timed around the interchange. Strip-out waste from a bathroom is heavy and sharp; it is bagged at the room, carried down a protected stair and removed the same day rather than stacked in a communal hall.",
    ],
    costDrivers: [
      {
        title: "Whether the layout stays on the stack",
        text: "Keeping the waste positions broadly where they are is the cheap and reliable option. Moving them across a half-landing floor that is shallow and sits over another flat is the expensive one, and it can trigger a consent you would not otherwise need.",
      },
      {
        title: "What the floor needs first",
        text: "A short-span half-landing deck is sometimes stiffer than the rest of the house and sometimes weaker. Strengthening or overboarding before tiling is ordinary work, it is priced as work, and leaving it out is the usual reason a floor tile cracks along a line.",
      },
      {
        title: "How the heavy items arrive",
        text: "Where the stair turn rules out a one-piece tray or a large slab, components change or are carried in sections. Either way it is decided at the survey and named in the proposal rather than discovered by a delivery driver.",
      },
      {
        title: "The supply you are working with",
        text: "Where the measured flow will not drive the shower a client wants, the options are a different fitting or work to the supply. Both are legitimate. Specifying the fitting anyway and hoping is not, and it is the most common disappointment in an upper-floor conversion.",
      },
    ],
    living: [
      "In a conversion flat the bathroom is usually the only one, so a bathroom programme means arranging somewhere else to wash. Clients who stay generally do so with a plan made in advance rather than improvised: family nearby, a gym, a neighbour. We keep the room in service as long as the sequence allows, concentrate the fully unusable days, and tell you at the survey how many of them there are rather than leaving it vague.",
      "The household below hears floor work directly overhead, and in a stacked conversion the household above is looking at the same stack you are. We name the noisy days, give the neighbours the dates, and keep to Camden's hours and the building's. It is also worth telling them what a water test is before they see us running a shower for twenty minutes with the floor still open, which is exactly the sort of thing that generates an unnecessary phone call.",
    ],
    handover: [
      "Handover is a test rather than a presentation. The shower runs long enough to prove the fall, the waste is filled and emptied, and the fan is checked for real air movement. You receive the tanking record and the photographs of the membrane, sanitaryware references for future servicing, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. The snag list is ours. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "What comes back in a half-landing bathroom is usually movement-related: silicone at the bath junction after the floor has flexed a few hundred times, or grout at an internal corner. Both are ordinary and both are worth attending to rather than ignoring, because a failed line at a bath edge is how water reaches a ceiling below. Telephone 020 7101 3168 or write to office@hpsg.co.uk and we come once for the list.",
    ],
    moreFaqs: [
      {
        q: "Can we move the bathroom to a different room in the flat?",
        a: "That is a bigger question than it sounds in a conversion. A new position means running waste across a floor that sits over another household, finding fall you may not have, and extracting from a wall that may not be available. It usually needs the freeholder's consent and sometimes the building simply will not support it. We will tell you honestly at the survey whether it is realistic; where it is not, we say so rather than designing something that cannot be built.",
      },
      {
        q: "Our shower is weak. Will a new one fix it?",
        a: "Only if the supply is the problem and the new arrangement addresses it. We measure flow and pressure at the outlet during the survey rather than reading the boiler plate, because upper-floor conversion flats often have the weakest supply in the building. Sometimes the answer is a fitting matched to what you have; sometimes it is work to the supply itself. What does not work is specifying a large rainfall head against a flow that will never drive it.",
      },
      {
        q: "Will the bath fit up the stairs?",
        a: "We measure before it is ordered. A half-landing reached by a turn in a shared stair is one of the tighter deliveries in this stock, and baths, stone trays and large-format tiles are the items that fail it. Where something will not make the turn, there is almost always an alternative that will — a different bath, a tray in a lighter material, smaller format tile — and choosing it early is far better than discovering the problem with the old bathroom already out.",
      },
      {
        q: "How do you protect the shared stair?",
        a: "Along its whole length, before anything is carried, and it stays protected for the duration rather than being put down each morning. Bathroom waste is heavy and sharp, so it is bagged at the room rather than carried loose. We photograph the stair and the hall before we start, keep them clear every evening, and check them with you at handover. In a house of three flats, the stair is the thing your neighbours actually judge the job by.",
      },
      {
        q: "Is a stacked bathroom easier or harder than a standalone one?",
        a: "Easier technically, harder socially. The stack is close, which means short waste runs and good fall, and the structure is usually predictable. What is harder is that two other households are attached to the same arrangement, so a change to the stack is their business as well as yours, notice matters, and the freeholder is more likely to be involved. We establish who is above and below at the survey for exactly that reason.",
      },
      {
        q: "Can we have underfloor heating in a half-landing bathroom?",
        a: "Usually, and an electric mat system is the realistic option in this stock rather than a wet system. The considerations are floor build-up, which is often shallow here, the insulation board underneath that makes it worth running, and the fact that it must be installed above the tanking rather than under it. We check the depth available at the survey and say whether it works without raising the floor into the door.",
      },
    ],
  },

  "belsize-park": {
    survey: [
      {
        title: "Inserted bathroom, borrowed services",
        text: "Many Belsize bathrooms occupy a former dressing room or a partitioned corner of a large bedroom, with waste and supply borrowed from wherever was nearest at the time. The survey traces what was actually done rather than what was drawn, because the arrangement you inherit sets what a new layout can do.",
      },
      {
        title: "Ceiling height, and what it does to a wet room",
        text: "Tall rooms are generous but they complicate a wet specification: more wall to tile or to finish, a longer run for any duct, and access equipment in a small space. We measure to the cornice and work out where the tiling should stop and a painted finish should start, because carrying tile to a four-metre ceiling is rarely the right answer.",
      },
      {
        title: "The riser, in an avenue block",
        text: "On Belsize Avenue and Haverstock Hill the bathroom is served by an original riser shared up the building. We open a panel where we can, establish what is in it and whether anything may join, and record the connection heights. A closed riser fixes the layout absolutely and it is better known before design than after.",
      },
      {
        title: "What sits under the floor",
        text: "In a laterally converted house the floor under a bathroom may be original, may have been altered by an earlier conversion, and almost certainly sits over another household. We establish the construction, the depth available and where a waste can run, because that is the constraint that decides whether a level shower is possible.",
      },
      {
        title: "Hours, and who enforces them",
        text: "A managed avenue block has lease hours and porter's hours, and they differ. A share-of-freehold house has neighbours rather than a process. We get both in writing before dates are offered, because wet-room work involves short bursts of genuine noise and they need to be scheduled honestly.",
      },
    ],
    materials: [
      "In a tall Belsize room, tiling to full height is usually wrong. A tiled wet zone with a well-detailed transition to a painted wall above reads better, costs less and leaves the cornice alone. Where a client wants a fully tiled room, we show the junction at the cornice at full size first, because a tile dying into a moulding is the detail that makes an expensive bathroom look careless.",
      "Waterproofing is a documented system, and in an inserted bathroom the wet zone has to be defined generously rather than minimally. Where a room was partitioned out of a bedroom, the partitions may be light, the floor may be original board, and water finds the junctions. We tank the whole floor and the full wet zone as a system from one manufacturer, detail the corners and penetrations properly, and record it before it disappears under tile.",
      "Heavy items and lift constraints matter on the avenues. A stone tray or a cast bath that cannot go in a mansion-block lift goes up a protected stair, and a large-format porcelain slab needs two people and a clear route. We measure the lift car and the stair at survey against the actual items. Where the route rules something out, there is nearly always a lighter equivalent, and choosing it early costs nothing.",
    ],
    programme: [
      {
        title: "Alteration pack, or the neighbours' consent",
        text: "A managing agent's pack on the avenues runs to its own timetable; a share-of-freehold house needs your neighbours to sign. Where the waste or the extract moves, this is not optional, and nothing is ordered against a consent that has not arrived.",
      },
      {
        title: "Overhead work while the room is empty",
        text: "In a tall room, any making good at ceiling and cornice level is done while there is floor to stand on and no sanitaryware to work around. Doing it in the wrong order is how joints overhead stay visible.",
      },
      {
        title: "Strip-out to structure",
        text: "The room comes back to its bones so the floor, the partitions and the borrowed services can be seen. In an inserted bathroom this is where the real arrangement is finally established, and where the survey's provisional items land.",
      },
      {
        title: "Floor, first fix, tanking",
        text: "The deck is made sound, wastes and supplies run to the riser or the stack, the duct installed, then the waterproofing system applied in sequence and given its cure time. The cure is programmed, not squeezed.",
      },
      {
        title: "Tile, second fix, test",
        text: "Tiling to a set-out that respects the room's height, then grout, sanitaryware and brassware, the fan commissioned, and the room tested with water before handover. Common parts are checked at the same visit.",
      },
    ],
    access: [
      "Haverstock Hill is a corridor and not a place to unload a bathroom. Deliveries go to the side streets and the Village lanes under Camden's controlled parking, with a licensed skip position arranged in advance [VERIFY which authority controls a given frontage]. On the avenues the binding constraint is inside the building: porter's hours, a lift booking sheet, and rules about what may cross the lobby and when. We collect that in writing at survey and plan the deliveries around it rather than negotiating on the morning.",
      "Bathroom items are heavy and awkward in ways kitchen boxes are not, and that matters on a protected stair. A bath, a stone tray and a pallet of tile are the three things that most often cannot go in an older passenger lift. We measure the car and the stair against the actual items. Where a managed block prohibits a skip, waste leaves by van in booked loads, which is slower and quieter and priced as what it is.",
    ],
    costDrivers: [
      {
        title: "Whether the riser is open to you",
        text: "Joining an existing riser in an avenue block is ordinary and quick. Being told it is closed, and having to find another route for a waste across a floor over a neighbour, is a different job with its own consent. This is the biggest single swing here.",
      },
      {
        title: "How high you tile",
        text: "Tiling a tall room to full height is materially more tile, more labour and more access equipment than tiling a wet zone and finishing the rest. Neither is wrong; they are different figures, and the choice should be made knowingly at the drawing stage.",
      },
      {
        title: "What an inserted room hides",
        text: "A bathroom partitioned out of a bedroom by somebody else may have light partitions, borrowed services and a floor that was never intended to be wet. Provisional items cover what cannot be seen until strip-out, and they are named rather than absorbed.",
      },
      {
        title: "Lift, stair or booked van",
        text: "A booked goods lift is the cheapest route in. A protected stair is slower. A building that allows neither a skip nor a lift booking means waste and deliveries move in small loads, and that is a real labour figure.",
      },
    ],
    living: [
      "Avenue mansion flats often have a second wet room or at least a cloakroom, which makes a bathroom programme comfortable to live through. A laterally converted house may have several bathrooms or may have exactly one, and the difference decides everything about how you plan the weeks. We establish it at the survey and tell you how many days the room is genuinely out of service rather than giving a vague range.",
      "In this stock the person most affected by the noise is below you. Floor work in a bathroom transmits directly into their ceiling, and in a converted house that floor may be the original one with very little between. We name those days, keep inside the tighter of the building's and the council's hours, and let the porter or the neighbours know in advance. A water test running for twenty minutes is also worth explaining before somebody hears it and worries.",
    ],
    handover: [
      "The room is tested, not just finished: the shower run long enough to prove the fall, the waste filled and emptied, the fan measured for real air movement rather than judged by sound. You receive the tanking record, photographs of the membrane before tiling, sanitaryware references for servicing, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Where the building required a pack, the as-built position is lodged. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Tall rooms show a line at the junction between tile and paint if the transition was rushed, and inserted bathrooms move at their partitions during the first heating season. Both are worth a look a few months in, along with the silicone at the bath or tray junction. We would rather return once and deal with the lot. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Should we tile the whole height of a Belsize room?",
        a: "Usually not. In a room with a four-metre ceiling and a cornice, tiling to full height costs a great deal more, needs access equipment in a small space, and ends in a junction with a moulding that rarely looks deliberate. A properly detailed wet zone with a painted finish above is cheaper, looks better and is easier to repair. Where you do want full height, we draw the cornice junction at full size before anything is ordered.",
      },
      {
        q: "Our bathroom was made out of part of a bedroom. Is that a problem?",
        a: "It is a set of questions rather than a problem. The partitions may be lighter than they look, the floor was not designed to be wet, and the services were probably borrowed from the nearest available point rather than planned. We strip back to see what is actually there, tank generously rather than minimally, and expect at least one finding. Where something cannot be established without opening up, it is listed as a provisional item rather than assumed away.",
      },
      {
        q: "Can we have a wet room on the avenues?",
        a: "It depends on the floor depth and what is below. A true level-access wet room needs fall built into the floor, and a mansion-block floor over another flat may not give you the depth without raising the threshold. We measure at the survey and give you a straight answer: level entry, low-profile tray, or a stepped threshold. We will not draw a wet room onto a floor that cannot accept the fall.",
      },
      {
        q: "The porter will not allow a skip. How does the waste leave?",
        a: "By van, in booked loads, on the building's timetable. It is slower, needs more labour and costs more than a skip on a side street, and it is priced as exactly that rather than hidden in a rate. It is also common on managed avenue blocks, so we ask the question at the survey rather than assuming. Broken tile and old sanitaryware are bagged at the room and never staged in a communal lobby.",
      },
      {
        q: "How long will the bathroom be unusable?",
        a: "A defined number of days that we give you after measuring, not a range. The sequence has a fixed shape: strip-out, floor, first fix, tanking with its stated cure, tiling, grout, second fix, then a water test. The cure and the grout times cannot be compressed without building in a defect. What we can do is concentrate the fully out-of-service days rather than spreading them across a month.",
      },
      {
        q: "Does a licence to alter apply if we are only replacing the bathroom?",
        a: "Frequently, yes, and more often than for a kitchen. Leases commonly treat anything touching the waste, the supply or a common void as an alteration, and in a stacked block your bathroom is attached to a system serving other flats. Holding a share of the freehold makes you one of the people granting consent rather than a reason to skip it. We prepare drawings and a method statement; the consent is the freeholder's. [VERIFY the lease.]",
      },
    ],
  },

  "st-johns-wood": {
    survey: [
      {
        title: "What the licence will allow before design starts",
        text: "In an NW8 block the managing agent's requirements decide what a bathroom may become. Many packs restrict moving wastes at all, specify how floors may be penetrated, and set out protection standards for the common parts. We read the pack before designing, so the room we draw is one the building will actually consent to.",
      },
      {
        title: "The stack, and the flats it serves",
        text: "Bathrooms in these blocks are stacked, which means your waste is part of an arrangement serving the flats above and below. We establish the connection point, its height and what else joins it, because that single fact governs where sanitaryware can sit and whether a change needs a further approval.",
      },
      {
        title: "Floor build-up over a neighbour's ceiling",
        text: "We measure the depth available between the finished floor and the structure, because it decides whether a level-access shower is possible, whether underfloor heating fits, and how much fall a waste can find. Over somebody else's ceiling, that measurement is the difference between a good bathroom and a dispute.",
      },
      {
        title: "How a bath and a tray get to the door",
        text: "Lift car dimensions, the lobby turn and the corridor width are measured against the actual items rather than in general. A cast bath or a stone tray that will not enter the lift goes up a protected stair, and in a mansion block that protection is to the building's written standard rather than ours.",
      },
      {
        title: "Acoustic expectations in a managed block",
        text: "Sound transfer is taken seriously in these buildings, and a hard-tiled bathroom over a neighbour's bedroom is a legitimate concern. We establish what the lease and the building expect, and specify acoustic matting and isolation accordingly rather than adding it after a complaint.",
      },
    ],
    materials: [
      "Mansion-flat bathrooms in NW8 are usually compact and well proportioned, and they take a restrained specification well: one wall tile carried through, a floor that relates to it rather than competing, a wall-hung basin and a concealed cistern where the wall depth allows. What spoils them is a scheme designed for a larger room and then compressed, with too many materials meeting in too small a space.",
      "Acoustic performance is a material decision here. An uncoupling and acoustic mat under the tile, isolation at the perimeter, and careful detailing where a waste passes through the structure all reduce what the flat below hears. It costs little at specification and cannot be retrofitted without lifting the floor. In a building where the managing agent fields complaints, it is also what keeps a finished bathroom uncontroversial.",
      "Sanitaryware is specified as identifiable products with references, so that in ten years a cartridge or a seat can be matched rather than guessed. Brassware is chosen against the flow and pressure measured at the survey. In blocks where the supply is shared and variable, a thermostatic valve of the right specification matters more than the finish on the handle, and we will say so.",
    ],
    programme: [
      {
        title: "Licence to alter, granted in full",
        text: "Drawings, method statement, insurance and contractor details go to the agent, and the building answers on its own timetable. In NW8 this is the programme rather than a preliminary to it, and nothing is ordered against an ungranted licence.",
      },
      {
        title: "Protection to the building's standard",
        text: "Lobby, lift, corridor and your own hall are protected as the pack requires and inspected where that is the rule. The porter's building is protected before the first bag of tile arrives.",
      },
      {
        title: "Strip-out to booked removal",
        text: "Sanitaryware, tile and wet plaster leave in booked loads rather than to a skip, because most of these blocks will not have one on the forecourt. Strip-out is paced to the slots available.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound with acoustic isolation as specified, services run to the stack, the duct installed, then the waterproofing system applied and given its stated cure. The cure is in the programme as a named period.",
      },
      {
        title: "Tile, second fix, test, sign-off",
        text: "Tiling, grout, sanitaryware and brassware, the fan commissioned, the room tested with water. The building signs off the common parts and you sign off the bathroom, arranged for the same day.",
      },
    ],
    access: [
      "St John's Wood is a building-access problem rather than a street one. Westminster licences the skip and the scaffolding, but what shapes the programme is the block's own rulebook: porters' hours, a lift booking sheet, restrictions on the main lobby, and a protection standard written by a managing agent who will inspect it. All of that is collected at survey. Match days at Lord's are checked against the delivery schedule before heavy items are booked [VERIFY with the building].",
      "Bathroom deliveries are the awkward ones. A bath, a stone tray and a pallet of tile are heavy, rigid and easy to damage a lift car with, which is precisely why some buildings will not allow them in the passenger lift at all. We measure the car and the stair against the items at survey and plan accordingly. On the villa and mews streets the position is different again: off-street parking is more common, but a mews turning head will not take a long vehicle.",
    ],
    costDrivers: [
      {
        title: "What the licence asks of us",
        text: "Drawings, a full method statement, specified insurance and named operatives take real time to prepare properly. That time is chargeable, and it is also the difference between a building that lets you work and one that stops you at the lobby.",
      },
      {
        title: "Whether the waste may move",
        text: "Keeping sanitaryware on the existing connections is straightforward. Moving a waste in a stacked block may need a further consent and work over a neighbour's ceiling, and some buildings simply decline it. This is established before design, not after.",
      },
      {
        title: "Acoustic specification",
        text: "Matting, isolation and careful penetration detailing are a real item in a managed block. They are also the thing that keeps a new bathroom from generating a complaint from the flat below. We include them and name them rather than leaving them out to look cheaper.",
      },
      {
        title: "Removal by booked load",
        text: "Where no skip is permitted, heavy bathroom waste leaves in vans on the building's timetable. More labour, more visits, more cost, and it is priced as what it is because pretending otherwise just moves the problem into the programme.",
      },
    ],
    living: [
      "Most NW8 mansion flats have more than one wet room, which makes a bathroom programme genuinely liveable. Where yours is the only one, the flat is usually large enough that a second arrangement is possible, and we give you a defined number of fully out-of-service days rather than a vague estimate. The room is sealed at the door and the route in and out is covered, so the rest of the flat stays as it was.",
      "In a managed building, the household below is the one who notices. Floor work, tile cutting and a bath being removed are heard directly through the structure, and a porter fielding a complaint will impose shorter hours than the lease technically allows. We work to the hours the building actually keeps, name the noisy days in advance, and tell the porter what a water test is so nobody reports a leak that is in fact a controlled test.",
    ],
    handover: [
      "Handover happens twice in a managed block. You get the bathroom tested — shower run to prove the fall, waste filled and emptied, fan measured for air movement — with the tanking record, membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. The building gets its common parts inspected, protection removed and the licence file closed with an as-built record. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Purpose-built blocks are stable, so what comes back later tends to be silicone, grout at a movement joint, or a brassware cartridge rather than anything structural. All ordinary, and all better dealt with promptly in a building where a small leak becomes a neighbour's ceiling. Telephone 020 7101 3168 or write to office@hpsg.co.uk. Where the block requires notice for a return visit, we arrange it with the agent.",
    ],
    moreFaqs: [
      {
        q: "Our lease says we cannot move the waste. Can we still change the layout?",
        a: "Within limits, and often more than people expect. Sanitaryware can frequently be rearranged around fixed connection points, a bath can become a shower in the same position, and a wall-hung basin can move along a wall if the waste can be brought to it with fall. What is usually off the table is relocating the soil connection itself. We read the pack before designing so the layout we present is one the building will actually consent to. [VERIFY the lease.]",
      },
      {
        q: "Will the flat below hear the new bathroom?",
        a: "Less than they would from a bathroom fitted without thought. An uncoupling and acoustic mat under the tile, isolation at the perimeter and careful detailing where a waste passes through the structure all reduce transmission substantially, and none of it can be added later without lifting the floor. In a block where the managing agent fields complaints, this is not an upgrade, it is part of a bathroom that will not cause trouble.",
      },
      {
        q: "Can a cast bath go up in the lift?",
        a: "Sometimes, and many NW8 buildings will not allow it regardless of whether it fits. Passenger lifts in these blocks are lined and the agent protects them carefully. We measure the car against the item and read the building's rules at the survey, and where the lift is out of bounds the bath goes up a protected stair, which is more labour and is named in the proposal rather than absorbed.",
      },
      {
        q: "What does a licence to alter actually require for a bathroom?",
        a: "It varies by building and it is the first thing we ask for. Typically: drawings showing what changes, a method statement, evidence of insurance, contractor details, and sometimes named operatives. Some agents also require a protection specification for the common parts and a deposit. We prepare all of it. The consent itself is the freeholder's to grant, not ours, and nothing is ordered until it is in hand. [VERIFY with the managing agent.]",
      },
      {
        q: "Can we put underfloor heating in?",
        a: "Usually, and an electric mat is the practical choice in a mansion flat. The questions are the depth available above the structure, whether it can sit above the tanking as it must, and whether the resulting floor build-up still clears the door. We measure the depth at the survey. Where it is marginal we would rather say so than raise a floor and leave you with a threshold you catch your foot on.",
      },
      {
        q: "Do Lord's fixtures really affect the programme?",
        a: "For the heavy deliveries, yes. On fixture days the surrounding streets are busier and access is managed differently, so a lorry with a bath and a pallet of tile may not be able to stand where it needs to [VERIFY the fixture list and any restrictions with the building]. We check the calendar when the programme is written and schedule the large drops away from it. It only becomes a problem for people who do not look.",
      },
    ],
  },
  "maida-vale": {
    survey: [
      {
        title: "The bathroom off the hall, where it has always been",
        text: "W9 mansion flats keep their original plan, and the bathroom usually sits off the hall on a stack that has served it since the 1890s or 1900s. The survey starts from that arrangement: connection height, what else joins it, and how much of the original pipework is still original. It is a better starting point than a blank plan.",
      },
      {
        title: "Timber intermediate floor, and the flat below",
        text: "These floors are timber, they carry sound efficiently, and everything you tile sits above somebody's ceiling. We establish the joist direction and span, the existing build-up and how much depth is genuinely available, because that number decides the shower, the heating and the fall in a single answer.",
      },
      {
        title: "What the water will actually do",
        text: "Supply arrangements in these blocks vary widely and have often been altered flat by flat. We measure flow and pressure at the outlets rather than reading a boiler plate, and we establish whether a tank, a cylinder or a combination boiler is driving the room, because the specification of the shower depends entirely on the answer.",
      },
      {
        title: "How heavy items reach the third floor",
        text: "Lifts here are small and frequently unsuitable for a bath or a stone tray, so those items go up the stairs. We measure the flights, the half-landing turns and the handrail projection against the actual items, and we establish the porter's rules on what may be carried through the lobby and when.",
      },
      {
        title: "The elevation, and who else looks at it",
        text: "Much of W9 sits in Westminster's Maida Vale Conservation Area, and exterior work is closely controlled. An extract terminal on a principal elevation is a consent question and often a freeholder question as well, and canal-side frontages may carry further interests. We establish the position before the duct is designed. [VERIFY the designation for the address.]",
      },
    ],
    materials: [
      "These are handsome rooms with decent proportions, and they suit a specification with some discipline: one wall tile taken through, a floor tone that supports rather than competes, and sanitaryware in classic forms that will not look dated in a red-brick mansion flat in fifteen years. Where the room retains an original window with a deep reveal, we keep it clear of tile so the light still reaches the floor.",
      "Acoustic detailing is a specification item rather than an extra, because a timber floor over a neighbour's living room transmits everything. An uncoupling and acoustic mat under the tile, isolation at the perimeter and careful detailing at the waste penetration are specified as standard. A hard-tiled bathroom installed without them is the most common source of complaints in these blocks, and it cannot be improved afterwards without lifting the floor.",
      "The stair determines what can be specified. A one-piece stone tray or a cast bath that cannot make a half-landing turn is not a specification. We measure the route at survey against the actual items and, where something will not go, we offer the lighter or sectional equivalent while there is still time to change it. Tile is delivered in manageable loads rather than a single pallet nobody can move.",
    ],
    programme: [
      {
        title: "Licence, and the porter's practical rules",
        text: "The freeholder's licence to alter is obtained and, separately, the porter's real rules on lifts, hours and waste are recorded. They are different documents, both bind the job, and nothing is ordered until the first exists.",
      },
      {
        title: "Stair protection and staged delivery",
        text: "Common stair, landings and your hall are protected. Heavy items arrive in loads that can be carried up in one session, because part-loads standing in a Maida Vale lobby are exactly what a porter will stop.",
      },
      {
        title: "Strip-out down the same stair",
        text: "Old sanitaryware, tile and wet plaster are bagged at the room and carried down, leaving the same day. This is the noisy stage and it is named as specific dates for the benefit of the flats around you.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound with acoustic isolation, services run to the stack, the duct installed to its terminal, then the waterproofing system applied in sequence and given its stated cure time before any tile goes on it.",
      },
      {
        title: "Tile, second fix, water test",
        text: "Tiling, grout, sanitaryware, brassware and a commissioned fan, then the room tested with water. The stair protection comes out last and the common parts are checked with the porter.",
      },
    ],
    access: [
      "Access in Maida Vale is a stair problem, and for a bathroom it is a heavy one. Lifts in the older blocks are small and often barred to goods by the porter's rules, so a bath, a tray and pallets of tile go up the stairs as the working assumption. That is labour and it is named in the proposal rather than absorbed. Westminster's controlled parking applies on Elgin Avenue, Sutherland Avenue and the surrounding streets, and a vehicle cannot simply stand while a bathroom is unloaded at leisure.",
      "The mews behind the principal avenues are a different construction and a different problem: narrow entrances, no turning room, and sometimes a bathroom at first floor reached by a single stair. We survey the turning head as well as the doorway. On canal-side frontages near Little Venice a delivery may cross a footway used by the public, and how that is managed goes in the method statement rather than being improvised with cones on the day.",
    ],
    costDrivers: [
      {
        title: "Stairs rather than a lift",
        text: "Carrying a bath, a tray and several hundred kilogrammes of tile up three flights is materially more labour than wheeling it out of a goods lift. It is the most predictable cost driver in W9 and it is settled with a tape measure at the survey.",
      },
      {
        title: "What the floor depth allows",
        text: "Level access, underfloor heating and the fall a waste needs all compete for the same few centimetres above the structure. Where the depth is not there, the design changes rather than the floor being raised into the door. That is a design decision with a cost attached.",
      },
      {
        title: "Acoustic isolation",
        text: "Matting, perimeter isolation and detailing at the penetrations are real materials and real time. In a timber-floored block over a neighbour they are also what stops a finished bathroom from becoming a managing agent's problem.",
      },
      {
        title: "How much original pipework is left",
        text: "Connecting into sound existing pipework is quick. Finding that a section of a hundred-year-old stack or supply needs replacing within your demise is ordinary and is covered as a provisional item, named at the survey rather than discovered as a surprise.",
      },
    ],
    living: [
      "The corridor plan works in your favour here. A bathroom off the hall can be sealed at its door and the rest of the flat carries on largely unaffected, which makes a Maida Vale bathroom one of the easier programmes to live through — provided there is a second wet room or a cloakroom. Where yours is the only bathroom, we give you a defined number of fully out-of-service days after measuring rather than a vague range, and we concentrate them.",
      "The people who will hear it are below you. A timber intermediate floor transmits floor work, tile cutting and a bath being taken out with great efficiency, and the porter will hear about it before you do. We name the noisy days, work to the hours the building actually keeps rather than the lease's generous version, and let the porter know what is happening — including that a twenty-minute water test is a test rather than a leak.",
    ],
    handover: [
      "The bathroom is tested before it is handed over: the shower run long enough to prove the fall, the waste filled and emptied, the fan checked for real air movement. You receive the tanking record and photographs of the membrane, sanitaryware references for future servicing, Gas Safe documentation where gas work was involved, and electrical notification where the wiring regulations require it. The stair and landings are inspected with the porter. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In a timber-floored flat the things worth checking after a season are the silicone at the bath or tray junction and the grout at internal corners, because both respond to a floor that flexes. A small failure at those lines is how water reaches a ceiling below, which in a mansion block is somebody else's ceiling. We would rather return promptly. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "The porter will not allow a bath in the lift. What happens?",
        a: "It goes up the stairs, planned rather than improvised. We measure the flights, the half-landing turns and the handrail projection at the survey against the actual bath, and put the extra labour in the proposal. It is a routine condition in Maida Vale blocks and entirely workable. Where a particular bath genuinely will not make the turn, we say so while you can still choose a different one.",
      },
      {
        q: "Can we have a level-access shower in a W9 mansion flat?",
        a: "It depends on the depth between your finished floor and the structure, and in these timber-floored blocks that is often less than people hope. A level entry needs room for fall, a waste and a trap, and raising the floor to create it usually collides with the door. We measure at the survey and give a straight answer: level entry, low-profile tray, or a stepped threshold. We will not draw a wet room onto a floor that cannot take the fall.",
      },
      {
        q: "Our neighbours complained about noise from a previous bathroom. Can that be avoided?",
        a: "Substantially, with specification rather than apology. An uncoupling and acoustic mat under the tile, isolation at the perimeter so tile does not bridge to the wall, and careful detailing where the waste passes through the structure all reduce what carries downward. None of it can be added afterwards without lifting the floor, which is why it is decided before the order. In a block with a porter, it is money well spent.",
      },
      {
        q: "Is the pipework in these blocks still original?",
        a: "Some of it, and rarely all of it. These buildings date mainly from the 1890s to the 1910s and have been altered flat by flat ever since, so you get original stacks with modern branches, or the reverse. We inspect what we can reach at the survey and list the rest as provisional items. Finding that a section within your demise needs replacing is ordinary rather than alarming, and it is far better found at first fix than in five years.",
      },
      {
        q: "Will a new extract need Westminster's consent?",
        a: "Inside the flat, replacing a bathroom is not planning's business. A new terminal on an elevation within the Maida Vale Conservation Area often is, and on these blocks the elevation is also the freeholder's fabric, so there may be two permissions rather than one. [VERIFY the boundary for the address.] Where a duct to an acceptable terminal cannot be justified, we say so at the survey rather than cutting first and arguing later.",
      },
      {
        q: "Can you work on the canal-side flats near Little Venice?",
        a: "Yes. The bathroom itself is ordinary; the delivery needs planning. A frontage onto a towpath or a narrow canal-side road may mean heavy items cross a public footway, and there can be interests on the frontage beyond the council [VERIFY with Westminster and, where relevant, the Canal and River Trust]. We plan the drop as part of the method statement rather than dealing with it on the morning with a bath on a pavement.",
      },
    ],
  },

  "swiss-cottage": {
    survey: [
      {
        title: "Purpose-built, converted, or over a frontage",
        text: "The bathroom question here is decided by the building type. An inter-war block off Avenue Road has planned risers and a managing agent; a Victorian house a street back has a half-landing room and a party wall; a flat over a Finchley Road frontage has neither and a commercial tenant below. We establish which before measuring anything.",
      },
      {
        title: "Whether the riser is open to new services",
        text: "In the purpose-built blocks there is usually a planned duct, which makes a bathroom straightforward when it may be used and constrained when it may not. We open a panel where access allows, record connection heights, and ask the managing agent the question in writing rather than assuming a helpful answer.",
      },
      {
        title: "Floor depth against what you want",
        text: "Level access, underfloor heating and waste fall all want the same few centimetres. We measure what exists between finished floor and structure, then say which of the three are realistic. In the later blocks this is often better than in a Victorian conversion, and it is worth knowing before a design is drawn.",
      },
      {
        title: "What is below the room",
        text: "Over another flat, over a commercial unit, or over your own hall are three different risk positions for a wet room. We establish which applies, how the ceiling below is constructed, and what access exists if a waste ever has to be reached. It changes the tanking specification and the inspection provision.",
      },
      {
        title: "Which conservation area covers the street",
        text: "Camden renamed the Swiss Cottage Conservation Area to the South Hampstead Conservation Area, and it covers many residential streets off Finchley Road and Avenue Road; Belsize Conservation Area adjoins to the east. Main-road frontages are often undesignated but extract can still need consent. We check the address. [VERIFY.]",
      },
    ],
    materials: [
      "The later blocks have true walls and square rooms, which means a contemporary specification actually delivers what it promises: large-format tile with narrow joints, a flush shower screen, a wall-hung basin on a properly built frame. In a Victorian house on the side streets those same details fight the fabric, and a smaller format with a more forgiving joint is the honest choice. We say which building you have before the tile is chosen.",
      "Tanking is a documented system in either case, and the difference is where the risk sits. In a purpose-built flat the concern is the penetration at the waste and the junction at the tray. In a converted house it is the timber floor, the movement, and the fact that the room below may belong to somebody else. We define the wet zone generously in the second case and record the membrane before tile covers it.",
      "Where a flat sits above a commercial unit, the specification takes account of what is underneath. Access to a leak from below may be impossible during trading hours, so the detailing matters more and the inspection provision is worth building in. Floor construction over a shop can also be stiffer or weaker than over a flat, and we establish which rather than assuming a domestic build-up.",
    ],
    programme: [
      {
        title: "Consent sized to the building",
        text: "A managed Avenue Road block runs a formal licence process; a converted house may need only a freeholder's letter; a flat over a shop may need the commercial lease considered. We identify which applies and complete it before anything is ordered.",
      },
      {
        title: "Route protection, loading planned off the main road",
        text: "The route in is protected, and heavy items are delivered to a licensed position on a side street rather than to Finchley Road. Loading on a main-road frontage is planned in advance or not attempted.",
      },
      {
        title: "Strip-out with hours agreed",
        text: "Noisy work is named as dates and kept inside the tighter of the council's hours and the building's. Where a commercial tenant sits below, their trading hours enter that calculation and sometimes make early starts easier rather than harder.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound, services run to the riser or the stack, the duct installed, and the waterproofing system applied in sequence with its stated cure time before tiling. The cure is a named period in the programme.",
      },
      {
        title: "Tile, second fix, water test",
        text: "Tiling to a proper set-out, grout, sanitaryware, brassware and a commissioned fan, then a water test. Protection is lifted last and the route inspected before the job is called complete.",
      },
    ],
    access: [
      "Finchley Road is a corridor with buses, a station and constant traffic, and it is a poor place to unload a bath. Where a flat fronts it, the delivery is either licensed and timed or made from a side street with a longer carry, and the proposal says which. On the residential streets off Avenue Road and toward Belsize, Camden's controlled parking applies normally and a skip position is licensed in advance [VERIFY the CPZ and the highway authority for the frontage].",
      "The HPSG office is at 250 Finchley Road, in this neighbourhood, and for a bathroom that has one specific value: the items most likely to arrive damaged or wrong are the heavy ones, and a replacement or an inspection is a short journey rather than a rescheduled week. It does not make the bathroom better. It does make a cracked tray or a missing waste kit a day's problem instead of a fortnight's.",
    ],
    costDrivers: [
      {
        title: "Which building you are in",
        text: "A managed block with a licence process, a converted house with a freeholder, or a flat over a shop with a commercial lease below. The bathroom may be identical and the surrounding obligations are not, and they are the part of the figure that varies most here.",
      },
      {
        title: "Whether the riser accepts new services",
        text: "An accessible riser makes for a clean, quick first fix. A closed one pushes a waste across a floor toward another route, with the consent that implies. It is the first question we put to a managing agent.",
      },
      {
        title: "What the floor depth permits",
        text: "Level entry and underfloor heating both need depth that may not exist. Where it does, the bathroom is better for a modest cost; where it does not, the design changes. Either answer is fine; discovering it late is not.",
      },
      {
        title: "Access on a main-road frontage",
        text: "A licensed, timed loading operation on Finchley Road is a different exercise from a van on a quiet street, particularly with a bath and a pallet of tile. It is decided at the survey and priced rather than left to the delivery driver.",
      },
    ],
    living: [
      "In the Avenue Road blocks, living through a bathroom programme is usually straightforward: there is often a second wet room, the construction keeps dust where you put it, and the room can be sealed at its door. In a converted house on the side streets it is tighter, and where the bathroom is the only one we give you a defined number of out-of-service days rather than a range. Over a shop, the practical issue is that the route in and out passes closer to your living space than anyone would choose.",
      "Who you have to consider changes with the building. Above a commercial tenant, early starts may be entirely acceptable; in a mansion flat off Avenue Road they are not, and the building's hours are strict. We find out what is actually tolerated rather than what the lease permits, name the noisy days, and work the tighter of the two. Where a water test will run for twenty minutes, we mention it in advance so nobody below reports a leak.",
    ],
    handover: [
      "The room is tested rather than presented: the shower run to prove the fall, the waste filled and emptied, the fan checked for genuine air movement. You receive the tanking record and membrane photographs, sanitaryware references for servicing, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Where a managing agent required protection or a method statement, the common parts are inspected and the file closed. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Being based on Finchley Road keeps the follow-up short. A silicone line that wants renewing after the first season, a grout junction that has moved, a brassware cartridge that needs attention — we would rather look at those quickly than have them ignored, particularly where there is a flat or a business below. Telephone 020 7101 3168 or write to office@hpsg.co.uk and we come once for the whole list.",
    ],
    moreFaqs: [
      {
        q: "Our flat is above a shop. Does that change the bathroom specification?",
        a: "It changes the risk and therefore the detailing. Access to a leak from below may be impossible during trading hours, so the tanking detailing and the inspection provision matter more than they would above another flat. The floor construction over a commercial unit also differs from a domestic one and we establish what it is rather than assuming. The shop's trading hours become part of the working-hours plan, which sometimes helps.",
      },
      {
        q: "Can we have large-format tiles?",
        a: "In the later blocks, comfortably — the walls are true and the rooms are square, which is exactly what large format needs. In a Victorian house on the side streets, large tiles on an out-of-square wall mean either a visible taper or a great deal of packing and preparation before a single tile goes up. Both are possible; only one is cheap. We say which building you have and what the preparation would cost before you choose.",
      },
      {
        q: "Does being near your office actually help?",
        a: "For a bathroom, more than you might think. The items most likely to arrive cracked, wrong or incomplete are the heavy ones, and in a room with a fixed sequence a missing waste kit can hold up a tanking day. Being a short distance from 250 Finchley Road turns that into a same-day problem rather than a rescheduled week. The survey, the specification and the standard are identical wherever the address is.",
      },
      {
        q: "Is there a riser we can use?",
        a: "In the purpose-built blocks off Finchley Road and Avenue Road, usually yes, and it makes for a clean first fix. Whether you may join it is a question for the managing agent rather than an assumption, and some buildings keep their risers closed. We open a panel where access allows, record the connection heights, and put the question to the agent in writing. A closed riser changes the design, so we ask before drawing.",
      },
      {
        q: "How much noise does a bathroom make?",
        a: "Less than a kitchen overall, but in sharper bursts. Strip-out, floor work and tile cutting are genuinely loud, and they transmit through a floor into the flat below rather than along a corridor. The rest — tanking, curing, tiling, grouting — is quiet. We name the loud days at the start so neighbours can plan around them, and we keep to whichever set of hours is tighter.",
      },
      {
        q: "Which conservation area are we in?",
        a: "It depends on the street. Camden's South Hampstead Conservation Area, renamed from Swiss Cottage, covers many residential streets off Finchley Road and Avenue Road, and Belsize Conservation Area adjoins to the east. Main-road frontages are frequently outside any designation. None of it affects a bathroom inside a room; it affects an extract terminal on an elevation, and we check the address before designing one. [VERIFY.]",
      },
    ],
  },

  "primrose-hill": {
    survey: [
      {
        title: "How far the bathroom is from the drainage",
        text: "In a split house the bathroom is frequently a long way from the drainage the building actually uses, and the available fall over that distance is the whole design. We measure it rather than estimate it, because a run that loses its gradient halfway is a bathroom that never clears properly no matter what is fitted in it.",
      },
      {
        title: "Whether a lower-ground room is dry",
        text: "Where the bathroom sits below ground, we look for existing damp, the state of any tanking a previous owner installed, and how the room ventilates. A wet room built over a moisture problem hides it for a year. We report what we find and say whether the room is ready.",
      },
      {
        title: "Extract from below ground level",
        text: "Venting a basement bathroom needs a duct that rises to a terminal which is neither in a light well recirculating its own air nor on an elevation protected by the conservation area and Camden's Article 4 direction. We work out the route at survey and say if the honest answer is a different position or a different strategy. [VERIFY the boundary.]",
      },
      {
        title: "Party walls in a terrace",
        text: "Primrose Hill terraces are close together and the bathroom is often against the party wall. We establish the construction, because chasing a supply into a party wall and tiling onto it are different propositions from doing the same on an internal partition, and the neighbour hears both.",
      },
      {
        title: "What the street will take on the day",
        text: "The roads around the park are narrow and busy at weekends. We record where a vehicle can stand with a bath on it, for how long, and on which day that is true. A heavy delivery planned for a Saturday morning near the park is a delivery planned badly.",
      },
    ],
    materials: [
      "A lower-ground bathroom needs light and durability more than it needs drama. A pale tile, a mirror positioned to work with whatever daylight arrives, and lighting designed as part of the room rather than left to a single ceiling fitting. Ventilation is part of the specification here, not an accessory: a properly sized fan with a real duct and a run-on timer, chosen for the room rather than for the box it comes in.",
      "Waterproofing below ground is specified with more margin than above it. The wet zone is defined generously, the whole floor is tanked, and the system comes from one manufacturer so the boards, tapes, corners and membrane work together. Where the structure itself has a history of moisture, we say plainly that a tanked shower does not solve a damp wall, and we separate the two problems rather than covering one with the other.",
      "In the upper-floor flats and the family houses facing the park, the conversation changes to proportion and joinery. Rooms with good ceiling heights and original details take a classic specification well, and a tiled wet zone with a painted finish above usually reads better than tile to the cornice. Sanitaryware is specified as identifiable products so that in ten years a part can be matched rather than guessed at.",
    ],
    programme: [
      {
        title: "Damp and ventilation settled first",
        text: "In a lower-ground room, water in the structure is resolved before a bathroom is designed. This sometimes shortens the job and sometimes stops it. Both are better than tanking over a problem and finding it again in two years.",
      },
      {
        title: "Consent and the terminal agreed",
        text: "Where a duct has to reach an elevation, the position and any consent are settled before strip-out. The Article 4 direction is checked on the address rather than assumed from the neighbourhood.",
      },
      {
        title: "Strip-out, timed to the street",
        text: "The skip is licensed for a position and a day that works on a narrow street, which in practice means midweek. The route is protected first, including any original hall floor and the external steps where the room is below ground.",
      },
      {
        title: "Floor, first fix, fall proven",
        text: "The deck is made sound, and the long waste run is set out and its gradient physically checked before anything is closed up. In a split house this is the stage most likely to require a change of plan, and it is the right place for it.",
      },
      {
        title: "Tanking, tile, second fix, test",
        text: "The waterproofing system is applied and given its cure, then tiling, grout, sanitaryware and brassware, the fan commissioned and set, and the room tested with water before handover.",
      },
    ],
    access: [
      "Narrow streets and weekend visitors to the park make heavy deliveries a planning matter rather than a phone call. A bath, a stone tray or a pallet of tile arriving on a Saturday morning will block a street and attract an audience. We book midweek wherever possible, agree the standing position at survey, and have our own crew on the pavement to unload. Camden's controlled parking applies [VERIFY the CPZ for the street].",
      "Where the bathroom is in a lower-ground flat, the route is often down external steps from the street, which is better for dust and worse for weather and heavy items. We survey those steps including the headroom under any bay above them, because a bath that cannot pass beneath a bay is a bath that has to go back. Camden issues the skip licence; bathroom waste is bagged at the room, carried up and removed the same day rather than stacked at the foot of the steps.",
    ],
    costDrivers: [
      {
        title: "Whether the room is dry",
        text: "A sound below-ground room is an ordinary bathroom. One with failed or absent tanking in the structure is a different project with a different figure, and it is honest to establish which before designing rather than after.",
      },
      {
        title: "How far the drainage has to travel",
        text: "A long waste run with marginal fall costs more to build, constrains the layout, and may need a pumped solution with its own power supply and maintenance. This is the biggest single variable on a split-house bathroom here.",
      },
      {
        title: "Extract from a basement",
        text: "Getting air from below ground to an acceptable terminal can mean a substantial duct route and boxing to conceal it. A short run and a long run are very different figures, and the choice is a consent question as much as a technical one.",
      },
      {
        title: "Getting heavy items down the steps",
        text: "External steps, a bay overhead and a narrow gate are a handling cost on every heavy delivery, and they can rule out a particular bath or tray entirely. Measured at survey, named in the proposal, not left to a delivery crew to solve.",
      },
    ],
    living: [
      "Family houses here usually have more than one bathroom, which makes the programme easy to live through, and we keep the second one fully in service throughout. A garden flat with a single lower-ground bathroom is the harder case, and we give you a defined number of fully out-of-service days after measuring. Dust from a below-ground strip-out rises through a house rather than staying where it is put, so we screen at the stair as well as at the room.",
      "Weekends around the park are different from weekdays. Visitors fill the streets, parking is scarce and neighbours are at home, so we keep vehicles off the street at weekends where the programme allows and we do not run noisy work at the weekend at all. In a terrace this close together, the goodwill of the house next door is worth more than an extra Saturday, and we would rather add a day midweek.",
    ],
    handover: [
      "The room is tested before it is handed over: the shower run long enough to prove the fall on a long run, the waste filled and emptied, and the ventilation demonstrated working rather than merely switched on. You receive the tanking record and membrane photographs, sanitaryware references, Gas Safe documentation where relevant, and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Below-ground rooms are worth revisiting after a winter. Damp behaves seasonally, a long waste run reveals its gradient over months rather than days, and an extract that seemed adequate in September can disappoint in February with every window shut. We would rather come and look than have you wonder. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and we take the list in one visit.",
    ],
    moreFaqs: [
      {
        q: "Can we put a shower room in the lower ground floor?",
        a: "Often, and the three questions are drainage, ventilation and whether the room is dry. The waste needs fall to reach the drainage the building uses, which may be some distance; the extract needs a duct to a terminal that is neither in a light well nor on a protected elevation; and the structure needs to be free of moisture before anything is tanked over it. We answer all three at the survey rather than designing first and discovering later.",
      },
      {
        q: "Our basement smells damp. Will tanking the shower fix it?",
        a: "No, and it is important to be clear about that. Tanking a wet zone stops water from the shower reaching the structure. It does nothing about water coming the other way, from the ground into the wall. Those are two separate problems and covering one with the other simply hides it for a year or two. We investigate at the survey, report what we find, and say whether the room needs work that is not a bathroom instruction.",
      },
      {
        q: "Will we need a pump for the waste?",
        a: "Only where gravity genuinely will not do it. A long run with marginal fall sometimes leaves no alternative, and a pumped solution is legitimate with real consequences: it needs power, it makes noise, and it wants servicing. We would rather move a fitting to where the fall exists. Where a pump is the only way, it is specified openly with its maintenance explained rather than installed quietly at first fix.",
      },
      {
        q: "Does Camden's Article 4 direction affect a bathroom?",
        a: "Not inside the room. The direction and the Primrose Hill Conservation Area are concerned with the outside of the building — rooflines, front gardens, windows and what the street and the park can see. A bathroom fitted within an existing room is not their business. They become relevant at the point an extract terminal appears on an elevation, and for a house backing onto the park that elevation is unusually visible. [VERIFY the boundary for the address.]",
      },
      {
        q: "Can a bath get down the area steps?",
        a: "We measure before anything is ordered. External steps to a lower-ground flat, a gate at the top and the headroom under a bay above them are the combination that catches people out, and a bath is exactly the wrong shape for it. Where a particular bath will not pass, there is nearly always an alternative that will, and choosing it early avoids a delivery standing on the pavement while somebody makes a phone call.",
      },
      {
        q: "Can you avoid weekend work?",
        a: "Yes, and near the park we prefer to. Weekend traffic makes deliveries unreliable, residents' parking is already scarce, and noisy work into a neighbouring terrace on a Saturday costs goodwill worth more than the day. We add time midweek instead. Where a client specifically needs weekend access for their own reasons, we would speak to the neighbours first rather than simply turning up with a grinder.",
      },
    ],
  },

  highgate: {
    survey: [
      {
        title: "Which authority, before anything else",
        text: "Highgate is split between Camden and Haringey with some streets in Islington, and each licences and charges separately. For a bathroom the practical effect is the skip licence and the parking, and getting it wrong costs a week. We confirm the council from the address at the survey. [VERIFY for the frontage.]",
      },
      {
        title: "Distance from the bathroom to the stack",
        text: "Villas on the slopes and converted Village houses both tend to place bathrooms a long way from the drainage that serves the building, particularly where an ensuite has been added later. We measure the run and the fall available, because marginal gradient over a long distance is the defining technical problem of a Highgate bathroom.",
      },
      {
        title: "What the floor is, and what it will carry",
        text: "Timber floors in a Victorian villa, boards over a converted hall, or a later addition with a different build-up entirely: we establish which, plus joist span and direction. A stone-tiled bathroom is heavy, and a deck that moves will crack the floor at the perimeter within a year.",
      },
      {
        title: "Listed fabric, where it applies",
        text: "Around Pond Square and the High Street the stock is finer-grained and more heavily listed. We identify what is original in and around the bathroom, because fixings, chasing and any change to the fabric are treated quite differently from the same work in a later villa.",
      },
      {
        title: "The approach, on a hill",
        text: "Steep roads, limited turning and Village pedestrian traffic mean a bath and a pallet of tile cannot simply be dropped at a kerb. We record where a vehicle can safely stand on the gradient and how far heavy items travel on foot, because on some of these streets that is the defining logistical fact.",
      },
    ],
    materials: [
      "Highgate splits into two material conversations, as its kitchens do. In a listed Village house the bathroom is a careful insertion: fixings into later material, a wet zone that does not spread across original fabric, and finishes that sit quietly in a room with history. In a Victorian villa on the slopes there is more room and more licence, and a fuller specification suits the proportions without looking like it is straining.",
      "Light here is green and filtered for much of the year because of the trees, and it flatters warm materials far more than cool ones. A cold grey tile that looks crisp in a showroom can read as dead in a room overlooking woodland or Waterlow Park. We ask to see samples in the actual room across a day rather than under artificial light, and we will say if a chosen finish is going to disappoint in that particular position.",
      "Where the waste run is long, the materials follow the plumbing. A raised plinth or a boxed route to carry a pipe at gradient, a shower position dictated by fall rather than by preference, and a floor build-up that accommodates the run are settled first; the visible bathroom is designed around them. It is the reverse of the showroom order, and it is why the finished room works.",
    ],
    programme: [
      {
        title: "Confirm the authority, then licence",
        text: "Skip and scaffolding licences from the correct borough, which is a question of the address rather than the neighbourhood. In Highgate this is genuinely easy to get wrong, and getting it wrong is a lost week.",
      },
      {
        title: "Listing and consent resolved",
        text: "Where the building is listed or anything will appear on an elevation, the position is settled before strip-out. A bathroom inside an existing room is ordinary; a new terminal in listed fabric is not.",
      },
      {
        title: "Protection and a delivery sized to the hill",
        text: "The route is protected and heavy items are delivered by a vehicle the road will actually take, with a transfer to a smaller van where the gradient or the turning demands it.",
      },
      {
        title: "Floor, first fix, fall proven",
        text: "The deck is made sound, the long waste run is set out and its gradient physically checked before anything is closed up, and the duct is installed to its terminal. This is where a Highgate bathroom is won or lost.",
      },
      {
        title: "Tanking, tile, second fix, test",
        text: "The waterproofing system is applied and cured, then tiling, grout, sanitaryware and brassware, the fan commissioned, and the room tested with water before the protection is lifted.",
      },
    ],
    access: [
      "The hill defines the delivery. Steep roads, limited turning at the top of several of them, and a Village full of pedestrians mean a long-wheelbase vehicle carrying a bath cannot simply arrive and unload. We establish at survey where a vehicle can stand safely on the gradient, how far the carry is, and whether a smaller transfer van is needed for the final approach. Where a trolley cannot be used on the slope, items are handballed, and that is a labour line rather than an assumption.",
      "Licensing follows the borough, which here means checking rather than guessing: Camden, Haringey or Islington according to the frontage [VERIFY for the address]. On Heath-facing and wooded plots there is a further consideration — the ground itself may be protected by a tree preservation order or a conservation-area notice, and a delivery vehicle standing on roots is a problem that outlives the bathroom. We plan the standing position with that in mind.",
    ],
    costDrivers: [
      {
        title: "The distance to the drainage",
        text: "A bathroom close to an existing stack is ordinary. One at the far end of a villa with marginal fall over a long run needs more work below the floor, constrains the layout above it, and occasionally needs a pumped solution. This is the largest variable in Highgate houses.",
      },
      {
        title: "What the floor needs before tiling",
        text: "Strengthening or overboarding a timber deck so it will carry stone without moving is ordinary work, priced as work. Leaving it out is the usual reason a floor tile cracks in a line across a room a year after it was laid.",
      },
      {
        title: "Listed fabric and working around it",
        text: "Where original material must be protected and worked around rather than through, the work is slower and the fixings more considered. It is proper practice and it is priced as such rather than rushed to a price.",
      },
      {
        title: "The carry up a slope",
        text: "Distance and gradient between a safe standing position and the door is measurable, and with bathroom items it is significant. It is measured at the survey and named in the proposal rather than discovered by a delivery crew.",
      },
    ],
    living: [
      "Highgate houses generally have more than one bathroom, and where they do the programme is easy to live through: we keep the others fully in service, seal the working room at its door and cover the route. Village houses are tighter and a listed interior needs more protection rather than less, which makes the screened area larger. Where there is only one bathroom we say so at the survey and give a defined number of fully out-of-service days rather than a range.",
      "Neighbours here are mostly in their own houses rather than stacked above you, so the noise conversation is about sound across a boundary rather than impact through a floor. It is more forgiving, but the streets are quiet and wooded and sound carries. We name the noisy days, keep to the hours of whichever council applies, and avoid starting heavy work early on a steep residential street where every house has a bedroom at the front.",
    ],
    handover: [
      "The walk round covers the bathroom and the fabric around it. Where there is listed or original material in or near the room, we show you what was protected and how it has come through. The shower is run long enough to prove the fall on a long waste, the waste is filled and emptied, and the fan is checked for real air movement. You receive the tanking record, membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Older Highgate houses move seasonally more than most, partly through exposure and partly through the ground, and a bathroom shows it at the silicone and the grout lines first. A long waste run is also worth a second look after a winter of real use. We come back for both in one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can we add an ensuite in a Highgate villa?",
        a: "Often, and the question is drainage rather than space. An ensuite added to a bedroom is usually a long way from the stack, and the fall available over that distance decides whether it will work by gravity at all. We measure the run at the survey and give a straight answer. Where gravity will not do it, a pumped solution is possible but brings power, noise and servicing with it, and we would rather you chose that knowingly.",
      },
      {
        q: "Our house is listed. Can we change the bathroom?",
        a: "Yes, in most cases. Replacing sanitaryware, tiling and services inside an existing room is ordinary work in a listed house and it is what we do here regularly. What changes is the care: fixings go into later material rather than original fabric, protection is thorough, and anything that would alter the building — a new terminal, a changed opening, work to original joinery — is a consent question settled before it is priced. We check the listing on the address first.",
      },
      {
        q: "Which council issues our skip licence?",
        a: "It depends on the frontage and it is a real question here. Camden and Haringey both hold parts of the Village and the slopes, and some streets sit with Islington, each with its own application, fee and timescale. We check the address before applying. A licence from the wrong borough is not a licence, and with a bathroom strip-out already bagged and waiting, that is an expensive kind of wrong. [VERIFY.]",
      },
      {
        q: "Can a bath get up our road and into the house?",
        a: "Usually, with the right vehicle and a plan. Some Highgate streets take a long vehicle comfortably and some do not, and the turning at the top matters as much as the gradient. We look at the approach at the survey, decide whether to transfer to a smaller van, and measure the door and stair against the actual bath. It is a routine constraint here and entirely manageable when it is planned rather than discovered.",
      },
      {
        q: "There is a protected tree near the house. Does that matter for a bathroom?",
        a: "It can, even though the work is internal. A vehicle standing on roots, material stacked within a tree's protection area, or a skip placed on a verge can all breach an order or a conservation-area notice. We check for tree preservation orders and conservation-area constraints with the correct borough and plan the standing and storage positions around them before the first delivery. [VERIFY with the right authority.]",
      },
      {
        q: "The floor feels springy. Can we still tile it?",
        a: "Not until it does not. A timber floor with noticeable deflection will crack tile and grout, usually at the perimeter and usually within the first year, and no adhesive or membrane compensates for a deck that moves. We establish joist size, span and condition at the survey and price the strengthening or overboarding needed. It is ordinary work and it is the single most commonly omitted item in a cheap bathroom quotation.",
      },
    ],
  },
  "golders-green": {
    survey: [
      {
        title: "How many bathrooms the house actually has",
        text: "Family houses here often have two or three wet rooms, and the survey establishes which are in scope and which stay in service. That is not administration; it decides whether the household can stay comfortably, whether rooms can be done together, and how the programme is shaped around the family rather than around us.",
      },
      {
        title: "The original bathroom position and what has moved",
        text: "Edwardian and inter-war houses were built with a bathroom, usually over the kitchen or off the half-landing, and most have gained an ensuite since. We trace what was original and what was added, because a later ensuite is frequently the room with the marginal fall and the improvised waste.",
      },
      {
        title: "Floor construction across two eras",
        text: "Where a bathroom sits partly in the original house and partly in an earlier rear addition, the floor changes construction along its length. We establish the joist direction, span and any step, because tiling across that line without addressing it is how a crack appears in a straight line a year later.",
      },
      {
        title: "Water supply for more than one shower",
        text: "Adding an ensuite or a second shower to a house that was plumbed for one changes what the supply has to deliver simultaneously. We measure flow and pressure, establish whether a cylinder or a combination boiler is serving the house, and say what it will actually support before anything is specified.",
      },
      {
        title: "Where the vehicle and the skip go",
        text: "Off-street parking is common here and it materially eases a bathroom delivery. We confirm the drive dimensions, the gate width and whether the surface will take a loaded vehicle. Where there is no drive, Barnet issues the skip licence and a street position is arranged instead.",
      },
    ],
    materials: [
      "Bigger rooms let a bathroom be a room rather than a compartment. A separate bath and shower, a double basin where the wall length supports it, and storage that is actually joinery rather than a plastic cabinet are all realistic here in a way they are not in a conversion. The discipline worth keeping is restraint in materials: two finishes doing the work rather than five competing in a large space.",
      "Where a bathroom spans the junction between the original house and an earlier rear addition, materials and detailing have to tolerate two backgrounds that move differently. A movement joint at the right position, a decoupling membrane under the tile, and a considered tile layout that does not put a full tile across the line are the difference between an invisible junction and a permanent crack.",
      "With more than one wet room in a house, specifying consistently is worth more than specifying individually. The same tanking system, compatible brassware from one range, and sanitaryware with matched references mean that servicing in ten years is a single conversation rather than three. It also stops a house reading as a set of unrelated bathrooms fitted in different decades, which is exactly what most of these houses currently are.",
    ],
    programme: [
      {
        title: "Scope, sequence and which room stays open",
        text: "With two or three wet rooms the first decision is which is done when, so the household always has one in service. That sequence is agreed before anything is ordered and it shapes the whole programme.",
      },
      {
        title: "Protection and a drive delivery",
        text: "The route through the house is protected, and where there is a drive the heavy items come to the door, which removes most of the handling risk on a bath or a stone tray. Barnet's skip licence is arranged where the skip must sit on the street.",
      },
      {
        title: "Strip-out to structure",
        text: "The room is taken back so the floor, the walls and the services can be seen. In a house altered several times this is where the real arrangement finally becomes visible and where provisional items land.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound including any junction with an earlier addition, services run, the duct installed, then the waterproofing system applied in sequence and given its stated cure before tile.",
      },
      {
        title: "Tile, second fix, test, then the next room",
        text: "Tiling, grout, sanitaryware, brassware and a commissioned fan, the room tested with water, and only then does the next wet room start if more than one is in scope.",
      },
    ],
    access: [
      "This is the easiest access in our area and it is worth saying plainly. Off-street parking is common, plots are wider, and a delivery vehicle can often reach the door, which removes the handling premium that dominates a bathroom in a Camden conversion. A bath, a stone tray and a pallet of tile go in at ground level rather than up a shared stair. The proposal reflects that rather than carrying an allowance nobody needs.",
      "The friction is on the main roads. Loading on Golders Green Road or Finchley Road at peak is slow and unreliable, and a heavy delivery booked into the morning rush will lose its slot. We schedule large drops for the middle of the day. Where there is no drive, Barnet issues the skip and scaffolding licences; where there is one, the surface is worth checking first, because a loaded skip lorry on decorative block paving can cost more to put right than the licence would have.",
    ],
    costDrivers: [
      {
        title: "How many rooms are in scope",
        text: "Two bathrooms in one programme are cheaper per room than two separate visits, because the protection, the set-up and the trades overlap. It is one of the few genuine efficiencies in this work and it is worth deciding before the first room starts.",
      },
      {
        title: "The junction with the earlier addition",
        text: "Where a bathroom spans original fabric and a rear addition, the levelling, decoupling and movement detailing at that line is real work and is priced. Skipping it is how a tiled floor develops a crack in a straight line.",
      },
      {
        title: "What the supply will support",
        text: "Where a house plumbed for one shower is being asked to serve two or three, work to the supply may be needed. That is a legitimate item and it is better identified at survey than discovered when both showers run badly.",
      },
      {
        title: "Size, honestly",
        text: "A large family bathroom has more floor, more wall, more tile and more sanitaryware than a conversion room. The figure follows the schedule rather than the postcode, which is why we measure rather than estimating from a photograph.",
      },
    ],
    living: [
      "A family house here absorbs a bathroom programme better than any flat can, particularly where there is a second wet room to keep in service. We sequence the rooms so one is always usable, put the temporary arrangements in place before anything comes out, and screen the working room at its door rather than draping a sheet across it. The route to the front door stays covered and clear at the end of each day.",
      "Neighbours are in their own houses, which makes the noise question easier than in a conversion, though a party wall in a semi carries tile cutting and floor work clearly. We name the loud days, work Barnet's ordinary hours, and let the immediate neighbours know beforehand. Where two wet rooms run in sequence, the noisy periods are concentrated rather than spread thinly across two months.",
    ],
    handover: [
      "Each room is tested before it is handed over: the shower run long enough to prove the fall, the waste filled and emptied, and the fan checked for real air movement. Where more than one bathroom was in scope, the documentation comes as one set — tanking records, membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Larger houses move with the seasons and a big tiled floor shows it first at the perimeter and at any junction with an older addition. The silicone at a bath edge in a family bathroom also earns attention sooner than one in a guest room, simply because of use. We would rather return once and deal with everything. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can you do two bathrooms at once?",
        a: "Yes, and it is usually the sensible way in a house with more than one. Running them in sequence rather than simultaneously keeps one wet room in service throughout, and the set-up, protection and trades overlap enough to make it more efficient than two separate visits months apart. We agree the order before anything is ordered, because that sequence is what determines how comfortable the household is for the duration.",
      },
      {
        q: "Will two showers run at once on our supply?",
        a: "That depends on what is feeding the house, and it is measured rather than assumed. A house plumbed for a single bathroom in 1930 and extended since may have a supply that copes with one shower and disappoints with two. We test flow and pressure at the survey and say plainly what the system will support. Where work to the supply is needed to deliver what you want, that is identified before specification rather than after commissioning.",
      },
      {
        q: "Our ensuite drains badly. Can that be fixed?",
        a: "Usually, and the cause is nearly always fall rather than blockage. Ensuites added later in these houses are often a long way from the stack with a waste laid at whatever gradient was available at the time. We survey the run, establish what fall actually exists, and say whether it can be re-made properly, whether a fitting needs to move, or whether a pumped solution is the realistic answer. Guessing at it is how the problem repeats.",
      },
      {
        q: "The bathroom floor cracked last time it was tiled. Why?",
        a: "Almost always movement rather than the tile. A timber deck that deflects, or a floor that changes construction where the original house meets a rear addition, will crack tile and grout along a predictable line. The fix is in the preparation: strengthening or overboarding the deck, a decoupling membrane, and a movement joint at the junction rather than a full tile bridging it. We look for exactly this at the survey because it is the most common repeat failure here.",
      },
      {
        q: "Do we need a skip licence if we have a drive?",
        a: "Not if the skip sits entirely on your own property, which is one of the practical advantages of this stock. Where it has to stand on the street, Barnet issues the licence and we arrange it. The drive surface is worth looking at first: a loaded skip lorry on decorative block paving can leave marks that cost more to put right than the licence. We check it at the survey.",
      },
      {
        q: "Can we keep the family in the house?",
        a: "Almost always here, and comfortably where there is a second wet room. Even where there is only one, a family house usually has a cloakroom and enough separation that the working room can be properly sealed rather than screened across an opening. We agree the sequence so that the fully out-of-service days are as few and as concentrated as the work allows, and we tell you the number rather than a range.",
      },
    ],
  },

  "queens-park": {
    survey: [
      {
        title: "Brent or Westminster",
        text: "The neighbourhood straddles a borough boundary and the two councils licence and charge separately. For a bathroom the practical consequence is the skip and the parking, and an application to the wrong authority is simply not a licence. We confirm which owns your frontage at the survey. [VERIFY the borough for the address.]",
      },
      {
        title: "Estate cottage or larger terrace",
        text: "A decorative brick cottage on the Queen's Park Estate has a small, tightly planned bathroom, often added into a space that was not originally one. A larger terrace near the park has a half-landing room or a rear-addition bathroom. The two are different jobs and the survey names which you have first.",
      },
      {
        title: "How the bathroom was made",
        text: "In the smaller houses the bathroom is frequently a later insertion into a bedroom corner or a rear addition, with partitions that are lighter than they look and services borrowed from wherever was nearest. We open up enough to know, because that arrangement determines what a new layout can realistically do.",
      },
      {
        title: "The tiled path and what crosses it",
        text: "Original tiled paths and encaustic thresholds are common here and they break under point loads. A bath on a trolley is exactly that load. We record what is on the route, photograph it, and write the protection into the method rather than trusting to care on the day.",
      },
      {
        title: "Which conservation area applies",
        text: "Brent's Queen's Park Conservation Area covers streets around the park; Westminster's Queen's Park Estate Conservation Area is a separate designation with its own audit. They are not interchangeable and the boundary is not obvious on the ground. Both maps are checked against the address. [VERIFY.]",
      },
    ],
    materials: [
      "Small bathrooms want fewer materials, not more. In an Estate cottage a single wall tile carried through, a floor tone that supports it, a wall-hung basin that leaves floor visible and a clear screen rather than a curtain will make a compact room feel considered. What makes it feel smaller is three finishes meeting within two metres, which is the most common mistake in a bathroom this size.",
      "Where the room is a later insertion into lighter partitions, the tanking specification is more generous rather than less. The whole floor is tanked, the wet zone is defined widely, and the detailing at the corners, the tray junction and the waste penetration is recorded before tile covers it. A wall-hung fitting needs a properly built frame rather than a hope, and in a partition of unknown construction that frame is the job.",
      "Handling shapes the material choice as it does in the kitchens here. A narrow Victorian or Edwardian front door, a tiled path that will not take a trolley and a turn into a hall mean a heavy one-piece tray or a cast bath may simply not reach the room. We measure the route against the actual items at survey and offer a lighter equivalent early rather than leaving it to a delivery driver to discover.",
    ],
    programme: [
      {
        title: "Confirm the council, then licence",
        text: "Brent or Westminster, established from the address rather than the neighbourhood name, with its own fee and timescale. This is settled before a strip-out day is offered.",
      },
      {
        title: "Path and hall protection",
        text: "The tiled path, the threshold and the hall floor are boarded before anything crosses them. In this stock that protection is not a formality: what it covers cannot be replaced convincingly.",
      },
      {
        title: "Strip-out to structure",
        text: "The room is taken back so the partitions, the floor and the borrowed services can be seen. In an inserted bathroom this is where the real arrangement finally emerges.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound, a frame is built properly for any wall-hung fitting, services are run, and the waterproofing system is applied in sequence with its stated cure before tiling.",
      },
      {
        title: "Tile, second fix, test",
        text: "Tiling, grout, sanitaryware, brassware and a commissioned fan, the room tested with water, and the path and hall protection lifted with the surfaces checked against the photographs.",
      },
    ],
    access: [
      "Two councils, two licensing regimes, one neighbourhood, and no marking on the street to tell you which is which. We confirm the authority for the frontage at the survey and apply to the right one [VERIFY]. Salusbury Road is the commercial spine and a busy loading environment, which makes it the wrong place to stand a lorry with a bath on it. We licence a position on a residential street instead and time the drop away from the school run and the shop deliveries.",
      "The front of the house is the other constraint, and for bathroom items it is the harder one. A small front garden, a gate, and a narrow decorative tiled path between them and the door is a combination that will not take a loaded trolley. We board the path, carry rather than wheel, and photograph before and after. Matching a broken original tile is difficult and rarely convincing, which is exactly why the protection is taken seriously.",
    ],
    costDrivers: [
      {
        title: "Cottage or terrace",
        text: "An Estate cottage bathroom is a small, precise job constrained by space; a larger terrace has a half-landing or rear-addition room with more scope and more fabric. Different figures for the same service, and the survey decides which you have.",
      },
      {
        title: "What an inserted room turns out to be",
        text: "Light partitions, borrowed services and a floor never intended to be wet are common where a bathroom was added later. Building a proper frame and tanking generously is the right answer and it is priced rather than skipped.",
      },
      {
        title: "Whether heavy items can reach the room",
        text: "The front door, the path and the hall decide whether a one-piece tray or a cast bath is deliverable. Where they are not, the specification changes, and that is settled before ordering rather than on a delivery morning.",
      },
      {
        title: "Protecting what cannot be replaced",
        text: "Boarding an original tiled path and reinstating it properly takes time and materials. It is included and named. A repair to a broken original tile costs far more than the protection would have, and rarely looks right.",
      },
    ],
    living: [
      "In a two-storey terrace with one bathroom, a bathroom programme means arranging somewhere else to wash for a defined number of days, and we give you that number after measuring rather than a range. Larger terraces near the park sometimes have a second wet room, which changes everything. In an Estate cottage the house is small enough that the work is present throughout, and we are honest about that at the survey rather than letting it emerge in week one.",
      "Terraced neighbours are immediate here, with narrow back-to-back gardens and thin party walls. Tile cutting and floor work are audible in the next two or three houses on a still day. We name the noisy dates, keep inside the applicable council's hours, and tell the neighbours beforehand. In a street where everybody knows everybody, that is worth more than an extra hour of working time.",
    ],
    handover: [
      "The room is tested rather than merely finished: the shower run to prove the fall, the waste filled and emptied, the fan checked for genuine air movement. The tiled path, threshold and hall floor are inspected at the same visit and compared with the photographs from day one. You receive the tanking record, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Small bathrooms show wear where they are used hardest, and in a cottage those points are predictable: the silicone at the bath edge nearest the door, the grout in the corner of a shower used twice a day. We would rather renew a line at six months than have you watch it fail slowly. Telephone 020 7101 3168 or write to office@hpsg.co.uk and we take the whole list in one return visit.",
    ],
    moreFaqs: [
      {
        q: "Are we in Brent or Westminster?",
        a: "It depends on the street, and the boundary is not obvious. Brent's Queen's Park Conservation Area covers streets around the park; Westminster's Queen's Park Estate Conservation Area is a separate designation with its own audit. Skip licences, scaffolding licences and parking all follow the council that owns your frontage. We confirm it from the address at the survey rather than from the neighbourhood name. [VERIFY.]",
      },
      {
        q: "Can a cast bath get down our path and through the door?",
        a: "Measure first. A narrow front gate, a decorative tiled path that will not take a trolley and a Victorian front door with a turn into the hall are a real combination here, and a cast bath is the worst possible shape for it. Where it will not go, a steel or acrylic equivalent usually will, and choosing early is far better than having a bath standing on a pavement while somebody makes a phone call.",
      },
      {
        q: "Our bathroom was built into the corner of a bedroom. Is that a problem?",
        a: "It is a set of questions. The partitions are often lighter than they look, the floor was not built to be wet, and the services were probably borrowed from the nearest convenient point. We strip back to see what is there, build a proper frame for any wall-hung fitting rather than relying on a partition, and tank generously. Where something cannot be established without opening up, it is listed as a provisional item rather than assumed.",
      },
      {
        q: "Will the original tiled path survive a bathroom delivery?",
        a: "If it is boarded first, yes. These paths break under point loads from trolleys rather than from footfall, so the rule on site is to carry across a boarded route rather than wheel. A bath and a pallet of tile are exactly the loads that break them. We photograph the path before and after and check it with you at handover, because matching a broken original tile is difficult and rarely convincing.",
      },
      {
        q: "Can you load from Salusbury Road?",
        a: "We would rather not. It is the commercial spine of the neighbourhood, busy with shop deliveries and the school run, and a lorry standing on it with a bathroom to unload is slow and unpopular. We licence a position on a residential street and time the drop around the busier hours. The carry is a little longer and the delivery actually happens, which is the trade worth making every time.",
      },
      {
        q: "Is it worth doing a small bathroom properly?",
        a: "More than a large one, because every surface is within reach and every shortcut is in front of you daily. In a cottage bathroom the tanking detail, the frame behind a wall-hung basin and the fall at the shower matter far more than the tile you chose. We spend the survey on the construction and the specification on the things that fail when they are skimped, and the result is a small room that lasts rather than one that photographs well.",
      },
    ],
  },

  "muswell-hill": {
    survey: [
      {
        title: "The original bathroom over the return",
        text: "Edwardian houses here generally put the bathroom over the rear return or off the half-landing, with the stack close by. That is a good starting position and we survey it as one: connection point, fall available, and whether the room has been altered since. What complicates it is usually a later ensuite somewhere else in the house.",
      },
      {
        title: "Generous rooms, and what that allows",
        text: "Bathrooms in these houses are often larger than the neighbourhood average, which opens up a separate bath and shower and proper storage. We measure the full room rather than the fittings, because the difference between a bathroom and a compartment here is whether the plan uses the space it has.",
      },
      {
        title: "Timber floor, and what it will carry",
        text: "We establish joist size, span and direction, and the condition of what is bearing on them. A large tiled floor in a generous Edwardian bathroom is a lot of weight, and a deck with noticeable deflection will crack the floor at the perimeter regardless of what adhesive is used.",
      },
      {
        title: "Getting a bath up the hill and into the house",
        text: "The approach is the constraint here. Some streets are steep enough that a long vehicle is unsuitable, and heavy items then travel further on foot. Against that, the halls are wide and the doors generous, so once the item reaches the door the rest is usually easy. We measure both halves of the journey.",
      },
      {
        title: "Which designation covers the street",
        text: "Haringey designated the Muswell Hill Conservation Area on 1 March 1974, covering the Broadway and many surrounding residential streets, with Fortis Green Conservation Area designated the same day to the north-west. Residential fenestration is sensitive, and an extract terminal is a consent question. [VERIFY on Haringey's map.]",
      },
    ],
    materials: [
      "A generous Edwardian bathroom can carry a proper scheme: a freestanding or panelled bath and a separate shower enclosure, a basin with real worktop either side, and storage built as joinery rather than bought as a cabinet. The restraint worth keeping is in the number of materials. Two finishes doing the work in a large room reads far better than five, and it ages better too.",
      "Where the room retains an original window with a deep reveal, we keep it clear rather than tiling into it, because the light reaching the floor is what makes these rooms feel as good as they do. Sash windows in a bathroom also need honest assessment: a failed cord or perished putty in a wet room is a joinery item, and it is much easier dealt with before the room is tiled than afterwards.",
      "Tanking is a documented system regardless of how large the room is, and in a big bathroom the temptation is to tank only the shower. We define the wet zone generously, tank the whole floor, and record the membrane before tile. A large room with a separate shower has more junctions, not fewer, and each one is a place where a system properly detailed will hold and an improvised one will not.",
    ],
    programme: [
      {
        title: "Scope, sequence and consent where needed",
        text: "For a single-family house the lead-in is design and procurement. Where the house is converted, the freeholder's position comes first. Anything touching the elevation is checked against the conservation-area designation before it is priced.",
      },
      {
        title: "Protection, then a delivery sized to the road",
        text: "The hall and stair are protected. The delivery vehicle is chosen for the gradient and turning rather than for the supplier's convenience, with a transfer to a smaller van where the street requires it.",
      },
      {
        title: "Strip-out to structure",
        text: "The room comes back to its bones so the floor and walls can be seen. Haringey issues the skip licence and controlled parking applies on many roads, so the position is arranged in advance [VERIFY].",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound, services run to the stack, the duct installed to its terminal, then the waterproofing system applied in sequence and given its stated cure time before tiling starts.",
      },
      {
        title: "Tile, second fix, water test",
        text: "Tiling from a set-out that respects the room's proportions, then grout, sanitaryware, brassware and a commissioned fan, and the room tested with water before protection is lifted.",
      },
    ],
    access: [
      "The gradient decides the delivery. Several Muswell Hill streets are steep and poorly suited to long vehicles, and a loaded lorry across a slope is a hazard rather than an inconvenience. For a bathroom the weight is concentrated in a few items, so we establish the approach at survey, choose the vehicle to suit, and arrange a transfer van where the road demands it. Haringey issues the skip and scaffolding licences and operates controlled parking on many roads [VERIFY].",
      "Once at the door, the buildings are unusually easy. Edwardian houses on these streets have wide front doors, deep halls and generous internal doorways, so a bath or a large tray moves through the house without the negotiation a Victorian conversion demands. Where the property is a flat above the Broadway rather than a house on the slopes, the position reverses entirely: a narrow side door, a straight stair, and a commercial tenant below whose hours matter.",
    ],
    costDrivers: [
      {
        title: "The size of the room",
        text: "A generous Edwardian bathroom has more floor, more wall, more tile and often more sanitaryware than a conversion room. The figure follows the schedule, which is why we measure the whole room rather than estimating from the fittings that are in it now.",
      },
      {
        title: "What the floor needs before tiling",
        text: "Strengthening or overboarding a timber deck so it carries a large tiled floor without moving is ordinary work and is priced as work. Omitting it is the usual reason a tiled bathroom floor cracks in a line within the first year.",
      },
      {
        title: "The approach to the door",
        text: "Gradient, turning and the distance from a safe standing position are measurable and vary sharply street by street. With bathroom items the carry matters more than it does with flat-packed goods, and it is named in the proposal rather than absorbed.",
      },
      {
        title: "Window and joinery condition",
        text: "Where a sash in the bathroom needs attention, doing it before the room is tiled is much cheaper than afterwards. It is priced separately and honestly, and whether it is in scope is your decision rather than ours.",
      },
    ],
    living: [
      "These houses usually have more than one wet room, and where they do we keep one fully in service throughout and sequence the work around it. Families stay routinely. Where there is only one bathroom, we give a defined number of fully out-of-service days after measuring, concentrate them, and set up whatever temporary arrangement is realistic before the room comes out rather than after. The hall stays covered and clear each evening.",
      "Neighbours are in their own houses, which softens the noise question, but these are quiet residential streets and sound travels down a hill well. Tile cutting and floor work are the loud parts and they are named as dates in advance. We keep to Haringey's ordinary hours and avoid heavy deliveries during the school run, which on some of these streets is the single busiest and most congested part of the day.",
    ],
    handover: [
      "The room is judged in daylight with the window open, because these bathrooms have real natural light and it is what you will see every morning. The shower is run to prove the fall, the waste filled and emptied, the fan checked for real air movement. You receive the tanking record and membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Edwardian houses move with the seasons, and a large tiled floor shows it at the perimeter first. The silicone at a bath junction in a family bathroom also earns attention sooner than elsewhere, simply because of how much it is used. We come back for both as one visit rather than in pieces. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can we have a separate bath and shower?",
        a: "In most Muswell Hill houses, yes, and it is one of the real advantages of the stock. The room is usually large enough for both without either feeling squeezed, and the stack is generally close enough that the drainage is straightforward. The questions are the floor's capacity to carry the additional weight, and whether your supply will drive the shower properly. We measure both at the survey rather than assuming.",
      },
      {
        q: "Can a lorry get up our street with a bath?",
        a: "On some Muswell Hill streets comfortably, on others not at all. Gradient, camber and whether there is anywhere to turn all matter, and a loaded vehicle on a steep road is a genuine safety question. We look at the approach at the survey and either book a vehicle that suits it or arrange a transfer to a smaller van for the final leg. Once at the door, the wide halls make the rest easy.",
      },
      {
        q: "There is a sash window in the bathroom. Should we deal with it now?",
        a: "If it needs work, yes, and this is the moment. A failed cord, perished putty or a rotten sill in a room that gets wet will not improve, and attending to it after the room is tiled means working around new finishes. It is joinery rather than a paint item and it is priced separately. We say at the survey whether it needs it; whether it goes in scope is your call.",
      },
      {
        q: "Our flat is above a shop on the Broadway. Is it different?",
        a: "Substantially. Access is usually a narrow side door and a straight stair rather than a hall, which is the hard part for a bath or a tray. The commercial tenant below sets what hours are tolerable, and access to a leak from below may be impossible during trading, which makes the tanking detailing matter more. The conservation area covers the Broadway, so anything on the elevation is a consent question. [VERIFY.]",
      },
      {
        q: "The floor feels bouncy. Can we tile it?",
        a: "Not until it is stiffened. A timber deck with noticeable deflection will crack tile and grout, usually at the perimeter and usually within a year, and no membrane or adhesive compensates for movement. We establish joist size, span and condition at the survey and price the strengthening or overboarding needed. In a large Edwardian bathroom with a heavy tiled floor this matters more than in a small room, not less.",
      },
      {
        q: "Are we in a conservation area?",
        a: "Quite possibly. Haringey designated the Muswell Hill Conservation Area on 1 March 1974, covering the Broadway and many surrounding residential streets, and Fortis Green Conservation Area was designated the same day on the north-west side. None of it affects a bathroom fitted inside an existing room. It affects a new extract terminal on an elevation, and we check the address before designing a duct route. [VERIFY on Haringey's map.]",
      },
    ],
  },

  "crouch-end": {
    survey: [
      {
        title: "Where the bathroom sits in the conversion",
        text: "In a converted house the bathroom is usually a half-landing room or a space taken out of a rear bedroom, and which of those you have changes the structure, the access and the neighbours affected. We establish the arrangement and what lies directly below, because a bathroom over somebody else's living room is a different specification from one over your own hall.",
      },
      {
        title: "What the rear stack will accept",
        text: "The soil stack on the back elevation is the fixed point. We establish its condition, the connection height available to you, and what the other flats already put into it, because that decides where sanitaryware can realistically sit and how much fall a waste will find.",
      },
      {
        title: "The floor, and whether it has been altered",
        text: "Bathrooms in these houses have frequently been moved or enlarged at least once, and the floor beneath them shows it: notched joists, patched boards, a step where a partition used to be. We open up enough to see, because a tiled floor over an altered deck will find every one of those weaknesses.",
      },
      {
        title: "The tiled hall on the way in",
        text: "A shared tiled hall sits between the street and the room, and a bath on a trolley is exactly the load it will not take. We measure it, photograph it and specify the protection, because damage to a common part is a dispute with neighbours rather than a snag on a list.",
      },
      {
        title: "Whether the street is designated",
        text: "Haringey designated the Crouch End Conservation Area on 25 October 1974, covering the Broadway and a ring of residential streets. Terraces outside it still need ordinary planning for some window work. We check the address, because a new extract terminal on a rear elevation is where it bites. [VERIFY.]",
      },
    ],
    materials: [
      "Conversion bathrooms here are modest in size and benefit from a scheme that does not crowd them: one wall tile carried through, a floor tone that supports rather than competes, a wall-hung basin on a properly built frame, and a clear screen instead of a curtain. Where the room has original mouldings at ceiling level, a tiled wet zone with a painted finish above reads better than tile carried up into a cornice.",
      "Because the room usually sits over another household, the tanking specification and the detailing matter more here than the tile does. We tank the whole floor rather than the shower area alone, define the wet zone generously, use one manufacturer's system throughout, and photograph the membrane before tile covers it. That record is the only way anyone will ever see the waterproofing again, and it matters if there is ever a conversation with the flat below.",
      "Acoustic isolation is worth specifying in a converted house. A hard-tiled bathroom on a timber floor over somebody's bedroom transmits everything, and an uncoupling and acoustic mat under the tile with isolation at the perimeter substantially reduces what carries. It costs little at order and cannot be added later without lifting the floor, which is exactly why we raise it at the specification stage.",
    ],
    programme: [
      {
        title: "Freeholder pack and neighbour notice",
        text: "In a converted house the freeholder's requirements are agreed where the waste or the extract changes, and the households above and below are told what is happening on the stack. Neither takes long and skipping either causes trouble that lasts.",
      },
      {
        title: "Hall protection and a side-street skip",
        text: "The tiled hall and the route are protected before anything is carried. The skip is licensed on a residential street rather than on the Broadway, which is a busy shopping street and no place for a lorry to stand.",
      },
      {
        title: "Strip-out to structure",
        text: "The room comes back so the altered floor and the partitions can be seen. This is the day the survey's assumptions are tested, and where provisional items either land or are closed out.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound with acoustic isolation, wastes and supplies run to the stack, the duct installed, then the waterproofing applied in sequence and given its stated cure time before tile.",
      },
      {
        title: "Tile, second fix, test, hall reinstated",
        text: "Tiling, grout, sanitaryware, brassware and a commissioned fan, the room tested with water, and the shared hall returned to the state the day-one photographs show.",
      },
    ],
    access: [
      "Crouch End Broadway is busy and the residential side streets are the practical loading points. We licence a position there through Haringey and time the drop away from the school run and the shop deliveries. Parking varies genuinely road by road between controlled zones and less restricted streets, so it is checked for the address rather than assumed for the neighbourhood [VERIFY street by street].",
      "The shared front door is what actually shapes the job. Everything arrives through an entrance used by two or three households, across a tiled hall somebody cares about, and up a stair that is not yours. A bath, a tray and a pallet of tile are the worst possible items for that route, so it is boarded along its length, kept clear every evening, and photographed before we start. Strip-out waste is bagged at the room and never staged in the hall.",
    ],
    costDrivers: [
      {
        title: "Whether the layout stays on the stack",
        text: "Keeping waste positions near the existing connection is straightforward. Moving them across a floor that sits over another household needs fall you may not have and frequently a consent you would not otherwise need. It is the biggest variable here.",
      },
      {
        title: "What the altered floor needs",
        text: "Notched joists, patched boards and a step where a partition used to be all have to be made sound before tile. That is ordinary work, priced as work, and leaving it out is the usual reason a tiled floor cracks in a converted house.",
      },
      {
        title: "Acoustic isolation over a neighbour",
        text: "Matting, perimeter isolation and careful detailing at the penetration are real materials and real time. They are also what keeps a finished bathroom from becoming the subject of a conversation in a shared hall.",
      },
      {
        title: "Protecting common parts properly",
        text: "Boarding and reinstating a shared tiled hall takes time and materials on a job where none of that hall is yours. It is included. Repairing damage an earlier trade caused is not, unless the freeholder instructs it separately.",
      },
    ],
    living: [
      "In a conversion flat the bathroom is usually the only one, so the programme means arranging somewhere else to wash for a defined number of days. We give you that number after measuring, concentrate the fully out-of-service days rather than spreading them, and keep the room in service as long as the sequence allows. What we cannot do is make a shared hall feel private during the noisy fortnight.",
      "In a house of two or three flats, notice is what keeps everyone civil. The household below hears floor work directly overhead and the one above shares the stack you are working on. We give the dates, keep to Haringey's ordinary hours, and clear the hall every evening so nobody comes home to bagged tile between the front door and their stairs. It is also worth telling them what a water test is before they hear a shower running for twenty minutes.",
    ],
    handover: [
      "The room is tested rather than presented: the shower run to prove the fall, the waste filled and emptied, the fan checked for real air movement. The shared hall is inspected at the same visit and compared with the day-one photographs. You receive the tanking record and membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In a converted house the lines worth watching are the silicone at the bath or tray junction and the grout at internal corners, because a timber floor over a neighbour flexes with use. A small failure at those points is how water reaches somebody else's ceiling, which is a conversation nobody wants. We would rather return promptly. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can we move the bathroom to another room in the flat?",
        a: "It is a much larger question in a conversion than it sounds. A new position means running waste across a floor that sits over another household, finding fall you may not have, and extracting from a wall that may not be available. It usually needs the freeholder's consent and sometimes the building will not support it at all. We give a straight answer at the survey rather than designing something that cannot be built.",
      },
      {
        q: "Our neighbour below complained about noise from the old bathroom. Can that be improved?",
        a: "Substantially, and with specification rather than apology. An uncoupling and acoustic mat under the tile, isolation at the perimeter so the tile does not bridge to the wall, and careful detailing where the waste passes through the floor all reduce what carries downward. None of it can be added afterwards without lifting the floor, which is why it is decided before the order rather than after the first complaint.",
      },
      {
        q: "Who pays if the tiled hall is damaged?",
        a: "We do, if we damage it, which is why it is boarded before anything crosses it and photographed before we start. The hall is usually common part rather than anybody's demise, so damage becomes a conversation with the freeholder and the other households rather than a private matter. Existing damage is recorded on day one too, which protects everybody rather than just us.",
      },
      {
        q: "Can we vent the extract onto the back elevation?",
        a: "Technically usually yes; sensibly, it depends what is above it. In a house of flats a rear terminal can sit under a neighbour's bedroom window, and an extract that works perfectly for you makes you unpopular by the second month. We look at the windows around the proposed position and move it or rethink it where it is poor. Conservation-area designation may bear on it as well. [VERIFY the address.]",
      },
      {
        q: "The bathroom floor has been altered before. Does that matter?",
        a: "It matters a great deal, because you inherit whatever the previous alteration did. Notched joists, patched boards and a step where a partition once stood are all common in these houses, and a tiled floor will find every one of them. We open up enough at the survey to see what we are dealing with, make the deck sound before tiling, and list as provisional anything that cannot be established without going further.",
      },
      {
        q: "How long is the bathroom out of use?",
        a: "A defined number of days that we give you after measuring rather than a vague range. The sequence has a fixed shape — strip-out, floor, first fix, tanking with its stated cure, tiling, grout, second fix, water test — and the cure and grout times cannot be compressed without building in a defect. What we can do is concentrate the unusable days so you are not living around it for a month.",
      },
    ],
  },
  "kentish-town": {
    survey: [
      {
        title: "Which room the bathroom has ended up in",
        text: "Kentish Town bathrooms turn up in half-landings, in corners partitioned out of bedrooms, and in lower-ground rooms that were never meant to be wet. Each has a different starting problem, and the survey names which you have before it measures, because the three are not specified from the same assumptions.",
      },
      {
        title: "Damp and ventilation below ground",
        text: "Where the bathroom sits in a lower-ground room, we look for existing moisture in the structure, any previous tanking and its condition, and whether the room ventilates at all. Tanking a shower does nothing about water coming the other way, and covering one problem with another is how a room fails twice.",
      },
      {
        title: "What earlier conversions did to the services",
        text: "The grain here is dense and much altered. Wastes teed into older pipework, a supply extended around a partition, an extract fan discharging into a void: all common, none recorded. We trace what we can, test what we can, and list the rest as provisional items rather than pricing a guess.",
      },
      {
        title: "How thin the party wall is",
        text: "Terraces here sit tight together and party walls are often thinner than people expect. That matters for a bathroom because chasing a supply into one and tiling onto it are both heard next door, and because a wall-hung fitting needs a frame rather than a hope.",
      },
      {
        title: "Which conservation area, if any",
        text: "Several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park, while the High Street itself is mixed-use and less uniformly designated. We check the named area for the address, because it decides how an extract terminal is handled. [VERIFY.]",
      },
    ],
    materials: [
      "In a lower-ground bathroom the specification is about light and durability. A pale tile, a mirror placed to use whatever daylight arrives, and lighting designed as part of the room rather than left to a single ceiling fitting. Ventilation is part of the specification and not an accessory: a properly sized fan, a real duct to a real terminal, and a run-on timer, chosen for the room rather than for the price of the box.",
      "Where the bathroom was partitioned out of a bedroom by somebody else, the tanking is specified generously and the frame is built properly. Light partitions of unknown construction will not carry a wall-hung basin or a concealed cistern on goodwill, and a floor that was never intended to be wet needs the whole of it tanked rather than a strip behind the shower. We record the membrane before tile covers it.",
      "In a half-landing room the constraints are size and access, and the honest answer is fewer materials and smaller formats. Large-format tile on an out-of-square wall in a small room means visible tapers or a great deal of preparation. A clear screen rather than a curtain, a wall-hung basin that leaves floor visible, and one wall tile carried through will make the room feel considered rather than crowded.",
    ],
    programme: [
      {
        title: "Tenure established, neighbours told",
        text: "The lease position is settled and, in a converted house, the other households are told what is coming. In a street this dense, notice is how the noisy days pass without an intervention.",
      },
      {
        title: "Damp resolved before design is fixed",
        text: "In a lower-ground bathroom, water in the structure is dealt with before a room is tanked over it. This sometimes changes the job and sometimes stops it, and both are better than covering a problem.",
      },
      {
        title: "Protection and a side-street skip",
        text: "The route is protected and the skip licensed away from Kentish Town Road, which is a corridor rather than a loading bay. The side streets are narrow and densely parked, so the position is arranged rather than found on the morning.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound, the improvised work of earlier conversions is removed or properly re-made, services are run, and the waterproofing system is applied with its stated cure before tile.",
      },
      {
        title: "Tile, second fix, test",
        text: "Tiling, grout, sanitaryware, brassware and a commissioned fan, then a water test. The ventilation is demonstrated working rather than simply switched on, which in a below-ground room is the point.",
      },
    ],
    access: [
      "Kentish Town Road is a busy corridor and the wrong place to unload a bath, so deliveries go to the side streets under Camden's controlled parking with a licensed skip position [VERIFY the CPZ]. The practical difficulty is that those side streets are narrow and densely parked with residents' bays on both sides, so a position has to be arranged in advance rather than found. We agree it and the day at the survey.",
      "Where the bathroom is in a lower-ground flat, the route in is frequently down external steps from the street — better for dust, much worse for a cast bath or a stone tray. We survey those steps including the headroom beneath any bay above them, because that is where heavy items fail. Where an item will not pass, we say so before it is ordered. A converted workshop or studio may have a wide door that makes all of this easy, which is worth knowing too.",
    ],
    costDrivers: [
      {
        title: "Whether the room is dry",
        text: "A sound below-ground room is an ordinary bathroom. One where moisture is entering the structure is a different project entirely, and establishing which at survey is the difference between a proposal you can rely on and a figure that changes in week two.",
      },
      {
        title: "What earlier conversions left behind",
        text: "Wastes teed into older pipework, supplies extended around partitions and fans discharging into voids are common here and none of it is recorded. Provisional items name what cannot be seen without opening up rather than smuggling it into a rate.",
      },
      {
        title: "Getting heavy items to the room",
        text: "External steps to a lower-ground flat, a bay overhead, or a half-landing reached by a shared stair are each a handling figure and can rule out a particular bath or tray. Measured at survey, named in the proposal.",
      },
      {
        title: "How constrained the hours are",
        text: "Where neighbours are immediate and somebody works from home, noisy operations run in shorter windows. That lengthens the programme without changing the work, and a longer programme is a cost worth knowing about in advance.",
      },
    ],
    living: [
      "Whether staying is realistic depends on where the bathroom is and whether there is a second one. A half-landing room in a conversion flat can be sealed at its door and the rest of the flat carries on. A lower-ground bathroom that opens into living space cannot, and dust from a below-ground strip-out rises through a house rather than staying put, so we screen at the stair as well as at the room.",
      "Party walls here are thin and there may be four or five households within earshot in a street of conversions. Tile cutting and floor work are the loud parts and they are named as dates in advance, kept inside Camden's hours, and told to the neighbours. Where a client asks us to work shorter noisy windows because a neighbour works from home, that is better built into the dates at the start than negotiated in week two.",
    ],
    handover: [
      "The walk round covers what you cannot see: the ventilation demonstrated working with a real measure rather than a noise, the waste filled and emptied, the shower run long enough to prove the fall, and a plain account of what we found behind the old room and what we re-made. You receive the tanking record, membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Below-ground rooms are worth checking after a winter and altered buildings after a season of real use. Damp behaves seasonally, a re-made waste shows its gradient over months, and silicone at a bath junction in a well-used bathroom moves sooner than people expect. We come back for the lot in one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can we put a shower room in a lower-ground flat?",
        a: "Often, and the three questions are drainage, ventilation and whether the structure is dry. The waste needs fall to reach the drainage the building actually uses; the extract needs a duct to a genuine terminal rather than a void; and moisture in the walls has to be dealt with before anything is tanked over it. We answer all three at the survey. Where the honest answer is that the room is not ready, we say so.",
      },
      {
        q: "The old extractor seems to go nowhere. Is that normal?",
        a: "Unfortunately it is common. Fans discharging into a ceiling void, a redundant duct or a roof space are one of the more frequent findings when a bathroom fitted by somebody else is stripped out, and the room has effectively been unventilated for years. We trace the route at the survey where we can, and where there is no real terminal we design one. A fan that moves air into a void is not ventilation.",
      },
      {
        q: "Our party wall is very thin. Does that affect the bathroom?",
        a: "In two ways. Chasing a supply into it and tiling onto it are both clearly audible next door, so those operations are named as dates rather than sprung on anybody. And a thin or lightly built wall will not carry a wall-hung basin or a concealed cistern without a proper frame, which is a real item rather than an optional extra. We establish the construction at the survey before the layout assumes anything.",
      },
      {
        q: "Can you work shorter hours for a neighbour who works from home?",
        a: "Yes, and it is much better planned than negotiated. Shorter noisy windows lengthen the programme rather than changing the work, so we would rather build that into the dates from the start. We ask about neighbours at the survey for exactly this reason. Camden's ordinary hours are the outside limit; what a dense terraced street actually tolerates is often narrower, and working to that keeps a job running.",
      },
      {
        q: "Will a bath fit down the area steps?",
        a: "We measure before anything is ordered. External steps to a lower-ground flat, a gate at the top and headroom beneath a bay above them are the combination that catches people out, and a bath is the worst shape for it. Where a particular bath will not pass there is nearly always an alternative that will, and choosing it early avoids a delivery standing on a pavement while somebody makes a phone call.",
      },
      {
        q: "Is a bathroom near Dartmouth Park different from one off the High Street?",
        a: "The rooms are. The streets rising toward Dartmouth Park are more residential and more likely to be original family houses with larger bathrooms and predictable services. The denser grain near the High Street gives you more conversions, more lower-ground rooms and more altered pipework. Conservation-area coverage differs too. Same service and same standard, different survey findings and a different figure. [VERIFY the designation for the address.]",
      },
    ],
  },

  kilburn: {
    survey: [
      {
        title: "Camden or Brent",
        text: "Kilburn High Road is the historic boundary and the borough decides the skip licence, the parking and the fees. East of the road toward West Hampstead is generally Camden; west of it is Brent. For a bathroom strip-out already bagged and waiting, a licence from the wrong council is an expensive mistake. [VERIFY for the frontage.]",
      },
      {
        title: "How a bath reaches the flat",
        text: "Flats above High Road shops are reached by narrow side doors and straight steep stairs, sometimes shared and occasionally passing beside commercial premises. We measure that route against the actual items, because a bath and a stone tray are exactly what such a route defeats.",
      },
      {
        title: "What the construction actually is",
        text: "The stock runs from Victorian terraces through mansion blocks to later local-authority and infill housing, and they behave very differently under tile. We establish what the walls and floors are before specifying fixings or a frame, because a plan drawn for solid Victorian brick does not transfer to a later panel construction.",
      },
      {
        title: "Where the waste goes, and what else uses it",
        text: "In a later block there may be a documented riser; in a converted terrace there is a rear stack and no record at all. We establish which, what condition it is in, and what other flats already put into it, because that governs both the layout and the likelihood of a surprise at first fix.",
      },
      {
        title: "Which streets are designated",
        text: "Named conservation areas here cover selected streets rather than the whole neighbourhood, and High Road upper-floor windows may carry separate design guidance. Two councils' maps are checked against the address before an extract terminal is planned. [VERIFY.]",
      },
    ],
    materials: [
      "Because the stock varies so widely, the specification follows the construction rather than a house style. A Victorian conversion with out-of-square walls takes a smaller tile format and a more forgiving joint. A later block with true walls takes large format comfortably. A flat over a shop takes whatever can physically get up the stair. We say which building you have before the tile is chosen rather than after it is delivered.",
      "Where the route in is a narrow side door and a straight stair, material choice is decided by it. A cast bath is frequently impossible and a steel or acrylic equivalent is not a compromise but the only honest option. Stone trays give way to lighter equivalents, and tile arrives in manageable loads rather than on a single pallet nobody can move. We measure against the actual items at the survey.",
      "In the later blocks, acoustic isolation deserves specifying. A hard-tiled bathroom over a neighbour transmits floor noise efficiently, and matting with perimeter isolation substantially reduces it. It costs little at order and cannot be added afterwards. Above a commercial unit the concern shifts: access to a leak from below may be impossible during trading hours, so the tanking detailing and the inspection provision matter more.",
    ],
    programme: [
      {
        title: "Confirm the council and the tenure",
        text: "Which borough licences the street, and who consents to work inside the flat. In a neighbourhood split between two authorities and several tenure types, this is real work rather than a formality and it comes first.",
      },
      {
        title: "Route protection and a realistic delivery",
        text: "The side door, the stair and any shared landing are protected. Heavy items arrive in loads that can be carried up in one session rather than left standing at the foot of a stair or across a shopfront.",
      },
      {
        title: "Strip-out down the same stair",
        text: "Old sanitaryware, tile and wet plaster are bagged at the room and carried down the way materials came in, leaving the same day. Above a business, this is timed around their trading rather than our convenience.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound with fixings chosen for what the construction actually is, services run, the duct installed, and the waterproofing applied in sequence with its stated cure before tile.",
      },
      {
        title: "Tile, second fix, test",
        text: "Tiling, grout, sanitaryware, brassware and a commissioned fan, then a water test before the protection is lifted and the shared route inspected.",
      },
    ],
    access: [
      "Kilburn High Road is a major route and it should not be assumed that a skip may sit on it or that a lorry can unload a bathroom from it. The practical answer is a licensed position on a residential side street, arranged with whichever borough owns the frontage [VERIFY Camden or Brent]. Two authorities means two processes, two fee structures and two sets of conditions on one neighbourhood, and identifying the right one is part of the survey rather than an afterthought.",
      "Access through or beside commercial premises needs a method statement rather than an arrangement at the door. Where the route to a flat passes a shop's entrance, shares a passage with a business or runs up a stair used by another household, we establish who controls it, when it may be used and what protection is required, in writing, before a delivery is booked. A bath blocking a shopfront at ten in the morning is a problem for everyone.",
    ],
    costDrivers: [
      {
        title: "The stair, and what it will pass",
        text: "A straight steep stair from a side door frequently rules out a cast bath or a one-piece stone tray and adds real labour to everything else. It is the single most common cost driver on a flat above the High Road and it is settled with a tape measure.",
      },
      {
        title: "Which borough, and its conditions",
        text: "Camden and Brent set their own licence fees, durations and conditions. A modest sum with a real programme effect, and applying to the wrong one costs time rather than money. The address decides it.",
      },
      {
        title: "What the construction turns out to be",
        text: "Fixings, frames and making good all depend on whether the wall is solid brick, a later block's construction, or something a previous conversion built. Where the building is not what it appears, provisional items cover it openly.",
      },
      {
        title: "Working around a business below",
        text: "Deliveries, waste removal and noisy work timed around a commercial tenant's trading can help — early starts may be fine — or restrict. Either way it is planned rather than improvised, and where it restricts, it lengthens the programme.",
      },
    ],
    living: [
      "Whether you stay depends entirely on the building. A converted terrace flat east of the High Road with a separate bathroom can be sealed off and lived around for a defined number of days. A small flat above a shop where the only route in and out passes the bathroom door usually cannot, and we say so at the survey rather than letting you find out. Where there is no second wet room we give the number of fully out-of-service days and concentrate them.",
      "The neighbour relationships here are unusually varied: a household above in a conversion, a business below on the High Road, several flats around you in a later block. Each tolerates different things at different hours, and a shop below may not mind an early start at all. We find out who is actually affected, name the noisy days, and work to the tighter of the council's hours and the building's.",
    ],
    handover: [
      "The room is tested rather than presented: the shower run to prove the fall, the waste filled and emptied, the fan checked for real air movement. Where the route in was shared or commercial, it is inspected and the protection removed with the surfaces checked underneath. You receive the tanking record, membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In buildings altered as often as these, the useful check is a few months in: a fixing into a wall that turned out different from its neighbour, silicone at a bath junction, or a waste re-made into older pipework. Above a business, a small leak is somebody's stock rather than somebody's ceiling, which makes prompt attention worth more here than most places. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Which council do we apply to for a skip licence?",
        a: "It depends which side of Kilburn High Road you are on. The road is the historic boundary: east of it toward West Hampstead is generally Camden, west of it is Brent, each with its own application, fee and conditions. We confirm it from the address at the survey. With a bathroom strip-out already bagged, a licence from the wrong borough costs a week rather than a phone call. [VERIFY for the frontage.]",
      },
      {
        q: "Our flat is above a shop. Can a bath get in?",
        a: "Usually, but rarely a cast one. The route is typically a narrow side door and a straight steep stair with a turn, and we measure it against the actual item before anything is ordered. A steel or acrylic bath and a lighter shower tray will nearly always make the journey where a cast bath and a stone tray will not. The shop's trading hours go into the delivery plan, and a method statement covers any part of the route the business controls.",
      },
      {
        q: "Will the flat below hear the new bathroom?",
        a: "Less than they would from one fitted without thought. In a later block with a timber or composite floor, an uncoupling and acoustic mat under the tile with isolation at the perimeter substantially reduces what transmits. Above a commercial unit the concern is different: the issue is not noise but access to a leak during trading hours, which is why the tanking detailing and the inspection provision matter more there.",
      },
      {
        q: "Can you tell what the walls are before you start?",
        a: "Largely, and it matters more here than in most areas because the stock is so mixed. Solid Victorian brick, a later block's construction and whatever a previous conversion built all take different fixings, and a wall-hung basin or a concealed cistern needs a frame built for the wall that is actually there. We test and inspect at the survey, and where we genuinely cannot know without opening up, it is listed as a provisional item.",
      },
      {
        q: "Is a bathroom east of the High Road different from one west of it?",
        a: "Often. The streets east toward West Hampstead are more uniformly Victorian conversions with half-landing bathrooms, shared halls and party-wall noise. West of the road the grain includes larger blocks and a wider range of periods, which changes the services, the floor construction and the consent position. Both are ordinary work. They are simply not the same survey, and they are not priced from the same assumptions.",
      },
      {
        q: "Are we in a conservation area?",
        a: "Possibly, but the designations here cover selected streets rather than the whole of Kilburn, and there are two councils' maps to check. High Road upper-floor windows may also carry separate design guidance. None of it affects a bathroom fitted inside an existing room. It affects an extract terminal on an elevation, and we check the address before designing a duct route. [VERIFY with Camden and Brent.]",
      },
    ],
  },

  "hampstead-garden-suburb": {
    survey: [
      {
        title: "Two consent regimes, and neither is optional",
        text: "The Suburb has Barnet planning and, separately, the Hampstead Garden Suburb Trust's Scheme of Management under its own Act of Parliament, with boundaries that are not identical. For a bathroom this bites in one place only — an extract terminal on an elevation — but it bites hard. We establish both positions at the survey. [VERIFY both maps.]",
      },
      {
        title: "Where the bathroom came from",
        text: "Almost every bathroom here has been altered since the house was built, often more than once. We identify what is original in and around the room — a window, joinery, a floor — and distinguish it from two or three later fit-outs, because they are treated very differently once the room is stripped.",
      },
      {
        title: "Cottage room or house bathroom",
        text: "The Suburb runs from modest Arts and Crafts cottages to substantial free-standing houses, and the bathrooms differ accordingly. A cottage bathroom is a small precise job; a larger house may have several wet rooms with one that can stay in service. The survey establishes the scale first.",
      },
      {
        title: "The floor, and what is under it",
        text: "Timber floors, sometimes with original boards worth keeping, and occasionally a later addition with a different build-up. We establish joist span and direction and the depth available, because it decides whether a level-access shower or underfloor heating is realistic without raising the floor into a door.",
      },
      {
        title: "Delivery onto a close or a green",
        text: "Houses here are grouped around greens and closes with shared frontages and planted verges. A bath and a pallet of tile need a standing position that will actually take them. We record where a vehicle may stand, on what surface, and how far items travel on foot.",
      },
    ],
    materials: [
      "Arts and Crafts interiors suit a bathroom that is quiet and well made rather than fashionable. A simple wall tile, honest sanitaryware in classic forms, brassware chosen for how it works rather than for its finish, and joinery-built storage where the room allows. High-gloss large-format schemes with narrow shadow gaps fight these rooms and the walls will not hold the tolerances they need anyway.",
      "Where original material survives in or near the bathroom — a window, an architrave, a board floor — the new work is set out to respect it. Tiling that dies into an original reveal looks like a mistake; stopping the wet zone cleanly and finishing the rest in paint looks like a decision. We draw those junctions before anything is ordered because they are what you will look at every day.",
      "Because the exterior is tightly controlled, the interior is where the work happens, and that suits a bathroom. Nothing inside the room changes the street. The one exception is the extract, which has to terminate somewhere: where no acceptable position exists, we say so at the survey and specify accordingly rather than leaving it to be argued once the room is stripped.",
    ],
    programme: [
      {
        title: "Establish whether consent is needed",
        text: "For a bathroom inside an existing room, usually not. For a new terminal on an elevation, Barnet and the Trust both, on their own timescales. Separating those at the start stops an internal job being held up by an external question.",
      },
      {
        title: "Protection and a careful delivery",
        text: "The route in is protected and the vehicle position agreed with greens, verges and shared frontages in mind. Heavy items are set down on boards rather than on planting, and nothing stands on a close overnight.",
      },
      {
        title: "Strip-out of several previous bathrooms",
        text: "What comes out is usually the third or fourth fit-out the room has had. We separate what is original and worth keeping from what is later and going, and that decision is taken with you rather than in a skip.",
      },
      {
        title: "Floor, first fix, tanking, cure",
        text: "The deck is made sound, services run within the existing fabric, fixings into later material rather than original joinery, then the waterproofing system applied in sequence and given its stated cure before tile.",
      },
      {
        title: "Tile, second fix, test",
        text: "Tiling to a set-out that respects the room's original features, then grout, sanitaryware, brassware and a commissioned fan, and the room tested with water before the route is reinstated.",
      },
    ],
    access: [
      "The Suburb was planned for appearance and for people rather than for delivery vehicles, and bathroom items are the hardest test of that. Verges are planted, frontages are shared, and surfaces that look robust are often not made for a loaded lorry. We agree a standing position at survey, board any surface that items cross, and carry rather than wheel where the ground will not take it. Barnet issues the skip and scaffolding licences [VERIFY where a licence is needed on a private or shared frontage].",
      "Permitted development should not be assumed here. An Article 4 direction has been in force since the 1970s and the Trust runs its own consent process under a Scheme of Management, which can reach items that feel trivial elsewhere [VERIFY the current Trust guidelines for the item of work]. None of that touches a bathroom inside a room. All of it touches anything that puts a vehicle, a skip or a grille where the street can see it, which is why those are planned rather than improvised.",
    ],
    costDrivers: [
      {
        title: "Cottage room or house bathroom",
        text: "The Suburb spans two very different scales, and the schedule of tile, sanitaryware and services follows the room rather than the postcode. Which you have is the first thing the survey establishes and the biggest factor in the figure.",
      },
      {
        title: "Whether the extract can be ducted",
        text: "An acceptable terminal makes for a conventional installation. Where no position is acceptable, the strategy changes and so does the boxing and the cabinetry around it. Both are legitimate and they are different figures, decided before ordering.",
      },
      {
        title: "Working around original fabric",
        text: "Where original joinery, a window or a board floor is being kept, the work is slower and the fixings more considered. That is proper practice in a Suburb house, priced as such, and far cheaper than replacing something that cannot be matched.",
      },
      {
        title: "Handling on a close or green",
        text: "Boarding a route, carrying rather than wheeling, and restricted standing positions all cost time on every heavy delivery. With a bath and a pallet of tile that is a real and predictable feature of working here, and it is named in the proposal.",
      },
    ],
    living: [
      "Suburb houses generally absorb a bathroom programme well. Larger houses often have more than one wet room, and we sequence the work so one stays fully in service. Even the cottages usually have somewhere to put a temporary arrangement. Where there is only one bathroom we give a defined number of fully out-of-service days after measuring rather than a range, and we concentrate them rather than spreading them across a month.",
      "The neighbourhood is quiet in a way that makes noise conspicuous. Houses sit in composed groups around greens and a strip-out carries across a close rather than just next door. We name the loud days, work Barnet's ordinary hours, and tell the immediate neighbours beforehand. Deliveries are scheduled to avoid standing a vehicle on a shared frontage when people are coming and going.",
    ],
    handover: [
      "The walk round covers the bathroom and the fabric we worked around. We show you what was protected and how it has come through, run the shower long enough to prove the fall, fill and empty the waste, and check the fan for real air movement. You receive the tanking record, membrane photographs, sanitaryware references, Gas Safe documentation where relevant and electrical notification where the wiring regulations require it. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Arts and Crafts houses were built by hand and move accordingly, so the silicone and grout lines are worth a look after the first heating season. Where original boards are under or beside a bathroom, they respond to the seasons as well. We come back for all of it in one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Do we need Trust consent for a new bathroom?",
        a: "For a bathroom fitted inside an existing room, normally not — the Scheme of Management is concerned with the appearance of the property and its setting rather than with your sanitaryware. It becomes relevant the moment something is visible from outside, and for a bathroom that means one thing above all: a new extract terminal. We establish at the survey whether your brief crosses that line. [VERIFY the current Trust guidelines for the item of work.]",
      },
      {
        q: "Can we have a ducted extractor in a Suburb house?",
        a: "Only if an acceptable terminal exists, and here that is a genuine question. The external appearance is protected by Barnet planning and separately by the Trust, so a grille punched through an elevation is not a casual extra. We work out at the survey whether a route and a position can be justified, and where they cannot we say so before the room is stripped rather than after. A fan discharging into a roof void is not an answer.",
      },
      {
        q: "Our bathroom has an original window. Can it stay?",
        a: "Usually, and it is generally worth keeping. Original windows are part of what these houses are and replacements rarely match, quite apart from the consent position on anything visible outside. In a wet room a window needs honest assessment — putty, cords and the sill take moisture — and dealing with that before the room is tiled is much easier than afterwards. That is joinery rather than a paint item.",
      },
      {
        q: "Where will the skip go?",
        a: "Somewhere agreed in advance, on a surface that will take it, and not on a green or a planted verge. Barnet issues the licence for a highway position; where the frontage is shared or private the arrangement may differ and it is checked rather than assumed [VERIFY]. On a close with limited standing, bathroom waste sometimes leaves by van in loads instead, which is slower and is priced as such rather than pretended away.",
      },
      {
        q: "Can we have a level-access shower?",
        a: "It depends on the depth between your finished floor and the structure, and in these timber-floored houses that is often less than people hope. A level entry needs room for fall, a waste and a trap, and raising the floor to create it collides with the door. We measure at the survey and give a straight answer: level entry, low-profile tray, or a stepped threshold. We will not draw a wet room onto a floor that cannot take the fall.",
      },
      {
        q: "Can the bathroom be done without any external work?",
        a: "In most cases, yes, and for most Suburb clients that is the brief. Sanitaryware, tiling, tanking, services within the room, flooring and decoration change nothing the street can see. The one item that can cross the line is the extract terminal, so we resolve that at the survey and separate it if it needs consent, rather than letting an internal bathroom be held up by an external process running on its own timetable.",
      },
    ],
  },
  // AREAS-END
};
