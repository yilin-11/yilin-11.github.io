/* ================= CASE DATA ================= */
const CHAPS=['Research','Pain points','IA','Wireframes','Validation'];

const CASES=[
/* ---------- 01 · CUNY ARTS ---------- */
{
  key:'cuny', acc:'var(--cuny)', name:'CUNY <span class="thin">Arts</span>', plain:'CUNY Arts',
  type:'Responsive web redesign', stack:'HTML · Figma',
  proto:'prototypes/cuny-arts.html', protoNote:'A fully interactive redesign — live filtering, borough map, and detail modals, all with real content from the original page.',
  hook:'Your student ID is a museum pass.',
  lede:['CUNY students can enter 20+ of New York\u2019s greatest museums free — but the official page buried that benefit in an 8,000-word single-page long-read with 23 partners, zero filters, and the critical "how do I get in" hidden in collapsed accordions.',
        'I restructured it into a task-first index: a filterable card system, a map as a peer view, and a unified content model that promotes "how to use your benefit" to first-class information.'],
  motif:`<svg viewBox="0 0 640 360" fill="none" role="img" aria-label="Ticket stub illustration"><rect x="150" y="110" width="340" height="140" rx="14" stroke="var(--cuny)" stroke-width="3" transform="rotate(-3 320 180)"/><circle cx="155" cy="176" r="13" fill="var(--paper)" stroke="var(--cuny)" stroke-width="3" transform="rotate(-3 320 180)"/><circle cx="485" cy="212" r="13" fill="var(--paper)" stroke="var(--cuny)" stroke-width="3" transform="rotate(-3 320 180)"/><text x="190" y="172" font-family="Space Grotesk" font-weight="700" font-size="30" fill="var(--cuny)" transform="rotate(-3 320 180)">ADMIT ONE</text><text x="190" y="204" font-family="Source Serif 4" font-style="italic" font-size="17" fill="var(--ink-2)" transform="rotate(-3 320 180)">$0 with a CUNY ID</text><line x1="408" y1="132" x2="408" y2="222" stroke="var(--cuny)" stroke-width="2.5" stroke-dasharray="4 8" transform="rotate(-3 320 180)"/></svg>`,
  shots:[{src:'cuny-list.jpg',cap:'The listing: benefit colour on every card, the desk instruction under the name.'},
         {src:'cuny-detail.jpg',cap:'The detail panel — "How to use your benefit" pinned above hours and location.'}],
  wires:[
    {k:'page',t:'01 Index',cap:'Filter bar pinned above a single card grid — filtering is the task, so it never scrolls away.',p:['nav:4','head','chips:5','cards:6']},
    {k:'page',t:'02 Card',cap:'Benefit badge first, then name and hours, then one line of "how to enter". Long descriptions never reach a card.',p:['note:Benefit','head','sub','lines:2','chips:2']},
    {k:'page',t:'03 Detail',cap:'"How to use your benefit" owns the first screen; institutional history is demoted to the bottom.',p:['nav:3','img','note:How to use','lines:3','btn']}
  ],
  chapters:[
  `<p>A quantitative content audit of the live page defined the problem before any sketching:</p>
   <div class="statgrid">
     <div><b>23</b><span>partner institutions on a single page</span></div>
     <div><b>8,000+</b><span>words, mostly copied institutional boilerplate</span></div>
     <div><b>341</b><span>links, including mega-footer lists</span></div>
     <div><b>0</b><span>search or filter tools of any kind</span></div>
   </div>
   <p>A consistency analysis across all 23 partners showed no shared content model: some listed full addresses, phones, and day-by-day hours while others got only a URL; the same benefit appeared under four different label formats; annual events were marked with a literal "[Yearly]" text prefix inside titles.</p>
   <p>Informal interviews with fellow students surfaced three high-frequency tasks: <b>"where can I go free this weekend," "which partners are near me,"</b> and <b>"how do I actually get in — do I need a reservation, can I bring a friend?"</b> A heuristic pass confirmed violations of visibility of status (accordions hide whether entry info exists), flexibility (linear scroll is the only path), and consistency.</p>`,
  `<ul>
     <li><b>Can't find it.</b> 23 institutions in a linear stack with no retrieval mechanism — the task is filtering; the page only supports reading through.</li>
     <li><b>Can't parse it.</b> Chaotic benefit labeling makes it impossible to compare "free for me" vs "merely discounted."</li>
     <li><b>Can't use it.</b> ID requirements, reservation rules, and companion policies are buried in accordions, offloaded to external sites, or missing.</li>
     <li><b>Can't tell them apart.</b> Always-free benefits, discounts, annual events, and internships carry identical visual weight.</li>
     <li><b>Unusable on mobile.</b> A desktop long-read becomes endless scrolling on the device students actually use.</li>
   </ul>`,
  `<p>The structural reframe: from <b>article</b> to <b>product</b>. The old IA was a linear scroll — hero, mission, quotes, then an unordered accordion list. The new IA is task-oriented and three layers deep:</p>
   <div class="iablock"><b>L1 Home</b> — condensed hero + core CTA ("See where you can go free")
        · "How it works" in three steps, ahead of the footer
<b>L2 "Where your ID gets you in"</b> — search · filter chips (benefit × borough
        × open today × +1) · list ⇄ map toggle · one standardized card per partner
<b>L2 "Arts on your campus"</b> — CUNY's own forty venues · search + borough
        · kind of place first · nothing listed until the reader narrows
<b>L3 Partner detail</b> — "How to use your benefit" pinned first
        · hours summary · description demoted to the bottom</div>
   <p>Every partner gets the same mandatory fields — name, one-line positioning, benefit tags, action guidance, area, hours summary, companion policy. Once structured, "[Yearly]" becomes an <b>Annual event</b> tag and "+1" is promoted from fine print to a badge. Four benefit categories each carry their own visual language: always free, student discount, annual events, and programs.</p>`,
  `<ul>
     <li><b>Sticky filter bar.</b> Filtering is the core task, so the chips stay visible while scrolling.</li>
     <li><b>Three-tier card hierarchy.</b> Benefit badge first, then name and hours, then a one-line "how to enter" cue. Long descriptions never appear on cards.</li>
     <li><b>Map as a peer view.</b> "Is it near me" is a spatial question; list and map switch with one tap, pins colored by benefit type.</li>
     <li><b>"How to use" owns the detail page's first screen.</b> Institutional history serves learning-about, not acting-on — it moves to the bottom.</li>
     <li><b>Both section names were written from the institution's side.</b> "Partner institutions" names a contract and "CUNY Cultural Centers" names an org chart; neither tells a student what they get. They became <b>"Where your ID gets you in"</b> and <b>"Arts on your campus"</b> — one is the twenty places across the city, the other the forty CUNY runs itself, each row led by what kind of place it is.</li>
     <li><b>Forty rows open by default is a wall.</b> The campus index starts closed: a search field, five borough chips, and one line telling you to pick. The borough you are standing in is the only one you can walk to, so choosing is the point rather than an optional refinement.</li>
     <li><b>Mobile first.</b> The grid collapses to one column; accordions are replaced by progressive-disclosure detail pages.</li>
   </ul>`,
  `<p>Task-based testing with 5 students, old vs new versions, order counterbalanced, mobile-first:</p>
   <div class="tasklist">
     <div class="trow"><div class="tn">T1</div><div class="tb"><div class="task">Find a museum you can visit free with one friend this Saturday</div><div class="crit">Reaches Leslie-Lohman or Kaufman in ≤ 60 s — near-guaranteed failure on the old page, where "+1" was never structured</div></div></div>
     <div class="trow"><div class="tn">T2</div><div class="tb"><div class="task">You study on Staten Island — find the closest free partner</div><div class="crit">Locates the Tibetan Art Museum via the map</div></div></div>
     <div class="trow"><div class="tn">T3</div><div class="tb"><div class="task">State what you need to bring to MoMA and whether to book ahead</div><div class="crit">Correctly answers "valid ID, no reservation needed"</div></div></div>
     <div class="trow"><div class="tn">T4</div><div class="tb"><div class="task">Find a September arts event with a student discount</div><div class="crit">Finds The Armory Show and its promo discount</div></div></div>
   </div>
   <p>Metrics: completion rate, time on task, error paths, SEQ, SUS. Post-launch: median time from entry to a partner-site click (target −50%), mobile bounce and scroll depth, filter usage rate, and detail-page reach across the long tail of partners.</p>`]
},
/* ---------- 02 · NO LIMIT ---------- */
{
  key:'nolimit', acc:'var(--nolimit)', name:'No <span class="thin">Limit</span>', plain:'No Limit',
  type:'Mobile app · responsible design', stack:'Figma · HTML',
  proto:'prototypes/no-limit.html', protoNote:'The v2 rebuild in your browser — a live fasting timer, inverted data hierarchy, and the goal-guardrail advisory, all interactive.',
  hook:'Fasting, progress, and people — in one place.',
  lede:['People practicing intermittent fasting juggle three tools: a timer, a scale app, and a social feed. The tools are fragmented — and so is the motivation, for a habit that lives or dies on continuity.',
        'No Limit collapses timing, body-metric tracking, and community into one app — then was rebuilt in a v2 driven by three reflections: frequency-first IA, trends over data points, and restraint as design.'],
  motif:`<svg viewBox="0 0 640 360" fill="none" role="img" aria-label="Fasting timer ring illustration"><circle cx="320" cy="180" r="108" stroke="var(--line-2)" stroke-width="16"/><path d="M320 72 A108 108 0 1 1 225 233" stroke="var(--nolimit)" stroke-width="16" stroke-linecap="round"/><text x="320" y="176" text-anchor="middle" font-family="Space Grotesk" font-weight="700" font-size="40" fill="var(--ink)">16:00</text><text x="320" y="208" text-anchor="middle" font-family="Source Serif 4" font-style="italic" font-size="17" fill="var(--ink-2)">you've got this</text><circle cx="225" cy="233" r="9" fill="#E76F51"/></svg>`,
  shots:[{src:'nolimit-timer.jpg',cap:'The first screen: the ring owns it, one primary button, charts demoted to a preview.'},
         {src:'nolimit-trend.jpg',cap:'Tracking inverted — "▾2.8 lbs this month" is the headline, the absolute weight the subtitle.'}],
  wires:[
    {k:'phone',t:'01 Home',cap:'The ring takes 60% of the weight, one primary button, and the charts step back to a preview card underneath.',p:['nav:2','ring','btn','lines:2','rows:2','tabs:3']},
    {k:'phone',t:'02 Tracking',cap:'Hierarchy inverted: the delta is the headline, the absolute weight the subtitle, the chart underneath both.',p:['nav:2','chips:4','head','sub','img','rows:2','tabs:3']},
    {k:'phone',t:'03 Plan',cap:'Flat per-field rows with their own Change control, instead of one nested form nobody finishes.',p:['nav:2','head','rows:5','tabs:3']}
  ],
  chapters:[
  `<p>A walkthrough of mainstream fasting apps surfaced three shared problems: timing and body data live apart; community features are bolted on with no link to the fasting behavior; and changing a plan is buried under layers of settings while real schedules change constantly.</p>
   <p>Semi-structured interviews with current and former 16:8 practitioners converged on three needs: <b>"the thing I do most is start and stop the timer"</b> (the core action must be one tap away), <b>"I need to see change or I can't keep going"</b> (trends must live next to the fasting record), and <b>"fasting alone is lonely"</b> (meal posts and likes are real motivation).</p>
   <p>Key insights: fasting apps split sharply between high-frequency actions (twice daily) and low-frequency ones (every few weeks) — <b>the IA must be layered by frequency</b>; data matters as trend, not point; community works when bound to the behavior. A responsible-design premise was fixed at this stage: no shaming copy, no reinforcement of extreme goals, and safety exits along critical paths.</p>`,
  `<ul>
     <li><b>Fragmented tools.</b> Timing, logging, and social live in three apps; every break in the chain raises the odds of quitting.</li>
     <li><b>The core action isn't fast enough.</b> Start/stop gets diluted by low-frequency features on the first screen.</li>
     <li><b>Data tells no story.</b> A single number can't answer "am I getting better" — no time dimensions, no multi-metric comparison.</li>
     <li><b>High friction to adjust plans.</b> Shift work and weekend dinners disrupt the window, but the edit path is so deep users stop logging.</li>
     <li><b>Loneliness.</b> The hardest stretch of a fast comes with no immediate peer feedback.</li>
   </ul>`,
  `<p>A three-tab structure layered by usage frequency:</p>
   <div class="iablock"><b>Home</b> (daily) — countdown ring · Start/End Fasting as the only primary button
       · tracking preview → full charts (Weight ⇄ Body fat · Day/Week/Month/Year)
<b>Community</b> — persistent personal summary strip · meal-photo feed
<b>Settings</b> (infrequent) — profile · account security incl. emergency contacts
       · fasting plan with per-field Change controls · Health-app sync</div>
   <p>Key decisions: the timer owns the first screen with charts as preview only; plan editing is flat per-field Change buttons instead of a nested form; the community feed keeps your own progress visible on top, turning spectating into comparing; and safety infrastructure — emergency contacts — sits at the top level of account security.</p>`,
  `<p>The lo-fi stage tested two first-screen hypotheses. <b>Hypothesis A (rejected)</b> split the screen evenly between timer and chart — testers called the chart noise before starting a fast. <b>Hypothesis B (adopted)</b> gives the ring 60%+ of the visual weight with one primary button and a compressed preview card.</p>
   <p>The v2 rebuild translated each reflection into interface: the tracking page's hierarchy inverted so <b>"▾ 2.8 lbs this month" is the headline</b> and the absolute value the subtitle; a missed day reads "one missed day doesn't undo your progress"; ending early reads "that's okay" and still logs the result; and setting a goal far below current weight triggers a supportive advisory — a nearer milestone, a conversation with a doctor — never a celebration. Community sharing defaults to no weight numbers.</p>`,
  `<p>Task-based testing with 5–6 users on real devices:</p>
   <div class="tasklist">
     <div class="trow"><div class="tn">T1</div><div class="tb"><div class="task">Start a fast</div><div class="crit">One step from the first screen, ≤ 5 s</div></div></div>
     <div class="trow"><div class="tn">T2</div><div class="tb"><div class="task">Find how much your weight changed this month</div><div class="crit">Reaches Month view and reads the delta, ≤ 30 s</div></div></div>
     <div class="trow"><div class="tn">T3</div><div class="tb"><div class="task">Move the eating window an hour earlier</div><div class="crit">Completes via Fasting Plan, ≤ 45 s</div></div></div>
     <div class="trow"><div class="tn">T4</div><div class="tb"><div class="task">Add an emergency contact</div><div class="crit">Locates it under Account Security — safety-feature discoverability</div></div></div>
   </div>
   <p>Beyond SEQ/SUS, a responsible-design checklist verifies the product: a copy audit for shaming language, extreme-input tests (unhealthy goals must trigger advisories, never celebration), and consent-first handling of body data. North star: consecutive logging days; if community engagement stays low and uncorrelated with retention, it demotes to a secondary entry.</p>`]
},
/* ---------- 03 · SHELFIE ---------- */
{
  key:'shelfie', acc:'var(--shelfie)', name:'Shel<span class="thin">fie</span>', plain:'Shelfie',
  type:'AI-native product', stack:'Claude API · JS',
  proto:'prototypes/shelfie.html', protoNote:'Explore the full UI and flows in your browser. AI features (receipt parsing, recipe generation, recipe import) require an API backend — the demo video shows them running live.',
  hook:'Scan the receipt. Cook what you have. Buy what you don\u2019t.',
  lede:['For solo cooks trying to save money, the real enemy is waste \u2014 bought, forgotten, spoiled, tossed. Shelfie cuts tracking cost to one photo of the receipt: AI reads every line, expands the store\u2019s shorthand into real names, carries the prices across, and sorts the pantry by what to use first.',
        'What closes it is the shopping list. Whatever a recipe is short of goes there in one tap, each line remembering which dish asked for it \u2014 and the next receipt scan takes it off again unasked. Cook \u2192 short \u2192 shop \u2192 scan \u2192 pantry, with nothing to reconcile by hand.',
        'This shipped as a working AI prototype across five iterations \u2014 the receipt and vision parsing, recipe generation, and link import make real model calls, failures included.'],
  motif:`<svg viewBox="0 0 640 360" fill="none" role="img" aria-label="Camera viewfinder over a grocery shelf illustration"><line x1="170" y1="240" x2="470" y2="240" stroke="var(--ink)" stroke-width="3"/><circle cx="240" cy="215" r="21" stroke="var(--shelfie)" stroke-width="3"/><rect x="295" y="188" width="40" height="52" rx="6" stroke="var(--shelfie)" stroke-width="3"/><path d="M382 240 v-36 a17 17 0 0 1 34 0 v36" stroke="var(--shelfie)" stroke-width="3"/><path d="M188 118 h-24 v24 M452 118 h24 v24 M188 302 h-24 v-24 M452 302 h24 v-24" stroke="var(--shelfie)" stroke-width="4" stroke-linecap="round"/><text x="320" y="104" text-anchor="middle" font-family="Source Serif 4" font-style="italic" font-size="17" fill="var(--ink-2)">3 items · est. 5 days</text></svg>`,
  shots:[{src:'shelfie-pantry.jpg',cap:'What I have \u2014 grouped by urgency, receipt prices attached, and the money at risk read against what the whole shelf cost.'},
         {src:'shelfie-add.jpg',cap:'Two ways in, stacked in the order of what they cost you \u2014 and one review step both pass through, its commit always within reach.'},
         {src:'shelfie-recipe.jpg',cap:'Ingredients as a list, not a bag of tags: what you own is ticked, what you don\u2019t is a button that sends just that one to the shop.'},
         {src:'shelfie-list.jpg',cap:'What I need \u2014 every line remembers which recipe put it there, and the next receipt ticks it off unasked.'},
         {src:'shelfie-keep.jpg',cap:'The only screen that asks for anything, and it arrives after the first haul \u2014 priced against what the account already holds.'}],
  wires:[
    {k:'phone',t:'01 Pantry',cap:'Grouped by urgency, not by taxonomy — "use soon" is the first thing on screen. A single ＋ leads to every way in.',p:['nav:2','note:Use soon','rows:6','fab','tabs:3']},
    {k:'phone',t:'02 Two ways in',cap:'Receipt scan and typing — stacked in cost order with the cheapest expanded. Whichever you pick, the next screen is the same one.',p:['nav:2','note:Scan the receipt · fastest','rows:2','img','btn']},
    {k:'phone',t:'03 Review',cap:'The gate everything passes through: names, quantities and shelf life all editable, a row for whatever got missed, nothing saved until you say so.',p:['nav:2','note:Before it goes in','rows:4','btn']},
    {k:'phone',t:'04 What I need',cap:'The other half of the pantry. Each line keeps the recipe that put it there, and the next receipt removes it without being asked.',p:['nav:2','chips:2','note:4 still to pick up','rows:4','tabs:3']},
    {k:'phone',t:'05 Cook',cap:'Servings stated as meals \u2014 tonight, plus tomorrow\u2019s lunch \u2014 and the cookbook sorted by what is missing.',p:['nav:2','head','chips:3','cards:6','tabs:3']}
  ],
  chapters:[
  `<p>Decomposing "cook to save money" into a behavior chain — buy → store → remember → decide → cook → finish — showed the breakage clusters in the middle: the fridge is a black box, "what's for dinner" arrives at the day's lowest-energy moment, and recipes saved from YouTube live in a parallel world from the actual inventory.</p>
   <p>A competitive walkthrough found one shared cause of death in inventory apps: <b>manual entry</b>. Typing groceries item by item costs more than it returns; most users quit within a week.</p>
   <p>The project's pivotal artifact is an <b>AI opportunity map</b> — every step evaluated on "can AI substantially lower the cost here," not "can AI be bolted on." Adopted: receipt parsing, inventory-driven recipe generation, and recipe import from links, text, and screenshots. Deliberately non-AI: missing-ingredient checks (local matching — instant, free, explainable). Rejected outright: a chat assistant, which adds interaction cost and contradicts the zero-typing thesis.</p>
   <p>Mapping the chain end to end also showed it was not a chain but a <b>loop</b>, and that the product covered only half of it: cook \u2192 <i>ran out</i> \u2192 buy \u2192 store is exactly where users fell back to paper and Notes.app. A shortfall is discovered at the stove and needed in the shop, hours later, and nothing was carrying it between the two.</p>
   <p>Looking harder at the buy step is what moved the receipt to the front. <b>The receipt is the only complete, itemised, priced record of what actually entered the kitchen</b> — printed for free, by someone else, at the exact moment of purchase. A photo of the counter can only see what is unwrapped and facing the lens; the receipt already lists the boxed, bagged and frozen half of the haul, with weights and prices attached.</p>`,
  `<ul>
     <li><b>Entry equals abandonment.</b> Every manual-entry solution dies within a week.</li>
     <li><b>A photo of food is a partial inventory.</b> It cannot see inside packaging, read a weight off a label, or price anything — so the half of the haul that arrives boxed and bagged goes silently untracked. This is what eventually removed the camera-on-the-counter entrance altogether.</li>
     <li><b>An AI-only entrance is a dead end.</b> When recognition misfires or the network drops, an app with no typed path has nothing left to offer — the user is left holding groceries.</li>
     <li><b>The fridge black box.</b> Invisible inventory makes "forgot → spoiled → tossed" the default ending.</li>
     <li><b>Decision paralysis.</b> An open-ended dinner question at the lowest-energy moment slides toward takeout.</li>
     <li><b>Nowhere for "what's missing" to go.</b> An app can say a recipe needs two things you don't have and then drop it \u2014 which leaves the user retyping the shortfall into a notes app, or forgetting it until they are back at the stove.</li>
     <li><b>Recipes disconnected from inventory.</b> Saved recipes scatter across camera rolls with zero link to the kitchen; missing ingredients surface at cooking time.</li>
     <li><b>Serving-size mismatch.</b> Recipes default to four servings; "cook once for the next few days" — the real saving strategy — has no product support.</li>
     <li><b>The sign-up form is the first screen.</b> An address is collected before the app has done a single thing for anyone — payment demanded ahead of delivery, at the exact moment the product is least trusted and easiest to close.</li>
     <li><b>Every counter starts at zero.</b> A new account opens on an empty pantry, $0 saved and nothing cooked, which reads as a chore list rather than as progress — and the steps already taken to get there are credited nowhere.</li>
   </ul>`,
  `<p>Three tabs plus a central ＋ — the only way into the pantry, with two sources behind it:</p>
   <div class="iablock"><b>Pantry</b> (home) — 🧺 What I have: Prepped & ready · ⏳ Use soon · Fresh · Staples · $-saved counter
       — 🛒 What I need: to buy (each with the recipe that asked) · in the basket · typed additions
<b>[＋ FAB]</b> — 🧾 receipt scan (open by default) / ✍️ typed entry
       — both land in one editable review → in
<b>Cook</b> — ✨ AI ideas (menu chips: quick / veggie / pescatarian / light / filling · servings: tonight / +lunch / +day after · Make-ahead cards)
       — 📖 My cookbook (import via link / text / screenshot · live missing-check)
<b>Auth</b> — random food-themed username · no email to get in · optional email later, asked once, after the first haul lands</div>
   <p>Four AI-interaction principles anchor the architecture: <b>AI is an invisible worker</b>, not a conversation partner — there is no chat box anywhere; <b>every AI output gets a human confirmation slot</b> — an AI you can correct is an AI you can trust; <b>structured schemas are design contracts</b> — prompt engineering is interface design; and <b>failure paths get designed as carefully as success</b> — every AI touchpoint has a fallback exit.</p>`,
  `<ul>
     <li><b>Inventory is the home screen, grouped by freshness.</b> "Use soon" is the first thing you see — taxonomy yields to urgency.</li>
     <li><b>Two ways in, stacked in cost order.</b> Receipt scan sits first and open by default, typing second and collapsed. Same destination, honest ranking: the interface pushes the cheapest path without hiding the fallback. A third entrance — photographing the haul on the counter — was built and then cut: it could not see inside packaging, read a weight or price anything, so it duplicated the receipt's job badly while adding a whole AI surface to explain, get wrong and design failures for.</li>
     <li><b>One review step, shared by both.</b> Names, quantities and shelf life are editable in place, unchecking drops a row, and a blank row catches whatever the scan missed. Nothing reaches the pantry any other way — which makes the confirmation a real gate rather than a receipt for the AI.</li>
     <li><b>Every failure exits into typing.</b> A failed scan prints its own way out — "type it in instead, that always works" — which is how manual entry earns a place in the product that its own research says kills apps.</li>
     <li><b>The shopping list is the other half of the pantry, not a fourth tab.</b> One screen answers "what do I have", its twin answers "what don't I" \u2014 two segments of the same place, because they are two states of the same inventory. Every line keeps the reason it exists ("for Tomato egg over rice", "running low"), since a bare list of five words is unreadable in a shop the next day.</li>
     <li><b>The receipt closes the loop with no user action.</b> Scanning the haul removes from the list everything it matched \u2014 "4 items added \u00b7 2 ticked off your list". That one behaviour is what turns separate features into a circuit: cook \u2192 short \u2192 list \u2192 shop \u2192 receipt \u2192 pantry \u2192 cook. Nothing asks the user to reconcile anything by hand.</li>
     <li><b>Photography does the work the copy cannot.</b> Menu lanes are picture tiles rather than word chips, because "fit &amp; light" and "filling &amp; cheap" read as abstractions until you can see them; tonight's first suggestion gets a full-bleed card, the rest stay compact rows. A generated recipe can be any dish, so a photo per dish is impossible \u2014 instead a fixed category library is matched on the name, with the emoji showing through whenever nothing matches. Pantry rows use raw-ingredient shots, never plated dishes: a pantry row is something you own, not a meal you made.</li>
     <li><b>Prices ride along from the receipt.</b> Because the scan carries dollar amounts, the savings counter stops estimating: using a $7.81 pack of chicken before it turns credits $7.81, not a flat guess.</li>
     <li><b>The serving selector speaks intent</b>: Just tonight / + tomorrow's lunch / + the day after — servings translated into meal-prep scenarios.</li>
     <li><b>Menu preferences sit in the cooking flow, not in settings.</b> Quick, veggie, pescatarian, light, filling-and-cheap are chips right above the servings row, because that is the moment the constraint is actually felt; picking veggie drops pescatarian, and picking nothing is a real answer the copy names ("anything goes"). Each chip carries the sentence it adds to the prompt, so the filter and the model instruction can never drift apart.</li>
     <li><b>The cookbook sorts by missing count.</b> Cookable-right-now rises to the top; choosing dinner requires opening nothing.</li>
     <li><b>The savings counter compounds visibly</b> — using something before it expires, or eating a prepped portion, turns "waste avoided" into a growing number.</li>
     <li><b>The account is created by pressing one button, and the email is asked for afterwards.</b> A username is already rolled when the screen loads, so the first screen has nothing to fill in — the app is fully usable before it knows anything about you. The address is requested exactly once, after a real haul has landed, on a sheet that lists what the account now holds: <i>7 items · $21 of food · 2 recipes · $17 kept from the bin</i>, with "one email, no password, no card" printed directly under it. Value is delivered first, the price is named next to what it buys, and skipping is a sentence you have to read — "not now, I'll risk losing it".</li>
     <li><b>The setup bar opens at 25%, never at 0%.</b> Four steps, and the first one — naming your kitchen — arrives already ticked, because by the time the bar is visible it is genuinely done. Crediting work already completed is the difference between a checklist and momentum; the bar deletes itself the moment all four are met, so it never becomes furniture.</li>
     <li><b>"Use soon" is priced, and priced against the whole shelf.</b> The group leads with "<i>$6 of the $21 on your shelf goes in the bin within 2 days unless something gets cooked</i>", and the cook button underneath says <i>Rescue $6</i> rather than <i>What should I make?</i>. Same food, same fridge — but a loss with a figure on it, sized against a figure the user already recognises, moves people that an invitation to browse recipes does not.</li>
     <li><b>Dark by default, because of when the app is opened.</b> This is a thing you hold at six in the evening with the hob on, not at a desk at noon. Every colour is a custom property, so the light theme is one override block rather than a second stylesheet, and the choice is resolved by an inline script before the first paint — a theme applied after load flashes the wrong one first. It lives in local storage, not in the account: it is a property of the phone in your hand, not of who is signed in.</li>
     <li><b>A recipe's ingredients are a list, not a bag of tags.</b> Name on the left, amount in a right-hand column, one per line — the shape every cookbook uses, and the shape you can actually read at arm's length. What Shelfie adds is that a missing line is its own button: wanting three of the four things a dish is short of is normal, so the shortfall can go to the shopping list one item at a time as well as all at once. Steps tick off as you cook, and deliberately do not persist — that state is about the next ten minutes.</li>
     <li><b>The one field the user cannot answer gets answered for them.</b> Typing "chicken thighs" selects <i>2 days</i>, "jasmine rice" selects <i>6 months</i>, "fish sauce" selects <i>6 months</i> and not <i>2 days</i> — matched on the name, with a line admitting where the answer came from and one tap to overrule it, after which the app stops guessing. Shelf life is a guess either way; the app's guess is better informed than the user's, so the form arrives pre-answered and the task becomes checking rather than deciding.</li>
   </ul>`,
  `<p>Testing uses participants' <b>own receipts and recipe links</b> — probing the AI's real behavior, mistakes included:</p>
   <div class="tasklist">
     <div class="trow"><div class="tn">T1</div><div class="tb"><div class="task">Scan your last grocery receipt and add the haul</div><div class="crit">Completes parse + review, actively corrects a wrong line, notices the prices</div></div></div>
     <div class="trow"><div class="tn">T2</div><div class="tb"><div class="task">Add something that came with no receipt</div><div class="crit">Finds the typed path unprompted; after a forced scan failure, takes the same exit</div></div></div>
     <div class="trow"><div class="tn">T3</div><div class="tb"><div class="task">Get a 3-serving recommendation and "cook" it</div><div class="crit">Understands the Make-ahead note, finds the Prepped group</div></div></div>
     <div class="trow"><div class="tn">T4</div><div class="tb"><div class="task">Save a YouTube recipe to the cookbook</div><div class="crit">Succeeds via any import path, understands the preview step</div></div></div>
     <div class="trow"><div class="tn">T5</div><div class="tb"><div class="task">Pick a cookable-right-now dish</div><div class="crit">Uses the missing badges and sorting, \u2264 20 s</div></div></div>
     <div class="trow"><div class="tn">T6</div><div class="tb"><div class="task">Cook something you are missing an ingredient for, then "go shopping" for it</div><div class="crit">Sends the shortfall to the list unprompted, finds it under What I need, expects the next receipt to clear it</div></div></div>
     <div class="trow"><div class="tn">T7</div><div class="tb"><div class="task">Open the app cold and get your groceries in — stop whenever you feel done</div><div class="crit">Reaches the pantry without being asked for anything; when the email sheet arrives, can say what it would cost them to decline</div></div></div>
   </div>
   <p>AI-specific metrics extend standard usability: <b>per-line receipt accuracy</b> against the paper itself (names expanded correctly, non-food lines skipped, nothing invented), <b>correction behavior rate</b> (if nobody ever corrects, the review step is theater), <b>recommendation adoption</b>, per-path import success, and <b>failure-path completion</b> — after a scan or a link fails, how many users follow the offered fallback and finish. The loop gets its own measure \u2014 <b>list-completion rate</b>: of everything sent to the shopping list, how much comes back on a receipt rather than being deleted or left to rot there. The deferred sign-up gets two: <b>first-haul rate</b> (share of arrivals who add groceries at all, against the old email-first screen) and <b>guest\u2192email conversion</b>, which is only worth reading alongside the first \u2014 a gate converts a higher percentage of a far smaller number, and the product is paid in hauls, not addresses. North star post-launch: at least one full receipt \u2192 cook \u2192 list \u2192 receipt loop per week, with Use-soon consumption vs expiry-deletion as the waste-reduction proof.</p>`]
},
/* ---------- 04 · MUTUO ---------- */
{
  key:'mutuo', acc:'var(--mutuo)', name:'Mu<span class="thin">tuo</span>', plain:'Mutuo',
  type:'Full-stack repair · ranking · catalogue', stack:'Express · Sequelize · Passport',
  role:'Solo — design and code', build:'Claude Code',
  proto:'https://mutuo-demo.vercel.app/', protoLabel:'Open the live app ↗',
  protoNote:'A real deployment, seeded with fifty members in twenty-five reciprocal pairs — the login page offers a demo account and fills the form in for you. First request after an idle spell waits on a cold start. <a href="https://github.com/yilin-11/mutuo" target="_blank" rel="noopener">Source on GitHub ↗</a> — every defect below has a test that fails without its fix; clone it and run <code>npm test</code>.',
  hook:'Teach what you know, learn what you don’t.',
  lede:['Mutuo is a skill-swapping directory: each member lists one skill they can teach and one they want to learn, then finds someone nearby to trade with. I built it early, while I was still learning the stack.',
        'Coming back to it, the interesting failures were not the ones that crashed. They were the ones that looked like nothing had happened — a save button that quietly discarded the form, a page that rendered blank with no error, a directory that looked broken because it was empty. This case is that second pass: reading my own code for the states I never designed.',
        'I did that pass with an AI coding agent, which is why the case is written around a test suite rather than a diff. Code arrives faster than anyone can review it by eye, so the working rule was that nothing counted as a defect until a failing test reproduced it, and nothing counted as fixed until that test passed. Chapter 05 has the two places that rule paid for itself — the obvious fix was wrong, and the test is what said so.',
        'A third pass then changed the product rather than defending it, because holding up is not the same as being worth using. The directory was correct and still made you compare two skill pills on every card to work out whether a trade was possible at all — in an app whose entire premise is trading. That pass is the ordering, the distance, and the matching in chapters 03 and 04.',
        'A fourth changed nothing about that ranking and everything about its shape. Fifty people in one flat grid is a list; the same fifty dealt onto shelves is somewhere to browse. The tile became a poster, and the thing a reader is actually scanning for stopped being the third line down in the smallest type on the card.'],
  motif:`<svg viewBox="0 0 640 360" fill="none" role="img" aria-label="Two skill tags exchanging, one each way"><rect x="96" y="118" width="182" height="70" rx="12" stroke="var(--mutuo)" stroke-width="3"/><text x="187" y="163" text-anchor="middle" font-family="Space Grotesk" font-weight="700" font-size="25" fill="var(--mutuo)">TEACH</text><rect x="362" y="172" width="182" height="70" rx="12" stroke="var(--mutuo)" stroke-width="3"/><text x="453" y="217" text-anchor="middle" font-family="Space Grotesk" font-weight="700" font-size="25" fill="var(--mutuo)">LEARN</text><path d="M288 148 H 352" stroke="var(--ink-2)" stroke-width="2.5" stroke-linecap="round"/><path d="M342 140 L 352 148 L 342 156" stroke="var(--ink-2)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M352 212 H 288" stroke="var(--ink-2)" stroke-width="2.5" stroke-linecap="round"/><path d="M298 204 L 288 212 L 298 220" stroke="var(--ink-2)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><text x="320" y="296" text-anchor="middle" font-family="Source Serif 4" font-style="italic" font-size="17" fill="var(--ink-2)">one each way</text></svg>`,
  shots:[{src:'mutuo-directory.jpg',cap:'Browse: a shelf of everyone you can trade with, then one per category, each tile leading with the skill it teaches.'},
         {src:'mutuo-matches.jpg',cap:'Matches, mutual ones first — the state that used to exist and tell nobody.'}],
  wires:[
    {k:'page',t:'01 Browse',cap:'One shelf per category, and above them all a shelf of everyone a trade is possible with. Order comes from the ranking, not from a constant.',p:['nav:4','note:You can trade with these','shelf:5','head','shelf:5']},
    {k:'page',t:'02 Poster',cap:'The tile leads with the offer: artwork drawn from the name, the swap label burned into the corner, distance under it.',p:['note:Straight swap','img','head','sub','lines:2']},
    {k:'page',t:'03 States',cap:'The screens nobody had drawn — empty, no results, working, rejected, expired, too many attempts, not found.',p:['nav:3','head','note:Nobody here yet','lines:2','btn']}
  ],
  chapters:[
  `<p>No user study here — this was an audit of a shipped thing. I read all 35 source files end to end, then wrote tests that pinned down what the app <i>actually did</i> rather than what it looked like it did. Where behaviour and intent disagreed, the test recorded the behaviour first, and the fix came second.</p>
   <div class="statgrid">
     <div><b>1,651</b><span>lines of application code, read line by line</span></div>
     <div><b>13</b><span>defects found and reproduced</span></div>
     <div><b>10</b><span>of those gave the person using the app no signal at all</span></div>
     <div><b>65</b><span>tests in the suite today, each named for what it holds down</span></div>
   </div>
   <p>That third number is the finding. Only two of the thirteen announced themselves as a crash, and exactly one produced an error message — which pointed at the wrong form. Everything else failed the way software fails a person who has no console open: <b>the screen simply did not change</b>. A designer's instinct is to ask what a screen shows when things go wrong; this codebase mostly answered "nothing."</p>`,
  `<p>Restated as the sentences a member would actually say:</p>
   <ul>
     <li><b>"I filled in the form and pressed save. Nothing happened."</b> Submit was wired to a link, so the browser navigated away before the request finished. The profile was never written — and the app said so in no way whatsoever.</li>
     <li><b>"The page is blank."</b> Asset paths were relative, so the same profile URL worked with one trailing slash and loaded no JavaScript at all without it. A white screen, no error, nothing to report.</li>
     <li><b>"It says my email is taken. I wasn't changing my email."</b> Two rapid submits collided in the database, and the collision was reported using the signup form's error copy. The one visible message in the system was about the wrong screen.</li>
     <li><b>"There's nobody here."</b> A new install opened onto an empty directory and an empty random match. Indistinguishable from broken.</li>
     <li><b>"I typed my password wrong and it just sat there."</b> The failure was written to the developer console. The person looking at the form got no response of any kind.</li>
     <li><b>"It logged me out again."</b> Sessions lived in memory, so every restart silently signed everybody out mid-task.</li>
   </ul>
   <p>One more surfaced later, and it was not a defect at all — every line of it worked exactly as written:</p>
   <ul>
     <li><b>"I pressed Match and nothing came of it."</b> Matching wrote a row and told nobody. The other member was never notified, so the only way to learn they had pressed it back was to reopen a page you had no reason to reopen. A feature can pass every test it has and still be a dead end.</li>
   </ul>`,
  `<p>The structural question was not where pages sat in a menu — it was <b>which side of the login each thing lived on</b>, and the old answer was inconsistent. Pages were guarded; the data behind them was not. The directory page required a session, while the request that filled it with every member's name, city and email address answered anyone at all.</p>
   <div class="iablock"><b>Public</b>
    landing · log in · sign up

<b>Members</b> — three pages, in the order you need them
    <b>Browse</b> · shelves by category · search · Within control · random match · member detail
    <b>Matches</b> · mutual first · unseen count on the nav item
    <b>My profile</b> · the form, filled in once and edited rarely

<b>Data</b>
    every member-facing request now sits on the members side,
    including the one that puts a postal code on a map</div>
   <p>A second boundary was physical rather than logical. Page files were sitting inside the folder the server hands out verbatim, so the member area could be fetched by its filename without ever passing the login check — the guard was real, and the pages were reachable around it. Moving them out was the fix; the lesson was that <b>an access rule is only as good as the path that cannot skip it</b>. A third boundary was leaking outward: two mapping keys were hardcoded into a script the browser downloads. Geocoding moved to the server behind a cache and a queue, and the map now draws OpenStreetMap tiles, which need no token at all.</p>
   <p>How much location the map is allowed to claim is a design decision, not a technical one. A member gives a postal code, not an address, so their page draws a <b>circle rather than a pin</b> — a precise marker would assert precision the data does not have, and would quietly turn a directory of strangers into a list of doorsteps.</p>
   <p>The third pass settled the order. Browse comes first because it is the reason to open the app, and your own profile comes last because you write it once. The random match stopped being a destination and became a button on the browse page — <b>deciding who to ask is something you do while looking at the list</b>, not on a screen of its own. And anything that depends on <i>who is asking</i> — how far away someone is, whether the two skill sets line up, whether you have matched, whether they matched back — is computed per request rather than stored, because none of it is a property of the member being looked at.</p>`,
  `<p>Then the part that was actually missing: the states nobody had drawn. Each screen had one design — the happy one. These are the rest, and every one of them is now a deliberate choice rather than an accident.</p>
   <ul>
     <li><b>Empty.</b> A fresh directory now ships with fifty members forming twenty-five reciprocal pairs, so the first screen demonstrates the idea instead of implying failure. When it really is empty it says so plainly — "Nobody else has a profile yet — you are the first one here."</li>
     <li><b>No results.</b> Three different nothings now read differently: a search term that matched nobody is quoted back, a distance bound that excluded everybody says to widen it and points at the people folded in below, and a genuinely empty app admits it. The old answer to all three was the same blank page.</li>
     <li><b>Working.</b> The profile form's submit button disables itself and says "Saving…" rather than quietly accepting a second press, and each member page names what it is fetching — "Loading members…" — instead of showing an empty list that might be the answer.</li>
     <li><b>Rejected.</b> Form errors name the field and say what is wrong, in the voice of the form being filled in — never the neighbouring one.</li>
     <li><b>Expired.</b> A session that ran out returns the member to the login page, rather than printing "you need to be logged in" onto a directory that has nothing in it.</li>
     <li><b>Too many attempts.</b> Repeated failed logins are refused with copy that says to wait and a <code>Retry-After</code> saying how long, so the limit is legible instead of feeling like a fault. Getting the password right never spends the budget.</li>
     <li><b>Not found.</b> A member id that does not exist says so, distinct from a member who exists but has filled in nothing.</li>
   </ul>
   <p>The third pass went after the happy state itself, which was working and still not much use. Six decisions, in the order they mattered:</p>
   <ul>
     <li><b>A possible swap outranks a short walk.</b> Every tile now says outright what it is, burned into the top corner of its artwork — <i>Straight swap</i>, <i>Teaches what you want</i>, <i>Wants what you teach</i> — and the ordering leads with those, distance deciding within each group. Complementarity is the harder constraint: a neighbour who teaches nothing you want is not a trade at all.</li>
     <li><b>Nearby means nearby.</b> A postal code is resolved to coordinates once, when the profile is saved, so distance is arithmetic at read time rather than fifty lookups against a service that permits about one a second. A <b>Within</b> control bounds the list and everything past it folds into <i>Farther away</i> rather than vanishing — a page that promises people near you and then leads with someone 16,000 km away is arguing with itself. A member who cannot be placed sorts to the end instead of disappearing.</li>
     <li><b>The demo members cluster several to a city</b>, because one per city put the nearest person three hundred kilometres away and left the Within control unable to return anything at all. A filter that can only ever come back empty is worse than no filter — the seed data is part of the design.</li>
     <li><b>The random match deals from the people worth dealing.</b> Not uniformly — from those a swap is possible with, inside the distance currently set, widening only when that group runs out. A uniform draw could hand you someone on another continent who teaches nothing you asked for, which is a coin flipped rather than a decision made for you. Each press also skips whoever it just dealt, because a button labelled "Someone else" that returns the same member is lying. The pick now names the pool it came from, so it reads as a suggestion with a reason rather than a coin landing.</li>
     <li><b>Matching tells someone.</b> Matching stays one-directional and needs no acceptance, but the count of new mutual matches now sits on the Matches nav item and clears when the page is opened; a mutual match turns the other member's address into a link. Clearing is a POST rather than a side effect of the GET, because a browser may prefetch a GET and <b>a badge that clears itself is a badge nobody can trust</b>.</li>
     <li><b>Dark is the default, light is opt-in.</b> The dark values sit unqualified on <code>:root</code>, so a first visit — and a visit with JavaScript off — gets dark rather than a flash of something else. The stored choice is applied from the head before the body paints, so nobody sees the theme they did not pick. There is no CSS framework underneath it: Bootstrap was removed rather than overridden, because each stylesheet was spending most of its length arguing with it. What replaced it is one token set and one definition each for button, input, nav and poster — no web font, no avatar service, and the only third-party code left is jQuery plus Leaflet on the single page that draws a map.</li>
   </ul>
   <p>A fourth pass left that ranking alone and changed the shape around it, because the good part was invisible: the thing a reader scans for was the third line down, in the smallest type on the card.</p>
   <ul>
     <li><b>Shelves, not a list.</b> The same ranked members are dealt onto one row per category — Music, Science &amp; tech, Business — with a shelf of everyone a trade is possible with above them all. <b>No shelf order is hardcoded</b>: the categories are discovered in the order the ranking meets them, so the shelf holding your best swap arrives at the top by construction, and follows the ranking the day it changes. That top shelf deliberately duplicates people who also appear under their own category — a shelf is a way in, not a partition, and someone who came for music should not have to know the best of them was promoted out of it. Choosing a category swaps the shelves for a grid of that one, because a shelf you have decided to stand in front of should not still scroll sideways.</li>
     <li><b>A member is drawn, not photographed.</b> Nobody uploads a picture, so a tile's artwork is a two-stop gradient derived from their name with their initials set at the size of the tile, and the offer burned across the foot of it. It costs no request, needs no key, and cannot arrive broken — <b>two avatar services have already been through this codebase, and the first one shut down and left every face on the site a broken image</b>.</li>
     <li><b>The tokens followed the tiles.</b> Black rather than charcoal, one red doing one job instead of a green doing three, corners at 2–4px, and headings set large and tight over small wide-tracked labels. Light was retuned to match rather than inverted — white paper, black type, the same red, the same posters.</li>
   </ul>`,
  `<p>Validated by execution, not by users — and that distinction matters enough to state plainly. This was a correctness pass, so the instrument is a test suite that drives the real application end to end: 65 tests over 1,208 lines, each named for the defect or the rule it holds down. CI runs them on Node 18, 20 and 22.</p>
   <div class="tasklist">
     <div class="trow"><div class="tn">T1</div><div class="tb"><div class="task">Fetch the directory with no session</div><div class="crit">Refused. Before the fix it returned every member's email address</div></div></div>
     <div class="trow"><div class="tn">T2</div><div class="tb"><div class="task">Request a member page by its filename</div><div class="crit">Not found. Before the fix it served the member area around the guard</div></div></div>
     <div class="trow"><div class="tn">T3</div><div class="tb"><div class="task">Submit the profile form twice at once</div><div class="crit">Both save, one profile exists, no error about an unrelated form</div></div></div>
     <div class="trow"><div class="tn">T4</div><div class="tb"><div class="task">Load a member page with a trailing slash</div><div class="crit">Assets referenced absolutely, so the page is never blank</div></div></div>
     <div class="trow"><div class="tn">T5</div><div class="tb"><div class="task">Double-tap Match, then match the same member again</div><div class="crit">One match, no stray error — asking for a state you are already in is a success</div></div></div>
     <div class="trow"><div class="tn">T6</div><div class="tb"><div class="task">Have a member match you back</div><div class="crit">Mutual on both sides, counted once on the nav, and cleared only when the page is opened</div></div></div>
   </div>
   <p>Two tests earned their keep by rejecting my first fix. The textbook repair for the double-submit collision is the framework's own <code>findOrCreate</code>; the test came back red, because that call opens a transaction and this database will not run two at once. The version that shipped lets the database's uniqueness rule settle the race instead, and losing it simply means reading again. The rate limiter's first draft kept its counters in one module-level map, so the login limiter and the signup limiter shared a single budget per address — a few failed logins quietly spent someone's ability to sign up. Each limiter owns its store now, and a test pins that down. <b>I would have shipped both wrong fixes without a test to argue with.</b></p>
   <p class="proto-note" style="margin-top:18px">The honest gap: no usability study was run. Every claim above is about behaviour I could reproduce and now prevent — not about whether the repaired flows test well with people. That is the next pass, and the states in chapter 04 are what I would put in front of them first.</p>`]
},
/* ---------- 05 · FOREDGE ---------- */
{
  key:'foredge', acc:'var(--foredge)', name:'Fore<span class="thin">dge</span>', plain:'Foredge',
  type:'Full-stack app · accounts · third-party API', stack:'Express · PostgreSQL · EJS',
  role:'Solo — design and code', build:'Claude Code',
  proto:'https://foredge.onrender.com/', protoLabel:'Open the live app ↗',
  protoNote:'Deployed and running. Press <b>Explore the demo</b> on the sign-in page — it opens a private account of your own, already filled with a sample shelf, and clears itself after a day. The free tier sleeps after fifteen minutes idle, so a first visit can take up to a minute to wake. <a href="https://github.com/yilin-11/foredge" target="_blank" rel="noopener">Source on GitHub ↗</a>',
  hook:'What stays after the last page.',
  lede:['Foredge is a reading app. Find a book and Open Library fills in the author, the cover, the year, the ISBN and the page count; you supply the rating, the progress, the notes and the passages worth keeping. It runs on one loop — find, list, read, keep, finish — and every shelf belongs to one account that nobody else can see.',
        'The fore edge is the outer edge of a book’s pages, opposite the spine — the rough stack of paper your thumb runs along when you flip through. The rating here is drawn after it: ten short vertical ticks, not stars. The name points at the one decision the whole interface is built around, so the two explain each other.',
        'It started as a reading log — a shelf, a list, a form. That version worked and nobody would have opened it twice in a week, because a log is an archive and an archive has nothing to say to you on a Tuesday night. This case is mostly about the second pass: what had to change for it to be something you open, and what an account costs once one exists.'],
  motif:`<svg viewBox="0 0 640 360" fill="none" role="img" aria-label="A shelf of book spines beside a ten-tick fore-edge rating gauge"><path d="M84 232 H 336" stroke="var(--ink-2)" stroke-width="3" stroke-linecap="round"/><rect x="92" y="138" width="22" height="94" stroke="var(--ink-2)" stroke-width="2.5"/><rect x="119" y="116" width="26" height="116" stroke="var(--ink-2)" stroke-width="2.5"/><rect x="150" y="148" width="20" height="84" stroke="var(--ink-2)" stroke-width="2.5"/><rect x="175" y="84" width="28" height="130" fill="var(--foredge)"/><rect x="208" y="130" width="22" height="102" stroke="var(--ink-2)" stroke-width="2.5"/><rect x="235" y="110" width="25" height="122" stroke="var(--ink-2)" stroke-width="2.5"/><rect x="265" y="142" width="20" height="90" stroke="var(--ink-2)" stroke-width="2.5"/><rect x="290" y="122" width="26" height="110" stroke="var(--ink-2)" stroke-width="2.5"/><text x="404" y="132" font-family="Space Grotesk" font-weight="700" font-size="24" fill="var(--foredge)">7 / 10</text><rect x="404" y="150" width="4" height="54" fill="var(--foredge)"/><rect x="418" y="150" width="4" height="54" fill="var(--foredge)"/><rect x="432" y="150" width="4" height="54" fill="var(--foredge)"/><rect x="446" y="150" width="4" height="54" fill="var(--foredge)"/><rect x="460" y="150" width="4" height="54" fill="var(--foredge)"/><rect x="474" y="150" width="4" height="54" fill="var(--foredge)"/><rect x="488" y="150" width="4" height="54" fill="var(--foredge)"/><rect x="502" y="150" width="4" height="54" fill="var(--line-2)"/><rect x="516" y="150" width="4" height="54" fill="var(--line-2)"/><rect x="530" y="150" width="4" height="54" fill="var(--line-2)"/><text x="320" y="300" text-anchor="middle" font-family="Source Serif 4" font-style="italic" font-size="17" fill="var(--ink-2)">ten ticks, not five stars</text></svg>`,
  shots:[{src:'foredge-today.jpg',cap:'Today opens on the book you are actually reading, and the page count is the only control on the screen.'},
         {src:'foredge-library.jpg',cap:'The library: four status tabs, topic chips, sort and search — each editing its own query parameter, so any combination is a real URL.'},
         {src:'foredge-book.jpg',cap:'One book. Status and progress on the left, what you made of it on the right, and the passages you kept underneath.'},
         {src:'foredge-plans.jpg',cap:'Two plans. Nothing you do daily is behind the line, and the demo checkout says in as many words that nothing is charged.'}],
  wires:[
    {k:'page',t:'01 Today',cap:'One question — what should I do right now. The book in progress, then one kept passage, then what is next.',p:['nav:5','head','img','lines:2','btn','note:Reaching the last page finishes the book on its own','cards:4']},
    {k:'page',t:'02 Library',cap:'Four tabs over one query. Status, topic, sort and search each edit their own parameter and leave the others alone.',p:['nav:5','head','tabs:4','chips:5','rows:5']},
    {k:'page',t:'03 Book',cap:'Everything you can do to it on the left, everything you wrote about it on the right.',p:['nav:5','head','tabs:3','ticks:10','lines:3','btn']},
    {k:'phone',t:'04 On a phone',cap:'The cover moves above the text, and the top nav becomes a bottom tab bar — five tabs, because that is the ceiling before they stop being tappable.',p:['nav:2','head','img','lines:2','btn','rows:4','tabs:5']}
  ],
  chapters:[
  `<p>The first pass researched an API. This one researched a habit, because the working log had already proved the smaller point: filling a form is not the hard part of keeping a reading log — <b>coming back is</b>. So I went and read how an app people open daily is actually put together, and used Blinkist as the reference: a library organised by progress rather than by date, a home screen that resumes rather than summarises, and highlights treated as a first-class thing rather than a field on a record.</p>
   <div class="statgrid">
     <div><b>5</b><span>screens, one per step of the loop</span></div>
     <div><b>3</b><span>states a book moves through</span></div>
     <div><b>1</b><span>control on the home screen</span></div>
     <div><b>2</b><span>ways covers are served, neither guaranteed</span></div>
   </div>
   <p><b>The loop is the finding.</b> Find a book, put it on the list, move the page count, keep the passages worth keeping, finish it and watch the year add up. Five steps, so five screens — Today, Library, Discover, Highlights, You — and every one of them is one step of that loop rather than a category of thing.</p>
   <p><b>Covers still cannot be assumed, and worse than I thought.</b> The first pass already stored two identifiers because one ISBN can point at several editions. Reading the endpoint again turned up the real trap: ask Open Library for a cover it does not have and it answers <code>200 OK</code> with a 43-byte transparent pixel. The image <i>loads</i>, so the error handler never runs, and the book renders as an empty coloured rectangle. One query parameter — <code>?default=false</code> — turns that into a real 404. The fallback had been in the code the whole time and had never once fired.</p>
   <p><b>The split between the machine’s half and yours got wider.</b> Title, author, ISBN, cover, year and now page count are facts a lookup already knows. Rating, progress, finish date, takeaway, notes and highlights are the only things that are actually yours — and the last of those is why the schema stopped being one table.</p>`,
  `<p>Stated as the sentences a reader would say, plus the ones nobody would ever report:</p>
   <ul>
     <li><b>"I finished it three weeks ago and never said so."</b> Status and dates are the two things a reading app gets wrong most often, because they are bookkeeping and nobody does bookkeeping. So the app does it: typing a page onto a book that was only on the list starts it and stamps the date, reaching the last page finishes it, and moving a finished book back to reading clears the finish date again — otherwise it keeps counting toward a year it does not belong to.</li>
     <li><b>"I only wanted to move the page number."</b> The thing a reader does daily is one number. It should not be behind an edit form, so it is the only control on the home screen — and it saves itself.</li>
     <li><b>"That cover is a blank box."</b> Not broken, blank: a 200 response carrying a transparent pixel. A failure that does not announce itself is worse than one that does, because nothing downstream knows to catch it.</li>
     <li><b>"Anyone can edit my notes."</b> The log had no accounts, so every visitor shared one shelf. Notes are the whole point of the thing and they were public and writable by strangers.</li>
     <li><b>"The date is off by a day."</b> A <code>DATE</code> column comes back through the driver as a JS <code>Date</code> read in the local timezone, so a book finished on 5 March in New York displays as 4 March. Silently wrong, in a field the reader typed themselves.</li>
     <li><b>"I left the rating blank and it wouldn’t save."</b> An untouched input posts an empty string, and writing <code>""</code> into an <code>INTEGER</code> or <code>DATE</code> column makes PostgreSQL throw.</li>
     <li><b>The one nobody would report.</b> <code>ORDER BY</code> cannot take a parameterised placeholder, so the sort has to be built into the SQL — precisely where injection lives. And a delete route behind an <code>&lt;a&gt;</code> can fire without anyone clicking it, because browsers and crawlers prefetch links.</li>
     <li><b>The one that is a design problem wearing an engineering costume.</b> A paid tier has to draw a line somewhere, and the obvious lines are all wrong. Charge for the thing somebody does every day and the product becomes a hostage situation; delete their books when they stop paying and it becomes a threat.</li>
   </ul>`,
  `<p>Three tables and a session store. Highlights earned their own table the moment they stopped being a field: you write many per book, each wants its own page number and date, and one screen reads them across every book at once. That is one-to-many, which is what a second table is for. Accounts made it three.</p>
   <div class="iablock"><b>users</b> · email · password_hash (scrypt) · plan free|plus · reading_goal · is_demo
    <b>owns →</b> books · cascade on delete
<b>books</b> · one row per book, owned by exactly one user
    <b>from Open Library</b> · title · author · isbn · cover_id · ol_key · published
    <b>where it is</b> · status want|reading|finished · topic · total_pages · current_page
    <b>from the reader</b> · rating 1–10 · date_started · date_read · takeaway · notes
    <b>owns →</b> highlights · cascade on delete
<b>highlights</b> · quote · page · note — why it was kept

<b>screens</b> · one per step of the loop
    <b>Today</b> · resume, one kept passage, up next, recently finished
    <b>Library</b> · four status tabs over one query, plus topic, sort and search
    <b>Discover</b> · browse Open Library by subject, one tap to the list
    <b>Highlights</b> · every passage, across every book
    <b>You</b> · the year counted, and the account behind it</div>
   <p>Two rules hold the structure up. <b>Ownership lives in the WHERE clause, not in an if.</b> Every query past the sign-in gate carries <code>user_id</code>, and every route that takes an id puts ownership into the same condition rather than fetching the row and comparing afterwards — one round trip, and no moment where somebody else’s row is in hand before anyone has asked whose it is. A row that does not exist and a row that is not yours both return the same 404, because distinguishing them turns the address bar into a way to find out which ids exist.</p>
   <p>And <b>the sort parameter is a lookup key, never a string.</b> <code>?sort=</code> only ever selects an entry from a hard-coded table of orderings, so <code>?sort=;DROP TABLE books</code> quietly falls back to the default. Every other filter takes the normal parameterised treatment.</p>`,
  `<p>The chrome follows the reference — midnight blue carrying the text, one loud green reserved for the action you are meant to take next, white cards on a pale mint ground, pill buttons, a bottom tab bar on a phone. Two things stayed Foredge’s own, and the split is deliberate: <b>everything you operate is set in the sans; everything you read is set in a serif.</b> Notes, quotes and takeaways are the part you read, so they look like reading rather than like interface.</p>
   <ul>
     <li><b>Ten ticks, not five stars.</b> The rating is drawn after the fore edge of the pages, which is also why the scale is ten — ten ticks read as an edge, five read as a row of marks.</li>
     <li><b>The shelf survived.</b> Every book a different height, hashed from the title so it keeps that height across reloads instead of jumping around the row. Hovering pulls one out; <code>prefers-reduced-motion</code> stops that.</li>
     <li><b>No cover is a cover.</b> A book without artwork gets a printed cloth cover — title and author set on a colour hashed from the title — so a coverless book looks like <i>that</i> book everywhere it appears, rather than like a grey box.</li>
     <li><b>The paywall says what it stopped you doing.</b> A wall that dumps you on a generic pricing page is how a paywall earns its reputation. This one names the feature you were reaching for, and the free plan’s stats page states what is behind the line instead of showing a blurred chart — a blurred chart is a dark pattern wearing a product’s clothes.</li>
     <li><b>Downgrading deletes nothing.</b> Over the free ceiling the library stays exactly as it is and simply stops accepting new books. Deleting somebody’s notes because they stopped paying would be the single worst thing this app could do.</li>
     <li><b>The demo is a real account, not a shared one.</b> One tap mints a private throwaway seeded with a sample shelf, cleared after a day. A shared demo is a shared whiteboard — the next visitor reads whatever the last one scribbled — and a private one lets somebody change a page count and walk the upgrade without wondering what they are allowed to touch.</li>
     <li><b>Dark mode is tokens only.</b> Every rule is written against variables, so one block of overrides carries the whole app. The trap worth naming: a selected chip and the body text are both midnight blue in light mode but they are not the same thing, and reusing the text colour as a fill paints a near-white chip and then writes white on it.</li>
   </ul>`,
  `<p>Validated against hostile data and a written test suite rather than against users. <b>Thirty-five end-to-end checks</b> run against a real PostgreSQL database, and the ones that matter are the ones about other people’s data:</p>
   <div class="tasklist">
     <div class="trow"><div class="tn">T1</div><div class="tb"><div class="task">Sign in as B, then request every one of A’s routes by id</div><div class="crit">Read, edit, delete, progress, status and highlight-create all return 404 and change nothing — verified in the database, not just in the response</div></div></div>
     <div class="trow"><div class="tn">T2</div><div class="tb"><div class="task">Sign in with a wrong password, and with an address that has no account</div><div class="crit">Identical message and comparable timing — the no-account path still runs a hash, because returning early makes a missing account measurably faster and that is enough to enumerate addresses</div></div></div>
     <div class="trow"><div class="tn">T3</div><div class="tb"><div class="task">Post every form with no CSRF token and with a wrong one</div><div class="crit">403, and the page explains that the form went stale rather than showing a blank error</div></div></div>
     <div class="trow"><div class="tn">T4</div><div class="tb"><div class="task">Fill a free shelf to the ceiling, then add one more</div><div class="crit">Blocked with the reason named; upgrading lifts it; downgrading afterwards keeps every book and highlight</div></div></div>
     <div class="trow"><div class="tn">T5</div><div class="tb"><div class="task">Visit <code>/?sort=;DROP TABLE books</code>, and load the edge-case seed</div><div class="crit">Falls back to the default order; a title full of quotes and angle brackets renders as text, never as markup</div></div></div>
   </div>
   <p>Alongside those: a responsive sweep measuring real horizontal overflow at ten widths from 320px to 1440px, which is how two layout bugs surfaced that no screenshot would have shown — a library row whose minimum width exceeded a small phone, and an app bar that overflowed by nine pixels once the avatar joined it.</p>
   <p><b>The most useful failure was in the deployment, not the app.</b> The health check pointed at <code>/</code> — the page that reads the most from the database. Ship code expecting a column the live database has not got yet and that page answers 500, the check fails, the deploy is never promoted, and the service is left with no healthy instance at all: requests then hang with no response, which is far harder to diagnose than the error page the app was ready to show. The fix is one route that touches nothing. <b>A liveness check that depends on your data is not a liveness check.</b></p>
   <p>And the AI question, answered plainly: an agent wrote most of these lines and none of these decisions. Ten ticks instead of five stars, one control on the home screen, ownership in the WHERE clause, a cloth cover instead of a grey box, a paywall that names what it stopped, a downgrade that deletes nothing — that list is the case study, and it is the part I brought. <b>Generating a reading app takes an afternoon now; deciding where the line between free and paid should fall so the product does not become a hostage situation is still the job.</b></p>
   <p class="proto-note" style="margin-top:18px">The honest gaps: no usability study, and the checkout is simulated — the page says so in as many words. The plan column, the limits read off it and every feature that checks it are real, so wiring a payment processor in would change one route and nothing else.</p>`]
}
];

