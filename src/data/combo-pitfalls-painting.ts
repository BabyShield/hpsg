import type { ComboPitfallsMap } from "./combo-extra";

/**
 * Painting and decorating: failure modes and a further question set, per area.
 * Decorating fails in preparation rather than in application, so these blocks
 * stay on the substrate, the joinery and the household.
 */
export const paintingPitfalls: ComboPitfallsMap = {
  hampstead: {
    pitfalls: [
      "The failure that wastes the most money in a village house is a modern impermeable coating applied over lime plaster. It looks right for a season, then traps moisture behind the film and the wall begins to blister and shed from underneath. Stripping it off again is slower and more expensive than specifying correctly in the first place, which is why the substrate is tested at the survey rather than assumed from the room's appearance.",
      "The second is painting over a coating that has already lost adhesion. New paint does not fix old paint: it adds weight to something that is letting go, and the whole area comes away in sheets within a year. Adhesion is tested in small areas at the survey so the extent of stripping is known and priced, rather than discovered on the second morning with the room already masked.",
      "The third is treating original joinery as wall area. Sashes, shutters and panelled doors take far longer than the square metres suggest, and where the cords have failed, the putty has perished or a sill has gone soft, paint hides the problem for two years and no longer. Those are joinery items, identified and reported before the room is masked rather than coated over.",
    ],
    moreFaqs: [
      {
        q: "How do you decide between stripping back and overcoating?",
        a: "By testing rather than by preference. Where a coating is sound and compatible, preparing and overcoating is the sensible answer and we would say so. Where adhesion has failed, where a modern film sits over lime, or where accumulated paint has buried a good original profile, taking it back is the right call. We test at the survey, say which applies where, and put it in the proposal as a decision rather than a discovery.",
      },
      {
        q: "Can you match a colour that was mixed years ago?",
        a: "Closely, in most cases, and honestly about the limits. A sound sample cut from a hidden area can be matched well by a good merchant, but a colour that has aged on the wall for fifteen years is not the colour it was mixed as, so matching to the wall and matching to the original formula give different results. We would explain which you are getting rather than promise an exact match.",
      },
      {
        q: "Do you move furniture and take up floor coverings?",
        a: "We move and cover furniture as part of the work, and the method is agreed at the survey. Genuinely valuable, fragile or very heavy pieces are better moved by a specialist and we would say so rather than attempt it. Fitted floor coverings are protected rather than lifted unless lifting them is part of the instruction. Nothing is pushed into a corner under a sheet and called protection.",
      },
      {
        q: "How long should a properly decorated room last?",
        a: "That depends on the preparation far more than the paint. A room stripped back where it needed it, filled properly, with the right system for the substrate, will look right for many years in a bedroom and fewer in a hall that takes daily traffic. A cheap emulsion over unresolved defects can look tired within a year. We would rather quote the preparation honestly than the coats cheaply.",
      },
    ],
  },

  "west-hampstead": {
    pitfalls: [
      "The commonest complaint after a conversion flat is decorated is that the walls look patchy in raking light. The cause is almost never the paint: it is mixed absorbency, where original plaster, a later partition and a filled patch each drink the coating differently and dry at different sheens. The fix is a stabilising primer across the whole surface, or lining where the patching is severe, and it is established at the survey rather than after the first coat.",
      "The second is painting a ceiling below an unresolved leak. Staining from the flat above is common in this stock and frequently the leak has never actually been cured, so the mark returns within months and the work is wasted. We look for a history of water damage at the survey and say plainly that the ceiling should wait until the source has been dealt with, which is a conversation with the freeholder rather than with us.",
      "The third is underestimating the joinery in a small room. A bay window with boxed-in returns, a picture rail, a panelled door and deep skirtings in a room that measures as modest is a great deal of hand work, and a figure built from wall area will be wrong. The joinery is counted rather than estimated, because it is the item that most often turns a cheap quotation into a disappointing job.",
    ],
    moreFaqs: [
      {
        q: "Will lining paper fix our patchy walls?",
        a: "Often, and it should be a decision rather than a default. Where a conversion room has live cracking, patched backgrounds from several eras or a ceiling repaired more than once, lining gives a consistent surface that paint alone will not. Where the walls are sound but absorbency varies, a stabilising primer will do it for less. We look at the pattern at the survey and say which is warranted, in writing.",
      },
      {
        q: "The flat above leaked last winter. Can you still decorate?",
        a: "The rest of the flat, yes. The affected ceiling, not until the leak has actually been cured, which is a question for the flat above and possibly the freeholder. Painting over an active leak wastes the work and hides the evidence you may need. Where the source has been dealt with and the surface has dried, staining is blocked with the right system rather than buried under more coats of emulsion.",
      },
      {
        q: "Can you decorate the communal hall at the same time?",
        a: "Only where the freeholder or the management company instructs it. Common parts are a separate instruction and we would not start work on a shared hall on one leaseholder's say-so. If you want it done, the route is usually to raise it with the managing agent or at a residents' meeting, and we are glad to provide a specification and a figure for them to consider.",
      },
      {
        q: "How much of the work is preparation?",
        a: "In a conversion flat of this age, most of it. Washing down, removing what has failed, stabilising mixed backgrounds, filling properly and sanding takes considerably longer than applying the coats, and it is what determines whether the room still looks right in three years. A quotation where preparation is a single line and the paint is itemised in detail is usually the wrong way round.",
      },
    ],
  },

  "belsize-park": {
    pitfalls: [
      "The sequencing failure specific to a tall room is finishing at floor level first. Once furniture is back and a room is in use, bringing towers back in for ceiling and cornice work is disruptive, expensive and frequently skimped, so the overhead joints stay visible for years. Everything at height is prepared and finished while the room is empty and the platforms are up, which sounds obvious and is the thing a rushed programme reverses.",
      "The second is too much sheen on a four-metre wall. Raking light from a tall sash across a long wall shows every filled crack and every roller lap, and a finish chosen for washability rather than for how it behaves in that light will advertise the preparation rather than conceal it. The finish is specified for the room, and where a client wants a higher sheen we say what preparation it would require.",
      "The third is burying an original cornice under another coat. Decades of paint soften a fine plaster profile until it reads as a lump, and each redecoration makes the loss permanent. Opening it up is slow specialist work with a very different figure, and it is genuinely transformative in the right room. We give an honest view per room rather than recommending it everywhere or quietly coating over it.",
    ],
    moreFaqs: [
      {
        q: "Is it worth opening up the cornice in every room?",
        a: "No, and we would say so. In rooms where the detail has already been lost beyond recovery, the money is better spent on the walls, where it will show. In a principal room with a fine profile still legible under the paint, taking it back recovers something you cannot buy. It is slow, careful work and it is priced as such. We give a view room by room rather than a blanket recommendation.",
      },
      {
        q: "How do you reach a four-metre ceiling safely in an occupied flat?",
        a: "With proper towers and platforms rather than ladders, planned into the programme and brought in and out at set points rather than left standing for weeks. In a managed block the equipment movements are booked with the porter like any other delivery. We do not leave access equipment in a communal hall overnight, and we do not work at that height off something improvised.",
      },
      {
        q: "Can you work to the hours our building sets?",
        a: "Yes, and we establish them in writing at the survey rather than discovering them. Managed blocks on the avenues typically set hours and require protection of the lobby and lift, and decorating means arriving daily for weeks rather than once, so those rules apply repeatedly. Working to a restrictive rule properly is much better than being stopped by a porter in week two.",
      },
      {
        q: "Will a dark colour work in a room this size?",
        a: "Often very well, which is not true in most of the stock we work in. The height and the window area carry a deep colour without the room feeling closed, and the proportions suit it. The caveat is sheen: at four metres with raking light, anything above a low sheen will show every imperfection. We paint large samples on the wall and look at them across a day before you commit.",
      },
    ],
  },

  "st-johns-wood": {
    pitfalls: [
      "The failure that stops work in NW8 is arriving without the building's requirements satisfied. Decorating means a crew and materials through a protected lobby every morning for weeks, and an agent who expects a protection specification, insurance evidence and agreed hours will turn a crew away rather than negotiate. Those requirements are collected at the survey and satisfied before the first day rather than argued about on it.",
      "The second is promising a sprayed finish in a furnished flat. Spray gives a superb result on joinery and large flat areas and it requires everything else to be masked comprehensively, which is not realistic in a flat full of furniture, pictures and rugs. Method is specified per room and stated plainly, so nobody expects a finish the working conditions cannot deliver.",
      "The third is mixed backgrounds treated as one. Mansion-block walls range from solid masonry to later partitions and lined surfaces, sometimes within a room, and a single coat over variable absorbency dries at different sheens regardless of how good the paint is. Absorbency and soundness are tested room by room, and the unifying preparation is where the labour honestly goes.",
    ],
    moreFaqs: [
      {
        q: "Can you decorate while we are abroad?",
        a: "Frequently, and it is often the best arrangement. Key-holding and access are agreed formally with you and the managing agent rather than informally, we keep you updated at set points, and any decision that genuinely needs you is held until you can make it. Colour approvals in particular are better settled before you go, with samples painted on the wall and seen in the room.",
      },
      {
        q: "What does the building need from you before you start?",
        a: "Usually contractor details, evidence of insurance, a protection specification for the lobby, lift and corridor, and agreed working hours; sometimes a booking system for equipment. Decorating means arriving daily for weeks, so these apply repeatedly rather than once. We collect the requirements at the survey and satisfy them in advance. [VERIFY with the managing agent for your building.]",
      },
      {
        q: "How do you protect pictures and furniture that cannot be moved?",
        a: "Pieces that can be moved go to the middle of the room and are covered properly. Pieces that cannot are covered in place with the fixings protected and, where appropriate, a rigid screen rather than a sheet. Genuinely valuable or fragile items are better handled by a specialist and we would say so rather than take the risk. The method is agreed at the survey, not improvised on the first morning.",
      },
      {
        q: "Will the whole flat smell of paint?",
        a: "Less than it would have twenty years ago, and more than in a house. Water-based systems have reduced odour substantially, but a mansion flat with sealed windows and constant heating holds what there is for longer, and a neighbour on the same landing may notice. We ventilate deliberately, sequence bedrooms away from the wet phase where the programme allows, and tell the porter the dates.",
      },
    ],
  },

  "maida-vale": {
    pitfalls: [
      "The specification mistake that shows soonest in these flats is a flat matt finish in the corridor. The hall carries every bit of traffic in the home, takes coats, bags and furniture against it, and gets the least natural light, so a fashionable chalky finish marks permanently the first time something brushes it. Finishes are specified by use rather than for uniformity, and the corridor gets one that can be cleaned.",
      "The second is decorating the hall first. In a flat where every room opens off one corridor, that corridor is the route for every material, every covered piece of furniture and every crew movement for the whole programme, and finishing it early guarantees it is marked before handover. It is decorated last, once the traffic through it has stopped.",
      "The third is overcoating joinery that has reached its limit. Deep skirtings and panelled doors in these blocks have often been painted every decade since the building went up, and another coat fills what detail is left. Taking a principal element back to a sound base recovers the profile and is slow; overcoating at a lower sheen hides accumulated thickness. We recommend element by element rather than for the whole flat.",
    ],
    moreFaqs: [
      {
        q: "Why decorate the corridor last?",
        a: "Because it is the route for everything. In a flat with a long hall, every tin of paint, every covered piece of furniture and every crew movement passes along it for the whole programme, and a corridor finished in week one will be marked by week four. Decorating it once the rooms are done and the traffic has stopped means it is handed over in the condition you are paying for.",
      },
      {
        q: "Can you work around a small lift?",
        a: "Yes, and we plan for it rather than hoping. Where the porter's rules bar working use of the lift, crew, materials and access equipment go up the stairs every morning for the duration, so deliveries are staged to what can be carried in one session and equipment stays in the flat rather than being carried out each night. It is real time and it is named in the proposal.",
      },
      {
        q: "Our bedroom has no natural light. How do we choose a colour?",
        a: "Not from a card in a bright hallway. Interior rooms in these flats behave quite differently from the principal rooms, and a colour that reads warm in daylight can turn muddy under artificial light alone. We paint large samples in the actual room and look at them under the lighting you actually use in the evening, and we will say honestly when a chosen colour is going to disappoint there.",
      },
      {
        q: "Do you keep a record of what was used where?",
        a: "Yes, and in a flat likely to be decorated in parts later it is one of the more useful things you get. The record lists the system, the sheen and the colour reference for every room, so a section of corridor can be brought back in three years without repainting the flat, and a repair after a leak matches rather than approximates. It is handed over with everything else.",
      },
    ],
  },

  "swiss-cottage": {
    pitfalls: [
      "The mistake particular to this neighbourhood is specifying a flat matt finish for a Victorian wall because it looked good in a later block a street away. On true, plain walls it is superb; on a settled period surface it reads chalky and marks permanently, and it shows every imperfection the raking light finds. The wall is assessed at the survey and the finish chosen for what it is actually going onto.",
      "The second is coating over traffic film. Where a flat fronts Finchley Road, the reveals, sills and surrounding joinery carry accumulated grime that has to be removed properly rather than painted over, or the new work lifts within a year. It is not a glamorous item and it is the difference between a flat that still looks decorated in two years and one that looks tired in one.",
      "The third is opening the windows wide to speed up drying. On a main-road frontage that brings traffic grime straight onto a fresh surface, which is the opposite of what is wanted. Ventilation is planned rather than assumed: the wet phase is worked when the road is quieter, and mechanical ventilation is used where opening up is not sensible.",
    ],
    moreFaqs: [
      {
        q: "Can you come back quickly if something needs attention?",
        a: "Yes, and being at 250 Finchley Road in this neighbourhood is the practical reason. Decorating throws up small things after you have lived with it for a week: a mark where furniture went back, a sheen difference in a particular light, a cut line worth tidying. We would rather look at those quickly than have you live with them. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
      },
      {
        q: "Our flat is above a shop. Does that change anything?",
        a: "Two things. The commercial tenant below sets what hours are tolerable, which is sometimes more generous than a residential block would be and can shorten a programme. And the route in is usually a narrow side door and a straight stair rather than a lobby, which affects how materials and access equipment arrive every morning. Both are established at the survey rather than on the first day.",
      },
      {
        q: "How do you choose between spray and brush?",
        a: "By the room and its contents rather than by preference. An empty room, particularly one with a lot of joinery, takes spray beautifully and the finish is better than brush can achieve. A furnished room cannot be masked comprehensively enough to make it sensible. We specify method per room, say which is being used where, and do not promise a sprayed finish in conditions that will not support it.",
      },
      {
        q: "Is a 1930s flat easier to decorate than a Victorian one?",
        a: "Usually, and not as much as people expect. The walls are generally true and the plasterwork plain, which helps considerably. What is not easy is that ninety years of coatings, later partitions and past alterations produce mixed backgrounds and variable absorbency within a single room, and a topcoat over that dries patchy regardless of the paint. We test at the survey rather than assuming.",
      },
    ],
  },

  "primrose-hill": {
    pitfalls: [
      "Shutters are where a decorating figure most often goes wrong here. A pair of working shutters has multiple panels, hinges, knuckles and folding edges, every one of which has to be prepared and cut in by hand without gluing the shutter into its box. Done properly it takes longer than the wall behind it. Done quickly, it is how shutters end up painted shut and never used again, which is a loss that cannot be undone cheaply.",
      "The second is decorating a lower-ground wall where moisture and salts are coming through. Any coating applied over that will blister and fail regardless of the system, and the work is wasted rather than merely imperfect. We look for the signs at the survey and report the condition rather than taking the instruction and letting it fail, even where that means saying the room is not ready.",
      "The third is assuming one colour will behave the same throughout the house. A room facing the park gets a great deal of light, much of it reflected off open ground, and the same paint in a rear or lower-ground room can look like a different colour entirely. That is not a fault; it is worth seeing before you commit, which is why samples go on the wall in each room rather than on a card in the hall.",
    ],
    moreFaqs: [
      {
        q: "Can shutters be made to work again as part of decorating?",
        a: "Sometimes, and it is worth asking before the room is masked. Where shutters have been painted shut, freeing them is careful work: cutting the paint line, easing the knuckles and checking the hardware, and it is joinery rather than decoration. Where hinges or the box itself have been damaged, that is a repair we would identify and price separately. What we will not do is paint them shut again.",
      },
      {
        q: "Can we change the colour of the front door?",
        a: "Not as a free choice. The Primrose Hill Conservation Area and Camden's Article 4 direction, in force since 3 March 1983, control the appearance of these elevations, and a change of external colour is a planning question rather than a decorating one. Redecorating a previously painted surface in the existing colour is different. We check the address and say what applies before quoting external work. [VERIFY.]",
      },
      {
        q: "How do you work around children in the house?",
        a: "By sequencing rather than by promises. Bedrooms are programmed so nobody sleeps in a room that was wet that afternoon, noisy preparation is done in the middle of the day where school hours allow, and each room is restored before the next is opened rather than leaving a family camping for a month. We agree that shape at the survey because it affects the calendar.",
      },
      {
        q: "Will the work stop at weekends?",
        a: "Near the park, yes, and we would recommend it. Sanding is the loud part of decorating and it carries clearly in a terrace, weekend streets here are already full and parking is scarce, and the goodwill of the neighbours is worth more than a Saturday. We add time midweek instead. Where you specifically need weekend access, we would speak to the neighbours first rather than simply arrive.",
      },
    ],
  },

  highgate: {
    pitfalls: [
      "The colour mistake that recurs in Highgate is choosing cool greys for a room that looks onto trees. Green filtered light for much of the year drains them of character in a way no colour card predicts, and a scheme that looked crisp in a showroom reads dead on the wall. It is one of the few places where we would insist on large samples in situ, looked at across a day, before a whole house is committed to a palette.",
      "The second is stripping historic material aggressively. In a listed Village interior, removing a coating that may be original or significant, or taking a surface back too far, is not a decorating decision to make on site. Failed material comes off; anything unusual is stopped and discussed. A decorator who strips first and asks afterwards can do damage that no amount of repainting recovers.",
      "The third is applying an external system chosen for looks rather than for exposure. These elevations take more weather than the sheltered streets below, and a coating specified without regard to that will want redoing far sooner than you were told. We specify for the position and give an honest view of the interval, because a decorate repeated in three years is not a saving.",
    ],
    moreFaqs: [
      {
        q: "Our house is listed. What can you not do?",
        a: "Anything that alters the building rather than decorates it. Interior decoration within existing rooms is ordinary work and it is much of what we do in the Village. What we would not do without proper consent is strip a coating that may be historically significant, alter original joinery or plasterwork, or change anything visible externally. Where a surface is unusual, we stop and ask rather than deciding for you.",
      },
      {
        q: "How often will external decoration need doing up here?",
        a: "Sooner than on a sheltered street lower down, and we would rather say so than let you find out. The hill is exposed and elevations take more weather, which shortens the interval for any external coating. We specify a system chosen for that exposure rather than for appearance alone, and we give an honest view of the interval at the survey rather than an optimistic one.",
      },
      {
        q: "Will scaffolding affect the trees?",
        a: "It can, and it is checked before anything is erected. A scaffold standing within a tree's protection area, material stacked on roots, or a vehicle parked over them can each breach a tree preservation order or a conservation-area notice, regardless of how careful the decorating is. We check the constraints with the correct borough and plan the scaffold and storage positions around them. [VERIFY with the right authority.]",
      },
      {
        q: "Can you decorate in winter?",
        a: "Interiors, yes, with drying planned for a house that is heated and rarely ventilated. Exteriors, only within the weather window the coating manufacturer specifies, and on an exposed hill that window is narrower than the calendar suggests. We would rather hold external work than apply a system in conditions that will compromise it, and we say that at the survey rather than in the middle of a job.",
      },
    ],
  },

  "golders-green": {
    pitfalls: [
      "The item most often left out of a whole-house figure is the stairwell. A two-storey void with a landing gallery needs proper access equipment, takes longer per square metre than any room, and is seen from every angle, so a quotation built from room-by-room wall areas will be wrong. It is priced as its own element and worked as a concentrated phase rather than squeezed between bedrooms.",
      "The second is deciding to remove a textured ceiling coating without understanding what it involves. Removal is the messiest operation in this kind of work, and older textured coatings may need specialist assessment before they are disturbed at all. Overcoating and skimming over are legitimate alternatives with very different disruption. We describe honestly what each would actually be like before you choose. [VERIFY the material.]",
      "The third is applying one colour through a house that faces four directions. These rooms get very different light, and a single shade applied everywhere will look like three or four colours by the time it is on the walls. A restrained palette with deliberate changes between floors or between public and private rooms reads far better, and it is decided from samples in each room rather than from a card.",
    ],
    moreFaqs: [
      {
        q: "How long will a whole house take?",
        a: "Longer than people expect, because preparation is most of the work and there is a great deal of joinery in these houses. We write dates after walking all of it rather than estimating from the ground floor, and we sequence so the family always has somewhere to sleep. If you need it finished by a particular date, say so at the survey rather than after the programme is written.",
      },
      {
        q: "Can you work around school hours?",
        a: "Yes, and in a family house we would generally build the programme that way: noisy preparation in the middle of the day, quieter work and reinstatement later, and bedrooms sequenced so nobody sleeps in a room that was wet that afternoon. It is much easier planned at the survey than retrofitted in week two, so tell us the shape of your week early.",
      },
      {
        q: "Is it cheaper to do the house in stages?",
        a: "No, it is more expensive overall, though it spreads the payments. Each stage needs its own set-up, protection and reinstatement, and the colour and sheen decisions drift between stages so the house ends up looking assembled rather than decorated. Where budget means staging is the right answer, we would sequence it by floor and record the specification so later stages match rather than approximate.",
      },
      {
        q: "Do you decorate the outside too?",
        a: "Previously painted windows, doors and joinery where access and weather allow, and on these plots scaffolding is generally straightforward with room to stand it. It is quoted separately because it is weather-dependent with a different consent position. Most of the inter-war stock is undesignated, but selected streets and the setting of Golders Hill Park are in conservation areas. [VERIFY Barnet's map.]",
      },
    ],
  },

  "queens-park": {
    pitfalls: [
      "The decision that most changes a cottage interior, and the one most often skipped, is what to do about the original joinery. Decades of coating soften a well-made door until the profile reads as a slab, and another coat makes the loss permanent. Taking the principal elements back to a sound base is slow and priced accordingly, and it recovers something the house was designed with. We give a view door by door rather than a blanket recommendation.",
      "The second is a crew arriving daily for a fortnight over an unprotected tiled path. These paths chip under point loads rather than footfall, and daily traffic with ladders and materials is exactly that load repeated. Boarding the route for the duration prevents it entirely; a repair afterwards is slow and rarely convincing, because matching an original tile is genuinely difficult.",
      "The third is a parking assumption that produces penalty notices. Brent and Westminster operate different regimes across this neighbourhood with no marking on the ground, and for a crew parked daily across a fortnight a wrong assumption is a real cost rather than an inconvenience. The borough is confirmed from the address and a workable position established as part of the programme.",
    ],
    moreFaqs: [
      {
        q: "Is stripping the doors worth the cost in a small house?",
        a: "In these cottages, more often than not. The joinery is a substantial part of what makes the houses what they are, and in a small house you are close to it constantly, so the difference is visible every day. It is slow work and it is priced honestly. Where a door is a later replacement or the profile was never fine, preparing and overcoating at a lower sheen is the sensible answer.",
      },
      {
        q: "Can you decorate one room at a time over a year?",
        a: "You can, and it costs more overall and tends to drift. Each visit needs its own set-up and reinstatement, and colour and sheen decisions made months apart rarely sit together well. If budget means staging is right, we would record the specification carefully so later rooms match rather than approximate, and we would sequence it so the most-used rooms are done first.",
      },
      {
        q: "Do our neighbours need to know?",
        a: "We tell them, which is better than leaving it to you. Sanding is the loud part of decorating and in a terrace this close together it is clearly audible next door. They get the dates before anything starts. In a street where everybody knows everybody, that single courtesy is worth more than an extra hour of working time on a Friday afternoon.",
      },
      {
        q: "Can we change the outside colour?",
        a: "Not as a free choice, and which rules apply depends on which side of the borough boundary you are on. Brent's Queen's Park Conservation Area and Westminster's Queen's Park Estate Conservation Area are separate designations with their own expectations, and the Estate in particular is a coherent composition rather than a row of individual houses. We check the address before quoting external work. [VERIFY.]",
      },
    ],
  },

  "muswell-hill": {
    pitfalls: [
      "The figure that most often turns out wrong in these houses is the one that measured wall area and glanced at the joinery. Panelled doors on three floors, deep skirtings, picture rails, a substantial staircase and timber sashes throughout are the majority of the labour, not a detail at the end. The joinery is counted at the survey, because it is what determines both the figure and how long the house is disrupted.",
      "The second is coating a sash that needed a joiner. A failed cord, a perished putty line or a soft sill will not improve under paint, and dealing with it once a room is finished means working around new decoration. It is the natural moment while the house is being decorated, and it is quoted separately and honestly rather than folded into a line that makes the quotation look competitive.",
      "The third is treating the stairwell as if it were another room. It is a two-storey void seen from every landing, it needs proper access equipment, and while that equipment is up the stairs are compromised for everyone in the house. Squeezed between bedrooms it is done badly; worked as a concentrated phase it is done once and properly.",
    ],
    moreFaqs: [
      {
        q: "Should the joinery be the same throughout the house?",
        a: "Generally yes, and it is one of the things that makes a whole-house decorate look considered rather than assembled. One system and one sheen for doors, architraves and skirtings, with the staircase treated as part of the same family, reads far better than choices made room by room. Wall colours can and usually should vary. We would rather make the joinery decision once, properly, at the start.",
      },
      {
        q: "How disruptive is the stairwell phase?",
        a: "More than any single room, because everyone uses the stairs and while the access equipment is up they are compromised. We concentrate it rather than spreading it through the programme, and plan it around school and work hours where we can. It is also the part of the house that most repays doing well, since it is seen from every landing and from the hall below.",
      },
      {
        q: "Where will your crew park for three weeks?",
        a: "Somewhere agreed at the survey rather than found each morning. Some of these streets are steep and awkward for a vehicle to stand on all day, and Haringey's controlled parking applies on many roads. Over a programme of weeks, a crew walking ten minutes with ladders is a real daily loss. We establish the position as part of the plan and keep deliveries away from the school run. [VERIFY the CPZ.]",
      },
      {
        q: "Can you decorate the outside as well?",
        a: "Previously painted windows, doors and joinery where access and weather allow, quoted separately because it is weather-dependent and has its own consent position. Haringey's Muswell Hill Conservation Area and Fortis Green Conservation Area, both designated on 1 March 1974, cover many of these streets and residential fenestration is sensitive, so we check the address first. [VERIFY.]",
      },
    ],
  },

  "crouch-end": {
    pitfalls: [
      "The detail that most often looks wrong after a conversion flat is decorated is a cornice running into a partition. Continuing an original moulding into a stud wall rarely convinces, because the construction is different and the eye knows it. Stopping the cornice cleanly with a considered return usually reads better than either pretending the partition is not there or removing original detail. It is drawn before anything is coated.",
      "The second is painting a ceiling that has been repaired more than once without addressing the backgrounds. Patches from different eras drink the coating differently and the repairs telegraph through within weeks. Where the pattern is severe, lining gives a consistent surface that paint alone will not; where it is not, a stabilising primer will do. It is a decision taken at the survey rather than after the first coat.",
      "The third is protecting a shared hall for the first fortnight and forgetting it. A crew crossing somebody else's tiled hall every morning for weeks is a different kind of wear from one delivery, and damage to a common part is a dispute with the freeholder and two other households. It is boarded for the duration, maintained, photographed at the start and cleared every evening.",
    ],
    moreFaqs: [
      {
        q: "Our cornice stops where a wall was built. What are the options?",
        a: "Three, honestly. Continue the moulding into the partition, which rarely convinces because the construction differs. Stop it cleanly with a considered return, which usually reads best. Or remove it entirely, which we would resist where it is original. We draw the junction and show you before anything is coated, because it is the detail you will notice every time you sit in the room.",
      },
      {
        q: "Can you decorate while we live in a one-bedroom flat?",
        a: "Yes, and it is a good part of what we do here. One room at a time, furniture to the middle under proper covers rather than shoved into a corner, dust extracted at the tool, and each room restored before the next is opened. We keep the kitchen, the bathroom and somewhere to sleep usable throughout. It is slower than an empty flat and priced accordingly, and it beats moving out.",
      },
      {
        q: "Does the conservation area affect what we paint inside?",
        a: "No. Haringey's Crouch End Conservation Area, designated on 25 October 1974, is concerned with the Broadway and the appearance of the residential streets — elevations, shopfronts, windows and what is visible from outside. Interior decoration is not its business and you may paint your rooms whatever you like. External redecoration is a different matter and we check the address before quoting it. [VERIFY.]",
      },
      {
        q: "How do you deal with the other households?",
        a: "We give them the dates and the shape of the job before anything starts, and we keep the hall clear every evening. Decorating goes on for weeks rather than a day, so they will notice it whether or not anyone tells them. A neighbour who knows which week the sanding happens plans around it; one who does not, complains to the freeholder. It costs nothing to do properly.",
      },
    ],
  },

  "kentish-town": {
    pitfalls: [
      "The complaint that recurs after a flat in this stock is decorated is a wall that dried patchy. The cause is mixed absorbency, not the paint: original plaster, a 1970s partition, a filled patch and a replaced ceiling each take the coating differently. A stabilising primer across the whole surface, or lining where the patching is severe, is what prevents it, and the need is established at the survey rather than after the first coat.",
      "The second is decorating a lower-ground wall where moisture and salts are moving through it. Any coating applied over that blisters and fails whatever the system, and the work is wasted rather than imperfect. We look for the signs at the survey and report the condition plainly, even where that means saying the room is not ready for decoration at all.",
      "The third is lining out a converted workshop by default. Painted brick, exposed structure and an industrial window are what make those interiors worth having, and covering them all to produce a conventional flat loses that without gaining much. Where a surface is genuinely unsound it should be lined out; where it is simply unfamiliar, it should not. We give a view rather than assuming.",
    ],
    moreFaqs: [
      {
        q: "Why did the last decorate look patchy?",
        a: "Almost always mixed absorbency rather than the paint. Where original plaster, a later partition and a filled patch sit in one wall, each drinks the coating differently and dries at a different sheen even when the colour matches. A topcoat straight onto that will show it in raking light. The fix is a stabilising primer across the whole surface first, and lining in bad cases. We test for it at the survey.",
      },
      {
        q: "Can you decorate a basement flat that gets damp in winter?",
        a: "The dry parts, yes. Any wall where moisture is coming through the structure should not be decorated until that is dealt with, because a coating over it will blister regardless of how good it is. We report what we find at the survey rather than taking the instruction and letting it fail, and sometimes the honest answer is that the room needs work that is not a decorating instruction.",
      },
      {
        q: "Should a workshop conversion be lined out?",
        a: "It depends on the surface and on what you want from the space, and we will give a view rather than assuming. Painted brick and exposed structure are usually the point of these interiors. Where a surface is genuinely unsound, friable or unpleasant to live with, lining it out is the right answer. Where it is simply industrial, covering it tends to produce an expensive flat that could be anywhere.",
      },
      {
        q: "Can you work shorter hours for our neighbour?",
        a: "Yes, and it is far better planned than negotiated. Sanding is the loud part and it carries clearly through the thin party walls in these terraces. Shorter noisy windows lengthen the calendar rather than changing the work, so we build that into the dates from the start. We ask about neighbours at the survey for exactly this reason and we tell them the dates ourselves.",
      },
    ],
  },

  kilburn: {
    pitfalls: [
      "The preparation mistake that recurs here is treating dry lining as if it were plaster. It shows different defects — joints and fixings rather than blown patches and cracks — and it takes filling and finishing differently. In a neighbourhood where a flat can have plaster in one room and dry lining in the next, applying one approach to both produces a visible difference in raking light. The construction is tested at the survey.",
      "The second is a parking assumption. Two boroughs operate different regimes across this neighbourhood with the High Road as the historic boundary, and for a crew parked daily across a fortnight a wrong assumption produces penalty notices rather than an inconvenience. The authority is confirmed from the address and a workable position established as part of the programme.",
      "The third is trying to get materials and access equipment up a narrow shared stair without a plan. A crew improvising that on the first morning loses a day; a crew improvising it every morning loses a week across a programme. Deliveries are staged to what can be carried in one session, equipment stays in the flat, and the stair is protected for the duration rather than covered daily.",
    ],
    moreFaqs: [
      {
        q: "How do you know whether our walls are plaster or dry lining?",
        a: "We test and inspect at the survey, and it matters here more than in most areas because the stock is so mixed. The two show different defects and take filling and finishing differently, and a flat can easily have one in the living room and the other in a bedroom. Where a wall is genuinely ambiguous, we establish it before specifying rather than discovering it with a filling knife.",
      },
      {
        q: "Can you start early if there is a shop below us?",
        a: "Often, and it is worth asking, because above a commercial unit an early start may be entirely acceptable where it would not be in a residential block. Over a programme running weeks that can shorten the calendar meaningfully. We establish the position with the business and the lease at the survey rather than assuming, and we then work to what is agreed rather than pushing at it.",
      },
      {
        q: "Which council's parking rules apply to your crew?",
        a: "It depends which side of Kilburn High Road you are on: east toward West Hampstead is generally Camden, west of it is Brent, and each operates its own regime. For a one-day job it barely matters; for a crew parked daily across a fortnight it matters a great deal. We confirm it from the address at the survey and establish a workable position. [VERIFY.]",
      },
      {
        q: "Can you decorate a flat between tenancies?",
        a: "Yes, and empty is much the better case. Continuous working, no daily covering and reinstating, and the option of spraying joinery for a finish brush cannot match. It is faster and often better. Where the route in is a narrow shared stair, an empty flat also means materials and equipment can be staged properly rather than carried past a tenant's possessions every morning.",
      },
    ],
  },

  "hampstead-garden-suburb": {
    pitfalls: [
      "The assumption that causes most trouble here is that repainting an external surface in a different colour is a decorating decision. It is not: the external appearance of these houses is controlled by Barnet planning, by a long-standing Article 4 direction and separately by the Trust under its own Scheme of Management, and even a previously painted surface can need written consent. It is checked before external work is quoted, not after a scaffold is up.",
      "The second is overcoating original joinery until the detail has gone. Arts and Crafts doors and architraves were made with profiles worth seeing, and each redecoration fills them a little further. Taking the principal elements back to a sound base recovers something the house was designed with and is slow, careful work. We recommend it element by element rather than for the whole house, and we say where the detail is already beyond recovery.",
      "The third is parking or standing on a green. Planted verges and shared frontages will not take a vehicle daily for a fortnight, and damage to a green is a Trust conversation that outlasts the decorating considerably. A standing position is agreed at the survey, anything material crosses is boarded, and vehicles are kept clear of shared frontages when people are coming and going.",
    ],
    moreFaqs: [
      {
        q: "Do we need consent to decorate inside?",
        a: "No. The Trust's Scheme of Management, Barnet's planning and the Article 4 direction are all concerned with the appearance of the property and its setting — what the street, the green and the close can see. Interior decoration is entirely yours and you may choose whatever colours you like. The line is crossed only by work visible from outside, and we separate the two instructions at the survey.",
      },
      {
        q: "Is it worth taking the original doors back?",
        a: "On good Arts and Crafts joinery, often yes, and it is the decision that most changes a Suburb interior. Decades of coating soften the profile until a well-made door reads as flat, and taking it back to a sound base recovers something that cannot be bought. It is slow work priced accordingly. We give a view element by element rather than recommending it for the whole house.",
      },
      {
        q: "Can the exterior be redecorated in the same colour?",
        a: "Usually that is the straightforward case, and it is still worth checking rather than assuming. The Trust's guidelines can reach items that would be unremarkable elsewhere, and what counts as the existing colour is not always obvious on a surface that has been coated several times. We establish the current position for your property before quoting external work. [VERIFY the current Trust guidelines for the item of work.]",
      },
      {
        q: "Where will your crew park?",
        a: "Somewhere agreed at the survey rather than found each morning. Greens, planted verges and shared frontages are not parking, and a surface that takes one vehicle once may not take one daily for a fortnight. We establish a workable standing position, board anything that equipment crosses, and keep vehicles clear of shared frontages when people are coming and going. It matters more here than on an ordinary street.",
      },
    ],
  },
};
