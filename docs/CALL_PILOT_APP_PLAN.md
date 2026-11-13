# Call Pilot platform: project plan and setup runbook

The source of truth for building the Call Pilot **platform**: the web app people log into, together with its own backend and database. It records the decisions made so far, where this project ends and the separate telephony service begins, the design system taken from the approved Figma screens, and a setup runbook that Claude Code executes phase by phase.

- **Status:** v2.1, 2026-11-12.
- **Put this file at** `docs/APP_PLAN.md` in the new repo, next to `docs/POSITIONING.md` and `docs/BRAND.md`, both copied from the landing repo.
- **Do not copy** the landing repo's `DESIGN_PRINCIPLES.md`. It covers the marketing site. The parts that apply to the product are in §8 here.

---

## 0. How to start

### What you do by hand (about 10 minutes)

You need Node 22 or newer (already installed), pnpm (bundled with Node through corepack), git, the GitHub CLI and Claude Code.

```bash
# 1. Enable pnpm (once)
corepack enable

# 2. Create the project folder next to the landing site
cd ~/Documents/dev/web
mkdir call-pilot-app && cd call-pilot-app
git init -b main

# 3. Copy the docs and the skills the app uses from the landing repo
mkdir -p docs .claude/skills
cp ../call-pilot-site/docs/CALL_PILOT_APP_PLAN.md docs/APP_PLAN.md
cp ../call-pilot-site/docs/POSITIONING.md ../call-pilot-site/docs/BRAND.md docs/
for s in emil-design-eng web-design-guidelines copywriting choreograph; do
  cp -R ../call-pilot-site/.claude/skills/$s .claude/skills/
done

# 4. First commit and a private GitHub repo
git add -A && git commit -m "Project docs and skills"
gh repo create call-pilot-app --private --source=. --push

# 5. Open it and start Claude Code
code .
```

In Claude Code, send:

> Read docs/APP_PLAN.md and run the setup runbook in §18, phase by phase. Stop after each phase, show me the result of its "Done when" checks, and wait for my OK before the next phase.

Leave the landing repo's `ogilvy` and `review-animations` skills behind; they are for the marketing site.

**Accounts.** The current stage needs none, apart from Cloudflare (which you already use) to publish the demo. The later stages add the accounts listed in §19.

### What Claude does

It runs the runbook in §18:

1. scaffold the repo and its tooling
2. build the design system
3. build the integration base: shared contracts, the web app's data layer, and a stand-in API in the browser
4. build every designed screen on top of it and publish the demo
5. write the contracts the platform API and the telephony service will implement

The platform API (stage 2) and the connection to the real telephony service (stage 3) are started only when you ask. Claude follows `CLAUDE.md` (template in §17) in every session.

---

## 1. The product in one paragraph

Call Pilot is an AI-first customer communications platform for mid-market Israeli businesses:

- AI agents answer and make phone calls and reply on WhatsApp and SMS, in natural Hebrew.
- Every conversation lands on one customer timeline, with a summary, tasks and follow-ups.
- The team only handles what needs a person, through a handoff that includes full context.

Read `docs/POSITIONING.md` for audience, pillars, pricing and claims, and `docs/BRAND.md` for voice and naming. Don't invent features, customers, numbers or certifications beyond them.

---

## 2. Two projects: the platform and the telephony service

Call Pilot is built as two separate projects that talk to each other.

| | **Platform** (this project) | **Telephony & voice-AI service** (separate project) |
| --- | --- | --- |
| What it is | The dashboard everyone logs into, plus its own API and database | A separate service on its own server |
| Owns | Users, organizations, roles and login; customers and CRM; conversations and messages; tasks and notes; appointments; automations; integrations (Fireberry, Priority, Monday, calendars); WhatsApp and SMS; **all non-voice AI** (the WhatsApp/SMS agent, suggested replies, customer summaries, tasks extracted from messages); approved knowledge; settings, privacy and compliance; reports; billing | Phone numbers, SIP trunks and carrier (ISP) management; placing and receiving calls; **the voice-call AI agents**; call audio, live listening and joining; recordings and transcripts as they are produced |
| Talks to the other through | The `VoiceService` client in the platform API (§12) | Its own API, plus webhooks or an event stream to the platform |

This plan covers **only the platform**. Telephony and voice-agent internals are never built here; they sit behind the `VoiceService` client.

---

## 3. Decisions made

| Topic | Decision |
| --- | --- |
| Shape of the project | **One repo, two apps and one shared package:** `apps/web` (React and Vite), `apps/api` (Hono on Node, added in stage 2) and `packages/contracts` (the shared contract). No Turborepo; pnpm workspaces are enough for two apps. |
| Why not Next.js | The dashboard sits behind a login, so server rendering adds nothing. The backend needs jobs, webhooks, live connections and an API other systems use (the telephony service, later perhaps a mobile app), which a standalone API serves better. The frontend can then be static files, with only the API and database in Israel. |
| Package manager | **pnpm** (workspaces). |
| Current stage | **Frontend plus integration base.** Every approved screen, built on a typed data layer that talks to the API contract. A stand-in API in the browser plays the backend for now. No real API server, database, auth, jobs or telephony connection yet. |
| First deliverable | **Demo mode**: the web app showing every approved screen with sample data and simulated live activity, as a static site at a public URL. |
| Swappable connections | The screens only use the web data layer. It talks to the API contract, served by the stand-in now (`VITE_API_MODE=mock`) and by `apps/api` later (`http`). Inside the API, the database and the telephony service also sit behind interfaces with mock and real implementations (§12). |
| Data location (production) | The API, database and file storage run in **AWS `il-central-1` (Tel Aviv)**. The web app is static files on Cloudflare and holds no customer data. |
| Product UI style | The approved Figma "final style" screens 01–15. Tokens are in §8. |
| Languages | Hebrew first (RTL, the default) and English (LTR). Every screen ships in both. |
| Sign-up | No self sign-up at launch. The login page offers "תאמו הדגמה" (book a demo). The sign-up screen (15) is built behind a flag. |
| Login screen | Figma frame 13, the split screen. |