/* ================= RENDER ================= */
const $=id=>document.getElementById(id);
/* ---------- wireframes ----------
   A tiny vocabulary of blocks so chapter 04 can show structure instead of only
   describing it. Parts are tokens; "cards:6" repeats, "note:Text" annotates. */
const WIRE={
  nav:  n=>`<div class="w-nav">${'<i></i>'.repeat(n||3)}</div>`,
  head: ()=>`<div class="w-head"></div>`,
  sub:  ()=>`<div class="w-sub"></div>`,
  lines:n=>`<div class="w-lines">${'<i></i>'.repeat(n||3)}</div>`,
  btn:  ()=>`<div class="w-btn"></div>`,
  chips:n=>`<div class="w-chips">${'<i></i>'.repeat(n||4)}</div>`,
  cards:n=>`<div class="w-cards">${'<b></b>'.repeat(n||6)}</div>`,
  rows: n=>`<div class="w-rows">${'<b></b>'.repeat(n||4)}</div>`,
  shelf:n=>`<div class="w-shelf">${'<b></b>'.repeat(n||5)}</div>`,
  img:  ()=>`<div class="w-img"></div>`,
  ring: ()=>`<div class="w-ring"></div>`,
  map:  ()=>`<div class="w-map"></div>`,
  ticks:n=>`<div class="w-ticks">${'<i></i>'.repeat(n||10)}</div>`,
  tabs: n=>`<div class="w-tabs">${'<i></i>'.repeat(n||3)}</div>`,
  fab:  ()=>`<div class="w-fab"></div>`,
  note: t=>`<div class="w-note">${t}</div>`
};
function wirePart(token){
  const at=token.indexOf(':');
  const name=at<0?token:token.slice(0,at);
  const arg=at<0?null:token.slice(at+1);
  const fn=WIRE[name];
  if(!fn)return '';
  return fn(arg===null?null:(/^\d+$/.test(arg)?Number(arg):arg));
}
function renderWires(list){
  return `<div class="wires">${list.map(w=>`
    <figure>
      <div class="wf wf--${w.k}">${w.p.map(wirePart).join('')}</div>
      <figcaption><b>${w.t}</b> — ${w.cap}</figcaption>
    </figure>`).join('')}</div>`;
}
/* Which page this is. The sidebar is shared by every page; the workspace,
   the viewer and the view toggle only exist on the work page. */
