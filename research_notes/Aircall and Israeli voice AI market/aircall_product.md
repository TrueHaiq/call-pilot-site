# Aircall (aircall.io) Product Inventory, as of November 2026

Scope: Aircall SAS / Aircall.io, the cloud phone system and AI customer-communications platform founded in Paris in 2014. It is not Air.ai. Research date: 2026-11-11. Each fact carries its source URL. Items that are older, unverified, or conflicting are marked.

## Product architecture: product lines and modules (Aircall's own names)

### Takeaway
Aircall now sells itself as an "AI-powered customer communications platform". It has four layers:
1. **Core phone system**: Essentials, Professional and Enterprise licences, delivered through the **Aircall Workspace** app and the admin **Dashboard**.
2. **AI agents**: **AI Voice Agents** and **AI Messaging Agents**, both priced by usage.
3. **AI for human reps**: **AI Assist** and **AI Assist Pro**.
4. **Add-ons**: **Analytics+**, WhatsApp, Salesforce Voice and number reputation.

In 2026 it bought two companies: Vogent (voice AI) and Piper AI (revenue and sales actions).

### Cited Findings
- Aircall describes itself as an "AI-powered customer communications platform". It was founded in 2014 in Paris inside the eFounders/Hexa studio, has its HQ in New York and Paris, and has raised about $226M, including a $120M Series D in 2021 at a $1B valuation. — [Aircall LLM info](https://aircall.io/llm-info/)
- Scale: 24,000+ businesses in 100+ countries, more than 2B customer interactions per year, 250+ native integrations, and a G2 rating of 4.4/5 from about 1,350 reviews. The page was last updated July 2026. — [Aircall LLM info](https://aircall.io/llm-info/)
- Product lines Aircall lists:
  - **AI Voice Agent**
  - **AI Messaging Agents** (SMS and WhatsApp, launched May 2026)
  - **AI Assist / AI Assist Pro** (transcription, summaries, sentiment, automated Call Scoring)
  - Core platform: intelligent and skills-based routing, IVR, call queuing, local and toll-free numbers, shared omnichannel inbox (voice, SMS/MMS, WhatsApp), Power Dialer, voicemail drop, click-to-dial, Analytics+

  — [Aircall LLM info](https://aircall.io/llm-info/)
- Plans and prices:

  | Plan | Price | Minimum users | Key inclusions |
  |---|---|---|---|
  | AI Voice Agents (standalone) | from $99/month | — | 38 languages, FAQs and custom intake questions, outbound calling, in-call and post-call actions, custom routing and escalation, per-agent dashboards |
  | Essentials | $30/licence/month | 3 | 50 AI Voice Agent minutes per month |
  | Professional | $50/licence/month | 3 | Adds AI conversation intelligence, smart routing, Power Dialer, outbound campaigns, live monitoring |
  | Enterprise | Custom | 25 | Adds unlimited global calls, SSO/SAML, HIPAA/GDPR/SOC2, premium onboarding |

  Annual billing saves 25%. — [Aircall pricing](https://aircall.io/pricing/)
- Add-ons and prices — [Aircall pricing](https://aircall.io/pricing/):

  | Add-on | Price |
  |---|---|
  | **AI Messaging Agents** | $0.15–$0.35 per conversation |
  | **AI Assist Pro** | $49/seat/month |
  | **WhatsApp in Aircall** | $10/seat/month |
  | **Analytics+** | $15/seat/month |
  | **Aircall for Salesforce Voice** | $30/seat/month |
  | **Number Reputation Dashboard** | $0.03 per check |
  | **Branded caller ID** | $0.08 per call |

- AI Assist was also quoted at $9/month on one Aircall page. AI Assist Pro launched July 23, 2025. — [Aircall AI Assist Pro launch](https://aircall.io/blog/news/ai-assist-pro/); [Aircall AI page](https://aircall.io/products/ai/ai/) (via search snippet, not fully verified)
- On Sept 1, 2026 Aircall described its AI line-up as:
  - **AI Assist**: structured intelligence over REST APIs and webhooks
  - **AI Voice Agents**: run calls end to end and act in connected systems
  - **AI Messaging Agents**: the same for SMS and WhatsApp
  - **AI Actions**: built on MCP

  — [Aircall opens its AI to the ecosystem](https://aircall.io/blog/tech/aircall-opens-ai-to-ecosystem/)

### Inferences
- The competitive structure to mirror has three layers: (1) AI agents priced per minute or per conversation, (2) a seat-based human workspace with AI copilot, (3) analytics and integrations. Aircall bundles a small AI Voice Agent allowance (50 minutes) into every seat plan, so the AI agent works as a hook into the phone system.
- Aircall also sells the AI Voice Agent on its own (from $99/month) to buyers who don't want to switch their phone system. That is the product closest to an AI voice agent plus CRM offer.

### Gaps
- No single official "product map" page was found. The structure above is assembled from the pricing page, the LLM-info page and blog posts.

## AI Voice Agent (AI Voice Agents)

### Takeaway
The AI Voice Agent handles both inbound and outbound calls:
- It answers, qualifies, books, resolves FAQs and routes, works 24/7, and warm-transfers to humans with context.
- It is set up without code, using templates, plain-language instructions, knowledge sources and testing.
- It takes actions inside CRMs and helpdesks through **AI Actions** (MCP).

**Hebrew was added in September 2026**, bringing the total to 38 languages.

### Cited Findings
- Capabilities:
  - Inbound voice resolved end to end.
  - Outbound calls triggered when a lead arrives, a payment is due or an appointment is near.
  - Lead qualification, intent-based routing with context, FAQ resolution, booking during or after the call, 24/7 after-hours handling, automatic follow-up.
  - Handles interruptions and tone shifts with "ultra-low latency".
  - **Warm transfer** to a rep with context.

  — [AI Voice Agent product page](https://aircall.io/products/ai/voice-agent/)
- Actions: check order status, book appointments, update records, create tickets, update the CRM. Native connections are HubSpot, Salesforce, Zendesk, Shopify, Stripe, Calendly, plus "Create your own". — [AI Voice Agent product page](https://aircall.io/products/ai/voice-agent/)
- Configuration:
  - Four pre-built AI Voice Agent templates for US and Canadian accounts.
  - Instructions and transfer rules written in plain language.
  - Connected knowledge sources and testing before go-live.
  - Self-service setup or **Forward Deployed Engineers**.
  - Aircall manages model and voice updates.
  - Expressive voices with a choice of accents, or your own voice.

  The product page does not describe guardrails. — [AI Voice Agent product page](https://aircall.io/products/ai/voice-agent/)
- Infrastructure:
  - "Telephony included", with no SIP trunking or forwarding needed.
  - Unlimited call concurrency.
  - HD voice, 99.5% uptime, 8 PoPs, dynamic carrier switching.
  - Numbers in 100+ countries "in two clicks".

  — [AI Voice Agent product page](https://aircall.io/products/ai/voice-agent/)
- Analytics:
  - Unified analytics across AI and human conversations.
  - Live and historical sentiment and topics.
  - Metrics: **resolution rate, CX score, transfer rate, time saved**.
  - Automatic surfacing of content gaps and unresolved questions.

  — [AI Voice Agent product page](https://aircall.io/products/ai/voice-agent/)
- September 2026 update (published Sept 22, 2026):
  - **AI Voice Agent campaigns** (outbound): upload a list, pick an agent, launch, and track connection rates and outcomes. Available on all plans.
  - **Agent templates** (FAQ, lead qualification), English-speaking markets only. A Shopify **Order Management Agent** is "coming soon".
  - Salesforce: **Salesforce Knowledge** as a knowledge source, caller lookup through AI Actions, in-call read and write of cases and opportunities, and call logging.
  - **13 new languages, including Hebrew** (Hebrew, Catalan, Mandarin, Japanese, Korean, Hindi, Tamil, Malay, Cantonese, Vietnamese, Lithuanian, Latvian, Estonian), for 38 in total.
  - **Voice library** with language and accent filters.
  - Toggles for filler phrases and background noise.
  - Knowledge base integrations (Zendesk, Salesforce, HubSpot, Document360) with automatic sync, shared across voice and messaging.
  - Background contact lookups during the greeting.
  - **Agent Memory**: context is passed when one agent transfers to another; the pilot showed 69% lower handling time.

  — [AI Voice Agents Sept 2026 updates](https://aircall.io/blog/news/ai-voice-agents-sept26/)
- Language support depth varies. Newer languages such as Mandarin, Japanese and Korean are labelled Beta in the Help Center. Whether Hebrew is Beta was not confirmed. — [WebSearch summary of Aircall Help Center](https://support.aircall.io/en-gb/articles/33341742294429) (unverified; my direct fetch of that article only showed the Jan 27, 2026 note that European Portuguese was added)
- A May 2026 expansion added Bulgarian, Croatian, Czech, Danish, Filipino, Finnish, Greek and others. — [Vantagepoint (third-party)](https://vantagepoint.io/blog/sf/aircall/aircall-18-languages-revops-guide)
- One 2026 third-party review still says only EN, ES, FR and DE are supported. That claim is outdated. — [Squawkvoice review](https://www.squawkvoice.ai/blog/aircall-review)
- AI Actions with AI Voice Agents are currently limited to Shopify, HubSpot and Zendesk, per a support article. Salesforce in-call actions were added in September 2026. — [Aircall support via search](https://support.aircall.io/en-gb/articles/35060564042397); [Sept 2026 updates](https://aircall.io/blog/news/ai-voice-agents-sept26/)
- AI Voice Agent pricing:

  | Usage | Price |
  |---|---|
  | Pay as you go | $0.29/min |
  | 1,000-minute bundle | $250/month |
  | 3,500-minute bundle | $805/month |
  | 10,000-minute bundle | $1,900/month |
  | Custom (over 50k minutes) | "as low as $0.12/min" |

  The FAQ says "from $0.19/min" for custom volume, which conflicts with the table. LLM and voice costs are included, with no token fees. The free allowance is given as 50 minutes per month in one place and as a 100-minute trial in another, which is inconsistent. — [Pricing](https://aircall.io/pricing/); [AI Voice Agent page](https://aircall.io/products/ai/voice-agent/)
- The **Vogent** acquisition (announced May 2026; Vogent is San Francisco-based) brings "advanced speech models, more reliable turn-taking", and tighter control of model behaviour in live calls. — [BusinessWire](https://www.businesswire.com/news/home/20260506396746/en/Aircall-Acquires-Vogent-to-Advance-Its-AI-Voice-Agent-Built-Natively-into-Business-Phones)

### Inferences
- Hebrew is supported as of September 2026. It is not among the 7 "verified" languages for AI Assist (see the next section), and templates are English-market only. So Hebrew quality and local depth (Israeli-specific integrations, templates, Hebrew UI) is a credible point of difference for an Israeli competitor, but only as "newly added / likely less mature", not "unsupported".
- Features a competitor should match:
  - Plain-language prompt builder
  - Knowledge-base sync
  - Templates
  - Test mode
  - Warm transfer with context
  - Agent-to-agent memory
  - Outbound list campaigns
  - Per-agent KPIs (resolution rate, transfer rate, CX score, time saved)

### Gaps
- No public full list of the 38 languages was found. Whether Hebrew is GA or Beta was not confirmed.
- No explicit documentation of guardrails (topic restrictions, PII handling, prohibited phrases) was found on public pages.
- Whether the AI Voice Agent produces post-call summaries is not stated on the product page. Summaries come from AI Assist on the human side.

## AI for human agents (AI Assist / AI Assist Pro, conversation intelligence, coaching)

### Takeaway
There are two tiers:
- **AI Assist (Standard)**: post-call insights (summary, key topics, sentiment, action items, talk ratio), Conversation Center, trackers, manual scoring.
- **AI Assist Pro**: adds real-time features (live transcription, live prompts, Playbooks), automated scoring and custom evaluation, and automation (pre-call insights, CRM autofill, email follow-up).

### Cited Findings
- Feature comparison — [Aircall support: AI Assist vs Pro](https://support.aircall.io/en-gb/articles/28733901791133):

  | Area | AI Assist (Standard) | AI Assist Pro |
  |---|---|---|
  | Call insights | Summary, key topics, sentiment, action items, talk ratio | Adds custom summaries |
  | Analytics | **Conversation Center**, **trackers**, manual call scoring | Adds automated scoring and custom evaluation |
  | Real-time | — | **Live transcription**, **live prompts**, **Playbooks** |
  | Automation | — | **Pre-call insights**, **CRM autofill**, **email follow-up** |

- Pro features need a Pro licence, and Standard and Pro licences can be mixed per user. Playbook summary sync to the CRM works only with Salesforce; HubSpot is "coming soon". — [Aircall support](https://support.aircall.io/en-gb/articles/28733901791133)
- Languages: 24 for AI Assist and Pro. Seven are "Verified" (English, French, Spanish, German, Dutch, Portuguese, Italian). Seventeen are "Available" (best effort, no predefined playbook templates). Whether Hebrew is among the 17 was not stated. — [Aircall support](https://support.aircall.io/en-gb/articles/28733901791133)
- Playbooks surface frameworks such as SPICED and BANT live. Automated call scoring evaluates calls on preset or custom criteria (for example discovery, objection handling, empathy, product knowledge). — [Aircall AI Assist Pro launch](https://aircall.io/blog/news/ai-assist-pro/) (via search snippet)
- Conflicting support content: one article says Standard unlocks call scoring, while the feature table marks automated scoring as Pro-only. — [Aircall support](https://support.aircall.io/en-gb/articles/28733985356317) (via search summary)
- Pricing-page AI rows:
  - Conversation Center, call transcription and voicemail transcription are on all plans.
  - Call summaries, key topic recognition, talk-to-listen ratios, trending topics, the AI and transcription API, and call scoring are included in Professional and Enterprise, and are an "AI Assist add-on" on Essentials.
  - Call coaching, call whispering and mandatory tagging are Professional and up.

  — [Pricing](https://aircall.io/pricing/)
- April 2026 release note: "AI Assist – Exclude Keywords in Trackers". — [Aircall release notes via search](https://support.aircall.io/en-gb/articles/31441119518621) (unverified)
- The **Piper AI** acquisition (announced June 3, 2026; some sources date it May 19; Piper is Spain-based) adds "revenue intelligence and agentic sales orchestration": CRM updates, deal scores, risk alerts, and scheduled or condition-triggered next-step workflows. It also lets teams query their interaction history. — [Aircall blog: Piper AI](https://aircall.io/en-gb/blog/news/aircall-piper-ai/); date conflict per [TechRepublic](https://techrepublic.com/article/news-aircall-piper-ai-acquisition/) and [BusinessWire](https://www.businesswire.com/news/home/20260519153174/en/)

### Inferences
- The baseline feature set for "AI for agents":
  - Transcript and summary
  - Sentiment, topics and action items
  - Trackers (keyword monitoring)
  - Scoring with custom rubrics
  - Live prompts and playbooks
  - CRM autofill
  - Follow-up email drafting

### Gaps
- No source confirmed whether Hebrew is supported for AI Assist transcription and summaries.

## Dashboard / workspace: main screens

### Takeaway
There are two surfaces:
- **Aircall Workspace**: the agent app for desktop, web and mobile. It is a unified, threaded view of calls, SMS and WhatsApp, with AI insights and integrations. It replaced the legacy Aircall Phone app, which retires in H1 2026.
- **Dashboard**: for admins and supervisors. It covers numbers, users and teams, routing, **Analytics**, **Live Monitoring**, **Conversation Center**, and **Ask Aircall** (AI chat, July 2026).

### Cited Findings
- Aircall Workspace was introduced in 2024–Jan 2025 as "a unified interface" for calls, texts, AI insights and integrations, with threaded conversations, new channels, automation and collaboration. — [Introducing Aircall Workspace](https://aircall.io/blog/product-update/introducing-aircall-workspace/)
- Release notes say the legacy Aircall Phone app no longer receives updates and retires in H1 2026. All new features ship only in Workspace, which unifies calls, SMS and WhatsApp in one conversation view. — [Aircall support (via search)](https://support.aircall.io/en-gb/articles/26572710375965) (unverified detail)
- **Ask Aircall** (release note dated 28 July 2026) is an AI chat in the Dashboard that saves users switching between Analytics, Conversation Center and the Help Center. — [Aircall support (via search)](https://support.aircall.io/en-gb/articles/38012648519325) (unverified detail)
- Collaboration features on all plans:
  - **Shared call inbox**
  - **Assign & comment on calls**
  - **Shared contacts**
  - **Tags**
  - Extensions
  - Call recording
  - Email reporting
  - Conference calls
  - **Availability statuses**
  - Warm transfers
  - After-call work
  - Parallel calls
  - Pause-resume recording
  - Click-to-dial
  - Blocklist
  - Voicemail by email

  Recording access is 1 year on Essentials and unlimited on higher plans. Analytics history is 6 months (basic or advanced) and unlimited with Analytics+. — [Pricing](https://aircall.io/pricing/)
- **Live Monitoring**: a real-time dashboard of team call activity, on Professional. **Live Monitoring+** (with Analytics+) is restricted to admins and supervisors and adds rebalancing of resources across lines by live demand. A Top KPIs article notes metrics auto-refresh. — [Aircall support (via search)](https://support.aircall.io/en-gb/articles/21355248949789)
- Live Monitoring+ offers views of the current day, the past 24 hours and the past hour. — [Aircall blog: Live Monitoring](https://aircall.io/blog/features/introducing-live-monitoring/)
- Wallboards on TVs appear to come through third-party integrations such as Geckoboard, not a native Aircall feature. — [Geckoboard](https://www.geckoboard.com/product/data-sources/aircall/)
- AI Voice Agents include "per-agent dashboards" and unified AI and human analytics. — [Pricing](https://aircall.io/pricing/); [AI Voice Agent page](https://aircall.io/products/ai/voice-agent/)

### Inferences
- Screens to mirror:
  1. A unified conversation inbox / call log covering calls, SMS and WhatsApp, with recordings, transcripts, summaries, tags, assignment and comments.
  2. Contact records, shared and synced from the CRM.
  3. Live monitoring of agents and queues.
  4. Analytics (standard and advanced).
  5. Conversation Center for search and filtering over AI insights.
  6. A per-AI-agent performance dashboard.
  7. An AI "ask your data" chat.

  Aircall is not a CRM itself: contacts are shared or synced with the CRM integrations.

### Gaps
- No screenshots or screen-by-screen documentation of Workspace were captured. Exact Workspace tab names are unverified.

## Automations and workflows

### Takeaway
Telephony automation covers:
- IVR ("vocal server") and call queuing
- Time and date routing, smart and skills-based routing, ring groups and flexible distribution
- Queue callback
- Power Dialer, voicemail drop and outbound campaigns

AI-side automation covers AI Actions (MCP), CRM autofill, email follow-up, and Piper's workflow engine. No standalone "workflow builder" product name was confirmed.

### Cited Findings
- All plans include call queuing, IVR (vocal server), call routing, time and date-based routing, business hours, ring groups, flexible call distribution rules, and custom music and messages. **Smart routing** and **queue callback** are Professional and up, as are **PowerDialer**, **voicemail drop** and **outbound campaigns**. Essentials gets only AI Voice Agents campaigns. — [Pricing](https://aircall.io/pricing/)
- The core platform includes "intelligent and skills-based routing". — [Aircall LLM info](https://aircall.io/llm-info/)
- Example AI configurations Aircall describes:
  - **Order Concierge**: Shopify order lookup, then a Stripe refund, then CRM logging.
  - **Lead Qualifier**: qualify, enrich HubSpot, then book in Calendly.

  Customers can trigger AI Voice and Messaging Agents from their own workflows. — [Aircall opens its AI to the ecosystem](https://aircall.io/blog/tech/aircall-opens-ai-to-ecosystem/)
- **AI Messaging Agents** (May 27, 2026) handle SMS and WhatsApp autonomously and 24/7: qualification, booking, order tracking and FAQs, with AI Actions (Shopify orders, HubSpot deals, Zendesk tickets) at no extra cost. They hand off to the team in Aircall Workspace with full history, on the same business number, and share the knowledge base with the Voice Agents. — [Aircall: AI Messaging Agents launch](https://aircall.io/en-au/blog/news/aircall-launches-ai-messaging-agents/)
- SMS is available in 14 countries. MMS is limited to US, CA and AU numbers. — [Pricing](https://aircall.io/pricing/)

### Inferences
- Automated follow-up SMS after calls appears to come mainly through AI agents and integrations (for example Zapier or HubSpot workflows), not a native trigger builder. This is unverified.

### Gaps
- No native visual workflow / trigger builder was confirmed. Whether Israel is among the 14 SMS countries was not verified.

## Integrations, API and marketplace

### Takeaway
Aircall has 250+ native integrations, including HubSpot, Salesforce, Zendesk, Pipedrive, Intercom, Slack, Zoho, Shopify, Stripe, Calendly and Zapier. It offers a public REST API and webhooks, a Messaging API (Professional and up), and a rebuilt Developer Portal. Since Sept 2026 it also has an MCP-based **AI Actions** ecosystem with **Partner MCP Registration**.

### Cited Findings
- All plans include 250+ integrations, APIs and webhooks, and the HubSpot, Zendesk, Pipedrive, Intercom, Slack and Zoho integrations. Salesforce Service Cloud and Sales Cloud and the **Messaging API** are Professional and up. API developer support is Enterprise only. — [Pricing](https://aircall.io/pricing/)
- Sept 1, 2026 ecosystem launch:
  - **AI Actions** are live over MCP.
  - **Developer Portal**.
  - **Partner MCP Registration**, so partners' MCP servers appear as AI Actions.
  - Launch partners: Attio ("first MCP-native CRM"), HelpScout, Front, HubSpot, Calendly.
  - The ecosystem is described as 23,000 businesses and 250+ integrations.

  — [Aircall opens its AI to the ecosystem](https://aircall.io/blog/tech/aircall-opens-ai-to-ecosystem/)
- Developer guidance: one MCP server works across every Aircall AI product. — [Developer guide](https://aircall.io/blog/tech/ai-ecosystem-developer-guide/); [developer.aircall.io](https://developer.aircall.io/)
- A private MCP beta reportedly connects Claude and ChatGPT to Aircall call data (read-only, calls only) as of Oct 2026. Aircall has not announced this. — [Vantagepoint (third-party, unverified)](https://vantagepoint.io/blog/integrations/aircall/aircall-mcp-beta-claude-chatgpt)
- Zapier and Pipedream connectors exist. — [Zapier](https://zapier.com/fr/apps/aircall/integrations); [Pipedream](https://pipedream.com/apps/aircall)

### Inferences
- For an Israeli competitor, local integrations (for example Israeli CRMs, Monday.com, Priority, local calendars and WhatsApp-first flows) are an area where Aircall shows no specific depth. This is unverified because Aircall's marketplace listing for Monday.com was not checked.

### Gaps
- The integrations marketplace was not crawled, so there is no exact current count beyond "250+", and the presence of Monday.com or Israeli tools was not checked.

## Telephony: numbers, Israel, porting, quality, devices

### Takeaway
Aircall lists Israel as "Eligible" for numbers. Some countries are self-serve in the Dashboard; others need a support request with documents (typically 1–3 business days after verification). Infrastructure claims are 99.5% uptime, HD voice, 8 PoPs and carrier switching. Apps exist for desktop, Android and iOS, plus CTI.

### Cited Findings
- Israel is listed as "Eligible" on Aircall's countries page. — [Aircall countries](https://aircall.io/en/countries/)
- Number availability and regulation vary by country. Some numbers are purchasable in the Dashboard, others need a support request (usually 1–3 business days after documents are verified), and a local address may be required. — [Aircall support via search](https://support.aircall.io/en-gb/articles/30509593120925)
- Every plan includes 1 local or toll-free number. Additional numbers are $6/month, and **Instant numbers** and **Call from any number** are available. Inbound and internal calls are unlimited. Domestic outbound is unlimited for US and Canada. International outbound is "contact for rates", or unlimited on Enterprise, subject to the Terms. — [Pricing](https://aircall.io/pricing/)
- Softphone for desktop, Android and iOS, plus computer telephony integration (CTI), on all plans. — [Pricing](https://aircall.io/pricing/)
- The Aircall iOS app exists in the Israeli App Store. — [Apple App Store IL](https://apps.apple.com/il/app/aircall/id1021338425?l=he)
- The mobile app dropped support for iOS 16 and earlier on July 30, 2026. — [Aircall support via search](https://support.aircall.io/en-gb/articles/35392109205661) (unverified)
- Voice infrastructure: HD voice, 99.5% uptime, 8 PoPs, dynamic carrier switching, unlimited concurrency. — [AI Voice Agent page](https://aircall.io/products/ai/voice-agent/); see also [Quality and reliability](https://aircall.io/quality-and-reliability/)
- Add-ons: **Number Reputation Dashboard** and **Branded caller ID**. — [Pricing](https://aircall.io/pricing/)

### Gaps
- Which Israeli number types are offered (local, toll-free, mobile), and Israeli pricing, were not verified.
- Porting process details were not researched.
- A browser extension or Chrome extension was not verified in this pass.

## Security and compliance

### Takeaway
Aircall states:
- SOC 2 Type II, GDPR, and HIPAA (BAA available)
- ISO 27001 (stated as both "certification" and "aligned", which conflicts)
- PCI DSS (possibly AWS's certification, not Aircall's own; unclear)
- CSA STAR Level One
- AWS hosting, TLS 1.2 and AES-256
- Regional data storage in the EU (Frankfurt), Australia (Sydney) and the US (Oregon)

Recording has a pause/resume control on all plans. Customer data is not used to train AI models.

### Cited Findings
- SOC 2 Type II, GDPR, HIPAA BAA, ISO 27001 and PCI DSS "certifications"; AWS hosting, TLS 1.2 in transit, AES-256 at rest. — [Aircall LLM info](https://aircall.io/llm-info/)
- The trust page says "aligned with ISO 27001 and SOC 2", and the PCI DSS it cites is AWS's certification. This conflicts with the LLM-info claim of an Aircall PCI certification. — [Aircall trust](https://aircall.io/trust/) (via search summary)
- GDPR, HIPAA and CSA STAR Level One are listed; recordings have pause/resume. — [Quality and reliability](https://aircall.io/quality-and-reliability/)
- AI Voice Agent: SOC 2 Type II, GDPR and CCPA alignment, HIPAA via BAA on request; customer data is not used to train AI models. — [AI Voice Agent page](https://aircall.io/products/ai/voice-agent/)
- Enterprise plan: SAML SSO and "compliance (HIPAA, GDPR, SOC2)". All plans: role-based permissions, Google Sign-in and 2FA. — [Pricing](https://aircall.io/pricing/)
- Regional data storage (Oct 29, 2026):
  - Regions: EU (AWS eu-central-1, Frankfurt), Australia (ap-southeast-2, Sydney), US default (us-west-2, Oregon).
  - The region is set at account creation from the phone number or country code and cannot be changed.
  - Covered data: recordings, voicemails, transcriptions, AI Assist insights, AI Assist Pro conversation data, and AI Voice Agent logs and post-call actions, for new accounts from October 2026.
  - Metadata, account, billing and analytics data stay mostly in the US. SMS and WhatsApp are on the roadmap.
  - Migration of existing accounts is targeted for end of 2026.

  — [Aircall regional data storage](https://aircall.io/en-gb/blog/news/regional-data-storage/)
- EU recordings and voicemails have been stored in Frankfurt since May 2022. — [Aircall regional data storage via search](https://aircall.io/en-gb/blog/news/regional-data-storage/)
- Aircall's French GDPR guidance tells agents to pause recording if a caller volunteers card data. Third-party vendors argue that pause/resume alone does not remove PCI scope. — [donneespersonnelles.fr](https://donneespersonnelles.fr/aircall-rgpd); [Paytia (vendor)](https://www.paytia.com/resources/blog/aircall-dtmf-masking-setup-guide)

### Gaps
- No Israel data residency. Israeli accounts would presumably default to the US or EU; the rule for +972 numbers is unverified.
- No automatic PCI redaction feature was found.

## Recent launches and product direction (2025–2026)

### Takeaway
Aircall is moving from a "phone system with AI" to an "AI-first conversation layer":
- AI agents across voice, SMS and WhatsApp
- One knowledge base and one workspace
- AI that acts (AI Actions over MCP, Piper's revenue workflows), not just summarises
- Two acquisitions in May–June 2026

### Cited Findings
- Timeline:

  | Date | Launch or event |
  |---|---|
  | Jan 2025 | **Aircall Workspace** introduced. — [Aircall blog](https://aircall.io/blog/product-update/introducing-aircall-workspace/) |
  | Jul 23, 2025 | **AI Assist Pro**. — [Aircall blog](https://aircall.io/blog/news/ai-assist-pro/) |
  | Jan 27, 2026 | AI Voice Agent adds Portuguese (Europe). — [Aircall support](https://support.aircall.io/en-gb/articles/33341742294429) |
  | May 2026 | **AI Actions** launched. — [Aircall blog: AI Actions](https://aircall.io/blog/features/ai-actions/) |
  | May 2026 | **Vogent** acquisition. — [BusinessWire](https://www.businesswire.com/news/home/20260506396746/en/Aircall-Acquires-Vogent-to-Advance-Its-AI-Voice-Agent-Built-Natively-into-Business-Phones) |
  | May 27, 2026 | **AI Messaging Agents**. — [Aircall](https://aircall.io/en-au/blog/news/aircall-launches-ai-messaging-agents/) |
  | Jun 3, 2026 | **Piper AI** acquisition. — [Aircall](https://aircall.io/en-gb/blog/news/aircall-piper-ai/) |
  | Jul 28, 2026 | **Ask Aircall**. — [support](https://support.aircall.io/en-gb/articles/38012648519325) (unverified) |
  | Sep 1, 2026 | MCP ecosystem, Developer Portal, Partner MCP Registration. — [Aircall](https://aircall.io/blog/tech/aircall-opens-ai-to-ecosystem/) |
  | Sep 22, 2026 | Voice Agent campaigns, templates, Hebrew and 12 other languages, Agent Memory, Salesforce in-call actions. — [Aircall](https://aircall.io/blog/news/ai-voice-agents-sept26/) |
  | Oct 29, 2026 | Regional storage for AI data. — [Aircall](https://aircall.io/en-gb/blog/news/regional-data-storage/) |

- CPO Tom Chen: "AI Voice, SMS, and WhatsApp now run through one platform, one knowledge base, and one workspace." — [Aircall](https://aircall.io/en-au/blog/news/aircall-launches-ai-messaging-agents/)
- Aircall says it "owns the conversation layer across voice, SMS, and WhatsApp" and wants AI that turns "every customer interaction into action, pipeline clarity". — [Aircall: Piper AI](https://aircall.io/en-gb/blog/news/aircall-piper-ai/)
- Announced or coming soon:
  - Shopify Order Management Agent template — [Sept 2026 updates](https://aircall.io/blog/news/ai-voice-agents-sept26/)
  - HubSpot playbook sync — [support](https://support.aircall.io/en-gb/articles/28733901791133)
  - Partner MCP self-registration — [ecosystem post](https://aircall.io/blog/tech/aircall-opens-ai-to-ecosystem/)
  - SMS and WhatsApp regional storage; migration of existing accounts by end of 2026 — [regional storage](https://aircall.io/en-gb/blog/news/regional-data-storage/)

### Inferences
- How an Israeli competitor can position against Aircall:
  - **Equivalent scope:** AI voice agents for inbound and outbound, a unified inbox and CRM of calls and customers, AI summaries and scoring, and automations and actions into business tools.
  - **Differentiation:** Hebrew-first quality, Israeli numbers and local support, WhatsApp-first flows (dominant in Israel), and shekel pricing.

  Aircall's Hebrew support is about two months old and outside its "verified" tiers, and its templates are English-market only.

### Gaps
- No public long-term roadmap document was found. Direction comes from launch posts and quotes.
- Financial terms of both acquisitions were not disclosed.
