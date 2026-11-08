# In-App Education, Coaching and Progress Tracking for an IIFYM/Macro App

Research notes, Nov 2026. Method: web search plus page fetches. **Access limit:** the session's network blocked direct fetches of macrofactor.com, help.macrofactorapp.com and help.joincarbon.com. MacroFactor and Carbon details below therefore come from search-result snippets of their own help and marketing pages, not full-page reads. Treat all vendor descriptions as the company's own framing.

## 1. Education: how apps teach principles during use (Noom, MacroFactor, Carbon, microlearning, JIT education, progressive unlocking)

### Takeaway
Leading apps teach in two ways. Noom runs a scheduled daily lesson curriculum based on CBT. MacroFactor and Carbon teach at the moment of need, inside the weekly check-in: short coaching modules, a check-in report and explanations of the trend and expenditure figures. Engagement with lessons is associated with better outcomes and more realistic expectations, but the evidence is observational and mostly funded by the companies. I found no rigorous nutrition-specific evidence for spaced repetition or microlearning.

### Cited Findings
- **Noom curriculum structure:** 52 weeks of curriculum, with 1-3 articles to read per day, according to the official trial registration (NCT04522245) — [trials.co NCT04522245](https://trials.co/clinical-trials-details/-/NCT04522245). Review sites describe these as CBT-based daily lessons of 10-15 minutes — [bestguide.com](https://bestguide.com/review/noom/).
- **Noom, single-arm study:** Users improved on body positivity and self-compassion while learning ACT, DBT and CBT content through the curriculum and coaching. There was no control group — [PMC8708647 / IJERPH 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8708647/).
- **Noom, expectations:** Higher engagement, especially reading CBT-based articles, was associated with greater reductions in unrealistic weight-loss expectations over about 6 months — [JMIR mHealth 2021 e30622](https://mhealth.jmir.org/2021/11/e30622/PDF); [Obesities 2022](https://doaj.org/article/c39050b22eab46d490338e0c72cac542).
- **Noom, engagement and weight loss:** A retrospective study of 11,252 users linked articles read, meals logged and weigh-ins to weight loss from 9 to 52 weeks. All the evidence here is observational, and the authors are affiliated with Noom — [IDEAS/IJERPH](https://ideas.repec.org/a/gam/jijerp/v18y2021i24p13358-d705746.html).
- **MacroFactor:** The weekly check-in can include curated "Coaching Modules" that each target a specific diet problem. A "Fast Check-In" skips the modules and goes straight to the new macros, for advanced or coached users. Version 3.0.0 lets users switch individual modules on or off under More > Strategy — [MacroFactor Help: Intro to Check-Ins and Coaching Modules](https://help.macrofactorapp.com/en/articles/247-introduction-to-check-ins-and-coaching-modules); [MF Coach launch](https://macrofactor.com/mf-coach/); [Version 3.0.0 notes](https://macrofactor.com/version-3-0-0/).
- **MacroFactor, explaining the algorithm:** MacroFactor publishes long explainers of its algorithms and philosophy, and an in-depth article on its V3 expenditure algorithm — [Algorithms & Core Philosophy](https://macrofactor.com/macrofactors-algorithms-and-core-philosophy/); [Expenditure V3](https://macrofactor.com/expenditure-v3/).
- **Carbon:** Each check-in produces a report that breaks down intake, compliance and target changes. The reports are saved in check-in history on the Coach tab, and the Coach tab shows nudges between check-ins where the user is off track — [Carbon Help: Weekly check-in](https://help.joincarbon.com/en/articles/6004812-weekly-check-in). Carbon also has help articles that explain the logic, such as "Why compliance is the foundation of your progress" and "Why are my calorie targets so high or so low" — [Carbon compliance](https://help.joincarbon.com/en/articles/6004813-why-compliance-is-the-foundation-of-your-progress-in-carbon); [Carbon targets high/low](https://help.joincarbon.com/en/articles/15826058-why-are-my-carbon-calorie-targets-so-high-or-so-low).
- **Just-in-time adaptive interventions (JITAIs):** Weight-loss JITAIs are mostly still at the trial stage. Examples:
  - AGILE, a factorial MOST trial in 608 young adults testing five components — [PubMed 39824380](https://pubmed.ncbi.nlm.nih.gov/39824380/)
  - A micro-randomized trial on dietary lapses (NCT04784585) — [trials.co](https://trials.co/clinical-trials-details/-/NCT04784585)
  - A JITAI to prevent people giving up on their goals after weight regain — [ClinicalTrials.gov NCT07708064](https://cdn.clinicaltrials.gov/large-docs/64/NCT07708064/ICF_000.pdf)
  - The UNC optimization trial (NCT04922216), which posted results in July 2025 — [syfrah NCT04922216](https://www.syfrah.com/trial/NCT04922216)
- **Spaced repetition and microlearning in nutrition:** A paper titled "Gamified Nutrition Education with Mastery Learning and Spaced Repetition Theory" (Am J Health Education, 2021) claims gains in nutrition knowledge. I could see only the title and could not check its design — [Taylor & Francis 10.1080/19325037.2021.1930613](https://informahealthcare.com/doi/suppl/10.1080/19325037.2021.1930613). The RCT evidence for spaced education comes from medical training, not consumer nutrition, and the summaries I found are hosted by a vendor — [Qstream](https://qstream.com/?p=12027).

### Inferences
- A good model for an IIFYM app is MacroFactor/Carbon-style education tied to the check-in (explain this week's change), plus a short Noom-style optional curriculum, plus contextual explainers fired by events. Example: a weight jump the morning after a high-carb day triggers a 60-second card on glycogen and water, linked to the smoothed trend line.
- The "Fast Check-In" / module toggle pattern lets experienced users opt out of lessons. That fits a "graduation" path: teach early, then step back.
- Progressive unlocking could work like this: start with calories and protein, add carbs and fat once logging is consistent, then offer a "maintenance with less tracking" mode. No app I found documents this flow publicly, so it would be a differentiator, but it is unvalidated.
- Noom's evidence suggests lessons may help mostly by recalibrating expectations, which supports teaching about trend weight and realistic rates of loss early on.

### Gaps
- I could not fetch the full MacroFactor or Carbon help pages (network block). I found no list of MacroFactor's module topics and no public data on how much modules affect retention or outcomes.
- I found no evidence for RP Diet, Lifesum or Fastic education features, or for Duolingo-style microlearning applied to diet apps.
- I found no studies on progressive unlocking of macros, or on "graduating" users to intuitive eating or less tracking, inside apps.
- Peer-reviewed results of JITAI weight-loss trials (AGILE, NCT04922216) were not retrieved.

## 2. Coaching: check-in algorithms, AI chat coaches, hybrid human coaching, tone and safety

### Takeaway
Automated weekly check-ins split into two philosophies:
- **Adherence-neutral (MacroFactor):** estimate expenditure from logged intake and the weight trend, so targets can be adjusted even when the user is off plan.
- **Compliance-gated (Carbon):** check how closely the user hit targets and adjust based on that.

LLM chat coaches and photo-based AI logging have documented accuracy and safety problems. Hybrid AI-plus-human coaching shows modest extra benefit in observational data.

### Cited Findings
- **MacroFactor, adherence-neutral:** Coaching is built on an energy expenditure calculation from logged weight and food, which lets it "make timely adjustments despite imperfect adherence." Declining a check-in means no new calorie recommendation is applied — [MacroFactor coach page](https://macrofactorapp.com/?p=4998); [MacroFactor Help 247](https://help.macrofactorapp.com/en/articles/247-introduction-to-check-ins-and-coaching-modules). Third-party reviews describe this as avoiding shame over imperfect logging (secondary source) — [dr-muscle review](https://dr-muscle.com/macrofactor-app-review/).
- **MacroFactor, targets follow the trend:** The weekly calorie target is based on changes in the weight trend, not raw scale weight. Expenditure is derived from intake plus the trended rate of weight change — [MacroFactor Help 222](https://help.macrofactorapp.com/en/articles/222-how-does-macrofactor-make-adjustments-for-a-weight-gain-or-weight-loss-goal). The V3 algorithm detects real, lasting trends 1-5 days sooner than V2 while being "considerably more stable," and responds conservatively to large short-term shifts, which are mostly water — [Expenditure V3](https://macrofactor.com/expenditure-v3/).
- **Carbon, compliance-based:**
  - Compliance is measured by comparing logged intake against Carbon's targets, not targets the user set themselves.
  - Not every check-in changes targets.
  - Inconsistent weeks lead to less accurate adjustments, and inconsistent compliance is the most common reason for stalls.
  - The check-in window is 14 days; users can check in up to 2 days early.
  - "Advanced check-ins" accept weekly averages or totals from users who did not log every day.
  - Sources: [Carbon weekly check-in](https://help.joincarbon.com/en/articles/6004812-weekly-check-in); [Carbon advanced check-ins](https://help.joincarbon.com/en/articles/10535965-advanced-check-ins); [Carbon early check-in](https://help.joincarbon.com/en/articles/13943648-checking-in-early-on-carbon).
- **LLM safety for eating disorders:** A 2026 preprint found up to 30% of LLM responses to neutral requests were unsafe, rising to 68.2% in risky contexts. Safety varied by gender markers and eating-disorder type, and mentioning calories greatly increased "food noise" in responses. It is preliminary and not yet peer-reviewed — [arXiv 2606.02444](https://arxiv.org/html/2606.02444).
- **LLM effectiveness:** In a 7-week RCT (n=81) of a diet chatbot, the LLM features had "little to no effect" on the measures studied — [arXiv 2511.20652 / INLG 2025](https://arxiv.org/html/2511.20652v1).
- **Clinician concern:** Psychiatric Times commentary (Sept 2025, opinion) says chatbots often validate dangerous body-image and "healthy eating" concerns — [Psychiatric Times](https://www.psychiatrictimes.com/view/chatbots-are-dangerous-for-eating-disorders).
- **AI photo logging accuracy:** NIH researchers tested MyFitnessPal, Lose It!, Cal AI and Appediet on 102 weighed meals. The photo features underestimated energy by about 33%; average underestimates per app ranged from 252 kcal (Appediet) to 345 kcal (Cal AI). Every app underestimated fat by about 30 g, and accuracy was worse on keto/high-fat meals. These are preliminary conference results — [Healio, Aug 2026](https://www.healio.com/news/primary-care/20260804/ai-photobased-calorietracking-tools-underestimate-them-by-33); [News-Medical](https://www.news-medical.net/news/20260726/Photo-based-calorie-tracking-apps-fall-short-in-estimating-meal-nutrition.aspx).
- **Hybrid AI plus human coaching:** In an observational study of about 65,000 HealthifyMe users (Marketing Science, 2026), users with AI plus a human coach lost about 2.12 kg more over 3 months than AI-only users, roughly 74% more. The effect ran through more ambitious goals and much more consistent tracking. Users chose their own plans, so this is not causal — [INFORMS release](https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/Research-Finds-that-AI-Weight-Loss-Apps-Work-Best-When-Combined-with-Human-Coaching); [Michigan Ross](https://michiganross.umich.edu/news/human-ai-coaching-models-boost-weight-loss).
- **Automated tools added to human coaching:** A 2021 meta-analysis found about 2.18 kg more weight loss when automated digital interventions were added to coach-delivered programs. The gain was largest when coaching was low-frequency or short — [Drexel research discovery](https://researchdiscovery.drexel.edu/esploro/outputs/journalArticle/Incorporating-Automated-Digital-Interventions-Into-Coach-Delivered/991019168315104721).
- **Fully automated vs human-coached head-to-head trials:** These are registered but I found no results — [NCT05056376](https://clinicaltrials.gov/study/NCT05056376).
- **Calorie tracking and eating disorders:**
  - Among 105 people with eating disorders, 75% used MyFitnessPal and about 73% of those said it at least somewhat contributed to their disorder (Levinson et al. 2017) — [PMC5700836](https://pmc.ncbi.nlm.nih.gov/articles/PMC5700836/)
  - In a sample of men, 47% (26/55) said the same (Linardon & Messer 2019)
  - An experimental study found no causal effect of MyFitnessPal use on eating-disorder symptoms, and selection effects are likely
  - Source for the last two points: [Center for Research summary](https://www.center4research.org/fitness-tracking-apps-eating-disorders/)

### Inferences
- **Recommended check-in design:** Default to an adherence-neutral expenditure estimate, so missed days are no reason to quit, while still showing a compliance or "data quality" signal, as Carbon does. Always produce a plain-language report that says: what changed, why, which data drove it, and what the user should do. Present changes as "your data says X," not "you failed."
- **Recommended AI chat design:**
  - Ground it in the user's own data and the app's vetted knowledge base, not free-form generation.
  - Never let it set calorie targets; the deterministic algorithm owns those.
  - Add eating-disorder-aware refusal and escalation rules.
  - Avoid unprompted calorie talk in sensitive contexts, given the preprint's finding on calorie mentions and food noise.
  - Treat photo logging as an estimate that the user must confirm, and warn that it may undercount fats and oils.
- **Safety guardrails to build:**
  - Screen at onboarding (for example SCOFF-style questions or prior-ED flags), with a non-tracking mode for flagged users.
  - Hard calorie floors and a cap on the rate of loss.
  - Block deficits for under-18s, pregnancy and breastfeeding, with referral to a professional.
  - These are design inferences; I did not retrieve sources on specific minimum calorie floors.
- **Hybrid coaching:** It may help mainly by increasing tracking consistency. A cheap version would be a "coach view" export or dashboard, as in Trainerize, Everfit or Avatar.

### Gaps
- I retrieved nothing on Trainerize, Everfit or Avatar Nutrition coach dashboards, or on RP Diet's adjustment logic.
- I found no sources stating specific minimum calorie floors or under-18/pregnancy policies used by MacroFactor or Carbon.
- I found no peer-reviewed comparison of adherence-neutral vs compliance-based adjustment outcomes.
- I found no published accuracy audits of LLM macro coaching (as opposed to photo estimation) from 2025-26.

## 3. Progress tracking: trend smoothing, measurements, photos, adherence scores, streaks, phases

### Takeaway
Smoothing the scale weight into a trend is the core pattern among serious macro apps, and it doubles as a teaching tool for explaining water fluctuations. The evidence on streaks is weak and mostly from vendors, with some indication that broken long streaks can hurt engagement. Adherence or compliance scores are used as inputs to coaching (Carbon).

### Cited Findings
- **MacroFactor weight trend:** A moving average of weigh-ins that weights recent days more heavily. Expenditure and targets come from the trend, not daily scale weight — [MacroFactor Help: weight trend](https://help.macrofactorapp.com/dashboard/weight_trend/); [Help 222](https://help.macrofactorapp.com/en/articles/222-how-does-macrofactor-make-adjustments-for-a-weight-gain-or-weight-loss-goal).
- **Users understand the smoothing:** A MacroFactor staffer on Reddit says the algorithm "is back-looking and follows trends." Users say water spikes are smoothed out by the trend. This is community content, not official docs — [r/MacroFactor thread](https://cal1.lr.ggtyler.dev/r/MacroFactor/comments/1grns7r/expenditure_and_weight_trend).
- **Carbon:** Compliance is calculated continuously through the check-in window and shown as nudges. Carbon publishes how it determines progress — [Carbon weekly check-in](https://help.joincarbon.com/en/articles/6004812-weekly-check-in); [How Carbon determines your progress](https://help.joincarbon.com/en/articles/10338862-how-carbon-determines-your-progress).
- **Streaks:**
  - A gamification blog cites Silverman & Barasch (2023): engagement drops below baseline after a long streak breaks, and abandonment risk is highest for streaks over 60 days. I could not verify the paper — [Yu-kai Chou](https://yukaichou.com/gamification-analysis/streak-design-gamification-motivation-burnout/).
  - A health-app writer argues that most churn happens before a streak is long enough to protect (opinion) — [Martechvibe](https://martechvibe.com/?p=32648).

### Inferences
- **Dashboard:** Put the trend line first and raw weigh-ins as faded dots, with an explanation card. Add waist and other measurements, progress photos and strength performance as non-scale signals, which matter for recomposition users.
- **Streaks:** Use forgiving consistency metrics instead of fragile streaks, for example "logged 5 of 7 days" or streak freezes. This avoids the long-streak abandonment effect and the all-or-nothing thinking that matters for eating-disorder risk.
- **Phase timeline:** Show cut → diet break → maintenance/reverse → bulk with educational content at each switch point. This is a natural home for just-in-time lessons. No source retrieved here documents how apps implement it.
- **Knowledge level:** A "knowledge level" or milestone tracker (concepts learned, quizzes passed) would be novel; I found no app documenting one.

### Gaps
- I found no retrieved evidence on progress photos, waist measurements or body-fat estimates for retention or outcomes.
- I found no sources on how apps model diet-break or reverse-diet phase timelines.
- I could not verify Silverman & Barasch (2023) against the primary paper.

## 4. Behaviour change science: self-monitoring, gamification, BCTs, retention benchmarks

### Takeaway
Self-monitoring is consistently associated with weight loss, but the evidence is graded weak to moderate and mostly correlational. Gamification gives small benefits. Day-30 retention for health and fitness apps is only about 3-8%, so the first weeks of education and coaching must earn their keep.

### Cited Findings
- **Burke, Wang & Sevick (2011), J Am Diet Assoc 111(1):92-102:** Reviewed 22 studies from 1993-2009 (15 on diet, 1 on exercise, 6 on self-weighing). It found a consistent, significant association between self-monitoring and weight loss, but rated the evidence weak because of method limitations, and called for objective adherence measures and studies of the required "dose" — [PubMed 21185970](https://pubmed.ncbi.nlm.nih.gov/21185970/); [Dr Sharma commentary](https://www.drsharma.ca/obesity-how-effective-is-self-monitoring-in-weight-management).
- **Patel et al. (2021), Obesity:** Across 39 studies, more digital self-monitoring was linked to weight loss in 74% of interventions. Only manual entry into a website or app was associated with weight loss (reported in search summary; full text not fetched) — [Patel 2021 via search](https://www.cambridge.org/core/journals/public-health-nutrition/article/systematic-review-of-the-use-of-dietary-selfmonitoring-in-behavioural-weight-loss-interventions-delivery-intensity-and-effectiveness/476B83589088637C6740BA801B92185D?utm_source). The linked page is Raber et al., Public Health Nutrition, a related review: most studies using high- or low-intensity self-monitoring showed significant weight loss, but adherence measures varied.
- **MyNetDiary cohort (JMIR 2026):** In 5,132 users, more frequent food tracking was associated with greater 6-month weight loss, and 70.1% lost at least 5% of body weight. The authors are company-affiliated — [JMIR 2026 e98144](https://www.jmir.org/2026/1/e98144/PDF).
- **My Meal Mate RCT secondary analysis:** The highest-frequency loggers (129 or more days) weighed 6.4 kg less at follow-up than the lowest-frequency group — [JMIR mHealth 2017](https://mhealth.jmir.org/2017/2/e8/).
- **Gamification:**
  - A 2024 meta-analysis in EClinicalMedicine (36 trials, n=10,079) found gamified apps slightly improved physical activity and weight outcomes compared with non-gamified versions — [PubMed 39764571](https://pubmed.ncbi.nlm.nih.gov/39764571/).
  - A 2022 meta-analysis in Am J Prev Med (Mazeas) found standalone gamified apps may increase physical activity, and that long-term maintenance is unproven — [PubMed 34893387](https://pubmed.ncbi.nlm.nih.gov/34893387/).
- **Day-30 retention, health and fitness apps:**
  - About 3% (AppsFlyer 2023) and about 8% from 27% at Day 1 (Adjust), via [Business of Apps](https://businessofapps.com/data/health-fitness-app-benchmarks)
  - iOS 3.9% and Android 3.4% — [Braze](https://www.braze.com/resources/articles/mobile-app-retention)
  - Cross-industry about 5-7% at Day 30 — [Phiture](https://phiture.com/mobilegrowthstack/managing-retention-rate-benchmarks-and-expectations/)
- **Monetisation:** RevenueCat's State of Subscription Apps 2025 reportedly puts median trial-to-paid conversion for health and fitness at 39.9%, the highest of any category. This comes from a secondary write-up and is unverified — [DEV Community summary](https://dev.to/rikh81/what-subscription-developers-can-learn-from-this-years-benchmark-data-3ke9).

### Inferences
- Self-monitoring is the active ingredient, and manual entry seems to matter. Education should therefore support consistent, low-friction logging and reframe imperfect days rather than adding work. Consider keeping some manual confirmation even when AI or photo logging is offered.
- Since Day-30 retention is in single digits, the first-week experience should combine three things: a quick win (a first explained check-in by about day 7), expectation setting about water weight, and a consistency metric that does not punish missed days.
- Gamification should be used sparingly: progress and mastery signals (concepts learned, trend milestones) rather than leaderboards or fragile streaks.

### Gaps
- I did not retrieve the Michie BCT Taxonomy v1 (2013) or app-coding studies, and no habit-formation evidence such as Lally 2010 (around 66 days to automaticity).
- I could not verify RevenueCat's own Day-30 or retention figures from the primary report.
- I found no 2023-2026 systematic review specifically on frequency thresholds for app-based dietary tracking.