const PAGE=document.body.dataset.page||'home';

/* ---------- sidebar ----------
   Built from CASES rather than written out in each page's markup. It used to
   be five hand-written buttons in index.html, which was already one list too
   many next to CASES; with a second page it would have been two.

   The case entries are real links to /?case=N, so they work from any page and
   survive a middle-click. On the work page a listener turns them back into
   openCase() so nothing navigates. */
function renderSidebar(){
  const nav=$('worknav');
  if(!nav)return;
  nav.innerHTML=
    `<span class="navlab">Selected work</span>`+
    CASES.map((c,i)=>`<a class="navcase" href="/?case=${i}" data-case="${i}">`+
      `<span class="num">${String(i+1).padStart(2,'0')}</span>`+
      `<span class="dot" style="background:${c.acc}"></span>${c.plain}</a>`).join('')+
    `<span class="navlab" style="margin-top:28px">Info</span>`+
    `<a href="/about/"${PAGE==='about'?' aria-current="page"':''}>About</a>`;

  nav.querySelectorAll('a').forEach(a=>{
    const n=a.dataset.case;
    if(n===undefined){a.addEventListener('click',()=>toggleDrawer(false));return;}
    if(PAGE!=='home')return;                       // let it navigate home
    a.addEventListener('click',e=>{e.preventDefault();toggleDrawer(false);openCase(Number(n));});
  });
}