---

## 4. Stages

| Stage | Outcome | In this plan |
| --- | --- | --- |
| **1. Frontend and integration base** (current) | Every screen works on the stand-in API through the final data layer, the demo is public, and the contracts are written | §18 phases 1–5 |
| **2. Platform API** | `apps/api` with a real database, login, CRM, inbox, tasks, automations, integrations and messaging AI, passing the same contract tests as the stand-in | Planned at the start of the stage, from §10–§16 |
| **3. Telephony service connection** | The API's mock `VoiceService` is replaced by the real service's API and events | Planned with the telephony project, from §12 |
| **4. Design-partner beta** | 3 to 5 Israeli businesses live | — |

---

## 5. Target architecture

```
 Browser: apps/web (static, Cloudflare) ──HTTPS + SSE──> apps/api (Hono on Node, AWS il-central-1)
   └─ stage 1: stand-in API in the browser (MSW)            ├─ routes (contract from packages/contracts)
                                                           ├─ repositories ──> PostgreSQL + pgvector, S3
                                                           ├─ live: SSE to the browser
                                                           ├─ jobs (pg-boss): automations, sends, AI, syncs
                                                           ├─ messaging AI (Claude), integrations
                                                           └─ VoiceService client ──API──> Telephony & voice-AI service
                                                                   ^                       (separate project)
                                                                   └──── webhooks / events ─┘
 External: Meta WhatsApp · SMS provider · Fireberry · Priority · Monday · Google / Microsoft
```

- **`apps/api` runs as two processes from one codebase:** the web server (routes, webhooks, live updates) and the worker (pg-boss jobs).
- **Live updates to the browser** come over one Server-Sent Events endpoint (`/live`). In stage 1 the stand-in simulates it in the browser.
- **Listening to and joining a live call** are provided by the telephony service. The API requests a short-lived access token from the service, and the browser connects with whatever client the service specifies.

---

## 6. Tech stack

Pin exact versions at setup time. Claude checks current stable versions with `pnpm view <pkg> version` and does not guess.

### `apps/web` (stage 1)

| Need | Choice |
| --- | --- |
| Framework | **React** with **Vite** and **TypeScript** (strict), as a single-page app |
| Routing | **TanStack Router** (typed routes) |
| Server data | **TanStack Query**, through the data layer (§11) |
| Styling | **Tailwind CSS v4** with tokens from §8, using logical properties only (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) |
| Components | **shadcn/ui** on **Radix**, restyled to §8, with Radix's `DirectionProvider` for RTL |
| Icons | **lucide-react**, the same icon set as the Figma designs |
| Tables | **TanStack Table** |
| Forms and validation | **react-hook-form** and **zod** |
| Charts | **Recharts** |
| Translations | **i18next** and **react-i18next**: `he` (default) and `en`, with `<html dir>` switching |
| Dates | **date-fns** with the `he` locale |
| Font | **Rubik**, from `@fontsource-variable/rubik` |
| Stand-in API | **MSW** (Mock Service Worker), with in-memory state and a simulated live engine |
| Toasts | **Sonner** |
| Motion | CSS transitions; **motion** only for the live waveform and the toast stack, following the `emil-design-eng` rules |
| Hosting | Static build on **Cloudflare Pages** (`demo.` now, `app.` later) |

### Shared and tooling

| Need | Choice |
| --- | --- |
| `packages/contracts` | **zod** schemas, the API route map, live-event types and `VoiceService` types; exports an OpenAPI file |
| Lint and format | **Biome** |
| Tests | **Vitest** (unit and contract tests), **Playwright** (end to end and screenshots) |
| Git hooks | **lefthook** |
| CI | **GitHub Actions** |

### `apps/api` (stage 2, not installed now)

| Need | Choice |
| --- | --- |
| HTTP server | **Hono** on Node, with `@hono/zod-openapi` using the shared contracts |
| Database | **PostgreSQL 16** with **pgvector**, on AWS RDS in `il-central-1` |
| Database access | **Drizzle ORM** and drizzle-kit migrations |
| Login and accounts | **Better Auth**: email and password, Google and Microsoft sign-in, organizations and roles, email codes, two-factor for admins. It uses cookies across `app.` and `api.` on the same domain. |
| Background jobs | **pg-boss** (inside Postgres), run by the worker process |
| Files | AWS S3 in `il-central-1` |
| Messaging AI | **Claude** through `@anthropic-ai/sdk` (§13) |
| Hosting | Containers on AWS ECS Fargate in `il-central-1`, with infrastructure as code in **AWS CDK** |
| Observability | **Sentry** and structured logs (pino) |

---

## 7. Repository structure

