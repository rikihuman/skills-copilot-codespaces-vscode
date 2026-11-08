# South Africa: Legal & Regulatory Compliance for a Subscription Nutrition/Macro Tracking + Coaching App

Research date: 8 November 2026. Research notes only, not legal advice. Method caveat: direct page fetches to popia.co.za and michalsons.com were blocked by the research sandbox's network rules, so the findings below rest on search-result extracts from law-firm, regulator and gazette-mirror pages. Points marked **[statute, from knowledge; verify text]** come from my knowledge of the Act's wording and are cited to the official Act page. Check the exact wording before relying on them. Official Acts: POPIA (Act 4 of 2013) https://www.gov.za/documents/protection-personal-information-act ; CPA (Act 68 of 2008) https://www.gov.za/documents/consumer-protection-act ; ECTA (Act 25 of 2002) https://www.gov.za/documents/electronic-communications-and-transactions-act ; Health Professions Act 56 of 1974 https://www.gov.za/documents/health-professions-act-16-mar-2015-1124

---

## 1. POPIA: health/special personal information, Information Officer, cross-border transfers, marketing, breaches, children, operators

### Takeaway
Weight, body composition and menstrual-cycle data are almost certainly "health information" (special personal information). It may be processed only under a s27 exception, and for a consumer app that means express, specific consent in practice. Hosting on Azure outside SA and sending data to US AI APIs is a cross-border transfer. That transfer has to fit s72, and special information going offshore may also trigger s57 prior authorisation, which needs a lawyer's view. Two big changes since 2025: amended Regulations (17 April 2025) mean opt-out is no longer consent for electronic direct marketing, and breach reports must go through the Regulator's eServices portal. Separate Health Information Regulations were gazetted on 6 March 2026.