function renderWorkspace(){
  if(!$('gridEl'))return;                          // not the work page
  $('gridEl').innerHTML=CASES.map((c,i)=>`
    <button class="workcard" style="--acc:${c.acc}" onclick="openCase(${i})">
      <div class="thumb">${c.motif}</div>
      <div class="wc-body">
        <div class="wc-tag"><i></i>${c.type}</div>
        <h3>${c.name}</h3>
        <p class="hook">${c.hook}</p>
        <p class="wc-lede">${c.lede[0]}</p>
        <div class="wc-foot"><span>${c.stack}</span>${c.build?`<span class="built">Built with AI</span>`:''}</div>
      </div>
    </button>`).join('');
  $('listEl').innerHTML=CASES.map((c,i)=>`
    <button class="row" style="--acc:${c.acc}" onclick="openCase(${i})">
      <span class="r-name">${c.plain}<span class="hook">${c.hook}</span></span>
      <span class="r-type">${c.type}</span>
    </button>`).join('');
}
/* ---------- view transitions ----------
   One wrapper for all four of them, so the no-support fallback is written
   once. The catch matters: a transition that gets skipped — because another
   starts, or because this one fired while the page was still loading, which
   is exactly what /?case=N does — rejects .ready. Nothing is broken and there
   is nothing to handle, but an unhandled rejection still logs an AbortError. */