```
call-pilot-app/
├── apps/
│   ├── web/                         React + Vite SPA (stage 1)
│   │   └── src/
│   │       ├── routes/              TanStack Router routes (§8.3)
│   │       ├── ui/                  design system: tokens, components, AppShell
│   │       ├── features/            screen-level components per area
│   │       ├── data/                API client, query hooks, AuthAdapter, LiveAdapter (§11)
│   │       ├── mocks/               stand-in API: MSW handlers, in-memory store, live engine
│   │       ├── demo-data/           sample fixtures (§9)
│   │       └── i18n/                he/en messages
│   └── api/                         Hono API + worker (added in stage 2)
│       └── src/
│           ├── routes/  webhooks/  live/  jobs/
│           ├── repositories/        db implementation (Drizzle)
│           ├── voice-service/       VoiceService interface + mock/ + http/ (§12)
│           ├── integrations/  ai/
│           ├── server.ts            web process
│           └── worker.ts            jobs process
├── packages/
│   └── contracts/                   zod schemas, route map, live events, VoiceService types, OpenAPI export
├── tests/                           Playwright e2e
├── docs/                            APP_PLAN.md, POSITIONING.md, BRAND.md, adr/
├── .claude/                         skills/, settings.json
├── CLAUDE.md · AGENTS.md
├── pnpm-workspace.yaml · biome.json · lefthook.yml · playwright.config.ts
└── .github/workflows/ci.yml
```

In stage 1 only `apps/web` and `packages/contracts` are created. Don't create empty placeholders for `apps/api`.

**The swap rule:**

- Screens use only the hooks in `apps/web/src/data`. They never call `fetch` and never import MSW or the mocks.
- `VITE_API_MODE` decides who answers: `mock` (the in-browser stand-in, now) or `http` (`apps/api` at `VITE_API_URL`, later).
- Inside `apps/api`, the routes use repository and `VoiceService` interfaces. `VOICE_SERVICE=mock|http` lets the API run fully before the telephony service exists.

---

## 8. Product design system

The approved designs are in Figma, file key `DZbCbbEkqJgzfF16afQpMc`, page `claude-work`, section **"Product · Final style"**, frames 01–15. Claude reads them through the Figma Console connector (§17) and builds to match. If a screen and this section disagree, the Figma frame wins and this section gets updated.

### 8.1 Tokens

These go in `apps/web/src/ui/tokens.css` as a Tailwind v4 `@theme` block.

| Token | Value | Use |
| --- | --- | --- |
| `--color-page` | `#fafafa` | App background behind the cards |
| `--color-surface` | `#ffffff` | Cards, panels, table rows |
| `--color-sidebar` | `#f6f6f6` | Sidebar background |
| `--color-selected` | `#ebebeb` | Selected sidebar item and settings-menu item (solid box, radius 12) |
| `--color-line` | `#ebebeb` | Card borders, section dividers |
| `--color-line-soft` | `#f1f1f1` | Row dividers inside cards |
| `--color-ink` | `#111318` | Primary text, primary button background |
| `--color-ink-2` | `#2b2f36` | Body text in content |
| `--color-muted` | `#6b6f76` | Secondary text, labels |
| `--color-subtle` | `#9a9ea6` | Meta text, timestamps, placeholders |
| `--color-faint` | `#c4c7cc` | Inactive waveform bars, separators |
| `--color-field` | `#f4f4f5` | Input background |
| `--color-thead` | `#f7f7f8` | Table header row |
| `--color-accent` | `#2f6fdb` / soft `#eef3fd` | Links, the AI series in charts, unread dot. Used sparingly. |
| `--color-success` | `#1a7f4b` / soft `#edf7f1` | Done, active, booked |
| `--color-warning` | `#a15c07` / soft `#fdf5e6` | Waiting for the team, open, paused |
| `--color-danger` | `#c0392b` / soft `#fcefed` | Overdue, failed |
| `--color-new-bg` / `-line` / `-ink` | `#e3f6eb` / `#bfe5cd` / `#15803d` | Sidebar "new updates" count boxes (radius 5) |
| `--color-wa` | `#25a55f`; brand `#25d366` | WhatsApp icon, the AI switch when on, send button |
| `--color-wa-bubble-out` / `--color-wa-chat` | `#d9fdd3` / `#f2efe9` | WhatsApp chat |
| `--radius-card` | `16px` | Cards |
| `--radius-control` | `8px` (buttons, small inputs), `12px` (form inputs, sidebar items) | |
| `--radius-pill` | `999px` (status pills), `5–6px` (small badges, chips) | |
| `--shadow-card` | `0 1px 2px rgb(0 0 0/.03), 0 6px 16px -6px rgb(0 0 0/.04)` | Cards. No heavy shadows anywhere. |
| Font | Rubik, weights 400 and 500 (600 only for the logo and numbers) | |
| Type scale | page title 22/500; card title 14/500; body 13–14/400; meta 12; stat value 28/400 with −1% letter spacing; login headline 56/500 | Hebrew letter spacing stays at 0, except for large headings. |
| Icons | Lucide, 15–17px, stroke 1.5–1.6; grey (`--color-muted`), black when active | |

The login and sign-up sky panel reuses the landing site's sky gradient (`#4d94ed` at the top, through `#61abf5`, to `#1a54c2` at the bottom) with soft blurred white clouds, and the "glass" cards: white at 16% with a 40% white border and a 24px background blur.

### 8.2 Layout and components

