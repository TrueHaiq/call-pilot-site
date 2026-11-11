## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Design

Read `docs/DESIGN_PRINCIPLES.md` before any design or UI work, and `docs/POSITIONING.md` + `docs/BRAND.md` before writing copy or page structure. It defines spacing, typography, color tokens, motion rules and the quality checklist.

- Tokens: `src/styles/global.css` (Tailwind v4 `@theme`)
- Motion: `src/scripts/motion.ts` (`motion` vanilla API + `lenis`); use `data-reveal` / `data-reveal-stagger` attributes
- Layout shell: `src/layouts/Base.astro`
- Languages: Hebrew (default, RTL) at `/`, English at `/en/`; strings in `src/i18n/ui.ts`. Use logical Tailwind utilities (`ms/me/ps/pe/start/end`), never `ml/mr/left/right` (see §11 of the design doc)