### Cited Findings
**Special personal information (s26–27)**
- s26 prohibits processing special personal information, which includes information about a person's "health or sex life". s27(1)(a) lifts the prohibition where the data subject consents. Other s27 grounds (establishing legal rights, historical/statistical/research purposes with safeguards, information deliberately made public, Regulator authorisation under s27(2)) are of little use to a consumer app. **[statute, from knowledge; verify text]** — [POPIA, gov.za](https://www.gov.za/documents/protection-personal-information-act)
- Health information may be processed only where s27 permits. Health data may be used only for the specific purposes listed, and secondary uses (marketing, AI training, research) need fresh justification or consent. — [Fasken, Apr 2026](https://www.fasken.com/en/knowledge/2026/04/health-data-under-the-microscope-new-popia-regulations); [MJK Inc – health information](https://mjkinc.co.za/popia/health-information)
- s32 gives sector-specific authorisations (insurers, medical schemes, administrators, pension funds, employers). A general consumer health app does not obviously fall within s32, so s27 consent is the likely basis. — [Search synthesis of Bowmans/Mondaq commentary](https://bowmanslaw.com/insights/draft-popia-regulations-released-for-comment/); [Mondaq](https://www.mondaq.com/southafrica/healthcare/1516004/draft-regulations-on-processing-health-and-sex-life-data-under-popia)
- **Health Information Regulations 2026:** "Regulations Relating to the Processing of Data Subjects' Health Information by Certain Responsible Parties, 2026" were published in Government Gazette No. 54268 on 6 March 2026 and took effect the same day. They target listed categories (insurers, medical schemes, pension funds, employers, etc.). Bowmans says the final form "largely reflect[s] the existing POPIA framework" and drops the draft's dual s32 plus s11 requirement. — [Acts Online](https://acts.co.za/news/blog/2026/03/popia-health-information-regulations-2025); [Bowmans](https://bowmanslaw.com/insights/south-africa-popia-health-information-regulations-cross-the-finish-line/); [Moonstone](https://www.moonstone.co.za/new-popia-regulations-on-health-information-now-in-force/)
- Health has reportedly been named one of the Regulator's priority sectors for 2026/27 assessments. This rests on a single, lower-quality source. — [Metatrans](https://metatrans-corp.pages.dev/insights/popia/popia-regulator-health-priority-employers/)
- "Consent" under s1 means a voluntary, specific and informed expression of will. Under s11(2)(b) the responsible party bears the burden of proof, and under s11(2)(b)/(4) consent can be withdrawn at any time. **[statute, from knowledge; verify text]** — [POPIA](https://www.gov.za/documents/protection-personal-information-act)

**Information Officer (s55–56) and registration**
- The head of a private body (the CEO/sole director of a Pty Ltd) is the Information Officer by default. The IO must be registered with the Information Regulator before taking up duties (s55(2)), and registration is done on the Regulator's eServices portal. A PAIA manual is also required under PAIA s51. The April 2025 amendments removed the PAIA-manual requirement from the POPIA Regulations, but it still applies under PAIA itself. **[IO registration duty: statute, from knowledge; verify]** — [POPIA](https://www.gov.za/documents/protection-personal-information-act); [Search synthesis of 2025 amendment commentary](https://bowmanslaw.com/insights/south-africa-popia-regulations-get-a-makeover-what-you-need-to-know/)

**Privacy notice contents (s18)**
- s18 requires the data subject to be told: what information is collected and its source; the name and address of the responsible party; the purpose; whether supply is voluntary or mandatory; the consequences of not supplying it; any law requiring collection; any intended cross-border transfer and the level of protection; the recipients; access and correction rights; the right to object; and the right to complain to the Information Regulator, with its contact details. **[statute, from knowledge; verify text]** — [POPIA](https://www.gov.za/documents/protection-personal-information-act)

**Cross-border transfers (s72) and prior authorisation (s57)**
- s72(1) permits transfers to a third party abroad only if: (a) the recipient is subject to a law, binding corporate rules or binding agreement giving adequate protection substantially similar to POPIA's conditions, including onward-transfer limits; (b) the data subject consents; (c) the transfer is necessary to perform a contract with the data subject; (d) the transfer is for the data subject's benefit and consent is impracticable; or (e) the transfer is necessary for a contract concluded in the data subject's interest. **[statute, from knowledge; verify text]** — [POPIA](https://www.gov.za/documents/protection-personal-information-act)
- When special personal information leaves the Republic, one commentator says s72 must still be satisfied *or* Regulator approval obtained under s57. s57(1)(d) prior authorisation covers transferring special personal information to a foreign country without adequate protection. — [Search synthesis citing commentary](https://captaincompliance.com/education/south-africas-popia-health-data-rules/) (lower-quality source; s57 point is statute-based)
- No source found that specifically addresses US AI providers (OpenAI/Anthropic APIs) under POPIA. — (gap; see below)

**Direct marketing (s69) and the April 2025 Regulation amendments**
- Amended POPIA Regulations were published on 17 April 2025 (GG 52523, GoN 6126) and took effect immediately. — [Acts Online](https://www.acts.co.za/popia-regulation-amended-regs-gg52523-gon6126-2025/); [Bowmans](https://bowmanslaw.com/insights/south-africa-popia-regulations-get-a-makeover-what-you-need-to-know/)
- For direct marketing by unsolicited electronic communication, "opt-out shall not constitute consent". Consent may use Form 4 "or a form substantially similar". Consent requests must name the goods or services and the communication method. Telephonic consent must be recorded and provided on request. — [Cliffe Dekker Hofmeyr](https://www.cliffedekkerhofmeyr.com/en/news/publications/2025/Sectors/Technology-Communications/Technology-and-Communications-Alert-21-May-Important-POPIA-amendments-to-note); [GoLegal](https://www.golegal.co.za/amendments-popia-regulations/); [Baker McKenzie](https://insightplus.bakermckenzie.com/bm/data-technology/south-africa-amendments-to-the-popia-regulations-key-changes-you-need-to-know)
- s69(3) existing-customer exception: a business may market its own similar products to a customer whose details it obtained in a sale, provided the customer had an opportunity to object at collection and in every message. Every message must include sender identity and an opt-out address. **[statute, from knowledge; verify text]** — [POPIA](https://www.gov.za/documents/protection-personal-information-act)
- Consents validly obtained before the amendment are reportedly not invalidated. — [Bowmans (via search synthesis)](https://bowmanslaw.com/insights/south-africa-popia-regulations-get-a-makeover-what-you-need-to-know/)

**Breach notification (s22) and eServices portal**
- From 1 April 2025, security-compromise notifications must be submitted via the Information Regulator's eServices portal. The old SCN1 form is superseded, and the Regulator treats non-portal notifications as non-compliant. An August 2025 fact sheet confirms that all reports go through the portal. — [Michalsons](https://www.michalsons.com/blog/guideline-notification-of-security-compromises-to-the-information-regulator/58993); [ITWeb](https://itweb.co.za/article/inforeg-takes-data-breach-reporting-online/Pero3qZ38GdvQb6m); [Acts Online fact sheet](https://www.acts.co.za/popia-fact-sheet-handling-security-compromises-2025/)
- The statutory timing is "as soon as reasonably possible" after discovery. The Regulator's guidance says to report on the information at hand and update later. A "72 hours" figure appears only in a training resource, not in the Act. Data subjects must be notified in writing by email, post, website or media notice. — [MJK Inc – data breaches](https://mjkinc.co.za/popia/data-breaches); [Juta training doc](https://cms.juta.co.za/documents/121/Issue_no_59_POPIA_Awareness_Training_Level_6.pdf)

**Children (s34–35)**
- A "child" is under 18. Processing a child's personal information is prohibited unless an s35 exception applies, mainly the prior consent of a "competent person" (parent or guardian). **[statute, from knowledge; verify text]** — [POPIA](https://www.gov.za/documents/protection-personal-information-act)

**Operators (s20–21)**
- Operators (Azure, AI API vendors, email/analytics vendors) may process only with the responsible party's knowledge or authorisation and must treat the data as confidential (s20). The responsible party must have a written contract ensuring the operator maintains s19 security measures, and the operator must notify the responsible party immediately of any breach (s21). **[statute, from knowledge; verify text]** — [POPIA](https://www.gov.za/documents/protection-personal-information-act)

### Inferences
- **Practical checklist:** (1) Register the IO and any deputy IOs on eServices and publish a PAIA manual. (2) Use a separate, unbundled, express consent screen for health data (weight, body measurements, menstrual cycle, health conditions), distinct from accepting the T&Cs, with consent records kept. (3) Add a separate opt-in for marketing, using no pre-ticked boxes. (4) Treat menstrual data as a separate optional toggle with its own consent. (5) Map transfers to Azure regions and AI providers. Prefer the Azure South Africa North region for primary storage, and rely on s72(1)(a) contractual protections (DPAs / SCC-style clauses) *plus* s72(1)(b) consent disclosed in the privacy notice. (6) Ensure AI vendor contracts prohibit training on customer data (zero-retention where available). (7) Age-gate to 18+ unless a parental-consent flow is built. (8) Keep a breach-response runbook that includes eServices portal reporting.
- Whether the 2026 Health Information Regulations apply to a consumer nutrition app turns on the "certain responsible parties" list. Most commentary suggests they target insurers, schemes and employers, but this needs a lawyer's confirmation against GG 54268.
- Whether sending special personal information to US AI APIs requires s57 prior authorisation is the single biggest POPIA question for a lawyer. If the transfer is to a country without adequate protection and rests only on contract or consent, prior authorisation may be needed. Minimising and pseudonymising what goes to the LLM, for example sending no names and only aggregated stats, reduces the risk.

### Gaps
- Could not fetch the POPIA section texts directly (popia.co.za blocked in sandbox). The statutory paraphrases above should be verified.
- No Information Regulator guidance or enforcement found that is specific to AI/LLM API transfers or to fitness/health apps.
- The exact list of responsible parties in the 2026 Health Information Regulations was not confirmed.
- No POPIA Amendment *Act* was found for 2024–2026. The changes found are Regulation amendments (2025) and the Health Information Regulations (2026).

---

## 2. Consumer Protection Act (CPA)

### Takeaway
The CPA applies to digital subscription services sold to natural persons and small juristic persons in SA. The key rules: s14 lets consumers cancel fixed-term agreements on 20 business days' notice, subject only to a *reasonable* penalty under Regulation 5. Tribunal precedent against Vodacom shows aggressive penalties and refusing cancellation are unlawful. Plain-language (s22), notice of risky terms (s49) and the s51 prohibited terms (no exclusion of liability for gross negligence) apply to the app's T&Cs.

### Cited Findings
- s14 lets a consumer cancel a fixed-term agreement without penalty at expiry, or at any time on 20 business days' written or recorded notice. The supplier may charge a reasonable cancellation penalty (s14(3)(b)(i)). Regulation 5(2) lists the reasonableness factors, and Reg 5(3) bars penalties that negate the right to cancel. — [Daily Maverick](https://www.dailymaverick.co.za/article/2023-10-18-tribunal-schools-vodacom-in-consumer-rights-over-its-contract-cancellation-penalties.md); [Polity](https://www.polity.org.za/article/vodacom-guilty-of-contravening-several-sections-of-the-consumer-protection-act-2023-10-18)
- s14(2)(c): the supplier must notify the consumer in writing between 80 and 40 business days before a fixed-term agreement expires, including the changes that will apply on renewal and the options available. — [Search synthesis of Werksmans/news](https://werksmans.com/from-locked-in-to-knocked-out-vodacoms-million-rand-fine-by-consumer-watchdog-and-what-it-means-for-individuals-and-businesses/page/5/)
- **Enforcement precedent:** In 2023 the National Consumer Tribunal found Vodacom breached s14 with a 75% cancellation penalty. It held that a supplier may not prevent cancellation because of arrears or a refusal to pay a penalty. One law firm reports an administrative fine of R1 million, and Vodacom reportedly moved to a one-month-fee penalty. — [Daily Maverick](https://www.dailymaverick.co.za/article/2023-10-18-tribunal-schools-vodacom-in-consumer-rights-over-its-contract-cancellation-penalties.md); [Athlone News](https://athlonenews.co.za/news/south-africa/kwazulu-natal/2023-10-18-guilty-vodacom-in-trouble-for-failing-to-cancel-contracts-selling-non-existing-data-bundles); [Werksmans](https://werksmans.com/from-locked-in-to-knocked-out-vodacoms-million-rand-fine-by-consumer-watchdog-and-what-it-means-for-individuals-and-businesses/page/5/)
- s14 does not apply where the consumer is a juristic person, regardless of turnover. Fixed-term agreements may not exceed 24 months (Reg 5(1)) unless there's a demonstrable financial benefit to the consumer. **[from knowledge; verify]** — [CPA, gov.za](https://www.gov.za/documents/consumer-protection-act)
- s16 (direct-marketing cooling-off) does not apply where ECTA s44 applies to the transaction. — [Search synthesis citing Vandeventers](https://vandeventers.law/legal-articles/entryid/2737/cpa-the-cooling-off-period-in-south-africa)
- **Application to digital subscriptions:** The CPA defines "service" broadly to include the provision of information, advice or consultation and access to electronic communications infrastructure, and it applies to transactions in the ordinary course of business in SA. A paid app subscription is therefore within scope. Annual turnover/asset threshold for juristic consumers: R2 million. **[statute, from knowledge; verify text]** — [CPA](https://www.gov.za/documents/consumer-protection-act)
- **Unfair terms (s48–52):** s48 bars unfair, unreasonable or unjust terms. s49 requires terms that limit supplier liability, assume risk, impose obligations or indemnify the supplier, and any activity with "unusual" risk or risk that could cause serious injury or death, to be drawn to the consumer's attention conspicuously and in plain language. The consumer must have an adequate opportunity to understand them before entering the agreement, with "assent" (e.g. initials or a tick box). s51(1)(c) voids terms that purport to limit or exempt the supplier from liability for loss caused by gross negligence. s52 gives courts powers to remedy unfair terms. **[statute, from knowledge; verify text]** — [CPA](https://www.gov.za/documents/consumer-protection-act)
- **Plain language (s22):** notices, documents and visual representations must be in plain language, meaning an ordinary consumer with average literacy and minimal experience could understand them. **[from knowledge; verify]** — [CPA](https://www.gov.za/documents/consumer-protection-act)
- **Product liability (s61):** strict liability applies to "goods". Its application to pure software/services is uncertain. s54 requires services of a quality persons are generally entitled to expect. **[from knowledge; verify]** — [CPA](https://www.gov.za/documents/consumer-protection-act)
- Regulators: the **National Consumer Commission** (thencc.org.za) investigates, and the **National Consumer Tribunal** adjudicates and can fine up to the greater of 10% of annual turnover or R1 million (s112). **[from knowledge; verify]** — [CPA](https://www.gov.za/documents/consumer-protection-act)

### Inferences
- Monthly rolling subscriptions (not fixed-term) avoid most s14 complexity. If an annual plan is offered, allow cancellation on 20 business days' notice with a modest penalty (e.g. no more than one month's fee, or a pro-rata refund minus the discount benefit). Send the 80–40 business-day renewal notice, and never block cancellation for arrears.
- Health/diet-risk disclaimers ("consult a doctor if pregnant, diabetic, history of eating disorders...") are classic s49 risk notices. They must be conspicuous and actively acknowledged during onboarding, not buried in the T&Cs. Liability caps cannot exclude gross negligence.

### Gaps
- Regulation 5(2) factor list not fetched verbatim.
- No NCC/Tribunal decisions found specific to apps, gyms-as-apps, or digital fitness subscriptions. Gym-contract matters exist but were not researched in depth.

---

## 3. ECTA (Electronic Communications and Transactions Act 25 of 2002)

### Takeaway
An online subscription seller must make the s43(1) disclosures on its website. Consumers have a 7-day cooling-off right under s44, which for services runs from conclusion of the agreement and comes with a 30-day refund. s45 requires an opt-out in unsolicited commercial communications, but POPIA s69 now governs consent and is stricter.

### Cited Findings
- Chapter VII (consumer protection) applies only to electronic transactions. s42(2) excludes certain transactions from s44 only. These include financial services, auctions, made-to-order or perishable goods, **services which began with the consumer's consent before the end of the cooling-off period**, and date-specific accommodation/transport/leisure bookings. s43 disclosures still apply to excluded categories. — [Search synthesis citing MJK Inc / Michalsons](https://mjkinc.co.za/compliance/ecommerce-ecta); [Michalsons](https://www.michalsons.com/blog/consumer-protection-provisions-of-the-ect-act/2380)
- s44: cooling-off of 7 days, from receipt for goods and from conclusion of the agreement for services. No reason is needed, the only permitted charge is the direct cost of returning goods, and refunds are due within 30 days. — [MJK Inc](https://mjkinc.co.za/compliance/consumer-protection-act/cooling-off-and-cancellation); [Vandeventers](https://vandeventers.law/legal-articles/entryid/2737/cpa-the-cooling-off-period-in-south-africa)
- s43(1) required website disclosures: full name and legal status; physical address and telephone; website and email; any self-regulatory or accreditation bodies and their codes; registration number, directors' names and place of registration; physical address for service of legal documents; a sufficient description of the main characteristics of the goods or services; the full price including transport costs, taxes and other fees; the payment method; any terms of agreement, including guarantees, and how to access, store and reproduce them; the time within which goods will be dispatched or services rendered; how to review the transaction and correct errors before placing the order; the return/exchange/refund policy; any alternative dispute resolution code; the security procedures and privacy policy; the minimum duration of the agreement for continuous supply; and the consumer's rights under s44 where applicable. s43(2) gives the consumer a chance to review the entire transaction, correct mistakes and withdraw before placing the order. s43(3) lets the consumer cancel within 14 days if the supplier fails to comply. s43(5) requires a secure payment system. **[statute, from knowledge; verify text]** — [ECTA, gov.za](https://www.gov.za/documents/electronic-communications-and-transactions-act)
- s45: anyone sending unsolicited commercial communications must offer an opt-out and, on request, identify the source of the consumer's personal information. Sending further messages after an opt-out is an offence. **[statute, from knowledge; verify]** — [ECTA](https://www.gov.za/documents/electronic-communications-and-transactions-act)
- s48: Chapter VII protections cannot be excluded by agreement. **[from knowledge; verify]** — [ECTA](https://www.gov.za/documents/electronic-communications-and-transactions-act)

### Inferences
- The s42(2) exclusion for "services which began with the consumer's consent" before the cooling-off ends *may* let the app avoid s44 refunds where the user starts using a paid plan immediately. This needs an explicit checkout acknowledgment and is a lawyer question. A simpler, safer approach is to offer a 7-day refund on first payment, which also helps with app-store-like expectations.
- Put a "Legal / Company information" page in the footer and the app that covers every s43(1) item.

### Gaps
- Could not fetch ECTA text to verify the s43(1) list verbatim. The ECTA Amendment Bill status was not researched.

---

## 4. Health professions (HPCSA) and medical device (SAHPRA) boundaries

### Takeaway
"Dietitian" and "nutritionist" are HPCSA-registered categories under the Professional Board for Dietetics and Nutrition, so non-registered coaches must not use those titles or claim HPCSA registration. The 1991 dietetics scope regulations (R891) were replaced in 2024. The legal line between general wellness/fitness nutrition coaching and the reserved practice of dietetics (especially medical nutrition therapy for disease) is not clearly defined in any source found, so it needs a lawyer or HPCSA opinion. SAHPRA has no SaMD-specific wellness guidance. A calorie/macro app with general wellness claims is unlikely to be a medical device, but disease or treatment claims (e.g. diabetes, PCOS management) could pull it into Act 101.

### Cited Findings
- Only persons registered with the HPCSA under the Professional Board for Dietetics and Nutrition may call themselves dietitians or nutritionists (partner/sponsored content, so treat as secondary). — [News24 brand story](https://www.news24.com/brandstory/partner-content/understanding-registered-dietitians-and-nutritionists-in-south-africa-20250402); [Business Report](https://businessreport.co.za/news/partnered/2024-01-01-understanding-registered-dietitians-and-nutritionists-in-south-africa)
- Falsely claiming HPCSA registration or using a protected title one is not entitled to is a criminal offence. — [HPCSA (Wikipedia summary)](https://Www.Wikipedia.org/wiki/South_African_Medical_and_Dental_Council). Relevant Act provisions are s17 (registration required to practise), s39 and s40 (offences); **[section numbers from knowledge; verify]** — [Health Professions Act](https://www.gov.za/documents/health-professions-act-16-mar-2015-1124)
- HPCSA's Jan 2024 Dietitian Scope of Practice says dietitians confine themselves to "medical nutrition therapy, community nutrition and food service administration". — [HPCSA DT Scope of Practice Jan 2024](https://www.hpcsa.co.za/Content/upload/professional_boards/dnb/guidelines/DT_SCOPE_OF_PRACTICE_January_2024.pdf)
- The Regulations Defining the Scope of the Profession of Dietetics (GN R891, 26 April 1991) were repealed and replaced by the "Regulations Defining the Scope of the Profession of Dietitians" (2024). The repeal clause references Regulation Gazette 50164 of 23 February 2024. — [Acts Online mirror](https://www.acts.co.za/health/n2985_3__repeal.php); [gov.za notice](https://www.gov.za/documents/notices/health-professions-act-regulations-defining-scope-profession-dietitians-28-jun)
- HPCSA published draft rules for dietitians and nutritionists for comment; contents and status not found. In August 2025 the DNB stated that no organisational policy may override the legislated scope of practice. — [HPCSA blog](https://www.hpcsa-blogs.co.za/new-draft-dietitians-and-nutritionists-rules-published-for-comment/)
- **SAHPRA:** Medical devices are regulated under the Medicines and Related Substances Act 101 of 1965 (s1 "medical device" definition and the General Regulations). SAHPRA's classification guideline SAHPGL-MD-04 v3 (8 March 2023) treats software meeting the device definition as an active device. SAHPRA has final authority on classification. — [SAHPRA SAHPGL-MD-04 v3](https://www.sahpra.org.za/wp-content/uploads/2023/03/SAHPGL-MD-04-v3-Guideline-for-Classification-of-Medical-Devices-and-IVDs.pdf); [RegDesk summary](https://www.regdesk.co/blog/sahpra-guidance-on-medical-device-classification/)
- Device establishments need a SAHPRA licence. Product registration is reportedly being phased in, and a reliance guideline SAHPGL-MD-22 was reportedly published in February 2026 (single commercial source). — [meddeviceguide.com](https://meddeviceguide.com/blog/south-africa-sahpra-medical-device-registration-guide); [CMS Expert Guide](https://cms.law/en/int/expert-guides/cms-expert-guide-to-digital-health-apps-and-telemedicine/south-africa)
- Foreign analogues (not binding in SA): the FDA, MHRA and TGA treat general wellness/fitness apps as non-devices, while claims to prevent, treat or alleviate disease indicate a medical purpose, and disclaimers do not override such claims. — [TGA](https://www.tga.gov.au/resources/consumer-information-and-resources/software-based-medical-devices-consumers); [Bristows](https://www.bristows.com/app/uploads/2017/08/The-use-of-mobile-apps-and-software-healthcare-NHS.pdf)

### Inferences
- Position the product as general wellness / fitness nutrition (body composition, performance, healthy weight). Avoid diagnosis, "treat/manage [disease]" claims, therapeutic diets for medical conditions, and anything called a "meal prescription".
- Human coaches who are not HPCSA-registered should be titled "coach" (e.g. "nutrition coach", "macro coach"; even "nutrition coach" carries some title-confusion risk, so get a lawyer's view). Their profiles must not imply HPCSA registration. Build in red-flag screening (pregnancy, diabetes, kidney disease, eating-disorder history, under-18) that routes users to a registered dietitian or doctor. Marketplace listings for registered dietitians should verify HPCSA numbers through the public iRegister.
- The AI coach should carry system-level guardrails against medical advice and the same referral triggers.

### Gaps
- Full text of the 2024 dietitians scope regulations not obtained. Whether "advising on diet" for healthy persons is reserved to dietitians is unresolved, so an HPCSA/lawyer opinion is needed.
- No SAHPRA SaMD or wellness-app guidance found. No SA enforcement against a nutrition app or coach found.

---

## 5. Advertising (ARB) and foodstuffs rules

### Takeaway
The Advertising Regulatory Board (ARB) Code of Advertising Practice requires substantiation. Its Appendix E deals with slimming, and ARB rulings have struck down unsubstantiated weight-loss claims (Future Life, USN, Herbex). Before/after images and testimonials must be genuine, typical and substantiable. CPA s41 (false/misleading representations) applies alongside the ARB code.

### Cited Findings
- ARB Code Appendix E (slimming): dieting aids may not be advertised unless it is made pertinently clear they are effective only within a kilojoule-restricted, balanced diet. A complaint challenged a before/after testimonial photo found widely online as not legitimate. — [ARB-related ruling (via quackdown)](https://quackdown.simhub.online/quackdown/responses/93/index.html)
- The ARB ruled weight-management claims for a Future Life shake unsubstantiated, advised members not to accept USN Phedrocut weight-loss ads, and pulled a Herbex Ultraslim ad (2020). "Before" and "after" claims must be capable of substantiation. — [ARB USN document](https://arb.org.za/assets/usn---dr-harris-steinman.pdf); [TimesLive](https://www.timeslive.co.za/news/consumer-live/2020-11-11-herbex-vetoed-by-ad-watchdog-over-slimming-pills/); [MarketScreener/Tiger Brands](https://www.marketscreener.com/quote/stock/TIGER-BRANDS-LIMITED-1413421/news/Tiger-Brands-Eat-Your-Way-To-Beautiful-32907126/)
- UK analogue (persuasive only): before/after images are treated like testimonials and must not exaggerate. Weight loss above about 1 kg/week is unlikely to be compatible with good medical practice. — [ASA CAP Code weight control](https://www.asa.org.uk/static/9179468d-462c-4f19-bef59754659eb5f2/6a5cdb1b-e852-40be-84adf46245985de0/The-CAP-Code-Weight-control-and-slimming.pdf)
- CPA s41 prohibits false, misleading or deceptive representations, and s29 covers general marketing standards. **[from knowledge; verify]** — [CPA](https://www.gov.za/documents/consumer-protection-act)

### Inferences
- An app (a service, not a "dieting aid" product) may fall outside the strict letter of Appendix E, but the ARB applies the substantiation and testimonial clauses to all ads. Avoid "lose X kg in Y weeks". Use "results not typical" style qualifiers, keep signed consent from testimonial subjects (a POPIA consent for health info and images too), and do not use stock or borrowed before/after photos.
- Foodstuffs labelling regulations (R146 and the draft R3337 under the Foodstuffs, Cosmetics and Disinfectants Act) regulate food labels and advertising of foodstuffs. They are relevant only if the business sells or co-brands food or supplements, not for a pure app. **[from knowledge; verify]**

### Gaps
- Current ARB Appendix E text not retrieved. ARB jurisdiction over non-members applies only by submission, so this needs a check on the ARB site.

---

## 6. Business setup: CIPC, SARS, VAT, payments

### Takeaway
Incorporate a Pty Ltd with CIPC, which registers the company with SARS for income tax automatically. Company income tax is 27%. Since 1 April 2026 the compulsory VAT registration threshold is R2.3 million in taxable supplies per 12 months (up from R1 million), and the voluntary threshold is R120,000. For local direct web subscriptions, PayFast (recurring billing/tokenisation) and Paystack (Stripe-owned) both support SA merchants. Stripe itself has no confirmed direct SA merchant launch.

### Cited Findings
- SARS Budget 2026 FAQ: the compulsory VAT threshold rises to R2.3 million (from R1 million) and the voluntary threshold to R120,000 (from R50,000), from 1 April 2026. The VAT rate is unchanged at 15%. The implementing Rates Bill was still in draft (comments closed 26 June 2026), but SARS applies the new figures from 1 April 2026. — [SARS Budget 2026 FAQ](https://www.sars.gov.za/about/sars-tax-and-customs-system/budget/budget-2026-frequently-asked-questions/); [Cliffe Dekker Hofmeyr](https://www.cliffedekkerhofmeyr.com/news/publications/2026/South-Africa/Tax-Exchange-Control/Tax-and-Exchange-Control-25-February-2026-Budget-summary-VAT); [Forvis Mazars](https://www.forvismazars.com/za/en/services/tax/tax-insights/why-small-businesses-are-breathing-again)
- **Conflict note:** SARS's VAT-REG-02-G02 guide for foreign electronic-services suppliers (Oct 2025) still shows R1 million. Secondary sources say the foreign e-services threshold also moved to R2.3 million from April 2026, but this is unconfirmed on the primary page. — [SARS VAT-REG-02-G02](https://www.sars.gov.za/vat-reg-02-g02-supply-of-electronic-services-by-foreign-suppliers-and-foreign-intermediaries-external-guide/)
- From 1 April 2025, foreign e-services suppliers supplying only B2B to SA VAT vendors are excluded from the e-services regime. — [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/vat-for-foreign-companies)
- PayFast recurring billing supports subscription and ad-hoc tokenised payments, in ZAR only. Paystack, owned by Stripe, launched in SA in 2021 and supports subscriptions. No evidence was found of Stripe launching direct SA merchant accounts. — [PayFast blog](https://payfast.io/blog/launching-payfast-recurring-billing); [TechCentral](https://techcentral.co.za/stripe-owned-nigerian-fintech-paystack-is-launching-in-south-africa/107023/); [ZATech wiki](https://zatech-wiki.pages.dev/blog/payment-providers-in-south-africa)

### Inferences
- An SA Pty Ltd selling to SA consumers is a local supplier. VAT becomes compulsory once taxable supplies exceed R2.3m in 12 months, and voluntary registration is possible above R120k. If sold through Apple/Google app stores, those platforms act as the foreign e-services supplier/intermediary and account for VAT on their sales, which should be confirmed with a tax adviser.
- Also needed: B-BBEE affidavit (EME, turnover below R10m) for procurement only; annual CIPC returns; beneficial ownership filing with CIPC; and PAYE/UIF/SDL registration once staff are employed. **[from knowledge; verify]**

### Gaps
- Corporate income tax rate (27%) and the small business corporation regime were not verified in this session.
- Peach Payments subscription features were not researched.

---

## 7. SA case law / enforcement relevant to fitness/health apps

### Takeaway
No SA case or regulator action specifically about a fitness/nutrition app was found. The closest precedents are the Vodacom CPA s14 cancellation-penalty ruling (2023), ARB slimming-ad rulings (Herbex, USN, Future Life), and the Information Regulator's active breach enforcement and portal reporting.

### Cited Findings
- Vodacom: National Consumer Tribunal, 2023, CPA s14 / Reg 5 cancellation penalties. — [Daily Maverick](https://www.dailymaverick.co.za/article/2023-10-18-tribunal-schools-vodacom-in-consumer-rights-over-its-contract-cancellation-penalties.md)
- ARB slimming rulings (Herbex 2020; USN Phedrocut; Future Life). — [TimesLive](https://www.timeslive.co.za/news/consumer-live/2020-11-11-herbex-vetoed-by-ad-watchdog-over-slimming-pills/); [ARB](https://arb.org.za/assets/usn---dr-harris-steinman.pdf)
- Information Regulator breach-enforcement lessons (e.g. earlier enforcement notices). — [Cliffe Dekker Hofmeyr 2021](https://www.cliffedekkerhofmeyr.com/en/news/publications/2021/technology/technology-and-communications-alert-11-october-if-it-happened-to-them-it-could-happen-to-you-Lessons-from-the-Information-Regulator.html)

### Inferences
- Regulators are active on subscription-exit friction (NCC), weight-loss claims (ARB) and data breaches/health data (Information Regulator, with health a reported 2026/27 priority).

### Gaps
- No SA enforcement found that targets fitness/nutrition apps, AI coaches, or menstrual-tracking data specifically.

---

## Points to escalate to an SA lawyer (summary)
1. Whether s57 prior authorisation is needed to send special personal (health/menstrual) information to US AI providers or offshore Azure regions, and the adequacy of s72 contractual safeguards.
2. Whether the 2026 Health Information Regulations (GG 54268) cover a consumer nutrition app.
3. Where the line falls between lawful non-registered "nutrition coaching" and reserved dietetics acts under the 2024 Dietitians scope regulations, and whether "nutrition coach" is a safe title.
4. Whether the ECTA s42(2) "services began with consent" exclusion validly removes the 7-day cooling-off for immediately-used subscriptions.
5. The CPA s14 penalty structure for annual plans, and the wording of s49 risk notices and s51-compliant liability caps.
6. Whether the VAT threshold for app-store versus direct sales applies under the 2026 changes.