- **App shell:** a 1440×960 design frame.
  - **Sidebar** (right in Hebrew, left in English), 248px wide, `--color-sidebar` with a hairline edge:
    - logo (cap mark + CALLPILOT wordmark) and a collapse button, vertically centred on each other
    - search with a ⌘K hint
    - groups: **עבודה יומית** (daily work: לוח בקרה, שיחות 3, הודעות 12, לקוחות, משימות 4) / **סוכנים** (agents: סוכני AI, אוטומציות, אינטגרציות) / **כללי** (general: דוחות, הגדרות)
    - a hairline under the search box and a hairline above the user row, which sits at the bottom
  - **Main area:** a 56px top bar with breadcrumb and actions, then a page header with title, count or subtitle and the primary action, then underline tabs, then a body of white cards with 20px top and bottom and 28px side padding and 16px gaps.
- **Primary button:** black (`--color-ink`) with white text, 32–48px tall. Only one per screen.
- **Secondary buttons:** white with a 1px border.
- **Cards:** a header row (52px, title, controls) above a hairline, then the content. Sibling cards in a row share the same height. The last row stretches to the bottom of the page. Footers pin to the bottom of the card. No empty space at the end of a card.
- **Tables:** grey header row, rows 46–50px tall with hairlines, and a checkbox column on the start side.
- **Status pills:** a soft background with a dot or icon and medium text.
- **Customer screen:**
  - header: avatar, name, status pill, meta line, key facts, then tabs **סקירה · ווטסאפ · שיחות · תורים · משימות · הערות · קבצים** (overview, WhatsApp, calls, appointments, tasks, notes, files)
  - **WhatsApp is a tab inside the customer screen**, not a side panel
  - the WhatsApp tab shows a chat bar with the **"סוכן AI עונה"** (AI agent replies) switch and a **השתלטות** (take over) button, a note about the 24-hour service window, the chat, and a composer with an AI suggestion and templates

### 8.3 Screen map: Figma frames to routes

| # | Figma frame | Route |
| --- | --- | --- |
| 01 | Dashboard | `/` |
| 02 | Calls | `/calls` |
| 03 | Messages | `/messages` (and `/messages/$conversationId`) |
| 04 | Customers | `/customers` |
| 05 | Customer, overview tab | `/customers/$id` |
| 06 | Customer, WhatsApp tab | `/customers/$id/whatsapp` |
| 07 | Tasks | `/tasks` (and `/tasks/$id`) |
| 08 | AI agents | `/agents` |
| 09 | Automations | `/automations` |
| 10 | Integrations | `/integrations` |
| 11 | Reports | `/reports` |
| 12 | Settings, privacy | `/settings/privacy` (and the other sections under `/settings/*`) |
| 13 | Login | `/login` |
| 15 | Sign up (future) | `/signup`, behind `VITE_SIGNUP_ENABLED` and off by default |

The language comes from the user's setting (stored per user from stage 2, in local storage until then), not from the URL.

### 8.4 RTL, language and accessibility rules

- **Direction:** set it once on `<html dir>` from the active language. Never hard-code it in a component.
- **Spacing:** use logical utilities only. Mirror anything that has a direction: chevrons, progress bars, timelines, the sidebar side.
- **What doesn't mirror:**
  - logos
  - media controls (▶ still points right)
  - phone numbers, and time axes in charts
- **Numbers inside Hebrew text:** wrap phone numbers and IDs in `<bdi>`, or render them in their own element. For example, masked numbers like `054-***-1187` break when they share a line with Hebrew text.
- **Hebrew copy:**
  - address the reader in the plural ("התחילו", "תאמו הדגמה")
  - no slash forms like "/ת"
  - no exclamation marks
  - sentence case
  - words people actually say (AI, CRM, דשבורד)
- **English copy:** written from the same idea, never translated line by line.
- **Accessibility:** WCAG AA (Israeli standard IS 5568).
  - visible focus ring on everything clickable
  - real `<button>` and `<a>` elements
  - labelled form fields
  - colour is never the only signal
  - a Hebrew accessibility statement, linked from settings
- **Motion** (from the `emil-design-eng` skill):
  - interface feedback within 150–250ms
  - ease-out for things appearing
  - no animation on keyboard-triggered actions
  - every animation has a reduced-motion version

---

## 9. Demo mode

- **Build:** `pnpm --filter web build:demo` sets `VITE_API_MODE=mock` and `VITE_DEMO=true`. The stand-in API (MSW) serves everything from `apps/web/src/demo-data`, with in-memory state. The result is static files, deployed to Cloudflare Pages. Local development in stage 1 also runs in mock mode.
- **Data:**
  - The fixtures reproduce the Figma sample data exactly: the garage business "מוסכי השרון", the user רונית אברהם, the agent יוסי כהן, and customer דנה לוי (Toyota Corolla 2021, appointment on Tuesday 18.11 at 10:30, the air-conditioning quote).
  - Also included: the 12 customers in the list, the calls log, messages, tasks, agents, automations, integrations, report series and privacy settings.
  - Everything is marked as sample data.
- **Simulated live behaviour** (the stand-in's live engine, driven by timers, standing in for both the platform API and the telephony service's events):
  - live calls tick and their waveforms move
  - a new WhatsApp message arrives about 20 seconds after load
  - sidebar counts update
  - "join" and "listen" open a mock call sheet
  - "use" on the AI suggestion fills the reply box
  - completing a task moves it to "done"
- **Data entry:** forms validate and save into in-memory state, which "reset demo" clears.
- **Login:** any email works and goes straight in.
- **Demo banner:** a slim banner reading "גרסת הדגמה · נתונים לדוגמה" (demo version, sample data) with "איפוס" (reset) and a he/en switch.
- **Definition of done:** every screen in §8.3 matches its Figma frame at 1440px in both languages, the Playwright screenshot suite passes, and there are no console errors.

