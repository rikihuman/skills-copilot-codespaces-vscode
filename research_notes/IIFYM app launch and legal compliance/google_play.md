# Google Play Launch Requirements for a Subscription Nutrition/Macro Coaching App (SA-based developer)

Research date: 2026-11-08. IMPORTANT METHOD NOTE: support.google.com could not be fetched directly in this session (network-blocked), so Google Help Center content below comes from search-result snippets of official pages, plus a full fetch of developer.android.com. Exact policy wording should be re-checked on the live Policy Center before launch. Items flagged "UNVERIFIED" come only from third-party sources.

## Developer account: personal vs organization, D-U-N-S, verification, fees, closed testing, Android developer verification, SA payouts/VAT, service fees

### Takeaway
An organization account (needs a D-U-N-S number; one-time US$25) avoids the "12 testers for 14 days" closed-test gate that applies to new personal accounts and looks more credible for a health app. Subscriptions now carry a combined ~15% fee (10% service + 5% billing in markets where the new 2026 structure has rolled out; SA is scheduled for the rest-of-world rollout by 30 Sep 2027). South Africa is a supported merchant country and is on the user choice billing list. How SA VAT is handled could not be confirmed from official sources.

### Cited Findings
- New personal accounts: "Before you can apply for production access, you must run a closed test with at least 12 opted-in testers for 14 days." — [Google Play Console Help, answer 14151465](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en-GB)
- The rule applies to personal accounts created after ~13 Nov 2023 (one source says 1 Nov 2023). Organization accounts are exempt. Testers must stay opted in for the last 14 days continuously. The Production and Pre-registration tracks stay locked until then. If the production access request is rejected, closed testing restarts. Budget about 3 weeks for a first launch. — [Choicely](https://www.choicely.com/blog/google-play-12-tester-rule); [ExtendsClass 2026](https://extendsclass.com/blog/google-plays-closed-testing-requirement-what-developers-need-to-know-in-2026); [DEV: 12-tester rule](https://dev.to/theionproject/the-12-tester-rule-that-quietly-adds-two-weeks-to-your-first-google-play-launch-4bp3); [DEV: rejected after 14 days](https://dev.to/testerscommunity/google-play-rejected-my-app-after-14-days-of-testing-here-is-what-i-did-wrong-3c21) (third-party; the 12/14 numbers match Google's page)
- Organization accounts need a D-U-N-S number. D&B processing can take up to 30 business days (an expedited paid option of about US$229 is reported at around 8 business days). The registration fee is a one-time US$25 and is not refunded if verification fails. Identity verification uses documents and OTP-verified contact details. — [Choicely org account tutorial](https://www.choicely.com/tutorials/how-to-create-a-google-play-developer-account-for-your-organization); [Capgo](https://capgo.app/blog/how-to-create-apple-developer-and-google-play-developer-accounts/) (third-party; UNVERIFIED for exact D-U-N-S timing and cost)
- Android developer verification: registration opened in March 2026. Enforcement for apps installed on certified devices starts 30 Sep 2026 in Brazil, Indonesia, Singapore and Thailand, with global expansion in 2027. The fee is US$25 one-time for a "Full Distribution" account. A free limited/hobbyist tier allows up to 20 devices without government ID. — [Android Developer Console Help: Understanding Android developer verification](https://support.google.com/android-developer-console/answer/16561738); [The Hacker News, Jun 2026](https://thehackernews.com/2026/06/google-sets-sept-30-deadline-for.html); [Android Authority timeline](https://www.androidauthority.com/android-sideloading-changes-timeline-3679204/); [GSMArena](https://gsmarena.com/google_android_developer_verification_app_sideloading_changes_timeline-news-73354.php)
- Developers must provide personal details and a D-U-N-S number (organizations) whether or not they distribute through Play. — [Biometric Update, Aug 2025](https://www.biometricupdate.com/202508/google-unveils-identity-verification-rules-for-android-app-developers)
- South African developers can set up a Google merchant account in the Play Console and sell apps without an overseas company. — [ITWeb](https://itweb.co.za/article/google-monetises-play-store-for-local-developers/RWnpNgq23zdvVrGd); [MakeGamesSA forum](https://makegamessa.com/discussion/5109/android-devs-in-south-africa-can-now-sell-their-apps-on-google-play)
- Google says Play sales where Google is seller of record "may be subject to VAT or equivalent". For the EU, Google deducts VAT from merchant payouts. No official statement on SA was found. SA levies 15% VAT on electronic services from non-resident suppliers. — [Google Play tax info](https://support.google.com/googleplay/answer/2850368); [Payments Center regional guidelines](https://support.google.com/paymentscenter/answer/7161449); [TechCentral: Google to enforce Play Store tax](https://techcentral.co.za/google-to-enforce-play-store-tax/177175/); [Dodo Payments (third-party)](https://dodopayments.com/tax/vat-south-africa)
- 2026 fee overhaul: auto-renewing subscriptions = 10% service fee + 5% billing fee (about 15% total), with no $1M threshold. Other IAP = 10% + 5% on the first US$1M, higher above that. The billing fee is 5% in the US, UK and EEA. Australia was due 30 Sep 2026; Japan and Korea by 31 Dec 2026; rest of world by 30 Sep 2027. — [Play Console Help answer 16954621](https://support.google.com/googleplay/android-developer/answer/16954621); [Play Console Help: service fees 112622](https://support.google.com/googleplay/android-developer/answer/112622?hl=en); [PhoneArena](https://www.phonearena.com/news/google-just-unveiled-a-play-store-billing-change-that-could-pay-off-for-you_id181364); [ppc.land](https://ppc.land/google-play-developers-face-25-percent-fee-under-new-structure/). Coverage conflicts on framing: some say subscriptions were "cut to 10%", others say 15% total.
- Before the 2026 change, subscriptions had been 15% from day one since Jan 2022. — [AppleInsider](https://appleinsider.com/articles/21/10/21/google-play-drops-all-subscription-commissions-to-15-from-day-one)

### Inferences
- For an SA developer, the legacy structure probably still applies until the rest-of-world rollout (subscriptions at 15%). Effective cost is about 15% either way.
- If the developer can get a D-U-N-S number (for example via a (Pty) Ltd registered with CIPC), an organization account removes the 14-day closed-test gate. It also shows a company as the seller of a health app, which matters for trust and for liability around coaching. Even so, a closed test is good practice.
- Android developer verification mostly matters for distribution outside Play. Being verified through the Play Console should cover Play distribution, but an SA-specific enforcement date was not found (expected 2027).

### Gaps
- Official SA VAT handling (whether Google collects and remits SA VAT on subscriptions and deducts it from payouts) could not be verified. Check Play Console > Payments profile > tax settings, or ask an SA tax advisor.
- The exact date the new 10%+5% fee structure reaches SA, and whether it applies before Sep 2027, is unconfirmed.
- Current D-U-N-S issuance times for South Africa (D&B SA) were not found.

## Health apps policy: Health apps declaration, Health Connect, sensitive data, medical claims and disclaimers, "Health Content and Services"

### Takeaway
Every app on any track must complete the Health apps declaration (Policy > App content). A macro/weight app falls under "Nutrition and weight management", and adding cycle data falls under "Period tracking". Each Health Connect data type needs a written justification, and the privacy policy must be identical in the Play listing and Health Connect. Non-medical-device health apps must carry the disclaimer "not a medical device and does not diagnose, treat, cure, or prevent any medical condition" in the store description.

### Cited Findings
- All developers with an app published on Google Play must complete the Health apps declaration, including closed, open and production tracks. System services and private apps are exempt. — [Play Console Help: Health apps declaration form 14738291](https://support.google.com/googleplay/android-developer/answer/14738291)
- Publishing steps for Health Connect apps: (1) review the User Data policy and the "Permissions and APIs that Access Sensitive Information" policy (including additional Health Connect requirements); (2) complete Data safety; (3) complete the Health apps declaration form. — [Android Developers: Publish your health app](https://developer.android.com/health-and-fitness/health-connect/publish)
- Health features in the declaration include, under Health and fitness: Activity and fitness; **Nutrition and weight management**; **Period tracking**; Sleep; Stress; Diseases and conditions management. Under Medical: Clinical decision support, Medical device apps, Reproductive and sexual health, and others. Data-type categories that need per-type explanations include Activity, Body composition, Energy, Nutrition, and Reproductive and sexual health. — [Android Developers: Publish your health app](https://developer.android.com/health-and-fitness/health-connect/publish)
- Request only the data types that support user-facing features, and justify each one in detail. The privacy policy on the Play listing must be the same one shown via the Health Connect privacy policy link. Refile the declaration when adding or removing data types. Access is allow-listed per package name, though declarations may be re-reviewed on new versions. A public app that never declared data types shows users a "can't access Health Connect" dialog. — [Android Developers: Publish your health app](https://developer.android.com/health-and-fitness/health-connect/publish)
- Health Connect data is "personal and sensitive user data" under the User Data policy, with additional requirements. — [Play Console Help 16555673](https://support.google.com/googleplay/android-developer/answer/16555673) (snippet)
- Health Connect technical permissions: by default, reads cover only 30 days before the first grant. Older data needs `PERMISSION_READ_HEALTH_DATA_HISTORY`. Background reads need `READ_HEALTH_DATA_IN_BACKGROUND`. Uninstalling revokes everything. — [Android Developers: Read data](https://developer.android.com/guide/health-and-fitness/health-connect/develop/read-data?authuser=2); [Android Developers Blog, Mar 2025](https://android-developers.googleblog.com/2025/03/health-connect-jetpack-sdk-now-in-beta.html); [Android Authority](https://androidauthority.com/health-connect-historical-background-reads-3443726)
- Health policy (Health Content and Services / Health and Medical Functionalities): bans misleading or harmful health functionality, and requires regulatory proof or a disclaimer for medical functionality. Non-medical-device health apps must include a clear disclaimer in the app description that the app is "not a medical device and does not diagnose, treat, cure, or prevent any medical condition." Bans misleading health claims that contradict medical consensus. Apps that are not primarily health apps but access health data are still in scope. — [Play Console Help: Health Content and Services 16679511](https://support.google.com/googleplay/android-developer/answer/16679511?hl=en) (snippet); [Reclaim The Net](https://reclaimthenet.org/google-play-bans-misleading-health-claims/)
- A policy preview updates Health and Medical Functionalities to incorporate EU MDCG guidance for medical-device apps. No effective date was found. — [Play Console Help: Policy preview 13996823](https://support.google.com/googleplay/android-developer/answer/13996823)
- Developer report: Health Connect submissions are rejected if Health Connect data use is not mentioned in the privacy policy. One "excessive permissions" rejection was fixed by adding detailed justifications. — [Reddit snapshot (anecdotal)](https://reddit.sentinel-team.org/posts/1u3btrt/snapshots/2026-06-12T18%3A48%3A57.191364Z); [Terra API FAQ](https://docs.tryterra.co/faq/help-topics/connecting/realtime-ble-and-mobile-delivery/app-store-health-permission-rejection)

### Inferences
- Adaptive calorie targets plus an AI coach should be framed as general wellness and nutrition guidance, not diagnosis or treatment. Avoid wording like "treats PCOS", "reverses diabetes" or "clinically proven" unless substantiated. Add the exact disclaimer to the full description and in-app (for example in coach chat and onboarding).
- Declaring Period tracking and requesting reproductive-health data types raises scrutiny. Make cycle features opt-in, request those Health Connect types only if the feature uses them, and spell this out in the privacy policy.
- Human coaches who advise on medical conditions (for example eating disorders or diabetes) could push the app toward "Healthcare services" or medical declarations. Keep their scope in wellness, or add credentials and disclaimers.

### Gaps
- The full verbatim text of the current Health Content and Services policy (16679511) and the Health Connect section of the Permissions policy (9888170) could not be fetched. Specific rules on menstrual data (for example a ban on ads or sale) were not confirmed from Google text.
- No official Google statement was found on AI-coach health advice specifically.

## Data safety, privacy policy, account deletion

### Takeaway
Data safety must accurately declare health and fitness data (including any sent to an AI/LLM provider or human coaches). A privacy policy link is required in Console, in-app, and identical to the one shown in Health Connect. Account deletion must be available both inside the app and via a working web URL entered in Console. Wrong data-deletion answers cause rejected submissions.

### Cited Findings
- Data safety section must be completed, including the health info data types. — [Android Developers: Publish your health app](https://developer.android.com/health-and-fitness/health-connect/publish), linking [Play Console Help 10787469](https://support.google.com/googleplay/android-developer/answer/10787469)
- Apps that allow account creation must let users request account deletion in-app and through a web resource. The in-app path can be a link to the web resource. The web link must load without error, reference the app or developer name, and be easy to find. It is entered in a Console field. Answers to the data deletion questions in Data safety are mandatory: "if there are issues with your answers… new submissions and app updates will be rejected." This holds even if some features don't need an account. — [Play Console Help: app-account deletion requirements 13327111](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en-GB); [Android Developers Blog, Apr 2023](https://android-developers.googleblog.com/2023/04/giving-people-more-control-over-their-data.html?hl=en)
- Health apps must post their privacy policy on the Play store page, and it must match the Health Connect privacy link. — [Android Developers: Publish](https://developer.android.com/health-and-fitness/health-connect/publish)

### Inferences
- Coach-chat logs, photos, body measurements and cycle data shared with a human coach or an LLM API are likely "shared" or "collected" data that must be declared. Service-provider exemptions may apply to processors, but declare cautiously.
- Deleting an account should also cover data received from Health Connect and stored server-side.

### Gaps
- The exact current Data safety rules on "sharing" with AI processors were not verified.

## Payments: Play Billing for subscriptions, disclosures, trials, coaching/external payments, user choice billing in SA

### Takeaway
Digital subscriptions (app features, AI coach, in-app human coaching chat) must use Google Play Billing, or Google's user choice billing program, which South Africa is on. Fitness subscriptions are explicitly listed as needing Play Billing. The "physical services" exemption (gym memberships, transport) unlikely covers remote coaching delivered in-app. Trial and renewal terms must be clearly disclosed.

### Cited Findings
- Play Billing is required for digital goods and services, including "subscription services (such as fitness, game, dating, education, music, video…)". Play Billing is not used for "physical services (such as transportation services, airfare, gym memberships, or food delivery)". — [Play Payments policy page](https://play.google.com/about/monetization-ads/payments); [Play Console Help 9858738](https://support.google.com/googleplay/android-developer/answer/9858738)
- Subscriptions policy: clearly disclose trial or intro length, price, the automatic conversion to paid, and how to cancel. Developers must notify users of changes to subscription, cancellation and refund policies. — [Play Console Help: Subscriptions 9900533](https://support.google.com/googleplay/android-developer/answer/9900533); [Android Developers Blog, Apr 2020](https://android-developers.googleblog.com/2020/04/building-user-trust-through-more.html?hl=tr)
- UNVERIFIED (secondary): users must be able to cancel without contacting support. — [9to5Google](https://9to5google.com/2020/04/16/google-play-subscriptions/)
- User choice billing is available to users in South Africa (along with the EEA, Australia, Brazil, India, Indonesia, Japan, South Korea and the US). It was expanded to the US, Brazil and SA in Nov 2022. — [Google Play Help: alternative billing 11174377](https://support.google.com/googleplay/answer/11174377?hl=en); [Android Developers Blog, Nov 2022](https://android-developers.googleblog.com/2022/11/continuing-our-commitment-to-user-choice-billing.html?hl=it)
- The 2026 billing overhaul ("decoupling" billing from the service fee) is rolling out region by region, reaching the rest of the world by 30 Sep 2027. — [Play Console Help 16954621](https://support.google.com/googleplay/android-developer/answer/16954621); [TechRepublic](https://www.techrepublic.com/article/news-google-play-store-fees-third-party-payments/)

### Inferences
- Human coaching sold inside the app, or unlocking in-app chat with a coach, is very likely a digital service that requires Play Billing (or UCB). Selling coaching only on a website without in-app purchase links or steering is the common workaround. It must not violate anti-steering rules where they still apply (outside the US, rules vary).
- User choice billing still charges a service fee (historically reduced by 4 points). Its value for a small SA developer is mostly payment-method flexibility, not cost.

### Gaps
- No Google text found addressing one-to-one remote coaching specifically. Consider asking Play policy support.
- The current UCB fee reduction and SA enrollment process were not verified for 2026.
- Current anti-steering rules for non-US markets after the Epic settlement were not researched.

## AI-Generated Content policy, target API, content rating, families

### Takeaway
An AI coach chat is squarely in scope of the AI-Generated Content policy and must include in-app reporting or flagging of offensive AI output without leaving the app. New apps and updates must target API 36 (Android 16) since 31 Aug 2026.

### Cited Findings
- The AI-Generated Content policy covers "text-to-text conversational generative AI chatbots, in which interacting with the chatbot is a central feature". Apps must let users "report or flag offensive content to developers without needing to exit the app" and should use reports to inform filtering and moderation. — [Play Console Help: Understanding AI-Generated Content policy 14094294](https://support.google.com/googleplay/android-developer/answer/14094294); [TechCrunch, Oct 2023](https://techcrunch.com/2023/10/25/google-plays-policy-update-cracks-down-on-offensive-ai-apps-disruptive-notifications/)
- UNVERIFIED: an April 2026 update reportedly gave 30 days to comply and extended the rules to AI voice agents. — [CallSphere blog](https://callsphere.ai/blog/vw4e-android-play-store-data-safety-ai-voice-2026.md)
- Target API: from 31 Aug 2026, new apps and updates must target Android 16 (API 36). Existing apps must target API 35 or higher to stay available to new users. A reported extension to 1 Nov 2026 is UNVERIFIED. — [Android Developers: Target SDK requirements](https://developer.android.com/google/play/requirements/target-sdk); [Play Console Help 11926878](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en-419); [Medium](https://medium.com/@AmitGuptaAppschance/update-your-target-api-level-by-august-31-2026-what-it-means-why-it-matters-and-how-to-prepare-34daa479bdb2)

### Inferences
- Add a "report this response" control on each AI message, plus moderation and logging. Also add guardrails against extreme deficit or eating-disorder-promoting advice, which ties into the health-harm policy.
- If the app is aimed at adults only, set the Target audience to 18+ to avoid the Families policy. Calorie restriction for minors is a reputational and policy risk. An IARC questionnaire is mandatory for every app.

### Gaps
- IARC and content rating specifics and Families policy details were not researched in this session. Standard knowledge: the IARC questionnaire is required, and Target audience and content declarations are required on App content. Verify on the live Policy Center.

## Common rejection/suspension reasons, review times, pre-launch report

### Takeaway
For health/fitness apps, the most frequent problems are Health Connect over-requesting or poor justification, privacy policy mismatch or omission of health data, missing medical disclaimers or overreaching claims, Data safety and deletion inaccuracies, missing AI reporting, and subscription disclosure issues. Plan for a review of about a week or more, and longer on a new account with sensitive permissions.

### Cited Findings
- Health Connect "excessive permissions" rejections are resolved by detailed per-permission justifications. Reviewers reject submissions when Health Connect data use is missing from the privacy policy. — [Reddit snapshot (anecdotal)](https://reddit.sentinel-team.org/posts/1u3btrt/snapshots/2026-06-12T18%3A48%3A57.191364Z); [Terra FAQ](https://docs.tryterra.co/faq/help-topics/connecting/realtime-ble-and-mobile-delivery/app-store-health-permission-rejection)
- Rejections citing the Health Content and Services policy are reported. Category choice (Health & Fitness vs Lifestyle) changes reviewer scrutiny (anecdotal). — [B4X forum](https://b4x.com/android/forum/threads/my-app-update-was-rejected-on-google-play-market.162074); [Reddit snapshot](https://reddit.sentinel-team.org/posts/1thi4by/snapshots/2026-05-20T04%3A01%3A00.830168Z)
- Data deletion answer problems cause rejection of submissions and updates. — [Play Console Help 13327111](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en-GB)
- Production access requests after closed testing can be rejected, which restarts the test (third-party). — [DEV](https://dev.to/testerscommunity/google-play-rejected-my-app-after-14-days-of-testing-here-is-what-i-did-wrong-3c21)
- Review times: Google's "7 days or longer" statement dates from 2020 (a temporary backlog). Third-party 2026 guides cite 14–21 days for a first submission in a sensitive category, but that is anecdotal. New accounts and sensitive permissions lengthen review, and resubmission restarts the clock. — [Android Developers Blog, Apr 2020](https://android-developers.googleblog.com/2020/04/google-play-updates-and-information.html); [TMS Outsource](https://tms-outsource.com/blog/posts/how-long-does-google-play-app-review-take/); [Median](https://median.co/blog/google-play-review-times-what-to-expect-and-how-to-streamline-approval)

### Inferences (practical launch checklist)
1. Set up a (Pty) Ltd, get a D-U-N-S number, and create an organization account (US$25). Otherwise use a personal account and recruit 15+ testers for a 14+ day closed test.
2. Set up the payments profile and merchant account in SA, and confirm tax and VAT settings.
3. Target API 36. Use Play Billing Library (current version) subscriptions with clear trial, price and auto-renew copy, plus a cancel/manage link.
4. Under App content, complete: privacy policy, Data safety (health, fitness, body, cycle, chat; AI or coach sharing), data deletion, Health apps declaration (Nutrition and weight management; Activity; Period tracking if used), Health Connect per-type justifications, target audience 18+, IARC, ads declaration, and "Financial features: none".
5. In-app: account deletion, AI response report/flag, medical disclaimer, privacy policy link (identical in Play, the app, and Health Connect), and a Health Connect permissions rationale screen.
6. Store listing: include the "not a medical device…" disclaimer and avoid cure, treat or guaranteed-weight-loss claims and before/after claims.
7. Run the pre-launch report and fix crashes. Supply reviewer test credentials (App access) if the app is behind a login or paywall.

### Gaps
- Pre-launch report details were not researched in this session (it is a standard Play Console feature that runs automated tests on Firebase Test Lab devices for testing-track builds).
- No official current review-time SLA exists.
- No authoritative dataset of fitness-app suspension causes was found. The evidence is anecdotal.
