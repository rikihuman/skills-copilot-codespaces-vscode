# UI/UX Design Patterns for an IIFYM / Macro Tracking + Coaching App (SA-first, ED-safe, offline-first)

Research notes, compiled 2026-11-09. Method: web search (WebSearch). Note: direct page fetches of macrofactor.com and joincarbon.com were blocked in this research session (network allowlist), so MacroFactor/Carbon findings come from search-result excerpts of their help centres, blogs and App Store listings, not full-page reads. Vendor-authored claims are flagged as such.

---

## 1. Food logging UX (speed, search, barcode, recents, copy, quick-add, AI photo/voice, units, offline)

### Takeaway
The speed benchmark is MacroFactor's tap-count "Food Logging Speed Index" (FLSI), which is vendor-run but the closest thing to an industry standard. Independent-ish retests (also vendor-run, by MyNetDiary) rank apps differently, so measure taps per workflow yourself. Fast loggers share these traits: no forced meal-selection step, multi-add "plate" basket, strong recents/history, copy/repeat, a barcode and nutrition-label scanner, and AI photo or text logging that pre-fills editable entries. MyFitnessPal's April 2026 redesign is a useful cautionary tale, because users punished it for adding taps and removing copy shortcuts.

### Cited Findings
- MacroFactor created the Food Logging Speed Index (FLSI), which counts discrete actions (taps, clicks, selections) needed for common logging tasks across about 20 food loggers. MacroFactor claims the top spot and published a 2025 FLSI update. — [MacroFactor: Is MacroFactor Still the Fastest Food Logger? (2025 FLSI Update)](https://macrofactor.com/fastest-food-logger-2025/); [MacroFactor: What is the Fastest Food Logger?](https://macrofactorapp.com/fastest-food-logger/)
- MacroFactor estimates that MyFitnessPal needs about 1.5x more taps or swipes across workflows, and Cronometer about 1.7x (vendor claim). — [MacroFactor vs MyFitnessPal 2025](https://macrofactor.com/macrofactor-vs-myfitnesspal-2025/); [MacroFactor vs Cronometer 2026](https://macrofactor.com/macrofactor-vs-cronometer/)
- MyNetDiary ran a 7-day real-world test (127 food entries) of MyNetDiary, MacroFactor, MyFitnessPal and Cronometer and got different rankings from FLSI. It claims 31% fewer taps than "the most popular calorie tracker" (vendor claim). It noted that meal-based apps need an extra tap per meal, which saved MacroFactor 27 taps because it has no meal-selection step. It also noted that MFP search did not always return results containing all the search terms. — [MyNetDiary: Which Calorie Tracker App Is Fastest in Real Life? A 7-Day Test](https://www.mynetdiary.com/which-calorie-tracker-app-is-the-fastest.html)
- MacroFactor AI photo logging: you snap a meal photo in the AI section of the food logger and it "fills your plate" with editable entries. It searches MacroFactor's own database, and you can adjust quantities before logging. A "Photo & Text" option lets you add a description. — [MacroFactor: AI-Powered Food Logging](https://macrofactor.com/ai-food-logging/); [MacroFactor Help: AI Food Logging](https://help.macrofactorapp.com/en/articles/258-ai-food-logging); [MacroFactor v5.0.0 release notes](https://macrofactor.com/version-5-0-0/)
- The MacroFactor label scanner (since v2.5.0, premium) reads nutrition labels. A July 2026 update extended it to multiple label formats and languages and lets users create a custom food from a front-of-pack photo plus a label photo. — [MacroFactor July 2026 update: Plate Stack AI, Food Logging Updates](https://macrofactor.com/mm-july-2026/)
- I found no MacroFactor source confirming voice logging. A competitor (Nutrola) says it has none. — [Nutrola: Why Does MacroFactor Not Have Photo Scanning?](https://nutrola.app/en/blog/why-does-macrofactor-not-have-photo-scanning) (competitor marketing; treat as unverified)
- MyFitnessPal v26.16.0 (April 2026) replaced the Diary with a "Today" screen. Users reported extra taps and the loss of per-item copying between meals. Common complaints were more taps per meal, no per-meal calories at a glance, removed multi-select and copy-meal shortcuts, tiny macro numbers and a cluttered home view. Barcode scanning behind a paywall and ads also drove churn. — [Callie: Best Calorie Tracker App According to Reddit (2026)](https://www.mycallie.app/en/blog/best-calorie-tracker-app-reddit); [PlateLens: MyFitnessPal Alternatives 2026](https://platelens.app/blog/myfitnesspal-alternatives-2026) (both are competitor blogs summarising Reddit, so lower authority)
- Lose It! is commonly recommended to people who find MFP cluttered, and is described as keeping a cleaner dashboard through redesigns. — [Callie: Reddit roundup](https://www.mycallie.app/en/blog/best-calorie-tracker-app-reddit); [PlateLens](https://platelens.app/blog/myfitnesspal-alternatives-2026)
- Watch-first loggers (e.g., MacroRings) offer multilingual "voice-to-macros" and watch complications that show remaining calories. CalVue AI offers quick-logging of recent meals from the Watch. — [MacroRings App Store](https://apps.apple.com/app/id6757923348); [CalVue AI App Store](https://apps.apple.com/us/app/id6760278143)

### Inferences
- **Logger architecture.** A single "Log" sheet opens from a persistent "+" or tab accessory and goes straight to search, with no meal picker first. The meal or time slot defaults from the clock and can be edited later. Tabs or chips inside the sheet: Search · Recent · Frequent · My Foods/Recipes · Scan (barcode/label) · AI (photo/describe/voice) · Quick Add (macros only).
- **Multi-add "plate" basket.** Tapping results adds them to a basket with inline quantity steppers, and one "Log N items" commits them all. This pattern is why MacroFactor scores well on FLSI.
- **Tap targets to benchmark** (inference from the FLSI approach, not a published standard). Re-log a recent food in 2 taps or fewer (open logger, tap item). Barcode in 3 or fewer (open, scan, confirm). Copy yesterday's breakfast in 3 or fewer. Quick-add macros in 4 or fewer. Run your own FLSI-style audit against MacroFactor, Cronometer and MFP before launch.
- **Never remove copy, multi-select or per-meal subtotals.** MFP's 2026 backlash shows that power users notice regressions in tap count.
- **AI logging stays "draft-first".** AI output fills the basket as editable, database-matched items with confidence cues. It never commits silently. Label AI-estimated entries with a small sparkle or "AI estimate" tag in the diary, so trust and accuracy are explicit.
- **Units for SA.** Default to grams and ml. Offer household measures (cup, tbsp, slice, "1 medium") as secondary chips, and remember each user's last unit per food. The quantity field should open a numeric keypad with decimal support and accept the comma decimal separator used in the en-ZA locale. Include SA staples (pap/mieliepap, boerewors, biltong, chakalaka, vetkoek, bunny chow, rusks) and SA retailer barcodes (Woolworths, Pick n Pay, Checkers, Spar) in the local database. The local-food point is an inference; no source was found on SA database coverage.
- **Offline.** The search index of recents, favourites, own foods and a compressed local subset of common SA foods lives on the device. Barcodes that miss the local cache are queued with a "will match when online" placeholder entry. AI photo logs are queued with a "pending analysis" state. Show a subtle sync-status indicator, not blocking errors.

### Gaps
- Full FLSI per-app tap tables could not be fetched (macrofactor.com blocked). The report writer should cite the FLSI article for the exact numbers.
- No neutral third-party timed (seconds) benchmark of logging speed was found. Both available tests are vendor-run.
- No source covered SA-specific food database coverage or SA barcode coverage in the leading apps.

---

## 2. Daily dashboard (rings vs bars vs numbers; ranges vs exact; remaining vs consumed)

### Takeaway
The leading coaching app (MacroFactor) uses compact numeric-plus-bar widgets with a user toggle between "Consumed" and "Remaining", plus a weekly view. It deliberately avoids red numbers, warnings or shaming when users go over target. Most other apps use rings. User complaints centre on clutter and small numerals more than on the ring-vs-bar choice.

### Cited Findings
- MacroFactor dashboard: users toggle "Consumed" or "Remaining" at the bottom of the "Nutrition & Targets" or "Food Log Focus" widget. In Consumed view, consumed values are bold on top and targets lighter below. Remaining view shows what's left (e.g., 2,000 target − 600 eaten = 1,400 remaining). — [MacroFactor Help: Switch Between Consumed and Remaining Views](https://help.macrofactorapp.com/en/articles/42-switch-between-consumed-and-remaining-views?_rsc=1acxs)
- Overages show as negative numbers (e.g., −300) only if the user opts in, under More → Nutrition settings. — [MacroFactor Help: Consumed/Remaining](https://help.macrofactorapp.com/en/articles/42-switch-between-consumed-and-remaining-views?_rsc=1acxs)
- The 2024 dashboard revamp added a weekly view: pick any day for that day's nutrition and targets, or deselect all days to see the week in progress. "Food Log Focus" shows intake and targets in larger text. — [MacroFactor: Dashboard Revamp](https://macrofactor.com/dashboard-revamp/); [MacroFactor Help: Get to Know Your Dashboard](https://help.macrofactorapp.com/en/articles/22-get-to-know-your-dashboard); [Understanding the Widgets at the Top of the Dashboard](https://help.macrofactorapp.com/en/articles/225-understanding-the-widgets-at-the-top-of-the-dashboard)
- MacroFactor App Store copy: "You'll never see warnings, red numbers, or shaming when you go over your calorie or macro targets, unlike in other macro tracker apps." Third-party summaries describe it as "adherence-neutral". — [MacroFactor App Store (BG)](https://apps.apple.com/bg/app/id1553503471); [appshunter.io](https://appshunter.io/ios/app/1553503471)
- Cronometer users have asked for a "show remaining macros" option in forums, and asked why the fat summary bar is red in one place and green in another. Both requests point to confusion when colour semantics are inconsistent. — [Cronometer forum: Show Remaining Macros](https://forums.cronometer.com/discussion/3463/show-remaining-macros); [Cronometer forum: Fat summary bar red/green](https://forums.cronometer.com/discussion/comment/6141/)
- MFP's 2026 redesign complaints include "tiny macro numbers" and "food diary no longer shows calories per meal at a glance". — [PlateLens](https://platelens.app/blog/myfitnesspal-alternatives-2026)

### Inferences
- **Hero.** One large numeral (calories remaining or consumed, user's choice) in tabular figures, then 3–4 horizontal bars (Protein first, then Carbs, Fat, optional Fibre), each labelled "consumed / target". Use bars rather than nested rings for macros. Bars align values and scale to Dynamic Type better, and nested rings become illegible beyond 3. An optional single calorie ring can serve as a "glance" style for widgets and watch.
- **Default view.** Default to "Remaining" for logging-centric users and offer the toggle in place, as MacroFactor does.
- **Ranges.** Show protein as a floor ("≥ 150 g") and calories as a target with a soft band (e.g., ±5–10%) drawn as a tinted zone on the bar. Inside the band the bar uses the brand colour. Overshoot uses a neutral darker shade, never red. This adapts MacroFactor's "no red, no warnings" stance. The band width is a product decision; I found no source on what band users prefer.
- **Overage.** Off by default. If shown, use neutral text ("120 over") with no exclamation, red or shake.
- **Under the hero.** Meal sections with per-meal subtotals (users complained when MFP removed these), an inline "+" per meal, a week strip (Mon–Sun dots showing logged or partial status, not pass/fail colouring), and one contextual education card slot.
- **Trend weight chip.** "Trend 82.4 kg ↓0.4/wk" on the dashboard links to Progress.

### Gaps
- No user research (survey or A/B) was found comparing rings vs bars, or remaining vs consumed preference, among macro trackers.
- Carbon, Lose It!, Yazio and Lifesum dashboard specifics could not be verified from sources in this session. Use Mobbin screenshots for visual comparison.

---

## 3. Weekly check-in UX ("what changed and why")

### Takeaway
Both MacroFactor and Carbon run a weekly check-in that re-estimates expenditure from intake and weight trend and then adjusts targets. Carbon has explicitly moved toward a report showing "what your Coach reviewed, what decision was made, and why". That is the right template for an explanation card. Users' main confusion is unexplained swings in expenditure.

### Cited Findings
- Carbon check-in flow: it lives on the Coach tab, and a notification fires when the check-in window opens. Step 1 asks how you tracked (e.g., "I only tracked some of my meals", "I didn't track, but met my targets"). If logging was incomplete, the user can enter weekly averages or totals manually. Then the user enters body weight. — [Carbon Help: What is the weekly check-in?](https://help.joincarbon.com/en/articles/6004812-weekly-check-in-in-carbon-how-it-works-and-what-to-expect); [Carbon Help: Which tracking option should I choose at check-in](https://help.joincarbon.com/en/articles/16105189-which-tracking-option-should-i-choose-at-check-in)
- Carbon's post-check-in report shows what the Coach reviewed, what decision was made, and why. If macros change, the reason is shown. — [Carbon: Release 76](https://www.joincarbon.com/blog/release-76) (per search excerpt)
- Carbon rules: a non-compliant check-in leads to no target change that week. Early check-in is allowed up to 2 days before the scheduled day, and not before day 5. Check-in resets are not self-serve. Full adjustments require "From Coach" targets, not custom macros. — [Carbon Help: Checking in early](https://help.joincarbon.com/en/articles/13943648-checking-in-early-on-carbon); [Carbon Help: How to reset a check-in](https://help.joincarbon.com/en/articles/15275202-how-to-reset-a-check-in); [Carbon Help: Compliance](https://help.joincarbon.com/en/articles/6004813-why-compliance-is-the-foundation-of-your-progress-in-carbon); [Carbon Help: Advanced check-ins](https://help.joincarbon.com/en/articles/10535965-advanced-check-ins)
- MacroFactor's weekly check-in looks at changes in expenditure, weight and goal and gives new macro targets for the following week. Users can switch expenditure from dynamic to static to freeze changes. — [MacroFactor Help: Dynamic to static expenditure](https://help.macrofactorapp.com/en/articles/64-how-to-change-your-expenditure-estimate-from-dynamic-to-static); [MacroFactor Help: How should I interpret changes to my energy expenditure?](https://help.macrofactorapp.com/en/articles/26-how-should-i-interpret-changes-to-my-energy-expenditure)
- Reddit users say they are confused by MacroFactor expenditure changes ("I have a hard time understanding this app"; "Confused by expenditure data"). Community answers cite water weight, incomplete logging, a 2–3 week settling time, and resetting the expenditure start date after a break. — [r/MacroFactor: hard time understanding](https://axebps-redlib.hf.space/r/MacroFactor/comments/1jiq28p/i_have_a_hard_time_understanding_this_app); [r/MacroFactor: What do you learn from your weekly check-in](https://nyc1.lr.ggtyler.dev/r/MacroFactor/comments/1hcqk5l/what_do_you_learn_from_your_weekly_check_in); [r/MacroFactor: Confused by expenditure](https://nyc1.lr.ggtyler.dev/r/MacroFactor/comments/1he5niw/confused_by_expenditure_data_losing_weight_too) (Reddit mirrors; anecdotal)

### Inferences
Recommended check-in flow (4–5 screens, under 90 s):
1. **Entry.** A card on Today plus a push notification on check-in day. Allow early check-in, as Carbon does.
2. **"How did this week go?"** A self-report of logging completeness using Carbon-style options, plus optional energy, hunger, sleep and stress on 1–5 emoji-free scales. Optionally prompt for measurements or photos (skippable).
3. **"What we looked at."** A 3-row data card: avg intake (with days logged, e.g., "6/7 days"), trend weight change (e.g., "−0.35 kg"), and estimated expenditure (with arrow and delta).
4. **"What changed and why."** Old target → new target, each macro with its delta. Below that, one plain-language sentence ("Your weight dropped a little faster than your 0.5 kg/wk goal, so we added 100 kcal to protect muscle and energy"), with "Learn why" opening a 60-second lesson on adaptive expenditure.
5. **Accept / adjust.** "Accept new targets" is primary. "Keep last week's" is secondary. A "Talk to coach" link goes to the AI or human coach.
- **Low-data weeks.** If logging was too sparse, say "Not enough data to adjust — targets unchanged" without blame, matching Carbon's no-change rule but with neutral copy.
- **Volatility guardrails.** Show a "confidence" or "settling in" label for weeks 1–3, which addresses the common Reddit confusion.

### Gaps
- Visual layout of the MacroFactor and Carbon check-in screens could not be verified (fetch blocked). Mobbin or screen recordings would confirm it.

---

## 4. Progress screens (trend vs scale weight, measurements, photos, phase timeline, education progress)

### Takeaway
The standard is a chart of a faint scale-weight series overlaid with a bold smoothed trend line, with headline metrics of current trend weight and weekly rate. Photo comparison has converged on a ghost-overlay camera plus side-by-side and slider compare, with privacy and on-device storage as a selling point.

### Cited Findings
- MacroFactor weight trend: scale weight is a pale line, and the trend line is deep purple. The trend smooths out swings in water and gut contents and copes with missing weigh-ins. Because it lags, it sits above scale weight when losing and below when gaining. — [MacroFactor Help: Weight Trend](https://help.macrofactorapp.com/dashboard/weight_trend/)
- MacroFactor Watch shows current trend weight and weekly rate of change, with scrollable history. — [MacroFactor Help: Trend weight on Watch](https://help.macrofactorapp.com/en/articles/271-how-to-view-your-trend-weight-on-the-watch-app)
- Weight Trend V2 (July 2026) lets users choose weight-data-only, goal-rate-only, or a blended trend. — [MacroFactor: July 2026 update](https://macrofactor.com/mm-july-2026/)
- MacroFactor goal features include goal completion options and phase planning. — [MacroFactor: Goal features](https://macrofactor.com/goal-features/); [MacroFactor Feb 2022: More options for goal completion](https://macrofactor.com/mm-february-2022/)
- Progress-photo apps (ProgressCam, SideLens, Progressly) show the previous photo as a ghost overlay in the camera. MatchFrame adds adjustable overlay opacity. Compare modes are side-by-side, slide-to-reveal, tap-to-toggle, and a transition video between a chosen start and end date (PicProgress). — [ProgressCam](https://mwm.ai/apps/progresscam-progress-photos/6760968159); [SideLens App Store](https://apps.apple.com/us/app/id6759226438); [PicProgress (Product Hunt)](https://www.producthunt.com/p/picprogress-progress-photos); [MatchFrame](https://peerlist.io/ahmetcankutk/project/matchframe-camera-overlay-app--app-store)
- GainFrame: ghost mode is "the strictest alignment check". Doubled shoulders or hips mean the pose or scale differs. Match landmarks such as shoulders, hips, knees and floor line. Privacy (on-device only) is a recurring selling point. — [GainFrame progress photo compare tool](https://gainframe.app/tools/progress-photo-compare/); [MatchFrame](https://peerlist.io/ahmetcankutk/project/matchframe-camera-overlay-app--app-store)

### Inferences
- **Progress tab layout.** A segmented control or chips: Weight · Body · Photos · Phases · Learning.
  - **Weight.** Faint dots for scale weight plus a bold trend line, a range picker (1M/3M/6M/1Y/All), and a headline "Trend 82.4 kg · −0.4 kg/wk". Add a shaded goal-rate corridor. Phase colour bands sit behind the chart (cut, maintain, bulk, reverse, in neutral hues, not good/bad colours).
  - **Body.** Measurements (waist, hips, chest, arm, thigh) as small-multiple sparklines, each with a trend, plus optional body-fat %.
  - **Photos.** A ghost-overlay camera with opacity control, front, side and back slots, then compare with a slider or side-by-side. Photos are private by default and stored locally with optional encrypted backup. Blur thumbnails in the grid by default (inference for ED safety).
  - **Phases.** A horizontal timeline of phases with start and end dates, the goal rate, and the average achieved rate. Tapping a phase opens a summary.
  - **Learning.** Lessons completed and the "skills unlocked" path (see §5).
- **ED-safe option.** "Hide weight numbers" shows the trend direction or shape only, without axis values (see §7).

### Gaps
- No research was found on user preference for chart styles (e.g., dots vs line for scale weight), beyond MacroFactor's own design.

---

## 5. Education UX (contextual tips, lessons, progressive disclosure, onboarding, Noom-style curricula)

### Takeaway
Noom shows that a long, explanation-rich onboarding (up to ~113 screens, 10–15 min) can build commitment when each question explains why it is asked. It also uses daily micro-lessons and progressive feature reveal. For a macro coaching app, borrow the progressive disclosure and daily bite-size lessons, but keep onboarding much shorter and avoid manipulative tactics.

### Cited Findings
- Noom's web-to-app onboarding is up to 113 screens and takes 10–15 minutes. When users understand why information is collected and how it will be used, they are more willing to share it. — [RevenueCat: Inside Noom's web-to-app onboarding funnel](https://www.revenuecat.com/blog/growth/web-to-app-onboarding-funnel)
- Noom sets daily assignments (articles, quizzes) to build habits gradually, and teaches during onboarding. — [Noom blog: Mechanics of Testing a Big Hypothesis](https://www.noom.com/blog/mechanics-of-testing-a-big-hypothesis/)
- Justinmind's teardown: Noom uses social proof at steps 5 and 11 and reveals features progressively to avoid overwhelm. It criticises cancellation that requires contacting a coach (a dark pattern). — [Justinmind: UX case study of Noom](https://www.justinmind.com/blog/ux-case-study-of-noom-app-gamification-progressive-disclosure-nudges/)

### Inferences
- **Onboarding, about 12–20 screens and 3–5 minutes.** (1) 18+ age gate with DOB. (2) Goal (lose, maintain, gain, recomp, "eat better"). (3) Sex for the BMR formula, with inclusive wording. (4) Height and weight in metric by default. (5) Activity and training. (6) Pace (gentle, moderate, aggressive), with the aggressive option capped and explained. (7) Diet preferences. (8) ED-screening or wellbeing question with an opt-in "Calm mode" (see §7). (9) Experience level with tracking. (10) Result reveal: targets with "why these numbers" bullets. Every input screen has a one-line "why we ask". Skip optional items and let users fill them in later.
- **Progressive feature unlocking.** Week 1 shows only calories and protein on the dashboard. Carbs and fat bars appear after the first check-in or by choice. Fibre and micronutrients, custom macro splits, and advanced phases (reverse diet, diet breaks) unlock through lessons or a settings toggle, never through a paywall disguised as education. Experienced IIFYM users can unlock everything in onboarding ("I already track macros").
- **Moment-of-need tips.** A single dismissible card slot on Today, triggered by events: first barcode miss, first over-target day (neutral copy about weekly averages), first check-in, plateau of 3 or more weeks, eating out, weekend patterns. Each card has a 1-line insight, a "Learn more (2 min)" link, and "Don't show again".
- **Lesson modules.** Units of 3–5 cards, about 2 minutes, with an optional one-question check. A course map (e.g., Energy balance → Protein → Adaptive TDEE → Trend weight → Diet breaks → Eating out in SA → Maintenance). Lessons are downloadable for offline use.
- **No Noom-style dark patterns.** In-app cancellation, no fake scarcity, and avoid social proof that pressures.

### Gaps
- No MacroFactor or Carbon education UI sources were retrieved (both are light on in-app curricula). No quantitative evidence on ideal onboarding length for macro apps specifically was found.

---

## 6. AI coach chat UI and human coach messaging

### Takeaway
Good assistant UIs state their capabilities, offer a few context-relevant suggested prompts, show that they "see" the user's current context, carry one persistent disclaimer near the input rather than on every message, and let users override, edit, decline or disable AI.

### Cited Findings
- NN/g (Maria Rosala): helpful site-specific AI chatbots clearly state their capabilities, offer relevant prompt suggestions, and quickly signal they know what users are looking at. — [NN/g author page, Maria Rosala](https://www.nngroup.com/articles/author/maria-rosala/) (snippet only; full article not retrieved)
- NN/g analysed 425 interactions with ChatGPT, Bard and Bing Chat and found distinct conversation types, so chat UX should support both quick one-liners and exploratory sessions. — via [Parallel: UX for AI chatbots](https://www.parallelhq.com/blog/ux-ai-chatbots) (secondary summary)
- Cloudscape (AWS) design system: show up to 5 suggested follow-up prompts and hide the earlier ones once the user picks one. — [Cloudscape: Support prompts](https://cloudscape.design/patterns/genai/support-prompts); [Cloudscape: Generative AI chat](https://cloudscape.design/patterns/genai/generative-AI-chat/)
- Siemens iX: one visible disclaimer under the chat input rather than under every AI message. — [Siemens iX: AI and UX writing](https://ix.siemens.io/docs/guidelines/language/support-and-resources/AI-and-UX-writing)
- DNV AI guidelines: users should be able to override, edit or decline AI suggestions and pause or disable AI features. — [DNV: AI Principles & Ethics](https://onedesign.dnv.com/ai-guidelines/principles-ethics)
- A practitioner playbook: explain why a recommendation appears, allow dismiss or refine, and limit suggestions to about 3. — [Spiral Scout: AI UX playbook](https://spiralscout.com/blog/ai-ux-playbook-for-websites)

### Inferences
- **Coach tab.** One thread list with "AI Coach" pinned on top and "Your coach (Name)" if a human coach is attached. The two are visually distinct: the AI has an "AI" badge and a different avatar treatment, and the human has a photo and "Usually replies within X h".
- **Empty state.** One line of capabilities ("I can explain your targets, suggest meals that fit your remaining macros, and review your week"), plus 3 suggested prompts generated from today's state: "What should I eat for dinner with 45 g protein left?", "Why did my calories go up?", "Make Woolworths takeaway fit my macros".
- **Grounding chips.** Answers that use the user's data show tappable source chips ("Based on: last 7 days' logs · trend weight · check-in 3 Nov"). Meal suggestions render as cards with a "Log this" action, so chat feeds the logger.
- **Safety UI.** A persistent footer reads "AI coach · not medical advice". Each message has a long-press menu (copy, 👍/👎, Report). On ED-risk language (e.g., requests for extreme deficits), the coach declines gently and surfaces support resources. In SA that includes SADAG (an inference; verify current helpline details).
- **Escalation.** An "Ask my human coach" handoff carries the conversation context. Human coach messaging supports voice notes and photo attachments, since WhatsApp-style messaging is the norm in SA (inference), plus read receipts and coach office hours.
- **Offline.** Messages compose offline and queue with a "sending when online" status. AI replies require connectivity. Say so plainly and offer cached lessons instead.

### Gaps
- The full NN/g guideline article and NN/g's AI disclaimer research were not retrieved. No sources were found on how MacroFactor or Carbon implement AI or human coach chat UI specifically.

---

## 7. ED-safe and inclusive UI

### Takeaway
Hide-numbers modes exist (e.g., Ori's "Stealth Health") and are frequently requested (Cronometer forum, open-source trackers). Clinical-leaning sources warn that no display mode makes calorie tracking safe for people in active ED treatment. The design goal is harm reduction plus signposting, not "ED-safe tracking". Streaks are linked to guilt and frustration in qualitative research.

### Cited Findings
- Ori's "Stealth Health" setting hides calorie, macro and weight numbers across app screens. — [Ori](https://heyori.app/)
- Cronometer users requested an option to hide all calorie information, noting clinicians often advise ED patients not to count calories. Staff replied that some summaries can be removed, but calories still appear when adding food. — [Cronometer forum](https://forums.cronometer.com/discussion/comment/11651)
- Open-source proposals: a nutrient-focused mode that hides kcal, carbs and fat across Home, Diary and food details, and a Focus filter that hides numbers in Today, diary, widgets and notifications and mutes calorie reminders. — [OpenNutriTracker issue #1312](https://github.com/simonoppowa/OpenNutriTracker/issues/1312); [fitness-app issue #308](https://github.com/TheRealestNwah/fitness-app/issues/308)
- One guide says calorie tracking apps are contraindicated in active ED treatment and most recovery stages, and recommends clinician-linked tools like Recovery Record. Callie admits it has not studied whether its design choices reduce disordered eating. — [CalorieTrackerLab: Calorie Tracking and ED Recovery (2026)](https://calorietrackerlab.com/bestof/best-calorie-tracker-for-eating-disorder-recovery-2026/); [Callie: Is calorie counting bad for you?](https://www.mycallie.app/en/blog/is-calorie-counting-bad-for-you) (vendor content)
- The Swaddle argues that health-tracking apps can be a pipeline to eating disorders and that UI should centre health rather than weight loss. — [The Swaddle](https://www.theswaddle.com/health-tracking-apps-provide-a-worrying-pipeline-to-eating-disorders-better-tech-design-can-fix-that)
- MacroFactor shows no red numbers, warnings or shaming on overage. — [MacroFactor App Store](https://apps.apple.com/bg/app/id1553503471)
- UCL qualitative study (British Journal of Health Psychology): missing goals or losing streaks in fitness apps triggered guilt, irritation and loss of motivation. Researchers urged designs built on intrinsic motivation, not narrow weight-loss metrics. — [Earth.com: Why fitness apps might be harming your health](https://www.earth.com/news/why-fitness-apps-might-be-harming-your-health/) (secondary report of the UCL study)

### Inferences
- **"Calm mode" (hide numbers)**, a single toggle that is also offered in onboarding. It hides kcal, macro grams and weight values everywhere: dashboard, diary, widgets, watch, notifications and Live Activities. It shows qualitative states instead ("on track this week", plate-balance icons, protein "servings") and trend direction without values. It mutes calorie reminders and is reversible at any time.
- **Language.** Use "logged" and "eaten", never "cheat", "bad food", "guilty" or "earn". Say "over" only if the user enables it. Weight change copy is descriptive ("trend moved 0.3 kg"), not evaluative ("great job!" on loss).
- **Colour.** No red or green for food quality or adherence. Overshoot uses a neutral tint. Reserve red for genuine errors (e.g., sync failure).
- **Consistency, not streaks.** Show "days logged this week: 5/7" or a weekly consistency score that tolerates gaps and never resets to zero. No streak-loss notifications. "Rest days" or "untracked days" are first-class, as Carbon allows non-tracked check-ins.
- **Guardrails.** Floor calorie targets (no target below a safe minimum without human coach sign-off). Cap loss rate. Show a gentle check-in prompt if a user logs very low intake for several days, with signposting to support. 18+ age gate.
- **Imagery.** Neutral, diverse body imagery or none at all. Use food and abstract illustrations instead of "before/after" bodies in marketing and onboarding. Progress photos stay private and blurred by default.

### Gaps
- No controlled evidence that hide-numbers modes reduce harm. No SA-specific ED guidance for app design found (search SADAG or the SA Eating Disorders Association for local resources).

---

## 8. Platform conventions (iOS 26 Liquid Glass, Material 3 Expressive, typography, haptics, widgets, accessibility)

### Takeaway
iOS 26 tab bars float on Liquid Glass, can minimise on scroll, and support a bottom accessory, which is a natural home for a persistent "Log food" control. Material 3 Expressive replaces the classic nav bar with a shorter "flexible navigation bar" and deprecates the navigation drawer. Changing numbers should use tabular (monospaced) digits. Swift Charts provides VoiceOver Audio Graphs and supports custom chart descriptors.

### Cited Findings
- HIG: the tab bar floats above content on a Liquid Glass background. For tab bars with an accessory (like the Music MiniPlayer), you can minimise the bar and move the accessory inline on scroll. — [Apple HIG: Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars.md)
- WWDC25 session 284: `tabBarMinimizeBehavior` minimises on scroll. `UITabAccessory` / `bottomAccessory` (UIKit) or `tabViewBottomAccessory` (SwiftUI) adds an accessory. Observe `tabAccessoryEnvironment` to adapt the accessory when it is inline. — [WWDC25: Build a UIKit app with the new design](https://developer.apple.com/videos/play/wwdc2025/284/); [Donny Wals: Tab bars on iOS 26](https://www.donnywals.com/exploring-tab-bars-on-ios-26-with-liquid-glass/); [Create with Swift: bottom accessory](https://www.createwithswift.com/enhancing-the-tab-bar-with-a-bottom-accessory/)
- iOS 26 supports an optional dedicated search tab at the trailing end. Use single-word tab labels and filled SF Symbols (third-party summary; verify against the HIG). — [mobile-design-ios skill summary](https://tessl.io/registry/skills/github/ivan-magda/mobile-design-skills/mobile-design-ios)
- Material 3 Expressive (May 2025): Google cites 46 studies with 18,000+ participants, and says users spotted key UI elements up to 4x faster with eye tracking (Google's own research). The original navigation bar is deprecated in favour of a shorter "flexible navigation bar". The navigation drawer is deprecated in favour of the navigation rail. — [9to5Google: M3 Expressive navigation](https://9to5google.com/2025/05/14/material-3-expressive-navigation/); [Android Developers: Benefits of expressive design](https://developer.android.com/design/ui/wear/guides/get-started/benefits)
- SwiftUI `monospacedDigit()` gives fixed-width digits so live-updating numbers don't jitter. It does nothing if the font lacks tabular figures. The CSS equivalent is `font-variant-numeric: tabular-nums`, and Flutter's is `FontFeature.tabularFigures()`. — [Apple: monospacedDigit()](https://developer.apple.com/documentation/swiftui/view/monospaceddigit().md); [Use Your Loaf: Monospace Digits](https://useyourloaf.com/blog/monospace-digits/); [Flutter: tabularFigures](https://api.flutter.dev/flutter/dart-ui/FontFeature/FontFeature.tabularFigures.html)
- Swift Charts automatically builds an accessibility tree and VoiceOver Audio Graphs (pitch represents value, plus a "Describe chart" rotor action). Custom charts use `AXChartDescriptorRepresentable` and `.accessibilityChartDescriptor` with title, axes, series and a summary of key takeaways. — [Apple: Representing chart data as an audio graph](https://developer.apple.com/documentation/accessibility/representing-chart-data-as-an-audio-graph.md); [Create with Swift: Accessible charts](https://createwithswift.com/making-charts-accessible-with-swift-charts); [Orange a11y: WWDC21 charts](https://a11y-guidelines.orange.com/en/mobile/ios/wwdc/2021/122/)
- Calorie apps in 2026 commonly ship Live Activities and Lock Screen widgets (calorie ring on the Lock Screen and Dynamic Island), log-from-widget, Watch rings and complications showing remaining calories, and quick-log of recents from the Watch. — [KCALM](https://apps.apple.com/app/kcalm/id6747867349); [CalVue AI](https://apps.apple.com/us/app/id6760278143); [FuelFox](https://apps.apple.com/app/id6765678446); [MacroRings](https://apps.apple.com/app/id6757923348)

### Inferences
- **Typography.** Use SF Pro (iOS) or Roboto Flex / Google Sans (Android) with tabular digits for every macro number. Large display numerals for the hero value (e.g., 48–64 pt) that scale with Dynamic Type. At accessibility sizes, bars stack vertically and charts get a "View as table" alternative.
- **Haptics.** A light impact on successful log, a selection tick on stepper changes, a success notification on check-in accept. No "error" haptic on going over target.
- **iOS.** Use a Liquid Glass tab bar with a bottom accessory "+ Log" pill that stays reachable when the bar minimises. Keep custom brand colour off the glass chrome and put colour inside content.
- **Android.** Use the M3 Expressive flexible navigation bar with a FAB or "+ Log" button, and a navigation rail on tablets and foldables.
- **Extensions.** Home and Lock Screen widgets (remaining kcal and protein, quick "Log recent"), an optional Live Activity during an active "fasting window" or "eating out" (inference, use sparingly), and Watch and Wear OS complications. All of them respect Calm mode. Android equivalents are Glance widgets.
- **Charts a11y.** Provide chart descriptors with a summary sentence ("Trend weight down 1.2 kg over 4 weeks"). Never encode meaning with colour alone, and add patterns or labels to phase bands.

### Gaps
- The full HIG Liquid Glass guidance on custom colour in bars, and the official M3 Expressive spec page for the flexible navigation bar, were not fetched. Verify on developer.apple.com and m3.material.io.

---

## 9. Navigation structure recommendation for this app

### Takeaway
Use 4–5 tabs, with logging as a persistent primary action rather than a buried tab. This follows iOS 26's tab-bar accessory pattern, M3 Expressive's flexible nav bar, and leading apps' Coach-tab placement of check-ins (Carbon).

### Cited Findings
- Carbon places the weekly check-in and in-app support chat on the Coach tab. — [Carbon Help: Weekly check-in](https://help.joincarbon.com/en/articles/6004812-weekly-check-in-in-carbon-how-it-works-and-what-to-expect); [Carbon Help: Reset a check-in](https://help.joincarbon.com/en/articles/15275202-how-to-reset-a-check-in)
- MacroFactor uses a Dashboard plus a "More" area for settings such as expenditure and nutrition display. — [MacroFactor Help: Consumed/Remaining](https://help.macrofactorapp.com/en/articles/42-switch-between-consumed-and-remaining-views?_rsc=1acxs); [MacroFactor Help: Dynamic/static expenditure](https://help.macrofactorapp.com/en/articles/64-how-to-change-your-expenditure-estimate-from-dynamic-to-static)
- iOS 26 tab bar accessory and minimise-on-scroll; M3 Expressive flexible navigation bar; drawer deprecated. — [Apple HIG: Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars.md); [9to5Google](https://9to5google.com/2025/05/14/material-3-expressive-navigation/)

### Inferences
Recommended tabs (single-word labels):
1. **Today**: the dashboard (hero remaining/consumed, macro bars, meals, week strip, one tip card, check-in card when due).
2. **Diary** (or "Log"): day-by-day food log with date scroller, copy/move, and recipes and custom foods. It could merge into Today if the team wants 4 tabs.
3. **Coach**: AI coach and human coach threads, weekly check-in entry and history, and current targets with "why".
4. **Progress**: Weight · Body · Photos · Phases · Learning.
5. **Learn** (or fold into Progress or Coach): lesson map, saved tips, glossary. Alternatively, make "Me/More" the 5th tab for settings, Calm mode and data export.
- **Persistent "+ Log".** The iOS tab-bar bottom accessory or an Android FAB opens the logger sheet from anywhere. A long-press offers shortcuts (Scan, Photo, Quick add, Copy yesterday).
- **Avoid hamburger menus.** The drawer is deprecated in M3 Expressive.

### Gaps
- No usability study comparing tab structures for nutrition apps was found. Validate with tree testing and first-click tests with SA users.

---

## 10. South African market and offline-first considerations

### Takeaway
SA users are data-cost-sensitive and must cope with load shedding and patchy connectivity. Data-lite design (small assets, caching, progressive sync) has produced strong engagement gains in SA case studies. Language localisation also matters.

### Cited Findings
- Scrolla's SA "Data Lite" site cut page weight from about 1 MB to about 100 KB (90% data saving) and saw about a sixfold traffic increase. Scrolla also publishes in isiZulu because language is a barrier. — [Google: How Scrolla is making news more accessible to South Africans](https://blog.google/company-news/outreach-and-initiatives/google-news-initiative/how-scrolla-is-making-news-more-accessible-to-south-africans/)
- Uber Lite was a 9.7 MB download vs 56 MB for the full app. Apps that burn data are often deleted (agency commentary). — [Modern Marketing: Making the data burden lighter](https://modernmarketing.co.za/making-the-data-burden-on-africas-cost-conscious-mobile-community-lighter)
- Caching, progressive downloads and intelligent sync on reconnection hold up better during load shedding. Offline support adds backend sync cost. — [Scrums.com: EskomSePush build-cost guide](https://www.scrums.com/how-much-does-it-cost-to-build-an-app/eskom-se-push)
- Lessons from building for SA networks (web perf perspective). — [Go Make Things: Lessons from South Africa](https://gomakethings.com/lessons-from-south-africa/)

### Inferences
- **Downloads.** Keep the install small. Download the food DB delta and lessons over Wi-Fi by default, and offer a "Data saver" setting that compresses photo uploads and defers AI photo analysis to Wi-Fi.
- **Sync status.** Show an unobtrusive sync chip ("3 items waiting to sync"), avoid modal errors, and resolve conflicts with last-write-wins plus an edit history.
- **Localisation.** en-ZA locale (comma decimal, metric, ZAR pricing). Plan for isiZulu and Afrikaans UI later. Food names should include local and alternative names.

### Gaps
- No SA-specific data on nutrition-app usage, device mix (Android share, low-RAM devices) or data-price sensitivity was retrieved in this session. Stats SA or ICASA data, and GSMA reports, would fill this gap.