---

## 10. Platform data model (target)

In stage 1 this model exists as zod schemas in `packages/contracts`, using these names, and the stand-in API implements it in memory. In stage 2 it becomes Drizzle tables in `apps/api`. Every table has `id` (uuid v7), `organization_id`, `created_at` and `updated_at`, and is protected by Postgres row-level security.

- **Accounts and access:** `organizations`, `users`, `memberships` (role: owner, admin, agent, viewer), plus the sessions Better Auth manages.
- **Customers:** `customers` (name, phones, email, tags, owner, preferred channel, external IDs) and `customer_fields`, which holds custom fields such as vehicle and licence plate.
- **Conversations:**
  - `channels` (WhatsApp number, SMS sender, and a reference to each phone number managed by the telephony service)
  - `conversations` (customer, channel, status: open, waiting for team, closed, plus assignee and whether the AI is active)
  - `messages` (direction, author: AI, user or customer, body, template, delivery status)
- **Calls:** `calls` holds the platform's copy of each call, received from the telephony service: external call ID, direction, numbers, times, duration, outcome, the AI or person who handled it, recording reference, transcript, summary.
- **Follow-up:** `appointments`, `tasks` (source conversation or call, assignee, due date, status), `notes`.
- **Agents and knowledge:**
  - `agents`. Messaging agents are configured and run here. Voice agents are configured here and pushed to the telephony service.
  - `knowledge_sources` and `knowledge_chunks` (pgvector)
  - `whatsapp_templates`
- **Automations:** `automations` (trigger, actions, enabled) and `automation_runs`.
- **Integrations:** `integrations` (provider, encrypted credentials, sync state).
- **Compliance:** `consents`, `dnc_numbers` (the do-not-call list), `deletion_requests`, `audit_log`.
- **Usage:** `usage_events` (voice minutes reported by the telephony service, messages, AI usage), for billing.

---

## 11. Platform API contract and the web data layer

The contract lives in `packages/contracts`. In stage 1 the stand-in implements it; in stage 2 `apps/api` implements it with the same schemas.

- **Resources:**
  - `GET/POST/PATCH` for customers, conversations, messages, calls, tasks, appointments, notes, agents, automations, integrations and settings
  - `GET /customers/{id}/timeline`
  - `POST /conversations/{id}/messages`
  - `PATCH /conversations/{id}` with `{ aiActive, assigneeId, status }`
  - `POST /tasks/{id}/complete`
  - `POST /calls/{id}/access` with `{ mode: listen | join }`, which returns a short-lived token for the telephony service's live call
  - `GET /reports/*`
- **Shared shapes:** one cursor-pagination shape and one filter shape for every list endpoint, and one error shape: `{ code, message, details? }`.
- **Live events** (`GET /live`, SSE), as a typed union:
  - `call.started`, `call.updated`, `call.ended`
  - `message.created`, `conversation.updated`
  - `task.updated`, `counts.updated`
- **Web data layer** (`apps/web/src/data`):
  - `createApiClient()`: a typed client built from the route map. It sends credentials, validates responses with zod in development, and maps errors to the error shape.
  - TanStack Query hooks per resource (`useCustomers`, `useCustomer`, `useConversation`, `useSendMessage` and so on), with query keys in one file and optimistic updates for sending, completing and toggling.
  - `AuthAdapter`: `getSession`, `signIn`, `signInWithProvider`, `signOut`, `getOrganization`. Mock now; the API's login (Better Auth) in stage 2.
  - `LiveAdapter`: `subscribe(eventTypes, handler)`. The stand-in's engine now; the API's `/live` stream in stage 2. Incoming events update the query cache.

---

## 12. Connection to the telephony & voice-AI service

Only `apps/api` talks to the telephony service, through the `VoiceService` interface in `apps/api/src/voice-service/`. The browser never calls it directly; even live listening goes through a token the API hands out. The contract types live in `packages/contracts`, so the stage 1 stand-in already simulates the service's events.

**What the platform asks of the service (proposed; to agree with the telephony project):**

| Need | Call |
| --- | --- |
| List and manage phone numbers | `listNumbers()`, `assignNumber(agentId)` |
| Push a voice agent's configuration (greeting, language, voice, approved knowledge, handoff rules, business hours) | `upsertVoiceAgent(config)`, `setVoiceAgentEnabled(id, on)` |
| Place an outbound call (only after consent and do-not-call checks pass in the platform) | `startOutboundCall({ to, agentId, purpose })` |
| Listen to or join a live call | `getLiveCallAccess(callId, mode: 'listen' or 'join')`, which returns a short-lived token and how to connect |
| Fetch a recording or transcript | `getRecordingUrl(callId)` (a short-lived signed URL), `getTranscript(callId)` |
| Apply retention and deletion | `deleteCallData(callId or customerPhone, scope)` |

**What the service tells the platform** (webhooks to `apps/api` at `/webhooks/voice`, signed and processed once per event ID):

- `call.started`, `call.updated` (status, duration, live transcript lines), `call.ended` (outcome, recording reference, transcript, summary)
- `call.handoff_requested` (reason, summary, the suggested owner)
- `call.action` (appointment booked, task requested, WhatsApp confirmation requested), which the platform turns into appointments, tasks, messages and automation triggers
- `usage.reported` (minutes per call), for billing

**Rules:**

