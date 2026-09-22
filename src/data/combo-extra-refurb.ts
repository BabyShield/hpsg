import type { ComboExtraMap } from "./combo-extra";

/**
 * Light refurbishment: the second per-area layer.
 *
 * One block per Tier 1 area. A programme is a coordination problem before it
 * is a building one, so these sections stay on the things that decide whether
 * one runs: what a visit settles, how the weeks are ordered, how the building
 * is reached for two months rather than two days, and what is genuinely out.
 */
export const refurbExtra: ComboExtraMap = {
  hampstead: {
    survey: [
      {
        title: "Whether the brief is actually structural",
        text: "The first thing a visit settles is whether what you want is this service at all. Opening a wall between two village rooms, forming a kitchen-diner or altering the envelope is structural work and sits with Hampstead Renovations. We say so at the visit rather than taking the instruction and discovering the truth at strip-out.",
      },
      {
        title: "Which rooms are in and which are not",
        text: "A programme has to have a boundary. We walk the flat or house room by room and record what is in scope, what is excluded and what sits on the line, because the most expensive conversations in a refurbishment are the ones about whether something was ever included.",
      },
      {
        title: "The state of the services as a whole",
        text: "Unlike a single-room job, a programme has to take a view on the wiring, the plumbing and the heating across the demise. We inspect the consumer unit, trace what we reasonably can, and say what should be renewed within the rooms in scope rather than assuming a whole-house strip or ignoring an obvious problem.",
      },
      {
        title: "Floors, through the whole demise",
        text: "Original boards in a village conversion are rarely consistent: sound in one room, cut about by earlier plumbing in another, and packed level with offcuts in a third. We lift where we can and take levels throughout, because a floor decision taken room by room produces a flat with four different floors in it.",
      },
      {
        title: "Consent, and how long it will take",
        text: "A programme touching services, wastes and extract in a leasehold conversion usually needs a licence to alter, and in a listed or conservation-area village house there may be a planning question as well. We establish both at the visit, because the lead-in is the part of a refurbishment that most often slips. [VERIFY the designation, listing and lease.]",
      },
    ],
    materials: [
      "The value of a programme over a series of separate jobs is that one standard runs through the flat. The same floor finish carried through rather than three that nearly match, one joinery system and sheen on every door and architrave, and ironmongery chosen once. That coherence is most of what people notice about a well-refurbished village flat, and it is almost impossible to retrofit once rooms have been done piecemeal.",
      "In period fabric the materials have to suit what they are going onto. Lime plaster wants a breathable system, original boards want a finish that will tolerate movement, and a village conversion with settled floors will not take a large rigid tile without preparation. We specify against the building as surveyed rather than against a scheme drawn for a new-build, and we say where a client's preference will not work here.",
      "Where the kitchen and bathroom are both in scope, specifying them together is worth real money and real coherence. Shared trades, one delivery plan, compatible brassware and a single tanking system rather than two. It also means the whole flat can be finished to one level rather than having a new kitchen sitting beside a bathroom that was clearly done at a different time.",
    ],
    programme: [
      {
        title: "Consent, survey and a fixed scope",
        text: "The licence to alter, any planning question, and a written scope that says what is in and what is out. Nothing is ordered until all three exist. This stage is silent and it is where a programme is won or lost.",
      },
      {
        title: "Protection, then strip-out across the demise",
        text: "The shared hall, stair and any original floor on the route are protected for the duration. Strip-out is done across the rooms in scope in one operation rather than repeatedly, which is the main efficiency a programme offers.",
      },
      {
        title: "First fix everywhere at once",
        text: "Electrics, plumbing, wastes and extract for every room in scope are run together. Doing this once rather than room by room is why a programme costs less than the same work as separate instructions, and it is where the provisional items land.",
      },
      {
        title: "Wet rooms, then the dry work",
        text: "Kitchen and bathroom proceed with their own fixed sequences, including tanking and its cure. While they run, floors and joinery progress elsewhere, so the programme is not waiting on a single trade.",
      },
      {
        title: "Decoration, floors finished, handover",
        text: "Decoration closes around the finished rooms, floor finishes go down last where that suits, and the whole demise is handed over as one job with one snag list and one set of documentation.",
      },
    ],
    access: [
      "A refurbishment means daily access to a village address for two months rather than a delivery for one day, and that changes everything about how the logistics are planned. Lanes off Heath Street have no loading bay, controlled parking covers most of NW3, and a skip position has to be licensed from Camden for defined periods rather than once [VERIFY the CPZ for the street]. We plan the whole sequence of deliveries and removals at the outset rather than arranging each as it arrives.",
      "In a converted village house, the shared hall and stair carry the entire programme. That route is protected for the duration, cleared every evening, and the other households are given the shape of the job rather than a vague warning. A refurbishment tests a neighbour relationship in a way a single kitchen does not, and the buildings here are close enough that it is worth doing properly.",
    ],
    costDrivers: [
      {
        title: "How much of the services is renewed",
        text: "Renewing wiring and plumbing within the rooms in scope is ordinary. Discovering that the existing installation is not fit to build onto is a larger step, and it is listed as a provisional item after the visit rather than buried in a lump sum that quietly absorbs it.",
      },
      {
        title: "Whether you stay or decant",
        text: "An empty flat can be worked continuously, strip-out is faster, and spray becomes possible where it suits. An occupied one means covering, moving and phasing. Both are ordinary and they are different programmes with different figures.",
      },
      {
        title: "The lead-in you do not control",
        text: "A licence to alter, a listed-building question or a neighbour who has to sign for a shared hall all sit before the first noisy day. They rarely change the build figure and reliably move the date, and a date that moves twice is expensive.",
      },
      {
        title: "What the floors turn out to be",
        text: "Original boards that can be lifted, relaid and finished are a good outcome. Boards cut about by three generations of plumbing, or a subfloor that has failed, are work. We lift where we can at the visit and list the rest as provisional.",
      },
    ],
    living: [
      "Most clients decant for a village refurbishment, and where the kitchen and the only bathroom are both in scope that is really the only sensible answer. Where you do stay, the programme has to be phased around you, which lengthens it and costs more, and we say that clearly at the visit rather than agreeing to something that will become untenable in week three. Either way the decision is made before the programme is written, not during it.",
      "For the neighbours, a refurbishment is a sustained presence rather than an event. Strip-out and first fix are the loud weeks and they are named as dates; the rest is quieter than people expect. We work Camden's hours and the building's, whichever is tighter, keep the shared hall clear every evening, and tell the other households the shape of the programme at the start. In a village lane that is worth more than an extra working hour.",
    ],
    handover: [
      "A programme hands over as one job. We walk the whole demise with you, room by room, with everything opened and the wet rooms tested with water rather than looked at. The snag list is ours to write and it covers the flat rather than one room. You receive it as a single set: Gas Safe documentation, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references, and the decorating schedule with colours and sheens. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "A refurbished village flat settles over its first heating season, and it is worth one visit at the end of it rather than a series of calls. Lime plaster that has been opened up dries at its own pace, original boards move, silicone in a new bathroom needs renewing at a junction, and doors hung in settled openings want easing. We come back once and deal with all of it. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Is knocking through two rooms part of a light refurbishment?",
        a: "No. Forming an opening between rooms is structural work, whatever it is called in an estate agent's particulars, and it sits with Hampstead Renovations rather than with this service. We will say so at the first visit rather than taking the instruction and stretching the word. Everything around it — kitchen, bathroom, floors, joinery, decoration and the services those rooms need — is exactly what this service covers.",
      },
      {
        q: "Why is a programme cheaper than doing the rooms one at a time?",
        a: "Because the expensive parts happen once rather than repeatedly. One protection set-up, one strip-out, one first fix across every room in scope, one delivery plan, one skip licence sequence and one decorating phase. Doing a kitchen this year and a bathroom next means paying for all of that twice and living through it twice. The saving is real and it is the main argument for a programme rather than a series of jobs.",
      },
      {
        q: "How long does a village flat refurbishment take?",
        a: "Measured in months rather than weeks, and the shape matters more than the number. The lead-in for a licence to alter can be longer than the build. On site, strip-out and first fix move quickly, the wet rooms have fixed sequences with cure times that cannot be compressed, and decoration closes around them. We write dates after surveying, and the biggest risk to them in Hampstead is the consent rather than the work.",
      },
      {
        q: "Can we keep the original floorboards through the flat?",
        a: "Often, and where they are sound it is worth doing. Boards in a village conversion are rarely consistent, though: cut about by earlier plumbing in one room, packed level in another, replaced entirely in a third. We lift where we can at the survey and give an honest view room by room. Patching to match rarely reads well, and we would rather tell you that before you pay for it than after.",
      },
      {
        q: "Should we move out?",
        a: "Where the kitchen and the only bathroom are both in scope, almost certainly. A programme can be phased around a household, but that lengthens it, costs more and means living with dust and noise for a longer period rather than a shorter one. We give you both versions at the visit with the practical differences spelled out, and the decision is made before the programme is written rather than halfway through it.",
      },
      {
        q: "What are provisional items and why are they in the proposal?",
        a: "They are the things we cannot see without opening up: wiring of unknown vintage behind lime plaster, a subfloor under a boarded room, a waste that may or may not fall correctly. Naming them and carrying them openly is more honest than a single lump sum that quietly absorbs them or a figure that rises in week two. Each one is resolved with you at first fix, when we can finally see what is there.",
      },
    ],
  },

  "west-hampstead": {
    survey: [
      {
        title: "The whole demise, not the worst room",
        text: "People call about the kitchen and the programme usually turns out to be the flat. We walk every room, including the ones you were not thinking about, because a rear-return kitchen and a half-landing bathroom sharing one first fix is a much better job than two separate instructions a year apart.",
      },
      {
        title: "What the stack carries for the whole flat",
        text: "A programme touches kitchen waste, bathroom waste and possibly a machine, all to the same rear stack. We establish what it already serves for the other households, the connection heights available, and whether the building's process is needed for any change.",
      },
      {
        title: "The shared hall, for two months",
        text: "A refurbishment means daily traffic through an entrance two or three households use, for weeks rather than a day. We measure it, photograph it, and write a protection specification that will survive the whole programme rather than the first fortnight.",
      },
      {
        title: "Floor levels across the flat",
        text: "Conversion floors step between the main house and the rear return, and a programme is the one chance to deal with that properly. We take levels throughout, because deciding floor finishes room by room is how a flat ends up with three thresholds it did not need.",
      },
      {
        title: "Tenure, and who signs what",
        text: "Leasehold, share of freehold, or a managing agent: each changes who consents and how long it takes. For a programme touching services and wastes, a licence to alter is usually required, and it is the item most likely to move the start date. [VERIFY the lease.]",
      },
    ],
    materials: [
      "One standard through the flat is the point of a programme. A single floor finish carried through rather than a different one in each room, one joinery system and sheen, and one approach to the thresholds where the main house meets the rear return. In a conversion flat where every previous owner did one room, that coherence is the most visible improvement of the whole job.",
      "Handling constrains material choice across the whole programme here, not just for one delivery. Everything — floor finishes, worktops, sanitaryware, a bath — comes through a Victorian front door and a shared hall. We specify with that route in mind throughout, and where a material can only arrive in sections we place the joints deliberately rather than where they happen to fall.",
      "Where the kitchen and bathroom are both in scope, specifying them together buys coherence and saves money. One tanking system, compatible brassware, a shared delivery plan and trades that overlap. It also stops the flat reading as a set of rooms done in different decades, which is exactly what most West Hampstead conversion flats currently look like inside.",
    ],
    programme: [
      {
        title: "Licence, scope and neighbour notice",
        text: "The freeholder's pack agreed, the scope written down, and the other households given the shape of the programme. A refurbishment is a sustained presence in a shared house and notice at the start prevents most of the friction.",
      },
      {
        title: "Hall protection for the duration",
        text: "The shared entrance, hall and stair are protected and stay protected until the job finishes. This is not the first-day protection a single delivery needs; it has to survive two months of daily use.",
      },
      {
        title: "One strip-out, one first fix",
        text: "Every room in scope is stripped in one operation and first fixed together — electrics, plumbing, wastes and extract. Doing this once is the main efficiency a programme offers over separate jobs.",
      },
      {
        title: "Wet rooms in sequence, dry work in parallel",
        text: "Kitchen and bathroom run their fixed sequences, including tanking cure and worktop template. Floors and joinery progress elsewhere at the same time so the programme is not held by one trade.",
      },
      {
        title: "Decoration, then a single handover",
        text: "Decoration closes around the finished rooms, floors are finished, and the flat is handed over as one job with one snag list and one documentation set. The shared hall is reinstated at the same visit.",
      },
    ],
    access: [
      "For two months, the practical access question is a parking position and a skip sequence rather than a single delivery. West End Lane's three stations make daytime loading competitive, so material comes to a licensed position on a residential side street, timed around the interchange, and a refurbishment needs several skip periods rather than one [VERIFY the CPZ and Camden's licensing]. We plan the whole sequence at the outset rather than arranging each as it arrives.",
      "The shared front door carries the entire programme. Everything in and everything out crosses a hall and a stair belonging to two or three households, every working day for weeks. The route is protected for the duration, cleared every evening, and photographed at the start. We also give the other households the shape of the job, because a neighbour who knows the loud fortnight is in weeks two and three is a neighbour who plans around it.",
    ],
    costDrivers: [
      {
        title: "How many rooms are in scope",
        text: "A kitchen, a bathroom, floors and decoration in one programme cost less than the same rooms as separate jobs, because the protection, strip-out, first fix and delivery planning happen once. The saving is real and it is the main reason to do it this way.",
      },
      {
        title: "What the stack will accept",
        text: "A programme with kitchen and bathroom wastes both changing puts more demand on a rear stack serving other flats. Where the existing arrangement will take it, first fix is quick. Where it will not, the work is larger and may need the building's process.",
      },
      {
        title: "Occupied or empty",
        text: "An empty flat is worked continuously and strip-out is much faster. A phased occupied programme is longer and more expensive for the same work. We price both at the visit so the decision is made on real numbers.",
      },
      {
        title: "How far out the floors are",
        text: "Levelling a conversion flat so one floor finish runs through it is ordinary work and it is priced as work. It is also what separates a refurbished flat from a decorated one, and it is the item most often left out of a cheap figure.",
      },
    ],
    living: [
      "In a one- or two-bedroom conversion with one kitchen and one bathroom, a full programme really needs you to be elsewhere. We will phase around a household where that is genuinely necessary, but it lengthens the job, costs more, and means living in a building site for longer rather than shorter. We give you both versions at the visit with the practical differences spelled out rather than encouraging an optimistic decision.",
      "For the neighbours, the difference between a refurbishment and a single kitchen is duration. We name the loud weeks rather than the loud days, keep to Camden's hours and the building's, and keep the hall clear every evening for two months rather than for a fortnight. In a house where three households share a front door, that consistency is what keeps a long programme from becoming a standing complaint.",
    ],
    handover: [
      "The flat hands over as one job. We walk every room with you, open everything, test the wet rooms with water, and write a single snag list covering the demise rather than one room. You receive one documentation set: Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. The shared hall is inspected against the day-one photographs. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "A refurbished conversion flat tells you what it is doing over its first winter. A scribe against a bowed party wall, a threshold where the main house meets the rear return, silicone at a bath junction, a door easing in a settled frame. All ordinary and all worth one visit rather than four phone calls. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "We only wanted the kitchen done. Why are you talking about a programme?",
        a: "Because if the bathroom, the floors or the decoration are going to be done within two or three years anyway, doing them together is materially cheaper and much less disruptive. One protection set-up, one strip-out, one first fix, one decorating phase. If the kitchen is genuinely all you want, we will quote the kitchen. We would rather show you both figures at the visit than assume either way.",
      },
      {
        q: "Can we live here through it?",
        a: "In a one- or two-bedroom conversion with a single kitchen and a single bathroom, we would generally advise against it. A programme can be phased around a household, but that makes it longer, more expensive and more uncomfortable rather than less. We price both at the visit with the practical differences set out, so the decision rests on real numbers instead of optimism about how bad a fortnight can be.",
      },
      {
        q: "What is not included in a light refurbishment?",
        a: "Anything structural: forming openings, removing walls, loft conversions, extensions and basement works. Those sit with Hampstead Renovations rather than with this service. Also excluded are works to the building's shared fabric beyond your demise, and redecoration of the common hall unless the freeholder instructs that separately. We write what is in and what is out before anything is ordered, because that boundary is where refurbishments go wrong.",
      },
      {
        q: "Will we need a licence to alter?",
        a: "For a programme touching services, wastes and extract in a leasehold conversion, usually yes. The lease governs what may be altered within your demise, and the freeholder or managing agent grants consent in writing. Where the flats hold a share of the freehold, your neighbours are the freeholder and they sign formally. We prepare drawings and a method statement; the consent is theirs. It is the item most likely to move a start date. [VERIFY the lease.]",
      },
      {
        q: "Can the floors be level throughout?",
        a: "Usually, and it is one of the real benefits of doing the flat as one programme. Conversion floors step between the main house and the rear return, and doing rooms separately means living with thresholds nobody would choose. We take levels across the whole flat at the survey and say what it takes to run one finish through. It is ordinary work, it is priced as work, and it changes how the flat feels.",
      },
      {
        q: "How do you protect the hall for two months?",
        a: "With boarding and covering designed to last the programme rather than the first fortnight, inspected and repaired as it wears. It goes down before anything is carried and comes up at handover, when it is checked against the photographs taken on day one. We keep the hall clear every evening for the whole job. In a house of three flats, that consistency over two months is what your neighbours will remember.",
      },
    ],
  },

  "belsize-park": {
    survey: [
      {
        title: "Which building the programme is in",
        text: "A laterally converted stucco house and an avenue mansion flat are different programmes with different constraints, and the visit establishes which first. One has neighbours holding a share of the freehold and a floor over another household; the other has a managing agent, a booking sheet and a written protection standard.",
      },
      {
        title: "Ceiling height, across the whole demise",
        text: "Tall rooms change a programme's sequence rather than just its cost. Overhead work in every room has to happen before those rooms are refitted and refurnished, which means access equipment planned across the flat rather than brought back repeatedly. We record what each room needs.",
      },
      {
        title: "What previous owners did room by room",
        text: "Most Belsize flats have been altered more than once, and the alterations rarely match. We look for the joins — where a partition was added, where a service was rerouted, where a floor was made up to meet a new level — because a programme is the chance to resolve them rather than decorate over them again.",
      },
      {
        title: "The riser or the stack, for every wet room",
        text: "Where the kitchen and bathroom are both in scope, both need a route for waste. In an avenue block that means the riser and whether it is open to you; in a converted house it means a floor over another household. We establish it before any layout is drawn.",
      },
      {
        title: "Hours and consent, in writing",
        text: "A managed block's alteration pack and its practical working hours are different documents and both bind a two-month programme. A share-of-freehold house needs neighbours to sign. We get all of it before dates are offered rather than alongside the first delivery.",
      },
    ],
    materials: [
      "In a tall flat, the coherence a programme brings is worth more than it is in a low-ceilinged one, because the rooms are grand enough to show inconsistency. One floor finish carried through, one joinery system and sheen, and a decision about how wall finishes meet the cornice line taken once for the whole demise rather than four times by four different trades.",
      "Height also drives specification. Full-height cabinetry in a kitchen, taller doors where they exist, and wall finishes chosen for how they behave in raking light from a tall sash. A finish that looks fine in a small room can be unforgiving across four metres of wall, and in a programme that mistake is repeated in every room rather than one.",
      "Where the kitchen and bathroom are both in scope, specifying them together is worth real money here because both have to negotiate the same lift or stair. One delivery plan, materials chosen against the same route constraint, compatible brassware and one tanking system. It also lets the whole flat be finished to one level rather than in instalments.",
    ],
    programme: [
      {
        title: "Consent, then the order book",
        text: "A managing agent's pack or the neighbours' signature, and a written scope. Nothing is ordered against a consent that has not arrived, and in a managed avenue block this stage sets the calendar for everything after it.",
      },
      {
        title: "Overhead work across the flat",
        text: "Ceilings, cornices and everything at height are prepared while the rooms are empty and the platforms are up. In a tall flat this is sequenced across the whole demise rather than repeated room by room later.",
      },
      {
        title: "One strip-out, one first fix",
        text: "All rooms in scope stripped together and first fixed together, with the riser or the stack settled. This single operation is the main efficiency a programme offers and it is where the provisional items land.",
      },
      {
        title: "Wet rooms, with dry work in parallel",
        text: "Kitchen and bathroom run their fixed sequences including tanking cure and worktop template, while floors and joinery progress elsewhere so nothing waits on one trade.",
      },
      {
        title: "Decoration, floors, single handover",
        text: "Decoration closes around the finished rooms, floors are finished, and the flat is handed over as one job with one snag list. Common parts are inspected with the porter at the same visit.",
      },
    ],
    access: [
      "Over two months the access question is a sustained one. Haverstock Hill is a corridor rather than a loading position, the Village lanes are tight, and Camden's controlled parking applies [VERIFY which authority controls a given frontage]. On the avenues the binding constraint is the building: porter's hours, a lift booking sheet used repeatedly rather than once, and a protection standard that has to survive weeks of daily traffic rather than a single delivery day.",
      "Skip licensing has to be planned as a sequence. A refurbishment generates waste in several distinct phases — strip-out, first fix, wet rooms, decoration — and where a managed block prohibits a skip entirely, waste leaves by booked van loads throughout. That is slower and more expensive and it is planned at the outset rather than negotiated each time a phase fills a corner of the flat.",
    ],
    costDrivers: [
      {
        title: "Ceiling height, across every room",
        text: "More wall to prepare and finish, access equipment in most rooms, and a sequence that has to put overhead work first. In a tall flat this is the largest single difference from the same programme in a low-ceilinged one.",
      },
      {
        title: "Whether the riser is open",
        text: "Where an avenue block allows new services into the riser, both wet rooms first fix cleanly. Where it does not, wastes have to find another route across a floor over a neighbour, with the consent that implies. It is the biggest technical swing here.",
      },
      {
        title: "Lift, stair or booked van",
        text: "A booked goods lift is the cheapest route for a two-month programme. A protected stair is slower on every delivery and every removal. A building allowing neither a skip nor lift bookings is slower still, and it is priced as what it is.",
      },
      {
        title: "How much the previous alterations left",
        text: "Partitions added, services rerouted, floors made up to meet a new level. Resolving those properly is what makes a refurbished Belsize flat feel coherent, and what cannot be seen until strip-out is carried as provisional items.",
      },
    ],
    living: [
      "In an avenue mansion flat with more than one wet room, a phased programme with the household in residence is sometimes workable, though most clients decant. In a Village conversion with a single kitchen and bathroom it is not realistic, and we say so at the visit. Phasing around a household lengthens the job and increases the figure, and those numbers are put in front of you before the programme is written rather than during it.",
      "For the building, a refurbishment is a sustained presence. On the avenues the porter will be asked about it daily and the flat below will hear the loud weeks through a floor that may be the original one. We name the loud weeks rather than the loud days, work the hours the building actually keeps, and keep the porter informed so that questions come to us. In a share-of-freehold house, your neighbours are also your freeholder, which makes that courtesy practical as well as civil.",
    ],
    handover: [
      "The flat hands over as one job: every room walked with you, everything opened, the wet rooms tested with water, and a single snag list covering the demise. You receive one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references, and the decorating schedule. Where the building required a pack, the as-built record is lodged with the agent. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Tall rooms show movement at the cornice line first, and a refurbished flat settles across its first heating season: a scribe beside a chimney breast, a threshold between rooms, silicone at a bath junction, a door easing in a settled frame. We come back once at the end of that season and deal with the whole list. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and where the building wants notice, we arrange it with the agent.",
    ],
    moreFaqs: [
      {
        q: "Our block has an alteration pack. How long does that take?",
        a: "It varies widely and it is the first thing we ask, because in a managed avenue block the pack sets the calendar for the whole programme. Some agents want drawings, a method statement, insurance details and named operatives and respond within weeks; others take considerably longer. We prepare everything required, but the consent is the freeholder's to grant and nothing is ordered until it is in hand. [VERIFY with the managing agent.]",
      },
      {
        q: "We hold a share of the freehold. Is it simpler?",
        a: "Different rather than simpler. A share of the freehold makes you one of the people granting consent, not a reason consent can be skipped: the lease still governs what may be altered and the freehold company gives permission in writing, which in a converted Belsize house means your neighbours, formally. The practical advantage is that you can talk to them directly. The practical difficulty is that they also live under your floor.",
      },
      {
        q: "Why does a tall flat cost more to refurbish?",
        a: "Three reasons that compound across a whole demise. There is more wall area than a floor plan suggests in every room; everything overhead is slower from a platform; and the sequence has to put overhead work first, which constrains how the programme can be arranged. Set against that, tall rooms take a better result: full-height cabinetry, proper proportions and a flat that looks considerably more finished when it is done.",
      },
      {
        q: "Can the kitchen and bathroom both be done at once?",
        a: "Yes, and it is usually the right answer. Both need first fix, both need waste routes, both need deliveries negotiated through the same lift or stair, and doing them together means all of that happens once. The wet rooms have fixed sequences including tanking cure, so they are programmed rather than rushed, and floors and joinery progress elsewhere while they run.",
      },
      {
        q: "The block will not allow a skip. What happens to the waste?",
        a: "It leaves by van in booked loads on the building's timetable, throughout the programme rather than in one burst. That is slower, needs more labour and costs more than a skip on a side street, and it is priced as exactly that rather than hidden in a rate. It is common on managed avenue estates, so we ask the question at the visit and plan the whole removal sequence at the outset.",
      },
      {
        q: "What sits outside this service?",
        a: "Anything structural. Joining two rooms of a lateral conversion, removing a chimney breast, forming an opening, or altering the envelope are not light refurbishment whatever they are called, and they sit with Hampstead Renovations. So does work to the building's shared fabric beyond your demise. We write what is in and what is out before anything is ordered, because that boundary is where these programmes go wrong.",
      },
    ],
  },

  "st-johns-wood": {
    survey: [
      {
        title: "What the licence will permit, before anything is designed",
        text: "In an NW8 block the managing agent's pack governs the whole programme: what may be moved, how floors may be penetrated, which trades may work in the building and when. We read it at the outset so that what we design is what the building will consent to, rather than discovering the limits after drawings are drawn.",
      },
      {
        title: "Every wet room's relationship to the stack",
        text: "A programme touching kitchen and bathrooms in a stacked block means several connections to an arrangement serving the flats above and below. We establish each connection point and what the building permits, because in these buildings moving a waste can be refused outright.",
      },
      {
        title: "The common parts, for the duration",
        text: "Lobby, lift and corridor will carry a two-month programme rather than one delivery. We measure them, read the building's protection standard, and price protection that will survive the whole job and be inspected repeatedly rather than installed once and forgotten.",
      },
      {
        title: "Acoustic expectations through the demise",
        text: "New hard floors, a refitted kitchen and refurbished bathrooms all sit above a neighbour. We establish what the lease and the building expect on sound, because retrofitting isolation after a programme has been completed means taking the floors up again.",
      },
      {
        title: "Whether the brief is a refurbishment or an alteration",
        text: "Re-fitting the flat as it stands is this service. Changing the plan, moving a wall, or altering the carcass is not, and in a managed block it is also a different consent. We separate the two at the visit rather than letting the word refurbishment stretch to cover both.",
      },
    ],
    materials: [
      "The argument for one programme in a mansion flat is coherence: a single floor finish through the hall and reception rooms, one joinery system, one set of ironmongery, and wet rooms specified as a pair rather than individually. These flats were built with consistency and they look best when it is restored. Doing rooms in instalments produces a flat that reads as a series of decades.",
      "Acoustic specification runs through the whole programme rather than sitting in one room. Isolation under new hard floors, matting in the wet rooms, careful detailing where services pass through the structure, and soft-close throughout. In a building where the managing agent fields complaints, this is not an upgrade; it is what makes a refurbished flat uncontroversial with the neighbour below.",
      "Route constraints apply to every delivery over two months, not one. Lift car dimensions, lobby turns and corridor widths are measured against the actual items — flooring, worktops, a bath, sanitaryware — and where something cannot enter the lift it goes up a protected stair or is specified differently. We settle all of that at the visit so the procurement plan is realistic from the start.",
    ],
    programme: [
      {
        title: "Licence to alter, granted in full",
        text: "Drawings, method statement, insurance and contractor details to the agent, and the building responds on its own timetable. In NW8 this stage frequently takes longer than the build, and nothing is ordered until it is complete.",
      },
      {
        title: "Building protection installed to last",
        text: "Lobby, lift and corridor protected to the pack's standard and inspected where that is the rule, designed to survive two months of daily use rather than a delivery day.",
      },
      {
        title: "Strip-out to booked removal slots",
        text: "Waste leaves in booked van loads throughout the programme because most of these blocks will not take a skip. Each phase's removal is planned at the outset rather than arranged as it accumulates.",
      },
      {
        title: "One first fix, within the licence",
        text: "Electrics, plumbing, wastes and extract for every room in scope, run together and exactly within what the pack permits. A breach found at this stage can stop a programme in a managed building.",
      },
      {
        title: "Wet rooms, decoration, dual sign-off",
        text: "Wet rooms run their fixed sequences while dry work progresses, then decoration closes around them. The flat is signed off with you and the common parts with the building, arranged for the same day.",
      },
    ],
    access: [
      "A two-month programme in an NW8 block is an exercise in working to somebody else's rules every single day. Porters' hours, lift bookings, restrictions on the main lobby and a written protection standard all apply repeatedly rather than once, and the building will inspect. We collect the requirements at the visit and build the entire delivery and removal schedule around them. Westminster licences skips and scaffolding where they are relevant, but the block's rulebook is what shapes the calendar.",
      "Fixtures at Lord's are checked against the programme where heavy deliveries are concerned, because on fixture days the surrounding streets are managed differently [VERIFY with the building]. On the villa and mews streets the picture changes: off-street parking is more common, which helps over a long programme, but a mews turning head will not take a long vehicle and a first-floor living space reached by one stair constrains everything that comes in.",
    ],
    costDrivers: [
      {
        title: "What the licence requires and how long it takes",
        text: "Preparing a full pack properly is chargeable time, and the waiting is a programme cost rather than a build one. In NW8 the consent stage frequently exceeds the build in duration, and a date that moves twice is expensive.",
      },
      {
        title: "Removal by booked load, throughout",
        text: "Where no skip is permitted, every phase's waste leaves in vans on the building's timetable. Across a two-month programme that is a substantial and entirely predictable cost, and it is named rather than absorbed.",
      },
      {
        title: "Acoustic specification across the demise",
        text: "Isolation under new floors, matting in wet rooms and careful detailing at penetrations are real materials and real time. They are also what stops a refurbished flat becoming a managing agent's problem, and they cannot be retrofitted.",
      },
      {
        title: "Whether wastes may move at all",
        text: "Keeping wet rooms on existing connections makes a clean programme. Moving them in a stacked block may need further consent and may simply be refused, which changes the design rather than just the figure.",
      },
    ],
    living: [
      "Most NW8 clients decant for a full programme, and in a flat of this kind that is usually straightforward to arrange. Where a flat is large enough and has more than one wet room, a phased programme with the household in residence is possible but longer and more expensive, and the building's tolerance for a resident living through weeks of work is not unlimited. We put both versions in front of you at the visit.",
      "In a managed building the sustained presence is what tells. A porter fielding questions daily will apply shorter hours than the lease technically allows, and the flat below hears every phase of a programme rather than one afternoon. We work the hours the building keeps, name the loud weeks in advance, and keep the porter informed so questions arrive with us rather than with you or your neighbours.",
    ],
    handover: [
      "Handover happens twice. You get the flat: every room walked, everything opened, wet rooms tested with water, one snag list covering the demise, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. The building gets its common parts inspected, protection removed and the licence file closed with an as-built record. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Purpose-built blocks are stable, so what returns after a refurbishment is usually adjustment rather than movement: a drawer runner once loaded, a door that has settled a millimetre, silicone at a junction, a floor threshold that wants easing. We come back once and clear the list. Telephone 020 7101 3168 or write to office@hpsg.co.uk, and where the block requires notice for a return visit, we arrange it with the agent.",
    ],
    moreFaqs: [
      {
        q: "How long does a licence to alter take in NW8?",
        a: "Frequently longer than the building work, and it is the first thing we ask about. Some agents want drawings, a method statement, insurance evidence, contractor details and named operatives, plus a protection specification for the common parts and sometimes a deposit. We prepare all of it, but the timetable is the building's and nothing is ordered until the consent is granted. Starting that process early is the single most useful thing a client can do. [VERIFY with the managing agent.]",
      },
      {
        q: "Can we change the layout of the flat?",
        a: "Within limits, and those limits are the building's rather than ours. Re-fitting the rooms that exist is this service. Moving walls, altering the carcass or changing the plan is not, and in a managed block it is a different and much harder consent. We separate the two at the first visit so the brief is honest. Where the ambition is genuinely structural, it sits with Hampstead Renovations rather than here.",
      },
      {
        q: "Will the neighbours below be affected for two months?",
        a: "They will hear the loud phases, which is a matter of weeks rather than the whole programme, and they will notice the sustained presence. We name the loud weeks in advance, work the hours the building actually keeps rather than the lease's generous version, and specify acoustic isolation under new floors and in wet rooms so that the finished flat is quieter for them than the old one was.",
      },
      {
        q: "There is no skip. How does two months of waste leave?",
        a: "In booked van loads on the building's timetable, phase by phase, planned at the outset rather than arranged as each phase fills a corner of the flat. It is slower, needs more labour and costs more than a skip would, and across a programme of this length the difference is substantial. It is named in the proposal because pretending otherwise simply moves the problem into the programme.",
      },
      {
        q: "Can you work in a villa or a mews house rather than a flat?",
        a: "Yes, and both are different programmes from a mansion flat. A villa has its own front door, usually somewhere to park and no porter, but frequently has boxed-in service runs from decades of alterations and no drawings of any of it. A mews house has a narrow entrance, a turning head that will not take a long vehicle and living space at first floor. The service is the same; the survey asks different questions.",
      },
      {
        q: "Is a refurbishment between tenancies quicker?",
        a: "The build is, because an empty flat is worked continuously, strip-out is faster and spray becomes possible where it suits. The consent is not. In NW8 the licence process runs to the building's timetable regardless of whether the flat is occupied, and it is entirely possible to lose a vacant window waiting for approval. We would rather start that process before the tenancy ends than after.",
      },
    ],
  },
  "maida-vale": {
    survey: [
      {
        title: "The original plan, and whether it stays",
        text: "W9 mansion flats keep the plan they were built with: a long corridor, rooms off it, a kitchen at the back and a bathroom off the hall. A programme here works with that plan rather than against it, and the visit establishes at the outset whether the brief is a re-fit of those rooms or something that would change the carcass.",
      },
      {
        title: "The service duct, for every wet room",
        text: "Kitchen and bathroom both need routes for waste, and in these blocks both usually mean the same duct. We open panels where access allows, record what is in them and establish whether new services may join at all, because a closed duct constrains the entire programme rather than one room.",
      },
      {
        title: "Floor depth, throughout the demise",
        text: "New floor finishes, acoustic isolation, a waste run and any underfloor heating all compete for the same few centimetres above a timber structure. We measure it in every room in scope, because a flat where thresholds have to step up at three doorways is a flat that was measured too late.",
      },
      {
        title: "The stair, used for two months",
        text: "Lifts here are small and often barred to working use, so a programme means the stairs every day for weeks: crew, materials, waste, access equipment. We measure the flights and establish the porter's rules, because that repeated journey is one of the larger real costs of a W9 refurbishment.",
      },
      {
        title: "Consent from freeholder and porter both",
        text: "The licence to alter and the porter's practical rules are different documents, and a programme tests both daily rather than once. We get them in writing before dates are offered, because a refurbishment stopped at a lobby in week three is far worse than one delayed at the start.",
      },
    ],
    materials: [
      "One standard through a corridor flat is unusually effective, because the plan puts every room off a single hall and inconsistency is visible from one standing point. A single floor finish carried through, one joinery system and sheen, and a corridor wall finish that can take the traffic. Doing these rooms in instalments produces a flat where the hall betrays every phase.",
      "Everything is specified against the stair. Flooring in manageable packs, worktops in sections where a slab cannot make a half-landing turn, a bath and sanitaryware checked against the flights before ordering. That is not a compromise on quality; it is a procurement plan that acknowledges the building. We settle it at the visit so nothing arrives that cannot reach the flat.",
      "Acoustic isolation runs through the programme rather than sitting in one room. New hard floors over timber structure above a neighbour, matting in the wet rooms, and careful detailing where services pass through. In these blocks the flat below hears everything, and a programme is the only opportunity to improve that; once the floors are down it cannot be added.",
    ],
    programme: [
      {
        title: "Licence and porter's rules settled",
        text: "The freeholder's consent in hand and the porter's practical requirements recorded. A programme tests both every day for weeks, so both are established before anything is ordered.",
      },
      {
        title: "Stair protection for the duration",
        text: "Common stair, landings and the flat's corridor are protected to last two months of daily traffic rather than a delivery day, and repaired as they wear.",
      },
      {
        title: "One strip-out, along the corridor",
        text: "Every room in scope is stripped together and the waste leaves down the stair the same day it is generated, in loads the porter's rules allow. This is the noisy phase and it is named as dates.",
      },
      {
        title: "First fix against the duct",
        text: "Electrics, plumbing, wastes and extract for the whole demise, run to what the duct and the floor depth actually permit. Where a waste cannot find fall, it is resolved here with you rather than accepted quietly.",
      },
      {
        title: "Wet rooms, decoration, corridor last",
        text: "Kitchen and bathroom run their fixed sequences while floors and joinery progress elsewhere, decoration closes around them, and the corridor is finished once the traffic through it has stopped.",
      },
    ],
    access: [
      "A W9 refurbishment is a stair programme. Lifts in these 1890s to 1910s blocks are small and frequently out of bounds for working use, so crew, materials, waste and access equipment go up and down the stairs every day for two months. That is planned rather than endured: staged deliveries sized to one carry, equipment that stays in the flat, and a stair protected for the duration. Westminster's controlled parking applies on the surrounding streets [VERIFY the CPZ].",
      "Waste removal has to be planned as a sequence rather than an event. A programme generates waste in distinct phases and most of these blocks will not take a skip, so material leaves in booked van loads throughout, timed to whatever window the porter allows. We plan the whole removal schedule at the outset, because part-loads standing in a Maida Vale lobby are exactly what stops a job.",
    ],
    costDrivers: [
      {
        title: "Stairs, for two months",
        text: "Every delivery, every removal and every crew movement up three flights for the length of a programme. It is the most predictable and one of the largest cost drivers in W9, and it is established by looking at the lift at the visit.",
      },
      {
        title: "Whether the duct is open to you",
        text: "An accessible duct makes both wet rooms first fix cleanly. A closed one pushes wastes across a floor above a neighbour with the consent that implies, and it constrains the whole programme rather than one room.",
      },
      {
        title: "Floor depth, and what it forces",
        text: "Where the depth will take isolation, a new finish and the wastes, the flat comes out level throughout. Where it will not, thresholds step or the design changes. This is decided by measurement before design rather than discovered at first fix.",
      },
      {
        title: "Removal by booked load",
        text: "No skip means every phase's waste leaves in vans on the building's timetable across two months. More labour, more visits, more cost, and it is named in the proposal rather than folded into a rate.",
      },
    ],
    living: [
      "The corridor plan makes a phased occupied programme more workable here than in most stock, because rooms close off a hall rather than running into one another. That said, where the kitchen and the only bathroom are both in scope, most clients decant, and we would advise it. Phasing lengthens a programme and raises the figure, and both numbers go in front of you at the visit rather than during week four.",
      "The flat below hears a programme rather than an afternoon. Timber intermediate floors transmit strip-out, floor work and tile cutting efficiently, and the porter will be asked about it repeatedly. We name the loud weeks in advance, work the hours the building actually keeps, and keep the porter informed so questions reach us first. Specifying acoustic isolation also means the finished flat is quieter for them than the one it replaced.",
    ],
    handover: [
      "The flat hands over as one job: every room walked with you, everything opened, wet rooms tested with water, and a single snag list covering the demise. You receive one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. The stair and landings are inspected with the porter. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In a timber-floored flat what returns is usually the floor and the junctions: a threshold that wants easing once the heating has run, silicone at a bath junction, a door that has settled in its frame. The corridor also shows wear first because it takes all the traffic. We come back once and clear the list. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "The lift is out of bounds for work. Does that make a programme impractical?",
        a: "No, it makes it more labour and it has to be planned. Crew, materials, waste and access equipment go up and down the stairs every day for two months, so deliveries are staged to what can be carried in one session, equipment stays in the flat rather than being carried out nightly, and the stair is protected for the duration. It is the most common condition in W9 blocks and it is entirely workable when it is priced honestly.",
      },
      {
        q: "Can the floor be level throughout the flat?",
        a: "Usually, and it is one of the best arguments for doing the flat as one programme. Level finishes require depth for the new floor, any acoustic isolation and the waste runs, all above a shallow timber structure. We measure in every room at the survey and say what is achievable. Doing rooms in instalments is exactly how a flat ends up with a step at three doorways that nobody would have chosen.",
      },
      {
        q: "Will the flat below be more disturbed than by a single job?",
        a: "During the loud weeks, yes, and that is a matter of weeks rather than the whole programme. Against that, a refurbishment is the only opportunity to improve the situation permanently: acoustic isolation under new hard floors and in the wet rooms cannot be retrofitted once the floors are down. Done properly, the finished flat is quieter for your neighbour than the one it replaced.",
      },
      {
        q: "Can we keep the original plan?",
        a: "Yes, and in these flats it is usually the right answer. The corridor plan works, the rooms are well proportioned, and the services were designed around it. This service re-fits those rooms rather than altering the carcass, and where a brief would change the plan we say at the visit that it is a different class of project. The Trust of these buildings is in their plan as much as their elevations.",
      },
      {
        q: "How do two months of waste leave the building?",
        a: "In booked van loads on the porter's timetable, phase by phase, planned at the outset. Most of these blocks will not take a skip and part-loads standing in a lobby are exactly what a porter will stop. Across a programme of this length the removal sequence is a genuine logistical exercise, and we plan it rather than dealing with each phase as it fills a corner of the flat.",
      },
      {
        q: "What is excluded from a light refurbishment here?",
        a: "Anything that alters the carcass: moving walls, forming openings, changing the plan, or work to the building's shared fabric beyond your demise. Those are not this service and in a mansion block they are a different consent as well. Loft conversions, extensions and basement works sit with Hampstead Renovations. We write what is in and what is out before anything is ordered, because that boundary is where programmes go wrong.",
      },
    ],
  },

  "swiss-cottage": {
    survey: [
      {
        title: "Which building type sets the rules",
        text: "An inter-war block on Avenue Road, a Victorian house a street back, and a flat over a Finchley Road frontage are three different programmes. The visit establishes which before anything else, because the consent process, the working hours and the whole delivery strategy follow from it rather than from the postcode.",
      },
      {
        title: "The riser, and whether both wet rooms can use it",
        text: "In the purpose-built blocks a planned riser makes a two-wet-room programme straightforward when it is open and constrains it absolutely when it is not. We open a panel where access allows and put the question to the managing agent in writing rather than assuming a helpful answer.",
      },
      {
        title: "Services across a flat altered for decades",
        text: "Inter-war and post-war blocks have been altered flat by flat since they were built, and the boxing tells you nothing about what is inside it. We inspect what we can, test what we can, and list the rest as provisional items across the whole demise rather than pricing an assumption.",
      },
      {
        title: "What sits below, for the noisy weeks",
        text: "Another flat, your own hall, or a commercial unit are three different positions for a two-month programme. Above a business, early starts may be welcome; in a managed block they are not. We establish it in writing because it can change the calendar substantially.",
      },
      {
        title: "Which designation applies to the frontage",
        text: "Camden's South Hampstead Conservation Area, renamed from Swiss Cottage, covers many residential streets off Finchley Road and Avenue Road; Belsize Conservation Area adjoins to the east; main-road frontages are often undesignated. Internal work is unaffected; anything on an elevation is not. [VERIFY.]",
      },
    ],
    materials: [
      "In the later blocks the walls are true and the rooms plain, so a programme can deliver a genuinely contemporary result: consistent floor finishes, flush detailing, and a coherence that period fabric will not hold. In a Victorian house a street back the same specification fights the building, and the right answer is scribed joinery, forgiving finishes and a scheme that acknowledges what is there. We say which you have before anything is chosen.",
      "One standard through the flat is worth more than any individual material choice. A single floor finish carried through the hall and living space, one joinery system and sheen across every door and architrave, and ironmongery decided once. In a flat that previous owners refurbished room by room, restoring that coherence is the most visible improvement a programme makes.",
      "Where the flat sits above a commercial frontage, materials take account of what is underneath. Floor construction over a shop behaves differently from a floor over another flat, access to a leak from below may be impossible during trading, and extract terminating near a neighbouring tenant's intake is a problem waiting to be complained about. These are survey findings that become specification decisions.",
    ],
    programme: [
      {
        title: "Consent, sized to the building",
        text: "A managed block runs a formal licence process; a converted house may need a freeholder's letter; a flat over a shop may need the commercial lease considered. We identify which applies and complete it before anything is ordered.",
      },
      {
        title: "Route protection and a loading plan",
        text: "The route in is protected for the whole programme, and the delivery and removal sequence is planned to a licensed side-street position rather than to Finchley Road itself.",
      },
      {
        title: "One strip-out, hours agreed",
        text: "Every room in scope stripped together, inside whichever hours are tighter — the council's or the building's — with a commercial tenant's trading taken into account where relevant.",
      },
      {
        title: "First fix across the demise",
        text: "Electrics, plumbing, wastes and extract for all rooms in scope, run to the riser or the stack. This is where the provisional items from a much-altered building are resolved with you rather than absorbed.",
      },
      {
        title: "Wet rooms, decoration, single handover",
        text: "Wet rooms run their fixed sequences while floors and joinery progress elsewhere, decoration closes around them, and the flat is handed over as one job with one snag list.",
      },
    ],
    access: [
      "Over a two-month programme the practical questions are a parking position, a skip sequence and a delivery plan, not a single drop. Finchley Road is a corridor and not a place to load repeatedly, so material comes to a licensed position on a side street and the whole sequence is planned at the outset [VERIFY the CPZ and the highway authority for the frontage]. In a managed block the constraint is internal: hours, lift bookings and a protection standard applied daily.",
      "The HPSG office at 250 Finchley Road is in this neighbourhood, and on a programme rather than a single job that matters more than it sounds. Refurbishments fail at the joins between trades — a missing component on a tanking day, a template query, a delivery that needs checking against a room. Being close turns those into the same afternoon rather than a rescheduled week. It does not change the specification; it shortens the gaps.",
    ],
    costDrivers: [
      {
        title: "Which building you are in",
        text: "True plain walls in a later block, settled Victorian fabric, or a flat over a shop with patched backgrounds and a commercial lease below. Same service, very different preparation and very different obligations, and it is established at the visit.",
      },
      {
        title: "Whether the riser accepts both wet rooms",
        text: "An open riser makes a two-wet-room first fix clean and quick. A closed one pushes wastes across floors with the consent that implies, and it constrains the whole programme rather than one room.",
      },
      {
        title: "What is behind the boxing",
        text: "Buildings altered for ninety years hold improvised services that no drawing records. Provisional items name what cannot be seen without opening up, across the demise rather than room by room, and they are discussed rather than smuggled into a rate.",
      },
      {
        title: "Hours the building imposes",
        text: "Restricted working hours across a two-month programme lengthen the calendar without changing the work, and a longer calendar is a real cost. Above a commercial unit the position can run the other way and shorten it.",
      },
    ],
    living: [
      "In the Avenue Road blocks a phased occupied programme is workable where there is a second wet room, though most clients decant for a full refurbishment. In a converted house on the side streets, where rooms run into one another, it is harder. Over a shop, the route in and out passes through your living space, and we would generally advise against staying. We give both versions with real numbers at the visit.",
      "Who has to be considered varies with the building, and over two months that difference compounds. A commercial tenant below may be entirely relaxed about an eight o'clock start, which can shorten the programme meaningfully; a managed block off Avenue Road will apply strict hours daily. We establish what is actually tolerated rather than what a lease permits, name the loud weeks, and work to whichever is tighter.",
    ],
    handover: [
      "The flat hands over as one job: every room walked with you, everything opened, the wet rooms tested with water, and one snag list covering the demise. You receive a single documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. Where a managing agent required protection, the common parts are inspected. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Being a few streets away keeps the follow-up short, which on a programme matters more than on a single job because there is more to settle: a threshold after the heating has run, silicone at a junction, a drawer once loaded, a mark that appears when furniture goes back. We come back once and take the whole list. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our flat is above a shop on Finchley Road. Can a whole programme be done there?",
        a: "Yes, with two extra questions answered first: where the route in actually runs, and who is underneath. Access is often a narrow side door and a straight stair rather than a lobby, which shapes every delivery over two months, and the floor construction over a commercial unit differs from one over a flat. The tenant's trading hours become part of the working-hours plan, which sometimes helps considerably.",
      },
      {
        q: "Does being near your office actually make a difference?",
        a: "On a programme, more than on a single job. Refurbishments lose time at the joins between trades — a missing component on the day tanking was due, a template query, a delivery that needs checking against the room before it is accepted. Being a short distance from 250 Finchley Road turns those into the same afternoon rather than the next visit. The survey, the specification and the standard are the same wherever the address is.",
      },
      {
        q: "Is there a riser we can use for both the kitchen and the bathroom?",
        a: "In the purpose-built blocks off Finchley Road and Avenue Road, often yes, and it makes a two-wet-room programme considerably simpler. Whether you may join it is the managing agent's decision rather than an assumption, and some buildings keep their risers closed. We open a panel where access allows and put the question in writing before any layout is drawn, because a closed riser changes the whole programme.",
      },
      {
        q: "How much of the services should be renewed?",
        a: "Within the rooms in scope, whatever is not fit to build onto. In a block altered flat by flat for ninety years that is a real question rather than a formality, and the honest answer is that we cannot know everything until first fix. We inspect what we can at the survey, list the rest as provisional items, and resolve them with you when the walls are open rather than assuming either way.",
      },
      {
        q: "Can you start early if there is a business below?",
        a: "Often, and over a two-month programme that can shorten the calendar meaningfully. Above a commercial unit an early start may be entirely acceptable where it would not be in a residential block. We establish the position with the tenant and the lease at the visit rather than assuming either way, and we then work to what is agreed rather than pushing at it as the programme runs on.",
      },
      {
        q: "What is excluded?",
        a: "Anything structural — forming openings, removing walls, loft conversions, extensions and basement works — which sits with Hampstead Renovations rather than with this service. Also excluded is work to the building's shared fabric beyond your demise. We write what is in and what is out before anything is ordered, and if a brief turns out to be structural we say so at the first visit rather than stretching the word refurbishment to cover it.",
      },
    ],
  },

  "primrose-hill": {
    survey: [
      {
        title: "Whether the lower ground is sound",
        text: "A great many programmes here involve a lower-ground floor, and everything else depends on whether it is dry. We look for moisture in the structure, the condition of any previous tanking and how the space ventilates, because a refurbishment carried out over an unresolved damp problem hides it for a year and then costs twice.",
      },
      {
        title: "Drainage across a split house",
        text: "Where a house is divided, the kitchen and bathroom in one flat may both be a long way from the drainage the building uses. We measure the runs and the fall available for every wet room in scope, because marginal gradient is the technical problem that most often changes a layout here.",
      },
      {
        title: "Extract routes from below ground",
        text: "A kitchen hood and a bathroom fan both need to reach acceptable terminals, and from a lower-ground floor that is genuinely difficult. We establish what routes exist against the Primrose Hill Conservation Area and Camden's Article 4 direction, in force since 3 March 1983, before any layout is fixed. [VERIFY the boundary.]",
      },
      {
        title: "Original joinery through the house",
        text: "Sashes, shutters, panelled doors and deep skirtings run through these houses, and a programme is the chance to bring them to one standard. We assess every element, because doing joinery room by room over several years is how a house ends up with four different finishes.",
      },
      {
        title: "How the street behaves week by week",
        text: "Narrow streets and weekend visitors mean a two-month programme has to plan deliveries and skip periods around the calendar rather than around convenience. We record what is possible on which days, because a Saturday delivery near the park is a delivery that fails.",
      },
    ],
    materials: [
      "In a lower-ground programme, light and moisture govern the material decisions throughout rather than in one room. Pale finishes, lighting designed as part of the work rather than left to an electrician's default, floor finishes that tolerate an occasional failure without lifting, and moisture-resistant carcasses in any wet or semi-wet room. These decisions cost little at order and determine how the space performs for years.",
      "In the upper floors and the family houses, the material conversation is about coherence with the original fabric. One joinery system and sheen through the house, a floor finish that suits original boards where they survive, and wall systems that suit the substrate rather than a scheme drawn for a new-build. A programme is the only practical opportunity to make those decisions once for the whole house.",
      "Where the kitchen and bathroom are both in scope and both a long way from the drainage, the materials follow the plumbing rather than the reverse. Raised plinths or boxed routes to carry pipework at gradient, appliance and sanitaryware positions dictated by fall, and floor build-ups that accommodate the runs. All settled first, with the visible scheme designed around them.",
    ],
    programme: [
      {
        title: "Damp and ventilation resolved first",
        text: "In any programme involving a lower-ground floor, water in the structure is settled before a scope is fixed. It sometimes changes the job and occasionally stops it, and both are better than building over it.",
      },
      {
        title: "Consent, terminals and the street plan",
        text: "Extract positions agreed and any consent pursued, the Article 4 direction checked on the address, and the delivery and skip sequence planned for midweek rather than weekends.",
      },
      {
        title: "One strip-out, protected route",
        text: "Every room in scope stripped together, with the route protected — including external steps to a lower-ground entrance, which carry the whole programme in all weathers.",
      },
      {
        title: "First fix with the long runs proven",
        text: "Electrics, plumbing, wastes and extract across the demise, with the gradient on every long waste physically checked before anything is closed up. This is the stage that decides whether the layouts survive.",
      },
      {
        title: "Wet rooms, decoration, lighting set",
        text: "Wet rooms run their sequences while joinery and floors progress, decoration closes around them, and the lighting is commissioned and set with you rather than left at a default.",
      },
    ],
    access: [
      "Over two months the access plan has to survive the weekly rhythm of the neighbourhood. Streets around the park are narrow and fill with visitors at weekends, so deliveries and skip exchanges are booked midweek, positions are agreed at the visit, and Camden's controlled parking is worked with rather than around [VERIFY the CPZ for the street]. A refurbishment needs several skip periods rather than one, and that sequence is planned at the outset.",
      "Where the programme includes a lower-ground floor, the route in is often down external steps from the street. That route carries the entire job — in and out, in all weathers, for weeks — so it is protected, kept safe when wet, and surveyed for headroom under any bay above it. Where an item cannot pass, we know before it is ordered rather than with it standing on the pavement.",
    ],
    costDrivers: [
      {
        title: "Whether the lower ground is dry",
        text: "A sound below-ground floor is an ordinary part of a programme. One with failed or absent tanking is a different project with a different figure, and establishing which at the visit is the difference between a reliable proposal and a figure that moves.",
      },
      {
        title: "How far the drainage has to travel",
        text: "Long waste runs with marginal fall cost more to build, constrain layouts and may need a pumped solution with power and maintenance. Where both wet rooms are affected, it is the largest technical variable in the programme.",
      },
      {
        title: "How much joinery the house holds",
        text: "Sashes, shutters, panelled doors and deep skirtings throughout are a great deal of hand work, and shutters in particular are routinely underestimated. Bringing it all to one standard is what makes a refurbished house look finished.",
      },
      {
        title: "Getting material down the steps",
        text: "External steps, a bay overhead and a narrow gate are a handling cost on every delivery and every removal for two months, and they can rule out particular items entirely. Measured at the visit and named in the proposal.",
      },
    ],
    living: [
      "Family houses here often have enough space to phase a programme with the household in residence, particularly where a second bathroom stays in service. A garden flat with one kitchen and one bathroom cannot be phased sensibly and we say so. Either way the decision goes in front of you with both figures at the visit, because phasing lengthens a programme and raises the cost rather than saving anything.",
      "Weekends are noticeably different near the park, so we keep vehicles off the street at weekends where the programme allows and do not run noisy work then at all. For the neighbours, a refurbishment is a sustained presence rather than an event: we name the loud weeks rather than the loud days, work Camden's hours, and keep the street frontage tidy for two months rather than for the first fortnight.",
    ],
    handover: [
      "The house hands over as one job, and in a programme with a lower-ground floor that includes demonstrating the things you cannot see: ventilation working, the fall on long wastes proven by filling and emptying, the lighting scenes set with you. One snag list, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Below-ground space is worth revisiting after a winter, because damp behaves seasonally and a long waste run reveals its gradient over months. Elsewhere the house settles: a hairline at a cornice, a threshold, silicone at a bath junction, a door easing in a frame. We come back once at the end of the first heating season and clear all of it. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our lower ground floor is damp. Can it be part of the refurbishment?",
        a: "Not until we know why it is damp. Covering moisture with new finishes hides it for a year and then makes the repair considerably more expensive, and in a programme it means opening up work that was only just completed. We investigate at the visit, report what we find, and say plainly whether the space is ready. Sometimes the answer is that it needs work which is not a light-refurbishment instruction, and we say so.",
      },
      {
        q: "Can both the kitchen and the bathroom drain properly in a split house?",
        a: "That is exactly what the survey establishes, and it is the most common reason a Primrose Hill layout changes. Both wet rooms may be a long way from the drainage the building uses, and the fall available over each run decides where fittings can sit. Where gravity will not do it, a pumped solution is possible with power, noise and servicing attached. We would rather move a fitting than pump, and we say which applies before design.",
      },
      {
        q: "Does the Article 4 direction affect a refurbishment?",
        a: "Not the inside of it. Camden's Article 4 direction in the Primrose Hill Conservation Area, in force since 3 March 1983, and the designation itself are concerned with the outside — rooflines, front gardens, windows, and what the street and the park can see. A programme fitting out existing rooms is not their business. Extract terminals and any external work are, and for a house backing onto the park that elevation is unusually visible. [VERIFY.]",
      },
      {
        q: "Can the joinery be brought to one standard through the house?",
        a: "Yes, and it is one of the strongest arguments for doing the house as a programme. Sashes, shutters, panelled doors and skirtings done room by room over several years end up with different systems and different sheens, which is exactly what makes a house look part-finished. Done together, one specification runs through, and the shutters — which are the most underestimated item — are dealt with properly rather than painted shut.",
      },
      {
        q: "How do deliveries work on a narrow street near the park?",
        a: "Midweek and planned. Weekends fill the streets with visitors, parking disappears and a long vehicle stopping on a narrow road blocks it rather than inconveniencing it. Over a two-month programme there are many deliveries and several skip exchanges, so the whole sequence is planned at the visit rather than arranged one at a time. Where the route runs down external steps, that is surveyed for headroom as well.",
      },
      {
        q: "What is not included?",
        a: "Anything structural. Forming openings, removing walls, lowering a lower-ground floor, loft conversions, extensions and basement works are not light refurbishment and they sit with Hampstead Renovations. Resolving damp in the structure may also be outside this service depending on what is needed. We write what is in and what is out before anything is ordered, and we say at the first visit if the brief is really a different class of project.",
      },
    ],
  },

  highgate: {
    survey: [
      {
        title: "Which council, for a programme's worth of licences",
        text: "Highgate is split between Camden and Haringey with some streets in Islington, and a refurbishment needs several skip periods rather than one. Applying to the wrong authority repeatedly is an expensive habit, so the council is confirmed from the address at the visit. [VERIFY for the frontage.]",
      },
      {
        title: "Distance from every wet room to the drainage",
        text: "Villas on the slopes place kitchens and bathrooms a long way from the stack, and a programme means several connections rather than one. We measure each run and the fall available, because marginal gradient over distance is the defining technical problem of a Highgate refurbishment.",
      },
      {
        title: "Listed fabric, room by room",
        text: "Around Pond Square and the High Street the stock is finer-grained and more heavily listed. We identify what is original throughout the demise and what is later, because a programme touches far more fabric than a single-room job and the distinction has to be made everywhere.",
      },
      {
        title: "The approach, for two months of vehicles",
        text: "Steep roads, limited turning and Village pedestrian traffic constrain every delivery and every removal for the length of a programme. We establish where vehicles can stand safely on the gradient and whether transfer to a smaller van is needed as a standing arrangement.",
      },
      {
        title: "Trees, and what the ground will take",
        text: "Heath-facing and wooded plots frequently have protected trees, and a two-month programme puts vehicles, materials and skips on ground repeatedly. We check for tree preservation orders and conservation-area notices with the correct borough before positions are agreed. [VERIFY.]",
      },
    ],
    materials: [
      "In a listed Village house a programme is a careful insertion throughout rather than a refit. Fixings into later material, finishes that suit what they are going onto, and a decision taken once about how new work meets original fabric in every room. Done room by room over years, those decisions are made four different ways by four different trades, which is precisely what a programme avoids.",
      "In a villa on the slopes there is more room and more licence, and the value of one programme is coherence: a single floor finish through the principal rooms, one joinery system and sheen, and a kitchen and bathroom specified as a pair. The green filtered light that characterises this neighbourhood should also be tested against every material choice, because it flatters warm finishes and drains cool ones.",
      "Where wet rooms are far from the drainage, materials follow the plumbing throughout the programme. Boxed routes and raised plinths to carry pipework at gradient, appliance and sanitaryware positions set by fall, and floor build-ups that accommodate the runs in more than one room. These are settled first and the visible scheme is designed around them, which is the opposite of the order a showroom works in.",
    ],
    programme: [
      {
        title: "Authority, consent and scope",
        text: "The correct borough identified for the licence sequence, any listed-building or conservation question resolved, and a written scope agreed. Nothing is ordered until all three are settled.",
      },
      {
        title: "Protection, including original fabric",
        text: "The route and any original material in or near the rooms are protected for the duration. In a Village house that protection is more extensive and it has to survive two months rather than a fortnight.",
      },
      {
        title: "One strip-out, planned to the hill",
        text: "Every room in scope stripped together, with vehicle and skip positions chosen for safe working on a gradient rather than for proximity. Waste leaves on a plan rather than as it accumulates.",
      },
      {
        title: "First fix with every long run proven",
        text: "Electrics, plumbing, wastes and extract across the demise, with the gradient physically checked on each long waste before it is closed up. In a villa this is where the layouts are confirmed or changed.",
      },
      {
        title: "Wet rooms, decoration, single handover",
        text: "Wet rooms run their sequences while floors and joinery progress elsewhere, decoration closes around them, and the house is handed over as one job with one snag list and one documentation set.",
      },
    ],
    access: [
      "A two-month programme on a steep road is a sustained logistical exercise rather than a single delivery problem. We establish at the visit where vehicles can stand safely on the gradient, how far material must travel on foot, and whether transfer to a smaller van becomes a standing arrangement rather than an occasional one. Licensing follows the borough — Camden, Haringey or Islington according to the frontage — and a refurbishment needs several licence periods [VERIFY].",
      "On wooded and Heath-facing plots the ground itself is a constraint that lasts the whole programme. Vehicles standing on roots, material stacked within a tree's protection area, or a skip placed on a verge can breach an order or a conservation-area notice, and over two months the exposure is repeated rather than momentary. We check with the correct borough and fix the standing and storage positions before the first delivery rather than after a complaint.",
    ],
    costDrivers: [
      {
        title: "Distance to the drainage, in every wet room",
        text: "One wet room far from the stack is a problem; two is the programme. Long runs with marginal fall mean more work below floors, constrained layouts and occasionally a pumped solution, and this is the largest technical variable in a Highgate villa.",
      },
      {
        title: "Working around listed fabric",
        text: "Where original material is protected and worked around throughout the demise rather than in one room, the programme is slower and the judgement finer at every stage. It is proper practice and it is priced as such.",
      },
      {
        title: "Carrying up a slope, for two months",
        text: "Gradient and distance between a safe standing position and the door apply to every delivery and every removal across the programme. It is measured at the visit and named rather than absorbed into a rate.",
      },
      {
        title: "Which council, several times over",
        text: "A programme needs several licence periods, and three authorities operate across these streets with different fees and timescales. A modest line that becomes a real one if it is repeatedly applied for incorrectly.",
      },
    ],
    living: [
      "Highgate houses are usually large enough to phase a programme around a household, particularly where a second bathroom stays in service, and more clients stay here than in the conversion stock. Village houses are tighter and a listed interior needs a larger protected area, which makes staying less comfortable. We give both versions with real numbers at the visit rather than encouraging an optimistic decision that will be revisited in week four.",
      "Neighbours here are mostly in their own houses, so the noise question is about sound carrying across quiet wooded streets over a sustained period rather than through a party wall for an afternoon. We name the loud weeks, keep to the hours of whichever council applies, avoid early starts on residential slopes, and keep the frontage tidy for the whole programme rather than for the first fortnight.",
    ],
    handover: [
      "The house hands over as one job. Every room walked with you, wet rooms tested with water, and where original or listed fabric was worked around, a clear account of what was protected and what was done. One snag list, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Older Highgate houses move seasonally more than most, partly through exposure and partly through the ground, so a refurbished house is worth one visit at the end of its first heating season rather than a series of calls. Long waste runs also deserve a second look after a winter of real use. We come back once and clear the whole list. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our house is listed. Can we refurbish it under this service?",
        a: "The interior fit-out, yes, in most cases. Kitchen, bathrooms, floors, joinery, decoration and the services those rooms need are ordinary work in a listed house, and it is a good deal of what we do in the Village. What is not this service is anything that alters the building — forming openings, changing the plan, altering the elevation — which is both a structural matter and a consent question. We check the listing on the address and separate the two at the visit.",
      },
      {
        q: "Both our kitchen and bathroom are a long way from the stack. Is that a problem?",
        a: "It is the classic Highgate villa problem and it is solvable, but it drives the design rather than following it. The fall available over each run decides where sinks, machines and sanitaryware can go, and sometimes it rules out the layouts you had in mind. We measure both runs at the visit and design outward from them, which is why our first drawings may not resemble the ones from a showroom.",
      },
      {
        q: "Which council issues the licences for a two-month job?",
        a: "Whichever owns your frontage, and it is a genuine question here rather than a formality. Camden and Haringey both hold parts of the Village and the slopes, and some streets sit with Islington, each with its own application, fee and timescale. A programme needs several skip periods rather than one, so getting it wrong is a repeated cost. We confirm it from the address before the first application. [VERIFY.]",
      },
      {
        q: "There are protected trees on the plot. Does that affect an internal programme?",
        a: "It can, because a programme puts vehicles, materials and skips on ground repeatedly for two months. Standing on roots, stacking within a tree's protection area, or placing a skip on a verge can breach a preservation order or a conservation-area notice regardless of the fact that the work itself is indoors. We check with the correct borough and fix the standing and storage positions before the first delivery. [VERIFY.]",
      },
      {
        q: "Can we stay in the house?",
        a: "More often here than in the conversion stock, because these houses are larger and frequently have a second bathroom that can stay in service. Village houses are tighter, and a listed interior needs a larger protected area which makes living around the work less comfortable. We give both versions with the figures at the visit, and we show you at the survey what the protected area will actually look like.",
      },
      {
        q: "How long will a villa refurbishment take?",
        a: "Months rather than weeks, and the shape matters more than the number. The lead-in depends on whether there is a listing or conservation question. On site, strip-out and first fix move quickly, the wet rooms have fixed sequences with cure times, and decoration closes around them. On a steep street, deliveries and removals also take longer than they would on the flat, and that is in the programme rather than a surprise.",
      },
    ],
  },
  "golders-green": {
    survey: [
      {
        title: "How much house is in the programme",
        text: "Whole-house refurbishment is the ordinary instruction here rather than a flat. We walk every room including the ones nobody mentioned, the landings and the stairwell, because a figure based on the rooms you are worried about will not survive contact with the house.",
      },
      {
        title: "What the earlier addition did",
        text: "Most of these houses gained a rear addition decades ago, and the junction between original fabric and that addition runs through kitchen, floors and sometimes a bathroom. We find it and record it, because in a programme it has to be resolved once rather than worked around three times.",
      },
      {
        title: "Services across a house altered repeatedly",
        text: "Family houses accumulate alterations and each leaves something: a redundant gas run, a circuit extended twice, a waste capped behind a cupboard. We inspect the consumer unit, trace what we can and list the rest as provisional items across the whole house rather than pricing an assumption.",
      },
      {
        title: "Which bathrooms stay in service",
        text: "With two or three wet rooms, the sequence decides whether the family can stay. We establish which are in scope, which can remain usable and in what order, because that is the whole programme rather than a scheduling detail.",
      },
      {
        title: "Where vehicles and skips will sit",
        text: "Off-street parking is common here and it transforms the logistics of a two-month programme. We confirm the drive, the gate, and whether the surface will take repeated loaded vehicles, and identify a street position where there is no drive.",
      },
    ],
    materials: [
      "In a whole-house programme the specification should vary by use and stay coherent in expression. One floor finish through the ground floor, one joinery system and sheen on every door and architrave in the house, ironmongery decided once, and wall finishes that differ between a hall and a bedroom because they take different wear. That combination is what makes a refurbished family house read as finished rather than as a series of jobs.",
      "Where a programme spans the junction between original house and earlier addition, materials and detailing have to tolerate two backgrounds that move differently. A movement joint at the right place, decoupling under tile, considered support for a long worktop, and a flooring layout that does not put a full board or tile bridging the line. Done properly it is invisible; done carelessly it shows in three places rather than one.",
      "With more than one wet room in scope, specifying them together saves money and produces coherence. The same tanking system, compatible brassware, matched sanitaryware references and a shared delivery plan. It also stops a house having three bathrooms that were clearly done in three different decades, which is what most of these houses currently have.",
    ],
    programme: [
      {
        title: "Scope, sequence and which rooms stay open",
        text: "Room order agreed, wet rooms sequenced so one stays in service, and a written scope stating what is in and what is out. With a family staying, this stage is the programme rather than a preliminary.",
      },
      {
        title: "Protection and a drive-based logistics plan",
        text: "The route through the house is protected for the duration. Where there is a drive, deliveries and the skip come onto the property, which removes most of the friction from a two-month job.",
      },
      {
        title: "One strip-out across the rooms in scope",
        text: "Everything in scope stripped in one operation rather than repeatedly, which is the main efficiency a programme offers over a sequence of separate instructions.",
      },
      {
        title: "First fix, including the junction",
        text: "Electrics, plumbing, wastes and extract across the house, and the step between original fabric and the earlier addition dealt with properly — packing, levelling and support rather than filler at the end.",
      },
      {
        title: "Wet rooms, then decoration and the stairwell",
        text: "Wet rooms run in sequence while joinery and floors progress, decoration closes around them, and the stairwell is done as a concentrated phase because everybody uses it.",
      },
    ],
    access: [
      "This is the easiest logistics in our area for a long programme. Off-street parking is common, plots are wider, and a delivery vehicle can often reach the door, which removes the handling premium that dominates a refurbishment in the Camden conversions. Where the skip can stand on the drive rather than the street, strip-out runs continuously and the licence sequence disappears. Barnet issues the licences where a street position is needed.",
      "The friction is on the main roads and on the drive surface. Loading on Golders Green Road or Finchley Road at peak is slow and unreliable across a programme with many deliveries, so drops are scheduled mid-morning. A loaded skip lorry repeatedly on decorative block paving can also leave marks that cost more to put right than the licence would have, so we look at the surface at the visit rather than assuming it will cope.",
    ],
    costDrivers: [
      {
        title: "The size of the house",
        text: "Whole-house refurbishment in a family house of this size is a larger programme than the same instruction in a flat, in a straightforward way. The figure follows the measured schedule, which is why every room is walked rather than estimated.",
      },
      {
        title: "How many wet rooms are in scope",
        text: "Two or three bathrooms plus a kitchen in one programme costs considerably less than the same rooms as separate jobs, because protection, strip-out, first fix and delivery planning all happen once.",
      },
      {
        title: "The junction with the earlier addition",
        text: "Levelling, decoupling and movement detailing where original fabric meets a rear addition is real work across kitchen, floors and sometimes a bathroom. Skipping it is how a refurbished house cracks in three predictable places.",
      },
      {
        title: "What the alterations left behind",
        text: "Redundant services and improvised work behind boxing in a house altered repeatedly. Provisional items name what cannot be seen without opening up, across the whole house rather than room by room.",
      },
    ],
    living: [
      "A family house here absorbs a programme better than any flat can, provided the sequence is right. There is normally a second bathroom that can stay in service, a reception room for a temporary kitchen, and a door that genuinely closes between the work and the family. More clients stay here than anywhere else we work. The stairwell phase is the exception, and we concentrate it deliberately rather than spreading it.",
      "Neighbours are in their own houses, which softens a sustained programme considerably. A party wall in a semi still carries strip-out and floor work clearly, so we name the loud weeks, work Barnet's ordinary hours, and let the immediate neighbours know the shape of the job at the start. Keeping the frontage tidy for two months matters more than for two weeks, and we do that as a matter of course.",
    ],
    handover: [
      "The house hands over as one job: every room walked with you, everything opened, the wet rooms tested with water, and one snag list covering the house rather than a list per room. You receive a single documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, tanking records for each wet room, appliance and sanitaryware references and the decorating schedule with colours and sheens. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Large houses settle over a heating season, and a programme gives them more to settle: a long run over a suspended floor, a junction with an earlier addition, thresholds between rooms, silicone in new bathrooms. We come back once at the end of that season and clear everything rather than attending to items one at a time. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can the family stay in the house through a whole-house programme?",
        a: "More often here than anywhere else we work. There is usually a second bathroom that can be kept in service, a reception room that will take a temporary kitchen, and enough separation that the working rooms can be properly closed off. We agree the sequence before anything starts so the fully disrupted periods are as few and as concentrated as the work allows, and we tell you which weeks those are.",
      },
      {
        q: "Why do you keep asking about the rear addition?",
        a: "Because in a programme it affects three things rather than one. The kitchen usually spans it, the floors cross it, and sometimes a bathroom sits over it. The two halves are different construction at slightly different levels and they move differently, so a run, a floor finish or a tiled surface crossing the line needs proper levelling, support and movement detailing. Done once, properly, it is invisible. Ignored, it shows in every place it occurs.",
      },
      {
        q: "Is doing all three bathrooms at once worth it?",
        a: "Usually yes, if they are all going to be done within a few years anyway. Running them in sequence within one programme keeps one in service throughout, and the protection, first fix, trades and deliveries overlap enough to make it meaningfully cheaper than three separate visits. It also means the house ends up with one standard rather than three bathrooms that were clearly done in different decades.",
      },
      {
        q: "Do we need a skip licence?",
        a: "Not if the skip sits entirely on your own property, which is one of the real advantages of this stock for a long programme — there is no licence sequence to manage across two months. Where it has to stand on the street, Barnet issues the licence and we arrange each period. We check the drive surface first, because a loaded lorry repeatedly on block paving can leave marks that cost more than the licences would have.",
      },
      {
        q: "What is excluded from light refurbishment?",
        a: "Anything structural. Forming openings, removing walls, loft conversions, extensions and basement works are not this service and they sit with Hampstead Renovations. In a house this size the temptation to let the brief drift is real, which is exactly why we write what is in and what is out before anything is ordered and say at the first visit if part of what you want is a different class of project.",
      },
      {
        q: "How long does a whole-house programme take?",
        a: "Months rather than weeks, and the number depends on the scope rather than the square footage alone. The lead-in is short here — drainage is close, there is usually no licence to alter, and the rooms are already what they are — so the calendar is mostly build. The fixed points are the wet room sequences with their cure times and the worktop template. We write dates after walking every room.",
      },
    ],
  },

  "queens-park": {
    survey: [
      {
        title: "Brent or Westminster, for the whole licence sequence",
        text: "A programme needs several skip periods rather than one, and the two councils across this neighbourhood licence, charge and enforce separately. Applying to the wrong one repeatedly is an expensive habit. We confirm the authority from the address at the visit. [VERIFY the borough.]",
      },
      {
        title: "Cottage or larger terrace",
        text: "An Estate cottage programme and a larger terrace near the park are different jobs with different scope, different access and sometimes different conservation-area rules. We establish which you have first, because everything after that follows from it.",
      },
      {
        title: "Original joinery, through the whole house",
        text: "Doors, architraves and window joinery in these houses are a substantial part of what they are worth. A programme is the chance to bring them to one standard, and we assess every element rather than dealing with the worst room and leaving the rest.",
      },
      {
        title: "The tiled path and the hall, for two months",
        text: "Original tiled paths and thresholds are on the route for every delivery and every removal across a programme. We record and photograph them and specify protection that lasts the whole job rather than the first week.",
      },
      {
        title: "Which conservation area, for anything external",
        text: "Brent's Queen's Park Conservation Area and Westminster's Queen's Park Estate Conservation Area are separate designations with their own audits. Internal work is unaffected; anything on an elevation is not, and the boundary is not obvious on the ground. [VERIFY.]",
      },
    ],
    materials: [
      "One standard through a small house is unusually noticeable, because you can see three rooms from most standing points. A single floor finish carried through the ground floor, one joinery system and sheen on every door, and ironmongery decided once. In a cottage that has been improved a room at a time by successive owners, restoring that coherence is the single most visible result of a programme.",
      "Original joinery generally justifies proper treatment within a programme. Taking good doors and architraves back to a sound base across a whole house is slow and it costs accordingly, but doing it once as part of a programme is far cheaper and far more coherent than doing it room by room over a decade. We say which elements justify it rather than recommending it everywhere.",
      "Handling constrains the materials throughout. A narrow front door, a decorative tiled path and a turn into the hall apply to every delivery over two months, not one: flooring, worktops, sanitaryware, a bath. We specify with that route in mind from the start and place any necessary joints deliberately rather than where they happen to fall.",
    ],
    programme: [
      {
        title: "Confirm the council, then plan the licences",
        text: "Brent or Westminster established from the address, and the whole skip sequence planned rather than arranged period by period. Anything external is separated at this stage.",
      },
      {
        title: "Path, threshold and hall protected for the duration",
        text: "Boarding and covering designed to survive two months of daily use rather than a delivery day, inspected and repaired as it wears. What it covers cannot be convincingly replaced.",
      },
      {
        title: "One strip-out across the rooms in scope",
        text: "Everything stripped together with waste leaving to a licensed side-street position, because Salusbury Road is not a place to stand a lorry repeatedly.",
      },
      {
        title: "First fix through a small house",
        text: "Electrics, plumbing, wastes and extract run together with the finished circulation already set out, because in a cottage a pipe run that steals thirty millimetres changes how a room works.",
      },
      {
        title: "Wet rooms, joinery, decoration, handover",
        text: "Wet rooms run their sequences, joinery is brought to one standard across the house, decoration closes around it all, and the path and hall are checked against the day-one photographs.",
      },
    ],
    access: [
      "Two councils, two licensing regimes, and a programme that needs several skip periods across two months. We confirm the authority for the frontage at the visit and plan the whole sequence rather than applying each time [VERIFY]. Salusbury Road is the commercial spine and a poor place to stand a lorry repeatedly, so positions are licensed on residential streets and drops are timed away from the school run and the shop deliveries.",
      "The front of the house carries the entire programme. A small front garden, a gate and a narrow decorative tiled path between them and the door will not take loaded trolleys repeatedly for weeks. The path is boarded for the duration, material is carried rather than wheeled where the surface demands it, and it is photographed before and after. Matching a broken original tile is difficult and rarely convincing, which is why the protection is designed to last.",
    ],
    costDrivers: [
      {
        title: "Cottage or terrace",
        text: "An Estate cottage programme is small and precise; a larger terrace near the park has more rooms, more scope and often a rear addition. They are different figures for the same service and the visit decides which you have.",
      },
      {
        title: "Whether joinery is taken back",
        text: "Bringing original doors and architraves back to a sound base across a whole house is slow, careful work. It is also much cheaper and more coherent done once within a programme than piecemeal over a decade.",
      },
      {
        title: "Whether materials can reach the rooms",
        text: "The door, the path and the hall decide what can be delivered whole across two months of deliveries. Where they cannot, specifications change, and that is settled at the outset rather than on delivery mornings.",
      },
      {
        title: "Protecting what cannot be replaced",
        text: "Boarding a tiled path and a hall for the length of a programme, maintaining that protection and reinstating properly takes time and materials. It is included and named, and it is cheaper than a repair.",
      },
    ],
    living: [
      "In a two-storey terrace with one kitchen and one bathroom, a full programme really needs you elsewhere, and in an Estate cottage that is even more the case because the house is small enough that the work is everywhere. Larger terraces near the park sometimes have a second bathroom, which changes the calculation. We put both versions in front of you at the visit with the practical and financial differences set out.",
      "Terraced neighbours are immediate here, with thin party walls and narrow back-to-back gardens, and a programme is a sustained presence rather than an event. We give them the shape of the job at the start, name the loud weeks rather than the loud days, keep to the applicable council's hours, and keep the frontage and the path clear for the whole job. In a street where everybody knows everybody, that consistency matters.",
    ],
    handover: [
      "The house hands over as one job: every room walked with you, the wet rooms tested with water, and the path, threshold and hall checked against the day-one photographs. One snag list covering the house, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Small houses show settlement quickly because everything is close: a threshold between rooms, a scribe in a compact kitchen, silicone at a bath edge, a door easing in a frame. Where original joinery was taken back, it is worth a look after a season while the work is fresh. We come back once at the end of the first heating season and deal with all of it. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Are we in Brent or Westminster, and does it matter for a long job?",
        a: "It matters more for a programme than for a single job, because a refurbishment needs several skip periods rather than one and the two councils licence, charge and enforce separately. The boundary is not obvious walking around. We confirm it from the address at the visit and plan the whole licence sequence rather than applying each time, which also means we are not discovering a fee difference in month two. [VERIFY.]",
      },
      {
        q: "Is it worth taking all the original joinery back at once?",
        a: "If you are going to do it at all, yes, and a programme is the moment. Decades of coating soften the profile until a well-made door reads as a slab, and taking it back recovers something the house was designed with. Doing it once across the house is far cheaper and far more coherent than doing a room at a time over a decade. We say which elements justify it; some later replacements do not.",
      },
      {
        q: "Can we stay in an Estate cottage through a programme?",
        a: "We would generally advise not. The house is small enough that the work is present everywhere rather than tucked away, and with one kitchen and one bathroom in scope there is nowhere to retreat to. A programme can be phased around a household, but it lengthens the job, raises the figure and extends the discomfort rather than reducing it. We give you both versions with real numbers at the visit.",
      },
      {
        q: "Will the tiled path survive two months of deliveries?",
        a: "If it is boarded for the duration and maintained rather than protected on day one and forgotten. These paths chip under point loads from trolleys, and a programme brings many more of those than a single job does. We board it, carry across it rather than wheel where the surface demands, photograph before and after, and check it with you at handover. Matching a broken original tile is difficult and rarely convincing.",
      },
      {
        q: "Can we do the outside at the same time?",
        a: "External redecoration can be quoted alongside, but it is a separate instruction with a separate consent position, and which rules apply depends on which side of the borough boundary you are on. The Estate in particular is a coherent composition rather than a row of individual houses. We check the address and say what applies rather than assuming external work can simply be added to an internal programme. [VERIFY.]",
      },
      {
        q: "What is not included?",
        a: "Anything structural: forming openings, removing walls, loft conversions, extensions and basement works, all of which sit with Hampstead Renovations. In a small house the temptation to open something up is common, and we would rather say at the first visit that the brief is a different class of project than take the instruction and stretch the word refurbishment to cover it.",
      },
    ],
  },

  "muswell-hill": {
    survey: [
      {
        title: "The whole house, including the stairwell",
        text: "Programmes here are usually whole-house, and the stairwell rising through two floors with a landing gallery is the element that most often gets left out of an estimate. We walk all of it, because the stairwell needs its own access equipment, its own phase and its own figure.",
      },
      {
        title: "Joinery across every floor",
        text: "Panelled doors on two or three floors, deep skirtings, picture rails, a substantial staircase and timber sashes throughout. A programme is the chance to bring all of it to one standard, and we count it rather than estimating, because it is routinely the largest single element.",
      },
      {
        title: "Sashes, assessed as joinery not decoration",
        text: "Original sashes here are frequently in need of more than paint, and a refurbishment is the sensible moment. We check cords, beads, putty and sills on every window in scope, because doing this work with the rooms already open is far cheaper than afterwards.",
      },
      {
        title: "Which bathrooms stay in service",
        text: "With more than one wet room, the sequence decides whether the family can stay. We establish what is in scope, which can remain usable and in what order, because that is the programme rather than a detail of it.",
      },
      {
        title: "The approach, for two months of vehicles",
        text: "Some of these streets are steep and poorly suited to long vehicles, and a programme means many deliveries and several skip exchanges rather than one drop. We establish standing positions and whether a transfer van becomes a standing arrangement.",
      },
    ],
    materials: [
      "Generous Edwardian rooms with good light can carry a fuller specification than most of the stock we work in, and a programme lets that be consistent: one floor finish through the principal rooms, one joinery system and sheen from the ground floor to the top landing, and the staircase treated as part of the same family. That consistency is most of what makes a refurbished house of this kind look properly finished.",
      "Because the halls are wide and the doorways generous, material choice is less constrained here than in most of our areas. Single-piece worktops, large floor formats and substantial sanitaryware can usually reach the rooms, which is worth knowing at specification stage. The constraint that remains is the approach outside, where a steep street and a heavy item are a different proposition from a flat drive.",
      "Where sashes need joinery work, doing it within the programme is materially cheaper than as a later instruction, and it changes the materials conversation: a window being repaired takes a different preparation and a different coating sequence from one simply being redecorated. We are explicit about which of your windows fall into which category, because the answer affects both the figure and the interval before it recurs.",
    ],
    programme: [
      {
        title: "Scope, sequence and the household",
        text: "Room order, which wet rooms stay in service, and a written scope stating what is in and what is out. With a family staying, this is the programme rather than a preliminary to it.",
      },
      {
        title: "Protection, hall and original floors",
        text: "The wide hall, the stair and any original floors on the route are covered for the duration and maintained. These halls carry everything that comes into the house for two months.",
      },
      {
        title: "One strip-out, sized to the road",
        text: "All rooms in scope stripped together, with vehicles and skip exchanges planned for a street that may be steep. Haringey issues the licences and controlled parking applies on many roads [VERIFY].",
      },
      {
        title: "First fix, and the windows while rooms are open",
        text: "Electrics, plumbing, wastes and extract across the house, and any sash joinery dealt with while the rooms are open and the access is easy rather than after finishes are in.",
      },
      {
        title: "Wet rooms, stairwell, decoration, handover",
        text: "Wet rooms run in sequence, the stairwell is done as its own concentrated phase, decoration closes around everything, and the house hands over as one job.",
      },
    ],
    access: [
      "For a two-month programme the gradient is a sustained rather than a single problem. Several streets here are steep and poorly suited to long vehicles, and a refurbishment brings many deliveries and several skip exchanges. We establish standing positions at the visit, decide whether a transfer van is a standing arrangement, and keep drops away from the school run, which on some of these streets is the most congested part of the day. [VERIFY the CPZ.]",
      "Once at the door, the houses are unusually generous: wide front doors, deep halls and large internal doorways mean material and equipment move through without negotiation, which over two months saves a great deal of time. Where external decoration or window work is in scope, scaffolding is generally straightforward, but the Muswell Hill and Fortis Green Conservation Areas, both designated on 1 March 1974, bear on the elevation and on fenestration. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "The quantity of joinery",
        text: "Doors on two or three floors, deep skirtings, picture rails, sashes and a substantial staircase amount to a great deal of hand work, and it is routinely the largest element of a whole-house figure here.",
      },
      {
        title: "The hall and staircase",
        text: "A two-storey stairwell with a landing gallery needs access equipment, takes longer per square metre than any room, and is seen from every angle. It is priced as its own element rather than hidden in a house rate.",
      },
      {
        title: "Whether windows need joinery work",
        text: "Sash repair within a programme is far cheaper than as a later instruction, and it is quoted honestly and separately so the decision is yours. Painting over a failing sill postpones the cost rather than avoiding it.",
      },
      {
        title: "How many wet rooms are in scope",
        text: "Two or three wet rooms plus a kitchen in one programme costs meaningfully less than the same rooms as separate jobs, because protection, first fix, trades and deliveries all happen once.",
      },
    ],
    living: [
      "These houses phase well around a family. There is generally a second bathroom that can be kept in service, space for a temporary kitchen, and enough separation that working rooms can be properly closed off. The wide halls also mean a covered route does not become a bottleneck over two months. The stairwell phase is the exception and it is genuinely disruptive, so we concentrate it rather than spreading it through the programme.",
      "Neighbours are in their own houses, but these are quiet residential streets where sound travels down a hill and a programme is a sustained presence. We give the immediate neighbours the shape of the job at the start, name the loud weeks, keep to Haringey's ordinary hours, and avoid early starts on a slope. Deliveries and skip exchanges are kept away from the school run for the same reason.",
    ],
    handover: [
      "The house hands over as one job, walked with you in daylight and finishing with the joinery and the staircase, because that is where an Edwardian refurbishment is judged. Wet rooms are tested with water. One snag list, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, tanking records, appliance and sanitaryware references and the decorating schedule. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Edwardian houses move with the seasons, and a refurbished one has more junctions to settle: thresholds between rooms, a long run in a large kitchen, silicone in new bathrooms, doors easing in frames. Where sashes were repaired, the first proper winter is the real test. We come back once at the end of that season and clear everything. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Should the sash windows be dealt with as part of the programme?",
        a: "If they need work, almost certainly. Repairing cords, beads, putty and sills while the rooms are open and the finishes are not yet in is considerably cheaper and less disruptive than doing it afterwards, and it is the difference between a window that has been decorated and one that works. It is joinery, quoted separately and honestly. We tell you at the visit which of your windows need more than paint.",
      },
      {
        q: "How disruptive is the stairwell phase?",
        a: "More than any single room, because everyone uses the stairs and while the access equipment is up they are compromised. We treat it as its own concentrated phase rather than spreading it through the programme, and we plan it around school and work hours where we can. It is also the part of the house that most repays doing well, since it is seen from every landing and every angle.",
      },
      {
        q: "Can the family stay through a whole-house programme?",
        a: "Usually yes, in these houses. There is generally a second bathroom that can stay in service, space for a temporary kitchen, and enough separation that working rooms close off properly. The wide halls help more than people expect over two months. We agree the sequence before anything starts, keep the fully disrupted periods concentrated, and tell you which weeks those are rather than leaving it vague.",
      },
      {
        q: "Can a lorry get up our street for two months of deliveries?",
        a: "On some Muswell Hill streets comfortably, on others not at all, and over a programme the question recurs rather than arising once. We look at the approach at the visit, decide whether a transfer to a smaller van should be a standing arrangement, and schedule drops and skip exchanges away from the school run. Once at the door, the wide halls and generous doorways make everything after that straightforward.",
      },
      {
        q: "Does the conservation area affect the programme?",
        a: "Not the inside of it. Haringey designated the Muswell Hill Conservation Area on 1 March 1974 and Fortis Green Conservation Area the same day, and both are concerned with the elevations, fenestration and what the street sees. An internal refurbishment is not their business. Window work visible from outside, external redecoration and extract terminals are, and we check the address before quoting those. [VERIFY on Haringey's map.]",
      },
      {
        q: "What is excluded?",
        a: "Anything structural. Forming openings, removing walls, loft conversions, extensions and basement works are not this service and they sit with Hampstead Renovations. In houses this size those ambitions come up often, and we would rather separate them at the first visit than let a refurbishment quietly turn into a project that needs different design, different consent and a different contract.",
      },
    ],
  },

  "crouch-end": {
    survey: [
      {
        title: "What the conversion actually left",
        text: "In a converted house the original room proportions have been interrupted: partitions across cornices, a bathroom taken out of a bedroom, services rerouted to suit a layout that no longer exists. A programme is the chance to resolve those coherently rather than decorate around them again, and the visit maps them room by room.",
      },
      {
        title: "What the rear stack will carry for two wet rooms",
        text: "Kitchen and bathroom in one programme means several connections to a stack that already serves other flats. We establish its condition, the connection heights available and how much fall each run can find, because that decides both layouts rather than one.",
      },
      {
        title: "The tiled hall, for the whole programme",
        text: "The shared hall carries every delivery and every removal for two months. We measure it, photograph it and specify protection that survives the duration, because damage to a common part is a dispute with neighbours rather than a snag on a list.",
      },
      {
        title: "Floor levels across the flat",
        text: "Rear rooms in these houses have settled and been re-floored, often more than once. We take levels throughout, because a programme is the one opportunity to run a consistent floor through a flat rather than accepting thresholds nobody would choose.",
      },
      {
        title: "Tenure, and who consents",
        text: "Leasehold, share of freehold, or a managing agent. A programme touching services, wastes and extract usually needs a licence to alter, and where the flats hold the freehold between them, your neighbours sign formally. [VERIFY the lease.]",
      },
    ],
    materials: [
      "One standard through a conversion flat is the main argument for a programme. A single floor finish carried through rather than a different one in each room, one joinery system and sheen, and a decision taken once about how cornices and picture rails meet the partitions a conversion introduced. Most flats in these houses have been improved a room at a time, and it shows.",
      "Everything has to come through a shared front door, along a tiled hall and up a stair that is not yours, and that applies to every delivery for two months rather than one. Flooring in manageable packs, worktops in sections with joints placed deliberately, and sanitaryware checked against the route before ordering. We settle that at the visit so the procurement plan is realistic from the start.",
      "Where the kitchen and bathroom are both in scope, specifying them together is worth real money. One tanking system, compatible brassware, a shared delivery plan and overlapping trades. Acoustic isolation under any new hard floor is also worth specifying across the whole flat rather than one room, because in a converted house everything you lay sits above another household.",
    ],
    programme: [
      {
        title: "Licence, scope and neighbour notice",
        text: "The freeholder's requirements agreed, a written scope stating what is in and what is out, and the other households given the shape of the job. A programme is a sustained presence in a shared house.",
      },
      {
        title: "Hall protection for the duration",
        text: "The tiled hall, the threshold and the stair boarded and covered for two months rather than a fortnight, maintained as it wears and photographed at the start.",
      },
      {
        title: "One strip-out to a licensed side street",
        text: "Every room in scope stripped together, with the skip licensed on a residential street rather than the Broadway. Waste is bagged at the room and never staged in a shared hall.",
      },
      {
        title: "First fix across the flat",
        text: "Electrics, plumbing, wastes and extract for all rooms in scope, set out from the rear stack, with the floor levels corrected before anything is finished. Provisional items are resolved here.",
      },
      {
        title: "Wet rooms, decoration, hall reinstated",
        text: "Wet rooms run their sequences while floors and joinery progress, decoration closes around them, and the shared hall is returned to the day-one photographs at handover.",
      },
    ],
    access: [
      "Over two months the shared front door is the defining constraint. Everything in and out crosses a hall and a stair belonging to two or three households, every working day. The route is protected for the duration, maintained as it wears, cleared every evening and photographed at the start. We also give the other households the shape of the programme, because a neighbour who knows which weeks are loud is a neighbour who plans rather than complains.",
      "On the street, the Broadway is busy and not a place to stand a lorry repeatedly, so positions are licensed on residential side streets through Haringey and drops are timed away from the school run. Parking varies genuinely road by road between controlled zones and less restricted streets, and over a programme of this length that difference matters [VERIFY street by street]. Several skip periods are planned as a sequence rather than arranged one at a time.",
    ],
    costDrivers: [
      {
        title: "How many rooms are in scope",
        text: "A kitchen, a bathroom, floors and decoration in one programme cost less than the same rooms as separate jobs, because protection, strip-out, first fix and delivery planning happen once rather than repeatedly.",
      },
      {
        title: "What the stack will accept",
        text: "Two wet rooms both connecting to a stack that already serves other flats is more demanding than one. Where the existing arrangement takes it, first fix is quick; where it does not, the work is larger and may need the building's process.",
      },
      {
        title: "How far out the floors are",
        text: "Levelling a conversion flat so one finish runs through it is ordinary work, priced as work, and it is what separates a refurbished flat from a decorated one. It is also the item most often left out of a cheap figure.",
      },
      {
        title: "Protecting common parts for two months",
        text: "Boarding, maintaining and reinstating a shared tiled hall across a long programme takes real time and materials on a job where none of that hall is yours. It is included and it is what your neighbours judge the work by.",
      },
    ],
    living: [
      "In a garden or first-floor flat with one kitchen and one bathroom, a full programme really needs you elsewhere. We will phase around a household where it is genuinely necessary, but it lengthens the job and raises the figure rather than saving anything, and it means living in a building site for longer. Both versions go in front of you at the visit with the practical differences set out rather than glossed over.",
      "For the other households, a refurbishment is a sustained presence rather than an event, and that is where goodwill is won or lost in a converted house. We give them the shape of the programme at the start, name the loud weeks, work Haringey's ordinary hours, and keep the hall clear every evening for two months rather than for the first fortnight when we are still being careful.",
    ],
    handover: [
      "The flat hands over as one job: every room walked with you, everything opened, wet rooms tested with water, and a single snag list covering the demise. The shared hall is inspected against the day-one photographs at the same visit. You receive one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Converted houses move, and a refurbished flat has more junctions to settle than a single-room job: thresholds between rooms, a scribe in a rear-room kitchen, silicone at a bath junction, a door easing in a settled frame. We come back once at the end of the first heating season and clear the whole list rather than attending to items one at a time. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can a conversion flat really be brought to one standard?",
        a: "Yes, and it is the main reason to do it as a programme. Most flats in these houses have been improved a room at a time by successive owners, which is why the floors change at every doorway and the joinery is three different colours. Doing it together means one floor finish, one joinery system, one set of decisions about how cornices meet later partitions. That coherence is what people notice most.",
      },
      {
        q: "Do the other households have to agree?",
        a: "Not to work inside your own demise, in most cases. Your lease governs what you may alter and the freeholder grants any licence, which for a programme touching services and wastes is usually required. Where the flats hold a share of the freehold between them, your neighbours are the freeholder and they sign formally. Either way they share the hall and will live through it, so they get the shape of the job at the start. [VERIFY the lease.]",
      },
      {
        q: "Can the floors be level throughout?",
        a: "Usually, and it is one of the real benefits of a programme. Rear rooms in these houses have settled and been re-floored more than once, so the levels vary, and doing rooms separately means accepting thresholds nobody would choose. We take levels across the whole flat at the visit and say what it takes to run one finish through. It is ordinary work and it changes how the flat feels.",
      },
      {
        q: "How do you protect the shared hall for two months?",
        a: "With boarding and covering designed to last the programme rather than the first fortnight, maintained and repaired as it wears, and photographed before we start. It goes down before anything is carried and comes up at handover when it is checked against those photographs. We keep it clear every evening for the whole job. In a house of three flats, that is what your neighbours will actually remember.",
      },
      {
        q: "Should we move out?",
        a: "Where the kitchen and the only bathroom are both in scope, we would advise it. A programme can be phased around a household, but it lengthens the job, raises the figure and extends the discomfort rather than reducing it. We put both versions in front of you at the visit with real numbers, and the decision is made before the programme is written rather than reconsidered in week four.",
      },
      {
        q: "What is excluded from this service?",
        a: "Anything structural — forming openings, removing walls, loft conversions, extensions and basement works — which sits with Hampstead Renovations rather than here. Also excluded is work to the building's shared fabric beyond your demise, and redecoration of the communal hall unless the freeholder instructs it separately. We write that boundary down before anything is ordered, because it is where these programmes most often go wrong.",
      },
    ],
  },
  "kentish-town": {
    survey: [
      {
        title: "What kind of flat this actually is",
        text: "Programmes here land in rear-return conversions, lower-ground flats and former workshop spaces, and each has a different starting problem: fall to the stack, damp and ventilation, or services that were never domestic. The visit names which before it measures, because they are not priced from the same assumptions.",
      },
      {
        title: "Damp, where any part is below ground",
        text: "Where a lower-ground room is in the programme, moisture in the structure is established first. Building a refurbishment over an unresolved damp problem buries it behind new work and doubles the eventual repair, and we would rather report the condition than take the instruction as it stands.",
      },
      {
        title: "Services in a much-altered building",
        text: "Wiring extended from spurs, gas rerouted around partitions, wastes teed into older pipework: common here, none of it recorded. A programme has to take a view across the whole demise, so we inspect what we can, test what we can, and list the rest as provisional items.",
      },
      {
        title: "How close the neighbours are, for weeks",
        text: "Terraces sit tight together with thin party walls, and a programme is a sustained presence rather than an afternoon. We establish who is next door and above, what hours they keep and whether anybody works from home, because that shapes the whole calendar.",
      },
      {
        title: "Whether the brief is structural",
        text: "Opening a wall, joining two rooms or altering the envelope is not this service and sits with Hampstead Renovations. In a much-altered building the temptation to keep going is real, and we draw that line at the first visit rather than at strip-out.",
      },
    ],
    materials: [
      "Where any part of the programme is below ground, the material decisions follow from that throughout: pale finishes, moisture-resistant carcasses in wet and semi-wet rooms, floor finishes that tolerate an occasional failure, and lighting designed as part of the work rather than left to a default. These are modest decisions at order and they determine how the space performs for years.",
      "In a conversion the value of a programme is one standard through the flat: a single floor finish rather than a different one per room, one joinery system and sheen, and a coherent approach where original plaster meets a 1970s partition. Most flats in this stock have been improved a room at a time, and restoring coherence is the most visible thing a refurbishment does.",
      "Former workshop and studio spaces take a plainer, tougher specification and a programme should decide that once rather than room by room. Painted brick left as painted brick where it is honest, robust floor finishes, services run tidily where they will be seen. The risk is refurbishing one of these spaces into a conventional flat, which loses what makes it worth having.",
    ],
    programme: [
      {
        title: "Tenure, scope and neighbour notice",
        text: "Lease position settled, a written scope stating what is in and what is out, and the neighbours given the shape of the job. In a dense terraced street that notice does more work than it sounds.",
      },
      {
        title: "Damp resolved before the scope is fixed",
        text: "Where part of the programme is below ground, moisture in the structure is settled before anything is ordered. It sometimes changes the job and occasionally stops it, and both are better than building over it.",
      },
      {
        title: "One strip-out, side-street skip",
        text: "Every room in scope stripped together, with skip positions licensed away from Kentish Town Road and arranged as a sequence rather than one at a time. The route, including external steps, is protected first.",
      },
      {
        title: "First fix across the demise",
        text: "Electrics, plumbing, wastes and extract for every room in scope, with the improvised work of earlier conversions removed or properly re-made. This is where the provisional items are resolved with you.",
      },
      {
        title: "Wet rooms, decoration, handover",
        text: "Wet rooms run their fixed sequences while floors and joinery progress elsewhere, decoration closes around them, and the flat is handed over as one job with one snag list.",
      },
    ],
    access: [
      "A programme means daily access for weeks, and the side streets here are narrow and densely parked with residents' bays on both sides. Kentish Town Road is a corridor and not a place to stand a vehicle repeatedly. We establish a parking position and plan the whole skip sequence at the visit under Camden's controlled parking, because a refurbishment needs several licence periods rather than one [VERIFY the CPZ].",
      "Where the flat is below ground, the route in is frequently down external steps from the street, and that route carries the entire programme in all weathers. It is protected, kept safe when wet, and surveyed for headroom under any bay above it. A converted workshop or studio may have a wide door that makes everything easy by comparison, which is worth establishing at the outset rather than assuming the worst.",
    ],
    costDrivers: [
      {
        title: "Whether the below-ground space is dry",
        text: "A sound lower-ground floor is an ordinary part of a programme. One with failed or absent tanking is a different project with a different figure, and establishing which at the visit is the difference between a reliable proposal and a moving one.",
      },
      {
        title: "What earlier conversions left behind",
        text: "Improvised wiring, rerouted gas and teed wastes across a whole demise rather than one room. Provisional items name what cannot be seen without opening up and they are discussed rather than absorbed into a rate.",
      },
      {
        title: "Getting materials to the rooms",
        text: "External steps, a bay overhead, a narrow densely parked street, or a half-landing reached by a shared stair. Over a programme these apply to every delivery and every removal, not one, and they are named in the proposal.",
      },
      {
        title: "How constrained the hours are",
        text: "Where neighbours are immediate and somebody works from home, noisy phases run in shorter windows. Across a two-month programme that lengthens the calendar substantially, and it is better planned at the start than negotiated in week three.",
      },
    ],
    living: [
      "Staying through a programme here depends on the flat. A rear-return conversion with separate rooms and a second wet room can sometimes be phased; a lower-ground flat with one kitchen and one bathroom cannot be phased sensibly, and dust from a below-ground strip-out rises through a house rather than staying put. We give both versions with real numbers at the visit rather than encouraging an optimistic decision.",
      "Party walls here are thin and in a street of conversions there may be four or five households within earshot for two months. We give them the shape of the programme at the start, name the loud weeks rather than the loud days, and keep to Camden's hours. Where a neighbour works from home and asks for shorter noisy windows, that is built into the dates from the outset rather than negotiated once the job is running.",
    ],
    handover: [
      "The flat hands over as one job, and in an altered building that includes a plain account of what we found and what we re-made. Every room walked, wet rooms tested with water, ventilation demonstrated working. One snag list, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Below-ground space is worth revisiting after a winter because damp behaves seasonally, and an altered building is worth a look after a season of real use because it settles at the joins. Thresholds, silicone, a re-made waste, a door in a settled frame. We come back once at the end of the first heating season and clear the list. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our lower-ground flat has damp. Can we still refurbish it?",
        a: "Not until we know why. Covering moisture with new finishes hides it for a year and then means opening up work that was only just completed, which in a programme is far worse than in a single room. We investigate at the visit, report what we find, and say plainly whether the space is ready. Sometimes the honest answer is that it needs work which is not a light-refurbishment instruction.",
      },
      {
        q: "Can a converted workshop be refurbished without ruining it?",
        a: "Yes, and that is the right question to ask. Painted brick, exposed structure and industrial windows are what make these spaces worth having, and refurbishing one into a conventional flat usually loses that without gaining much. We give a view at the visit on which surfaces should be left as they are and which genuinely need lining out, and we make those decisions once for the whole space rather than room by room.",
      },
      {
        q: "How much of the wiring and plumbing will be replaced?",
        a: "Within the rooms in scope, whatever is not fit to build onto — and in this stock that is a real question rather than a formality. Circuits extended from spurs and wastes teed into older pipework are common and none of it is recorded. We inspect what we can at the visit, list the rest as provisional items, and resolve them with you at first fix when the walls are open rather than assuming either way.",
      },
      {
        q: "Can you work shorter hours for a neighbour who works from home?",
        a: "Yes, and over a two-month programme it is much better planned than negotiated. Shorter noisy windows lengthen the calendar rather than changing the work, so we build that into the dates from the start. We ask about neighbours at the visit for exactly this reason, and we tell them the shape of the job ourselves rather than leaving you to manage it.",
      },
      {
        q: "Where will the skips go?",
        a: "On a licensed position on a residential side street, arranged as a sequence rather than one at a time, because a programme generates waste in several distinct phases. Kentish Town Road is a corridor and the side streets are narrow with residents' bays on both sides, so positions have to be planned at the visit rather than found on the morning. [VERIFY the CPZ for the street.]",
      },
      {
        q: "What is not included?",
        a: "Anything structural: forming openings, removing walls, loft conversions, extensions and basement works, all of which sit with Hampstead Renovations. Lowering a lower-ground floor is not this service either. Resolving damp in the structure may also fall outside depending on what is required. We write the boundary down before anything is ordered and say at the first visit if the brief is really a different class of project.",
      },
    ],
  },

  kilburn: {
    survey: [
      {
        title: "Camden or Brent, for the whole licence sequence",
        text: "Kilburn High Road is the historic boundary and a programme needs several skip periods rather than one. Two authorities means two processes, two fee structures and two sets of conditions, and applying to the wrong one repeatedly is expensive. We confirm it from the address. [VERIFY.]",
      },
      {
        title: "What the route in will carry for two months",
        text: "Flats above High Road shops are reached by narrow side doors and steep straight stairs, sometimes shared and occasionally passing a business. A programme uses that route every working day, so we measure it, establish who controls it, and agree its use in writing.",
      },
      {
        title: "What the building is actually made of",
        text: "Victorian terraces, mansion blocks, later local-authority and infill housing all appear here and all behave differently. We establish the wall and floor construction across the demise before specifying fixings, frames or floor build-ups, because assumptions do not transfer between these building types.",
      },
      {
        title: "The services, and whether there is a record",
        text: "A later block may have a documented riser; a converted terrace has a rear stack and nothing written down. We establish which, open what we can, and list the unknowns across the whole demise rather than assuming a standard arrangement this building may never have had.",
      },
      {
        title: "Who is below, and their hours",
        text: "A commercial tenant below may be entirely relaxed about early starts, which over two months can shorten a programme substantially; a residential block will not be. We establish it in writing at the visit rather than discovering it in week two.",
      },
    ],
    materials: [
      "Because the stock varies so widely here, the specification follows the construction rather than a house style, and a programme has to make that decision once across the demise. Solid plastered walls take one approach, dry lining another, and a flat that has both in adjacent rooms needs the difference handled deliberately rather than papered over at the end.",
      "Everything is specified against the route. Where the way in is a narrow side door and a steep stair used daily for two months, flooring comes in manageable packs, worktops in sections with joints placed deliberately, and sanitaryware and appliances are checked against the stair before ordering. That is a procurement plan rather than a compromise, and it is settled at the visit.",
      "In later blocks, acoustic isolation under new hard floors and in wet rooms is worth specifying across the whole programme. It costs little at order, cannot be retrofitted once the floors are down, and it is what stops a refurbished flat becoming a complaint. Above a commercial unit the concern shifts to access for any future leak, which makes the wet-room detailing matter more.",
    ],
    programme: [
      {
        title: "Council, tenure and scope settled",
        text: "Which borough for the licence sequence, who consents to the work, and a written scope. In a neighbourhood split between two authorities and several tenure types, this is real work rather than a formality.",
      },
      {
        title: "Route protected for the duration",
        text: "Side door, stair and any shared or commercial landing protected to last two months of daily use, with its use agreed in writing with whoever controls it.",
      },
      {
        title: "One strip-out, down the same stair",
        text: "Every room in scope stripped together, waste bagged at the room and carried down the way materials came in, timed around a business below where there is one.",
      },
      {
        title: "First fix into the construction as found",
        text: "Electrics, plumbing, wastes and extract across the demise, with fixings and frames chosen for what the walls and floors actually are. Unknowns flagged at the visit are resolved here.",
      },
      {
        title: "Wet rooms, decoration, single handover",
        text: "Wet rooms run their sequences while floors and joinery progress, decoration closes around them, and the flat hands over as one job with the shared route inspected.",
      },
    ],
    access: [
      "Kilburn High Road is a major route and it should not be assumed that a skip can sit on it or that a lorry can unload repeatedly from it. A programme needs several licensed positions on residential side streets across two months, arranged with whichever borough owns the frontage [VERIFY Camden or Brent]. Two authorities on one neighbourhood means the whole sequence is planned at the outset rather than applied for as each phase fills the flat.",
      "Where the route passes a shop's entrance or shares a passage with a business, a programme uses it every working day for weeks rather than once. That use is agreed in writing with whoever controls it, the route is protected for the duration, and deliveries are timed so that nothing blocks a shopfront during trading. A method statement covers it, because an informal arrangement at the door will not survive two months.",
    ],
    costDrivers: [
      {
        title: "The stair, every day",
        text: "Crew, materials, waste and access equipment up a narrow steep stair daily for two months is the single most predictable cost driver on a flat above the High Road, and it is settled with a tape measure at the visit.",
      },
      {
        title: "What the construction turns out to be",
        text: "Fixings, frames, floor build-ups and making good all depend on whether the wall is solid brick, a later block's construction, or something a conversion built. Provisional items cover what cannot be seen without opening up.",
      },
      {
        title: "Which borough, several times over",
        text: "A programme needs several licence periods and the two authorities differ in fees, durations and conditions. A modest line that becomes a real one when it is repeatedly got wrong.",
      },
      {
        title: "Working around a business below",
        text: "Deliveries, removals and noisy phases timed around trading can help or restrict. Where it restricts, it lengthens a two-month programme meaningfully, and where it helps it can shorten it. Either way it is planned rather than improvised.",
      },
    ],
    living: [
      "Whether staying is realistic depends entirely on the building. A converted terrace flat east of the High Road with separate rooms and more than one wet room can sometimes be phased. A small flat over a shop where every room opens off one space cannot, and we say so at the visit. Where phasing is possible it still lengthens the job and raises the figure, and both numbers go in front of you before the programme is written.",
      "The neighbour situation is unusually varied and over two months that matters: a household above in a conversion, a business below on the High Road, several flats around you in a later block. A shop below may welcome an eight o'clock start, which can shorten the calendar. We establish who is actually affected, give them the shape of the programme at the start, and work to whichever hours are tighter.",
    ],
    handover: [
      "The flat hands over as one job: every room walked with you, wet rooms tested with water, one snag list covering the demise, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, the tanking record, appliance and sanitaryware references and the decorating schedule. The shared or commercial route is inspected with the protection removed. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In buildings altered as often as these, what returns is usually at the joins: where dry lining meets plaster, where a partition meets an original wall, a threshold after the heating has run, silicone at a bath junction. Above a business a small leak is somebody's stock rather than a ceiling, which makes prompt attention worth more here. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Which council licenses our skips, and does it matter across a whole programme?",
        a: "It matters more than for a single job, because a refurbishment needs several skip periods rather than one. Kilburn High Road is the historic boundary: east toward West Hampstead is generally Camden, west of it is Brent, each with its own application, fee and conditions. We confirm it from the address at the visit and plan the whole sequence, rather than discovering a difference in month two. [VERIFY.]",
      },
      {
        q: "Can a full programme be done in a flat above a shop?",
        a: "Yes, with the route and the business both settled first. Access is usually a narrow side door and a steep stair used every working day for two months, which shapes procurement as well as labour, and the tenant below sets what hours are tolerable — sometimes helpfully. We agree the use of the route in writing rather than informally, because an arrangement at the door will not survive a programme of this length.",
      },
      {
        q: "How do you know what the walls are before you start?",
        a: "We test and inspect at the visit, and it matters more here than in most areas because the stock is so mixed. Solid Victorian brick, a later block's construction and whatever a previous conversion built all take different fixings, frames and floor build-ups, and a flat can have two of them in adjacent rooms. Where we genuinely cannot know without opening up, it is listed as a provisional item rather than assumed.",
      },
      {
        q: "Is a programme east of the High Road different from one west of it?",
        a: "Often. East toward West Hampstead the stock is more uniformly Victorian conversion, with rear returns, half-landing bathrooms, shared halls and party-wall noise. West of the road the grain includes larger blocks and a wider range of periods, with different construction and a different consent position. Both are ordinary work to the same standard. They are simply not the same survey and not priced from the same assumptions.",
      },
      {
        q: "Can we stay in the flat?",
        a: "It depends on the building and we will tell you straight. A converted terrace flat with separate rooms and a second wet room can sometimes be phased. A small flat over a shop where everything opens off one space cannot, and phasing there would be miserable rather than merely inconvenient. Where phasing is possible it still lengthens the job and raises the figure, and we put both versions in front of you at the visit.",
      },
      {
        q: "What is excluded?",
        a: "Anything structural — forming openings, removing walls, loft conversions, extensions and basement works — which sits with Hampstead Renovations rather than with this service. Also excluded is work to the building's shared fabric beyond your demise and any part of a commercial neighbour's premises. We write what is in and what is out before anything is ordered, because in a mixed building that boundary is where programmes go wrong.",
      },
    ],
  },

  "hampstead-garden-suburb": {
    survey: [
      {
        title: "Where the Trust's interest begins",
        text: "Interior work is yours; the external appearance is not. Barnet planning, an Article 4 direction in force since the 1970s and the Trust's Scheme of Management under its own Act of Parliament all govern the outside. A programme has to separate internal from external at the outset so an interior job is not held up by an exterior question. [VERIFY both maps.]",
      },
      {
        title: "What is original, throughout the house",
        text: "Almost every kitchen and bathroom here has been altered since the house was built; the outside generally has not. A programme touches far more fabric than a single room, so we identify original joinery, ironmongery, windows and floors across the whole house and distinguish them from later work.",
      },
      {
        title: "Cottage or larger house",
        text: "The Suburb runs from modest cottages to substantial free-standing houses, and a programme in each is a different job. We establish the scale first, because a cottage is a compact precise programme and a larger house has a stairwell, multiple wet rooms and a longer calendar.",
      },
      {
        title: "Extract routes for kitchen and bathrooms",
        text: "A programme means several terminals rather than one, and here every one of them is an external question. We establish at the visit what is acceptable, and where nothing is, we specify accordingly rather than leaving it to be argued once the rooms are stripped.",
      },
      {
        title: "Vehicles and storage on a close",
        text: "Houses are grouped around greens and closes with shared frontages and planted verges, and a programme puts vehicles, materials and skips there repeatedly for two months. Positions and surfaces are agreed before the first delivery.",
      },
    ],
    materials: [
      "Arts and Crafts houses reward a programme that brings the interior to one quiet standard: one joinery system and sheen throughout, a floor finish that suits original boards where they survive, and kitchen and bathrooms specified as a set rather than individually. These houses were designed as compositions, and refurbishing them room by room over a decade is exactly what erodes that.",
      "Where original material survives, the new work is set out to respect it in every room rather than in the one you were thinking about. Fixings into later material, tiling and finishes that stop cleanly rather than dying into an original reveal, and adaptations made reversible where they can be. A programme is the chance to make those decisions consistently rather than four different ways.",
      "Because the exterior is tightly controlled, the interior is where a programme happens, and that suits this service well. Nothing we specify inside the rooms changes the street. The exceptions are the extract terminals, which is why they are resolved at the visit, and any external redecoration, which is a separate instruction with its own consent process and its own timetable.",
    ],
    programme: [
      {
        title: "Separate internal from external",
        text: "Interior work generally needs no consent; anything visible from outside needs Barnet, the Trust, or both, on their own timetables. Separating them at the start is what keeps a programme moving.",
      },
      {
        title: "Protection and an agreed standing position",
        text: "The route and any original material are protected for the duration, and vehicle, material and skip positions are agreed with greens, verges and shared frontages in mind rather than improvised each week.",
      },
      {
        title: "One strip-out of several previous fit-outs",
        text: "What comes out is usually the third or fourth kitchen and bathroom the house has had. We separate what is original and worth keeping from what is later and going, with you rather than in a skip.",
      },
      {
        title: "First fix within the existing fabric",
        text: "Electrics, plumbing, wastes and extract across the rooms in scope, with fixings into later material rather than original joinery, and anything that would alter the building stopped and discussed.",
      },
      {
        title: "Wet rooms, joinery, decoration, handover",
        text: "Wet rooms run their sequences, joinery is brought to one standard through the house, decoration closes around it, and the house hands over as one job with the route reinstated.",
      },
    ],
    access: [
      "The Suburb was planned around appearance and people rather than around a two-month building programme, and that is the practical constraint. Verges are planted, frontages are shared, and surfaces that take one vehicle once may not take one daily for weeks. We agree standing and storage positions at the visit, board anything that material crosses, and carry rather than wheel where the ground demands. Barnet issues licences for a highway position [VERIFY where one is needed on a private or shared frontage].",
      "Permitted development should not be assumed. An Article 4 direction has been in force since the 1970s and the Trust runs its own consent process, which can reach items that are unremarkable elsewhere [VERIFY the current Trust guidelines for the item of work]. None of it touches the rooms inside. All of it touches anything that puts a skip, a vehicle or a terminal where the street can see it, which is precisely why those are settled before the programme starts.",
    ],
    costDrivers: [
      {
        title: "Cottage or larger house",
        text: "Two very different scales of programme, with different room counts, different wet-room numbers and, in a larger house, a stairwell. Which you have is the first thing the visit settles and the biggest factor in the figure.",
      },
      {
        title: "Whether extract can be ducted",
        text: "A programme needs terminals for a kitchen and one or more bathrooms, and here each is an external question. Where ducting is acceptable the installations are conventional; where it is not, the strategy and the joinery around it change.",
      },
      {
        title: "Working around original fabric",
        text: "Protecting and working around original joinery, windows and floors throughout a house rather than in one room makes a programme slower and the judgement finer at every stage. It is proper practice and far cheaper than replacing what cannot be matched.",
      },
      {
        title: "Careful handling on a close",
        text: "Boarding routes, restricted standing positions and avoiding planted verges cost time on every delivery and removal across two months. It is a predictable feature of working here and it is named in the proposal.",
      },
    ],
    living: [
      "Suburb houses absorb a programme well. Larger houses often have more than one wet room, so one can be kept in service and the family can stay; even the cottages usually have somewhere for a temporary arrangement, though in a cottage the work is present throughout. We agree the sequence before anything starts and tell you which weeks are genuinely disrupted rather than leaving it vague.",
      "The neighbourhood is quiet in a way that makes a sustained programme conspicuous. Houses sit in composed groups around greens and a strip-out carries across a close. We give the immediate neighbours the shape of the job at the start, name the loud weeks, work Barnet's ordinary hours, and keep vehicles off shared frontages when people are coming and going. Over two months that consistency matters more than it would on an ordinary street.",
    ],
    handover: [
      "The house hands over as one job, walked with you room by room, with the wet rooms tested with water and a clear account of what original fabric was protected and how it has come through. One snag list, and one documentation set — Gas Safe certification, electrical notification where the wiring regulations require it, tanking records, appliance and sanitaryware references and the decorating schedule. Where any consent was involved, the record goes in your file. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Hand-built houses move more than machine-made ones, and a refurbished one has more junctions to settle: thresholds, a scribe against a hand-finished wall, silicone in new bathrooms, doors easing in original openings. We come back once at the end of the first heating season and clear the whole list rather than attending to items one at a time. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Does a whole-house refurbishment need Trust consent?",
        a: "The interior of it, normally not. The Scheme of Management, Barnet planning and the Article 4 direction are all concerned with the appearance of the property and its setting rather than with your kitchen, bathrooms, floors or decoration. The line is crossed by anything visible from outside, and in a programme that means the extract terminals above all. We separate internal from external at the visit so an interior job runs on its own timetable. [VERIFY.]",
      },
      {
        q: "Can we duct the kitchen and the bathrooms?",
        a: "Only where acceptable terminals exist, and in the Suburb a programme needs several rather than one, which makes it a real question rather than a formality. The external appearance is protected by Barnet and separately by the Trust, so grilles punched through elevations are not casual extras. We establish what is acceptable at the visit and specify accordingly, including recirculation where that is the honest answer, before anything is ordered.",
      },
      {
        q: "Can the original joinery survive a whole-house programme?",
        a: "Yes, and keeping it is generally the right call. Original doors, architraves, ironmongery, windows and sometimes floors are part of why these houses are what they are, and replacements do not match. A programme touches far more of it than a single room does, so we identify what stays across the house, protect it properly, and make adaptations reversible. Where something genuinely cannot be kept, we say so before it comes off.",
      },
      {
        q: "Where will the skips and vehicles go for two months?",
        a: "Somewhere agreed before the first delivery, on surfaces that will take repeated loads, and not on greens or planted verges. Barnet issues the licence for a highway position; where the frontage is shared or private the arrangement may differ and it is checked rather than assumed. On a close with limited standing, waste sometimes leaves by van in loads throughout, which is slower and priced as such. [VERIFY.]",
      },
      {
        q: "Can the family stay through it?",
        a: "In a larger Suburb house, usually yes — there is often more than one wet room, so one stays in service, and enough separation that working rooms close off properly. In a cottage the work is present throughout and most clients decant. We agree the sequence before anything starts, tell you which weeks are genuinely disrupted, and give both versions with real numbers rather than encouraging an optimistic decision.",
      },
      {
        q: "What is excluded from this service here?",
        a: "Anything structural or external. Forming openings, removing walls, loft conversions, extensions and basement works sit with Hampstead Renovations. External redecoration, new windows, changes to hardstandings or anything else the street can see is a separate instruction with its own Trust and planning position. We write the boundary down before anything is ordered, because in the Suburb that line is sharper than almost anywhere else we work.",
      },
    ],
  },
  // AREAS-END
};
