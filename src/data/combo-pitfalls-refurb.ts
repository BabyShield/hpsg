import type { ComboPitfallsMap } from "./combo-extra";

/**
 * Light refurbishment: failure modes and a further question set, per area.
 * A programme fails on scope, sequence and consent far more often than on
 * workmanship, so these blocks stay on those three.
 */
export const refurbPitfalls: ComboPitfallsMap = {
  hampstead: {
    pitfalls: [
      "The failure that costs most on a village programme is a scope nobody wrote down. A refurbishment sits next to a hall, a landing and a cupboard, and a job that begins as two rooms quietly becomes half the flat without any figure changing to match. When the conversation eventually happens, it is an argument rather than a decision. The boundary goes in writing before anything is ordered, and genuine additions are repriced openly.",
      "The second is ordering against a consent that has not arrived. In a leasehold conversion a licence to alter runs to the freeholder's timetable, and a kitchen and bathroom delivered into a flat that is not cleared to start is stock standing in a shared hall while somebody takes a view. Nothing is ordered until the licence is in hand, and we would rather hold a date than lose a month.",
      "The third is treating the word refurbishment as elastic. Opening a wall between two village rooms, forming a kitchen-diner or altering the envelope is structural work, and taking that on under this heading means a project without the design, the consent or the contract it needs. We say at the first visit that it sits with Hampstead Renovations rather than discovering it at strip-out.",
    ],
    moreFaqs: [
      {
        q: "Can we add rooms to the programme once it has started?",
        a: "Sometimes, and it is repriced in writing rather than absorbed. Adding a room during first fix is often efficient because the trades and the protection are already there; adding one after decoration has started is not, because the room has to be re-opened and re-protected. We will tell you honestly which situation you are in, and what it costs, before we do it rather than afterwards.",
      },
      {
        q: "Who manages the trades on a programme?",
        a: "We do, and that is most of what you are buying. One programme, one point of contact and one account, with the electrician, the plumber, the tiler, the joiner and the decorator sequenced against each other rather than turning up when they can. Separate contractors sequencing themselves is how a finished bathroom gets opened again to run a cable somebody forgot.",
      },
      {
        q: "How are payments structured?",
        a: "Against defined stages set out in the proposal rather than as an open account, so you can see what has been reached before anything is due. Provisional items are only charged if and when they are instructed, at the figure given. We do not ask for large sums ahead of the work, and we would rather explain a stage than issue an invoice that needs interpreting.",
      },
      {
        q: "What if we want to use our own kitchen or bathroom supplier?",
        a: "That is common and it works, provided we see the specification before it is ordered. A showroom scheme drawn against a rectangle will not survive a village conversion's chimney breast, out-of-square returns and extract constraints, and a delivery that cannot make the stair is a lost week. We mark up what the room will take, and we say in writing what we can stand behind on goods we did not specify.",
      },
    ],
  },

  "west-hampstead": {
    pitfalls: [
      "The most common reason a conversion-flat programme slips is that the consent was started too late. A freeholder's licence to alter runs to somebody else's timetable, and where the flats hold the freehold between them it runs to three people's diaries. The build is predictable; the paperwork is not. It is started at the earliest possible point, and nothing is ordered against a consent that has not been granted.",
      "The second is doing the rooms separately and then wishing you had not. A kitchen this year and a bathroom in two years means paying twice for protection, strip-out, first fix and a decorating phase, living through it twice, and ending with a flat where the floors change at every doorway. Where both are going to happen anyway, doing them in one programme is materially cheaper and the result is coherent.",
      "The third is a household that decides to stay and then cannot. In a one- or two-bedroom conversion with one kitchen and one bathroom, phasing around a resident lengthens the programme, raises the figure and makes the weeks harder rather than easier. We put both versions in front of you with real numbers at the visit, so the decision is made before the programme is written.",
    ],
    moreFaqs: [
      {
        q: "How much cheaper is one programme than separate jobs?",
        a: "Enough to matter, and we would rather show you the two figures than assert it. The saving comes from the expensive parts happening once: one protection set-up, one strip-out, one first fix across every room, one delivery and skip plan, one decorating phase. In a conversion flat where the shared hall has to be protected for each visit, that duplication is a real cost rather than a theoretical one.",
      },
      {
        q: "Will the floors be level through the flat?",
        a: "Usually, and it is one of the strongest arguments for a programme. Conversion floors step between the main house and the rear return, and doing rooms separately means accepting thresholds nobody would choose. We take levels across the whole flat at the survey and say what it takes to run one finish through. It is ordinary work, priced as work, and it changes how the flat feels.",
      },
      {
        q: "Can we live somewhere else and leave you to it?",
        a: "Yes, and for a full programme in a flat this size it is usually the right answer. We agree key-holding and access formally, keep you updated at set points, and hold decisions that genuinely need you. Empty, the work runs continuously and the strip-out is far faster. The neighbours and the freeholder are dealt with in the usual way rather than left for you to manage remotely.",
      },
      {
        q: "What do you do about the neighbours over two months?",
        a: "Give them the shape of the job at the start rather than a vague warning, name the loud weeks rather than the loud days, and keep the shared hall clear every evening for the whole programme rather than the first fortnight. In a house of three flats a refurbishment tests a neighbour relationship in a way a single kitchen does not, and that consistency is what keeps it civil.",
      },
    ],
  },

  "belsize-park": {
    pitfalls: [
      "The scheduling failure that shows permanently in a tall flat is doing overhead work last. Once units are in and furniture is back, bringing platforms into a four-metre room is disruptive and usually skimped, so the ceiling and cornice joints stay visible for years. In a Belsize programme, everything at height is prepared and finished across the flat before the rooms are fitted out, and that sequence is not negotiable.",
      "The second is ordering before an alteration pack is granted. On the avenues a managing agent works to the building's timetable, and a programme's worth of material delivered into a flat that has not been cleared to start is a problem the porter will solve in a way you will not enjoy. Nothing is ordered here until the licence is in hand.",
      "The third is building over somebody else's improvisation. Belsize flats have usually been altered more than once, and a spur off a spur, a capped waste left live behind a cupboard or a floor packed level with offcuts is invisible until strip-out. A programme is the one chance to resolve those properly; covering them means a newly refurbished flat inherits an old fault.",
    ],
    moreFaqs: [
      {
        q: "Should we start the licence before the design is finished?",
        a: "Yes, and in a managed avenue block you should. The pack needs drawings of what changes — services, wastes, extract, anything fixed to the structure — rather than a door finish or a tile, so the application can run while the visible specification is still being decided. Starting early is the single most useful thing a client here can do, because consent is what sets the calendar.",
      },
      {
        q: "Can the flat be refurbished while we live in it?",
        a: "In an avenue mansion flat with a second wet room, sometimes; in a Village conversion with one kitchen and one bathroom, not realistically. Phasing lengthens the programme and raises the figure rather than saving anything, and the building's tolerance for a resident living through weeks of work is not unlimited. We put both versions in front of you at the visit with real numbers.",
      },
      {
        q: "How do you keep a programme moving in a building with strict hours?",
        a: "By planning to the real hours rather than the lease's generous version, and by sequencing so the quiet trades fill the time the loud ones cannot use. Restricted hours lengthen the calendar without changing the work, and we say that at the proposal stage rather than promising a date the building will not allow. Being stopped in week three is far worse than starting with an honest programme.",
      },
      {
        q: "What happens to the common parts over two months?",
        a: "They are protected to the building's standard from the first day and maintained rather than laid out once, because a lobby that carries a programme's worth of traffic will wear. At handover the protection comes out, the surfaces are inspected with the porter and anything that was marked before we started was photographed on day one. That protects everybody rather than just us.",
      },
    ],
  },

  "st-johns-wood": {
    pitfalls: [
      "The programme that stalls in NW8 is the one where consent was treated as a formality. Licence applications here frequently take longer than the building work, and a refurbishment planned on an optimistic lead-in produces a vacant flat, a booked team and nothing that can lawfully start. The pack is prepared properly and started early, and dates are written against the consent rather than against hope.",
      "The second is planning around a skip that does not exist. Most of these blocks will not take one, so a programme's worth of waste leaves in booked van loads throughout on the building's timetable. A schedule built on a skip stalls with stripped rooms and a hall full of material, and the difference in cost and time is substantial and entirely predictable.",
      "The third is leaving acoustic isolation out because it cannot be seen. New hard floors and refitted wet rooms above a neighbour in a managed block will generate a complaint that reaches the managing agent, and the remedy means lifting floors that were finished weeks earlier. It is cheap at specification and effectively impossible to retrofit, which is why we raise it before the order.",
    ],
    moreFaqs: [
      {
        q: "How early should we start the licence process?",
        a: "Before almost anything else. In NW8 the consent stage frequently exceeds the build in duration, and it runs to the building's timetable rather than yours. We prepare drawings, a method statement, insurance evidence and contractor details as soon as the scope is clear, which is usually well before the visible specification is settled. Starting it late is the commonest reason a programme here misses a date.",
      },
      {
        q: "Can a refurbishment be done between tenancies?",
        a: "The build, yes, and it is much the better case: continuous working, faster strip-out and the option of spraying joinery. The consent is not affected by whether the flat is occupied, so the licence process runs to the same timetable either way. It is entirely possible to lose a vacant window waiting for approval, which is why we would start that before the tenancy ends rather than after.",
      },
      {
        q: "Who deals with the managing agent during the work?",
        a: "We do, for the day-to-day: protection, hours, lift bookings, deliveries, removals and any questions the porter raises. You remain the leaseholder and the consent is granted to you, so anything that changes the licence position comes back to you rather than being agreed on your behalf. The intention is that you are not fielding calls about a lobby floor while you are at work.",
      },
      {
        q: "What is the difference between this and a full renovation?",
        a: "This service keeps the carcass. Kitchen, bathrooms, floors, joinery, decoration and the services those rooms need, within the plan that exists. A full renovation that moves walls, changes the plan or alters the structure is a different class of project with different design, different consent and a different contract, and it sits with Hampstead Renovations. We separate the two at the first visit.",
      },
    ],
  },

  "maida-vale": {
    pitfalls: [
      "The logistical failure that undoes a W9 programme is planning it as though the lift were available. Over two months, crew, materials, waste and access equipment go up and down the stairs every working day, and a schedule that assumed otherwise loses time daily rather than once. The lift is checked and the porter's rules established at the survey, and the labour that follows is priced honestly rather than absorbed.",
      "The second is deciding floor finishes room by room. Level finishes throughout need depth for the new floor, any acoustic isolation and the waste runs, all above a shallow timber structure, and deciding that as each room comes up is exactly how a flat ends up with a step at three doorways. The depth is measured across the whole demise before design.",
      "The third is omitting the acoustic work because it is invisible. These blocks transmit impact noise efficiently, and a refurbished flat with new hard floors above a neighbour's living space will be heard. Isolation goes under the tile and the finish, at the perimeter and at the penetrations, or it does not go in at all — lifting a finished floor to add it is not a realistic option.",
    ],
    moreFaqs: [
      {
        q: "Can the whole flat be done in one go?",
        a: "Usually, and in a corridor-plan flat it is the sensible approach. Rooms open off a single hall, so the work can move along it in sequence, and the first fix for every room happens once. The corridor itself is decorated last, when the traffic through it has stopped. We agree the sequence at the visit, because in a flat this shape it is the programme rather than a detail.",
      },
      {
        q: "How many skip periods will we need?",
        a: "Probably none, because most of these blocks will not take a skip. Waste leaves in booked van loads through the programme, phase by phase, to whatever window the porter allows. That is slower and more expensive than a skip and it is named in the proposal rather than folded into a rate. Part-loads standing in a Maida Vale lobby are exactly what stops a job.",
      },
      {
        q: "Will the neighbours be affected for the whole programme?",
        a: "They will hear the loud phases, which are weeks rather than the whole job, and they will notice the sustained presence on the stair. We name the loud weeks in advance, work the hours the building actually keeps, and keep the porter informed so questions come to us. The acoustic work also means the finished flat is quieter for the flat below than the one it replaced.",
      },
      {
        q: "Can the original plan be improved without altering it?",
        a: "Usually more than people expect. Within the existing rooms you can change layouts, build in storage where there was none, improve lighting and circulation, and replace services that were never designed for modern use. What this service does not do is move the walls. In these flats the plan is generally sound, and the gains are in how the rooms work rather than in where they are.",
      },
    ],
  },

  "swiss-cottage": {
    pitfalls: [
      "The mistake here is applying one set of assumptions across three building types. A programme designed for an inter-war block on Avenue Road — planned riser, true walls, formal licence process — dropped into a Victorian house a street back will meet a rear stack, settled fabric and a freeholder's letter instead, and the specification and the calendar both have to change. The building type is established before anything is drawn.",
      "The second is assuming the riser will accept both wet rooms. A closed riser pushes wastes across a floor above a neighbour, with the consent that implies, and finding that out after layouts are drawn means redesigning twice. It is a written question to the managing agent at the survey rather than an optimistic assumption.",
      "The third is underestimating what ninety years of alteration has left behind. In blocks that have been changed flat by flat since they were built, the boxing tells you nothing about what is inside it, and a programme priced without provisional items will move. Those items are listed across the whole demise and resolved with you at first fix rather than absorbed quietly.",
    ],
    moreFaqs: [
      {
        q: "Does being near your office help on a long programme?",
        a: "More than on a single job. Refurbishments lose time at the joins between trades — a missing component on a tanking day, a template query, a delivery that needs checking against the room before it is accepted. Being a short distance from 250 Finchley Road turns those into the same afternoon rather than a rescheduled week. The specification and the standard are identical wherever the address is.",
      },
      {
        q: "Can you handle a programme in a flat above a shop?",
        a: "Yes, with two things settled first: how the route in works and who is underneath. Access is often a narrow side door and a steep stair rather than a lobby, which shapes every delivery over two months, and the floor construction over a commercial unit differs from one over a flat. The tenant's trading hours become part of the working-hours plan and sometimes help considerably.",
      },
      {
        q: "How do you decide what counts as a provisional item?",
        a: "Anything we genuinely cannot establish without opening up: wiring behind boxing, the condition of a subfloor, whether a waste falls correctly. Each is described and given a figure in the proposal, and it is only charged if it is instructed once the walls are open. That is more honest than a single lump sum that quietly absorbs them, and more honest than a low figure that rises in week two.",
      },
      {
        q: "Can the programme be split across two budget years?",
        a: "It can, and it costs more overall, so it should be a deliberate choice rather than a default. Each phase needs its own set-up, protection and reinstatement, and specifications decided months apart tend to drift. Where staging is the right answer, we would sequence it so the first phase leaves the flat fully usable and record the specification carefully so the second matches rather than approximates.",
      },
    ],
  },

  "primrose-hill": {
    pitfalls: [
      "The failure that wastes the most on a split-house programme is building over moisture. A lower-ground floor refurbished without establishing why it is damp looks finished for a year, then the problem reappears behind new work that has to come out to reach it. It is investigated at the survey and reported plainly, even where the honest answer is that the space needs work which is not this service.",
      "The second is designing two wet rooms before measuring the drainage. In a split house both the kitchen and the bathroom can be a long way from the drainage the building uses, and a run laid at whatever gradient was convenient behaves acceptably in summer and reveals itself in winter. Both runs are measured before layouts are drawn, and the fittings follow the fall rather than the sketch.",
      "The third is scheduling a programme without looking at the weekly rhythm of the street. Narrow roads near the park fill with visitors at weekends, and a refurbishment that needs many deliveries and several skip exchanges over two months will lose days if those are not booked midweek. It is a small planning matter that becomes a real cost when it is left to chance.",
    ],
    moreFaqs: [
      {
        q: "Can the lower ground floor be included?",
        a: "Provided it is dry, yes, and that is established first. If moisture is moving through the structure, a refurbishment carried out over it buries the problem behind new work, which in a programme is far worse than in a single room. We investigate at the survey and report what we find. Where remedial work is needed that is outside this service, we say so rather than proceeding.",
      },
      {
        q: "Will a pump be needed for the drainage?",
        a: "Only where gravity genuinely will not do it, and in a split house that is a real possibility for one of the wet rooms. A pump is legitimate and it brings power, noise and servicing with it, so we would rather move a fitting to where the fall exists. Where one is unavoidable it is specified openly, positioned thoughtfully and explained before it is installed.",
      },
      {
        q: "Can the joinery be brought to one standard across the house?",
        a: "Yes, and it is one of the strongest arguments for doing the house as a programme. Sashes, shutters, panelled doors and skirtings handled room by room over several years end up with different systems and different sheens, which is what makes a house look part-finished. Done together, one specification runs through and the shutters are dealt with properly rather than painted shut.",
      },
      {
        q: "Do the neighbours need to be told?",
        a: "Yes, and we tell them rather than leaving it to you. A refurbishment is a sustained presence rather than an event, and in a terrace this close together the households either side will notice it for two months. They get the shape of the job at the start and the loud weeks named. We also keep vehicles off the street at weekends where the programme allows.",
      },
    ],
  },

  highgate: {
    pitfalls: [
      "The administrative failure that costs weeks here is applying to the wrong borough, repeatedly. A programme needs several skip periods rather than one, and Camden, Haringey and Islington each hold parts of these hills with their own applications, fees and timescales. Getting it wrong once is a lost week; getting it wrong as a habit is a lost month. The authority is confirmed from the address before the first application.",
      "The second is designing two wet rooms before measuring the fall. Villas here place kitchens and bathrooms a long way from the stack, and a programme means several connections rather than one. A run laid at whatever gradient the floor allowed will drain poorly from the start, and by then the layouts above it are fixed. The gradients are measured first and the fittings follow them.",
      "The third is letting a programme touch listed fabric it should not. A refurbishment reaches far more of a house than a single-room job, so the distinction between original material and later work has to be made in every room rather than once. Fixing into original panelling or chasing historic plaster because it was convenient turns a refurbishment into an enforcement matter.",
    ],
    moreFaqs: [
      {
        q: "Can a listed house be refurbished under this service?",
        a: "The interior fit-out, in most cases. Kitchen, bathrooms, floors, joinery, decoration and the services those rooms need are ordinary work in a listed house and it is much of what we do here. What is not this service is anything that alters the building — forming openings, changing the plan, altering the elevation — which is structural and a consent question. We check the listing and separate the two at the visit.",
      },
      {
        q: "How do deliveries work on a steep road over two months?",
        a: "Planned rather than repeated hopefully. We establish at the survey where vehicles can stand safely on the gradient, how far material travels on foot, and whether transferring to a smaller van should be a standing arrangement rather than an occasional one. Skip exchanges are positioned for safe loading rather than proximity, which sometimes means a longer carry and always means the delivery actually happens.",
      },
      {
        q: "Do protected trees affect an internal programme?",
        a: "They can, because a programme puts vehicles, materials and skips on the ground repeatedly for two months. Standing on roots, stacking within a tree's protection area or placing a skip on a verge can breach a preservation order or a conservation-area notice regardless of the work being indoors. We check with the correct borough and fix the positions before the first delivery. [VERIFY.]",
      },
      {
        q: "Can we stay in the house?",
        a: "More often here than in the conversion stock, because these houses are larger and frequently have a second bathroom that can stay in service. Village houses are tighter and a listed interior needs a larger protected area, which makes living around the work less comfortable. We give both versions with the figures at the visit and show you at the survey what the protected area will look like.",
      },
    ],
  },

  "golders-green": {
    pitfalls: [
      "The failure specific to a whole-house programme is scope drift. A family house has a utility, a cloakroom, a hall and a landing next to everything in scope, and a job that starts as a kitchen and two bathrooms quietly becomes most of the ground floor without any figure changing. The boundary is written down before anything is ordered, and where the scope genuinely should grow, it is repriced openly rather than absorbed.",
      "The second is sequencing that leaves a family with nowhere to wash. With two or three wet rooms in scope, doing them simultaneously to save time means a fortnight with no bathroom, which is exactly the thing that makes a household lose patience with an otherwise good job. The order is agreed before anything is ordered so one room is always in service.",
      "The third is ignoring the junction with the earlier rear addition. It runs through the kitchen, the floors and sometimes a bathroom, and the two halves sit at different levels and move differently. Resolving it once, properly, with levelling, support and movement detailing is ordinary work. Ignored, it produces a dip in a long worktop and a crack in a tiled floor in three separate places.",
    ],
    moreFaqs: [
      {
        q: "Can the family stay through a whole-house programme?",
        a: "More often here than anywhere else we work. There is usually a second bathroom that can be kept in service, a reception room that will take a temporary kitchen, and enough separation that working rooms close off properly. We agree the sequence before anything starts so the fully disrupted periods are as few and as concentrated as the work allows, and we tell you which weeks those are.",
      },
      {
        q: "Is it cheaper to do everything at once?",
        a: "Meaningfully, yes, where the rooms are going to be done within a few years anyway. Protection, strip-out, first fix, deliveries and the decorating phase all happen once rather than three times, and the house ends up finished to one standard rather than in instalments from different decades. We would rather show you both figures at the visit than assert it, because the difference is easy to demonstrate.",
      },
      {
        q: "What happens about the drive during the work?",
        a: "It becomes the single biggest practical advantage you have, and it is worth protecting. Deliveries come to the door and the skip usually stands on your own property rather than needing a licensed street position, which removes the licence sequence entirely. We look at the surface at the survey, because a loaded lorry repeatedly on decorative block paving can leave marks that cost more than the licences would have.",
      },
      {
        q: "How do you handle the textured ceilings?",
        a: "As a decision rather than an obstacle, room by room: overcoat, skim over, or remove. Removal is the messiest operation in this kind of work and should be chosen knowingly rather than by default. Older textured coatings may need specialist assessment before they are disturbed at all, and we would establish that before anything is done to them. [VERIFY the material.]",
      },
    ],
  },

  "queens-park": {
    pitfalls: [
      "The failure that shows in a small house is a programme designed from wall lengths rather than from how the rooms are used. A kitchen and bathroom that measure correctly on paper can produce a house where the oven door fouls the dishwasher and the bathroom door will not clear a basin. In a cottage fifty millimetres decides whether a room works, and that comes from walking it rather than drawing it.",
      "The second is a licence sequence applied for from the wrong council. A programme needs several skip periods, and Brent and Westminster both hold streets here with no marking on the ground. One wrong application is a lost week; making it a habit across a programme is a lost month. The borough is confirmed from the address before the first application.",
      "The third is damage to the tiled path. Over two months a programme sends far more traffic across it than any single job, and these paths chip under point loads rather than footfall. Boarding the route for the duration, maintaining it and carrying rather than wheeling prevents the problem entirely. A broken original tile is difficult to match and never quite looks right afterwards.",
    ],
    moreFaqs: [
      {
        q: "Should we move out for a cottage programme?",
        a: "We would generally advise it. The house is small enough that the work is present everywhere rather than tucked away, and with one kitchen and one bathroom in scope there is nowhere to retreat to. Phasing around a household lengthens the job, raises the figure and extends the discomfort rather than reducing it. We put both versions in front of you with real numbers at the visit.",
      },
      {
        q: "Can the original joinery be brought to one standard?",
        a: "Yes, and a programme is the moment to do it. Doors, architraves and skirtings handled room by room over years end up with different systems and sheens, which is what makes a small house look part-finished. Taking the principal elements back to a sound base across the house is slow, careful work and far cheaper done once than piecemeal. We say which elements justify it.",
      },
      {
        q: "Will the house feel bigger afterwards?",
        a: "It can feel considerably better used without a single wall moving. One floor finish running through the ground floor instead of three, doors that swing the right way, storage built where there was none, and lighting designed rather than inherited. Those are the gains a light refurbishment delivers in a cottage. Removing a wall is a different service and it sits with Hampstead Renovations.",
      },
      {
        q: "How do we keep the neighbours on side for two months?",
        a: "By telling them, which we do rather than leaving it to you. They get the shape of the job at the start, the loud weeks named and the skip days in advance, and we keep the frontage and the path clear throughout rather than only while we are still being careful. In a street where everybody knows everybody, that consistency over two months is what is remembered.",
      },
    ],
  },

  "muswell-hill": {
    pitfalls: [
      "The element most often missing from a whole-house figure here is the joinery. Panelled doors on three floors, deep skirtings, picture rails, a staircase with balusters and timber sashes throughout are the majority of the labour rather than a finishing detail, and a programme priced from room areas will be wrong. It is counted at the survey because it determines both the figure and the length of the disruption.",
      "The second is leaving the sashes until afterwards. Repairing cords, beads, putty or a sill while rooms are open and the finishes are not yet in is far cheaper and less disruptive than working around new decoration a year later. A programme is the natural moment, and treating window repair as a separate future job usually means it never happens at all.",
      "The third is squeezing the stairwell between rooms. It is a two-storey void seen from every landing, it needs proper access equipment, and while that equipment is up the stairs are compromised for the whole household. Worked as a concentrated phase it is done once and properly; fitted around bedrooms it is done badly and the result is what everyone looks at.",
    ],
    moreFaqs: [
      {
        q: "Should the windows be dealt with in the programme?",
        a: "If they need work, yes, and this is the moment. Repairing cords, beads, putty or a sill while the rooms are open is considerably cheaper and less disruptive than doing it once new finishes are in. It is joinery, quoted separately and honestly, and it is your decision whether it goes into scope. We tell you plainly at the survey which windows need more than paint.",
      },
      {
        q: "Can the family stay?",
        a: "Usually, in these houses. There is generally a second bathroom that can stay in service, space for a temporary kitchen, and enough separation that working rooms close off properly, and the wide halls keep the covered route from becoming a bottleneck. We agree the sequence before anything starts and keep the fully disrupted periods concentrated rather than spread across two months.",
      },
      {
        q: "How long will a whole-house programme take?",
        a: "Months rather than weeks, and the shape matters more than the number. The lead-in is short for a single-family house with no licence to alter. On site, the fixed points are the wet room sequences with their cure times and the worktop template, and the stairwell phase has to sit where it does not block the household. We write dates after walking every room.",
      },
      {
        q: "Will deliveries be a problem on our street?",
        a: "Over two months the question recurs rather than arising once, which is why it is planned. Some of these streets are steep with limited turning, so we establish at the survey whether a transfer to a smaller van should be a standing arrangement and keep drops and skip exchanges away from the school run. Once at the door, the wide halls make everything after that straightforward.",
      },
    ],
  },

  "crouch-end": {
    pitfalls: [
      "The failure that undoes a conversion-flat programme is a floor nobody investigated. Rear rooms in these houses have been altered and re-floored, often more than once, and notched joists, patched boards and a step where a partition stood are all common. A programme that lays new finishes over that without correcting it produces cracked tile, a floor that bounces and thresholds nobody wanted. The levels and the structure are established at the survey.",
      "The second is doing the rooms separately. A kitchen now and a bathroom in two years means paying twice for protection, strip-out, first fix and a decorating phase, protecting the shared hall twice, and ending with a flat where the floor changes at every doorway. Where both are going to happen, one programme is materially cheaper and the result is coherent rather than assembled.",
      "The third is treating a shared hall as a first-week concern. A programme sends traffic across somebody else's tiled floor every working day for two months, and protection laid down once and forgotten will fail. It is boarded for the duration, maintained as it wears, photographed at the start and cleared every evening, because damage to a common part is a dispute rather than a snag.",
    ],
    moreFaqs: [
      {
        q: "Can a conversion flat really be brought to one standard?",
        a: "Yes, and it is the main reason to do it as a programme. Most flats in these houses have been improved a room at a time by successive owners, which is why the floors change at every doorway and the joinery is three different colours. Doing it together gives one floor finish, one joinery system and one set of decisions about how original detail meets later partitions. That coherence is what people notice.",
      },
      {
        q: "Do the other flats have to agree?",
        a: "Not to work inside your own demise, in most cases. Your lease governs what you may alter and the freeholder grants any licence, which for a programme touching services and wastes is usually required. Where the flats hold a share of the freehold between them, your neighbours are the freeholder and they sign formally. Either way they share the hall and will live through it. [VERIFY the lease.]",
      },
      {
        q: "How long will we be out of the flat?",
        a: "For a full programme with the kitchen and the only bathroom in scope, the whole of it, and we would recommend it rather than phasing. Phasing lengthens the job, raises the figure and extends the discomfort. We give you a defined period after surveying rather than a range, and we will tell you honestly if a date you need is achievable or what would have to change.",
      },
      {
        q: "What does one programme actually save?",
        a: "The expensive parts happening once: protection of the shared hall, strip-out, first fix across every room, the delivery and skip sequence, and the decorating phase. In a converted house where every visit means boarding a common tiled hall and giving two other households notice, that duplication is real money and real goodwill. We would rather show you the two figures than assert the saving.",
      },
    ],
  },

  "kentish-town": {
    pitfalls: [
      "The failure that costs most here is building a programme over moisture. Where any part is below ground, a refurbishment carried out without establishing why the space is damp buries the problem behind new work that has to be opened again to reach it. It is investigated at the survey and reported plainly, even where the honest answer is that the space needs work which is not this service.",
      "The second is pricing a much-altered building without provisional items. Circuits extended from spurs, wastes teed into older pipework and fans discharging into voids are common in this stock and none of it is recorded, so a figure that assumes everything is sound will move. Those items are named across the whole demise and resolved with you at first fix rather than absorbed.",
      "The third is a calendar built on hours nobody checked. Party walls here are thin and there may be several households within earshot for two months, so a programme that assumes full working days in a street where somebody works from home will be interrupted rather than merely resented. The real hours are established at the survey and the calendar lengthened honestly.",
    ],
    moreFaqs: [
      {
        q: "Can a converted workshop be refurbished without losing its character?",
        a: "Yes, and it is the right question to ask. Painted brick, exposed structure and industrial windows are what make these spaces worth having, and refurbishing one into a conventional flat usually loses that without gaining much. We give a view at the survey on which surfaces should stay as they are and which genuinely need lining out, and we make those decisions once for the whole space.",
      },
      {
        q: "How much of the services will be replaced?",
        a: "Within the rooms in scope, whatever is not fit to build onto, and in this stock that is a real question. We inspect at the consumer unit, test what we safely can, and list what cannot be established as a provisional item. A speculative whole-flat strip is not assumed or included unless you want it and it is genuinely warranted. New circuits are notified where the regulations require it.",
      },
      {
        q: "Can we stay in the flat?",
        a: "It depends on the flat and we will tell you straight. A rear-return conversion with separate rooms and a second wet room can sometimes be phased. A lower-ground flat with one kitchen and one bathroom cannot be phased sensibly, and dust from a below-ground strip-out rises through a building rather than staying put. We give both versions with real numbers at the visit.",
      },
      {
        q: "Where will the skips go over two months?",
        a: "On licensed positions on residential side streets, arranged as a sequence rather than one at a time, because a programme generates waste in several distinct phases. Kentish Town Road is a corridor rather than a loading bay, and the side streets are narrow with residents' bays on both sides, so positions are applied for in advance rather than found on the morning. [VERIFY the CPZ.]",
      },
    ],
  },

  kilburn: {
    pitfalls: [
      "The recurring Kilburn failure is a programme that assumed one building type. The stock runs from Victorian terrace conversions through mansion blocks to later panel construction, sometimes within a single flat, and fixings, floor build-ups, sound behaviour and consent all differ between them. A specification written for the wrong one produces work that has to be redone rather than merely adjusted.",
      "The second is a licence sequence applied for from the wrong borough. A programme needs several skip periods, and Camden and Brent both hold streets here with the High Road as the historic boundary. One wrong application is a week; making it a habit across two months is far more. The authority is confirmed from the address before the first application.",
      "The third is an informal arrangement about a shared or commercial route. An understanding reached at the door on day one will not survive two months of daily use, and a programme blocked out of its own access is stopped rather than delayed. Use of the route is agreed in writing with whoever controls it, and the protection is designed to last the job.",
    ],
    moreFaqs: [
      {
        q: "Can a full programme be done in a flat above a shop?",
        a: "Yes, with the route and the business settled first. Access is usually a narrow side door and a steep stair used every working day for two months, which shapes procurement as much as labour, and the tenant below sets what hours are tolerable — sometimes generously. We agree use of the route in writing rather than informally, and time deliveries so nothing blocks a shopfront during trading.",
      },
      {
        q: "Is a later block easier to refurbish than a conversion?",
        a: "In some respects. The walls tend to be true, there may be a documented riser and the rooms are plainer, which suits a straightforward specification. What can be harder is that these buildings have been altered repeatedly with no record, and sound transfers efficiently downward, so acoustic isolation is worth specifying. We survey the construction rather than assuming either type is simpler.",
      },
      {
        q: "What happens if you find something hazardous?",
        a: "Work stops in that area and we tell you immediately rather than continuing. Materials needing specialist assessment and, where required, licensed removal are not something we would disturb or work around. In buildings spanning this range of dates it is a possibility worth knowing about, which is why suspicious material is treated cautiously rather than optimistically. [VERIFY the material.]",
      },
      {
        q: "Can the flat be refurbished while it is let?",
        a: "Only with the tenant's agreement, and usually it is better done between tenancies. A programme leaves a flat without a kitchen and a bathroom for a defined period, and in a small flat above a shop there is nowhere for a tenant to retreat to. Empty, the work runs continuously and the strip-out is much faster. We would say so rather than take an instruction that will generate a dispute.",
      },
    ],
  },

  "hampstead-garden-suburb": {
    pitfalls: [
      "The mistake that causes most difficulty here is letting an external question hold up an internal programme. Interior work generally needs no consent; a new extract terminal, a window or anything else the street can see needs Barnet, the Trust, or both, on their own timetables. Separated at the outset, the internal job runs. Bundled together, a kitchen waits on an application that had nothing to do with it.",
      "The second is losing original material in a strip-out. What comes out is usually the third or fourth fit-out the rooms have had, and across a whole-house programme it is easy for an original door, a piece of ironmongery or a section of board floor to go into a skip because nobody identified it first. What stays is marked before anything is lifted, and those decisions are taken with you.",
      "The third is treating a close like a street. Planted verges and shared frontages will not carry a programme's worth of vehicles, materials and skips, and damage to a green is a Trust conversation that outlasts the refurbishment by a long way. Standing and storage positions are agreed before the first delivery and anything material crosses is boarded.",
    ],
    moreFaqs: [
      {
        q: "Will the Trust need to approve a whole-house refurbishment?",
        a: "The interior of it, normally not. The Scheme of Management, Barnet planning and the Article 4 direction are concerned with the appearance of the property and its setting rather than with your kitchen, bathrooms, floors or decoration. The line is crossed by anything visible from outside, which in a programme means the extract terminals above all. We separate the two at the visit. [VERIFY the current Trust guidelines.]",
      },
      {
        q: "Can the interior be brought to one standard?",
        a: "Yes, and in these houses it is particularly worth doing. One joinery system and sheen throughout, a floor finish that suits original boards where they survive, and the wet rooms specified as a set. These houses were designed as compositions, and refurbishing them a room at a time over a decade is exactly what erodes that. A programme is the chance to make the decisions once.",
      },
      {
        q: "Can the family stay through it?",
        a: "In a larger Suburb house, usually — there is often more than one wet room so one stays in service, and enough separation that working rooms close off properly. In a cottage the work is present throughout and most clients decant. We agree the sequence before anything starts, tell you which weeks are genuinely disrupted, and give both versions with real numbers rather than encouraging optimism.",
      },
      {
        q: "Where will material and waste stand for two months?",
        a: "Somewhere agreed before the first delivery, on surfaces that will take repeated loads, and not on greens or planted verges. Barnet issues the licence for a highway position; where the frontage is shared or private the arrangement may differ and it is checked rather than assumed. On a close with limited standing, waste sometimes leaves by van in loads throughout, which is slower and priced as such. [VERIFY.]",
      },
    ],
  },
};