- The platform is the system of record for customers, tasks and conversations. The service is the system of record for live call state and audio.
- Every webhook is verified (signature and timestamp) and processed once (stored event ID).
- The platform never calls carriers or SIP providers directly.
- `VOICE_SERVICE=mock` gives `apps/api` a simulated service, so stage 2 can be built and tested before stage 3.

**Still to agree with the telephony project:** which side writes the post-call summary (the service, which has the transcript, or the platform's AI), and whether WhatsApp confirmations after a call are sent by the platform (the default assumption) or by the service.

---

## 13. Messaging and AI in the platform (stage 2)

- **WhatsApp:**
  - Use the WhatsApp Business Platform Cloud API from Meta directly, set up through Embedded Signup.
  - Webhooks arrive at `apps/api` (`/webhooks/whatsapp`), which verifies Meta's signature, stores the message and starts the messaging-agent job.
  - Free-form replies are allowed only while the 24-hour customer-service window is open. After that, only approved templates can be sent. The interface shows the window and blocks free-form text once it's closed.
  - The "סוכן AI עונה" (AI agent replies) switch is stored per conversation. "השתלטות" (take over) turns it off and assigns the conversation to the current user.
- **SMS:** through an Israeli SMS provider (to choose), used for reminders and as a fallback when the customer has no WhatsApp.
- **AI in the platform:** the WhatsApp and SMS agent, suggested replies, customer summaries ("בקצרה", in brief), tasks extracted from messages, and answering from approved knowledge. All of it runs in the worker.
  - Use the official SDK `@anthropic-ai/sdk`. Never call the HTTP API by hand.
  - Default model: `claude-opus-5-5`, with streaming. Set `output_config.effort` per route: `low` for live WhatsApp replies and suggestions, `medium` for summaries and extraction. Opus 5.5 can't switch thinking off, so lowering effort is the speed control. Choosing a faster model for a route is your decision, based on measurements.
  - Tools defined with zod and `strict: true`, using `tool_choice: auto`. Structured outputs through `client.messages.parse()`.
  - Prompt caching: a fixed system prompt and deterministic tool order, with per-business knowledge after the cache breakpoint.
  - Refusals: check `stop_reason` before reading content, and send the server-side fallback (beta `server-side-fallback-2026-07-01`, `fallbacks: "default"`).
  - Knowledge: pgvector retrieval. The agent quotes only from approved knowledge and says when it doesn't know.
  - Privacy: confirm no training on customer data in the data processing agreement, request zero data retention, and record where inference runs (`inference_geo`).
  - Evaluations: fixed sets of Hebrew conversations, run in CI on every prompt or model change.

---

## 14. Integrations (stage 2)

Build only the integrations that `POSITIONING.md` names. Each is an adapter in `apps/api/src/integrations/<provider>` exposing `connect`, `syncCustomer`, `logActivity` and `createTask`, run by worker jobs that retry with backoff. Any failure shows in the automation's health label (screen 09). Credentials are encrypted with AWS KMS.

| Provider | Purpose |
| --- | --- |
| Fireberry (Powerlink) | Customer records and activity logging |
| Priority | Customers, work orders, invoices |
| Monday.com | Tasks as items on a chosen board |
| Google Calendar / Outlook (Microsoft Graph) | Availability and booking. The voice agents use this through the platform API or the service contract (§12). |

---

## 15. Security, privacy and compliance (platform side)

- **Data stays in `il-central-1`.** Encryption at rest and in transit, with least-privilege access. The static web app holds no customer data.
- **Tenant isolation:** Postgres row-level security keyed on `organization_id`, with tests that try to read across organizations.
- **Recording and AI notice:** configured in the platform (screen 12) and pushed to the telephony service, on by default. Changes are written to the audit log.
- **Retention:** recordings kept for 90 days by default and transcripts for 1 year, configurable. The platform purges its own data and sends `deleteCallData` to the service.
- **Deletion requests:** delete a customer, or only their recordings, across both systems. Each request is written to the audit log (screen 12).
- **Consent and do-not-call:** checked in the platform before any outbound call or message (Israeli Communications Law §30A). Marketing consent is a separate checkbox that starts unticked.
- **No training on customer data:** stated in the terms and confirmed with every AI provider.
- **Authentication:** passwords of at least 12 characters, two-factor for admins, rate limits on login and webhooks, and signature checks on every webhook (Meta, the telephony service, providers). Cookies are `HttpOnly` and `Secure`, with CSRF protection between `app.` and `api.`.
- **Audit log** for sign-ins, settings changes, exports, deletions and take-overs.
- Outbound marketing calls and the AI-disclosure wording need sign-off from Israeli counsel before launch.

---

## 16. Configuration

**`apps/web/.env.example`** (stage 1):

```bash
VITE_API_MODE=mock          # mock = in-browser stand-in; http = apps/api
VITE_API_URL=               # used only when VITE_API_MODE=http
VITE_DEMO=false             # true: demo banner, reset, sample-data login
VITE_SIGNUP_ENABLED=false
VITE_DEFAULT_LOCALE=he
```

**`apps/api/.env.example`** (stage 2, created then):

```bash
DATABASE_URL=
BETTER_AUTH_SECRET=
APP_URL=                    # the web app origin, for CORS and cookies
GOOGLE_CLIENT_ID= / GOOGLE_CLIENT_SECRET=
MICROSOFT_CLIENT_ID= / MICROSOFT_CLIENT_SECRET= / MICROSOFT_TENANT_ID=
ANTHROPIC_API_KEY=
META_APP_ID= / META_APP_SECRET= / META_WEBHOOK_VERIFY_TOKEN= / WHATSAPP_BUSINESS_ACCOUNT_ID=
SMS_PROVIDER_*=
AWS_REGION=il-central-1
S3_BUCKET=
SENTRY_DSN=
VOICE_SERVICE=mock          # mock | http (stage 3)
VOICE_SERVICE_URL= / VOICE_SERVICE_API_KEY= / VOICE_SERVICE_WEBHOOK_SECRET=
```

Secrets are never committed. In production they live in AWS Secrets Manager. Claude never prints secrets or puts them in commits.

---

## 17. Claude Code setup in the new repo

### 17.1 `CLAUDE.md` (root)

Claude writes this file in phase 1.

```markdown
# Call Pilot platform

The platform: web dashboard (apps/web) + its own API and DB (apps/api, stage 2), sharing packages/contracts. Phone lines, carriers and the voice-call AI agents live in a SEPARATE telephony service; only apps/api talks to it, through VoiceService.
Product: docs/POSITIONING.md, docs/BRAND.md. Plan, decisions, design system: docs/APP_PLAN.md (source of truth). Design: Figma file DZbCbbEkqJgzfF16afQpMc, section "Product · Final style", frames 01–15.

## Rules
- Current stage: frontend + integration base (APP_PLAN §4). Don't create apps/api, a database, auth, jobs or a telephony connection until the user starts that stage.
- Screens use only the hooks in apps/web/src/data. Never call fetch or import MSW/mocks from a screen.
- New data needs a zod schema in packages/contracts first; the stand-in and the future API both implement it.
- Never build telephony, SIP or voice-agent internals here.
- Hebrew-first, RTL. Every screen ships in he and en. Logical Tailwind utilities only.
- Use apps/web/src/ui tokens/components; no colors, radii or shadows outside APP_PLAN §8. Read the Figma frame (Figma Console MCP) before building a screen and match it.
- Don't invent features, customers, numbers or certifications beyond POSITIONING.md.

## Commands
pnpm dev · pnpm build · pnpm lint · pnpm typecheck · pnpm test · pnpm e2e · pnpm --filter web build:demo

## Before calling work done
lint, typecheck, test pass; for UI, Playwright screenshots in he and en at 1440 and 375 compared to Figma; run the web-design-guidelines skill on changed UI files.
```

### 17.2 Skills (`.claude/skills/`)

| Skill | Use |
| --- | --- |
| `web-design-guidelines` | Before calling any UI done |
| `emil-design-eng` | Interaction polish: buttons, toasts, live states |
| `choreograph` | Grouped motion, such as the live call sheet and the toast stack |
| `copywriting` | Interface text and empty states (with the Hebrew rules in §8.4) |
| `claude-api` (built into Claude Code) | The messaging AI in stage 2 |

### 17.3 Connectors and permissions

- **Figma Console connector:** already connected in your Claude account. Used to read frames and pull exact values.
- **GitHub CLI (`gh`):** used for PRs.
- **`.claude/settings.json`:**
  - allowed without asking: `pnpm *`, `git status/diff/log`, `gh pr *`
  - always asks first: deploy commands (`wrangler pages deploy`) and anything touching production
  - hook: after every Edit or Write, run `biome format --write` on the changed file

### 17.4 Working rhythm

- One milestone per branch, with small commits and a PR into `main`.
- Claude writes a short plan at the start of each phase, builds it, runs the checks and asks for review.
- Decisions with tradeoffs get a record in `docs/adr/NNN-title.md`.

---

## 18. Setup runbook (stage 1, Claude runs this)

Each phase ends with **Done when** checks. Claude stops after each phase and shows the results.

### Phase 1: Repo foundation

- Set up pnpm workspaces (`pnpm-workspace.yaml` with `apps/*` and `packages/*`), with root scripts that run across packages.
- Create `apps/web`: Vite, React, TypeScript strict, TanStack Router, TanStack Query and i18next (`he` default, `en`, `<html dir>` switching).
- Create `packages/contracts` with zod and a first schema.
- Set up Biome, lefthook, Vitest, Playwright and the `.editorconfig`.
- Write `CLAUDE.md`, `AGENTS.md` (one line pointing to `CLAUDE.md`), `.claude/settings.json`, `apps/web/.env.example` and `.gitignore`.
- Add GitHub Actions `ci.yml`: install, lint, typecheck, test, build.

**Done when:**
- `pnpm lint && pnpm typecheck && pnpm build` passes.
- `pnpm dev` serves the empty app, and switching language flips the text direction.
- CI is green on the pushed commit.

### Phase 2: Design system (`apps/web/src/ui`)

- Add the tokens from §8.1 as a Tailwind v4 `@theme` block, plus Rubik.
- Install shadcn/ui and restyle it to §8. Components:
  - Button and IconButton
  - Input, Select, Checkbox, Switch
  - Pill/Badge, NewCountBadge, Tabs (underline)
  - Card, CardHeader, CardFooter
  - Table, Avatar, Tooltip, Dialog, Sheet, Toast
  - Waveform (static and live), EmptyState
- Build the `AppShell` (sidebar per §8.2, top bar, page header, body), driven by the router.
- Add a development-only `/_kit` route that shows every component.

**Done when:** the kit page matches the Figma components (sidebar, buttons, pills, cards, table) in both languages, and the Playwright screenshot baseline is committed.

### Phase 3: Integration base

This phase is what lets `apps/api` and the telephony service plug in later without touching the screens.

- **`packages/contracts`:**
  - zod schemas for the §10 resources the screens use
  - the API route map (§11)
  - the live-event union
  - the `VoiceService` types and webhook events (§12)
  - an OpenAPI export script
- **`apps/web/src/data`:** the typed API client, the TanStack Query hooks, `AuthAdapter` and `LiveAdapter` (§11). `VITE_API_MODE` chooses the stand-in or the real API.
- **`apps/web/src/mocks`**, the stand-in API:
  - MSW handlers that implement the route map exactly
  - an in-memory store seeded from `demo-data`, with a reset
  - the mock login
  - the simulated live engine (§9), which also emits telephony-style call events
- **`apps/web/src/demo-data`:** fixtures that reproduce the Figma sample data (§9).
- **Contract tests:** every stand-in response and every live event parses against `packages/contracts`. These become the specification `apps/api` must pass in stage 2.

**Done when:**
- The contract tests pass.
- A lint rule fails CI if a screen calls `fetch` or imports from `src/mocks`.
- Setting `VITE_API_MODE=http` with no API running shows the app's proper "can't reach the server" state instead of crashing.

### Phase 4: All screens and the public demo

Build the screens in this order, each matched to its Figma frame (§8.3):

1. 13 Login
2. 01 Dashboard
3. 02 Calls
4. 03 Messages
5. 04 Customers
6. 05 Customer overview
7. 06 Customer WhatsApp
8. 07 Tasks
9. 08 AI agents
10. 09 Automations
11. 10 Integrations
12. 11 Reports
13. 12 Settings (privacy, plus empty states for the other sections)
14. 15 Sign up, behind its flag

For each screen:
- Read the frame through the Figma Console connector.
- Build it with `src/ui` and the `src/data` hooks.
- Check it in Hebrew and English at 1440 and 375 pixels.
- Run `web-design-guidelines` on the changed files.

Then deploy `build:demo` to Cloudflare Pages. This needs your Cloudflare login, and Claude asks before deploying.

**Done when:**
- Every route in §8.3 works on the stand-in.
- The Playwright suite clicks through every screen in both languages without console errors.
- The public demo URL loads.
- You've reviewed it.

### Phase 5: Contracts for the next stages

- Generate `docs/API_CONTRACT.md` and `docs/openapi.json` from `packages/contracts`: the platform API, live events and error shape.
- Write `docs/VOICE_SERVICE_CONTRACT.md` from §12 and the `VoiceService` types: the calls the platform makes, the webhooks it expects, signing and idempotency. This is the document to agree with the telephony project.

**Done when:** you've reviewed both documents. **Stage 1 ends here.** Stage 2 (`apps/api`) and stage 3 (the telephony service connection) start only when you ask. Their first job is to pass the same contract tests the stand-in passes.

---

## 19. Roadmap after stage 1

| Milestone | Outcome | Main pieces |
| --- | --- | --- |
| **M1: API foundation, accounts and CRM** | `apps/api` serving real login, organizations, customers, tasks, notes and timeline, passing the contract tests | Hono, Drizzle and Postgres with row-level security, Better Auth, pg-boss worker, `VOICE_SERVICE=mock`, Sentry, AWS CDK staging in `il-central-1` |
| **M2: Messaging** | Real WhatsApp and SMS with the messaging AI agent and take-over | §13 |
| **M3: Telephony service connection** | Calls, live listening and joining, recordings and handoffs come from the real service | `VoiceService` `http` implementation, the agreed contract, webhook handling |
| **M4: Automations** | After-call and after-message work runs automatically | The automation engine (screen 09), reminders, task creation |
| **M5: Integrations** | Fireberry and Google Calendar first, then Priority, Monday and Outlook | §14 |
| **M6: Compliance, reports, billing** | Privacy settings live, reports, usage metering | §15, screen 11, usage events |
| **M7: Design-partner beta** | 3 to 5 Israeli businesses live | Onboarding ("we build the first agent with you"), monitoring, support |

Accounts these stages need: AWS (`il-central-1`), the Anthropic API, Meta Business (WhatsApp), an SMS provider, Google Cloud and Microsoft Entra (sign-in and calendars), Sentry, and the telephony service's API credentials.

---

## 20. Quality and testing

- **Unit tests** (Vitest) for logic, contracts and adapters.
- **Contract tests** for the platform API and the `VoiceService` events (§18 phase 3). From stage 2 they also run against `apps/api`.
- **End-to-end tests** (Playwright):
  - a click-through of every screen in Hebrew and English
  - screenshot comparisons at 1440 and 375 pixels
  - axe accessibility checks
- **Definition of done for any UI work:** matches Figma, works in both languages, keyboard focus is visible, no layout shift, and `web-design-guidelines` has passed.

---

## 21. Open questions (owner: you)

1. The final product name (BRAND §4). The code uses `callpilot` internally, so renaming later is cheap.
2. Domain names: `app.`, `api.` and `demo.`.
3. The contract with the telephony project (§12): its API style, the event delivery method (webhooks or a stream), and who writes post-call summaries and sends post-call WhatsApp confirmations.
4. The SMS provider.
5. Where Claude inference runs for the messaging AI, and the zero-data-retention request (stage 2).
6. Pricing, seats and how voice minutes are metered from the service's usage events (POSITIONING §9).
7. Israeli counsel's sign-off on recording and AI notices, outbound consent and the privacy policy.