function withTransition(fn){
  if(!document.startViewTransition)return fn();
  const t=document.startViewTransition(fn);
  if(t&&t.ready&&t.ready.catch)t.ready.catch(()=>{});
  return t;
}

function setView(v){
  const change=()=>{
    $('workspace').dataset.view=v;
    $('vtGrid').setAttribute('aria-pressed',v==='grid');
    $('vtList').setAttribute('aria-pressed',v==='list');
  };
  withTransition(change);
}

let current=0,lastFocus=null;
function openCase(i){
  current=i; const c=CASES[i];
  /* only remember the page-level trigger, not the viewer's own buttons —
     stepCase() re-enters openCase() while the viewer is already open */
  if(!$('viewer').classList.contains('open'))lastFocus=document.activeElement;
  const fill=()=>{
    $('vCrumb').textContent=c.plain;
    $('vHero').innerHTML=c.motif;
    $('vContent').innerHTML=`
      <div style="--acc:${c.acc}">
        <div class="v-tag"><i></i>${c.type}</div>
        <h2 id="vTitle">${c.name}</h2>
        <p class="v-hook" style="color:${c.acc}">${c.hook}</p>
        <div class="v-meta">
          <div><span class="lab">Stack</span><span class="val">${c.stack}</span></div>
          <div><span class="lab">Role</span><span class="val">${c.role||'Solo designer'}</span></div>
          ${c.build?`<div><span class="lab">Built with</span><span class="val" style="color:${c.acc}">${c.build}</span></div>`:''}
        </div>
        ${c.lede.map(p=>`<p class="lede">${p}</p>`).join('')}
        <a class="proto-cta" href="${c.proto}" target="_blank" rel="noopener">${c.protoLabel||'Open the live prototype ↗'}</a>
        <p class="proto-note">${c.protoNote}</p>
        ${c.shots?`<div class="shots">${c.shots.map(s=>`
          <figure>
            <a href="${c.proto}" target="_blank" rel="noopener"><img src="assets/shots/${s.src}" alt="${c.plain}: ${s.cap}" loading="lazy"></a>
            <figcaption>${s.cap}</figcaption>
          </figure>`).join('')}</div>`:''}
        <nav class="chapnav" aria-label="Chapters">
          ${CHAPS.map((ch,n)=>`<a href="#chap-${n}" onclick="jumpChap(event,${n})">${'0'+(n+1)} ${ch}</a>`).join('')}
        </nav>
        ${c.chapters.map((body,n)=>`
          <section class="chap" id="chap-${n}">
            <h3><b>0${n+1}</b> ${CHAPS[n]}</h3>
            ${n===3&&c.wires?renderWires(c.wires):''}
            ${body}
          </section>`).join('')}
        <div class="v-nav">
          <button onclick="stepCase(-1)">‹ ${CASES[(i-1+CASES.length)%CASES.length].plain}</button>
          <button onclick="stepCase(1)">${CASES[(i+1)%CASES.length].plain} ›</button>
        </div>
      </div>`;
    $('viewer').classList.add('open');
    $('viewer').scrollTop=0;
    document.body.style.overflow='hidden';
  };
  withTransition(fill);
  toggleDrawer(false);
  setTimeout(()=>$('viewer').querySelector('.v-actions button:last-child').focus(),80);
}
function jumpChap(e,n){
  e.preventDefault();
  const el=document.getElementById('chap-'+n);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}
