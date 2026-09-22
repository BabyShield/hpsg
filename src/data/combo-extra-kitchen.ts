import type { ComboExtraMap } from "./combo-extra";

/**
 * Kitchen renovation: the second per-area layer.
 *
 * One block per Tier 1 area, answering the questions a reader asks after the
 * scope is clear — what a visit settles, what the materials are in this
 * fabric, how the weeks run, how the van reaches the door, what moves the
 * figure, what it is like to live through, and what happens afterwards.
 * Nothing here is shared between areas.
 */
export const kitchenExtra: ComboExtraMap = {
  hampstead: {
    survey: [
      {
        title: "Where the extract can honestly go",
        text: "The first measurement in a Hampstead kitchen is not the room, it is the wall the hood has to reach. Village houses off Heath Street present a principal elevation that Camden reads closely, and the flank that would be convenient is often the one facing a lane everybody walks down. We record the run, the rise and the terminal position, and we say at the visit whether the answer is a duct, a longer re-routed duct, or recirculation. [VERIFY the designation and listed status for the address.]",
      },
      {
        title: "The stair, measured before the carcass",
        text: "A converted village house usually has a dog-leg stair with a tight half-landing and a handrail nobody has taken off since it was fitted. We measure the turn, the door width at the top and the height over the winders, because those three numbers decide whether tall units arrive assembled or flat. A cabinet that will not turn the landing is a delivery that goes back on the lorry.",
      },
      {
        title: "What the floor is doing under the boards",
        text: "Original boards over shallow joists move, and the fall across a Hampstead kitchen floor is rarely nothing. We take levels at the four corners and at each appliance position, because a dishwasher standing proud of a scribed plinth is a floor problem found at second fix. Where a previous fitter has packed a run rather than solved it, we lift a board and look instead of repeating the packing.",
      },
      {
        title: "Meter, isolation and the neighbours",
        text: "In a conversion the gas and water isolations often sit in a shared hall or in a cupboard belonging to the flat below. We establish who can turn what off, and for how long, before a date is offered. Gas work is by a Gas Safe registered engineer. Where an isolation affects another household, notice goes out before strip-out rather than on the morning of it.",
      },
      {
        title: "Which rules actually apply here",
        text: "Hampstead is Camden, but that is only the first answer. A house inside the Hampstead Conservation Area, a listed building near the village core and an undesignated street behind Frognal are three different consent positions, and the lease adds a fourth. All four are settled on the address before anything is drawn, rather than treating NW3 as one rulebook. [VERIFY on Camden's map.]",
      },
    ],
    materials: [
      "Worktops are specified in generic material categories — quartz, sintered stone, solid timber, laminate — and chosen against the room rather than the brochure. In a village kitchen with a single window and a chimney breast throwing shade down the run, a dark honed surface reads as a hole in the middle of the day. Lighter stone, or a timber with visible grain, carries low light better. Template is taken from installed carcasses and never from a drawing, because these walls will not be square.",
      "Cabinetry is scribed. Out-of-square returns, lime plaster that swells at the foot of a wall, and chimney breasts that are not plumb from floor to ceiling all make the filler piece a design decision rather than an accident. Doors in period rooms usually sit better in a painted finish than a foil wrap. Where a sprayed door is specified it is sprayed off site, because a landing shared with two other households is not a spray booth.",
      "Splashbacks, ironmongery and the smaller decisions are kept deliberately plain. Full-height stone behind a hob is heavy on an old wall and heavy on the programme; tile or a single glass panel is often the better answer in a conversion. Appliances are client-supplied or specified in plain terms, with no brand-partnership claim attached. Where a client wants something the room cannot carry, we say so at the visit rather than at second fix.",
    ],
    programme: [
      {
        title: "Consent, survey and the order book",
        text: "Nothing is ordered until the lease position is clear and the measured survey is signed off. In a village conversion that can mean the freeholder, the managing agent and the neighbour whose hall floor you have to cross. This stage makes no noise and takes the longest.",
      },
      {
        title: "Protection, then strip-out",
        text: "Shared stairs, the tiled hall and any original floor on the route are covered before the first cabinet comes off the wall. Strip-out is programmed against the licensed skip position, because there is nowhere on a Hampstead lane to stack a kitchen's worth of carcass while you wait.",
      },
      {
        title: "First fix on what is actually there",
        text: "Waste, supply, extract duct and circuits go in against the survey, with the chimney breast and the joist run as found rather than as drawn. This is the stage where a hidden problem shows itself, and where a provisional item either lands or quietly does not.",
      },
      {
        title: "Carcasses, then template",
        text: "Cabinets are set out and levelled, scribed to the breast and the return. Only then is the worktop templated. The wait between template and fitted worktop is the fabricator's, sits in the middle of the programme, and is why a kitchen cannot be compressed into one continuous week.",
      },
      {
        title: "Second fix, commissioning, snag",
        text: "Appliances, taps, the hood and the final electrical work, then the room decorated to a clean handover. We walk the kitchen with you, write the snag list ourselves, and return for it as one visit rather than in instalments.",
      },
    ],
    access: [
      "Deliveries in Hampstead are timed, not opportunistic. The lanes off Heath Street and the High Street have no loading bay worth the name, the pavements are narrow, and a long-wheelbase vehicle stopped on a bend blocks the village rather than merely inconveniencing it. We agree a drop point and a window at survey and book the delivery to it, with our own crew on the pavement to handball rather than a driver waiting. Where a lane is genuinely impassable for the vehicle the supplier uses, the transfer is a cost, and it goes in the proposal rather than being discovered on the day.",
      "Camden issues the skip and scaffolding licences, and controlled parking covers most of NW3 [VERIFY the CPZ code for the street]. A kitchen strip produces a volume of carcass, tile and plaster that no car boot will take, so the skip position is licensed in advance and the strip-out day is programmed to it. Where no position exists, waste leaves in a van in stages, which is slower and is priced as such. Nothing is left standing on a Hampstead pavement overnight.",
    ],
    costDrivers: [
      {
        title: "How far the material is carried",
        text: "The distance between vehicle and room is a real cost in the village. A drop on Heath Street with a hundred metres of lane and a dog-leg stair at the end is a different handling job from a van at a front door. It is priced as handling rather than hidden inside a rate.",
      },
      {
        title: "What the extract route costs",
        text: "A short duct through a flank wall is inexpensive. A long soffit run to reach an elevation Camden will accept, or a decision to recirculate and lose the duct entirely, changes the figure and the cabinetry above the hob. Settled at survey, because it cannot be settled later.",
      },
      {
        title: "The services you cannot see",
        text: "Wiring of unknown vintage behind lime plaster, a gas run extended twice by other people, or a waste that turns out to fall the wrong way are listed as provisional items after the visit. They are named and carried openly rather than buried in a lump sum that quietly absorbs them.",
      },
      {
        title: "The lead-in you do not control",
        text: "A freeholder's licence pack, a listed-building question, a neighbour who has to sign for a shared hall: all sit ahead of the first noisy day. They rarely change the build figure, but they move the date, and a date that moves twice is the most expensive thing on a village kitchen.",
      },
    ],
    living: [
      "Most Hampstead clients stay. Whether that is comfortable depends on the flat rather than on willingness. A village house with a cloakroom basin and a second room for a kettle and a microwave will get through the programme. A one-bedroom conversion where the kitchen tap is the only one outside the bathroom usually will not, and we say so at the visit rather than three weeks in. Where you stay, we set up a temporary point on the first day, isolate the room with a fixed screen rather than a sheet over a door, and clear the working area each evening.",
      "Noise is the part people underestimate. Strip-out and first fix are loud, they are loud into a party wall, and in a converted village house the neighbour above hears a chase being cut as clearly as you do. Those operations are written into the programme as named days so you and the neighbours know which ones they are. We work Camden's ordinary hours and the building's, whichever is tighter, and we do not run noisy work on a Sunday in a lane where every window is open.",
    ],
    handover: [
      "Handover is a walk round the finished kitchen with the doors open and the drawers out. We write the snag list, not you, and anything we find goes on it whether or not you had noticed. Appliance paperwork, Gas Safe documentation for any gas work, and notification for new circuits where the wiring regulations require it are handed over as one set rather than posted on separately. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Period rooms move after a kitchen goes in. Lime plaster that has been opened up dries at its own pace, a scribed filler beside a chimney breast can show a hairline in the first winter, and a door on a new hinge will want easing once the heating has been on properly. We expect that and we come back for it. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and the return is arranged as one visit rather than a series of call-outs.",
    ],
    moreFaqs: [
      {
        q: "Our Hampstead flat is above a shop on the High Street. Is that a different job?",
        a: "The kitchen is the same; the building is not. Access is usually a narrow side door and a straight steep stair, the commercial lease below sets which hours are tolerable, and waste and extract may pass through fabric belonging to the shop rather than to you. We measure the stair and establish who owns the route before anything is ordered, and the delivery is planned for a time that does not put a lorry across a shopfront.",
      },
      {
        q: "How long does a Hampstead kitchen actually take on site?",
        a: "The noisy part is short and the middle is a wait. Strip-out and first fix move quickly; the fixed pause is between worktop template and the fabricated worktop returning, and nothing can be second-fixed until it does. Dates are written after the room has been measured. What lengthens a village kitchen is almost never the build — it is the lead-in for consent and the delivery window on the lane.",
      },
      {
        q: "Can you keep the original floorboards in a Hampstead kitchen?",
        a: "Often, where they are sound and the levels work. Boards under a kitchen take water, point loads from appliances and the trauma of a strip-out, so we inspect from below where there is access and say honestly whether they will survive. Where a run has been cut about by earlier plumbing, patching to match rarely reads well, and we will tell you that before you pay for it.",
      },
      {
        q: "Do you fit client-supplied kitchens in Hampstead?",
        a: "Yes, and a good number of village kitchens arrive that way. We ask to see the plan and the schedule before it is ordered, because a layout drawn in a showroom against a rectangle will not survive a chimney breast and an out-of-square return. Where we fit a kitchen we did not specify, we say in writing what we can and cannot stand behind, and missing or damaged components remain the supplier's to resolve.",
      },
      {
        q: "Is there any point putting an island in a Hampstead village kitchen?",
        a: "In most of this stock, no. The rooms are handsome rather than large, the chimney breast takes the only long wall, and an island needs circulation on four sides plus services under a floor that may not want to be cut. A peninsula off an existing run is sometimes honest. We would rather say no at the visit than draw something that makes the room worse.",
      },
      {
        q: "Who deals with Camden if the kitchen needs a new grille?",
        a: "We prepare what is needed — position, drawings, method — and we will talk to the officer. The application is made by you or your agent, and the decision is Camden's. In a listed building near the village core the question may be listed building consent rather than planning, and that is established on the address before the hood is chosen. We do not cut a hole and argue afterwards.",
      },
    ],
  },

  "west-hampstead": {
    survey: [
      {
        title: "The stack, and what it will take",
        text: "A rear-return kitchen is planned from the soil and waste arrangement on the back elevation, so the first job of the visit is working out what that pipework already serves. In a house split into three flats it is carrying more than your sink. We establish the invert, the fall available across the return floor, and whether a machine can join the run without backing up into the demise below.",
      },
      {
        title: "Door swing against cabinet run",
        text: "The typical return has one window, a party wall and a door that opens straight into the working run. We measure the swing, because the fix is usually to rehang or change the door rather than shorten the kitchen, and that is a joinery decision taken at the visit rather than an argument at second fix.",
      },
      {
        title: "How square the return actually is",
        text: "Rear additions on these terraces were built quickly and have settled since. We take diagonals as well as lengths and record the bow along the party wall, because a three-metre run against a wall that bellies by fifteen millimetres is a scribing problem to be designed in, not filled afterwards.",
      },
      {
        title: "The shared hall between street and room",
        text: "In a conversion, everything you buy crosses somebody else's floor. We measure the front door, the hall width, the turn at the foot of the stair and whatever original tiling lies on the route, and the protection specification for that hall is written before a date is given.",
      },
      {
        title: "Which conservation area, if any",
        text: "West Hampstead is not uniformly designated. Streets toward Fortune Green and the South Hampstead approaches sit in Camden conservation areas; others do not, and Article 4 directions on windows may apply regardless. We check the address rather than the neighbourhood name and say what it means for the extract terminal. [VERIFY the named area and any Article 4.]",
      },
    ],
    materials: [
      "Compact rooms reward restraint. In a rear return with one window, a full-height bank of tall units opposite the glass will eat the light the room has; base units with open shelving or a shallow wall cupboard usually read better and cost less. Worktops are specified by category rather than brand, and in a narrow galley the thinner profiles buy a surprising amount of visual room without much changing the price.",
      "Handling drives material choice more here than in a house with a drive. A three-metre slab of engineered stone has to come through a Victorian front door, along a shared hall and round a bottom step, and where that is not possible the worktop is specified in joined sections with the joint placed deliberately rather than where it happens to land. Laminate and timber are not a downgrade in this stock; sometimes they are the only surface that can physically reach the room in one piece.",
      "Extract is a material decision as much as a mechanical one. A ducted hood on a rear elevation needs a terminal the elevation and the neighbours will live with, and in a stacked conversion a short run to a badly placed grille sends cooking smells into somebody's bedroom window. Where the honest answer is a recirculating hood with a carbon filter, we specify that and say why, rather than ducting to the nearest brick and calling it solved.",
    ],
    programme: [
      {
        title: "Notice to the building, before anything else",
        text: "Two or three households share the front door. The freeholder's pack, where there is one, and plain notice to the neighbours about the noisy weeks are settled first. It costs nothing, and it is the single thing that keeps a conversion kitchen from turning into a dispute.",
      },
      {
        title: "Hall protection and a licensed skip position",
        text: "Hall and stair are covered, the skip is licensed on a residential side street rather than on West End Lane, and the strip-out day is booked to that position. Camden issues the licence; the interchange decides which hour is usable.",
      },
      {
        title: "First fix into the return",
        text: "Waste to the stack, supply, circuits and the extract duct, all set against the survey. This is where a bowed party wall and a floor falling toward the garden either behave as recorded or produce the provisional item flagged at the visit.",
      },
      {
        title: "Carcasses scribed, then template",
        text: "Units are levelled and scribed to the bow. Template follows the fitted carcasses, and the worktop returns on a fabrication lead time that sits in the middle of the programme and cannot be shortened by working longer days.",
      },
      {
        title: "Second fix, then the hall comes back",
        text: "Appliances, taps, hood and final electrical work, the kitchen decorated to a clean finish, and the shared hall returned to the condition it was in. The last item on a conversion kitchen is somebody else's floor, and it is not an afterthought.",
      },
    ],
    access: [
      "Three stations sit on West End Lane — Underground, Overground and Thameslink — and the road works hard all day. Loading a kitchen from the high street is rarely the right answer, so we licence a position on a residential side street and time the drop around the interchange. That is a planning decision taken at survey, not a call made by a driver at eight in the morning. Where the terrace has a front gate rather than a path a trolley can use, the handling allowance goes in the proposal.",
      "Camden issues skip and scaffolding licences, and controlled parking applies on the residential streets [VERIFY the CPZ]. In a converted house the practical constraint is not the street but the front door: a shared entrance, a tiled hall somebody restored, and a stair the other households use every day. We protect the route, keep it clear at the end of each day, and do not stack strip-out waste in a hall while waiting for a skip that has not arrived.",
    ],
    costDrivers: [
      {
        title: "Whether the worktop can reach the room",
        text: "A single-piece surface that has to negotiate a Victorian front door and a hall turn may need joining, craning or a different material altogether. That is settled at the visit and it changes the figure, which is why the route is measured as carefully as the room.",
      },
      {
        title: "What the stack will accept",
        text: "Joining a machine and a sink to existing pipework on the rear elevation is straightforward where the fall is there. Where it is not, the run has to be re-made, and in a conversion that can involve pipework serving another demise. The survey settles which of those two jobs it is.",
      },
      {
        title: "How much common part is in scope",
        text: "Protecting a shared hall is included. Making good somebody else's tiled floor because an earlier trade damaged it is not, unless the freeholder instructs it separately. We photograph the route before starting so that conversation rests on evidence rather than memory.",
      },
      {
        title: "The bow in the party wall",
        text: "A wall that runs out over three metres is designed around with deeper scribes, packed carcasses and a considered filler. That is ordinary work, priced honestly. The expensive version is the one discovered after cabinets have been ordered to a drawing that assumed a straight line.",
      },
    ],
    living: [
      "A rear-return kitchen is the only kitchen in the flat, so staying through the programme means living without one. Most West Hampstead clients do stay, and it works where there is a room that can take a kettle, a microwave and a fridge, and a basin somewhere that is not the kitchen sink. We set that up on the first day rather than leaving you to improvise. The kitchen is screened from the rest of the demise, and the screen goes up before the first cupboard comes down.",
      "Terraced party walls carry noise both ways, and in a converted house there is a household above the return as well as beside it. Noisy operations are written into the programme as named days, kept inside Camden's hours and the building's, and the dates are given to the neighbours. That is not a courtesy — a neighbour who knows which Tuesday is the loud one is a neighbour who does not stop the job.",
    ],
    handover: [
      "We walk the finished kitchen with you, with every door and drawer opened, and we write the snag list ourselves. Gas Safe documentation for any gas work, electrical notification where the wiring regulations require it, and the appliance paperwork are handed over together. The shared hall and stair are inspected at the same time and signed off as returned. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In a rear return, the first winter tells you what the building is doing. A scribe against a bowed party wall may show a hairline, a door hung in a settled opening may want easing, and a waste run that behaves in July can announce itself in December. We would rather you called than lived with it. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and we come back once for the whole list.",
    ],
    moreFaqs: [
      {
        q: "Can a washing machine go in a West Hampstead rear-return kitchen?",
        a: "Usually, but the position is set by the waste rather than by preference. The machine needs a run to the stack with enough fall, and in a conversion that pipework is often shared with the flat above. Where the fall is not there, the honest options are moving the machine to where it can drain, or re-making the run — and the second is a bigger job than it looks. We settle it at the visit.",
      },
      {
        q: "Our flat is one of three in the house. Do all of us have to agree?",
        a: "Not to the kitchen itself, in most cases. Your lease governs what you may alter inside your demise, and the freeholder grants any licence. The other households are not consenting parties, but they share the hall and the stair and will live through the noise, so they get notice and the route gets protected as a matter of method. Where a share of the freehold is held between you, your neighbours are the freeholder, and then they do sign. [VERIFY the lease.]",
      },
      {
        q: "Can you fit a kitchen in a West Hampstead mansion flat near the station?",
        a: "Yes, and it is a different job from the terraces behind. Purpose-built blocks have original risers, a managing agent with working hours, and a lift that may or may not take a tall unit. We measure the lift car and the stair on the same visit, and the licence-to-alter pack is agreed before anything is ordered. The room is usually compact and honest about it.",
      },
      {
        q: "Is it worth moving the kitchen to the front room instead?",
        a: "Almost never as a kitchen instruction. Moving the room means taking waste and supply across the flat, cutting a floor that sits over another household, and running extract to what may be the principal elevation. That is a different class of project. If it is genuinely what you want, we will say at the visit that it sits with Hampstead Renovations rather than stretch this service to cover it.",
      },
      {
        q: "How do you keep dust out of the rest of a small conversion flat?",
        a: "With a fixed screen and a covered route, not a dust sheet. The kitchen is isolated at the doorway, the route to the front door is covered along its length, and cutting that can be done outside is done outside. Nothing keeps a strip-out perfectly clean in a flat this size and we will not claim otherwise, but the difference between a screen and a sheet over a door is the difference between a manageable fortnight and living in it.",
      },
      {
        q: "Do you work around the West Hampstead street market and event days?",
        a: "Deliveries are planned around whatever is happening on West End Lane that week rather than assuming a clear road [VERIFY current market days and any street closures with Camden]. It is one of the reasons the drop is licensed on a side street. A vehicle that cannot reach the door is a lost day, and lost days are the part of a programme clients notice most.",
      },
    ],
  },

  "belsize-park": {
    survey: [
      {
        title: "Which building you are actually in",
        text: "Belsize has two kinds of client and they are surveyed differently. A laterally converted stucco house off the Village needs the lease, the neighbours who hold the freehold between them, and a floor that sits over another household. An avenue mansion block needs the managing agent's alteration pack, the porter's hours and the lift dimensions. The first hour of the visit establishes which of those two jobs this is.",
      },
      {
        title: "The riser, in a purpose-built flat",
        text: "On Belsize Avenue and Haverstock Hill the kitchen is generally a compact galley served by an original riser shared up the building. We open the duct where we can, photograph what is in it, and establish whether new services may join it at all. A riser that cannot be added to sets the layout absolutely, and it is better known in week nought than in week three.",
      },
      {
        title: "Ceiling height and the working plane",
        text: "Rooms here are tall, and that changes the sequence rather than the finish. We measure to the cornice and note where a tower or a platform will be needed, because access equipment in a room that will shortly hold a run of cabinets has to be programmed rather than improvised. The measurement decides what happens in which order.",
      },
      {
        title: "What the last fitter left behind",
        text: "Most Belsize kitchens are at least the second in the room. We look for the fingerprints of the previous fit — a capped waste behind a cupboard, a spur off a spur, a floor packed level with offcuts — because those are the things that turn a clean strip-out into a discovery. Anything we cannot see is listed as provisional rather than assumed away.",
      },
      {
        title: "Working hours, written down",
        text: "A managed avenue block has hours in the lease and hours the porter will actually enforce, and they are not always the same document. A converted house has neighbours who work from home. We get both in writing before dates are offered, because a programme built on the wrong hours is a programme that will be stopped.",
      },
    ],
    materials: [
      "Height is the material question in Belsize. A tall room will take a full-height run without feeling oppressive, which is rare in North West London, and wall cabinets that stop short of a cornice look accidental rather than considered. Either the run acknowledges the cornice with a deliberate gap and a lit reveal, or it stops at a height that reads as a decision. We draw both at the visit so the choice is made with the room in front of you.",
      "Surfaces are specified against the light the room actually gets. A stucco house on a north-facing avenue has cool, even light that flatters a matt stone; a Village conversion with one tall sash and a light well behind gets sharp directional light that shows every ripple in a gloss door. Worktops stay in generic categories, and the template is taken from installed carcasses after the floor has been levelled, not before.",
      "In a mansion-flat galley the constraint is weight and width rather than taste. A stone worktop that cannot go in the lift goes up the stair in sections, and a section joint in a short galley is visible, so we would often rather specify a material that arrives in one piece. Where the client has already bought a slab that will not make the turn, we say so before it is delivered rather than after it is standing in a communal hall.",
    ],
    programme: [
      {
        title: "The alteration pack, or the neighbours' signature",
        text: "Paperwork first, and which paperwork depends on the building. A managing agent's pack on the avenues runs to its own timetable; a share-of-freehold house needs your neighbours to sign, formally. Nothing is ordered against a consent that has not arrived.",
      },
      {
        title: "Overhead work while the floor is clear",
        text: "Filling, making good and finishing at ceiling level happen before a run of units makes a platform impractical. In a tall Belsize room this is not a preference. Done in the wrong order, the joints overhead are visible for the life of the kitchen.",
      },
      {
        title: "Strip-out with the lift booked",
        text: "In an avenue block the lift is booked and protected, or the stair is protected instead. In a converted house the skip position on a side street off Haverstock Hill is licensed first. Either way, waste leaves the building on a plan rather than as it accumulates.",
      },
      {
        title: "First fix against the riser",
        text: "Services are taken to the positions the riser and the floor will actually accept. This is the stage where a capped waste from a previous fit is either useful or in the way, and where the provisional items flagged at survey are resolved with you rather than absorbed quietly.",
      },
      {
        title: "Cabinetry, template, second fix",
        text: "Carcasses are levelled and scribed to the breast and the cornice line, the worktop is templated from them, and second fix follows its return. The kitchen is decorated to a clean handover and the common parts are put back before the last day is called.",
      },
    ],
    access: [
      "Haverstock Hill is a corridor rather than a street, and it is the wrong place for a kitchen delivery. The side streets and the Village lanes take the vans, under Camden's controlled parking [VERIFY which authority controls a given frontage and the CPZ code]. On the avenues the harder constraint is inside the building: a porter, a booking sheet for the lift, and a rule that says deliveries do not cross the lobby during certain hours. We get that in writing at survey and build the delivery schedule around it rather than turning up and negotiating.",
      "Camden issues skip and scaffolding licences. In a converted Village house the licensed position may be some distance from the front door, which makes strip-out a carrying job as much as a demolition one, and that is in the proposal as handling. Where the block prohibits a skip entirely — common on managed avenue estates — waste goes out by van in booked loads, which is slower, quieter and more expensive, and we say which of those three matters most to you before choosing.",
    ],
    costDrivers: [
      {
        title: "Lift, stair or neither",
        text: "A booked lift that takes a tall unit is the cheapest route into an avenue flat. A protected stair is slower. A stair too tight for assembled carcasses means flat-pack assembly on site, which is a different labour figure entirely, and it is settled by a tape measure at the visit.",
      },
      {
        title: "How high the ceiling is",
        text: "Height is money in two directions: more wall to finish, and a platform in the room while it is being finished. It also buys a better kitchen, because the run can be full height. We price the access equipment openly rather than folding it into a rate that hides it.",
      },
      {
        title: "Whether the riser will take it",
        text: "Joining an existing riser is ordinary. Being told the riser is closed to new services, and having to route a waste across a floor to reach another position, is not. This is the single biggest swing on an avenue mansion-flat kitchen, and it is established before a figure is written.",
      },
      {
        title: "Who has to consent, and how slowly",
        text: "A managing agent's pack, a share-of-freehold signature from the neighbours, or both in a building that has been through more than one tenure arrangement. Consent rarely changes the build cost and regularly changes the calendar, and a calendar that slips is a cost of its own.",
      },
    ],
    living: [
      "Whether you can stay through a Belsize kitchen depends on which building you are in. An avenue mansion flat usually has a bathroom off the hall with a basin, a hall wide enough to hold a temporary run, and enough separation for a screened kitchen not to dominate the demise. That works. A single-storey Village conversion where the kitchen opens onto the living space is harder, and in a tall room a dust screen has to be built rather than hung. We say which of the two you have at the visit.",
      "The neighbours are closer than they look in this stock. A laterally converted house transmits impact noise through a floor that may be the original one, and on the avenues the flat below has a ceiling you are working on top of. Noisy operations are named as dates, kept inside the building's hours, and notified to the households affected. We would rather lose an afternoon to a restriction we knew about than a week to one we did not.",
    ],
    handover: [
      "The walk round is done with the room empty and the light on. We open everything, run the appliances, check the fall on the waste with water rather than by eye, and write the snag list ourselves. Gas Safe documentation, notification of new circuits where the wiring regulations require it, and the appliance paperwork are handed over as one set. Where the building required an alteration pack, the as-built position is recorded for your file. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Tall rooms show movement more than low ones, and a Belsize ceiling line will tell you within a season whether the filling was done properly. So will a scribe against a chimney breast, and a cornice junction above a new run. We come back for those. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and the return visit takes the whole list at once rather than one item at a time.",
    ],
    moreFaqs: [
      {
        q: "The porter says deliveries are lobby hours only. Does that change the price?",
        a: "It changes the programme, and where it forces multiple smaller deliveries or handballing up a stair rather than a single booked lift slot, it changes the handling figure. It does not change the kitchen. We get the building's rules in writing at survey precisely so this is priced rather than discovered, and we would rather work to a restrictive rule properly than argue with a porter on a delivery morning.",
      },
      {
        q: "Can wall cabinets run up to the cornice in a Belsize room?",
        a: "They can, and in a tall room it is often the better answer, but the junction has to be designed. A cabinet butted into a moulded cornice looks like a mistake; a deliberate gap with a lit reveal, or a scribed panel that follows the profile, looks like a decision. We draw the junction at full size before anything is ordered, because it is the detail people look at every day.",
      },
      {
        q: "There is an old capped pipe behind the units. Is that a problem?",
        a: "It is a question rather than a problem. Capped services from a previous fit are common in Belsize kitchens, and some of them are still live at the other end. We trace what we find, remove what is genuinely redundant, and leave nothing capped inside a sealed void where a future leak cannot be reached. Anything we cannot trace without opening up further is listed as a provisional item.",
      },
      {
        q: "Our block has a lift. Will the units go in it?",
        a: "We measure it rather than assume. Older passenger lifts on the avenues have shallow cars and a door width that a tall larder unit will not pass, and the diagonal inside the car matters as much as the opening. Where the lift will not take them, units are assembled on site or carried up a protected stair, and both of those are priced as what they are.",
      },
      {
        q: "Is a Belsize Village kitchen quicker than an avenue one?",
        a: "The build is comparable. The difference is at both ends: an avenue block has a formal pack and a booked lift, which is slow but predictable, while a converted house has neighbours whose diaries are not a process. Village lanes also constrain the vehicle more than the avenues do. We give dates once we know which set of constraints applies to your address.",
      },
      {
        q: "Do you have to take the kitchen ceiling down?",
        a: "Rarely. In a tall Belsize room the ceiling is usually made good rather than replaced, and where there is a cornice we would always rather repair than lose it. A ceiling only comes down where it has failed, where a leak from above has to be traced, or where services genuinely cannot be routed any other way. If that is the case we say so at survey and price it, rather than opening it up once the room is stripped.",
      },
    ],
  },

  "st-johns-wood": {
    survey: [
      {
        title: "The alteration pack, before the tape measure",
        text: "In an NW8 mansion block the managing agent's requirements come first, because they set what may be surveyed and when. Design guides here are frequently stricter than planning: what may be fixed to a party wall, whether a waste may move at all, which contractors may work in the building. We read the pack at the outset so the survey measures a kitchen the building will actually permit.",
      },
      {
        title: "The stacked bathroom and kitchen above and below",
        text: "Flats in the Wellington Road and Prince Albert Road blocks stack their wet rooms through the building. We establish what sits directly above and below the kitchen, because a waste moved by half a metre in your flat runs across somebody's ceiling. The neighbour below is a survey consideration, not a courtesy call afterwards.",
      },
      {
        title: "Lift car, lobby and the protected route",
        text: "We measure the lift internally — width, depth, diagonal and door opening — plus the lobby turn and the corridor width outside your door. Those numbers decide whether cabinets arrive assembled. The protection specification for lobby, lift and corridor is written against the building's own standard, which is usually more demanding than ours.",
      },
      {
        title: "Original service runs in a villa",
        text: "On the villa streets the survey is a different exercise. Later interior alterations have often moved the kitchen at least once, boxing has been built over boxing, and the original service positions are not where the drawings say. We open enough to know, and list the rest as provisional rather than guessing.",
      },
      {
        title: "What happens on a match day",
        text: "Lord's affects the surrounding streets on fixture days, and a delivery booked into one of those mornings is a delivery that does not happen. We check the fixture calendar against the programme at the visit and schedule the large drops away from it. [VERIFY event restrictions with the building and the fixture list.]",
      },
    ],
    materials: [
      "Mansion-flat kitchens in NW8 are usually compact and rectilinear, and they respond well to a quiet specification: a continuous run, a single worktop material, minimal breaks. What ruins them is a showroom scheme designed for a larger room and then compressed. We specify fewer cabinet types rather than more, and we would rather spend on a better drawer mechanism that gets used forty times a day than on a decorative pelmet nobody looks at.",
      "Weight and route govern the worktop. A stone slab that cannot enter the lift will be carried up a protected stair in sections, and in a short galley a join is conspicuous. Where the route is the binding constraint we will recommend a material that arrives in manageable pieces, or a scheme where the join falls at a natural break such as a hob cut-out, and we say which we are doing and why before anything is ordered.",
      "Noise transfer is a specification issue in a purpose-built block, not just a working-hours one. Soft-close throughout, an acoustic mat under an appliance that stands on a timber floor over a neighbour, and a considered position for the machine that runs at night are all cheap at the specification stage and impossible afterwards. The villa streets have more forgiveness in the fabric; the blocks have none.",
    ],
    programme: [
      {
        title: "Licence to alter, agreed in full",
        text: "Drawings, method statement, insurance details and contractor particulars go to the managing agent, and the building responds on its own timetable. Nothing is ordered and no date is promised until the licence is granted. In NW8 this stage is the programme.",
      },
      {
        title: "Building protection to the block's standard",
        text: "Lobby, lift car, corridor and your own hall are protected to what the building requires, inspected by the porter where that is the rule, and signed off before the first item is carried in. It is the porter's building for eleven months of the year.",
      },
      {
        title: "Strip-out to booked removal slots",
        text: "Waste leaves in booked loads rather than to a skip, because most of these blocks will not have one on the forecourt. Strip-out is paced to the removal slots available, which is why it is planned rather than simply started.",
      },
      {
        title: "First fix within the demise",
        text: "Services are taken to positions the riser, the floor and the licence all permit. Where the pack limits what may be fixed or chased, the method follows it exactly, because a breach found at this stage can stop a job in a managed building.",
      },
      {
        title: "Cabinets, template, second fix, sign-off",
        text: "Carcasses levelled and scribed, worktop templated from them, second fix on its return, then decoration to handover. The building often wants its own sign-off of the common parts as well as yours of the kitchen, and both are arranged for the same day.",
      },
    ],
    access: [
      "St John's Wood is a building-access problem more than a street-access one. Westminster issues the skip and scaffolding licences and operates the controlled parking, but the constraint that decides your programme is usually the block's: porters' hours, a booking sheet for the lift, a rule against deliveries through the main lobby, and a protection standard written by a managing agent who will inspect it. We collect all of that at survey and design the delivery schedule around it. Match days at Lord's are checked against the programme before large drops are booked [VERIFY with the building].",
      "On the villa and mews streets the position is different again. Off-street parking is more common, which eases handling, but mews properties frequently have a narrow entrance, a tight turning head and no room for a lorry to stand. We survey the turning circle as well as the door. Where a vehicle cannot reach the property, material is transferred to a smaller van, and that is a line in the proposal rather than a surprise on a delivery morning.",
    ],
    costDrivers: [
      {
        title: "What the licence requires of us",
        text: "Some NW8 packs ask for drawings, a full method statement, specified insurance and named operatives. Preparing that properly takes time and it is chargeable time. It is also the difference between a building that lets you work and one that does not.",
      },
      {
        title: "Removal by booked load",
        text: "Where a skip is not permitted, strip-out waste leaves in vans on the building's timetable. That is slower, needs more labour and costs more than a skip on a side street. It is priced as what it is rather than absorbed into a rate.",
      },
      {
        title: "Protection to somebody else's standard",
        text: "Protecting a marble lobby and a lift car to a managing agent's written specification is a real item. So is the time spent having it inspected. We include it, name it, and take it down at the end without leaving marks on the thing we were protecting.",
      },
      {
        title: "Whether the waste may move at all",
        text: "In a stacked block, moving a waste can require a further consent and works over a neighbour's ceiling. Keeping the sink where it is can be the difference between an ordinary programme and one that needs a second approval. We establish it at survey, because it changes the design as well as the figure.",
      },
    ],
    living: [
      "Mansion flats in NW8 usually make staying possible. There is generally a second wet room, a hall wide enough for a temporary arrangement, and a solid enough construction that a screened kitchen does not take over the flat. What is harder is the building's tolerance: a porter fielding complaints will set shorter hours than the lease technically allows, and a programme that ignores that will be shortened for you. We work to the hours the building actually keeps.",
      "On the villa streets the question is different. A family house with a second kitchen or a utility can absorb the work easily; one without means the family eats out of a single room for the noisy weeks. Either way we set up the temporary arrangement on day one, screen the working area properly, and clear the route at the end of each day, because a hall full of carcass is how a household loses patience with a job that is otherwise going well.",
    ],
    handover: [
      "In a managed building, handover happens twice. You get the walk round the finished kitchen — everything opened, appliances run, waste tested with water, snag list written by us. The building gets its common parts inspected and signed off, protection removed, and the licence file closed with an as-built record. Gas Safe documentation and electrical notification where the wiring regulations require it go into both. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Purpose-built blocks are stable, which means that what shows up later is usually a mechanism rather than the fabric: a drawer runner that wants adjusting, a door that has settled a millimetre, a hood whose filter routine needs explaining again. Those are ordinary and we return for them. Telephone 020 7101 3168 or write to office@hpsg.co.uk. Where the building requires notice for a return visit, we arrange that with the agent rather than leaving it to you.",
    ],
    moreFaqs: [
      {
        q: "Our managing agent has a list of approved contractors. Can you still work here?",
        a: "Frequently, yes. Most lists are about insurance, method and references rather than a closed panel, and we provide what the building asks for as part of the licence pack. Where a building genuinely restricts work to a named list, that is the freeholder's right and we will say so rather than waste your time. It is worth asking the agent the question before the survey, and we can draft that enquiry for you.",
      },
      {
        q: "Can we move the sink in a St John's Wood mansion flat?",
        a: "Sometimes, and the limit is the waste rather than the plumbing. These flats stack their wet rooms, so a sink moved along a wall may still reach the existing waste with the right fall, while a sink moved across the room may not reach it at all without running above a neighbour's ceiling. That second version usually needs its own consent and sometimes is simply refused. We establish which you are asking for at the survey.",
      },
      {
        q: "Does Lord's really affect a kitchen delivery?",
        a: "On fixture days the streets around the ground are busier and some access is managed differently, so a lorry booked into that morning may not be able to stand where it needs to [VERIFY the fixture list and any event restrictions with the building]. It is easily avoided by checking the calendar when the programme is written. It is only a problem for people who do not check.",
      },
      {
        q: "Is a villa kitchen in NW8 a different service from a mansion-flat one?",
        a: "The definition is identical: a fit-out of the room that exists. The constraints differ completely. A villa has its own front door, usually somewhere to park, and no porter — but it often has boxed-in service runs from earlier alterations and no drawings of any of it. A mansion flat has documentation, a lift and a rulebook. The same team does both; the survey asks different questions.",
      },
      {
        q: "Can you work in the mews houses behind the avenues?",
        a: "Yes, and the building is genuinely different construction from the villas in front of it. The recurring issues are the narrow entrance, the turning head that will not take a long vehicle, and first-floor living space reached by a single stair. We measure the turning circle as well as the doorway, and material is transferred to a smaller van where it has to be. None of that is unusual; all of it has to be planned.",
      },
      {
        q: "How much notice does the building need before we start?",
        a: "It varies widely and it is the first thing we ask. Some NW8 agents want the licence granted and a fortnight's notice; others want contractor details, insurance and a method statement lodged well ahead, and will not let a van into the forecourt without them. We find out at the survey and build the lead-in around the real number rather than an optimistic one. [VERIFY with the managing agent for your building.]",
      },
    ],
  },
  "maida-vale": {
    survey: [
      {
        title: "The plan you are not allowed to forget",
        text: "W9 mansion flats keep their original plan: a long corridor, a kitchen at the back, a bathroom off the hall. The survey starts by accepting that plan rather than looking for a way round it. We measure the corridor because everything arrives along it, and we record where the service duct runs, because that single line decides whether the kitchen can change at all.",
      },
      {
        title: "Lift dimensions, honestly taken",
        text: "Lifts in the older blocks are small, and the number that matters is the internal diagonal rather than the door width. We measure the car, the landing outside it and the turn into your hall, then say plainly whether carcasses come up assembled or whether they are built in the flat. Most Maida Vale kitchens go up the stairs, and that is a labour figure, not an inconvenience.",
      },
      {
        title: "The floor build-up over a neighbour",
        text: "Intermediate floors here are timber, and everything you put on them is heard below. We establish the existing build-up, whether a previous owner has already added layers, and how much depth is available for a waste run. Depth is usually the thing in shortest supply, and it decides where a machine can go.",
      },
      {
        title: "Porters, and what they actually control",
        text: "A Maida Vale porter typically controls the lift, the times deliveries may cross the lobby, where waste may stand and for how long. We ask all four questions at the visit and write the answers into the method. A programme that assumes a cooperative building and finds a rulebook loses a week it did not budget for.",
      },
      {
        title: "Canal-side and conservation questions",
        text: "Much of W9 sits in Westminster's Maida Vale Conservation Area, and exterior painting of previously painted brick, window work and balconies are frequent consent topics. Properties on the water may have further considerations. None of that touches an interior fit-out; all of it touches an extract terminal. [VERIFY the designation and any Canal and River Trust interest on the frontage.]",
      },
    ],
    materials: [
      "A Maida Vale kitchen is usually a rectangle at the end of a corridor, and the honest specification treats it as one. Runs down two walls, a single worktop material, appliances integrated where they must be and freestanding where that is genuinely better. The red-brick and terracotta blocks carry a certain weight of detail on the outside; inside, a quiet kitchen wears better than one trying to reference the period.",
      "Because most material comes up a stair, we specify with the stair in mind. Worktops in manageable sections, carcasses that can be assembled in the flat where the lift will not take them, and appliances checked against the landing turn before they are ordered. A range cooker that cannot make the half-landing is a problem nobody wants to discover with the old one already gone.",
      "Sound matters more than people expect in these blocks. A machine standing on a timber floor above somebody's bedroom will be heard, so an acoustic mat, a considered position and soft-close hardware are specified as standard rather than as an upgrade. Where a client wants a hard floor in the kitchen, we say what it will sound like downstairs before it is laid, not after the first complaint.",
    ],
    programme: [
      {
        title: "Licence, then porter's rules",
        text: "The freeholder's licence to alter is agreed, and separately the porter's practical rules are recorded. They are different documents and both bind the programme. Nothing is ordered until the first exists and the second is understood.",
      },
      {
        title: "Stair protection and a delivery plan",
        text: "Common stair, landings and your own hall are protected. Deliveries are scheduled into the slots the building allows, in loads that can be carried in one session, because part-loads standing in a Maida Vale lobby are exactly what a porter will stop.",
      },
      {
        title: "Strip-out along the corridor",
        text: "The old kitchen leaves the way the new one arrives, along the corridor and down the stair. Waste is bagged rather than carried loose, and it leaves the same day it is generated. This stage is noisy and is programmed as named days.",
      },
      {
        title: "First fix against the duct",
        text: "Services are run to what the duct and the floor depth will take. Where a waste needs more fall than the build-up allows, that is resolved here, with you, rather than by quietly accepting a gradient that will not clear.",
      },
      {
        title: "Assembly, template, second fix",
        text: "Carcasses are built and levelled in the flat where the lift required it, the worktop is templated from them, and second fix follows its return. Decoration closes the room, the stair protection comes out, and the common parts are inspected.",
      },
    ],
    access: [
      "Access in Maida Vale is a stair problem. Lifts in the 1890s to 1910s blocks are small, frequently too small for a tall unit, and often out of bounds for goods altogether under the porter's rules, so kitchen carcasses go up the stairs as a working assumption until a tape measure proves otherwise. That is a labour cost and we name it. Westminster's controlled parking and licensing apply on the street, and a vehicle cannot simply stand on Elgin Avenue or Sutherland Avenue while a kitchen is unloaded at leisure.",
      "The mews behind the principal avenues are a different construction and a different access problem: narrow entrances, no turning room, and sometimes a first-floor kitchen reached by one stair. We survey the turning head as well as the doorway. On canal-side frontages near Little Venice, a delivery may need to cross a footway used by the public, and a plan for that goes in the method rather than being improvised with cones on the morning.",
    ],
    costDrivers: [
      {
        title: "Stairs instead of a lift",
        text: "Carrying a kitchen up three flights and assembling it in the flat is materially more labour than wheeling it out of a goods lift. It is the most common cost driver in W9 and the easiest to establish: we measure the car at the survey and tell you which one you have.",
      },
      {
        title: "What the floor depth allows",
        text: "A waste that needs fall and a floor that has none is the classic Maida Vale collision. Solving it can mean a different appliance position, a raised plinth detail, or accepting the layout the building gives you. Which of those it is changes the figure and is settled before design.",
      },
      {
        title: "The building's delivery window",
        text: "Where a porter allows goods in for two hours a day, a kitchen arrives in more visits with more labour on each. That is real and it is priced. It is also why we ask the question at survey rather than at the first delivery.",
      },
      {
        title: "Whether the duct is open to you",
        text: "Joining an existing service duct is ordinary. Being told it is closed, and needing a route across a floor over a neighbour, is a different job requiring its own consent. This is the largest single swing on a Maida Vale kitchen.",
      },
    ],
    living: [
      "These flats are generally well made and quite separate from one another, which makes staying through a kitchen programme realistic. There is usually a bathroom off the hall with a basin, and a corridor plan that lets the kitchen be closed off properly rather than screened across an open space. We set up a temporary arrangement in a room away from the work on the first morning, and the kitchen door becomes a sealed boundary rather than a curtain.",
      "The people you will hear from are below you. Timber intermediate floors carry impact noise efficiently, so lifting a floor, cutting for a waste or standing a stone worktop down hard is audible in somebody's living room. We name the noisy days, keep to the building's hours rather than the lease's optimistic version, and let the porter know so that the first person to hear about it is not your neighbour at seven in the morning.",
    ],
    handover: [
      "Handover covers the flat and the route to it. In the kitchen: everything opened, appliances run, the waste tested by filling and emptying rather than by running a tap, and the snag list written by us. In the building: stair protection removed, landings inspected, and any as-built record the licence requires lodged with the agent. Gas Safe documentation and electrical notification where the wiring regulations require it are included. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "What comes back to us in W9 is usually the floor and the mechanisms rather than the finish: a slight movement where a new plinth meets an old board, a drawer that wants adjusting once it has been loaded, an appliance whose feet have settled into a timber deck. All ordinary, all worth a return visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and if the building wants notice before we come back, we arrange it with the porter.",
    ],
    moreFaqs: [
      {
        q: "The porter will not let kitchen units in the lift. What happens?",
        a: "They go up the stairs, and that is planned rather than improvised. We measure the flights, the half-landing turns and the handrail projection at survey, decide whether carcasses come assembled or flat-packed, and put the extra labour in the proposal. It is one of the most common conditions in Maida Vale blocks and it is entirely workable. What does not work is finding out on the delivery morning.",
      },
      {
        q: "Can we put a dishwasher in a Maida Vale flat that has never had one?",
        a: "Usually, if the waste can reach the existing run with fall and the floor will take the plumbing. In a flat with a shallow timber build-up over a neighbour, that is a genuine question rather than a formality. Where the fall is not there, the machine moves to where it is. We test this at survey with a level and a tape, not with an assumption.",
      },
      {
        q: "Will a new extract need Westminster's consent in the Maida Vale Conservation Area?",
        a: "Inside the flat, replacing a kitchen is not planning's business. A new terminal on an elevation within the conservation area frequently is, and on these blocks the elevation is also the freeholder's fabric, so there are two permissions rather than one. [VERIFY the boundary for the address.] Where a duct cannot be justified, we specify recirculation and say so before the hood is chosen.",
      },
      {
        q: "Our flat has a long corridor. Does that slow the job down?",
        a: "It adds carrying distance on every delivery and every removal, and in a flat where the kitchen is at the far end it is a real amount of time over a programme. It also helps: a long corridor is easy to protect and makes the kitchen simple to seal off, which makes staying in the flat much more pleasant. Net, it is a handling cost rather than a problem.",
      },
      {
        q: "Can you work on the canal-side properties near Little Venice?",
        a: "Yes. The building work is ordinary; the access needs thought. A frontage onto a towpath or a narrow canal-side road may mean the delivery crosses a public footway, and there may be interests beyond the council on the frontage itself [VERIFY with Westminster and, where relevant, the Canal and River Trust]. We plan the drop as part of the method rather than dealing with it on the day.",
      },
      {
        q: "Is a mews kitchen behind the avenues the same job?",
        a: "The kitchen is; the building is not. Mews properties are a different construction from the mansion blocks in front of them, often with living space at first floor, a single stair and no room for a vehicle to turn. That changes the delivery entirely and sometimes changes the material specification, because a slab that cannot make the stair has to be a slab that arrives in pieces. We measure the turning head and the stair at the same visit.",
      },
    ],
  },

  "swiss-cottage": {
    survey: [
      {
        title: "Which side of Finchley Road you are on",
        text: "The survey question here is stock rather than street. An inter-war block on Avenue Road, a Victorian house a street back toward Belsize, and a flat over a Finchley Road frontage are three different kitchens with three different constraints. We establish the building type first, because it decides whether the binding limit is a managing agent, a party wall or a commercial tenant underneath.",
      },
      {
        title: "Service risers in the purpose-built blocks",
        text: "Inter-war and post-war blocks off Finchley Road have planned risers, which is a gift when they are accessible and a hard limit when they are not. We open a panel where we can, record what is in the duct, and establish whether anything new may join. The answer sets the sink position before any layout is drawn.",
      },
      {
        title: "Ceiling and window heights, which vary sharply",
        text: "Victorian houses on the side streets and the later blocks on the main roads have very different proportions, and the same kitchen design will not suit both. We measure head height, sill height and the reveal depth, because a wall cabinet that crosses a low sill in a 1930s flat is a design error you will live with daily.",
      },
      {
        title: "Whether the main road is your frontage",
        text: "Finchley Road is a major corridor and loading on it is a different process from loading on a side street [VERIFY the highway authority for the frontage]. Where the flat is over a mixed-use frontage, we also establish who occupies the ground floor, what hours they keep, and whether the route in passes through their premises.",
      },
      {
        title: "Which conservation area applies",
        text: "Camden renamed the Swiss Cottage Conservation Area to the South Hampstead Conservation Area, and it still covers many residential streets off Finchley Road and Avenue Road. Belsize Conservation Area adjoins to the east. Main-road frontages are less likely to be designated, but extract on them can still need consent. We check the address, not the neighbourhood. [VERIFY which area applies.]",
      },
    ],
    materials: [
      "The later blocks around Avenue Road have plain, well-proportioned rooms with good natural light and flat, true walls — which means a simple contemporary specification actually works here, where it would fight the fabric in a period conversion. Handleless runs, a continuous worktop and integrated appliances sit comfortably. The Victorian houses a street back want the opposite: scribed cabinetry, a painted finish and a run that acknowledges the chimney breast.",
      "Worktop selection follows the light. Flats on the Finchley Road side often face a busy road with net or blind at the window for much of the day, and a very dark surface in that light makes the room feel closed; the Avenue Road blocks face gardens and take dark stone well. We ask you to see a sample in the actual room at the actual time of day rather than under a showroom spot.",
      "Where the flat sits above a commercial frontage, the specification takes account of what is below. Extract that terminates near a neighbouring tenant's air intake is a problem waiting to be complained about, and floor construction over a shop can be less forgiving than over another flat. These are survey findings that become material decisions, and we would rather change the plan than issue a kitchen that irritates the building from its first week.",
    ],
    programme: [
      {
        title: "Consent, sized to the building",
        text: "A managed Avenue Road block runs a formal licence process. A converted house may need only the freeholder's letter. A flat over a shop may need the commercial lease checked as well. We establish which applies and get it done before anything is ordered.",
      },
      {
        title: "Route protection and the loading plan",
        text: "The route in is protected, and the delivery is planned to a licensed position on a side street rather than to Finchley Road itself. On a main-road frontage the loading plan is written and agreed in advance rather than attempted on the morning.",
      },
      {
        title: "Strip-out, with the hours agreed",
        text: "Noisy work is named as dates and kept inside whichever hours are tighter, the council's or the building's. Where a commercial tenant occupies the ground floor, their trading hours go into that calculation too.",
      },
      {
        title: "First fix to the riser or the stack",
        text: "In a purpose-built flat services go to the riser; in a converted house they go to the rear stack. The two are different jobs with different risks, and this is the stage where the survey's provisional items are either closed out or confirmed.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "Carcasses levelled and scribed, worktop templated, second fix on its return, decoration to a clean handover. The protected route is taken up last, and anything we covered is inspected before we call the job finished.",
      },
    ],
    access: [
      "Finchley Road is a corridor with buses, a Tube station and constant traffic, and it is not a loading bay. Where a flat fronts it, the delivery is licensed and timed, or it happens from a side street with a longer carry, and the proposal says which. On the residential streets off Avenue Road and toward Belsize, Camden's controlled parking applies in the ordinary way and a skip position is licensed in advance [VERIFY the CPZ code and the highway authority for the frontage].",
      "The HPSG office is at 250 Finchley Road, in this neighbourhood, which changes one practical thing: the distance between a problem and somebody who can look at it. A part missing at second fix, a template query, a delivery that has arrived without its fixings — these are a short journey rather than a rescheduled day. We do not claim that makes the kitchen better. It does make the small failures shorter.",
    ],
    costDrivers: [
      {
        title: "Main-road frontage or side street",
        text: "A licensed, timed loading operation on Finchley Road is a different exercise from a van outside a door on a quiet street. Where the frontage is the main road, the delivery method and its cost are decided at survey rather than left to the driver.",
      },
      {
        title: "Block, conversion or over a shop",
        text: "Three building types, three consent regimes, three sets of working hours. The kitchen may be identical; the surrounding obligations are not, and they are the part of the figure that varies most in this neighbourhood.",
      },
      {
        title: "Whether the riser is available",
        text: "In the purpose-built blocks, access to a planned riser makes for a clean, quick first fix. A closed riser pushes the waste across a floor and can require a further consent. It is the first thing we ask of a managing agent.",
      },
      {
        title: "What is behind the plasterboard",
        text: "Inter-war and post-war blocks have been altered repeatedly, and the boxing tells you nothing about what is inside it. Provisional items cover the ones we cannot see without opening up, and they are listed rather than smuggled into a rate.",
      },
    ],
    living: [
      "In the Avenue Road blocks, staying put is usually straightforward: separate wet rooms, a hall that can hold a temporary arrangement, and construction that keeps a screened kitchen genuinely screened. In a converted house on the side streets it is harder, because the kitchen is more likely to open into living space. Over a shop it is harder again, because the practical route in and out passes closer to your living space than anybody would choose. We tell you which of those you have before the programme is agreed.",
      "The noise question here has an extra party. Above a commercial tenant, early starts may be entirely acceptable where they would not be in a residential block; in a mansion flat off Avenue Road the opposite is true and the building's hours are strict. We find out what the building actually tolerates rather than what the lease permits, and the programme follows the tighter of the two.",
    ],
    handover: [
      "We walk the kitchen with you, everything open, appliances run and the waste tested with water. The snag list is ours to write. Gas Safe documentation for gas work and electrical notification where the wiring regulations require it are handed over with the appliance paperwork. Where a managing agent required protection or a method statement, the common parts are inspected and the file closed with them. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Being based on Finchley Road makes the follow-up easier to keep short. A drawer that wants adjusting after a month of use, a door that has settled, a filter routine that needs explaining again — we would rather come back for those than have you live with them. Telephone 020 7101 3168 or write to office@hpsg.co.uk. The return is scheduled as one visit that clears the list.",
    ],
    moreFaqs: [
      {
        q: "Our flat is above a shop on Finchley Road. Can you work there?",
        a: "Yes, and the survey asks two extra questions: where the route in actually runs, and who is underneath. Access is often a narrow side door and a straight stair rather than a lobby, and the floor construction over a commercial unit can be less forgiving than over another flat. The commercial tenant's trading hours are part of the working-hours plan, which sometimes helps and sometimes binds. We establish all of it before dates are given.",
      },
      {
        q: "Is it easier to work with you because the office is nearby?",
        a: "It shortens the small failures rather than changing the kitchen. A missing fixing, a template question, a delivery that needs checking against the room — these are a short trip from 250 Finchley Road rather than a lost day. It also means we can look at a problem on the day you report it. The survey, the specification and the standard are the same wherever the address is.",
      },
      {
        q: "Can you put a modern handleless kitchen in a Swiss Cottage flat?",
        a: "In the later blocks, yes, and it tends to suit them: the walls are true, the rooms are plain and well proportioned, and the detail reads as intended. In a Victorian house on the side streets the same kitchen has to fight a chimney breast and an out-of-square return, and the tight shadow gaps that make it look right are exactly what an old wall will not hold. We say which building you have before you commit to the look.",
      },
      {
        q: "Do you need a licence to load on Finchley Road?",
        a: "Loading on a main-road frontage is a different process from loading on a residential side street, and it depends on the highway authority for that stretch [VERIFY the authority and the current restrictions]. In practice we prefer to licence a position on a side street and accept a longer carry, because a timed operation on Finchley Road is fragile and one delay costs the whole slot. The proposal says which method we are using.",
      },
      {
        q: "Our block was built in the 1930s. Are the services original?",
        a: "Some will be, and some will have been replaced piecemeal since, which is the harder case because nothing matches and nothing is recorded. We open what we reasonably can at survey, list the rest as provisional items, and expect to find at least one surprise at first fix. That is not pessimism; it is how a flat that has been altered for ninety years behaves.",
      },
      {
        q: "Which conservation area are we in?",
        a: "It depends on the street rather than the name of the neighbourhood. Camden's South Hampstead Conservation Area, renamed from Swiss Cottage, covers many of the residential streets off Finchley Road and Avenue Road, and Belsize Conservation Area adjoins to the east. Main-road frontages are frequently outside a designation altogether. We check the address on Camden's map before anything involving an elevation is planned. [VERIFY.]",
      },
    ],
  },

  "primrose-hill": {
    survey: [
      {
        title: "Whether the kitchen is below ground",
        text: "A great many Primrose Hill kitchens sit in a lower-ground room, and that changes every subsequent question. We check for existing damp, the condition of any tanking a previous owner installed, the floor construction, and whether the room ventilates properly at all. A kitchen fitted over an unresolved damp problem is a kitchen that fails from behind, and no amount of cabinetry hides it.",
      },
      {
        title: "Where a lower-ground extract can terminate",
        text: "Venting from below ground is the technical problem of this neighbourhood. A duct has to rise to a terminal that is neither in a light well that will recirculate its own exhaust nor on an elevation the Article 4 direction and the conservation area protect. We work out the route and the terminal at survey, and we say if the honest answer is recirculation.",
      },
      {
        title: "The drainage run, which is usually long",
        text: "In a split house the kitchen is often a long way from the drainage the building actually uses, and the available fall is the whole design. We measure it rather than estimate it. Where the run cannot be made to work at a sensible gradient, the sink and the machines move, and that is a layout decision taken before anything is ordered.",
      },
      {
        title: "The street, and how a van behaves on it",
        text: "The streets around the park are narrow, and at weekends they fill with people visiting it. We record where a vehicle can stand, for how long, and which day of the week that is true. A delivery planned for a Saturday morning near the park is a delivery planned badly.",
      },
      {
        title: "What the Article 4 direction covers",
        text: "Camden has had an Article 4 direction in the Primrose Hill Conservation Area since 3 March 1983, and rooflines, front gardens and windows are sensitive. Properties backing onto the park have the additional matter of being seen from public open space. None of this affects units inside a room; all of it affects a terminal. [VERIFY the boundary and the direction for the address.]",
      },
    ],
    materials: [
      "Below-ground rooms need light more than they need statement finishes. A pale worktop, a reflective splashback and cabinet fronts that are not absorbing what daylight arrives will do more for a Primrose Hill lower-ground kitchen than any amount of expensive detail. Lighting is specified as part of the kitchen rather than left to an electrician's default: layered, with task light under every wall unit and something warm at low level for the evening.",
      "Moisture governs material choice down here. Where a room has any history of damp, we avoid specifications that trap water against a wall, and we prefer a floor finish that will tolerate the occasional failure without lifting. Cabinet carcasses in a lower-ground room earn a moisture-resistant board; it costs little at order and is the difference between a kitchen that ages and one that swells at the plinth.",
      "In the upper-floor flats and the family houses facing the park, the question reverses and becomes about light, proportion and the original joinery in the room. Painted cabinetry against stock brick and stucco dressings, worktops in generic categories chosen for the light, and a run that respects the sash windows rather than crossing them. We would not put the same kitchen in both, and we say so.",
    ],
    programme: [
      {
        title: "Damp and ventilation resolved first",
        text: "In a lower-ground room, anything to do with water in the structure is settled before a cabinet is ordered. Fitting first and investigating later is how a kitchen has to come out again. This stage sometimes shortens the job and sometimes stops it, and both are better than the alternative.",
      },
      {
        title: "Consent and the terminal agreed",
        text: "Where a duct has to reach an elevation, the position is agreed and any consent pursued before strip-out. The Article 4 direction is checked on the address rather than assumed from the neighbourhood.",
      },
      {
        title: "Strip-out, with the street timed",
        text: "The skip is licensed for a position and a day that works on a narrow street, which in practice means midweek rather than a weekend near the park. Protection on the route goes down first, including any original hall floor.",
      },
      {
        title: "First fix with the drainage proven",
        text: "The long waste run is set out and its fall checked physically before it is closed up. In a split house this is the item most likely to need a change of plan, and it is far better to change it here than to discover it at commissioning.",
      },
      {
        title: "Cabinets, template, second fix, lighting",
        text: "Carcasses levelled, worktop templated, second fix on its return, then the lighting commissioned and set. In a below-ground kitchen the lighting is part of the handover rather than an afterthought, because it is what makes the room usable.",
      },
    ],
    access: [
      "The streets around Primrose Hill are narrow, and at weekends they carry a substantial number of people visiting the park. A long vehicle that stops on one of them stops the street, and on a Saturday it will attract an audience rather than sympathy. Deliveries are booked midweek where at all possible, the position is agreed at survey, and the crew is on the pavement to unload rather than the driver waiting. Camden's controlled parking applies [VERIFY the CPZ for the street].",
      "Camden issues the skip and scaffolding licences. In a house split into garden and upper flats, the practical route into a lower-ground kitchen is often down external steps from the street, which is better than a shared internal hall but worse in weather and harder for a heavy worktop. We survey those steps, including the headroom under any bay above them, and where they will not take a slab in one piece we specify accordingly rather than finding out with a stone mason standing on the pavement.",
    ],
    costDrivers: [
      {
        title: "Whether the room is dry",
        text: "A lower-ground kitchen in a sound, dry room is an ordinary fit-out. One where the tanking has failed or was never there is a different project with a different figure, and it is honest to establish which before designing rather than after. We investigate at survey and report what we find.",
      },
      {
        title: "How far the drainage has to travel",
        text: "A long waste run with marginal fall costs more to build and constrains the layout. It may also need a pumped solution, which changes both the price and the maintenance. This is the most common significant variable on a split-house kitchen here.",
      },
      {
        title: "The extract route out of a basement",
        text: "Getting air from below ground to an acceptable terminal can mean a substantial duct run, or a decision to recirculate. The two are very different figures and the choice is a consent question as much as a technical one.",
      },
      {
        title: "Getting materials down the steps",
        text: "External steps to a lower-ground entrance are a handling cost on every delivery, and they can force a worktop to be specified in sections. It is measured at survey, named in the proposal, and not left as an assumption that a trolley will cope.",
      },
    ],
    living: [
      "Primrose Hill clients who stay usually have somewhere to go: a family house with a room upstairs that can hold a kettle, a fridge and a microwave, or an upper flat with a bathroom basin on a different floor from the work. A garden flat where the lower-ground kitchen is the only wet room other than the bathroom is harder, and the dust from a below-ground strip-out travels upward through a house rather than staying where you put it. We screen at the stair as well as at the room.",
      "Weekends are different here from weekdays. The park brings people, the streets are busier and parking for your own visitors is scarce, so we keep our vehicles off the street at weekends wherever the programme allows and we do not run noisy work at the weekend at all. In a terrace this close together, the neighbour relationship is worth more than an extra Saturday, and we would rather add a day midweek.",
    ],
    handover: [
      "The walk round includes the things you cannot see. In a lower-ground kitchen we show you the ventilation working, test the waste by filling and emptying, and set the lighting scenes with you rather than leaving a dimmer at a default. The snag list is written by us. Gas Safe documentation and electrical notification where the wiring regulations require it are handed over with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Below-ground rooms are the ones worth checking after a winter. Damp behaves seasonally, a long waste run reveals its gradient over months rather than days, and an extract that seemed adequate in September can disappoint in February when every window in the house is shut. We would rather come back and look. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and we take the whole list in one visit.",
    ],
    moreFaqs: [
      {
        q: "Our kitchen is in the lower ground floor and it smells damp. Can you still fit a kitchen?",
        a: "Not until we know why. A smell is usually the first honest signal that water is getting into the structure, and covering it with cabinetry hides it for a year and then makes the repair twice as expensive. We investigate at the survey, report what we find, and say plainly whether the room is ready. Sometimes the answer is that it needs work that is not a kitchen instruction, and we will say that rather than take the job as it stands.",
      },
      {
        q: "Can a lower-ground kitchen in Primrose Hill be properly extracted?",
        a: "Frequently, but not by assumption. The duct has to rise to a terminal that is neither in a light well recirculating its own exhaust nor on an elevation protected by the conservation area and Camden's Article 4 direction. We work the route out at the survey. Where the honest answer is that no acceptable terminal exists, we specify a recirculating hood with a carbon filter and say why, rather than venting into a void.",
      },
      {
        q: "Will we need a pumped waste?",
        a: "Only where gravity genuinely will not do it. A long run with marginal fall sometimes leaves no alternative, and a pumped solution is a legitimate answer with real consequences: it needs power, it makes noise, and it wants servicing. We would rather move the sink to where the fall exists. Where a pump is the only way, it is specified openly with its maintenance explained, not slipped in at first fix.",
      },
      {
        q: "Does Camden's Article 4 direction stop us changing the kitchen?",
        a: "No. The direction and the conservation area are about the outside of the building — rooflines, front gardens, windows, what the street and the park see. A kitchen fitted inside an existing room is not their business. The point at which they become relevant is a new terminal or grille on an elevation, and for a house backing onto the park that elevation is unusually visible. We check the address before anything external is planned. [VERIFY.]",
      },
      {
        q: "Can you avoid working at weekends?",
        a: "Yes, and near the park we prefer to. Weekend traffic around Primrose Hill makes deliveries unreliable, parking for residents is already scarce, and noisy work into a neighbouring terrace on a Saturday costs goodwill that is worth more than the day. We add time midweek instead. Where a client specifically needs weekend work for their own reasons, we will discuss it with the neighbours first rather than simply arrive.",
      },
      {
        q: "The house is split into two flats. Whose drainage is it?",
        a: "Usually shared, which is exactly why it matters. In a split house the kitchen waste often joins a run that serves the other flat, and work on it affects them. Your lease will say what is demised to you and what is common; the freeholder consents to anything touching the shared part. We establish this at survey, because the alternative is discovering it with a floor open and a neighbour in the doorway. [VERIFY the lease.]",
      },
    ],
  },

  highgate: {
    survey: [
      {
        title: "Which council you are actually in",
        text: "Highgate is not one authority. Camden, Haringey and, on some streets, Islington each issue their own licences, and the conservation area designated on 21 December 1967 is split between two of them with separate appraisals. The first thing the survey establishes is which council the frontage belongs to, because skip licence, parking and consent all follow that answer. [VERIFY for the address.]",
      },
      {
        title: "The gradient outside the door",
        text: "Highgate's roads are steep and some of them have limited turning, which is a delivery constraint and a handling one. We record the approach, the camber, where a vehicle can stand on a slope without being a hazard, and how far the material has to travel uphill on a trolley. A hill is not an excuse; it is a number in the proposal.",
      },
      {
        title: "How far the kitchen is from the stack",
        text: "Villas on the slopes and converted Village houses both tend to put the kitchen a long way from the drainage that serves the building. We measure the run and the available fall, and where the numbers are marginal we say so before a layout is drawn rather than discovering it with a floor open.",
      },
      {
        title: "Trees, and what may not be disturbed",
        text: "Heath-facing and wooded plots frequently have protected trees, and even work that seems entirely internal can involve access across roots or a scaffold on a sensitive surface. We check for tree preservation orders and conservation-area tree notices with the correct borough before planning anything that stands on ground. [VERIFY with the right authority.]",
      },
      {
        title: "Listed fabric in the Village",
        text: "Around Pond Square and the High Street the stock is finer-grained and more heavily listed, and the survey has to distinguish between a room that may be fitted out freely and fabric that may not be touched. We establish the listing on the address, identify what is original, and plan a kitchen that sits inside the room rather than into it.",
      },
    ],
    materials: [
      "Highgate splits into two material conversations. In a Village house with listed fabric, the kitchen is a freestanding-feeling fit-out: painted cabinetry, timber or a quiet stone, and fixings that go into later plaster rather than into anything original. In a Victorian villa on the slopes there is more room and more licence, and a fuller scheme with a tall bank and a larger worktop will suit the proportions without looking like it is straining.",
      "Light varies enormously across this neighbourhood because of the trees and the topography. A room overlooking Waterlow Park or backing onto woodland receives green, filtered light for much of the year, and a cool grey worktop can look dead in it; warmer stone or timber holds up far better. We ask to see samples in the room across a day rather than deciding under artificial light, and we will say if a client's chosen surface is going to disappoint in that particular room.",
      "Where the kitchen is a long way from the drainage, material choices follow the plumbing rather than the other way round. A deeper plinth to carry a waste at gradient, an appliance position dictated by fall rather than convenience, a floor build-up that accommodates a run: these are decided first, then the visible kitchen is designed around them. It is the opposite order from a showroom, and it is why the finished room works.",
    ],
    programme: [
      {
        title: "Establish the authority, then licence",
        text: "Skip and scaffolding licences are applied for from the correct borough, which is a question of the address rather than the neighbourhood. Getting this wrong is a lost week, and in Highgate it is genuinely easy to get wrong.",
      },
      {
        title: "Listing and consent resolved",
        text: "Where the building is listed, or where anything will appear on an elevation, the consent position is closed out before strip-out. A kitchen inside a room is ordinary; a grille in listed fabric is not, and the two are separated at this stage.",
      },
      {
        title: "Protection and a delivery on the hill",
        text: "The route is protected and the delivery is booked for a vehicle and a time the road will take. On a steep street with limited turning that is a specific plan, not a phone call to a supplier's despatch desk.",
      },
      {
        title: "First fix with the long run proven",
        text: "The waste is set out and its fall physically checked. In a villa where the kitchen sits far from the stack, this is the stage that decides whether the layout survives contact with the building.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "Carcasses levelled and scribed to rooms that are rarely square, worktop templated from them, second fix on its return, decoration to a clean handover, and the protected route inspected before we leave.",
      },
    ],
    access: [
      "The hill is the defining access fact. Steep roads, limited turning at the top of several of them, and Village pedestrian traffic mean that a long-wheelbase vehicle cannot simply arrive and unload. We establish at survey where a vehicle can stand safely on the gradient, how far the carry is, and whether a smaller transfer van is needed for the final approach. Where a trolley cannot be used because of the slope or the surface, it is handballed, and that is a labour line rather than an assumption.",
      "Licensing depends on the borough, and in Highgate that means checking rather than guessing: Camden, Haringey or Islington, according to the frontage [VERIFY the authority for the address]. Controlled parking applies on many streets. On Heath-facing and wooded plots there is a further consideration, which is that the ground itself may be protected — roots, a verge, a surface within a tree's protection area. We plan the standing position with that in mind rather than dealing with a complaint afterwards.",
    ],
    costDrivers: [
      {
        title: "The carry up a slope",
        text: "Distance and gradient between the vehicle and the door is a measurable cost, and on some Highgate streets it is significant. It is measured at the survey and named in the proposal, rather than discovered by a delivery crew and absorbed by the programme.",
      },
      {
        title: "Distance to the drainage",
        text: "A kitchen close to an existing stack is ordinary. A kitchen at the far end of a villa, with marginal fall across a long run, needs more work below the floor and constrains the layout above it. This is the single biggest technical variable in Highgate houses.",
      },
      {
        title: "Listed fabric, and working around it",
        text: "Where original panelling, plasterwork or joinery must be protected and worked around rather than through, the fit-out is slower and the fixings are more considered. That is proper practice and it is priced as such rather than rushed.",
      },
      {
        title: "Which council, and how quickly",
        text: "Three authorities with three sets of timescales and fees for the same street network. It is a small cost with a real programme effect, and it is settled at the survey rather than when the skip lorry is already booked.",
      },
    ],
    living: [
      "Highgate houses are generally big enough to absorb a kitchen programme. A villa on the slopes usually has a second room that can take a temporary arrangement and enough separation for the dust to stay where it is put. Village houses are tighter, and a listed interior needs more protection rather than less, which makes the screened area larger and the working space smaller. We show you what the screened arrangement will look like at the survey so it is not a surprise on the first morning.",
      "The neighbours here tend to be in houses rather than stacked above you, which changes the noise conversation from impact through a floor to sound across a boundary. It is more forgiving, but the streets are quiet and sound carries, especially on the wooded plots. We keep to the hours of whichever council applies, name the noisy days in advance, and do not start engines on a steep residential street at seven in the morning.",
    ],
    handover: [
      "The walk round covers the kitchen and the fabric around it. Where there is listed or original material in the room, we show you what was protected and what it looks like now, as well as opening every door and testing the waste with water. The snag list is written by us. Gas Safe documentation and electrical notification where the wiring regulations require it are handed over with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Older Highgate houses move seasonally more than most, partly because of the exposure and partly because of the ground. A scribe that was tight in summer may show a line in February, and a long waste run is worth a second look after a winter of use. We come back for both. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and the return visit clears the list in one go.",
    ],
    moreFaqs: [
      {
        q: "Which council issues the skip licence for our Highgate street?",
        a: "That depends on the frontage, and it is a genuine question rather than a formality. Camden and Haringey both hold parts of the Village and the slopes, and some streets sit with Islington. Each has its own application, fee and timescale. We check the address before applying, because a licence from the wrong borough is not a licence at all and costs a week. [VERIFY for your address.]",
      },
      {
        q: "Our house is listed. Can we still have a new kitchen?",
        a: "Yes. Fitting out an existing room with cabinetry, services and a worktop is ordinary work in most listed houses, and it is what we do here regularly. What changes is the care: fixings go into later material rather than original fabric, protection is more thorough, and anything that would alter the building — a new grille, a changed opening, work to original joinery — is a consent question settled before it is priced. We check the listing on the address first.",
      },
      {
        q: "Can a lorry get up our road?",
        a: "Some Highgate roads take a long vehicle comfortably and some do not, and the turning at the top matters as much as the gradient. We look at the approach at the survey, decide whether the supplier's vehicle can be used or whether material transfers to a smaller van, and put the answer in the proposal. It is a routine constraint here and entirely manageable when it is planned.",
      },
      {
        q: "There is a protected tree by the side access. Does that matter for a kitchen?",
        a: "It can, even though the work is inside. A vehicle standing on roots, a material stack on a protected surface, or scaffolding within a tree's protection area are all things that can breach an order or a conservation-area notice. We check for tree preservation orders and conservation-area tree constraints with the correct borough and plan the standing and storage positions around them. [VERIFY with the right authority.]",
      },
      {
        q: "The kitchen is a long way from the soil stack. Is that a problem?",
        a: "It is the usual Highgate villa problem and it is solvable, but it drives the design rather than following it. The available fall over the run decides where the sink and the machines can go, and sometimes it decides that the kitchen layout you had in mind is not the one the building will support. We measure it at the survey and design outward from that, which is why our first drawing may not look like the one from a showroom.",
      },
      {
        q: "Do you work in Highgate Village and on the Archway side?",
        a: "Both, and they are different buildings. The Village is finer-grained, more heavily listed, tighter for vehicles and more likely to involve Camden. The streets falling toward Archway are larger Victorian villas and later terraces, more often Haringey or Islington, with more room inside and different access. The survey asks the same questions; the answers come out differently, which is why the two are not priced from the same assumptions.",
      },
    ],
  },
  "golders-green": {
    survey: [
      {
        title: "The original family kitchen, not an inserted one",
        text: "Edwardian and inter-war houses here were built with a kitchen, and it is usually still in the place the builder put it. That makes the survey simpler and the opportunities larger: the drainage is close, the services were planned, and the room has a window. We measure what is already right before looking for what to change.",
      },
      {
        title: "What the previous extension already did",
        text: "A great many Golders Green houses gained a rear addition decades ago, and the kitchen now sits partly in original fabric and partly in later work. The junction between the two is where floors step, walls change construction and services disappear. We find that junction and record it, because it is where a run of units will need designing rather than fitting.",
      },
      {
        title: "Where the vehicle can stand",
        text: "Off-street parking is far more common here than in the Camden conversions, which materially eases a kitchen delivery. We confirm the drive dimensions, the gate width and whether the surface will take a loaded vehicle, and where there is no drive we identify the licensed position on the street instead.",
      },
      {
        title: "Services in a house altered several times",
        text: "Family houses accumulate alterations, and each one leaves something behind: a redundant gas run, a spur added to a spur, a waste capped behind a cupboard. We trace what we can, test what we can, and list the rest as provisional items rather than pricing an assumption about a house nobody has drawn since 1935.",
      },
      {
        title: "Whether the street is designated",
        text: "Most of the inter-war stock is undesignated, but selected streets and the setting of Golders Hill Park sit in conservation areas, and ordinary Barnet planning still applies to windows and front boundaries wherever you are. We check the address, because an extract terminal on a front elevation is a different conversation from one on a rear. [VERIFY Barnet's map for the address.]",
      },
    ],
    materials: [
      "These are the largest kitchens we routinely fit, and the specification can be correspondingly generous: a full run plus a tall bank, a proper larder, and enough worktop to actually work on. The temptation in a big room is to fill it, and the better answer is usually to leave a genuine working triangle and spend the difference on the parts that get used — drawer boxes, hinges, a worktop that takes heat and water without complaint.",
      "An island is realistic here in a way it is not in most of North West London, but it still has to earn its place. It needs circulation on all four sides, services under a floor that may be suspended timber over a void, and an extract solution that does not put a duct across a ceiling. We draw the room both ways at the survey and show you what each costs in floor space, so the decision is made on the plan rather than on a preference.",
      "Where the kitchen crosses the junction between original house and earlier addition, materials have to tolerate two different backgrounds. A run that starts on solid original wall and ends on later blockwork will need different fixings and will move differently, and a continuous worktop across that line wants a considered support detail. This is ordinary work when it is designed and a visible problem when it is not.",
    ],
    programme: [
      {
        title: "Survey, drawings and the order",
        text: "With drainage close and the room already a kitchen, the lead-in here is mostly design and procurement rather than consent. Larger kitchens mean longer order lists, and a single late component holds up a second fix as effectively as a missing wall.",
      },
      {
        title: "Protection and a drive delivery",
        text: "The route through the house is protected, and where there is a drive the delivery comes to the door, which removes most of the handling risk. Barnet's skip licence is arranged where the skip has to sit on the street rather than on the property.",
      },
      {
        title: "Strip-out of a large room",
        text: "A family kitchen produces a lot of waste, and it leaves on a plan. Where the skip can stand on the drive, strip-out runs continuously; where it is on the street, it is paced to the licensed period.",
      },
      {
        title: "First fix, including the junction",
        text: "Services are run, and the step between original fabric and the earlier addition is dealt with properly — packing, levelling and support rather than a filler at the end. This is the stage that determines whether a long worktop sits flat.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "A larger kitchen takes longer to set out and level, and the template is worth being patient about because there is more of it. Second fix follows the worktop return, then decoration and a clean handover.",
      },
    ],
    access: [
      "Golders Green is the easiest access in our area and it is worth saying plainly: off-street parking is common, plots are wider, and a delivery vehicle can often reach the door. That removes the handling premium that dominates a kitchen in the Camden conversions, and the proposal reflects it. Where there is no drive, Barnet issues the skip and scaffolding licences and a position is arranged in the ordinary way.",
      "The friction that does exist is on the main roads. Loading on Golders Green Road or Finchley Road at peak hours is slow and unreliable, and a delivery booked into the morning rush will lose the slot. We schedule large drops for the middle of the day, and where a property fronts one of those roads we use a side street or the drive rather than attempting a timed operation on a busy frontage.",
    ],
    costDrivers: [
      {
        title: "How big the room actually is",
        text: "More cabinetry, more worktop, more services and more floor. A large family kitchen is a larger job in a straightforward way, and the figure follows the schedule rather than the postcode. It is also why we measure rather than estimate from a photograph.",
      },
      {
        title: "Whether an island is in or out",
        text: "An island is not just a cabinet. It is power and often water and waste under a floor, an extract decision, and a lighting change. Including it is a real step in the figure, and we would rather show you that clearly at the drawing stage than reveal it at order.",
      },
      {
        title: "The junction with the earlier addition",
        text: "Where a kitchen spans original fabric and a rear addition from another era, the levelling, support and fixing work at that line is real and is priced. Skipping it is how a long run develops a visible dip in the middle.",
      },
      {
        title: "What the alterations left behind",
        text: "Houses altered repeatedly hold redundant services and improvised work behind the boxing. Provisional items cover what cannot be seen without opening up, and they are listed and discussed rather than absorbed into a lump sum.",
      },
    ],
    living: [
      "A family house here can usually absorb a kitchen programme better than any flat can. There is normally a second reception room that will take a temporary arrangement, a cloakroom with a basin, and a door that genuinely closes between the work and the rest of the house. We set up the temporary kitchen on the first morning, screen the room properly, and keep the route to the front door covered and clear at the end of each day.",
      "The households either side are in their own houses rather than above your ceiling, which makes the noise question easier than in a conversion. It does not make it nothing: a party wall in a semi carries a chase being cut, and a long strip-out on a quiet residential crescent is noticeable. We name the loud days, work Barnet's ordinary hours, and let the immediate neighbours know before rather than after.",
    ],
    handover: [
      "We walk the finished kitchen with you, open everything, run the appliances and test the waste by filling and emptying. In a large room we also check the worktop for flatness along its full length rather than at the ends, because that is where a junction with an earlier addition shows itself. The snag list is ours to write. Gas Safe documentation and electrical notification where the wiring regulations require it come with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Big kitchens settle. A long run over a suspended timber floor will move slightly through its first heating season, a door on a tall unit may want adjusting once it has been used properly, and an island that took a family's weight for six months earns a check. We return for those as one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can we actually have an island in a Golders Green kitchen?",
        a: "More often than anywhere else we work, yes. Plots here are wider and the original kitchens are family rooms rather than inserted closets, so the circulation exists. The real questions are services under a suspended floor, what happens to the extract, and whether the island leaves enough room to open a dishwasher and walk past it. We draw the room with and without at the survey so you can see the trade in floor space rather than imagine it.",
      },
      {
        q: "Our kitchen is half in the old house and half in an addition built years ago. Does that complicate things?",
        a: "It adds one specific piece of work: the junction. The two halves are different construction, sit at slightly different levels and move differently, so a run crossing that line needs proper packing, support and fixing rather than a filler piece at the end. Done properly it is invisible. Done carelessly it shows as a dip in a long worktop, and that is the thing we are pricing for when we survey that line closely.",
      },
      {
        q: "Do we need a skip licence if we have a drive?",
        a: "Not if the skip sits entirely on your own property, which is one of the practical advantages of this stock. Where it has to stand on the street, Barnet issues the licence and we arrange it. The drive itself needs checking first: a loaded skip lorry on a decorative block surface can leave marks that cost more to put right than the licence would have. We look at the surface at the survey.",
      },
      {
        q: "Can you fit a kitchen while the family stays in the house?",
        a: "Almost always here. There is usually a second reception room for a temporary arrangement and a cloakroom basin, and the working room can be properly closed off rather than screened across an opening. That makes a family kitchen in Golders Green one of the more comfortable programmes to live through. We set the temporary arrangement up before the first cupboard comes down, not after.",
      },
      {
        q: "What is the main delay on a kitchen here?",
        a: "Procurement rather than permission. With the drainage close, the room already a kitchen and usually no licence to alter, the lead-in is short — but a larger kitchen has a longer order list, and one late component holds up second fix as firmly as a missing wall would. We place orders early and check deliveries against the schedule rather than trusting a confirmation email.",
      },
      {
        q: "Are we in a conservation area?",
        a: "Most of the inter-war stock is not, but selected streets and the setting of Golders Hill Park are designated, and ordinary Barnet planning still governs windows and front boundaries everywhere. For an internal kitchen none of this bites. It becomes relevant the moment a terminal appears on an elevation, particularly a front one. We check the address on Barnet's map before anything external is planned. [VERIFY.]",
      },
    ],
  },

  "queens-park": {
    survey: [
      {
        title: "Brent or Westminster",
        text: "The neighbourhood straddles a borough boundary, and the two sides licence, charge and enforce differently. The survey establishes which authority owns your frontage before anything else, because a skip licence applied for from the wrong council is simply not a licence. [VERIFY the borough for the address.]",
      },
      {
        title: "Estate cottage or larger terrace",
        text: "A decorative brick cottage on the Queen's Park Estate is a small, tightly planned house with original joinery worth keeping; a larger terrace near the park is a different animal with a rear return and often a conversion above. We identify which you have at the outset, because the kitchen, the access and the consent position all diverge from there.",
      },
      {
        title: "What survives of the original plan",
        text: "In the smaller cottages the kitchen is often a modest room at the back with a door to the garden and very little spare width. We measure the circulation as carefully as the wall lengths, because in a room this size the difference between a comfortable kitchen and an awkward one is fifty millimetres at the door.",
      },
      {
        title: "The tiled path and the front door",
        text: "Original tiled paths and encaustic thresholds are common here and they break easily under a loaded trolley. We record what is on the route, photograph it, and write the protection into the method. Replacing a broken original tile is difficult and expensive, and avoiding it is free.",
      },
      {
        title: "Which conservation area applies",
        text: "Brent's Queen's Park Conservation Area covers streets around the park; Westminster's Queen's Park Estate Conservation Area is a separate designation with its own audit and its own expectations. They are not interchangeable and the boundary is not obvious on the ground. We check both maps against the address. [VERIFY.]",
      },
    ],
    materials: [
      "In the Estate cottages, restraint is not a style choice, it is what the rooms can carry. A modest galley with a painted finish, a timber or compact laminate worktop and simple ironmongery sits properly in a decorative brick cottage; a heavy, high-gloss scheme with deep handleless rails looks like it has been imported from a different house. The original joinery in these houses is worth working with, and where a door or an architrave is in the kitchen we would rather protect it than replace it.",
      "In the larger terraces around the park there is more room and more licence. A run with a tall bank, a fuller worktop and a proper extract route is realistic, and bay-fronted rooms take a slightly more generous specification without strain. The limit is still the rear return where one exists, and we design outward from the window and the stack rather than inward from a catalogue.",
      "Worktop handling is the recurring constraint in both. A Victorian or Edwardian front door, a tiled path and a narrow hall mean a long single-piece slab is often not deliverable, and a section joint in a short kitchen is visible. Where that is the case we say so before the material is chosen, and we place any join deliberately — at a hob cut-out or a natural break — rather than where it happens to fall.",
    ],
    programme: [
      {
        title: "Confirm the council, then licence",
        text: "Brent or Westminster, established from the address and not from the neighbourhood name. The licence is applied for from the correct authority, with its own fee and timescale, before the strip-out day is offered.",
      },
      {
        title: "Path and hall protection",
        text: "Original tiled path, threshold and hall floor are protected before anything is carried in. In this stock that protection is not a formality: the things it is covering cannot be replaced convincingly.",
      },
      {
        title: "Strip-out to a licensed position",
        text: "Salusbury Road is a busy loading environment and the wrong place to stand a skip lorry, so the position is licensed on a residential street and the strip-out is programmed to it.",
      },
      {
        title: "First fix in a small room",
        text: "Services are run with the finished circulation already set out on the floor, because in a cottage kitchen a pipe run that steals thirty millimetres changes how the room works. What cannot be seen is resolved here rather than at cabinet stage.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "Carcasses levelled and scribed, worktop templated from them, second fix on its return, decoration to a clean handover, and the path and hall protection lifted and the surfaces checked.",
      },
    ],
    access: [
      "Two councils mean two licensing regimes on one neighbourhood, and the boundary is not marked on the street. We confirm the authority for the frontage at survey and apply to the right one [VERIFY the borough for the address]. Salusbury Road is the commercial spine and a busy loading environment, so it is where deliveries go wrong: we licence a position on a residential street instead and time the drop away from the school run and the shop deliveries.",
      "The front of the house is the other constraint. Estate cottages and the terraces around the park frequently have a small front garden, a gate, and an original tiled path between that gate and the door — narrow, decorative and fragile. A trolley loaded with carcasses will damage it if the path is not boarded first. We protect it as a matter of course, photograph it before and after, and carry rather than wheel where the surface will not take the load.",
    ],
    costDrivers: [
      {
        title: "Cottage or terrace",
        text: "An Estate cottage kitchen is a small, precise job where the constraint is space; a larger terrace near the park is a bigger schedule with a rear return to negotiate. They are different figures for the same service, and the survey decides which you have.",
      },
      {
        title: "Whether the worktop arrives whole",
        text: "The front door, the path and the hall decide whether a single-piece surface can reach the room. Where it cannot, the material or the joint strategy changes, and that is settled before ordering rather than on a delivery morning.",
      },
      {
        title: "Protecting what cannot be replaced",
        text: "Original tiled paths, thresholds and joinery in this stock are worth real care, and care takes time. It is included and named. The alternative is a repair that is slow, imperfect and far more expensive than the protection would have been.",
      },
      {
        title: "Which council, and how it charges",
        text: "Brent and Westminster set their own licence fees and timescales for skips and scaffolding. It is not the largest line in a proposal, but applying to the wrong one costs a week, which is why the address is checked first.",
      },
    ],
    living: [
      "In a two-storey terrace the family usually stays, and it works because the kitchen is a separate room at the back with a door. We put a temporary arrangement in the front reception on the first morning and screen the kitchen doorway properly. In an Estate cottage it is tighter — the house is small, the kitchen is close to everything else, and a strip-out fills the ground floor with noise whether or not it fills it with dust. We are honest about that at the survey.",
      "Terraced neighbours are immediate here. The houses are close, the gardens are narrow and back-to-back, and a rear kitchen being stripped is audible in the next three houses on a still day. Noisy operations are named as dates, kept inside the applicable council's hours, and told to the neighbours beforehand. In a street where everybody knows everybody, that is worth more than an extra hour of working time.",
    ],
    handover: [
      "We walk the kitchen with you and open everything, run the appliances and test the waste with water. The tiled path, the threshold and the hall floor are inspected at the same time and compared against the photographs taken before we started. The snag list is ours to write. Gas Safe documentation and electrical notification where the wiring regulations require it come with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Small kitchens show wear at the pinch points, and in a cottage those are predictable: the door that catches a handle, the drawer opposite the oven, the plinth at the threshold to the garden. We would rather adjust those at three months than have you work round them for years. Telephone 020 7101 3168 or write to office@hpsg.co.uk and we take the whole list in one return visit.",
    ],
    moreFaqs: [
      {
        q: "Are we in Brent or Westminster?",
        a: "It depends on the street, and the boundary is not obvious walking around. Brent's Queen's Park Conservation Area covers streets around the park; Westminster's Queen's Park Estate Conservation Area is a separate designation with its own audit. Skip licences, scaffolding licences and parking all follow the council that owns your frontage. We confirm it from the address at the survey rather than assuming from the name. [VERIFY.]",
      },
      {
        q: "Our cottage has original doors and architraves in the kitchen. Will they survive?",
        a: "They should, and keeping them is usually the right call. Original joinery in the Estate cottages is part of what makes those houses worth what they are, and a replacement will not match. We protect what stays, take off and store anything that would be damaged, and where a piece has to be adapted we do it reversibly. If something genuinely cannot be kept we will say so before it comes off, not afterwards.",
      },
      {
        q: "Can a stone worktop get through the front door?",
        a: "Sometimes, and it is worth measuring rather than hoping. A narrow Victorian door, a turn into a hall and a tiled path that will not take a heavy trolley are a real combination here. Where a single piece cannot make it, we either specify a material that arrives in manageable sections or place a join deliberately at a hob cut-out. Either is fine. What is not fine is discovering the problem with a slab on the pavement.",
      },
      {
        q: "Can you load from Salusbury Road?",
        a: "It is rarely the right choice. The road is the commercial spine of the neighbourhood, it is busy with shop deliveries and the school run, and a kitchen lorry standing on it is both slow and unpopular. We licence a position on a residential street and time the drop around the busier hours. The carry is slightly longer and the delivery actually happens, which is the trade we would make every time.",
      },
      {
        q: "Will the original tiled path be damaged?",
        a: "Not if it is protected properly, which is why we board it before anything crosses it and photograph it before and after. These paths break under point loads from trolleys rather than from foot traffic, so the rule on site is to carry across the boarded route rather than wheel. Matching a broken original tile is difficult and rarely convincing, which is exactly why we take the protection seriously.",
      },
      {
        q: "Is a kitchen in an Estate cottage worth doing properly, given the size?",
        a: "Small rooms reward good work more than large ones, because every millimetre is used and every mistake is in your way daily. In a cottage kitchen the drawer layout, the door swing and the position of the bin matter more than the worktop material. We spend the survey on circulation and the specification on mechanisms, and the result is a room that works rather than one that photographs well.",
      },
    ],
  },

  "muswell-hill": {
    survey: [
      {
        title: "The hill, and what it does to a delivery",
        text: "Some Muswell Hill streets are steep enough that a long-wheelbase vehicle is genuinely unsuitable, and the survey establishes the approach as carefully as the room. We record the gradient, the camber, where a vehicle can stand and how far material must travel uphill. It is one of the few places where the road decides the delivery method outright.",
      },
      {
        title: "A generous hall and what it will take",
        text: "Edwardian houses here have substantial halls, which is a genuine advantage: wide doors, a straight run in, and room to set material down without blocking a household. We measure it properly because it often means a single-piece worktop can reach the room, which is rarer than it sounds in North West London.",
      },
      {
        title: "Original sashes in the kitchen",
        text: "Timber sash windows in a kitchen are both an asset and a constraint. They set the wall height available for cabinets, they must not be blocked by a run, and their condition affects what the room will feel like. We record the sill height and the reveal, and we say if a window in the kitchen needs joinery attention before cabinets go near it.",
      },
      {
        title: "Whether the house is converted",
        text: "Many of the larger houses are still single-family and some have been split. The difference changes the consent position, the access and the drainage entirely, so we establish the tenure and whether a freeholder is involved before anything is designed or ordered.",
      },
      {
        title: "Which designation covers the street",
        text: "Haringey designated the Muswell Hill Conservation Area on 1 March 1974, covering the Broadway and many surrounding residential streets, with Fortis Green Conservation Area designated the same day on the north-west side. Shopfronts and residential fenestration are both sensitive. We check the address and any Article 4. [VERIFY on Haringey's map.]",
      },
    ],
    materials: [
      "Edwardian rooms here have good proportions and good light, and they suit a kitchen with some presence: a painted run with a proper cornice line, a substantial worktop, and a larder that reads as a piece of furniture rather than a cupboard. Where the room has original features — a picture rail, a moulded architrave, a sash with a deep reveal — the cabinetry is set out to respect them rather than cut across them.",
      "Because the hall is usually generous, material choice is less constrained here than in the Camden conversions. A single-piece worktop is often genuinely deliverable, and that is worth having in a long run where a join would otherwise sit in the middle of the working surface. We still measure the route rather than assume it, particularly where a house has a turn at the foot of the stair or a narrowed original doorway.",
      "The hill enters the material conversation through weight. A heavy slab carried up a steep approach and through a front garden is a different proposition from the same slab wheeled off a flat drive, and where the approach is severe we will discuss lighter options honestly rather than simply adding labour. The finished kitchen matters more than the specification sheet, and a slightly lighter surface that arrives intact is the better outcome.",
    ],
    programme: [
      {
        title: "Survey, design and consent where needed",
        text: "For a single-family house the lead-in is design and procurement. Where the house is converted, the freeholder's position is settled first. Anything touching an elevation is checked against the conservation-area designation before it is priced in detail.",
      },
      {
        title: "Protection, then a delivery sized to the road",
        text: "The hall and stair are protected. The delivery vehicle is chosen for the gradient and the turning rather than for the supplier's convenience, and a transfer to a smaller van is arranged where the street requires it.",
      },
      {
        title: "Strip-out with the skip licensed",
        text: "Haringey issues the licence, and controlled parking applies on many roads [VERIFY]. On a steep street the skip position is chosen for safe loading rather than proximity, which sometimes means a longer carry.",
      },
      {
        title: "First fix with the window respected",
        text: "Services run, and the setting-out is checked against sill heights and reveals so that no cabinet ends up crossing a sash. This is also where any joinery attention the window needs is dealt with, before cabinets restrict access to it.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "Carcasses levelled and scribed, worktop templated from them and often deliverable in a single piece, second fix on its return, then decoration to a clean handover and the protection lifted.",
      },
    ],
    access: [
      "The gradient is the first access fact and it is not a small one. Several Muswell Hill streets are steep and poorly suited to long vehicles, and a loaded lorry parked across a slope is a hazard rather than an inconvenience. We establish the approach at survey, choose the vehicle to suit, and arrange a transfer to a smaller van where the road demands it. Haringey issues the skip and scaffolding licences and operates controlled parking on many roads [VERIFY the CPZ for the street].",
      "Against that, the buildings themselves are unusually easy to get into. Edwardian houses on these streets have wide front doors, deep halls and generous internal doorways, which means material moves through the house without the negotiation that a Victorian conversion demands. Where the property is a flat above the Broadway rather than a house on the slopes, the position reverses completely: a narrow side door, a straight stair, and commercial premises below whose hours matter.",
    ],
    costDrivers: [
      {
        title: "The approach to the door",
        text: "Gradient, turning and the distance from a safe standing position to the house are measurable and they vary sharply street by street. Where the road forces a transfer van or a long uphill carry, that is a handling line in the proposal rather than an unnamed allowance.",
      },
      {
        title: "House or converted flat",
        text: "A single-family Edwardian house has its own front door, its own drainage and no freeholder. A converted flat has shared parts, a licence position and a neighbour under the floor. Same service, different obligations, different figure.",
      },
      {
        title: "The size of the room",
        text: "Muswell Hill kitchens are often large, and a larger schedule of cabinetry, worktop and services is a larger job. Where a house has already had a rear addition built, the room may be bigger still, and the junction with the original fabric needs attention.",
      },
      {
        title: "Window and joinery condition",
        text: "Where a sash in the kitchen needs work before a run goes in front of it, that is better done now than in five years with cabinets in the way. It is priced separately and honestly, and it is the client's decision whether it is in scope.",
      },
    ],
    living: [
      "These houses absorb the work well. There is usually a second reception room that will take a temporary kitchen, a hall wide enough to keep a covered route clear, and a door between the work and the rest of the house that genuinely closes. Families stay through the programme routinely. What we set up on the first morning is a temporary arrangement that works for a fortnight rather than a kettle on a dust sheet, because the difference is what determines whether the household stays patient.",
      "The neighbours are in their own houses, which makes the noise question milder than in a conversion, but the streets are quiet and residential and sound travels down a hill surprisingly well. We name the noisy days in advance, keep to Haringey's ordinary hours, and avoid running loud work early on a residential slope where every house has a bedroom at the front. Deliveries are timed away from the school run for the same reason.",
    ],
    handover: [
      "The walk round is done with the sashes open and the lights on, because this is a room with good natural light and it should be judged in it. We open every door and drawer, run the appliances, test the waste with water and write the snag list ourselves. Gas Safe documentation and electrical notification where the wiring regulations require it come with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Edwardian houses move with the seasons, and a long run in a large kitchen will tell you about it after the first winter of heating. A scribe beside an original architrave, a door on a tall unit, a plinth against a floor that has dried out — all ordinary, all worth a visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and we come once for the whole list rather than in pieces.",
    ],
    moreFaqs: [
      {
        q: "Can a delivery lorry get up our street?",
        a: "On some Muswell Hill streets, comfortably; on others, not at all. The gradient, the camber and whether there is anywhere to turn at the top all matter, and a loaded vehicle on a steep road is a genuine safety question rather than a preference. We look at the approach at the survey and either book a vehicle that suits it or arrange a transfer to a smaller van for the final leg. It is planned rather than discovered.",
      },
      {
        q: "Will a single piece of worktop fit through the house?",
        a: "More often here than in most of the areas we work. Edwardian halls in Muswell Hill are wide, the front doors are generous and the internal doorways are usually large enough, which means a continuous surface can frequently reach the room. We still measure the route — a turn at the foot of a stair or a narrowed original doorway can stop it — but the answer here is more often yes than no.",
      },
      {
        q: "There is a sash window in the kitchen. Does that limit the design?",
        a: "It sets the wall height for cabinets and it should not be crossed by a run, which is a real constraint in a smaller kitchen and barely one in a large Edwardian room. It also deserves attention on its own account: if the cords, the putty or the beads need work, doing that before a run goes in front of the window is much easier than afterwards. We say at the survey whether it needs it. That is joinery rather than a paint item.",
      },
      {
        q: "Our flat is above a shop on the Broadway. Is that different?",
        a: "Substantially. Access is usually a narrow side door and a straight stair rather than a hall, the commercial tenant below sets what hours are tolerable, and the floor construction over a shop behaves differently from a floor over another flat. The conservation area covers the Broadway and shopfronts are sensitive, so anything appearing on the elevation is a consent question. We survey the route and the lease position before dates are offered.",
      },
      {
        q: "Is the house in a conservation area?",
        a: "Quite possibly. Haringey designated the Muswell Hill Conservation Area on 1 March 1974, covering the Broadway and many of the residential streets around it, and Fortis Green Conservation Area was designated the same day on the north-west side. It does not affect fitting a kitchen inside a room. It affects a new terminal or a window, and we check the address rather than the neighbourhood. [VERIFY on Haringey's map.]",
      },
      {
        q: "How long will we be without a kitchen?",
        a: "Longer than the noisy part and shorter than people fear. The fixed pause is between worktop template and the fabricated worktop returning, and it cannot be compressed by working longer days. In a large Muswell Hill kitchen the setting out and levelling also take real time because there is more of it. We write dates after the room has been measured, and we set up a workable temporary kitchen for the duration rather than leaving you to improvise.",
      },
    ],
  },

  "crouch-end": {
    survey: [
      {
        title: "What the rear stack already carries",
        text: "The soil stack on the back elevation is the fixed point of a Crouch End kitchen, and the survey establishes what it already serves before anything is planned around it. In a house divided into two or three flats it takes more than your sink, and the connection point available to you may be higher or lower than convenience would like.",
      },
      {
        title: "The bricked-up range recess",
        text: "Many rear rooms here retain a recess in the back wall where a range once stood, now bricked or boarded. It is frequently the only depth a cooker can take without stealing floor, and it is worth opening up to see. We check what is actually behind the board rather than designing around a guess.",
      },
      {
        title: "The tiled hall you have to cross",
        text: "A converted house puts a tiled hall between the street and the kitchen, and it belongs to everybody. We measure it, photograph it and specify the protection, because a hall floor damaged by a delivery is a dispute with neighbours rather than a snag on a list.",
      },
      {
        title: "How level the rear room is",
        text: "Back rooms in these houses have usually settled and often been re-floored at least once. We take levels across the room and at each appliance position, because a run set out on a floor that falls twenty millimetres to the garden wall will not look level whatever the spirit level says at the wall.",
      },
      {
        title: "Whether the street is in the designation",
        text: "Haringey designated the Crouch End Conservation Area on 25 October 1974, covering the Broadway and a ring of residential streets. Terraces outside it still need ordinary planning for some window work. We check the address, because it decides how a new extract terminal is handled. [VERIFY on Haringey's map.]",
      },
    ],
    materials: [
      "A rear-room kitchen in a converted house rewards a specification that does not crowd it. Base units with a lighter wall treatment above, a worktop in a colour that reflects rather than absorbs the garden light, and a cooker recessed into the old range opening where one exists. Where the room has original mouldings at ceiling level, a run that stops clear of them reads better than one that dies into a cornice.",
      "Handling decides the worktop. The route runs from a street door, along a shared tiled hall, through an internal door and into the back room, with at least one turn. A long single slab frequently cannot make that journey, so we specify sections with a deliberate join or a material that arrives in manageable pieces. This is decided at the survey and written into the proposal rather than left for a stone fabricator to discover.",
      "Extract in a converted house is a neighbour question as much as a technical one. A terminal on a rear elevation in a house of flats can sit directly beneath somebody's bedroom window, and a hood that works perfectly for you can make you unpopular by the second month. We look at where the terminal will actually land, consider the windows above it, and specify recirculation where that is the honest answer.",
    ],
    programme: [
      {
        title: "Freeholder pack and neighbour notice",
        text: "In a converted house the freeholder's requirements are agreed and the other households are told what is coming. Neither takes long; skipping either is how a straightforward kitchen becomes a standing argument in a shared hall.",
      },
      {
        title: "Hall protection and a side-street skip",
        text: "The tiled hall and the route are protected first. The skip is licensed on a residential side street rather than on the Broadway, which is a busy shopping street and the wrong place to stand a lorry.",
      },
      {
        title: "Strip-out and opening the recess",
        text: "The old kitchen comes out and the range recess is opened where the design depends on it. This is the day the survey's assumptions are tested, and any provisional item either lands here or is closed out.",
      },
      {
        title: "First fix set out from the stack",
        text: "Waste, supply, circuits and extract are run to positions the stack and the floor actually allow. The floor levels recorded at survey are corrected here, before cabinets arrive, rather than packed out afterwards.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "Carcasses levelled and scribed, worktop templated from them, second fix after its return, decoration to a clean handover, and the shared hall returned to the state the photographs show.",
      },
    ],
    access: [
      "Crouch End Broadway is busy, and the residential side streets are the practical loading points. We licence a position there through Haringey and time the drop away from the school run and the shop deliveries. Parking is a mix of controlled zones and less restricted streets and it genuinely varies road by road, so it is checked for the address rather than assumed for the neighbourhood [VERIFY street by street].",
      "The constraint that actually shapes the job is the shared front door. In a house split into flats, everything arrives through an entrance used by two or three households, across a tiled hall somebody cares about, and past doors that are not yours. The route is protected along its length, kept clear at the end of every day, and photographed before we start so that any conversation about damage is about evidence. Strip-out waste never stands in that hall waiting for a skip.",
    ],
    costDrivers: [
      {
        title: "Where the stack lets you connect",
        text: "A convenient connection point at the right height makes for a clean first fix. An awkward one, or a stack already carrying two other flats, means more pipework and sometimes a different layout. It is the first thing the survey settles because it moves both the design and the figure.",
      },
      {
        title: "Whether the recess is usable",
        text: "An original range opening that is sound and deep enough is a gift: it takes the cooker out of the floor plan. One that has been filled badly, or that hides a problem, becomes a piece of building work. We open it at survey where we can rather than pricing a hope.",
      },
      {
        title: "How far out the floor is",
        text: "Correcting a rear-room floor that has settled is ordinary work and it is priced as work rather than absorbed. The version that costs more is the one nobody measured, where a long run is packed at the last minute and the worktop tells the story.",
      },
      {
        title: "Common parts, protected properly",
        text: "Covering and reinstating a shared tiled hall takes time and materials on a job where none of that hall is yours. It is included. Repairing damage a previous trade did is not, unless the freeholder instructs it separately.",
      },
    ],
    living: [
      "Most clients here stay, and in a garden or first-floor flat it works because the kitchen is a distinct room at the back with a door. We put the temporary arrangement in a front room on the first morning and seal the kitchen doorway rather than draping it. What we cannot do is make a shared hall feel private, and for the noisy fortnight you will be more aware of your neighbours and they of you.",
      "In a house of two or three flats, notice is what keeps everyone civil. The households above and beside you hear a strip-out clearly, and a neighbour who was told which days are loud is a neighbour who plans around them. We give the dates, work Haringey's ordinary hours, and keep the hall clear every evening so nobody comes home to a stack of old carcasses between the front door and their stairs.",
    ],
    handover: [
      "We walk the kitchen with you, open everything, run the appliances and test the waste by filling and emptying rather than by running a tap for ten seconds. The shared hall is inspected at the same visit and compared with the photographs from day one. The snag list is written by us. Gas Safe documentation and electrical notification where the wiring regulations require it come with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Rear rooms in converted houses are where seasonal movement shows. A scribe against a settled wall, a plinth on a floor that dries out over winter, and a waste connection into a busy stack are all worth a look after a few months of real use. We would rather come back than have you live with a detail. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "There is a bricked-up range recess in our back wall. Can we use it?",
        a: "Often, and it is usually the best thing in the room: it gives the cooker depth without taking floor. Whether it works depends on what is actually behind the board — sound brickwork, a flue in reasonable condition, and enough width for the appliance you want. We open it up at the survey where we can, because designing a kitchen around a recess nobody has looked inside is how a plan changes in week one.",
      },
      {
        q: "Who is responsible for the tiled hall if it gets damaged?",
        a: "We are, if we damage it, which is why it is boarded before anything crosses it and photographed before we start. The hall is usually common part rather than anybody's demise, so damage becomes a conversation with the freeholder and the other households rather than a private matter. Existing damage that was there on day one is recorded at the same time, for everyone's benefit rather than ours.",
      },
      {
        q: "Can we vent the extract onto the back elevation?",
        a: "Technically usually yes; sensibly, it depends what is above it. In a house of flats a rear terminal can sit under a neighbour's bedroom window, and an extract that works perfectly for you will make you unpopular by the second month. We look at the windows above the proposed terminal, and where the position is poor we either move it or specify recirculation and say why. Conservation-area designation may bear on it too. [VERIFY the address.]",
      },
      {
        q: "Can you load on Crouch End Broadway?",
        a: "We would rather not. The Broadway is a busy shopping street with constant deliveries and no room for a kitchen lorry to stand while it is unloaded properly. We licence a position on a residential side street through Haringey and time the drop away from the school run. The carry is a little longer and the delivery is far more reliable, which is the trade worth making.",
      },
      {
        q: "Our flat is one of three. Do we need everyone's permission?",
        a: "For work inside your own demise, normally no — your lease governs what you may alter and the freeholder grants any licence. Where a share of the freehold is held between the flats, your neighbours are the freeholder and they do consent, formally. Either way they share the hall and they will hear the work, so they get notice as a matter of course. We establish the tenure at the survey. [VERIFY the lease.]",
      },
      {
        q: "Is the floor going to be level?",
        a: "Not as found, in most of these back rooms, and that is normal rather than alarming. Rear rooms settle and have often been re-floored at least once. We take levels across the room and at each appliance position at the survey, correct the floor at first fix before cabinets arrive, and set the run out from a true datum. The version that goes wrong is the one where the packing happens at the end.",
      },
    ],
  },
  "kentish-town": {
    survey: [
      {
        title: "Which of three room types this is",
        text: "Kentish Town kitchens come as rear returns, lower-ground rooms and former workshop spaces converted at some point since. Each has a different starting problem — fall to the stack, damp and ventilation, or services that were never domestic. The survey names which you have before it measures anything, because the three are not priced from the same assumptions.",
      },
      {
        title: "Damp and ventilation below ground",
        text: "Where the kitchen sits in a lower-ground room, we look for existing damp, the state of any tanking, and whether the room ventilates at all. Fitting a kitchen over an unresolved moisture problem buries it for a year and doubles the eventual repair. We report what we find and say plainly whether the room is ready.",
      },
      {
        title: "What the last conversion did to the services",
        text: "The grain here is dense and much altered. Wiring extended from a spur, a gas run rerouted around a partition, a waste teed into something older than it: all common, none recorded. We trace what we can, test what we can, and list the rest as provisional items rather than pricing a guess.",
      },
      {
        title: "How close the neighbours actually are",
        text: "Terraces here sit tight together and party walls are thin. We establish who is next door and above, what hours they keep, and whether anybody works from home, because that shapes when noisy operations can run. It is a survey question, not an afterthought.",
      },
      {
        title: "Which conservation area, if any",
        text: "Several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park, while the High Street itself is mixed-use and less uniformly designated. We check the named area for the address rather than treating NW5 as one. It matters for a terminal, not for cabinets. [VERIFY.]",
      },
    ],
    materials: [
      "Lower-ground kitchens need light and forgiveness. A pale worktop, a reflective splashback, moisture-resistant carcasses and a floor finish that tolerates an occasional failure without lifting are all worth the small extra at order. Lighting is specified as part of the kitchen rather than left to a default: task light under every wall unit, and something warm and low for the evening, because these rooms are used after dark more than they are in daylight.",
      "In a rear return the constraint is width rather than moisture, and the answer is to keep the run simple and the wall treatment light. A tall bank in a narrow return makes the room a corridor. We would rather put the height on one wall, keep the other open, and spend the difference on the drawer boxes and the hinges, which are what a small kitchen actually lives or dies by.",
      "Former workshop and studio spaces take a plainer, tougher specification well: an honest worktop, robust flooring, exposed services where they are tidy enough to be exposed deliberately. The risk in those rooms is a kitchen that fights the building. We design with the structure that is there rather than lining everything out to make it look like a conventional flat, and we say at the survey which approach we think the room wants.",
    ],
    programme: [
      {
        title: "Tenure, then notice",
        text: "The lease position is established and, in a converted house, the other households are told what is coming. In a street this dense, notice is not a nicety — it is how the noisy fortnight passes without an intervention.",
      },
      {
        title: "Damp resolved before anything is ordered",
        text: "In a lower-ground kitchen, water in the structure is settled first. It sometimes shortens the job and sometimes stops it, and both outcomes are better than fitting a kitchen over a problem.",
      },
      {
        title: "Protection and a side-street skip",
        text: "The route is protected and the skip is licensed away from Kentish Town Road, which is a corridor rather than a loading bay. Strip-out is programmed to that licensed position and day.",
      },
      {
        title: "First fix into an altered building",
        text: "Services are run against the survey, and the improvised work of previous conversions is either removed or properly re-made. This is where provisional items are resolved with you rather than quietly absorbed.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "Carcasses levelled and scribed, worktop templated from them, second fix after its return, then decoration and a clean handover with the protected route lifted and checked.",
      },
    ],
    access: [
      "Kentish Town Road is a busy corridor and the wrong place for a kitchen delivery, so the vans go to the side streets under Camden's controlled parking and a licensed skip position [VERIFY the CPZ for the street]. The practical difficulty is that the side streets are narrow, densely parked and often have residents' bays on both sides, which means a licensed position has to be arranged rather than found on the morning. We agree the position and the day at survey.",
      "Where the kitchen is in a lower-ground room, the route in is frequently down external steps from the street rather than through the house — better for dust, worse for weather and much worse for a heavy worktop. We survey those steps including the headroom beneath any bay above them, and where they will not take a slab in one piece the material or the joint strategy changes. A converted workshop or studio may have a wide door that makes all of this trivially easy, which is worth knowing too.",
    ],
    costDrivers: [
      {
        title: "Whether the room is dry",
        text: "A sound lower-ground room is an ordinary fit-out. One with failed or absent tanking is a different project entirely. Establishing which at survey is the difference between a proposal you can rely on and a figure that changes in week two.",
      },
      {
        title: "What previous conversions left",
        text: "Improvised wiring, rerouted gas and teed wastes are common in this stock and none of it is on a drawing. Provisional items name what cannot be seen without opening up, and they are discussed rather than smuggled into a rate.",
      },
      {
        title: "Getting material to the room",
        text: "External steps to a lower-ground kitchen, a narrow side street with nowhere to stand, or a first-floor return reached by a shared stair are each a handling figure. They are measured and named rather than assumed to be free.",
      },
      {
        title: "How constrained the hours are",
        text: "Where neighbours are immediate and somebody works from home, the noisy operations run in shorter windows. That lengthens the programme without changing the work, and a longer programme is a cost. It is better to know at the survey.",
      },
    ],
    living: [
      "Staying through the work here depends on whether the kitchen is a separate room. A rear return with a door can be sealed off and the flat stays habitable; a lower-ground kitchen that opens into a living space cannot, and dust from a below-ground strip-out travels up through a house rather than staying put. We screen at the stair as well as at the room, and we tell you at the survey which of those two situations you are in rather than discovering it together.",
      "Party walls here are thin and the houses are close. A chase being cut is heard next door as clearly as in your own hall, and in a street of conversions there may be four or five households within earshot. We name the loud days, keep to Camden's hours, and give the neighbours the dates in advance. It costs nothing and it is the single most effective thing we do to keep a dense-terrace job running smoothly.",
    ],
    handover: [
      "The walk round includes the parts of the job you cannot see: ventilation demonstrated working, the waste tested by filling and emptying, and in an altered building a plain account of what we found and what we re-made. The snag list is written by us. Gas Safe documentation and electrical notification where the wiring regulations require it come with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Below-ground rooms are worth checking after a winter, and altered buildings are worth checking after a season of real use. Damp behaves seasonally, a re-made waste shows its gradient over months, and a kitchen in a converted workshop settles as the heating cycles. We come back for all of it in one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our kitchen is in the lower ground floor. Is damp a problem here?",
        a: "It can be, and it is the first thing we look for rather than the last. A smell, a tide mark, blown plaster at the foot of a wall or a previous owner's tanking that has failed are all things we would rather find at the survey than behind a new run of units. Where we find them we report plainly and say whether the room is ready for a kitchen. Sometimes the honest answer is that it needs work that is not this instruction.",
      },
      {
        q: "Can you work in a converted workshop or studio?",
        a: "Yes, and they are some of the more interesting rooms in Kentish Town. The recurring questions are services that were never domestic, floors that were built for loads rather than comfort, and ventilation designed for a use that has gone. The advantage is usually the access: wide doors and no shared hall. We survey the structure honestly and design with it rather than lining it all out to look like a conventional flat.",
      },
      {
        q: "The wiring looks like it has been extended more than once. What happens?",
        a: "We trace what we can from the consumer unit, test what we can safely test, and say what we find. Where a circuit serving the kitchen has been extended from a spur or run in a way that is not acceptable, replacing it within the kitchen is ordinary work and it goes in the proposal. A speculative whole-flat rewire is not assumed. New circuits are notified where the wiring regulations require it.",
      },
      {
        q: "How do you stop the whole flat filling with dust?",
        a: "A fixed screen at the kitchen doorway, a covered route to the front door, and a second screen at the stair where the kitchen is below ground, because dust from a lower-ground strip-out rises through a house. Cutting that can be done outside is done outside. No strip-out is spotless and we will not claim otherwise, but sealing the boundary properly is the difference between an inconvenient fortnight and an unpleasant one.",
      },
      {
        q: "Can you work shorter hours because our neighbour works from home?",
        a: "Yes, and it is better to plan it than to negotiate it in week two. Shorter noisy windows lengthen the programme rather than changing the work, so we would rather build that into the dates from the start. We ask about neighbours at the survey for exactly this reason. Camden's ordinary hours are the outside limit; what the street actually tolerates is often narrower.",
      },
      {
        q: "Is a kitchen near Dartmouth Park different from one off the High Street?",
        a: "The rooms are, yes. The streets rising toward Dartmouth Park are more residential and more likely to be original family houses with larger, better-lit kitchens; the denser grain near the High Street gives you more conversions, more lower-ground rooms and more altered services. Conservation-area coverage differs too. Same service and same standard, different survey findings and a different figure. [VERIFY the designation for the address.]",
      },
    ],
  },

  kilburn: {
    survey: [
      {
        title: "Camden or Brent",
        text: "Kilburn High Road is the historic boundary, and the borough decides the skip licence, the parking regime and the fees. East of the road toward West Hampstead is generally Camden; west of it is Brent. We confirm the authority from the address at the survey, because an application to the wrong council is a wasted week. [VERIFY for the frontage.]",
      },
      {
        title: "Whether the route in is domestic",
        text: "Flats above High Road shops are reached by narrow side doors and straight steep stairs, sometimes shared with more than one flat and occasionally through or beside commercial premises. We measure that route in detail and establish who controls it, because it determines whether a kitchen arrives assembled, flat or in pieces.",
      },
      {
        title: "Construction, which varies more here than elsewhere",
        text: "The stock runs from Victorian terraces through mansion blocks to later local-authority and infill housing, and they behave differently. We establish what the walls and floors actually are before specifying fixings, because a plan drawn for a solid Victorian wall does not transfer to a later panel construction.",
      },
      {
        title: "What the building's services look like",
        text: "In later blocks there may be a planned riser and a documented layout; in a converted terrace there is neither. We find out which we are dealing with, open a panel where we can, and list the unknowns honestly rather than assuming a standard arrangement that this building may never have had.",
      },
      {
        title: "Which streets are designated",
        text: "Named conservation areas here cover selected streets rather than the whole neighbourhood, and High Road shopfronts and upper-floor windows may carry separate design guidance. We check both Camden's and Brent's maps against the address before anything involving an elevation is planned. [VERIFY.]",
      },
    ],
    materials: [
      "Kilburn covers more building types than any other area we work, so the specification follows the construction rather than a house style. A Victorian conversion takes scribed, painted cabinetry against out-of-square walls. A later block with true walls and plain rooms takes a simpler contemporary run comfortably. A flat over a shop takes whatever can physically get up the stair. We say which of those we are designing for at the survey.",
      "Where the route in is a narrow side door and a straight stair, material choice is decided by it. Flat-pack carcasses assembled in the flat, worktops in manageable sections with joins placed deliberately, and appliances checked against the stair turn before they are ordered. A range cooker that will not make the half-landing is the classic Kilburn delivery failure and it is entirely avoidable with a tape measure.",
      "In the later blocks, sound transfer deserves attention at specification stage. Soft-close hardware throughout, an acoustic mat under a machine standing on a floor above a neighbour, and a considered position for anything that runs at night. It costs very little when it is specified and cannot be added afterwards without taking the kitchen apart, which is why we raise it before the order rather than after the first complaint.",
    ],
    programme: [
      {
        title: "Confirm the council and the tenure",
        text: "Which borough licences the street, and who consents to work inside the flat. In a neighbourhood split between two authorities and several tenure types, this is a real piece of work rather than a formality, and it comes first.",
      },
      {
        title: "Route protection and a realistic delivery",
        text: "The side door, the stair and any shared landing are protected. The delivery is planned to a licensed position off the High Road, in loads that can be carried up in one session rather than left standing at the foot of a stair.",
      },
      {
        title: "Strip-out down the same stair",
        text: "Waste leaves the way materials came in, bagged rather than loose, on the day it is generated. In a flat over a shop this is timed around the business below rather than around our convenience.",
      },
      {
        title: "First fix into the construction as found",
        text: "Services are run and fixings chosen for what the walls and floors actually are. Where a later block offers a riser, it is used; where a converted terrace offers nothing recorded, the unknowns flagged at survey are resolved here.",
      },
      {
        title: "Assembly, template, second fix",
        text: "Carcasses built and levelled in the flat where the stair required it, worktop templated from them, second fix on its return, decoration to a clean handover and the protected route lifted and inspected.",
      },
    ],
    access: [
      "Kilburn High Road is a major route and it should not be assumed that a skip can sit on it or that a lorry can unload from it. The practical answer is a licensed position on a residential side street, arranged with whichever borough owns the frontage [VERIFY Camden or Brent for the address]. Two authorities means two application processes, two fee structures and two sets of conditions on the same neighbourhood, and getting the right one is part of the survey rather than an administrative detail afterwards.",
      "Access through or beside commercial premises needs a method statement rather than an arrangement at the door. Where the route to a flat passes a shop's entrance, shares a passage with a business, or runs up a stair used by another household, we establish who controls it, when it may be used and what protection is required. That goes in writing before a delivery is booked. A kitchen delivery that blocks a shopfront at ten in the morning is a problem for everybody.",
    ],
    costDrivers: [
      {
        title: "The stair, and what it will pass",
        text: "A straight steep stair from a side door usually means carcasses are assembled in the flat and the worktop arrives in sections. That is more labour and it is named in the proposal, because it is the single most common cost driver on a flat above the High Road.",
      },
      {
        title: "Which borough, and its conditions",
        text: "Camden and Brent set their own licence fees, durations and conditions. It is a modest sum with a real programme effect, and applying to the wrong one costs time rather than money. The address decides it.",
      },
      {
        title: "What the construction turns out to be",
        text: "Fixings, service routes and making good all depend on whether the wall is solid Victorian brick, a later block's panel, or something a previous conversion built. Where the building is not what the drawings suggest, the provisional items cover it openly.",
      },
      {
        title: "Working around a business below",
        text: "Where a commercial tenant occupies the ground floor, deliveries, waste removal and noisy work are timed around their trading. That can be helpful — early starts may be fine — or restrictive. Either way it is planned rather than improvised.",
      },
    ],
    living: [
      "Whether you stay depends entirely on which building you are in. A converted terrace flat east of the High Road with a separate kitchen can be sealed off and lived around comfortably. A small flat over a shop, where the kitchen is part of the main space and the only route in and out passes through it, usually cannot. We say which at the survey rather than letting you find out in week one, and where staying is not realistic we say that too.",
      "The neighbour relationships here are unusually varied: a household above in a conversion, a business below in a High Road flat, several flats around you in a later block. Each tolerates different things at different hours. We establish who is actually affected, name the noisy days, and work to the tighter of the council's hours and the building's. A shop below may not mind an eight o'clock start at all, and knowing that is worth a week of programme.",
    ],
    handover: [
      "We walk the kitchen with you, open everything, run the appliances and test the waste with water. Where the route in was shared or commercial, that route is inspected and the protection removed with the surfaces checked underneath. The snag list is ours to write. Gas Safe documentation and electrical notification where the wiring regulations require it come with the appliance paperwork. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In buildings that have been altered as often as these have, the useful check is a few months in: a fixing into a wall that turned out to be different from its neighbour, a drawer that wants adjusting once loaded, a waste re-made into older pipework. We would rather look than have you live with it. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and we clear the list in one visit.",
    ],
    moreFaqs: [
      {
        q: "Which council do we apply to for a skip licence?",
        a: "It depends which side of Kilburn High Road you are on. The road is the historic boundary: east of it toward West Hampstead is generally Camden, west of it is Brent, and each has its own application, fee and conditions. We confirm it from the address at the survey. A licence from the wrong borough is not a licence, and the mistake costs a week rather than a phone call. [VERIFY for the frontage.]",
      },
      {
        q: "Our flat is above a shop. How does the kitchen get in?",
        a: "Usually through a narrow side door and up a straight stair, and that route decides the whole delivery strategy. We measure the door, the flights, the half-landing turn and the handrail projection, then decide whether carcasses come assembled or flat-packed and whether the worktop has to arrive in sections. The shop's trading hours go into the delivery plan, and a method statement covers any part of the route the business controls.",
      },
      {
        q: "Can you tell what the walls are made of before you start?",
        a: "Largely, yes, and it matters here more than in most areas because the stock is so mixed. Solid Victorian brick, a later block's construction and whatever a previous conversion built all take different fixings and behave differently when you chase them. We test and inspect at the survey, and where we genuinely cannot know without opening up, it is listed as a provisional item rather than assumed.",
      },
      {
        q: "Is a kitchen east of the High Road different from one west of it?",
        a: "Often, yes. The streets east toward West Hampstead are more uniformly Victorian conversions with the constraints that go with them: rear returns, shared halls, party-wall noise. West of the road the grain includes larger blocks and a wider range of periods, which changes the services, the fixings and the consent position. Both are ordinary work. They are simply not the same survey.",
      },
      {
        q: "Will a range cooker fit up the stair?",
        a: "Measure first. A wide range in its packaging against a half-landing turn with a handrail is the most common delivery failure in flats above the High Road, and it happens after the old cooker has already gone. We check the appliance dimensions against the stair at the survey and say plainly whether it will make it. Where it will not, we say so while there is still time to choose a different one.",
      },
      {
        q: "Are we in a conservation area?",
        a: "Possibly, but the designations here cover selected streets rather than the whole of Kilburn, and there are two councils' maps to check. High Road shopfronts and upper-floor windows may also have separate design guidance. None of it affects a kitchen fitted inside an existing room. It affects an extract terminal or anything else on an elevation, and we check the address before planning one. [VERIFY with Camden and Brent.]",
      },
    ],
  },

  "hampstead-garden-suburb": {
    survey: [
      {
        title: "Two consent regimes, not one",
        text: "The Suburb has Barnet planning and, separately, the Hampstead Garden Suburb Trust's Scheme of Management under its own Act of Parliament. The two boundaries are not identical and the Trust's consent is not a formality. The survey establishes which applies to your property before anything external is even discussed. [VERIFY both maps and whether Trust consent is needed.]",
      },
      {
        title: "What is original and what is not",
        text: "Almost every kitchen here has been altered since the house was built; the outside generally has not. We identify what is original fabric inside the room — joinery, ironmongery, a fireplace, a floor — and distinguish it from the fittings of two or three later kitchens, because they are treated very differently.",
      },
      {
        title: "Whether the house is a cottage or a villa",
        text: "The Suburb runs from modest Arts and Crafts cottages to substantial free-standing houses, and the kitchens differ accordingly. We establish the scale first, because a cottage kitchen is a precise small job and a larger house kitchen is a full schedule with room for a tall bank and a proper larder.",
      },
      {
        title: "Delivery onto a close or a green",
        text: "The Suburb's plan groups houses around greens and closes with shared frontages and planted verges, and material handling there needs real care. We record where a vehicle may stand, what surface it stands on, and how far material travels on foot, because a lorry on a green is a Trust conversation nobody wants.",
      },
      {
        title: "Where an extract could possibly go",
        text: "The external appearance is the point of the Suburb, and a new grille on an elevation is not a casual extra. We establish at survey whether any acceptable terminal exists at all, and if it does not, we say that recirculation is the specification rather than leaving it to be argued later.",
      },
    ],
    materials: [
      "Arts and Crafts interiors reward a kitchen that does not pretend to be older than it is, and does not shout either. Painted in-frame cabinetry, honest timber or a quiet stone worktop, and simple ironmongery sit comfortably in these rooms; high-gloss slab doors and heavy metallic finishes fight them. Where original joinery survives in or near the kitchen, the new work is set out to respect its lines rather than cutting across them.",
      "In a cottage the constraint is size and the answer is precision: fewer cabinet types, a well-planned drawer layout, and real thought about where the bin and the dishwasher door land. In a larger Suburb house there is room for a full run plus a larder, and the room can carry a more generous specification without strain. We draw the room before recommending either, because these two houses are both called the Suburb and they are not the same job.",
      "Because the exterior is so tightly controlled, the interior is where the work happens, and that suits a kitchen well. Nothing we specify inside a room changes the street. Where a client wants something that would be visible from outside — a new window, a different terminal, an external flue — we separate that from the kitchen instruction at the survey, because it needs Barnet, the Trust, or both, and it runs on a different timetable.",
    ],
    programme: [
      {
        title: "Establish whether consent is needed at all",
        text: "For an internal kitchen inside existing rooms, usually not. For anything touching the elevation, Barnet and the Trust both, on their own timescales. Separating those two at the start is what stops a kitchen being held up by an external question.",
      },
      {
        title: "Protection and a careful delivery",
        text: "The route in is protected, and the vehicle position is agreed with the greens, verges and shared frontages in mind. Material is set down on boards rather than on planting, and nothing stands on a close overnight.",
      },
      {
        title: "Strip-out of several previous kitchens",
        text: "What comes out is usually the third or fourth kitchen the room has had. We separate what is original and worth keeping from what is later and going, and we take the decision with you rather than in a skip.",
      },
      {
        title: "First fix within the existing fabric",
        text: "Services run to positions the house allows. Fixings go into later material rather than into original joinery, and anything that would alter the building rather than fit out the room is stopped and discussed.",
      },
      {
        title: "Cabinets, template, second fix",
        text: "Carcasses levelled and scribed to rooms built by hand and settled since, worktop templated from them, second fix on its return, then decoration to a clean handover and the route reinstated.",
      },
    ],
    access: [
      "The Suburb was planned for appearance and for people, not for delivery vehicles, and material handling on the closes and greens needs more care than anywhere else we work. Verges are planted, frontages are shared, and surfaces that look robust are often not made for a loaded lorry. We agree a standing position at survey, board any surface that material crosses, and carry rather than wheel where the ground will not take it. Barnet issues the skip and scaffolding licences [VERIFY where a licence is needed on a private or shared frontage].",
      "The larger point is that permitted development should not be assumed here. An Article 4 direction has been in force since the 1970s and the Trust runs its own consent process under a Scheme of Management, which can reach even items that feel trivial elsewhere — painting a previously painted surface, a hedge, a hardstanding [VERIFY the current Trust guidelines for the item of work]. None of that touches a kitchen inside a room. All of it touches anything that puts a vehicle, a skip or a grille where the street can see it.",
    ],
    costDrivers: [
      {
        title: "Cottage or larger house",
        text: "The Suburb spans two very different scales of kitchen, and the schedule of cabinetry, worktop and services follows the room rather than the postcode. Establishing which you have is the first thing the survey does and the biggest single factor in the figure.",
      },
      {
        title: "Whether the extract can be ducted",
        text: "An acceptable external terminal makes for a conventional hood installation. Where no terminal is acceptable, recirculation is specified, which changes the cabinetry above the hob and removes a duct run. Both are legitimate; they are different figures and they are decided before ordering.",
      },
      {
        title: "Working around original fabric",
        text: "Where original joinery, ironmongery or a floor is being kept, the work is slower and the fixings more considered. That is proper practice in a Suburb house, it is priced as such, and it is far cheaper than replacing something that cannot be matched.",
      },
      {
        title: "Handling on a close or green",
        text: "Boarding a route, carrying rather than wheeling, and restricted standing positions all cost time on every delivery. It is named in the proposal because it is a real and predictable feature of working here.",
      },
    ],
    living: [
      "Suburb houses generally absorb a kitchen programme well. Even the cottages tend to have a second room that will take a temporary arrangement, and the larger houses have plenty of separation between the work and the household. We set the temporary kitchen up before anything comes out, screen the working room properly, and keep the route covered and clear each evening. In a house where you can see the front door from the kitchen, a clear route matters more than people expect.",
      "The neighbourhood is quiet in a way that makes noise conspicuous. Houses sit in composed groups around greens, and a strip-out is audible across a close rather than just next door. We name the loud days, work Barnet's ordinary hours, and let the immediate neighbours know beforehand. Deliveries are scheduled to avoid standing a vehicle on a shared frontage at the times when people are coming and going.",
    ],
    handover: [
      "The walk round covers the kitchen and the fabric we worked around. We show you what was protected and how it has come through, open everything, run the appliances and test the waste with water. The snag list is ours to write. Gas Safe documentation and electrical notification where the wiring regulations require it come with the appliance paperwork. Where a Trust or planning consent was involved, the record goes into your file. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Arts and Crafts houses were built by hand and they move accordingly; a scribe against a hand-finished wall may open slightly through its first heating season, and a door hung in an original opening will want easing. That is the building rather than the kitchen, and we come back for it. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and the return visit takes the whole list at once.",
    ],
    moreFaqs: [
      {
        q: "Do we need the Trust's consent for a new kitchen?",
        a: "For a kitchen fitted inside existing rooms, normally not — the Scheme of Management is concerned with the appearance of the property and its setting rather than with your cabinets. It becomes relevant the moment something is visible from outside: a new terminal, a changed window, an external flue, even work to a hardstanding or a hedge in some cases. We establish at the survey whether anything in your brief crosses that line. [VERIFY the current Trust guidelines for the item of work.]",
      },
      {
        q: "Can we have a ducted extractor?",
        a: "Only if an acceptable terminal exists, and in the Suburb that is a real question rather than a formality. The external appearance is protected by Barnet planning and separately by the Trust, and a grille punched through an elevation is not a casual extra. We work out at survey whether a route and a terminal can be justified. Where they cannot, we specify a recirculating hood with a carbon filter and say so before the hood is chosen.",
      },
      {
        q: "Our kitchen has original joinery in it. Can it stay?",
        a: "Usually, and it is generally worth keeping. Original doors, architraves, ironmongery and sometimes a floor are part of why these houses are what they are, and replacements do not match convincingly. We protect what stays, remove and store anything that would be damaged, and make adaptations reversible where we can. If something genuinely cannot survive the work we will say so before it comes off rather than afterwards.",
      },
      {
        q: "Where will the skip go?",
        a: "Somewhere agreed in advance, on a surface that will take it, and not on a green or a planted verge. Barnet issues the licence for a public highway position; where the frontage is shared or private the arrangement may be different and it is checked rather than assumed [VERIFY]. On a close with limited standing, waste sometimes leaves by van in loads instead, which is slower and is priced as such. It is planned at the survey.",
      },
      {
        q: "Are the houses all the same inside?",
        a: "Not at all. The Suburb runs from modest cottages with small, tightly planned rooms to substantial free-standing houses with generous kitchens, and the two want different specifications entirely. The consistency is on the outside, which is the point of the place. We measure and draw the actual room rather than working from an idea of what a Suburb kitchen looks like.",
      },
      {
        q: "Can you fit a kitchen without any external work at all?",
        a: "Yes, and for most Suburb clients that is exactly the brief. Cabinetry, worktops, services within the rooms, flooring and decoration change nothing the street can see and sit entirely outside the Trust's and Barnet's external concerns. Where a brief does include something external, we separate it at the survey so the kitchen is not held up by a consent process running on its own timetable.",
      },
    ],
  },
  // AREAS-END
};
