# Legal Liability Risks and Protective Measures for an IIFYM-Style Nutrition/Macro Coaching App (International, SA-based developer)

Research notes as of 2026-11-08. These are research notes, not legal advice. Sources marked "[training knowledge, verify]" were not re-fetched in this session and must be checked against the primary source before relying on them. world.openfoodfacts.org could not be fetched (blocked by the session network), so Open Food Facts terms come from its wiki, docs and support pages.

## 1. Lawsuits and enforcement precedents against diet, fitness, health and AI-chatbot apps

### Takeaway
The largest real-world exposures for consumer health and diet apps have come from three areas. The first is subscription and cancellation practices (Noom, $62M). The second is sharing sensitive health or reproductive data with ad and analytics SDKs (Flo, GoodRx, BetterHelp, Premom, and the 2025 jury verdict against Meta over Flo data). The third is data breaches (MyFitnessPal). AI-chatbot harm litigation has moved from theory to settlements (Character.AI/Google, January 2026). The NEDA "Tessa" episode is the clearest example of a diet-advice chatbot causing reputational and safety harm.

### Cited Findings
**Subscriptions and dark patterns**
- In 2022 Noom agreed to a $62M class settlement: $56M cash plus $6M in subscription credits, filed in SDNY. The claims were that "risk-free" trials converted into renewals that were hard to cancel. The class covered auto-renewing Noom Healthy Weight buyers from May 2016 to October 2020. Noom denied wrongdoing. — [Fox Business](https://www.foxbusiness.com/lifestyle/diet-app-noom-reaches-62m-settlement-over-hard-to-cancel-renewals); [Subscription Insider](https://www.subscriptioninsider.com/topics/customer-service/noom-settles-subscription-auto-renewal-lawsuit-for-62m)
- As part of the settlement, Noom committed to email reminders before a trial expires and to easier in-app and web cancellation. The parties valued these changes at $31.2M to $120M. Expected payouts were about $30 to $167 per person. — [Winston & Strawn](https://www.winston.com/en/class-action-insider/noom-settlement-showcases-potential-pitfalls-on-auto-renewals.html); [Globe and Mail](https://theglobeandmail.com/business/international-business/article-noom-diet-app-reaches-us62-million-settlement-over-automatic)

**Health data sharing (period tracking and health apps)**
- **Frasco v. Flo Health (N.D. Cal. 3:21-cv-00757):**
  - On 1 August 2025 a jury found Meta liable under the California Invasion of Privacy Act (CIPA) for intercepting Flo users' sensitive health data through its SDK. — [Lawdragon](https://www.lawdragon.com/news-features/2025-08-25-big-tech-on-trial-jury-finds-meta-liable-for-misusing-women-health-data); [Fierce Healthcare](https://www.fiercehealthcare.com/digital-health/meta-found-liable-abusing-consumer-reproductive-health-data-run-targeted-ads)
  - Flo settled on 31 July 2025, and Google and Flurry settled earlier. Plaintiffs' counsel reports $59.5M in settlements. — [Labaton](https://www.labaton.com/cases/frasco-v-flo-health-inc)
  - The class was about 38 million users, and CIPA statutory damages are $5,000 per violation. Plaintiffs suggested Meta's exposure could reach $190B; that is plaintiffs' framing. — [Website Planet](https://www.websiteplanet.com/news/meta-flo-health-privacy-ruling)
  - On 17 September 2025 the court denied Meta's post-trial motions. — [MediaPost](https://www.mediapost.com/publications/article/408126/meta-petitions-to-reverse-privacy-verdict-over-hea.html)
- In 2021 the FTC settled with Flo Health over sharing users' fertility and period data with Facebook, Google and others despite promising privacy. There was no monetary penalty, but the order required notice to users and an independent compliance review. — [FTC press release 2021](https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about) [training knowledge, verify]
- **FTC Health Breach Notification Rule (HBNR) cases:**
  - GoodRx was the FTC's first-ever HBNR action, for undisclosed sharing of health data with advertisers. The penalty was about $1.5M. — [Wilson Sonsini](https://wsgr.com/en/insights/ftc-final-rule-officially-broadens-health-breach-notification-rule-targets-health-and-wellness-apps.html); [Promise Legal](https://blog.promise.legal/ftc-health-breach-notification-rule-health-apps/)
  - Premom (Easy Healthcare) was the second HBNR case, with a $100k civil penalty. The final figure was unclear in my sources. — [Promise Legal](https://blog.promise.legal/ftc-health-breach-notification-rule-health-apps/); [FTC Premom release](https://www.ftc.gov/news-events/news/press-releases/2023/05/ovulation-tracking-app-premom-will-be-barred-sharing-health-data-advertising-under-proposed-ftc-order) [verify amount]
  - BetterHelp (an FTC Act case, not HBNR) paid $7.8M for sharing mental-health data with Facebook and Snapchat for ads. — [Promise Legal](https://blog.promise.legal/ftc-health-breach-notification-rule-health-apps/); [FTC BetterHelp release](https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-ban-betterhelp-revealing-consumers-data-including-sensitive-mental-health-information-facebook) [training knowledge, verify]
- **Washington My Health My Data Act (MHMDA):** The first class action under the Act is Maxwell v. Amazon.com, W.D. Wash. No. 2:25-cv-00261, filed 10 February 2025.
  - It targets Amazon's ad SDK embedded in third-party apps that collect health data without consent.
  - It pleads MHMDA alongside the federal Wiretap Act, the Stored Communications Act, the Computer Fraud and Abuse Act, and Washington's Consumer Protection Act.
  - Commentators flag whether the complaint adequately pleads injury.
  - Sources: [WilmerHale](https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20250220-first-lawsuit-filed-under-washingtons-my-health-my-data-act); [Washington State Standard](https://washingtonstatestandard.com/2025/02/21/lawsuit-against-amazon-provides-first-test-of-was-health-data-privacy-law/); [Paul Hastings](https://paulhastings.com/insights/ph-privacy/biometrics-litigation-update-first-class-action-complaint-filed-under-washingtons-my-health-my-data-act-is-your-company-ready)

**Data breaches**
- The 2018 MyFitnessPal breach (Under Armour) compromised about 150 million accounts: usernames, emails and hashed passwords, mostly bcrypt. Payment data was not taken. Under Armour notified users four days after discovery and forced password resets. — [Security Affairs](https://securityaffairs.com/70814/data-breach/under-armour-hack.html); [Tom's Hardware](https://www.tomshardware.com/news/myfitnesspal-data-breach-150-million,36782.html)

**Eating-disorder harm from a chatbot**
- **NEDA "Tessa" (May 2023):**
  - The eating-disorder helpline chatbot recommended a 500 to 1,000 kcal/day deficit and weekly weighing and measuring to a user. A psychologist replicated the advice. — [NPR](https://www.npr.org/sections/health-shots/2023/06/08/1180838096/)
  - NEDA pulled the chatbot within 24 hours. It blamed its vendor Cass for enabling generative answers without NEDA's approval. — [NPR](https://www.npr.org/sections/health-shots/2023/06/08/1180838096/); [AI Incident Database](https://incidentdatabase.ai/reports/3141)

**AI chatbot harm litigation and enforcement**
- In January 2026 Character.AI and Google reached mediated settlements in Garcia (M.D. Fla. 6:24-cv-01903; a teen's suicide) and in related family suits in Colorado, New York and Texas. Terms were undisclosed and there was no admission of wrongdoing. Separate wrongful-death suits have been filed against OpenAI over ChatGPT. — [OpenClassActions](https://openclassactions.com/lawsuits/character-ai-google-teen-harm-lawsuits-settlement.php); [Jamaica Gleaner/AP](https://jamaica-gleaner.com/article/business/20260109/google-and-chatbot-maker-character-settle-lawsuit-alleging-chatbot-pushed)
- On 11 September 2025 the FTC issued 6(b) study orders to seven consumer AI chatbot firms: Alphabet, Character.AI, Instagram, Meta, OpenAI, Snap and xAI. The orders ask how the firms test, monitor and mitigate harms to children and teens, and how they disclose risks and monetize. — [FTC](https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-launches-inquiry-ai-chatbots-acting-companions)
- **Peloton:** Its Tread+ recall (2021) and a $19M CPSC civil penalty (2023) for delayed reporting show product-safety exposure for connected-fitness hardware. This is less relevant to a software-only app. — [training knowledge, verify at cpsc.gov]

### Inferences
- The most probable lawsuit for a small subscription macro app is not "your calorie target hurt me." It is a consumer-protection or class claim over billing, cancellation, or tracking SDKs leaking health data such as weight, cycle or diet logs. The plaintiffs' bar uses wiretap statutes like CIPA, which carries $5,000 statutory damages per violation, so even small apps with Meta or Google SDKs on health screens are exposed.
- Menstrual-cycle data puts the app in the same category as Flo and Premom. Keep it off any ad or analytics pipeline.
- Tessa is directly analogous. An LLM coach that freely generates deficit advice can harm users with eating disorders. NEDA's own defence ("the vendor changed it") shows that outsourcing the model does not transfer the reputational risk.

### Gaps
- I found no reported court judgment holding a macro or calorie app liable in negligence for a specific user's physical injury. The absence of reported cases does not mean the risk is absent.
- I did not confirm the outcome of Meta's appeal in Frasco, the current status of Maxwell v. Amazon, or court approval of the Character.AI settlements.

## 2. Health-advice liability: duty of care, disclaimers and safety design

### Takeaway
The dominant risk vectors are generated targets (very-low-calorie deficits, high protein for renal patients, intake targets during pregnancy, targets for minors) and generative AI coaching for at-risk users. Disclaimers help but do not cure a product that actively recommends unsafe things. Courts and regulators look at product design: screening, floors, exclusions, and escalation. South African consumer law cannot exclude liability for gross negligence and presumes exclusions for death or personal injury to be unfair.

### Cited Findings
- Tessa's harmful output was standard deficit advice: 500 to 1,000 kcal/day plus weekly weigh-ins, delivered to an eating-disorder population. Generic "healthy" diet advice is itself the hazard for that population. — [NPR](https://www.npr.org/sections/health-shots/2023/06/08/1180838096/)
- **South Africa, Consumer Protection Act (CPA):**
  - Section 51 prohibits terms that waive CPA rights or exclude liability for gross negligence, and section 51(3) gives such terms no effect. Section 48 is a general fairness test that voids excessively one-sided terms. — [MJK Inc](https://mjkinc.co.za/compliance/consumer-protection-act/unfair-contract-terms)
  - Regulation 44 presumes unfair any term excluding or limiting a supplier's liability for death or personal injury. — [acts.co.za Reg 44](https://www.acts.co.za/consumer-protection/r293_44__list_of_contract_terms_which_are_presumed)
  - In UPS SCS v Van Wyk the Supreme Court of Appeal struck down a limitation clause that was not drawn to the consumer's attention. This reflects CPA s 49, which requires risky or limiting terms to be conspicuous and specifically acknowledged. — [MJK Inc](https://mjkinc.co.za/compliance/consumer-protection-act/unfair-contract-terms)
  - Section 61 imposes no-fault liability for harm from defective goods. Whether pure software or advice counts as "goods" is not settled in my sources. — [MJK Inc](https://mjkinc.co.za/compliance/consumer-protection-act/unfair-contract-terms)
- **California SB 243 and New York's AI companion law:** Both regulate "companion" chatbots. They require disclosure that the bot is not human and protocols to detect and respond to self-harm or suicidal ideation, with referral to crisis services. SB 243 has a private right of action. New York's law allows AG penalties of up to $15,000/day. Both exempt bots used for customer service, productivity or business purposes. — [Morrison Foerster](https://www.mofo.com/resources/insights/251120-new-york-and-california-enact-landmark-ai); [Skadden](https://skadden.com/insights/publications/2025/10/new-california-companion-chatbot-law); [FPF](https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/)

### Inferences (recommended mitigations; design practice, not cited law)
- **Onboarding screen (PAR-Q-style plus nutrition-specific):**
  - Ask about current or past eating disorder, pregnancy or breastfeeding, diabetes on insulin or sulfonylureas (hypoglycaemia risk with deficits), chronic kidney disease (high-protein targets), GLP-1 or other weight-loss drugs, heart conditions, and age under 18.
  - A positive answer should route to "maintenance or clinician-guided mode" or block deficit targets, rather than only showing a warning.
  - Log consent and answers; this is evidence of reasonable care.
- **Hard guardrails in the algorithm:**
  - Calorie floors. Commonly cited practice is not below about 1,200 kcal (women) or 1,500 kcal (men), or not below an estimated BMR, without clinician supervision.
  - A maximum weekly loss rate, for example about 0.5 to 1% of body weight per week.
  - A protein cap or warning when the CKD flag is set, and no deficit at a BMI under 18.5.
  - Adaptive weekly adjustments must respect the same floors and stop pushing deficits when intake or weight trends look like restriction.
  - These thresholds are industry convention. Have them signed off by a registered dietitian and keep the sign-off on file.
- **Age gating:** Make the app 18+ for deficit features (or 16+ in jurisdictions where data consent permits). This avoids COPPA and minors-specific chatbot rules (SB 243), and minors are a core eating-disorder risk group.
- **Effective disclaimers:**
  - Show them in context, at the moment a target is generated and in the AI chat, not only in the terms of service.
  - Make them specific ("this is an estimate for healthy adults; not suitable if…").
  - Require affirmative acknowledgement. CPA s 49 explicitly requires this for SA consumers.
  - Make sure the product does not contradict them, for example by marketing "your personal nutritionist" while disclaiming medical advice.
  - Ineffective patterns are a disclaimer buried in the terms, a generic "consult a doctor" next to aggressive deficit prompts, and claims that imply clinical treatment.
- **AI coach guardrails:**
  - Use a system prompt plus classifier filters that refuse to recommend intakes below the floor or to promote purging, fasting extremes or pro-ED content.
  - Detect ED and self-harm signals and escalate to crisis resources (SADAG in South Africa, 988 in the US, and so on).
  - Disclose AI status.
  - Do not let the LLM override computed targets.
  - Red-team the coach before launch, keep logs, and do not let a vendor change model behaviour without regression tests (the Tessa lesson).
  - Position the coach as a fitness/nutrition productivity tool, not a "companion," to stay closer to the SB 243 and New York exemptions.
- **Human coaches:**
  - Verify credentials, for example a registered dietitian (HPCSA in South Africa) or a recognised nutrition-coach certification.
  - Restrict coaches' scope to non-medical nutrition coaching.
  - Use an independent contractor agreement with a scope-of-practice clause, an indemnity, a requirement that the coach holds their own professional indemnity insurance, confidentiality and POPIA/GDPR data-processing terms, and a non-solicitation clause.
  - Make the marketplace role clear to users.
  - Note: in South Africa, "dietitian" and "dietetics" are regulated, and unregistered persons should not present themselves as dietitians.

### Gaps
- I found no authoritative standard defining calorie-floor numbers. They are clinical convention and should be confirmed by a dietitian.
- I found no case law on whether an app's algorithmic recommendation is a "product" (strict liability) or a "service" (negligence) for diet apps specifically. This is unsettled.
- I did not verify HPCSA scope-of-practice rules in this session.

## 3. Terms of Service essentials and their enforceability across jurisdictions

### Takeaway
Standard US-style protective terms are needed: limitation of liability, indemnity, arbitration with a class waiver, governing law, assumption of risk, AI-output disclaimers, acceptable use, IP licence, and clear subscription terms. Their force drops sharply against consumers in the EU, UK and South Africa, where mandatory consumer law overrides one-sided clauses. Draft for the strictest regime, and add severability and jurisdiction-specific carve-outs.

### Cited Findings
- In South Africa, CPA s 48 voids unfair, one-sided terms. Section 51 bars waiving CPA rights and excluding gross-negligence liability. Regulation 44 presumes clauses limiting liability for death or injury to be unfair. The grey list is non-exhaustive. — [MJK Inc](https://mjkinc.co.za/compliance/consumer-protection-act/unfair-contract-terms); [acts.co.za Reg 44](https://www.acts.co.za/consumer-protection/r293_44__list_of_contract_terms_which_are_presumed)
- A limitation clause not brought to the consumer's attention was struck down (UPS SCS v Van Wyk, SCA). — [MJK Inc](https://mjkinc.co.za/compliance/consumer-protection-act/unfair-contract-terms)
- California's Automatic Renewal Law (ARL), as amended by AB 2863 effective 1 July 2025, requires:
  - express affirmative consent to the renewal terms, separate from the general terms;
  - online "click-to-cancel" for online sign-ups, with retention offers allowed only if cancellation stays immediate and unobstructed;
  - an annual reminder;
  - notice of price changes 7 to 30 days in advance;
  - coverage of free-to-paid conversions.
  — [Kilpatrick Townsend](https://ktslaw.com/en/insights/alert/2024/10/california-latest-automatic-renewal-law-amendments-take-effect-in-july-2025); [DWT](https://dwt.com/insights/2024/10/ab-2863-updates-california-automatic-renewal-law)
- On 8 July 2025 the Eighth Circuit vacated the FTC's "Click-to-Cancel" amendments to the Negative Option Rule (Custom Communications v. FTC) because the FTC skipped the required preliminary regulatory analysis. The older Negative Option Rule (prenotification plans only) remains. ROSCA and the FTC Act still apply, and state ARLs are unaffected. — [Gunderson](https://www.gunder.com/en/news-insights/insights/client-insight-eighth-circuit-vacates-ftcs-click-to-cancel-rule); [AGG](https://www.agg.com/news-insights/publications/eighth-circuit-strikes-down-ftcs-click-to-cancel-rule/)

### Inferences (recommended ToS and operational contents)
- **Limitation of liability:**
  - Cap liability at fees paid in the prior 12 months, and exclude indirect and consequential loss.
  - Expressly carve out what cannot be excluded: death or personal injury from negligence (UK/EU), gross negligence and CPA rights (SA), and statutory consumer rights.
  - Without these carve-outs the clause risks being struck down entirely in some regimes.
- **Assumption of risk and health acknowledgement:** Require a separate, conspicuous checkbox at onboarding. This satisfies CPA s 49, which requires risky terms to be specifically drawn to attention.
- **AI output clause:** Outputs may be inaccurate and are not medical advice; the user must not rely on them for medical decisions; the coach is AI (also needed under EU AI Act Art. 50 and SB 243).
- **Arbitration and class waiver:** Useful mainly for US users. Use a US-style clause with a small-claims carve-out and an opt-out window. It is generally unenforceable against EU/UK consumers and likely vulnerable under the SA CPA. Do not rely on it outside the US.
- **Governing law:** South African law and courts can be chosen, but EU and UK consumers retain the mandatory protections of their home country (Rome I Art. 6) [training knowledge].
- **Subscriptions:**
  - Disclose price, term, renewal and cancellation method before purchase, with a separate renewal consent.
  - Send a pre-trial-end reminder (the Noom remedy) and in-app cancellation.
  - Follow app-store refund policies (Apple and Google handle refunds for IAP).
  - For web billing, honour EU/UK 14-day withdrawal rules unless the user explicitly waives them for immediate digital content.
  - Have a policy for SA CPA/ECTA cooling-off. ECT Act s 44 provides a 7-day cooling-off for electronic transactions [training knowledge, verify].
- **Other terms:** Acceptable use (no pro-ED content in community or chat features), user content licence, IP ownership of the app and food database, third-party data attributions (ODbL), human-coach marketplace terms (the app is not a party to coaching advice), termination, and a modification procedure.

### Gaps
- I did not verify FTC re-proposal activity on the Negative Option Rule in 2026, or New York's state click-to-cancel law status.
- I did not verify the SA ECT Act s 44 cooling-off and its exceptions for digital content.

## 4. International privacy and AI regulation

### Takeaway
Weight, diet logs, health-screening answers and especially menstrual-cycle data are health data in almost every regime. That means explicit consent (GDPR Art. 9, POPIA special personal information), a DPIA, no ad-SDK sharing, breach-notification readiness (FTC HBNR), and US state health-privacy laws with private actions (Washington MHMDA). An LLM chatbot serving EU users has been subject to EU AI Act Art. 50 transparency duties since 2 August 2026.

### Cited Findings
- **FTC HBNR amendments:** Finalised 26 April 2024, effective 29 July 2024. They expressly cover health apps and direct-to-consumer services that draw health information from multiple sources. A "breach" includes an unauthorized disclosure, such as sharing with advertisers, not only hacking. Civil penalties were reported at about $51,744 per violation in 2024, inflation-adjusted. — [Wilson Sonsini](https://wsgr.com/en/insights/ftc-final-rule-officially-broadens-health-breach-notification-rule-targets-health-and-wellness-apps.html); [McDermott](https://www.mwe.com/?p=279089); [Promise Legal](https://blog.promise.legal/ftc-health-breach-notification-rule-health-apps/)
- **Washington MHMDA:** It has a private right of action through the Washington Consumer Protection Act, and its first class action (against Amazon's SDK) was filed in February 2025. — [WilmerHale](https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20250220-first-lawsuit-filed-under-washingtons-my-health-my-data-act)
- **GDPR:**
  - Art. 9 prohibits processing health data except on listed bases. For a consumer app the practical basis is explicit consent, Art. 9(2)(a). — [GDPR Art. 9](https://gdpr-info.eu/art-9-gdpr/)
  - Art. 35 requires a DPIA for large-scale processing of special-category data. — [GDPR Art. 35](https://gdpr-info.eu/art-35-gdpr/)
  - Art. 27 requires non-EU controllers that offer services to people in the EU to appoint an EU representative, unless processing is occasional and does not include large-scale special-category data. A health app does not qualify for the exemption. — [GDPR Art. 27](https://gdpr-info.eu/art-27-gdpr/)
  - The UK GDPR mirrors this and requires a UK representative. [training knowledge]
  - Art. 8 sets the child consent age at 13 to 16 depending on the member state. — [GDPR Art. 8](https://gdpr-info.eu/art-8-gdpr/)
- **POPIA (South Africa):** Health information is "special personal information," and processing it is prohibited unless an exception applies (ss 26 to 27; consent is one). This is from general knowledge and the search did not confirm it; verify against the Act. — [POPIA text](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013popi.pdf) [verify]
- **EU AI Act Art. 50:**
  - The transparency duties apply from 2 August 2026 and were NOT deferred by the Digital Omnibus. The Omnibus was reported as Regulation (EU) 2026/1744, in force 27 July 2026. It deferred high-risk obligations to 2 December 2027 (Annex III) and 2 August 2028 (Annex I).
  - Providers of AI systems that interact with people must inform users that they are interacting with AI, unless this is obvious.
  - A narrow grace period to 2 December 2026 applies only to the Art. 50(2) machine-readable marking of synthetic content for generative systems already on the market.
  - Fines are up to €15M or 3% of worldwide turnover.
  - Sources: [Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force); [Ropes & Gray](https://www.ropesgray.com/en/insights/viewpoints/2026/08/102nfqm/you-talkin-to-me-operationalising-the-eu-ai-acts-transparency-obligations); [McCann FitzGerald](https://www.mccannfitzgerald.com/knowledge/technology-and-innovation/one-month-to-go-eu-ai-act-transparency-compliance). The source dates and the regulation number come from secondary commentary; verify on EUR-Lex.
- **US AI chatbot laws:** New York's AI companion law has been in effect since 5 November 2025. California SB 243 has core duties from 1 January 2026 and annual reporting from 1 July 2027, with a private right of action. Both exempt productivity and business bots. — [Morrison Foerster](https://www.mofo.com/resources/insights/251120-new-york-and-california-enact-landmark-ai)

### Inferences
- **Practical checklist:**
  - Separate explicit consent for health data and for cycle data.
  - No third-party ad or analytics SDKs on health screens, or a server-side analytics setup that strips health events.
  - A DPIA.
  - An EU Art. 27 representative and a UK representative (commercial services exist).
  - POPIA Information Officer registration with the SA Information Regulator.
  - Data processing agreements with the LLM provider (zero-retention and no-training settings) and with hosting providers.
  - Cross-border transfer mechanisms (SCCs; POPIA s 72).
  - A 60-day HBNR breach playbook for US users.
  - A Washington MHMDA-specific consumer health data privacy policy.
  - A CCPA/CPRA "sensitive personal information" notice with a limit-use option.
  - 18+ gating to avoid COPPA.
  - An in-chat "You're talking to an AI" label (EU AI Act Art. 50).
- A health/fitness LLM coach is unlikely to be "high-risk" under the EU AI Act unless it qualifies as a medical device. Avoid diagnostic or treatment claims so the product stays outside EU MDR/FDA device classification.

### Gaps
- I did not fetch CCPA/CPRA regulations, other state consumer health laws (Nevada, Connecticut), or the UK representative rule text this session.
- The exact EU AI Act Omnibus regulation number and dates are from secondary sources.

## 5. Food database accuracy, allergens and IP

### Takeaway
Open Food Facts is usable but carries ODbL obligations: attribution and share-alike for derived or combined databases. Scraping retailer data carries IP, contract and database-right risk. Database inaccuracies, especially allergen information, should be disclaimed and designed around: never present the app as an allergen-safety tool.

### Cited Findings
- The Open Food Facts database is under the ODbL, individual contents under the Database Contents Licence, and images under CC BY-SA. — [OFF support](https://support.openfoodfacts.org/help/en-gb/12-api-data-reuse/94-are-there-conditions-to-use-the-api); [OFF API docs](https://openfoodfacts.github.io/openfoodfacts-server/api/tutorials/license-be-on-the-legal-side)
- **Attribution:** "(c) Open Food Facts contributors" on each screen using the data (wiki), or "Data from Open Food Facts" with a link (reuse page). — [OFF wiki ODbL](https://wiki.openfoodfacts.org/ODBL_License); [OFF reuses](https://es.openfoodfacts.org/reuses)
- **Share-alike:** If OFF data is combined with other databases, the resulting database must be released as open data. OFF's preferred route is contributing modifications back into OFF. — [OFF support](https://support.openfoodfacts.org/help/en-gb/12-api-data-reuse/94-are-there-conditions-to-use-the-api)
- OFF maintains a non-compliance email template, which indicates it actively enforces the licence. — [OFF wiki](https://wiki.openfoodfacts.org/ODBL_non-compliance/Example_email)
- USDA FoodData Central data is public domain (CC0) and the most legally clean source. — [training knowledge, verify at fdc.nal.usda.gov]

### Inferences
- **Architecture:** Keep OFF-derived data in a separate, attributable table. Under the ODbL, a "collective database" (kept separate) does not trigger share-alike for the proprietary data, but a merged "derivative database" does. If user-submitted foods are merged with OFF, expect to publish that merged database, or contribute it back to OFF.
- **Scraping:** Avoid scraping retailer or competitor databases such as MyFitnessPal. This risks breach of website terms, copyright in compilations, and EU sui generis database rights, and South African retailers' terms may prohibit it.
- **Accuracy and allergens:** Label crowd-sourced entries ("community entry, unverified"). Disclaim that nutrition values and allergen information may be wrong, and tell users to always check the product label. Do not market allergen filtering as safety-critical. Let users report errors and log corrections.

### Gaps
- The full OFF terms-of-use page could not be fetched (host blocked in this session).
- I found no lawsuit against a tracking app over wrong nutrition or allergen data.

## 6. Insurance and operations

### Takeaway
Combine tech E&O/professional indemnity (covering the algorithmic and AI advice), cyber liability (breach response, regulatory fines where insurable, notification costs), general and product liability, and require human coaches to carry their own professional indemnity insurance. Verify that policies cover worldwide claims, including US jurisdiction, and AI-generated output.

### Cited Findings
- The scale of breach exposure is shown by the MyFitnessPal breach (150M accounts, forced resets, outside forensics) and by HBNR penalties per violation. — [Security Affairs](https://securityaffairs.com/70814/data-breach/under-armour-hack.html); [Promise Legal](https://blog.promise.legal/ftc-health-breach-notification-rule-health-apps/)

### Inferences
- **Coverage asks to put to the broker:**
  - Worldwide territorial and jurisdiction coverage that includes US and Canadian suits; many South African policies exclude them by default.
  - Explicit cover for AI/LLM output and algorithmic advice; some insurers are adding AI exclusions.
  - Bodily-injury carve-back in the E&O policy for health-advice claims.
  - Regulatory defence costs for GDPR, POPIA and FTC matters.
  - Wiretap and privacy-statute class action cover; some cyber policies exclude BIPA- or CIPA-type claims.
  - Media/IP liability for database licensing disputes.
- **Operational controls that insurers and courts value:**
  - Documented dietitian review of the algorithms.
  - Incident response plan.
  - AI red-team logs.
  - Consent records.
  - Vendor DPAs.
  - Change-management for model updates.

### Gaps
- I found no sourced premium ranges or specific South African insurer products in this session. This needs a broker quote.

## 7. Accessibility law exposure

### Takeaway
US ADA digital-accessibility suits are high-volume and repeat-target. EU European Accessibility Act duties have applied since 28 June 2025 to e-commerce services, including apps selling to EU consumers, with a microenterprise exemption for services (fewer than 10 staff and turnover or balance sheet of €2M or less). Building to WCAG 2.1/2.2 AA is the cheap mitigation.

### Cited Findings
- UsableNet counted 5,114 ADA digital accessibility lawsuits in 2025 across websites, mobile apps and video. 1,427 targeted previously sued companies, about 45% of federal filings. Seyfarth counted 3,117 federal website suits in 2025, up 27% from 2024 (different scope). — [UsableNet 2025 year-end](https://info.usablenet.com/2025-year-end-digital-accessibility-lawsuit-report-plain-text); [Newswire](https://www.newswire.com/news/digital-accessibility-lawsuits-surge-in-2025-22618502)
- The EAA has applied since 28 June 2025. It covers e-commerce websites and apps, including those of non-EU businesses selling to EU consumers. Microenterprises (fewer than 10 employees and turnover or balance sheet of €2M or less) are exempt for services. — [Reed Smith](https://www.reedsmith.com/our-insights/blogs/viewpoints/102kxnd/the-eu-accessibility-act-is-now-in-force/); [Raftlabs](https://www.raftlabs.com/blog/european-accessibility-act-guide)

### Inferences
- A solo or small South African developer likely falls under the EAA microenterprise services exemption at launch. That exemption ends as the company grows. A subscription app sold to consumers is arguably "e-commerce" under the EAA.
- US ADA exposure for app-only businesses without a physical place of business varies by federal circuit. Accessible design (screen-reader labels, dynamic type, contrast) is low cost and reduces both risk and app-store review friction.

### Gaps
- I found no separate count of mobile-app-only ADA suits.
- I did not confirm the EAA definition article from the EUR-Lex text, and the sources conflict on the article number.
