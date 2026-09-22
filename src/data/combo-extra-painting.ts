import type { ComboExtraMap } from "./combo-extra";

/**
 * Painting and decorating: the second per-area layer.
 *
 * One block per Tier 1 area. Decorating is mostly preparation, and these
 * sections stay on what actually differs between neighbourhoods: the
 * substrate, the joinery, the light, the household that stays put, and the
 * building that has to be worked around.
 */
export const paintingExtra: ComboExtraMap = {
  hampstead: {
    survey: [
      {
        title: "What the walls are made of",
        text: "A village house can have lime plaster, gypsum patches from the 1980s, and a skim over both, all within one room. We test in inconspicuous places rather than assuming, because lime and gypsum want different treatment and a modern acrylic applied over lime as a default is how a wall starts shedding. The findings decide the system before a colour is discussed.",
      },
      {
        title: "What is already on the wall",
        text: "Previous coatings of unknown type are the ordinary Hampstead problem. Distemper, an oil-bound paint, or a vinyl over something that never wanted one all behave differently when you wash or sand them. We test adhesion in a small area at the survey, because a coating that lifts is a preparation job rather than a painting one.",
      },
      {
        title: "Whether movement will telegraph",
        text: "Floors that have moved, walls that have settled and ceilings with historic cracking will show through paint within a year unless they are dealt with. We look for the pattern of cracking rather than the individual crack, and we say where lining is genuinely warranted and where filling and a proper system will do.",
      },
      {
        title: "The joinery, treated as joinery",
        text: "Original sashes, shutters, panelled doors and architraves are surveyed for condition, not just for coating. Failed cords, a loose staff bead, perished putty or a rotten sill are not paint items, and we say so before the room is masked rather than painting over a problem that will reappear.",
      },
      {
        title: "How the household will keep using the house",
        text: "Most village decorating is done around people. We establish which rooms must stay in use, where children and pets are, and what can be moved into storage, because the sequence is built from that rather than from the order the rooms appear on a plan.",
      },
    ],
    materials: [
      "The system is chosen to suit the substrate rather than the colour card. Where lime plaster is in play we specify a breathable system rather than trapping moisture behind an impermeable film, and where a previous oil-based coating is sound we prepare and overcoat it properly rather than pretending it is not there. This is written into the proposal as a specification, so what is on the wall in ten years is a decision somebody made rather than an accident.",
      "Hampstead light is worth taking seriously. Village rooms are often deep with one or two sashes, and the light is cool and directional for much of the year. A colour chosen under a showroom spotlight can read quite differently at four in the afternoon in a room facing a lane. We paint samples on the wall itself, large enough to judge, and leave them through a day rather than asking you to decide from a card.",
      "Sheen is specified per element rather than per house. Ceilings in a matt that will not flash across an uneven period surface, walls in a finish that can be cleaned without burnishing, and joinery in an eggshell or satin that suits the room and the wear it takes. A high sheen on an old door shows every ripple in the timber, which is a decision worth taking consciously rather than by default.",
    ],
    programme: [
      {
        title: "Protection, and the route through the house",
        text: "Floors, stairs and anything staying in the room are covered before a tin is opened. In a village conversion the shared hall goes on that list too. This takes a morning and it is what makes an occupied decorate tolerable.",
      },
      {
        title: "Washing down and stripping back",
        text: "Surfaces are washed, failed material is taken off, and any coating that lifts is removed rather than painted over. This is the unglamorous majority of the work and the reason a properly decorated room still looks right in five years.",
      },
      {
        title: "Filling, joinery and making good",
        text: "Cracks are cut out and filled rather than smeared, joinery is repaired or reported, and lining is hung where movement would otherwise telegraph. Dust from sanding is extracted at the tool rather than swept up afterwards.",
      },
      {
        title: "Coats, in the right order",
        text: "Ceilings, then walls, then joinery, with drying times respected rather than compressed. In a cool period house with limited ventilation, drying takes longer than the tin suggests, and rushing it is how a finish stays soft and marks.",
      },
      {
        title: "Reinstatement and inspection",
        text: "Furniture back, fittings rehung, floors cleaned, and the room inspected with you in daylight. Touch-in is done at that visit rather than left for a later call, and the protection comes up last.",
      },
    ],
    access: [
      "Decorating needs less delivery than a kitchen but more continuous access. Village lanes off Heath Street have no loading bay, controlled parking covers most of NW3, and a crew that cannot park within reasonable distance of the house loses time every day rather than once [VERIFY the CPZ code for the street]. We establish the parking position at the survey and build it into the programme rather than treating it as somebody's daily problem.",
      "Where external decoration is in scope, access equipment becomes the constraint. Scaffolding on a village lane needs a Camden licence and takes pavement space that may be narrow to begin with. Conservation-area designation and listed status also bear on external work in a way they do not bear on interior emulsion, and we check the address before anything external is quoted in detail. [VERIFY the designation and listing.]",
    ],
    costDrivers: [
      {
        title: "How much preparation the walls need",
        text: "Sound walls take a wash and a fill. Walls with a failing coating, live cracking or a lime substrate under a modern film need stripping, stabilising or lining, and that is where most of the labour in a period house actually goes. It is established at the survey rather than discovered on day three.",
      },
      {
        title: "How much joinery is in scope",
        text: "Sashes, shutters, panelled doors and architraves take far longer than the wall area suggests, because each one is prepared, filled and cut in by hand. A room with six-panel doors and working shutters is a different figure from the same room without them.",
      },
      {
        title: "Ceiling height and access",
        text: "A tall village room needs towers or platforms, and every operation overhead is slower from one. It is priced openly. It also changes the sequence, because overhead work is done before the room fills again.",
      },
      {
        title: "Whether the house stays occupied",
        text: "An empty house can be worked continuously and can take spray where it suits. An occupied one means moving and re-covering every day, shorter working faces and more protection. Both are ordinary; they are not the same figure.",
      },
    ],
    living: [
      "Most Hampstead decorating happens around a household that stays, and the difference between a tolerable fortnight and a miserable one is sequencing. We keep a kitchen, a bathroom and a bedroom usable wherever the programme allows, work room by room rather than opening the whole house at once, and put furniture back at the end of a room rather than leaving a house in pieces for a month. Dust is extracted at the tool during sanding rather than dealt with afterwards.",
      "Smell and drying are the parts people underestimate. Water-based systems have largely replaced the worst of it, but a period house with sash windows that do not open freely and limited ventilation holds solvent and moisture longer than a modern flat. We plan ventilation as part of the programme, keep bedrooms out of the wet phase where we can, and tell you honestly which nights a room will not be pleasant to sleep in.",
    ],
    handover: [
      "We walk the rooms with you in daylight rather than under artificial light, because that is where a missed cut line or a patch of uneven sheen shows. The snag list is ours to write, and touch-in is done at that visit. You receive a record of what was used where — the systems, the sheens and the colour references — so that a future repair matches rather than approximates. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Period walls settle after they are decorated, particularly where filling has gone into live cracking or where a room has been stripped back for the first time in decades. A hairline reappearing at a ceiling junction in the first winter is the building rather than the paint. We would rather come back and deal with it than have you look at it. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our walls are lime plaster. What difference does that make?",
        a: "A considerable one. Lime works by allowing moisture to move through it, and putting a modern impermeable coating over it traps that moisture behind the film, which is how you get blistering, shedding and a wall that looks worse each year. We test what the substrate actually is at the survey — there is often lime and gypsum in the same room — and specify a system that suits each. It is written into the proposal rather than decided on site.",
      },
      {
        q: "The old paint is flaking in places. Can you paint over it?",
        a: "No, and anyone who says otherwise is selling you a repeat of the same problem. Where a coating has lost adhesion it has to come off back to something sound, and the area around it stabilised, before anything new goes on. We test adhesion at the survey so the extent is known rather than guessed. That preparation is the majority of the work in an old Hampstead room, and it is where a properly specified decorate differs from a cheap one.",
      },
      {
        q: "Will you paint our sash windows?",
        a: "Where they are in scope, yes, and we treat them as joinery rather than as wall area. That means preparing, filling and cutting in by hand, and it means telling you honestly if the cords have failed, a staff bead is loose or the putty has perished — none of which is a paint item. Painting over a rotten sill hides it for two years. Conservation-area and listed constraints apply to external window work and we check the address first. [VERIFY.]",
      },
      {
        q: "Do you use spray?",
        a: "In empty rooms where it suits the work, and rarely in occupied village houses. Spray gives a superb finish on joinery and large flat areas, but it requires everything else to be masked comprehensively, which is impractical in a house full of furniture and people. We specify it per room rather than per house and say which method is being used where, so nobody is surprised by either the finish or the preparation it demands.",
      },
      {
        q: "How long before we can use the room?",
        a: "Usable the same day in most cases, fully cured considerably later. A water-based wall finish is touch-dry quickly but takes weeks to reach full hardness, which is why we advise against scrubbing a new wall or pushing furniture hard against it for the first month. In a cool period house with poor ventilation, drying between coats also takes longer than the tin states, and we programme for that rather than rushing it.",
      },
      {
        q: "Can you decorate one room rather than the whole house?",
        a: "Yes, and a single drawing room with original joinery is a perfectly ordinary instruction. The preparation specification is written the same way whether it is one room or eight, because the substrate does not care about the size of the job. What changes with a bigger programme is the sequencing around the household. We would rather do one room properly than four quickly.",
      },
    ],
  },

  "west-hampstead": {
    survey: [
      {
        title: "Patchwork substrates in a converted house",
        text: "A West Hampstead conversion typically has original plaster, a partition built in the 1970s, a patch where a doorway was closed, and a ceiling replaced after a leak, all within one room. We map that patchwork at the survey, because each background takes the coating differently and a single specification across all of them will show every join.",
      },
      {
        title: "Where the movement is",
        text: "Terraced houses split into flats move, and the cracking follows the structure rather than the decoration. We look at the pattern — party wall junctions, ceiling perimeters, the line where a rear return meets the main house — and say where lining is genuinely warranted rather than hanging it everywhere as an insurance policy.",
      },
      {
        title: "Original joinery, and how much survives",
        text: "Bay windows, picture rails, panelled doors and skirtings vary enormously between flats in the same house. We record what is original, what is a later replacement and what has been overpainted so many times the profile has disappeared, because stripping a detail back is a different instruction from coating it again.",
      },
      {
        title: "Ceiling condition after somebody else's leak",
        text: "Water damage from a flat above is common in this stock and it is frequently covered rather than cured. We look for staining, the tell-tale bloom of a coating applied over a damp surface, and any history of a leak, because painting over an unresolved one wastes the work entirely.",
      },
      {
        title: "How the flat is actually used",
        text: "In a one- or two-bedroom conversion there is nowhere to decant furniture to. We establish what can be moved, what must stay and where you will sleep, because in a flat this size the programme is built around that rather than around an ideal sequence.",
      },
    ],
    materials: [
      "Where a room has three or four different backgrounds, the answer is usually a unifying preparation rather than a clever paint. That may mean a full skim in the worst cases, or lining where movement and patching would otherwise telegraph, or a stabilising primer across mixed absorbency so the topcoat dries evenly. Skipping that step is why a freshly painted conversion room can look patchy in a raking light within a week.",
      "Colour behaves differently in these flats than in a larger house. A rear-return room with one window and a neighbouring wall a few metres away gets much less light than its plan suggests, and a fashionable deep colour that works in a showroom will close it down entirely. We paint large samples on the wall and look at them at the times of day you actually use the room, rather than deciding from a card in a hallway.",
      "Joinery decisions matter more here because there is so much of it in a small space. A bay window with a boxed-in run, a picture rail, a panelled door and deep skirtings in a single room is a lot of hand work, and the sheen chosen affects how the room reads. A lower sheen on heavily overpainted joinery hides the accumulated thickness; a high one advertises it. We say which your joinery will flatter.",
    ],
    programme: [
      {
        title: "Protection, including the shared hall",
        text: "The flat is covered and so is the route through a hall two or three households use. Decorating brings more traffic through a shared entrance than people expect, over more days, and the protection stays down for the duration.",
      },
      {
        title: "Washing, stripping and stabilising",
        text: "Surfaces are washed, failed coatings removed, and mixed backgrounds brought to a consistent state. In a patched conversion room this is most of the job and it is what the finish depends on.",
      },
      {
        title: "Filling, lining and joinery",
        text: "Cracks cut out and filled, lining hung where the survey identified movement, and joinery prepared by hand. Sanding dust is extracted at the tool, which in a small flat is the difference between a working week and an unlivable one.",
      },
      {
        title: "Coats, respecting drying",
        text: "Ceilings, walls, then joinery, with drying time allowed rather than compressed. A north-facing rear return in winter dries slowly, and forcing the next coat onto a surface that is not ready is how a finish stays soft.",
      },
      {
        title: "Reinstatement and inspection",
        text: "Furniture back, fittings rehung, floors cleaned and the shared hall returned to how it was. The rooms are inspected with you in daylight and touch-in is done at that visit.",
      },
    ],
    access: [
      "Decorating a conversion flat means crossing somebody else's hall every day for a fortnight, which is a different proposition from a single delivery. The route is protected along its length and kept clear, and the other households are told the dates. We also establish where the crew can park: three stations on West End Lane make daytime parking competitive, and a team walking fifteen minutes with ladders every morning is a real loss of working time [VERIFY the CPZ for the street].",
      "Camden issues scaffolding licences where external decoration is in scope, and on a terraced street the scaffold affects your neighbours as much as you. Conservation-area designation varies street by street here, and Article 4 directions on windows may apply regardless, so external joinery work is checked against the address before it is quoted in detail. Interior decoration that changes nothing outside is not planning's business. [VERIFY the named area and any Article 4.]",
    ],
    costDrivers: [
      {
        title: "How mixed the backgrounds are",
        text: "A room with original plaster, a later partition and a replaced ceiling needs more preparation than its size suggests. Unifying those backgrounds is where the labour goes, and it is established at the survey rather than discovered once the first coat shows every join.",
      },
      {
        title: "Whether lining is needed",
        text: "Lining is a real cost and it is specified where movement or patching would otherwise telegraph, not as a default. We say where and why in the proposal, so it is a decision rather than an upsell.",
      },
      {
        title: "How much joinery a room holds",
        text: "A bay, a picture rail, a panelled door and deep skirtings are hours of hand work in a room that measures as small. Joinery is the most commonly underestimated item in a conversion-flat decorate.",
      },
      {
        title: "Working in an occupied one-bedroom flat",
        text: "Where there is nowhere to move furniture to, everything is covered, shifted and re-covered daily, and the working face is small. That is slower than an empty flat and it is priced as what it is.",
      },
    ],
    living: [
      "In a one- or two-bedroom conversion there is nowhere to go, so the programme is built around you rather than the other way round. We work one room at a time, restore each before opening the next, and keep the kitchen, the bathroom and a bedroom usable throughout wherever the sequence allows. Furniture is moved to the middle and properly covered rather than pushed into a corner under a sheet, and it goes back when the room is finished rather than at the end of the job.",
      "Dust and smell are the daily reality. Sanding dust is extracted at the tool, which makes far more difference in a small flat than a dust sheet does, and we clean at the end of every day rather than at the end of the week. Water-based systems have reduced the smell substantially but a rear-return room with a window that opens onto a light well still ventilates slowly, and we will tell you which nights a room is better avoided.",
    ],
    handover: [
      "The inspection is done in daylight, room by room, because artificial light hides a missed cut line and flatters uneven sheen. We write the snag list and touch in at that visit. You receive a record of the systems, the sheens and the colour references used in each room, so a repair in three years matches rather than approximates. The shared hall is checked at the same time. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Conversions move, and the first winter after decorating tells you where. A hairline at a ceiling perimeter or along a party-wall junction is the building rather than the work, and it is worth dealing with once rather than watching. We return for it as one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our ceiling is stained from the flat above. Can you just paint it?",
        a: "Not until the leak is resolved, and that is a question for the flat above and possibly the freeholder rather than for us. Painting over an active leak wastes the work and hides the evidence you may need. Where a leak has been properly cured and the surface has dried, the staining is dealt with by a stain-blocking system rather than by more coats of emulsion, and we specify it as such. We check for a history of water damage at the survey.",
      },
      {
        q: "Do we need lining paper?",
        a: "Sometimes, and it should be a decision rather than a habit. Where a conversion room has live cracking, patched backgrounds from several eras, or a ceiling that has been repaired more than once, lining gives a consistent surface that paint alone will not. Where the walls are sound, it is an unnecessary cost. We look at the pattern of cracking at the survey and say where it is warranted and where it is not, in writing.",
      },
      {
        q: "The joinery has been painted so many times the detail has gone. What can be done?",
        a: "It can be stripped back, which recovers the profile and is a genuinely transformative piece of work, or it can be prepared and overcoated, which is quicker and keeps the accumulated thickness. Stripping is slower and more expensive and it is the right answer on good original joinery in a principal room. We would tell you which of your joinery justifies it rather than recommending it everywhere or nowhere.",
      },
      {
        q: "Can you decorate around us in a one-bedroom flat?",
        a: "Yes, and it is what most of this work is. The method matters: one room at a time, furniture covered properly rather than shoved aside, dust extracted at the tool, and each room restored before the next is opened. We keep the kitchen, the bathroom and somewhere to sleep usable throughout. It is slower than an empty flat and priced accordingly, and it is far better than moving out for a fortnight.",
      },
      {
        q: "How do you protect the shared hall?",
        a: "Along its full length, for the whole programme rather than daily. Decorating brings more foot traffic through a shared entrance than most people expect and it goes on for longer than a delivery. We photograph the hall before we start, keep it clear every evening, tell the other households the dates, and check it with you at the end. In a house of three flats, the hall is what your neighbours judge the job by.",
      },
      {
        q: "Will a dark colour work in a rear-return room?",
        a: "Sometimes beautifully and sometimes not, and the only honest way to know is to try it on the wall. These rooms often get far less light than their plan suggests, with one window and a neighbouring wall close by, so a colour that looks rich in a showroom can read as flat and closed. We paint large samples in situ and look at them at the times you actually use the room, rather than deciding from a card.",
      },
    ],
  },

  "belsize-park": {
    survey: [
      {
        title: "How tall the room actually is",
        text: "Belsize rooms are generous overhead, and that changes the survey from a wall-area exercise to an access one. We measure to the cornice, establish what platform or tower each room needs, and work out where equipment can stand. Height is the single biggest factor in what decorating here costs and how long it takes.",
      },
      {
        title: "Cornice, ceiling rose and what is under the paint",
        text: "Original plasterwork in these houses is frequently buried under decades of coating, with the detail softened or lost. We assess whether it is worth opening up, and if so how much, because reviving a cornice is a specialist operation with a very different figure from painting over it again.",
      },
      {
        title: "The stucco question, which is external",
        text: "Where external decoration is in scope, stucco is its own subject: what is sound, what is hollow, what has been repaired with an unsuitable material, and what the conservation area will accept. We survey it separately from the interior, because it is a different trade and a different consent position. [VERIFY the boundary and any Article 4.]",
      },
      {
        title: "How a tall room shows every shortcut",
        text: "A four-metre wall in raking light from a tall sash shows every filled crack, every roller lap and every patch where absorbency changed. We look at the walls in the actual light rather than under a lamp, because the standard of preparation these rooms demand is higher than a low-ceilinged flat needs.",
      },
      {
        title: "Building hours, on the avenues",
        text: "Managed blocks on Belsize Avenue and Haverstock Hill have hours in the lease and hours the porter enforces, and decorating involves more days on site than most trades. We get both in writing before the programme is built.",
      },
    ],
    materials: [
      "In a tall room the ceiling is a long way from the eye and the wall is not, which is worth exploiting. A matt ceiling finish that will not flash, a wall finish chosen for how it behaves in raking light rather than for its name, and joinery at a sheen that suits a room with large windows. What ruins a Belsize room is a wall coating with too much sheen: at four metres with a tall sash beside it, every imperfection is lit from the side.",
      "Where original plasterwork survives, the material decision is whether to build up or take back. Another coat softens the detail a little more; opening it up recovers it and is slow, careful work. We give an honest view on whether a particular cornice or rose justifies it, because in some rooms the detail has already gone and the money is better spent elsewhere.",
      "Colour in these rooms is unusually forgiving because there is so much light and so much wall. Deep colours that would close a small flat can work here, and pale colours have the height to carry them. We still paint large samples on the wall and look at them across a day, particularly on the avenues where north light is even and cool, and in Village rooms where the light is sharper and more directional.",
    ],
    programme: [
      {
        title: "Access equipment planned, not improvised",
        text: "Towers and platforms are arranged before the first room starts, because a tall room worked from unsuitable access is both slower and worse. This is a programme item here rather than an afterthought.",
      },
      {
        title: "Protection, and the common parts",
        text: "The room, the route and, in a managed block, the lobby and lift are protected to the building's standard. Decorating runs for more days than most trades, so the protection is installed to last rather than laid out each morning.",
      },
      {
        title: "Overhead work first",
        text: "Ceilings, cornices and everything at height are prepared and finished while the room is empty and the platforms are up. Bringing equipment back in later because the sequence was wrong is the most avoidable cost in a tall room.",
      },
      {
        title: "Walls, then joinery",
        text: "Walls prepared to the standard a raking light demands, then coated with drying time respected. Joinery follows, prepared and cut in by hand, with sanding dust extracted at the tool rather than cleaned up afterwards.",
      },
      {
        title: "Reinstatement and inspection in daylight",
        text: "Furniture back, fittings rehung, and the room inspected with you in daylight from the angle the window actually lights it. Touch-in happens at that visit.",
      },
    ],
    access: [
      "Haverstock Hill is a corridor and the Village streets are tight, so where the crew parks matters more for decorating than for most trades, because it is a daily cost rather than a one-off delivery. Camden's controlled parking applies [VERIFY which authority controls a given frontage]. On the avenues the constraint moves inside: a managing agent's protection standard for the lobby and lift, restricted hours, and a booking sheet that decorating materials have to fit into like anything else.",
      "External decoration brings scaffolding, and in the Belsize Conservation Area that is a planning-adjacent question as well as a licensing one. Camden issues the licence; the conservation area and any Article 4 direction bear on what may be done to stucco, windows and the elevation once the scaffold is up. We check the address before quoting external work in detail, and we keep it entirely separate from an interior instruction that changes nothing outside. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "Ceiling height",
        text: "More wall area, slower working from platforms, and access equipment that has to be moved between rooms. Height is the defining cost driver in Belsize and it is priced openly rather than folded into a rate that hides it.",
      },
      {
        title: "The standard the light demands",
        text: "A tall sash throwing raking light across a four-metre wall requires better preparation than a small room does. That is more filling, more sanding and more care, and it is the difference between a room that looks right and one that looks done.",
      },
      {
        title: "Whether plasterwork is opened up",
        text: "Reviving a buried cornice or ceiling rose is specialist, slow and genuinely transformative. Painting over it again is quick. Both are legitimate; they are very different figures and the choice should be made knowingly.",
      },
      {
        title: "The building's rules on the avenues",
        text: "Protection to a managing agent's standard, restricted hours and lift bookings all cost time across a decorating programme that runs for weeks rather than days. It is named in the proposal rather than absorbed.",
      },
    ],
    living: [
      "Whether you stay depends on the building. An avenue mansion flat with a hall and several rooms can be decorated a room at a time with the household barely disturbed. A single-storey Village conversion where rooms open into one another is harder, and a tall room being worked from a tower is genuinely not usable while the platform is up. We say which of those you have at the survey and build the sequence around it.",
      "The particular Belsize consideration is that equipment has to move through the flat. Towers, platforms and long ladders in a building with a lift booking sheet and a porter are a logistical exercise, and in a converted house they have to come up a stair that belongs to your neighbours. We plan those movements rather than improvising them, and we do not leave access equipment standing in a communal hall overnight.",
    ],
    handover: [
      "The inspection is in daylight, standing where the window lights the wall from the side, because that is where a tall Belsize room tells the truth. We write the snag list and touch in at that visit. You receive a record of systems, sheens and colour references per room, and where plasterwork was opened up, a note of what was recovered. Common parts in a managed block are checked with the porter. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Tall rooms show a hairline at the cornice junction sooner than low ones do, particularly where filling has gone into live cracking or where a heating season has run since the work. That is the building rather than the paint, and it is worth attending to once rather than watching it. Telephone 020 7101 3168 or write to office@hpsg.co.uk and we return for the whole list at once.",
    ],
    moreFaqs: [
      {
        q: "Is it worth stripping back our cornice?",
        a: "Sometimes, and it is one of the few decorating decisions that genuinely changes a room. Decades of coating soften the detail until a fine Victorian cornice reads as a lump, and opening it up recovers something that cannot be bought back any other way. It is slow, careful and expensive. We give an honest view per room: where the detail has already been lost beyond recovery, the money is better spent on the walls.",
      },
      {
        q: "Why does a tall room cost more to decorate?",
        a: "Three reasons, all real. There is more wall area than a plan suggests, everything overhead is slower from a platform than from the floor, and the access equipment has to be brought in, moved and taken out again. There is also a fourth, less obvious: a four-metre wall lit from the side by a tall sash demands better preparation than a small room, because every imperfection is visible from across the room.",
      },
      {
        q: "Can you decorate the outside stucco?",
        a: "Previously painted external surfaces where access and weather allow, yes, and it is a separate exercise from the interior. Stucco has to be surveyed on its own terms — what is sound, what is hollow, what has been patched with an unsuitable material — and the Belsize Conservation Area and any Article 4 direction bear on what may be done. We check the address before quoting external work in detail. [VERIFY the boundary and any Article 4.]",
      },
      {
        q: "Our block has rules about contractors. Does that affect decorating?",
        a: "It affects the logistics rather than the work. Managed blocks on the avenues typically set hours, require protection of the lobby and lift to their own standard, and want deliveries and equipment movements booked. Decorating runs for weeks rather than days, so those rules apply repeatedly rather than once. We get them in writing at the survey and build the programme around them instead of negotiating with a porter each morning.",
      },
      {
        q: "Will a dark colour work in a room this tall?",
        a: "Often very well, which is not true in most of the stock we work in. These rooms have the height and usually the window area to carry a deep colour without feeling closed, and the proportions suit it. The caveat is sheen: at this height and with raking light from a tall sash, anything above a low sheen will show every imperfection. We paint large samples on the wall and look at them across a day before you commit.",
      },
      {
        q: "How long does a whole flat take?",
        a: "Longer than people expect, because preparation is most of it and tall rooms are slower. We write dates after seeing the rooms rather than estimating from a floor plan, and we sequence so that you always have somewhere to sleep and a usable kitchen and bathroom. Where the building restricts hours, that lengthens the calendar without changing the work, and we say so at the proposal stage rather than later.",
      },
    ],
  },

  "st-johns-wood": {
    survey: [
      {
        title: "What the building expects before we arrive",
        text: "NW8 managing agents typically set protection standards, hours and contractor requirements, and decorating means weeks on site rather than a single delivery. We read those requirements at the survey and build them into the programme, because a crew turned away at a lobby on a Monday morning costs more than the protection would have.",
      },
      {
        title: "Furnished flats and what can actually move",
        text: "These are often fully furnished homes with pictures, rugs and pieces that are not going into a hallway. We establish what moves, what is covered in place, and what needs specialist handling, because that assessment determines the method and whether spray is possible anywhere at all.",
      },
      {
        title: "Wall construction behind the paint",
        text: "Mansion-block walls range from solid masonry to later partitions and lined surfaces, sometimes within one room. We test absorbency and soundness rather than assuming, because mixed backgrounds under a single coat is how a wall ends up looking patchy in side light.",
      },
      {
        title: "Joinery in a purpose-built flat",
        text: "Panelled doors, deep architraves, picture rails and sometimes original ironmongery. We record condition and how many times each element has been coated, because heavy accumulated paint on good joinery is a decision point rather than a detail.",
      },
      {
        title: "Principal rooms and the light they get",
        text: "Villa and mansion-flat reception rooms in NW8 are often large with tall windows onto tree-lined streets, which gives green-filtered light in summer and flat grey light in winter. We look at colour in the room across a day rather than deciding from a card in a corridor.",
      },
    ],
    materials: [
      "In a furnished mansion flat, the method dictates the material more than the reverse. Brush and roller rather than spray, systems with low odour and reasonable drying in a flat where somebody sleeps, and finishes that can be cleaned in a hall used daily. We specify per room rather than per flat, and we say which method is being used where so nobody expects a sprayed finish in a room full of furniture.",
      "Joinery in these flats is worth treating properly. Where doors and architraves carry decades of accumulated coating, the choice is to prepare and overcoat, which is quick, or to take back to a sound base, which recovers the profile and costs more. A lower sheen forgives accumulated thickness; a high one advertises it. We give a view per element rather than a blanket recommendation.",
      "Colour in principal rooms here benefits from restraint and from being tested properly. Tall windows onto a tree-lined street give quite different light in July and January, and a colour chosen in one season can disappoint in the other. We paint large samples on the actual wall, leave them for several days, and look at them morning and evening before anything is ordered in quantity.",
    ],
    programme: [
      {
        title: "Building requirements agreed in writing",
        text: "Protection standard, hours, contractor details and any booking arrangements settled with the managing agent before the first day. In NW8 this is a real stage rather than a formality.",
      },
      {
        title: "Protection of common parts and contents",
        text: "Lobby, lift and corridor protected to the building's standard, then the flat itself: floors, furniture, pictures and anything staying in the room. Decorating runs for weeks, so protection is installed to last.",
      },
      {
        title: "Preparation, honestly done",
        text: "Washing down, removing failed material, stabilising mixed backgrounds, filling and sanding with dust extracted at the tool. In an occupied furnished flat, dust control is the single thing clients notice most.",
      },
      {
        title: "Coats in sequence, drying respected",
        text: "Ceilings, walls and then joinery, room by room, with drying time allowed. A flat with sealed windows and constant heating dries differently from a house, and we programme for the building rather than for the tin.",
      },
      {
        title: "Reinstatement, inspection, sign-off",
        text: "Furniture and pictures back, fittings rehung, floors cleaned. The flat is inspected with you in daylight and the common parts are checked with the porter before the protection comes out.",
      },
    ],
    access: [
      "Access here is about the building rather than the street. Westminster licences skips and scaffolding, but what shapes a decorating programme is the block's own rulebook: porters' hours, lift bookings, protection standards for the lobby and corridor, and rules on where materials may be stored. Decorating means arriving every day for weeks, so those rules apply repeatedly. We collect them at the survey and plan around them rather than negotiating each morning.",
      "Where external decoration is in scope, scaffolding on a Westminster street and on a mansion block elevation is both a licensing matter and a freeholder one, and the St John's Wood Conservation Area, designated in 1968, bears on what may be done to the elevation. Many blocks also have design guides stricter than planning. Interior decoration that changes nothing outside sits entirely apart from all of that. [VERIFY the designation and any estate scheme of management.]",
    ],
    costDrivers: [
      {
        title: "Working in a furnished occupied flat",
        text: "Moving, covering and reinstating contents every day, working smaller faces, and cleaning down each evening is slower than an empty flat and it rules out spray in most rooms. It is the defining cost factor in an NW8 decorate.",
      },
      {
        title: "What the building requires",
        text: "Protection of common parts to a managing agent's standard, restricted hours and booked lifts cost time across weeks rather than days. It is named in the proposal because pretending otherwise simply moves the problem into the programme.",
      },
      {
        title: "How much joinery, and whether it is taken back",
        text: "Panelled doors, deep architraves and picture rails are hours of hand work. Stripping heavily overpainted joinery back to a sound base is transformative and slow; overcoating is quick. The choice belongs to you and should be informed.",
      },
      {
        title: "The standard the rooms demand",
        text: "Large reception rooms with tall windows show preparation shortcuts in side light. Meeting that standard is more filling and more sanding than a small room needs, and it is where a good decorate separates itself from a quick one.",
      },
    ],
    living: [
      "Most NW8 clients stay, and these flats are well suited to it: separate rooms, a hall that can be worked around, and enough space that a room out of use is an inconvenience rather than a crisis. We work room by room, reinstate each before opening the next, and keep the kitchen, a bathroom and a bedroom usable throughout. Contents are covered properly and moved to the middle rather than pushed into a corner under a sheet.",
      "The considerations that are specific to a managed block are odour and the porter. Water-based systems keep the smell manageable, but a flat with sealed windows and constant heating holds it longer than a house, and a neighbour on the same landing may notice. We ventilate deliberately, keep bedrooms out of the wet phase where we can, and let the porter know the programme so that questions come to us rather than to you.",
    ],
    handover: [
      "The inspection is in daylight, room by room, because that is where a missed cut line and uneven sheen show. We write the snag list and touch in at that visit. You receive a record of the systems, sheens and colour references used in each room, which in a flat likely to be redecorated in parts is genuinely useful later. The common parts are checked with the porter and the protection removed. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Purpose-built blocks are stable, so what comes back later is usually wear rather than movement: a hall that takes more traffic than anywhere else, a door edge, a skirting behind a piece of furniture that was moved. Having the colour and sheen record makes that a small job rather than a repaint. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can you spray in a furnished mansion flat?",
        a: "Rarely, and we would not recommend pretending otherwise. Spray gives an excellent finish on joinery and large flat areas but it requires comprehensive masking of everything that is not being sprayed, which is impractical in a flat full of furniture, pictures and rugs. In an empty flat between tenancies it is a different conversation. We specify method per room and tell you which is being used where, so the finish you expect is the finish you get.",
      },
      {
        q: "What does the building need from you before we start?",
        a: "It varies and it is the first thing we ask. Typically: contractor details, evidence of insurance, a protection specification for the lobby, lift and corridor, agreed working hours, and sometimes a booking system for deliveries and equipment. Decorating means arriving daily for weeks, so these apply repeatedly rather than once. We collect the requirements at the survey and satisfy them before the first day. [VERIFY with the managing agent.]",
      },
      {
        q: "Our doors have been painted many times. Should they be stripped?",
        a: "On good joinery in a principal room, often yes. Decades of coating fill the detail of a panelled door until the profile reads as soft, and taking it back to a sound base recovers something you cannot buy. It is slow and it costs accordingly. Where a door is a later replacement or the detail was never fine, preparing and overcoating at a lower sheen is the sensible answer. We give a view per element.",
      },
      {
        q: "Will our neighbours smell the paint?",
        a: "Possibly, on the same landing, and less than they would have twenty years ago. Water-based systems have reduced odour substantially, but a mansion flat with sealed windows and constant heating holds what there is longer than a house does. We ventilate deliberately, sequence bedrooms away from the wet phase where possible, and tell the porter the programme so any questions come to us rather than arriving at your door.",
      },
      {
        q: "Can you decorate a flat between tenancies?",
        a: "Yes, and an empty flat is the ideal case: continuous working, spray where it suits, and no daily covering and reinstating. It is faster and the finish on joinery can be better. The building's rules still apply, and in NW8 the lead-in for contractor approval can be longer than the decorating itself, so we would rather start that process early than lose the vacant window waiting for a lobby pass.",
      },
      {
        q: "Does the conservation area affect interior decorating?",
        a: "No. The St John's Wood Conservation Area, designated by Westminster in 1968, and any freeholder design guide are concerned with the outside of the building — fenestration, front boundaries, roof alterations and the elevation. Interior decoration that changes nothing visible from outside is not their business. External redecoration is, and so is anything involving scaffolding on the elevation, which is why we keep the two instructions separate. [VERIFY.]",
      },
    ],
  },
  "maida-vale": {
    survey: [
      {
        title: "The long corridor, and what it does to a programme",
        text: "W9 flats keep their original plan, and the corridor is both the spine of the flat and the busiest surface in it. We survey it separately: it takes more wear than any room, it is the route for every material and every covered piece of furniture, and it is usually decorated last for exactly that reason.",
      },
      {
        title: "What the walls are, room by room",
        text: "Mansion-flat walls here range from original lath and plaster through later partitions to surfaces that have been lined at some point. We test soundness and absorbency in each room rather than assuming the flat is uniform, because mixed backgrounds under a single coat is how a wall reads patchy in side light.",
      },
      {
        title: "Original joinery and the number of coats on it",
        text: "Deep skirtings, panelled doors, picture rails and window joinery in these flats have often been coated every decade since the building went up. We record how much accumulated paint each element carries, because that determines whether preparing and overcoating or taking back to a sound base is the honest recommendation.",
      },
      {
        title: "Where the crew parks for three weeks",
        text: "Decorating is a daily presence rather than a delivery, and Westminster's controlled parking on Elgin Avenue, Sutherland Avenue and the surrounding streets makes a parking position a real programme item. We establish it at the survey rather than leaving a crew to solve it each morning [VERIFY the CPZ].",
      },
      {
        title: "Porter's rules, applied repeatedly",
        text: "In these blocks the porter controls the lift, the hours and where anything may stand. A decorating programme tests those rules every day for weeks rather than once, so we get them in writing at the survey and build the method around them.",
      },
    ],
    materials: [
      "Corridor surfaces earn a different specification from bedrooms. In a flat where a long hall carries all the traffic, a wall finish that can be cleaned without burnishing is worth more than a fashionable flat matt that marks the first time a coat brushes it. We specify by use rather than by uniformity, and we say which rooms are getting which so the decision is yours.",
      "These flats have good proportions and decent light in the principal rooms, but interior bedrooms and the corridor itself can be genuinely dim. Colour has to be chosen in the actual position: a warm off-white that looks bland in a showroom can be exactly right in a windowless hall, and a fashionable deep shade in the same position simply makes it a tunnel. We paint large samples in place and look at them under the light you actually have.",
      "Where joinery carries a century of coating, the choice is real. Taking a panelled door back to a sound base recovers a profile that has been softened into a blur and is slow, careful work; preparing and overcoating at a lower sheen is quick and hides the thickness. We recommend per element rather than per flat, and we tell you honestly where the detail is already beyond recovery.",
    ],
    programme: [
      {
        title: "Building rules and parking settled",
        text: "Porter's requirements, hours and lift arrangements in writing, and a parking position established. For a programme measured in weeks, both of these are worth more than they sound.",
      },
      {
        title: "Protection, stair to flat",
        text: "Common stair and landings protected along the route, then the flat: floors, corridor, contents. In a flat where everything moves along one hall, that hall is protected first and uncovered last.",
      },
      {
        title: "Preparation, room by room",
        text: "Washing down, removing failed material, stabilising mixed backgrounds, filling and sanding with dust extracted at the tool. Each room is finished and reinstated before the next is opened.",
      },
      {
        title: "Coats with drying allowed",
        text: "Ceilings, walls, joinery, in order, with drying respected. A flat with constant heating and windows that are rarely opened behaves differently from a house, and we ventilate deliberately rather than assuming.",
      },
      {
        title: "The corridor last, then inspection",
        text: "The hall is decorated once the rooms are done and the traffic has stopped, then the flat is inspected with you in daylight and the stair protection comes out.",
      },
    ],
    access: [
      "Decorating in Maida Vale is a daily access problem rather than a delivery one. Lifts are small and often barred to working use by the porter's rules, so crew, materials and access equipment go up the stairs every morning for weeks. That is planned rather than endured: staged material deliveries, equipment that stays in the flat rather than being carried out nightly, and a stair protected for the duration rather than laid out daily. Westminster's controlled parking applies on the surrounding streets [VERIFY].",
      "Where external decoration is in scope, the Maida Vale Conservation Area bears on it directly. Exterior painting of previously painted brick, window work and balconies are frequent consent topics in W9, and on a mansion block the elevation is the freeholder's fabric as well as the council's concern. Interior decoration that changes nothing outside is separate from all of it, and we keep the two instructions apart. [VERIFY the designation for the frontage.]",
    ],
    costDrivers: [
      {
        title: "Stairs, every day",
        text: "Carrying crew, materials and access equipment up three flights each morning for a three-week programme is real time. It is the most predictable cost driver in W9 decorating and it is established with a look at the lift at the survey.",
      },
      {
        title: "How much joinery, and how many coats on it",
        text: "Deep skirtings, panelled doors and picture rails through a whole flat are hours of hand work, and taking heavily coated joinery back to a sound base multiplies that. It is the most commonly underestimated item in these flats.",
      },
      {
        title: "Whether the flat stays occupied",
        text: "An occupied furnished flat means covering, moving and reinstating daily, smaller working faces and no spray. An empty flat between tenancies is faster and can take a better joinery finish. They are not the same figure.",
      },
      {
        title: "Corridor wear and what it needs",
        text: "A long hall that carries all the traffic in the flat may need more preparation than any single room, because it has taken more damage. It is surveyed separately for exactly that reason.",
      },
    ],
    living: [
      "The corridor plan makes an occupied decorate genuinely workable here. Rooms open off a hall rather than into one another, so one room can be worked while the rest of the flat functions normally, and doors can be sealed at their frames rather than screened across an opening. We work room by room, reinstate each before opening the next, and decorate the hall itself last when the traffic through it has stopped.",
      "What clients notice most is dust and odour, and both are manageable with method. Sanding dust is extracted at the tool rather than swept afterwards, and we clean at the end of every day rather than the end of the week. A mansion flat with constant heating and windows that are rarely opened holds paint smell longer than a house, so we ventilate deliberately and keep bedrooms out of the wet phase where the sequence allows.",
    ],
    handover: [
      "The inspection runs room by room in daylight and finishes in the corridor, because a long hall with light from one end shows a cut line and a sheen change more clearly than any room. We write the snag list and touch in at that visit. You receive a record of systems, sheens and colour references per room, and the stair and landings are checked with the porter. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In these flats the hall is where wear reappears first, which is why the colour and sheen record matters: a section of corridor can be brought back without redecorating the flat. Elsewhere, purpose-built construction is stable and what returns is usually a door edge or a skirting behind furniture that has since moved. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Should the corridor be a different finish from the rooms?",
        a: "Usually, yes, and it is one of the more useful decisions in a W9 flat. The hall carries every bit of traffic in the home, takes bags, coats and furniture against it, and gets the least natural light. A wall finish that can be wiped without burnishing will look better in three years than a flat matt that marks permanently the first time something brushes it. We specify by use and tell you which rooms are getting what.",
      },
      {
        q: "The porter will not let us use the lift for materials. Is that a problem?",
        a: "It is a cost rather than a problem. Crew, paint, ladders and platforms go up the stairs every morning for the duration, which over a three-week programme is real time, and it is named in the proposal. We reduce it where we can by staging deliveries sensibly and keeping access equipment in the flat rather than carrying it out each evening. We establish the rule at the survey rather than discovering it on day one.",
      },
      {
        q: "Our skirtings are enormous and have been painted for a century. What now?",
        a: "You have a genuine choice. Preparing and overcoating at a lower sheen is quick and hides the accumulated thickness well. Taking the joinery back to a sound base recovers the profile and is transformative in a principal room, but it is slow and priced accordingly. We give a view element by element rather than recommending one approach for the whole flat, because in most of these flats some joinery justifies it and most does not.",
      },
      {
        q: "Can you decorate a flat between tenancies?",
        a: "Yes, and empty is the best case. Continuous working, no daily covering and reinstating, and the option of spraying joinery for a finish that cannot be matched by brush. It is faster and often better. The building's rules still apply and in some W9 blocks contractor approval takes longer than the decorating, so we would rather start that process early than lose the vacant window waiting for permission to enter.",
      },
      {
        q: "Will interior decorating need Westminster's consent?",
        a: "No. The Maida Vale Conservation Area is concerned with the outside of the building — exterior painting of previously painted brick, window replacement, balconies and the elevation generally. Interior decoration that changes nothing visible from outside is not planning's business. External redecoration is a different instruction with a different consent position, and on a mansion block the freeholder is involved as well. [VERIFY the designation for the frontage.]",
      },
      {
        q: "Our bedroom has almost no natural light. What colour works?",
        a: "Not the one that looks best on a card in a bright hallway. Interior rooms in these flats behave quite differently from the principal rooms, and a colour that reads as warm and soft in daylight can turn muddy under artificial light alone. We paint large samples in the actual room, look at them under the lighting you actually use in the evening, and say honestly when a chosen colour is going to disappoint there.",
      },
    ],
  },

  "swiss-cottage": {
    survey: [
      {
        title: "Which building, and therefore which surfaces",
        text: "An inter-war block off Avenue Road has flat, true walls and plain plasterwork. A Victorian house a street back has lath and plaster, cornices and settled openings. A flat over a Finchley Road frontage has whatever the last conversion left. The survey names the building type first, because the preparation specification follows from it entirely.",
      },
      {
        title: "How true the walls are",
        text: "In the later blocks the walls are usually straight and square, which opens up finishes and colours that would be unkind on a period surface. We check rather than assume, because a mid-century flat that has been altered can have a wall as uneven as any Victorian one, and a high-sheen finish on it will say so.",
      },
      {
        title: "Traffic noise and window condition",
        text: "Where a flat fronts Finchley Road, windows are opened less and cleaned more, and the sills and reveals take more grime than in a quiet street. We assess the joinery and the reveals honestly, because a decorate that ignores accumulated traffic film will lift within a year.",
      },
      {
        title: "Light, which varies sharply here",
        text: "Flats facing Finchley Road often have blinds or nets drawn for much of the day; those off Avenue Road face gardens and get even, generous light. The same colour behaves quite differently in the two. We look at the room as it is actually lived in rather than with everything thrown open for the visit.",
      },
      {
        title: "Who is underneath, and their hours",
        text: "Above a commercial unit, early starts may be entirely acceptable. In a managed block off Avenue Road they are not. For a programme running weeks rather than days, that difference is worth establishing in writing at the survey.",
      },
    ],
    materials: [
      "Plain, true walls in the later blocks take a modern flat matt beautifully, because there is nothing for a raking light to catch. The same finish on an uneven Victorian wall a street away reads as chalky and marks permanently. We specify to the surface rather than to a house preference, and where a client wants a particular finish on a wall that will not flatter it, we say so and suggest the preparation that would make it work.",
      "Where a flat fronts a busy road, the practical specification takes account of grime. Wall finishes that can be cleaned, joinery in a sheen that wipes, and reveals prepared properly rather than coated over accumulated film. It is not a glamorous consideration and it is the difference between a flat that still looks decorated in two years and one that looks tired in one.",
      "Colour testing matters here more than in most areas because the light varies so much across a few hundred metres. A garden-facing room off Avenue Road and a road-facing room with a blind half drawn are different rooms for the purposes of colour. We paint large samples in place and look at them at the times of day the room is used, rather than under a work light with the curtains open.",
    ],
    programme: [
      {
        title: "Consent and hours sized to the building",
        text: "A managed block runs a formal process and sets hours; a converted house needs only the freeholder's position; a flat over a shop needs the commercial lease considered. We identify which applies before the programme is written.",
      },
      {
        title: "Protection and a parking plan",
        text: "The route and the flat are protected, and a parking position is established off the main road. For a programme lasting weeks, a crew without somewhere to park loses time daily rather than once.",
      },
      {
        title: "Preparation, matched to the surface",
        text: "Washing down, removing failed material, stabilising mixed backgrounds and dealing honestly with traffic film on road-facing reveals. Sanding dust is extracted at the tool rather than cleaned up afterwards.",
      },
      {
        title: "Coats, with drying respected",
        text: "Ceilings, walls, joinery, in sequence and with drying time allowed. Where windows cannot be opened because of the road, ventilation is arranged deliberately rather than assumed.",
      },
      {
        title: "Reinstatement and daylight inspection",
        text: "Furniture back, fittings rehung, floors cleaned, and the rooms inspected with you in daylight. Touch-in happens at that visit and the protection comes up last.",
      },
    ],
    access: [
      "Finchley Road is a corridor and a poor place to park a crew for three weeks, so a position is established on a side street and built into the programme. Camden's controlled parking applies on the residential streets off Avenue Road and toward Belsize [VERIFY the CPZ and the highway authority for the frontage]. Where a flat is in a managed block, the constraint moves inside: hours, lift bookings, and a protection standard applied every day rather than once.",
      "The HPSG office is at 250 Finchley Road, in this neighbourhood, and for decorating that has one practical effect. Decorating fails in small ways — a colour that needs a further sample, a tin short on the last coat, a tone that looks wrong once the first wall is done — and being a short distance away turns those into the same afternoon rather than the next visit. It does not change the specification. It shortens the small delays.",
    ],
    costDrivers: [
      {
        title: "Which building you are in",
        text: "True plain walls in a later block need far less preparation than a settled Victorian room or a flat over a shop with patched backgrounds. Same service, very different labour, and it is established at the survey rather than assumed from the postcode.",
      },
      {
        title: "What the road has done to the surfaces",
        text: "Road-facing reveals, sills and the joinery around them carry accumulated grime that has to be removed properly rather than coated over. It is ordinary work and it is priced honestly rather than skipped to look cheaper.",
      },
      {
        title: "Occupied or empty",
        text: "A furnished occupied flat means covering, moving and reinstating every day, and no spray. An empty flat between tenancies is faster and can take a better joinery finish. Both are ordinary; they are not the same figure.",
      },
      {
        title: "Hours the building imposes",
        text: "Restricted working hours in a managed block lengthen the calendar without changing the work. For a programme measured in weeks, that is a real cost and it is named in the proposal.",
      },
    ],
    living: [
      "In the Avenue Road blocks an occupied decorate is comfortable: rooms open off a hall, doors seal at their frames, and construction keeps one room's work out of the next. In a converted house on the side streets rooms run into one another and the work is more present. Over a shop, the route in and out passes closer to your living space than anyone would choose. We say which of those you have at the survey and sequence accordingly.",
      "Ventilation deserves a mention here that it does not need elsewhere. In a flat fronting Finchley Road, opening the windows wide for a day brings in traffic noise and grime, which is exactly what you do not want on a freshly coated surface. We plan drying and ventilation around that, working the wet phase when the road is quieter and using mechanical ventilation where opening up is not sensible.",
    ],
    handover: [
      "The inspection is done in daylight with the room as you actually use it — blinds where they normally sit, lights as you normally have them — because that is the condition the decoration has to satisfy. We write the snag list and touch in at that visit. You receive a record of systems, sheens and colour references per room. Where a managing agent required protection, the common parts are inspected. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Being on Finchley Road keeps the follow-up short. A mark that appears once furniture goes back, a sheen difference you only notice after a week of living with it, a section of hall that takes more wear than expected — all worth a visit rather than a shrug, and all quicker to resolve from a few streets away. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Can we have a flat matt finish on the walls?",
        a: "In the later blocks off Avenue Road, usually yes, and it looks excellent because the walls are true and there is nothing for a raking light to catch. On a settled Victorian wall a street away the same finish will read chalky and will mark permanently the first time something touches it. We check how true the walls actually are at the survey and say which finish your surfaces will flatter, and what preparation would be needed to have the one you want.",
      },
      {
        q: "Our windows face Finchley Road. Does that change anything?",
        a: "Two things. The reveals, sills and surrounding joinery carry accumulated traffic film that has to be removed properly rather than coated over, or the new work lifts within a year. And ventilation during drying has to be planned rather than assumed, because opening wide onto a busy road brings grime straight onto a fresh surface. We work the wet phase when the road is quieter and use mechanical ventilation where it is sensible.",
      },
      {
        q: "Does being near your office help with decorating?",
        a: "In small ways that add up. Decorating fails at the margins — a colour that needs another sample once you see the first wall, a tin short on the final coat, a sheen that reads differently in situ — and being a short distance from 250 Finchley Road turns those into the same afternoon rather than the next visit. The survey, the specification and the standard are identical wherever the address is.",
      },
      {
        q: "Our flat is above a shop. Can you start early?",
        a: "Possibly, and it is worth asking, because above a commercial unit an early start may be entirely acceptable where it would not be in a residential block. That can shorten a programme meaningfully. We establish the position with the commercial tenant and the lease at the survey rather than assuming either way, and we work to whatever hours are agreed rather than pushing at them.",
      },
      {
        q: "How much preparation does a 1930s flat need?",
        a: "Usually less than a Victorian house and more than people expect. The walls are generally true and the plasterwork plain, which helps, but ninety years of coatings, later partitions and past alterations mean mixed backgrounds and variable absorbency within a single room. We test at the survey and specify accordingly, because a single coat over mixed absorbency is how a wall dries patchy regardless of how good the paint is.",
      },
      {
        q: "Can you decorate the communal hall?",
        a: "Where the freeholder or the management company is the client, yes. Common parts are a separate instruction from your flat, and we would not start work on a shared hall on the say-so of one leaseholder. If you want it done, the route is usually to raise it with the managing agent or at the residents' meeting, and we are happy to provide a specification and a figure for them to consider.",
      },
    ],
  },

  "primrose-hill": {
    survey: [
      {
        title: "Original joinery, and how much of it there is",
        text: "These houses carry sashes, shutters, panelled doors, picture rails and deep skirtings, often all in one room. We count and assess it rather than measuring wall area, because joinery is where the hours go and a room with working shutters is a different instruction from the same room without them.",
      },
      {
        title: "Stock brick, stucco dressings and what is external",
        text: "Where external decoration is in scope, we separate the elements: previously painted stucco dressings, window joinery, front doors and railings each behave differently. The Primrose Hill Conservation Area and Camden's Article 4 direction, in force since 3 March 1983, bear on external work directly. [VERIFY the boundary.]",
      },
      {
        title: "Damp and salts in a lower-ground room",
        text: "Where a lower-ground room is in scope, we look for moisture and for the salting that comes with it. A coating applied over a wall drawing moisture and salts through will fail regardless of the system, and we would rather report that than decorate over it.",
      },
      {
        title: "Which rooms face the park",
        text: "Rooms facing the park get a great deal of light and a great deal of it reflected off open ground, which flatters some colours and destroys others. We look at the principal rooms at the times of day you use them rather than deciding from a chart.",
      },
      {
        title: "The household and the school run",
        text: "Decorating a family house means working round a family. We establish which rooms must stay usable, what can be stored, and how the day runs, because the sequence is built from that. Deliveries and equipment movements are planned away from the times the street is busiest.",
      },
    ],
    materials: [
      "Joinery-heavy rooms need a coherent decision about sheen. Shutters, sashes, a panelled door, a picture rail and deep skirtings all at different sheens make a room look assembled rather than decorated. We specify one joinery system through a room and, where a client wants a contrast, we make it deliberate — a darker joinery colour against a pale wall reads as a decision, four different sheens does not.",
      "Rooms facing the park take colour unusually well because of the quantity and quality of light, and pale colours that would look flat elsewhere have the reflected light to carry them. Rooms on the other side of the same house can be considerably darker. We paint large samples on the wall in both and look across a day, because a single colour through a house will not behave the same in every room.",
      "Where external decoration is in scope, the materials follow the substrate and the consent position rather than a colour preference. Previously painted stucco dressings need a system that suits them, window joinery is prepared as joinery with any repair identified before coating, and nothing external is assumed to be a free choice in a conservation area with an Article 4 direction. We separate external from internal in the proposal for exactly that reason.",
    ],
    programme: [
      {
        title: "Sequence agreed around the household",
        text: "Which rooms, in which order, and which stay usable throughout. In a family house this is the whole programme, and it is agreed before the first dust sheet rather than adjusted in week two.",
      },
      {
        title: "Protection, including original floors",
        text: "Floors, stairs and anything staying in the room are covered before work starts. Original boards and tiled halls in these houses are worth protecting properly rather than with a sheet that slides.",
      },
      {
        title: "Preparation and joinery repair",
        text: "Washing down, stripping failed material, filling and sanding with dust extracted at the tool. Joinery is prepared by hand and any repair needed is identified and reported rather than coated over.",
      },
      {
        title: "Coats, with drying allowed",
        text: "Ceilings, walls and joinery in sequence. A period house with sashes that do not open freely dries more slowly than the tin suggests, and ventilation is planned rather than assumed.",
      },
      {
        title: "Reinstatement, room by room",
        text: "Each room is restored and inspected before the next is opened, rather than leaving a family living in a house in pieces for a month. Touch-in happens at the final daylight inspection.",
      },
    ],
    access: [
      "Streets around the park are narrow and weekend visitors fill them, which for decorating matters as a parking problem rather than a delivery one: a crew arriving daily for three weeks needs somewhere to be. We establish the position at the survey under Camden's controlled parking [VERIFY the CPZ for the street], and we keep vehicles off the street at weekends where the programme allows, because residents' parking here is already scarce.",
      "External decoration brings scaffolding, and on a terraced street facing a park that affects neighbours and, where the house backs onto open ground, is visible from it. Camden issues the licence. The conservation area and the Article 4 direction bear on what may be done to the elevation once the scaffold is up, so external work is checked against the address before it is quoted in detail. Interior decoration that changes nothing outside is a separate instruction. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "How much joinery is in the room",
        text: "Shutters are the item people forget. A pair of working shutters in a bay takes longer to prepare and coat properly than the whole wall behind them, and a house full of them is a substantially larger job than its floor area suggests.",
      },
      {
        title: "Whether external work is in scope",
        text: "External decoration brings access equipment, weather dependency and a consent position that interior work does not have. It is quoted separately rather than folded in, so the two decisions can be taken independently.",
      },
      {
        title: "Whether a lower-ground room is sound",
        text: "Decorating a dry lower-ground room is ordinary. Decorating one where moisture and salts are coming through the wall is work that will fail, and we would rather report the condition than take the instruction as it stands.",
      },
      {
        title: "Working around a household",
        text: "Room-by-room working with daily covering and reinstating is slower than an empty house and it rules out spray in most rooms. It is also what makes staying possible, and it is priced as what it is.",
      },
    ],
    living: [
      "Family houses here absorb the work well provided the sequence is right. We agree at the outset which rooms must stay usable, work one room at a time, and restore each before opening the next rather than leaving a family camping for a month. Children's rooms are sequenced so that nobody sleeps in a room that was wet that afternoon, and we would rather add a day than get that wrong.",
      "Weekends are noticeably different from weekdays near the park. The streets fill, parking disappears and neighbours are at home, so we keep vehicles off the street at weekends where we can and avoid noisy preparation entirely. Sanding is the loud part of decorating and it carries in a terrace. We name those days and keep them to the middle of the week where the programme allows.",
    ],
    handover: [
      "We walk the house with you in daylight, room by room, and finish with the joinery, because that is where a decorate is really judged: cut lines at an architrave, the edge of a shutter panel, the underside of a picture rail. The snag list is ours and touch-in is done at that visit. You receive a record of systems, sheens and colour references per room. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Period houses move after decorating, particularly where filling has gone into live cracking or where a room has been taken back for the first time in decades. A hairline at a cornice junction after the first heating season is the building rather than the paint. Where external work was done, the first winter is the real test of it. We come back for both as one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Do shutters really take that long to paint?",
        a: "Yes, and they are the most commonly underestimated item in a house like this. A pair of working shutters has multiple panels, hinges, knuckles and folding edges, every one of which has to be prepared, filled and cut in by hand without gluing the shutter shut. Doing it properly takes longer than the wall behind them. Doing it quickly is how shutters end up painted into their boxes and never used again.",
      },
      {
        q: "Can we paint the outside of the house a different colour?",
        a: "Not as a free choice. The Primrose Hill Conservation Area and Camden's Article 4 direction, in force since 3 March 1983, control the appearance of these elevations, and a change of external colour is a planning question rather than a decorating one. Redecorating previously painted surfaces in the existing colour is a different matter. We check the address and say what applies before quoting external work in detail. [VERIFY.]",
      },
      {
        q: "Our basement room feels damp. Can it be decorated?",
        a: "It can be painted; whether it should be is another question. Where moisture is coming through a wall it brings salts with it, and any coating applied over that will blister and fail regardless of how good the system is. We look for the signs at the survey and report what we find rather than taking the instruction and letting it fail. Sometimes the honest answer is that the room needs work that is not a decorating instruction.",
      },
      {
        q: "Will the same colour work throughout the house?",
        a: "It will be the same paint and it will not look the same. A room facing the park gets a great deal of light, much of it reflected off open ground, and a pale colour there can look quite different from the same colour in a rear room or a lower-ground one. That is not a problem — it is often rather beautiful — but it is worth seeing before you commit. We paint large samples in each room and look at them across a day.",
      },
      {
        q: "Can you avoid noisy work at weekends?",
        a: "Yes, and near the park we prefer to. Sanding is the loud part of decorating, it carries clearly in a terrace, and weekends here already have full streets and neighbours at home. We keep noisy preparation to midweek where the programme allows and keep vehicles off the street at weekends. It costs a little calendar time and it is worth it in a street where you have to live with the neighbours afterwards.",
      },
      {
        q: "How do you keep dust out of a family house?",
        a: "Dust extraction at the tool rather than a dust sheet and a broom. Sanding is where the dust comes from, and taking it at source makes far more difference than any amount of covering afterwards. We work one room at a time with the door sealed at the frame, clean down at the end of each day rather than the end of the week, and restore each room fully before opening the next.",
      },
    ],
  },

  highgate: {
    survey: [
      {
        title: "Which authority, for anything external",
        text: "Highgate is split between Camden and Haringey with some streets in Islington, and for decorating this matters at one point: external work, scaffolding licences and anything touching a listed or conservation-area elevation. We confirm the council from the address at the survey rather than assuming. [VERIFY for the frontage.]",
      },
      {
        title: "What survives in a Village interior",
        text: "Around Pond Square and the High Street the stock is finer-grained and more heavily listed, and interiors can retain original panelling, joinery and plasterwork. We identify what is original and what is later, because preparing original fabric is a different exercise from preparing a 1980s replacement.",
      },
      {
        title: "Light filtered by trees",
        text: "Rooms overlooking woodland, Waterlow Park or Highgate Wood receive green filtered light for much of the year, which flatters warm colours and kills cool ones. We look at colour in the room across a day rather than under a work lamp, because this is one of the few places where the light genuinely changes the answer.",
      },
      {
        title: "Exposure, and what it does to external work",
        text: "The hill is exposed and elevations here take more weather than the sheltered streets lower down. Where external decoration is in scope, we assess the substrate for that exposure and are honest about the interval before it will want attention again.",
      },
      {
        title: "How the crew gets there daily",
        text: "Steep roads, limited turning and Village pedestrian traffic make parking for a crew arriving every morning a genuine programme item rather than a detail. We establish where a vehicle can stand and build it into the plan.",
      },
    ],
    materials: [
      "In a listed Village interior the specification is conservative and reversible where it can be. Breathable systems where the substrate calls for them, preparation that takes off failed material without taking off original surface, and coatings chosen so a future owner can take them back if they want to. Where original panelling or joinery is in scope, we say clearly what will be prepared, what will be left alone, and why.",
      "The green filtered light here is the single most useful thing to know about colour in Highgate. Cool greys that look crisp in a showroom frequently read as dead in a room overlooking trees, while warmer tones hold their character through the seasons. We paint large samples on the wall and look at them in both summer and the room's winter condition where the programme allows, because the same room is genuinely two different rooms across the year.",
      "External work on an exposed hill needs a system chosen for weather rather than for appearance alone. Previously painted joinery and masonry take a system that suits the substrate and the exposure, and we are honest at the outset about how long it will look right in this position compared with a sheltered street. A decorate that has to be repeated in three years is not a saving.",
    ],
    programme: [
      {
        title: "Authority and consent established",
        text: "Which council, and whether the building is listed or in a conservation area, settled before external work is planned. Interior decoration within existing rooms is a separate instruction and is not held up by it.",
      },
      {
        title: "Protection, including original fabric",
        text: "Floors, stairs and anything original in or near the room are protected before work starts. In a Village house that protection is more thorough rather than less, and it stays for the duration.",
      },
      {
        title: "Preparation matched to the fabric",
        text: "Washing down, removing failed material without removing original surface, filling and sanding with dust extracted at the tool. Where a coating is historically significant or unusual, we stop and discuss rather than stripping it.",
      },
      {
        title: "Coats, with weather and drying allowed",
        text: "Interior work proceeds with drying respected; external work is weather-dependent and the programme says so honestly rather than promising dates the hill will not deliver.",
      },
      {
        title: "Reinstatement and daylight inspection",
        text: "Rooms restored one at a time, then inspected with you in daylight. Where original fabric was worked around, we show you how it has come through.",
      },
    ],
    access: [
      "Steep roads, limited turning and a Village full of pedestrians make parking a daily consideration for a crew arriving every morning rather than a single delivery problem. We establish a standing position at the survey and build it into the programme. Licensing follows the borough, which here means checking rather than guessing: Camden, Haringey or Islington according to the frontage [VERIFY for the address].",
      "External decoration brings scaffolding, and on these plots there is a further consideration: protected trees. A scaffold within a tree's protection area, or a vehicle standing on roots, can breach an order or a conservation-area notice regardless of how careful the decorating is. We check for tree preservation orders and conservation-area tree constraints with the correct borough before external work is planned, and we plan the standing and storage positions around them. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "Working around original fabric",
        text: "Where panelling, plasterwork or original joinery must be prepared carefully rather than aggressively, the work is slower and the judgement finer. That is proper practice in a listed Village house and it is priced as such rather than rushed.",
      },
      {
        title: "Whether external work is in scope",
        text: "External decoration on an exposed hill brings access equipment, weather dependency, tree constraints and a consent position. It is quoted separately from interior work so the two can be decided independently.",
      },
      {
        title: "Ceiling heights and access",
        text: "Villas on the slopes have generous rooms and correspondingly more wall and more work from platforms. It is priced openly rather than folded into a rate, and it changes the sequence because overhead work comes first.",
      },
      {
        title: "Daily access up a hill",
        text: "A crew that cannot park within reasonable distance loses time every morning and every evening across a programme measured in weeks. It is a modest line and a real one, established at the survey.",
      },
    ],
    living: [
      "Highgate houses are generally large enough to decorate around a household comfortably. We work one room at a time, restore each before opening the next, and keep a kitchen, a bathroom and a bedroom usable throughout. Village houses are tighter and a listed interior needs more protection, which makes the working area smaller and the covered area larger — we show you what that will look like at the survey.",
      "Neighbours here are mostly in their own houses, so the noise question is about sound carrying across quiet wooded streets rather than through a party wall. Sanding is the loud part and it travels further than people expect on a still day. We name those dates, keep to the hours of whichever council applies, and avoid starting early on a residential slope where every house has a bedroom at the front.",
    ],
    handover: [
      "The walk round is in daylight and includes the fabric we worked around: where original panelling, joinery or plasterwork was in the room, we show you how it has come through and what was and was not touched. The snag list is ours and touch-in is done at that visit. You receive a record of systems, sheens and colour references per room. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Older Highgate houses move seasonally more than most, partly from exposure and partly from the ground, and a hairline at a cornice or an architrave after the first winter is the building rather than the work. External decoration on this hill also earns a look after its first proper winter. We come back for both in one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our house is listed. Can you decorate the interior?",
        a: "Yes. Interior decoration within existing rooms is ordinary work in a listed house and it is a good deal of what we do in the Village. What changes is the care: failed material is removed without taking off original surface, original panelling and plasterwork are prepared rather than stripped aggressively, and anything unusual is discussed before it is disturbed. Where a coating might be historically significant, we stop and ask rather than deciding for you.",
      },
      {
        q: "Why do cool colours look wrong in our sitting room?",
        a: "Almost certainly the trees. Rooms overlooking woodland, Waterlow Park or Highgate Wood receive green filtered light for much of the year, and it drains cool greys of their character in a way no colour card predicts. Warmer tones hold up far better. It is one of the few places where we would strongly recommend painting large samples on the wall and living with them for a few days before committing to a whole house.",
      },
      {
        q: "How often will external decoration need doing up here?",
        a: "More often than on a sheltered street lower down, and we would rather say so than let you find out. The hill is exposed and elevations take more weather, which shortens the interval for any external coating. We specify a system chosen for that exposure rather than for appearance alone, and we give an honest view of the interval at the survey. A decorate that has to be repeated in three years is not a saving.",
      },
      {
        q: "Which council do we deal with for scaffolding?",
        a: "It depends on the frontage, and it is a real question here. Camden and Haringey both hold parts of the Village and the slopes, and some streets sit with Islington, each with its own application and timescale. We check the address before applying. There is also a tree question: a scaffold within a protection area can breach an order regardless of the licence, so we check that with the correct borough too. [VERIFY.]",
      },
      {
        q: "There is a protected tree by the house. Does that stop external work?",
        a: "Not usually, but it shapes it. A scaffold standing within a tree's protection area, material stacked on roots, or a vehicle parked over them can each breach a tree preservation order or a conservation-area notice, and the consequences outlast the decorating. We check the constraints with the correct borough and plan the scaffold, standing and storage positions around them before anything is erected. [VERIFY with the right authority.]",
      },
      {
        q: "Can you decorate a Village house while we stay in it?",
        a: "Yes, though it takes more planning than a villa on the slopes because the rooms are tighter and a listed interior needs a larger protected area. We work one room at a time, restore each before opening the next, and keep a kitchen, a bathroom and somewhere to sleep usable throughout. We show you at the survey what the protected area will actually look like, so the first morning is not a surprise.",
      },
    ],
  },
  "golders-green": {
    survey: [
      {
        title: "How much house is actually in scope",
        text: "Whole-house decoration is the ordinary instruction here rather than a single room, and the survey has to cover all of it: landings, a stairwell that may be two storeys, and rooms that are larger than the neighbourhood average. We measure the whole envelope, because a figure based on a walk through the ground floor will be wrong.",
      },
      {
        title: "The stairwell, which is the hardest part",
        text: "A two-storey stairwell in these houses is the one place that needs proper access equipment, cannot be worked around a household easily, and shows every shortcut from every angle. We assess it separately from the rooms, because it usually determines the programme rather than fitting into it.",
      },
      {
        title: "Inter-war plaster and what has been done to it",
        text: "Edwardian and inter-war plaster is generally sound, but ninety years of coatings, artexed ceilings applied in the 1970s and later skim over the top mean mixed backgrounds are common. We test absorbency and soundness room by room rather than assuming a house is uniform.",
      },
      {
        title: "Joinery through a whole house",
        text: "Panelled doors on two floors, deep skirtings, picture rails, a staircase with balusters and a handrail. We count it, because in a family house of this size joinery is a larger proportion of the labour than the wall area suggests and it is the item most often underestimated.",
      },
      {
        title: "Where the family will be",
        text: "Whole-house decorating around a family needs a sequence agreed in advance: which rooms first, which stay usable, where the children sleep in each phase. We establish that at the survey because it shapes the entire programme.",
      },
    ],
    materials: [
      "In a family house the specification should vary by use rather than being uniform for tidiness. A hall, a stairwell and a kitchen take a wall finish that can be cleaned; bedrooms and a formal reception room can take a flatter, softer finish that would not survive downstairs. We specify by room and say why, so the decision is informed rather than a default applied everywhere.",
      "Where a ceiling carries an applied texture from an earlier decade, there is a genuine choice: overcoat it, skim over it, or take it off. Each is a different cost and a different disruption, and taking it off is the messiest operation in decorating. We give a straight view per room rather than recommending one approach for the house, and we say what the mess will actually be like before you decide.",
      "Colour through a whole house wants coordinating rather than matching. These houses have rooms facing several directions with quite different light, and a single colour throughout will look like several. A restrained palette with deliberate changes reads far better than one colour applied everywhere. We paint large samples in each principal room and look at them across a day before anything is ordered in quantity.",
    ],
    programme: [
      {
        title: "Sequence agreed around the family",
        text: "Which rooms in which order, which stay usable, and where everyone sleeps in each phase. In a whole-house programme this is the plan rather than a detail, and it is agreed before the first sheet goes down.",
      },
      {
        title: "Protection of floors and the route",
        text: "Floors, stairs and contents are covered, and the route from the door protected for the duration. Whole-house decorating runs for weeks, so the protection is installed to last rather than relaid every morning.",
      },
      {
        title: "The stairwell, done as its own phase",
        text: "The two-storey stairwell is worked as a distinct phase with proper access equipment, because it cannot be squeezed between rooms and it is the part of the house everyone walks through.",
      },
      {
        title: "Rooms, one at a time",
        text: "Preparation, coats and reinstatement room by room with drying respected. Each room is finished and put back before the next opens, so the family is never living in a house entirely in pieces.",
      },
      {
        title: "Final inspection in daylight",
        text: "The whole house walked with you in daylight, finishing with the stairwell and the joinery. Touch-in is done at that visit and the protection comes up last.",
      },
    ],
    access: [
      "This is the easiest access in our area for decorating as for everything else: off-street parking is common, so a crew arriving daily has somewhere to be, and materials come in at ground level without a shared hall in the way. Where there is no drive, Barnet's controlled parking and licensing apply in the ordinary way. The main friction is loading on Golders Green Road or Finchley Road at peak, which we simply avoid by scheduling deliveries mid-morning.",
      "Where external decoration is in scope, scaffolding is generally straightforward on these plots, with room to stand it and fewer pavement constraints than in the Camden conversions. Most of the inter-war stock is undesignated, though selected streets and the setting of Golders Hill Park sit in conservation areas and ordinary Barnet planning still governs windows and front boundaries. We check the address before external work is quoted in detail. [VERIFY Barnet's map.]",
    ],
    costDrivers: [
      {
        title: "The size of the house",
        text: "Whole-house decoration in a family house of this size is a larger job than the same instruction in a conversion flat, in a straightforward way. The figure follows the measured schedule rather than the postcode, which is why we walk all of it rather than estimating.",
      },
      {
        title: "The stairwell",
        text: "A two-storey stairwell needs access equipment, takes longer per square metre than any room, and shows from every angle. It is priced as its own element rather than absorbed into a house rate that hides it.",
      },
      {
        title: "What is on the ceilings",
        text: "Applied texture from an earlier decade can be overcoated, skimmed over or removed, and the three are very different in cost and disruption. Removal is the messiest operation in decorating and we say so plainly before you choose it.",
      },
      {
        title: "How much joinery there is",
        text: "Doors on two floors, deep skirtings, picture rails and a staircase with balusters is a great deal of hand work. It is the most commonly underestimated item in a whole-house figure, and we count it rather than estimating it.",
      },
    ],
    living: [
      "A family house here can be decorated around the household comfortably, provided the sequence is agreed first. We work room by room, restore each before opening the next, and make sure nobody sleeps in a room that was wet that afternoon. The stairwell is the exception: while it is being worked it is genuinely disruptive, because everyone uses it, and we would rather concentrate that into a short defined phase than spread it across the programme.",
      "Neighbours are in their own houses, which softens the noise question considerably, though a party wall in a semi carries sanding clearly. We name the loud days, work Barnet's ordinary hours, and let the immediate neighbours know. Dust extraction at the tool matters more in a house with children than anywhere else, and we clean down at the end of every day rather than the end of the week.",
    ],
    handover: [
      "We walk the whole house with you in daylight, finishing with the stairwell and the joinery, because those are where a whole-house decorate is really judged. The snag list is ours and touch-in is done at that visit. You receive a record of the systems, sheens and colour references for every room, which in a house this size is genuinely useful when one room needs attention in three years. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Houses of this period are stable, so what comes back is wear rather than movement: a hall that takes more traffic than expected, a door edge, a skirting behind furniture that has been moved since. Having the colour and sheen record makes that a small job rather than a repaint of the whole floor. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "What do we do about the artexed ceilings?",
        a: "You have three options and they are genuinely different. Overcoating keeps the texture and is quick and cheap. Skimming over it gives a flat ceiling with moderate disruption. Removing it is the messiest thing in decorating and should only be done where the other two will not give the result you want. We look at each ceiling, say what it will actually take, and describe the mess honestly before you choose. Older textured coatings may need specialist assessment before disturbance. [VERIFY the material.]",
      },
      {
        q: "How disruptive is the stairwell?",
        a: "More than any single room, because everyone uses it and while the access equipment is up, the stairs are compromised. We treat it as its own concentrated phase rather than spreading it through the programme, and we plan around school and work hours where we can. It is also the part of the house that most repays doing properly: a two-storey stairwell is seen from every landing and every angle.",
      },
      {
        q: "Should the whole house be the same colour?",
        a: "We would generally say no, and not for decorative reasons. These houses have rooms facing several directions with quite different light, and a single colour applied throughout will look like three or four colours by the time it is on the walls. A restrained palette with deliberate changes between floors or between public and private rooms reads far better. We paint large samples in each principal room before anything is ordered in quantity.",
      },
      {
        q: "Can you work while the children are at school?",
        a: "Yes, and in a family house we would generally build the programme around that. Noisy preparation in the middle of the day, quieter work and reinstatement later, and bedrooms sequenced so that nobody sleeps in a room that was wet that afternoon. We agree the shape at the survey because it affects the sequence and the calendar, and it is much easier to plan for than to retrofit in week two.",
      },
      {
        q: "Do you decorate the outside as well?",
        a: "Previously painted windows, doors and joinery where access and weather allow, yes, and on these plots scaffolding is generally straightforward with room to stand it. It is quoted separately from the interior because it is weather-dependent and has a different consent position. Most of the inter-war stock is undesignated, but selected streets and the setting of Golders Hill Park are in conservation areas, and we check the address first. [VERIFY.]",
      },
      {
        q: "How long does a whole house take?",
        a: "Longer than people expect, because preparation is most of the work and there is a lot of joinery in these houses. We write dates after walking all of it rather than estimating from the ground floor, and we sequence so the family always has somewhere to sleep and a usable kitchen and bathroom. Where you want it done around school terms or before a particular date, tell us at the survey rather than after the programme is written.",
      },
    ],
  },

  "queens-park": {
    survey: [
      {
        title: "Estate cottage joinery, which is the point",
        text: "The decorative brick cottages on the Queen's Park Estate have original doors, architraves and window joinery that are a substantial part of what the houses are. We survey that joinery on its own terms: condition, how many coats it carries, and whether the profile is still readable under them.",
      },
      {
        title: "Which conservation area, for anything external",
        text: "Brent's Queen's Park Conservation Area and Westminster's Queen's Park Estate Conservation Area are separate designations with their own audits and their own expectations of external appearance. For external decoration this is the first question, and it is answered from the address. [VERIFY which applies.]",
      },
      {
        title: "Small rooms and how much joinery is in them",
        text: "In a cottage the wall area is modest and the joinery is not. A single room can hold a door, an architrave, a window, a skirting and a picture rail, and those take longer than the walls. We count rather than measuring, because a figure based on floor area will be wrong here.",
      },
      {
        title: "The tiled path and the front door",
        text: "Original tiled paths and front doors are characteristic here, and both are on the route in for a crew arriving daily for a fortnight. We record what is there, photograph it, and protect it, because these are the details that make the houses and they are not easily replaced.",
      },
      {
        title: "How the household uses a small house",
        text: "In a two-storey cottage there is nowhere to decant to. We establish what can be moved, what must stay and where people will sleep in each phase, because the whole programme is built around that rather than around an ideal room order.",
      },
    ],
    materials: [
      "Original joinery in these cottages usually justifies proper treatment rather than another coat. Where a door has been painted every decade since it was hung, the profile has softened and the detail is disappearing; taking it back to a sound base recovers something the house was designed with. That is slow and it costs accordingly, and it is one of the few decorating decisions that materially changes a small house.",
      "Colour in a cottage benefits from restraint. The rooms are modest and the joinery is plentiful, so a scheme with too many changes reads as busy before it reads as considered. A quiet wall colour with the joinery in a deliberate related tone generally serves these houses better than a strong contrast in every room. We paint samples in place and look at them in the evening light as well as the morning.",
      "Where external decoration is in scope, the substrate and the conservation position govern. Previously painted joinery and any painted masonry take a system suited to them, and the external appearance of these houses is controlled by designations that differ between the two councils. We separate external from internal in the proposal and check the address before quoting the outside in detail.",
    ],
    programme: [
      {
        title: "Confirm the council for external work",
        text: "Brent or Westminster, from the address rather than the neighbourhood name, before anything external is planned or a scaffold licence applied for. Interior decoration proceeds independently.",
      },
      {
        title: "Path, door and hall protected",
        text: "The tiled path, threshold and hall are boarded and covered before a crew starts arriving daily. In this stock, what the protection covers cannot be convincingly replaced.",
      },
      {
        title: "Preparation, with joinery as its own task",
        text: "Walls washed, failed material removed and filled; joinery prepared by hand, with any taking-back done as a distinct operation rather than squeezed between coats. Sanding dust is extracted at the tool.",
      },
      {
        title: "Coats, room by room",
        text: "Ceilings, walls and joinery in sequence with drying respected, each room restored before the next opens. In a small house that discipline is what makes the fortnight liveable.",
      },
      {
        title: "Reinstatement and daylight inspection",
        text: "Furniture back, fittings rehung, path and hall checked against the day-one photographs, and the house walked with you in daylight with touch-in done at that visit.",
      },
    ],
    access: [
      "For decorating, the access question here is where a crew parks daily rather than how a delivery arrives. Two councils operate two parking regimes across one neighbourhood and the boundary is not marked on the street, so we confirm which applies at the survey [VERIFY the borough for the address]. Salusbury Road is busy and not a place to leave a vehicle for a working day, so a position on a residential street is established as part of the programme.",
      "The tiled path and the front door are on the route every morning for a fortnight, which is a different kind of wear from a single delivery. They are boarded and covered for the duration rather than protected on the first day and forgotten. Where external decoration is in scope, scaffolding on a narrow terraced frontage affects your neighbours, and the applicable council's licence and conservation-area expectations both apply. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "How much joinery a small room holds",
        text: "A cottage room with a door, an architrave, a window, a skirting and a picture rail has more hand work in it than its floor area suggests. Joinery, not wall area, is what drives a figure in this stock.",
      },
      {
        title: "Whether joinery is taken back",
        text: "Preparing and overcoating is quick; taking a heavily coated original door back to a sound base recovers the profile and is slow. It is a real choice with a real cost and we give a view per element rather than a blanket recommendation.",
      },
      {
        title: "External work and which council",
        text: "External decoration brings scaffolding, weather dependency and a conservation-area position that differs between Brent and Westminster. It is quoted separately so it can be decided on its own merits.",
      },
      {
        title: "Working in an occupied small house",
        text: "Where there is nowhere to move furniture to, everything is covered, shifted and re-covered daily and the working face is small. That is slower than an empty house and it is priced as what it is.",
      },
    ],
    living: [
      "In a two-storey cottage there is nowhere to go, so the sequence is built around the household from the start. One room at a time, restored before the next opens, and the kitchen and a bedroom kept usable throughout. We move furniture to the middle and cover it properly rather than pushing it into a corner under a sheet, and it goes back when that room is finished rather than at the end of the job.",
      "Terraced neighbours are immediate here, with thin party walls and narrow back-to-back gardens. Sanding is the loud part of decorating and it is clearly audible next door. We name those days, keep to the applicable council's hours, and tell the neighbours in advance. In a street where everybody knows everybody, that courtesy is worth more than an extra hour on a Friday afternoon.",
    ],
    handover: [
      "The house is walked with you in daylight, finishing with the joinery, because in a cottage the joinery is what the decorate is judged on. The tiled path, threshold and hall are checked against the day-one photographs at the same visit. We write the snag list and touch in then. You receive a record of systems, sheens and colour references per room. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Small houses show wear at predictable points: the hall, the stair, the door edges and the skirting by the kitchen. Having the colour and sheen record means a section can be brought back without redecorating a floor. Where original joinery was taken back, it is worth a look after a season so any adjustment is made while the work is fresh. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Should we strip the original doors back?",
        a: "On good original joinery in these cottages, it is often the single most worthwhile decision in the job. Decades of coating soften the profile until a well-made door reads as a slab, and taking it back to a sound base recovers something that cannot be bought. It is slow and priced accordingly, so we give a view door by door rather than recommending it for the whole house. Some later replacements simply do not justify it.",
      },
      {
        q: "Can we change the colour of the outside?",
        a: "Not as a free choice, and which rules apply depends on which side of the boundary you are on. Brent's Queen's Park Conservation Area and Westminster's Queen's Park Estate Conservation Area are separate designations with their own expectations of external appearance, and the Estate in particular is a coherent composition rather than a row of individual houses. We check the address and say what applies before quoting external work. [VERIFY.]",
      },
      {
        q: "Will the tiled path be damaged by a crew coming in every day?",
        a: "Not if it is boarded and covered for the duration rather than on the first morning and then forgotten. Daily foot traffic over a fortnight is a different kind of wear from a single delivery, and these paths chip at the edges rather than break all at once. We photograph before and after and check it with you at handover. Matching a broken original tile is difficult and rarely convincing.",
      },
      {
        q: "Is there enough room to decorate around us?",
        a: "It is tight and it is done regularly. In a two-storey cottage we work one room at a time, restore each before opening the next, and keep the kitchen and a bedroom usable throughout. Furniture goes to the middle under proper covers rather than into a corner under a sheet. We are honest at the survey about the fact that in a house this size the work is present rather than tucked away.",
      },
      {
        q: "Which council's parking rules apply to your crew?",
        a: "It depends on the street, and the boundary between Brent and Westminster is not marked on the ground. For a delivery it hardly matters; for a crew parking daily across a fortnight it matters considerably, and a wrong assumption produces penalty notices rather than an inconvenience. We confirm the borough from the address at the survey and establish a workable position as part of the programme. [VERIFY.]",
      },
      {
        q: "Can you decorate one room rather than the whole house?",
        a: "Yes, and in a cottage a single room is a perfectly sensible instruction. The preparation specification is written the same way whether it is one room or the whole house, because the substrate and the joinery do not care about the size of the job. What changes is the sequencing around the household, which is simpler for one room. We would rather do one room properly than three quickly.",
      },
    ],
  },

  "muswell-hill": {
    survey: [
      {
        title: "Edwardian joinery, and how much of it survives",
        text: "These houses were built with generous joinery — panelled doors, deep skirtings, picture rails, substantial staircases and timber sash windows — and much of it is still there. We assess condition and accumulated coating element by element, because this is where the hours go and where the character of the house lives.",
      },
      {
        title: "The hall and staircase as one element",
        text: "Halls here are wide and staircases substantial, often rising through two floors with a landing gallery. We survey that as a single element rather than as a series of rooms, because it needs its own access equipment, its own phase and its own figure.",
      },
      {
        title: "Sash windows, assessed as joinery",
        text: "Timber sashes in these houses are frequently original and frequently in need of more than paint. We check cords, beads, putty and sills, and we say clearly what is a joinery repair and what is a decorating item, because coating over a failing sill hides it for two years and no longer.",
      },
      {
        title: "Ceiling heights and what they need",
        text: "Rooms are tall by the standards of most of the stock we work in, which means access equipment in most of them and more wall area than a floor plan suggests. We record what each room needs so the equipment is planned rather than improvised.",
      },
      {
        title: "How the family will live through it",
        text: "Whole-house decorating in an occupied family house needs a sequence agreed before it starts: which rooms first, which stay usable, where everyone sleeps in each phase. We establish that at the survey, because the sequence is the programme.",
      },
    ],
    materials: [
      "Generous Edwardian rooms with good light will carry a fuller scheme than most of the stock we work in, but they also show preparation shortcuts more clearly because there is more wall and more light on it. The material decision that matters most is sheen: on a tall wall lit by a large sash, anything above a low sheen advertises every filled crack and every roller lap.",
      "Joinery in these houses deserves a coherent approach through the whole floor rather than room-by-room improvisation. One system and one sheen for doors, architraves and skirtings, with the staircase treated as part of the same family, makes a house read as decorated rather than as a series of jobs. Where original joinery carries heavy accumulated paint, we say which elements justify taking back and which do not.",
      "Sash windows are a material decision as well as a joinery one. A window that is being coated needs the right preparation at the putty line and the sill, and a window that needs repair should have it before painting rather than afterwards. We are explicit about which of your windows fall into which category, because the answer changes both the figure and the interval before the work needs doing again.",
    ],
    programme: [
      {
        title: "Sequence agreed around the household",
        text: "Room order, which stay usable, and where the family sleeps in each phase, settled before the first sheet goes down. In a whole-house programme this is the plan rather than a detail.",
      },
      {
        title: "Protection of the hall and the original floors",
        text: "The wide hall, the stair and any original floors on the route are covered for the duration. These halls take everything that comes into the house and they show damage.",
      },
      {
        title: "The staircase as its own phase",
        text: "The hall and staircase are worked as a distinct concentrated phase with proper access equipment, because they cannot be fitted between rooms and everybody uses them.",
      },
      {
        title: "Rooms and joinery, one at a time",
        text: "Preparation, coats and reinstatement room by room with drying respected, joinery prepared by hand, and sanding dust extracted at the tool rather than cleaned afterwards.",
      },
      {
        title: "Daylight inspection, finishing with the joinery",
        text: "The house walked with you in daylight, ending with the doors, architraves and staircase, which are where the work is really judged. Touch-in happens at that visit.",
      },
    ],
    access: [
      "For decorating, the hill matters as a daily parking question rather than a delivery one. Some streets are steep and awkward for a vehicle to stand on all day, and Haringey's controlled parking applies on many roads [VERIFY the CPZ]. We establish a workable position at the survey, because a crew walking ten minutes with ladders each morning loses time every day rather than once. Deliveries are timed away from the school run, which on some of these streets is the busiest part of the day.",
      "Inside the house, access is unusually easy: wide halls, generous doorways and substantial landings mean equipment and materials move without negotiation. Where external decoration is in scope, scaffolding on these plots is generally straightforward, but the Muswell Hill Conservation Area, designated on 1 March 1974, and Fortis Green Conservation Area cover the Broadway and many residential streets, and residential fenestration is sensitive. We check the address before external work is quoted. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "The quantity of joinery",
        text: "Panelled doors on two or three floors, deep skirtings, picture rails, sash windows and a substantial staircase amount to a great deal of hand work. In these houses joinery is routinely the largest single element of a decorating figure.",
      },
      {
        title: "The hall and staircase",
        text: "A two-storey stairwell with a landing gallery needs access equipment, takes longer per square metre than any room, and is seen from every angle. It is priced as its own element rather than hidden in a house rate.",
      },
      {
        title: "Whether windows need joinery work",
        text: "Where cords, beads, putty or a sill need attention, doing it before decorating is far cheaper than afterwards. It is quoted separately and honestly, and whether it goes into scope is your decision.",
      },
      {
        title: "Room height",
        text: "Taller rooms mean more wall area and slower work from platforms in most of the house. It is priced openly and it changes the sequence, because overhead work comes before a room is refurnished.",
      },
    ],
    living: [
      "These houses decorate around a family well. There is enough space to work one room at a time with the rest of the house functioning normally, wide halls mean the covered route does not become a bottleneck, and rooms can be sealed at their frames rather than screened. We restore each room before opening the next so the family is never living in a house entirely in pieces. The staircase phase is the exception and we concentrate it deliberately.",
      "Neighbours are in their own houses, but these streets are quiet and sound travels down a hill. Sanding is the loud part and it carries. We name those days, keep to Haringey's ordinary hours, and avoid early starts on a residential slope. Dust extraction at the tool matters most in a house with children, and we clean down at the end of each day rather than at the end of the week.",
    ],
    handover: [
      "We walk the house with you in daylight and finish with the joinery and the staircase, because that is where an Edwardian decorate is judged: the cut line at an architrave, the edge of a panel, the underside of a handrail. The snag list is ours and touch-in is done at that visit. You receive a record of systems, sheens and colour references per room. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Edwardian houses move with the seasons, so a hairline at a cornice or an architrave after the first winter is the building rather than the work. Where sash windows were coated, the first proper winter tells you whether any of them needed more than paint. We come back for both as one visit rather than in pieces. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our sash windows need attention. Is that part of decorating?",
        a: "Preparing and coating them is. Replacing a broken cord, refixing a loose staff bead, renewing perished putty or repairing a rotten sill is joinery, and it is quoted separately and honestly. Doing it before decorating is far cheaper than afterwards, because the window has to be disturbed either way. We tell you at the survey which of your windows need more than paint rather than coating over a problem that will reappear.",
      },
      {
        q: "How long does the staircase take?",
        a: "Longer than a room of the same area, because everything is worked from platforms, the balustrade is hand work, and the whole thing is seen from every landing. We treat it as its own concentrated phase rather than spreading it through the programme, since everybody has to use the stairs. It is also the part of the house that most repays doing well, which is why we price it as a distinct element.",
      },
      {
        q: "Can you decorate around the family?",
        a: "Yes, and these houses suit it. There is enough space to work one room at a time with the rest of the house normal, the wide halls keep the covered route from becoming a bottleneck, and rooms seal at their frames. We restore each room before opening the next, and we sequence bedrooms so nobody sleeps in a room that was wet that afternoon. The staircase phase is the disruptive one and we concentrate it.",
      },
      {
        q: "Are we in a conservation area?",
        a: "Quite possibly. Haringey designated the Muswell Hill Conservation Area on 1 March 1974, covering the Broadway and many residential streets, and Fortis Green Conservation Area was designated the same day to the north-west. It has no bearing on interior decoration. It bears directly on external work, particularly anything involving windows, and we check the address before quoting the outside in detail. [VERIFY on Haringey's map.]",
      },
      {
        q: "Where will your crew park?",
        a: "Somewhere agreed at the survey rather than found each morning. Some of these streets are steep and awkward for a vehicle to stand on all day, and Haringey's controlled parking applies on many roads. For a programme running weeks, a crew walking ten minutes with ladders is a real daily loss. We establish the position as part of the plan and keep deliveries away from the school run. [VERIFY the CPZ.]",
      },
      {
        q: "Should the joinery be the same through the house?",
        a: "Generally yes, and it is one of the things that makes a whole-house decorate look considered rather than assembled. One system and one sheen for doors, architraves and skirtings, with the staircase treated as part of the same family, reads far better than choices made room by room. Wall colours can and usually should vary. We would rather make the joinery decision once, properly, at the start.",
      },
    ],
  },

  "crouch-end": {
    survey: [
      {
        title: "What the conversion did to the rooms",
        text: "In a converted house the original room proportions have often been interrupted: a cornice that stops at a partition, a picture rail that runs into a stud wall, a ceiling rose off-centre in what is now a bedroom. We record those interruptions, because how they are handled decides whether a decorated room reads as coherent or as a compromise.",
      },
      {
        title: "The tiled hall and what it takes",
        text: "The shared tiled hall is on the route every morning for a fortnight, and daily foot traffic is a different kind of wear from a single delivery. We photograph it, measure what needs boarding, and specify protection for the duration rather than for the first day.",
      },
      {
        title: "Original mouldings under later coatings",
        text: "Cornices, ceiling roses and picture rails here have usually been painted many times and the detail has softened. We assess whether any of it justifies opening up, because it is slow specialist work with a very different figure from another coat.",
      },
      {
        title: "Where the movement is in the building",
        text: "Converted houses move at predictable points: party wall junctions, ceiling perimeters, and where a rear addition meets the original house. We look for that pattern rather than at individual cracks, and we say where lining is genuinely warranted.",
      },
      {
        title: "How the flat is used day to day",
        text: "In a garden or first-floor flat there is limited space to decant furniture. We establish what can move, what must stay and where you will sleep in each phase, because the sequence is built around that rather than around an ideal order.",
      },
    ],
    materials: [
      "Where a conversion has interrupted an original cornice or picture rail, the material decision is whether to continue the detail, stop it deliberately, or simplify. Continuing a moulding into a modern partition rarely convinces. Stopping it cleanly with a considered return generally looks better than either pretending the partition is not there or removing the original detail. We draw the junction before anything is coated.",
      "Colour in these flats has to be tested in place. A rear room in a converted Victorian house can get far less light than its plan suggests, and a first-floor front room with a bay can get a great deal. The same colour will not behave the same in both. We paint large samples on the wall and look at them at the times you actually use each room, rather than under a work light with everything open.",
      "Ceilings in converted houses have frequently been repaired more than once, and the material answer is often preparation rather than paint. A stabilising primer across mixed absorbency, filling that is cut out rather than smeared, and lining where movement and patching would otherwise telegraph. None of that is glamorous and all of it is what determines whether the ceiling still looks right in two years.",
    ],
    programme: [
      {
        title: "Freeholder position and neighbour notice",
        text: "Where external work or common parts are involved, the freeholder's position is settled. The other households are told the dates, because decorating means daily traffic through a shared hall for weeks rather than a single delivery.",
      },
      {
        title: "Hall protected for the duration",
        text: "The tiled hall, the stair and the route are boarded and covered and stay that way until the job is finished, not laid out and lifted each day.",
      },
      {
        title: "Preparation and the moulding junctions",
        text: "Washing down, stripping failed material, stabilising mixed backgrounds, filling and lining where the survey identified movement. Cornice and picture rail junctions at partitions are resolved deliberately at this stage.",
      },
      {
        title: "Coats, room by room",
        text: "Ceilings, walls and joinery in sequence with drying respected, each room restored before the next opens. In a flat this size that discipline is what makes it liveable.",
      },
      {
        title: "Reinstatement, hall returned, inspection",
        text: "Furniture back, fittings rehung, the shared hall returned to the day-one photographs, and the flat walked with you in daylight with touch-in at that visit.",
      },
    ],
    access: [
      "For decorating, the access issue in Crouch End is the shared front door rather than the street. A crew crosses somebody else's hall every morning for a fortnight, which is materially different from one delivery, so the hall is protected for the duration and the other households get the dates. Parking varies genuinely road by road between controlled zones and less restricted streets, and we establish a workable position at the survey [VERIFY street by street].",
      "The Broadway is busy and a poor place to leave a vehicle for a working day, so the crew parks on a residential street. Where external decoration is in scope, scaffolding on a terraced frontage affects neighbours directly, Haringey issues the licence, and the Crouch End Conservation Area, designated on 25 October 1974, bears on the elevation. Interior decoration that changes nothing outside is a separate instruction. [VERIFY the boundary for the address.]",
    ],
    costDrivers: [
      {
        title: "How much preparation the backgrounds need",
        text: "Original plaster, a partition from a conversion and a ceiling repaired after a leak all in one room means unifying three backgrounds. That preparation is where the labour goes and it is established at the survey rather than discovered at first coat.",
      },
      {
        title: "Whether mouldings are opened up",
        text: "Reviving a softened cornice or ceiling rose is slow specialist work and genuinely transformative. Painting over it is quick. Both are legitimate; they are very different figures and the choice should be informed.",
      },
      {
        title: "Protecting common parts properly",
        text: "Boarding a shared tiled hall for the duration and reinstating it takes time and materials on a job where none of that hall is yours. It is included, and it is what your neighbours will judge the work by.",
      },
      {
        title: "Working in an occupied flat",
        text: "Covering, moving and reinstating daily with a small working face is slower than an empty flat and rules out spray in most rooms. It is also what makes staying possible, and it is priced honestly.",
      },
    ],
    living: [
      "Most clients here stay, and in a garden or first-floor flat it works because rooms can be worked one at a time and sealed at the frame. We restore each before opening the next and keep the kitchen, the bathroom and a bedroom usable throughout. What we cannot do is make a shared hall feel private during a fortnight of daily traffic, and we are straightforward about that at the survey.",
      "In a house of two or three flats, the neighbours notice decorating more than they notice a one-day delivery, because it goes on. We give them the dates, keep the hall clear every evening, and name the days when sanding will be audible. Dust extraction at the tool makes far more difference in a flat this size than any amount of sheeting, and we clean down daily rather than weekly.",
    ],
    handover: [
      "The flat is walked with you in daylight, room by room, and the shared hall is checked against the day-one photographs at the same visit. We write the snag list and touch in then. You receive a record of systems, sheens and colour references per room, which in a flat likely to be decorated in parts later is genuinely useful. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Converted houses move, and the first winter after decorating shows where. A hairline at a ceiling perimeter, or along the line where a rear addition meets the original house, is the building rather than the paint. It is worth attending to once rather than watching it lengthen. Telephone 020 7101 3168 or write to office@hpsg.co.uk and we return for the whole list at once.",
    ],
    moreFaqs: [
      {
        q: "Our cornice stops halfway across the room where a wall was built. What can be done?",
        a: "Three honest options. Continue the moulding into the partition, which rarely convinces because the partition is not the same construction and the eye knows it. Stop the cornice cleanly with a considered return, which usually reads best. Or remove it entirely, which we would resist where it is original. We draw the junction and show you before anything is coated, because it is the detail you will notice every time you sit in the room.",
      },
      {
        q: "Who protects the shared hall, and for how long?",
        a: "We do, and for the whole programme rather than the first day. Decorating means a crew crossing that hall every morning for a fortnight, which is a different kind of wear from one delivery, so it is boarded and covered until we finish. We photograph it before we start, keep it clear each evening, tell the other households the dates, and check it with you at handover against those photographs.",
      },
      {
        q: "Is our ceiling worth lining?",
        a: "Sometimes, and it should be a decision rather than a habit. Ceilings in converted houses here have often been repaired more than once, and where there is live cracking or patching from several eras, lining gives a consistent surface that paint alone will not. Where the ceiling is sound, it is an unnecessary cost. We look at the pattern of cracking rather than individual cracks and say where it is warranted, in writing.",
      },
      {
        q: "Can you decorate while we live in a one-bedroom flat?",
        a: "Yes, and it is a good part of what we do here. One room at a time, furniture to the middle under proper covers rather than shoved into a corner, dust extracted at the tool, and each room restored before the next is opened. We keep the kitchen, the bathroom and somewhere to sleep usable throughout. It is slower than an empty flat and priced accordingly, and it beats moving out.",
      },
      {
        q: "Will a dark colour work in the back room?",
        a: "It depends on that room rather than on the colour, and the only honest way to know is to try it. Rear rooms in these converted houses often get considerably less light than the plan suggests, with one window and a neighbouring wall close by. A colour that looks rich in a showroom can read flat and closed there. We paint large samples in place and look at them when you actually use the room.",
      },
      {
        q: "Does the conservation area affect what colour we paint inside?",
        a: "No. Haringey's Crouch End Conservation Area, designated on 25 October 1974, is concerned with the Broadway and the appearance of the residential streets — elevations, shopfronts, windows and what is visible from the street. Interior decoration is not its business and you may paint your rooms whatever you like. External redecoration is a different matter and we check the address before quoting it. [VERIFY the boundary.]",
      },
    ],
  },
  "kentish-town": {
    survey: [
      {
        title: "How many hands the room has been through",
        text: "The grain here is dense and much altered, and a single room can carry original plaster, a 1970s partition, a patch where a doorway closed and a ceiling replaced after a leak. We map that at the survey, because a uniform specification across four different backgrounds is how a freshly decorated room dries patchy.",
      },
      {
        title: "Damp and salts below ground",
        text: "Where a lower-ground room is in scope we look for moisture and the salting that comes with it. A coating over a wall drawing moisture and salts through will blister regardless of the system, and we would rather report the condition than take the instruction as it stands.",
      },
      {
        title: "Whether a workshop interior wants lining out",
        text: "Former workshop and studio spaces here have surfaces that were never domestic: painted brick, exposed structure, industrial-scale windows. The survey question is whether to line them out or decorate them as they are, and we give a view rather than assuming a conventional flat is the goal.",
      },
      {
        title: "Thin party walls and sound",
        text: "Terraces sit tight together and party walls are often thinner than expected. Sanding is the loud part of decorating and it carries. We establish who is next door and what hours they keep, because that shapes when the noisy phase can run.",
      },
      {
        title: "What can be moved in a small flat",
        text: "In a conversion flat there is nowhere to decant. We establish what moves, what stays and where you will sleep in each phase, because the sequence is built from that rather than from an ideal room order.",
      },
    ],
    materials: [
      "Where backgrounds are as mixed as they are here, the unifying preparation matters more than the paint. A stabilising primer across variable absorbency, filling cut out rather than smeared, and lining where patching and movement would otherwise telegraph. Choosing an expensive finish and applying it over four different backgrounds produces an expensive patchy wall, which is a common and avoidable outcome.",
      "In a lower-ground room the specification is about light and about moisture. A pale finish, lighting considered as part of the decorating rather than left to a single pendant, and systems that will tolerate a room with limited ventilation. Where moisture is present in the structure we say so and separate that problem from the decorating rather than covering one with the other.",
      "Former workshop interiors take a plainer, tougher specification well: painted brick left as painted brick, structure left visible where it is honest, and finishes that can take knocks. The risk is decorating one of these spaces as though it were a conventional flat, which loses what makes it interesting and rarely convinces. We say at the survey which approach we think the space wants and why.",
    ],
    programme: [
      {
        title: "Tenure and neighbour notice",
        text: "The lease position where external work or common parts are involved, and plain notice to the neighbours about the sanding days. In a dense terraced street that notice does more than it sounds.",
      },
      {
        title: "Damp assessed before anything is coated",
        text: "In a lower-ground room, moisture in the structure is reported before decoration is applied over it. Sometimes that changes the instruction, and that is better than a finish which fails within a year.",
      },
      {
        title: "Protection, and the route in",
        text: "Floors, stairs and any shared hall are covered for the duration. Where the route is down external steps to a lower-ground flat, that route is protected too and kept clear in wet weather.",
      },
      {
        title: "Preparation and unifying the backgrounds",
        text: "Washing, stripping failed material, stabilising mixed absorbency, filling and lining where warranted. Sanding dust is extracted at the tool, which in a small flat is the difference between a working fortnight and an unlivable one.",
      },
      {
        title: "Coats, then reinstatement room by room",
        text: "Ceilings, walls and joinery in sequence with drying allowed, each room restored before the next opens, and a daylight inspection with touch-in at that visit.",
      },
    ],
    access: [
      "Kentish Town Road is a corridor and a poor place to leave a vehicle for a working day, and the residential side streets are narrow and densely parked with residents' bays on both sides. For a crew arriving every morning for a fortnight, a workable parking position is a genuine programme item rather than a detail, and we establish it at the survey under Camden's controlled parking [VERIFY the CPZ].",
      "Where the flat is below ground, the route in is often down external steps from the street, which needs protecting and keeping safe in wet weather when a crew is using it repeatedly. Where external decoration is in scope, scaffolding on a terraced frontage affects neighbours, and several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park while the High Street is less uniformly designated. We check the address. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "How mixed the backgrounds are",
        text: "Unifying original plaster, a later partition, a patch and a replaced ceiling takes more preparation than the room's size suggests. It is where the labour goes in this stock, and it is established at the survey rather than at first coat.",
      },
      {
        title: "Whether a below-ground room is sound",
        text: "Decorating a dry lower-ground room is ordinary. Decorating one where moisture and salts are coming through is work that will fail. We report the condition rather than taking the instruction and watching it blister.",
      },
      {
        title: "Whether lining is needed",
        text: "Lining is a real cost and it is specified where movement and patching would otherwise telegraph, not as a default. We say where and why in the proposal so it reads as a decision rather than an upsell.",
      },
      {
        title: "How constrained the hours are",
        text: "Where neighbours are immediate and somebody works from home, the sanding phase runs in shorter windows. That lengthens the calendar without changing the work, and it is better planned than negotiated in week two.",
      },
    ],
    living: [
      "In a conversion flat there is nowhere to go, so the programme is built around you: one room at a time, restored before the next opens, kitchen and bathroom and somewhere to sleep usable throughout. Where the flat is below ground, dust and drying both behave worse than they would upstairs — limited ventilation and a room that holds moisture — so we plan ventilation deliberately rather than assuming an open window will do it.",
      "Party walls here are thin and in a street of conversions there may be four or five households within earshot. Sanding is the loud part and it is clearly audible next door. We name those days, keep to Camden's hours, and tell the neighbours in advance. Where a neighbour works from home and asks for shorter noisy windows, that is much easier built into the dates at the start than negotiated once the job is running.",
    ],
    handover: [
      "The flat is walked with you in daylight, room by room, because artificial light hides a missed cut line and flatters uneven sheen — and in a lower-ground room, daylight is in short supply, so we make a point of looking properly. We write the snag list and touch in at that visit. You receive a record of systems, sheens and colour references per room. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Altered buildings move at the joins, and the first winter after decorating shows where: a hairline at a ceiling perimeter, along a party wall junction, or where a partition meets original plaster. In a below-ground room it is worth looking after a season for any sign that moisture is moving. We come back for both in one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Our basement flat gets damp in winter. Can it be decorated?",
        a: "It can be painted; whether it should be is a different question. Where moisture is coming through the wall it brings salts with it, and any coating over that will blister and fail regardless of the system used. We look for the signs at the survey and report what we find rather than taking the instruction and letting it fail. Sometimes the honest answer is that the room needs work that is not a decorating instruction.",
      },
      {
        q: "Should a converted workshop be lined out or left as it is?",
        a: "It depends on the space and on what you want from it, and we will give a view rather than assuming. Painted brick, exposed structure and industrial windows are what make these interiors worth having, and lining them all out to produce a conventional flat usually loses that without gaining much. Where a surface is genuinely unsound or unpleasant, lining it out is the right answer. We say which is which at the survey.",
      },
      {
        q: "Why does our newly painted wall look patchy?",
        a: "Almost always mixed absorbency rather than the paint. Where original plaster, a later partition and a filled patch sit in one wall, each drinks the coating differently, and a topcoat straight onto that will dry at different sheens even if the colour matches. The fix is a stabilising primer across the whole surface first, and in bad cases lining. We test for it at the survey because it is the most common complaint in this stock.",
      },
      {
        q: "Can you work shorter hours because our neighbour works from home?",
        a: "Yes, and it is far better planned than negotiated. Sanding is the loud part of decorating and it carries clearly through the thin party walls in these terraces. Shorter noisy windows lengthen the calendar rather than changing the work, so we build that into the dates from the start. We ask about neighbours at the survey for exactly this reason, and we tell them the dates ourselves.",
      },
      {
        q: "Where will your crew park?",
        a: "Somewhere established at the survey rather than found each morning. Kentish Town Road is no place to leave a vehicle for a working day and the side streets are narrow with residents' bays on both sides, so a position has to be arranged. Over a fortnight this is a real cost in lost time if it is left to chance, and penalty notices are not a substitute for planning. [VERIFY the CPZ for the street.]",
      },
      {
        q: "Does the conservation area affect interior decorating?",
        a: "No. Several Camden conservation areas cover parts of Kentish Town and the rise toward Dartmouth Park, and the High Street is less uniformly designated, but all of them are concerned with the outside of the building. Interior decoration is not their business. External redecoration and anything involving scaffolding on the elevation is, and we check the address before quoting external work in detail. [VERIFY.]",
      },
    ],
  },

  kilburn: {
    survey: [
      {
        title: "Camden or Brent, for anything external",
        text: "Kilburn High Road is the historic boundary and the two councils licence and enforce separately. For decorating it matters at two points: where the crew parks for a fortnight, and any scaffolding licence for external work. We confirm the authority from the address. [VERIFY for the frontage.]",
      },
      {
        title: "Which of several building types this is",
        text: "Victorian terrace conversion, mansion block, later local-authority or infill housing, or a flat above a shop: each has different wall construction, different joinery and a different preparation specification. We establish the building type before writing anything, because they are not decorated from the same assumptions.",
      },
      {
        title: "What is behind the paint",
        text: "Wall construction here varies more than anywhere else we work — solid Victorian brick with lath and plaster, later blockwork, dry lining, or whatever a previous conversion built. We test soundness and absorbency room by room rather than assuming the flat is uniform.",
      },
      {
        title: "The route in, used daily",
        text: "Flats above High Road shops are reached by narrow side doors and steep straight stairs, sometimes shared and occasionally passing a business. For a crew arriving every morning for weeks, that route needs protecting and its use agreed with whoever controls it.",
      },
      {
        title: "Who is below, and what hours they keep",
        text: "Above a commercial unit, early starts may be perfectly acceptable; in a residential block they are not. Over a programme running weeks rather than days, establishing this in writing at the survey is worth a meaningful amount of calendar.",
      },
    ],
    materials: [
      "Because the stock varies so widely, the specification follows the construction. Solid plastered walls in a Victorian conversion take a traditional preparation and a forgiving finish. Dry-lined walls in later housing take a different approach and show different defects. A flat over a shop may have all of it in one room. We test at the survey and specify per surface rather than per flat.",
      "Where the route in is a narrow side door and a steep stair, materials arrive in what can be carried rather than in bulk, and access equipment is chosen to suit. That is a practical constraint rather than a limitation on the finish, but it means staged deliveries and equipment that stays in the flat rather than being carried out each night.",
      "In later blocks, sound and wear matter to the specification. A hall that serves several rooms takes a wall finish that can be cleaned; a flat above a business may want a surface that tolerates the vibration and grime of a busy road. We specify by use rather than for uniformity and say which rooms are getting what, so the decision is yours rather than a default.",
    ],
    programme: [
      {
        title: "Confirm the council and the tenure",
        text: "Which borough for parking and any external licence, and who consents where common parts or the elevation are involved. In a neighbourhood split between two authorities this is real work rather than a formality.",
      },
      {
        title: "Route protected for the duration",
        text: "The side door, the stair and any shared landing are covered and stay covered. A crew using a narrow shared stair daily for weeks is a different kind of wear from a delivery.",
      },
      {
        title: "Preparation matched to the construction",
        text: "Washing, stripping failed material, stabilising mixed backgrounds, and filling appropriate to whether the wall is plaster or dry lining. Sanding dust is extracted at the tool.",
      },
      {
        title: "Coats, with drying respected",
        text: "Ceilings, walls and joinery in order, room by room, with drying allowed. Above a busy road, ventilation is planned deliberately rather than by opening windows onto traffic.",
      },
      {
        title: "Reinstatement and daylight inspection",
        text: "Each room restored before the next opens, the shared route returned to how it was, and the flat walked with you in daylight with touch-in at that visit.",
      },
    ],
    access: [
      "Kilburn High Road is a major route and not a place to leave a vehicle for a working day, so a parking position on a residential side street is established at the survey with whichever borough owns the frontage [VERIFY Camden or Brent]. Two authorities means two regimes on one neighbourhood, and for a crew parking daily across a fortnight a wrong assumption produces penalty notices rather than an inconvenience.",
      "Where the route to a flat passes a shop's entrance or shares a passage with a business, its use for weeks rather than a day has to be agreed in writing with whoever controls it. Where external decoration is in scope, scaffolding licences come from the relevant borough, and named conservation areas here cover selected streets rather than the whole neighbourhood, with High Road upper-floor windows sometimes carrying separate design guidance. [VERIFY with Camden and Brent.]",
    ],
    costDrivers: [
      {
        title: "What the walls turn out to be",
        text: "Plaster, dry lining and whatever a conversion built each take different preparation and show different defects. Where a flat holds several constructions, the unifying work is where the labour goes and it is established at the survey.",
      },
      {
        title: "The stair, used every day",
        text: "Carrying crew, materials and access equipment up a narrow steep stair daily for weeks is real time. It is the most predictable cost driver on a flat above the High Road and it is named rather than absorbed.",
      },
      {
        title: "Which borough, and its parking",
        text: "Two regimes on one neighbourhood, and a crew parking daily for a fortnight. A modest line that becomes a real one if the wrong assumption is made, which is why the address decides it.",
      },
      {
        title: "Occupied or empty",
        text: "An occupied furnished flat means covering, moving and reinstating every day with no spray. An empty flat between tenancies is faster and can take a better joinery finish. They are not the same figure.",
      },
    ],
    living: [
      "Whether staying is comfortable depends entirely on the building. A converted terrace flat with separate rooms can be worked one at a time with doors sealed at the frame. A small flat over a shop where every room opens off one space cannot, and we say so at the survey rather than letting you discover it. Where you stay, the kitchen, the bathroom and somewhere to sleep stay usable throughout.",
      "The neighbour situation here is unusually varied: a household above in a conversion, a business below on the High Road, several flats around in a later block. A shop below may be entirely relaxed about an eight o'clock start, which can shorten a programme meaningfully. We find out who is actually affected, name the sanding days, and work to whichever hours are tighter.",
    ],
    handover: [
      "The flat is walked with you in daylight, room by room, and the shared or commercial route is inspected with the protection removed and the surfaces checked underneath. We write the snag list and touch in at that visit. You receive a record of systems, sheens and colour references per room, which in a flat of mixed construction is more useful than usual. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "In buildings altered as often as these, what reappears tends to be at the joins: where dry lining meets plaster, where a partition meets an original wall, or along a ceiling perimeter after a heating season. Above a busy road, grime on a fresh surface also shows sooner than elsewhere. We come back and look rather than leaving it. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Which council's parking rules apply to your crew?",
        a: "It depends which side of Kilburn High Road you are on: east toward West Hampstead is generally Camden, west of it is Brent, and each operates its own regime. For a one-day delivery it barely matters; for a crew parking daily across a fortnight it matters a great deal, because a wrong assumption produces penalty notices rather than an inconvenience. We confirm it from the address at the survey. [VERIFY.]",
      },
      {
        q: "Our walls are dry lined. Does that change anything?",
        a: "Yes, in preparation and in what can go wrong. Dry lining shows different defects from plaster — joints and fixings rather than cracks and blown patches — and it takes filling and finishing differently. Where a flat has dry lining in one room and plaster in the next, which is common here, the two need different handling. We test at the survey rather than assuming the flat is uniform.",
      },
      {
        q: "Can you start early if there is a shop below us?",
        a: "Often, and it is worth asking, because above a commercial unit an early start may be entirely acceptable where it would not be in a residential block. Over a programme running weeks that can shorten the calendar meaningfully. We establish the position with the business and the lease at the survey rather than assuming, and we work to whatever is agreed rather than pushing at it.",
      },
      {
        q: "How do you get materials up a narrow stair every day?",
        a: "In staged deliveries sized to what can be carried in one session, with access equipment kept in the flat rather than carried out each evening. The stair is protected for the duration rather than covered daily. It is planned at the survey, because a crew improvising this on the first morning loses a day and a crew improvising it every morning loses a week across a programme.",
      },
      {
        q: "Is a flat east of the High Road different from one west of it?",
        a: "Often. The streets east toward West Hampstead are more uniformly Victorian conversions with lath and plaster, original joinery and shared halls. West of the road the grain includes larger blocks and a wider range of periods, with different wall construction and different joinery. Both are ordinary work and the standard is the same. The preparation specification is not, and that is what the survey establishes.",
      },
      {
        q: "Do we need permission to decorate outside?",
        a: "Possibly, and it depends on the street and the council. Named conservation areas here cover selected streets rather than the whole of Kilburn, and there are two authorities' maps to check, with High Road upper-floor windows sometimes carrying separate design guidance. Interior decoration is not affected at all. We check the address before quoting external work in detail rather than assuming. [VERIFY with Camden and Brent.]",
      },
    ],
  },

  "hampstead-garden-suburb": {
    survey: [
      {
        title: "Where the Trust's interest begins and ends",
        text: "Interior decoration is yours; the external appearance is not. The Hampstead Garden Suburb Trust runs a Scheme of Management under its own Act of Parliament alongside Barnet's planning and a long-standing Article 4 direction, and even repainting a previously painted external surface can need written consent. The survey separates internal from external at the outset. [VERIFY the current Trust guidelines for the item of work.]",
      },
      {
        title: "Original Arts and Crafts joinery",
        text: "These houses were built with joinery that is a substantial part of their character: doors, ironmongery, window joinery, stairs. We assess each element for condition and accumulated coating, because taking good original joinery back to a sound base is one of the few decorating decisions that genuinely changes a Suburb interior.",
      },
      {
        title: "Cottage or larger house",
        text: "The Suburb spans modest cottages and substantial free-standing houses, and the decorating instruction differs completely. We establish the scale first, because a cottage is a precise small programme and a larger house is a whole-house one with a stairwell to plan around.",
      },
      {
        title: "What the last three decorates left",
        text: "Walls and ceilings here have usually been coated many times, sometimes with materials that no longer suit the substrate underneath. We test adhesion and absorbency rather than assuming, because a coating that lifts is a preparation job rather than a painting one.",
      },
      {
        title: "Working on a close or a green",
        text: "Houses are grouped around greens and closes with shared frontages and planted verges. For a crew arriving daily, a standing position that will not damage a verge or block a shared frontage is a programme item rather than a detail.",
      },
    ],
    materials: [
      "Arts and Crafts interiors suit a quiet, well-made decorate rather than a fashionable one. Restrained wall colours, joinery treated as joinery with a sheen that suits hand-made timber rather than advertising it, and systems chosen to suit the substrate. Where original joinery carries decades of coating, taking it back recovers the profile the house was designed with, and in these houses that is usually worth doing on the principal elements.",
      "Colour here benefits from restraint and from testing in place. Rooms in Suburb houses often have deep reveals, leaded lights and modest window areas by comparison with a Victorian villa, which changes how a colour reads through the day. We paint large samples on the wall and look at them morning and evening rather than deciding from a card, and we generally steer toward a palette that lets the joinery and the proportions do the work.",
      "Anything external is a separate conversation with a separate consent position. Previously painted joinery, doors and any painted masonry take a system suited to the substrate, and the colour is not a free choice: the Trust and Barnet both have an interest in the external appearance. We quote external work separately and check what consent is needed before it is planned rather than after a crew is on site.",
    ],
    programme: [
      {
        title: "Separate internal from external",
        text: "Interior decoration proceeds without Trust or planning involvement in most cases. Anything external is established, and consented, on its own timetable, so an internal programme is not held up by an external question.",
      },
      {
        title: "Protection, including original floors",
        text: "Floors, stairs and any original material in or near the rooms are covered for the duration. In these houses the protection is more thorough rather than less, and the route from the door is included.",
      },
      {
        title: "Preparation and joinery taken back where it justifies it",
        text: "Walls washed and stabilised, failed material removed, and original joinery prepared by hand with taking-back done as a distinct operation. Sanding dust is extracted at the tool.",
      },
      {
        title: "Coats, room by room",
        text: "Ceilings, walls and joinery in sequence with drying respected, each room restored before the next is opened, and the staircase treated as its own phase in a larger house.",
      },
      {
        title: "Daylight inspection, finishing with the joinery",
        text: "The house walked with you in daylight, ending with the doors, ironmongery and stairs. Touch-in happens at that visit and the protection comes up last.",
      },
    ],
    access: [
      "The Suburb was planned around greens and closes rather than around working vehicles, and for a crew arriving every morning that needs a standing position agreed in advance: not on a planted verge, not blocking a shared frontage, and on a surface that will take a vehicle repeatedly. We agree it at the survey and board any surface that equipment crosses. Barnet issues licences where one is needed on a public highway [VERIFY where a licence is required on a private or shared frontage].",
      "Permitted development should not be assumed here. An Article 4 direction has been in force since the 1970s and the Trust operates its own consent process, which can extend to items that are unremarkable elsewhere — including, in some cases, repainting a previously painted external surface. Scaffolding for external decoration is a planning-adjacent question as well as a licensing one. Interior decoration that changes nothing visible outside sits entirely apart from all of it. [VERIFY.]",
    ],
    costDrivers: [
      {
        title: "Cottage or larger house",
        text: "The Suburb spans two very different scales of programme, and the schedule follows the house rather than the postcode. Which you have is the first thing the survey settles and the largest factor in the figure.",
      },
      {
        title: "Whether original joinery is taken back",
        text: "Preparing and overcoating is quick; taking good original joinery back to a sound base recovers the profile and is slow, careful work. It is the decision that most changes a Suburb interior and it is priced honestly per element.",
      },
      {
        title: "Whether external work is in scope",
        text: "External decoration brings scaffolding, weather dependency, Barnet's planning position and the Trust's consent process. It is quoted separately so it can be decided on its own merits and its own timetable.",
      },
      {
        title: "Careful working on a close",
        text: "Boarding routes, restricted standing positions and avoiding planted verges cost time on a programme where a crew arrives daily. It is a real and predictable feature of working here and it is named in the proposal.",
      },
    ],
    living: [
      "Suburb houses decorate around a household well. Even the cottages usually have somewhere to work from, and the larger houses have enough separation that one room being worked barely registers elsewhere. We work room by room, restore each before opening the next, and keep the kitchen, a bathroom and a bedroom usable throughout. In a larger house the staircase is treated as its own concentrated phase.",
      "The neighbourhood is quiet in a way that makes noise carry. Houses sit in composed groups around greens and sanding is audible across a close rather than just next door. We name those days, work Barnet's ordinary hours, and tell the immediate neighbours beforehand. We also keep vehicles off shared frontages at the times people are coming and going, which matters more here than on an ordinary street.",
    ],
    handover: [
      "The house is walked with you in daylight, finishing with the joinery and the ironmongery, because in a Suburb house the joinery is what the decorate is judged on. Where original material was worked around or taken back, we show you what was done and what was left. The snag list is ours and touch-in is done at that visit. You receive a record of systems, sheens and colour references per room. Hampstead Property Services Group Limited is fully insured. [INSURANCE_TBC]",
      "Hand-built houses move more than machine-made ones, and a hairline at a joint or an architrave after the first heating season is the building rather than the work. Where joinery was taken back, a look after a season allows any adjustment to be made while the work is fresh. We return for both as one visit. Telephone 020 7101 3168 or write to office@hpsg.co.uk.",
    ],
    moreFaqs: [
      {
        q: "Do we need consent to decorate inside?",
        a: "No. The Trust's Scheme of Management, Barnet's planning and the Article 4 direction are all concerned with the appearance of the property and its setting — what the street, the green and the close can see. Interior decoration is entirely yours and you may choose whatever colours you like. The line is crossed only by work visible from outside, and we separate the two instructions at the survey so an internal programme is never held up by an external question.",
      },
      {
        q: "Can we repaint the outside a different colour?",
        a: "Not as a free choice, and in the Suburb this catches people out more than anywhere else we work. External appearance is controlled by Barnet planning, by a long-standing Article 4 direction and separately by the Trust under its own Scheme of Management, and even repainting a previously painted surface can require written Trust consent. We check the current position for your property before quoting external work. [VERIFY the current Trust guidelines for the item of work.]",
      },
      {
        q: "Is it worth stripping the original doors?",
        a: "On good Arts and Crafts joinery, often yes, and it is the decision that most changes a Suburb interior. Decades of coating soften the profile and fill the detail until a well-made door reads as flat. Taking it back to a sound base recovers something that cannot be bought and is slow, careful work priced accordingly. We give a view element by element rather than recommending it for a whole house.",
      },
      {
        q: "Where will your crew park for three weeks?",
        a: "Somewhere agreed at the survey rather than found each morning. Greens, planted verges and shared frontages are not parking, and a surface that takes one vehicle once may not take one daily for a fortnight. We establish a workable standing position, board anything that equipment crosses, and keep vehicles clear of shared frontages when people are coming and going. It matters more here than on an ordinary street.",
      },
      {
        q: "Are the interiors all similar?",
        a: "Not at all. The Suburb runs from modest cottages with small rooms and simple joinery to substantial houses with generous proportions, staircases and considerable original detail. What is consistent is the outside, which is the point of the place. We survey and specify the actual house rather than working from an idea of what a Suburb interior looks like, and the two scales are not priced from the same assumptions.",
      },
      {
        q: "Can you decorate around us?",
        a: "Yes, and these houses suit it. We work one room at a time, restore each before opening the next, and keep the kitchen, a bathroom and somewhere to sleep usable throughout. In a larger house the staircase is the disruptive part and we concentrate it into a defined phase. In a cottage the work is more present simply because the house is smaller, and we are honest about that at the survey.",
      },
    ],
  },
  // AREAS-END
};
