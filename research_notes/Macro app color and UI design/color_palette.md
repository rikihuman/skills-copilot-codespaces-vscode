# Color Palette for an IIFYM / Macro Tracking & Coaching App (SA-first, 18+, ED-safe)

Research date: 2026-11-09. Method: web searches (search snippets) plus WCAG/CVD calculations run locally in Python. IMPORTANT LIMITATION: in this session, direct page fetches were blocked by network policy for blog.myfitnesspal.com, forums.cronometer.com, help.macrofactorapp.com and webdesignhot.com. Findings from those domains come from search-result snippets, not full-page reads. Any hex value not taken from an official brand source is marked **UNVERIFIED**.

## Q1. Competitor palettes and macro color conventions

### Takeaway
There is **no industry convention** for macro colors. Each app uses a different mapping, and two apps (Cronometer, MyFitnessPal) have changed their mappings and drawn user complaints. That leaves room for a deliberate, accessibility-first mapping. Brand colors cluster around **warm orange/coral** (Noom, Cronometer), **blue** (MyFitnessPal), and **monochrome plus one accent** (MacroFactor's adherence-neutral style; Whoop/Oura dark UIs).

### Cited Findings
**Macro color mappings by app**
- **Cronometer default:** protein = green, fat = red, carbs = blue. A staff reply says a separate scheme for the Mercola MMT program uses protein = blue, carbs = red, fat = green, so that fat gets a "positive" color. — [Cronometer forum (staff reply)](https://forums.cronometer.com/discussion/comment/7167); [Cronometer forum "Colors"](https://forums.cronometer.com/discussion/2218/colors)
- Cronometer users complained that red fat totals read as a warning, especially on keto. Another thread reported that the Diary and Trends graphs used inconsistent color codes, and the CEO promised a fix. — [Cronometer forum](https://forums.cronometer.com/discussion/comment/18623); [Graph color coding inconsistency](https://forums.cronometer.com/discussion/354/graph-color-coding-inconsistency)
- Cronometer published a blog post, "Designing for Understanding," about its new color system. I could not retrieve the body, so its rationale is unknown. — [Cronometer blog](https://cronometer.com/blog/designing-for-understanding/)
- **MyFitnessPal:** the official blog post "Why we're changing the MyFitnessPal color palette (again)" says the macro colors were updated for accessibility, so that white text passes contrast and the colors differ in tone (light vs dark), not just hue. The specific colors were not in the snippet. — [MFP blog](https://blog.myfitnesspal.com/why-were-changing-the-myfitnesspal-color-palette-again/)
- MFP current macro hex values from a third-party design-spec site (**UNVERIFIED**, not official): Protein `#EC5E8A` (pink), Carbs `#F0A020` (orange), Fat `#A05EC5` (purple). — [webdesignhot MFP design.md](https://www.webdesignhot.com/api/design-md/myfitnesspal.md)
- An older guide reports MFP's pie chart as carbs = blue, fat = red, protein = green (**likely pre-redesign**, conflicts with the above). — [techjunkie](https://techjunkie.com/myfitnesspal-change-macros/); [MFP blog 2014 pie charts](https://blog.myfitnesspal.com/2014/03/making-sense-of-those-pie-charts/)
- **MacroFactor:** the help center describes daily Nutrition & Targets bars for calories, protein, fat and carbs, with a **gray target marker**. When intake reaches or exceeds the target, the bar turns **black (light mode) / white (dark mode)**, not red. Lighter bars mean progress toward the goal and darker bars mean moving away from it. — [MacroFactor help: dashboard](https://help.macrofactorapp.com/en/articles/22-get-to-know-your-dashboard); [MacroFactor help: consistency](https://help.macrofactorapp.com/dashboard/consistency)
- MacroFactor's dashboard revamp describes color used in a "colorful yet adherence-neutral" way. V4.0.0 lets users show % toward target, consumed, or remaining on each nutrient tile. — [MacroFactor dashboard revamp](https://macrofactor.com/dashboard-revamp/); [Release 4.0.0](https://macrofactor.com/release-4-0-0/)
- MacroFactor's identity was redesigned by **Pentagram**, framing "the discipline of data and the joy of progress." The snippet gave no hex values. — [Pentagram: MacroFactor](https://pentagram.com/work/macrofactor)
- I found **no source** for MacroFactor's per-macro hue assignments. I have not verified whether it uses a protein = red-ish convention.

**Brand colors**
- **Noom:** Sunset Orange `#FB513B`, Spring Wood `#F6F4EE` (warm off-white), Blue Dianne `#1D3A44` (deep teal-navy). Source is aggregators, **semi-verified** because two aggregators agree. — [Mobbin Noom colors](https://mobbin.com/colors/brand/noom); [Brandfetch Noom](https://brandfetch.com/noom.com)
- **Noom food color system:** foods are labeled green / yellow / orange by calorie density. Noom moved away from "red" to orange, but the traffic-light pattern has still been criticized from an ED perspective. — [Noom support](https://www.noom.com/support/faqs/using-the-app/logging-and-tracking/food-and-water/2025/10/how-nooms-food-color-system-works/); [MFP community thread re Noom](https://community.myfitnesspal.com/en/discussion/comment/48115816)
- **Cronometer:** Outrageous Orange `#FF6733`, Zircon `#FAFBFF`, Chelsea Gem `#AD5F00` (**aggregator, UNVERIFIED**). — [Brandfetch Cronometer](https://brandfetch.com/cronometer.com)
- **Whoop:** uses green / yellow / red for recovery bands: green 67–100%, yellow 34–66%, red 0–33%. Whoop itself says the colors simplify a continuous scale. No hex values were found. — [Whoop: How Recovery works](https://www.whoop.com/thelocker/how-does-whoop-recovery-work-101); [Whoop podcast 40](https://www.whoop.com/at/en/thelocker/podcast-40-whoop-recovery-maximize-readiness/)
- My calculated WCAG contrast of reported competitor colors on white: Noom `#FB513B` = 3.31:1, Cronometer `#FF6733` = 2.90:1, MFP-reported protein `#EC5E8A` = 3.21:1, carbs `#F0A020` = 2.15:1, fat `#A05EC5` = 4.28:1. Most competitor accent colors **fail 4.5:1 as text** on white, and some fail even the 3:1 non-text minimum. — (own calculation; WCAG formula per [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/))

### Inferences
- With no shared convention, users won't arrive expecting fixed macro colors. Picking a mapping is a free design choice, but the app should **never change it after launch** (Cronometer and MFP both drew backlash for changing theirs).
- Assigning **red to any macro is risky**. Cronometer's red fat reads as "warning" and moralizes a nutrient. The app should avoid pure red for all macros.
- MacroFactor's pattern (gray target tick, neutral black/white when the target is reached) is the clearest precedent for ED-safe "met/over" states.

### Gaps
- Not found (sites unreachable or no results): Carbon Diet Coach, RP Diet, Lose It!, Yazio, Lifesum, Cal AI and Oura hex values or macro colors; Apple Health/Fitness official hex. From general knowledge (**UNVERIFIED**): Lose It! is orange-branded, Yazio blue/teal, Lifesum green, Cal AI near-monochrome black/white, and Oura uses a dark UI with muted accents. Apple Activity rings are Move (red/pink), Exercise (green), Stand (blue/cyan). Verify these on Mobbin or Brandfetch before quoting.
- MacroFactor per-macro hues are unknown.

## Q2. Color psychology in health/nutrition apps — evidence vs folklore

### Takeaway
Most claims like "red/orange/yellow stimulate appetite" or "green = health" come from marketing folklore. The best controlled evidence points the **other way**: red acted as a subtle "stop" cue that **reduced** snack and drink intake in healthy adults, though the samples were small. Treat hue associations as conventions, not effects.

### Cited Findings
- Genschow et al. (2012, *Appetite*): participants drank less from a red-labeled cup than a blue one, and ate fewer snacks from a red plate than from blue or white. The authors interpret red as an avoidance/"stop" signal. — [Genschow et al. manuscript (Uni Basel)](https://edoc-vmtest.ub.unibas.ch/21254/6/red_reduces_food_and_drink_intake_revision-1.pdf)
- Press coverage inflated this to "red plates cut intake by 40%". The cup study had a small sample (41 male students). — [Fox News](https://www.foxnews.com/health/red-plates-may-be-secret-to-eating-less); [CNN](https://edition-prod-cf.sitemirror.cnn.com/2013/11/29/health/seeing-red/index.html)
- The "red plates increase eating" claim comes from a dementia study (Dunne et al. 2004), where **contrast** between food and plate likely drove the effect, not hue. That account is secondary and the original was not checked. — [letsbambu commentary](https://www.letsbambu.com/post/do-red-plates-really-help-people-with-dementia-eat-more)

### Inferences
- Red works as an implicit avoidance/"stop" cue. In a tracker that makes it a **moral/stop signal**, so the app should not use red for food, macros or "over" states. This matches the ED-safety guidance in Q3.
- Green/teal for "health" and blue for "trust" are cultural conventions. They are useful for brand recognition, but there is no evidence of behavioral effects in apps. Teal/green also helps differentiation, since Noom, Cronometer and Lose It! own orange and MFP owns blue.

### Gaps
- No meta-analysis or replication of the red-avoidance effect was found in this session. No app-specific RCT on UI color and adherence was found.

## Q3. Non-judgmental semantics and eating-disorder-informed color use

### Takeaway
There is consistent qualitative evidence that **red "over budget" states and traffic-light food labels cause guilt and shame**, and that MFP-style calorie tracking is linked to ED symptoms in clinical samples. No controlled trial compares red vs neutral states, but the precautionary principle and MacroFactor's precedent both favor **neutral "target reached" states, ranges instead of single numbers, and no red for intake**.

### Cited Findings
- In an ED clinical sample, about 75% used MyFitnessPal, and 73% of those users felt it contributed to their eating disorder. Perceived contribution correlated with ED symptoms. — [Levinson et al. 2017, PubMed](https://pubmed.ncbi.nlm.nih.gov/28843591/)
- A first-person account describes the budget bar staying green under the limit and turning red when over: "whenever I went over budget and it turned red, I would feel like a total failure." — [The Mighty](https://themighty.com/2020/03/my-eating-disorder-started-with-app/); [Medium SI-410](https://medium.com/si-410-ethics-and-information-technology/myfitnesspal-and-similar-apps-do-more-harm-than-good-a1c8893cab35)
- A Cronometer user thread says the redesign's red/bold over-limit warnings are distressing for people in ED recovery. — [Cronometer forum](https://forums.cronometer.com/discussion/1350/new-cronometer-update-isnt-great-if-youre-recovering-from-an-eating-disorder)
- A vendor article (commercial bias) lists harmful features as shame notifications, rigid streaks and red/green food labeling, and recommends calorie **ranges**. — [Nutrola 2026](https://nutrola.app/en/blog/is-there-a-calorie-tracker-that-doesnt-trigger-eating-disorders)
- MacroFactor's met/exceeded state is a neutral black/white bar with a gray target marker, and "Under/Over" labels appear only on the weight-maintenance dial (±1.5 lb band). — [MacroFactor help](https://help.macrofactorapp.com/en/articles/22-get-to-know-your-dashboard)
- Academic work on ED digital interventions and food-tracker co-design with dietitians is available for further reading. — [PMC9128313](https://pmc.ncbi.nlm.nih.gov/articles/PMC9128313); [PMC8485346](https://pmc.ncbi.nlm.nih.gov/articles/PMC8485346); [Frontiers Comp Sci 2023](https://public-pages-files-2025.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2023.1215588/xml); [HCIL co-designing food trackers](https://medium.com/hcil-at-umd/co-designing-food-trackers-with-dietitians-68b897cbd9d)

### Inferences (design rules derived)
1. **Intake states:** in-range = brand/macro color, approaching = same hue, met = neutral ink (MacroFactor style), over = neutral ink with a subtle "+X g" label. **Never red or warning-amber.**
2. **Ranges:** show targets as a band (for example, a lighter tint of the macro color between min and max) rather than a single line. This removes the binary pass/fail.
3. **Reserve error red** for system errors only (sync failure, invalid input), never for food, weight or body data.
4. Keep **weight-trend colors neutral** (one hue for both directions). Gain and loss should not map to green and red.
5. **No traffic-light food grading** (Noom's green/yellow/orange pattern).
6. An optional "hide numbers / hide calories" mode should make color carry no evaluative meaning at all.

### Gaps
- No RCT or clinical guideline specifying UI colors for ED safety was found. All evidence is qualitative or correlational. JMIR-specific guidance on color was not located in this session.

## Q4. Accessibility: WCAG 2.2, CVD-safe categorical colors, dark mode, sunlight

### Takeaway
Text needs 4.5:1 (3:1 for large text) and UI/graphics need 3:1 (WCAG 2.2, SC 1.4.3 / 1.4.11), and color must never be the only cue (SC 1.4.1). Okabe-Ito and IBM's palette are the reference CVD-safe sets, but several of their colors **fail 3:1 on white**, so a light theme needs darker variants. Dark mode should use dark gray rather than pure black for large surfaces, and lighter, less saturated accents.

### Cited Findings
- **Okabe-Ito (Wong, Nature Methods 2011):** `#E69F00` orange, `#56B4E9` sky blue, `#009E73` bluish green, `#F0E442` yellow, `#0072B2` blue, `#D55E00` vermillion, `#CC79A7` reddish purple, `#000000`. — [ConceptViz Okabe-Ito reference](https://conceptviz.app/blog/okabe-ito-palette-hex-codes-complete-reference); [R `see` docs](https://search.r-project.org/CRAN/refmans/see/html/palette_okabeito.html)
- **IBM CVD-safe set** includes `#648FFF` (blue), plus (per secondary sources) `#785EF0`, `#DC267F`, `#FE6100`, `#FFB000`. Only `#648FFF` was confirmed in snippets; the rest come from training knowledge and are **UNVERIFIED**. — [AudioEye](https://www.audioeye.com/post/colorblind-friendly-palettes/); [UNC Ainslie Lab PDF](https://ainslielab.web.unc.edu/wp-content/uploads/sites/12416/2024/01/Color-palettes-that-can-be-seen-by-the-color-blind.pdf); [IBM Design Language: Color](https://www.ibm.com/design/language/color)
- **My calculation:** Okabe-Ito on white gives `#E69F00` 2.25:1 (fails 3:1), `#CC79A7` 3.06:1, `#009E73` 3.42:1, `#D55E00` 3.87:1, `#0072B2` 5.19:1. On black, all pass. — (own calculation, WCAG relative-luminance formula)
- **Apple HIG / Material 3** (training knowledge, pages not fetched this session): Apple recommends semantic system colors (e.g. systemGreen, label, secondaryLabel) with automatic light/dark and Increase Contrast variants. Material 3 generates tonal palettes (tones 0–100) from a seed color and maps roles (primary/on-primary/container) by tone, with dark themes using tone ~80 accents on tone ~6–10 surfaces. — [Apple HIG Color](https://developer.apple.com/design/human-interface-guidelines/color); [Material 3 color roles](https://m3.material.io/styles/color/roles)
- **Liquid Glass (iOS 26)** translucency created contrast problems. Infinum's beta testing found some screens "well below WCAG minimum contrast". The Reduce Transparency and Increase Contrast settings help but are "not enough". Apple added a "Tinted" option in iOS 26.1 after backlash (secondary report). — [Infinum](https://infinum.com/blog/apples-ios-26-liquid-glass-sleek-shiny-and-questionably-accessible/); [Gulf News](https://gulfnews.com/technology/companies/apple-yields-tinted-control-in-ios-261-beta-4-tones-down-liquid-glass-after-backlash-1.500315176)

### Own calculations — CVD distinctness of 4 macro colors (protein, carbs, fat, fibre)
Method: Machado et al. (2009) full-severity simulation matrices for deuteranopia, protanopia and tritanopia, CIE76 ΔE in CIELAB, and the minimum pairwise ΔE across normal + 3 CVD types. Roughly, ΔE < 10 means the colors are hard to tell apart and ΔE ≥ 20 means they are clearly distinct.

| Set | Colors (P / C / F / Fi) | Min contrast vs bg | Worst-case CVD ΔE |
|---|---|---|---|
| Naive "blue/amber/purple/green" light | `#2563EB` `#B45309` `#9333EA` `#15803D` | 5.0 | **5.3** (protein vs fat, deutan): FAILS |
| Warm earth light | `#3B5BDB` `#C2410C` `#9D174D` `#3F6212` | 4.7 | **0.6** (carbs vs fibre, protan): FAILS |
| **Recommended light** | `#4F46E5` `#EA580C` `#A21CAF` `#0F766E` | 3.56 (carbs) | **22.5** |
| **Recommended dark** (on `#0B0F0E`) | `#6366F1` `#F97316` `#F0ABFC` `#34D399` | 4.32 | **39.5** |
| Okabe-Ito light (on white) | `#0072B2` `#D55E00` `#CC79A7` `#009E73` | 3.06 | 17.0 |
| Okabe-Ito dark (on black) | `#56B4E9` `#E69F00` `#CC79A7` `#009E73` | 6.14 | 16.1 |

### Inferences
- **Lightness separation matters more than hue.** Common "blue/purple" or "orange/olive" pairs collapse under deutan or protan vision.
- The four-hue logic (indigo protein, orange carbs, magenta fat, teal fibre) survives all three CVD types in both themes. Calories should be **neutral ink** (not a hue), and alcohol, if tracked, can be a neutral gray hatch.
- Always pair color with labels (P/C/F letters, icons, order) and **patterns or segment order** in rings and bars. Carbs orange `#EA580C` is 3.56:1 on white: fine for bars and rings, **not for body text** (use `#C2410C`, 4.89:1, or ink for text).
- **Sunlight:** high-ambient readability favors higher contrast. Graphics that only just pass 3:1 should be thickened, or given darker strokes. No primary source on outdoor contrast was fetched (gap). SA usage (commuting outdoors, high UV) makes this a priority.
- **Liquid Glass:** on iOS 26 the app should place macro data on **opaque surfaces**, not glass, and keep glass for navigation chrome only.

### Gaps
- Apple HIG / Material pages were not fetched (blocked or not attempted). The values above come from established knowledge. NN/g's position on Liquid Glass was not found.
- No primary research on OLED/sunlight legibility thresholds was retrieved.

## Q5. Trends 2025–2026 and candidate palettes

### Takeaway
The visible trends are: warm off-white backgrounds (Noom `#F6F4EE`), deep teal/navy anchors (Noom `#1D3A44`), monochrome-plus-accent minimalism (MacroFactor, Cal AI-style), dark-first wearable UIs (Whoop, Oura), and iOS 26 Liquid Glass chrome, which is still contested on accessibility. Evidence for 2026-specific color trends in health apps is thin: no authoritative trend report was found.

### Cited Findings
- Liquid Glass is Apple's new system material: it is translucent and adapts to content. Health and fitness apps adopting it include Gentler Streak, Pedometer++, Foodnoms and Calorific. — [MacRumors Liquid Glass gallery](https://www.macrumors.com/2025/11/06/apple-liquid-glass-design-gallery/); [BGR](https://bgr.com/1922025/ios-26-liquid-glass-preview-third-party-developer-app); [macmyths 40 apps](https://macmyths.com/these-40-apps-feature-a-liquid-glass-design-for-ios-26/)
- Noom's palette (energetic orange, calming warm off-white, deep blue-teal) is an example of the warm-neutral wellness look. — [Mobbin Noom](https://mobbin.com/colors/brand/noom)

### Candidate palettes (all contrast values computed; P/C/F/Fi = protein/carbs/fat/fibre)

**Candidate 1 — "Fynbos Teal" (calm, clinical-trust, recommended default)**
- Brand primary: light `#0F766E` (white text on it 5.47:1), dark `#2DD4BF` (on `#0B0F0E` 10.36:1; use dark text on it). Deep variant `#115E59` (7.58:1 with white).
- Backgrounds: light `#FFFFFF` / surface `#F5F7F6`; dark `#0B0F0E` / surface `#161B1A` (dark gray, not pure black).
- Macros light: P `#4F46E5` (6.29), C `#EA580C` (3.56, graphics only), F `#A21CAF` (6.32), Fi `#0F766E` (5.47). Fibre shares the brand teal: either accept that, or use the brand as ink-teal and fibre as a hatch.
- Macros dark: P `#6366F1` (4.32), C `#F97316` (6.88), F `#F0ABFC` (10.96), Fi `#34D399` (10.03).
- Calories: neutral ink `#1F2937` light / `#E5E7EB` dark.
- Met/over target: neutral ink (MacroFactor-style). Target band = 20–30% tint of the macro color.
- Weakness: fibre and brand are both teal/green. An alternative is to make the brand a deeper teal-navy `#1D3A44`-like color and keep fibre emerald.

**Candidate 2 — "Warm Karoo Neutral" (warm off-white, earthy, approachable)**
- Background light `#FBF8F3` / surface `#F2EDE4`; dark `#14120F` / surface `#1F1C18`.
- Brand: deep green `#1F5C4A` (white text 7.81:1); dark `#6FC2A4` (8.84:1 on `#14120F`). Warm accent (CTA/highlights, not status): terracotta `#B4532A` (4.71:1 on `#FBF8F3`).
- Macros light: P `#1D4ED8` (6.33), C `#C2410C` (4.89), F `#A21CAF` (5.97), Fi `#0F766E` (5.17). Worst CVD ΔE 16.0 (acceptable). Note that an earthy "olive fibre / brown carbs" set **failed** for protanopia (ΔE 0.6).
- Macros dark: reuse Candidate 1 dark set (P `#6366F1` 4.19 / C `#F97316` 6.67 / F `#F0ABFC` 10.63 / Fi `#34D399` 9.73 on `#14120F`).
- Calories: `#292524` / `#F5F0E8`.

**Candidate 3 — "Mono + Okabe-Ito" (minimal, data-first, Cal AI / MacroFactor feel)**
- Brand: ink `#111111` on white (18.9:1) / white on `#000000` (21:1); one accent (e.g. the macro protein color).
- Macros dark (on black): P `#56B4E9`, C `#E69F00`, F `#CC79A7`, Fi `#009E73`, all ≥ 6.1:1, worst CVD ΔE 16.1.
- Macros light: use **darkened** Okabe-Ito, since `#E69F00` fails at 2.25:1 on white. Swap carbs to `#D55E00` (3.87) and accept fat `#CC79A7` at 3.06 (borderline) or darken it.
- Pure black suits OLED, but large pure-black areas next to white text can cause halation/smearing. Prefer `#0B0B0C`-ish surfaces for large panels (general practice, not sourced this session).

**Semantic/status colors (all candidates)**
- Info: `#0369A1` light (5.93 on white) / `#7DD3FC` dark (11.57).
- Caution (system only, never food): `#B45309` light (5.02) / `#FBBF24` dark (11.55).
- Error (system errors only): `#B91C1C` light (6.47) / `#F87171` dark (6.97).
- Success: use the brand teal/green, and only for actions such as "saved" or "logged". It is not "good day".
- Neutral secondary text: `#475569` light (7.58) / `#94A3B8` dark (7.52). Avoid `#94A3B8` on white (2.56).
- Dividers/tracks: `#E2E8F0` light (1.23, decorative) / `#334155` dark (1.86, decorative). Progress-ring tracks that convey state must reach 3:1, or the fill must.

### Inferences
- The SA-first positioning can use local landscape references (fynbos, Karoo) in naming and warm neutrals while staying evidence-based. Teal/green-led branding also stands apart from the orange (Noom, Cronometer, Lose It!) and blue (MFP) incumbents.
- Recommended: Candidate 1 or 2 for brand, combined with the verified macro set (indigo / orange / magenta / teal), neutral met/over states, and no red anywhere in the nutrition domain.

### Gaps
- No authoritative 2026 health-app color trend report was found. Trend statements rest on observed competitor palettes and Liquid Glass coverage.
- No SA-specific color-preference or cultural color-meaning research was found in this session.
- The palettes have not been user-tested. Validate them with CVD users and in direct sunlight on mid-range Android OLED/LCD devices common in SA.
