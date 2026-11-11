# Design Principles

The working rulebook for the Call Pilot landing page. Every design and code decision should be traceable to something here. If a decision breaks a rule, either change the decision or change this doc on purpose.

Brand-specific values (palette, typefaces, voice) are marked **TBD** until we have the product brief.

---

## 1. North star

**Clear first, then memorable.** A visitor should understand what the product does, who it's for and what to do next within 5 seconds of the hero, without scrolling. Creativity lives in *one* signature element per section, never at the cost of legibility.

Three tests for any screen:

1. **Squint test**: blur your eyes. Is there exactly one obvious focal point and one obvious action?
2. **Delete test**: remove one element (Chanel's rule). If nothing is lost, keep it removed.
3. **Template test**: could this section ship unchanged on any other SaaS site? If yes, it isn't specific enough yet.

## 2. Stack

| Concern | Tool | Why |
| --- | --- | --- |
| Framework | Astro 7 | Zero JS by default; ship HTML, hydrate only what moves. |
| Styling | Tailwind v4 (`@theme` tokens in `src/styles/global.css`) | Tokens become utilities; one source of truth. |
| Animation | `motion` (vanilla API: `animate`, `inView`, `scroll`, `stagger`, `hover`, `press`) | Same engine as Framer Motion, hardware-accelerated, no React needed. |
| Smooth scroll | `lenis` | The "Framer feel" of inertial scrolling; works with native scroll and `position: sticky`. |
| Interactive islands | Plain `<script>` in `.astro` first; add a UI framework only if a component truly needs state | Keep the bundle small. |
| Languages | Astro i18n routing: Hebrew (default) at `/`, English at `/en/`. Strings in `src/i18n/ui.ts` | Hebrew-first, RTL-first. See §11. |

Helpers live in `src/scripts/motion.ts` and are wired up once in `src/layouts/Base.astro`.

## 3. Layout and spacing

Spacing is the main tool for clarity. When in doubt, add space, not borders.

- **Base unit: 4px, rhythm on 8px.** Use only token steps (Tailwind's default scale). No arbitrary `mt-[13px]`.
- **Section padding:** `--space-section` (fluid, ~96px on mobile to ~160px on desktop). Sections breathe; content inside them is tight and grouped.
- **Proximity over decoration:** related things sit close together (8–16px), unrelated groups sit far apart (48px+). The gap between groups should be at least 2x the gap inside them.
- **Container:** max `--container` (1200px), 24px gutter on mobile, 32px on desktop. Wide visuals may break out to `--container-wide` (1440px).
- **Line length:** body copy 45–75 characters (`max-w-prose` / `65ch`). Headlines are capped too; never full-width text.
- **Alignment:** pick one per section and commit. Default is start-aligned content with a strong start edge (right in Hebrew, left in English). Center alignment is reserved for the hero and the final CTA, short text only.
- **Grid:** 12 columns desktop, 4 mobile. Asymmetric splits (5/7, 4/8) feel more designed than 6/6.
- **Mobile is not an afterthought:** design each section at 375px wide before calling it done. No horizontal scroll, ever.

## 4. Typography

Typography carries the personality. **Typefaces: TBD with the brief.**

- **Every typeface must have real Hebrew and Latin glyphs**, designed to work together (matching weights and x-height/letter height). Pick the Hebrew face first, then match the Latin to it, not the other way round.
- One or two families max. If two, they must be clearly different (e.g. a characterful display + a neutral text face). Avoid the defaults (Inter-for-everything, generic serif + cream background).
- **Scale:** modular, ratio ~1.25 for text and ~1.333 for display, fluid with `clamp()`. Tokens: `text-xs` → `text-display`.
- **Headlines:** tight leading (1.0–1.1 Latin, ~1.1–1.2 Hebrew). Negative tracking (-0.02em to -0.04em) is for Latin only; Hebrew stays at 0 or near it. The headline treatment itself can be the visual (scale, weight, word reveal), not just a label.
- **Body:** 16–18px, leading 1.5–1.65, regular weight, high contrast against the background.
- **Hierarchy through size and weight, not color alone.** Max 3 text colors: primary, secondary (muted), and accent for interactive text.
- **Avoid the common tells:**
  - an ALL-CAPS tracked eyebrow above every heading
  - highlighting a single word of a headline in a different color or italic
  - `→` appended to every button and link
  - monospace for small labels just for "tech flavor"
- Use sentence case everywhere: buttons, headings, nav.

## 5. Color

**Palette: TBD with the brief.** Structure is fixed now so the values can drop in later:

| Token | Role |
| --- | --- |
| `--color-bg` | Page background |
| `--color-surface` | Raised surfaces (cards, panels, product frames) |
| `--color-ink` | Primary text |
| `--color-ink-muted` | Secondary text |
| `--color-line` | Hairlines and dividers, used sparingly |
| `--color-accent` | Brand action color: primary CTA, focus ring, key highlights |
| `--color-accent-ink` | Text on accent |

Rules:

- **The accent is earned.** Reserve it for the primary action and one or two highlights per viewport. If everything glows, nothing does.
- **Contrast:** body text ≥ 4.5:1, large text and UI ≥ 3:1 (WCAG AA). Check muted text on surface colors too.
- **Gradients, glows and noise** are allowed when they *mean* something (light from the product, a signal, depth), never as filler behind every card.
- Pure black or tinted near-black (#0B0B0B) is a default, not a choice. If we go dark, pick a dark with a reason.

## 6. Components and surfaces

- **Radius has hierarchy:** small for inputs and chips, medium for cards, large for product frames. Nested radius = outer radius − padding.
- **Depth:** prefer layered borders (1px inner highlight + soft outer shadow) over a single grey drop shadow. Shadows should match the light direction of the page.
- **Don't chop everything into identical cards.** Vary the shape of content: a big product shot, a list, a quote, a comparison. The card grid is one option, not the default.
- **Product visuals beat illustrations.** Real UI (or high-fidelity mocks of it) shows what the product does. Animate the product itself where we can.
- **Structural devices carry information.** Numbers (01/02/03) only for real sequences. Borders and dividers only where they separate meaning.
- **Buttons:** one primary per viewport. Secondary is visibly quieter. Minimum hit area 44×44px. Label says exactly what happens ("Start free trial", "Book a demo"), not "Submit" or "Learn more".

## 7. Motion

Motion is the signature of the Framer style, so it gets the most rules. Its job is to **guide attention, explain the product, and confirm actions**, in that order.

### 7.1 Principles

1. **One orchestrated moment per section, max.** The hero gets a choreographed load sequence; other sections get at most one meaningful reveal or one scroll-driven story. Not every element needs to move.
2. **Motion has a purpose.** Each animation answers "what does this help the user notice or understand?" If there's no answer, cut it.
3. **Interaction motion is always welcome:** hover, press, open/close, tab change. It responds to the user and shows what changed.
4. **Fast and quiet.** Entrances 400–800ms, UI feedback 150–250ms. Nothing over 1s except scroll-linked sequences.
5. **Natural easing.** Ease-out for entrances (things arrive and settle), ease-in-out for things moving on screen, springs for anything the user drags or presses. Never linear, except for constant loops like marquees.
6. **Small distances.** Horizontal motion follows reading direction, so it mirrors in RTL (use the sign from `dir`, never a hardcoded `x: -20`). Reveal offsets of 12–24px, scale from 0.96–0.98, blur from 4–8px. Large travel feels cheap.
7. **Stagger to show structure.** 40–80ms between siblings (hero: up to 100–150ms), total sequence under ~600ms. Never a uniform stagger: gaps shrink along the group (eased delays), and the lead element travels further than supporting ones.
8. **One entrance per container.** If a panel reveals, its children are already there. Never reveal a parent *and* stagger its children.
9. **Hover motion only for mouse users.** Gate hover transforms behind `@media (hover: hover) and (pointer: fine)`; touch fires false hovers.
10. **Never block interaction.** Anything visible is clickable; a delayed reveal never holds back a CTA.

### 7.2 Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, reveals (expo-out, the Framer feel) |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | On-screen movement, morphs |
| `--duration-fast` | 150ms | Hover, color, focus |
| `--duration-base` | 250ms | Small UI transitions, dropdowns |
| `--duration-slow` | 450ms | Panels, tabs, layout shifts |
| `--duration-reveal` | 700ms | Scroll / load reveals |
| Spring (JS) | `{ type: "spring", stiffness: 400, damping: 30 }` | Press, drag, toggles |

UI feedback (hover, press, menus, tabs) stays under 300ms. The longer `--duration-reveal` is only for marketing reveals seen once per visit.

### 7.3 Signature techniques (pick per section, don't stack them all)

- **Blur-in reveal:** opacity 0→1, y 16→0, blur 6px→0. The house entrance. `data-reveal`
- **Staggered children:** for lists, logos, feature rows. `data-reveal-stagger`
- **Headline word/line reveal:** words rise in from a mask. Hero only.
- **Scroll-linked storytelling:** a sticky product frame that changes state as the user scrolls (Motion `scroll()`). Best for "how it works".
- **Parallax depth:** subtle (≤ 10% speed difference) on layered visuals.
- **Marquee:** slow, constant, pauses on hover. For logos or testimonials.
- **Magnetic / tilt hover:** only on the primary CTA or the hero visual.
- **Number count-up:** only when the number is the point.

### 7.4 Performance and accessibility (non-negotiable)

- Animate only `transform`, `opacity`, `filter`, and `clip-path`. Never `width`, `height`, `top`, `left`, or `box-shadow` in loops.
- Content must be visible without JavaScript. Hidden initial states apply only when the `js` class is on `<html>`.
- `prefers-reduced-motion: reduce` → gentler, not zero: keep short opacity/color fades (~200ms), drop all movement, staggers, smooth scroll and parallax. Every animation ships its reduced variant; `motion.ts` already does this for reveals and Lenis.
- No layout shift (CLS ≈ 0): reserve space for anything that animates in.
- Reveals trigger once (no re-animating when scrolling back up), slightly before the element is fully in view.
- Never block reading: text never waits more than ~300ms to start appearing.

## 8. Content and copy

- Write for the visitor's problem, not the product's architecture. "Get paid faster" over "AI-powered invoicing orchestration".
- Headline: what it is + the outcome, ≤ 10 words. Subhead: how / for whom, ≤ 25 words.
- Plain verbs, active voice, sentence case, no filler ("seamless", "revolutionary", "unlock").
- Each section answers one question in this order: *What is it? → Why care? → How does it work? → Can I trust it? → What does it cost? → What do I do now?*
- Use real (or realistic) content during design. No lorem ipsum: copy changes the layout.

### Hebrew copy

The copywriting principles (positioning, one promise, benefits, specificity) apply as-is; these rules adapt the mechanics.

- **Write Hebrew first**, then write English from the same idea. Never translate a headline literally in either direction.
- **Gender-neutral address:** use the plural imperative ("התחילו", "נסו בחינם") or the infinitive ("להתחיל"). No slash forms ("התחל/י").
- **Register:** spoken and direct, like a sharp Israeli product team talks. No formal or translated tone ("הנכם מוזמנים").
- **Tech terms:** use the word customers actually say. Common loanwords (AI, דשבורד, אפליקציה) are fine; don't force an academic Hebrew coinage, and don't leave English where a natural Hebrew word exists.
- **No capitals:** emphasis comes from size, weight and layout, never from styling a single word.
- **Punctuation:** gershayim ״ and geresh ׳ for abbreviations and loan sounds (מנכ״ל, ג׳), en dash for ranges. Numbers and Latin names inside Hebrew text follow §11.

## 9. Page structure (default flow, adjust with the brief)

1. **Nav:** logo, 3–5 links, one CTA. Becomes compact/blurred on scroll.
2. **Hero:** headline, subhead, primary + secondary CTA, product visual. The orchestrated load moment.
3. **Social proof:** logos or a single strong metric/quote, right under the hero.
4. **Problem → solution:** the pain in the visitor's words.
5. **How it works:** 3–4 real steps (this one *is* a sequence, so numbering is OK). Scroll-linked product story.
6. **Features / benefits:** varied layout (bento, alternating rows, or tabs), not a uniform card grid.
7. **Testimonials / case study.**
8. **Pricing** (if public).
9. **FAQ:** handles objections.
10. **Final CTA:** restates the promise, one action.
11. **Footer.**

## 10. Quality floor (check before calling any section done)

- [ ] Looks right at 375px, 768px, 1280px and 1600px wide
- [ ] Visible keyboard focus on every interactive element (accent focus ring)
- [ ] Reduced motion respected
- [ ] Text contrast passes AA
- [ ] Images have `alt`, use Astro `<Image>`, and have explicit dimensions
- [ ] No layout shift on load; Lighthouse performance ≥ 95
- [ ] Semantic HTML: one `h1`, ordered headings, `<nav>`, `<main>`, `<footer>`, real `<button>`s and `<a>`s
- [ ] Checked in both Hebrew (RTL) and English (LTR), each with its own real copy
- [ ] Meets Israeli accessibility standard IS 5568 (WCAG AA); site has a Hebrew accessibility statement page
- [ ] Lead forms keep marketing consent as a separate, unticked checkbox (spam law §30A)
- [ ] Screenshot reviewed against the three tests in §1

## 11. Bilingual and RTL

Hebrew is the primary language. Design and review in Hebrew first; English is the adaptation, not the other way round.

- **Routing:** `/` is Hebrew, `/en/` is English. Every page exists in both. The language switcher keeps the visitor on the same page.
- **Direction comes from `<html dir>`**, set in `Base.astro` from the locale. Never hardcode a direction in a component.
- **Logical properties only:** `ms-* me-* ps-* pe-* start-* end-* text-start text-end rounded-s-* border-e`, never `ml/mr/pl/pr/left/right/text-left`. Use Tailwind's `rtl:` / `ltr:` variants only when something truly differs.
- **Mirror what has direction:** arrows, chevrons, progress, sliders, carousels, timelines and the start/end of asymmetric layouts. **Don't mirror** logos, product screenshots, media controls (play ▶ stays), clocks, charts with numeric axes, or phone numbers.
- **Mixed text:** English brand names, numbers and code inside Hebrew text need `<bdi>` or `dir="auto"` when they sit next to punctuation, or the order breaks.
- **Copy length differs:** Hebrew is often shorter than English and has no capitals. Design for the longer of the two; don't fix widths to one language's text.
- **Translation is per locale, not per word:** each language gets its own headline that reads naturally, not a literal translation. Strings live in `src/i18n/ui.ts` (UI chrome) or per-locale content (page copy).
- **Typography differs per script:** Hebrew usually needs slightly more line-height and a slightly larger size to feel the same as Latin. Set per-locale overrides with `:lang(he)` rather than one compromise value.
