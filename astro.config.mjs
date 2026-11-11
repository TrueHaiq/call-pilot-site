// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Live URL (Cloudflare). Replace with the custom domain once it is connected.
  site: 'https://call-pilot-site.tomerhaik3.workers.dev',

  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
    routing: { prefixDefaultLocale: false }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'he', locales: { he: 'he-IL', en: 'en-US' } }
    })
  ]
});
