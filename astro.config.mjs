// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.js';

// https://astro.build/config
export default defineConfig({
  // The full website address. Required for the sitemap and canonical URLs.
  // Change it in src/config/site.js.
  site: SITE.url,

  // GitHub Pages serves each page as a folder, e.g. /about/ (it redirects /about to /about/).
  // 'ignore' lets both work locally, while canonical links and the sitemap use the final /about/ form.
  trailingSlash: 'ignore',

  integrations: [
    sitemap({
      // Leave out pages hidden from search engines (noindex):
      // account pages and the page-by-page ideas archive (/bedroom/ideas, /bedroom/ideas/page/2 ...).
      filter: (page) =>
        !/\/(login|signup|forgot-password)\/?$/.test(page) &&
        !/\/ideas\/?$/.test(page) &&
        !/\/ideas\/page\//.test(page),
    }),
  ],
});
