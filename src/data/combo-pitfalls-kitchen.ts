import type { ComboPitfallsMap } from "./combo-extra";

/**
 * Kitchen renovation: failure modes and a further question set, per area.
 * Written after the main extra layer; kept separate so the files stay a
 * workable size. Nothing here is shared between areas.
 */
export const kitchenPitfalls: ComboPitfallsMap = {
  hampstead: {
    pitfalls: [
      "The commonest failure in a village kitchen is a layout drawn before anyone looked at the extract. A showroom plan puts the hob on the wall that suits the drawing, the survey then finds that the only route out is across a principal elevation Camden reads closely, and the whole run has to be redrawn with cabinets already ordered. Settling the terminal first costs an hour at the visit and saves a fortnight later.",
      "The second is a delivery that was never measured against the stair. Tall units and assembled carcasses defeat a dog-leg with a tight half-landing more often than people expect, and by the time the lorry is on a lane off Heath Street there is no good answer: the load goes back, the old kitchen is already out, and the programme loses a week waiting for flat-packed replacements. A tape measure at survey is the whole fix.",
      "The third is quieter and more expensive. Fitting cabinetry against lime plaster that is damp, blown or shedding, because the room looked acceptable with the old units in front of it, means the failure reappears from behind within a couple of winters. We strip back and look at what the wall is actually doing before anything is scribed to it, and we would rather report a problem than build a good kitchen onto it.",
    ],
    moreFaqs: [
      {
        q: "Can you work with a kitchen designer we have already engaged?",
        a: "Yes, and it works best when we see the drawings before anything is ordered. A designer working from a plan rather than from the room will usually assume square walls, an available extract route and a delivery that can reach the flat, and in a Hampstead conversion none of those is safe. We survey, mark up what the building will actually take, and the design comes back better rather than compromised.",
      },
      {
        q: "What happens if you find something unexpected behind the old kitchen?",
        a: "It goes on the list of provisional items, priced and discussed with you rather than absorbed quietly or sprung as an extra. Wiring of unknown vintage, a waste that falls the wrong way and damp behind a run of units are the three most common finds in this stock. We photograph what we find, explain the options, and you decide before we proceed rather than after.",
      },
      {
        q: "Do you take the old kitchen away, or do we?",
        a: "We do, and it is in the proposal. Strip-out waste from a village flat is bagged at the room, carried down the protected route and removed to a licensed skip position or by van in stages where no position exists. Appliances that are still serviceable can be set aside for you to sell or give away if you say so before the strip-out day rather than after it.",
      },
      {
        q: "Will the kitchen still look right in ten years?",
        a: "That depends more on what is behind it than on the doors. A run scribed properly to a settled wall, cabinetry on a floor that was levelled rather than packed, and drawer boxes and hinges specified for daily use will still be working long after a fashionable finish has dated. We would rather spend on mechanisms and preparation than on decorative detail, and we say so at the visit.",
      },
    ],
  },

  "west-hampstead": {
    pitfalls: [
      "Rear-return kitchens fail most often at the waste. A machine is placed where the plan wants it, the run to the stack turns out to have almost no fall, and the result drains slowly from the first week and blocks by the second winter. In a conversion that pipework is frequently shared with the flat above, so the fix is neither quick nor private. The gradient is measured at survey precisely so the layout is built around it.",
      "The second is a worktop nobody measured a route for. A single slab that cannot pass a Victorian front door and a hall turn has to be cut on site, craned, or replaced with a jointed version, and by then the template has been taken and the fabricator has been paid. Establishing what can physically reach the room before the material is chosen is a five-minute conversation that saves an expensive one.",
      "The third is the neighbour relationship, which is the thing people notice for years afterwards. A strip-out staged in a shared hall, a skip that arrives without notice, or noisy work on a day nobody warned anyone about turns a routine kitchen into a standing grievance in a house of three flats. Protection down the full route, dates given in advance and the hall cleared every evening prevent almost all of it.",
    ],
    moreFaqs: [
      {
        q: "Our kitchen units came from a showroom. Will you still fit them?",
        a: "Yes, and we ask to see the plan and the schedule before it is ordered. Showroom layouts are drawn against a rectangle and a rear return is not one: the party wall bows, the door swings into the run and the extract cannot go where the drawing assumes. We mark up what the room will take. Where we fit a kitchen we did not specify, we say in writing what we can stand behind.",
      },
      {
        q: "Can you sequence the work so we are not without a sink for long?",
        a: "To a point. The sink comes out with the old units and comes back at second fix, and the fixed pause between worktop template and fabrication sits in the middle of that. What we can do is set up a temporary point on day one, keep the room in service until the strip-out morning, and concentrate the fully unusable days rather than spreading them. We give you the number after measuring.",
      },
      {
        q: "Who tells the other households in the house?",
        a: "We do, and we would rather do it than leave it to you. They get the dates of the noisy weeks, the skip day and the shape of the job before anything starts, in writing where a freeholder or managing agent is involved. It costs nothing, and a neighbour who knows which Tuesday is the loud one is a neighbour who plans around it rather than one who complains about it.",
      },
      {
        q: "What is the most common thing that delays a kitchen here?",
        a: "The consent, not the building. A freeholder's licence to alter in a converted house runs to somebody else's timetable, and where the flats hold the freehold between them it runs to three people's. The build is predictable; the paperwork is not. We start that process at the earliest possible point and we do not order against a consent that has not arrived.",
      },
    ],
  },

  "belsize-park": {
    pitfalls: [
      "The recurring failure on the avenues is ordering against a consent that has not been granted. A managing agent's alteration pack runs to the building's timetable rather than yours, and a kitchen delivered into a flat that has not been cleared to start it is a kitchen standing in a hall while a porter takes a view. Nothing is ordered here until the licence is in hand, and we would rather hold a start date than lose a month.",
      "The second is sequence. In a tall Belsize room, fitting a run of units and then discovering the ceiling still needs work overhead means access equipment coming back into a room that can no longer take it, and joints that stay visible for the life of the kitchen. Overhead work goes first. It sounds obvious and it is the single most common thing a rushed programme reverses.",
      "The third is the inherited alteration. Belsize kitchens are usually at least the second in the room, and what the previous fitter did — a spur off a spur, a capped waste left live behind a cupboard, a floor packed level with offcuts — is invisible until strip-out. Treating that as somebody else's problem and building over it is how a new kitchen inherits an old fault. We trace what we find and re-make it properly.",
    ],
    moreFaqs: [
      {
        q: "Can we start the licence application before we have chosen the kitchen?",
        a: "Yes, and in a managed avenue block you should. The pack needs drawings of what changes — services, wastes, extract, anything fixed to the structure — rather than a door finish, so the application can usually run while the visible specification is still being decided. Starting it early is the single most useful thing a client in this neighbourhood can do, because it is the stage that sets the calendar.",
      },
      {
        q: "What if the porter stops the work?",
        a: "That happens when the building's rules were not established or not followed, which is exactly what we collect in writing at survey: hours, lift bookings, protection standards, waste rules. Where we are working to an agreed method and an agreed licence, a porter has no reason to intervene. Where a genuine conflict arises, it is resolved with the managing agent rather than argued with on a landing.",
      },
      {
        q: "Is there any advantage to doing the kitchen and a bathroom together?",
        a: "In this stock, a substantial one. Both need first fix, both need deliveries negotiated through the same lift or stair, and both need the same protection and the same consent process. Doing them in one programme means all of that happens once rather than twice, and the flat ends up finished to one standard. We would say so at the visit if the bathroom is likely to follow within a few years.",
      },
      {
        q: "How do you keep dust out of a flat with four-metre ceilings?",
        a: "A screen built to the height rather than a sheet hung across a doorway, sealed at the head and the floor, with dust extracted at the tool during cutting and sanding. In a tall room a draped sheet does almost nothing because the air volume above it moves freely. It takes longer to install and it is the difference between a manageable programme and one that puts a film over every surface in the flat.",
      },
    ],
  },

  "st-johns-wood": {
    pitfalls: [
      "The defining failure in NW8 is designing before reading the pack. Managing agents here frequently restrict what may be fixed to the structure, how a floor may be penetrated and whether a waste may move at all, and a scheme drawn without that produces a licence application that is refused rather than delayed. We read the requirements first and draw a kitchen the building will consent to, which is a shorter route to the same result.",
      "The second is underestimating removal. Most of these blocks will not take a skip on the forecourt, so strip-out waste leaves in booked van loads on the building's timetable, and a programme planned around a skip that does not exist stalls with a stripped kitchen and a hall full of carcass. It is slower and more expensive than a skip and it is entirely predictable, which is why it is priced rather than discovered.",
      "The third is sound. A hard floor and a machine installed without isolation above a neighbour's bedroom generates a complaint that reaches the managing agent rather than you, and retrofitting the fix means taking the kitchen floor up again. Acoustic matting and a considered appliance position cost very little at specification and cannot sensibly be added later, which is why we raise them before the order rather than after.",
    ],
    moreFaqs: [
      {
        q: "Our building wants a method statement. Do you provide one?",
        a: "Yes, as part of the licence pack, and it is written for your building rather than pulled off a shelf. It sets out the sequence, the protection of the common parts, working hours, waste removal, how services are isolated and who is on site. Agents in NW8 read these properly, and a generic document is one of the more common reasons an application comes back with questions attached.",
      },
      {
        q: "Can work be done while the flat is let?",
        a: "Only with the tenant's agreement and usually not well. A kitchen fit-out leaves a flat without a kitchen for a defined period, and a tenancy that continues through it is a source of disputes rather than savings. Between tenancies is far better: continuous working, faster strip-out, and the option of spraying joinery. In NW8 the licence lead-in often exceeds the build, so start it before the tenancy ends.",
      },
      {
        q: "What happens to the protection of the common parts at the end?",
        a: "It comes out at handover and the surfaces underneath are inspected with the porter or the agent, not just with you. Anything that was marked before we started was photographed on day one, which protects everybody. Removing protection carefully matters as much as installing it: a lobby floor scratched while the boards come up is a poor way to finish an otherwise clean job.",
      },
      {
        q: "Do you handle the appliance deliveries as well?",
        a: "Where you want us to, yes, and in a managed block it is usually better that we do. Appliance deliveries arrive to their own schedule, frequently outside the building's permitted hours, and a driver who has not been told about lift bookings and lobby rules will be turned away. Co-ordinating them into the programme avoids a machine standing in a corridor or going back to a depot.",
      },
    ],
  },

  "maida-vale": {
    pitfalls: [
      "The recurring W9 failure is ordering an item that cannot reach the flat. Lifts in these blocks are small and often barred to goods, so a range cooker, a tall larder or a single-piece worktop that has not been measured against the stair and its half-landing turns is a delivery that goes back — usually with the old kitchen already out. Measuring the route against the actual items before ordering prevents all of it.",
      "The second is a waste run designed for a floor depth that does not exist. These are timber intermediate floors over somebody else's ceiling, and a layout that needs fall the build-up cannot give produces a machine that drains sluggishly and a floor that has to be opened again. We take the depth at the survey and set the appliance positions from it rather than the other way round.",
      "The third is noise. A hard floor and a machine standing directly on it above a neighbour's living room is heard clearly, and in a building with a porter that becomes a complaint rather than a private irritation. An acoustic mat and a considered position for anything that runs at night cost almost nothing at order and are impossible to add afterwards without lifting the new floor.",
    ],
    moreFaqs: [
      {
        q: "Can the kitchen be moved to a different room in the flat?",
        a: "Rarely, and it is worth saying plainly. The original plan puts the kitchen at the back for good reasons: that is where the duct and the drainage are. Moving it means taking waste across a floor above a neighbour, finding fall a shallow timber build-up may not give, and getting a further consent. It is usually a different class of project, and we would say so at the visit rather than draw it.",
      },
      {
        q: "How many deliveries will there be, and when?",
        a: "Several, staged so each one can be carried up in a single session within whatever window the porter allows. Cabinetry, appliances, worktop and finishing materials arrive at different points in the programme rather than together, because a flat cannot store a whole kitchen and a Maida Vale lobby certainly cannot. The schedule is written at the survey and given to you and to the porter.",
      },
      {
        q: "Do you need access to the flat below?",
        a: "Not normally, and we would tell you at the survey if we thought we might. The occasions it arises are a waste connection that turns out to be defective in the ceiling void, or a leak traced during works. Where access is needed it is requested formally through the managing agent rather than by knocking on a door, and it is not something we would spring on a neighbour mid-programme.",
      },
      {
        q: "Is it worth replacing the kitchen in a flat we let out?",
        a: "That is your commercial judgement rather than ours, but the practical point is that a compact mansion-flat kitchen re-fitted properly, on the plan that exists, with durable surfaces and good mechanisms, tends to last through several tenancies. What does not last is a cheap fit-out in a room with a difficult waste and a small lift, because every problem recurs. We price what the room actually needs.",
      },
    ],
  },

  "swiss-cottage": {
    pitfalls: [
      "The failure particular to this neighbourhood is applying one set of assumptions to three different building types. A scheme that suits an inter-war block on Avenue Road — true walls, tight shadow gaps, a planned riser — put into a Victorian house a street back will not fit, will not hold its tolerances, and will need a first fix the building was never going to allow. We establish the building type before anything is drawn.",
      "The second is a delivery attempted from Finchley Road. It is a bus corridor with a station on it, and a timed loading operation there is fragile: one delay and the slot is gone, with a kitchen on a lorry and nowhere to put it. Licensing a side-street position and accepting a longer carry is slower on paper and far more reliable in practice, and it is the method we would choose every time.",
      "The third is assuming the riser is available. In the purpose-built blocks a planned duct makes a first fix quick and clean, but some managing agents keep their risers closed, and finding that out after a layout is drawn means redesigning around a waste that has to cross a floor. It is a written question for the agent at the survey rather than an optimistic assumption on site.",
    ],
    moreFaqs: [
      {
        q: "Can you visit quickly if something goes wrong on site?",
        a: "Yes, and being at 250 Finchley Road in this neighbourhood is the practical reason. A missing fixing on the morning cabinets are being set, a template query, a delivery that needs checking against the room before it is accepted — these are the small failures that cost a day each if somebody has to travel. It does not change the kitchen; it shortens the gaps between trades.",
      },
      {
        q: "Our block was built in the 1930s. Will the electrics need replacing?",
        a: "Within the kitchen, quite possibly, and it is assessed rather than assumed. Flats of this age have usually been rewired at least once and then extended piecemeal, so what serves the kitchen may be sound, may be a spur off a spur, or may be a mixture. We inspect at the consumer unit, test what we can, and list what cannot be established as a provisional item. New circuits are notified where the regulations require it.",
      },
      {
        q: "There is a shop below us. Does that limit the kitchen?",
        a: "It shapes two things. The floor construction over a commercial unit differs from one over a flat, which affects fixings and sound, and the extract route has to terminate somewhere that will not sit next to a neighbouring tenant's intake. Their trading hours also enter the working-hours plan, sometimes helpfully. We survey the route and establish who owns it before dates are offered.",
      },
      {
        q: "How do you decide between a ducted and a recirculating hood?",
        a: "By what the building will actually accept, not by preference. A duct to a terminal the elevation and any conservation-area designation will take is the better answer where it exists. Where the only honest route lands on a protected elevation, on a neighbour's window, or nowhere at all, we specify recirculation with a carbon filter and say why before the hood is chosen rather than ducting into a void.",
      },
    ],
  },

  "primrose-hill": {
    pitfalls: [
      "A lower-ground kitchen fitted over an unresolved damp problem is the classic failure here, and it is expensive in a particular way: the room looks finished for a year, then blistering appears at the foot of a wall behind a run of units that now has to come out to reach it. We investigate moisture at the survey and report it plainly, because covering it with cabinetry is the one decision that cannot be undone cheaply.",
      "The second is extract. Venting from below ground is genuinely difficult, and the shortcut — a duct terminating in a light well, or worse, into a void — produces a kitchen that recirculates its own cooking air and a client who assumes the hood is faulty. The route and the terminal are worked out before strip-out, and where no acceptable position exists we say so and specify accordingly rather than fitting and hoping.",
      "The third is drainage over distance. In a split house the kitchen can be a long way from the drainage the building uses, and a run laid at whatever gradient was convenient will not clear. It behaves acceptably in summer, then reveals itself in winter. The fall is measured at survey and the sink and machine positions follow from it, which occasionally means the layout you had in mind is not the one the building supports.",
    ],
    moreFaqs: [
      {
        q: "Can you improve the natural light in a lower-ground kitchen?",
        a: "Not structurally — enlarging an opening or forming a new one is not this service. What we can do is make the light that arrives work harder: pale surfaces rather than absorbent ones, a considered mirror or reflective splashback position, and lighting designed as part of the kitchen with task light under every wall unit and something warm at low level. In these rooms that is worth more than an expensive worktop.",
      },
      {
        q: "Do you work with the freeholder if the house is split into flats?",
        a: "Yes, and in a split house it is usually necessary. Drainage, the stack and often the extract route are shared rather than yours alone, so anything touching them needs the freeholder's consent and sometimes the other household's cooperation. We prepare drawings and a method statement and deal with the agent or the freeholder directly. The consent is theirs to grant; the paperwork is ours to prepare.",
      },
      {
        q: "What do you do about the noise for the neighbours?",
        a: "Name it in advance rather than apologise afterwards. Strip-out and first fix are the loud days and they are given as dates to the households either side, we work Camden's hours, and we do not run noisy work at weekends near the park at all. In a terrace this close together the goodwill of the house next door is worth more than an extra Saturday of working time.",
      },
      {
        q: "Can the kitchen be finished before a particular date?",
        a: "Sometimes, and we would rather tell you honestly whether it can than agree and fail. The fixed points are the consent lead-in, which is not ours to control, and the worktop fabrication pause, which cannot be compressed. If you have a genuine deadline, say so at the visit rather than after the programme is written, and we will say plainly whether it is achievable or what would have to change.",
      },
    ],
  },

  highgate: {
    pitfalls: [
      "The Highgate failure that costs most is a skip licence applied for from the wrong borough. Camden, Haringey and, on some streets, Islington each hold parts of these hills, and a licence from the wrong authority is not a licence at all — it is a week lost with a stripped kitchen and nowhere to put the waste. The council is confirmed from the address before anything is applied for.",
      "The second is designing a layout before measuring the fall. Villas here place kitchens a long way from the stack, and a run laid at whatever gradient the floor allowed will drain slowly from the start and block eventually. It is the defining technical problem of a Highgate kitchen, and it decides where the sink and the machines can sit rather than following a decision made in a showroom.",
      "The third is treating a listed interior as ordinary fabric. Fixing into original panelling, chasing into historic plaster, or cutting a grille through protected material because it was the convenient wall are the mistakes that turn a kitchen into an enforcement problem. We establish the listing on the address, identify what is original in the room, and fit within it rather than into it.",
    ],
    moreFaqs: [
      {
        q: "Do you check the listing and the conservation area, or do we?",
        a: "We check at the survey, because the answer changes what can be designed, and you or your agent make any application. In Highgate that check has two parts: which of three councils holds the frontage, and whether the building is listed or in the conservation area designated on 21 December 1967. Both are established from the address rather than assumed from the neighbourhood. [VERIFY for your property.]",
      },
      {
        q: "Can the kitchen be fitted without disturbing the original fabric?",
        a: "In most cases, yes, and that is the intention. Cabinetry is fixed into later material wherever it exists, runs are set out to avoid loading original panelling or plasterwork, and anything that would alter the building rather than fit out the room is stopped and discussed. Where a client wants something that would genuinely disturb protected fabric, we say so before it is priced rather than during the work.",
      },
      {
        q: "What if a delivery vehicle cannot make it up the road?",
        a: "Then it does not come up the road. We establish the approach at the survey, and where the gradient, the turning or the width rules out the supplier's vehicle, material transfers to a smaller van for the final leg. That is a line in the proposal rather than a problem on the day. It is a routine constraint on these hills and it is only expensive when nobody plans for it.",
      },
      {
        q: "How long is the consent stage in Highgate?",
        a: "It depends entirely on what is needed. Nothing, for an internal fit-out in an unlisted house outside the conservation area. Weeks, for a skip licence from the right borough. Considerably longer where a listed building consent or a planning application for an external terminal is involved. We establish which applies at the survey and give you dates that reflect it rather than an optimistic figure.",
      },
    ],
  },

  "golders-green": {
    pitfalls: [
      "The failure specific to a large kitchen is a long worktop across a junction nobody dealt with. Where the room spans the original house and a rear addition built decades ago, the two halves sit at slightly different levels and move differently, and a continuous run set out without proper levelling and support develops a visible dip in the middle. It is entirely avoidable and it is the thing you would look at every day.",
      "The second is an island drawn before the services were considered. An island needs power, often water and waste, and a route for all of it under a floor that may be suspended timber over a void — plus an extract answer that does not put a duct across a ceiling. Drawn late, it becomes an expensive compromise. Drawn at the survey with the floor opened, it is straightforward.",
      "The third is scope drift. A large family kitchen sits next to a utility, a cloakroom and a hall, and a job that starts as a kitchen quietly becomes half the ground floor without anybody writing it down. That is how a figure stops meaning anything. We write what is in and what is out before ordering, and where the scope genuinely should grow, it is repriced openly.",
    ],
    moreFaqs: [
      {
        q: "Can the kitchen and the utility be done together?",
        a: "Yes, and it is usually the sensible answer where both need it. They share a first fix, a delivery plan and a decorating phase, so doing them together costs considerably less than doing them a year apart, and the two rooms end up specified as a pair rather than as neighbours that clearly happened at different times. It is written into the scope rather than allowed to drift into it.",
      },
      {
        q: "How much disruption is there if we have a drive?",
        a: "Substantially less than anywhere else we work. Materials come to the door rather than up a shared stair, the skip usually stands on your own property rather than needing a licensed street position, and strip-out runs continuously instead of being paced to a licence period. It is the single biggest practical advantage of this stock and the proposal reflects it rather than carrying an allowance nobody needs.",
      },
      {
        q: "Our ceilings have a textured coating. Does that affect the kitchen?",
        a: "Only where the kitchen ceiling is in scope, and then it is a decision rather than an obstacle: overcoat it, skim over it, or remove it. Removal is the messiest operation in this kind of work and should be chosen knowingly. Older textured coatings may need specialist assessment before they are disturbed, and we would establish that before anything is done to them. [VERIFY the material.]",
      },
      {
        q: "Can you match new joinery to what is already in the house?",
        a: "Closely, in most cases, and honestly about the limits. Edwardian and inter-war joinery profiles can be reproduced and a painted finish will match well; a stained or waxed timber that has aged for ninety years will not be matched by new material and we would say so rather than promise it. Where an exact match matters, we would rather adapt existing material than manufacture a near miss.",
      },
    ],
  },

  "queens-park": {
    pitfalls: [
      "The most common mistake in a small kitchen here is planning it from wall lengths rather than from circulation. A run that measures correctly on paper produces a room where the oven door fouls the dishwasher and the bin cannot be opened with somebody at the sink. In a cottage kitchen fifty millimetres at the door decides whether the room works, and that is established by walking it at the survey rather than by drawing it.",
      "The second is a delivery that breaks the path. Original tiled paths and encaustic thresholds are among the best things about these houses, they crack under point loads from loaded trolleys, and matching a broken tile is difficult and rarely convincing. Boarding the route before anything crosses it costs a few minutes; a repair costs considerably more and never quite looks right.",
      "The third is applying to the wrong council. Brent and Westminster both hold parts of this neighbourhood with no marking on the ground, and a skip licence obtained from the wrong one is a week lost. It is a small administrative point that becomes a real cost when the old kitchen is already out and there is nowhere licensed to put it.",
    ],
    moreFaqs: [
      {
        q: "Is there any way to make a cottage kitchen feel bigger?",
        a: "Several, none of them structural. Keeping full-height units off the window wall, specifying a shallower worktop on one run where the space is tight, choosing a wall treatment above base units rather than a bank of cupboards, and getting the door swing right. Those decisions cost nothing extra at the drawing stage and make a genuine difference. Removing a wall is a different service and sits with Hampstead Renovations.",
      },
      {
        q: "Can the original joinery near the kitchen be kept?",
        a: "Usually, and it is generally worth keeping. Doors, architraves and skirtings in these houses are part of why they are worth what they are, and a replacement will not match convincingly. We protect what stays, remove and store anything that would be damaged during the work, and adapt reversibly where an adaptation is needed. If something genuinely cannot survive, we say so before it comes off.",
      },
      {
        q: "Do we need to tell our neighbours?",
        a: "We tell them, which is better than leaving it to you. In a terrace this close together the houses either side hear a strip-out clearly, and the households know each other. They get the dates of the noisy days and the skip day before anything starts. It costs nothing and it is the single most effective thing we do to keep a job in this kind of street running smoothly.",
      },
      {
        q: "What happens to the appliances we already have?",
        a: "Whatever you decide, provided you decide before the strip-out day. Serviceable appliances can be set aside for you to keep, sell or pass on, and we will disconnect them properly rather than pulling them out. Gas appliances are disconnected by a Gas Safe registered engineer. Anything you want removed goes with the rest of the waste, and that is in the proposal rather than an extra.",
      },
    ],
  },

  "muswell-hill": {
    pitfalls: [
      "The failure that costs most here is a vehicle booked without looking at the street. Several of these roads are steep with limited turning, and a long-wheelbase lorry that cannot safely stand becomes a cancelled delivery rather than an inconvenient one. With a large kitchen that is a significant load and a significant loss. The approach is assessed at the survey and the vehicle chosen to suit it.",
      "The second is a window designed around rather than dealt with. A sash in the kitchen with a failed cord, perished putty or a soft sill will not improve, and attending to it once a run of units sits in front of it is far harder and more expensive. It is joinery rather than a paint item, and the right moment is before the kitchen goes in, not two years after.",
      "The third is over-filling a generous room. These kitchens are large enough to take a full scheme, which tempts a specification that leaves no working space and no breathing room. A room with a proper working triangle and fewer, better cabinets is more useful than one packed to the walls, and the difference is decided on the plan rather than discovered once everything is installed.",
    ],
    moreFaqs: [
      {
        q: "Can a single piece of worktop reach the kitchen?",
        a: "More often here than in most of the areas we work, because Edwardian halls in Muswell Hill are wide, the front doors are generous and the internal doorways are usually large enough. We still measure the route — a turn at the foot of a stair or a narrowed original doorway can stop it — but the answer here is more often yes than no, which opens up materials that a conversion flat cannot take.",
      },
      {
        q: "Should we deal with the sash window at the same time?",
        a: "If it needs work, yes, and this is the moment. Repairing cords, beads, putty or a sill while the room is stripped and accessible is considerably cheaper and less disruptive than doing it once a run of units sits beneath the window. It is quoted separately and honestly as joinery. We tell you at the survey which of your windows need more than paint rather than coating over the problem.",
      },
      {
        q: "Do you work on the flats above the Broadway as well as the houses?",
        a: "Yes, and they are a different job entirely. Access is usually a narrow side door and a straight stair rather than a wide hall, the commercial tenant below sets what hours are tolerable, and the conservation area covers the Broadway so anything appearing on the elevation is a consent question. We survey the route and the lease position before dates are offered rather than assuming a house-like job.",
      },
      {
        q: "How do you decide what goes where in a large kitchen?",
        a: "From how the room is used rather than from a template. Where the family actually eats, which door people come in by, what the window looks onto and where the light falls at the times you cook. Then the fixed constraints — the stack, the extract route, the joist direction. A large room gives you options, which makes it more important to spend time on the plan rather than less.",
      },
    ],
  },

  "crouch-end": {
    pitfalls: [
      "The first thing that goes wrong in a converted house is designing around a range recess nobody opened. The bricked-up opening in the back wall is frequently the only depth a cooker can take without stealing floor, and what is behind the board — sound brickwork, a usable flue, enough width — decides whether the layout works. Opening it at the survey turns a hopeful assumption into a measurement.",
      "The second is a floor packed at the end rather than corrected at the start. Rear rooms here have settled and been re-floored, often more than once, and a run set out on a floor falling toward the garden wall will not look level whatever the spirit level says at the wall. Levels are taken at the survey and the floor is corrected at first fix, before cabinets arrive.",
      "The third is the extract terminal placed where the brick was nearest. In a house of flats a rear grille can sit directly beneath somebody's bedroom window, and a hood that works perfectly for you makes you unpopular by the second month. The position is chosen with the windows above it in mind, and where there is no good one, recirculation is specified and said so before the hood is ordered.",
    ],
    moreFaqs: [
      {
        q: "Should we open the range recess before you quote?",
        a: "No, leave it to us. Opening a bricked-up recess can disturb an old flue, release soot and reveal structure that needs proper assessment, and it is better done as a controlled part of the survey or the strip-out than as a weekend investigation. We will open what can safely be opened at the visit and list the rest as provisional so the figure reflects what we know rather than what we hope.",
      },
      {
        q: "Can we have the washing machine somewhere other than the kitchen?",
        a: "Only where a waste can reach it with proper fall, which in a converted flat is a real constraint rather than a preference. A machine in a hall cupboard or a bathroom is possible where the pipework supports it and the noise is acceptable to you and the flat below. We work out at the survey where it can actually go, rather than drawing it somewhere convenient and discovering the gradient later.",
      },
      {
        q: "Who is responsible if the shared hall is damaged?",
        a: "We are, if we cause it, which is why it is boarded before anything crosses it and photographed before we start. The hall is usually common part rather than anybody's demise, so damage becomes a conversation with the freeholder and the other households. Existing damage is recorded on day one as well, which protects everybody rather than just us.",
      },
      {
        q: "How much notice do you need to start?",
        a: "Enough to get the consent and the orders in, which in a converted house usually means the freeholder's position settled and the cabinetry lead time run. That is weeks rather than days and it varies with the specification. We would rather give you a date we can hold than an early one we cannot, and we do not order against a consent that has not arrived.",
      },
    ],
  },

  "kentish-town": {
    pitfalls: [
      "The most damaging mistake here is fitting a kitchen into a lower-ground room without establishing whether the structure is dry. The room passes a casual inspection with the old units in place, the new kitchen looks right for a year, and then blistering appears at the foot of a wall behind a run that now has to come out. Moisture is investigated at the survey and reported plainly, because it is the one thing that cannot be fixed cheaply afterwards.",
      "The second is inheriting somebody else's improvisation. In a building altered this many times there is usually a circuit extended from a spur, a waste teed into something older than it, or a fan discharging into a void, and building a new kitchen onto any of it simply passes the fault forward. We trace what we find, re-make what needs re-making, and list what cannot be seen as provisional rather than assuming it is sound.",
      "The third is a programme built on hours nobody checked. Party walls here are thin, there may be several households within earshot, and a job that assumes full working days in a street where somebody works from home will be interrupted rather than merely resented. Establishing the real hours at the survey lengthens the calendar honestly instead of producing a date that cannot be met.",
    ],
    moreFaqs: [
      {
        q: "Can a kitchen in a converted workshop be done conventionally?",
        a: "It can, and often it should not be. The things that make those spaces worth having — painted brick, exposed structure, a large industrial window — are exactly what a conventional fit-out lines out and loses. We give a view at the survey on which surfaces should stay as they are and which genuinely need covering, and the services are run to suit the building rather than to make it look like a standard flat.",
      },
      {
        q: "Will we need to rewire the whole flat?",
        a: "Not as an assumption. Within the kitchen, whatever is not fit to build onto is replaced, and that is a real question in this stock rather than a formality. A speculative whole-flat rewire is not included unless you want it and it is genuinely warranted. We inspect at the consumer unit, test what we safely can, and notify new circuits where the wiring regulations require it.",
      },
      {
        q: "How do you keep dust from a basement strip-out out of the rest of the house?",
        a: "By screening at the stair as well as at the room, because dust from below ground rises through a building rather than staying where it is put. A sealed screen at the kitchen doorway, a second at the head of the stair, extraction at the tool during cutting, and cleaning at the end of every day. No strip-out is spotless and we will not claim otherwise, but the difference is substantial.",
      },
      {
        q: "Where will the skip actually go?",
        a: "On a licensed position on a residential side street, arranged in advance. Kentish Town Road is a corridor rather than a loading bay, and the side streets are narrow and densely parked with residents' bays on both sides, so a position has to be applied for rather than found on the morning. The strip-out day is then booked to that position instead of hoping one becomes available.",
      },
    ],
  },

  kilburn: {
    pitfalls: [
      "The classic Kilburn failure is a large appliance that will not make the stair. A range cooker or a tall fridge freezer in its packaging against a half-landing turn with a handrail defeats more deliveries here than anything else, and it happens after the old one has already gone. The appliance dimensions are checked against the stair at the survey, and where something will not pass we say so while there is still time to choose differently.",
      "The second is applying to the wrong borough. Kilburn High Road is the historic boundary between Camden and Brent, and a skip licence from the wrong one is not a licence. With a stripped kitchen and bagged waste in a flat above a shop, that is an expensive week rather than an administrative footnote. The authority is confirmed from the address before anything is applied for.",
      "The third is assuming the wall will take a fixing. The stock here runs from solid Victorian brick through mansion-block construction to later panel systems, sometimes within one flat, and wall cabinets loaded onto a partition that was never meant to carry them is a genuine hazard rather than a snag. We establish the construction at the survey and specify fixings and frames for what is actually there.",
    ],
    moreFaqs: [
      {
        q: "Can you work around the business downstairs?",
        a: "Yes, and it often works in your favour. A shop below may be entirely relaxed about an early start, which can shorten a programme, and may prefer we avoid their busiest trading hours for deliveries. We establish their position at the survey and agree the use of any shared route in writing rather than informally, because an arrangement made at the door will not survive the whole job.",
      },
      {
        q: "Our flat is in a later block rather than a conversion. Is that easier?",
        a: "Usually, in some respects. The walls tend to be true, there may be a documented riser, and the rooms are plainer, which suits a straightforward specification. What can be harder is that these buildings have been altered repeatedly with no record, and sound transfers efficiently to the flat below. We survey the construction rather than assuming either type is simpler.",
      },
      {
        q: "How do you protect a stair used by other households?",
        a: "Along its full length, for the duration rather than daily, and cleared every evening. Where the stair is shared with another flat or passes a business, we agree its use in writing first. Waste is bagged at the room and carried down rather than moved loose, and nothing is left standing on a landing overnight. It is photographed before we start and checked with you at handover.",
      },
      {
        q: "Can the kitchen be done while the flat is let?",
        a: "Only with the tenant's agreement, and usually it is better done between tenancies. A kitchen fit-out leaves a flat without a kitchen for a defined period, and in a small flat above a shop there is nowhere for a tenant to retreat to. Empty, the work runs continuously and the strip-out is much faster. We would say so rather than take an instruction that will generate a dispute.",
      },
    ],
  },

  "hampstead-garden-suburb": {
    pitfalls: [
      "The mistake that causes most trouble here is assuming an extract grille is a detail. The external appearance of these houses is controlled by Barnet planning, by a long-standing Article 4 direction and separately by the Trust under its own Scheme of Management, and a terminal cut through an elevation without consent is an enforcement problem rather than a snag. Whether any acceptable position exists is settled at the survey, before a hood is chosen.",
      "The second is losing original material in a strip-out. What comes out is usually the third or fourth kitchen the room has had, and in the middle of that it is easy for an original door, a piece of ironmongery or a section of board floor to go into a skip because nobody identified it first. We mark what stays before anything is lifted, and those decisions are taken with you rather than by a crew on a strip-out morning.",
      "The third is treating a close like a street. Planted verges and shared frontages will not take a loaded lorry or a stack of material, and damage to a green is a Trust conversation that outlasts the kitchen by a considerable margin. Standing and storage positions are agreed before the first delivery and anything that material crosses is boarded.",
    ],
    moreFaqs: [
      {
        q: "Can we have a kitchen that needs no external consent at all?",
        a: "In most cases, yes, and for most clients here that is exactly the brief. Cabinetry, worktops, services within the room, flooring and decoration change nothing the street can see and fall entirely outside the Trust's and Barnet's external concerns. The one item that can cross the line is the extract, which is why we resolve it at the survey and, where no acceptable terminal exists, specify recirculation and say why.",
      },
      {
        q: "How do we find out whether the Trust's consent is needed?",
        a: "We establish it at the survey as part of assessing the brief, and you or your agent make any application. The Trust boundary and the conservation-area boundary are not identical, and the Trust's guidelines reach items that would be unremarkable elsewhere. It is checked against your specific property rather than assumed from the neighbourhood. [VERIFY the current Trust guidelines for the item of work.]",
      },
      {
        q: "Will a modern kitchen look wrong in an Arts and Crafts house?",
        a: "Not necessarily, and it depends more on execution than on style. What tends to jar is a scheme with heavy metallic finishes and very tight shadow gaps, partly because it fights the room and partly because hand-built walls will not hold those tolerances. A restrained contemporary kitchen in a painted finish, set out to respect the original joinery lines, sits comfortably. We would say at the visit if a chosen scheme is going to struggle.",
      },
      {
        q: "Can the kitchen be done at the same time as other rooms?",
        a: "Yes, and in these houses it often makes sense. Kitchen, bathroom, floors and decoration in one programme share a first fix, a delivery plan and a decorating phase, which costs less than doing them separately and produces a house finished to one standard. Where that is what you want, it becomes a light-refurbishment instruction rather than a kitchen one, and we would set it out that way.",
      },
    ],
  },
};
