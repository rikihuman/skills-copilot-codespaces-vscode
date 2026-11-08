# Apple App Store Requirements for Launching a Subscription Nutrition/Macro Coaching App (IIFYM-style, SA-based developer)

Research date: 2026-11-08. Primary source: the live App Review Guidelines page (https://developer.apple.com/app-store/review/guidelines/) fetched on this date, plus Apple Developer News items from 2025-2026. Network note: macrumors.com, trysonar.app and cultofmac.com could not be fetched from this research environment, so claims from those sites rely on search snippets only and are flagged.

## 1. Developer account: individual vs organization, fees, South Africa specifics, Small Business Program

### Takeaway
Either account type costs USD 99/year (shown in local currency at enrollment). An organization account needs a D-U-N-S number and shows the company name as seller. That matters for a health/coaching app, because Apple says regulated healthcare services must be submitted by the legal entity providing them. Enroll in the Small Business Program from day one: 15% commission, and 10% on subscriptions after a subscriber's first year. Apple collects and remits VAT for South African App Store sales.

### Cited Findings
- **Individuals do not need a D-U-N-S number. Organizations must have one registered to their legal entity.** Allow up to 5 business days to get one from D&B, plus up to 2 business days for Apple to receive it. — [Apple Account Help: D-U-N-S](https://developer.apple.com/support/D-U-N-S/)
- **Fee:** the Apple Developer Program annual fee is 99 USD. "Prices may vary by region and are listed in local currency during the enrollment process." — [Apple enrollment / Account Help](https://developer.apple.com/support/purchase-activation) (via search snippet)
- **Wrong submitting entity is a stated rejection reason.** Regulated services such as banking, healthcare or gambling must be submitted by the legal entity that provides them. — [Apple: App Review](https://developer.apple.com/distribute/app-review/)
- **Small Business Program eligibility:** developers new to the App Store qualify, as do existing developers with at most USD 1M in proceeds in the prior calendar year (Associated Developer Accounts count toward this). If you pass USD 1M in the current year, the standard commission applies to future sales. — [Apple Small Business Program](https://developer.apple.com/app-store/small-business-program/)
- **Small Business Program rates:** 15% on paid apps and IAP, and 10% on subscriptions after their first year.
  - To enroll, you must be the Account Holder, accept the Paid Apps agreement (Schedule 2), and list all Associated Developer Accounts.
  - The reduced rate starts 15 days after the end of the fiscal month in which enrollment is approved.
  - Related benefit: enrolled developers with fewer than 2M first-time downloads can use Apple Foundation Models on Private Cloud Compute at no cloud API cost.
  - — [Apple Small Business Program](https://developer.apple.com/app-store/small-business-program/)
- **Apple collects and remits VAT in South Africa.**
  - Apple began charging VAT on SA App Store sales after National Treasury regulations took effect on 1 June 2014 (14% VAT at the time). — [BusinessTech](https://businesstech.co.za/news/hardware/59973/digital-tax-hits-apple-in-sa-report/); [9to5Mac](https://9to5mac.com/guides/value-added-tax/)
  - Apple's Exhibits to Schedule 2 and 3 list the territories where Apple collects and remits taxes. — [Exhibits to Schedule 2 and 3 (Aug 2025)](https://developer.apple.com/support/downloads/terms/exhibits/Exhibits-to-Schedule-2-and-3-20250821-English.pdf)
- **Apple adjusts ZAR prices when taxes or exchange rates change** (for example, it lowered prices in SA in 2021). — [iClarified](https://www.iclarified.com/81979/apple-lowers-app-store-prices-in-the-uk-south-africa-countries-that-use-euro)
- **No 2026 tax changes for South Africa were announced.** The Jan 29, 2026 price update covered tax changes in 9 storefronts, not including SA. Tax and price updates also went out on May 11 and Aug 27, 2026. — [Apple Developer News](https://developer.apple.com/news/)
- **Other commission news:** in 2026 Apple cut storefront commissions in China (Mar 12: 30% to 25%, with Small Business Program 15% to 12%) and Taiwan (Oct 29: 30% to 26%). No change was announced for South Africa. — [Apple Developer News](https://developer.apple.com/news/)
- **Developer identity:** the June 8, 2026 DPLA update (Sections 3.1 and 14.8) "specified requirements for providing information and responding to questions about developer identity, including in the context of export compliance." — [Apple News a233fmpw](https://developer.apple.com/news/?id=a233fmpw)

### Inferences
- **Use an organization account (for example, a (Pty) Ltd).**
  - The app sells coaching and handles health data, and human coaches may be involved.
  - An organization account limits personal liability.
  - It shows a company as seller on the store.
  - It avoids "wrong submitting entity" issues if any part of the app is ever treated as a health service.
  - D-U-N-S lookups are free, but allow 1-2+ weeks.
- **Set up payouts in App Store Connect (Agreements, Tax, and Banking).** You need the Paid Apps agreement, SA bank details and tax forms. These are not verified in this research, so check them in App Store Connect:
  - A US tax form (W-8BEN for an individual, W-8BEN-E for a company) is normally required of non-US developers.
  - The US-SA tax treaty may reduce US withholding on US-storefront proceeds.
  - Apple generally pays in the bank account's currency, so an SA account would be paid in ZAR.
- **Mark VAT as handled by Apple.** SA VAT has been 15% since April 2018 (general knowledge, not fetched here). Apple remits it as the deemed supplier, so the developer generally does not charge VAT on App Store sales. Confirm this with an SA tax advisor, including any VAT treatment of proceeds Apple pays to an SA VAT-registered vendor.

### Gaps
- I could not fetch the exact ZAR price of the developer program. It is shown at enrollment.
- I did not verify Apple's current payout currency and threshold rules for SA bank accounts, or the exact SA row in Exhibit B (VAT rate and price-tier treatment).
- I did not check whether Apple issues SA VAT tax invoices to developers for its commission.

## 2. App Review Guidelines relevant to a health/macro coaching app

### Takeaway
The highest-risk areas are payments (3.1.1/3.1.2), privacy and AI data sharing (5.1.1/5.1.2(i)), HealthKit (5.1.3, 2.5.1), and health accuracy (1.4.1).
- **Payments:** the app subscription must use IAP, and the paywall must show clear Schedule 2 disclosures.
- **Privacy:** you need a privacy policy, in-app account deletion, and explicit consent before sending personal data to a third-party AI.
- **HealthKit:** no advertising or data-mining use, no health data in iCloud, and the integration must be visible in the UI and description.
- **Health accuracy:** disclose methodology and remind users to consult a doctor.

Real-time 1:1 human coaching may be paid outside IAP under 3.1.3(d), but group coaching may not.

### Cited Findings (quoted from the live guidelines unless noted) — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

**1.4.1 Medical**
- "Medical apps that could provide inaccurate data or information, or that could be used for diagnosing or treating patients may be reviewed with greater scrutiny."
- "Apps must clearly disclose data and methodology to support accuracy claims relating to health measurements, and if the level of accuracy or methodology cannot be validated, we will reject your app." Example: apps claiming to measure blood pressure, glucose and similar values using only device sensors are not permitted.
- "Apps should remind users to check with a doctor in addition to using the app and before making medical decisions. If your medical app has received regulatory clearance, please submit a link to that documentation with your app."

**2.1 App Completeness**
- (a) Submissions must be final versions with working URLs and no placeholder content.
- You must include demo account info "(and turn on your back-end service!)" if the app has a login.
- Apple rejects crashes and binaries with obvious technical problems.
- (b) In-app purchases must be "complete, up-to-date, visible to the reviewer and functional."

**2.3 Accurate Metadata**
- Metadata, *including privacy information*, description, screenshots and previews must accurately reflect the core experience.
- 2.3.1(a): new features must be "described with specificity in the Notes for Review section" (generic descriptions are rejected). This was reinforced in the Oct 16, 2026 update.
- 2.3.2: the description, screenshots and previews must clearly indicate which items or subscriptions require additional purchase.
- 2.3.6: answer the age-rating questions honestly.
- 2.3.8: icons and screenshots must meet a 4+ rating even if the app is rated higher.

**2.5.1** — HealthKit "should be used for health and fitness purposes and integrate with the Health app." Apps should "indicate that integration in their app description."

**3.1.1 In-App Purchase**
- Unlocking features or functionality, "by way of example: subscriptions ... access to premium content," must use IAP.
- Apps should provide "a restore mechanism for any restorable in-app purchases."
- Outside the US storefront, apps and metadata "may not include buttons, external links, or other calls to action that direct customers to purchasing mechanisms other than in-app purchase," except under the StoreKit External Purchase Link Entitlement.
- In the US storefront, such entitlements are not required for buttons, external links or calls to action. This follows the 2025 Epic injunction.

**3.1.2 Subscriptions**
- (a) Subscriptions must provide ongoing value, last at least 7 days, and be available across all the user's devices. Free trials are configured in App Store Connect.
- (b) Users must not be able to "inadvertently subscribe to multiple variations of the same thing."
- (c) "Before asking a customer to subscribe, you should clearly describe what the user will get for the price ... Ensure you clearly communicate the requirements described in Schedule 2 of the Apple Developer Program License Agreement."

**3.1.3(d) Person-to-Person Services**
- "If your app enables the purchase of real-time person-to-person services between two individuals (for example tutoring students, medical consultations, real estate tours, or fitness training), you may use purchase methods other than in-app purchase to collect those payments."
- "One-to-few and one-to-many real-time services must use in-app purchase."

**4.2 Minimum Functionality** — the app must be more than a repackaged website. 4.2.2 adds that apps shouldn't be primarily "web clippings, content aggregators, or a collection of links."

**4.7 Chatbots**
- Apps may offer chatbots. You are "responsible for all such software offered in your app."
- 4.7.1: chatbots must follow 5.1 privacy rules, including for sensitive data such as health.
- They must "include a method for filtering objectionable material, a mechanism to report content and timely responses to concerns."

**1.2 User-Generated Content** (applies to "AI content creation apps" and community features)
- Filtering, reporting with timely responses, user blocking, and published contact info are required.
- Feb 6, 2026 update: random/anonymous chat falls under 1.2. — [Apple News](https://developer.apple.com/news/)
- June 8, 2026 update: added a paragraph on developer responsibility for violating content. — [Apple News a233fmpw](https://developer.apple.com/news/?id=a233fmpw)
- Oct 16, 2026 update: strengthened 1.2 against nonconsensual intimate imagery and added 2.5.19 on bait-and-switch apps. — [Apple News vvzx6cul](https://developer.apple.com/news/?id=vvzx6cul)

**5.1.1 Data Collection**
- (i) A privacy policy link is required both in App Store Connect and inside the app. It must state what data is collected, how, and all uses. It must confirm that third parties (analytics, SDKs) give equal protection, and explain retention and deletion and how to revoke consent.
- (ii) "Paid functionality must not be dependent on or require a user to grant access to this data." There must be an easy way to withdraw consent.
- (iii) Data minimization.
- (iv) Provide alternatives when consent is declined.
- (v) "If your app supports account creation, you must also offer account deletion within the app." Don't require a login if there are no significant account-based features.

**5.1.2 Data Use and Sharing**
- (i) "You must clearly disclose where personal data will be shared with third parties, including with third-party AI, and obtain explicit permission before doing so." Tracking requires ATT permission.
- The "third-party AI" wording was added in the Nov 2025 update. — [TechCrunch, Nov 13 2025](https://techcrunch.com/2025/11/13/apples-new-app-review-guidelines-clamp-down-on-apps-sharing-personal-data-with-third-party-ai)
- (ii) No repurposing of data without consent.
- (vi) Data from HealthKit "may not be used for marketing, advertising or use-based data mining, including by third parties."

**5.1.3 Health and Health Research**
- (i) Health, fitness and medical data, including HealthKit and Motion & Fitness data, may not be used or disclosed to third parties "for advertising, marketing, or other use-based data mining purposes other than improving health management, or for the purpose of health research, and then only with permission."
- (i) also: "You must disclose the specific health data that you are collecting from the device."
- (ii) "Apps must not write false or inaccurate data into HealthKit ... and may not store personal health information in iCloud."
- (iii)-(iv) Human-subject research requires consent and ethics-board approval. This only matters if you run studies, for example publishing research on users' cycle data.

**5.1.4 Kids** — if minors' data is collected, follow COPPA/GDPR. Apps "intended primarily for kids should not include third-party analytics or third-party advertising."

**June 8, 2026 DPLA changes** — AI/ML terms were grouped under a new Section 3.3.11, with updated Foundation Models framework requirements (3.3.11(A)). Section 7.9 covers information in App Store Connect and protection of minors. — [Apple News a233fmpw](https://developer.apple.com/news/?id=a233fmpw)

### Inferences
- **AI coach:**
  - Before the first chat, show a consent screen that names the AI provider (for example OpenAI, Anthropic or Google) and lists the data sent: food logs, weight, cycle data. This satisfies 5.1.2(i).
  - Log consent server-side and provide a revoke toggle (5.1.1(ii)).
  - Never send HealthKit-derived data to an AI vendor that uses it for training or advertising. Contractually bind the vendor (zero retention, no training) to meet 5.1.3(i) and 5.1.2(vi).
  - Add a content filter and a report button on AI responses (4.7.1, 1.2).
  - Show a "not medical advice, consult a doctor" reminder (1.4.1). Avoid diagnostic language for things like eating disorders, PCOS or diabetes.
- **Adaptive calorie/macro targets:** explain the method in-app, for example "TDEE estimated via Mifflin-St Jeor, adjusted weekly from weight trend," and cite sources. Avoid claims like "clinically proven" unless validated (1.4.1, 2.3).
- **Human coaches:**
  - Live 1:1 sessions (video calls, real-time chat) may plausibly be billed outside IAP under 3.1.3(d).
  - Asynchronous coaching bundled as a subscription feature, group programs, or pre-made plans are digital content or one-to-many, so the safe path is IAP. This is a grey area; ask App Review in submission notes.
  - Outside the US, do not link to web checkout unless you use 3.1.3(d) or an entitlement.
- **Menstrual-cycle data:** treat it as health data under 5.1.3 and the privacy label's "Health & Fitness" category. Do not share it with ad or attribution SDKs. If you read or write HealthKit cycle-tracking types, describe that integration explicitly.
- **iCloud:** do not sync HealthKit-derived personal health information via CloudKit or iCloud (5.1.3(ii)). Use your own backend.

### Gaps
- I could not fetch the full text of the Oct 16, 2026 guidelines revision. The live page was fetched, but the diff was not reviewed in full, and the last 14k characters of the page (Section 5.2.5 onward, legal) were not read.
- No official Apple guidance was found on whether asynchronous 1:1 coaching messaging counts as "real-time" under 3.1.3(d).
- I did not fetch Schedule 2 Section 3.8(b) (the subscription disclosure list), so its required paywall items are from memory and unverified:
  - title
  - length
  - price (and price per unit if appropriate)
  - Terms of Use (EULA) and privacy policy links in-app and in metadata
  - auto-renew statement

## 3. Age rating questionnaire (2025-2026 system)

### Takeaway
Tiers are now 4+, 9+, 13+, 16+ and 18+. A macro-coaching app with frequent medical or treatment information rates 16+. Health or wellness topics alone point to 9+. Social features can push the rating to 13+, or 16+ in Australia. New "Shared Location" and "Dating and Relationships" descriptors must be answered by Jan 12, 2027.

### Cited Findings
- **Rating triggers** — [Age ratings values and definitions](https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions)
  - Medical or treatment information: infrequent gives 13+, frequent gives 16+ (Brazil A12/A16).
  - Health or wellness topics are listed under 9+.
  - Social media gives 13+ (Australia 16+).
  - Unrestricted web access gives 16+.
  - UGC and messaging are listed under 4+ (Brazil A12 for messaging).
- **New tiers and deadline:** Apple announced the 13+/16+/18+ tiers in July 2025. Developers had to answer the new questions (including in-app controls, capabilities, and medical or wellness topics) by Jan 31, 2026, or updates would be blocked. — [9to5Mac](https://9to5mac.com/2025/07/24/apple-notifies-developers-of-new-app-store-age-rating-system/); [MacRumors](https://www.macrumors.com/2025/07/25/apple-overhauls-app-store-age-ratings/)
- **July 9, 2026:** the questionnaire now includes social media questions. — [Apple Developer News](https://developer.apple.com/news/)
- **Nov 2, 2026:** new descriptors (Shared Location; Dating and Relationships, which forces 18+) appear Nov 16, 2026 and are required for all apps by Jan 12, 2027. — [Apple News yxkh08us](https://developer.apple.com/news/?id=yxkh08us)
- **Age-assurance requirements:** Apple has announced requirements for Texas (effective June 4, 2026), Brazil, Australia, Singapore, Utah and Louisiana (Feb 24, 2026). — [Apple Developer News](https://developer.apple.com/news/)

### Inferences
- Expect 16+ if the AI coach and content frequently discuss treatment-like information. Otherwise expect 9+ to 13+.
- A higher rating also reduces kids/COPPA exposure. Answer honestly per 2.3.6; under-rating is a rejection risk.
- If you have a community or social feed, plan for the Declared Age Range API check and the higher rating in Australia.

### Gaps
- I did not see how AI chatbot features map to the questionnaire; that part of the page was truncated.
- A Sept 2026 third-party claim (trysonar.app) that responses are required on every submission from September 2026 could not be verified.

## 4. Privacy Nutrition Labels, privacy manifests and required-reason APIs, ATT, SDK signatures

### Takeaway
Before submission you need four things:
- accurate App Privacy "nutrition label" answers
- a `PrivacyInfo.xcprivacy` manifest declaring required-reason API use and any tracking domains
- a manifest (and signature, where applicable) for each listed third-party SDK
- an ATT prompt only if you track across apps

Health and Fitness data must never be used for tracking or advertising.

### Cited Findings
- **2.3:** metadata "including privacy information" must be accurate. Privacy labels are part of metadata. — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **5.1.2(i):** "You must receive explicit permission from users via the App Tracking Transparency APIs to track their activity." — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **Sept 16, 2026:** "Updates to App Tracking Transparency in the EU." — [Apple Developer News](https://developer.apple.com/news/) (contents not fetched)
- **Missing or unclear privacy details** are a top rejection category. Apps accessing sensitive data need a clear purpose string in Info.plist (for HealthKit, `NSHealthShareUsageDescription` and `NSHealthUpdateUsageDescription`). — [Apple: App Review](https://developer.apple.com/distribute/app-review/)
- **Privacy manifest content (not verified; the Apple documentation page did not render):**
  - It declares `NSPrivacyTracking`, `NSPrivacyTrackingDomains`, `NSPrivacyCollectedDataTypes` and `NSPrivacyAccessedAPITypes` (required-reason APIs such as UserDefaults reason CA92.1, file timestamps, system boot time, disk space and active keyboards).
  - Apple's list of commonly used SDKs must ship their own manifests, and signatures when used as binary dependencies.
  - Apple announced in Dec 2023 that this was enforced for submissions from May 1, 2024.
  - — [Privacy manifest files](https://developer.apple.com/documentation/bundleresources/privacy-manifest-files)

### Inferences
- **Likely privacy label categories:**
  - Health & Fitness (weight, body measurements, cycle data, HealthKit)
  - Contact Info (email, name)
  - User Content (food photos, chat messages with the AI and coaches)
  - Identifiers
  - Usage Data and Diagnostics
  - Purchases
- Mark these as "Linked to you". Mark "Used for tracking" only if true.
- Third-party AI processing of chat content should be reflected under User Content and the privacy policy.
- **Analytics and attribution SDKs** (Meta, AppsFlyer, etc.) collide with 5.1.3(i). Never pass health-derived events (for example "logged weight") to ad networks. Many fitness apps get flagged here.

### Gaps
- I did not verify the current required-reason API list, the SDK list, or exact enforcement dates on Apple's page; the page did not render. Check https://developer.apple.com/documentation/bundleresources/privacy-manifest-files and "Describing use of required reason API".
- I did not review the details of the Sept 2026 EU ATT change.

## 5. Medical device considerations: when Apple requires regulatory documentation

### Takeaway
Since March 26, 2026, any app in the Health & Fitness or Medical category, or one that declares frequent Medical/Treatment info in the age rating, must declare its "regulated medical device status" in App Store Connect to distribute in the EEA, UK or US. A general-wellness macro tracker should answer "No". Existing apps must comply by early 2027 or updates are blocked. Apple asks for clearance documentation only if you claim regulated medical functionality.

### Cited Findings
- **Who must declare (Mar 26, 2026):**
  - Apps whose primary or secondary category is Health & Fitness or Medical, or which mark frequent Medical or Treatment Information in the age rating, must declare.
  - The requirement applies when distributing in the EEA, UK or US.
  - New apps must declare now. Existing apps must declare by "early 2027" or they cannot submit updates.
  - The App Store product page will display whether the app is a regulated medical device.
  - Non-device apps select "No".
  - Regulated apps provide regulatory info such as contact details and safety information.
  - — [Apple News nyqbfz1y](https://developer.apple.com/news/?id=nyqbfz1y)
- **1.4.1:** "If your medical app has received regulatory clearance, please submit a link to that documentation with your app." — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

### Inferences
- **Stay in "general wellness" territory** (in FDA, EU MDR and UK MHRA terms). Avoid claims to diagnose or treat disease, for example "manage diabetes", "treat PCOS", "detect eating disorders", or insulin and medication dosing. If you make such claims, you could become a device, and Apple would then expect clearance documentation.
- **SAHPRA:** SA's regulator also regulates software as a medical device, but Apple's declaration currently covers only EEA, UK and US. This is from general knowledge, not verified here.

### Gaps
- I did not find the exact "early 2027" deadline date or the full field list in Apple's "Declare regulated medical device status" help page.

## 6. Common rejection reasons for calorie/fitness apps; TestFlight; review timelines

### Takeaway
Review is usually fast: 50% of submissions within 24 hours and 90% within 48 hours. Most rejections are 2.1 completeness problems: crashes, missing demo account, or IAPs not reviewable. For fitness and calorie apps specifically, the common problems are:
- HealthKit not visible in the UI or description (2.5.1)
- unclear paywalls (3.1.2(c))
- external payment flows (3.1.1)
- privacy and consent gaps

### Cited Findings
- **Review times and process** — [Apple: App Review](https://developer.apple.com/distribute/app-review/)
  - 50% of submissions are reviewed in under 24 hours and 90% in under 48 hours.
  - Expedited review is available for critical bug fixes and events.
  - You can file one appeal per rejection to the App Review Board.
  - 2.1 accounts for over 40% of unresolved issues.
  - Other common reasons: privacy policy and purpose-string gaps, inaccurate screenshots, 4.2 web clippings, 4.3 spam/duplicates, 2.3 misleading claims, and the wrong legal entity for regulated services.
- **HealthKit rejections:** developer forum reports describe 2.5.1 rejections when the app "does not indicate integration with the Health app in your app description and clearly identify the HealthKit ... functionality in your app's user interface." Apps were also rejected when they request HealthKit without primary features needing health data. — [Apple Developer Forums thread 802626](https://developer.apple.com/forums/thread/802626)
- **Cal AI case (April 2026), from search snippets only; I could not open the articles:**
  - Apple reportedly pulled the AI calorie tracker Cal AI from the US App Store.
  - The cited reasons were 3.1.1 (an embedded Stripe payment flow bypassing IAP) and 3.1.2(c) (deceptive billing presentation, "manipulative tactics" under the Developer Code of Conduct).
  - Apple also reportedly noted user reviews complaining about confusing payment presentation.
  - The app was later reinstated after fixes.
  - A MacRumors forum thread title frames it as "deceptive billing design, not external payments".
  - — [Cult of Mac](https://www.cultofmac.com/news/why-app-store-pulled-cal-ai-app); [MobileMarketingReads](https://mobilemarketingreads.com/?p=50644); [MacRumors forums](https://forums.macrumors.com/threads/apple-pulled-cal-ai-for-deceptive-billing-design-not-external-payments.2481315/)
- **2.1(b):** IAPs must be visible to the reviewer and functional. If any can't be found, explain why in the review notes. — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **SDK minimum:** from April 28, 2026, submissions require the iOS 26 SDK or later. The current beta toolchain is Xcode 27.3. — [Apple News ueeok6yw](https://developer.apple.com/news/?id=ueeok6yw); [Apple Developer News](https://developer.apple.com/news/)

### Inferences: pre-submission checklist for a calorie or fitness app
1. Provide a demo account with pre-populated data, keep the backend live, and in Notes for Review explain:
   - the AI coach
   - the adaptive algorithm
   - how human coaching is purchased (2.1, 2.3.1(a))
2. Make IAP products "Ready to Submit", attach them to the build, and include them in the first submission.
3. **Paywall:**
   - Show the price and billing period as the most prominent text.
   - State trial length and what happens after it ("then R X/month, auto-renews, cancel anytime in Settings").
   - Link the Terms of Use (EULA) and Privacy Policy.
   - Include a Restore Purchases button.
   - No fake countdowns, pre-checked upsells, or hidden close buttons.
4. **HealthKit:**
   - Request only the types you use, at the moment you use them.
   - Use explanatory purpose strings.
   - Show a visible "Apple Health" settings screen.
   - Mention Apple Health in the description.
   - The app must work if access is denied (5.1.1(iv)).
5. Put account deletion in Settings, with a full delete, not just deactivation (5.1.1(v)).
6. Add the AI consent screen, reporting, and medical disclaimer.
7. Make sure screenshots show the real UI (2.3) and are rated 4+ (2.3.8).
8. **TestFlight:**
   - Internal testers (up to 100 App Store Connect users) need no review.
   - The first external build goes through Beta App Review, typically quick.
   - External testing allows up to 10,000 testers via email or public link. These figures are from general knowledge and were not fetched.
   - Test IAP in the sandbox/TestFlight environment, where subscriptions renew on an accelerated schedule.

### Gaps
- I found no Apple statistics specific to health/fitness rejections.
- I did not verify the current TestFlight limits on Apple's site in this session.

## 7. Store listing best practices (brief)

### Takeaway
Metadata must match the app (2.3). Screenshots must show the real UI and be 4+ appropriate, and subscriptions must be identified. Beyond that, standard ASO practice applies.

### Cited Findings
- 2.3, 2.3.2 and 2.3.8 apply as quoted in section 2. Inaccurate screenshots are a common rejection. — [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/); [Apple: App Review](https://developer.apple.com/distribute/app-review/)
- New subscription tools in 2026 (could support pricing strategy):
  - monthly subscriptions with a 12-month commitment (Apr 27, 2026)
  - Bundles and Suites (Sept 16, 2026)
  - multiseat business subscriptions (Oct 22, 2026)
  - retention messages for subscriptions (Nov 4, 2026)
  - — [Apple Developer News](https://developer.apple.com/news/)

### Inferences (general ASO practice, not sourced in this session)
- Put the core keyword in the title or subtitle (30 characters each), for example "Macro Tracker & AI Coach". Use the 100-character keyword field without repeating words that are already in the title.
- Make the first 3 screenshots tell the value story: adaptive macros, fast food logging, the AI coach. Captions must not overclaim health outcomes.
- Localize for priority storefronts (SA en-ZA uses English).
- Use In-App Events and Custom Product Pages for coaching programs.
- Avoid before/after body photos in screenshots. They risk the 4+ metadata rule and misleading-claims scrutiny.
- Add Health & Fitness as the primary category. This triggers the medical-device declaration, which you answer "No".

### Gaps
- I did not fetch Apple's current screenshot size requirements (6.9" iPhone and iPad 13" sets).
- EU Digital Services Act "trader status" declaration in App Store Connect is required to distribute in the EU. This is from general knowledge and was not verified here.
