# Call Pilot site

@AGENTS.md

## Claude Code workflow

This is a Hebrew-first (RTL), bilingual Astro landing page for a SaaS product. `docs/DESIGN_PRINCIPLES.md` is the source of truth for design; read it before any UI work.

- **Product and message come from `docs/POSITIONING.md`; voice and naming from `docs/BRAND.md`.** Don't invent features, customers, numbers or certifications beyond them.
- **Visual identity (palette, fonts) is not chosen yet.** Keep the placeholders in `src/styles/global.css` until the user picks a direction in BRAND.md §5.
- **Work in stages the user sets.** Don't jump ahead to the next stage (e.g. visual style) unprompted; ask instead.
- **Every page and component ships in both locales.** Design and check Hebrew first, then English.

## Skills (in `.claude/skills/`)

| When | Skill |
| --- | --- |
| Adding motion or polish to one element (button, reveal, hover, image reveal, depth) | `emil-design-eng` (where `choreograph` mentions `animate`, use this instead) |
| Several elements moving together (hero entrance, staggered list, step story) | `choreograph` |
| Before calling motion work done | `/review-animations` (manual only) |
| Before calling any UI section done | `web-design-guidelines` on the changed files |
| Writing or reviewing page copy (structure, headlines, CTAs) | `copywriting` |
| Positioning, the core promise, headline strength | `ogilvy` |

Both copy skills are English-centric: for Hebrew, apply their principles together with the "Hebrew copy" rules in §8 of the design doc.

Where a skill's generic value conflicts with the design doc (easing tokens, durations for marketing reveals, Title Case), the design doc wins. Reuse the existing tokens in `global.css` and helpers in `src/scripts/motion.ts`; don't add a parallel system.

## Verify

- `npm run build` must pass.
- For visual changes, run the dev server (`npx astro dev --background`) and screenshot `/` and `/en/` at mobile (375px) and desktop (1440px) widths. Check against the quality floor in §10 of the design doc. If you can't open a browser, say so.
