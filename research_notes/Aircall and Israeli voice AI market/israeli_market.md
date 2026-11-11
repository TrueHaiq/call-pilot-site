# Israeli Market for AI Customer-Service Voice Agents (as of Nov 2026)

Method note: research was done on 2026-11-11 with about 22 search/fetch calls. Most competitor material is the vendors' own marketing (vendor-written comparisons included), so performance numbers are self-reported. Each fact is marked with the date of its source where one was known.

## Local competitors (Israeli / Israel-focused / global selling in Israel)

### Takeaway
The Israeli market is crowded and young in Nov 2026. At least 12 vendors sell Hebrew AI phone agents: self-serve per-minute platforms (Yappr, Daber), agencies and done-for-you builders (AIVA, Fixer, Routless, Connectop, Juba, Async, DNAI, GoCall), and telephony incumbents that bolted on AI (Voicenter, Reshetcall, PayCall/Bot10). They all make the same pitch: native Hebrew, 24/7, no missed calls, CRM and calendar, handoff to a human. Almost none publish ILS pricing or name real customers, so either one would set a new entrant apart. airecall.io could not be reached or found.

### Cited Findings
**airecall.io**
- The domain airecall.io did not resolve (DNS ENOTFOUND) on 2026-11-11, and a web search for "AiRecall"/"AI Recall" Israel found no matching product. Searches returned only Aircall (aircall.io), a different global company — fetch attempt on [airecall.io](https://airecall.io); search results e.g. [aircall.io](https://aircall.io/)

**Yappr (goyappr.com)**: Israeli self-serve Hebrew voice-agent platform
- Pricing on the homepage (Nov 2026, USD only): "Commitment" plan at $997/month with 5,000 minutes and extra minutes at $0.20/min, including a free Done-For-You setup and ongoing management. "Pay-as-you-go" at $600/month plus $0.30/min, billed per second. Calls to or from Palestinian Authority numbers (+972 22/24/28/29/56/59) cost $1.00/min — [goyappr.com](https://goyappr.com/en)
- An earlier price point in Yappr's own blog (Feb, updated Apr 2026): "$0.25 per minute, no fixed monthly fee", Israeli numbers extra, prices excluding 18% VAT. **Conflict:** the homepage now shows a $600 monthly fee, so pricing appears to have changed during 2026 — [Yappr comparison blog](https://goyappr.com/en/blog/israel-voice-ai-platform-comparison); [goyappr.com](https://goyappr.com/en)
- Claims: "Built for Hebrew from day one", "98% Hebrew accuracy", response under 1 second, and "trained on Hebrew dialects, accents, slang and professional terms". The blog describes the tech as speech-to-speech, with models trained on Israeli dialogues — [goyappr.com](https://goyappr.com/en); [Yappr blog](https://goyappr.com/en/blog/israel-voice-ai-platform-comparison)
- Target industries listed: clinics/doctors, law firms, insurance agencies, real estate, customer-service centers, online stores, restaurants — [goyappr.com](https://goyappr.com/en)
- Integrations: HubSpot, Zapier, Make, WhatsApp, Google Sheets, Notion, Airtable, n8n, Stripe, Intercom, Telegram, Mailchimp, ClickUp, Linear, Salesforce and webhooks. Israeli local number available immediately. Also ships a "SKILL for Claude/Codex". No Powerlink, Fireberry or Monday listed — [goyappr.com](https://goyappr.com/en)
- Its self-authored comparison (author is Yappr founder Simon Digilov) rates Hebrew quality at 5/5 for Yappr, 4/5 for Voca.ai (enterprise, custom), 2/5 for Bland.ai (no Israeli numbers, US servers add latency) and 2/5 for Retell AI (no Israeli numbers, no Hebrew support). This is vendor-biased — [Yappr blog](https://goyappr.com/en/blog/israel-voice-ai-platform-comparison)

**Daber AI (daber.ai)**: Hebrew-first, aimed at regulated buyers
- Inbound and outbound calls, WhatsApp and a web voice widget. Runs on the customer's own SIP trunk or Twilio, or on numbers Daber provides. A "strict" mode delivers scripts word for word. Hebrew is the default, and the agent switches language only when the caller does. Transcripts mask Hebrew PII (ID numbers, names, phones) — [Daber vs Reshetcall, reviewed Sep 2026](https://daber.ai/blog/daber-vs-reshetcall)
- Targets municipalities, government and regulated bodies, plus clinics, law firms and real estate. Offers on-prem and air-gapped deployment with self-hosted speech and LLM models. Erasure by phone number, conversation or case, with an audit log. Integrates with Salesforce and HubSpot, a public API and webhooks, and can be used from Claude and Cursor. Self-serve plans, with navigation saying "starting $3" (details unclear) — [daber.ai](https://daber.ai/blog/daber-vs-reshetcall)

**Reshetcall (reshetcall.co.il)**: Israeli cloud PBX and contact-center vendor with voice AI ("Rayvoc")
- Sells cloud PBX, an omnichannel contact center and Hebrew voice bots for inbound and outbound calls, with handoff to a human plus a summary. Deployment is managed by a dedicated project manager — [Daber comparison](https://daber.ai/blog/daber-vs-reshetcall); [Reshetcall AI voice agents](https://reshetcall.co.il/en/solutions/ai-voice-agents/)
- Blog (Jun 12, 2026): a good Hebrew bot answers in "under 800 milliseconds" and handles "accents, slang, and local names". Hebrew is hard because of "morphology, unvocalized script, and varied accents". The bot is "not meant to replace agents". Recommends starting with one scenario, such as appointment booking — [Reshetcall blog](https://reshetcall.co.il/en/blog/hebrew-voice-bot/)

**Voicenter (voicenter.com / voicenter.co.il)**: leading Israeli cloud telephony company (founded 2007), now with an AI layer
- Its "VoiceBot Center" is positioned as "not an 'upgraded IVR'" but a platform for AI voice agents, in inbound, outbound and automation variants. The automation variant connects to CRM, ERP and accounting systems. It also offers AI call transcription and analytics — [Voicenter VoiceBot Center](https://www.voicenter.com/voicenter-ai/voicebot-center); [inbound](https://www.voicenter.com/voicebot-center/inbound); [automation](https://www.voicenter.com/voicebot-center/automation); [transcription](https://www.voicenter.com/analytic-center/call-transcription)
- Voicenter is listed in Fireberry's solution catalog as a call-center integration, which shows that CRM and telephony are tied together locally — [Fireberry catalog](https://www.fireberry.com/solution-catalog/voicenter-cloud-communications)
- The CEO is Nitzan Gutman, quoted in Calcalist on AI adoption — [Calcalist Tech](https://www.calcalistech.com/ctechnews/article/2f4hox41l)

**PayCall / Bot10 (paycall.co.il, bot-10.com)**: Israeli telephony company (holds a Ministry of Communications licence)
- Headline: "סוכן קולי חכם בעברית מבית PayCall" (Smart Hebrew voice agent from PayCall). Other lines: "מזכירה אישית חכמה לעסקים" (smart personal secretary for businesses) and "שילוב מלא עם מערכות קיימות" (full integration with existing systems). Built on SIP, with CRM and API integration. Trust signals: named executive testimonials, "3–10+ year" relationships, the licence statement and Israeli phone numbers (072-…) — [PayCall](https://www.paycall.co.il/%D7%A1%D7%95%D7%9B%D7%9F-%D7%A7%D7%95%D7%9C%D7%99-%D7%97%D7%9B%D7%9D)
- Bot10 tagline: "העוזר הקולי שלך לניהול שיחות עסקיות חכמות" (your voice assistant for managing smart business conversations) — [bot-10.com](https://bot-10.com/)
- A search snippet (not verified on a fetched page) says the Bot10 basic plan costs "3,000 ₪ בחודש הראשון כולל הקמה ו-1,000 דקות" (₪3,000 for the first month including setup and 1,000 minutes) — [search result for bot-10.com](https://bot-10.com/)

**AIVA (aiva.co.il)**
- Outbound calls (surveys, follow-ups, re-engagement, appointment confirmations) and inbound calls (first-line answering, booking, summaries). Covers "evenings, weekends, and Shabbat". Claims "85% Hebrew recognition accuracy" and "3× more leads". No public pricing: demo plus a proposal within 24h. Integrations: CRM sync, Google Sheets, webhooks, calendar. No named customers — [aiva.co.il](https://aiva.co.il/en/)

**Fixer (yourfixerai.com)**
- Phone plus WhatsApp agent that shares one calendar and remembers customers across channels. Missed calls trigger an automatic WhatsApp "תוך שניות" (within seconds). Fixed quote in advance, no public price. Advises testing "שיחה עקומה" (a messy call) on a live demo rather than reading specs (Sep 15, 2026) — [Fixer blog](https://yourfixerai.com/blog/ai-phone-answering-hebrew)

**Other Israeli agencies and builders found** (not examined in depth): Connectop / AGENTALK (AI agents for Israeli businesses "since 2021") — [connectop.co.il](https://connectop.co.il/en/); Routless (Hebrew/English voice agents) — [routless.co.il](https://routless.co.il/en/voice-agents); Entrypoint — [entrypoint.co.il](https://www.entrypoint.co.il/en/solutions/ai-solutions/voice-ai); Async ("סוכן AI לעסק שעובד 24/7 - בעברית, בלי קוד", an AI agent for business that works 24/7, in Hebrew, no code; voice plus WhatsApp plus chat) — [async.co.il](https://async.co.il/); Juba ("מענה טלפוני AI לעסקים - מזכירה וירטואלית", AI phone answering for businesses, a virtual secretary) — [juba.digital](https://juba.digital/services/ai-agents/ai-receptionist); GoCall ("סוכן קולי AI שמדבר עברית", an AI voice agent that speaks Hebrew) — [merkaziya.kailai.tech](https://merkaziya.kailai.tech/); DNAI/Think-AI — [dnai.co.il](https://dnai.co.il/blog/ai-voice-agent-guide.html); Automaziot — [automaziot.ai](https://automaziot.ai/en/blog/2026-06-what-is-ai-voice-agent); VoiceSpin (Hebrew content on AI in call centers) — [voicespin.com/he](https://www.voicespin.com/he/author/ohad-hemed/page/2/)
- Enterprise call analytics: Hear.ai says it categorized 93% of EL AL calls, with 95% CRM-ready, live in one week (vendor case study) — [hear.ai](https://hear.ai/case-study/how-hear-helped-el-al-improve-cx-at-scale)

**Global players relevant to Israel**
- Aircall sells an AI Voice Agent at $0.49/min up to 2,500 min and $0.39/min above that, or a $725/month 2,500-minute bundle. It acquired Vogent (SF voice AI). It has an Israeli App Store listing — [Aircall voice agent](https://aircall.io/products/ai/voice-agent/); [Outsource Accelerator](https://news.outsourceaccelerator.com/aircall-acquires-vogent/); [App Store IL](https://apps.apple.com/il/app/aircall/id1021338425?l=he)
- CloudTalk AI voice agent from $99/month for 200 minutes — [CloudTalk](https://www.cloudtalk.io/ai-voice-agent-pricin)
- Edesy (India) markets Hebrew voice agents at INR 4–6/min, with Hebrew use-case pages and a Monday.com integration — [Edesy guide](https://edesy.in/blog/hebrew-voice-ai-complete-guide-2026.md); [Edesy Monday](https://edesy.in/ai-voice-agent/integrations/monday)
- Developer platforms (Vapi, Bland, Retell, Autocalls) are used by Israeli builders. A Vapi community thread asks how to build a Hebrew agent — [Vapi community](https://vapi.ai/community/m/1331188605967667200); [autocalls.ai Hebrew](https://autocalls.ai/language/hebrew)

### Inferences
- Positioning is undifferentiated. "Native Hebrew + 24/7 + CRM + human handoff" is table stakes, and quoted accuracy figures (85% to 98%) are unverifiable marketing. Room to stand out: transparent ILS pricing including VAT, real named Israeli customers and audio samples, a strong CRM-style dashboard (most competitors barely show one), native Powerlink/Fireberry/Monday integrations (rarely listed), and a privacy and Amendment 13 story (only Daber pushes compliance).
- Three buyer archetypes are emerging: SMBs wanting done-for-you service with a fixed monthly price, developers wanting per-minute pricing, and regulated or enterprise buyers wanting on-prem deployment and data controls. A new entrant should pick one.
- Typical market price points: roughly $0.20–0.50/min; SMB bundles around ₪3,000/month for about 1,000 minutes (Bot10, unverified); about $600–1,000/month base fees (Yappr).

### Gaps
- airecall.io could not be resolved or found. It may be offline, renamed, or misspelled, so ask the requester for the correct URL.
- No verified ILS price lists for most vendors. The Bot10 figure comes only from a search snippet.
- No independent customer counts, funding or press coverage (Geektime/Calcalist/Globes) for these startups was found within the tool budget.
- Voicenter did not explicitly confirm Hebrew speech quality or pricing on the pages surfaced.

## Hebrew voice AI: state of the technology (2026)

### Takeaway
Vendors say Hebrew voice AI is now production-grade and natural-sounding. Independent proof is thin: open benchmarks exist (the ivrit.ai leaderboards and TTS Arena) but cross-vendor results were not retrievable. The markers buyers and vendors use are under 800 ms response latency, barge-in, and turn-taking, plus handling slang, noise and accents. Mixed Arabic and Russian callers are barely addressed by anyone.

### Cited Findings
- Hebrew is harder for voice AI than English because of "rich morphology, unvocalized script, and varied accents", and most engines were trained on English first — [Reshetcall blog, Jun 2026](https://reshetcall.co.il/en/blog/hebrew-voice-bot/)
- Fixer: "רוב פלטפורמות הקול בעולם נבנו לאנגלית" (most voice platforms in the world were built for English). Hebrew with "קטיעות, סלנג ורעש רקע" (interruptions, slang and background noise) is a harder bar. "הדור הנוכחי מדבר עברית שוטפת עם קול טבעי" (the current generation speaks fluent Hebrew with a natural voice) — [Fixer, Sep 2026](https://yourfixerai.com/blog/ai-phone-answering-hebrew)
- Latency target: 800 ms is "סף התגובה שמתחתיו שיחה נשמעת טבעית לאוזן" (the response threshold below which a call sounds natural to the ear). The pipeline is ASR, then LLM, then tools, then TTS, with streaming TTS. Barge-in is essential — [DNAI, Aug 2026](https://dnai.co.il/blog/ai-voice-agent-guide.html). Reshetcall also uses under 800 ms — [Reshetcall](https://reshetcall.co.il/en/blog/hebrew-voice-bot/). Yappr claims under 1 s — [goyappr.com](https://goyappr.com/en)
- DNAI says 71% of blind-study participants did not tell the AI from a human. It labels this an industry estimate (source of the study not given) — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html)
- Architecture: Yappr says it uses speech-to-speech (no intermediate transcription) — [Yappr blog](https://goyappr.com/en/blog/israel-voice-ai-platform-comparison). Edesy cites Gemini Live 2.5 HD native audio — [Edesy](https://edesy.in/blog/hebrew-voice-ai-complete-guide-2026.md). Daber supports self-hosted speech and LLM models — [Daber](https://daber.ai/blog/daber-vs-reshetcall)
- Open Hebrew ASR: ivrit.ai, a non-profit, built a corpus of about 3,300 hours of Hebrew speech, released Whisper-based Hebrew models (including turbo), and runs a Hebrew transcription leaderboard. An Interspeech 2025 paper describes a crowd-transcribed dataset and a SOTA Hebrew Whisper model — [ivrit.ai paper](https://arxiv.org/pdf/2307.08720); [HF ivrit-ai](https://huggingface.co/ivrit-ai); [leaderboard](https://ivrit-ai-hebrew-transcription-leaderboard.hf.space/); [Interspeech 2025](https://www.isca-archive.org/interspeech_2025/marmor25_interspeech.pdf)
- Commercial ASR: in Soniox's own 2026 streaming benchmark, Soniox scored 1.25% WER against 3.16% for ElevenLabs Scribe v2 Realtime on Hebrew (vendor claim) — [Soniox vs ElevenLabs](https://soniox.com/compare-stt/soniox-vs-elevenlabs/hebrew). ElevenLabs markets Hebrew STT and TTS — [ElevenLabs Hebrew STT](https://elevenlabs.io/it/speech-to-text/hebrew)
- Hebrew TTS: ivrit.ai runs a community "TTS Arena Hebrew" — [TTS Arena Hebrew](https://ivrit-ai-tts-arena-hebrew.hf.space/about). Phonikud (Hebrew diacritization for TTS, Interspeech 2026) compares against ElevenLabs v3 — [phonikud](https://phonikud.github.io/); [arXiv 2506.12311](https://arxiv.org/abs/2506.12311). Older (Mar 2025) samples reported that ElevenLabs multilingual v2 produced unintelligible Hebrew and that v3 with explicit Hebrew was needed — [Hebrew TTS samples](https://danielrosehill-hebrew-tts-samples.static.hf.space/index.html)
- Code-switching: Daber switches language only when the caller switches — [Daber](https://daber.ai/blog/daber-vs-reshetcall). Edesy claims seamless Hebrew-English mixing but says nothing on Arabic or Russian — [Edesy](https://edesy.in/blog/hebrew-voice-ai-complete-guide-2026.md). Yappr lists no languages other than Hebrew — [goyappr.com](https://goyappr.com/en)
- Customer concerns, as vendors frame them: the agent must know when the caller has finished speaking, without cutting in or leaving long silences, and must re-ask naturally rather than guess — [Fixer](https://yourfixerai.com/blog/ai-phone-answering-hebrew). Hallucination guardrail: "אל תנקוב במחיר, במועד או בהתחייבות שאינם במאגר המאושר" (do not quote a price, date or commitment not in the approved knowledge base) — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html)

### Inferences
- Since every vendor claims "natural Hebrew", a landing page wins with proof: playable real call recordings, a "call the demo number now" CTA (Fixer and Yappr both recommend live demos), and stated latency.
- Supporting Arabic and Russian alongside Hebrew (about 20% of Israel's population is Arab, and there is a large Russian-speaking community; general knowledge, not sourced here) is a gap almost no competitor claims and could set a new entrant apart.

### Gaps
- No independent 2026 benchmark comparing Hebrew TTS naturalness or end-to-end agent quality across vendors. TTS Arena rankings could not be retrieved.
- Which underlying providers most Israeli vendors use (OpenAI Realtime, Gemini, ElevenLabs, Azure, Google) is mostly undisclosed.
- No sourced data on accent handling (Mizrahi, Russian-accented, Arabic-accented Hebrew) or on slang performance.

## Israeli buyer needs, industries, buying behaviour, integrations

### Takeaway
Early-adopter verticals are appointment- and lead-driven businesses: clinics, law firms, insurance agents, real estate, restaurants, e-commerce, garages and home services, plus municipal call centers at the enterprise end. The core pain is missed calls and after-hours coverage, with Shabbat and evenings explicitly mentioned. Buyers expect WhatsApp follow-up, calendar booking, CRM logging, an Israeli number, and done-for-you setup with a demo.

### Cited Findings
- Industries: Yappr lists clinics, law firms, insurance agencies, real estate, service centers, online stores and restaurants — [goyappr.com](https://goyappr.com/en). DNAI lists municipal call centers, private clinics, real estate, garages and emergency services — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html). Daber lists municipalities and government, clinics, law firms and real estate — [Daber](https://daber.ai/blog/daber-vs-reshetcall)
- Missed calls: "שיחת טלפון שלא נענתה פשוט מתאדה" (an unanswered call simply evaporates). "שיחה שלא נענתה לא מייצרת שורה בשום דוח" (an unanswered call creates no line in any report). Voicemail "הוא המקום שבו לידים הולכים למות בשקט" (is where leads quietly die). In a clinic case study, 34% of calls went unanswered, mostly 8:00–10:00 and after 18:00 — [DNAI, Aug 2026](https://dnai.co.il/blog/ai-voice-agent-guide.html)
- After-hours: AIVA covers "evenings, weekends, and Shabbat" — [aiva.co.il](https://aiva.co.il/en/)
- WhatsApp is central. Fixer sends a WhatsApp within seconds of a missed call and shares memory between phone and WhatsApp — [Fixer](https://yourfixerai.com/blog/ai-phone-answering-hebrew). Async, Daber and Yappr all bundle WhatsApp — [async.co.il](https://async.co.il/); [Daber](https://daber.ai/blog/daber-vs-reshetcall); [goyappr.com](https://goyappr.com/en)
- Buying motion: demo-led and done-for-you. AIVA sends a proposal within 24h of a demo — [aiva.co.il](https://aiva.co.il/en/). Yappr includes "free Done-For-You setup" and ongoing management — [goyappr.com](https://goyappr.com/en). Fixer gives a fixed quote in advance — [Fixer](https://yourfixerai.com/blog/ai-phone-answering-hebrew). Reshetcall assigns a dedicated project manager — [Daber comparison](https://daber.ai/blog/daber-vs-reshetcall). PayCall pushes a contact form plus phone — [PayCall](https://www.paycall.co.il/%D7%A1%D7%95%D7%9B%D7%9F-%D7%A7%D7%95%D7%9C%D7%99-%D7%97%D7%9B%D7%9D)
- Pricing currency and VAT: Yappr prices in USD and states prices exclude 18% VAT — [Yappr blog](https://goyappr.com/en/blog/israel-voice-ai-platform-comparison). Bot10 is reportedly quoted in ₪ — [bot-10.com snippet](https://bot-10.com/)
- Integrations: Fireberry (formerly Powerlink) has a Voicenter integration in its catalog — [Fireberry](https://www.fireberry.com/solution-catalog/voicenter-cloud-communications). Edesy offers Monday.com (creating items and updating statuses, OAuth, column mapping) — [Edesy Monday](https://edesy.in/ai-voice-agent/integrations/monday). Yappr and Daber list global CRMs (HubSpot, Salesforce) plus Zapier, Make and n8n — [goyappr.com](https://goyappr.com/en); [Daber](https://daber.ai/blog/daber-vs-reshetcall). Voicenter's automation bot connects to CRM, ERP and accounting systems — [Voicenter](https://www.voicenter.com/voicebot-center/automation)
- Telephony: Israeli numbers are a selling point. Yappr offers them immediately. Bland and Retell lack them, per Yappr — [goyappr.com](https://goyappr.com/en); [Yappr blog](https://goyappr.com/en/blog/israel-voice-ai-platform-comparison). PayCall and Daber run on SIP trunks — [PayCall](https://www.paycall.co.il/%D7%A1%D7%95%D7%9B%D7%9F-%D7%A7%D7%95%D7%9C%D7%99-%D7%97%D7%9B%D7%9D); [Daber](https://daber.ai/blog/daber-vs-reshetcall)

### Inferences
- A Hebrew-first landing page should lead with the missed-call and lost-lead pain using concrete local time windows (mornings, evenings, Shabbat). It should offer "call our agent now" and WhatsApp CTAs, show ₪ monthly pricing with a VAT note, and name Monday, Fireberry/Powerlink, Google Calendar and WhatsApp integrations.
- A CRM-style dashboard of calls and customers is a real differentiator. Competitors mention "summaries" and "CRM sync" but rarely show a dashboard.

### Gaps
- No sourced data on Israeli SMB adoption rates, market size or survey data. Business-owner forums and Facebook groups were not reachable.
- No sourced confirmation of Priority ERP or Israeli booking-tool integrations (e.g. Calendly-like local tools) offered by any competitor.
- Powerlink rebranded to Fireberry (general knowledge; the Fireberry site is confirmed, the rebrand date is not sourced here).

## Regulation and trust

### Takeaway
Four legal regimes matter. (1) Amendment 13 to the Privacy Protection Law took effect on 14 Aug 2025, and the first fine under it (₪256,000) came on 21 Jul 2026. Call recordings and transcripts count as personal-data databases. (2) Recording calls you are party to is permitted, and notice at call start is standard practice. (3) Communications Law §30A (the spam law) bans marketing via an "automatic dialing system" without prior consent, with damages up to ₪1,000 per message. (4) Websites serving the public must meet IS 5568 (WCAG-based, level AA) and publish an accessibility statement; fines reach ₪150,000.

### Cited Findings
- Amendment 13 took effect on 14.8.2025. It gives the Privacy Protection Authority administrative fines, investigative powers and court orders. Large-scale data holders must appoint a privacy officer (ממונה הגנת פרטיות). Database registration is abolished for most private bodies. It adds personal liability for management and compensation without proof of damage — [RSM Israel](https://www.rsm.global/israel/he/node/228); [Meitar](https://meitar.com/wp-content/uploads/2025/07/AMENDMENT-13-TO-THE-PRIVACY-PROTECTION-LAW-IS-ON-THE-HORIZON-HEB.pdf); [SII](https://www.sii.org.il/he/tikun13/)
- First enforcement: on 21 Jul 2026 the Authority imposed its first Amendment 13 fine, ₪256,000, on the Meuhedet health fund ("קופת חולים מאוחדת") — [Shibolet](https://www.shibolet.com/?p=26776)
- Applied to voice AI: "תיקון 13 לחוק הגנת הפרטיות מחייב מיפוי, בסיס חוקי, מזעור מידע ומדיניות שמירה ומחיקה" (Amendment 13 requires data mapping, a legal basis, data minimisation, and retention and deletion policy). "ההקלטות והתמלולים הם מאגר מידע" (recordings and transcripts are a database) — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html)
- Recording: recording a call you are a party to is permitted under the Wiretap Law, and informing the caller at the start is accepted practice — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html); similarly [Reshetcall transcription blog](https://reshetcall.co.il/en/blog/ai-call-transcription/)
- AI disclosure (best practice, not cited law): the agent should identify itself at the start, e.g. "מדבר העוזר הדיגיטלי" ("this is the digital assistant speaking") — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html)
- Spam law (Communications Law §30A): advertising by fax, SMS, email or an "automatic dialing system" requires prior consent ("מבלי לקבל מראש את הסכמת הנמען", without first obtaining the recipient's consent). Valid consent can be written, SMS, email, online, or a recorded phone call. Existing-customer exception: details given during a purchase, the customer was offered a chance to refuse and did not, and the ads are for similar products. Each ad must include a way to refuse. Damages are up to ₪1,000 per ad without proof of harm, and it is a criminal offence with fines up to ₪226,000 (2026). A "צינתוק" (ring-and-hang-up) may also count — [Kol Zchut](https://www.kolzchut.org.il/he/פיצוי_בגין_משלוח_דברי_פרסומת_ללא_הסכמה_של_הנמען_(חוק_הספאם)); [Kol Zchut variant](https://www.kolzchut.org.il/he/פיצוי_בגין_משלוח_דברי_פרסומת_ללא_הסכמה_של_הנמען_%28חוק_הספאם%29)
- Outbound marketing calls by AI fall under direct-marketing and consent rules. Service calls about existing bookings are treated differently — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html)
- Card payments by phone require a dedicated secure route — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html)
- Accessibility: sites and apps serving the public must comply with IS 5568 Part 1 (2021 edition, based on WCAG 2.0, level AA), under Equal Rights for Persons with Disabilities (Service Accessibility) Regulations, reg. 35ו. Violations risk a ₪150,000 fine and up to ₪50,000 compensation without proof of damage. Some small sites are exempt. An accessibility statement (הצהרת נגישות) citing "ת"י 5568 ... ברמת AA" is the common practice — [Kol Zchut accessibility](https://www.kolzchut.org.il/he/הנגשת_אתרי_אינטרנט_ואפליקציות_לאנשים_עם_מוגבלות); [SII standard page](https://www.sii.org.il/he/lobby/standardization/standard-page?id=6753); [example statement](https://www.ias.co.il/%D7%94%D7%A6%D7%94%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA/)
- Trust signals competitors use: a Ministry of Communications licence, a service charter, a complaints ombudsman and a privacy policy (PayCall) — [PayCall](https://www.paycall.co.il/%D7%A1%D7%95%D7%9B%D7%9F-%D7%A7%D7%95%D7%9C%D7%99-%D7%97%D7%9B%D7%9D). Hebrew PII masking, on-prem deployment and erasure with an audit log (Daber) — [Daber](https://daber.ai/blog/daber-vs-reshetcall)

### Inferences
- The landing page needs: an IS 5568/AA-compliant build plus an accessibility statement page, a Hebrew privacy policy that addresses Amendment 13 (retention, deletion, data location), and a consent checkbox on the lead form if you will market to leads afterwards (spam law).
- Product: default "this call is recorded and handled by a digital assistant" disclosure, configurable retention, PII masking in transcripts, and an outbound consent log. These make a credible compliance story that few SMB competitors tell.
- Whether a conversational AI outbound call counts as an "automatic dialing system" under §30A is legally unsettled in the sources found. Treat outbound marketing calls as requiring consent.

### Gaps
- No primary gov.il text was fetched for Amendment 13 fine amounts, the Wiretap Law recording rule, or any Privacy Protection Authority guidance on AI or voice bots.
- Whether Israel has any AI-specific disclosure obligation for bots in 2026 was not found.
- Whether the 2021 IS 5568 edition is moving to WCAG 2.1/2.2 is disputed in sources.

## Cultural and communication norms for marketing to Israeli businesses

### Takeaway
Little direct sourcing was found. What competitors do shows the locally effective signals: native-Hebrew framing, Israeli phone numbers, Hebrew support teams, WhatsApp contact, live demo calls, done-for-you setup, and pain-first copy that is direct and blunt.

### Cited Findings
- Yappr stresses a "Hebrew interface for settings, reports, and support" and an "Israeli Hebrew-speaking support team" as differentiators against US tools (English-only support, USD pricing, no Israeli numbers) — [Yappr blog](https://goyappr.com/en/blog/israel-voice-ai-platform-comparison)
- Blunt, pain-first Hebrew copy is common: "לידים הולכים למות בשקט" (leads quietly die) — [DNAI](https://dnai.co.il/blog/ai-voice-agent-guide.html). The "actually works" framing ("סוכן קולי AI בעברית" that actually works) suggests buyers distrust earlier bad Hebrew bots — [goyappr.com](https://goyappr.com/en)
- PayCall uses named-person testimonials with years of relationship, an Israeli 072/055 phone number and regulatory badges — [PayCall](https://www.paycall.co.il/%D7%A1%D7%95%D7%9B%D7%9F-%D7%A7%D7%95%D7%9C%D7%99-%D7%97%D7%9B%D7%9D)
- Live demo is the recommended way to judge quality — [Fixer](https://yourfixerai.com/blog/ai-phone-answering-hebrew); demo-call and sample recordings — [goyappr.com](https://goyappr.com/en)
- Several competitors show no named customers (AIVA; Yappr shows only unnamed avatars) — [aiva.co.il](https://aiva.co.il/en/); [goyappr.com](https://goyappr.com/en)

### Inferences
- Copy should be short, direct and numerical, and lead with lost money and lost leads. Show a playable Hebrew call, a demo phone number and a WhatsApp button. Show ₪ prices with "לא כולל מע"מ" (excl. VAT) or "כולל מע"מ" (incl. VAT) stated clearly, and say a tax invoice (חשבונית מס) is issued in ₪. Add an Israeli support team and Israeli customer logos with real names. The absence of named customers across competitors means even a few real local logos would carry weight.

### Gaps
- No sourced studies or articles on Israeli B2B marketing tone, SMB software-buying behaviour, or payment norms (monthly vs annual, credit card vs bank transfer, שוטף+ terms). Facebook groups and forums were not reachable.