function stepCase(d){openCase((current+d+CASES.length)%CASES.length);}
function closeCase(){
  const done=()=>{
    $('viewer').classList.remove('open');document.body.style.overflow='';
    if(lastFocus&&lastFocus.isConnected)lastFocus.focus();
    /* Drop ?case= so a refresh lands on the work page rather than
       reopening the case that was just closed. */
    if(location.search)history.replaceState(null,'',location.pathname);
  };
  withTransition(done);
}
document.addEventListener('keydown',e=>{
  if(!$('viewer')||!$('viewer').classList.contains('open'))return;
  if(e.key==='Escape')closeCase();
  if(e.key==='ArrowRight')stepCase(1);
  if(e.key==='ArrowLeft')stepCase(-1);
});
function toggleDrawer(force){
  const s=$('side');
  const open=typeof force==='boolean'?force:!s.classList.contains('open');
  s.classList.toggle('open',open);
  document.querySelector('.burger').setAttribute('aria-expanded',open);
}
/* Theme. The attribute is already on <html> from the head script; this only
   keeps the button honest about where a press would take you, and keeps
   following the system for anyone who has not pressed it. */
function applyTheme(t,remember){
  document.documentElement.setAttribute('data-theme',t);
  if(remember){try{localStorage.setItem('yl-theme',t)}catch(e){}}
  const b=$('themeBtn');
  if(!b)return;                                    // the attribute is what matters
  const toLight=t==='dark';
  b.textContent=toLight?'☀':'☾';
  b.setAttribute('aria-label',toLight?'Switch to the light theme':'Switch to the dark theme');
  b.title=b.getAttribute('aria-label');
}
function toggleTheme(){
  const next=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
  const change=()=>applyTheme(next,true);
  withTransition(change);
}
applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light',false);
try{
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',e=>{
    let stored=null; try{stored=localStorage.getItem('yl-theme')}catch(_){}
    if(stored!=='light'&&stored!=='dark')applyTheme(e.matches?'dark':'light',false);
  });
}catch(e){}
/* The two info sections used to live on this page as #about and #contact.
   Anything still pointing at those anchors goes to the page that replaced
   them rather than to a silent no-op. */
if(PAGE==='home'&&(location.hash==='#about'||location.hash==='#contact')){
  location.replace('/about/');
}

renderSidebar();
renderWorkspace();

/* /?case=N opens that case straight away, which is what the sidebar links
   from other pages rely on — and it gives a case a shareable URL. */
if(PAGE==='home'){
  /* get() returns null when the parameter is absent, and Number(null) is 0 —
     so testing the number alone opens case 01 on every plain visit. The
     null check is the whole guard. */
  const raw=new URLSearchParams(location.search).get('case');
  const n=raw===null?NaN:Number(raw);
  if(Number.isInteger(n)&&n>=0&&n<CASES.length)openCase(n);
}
