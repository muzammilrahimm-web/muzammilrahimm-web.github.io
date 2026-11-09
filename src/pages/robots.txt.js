// Generates /robots.txt automatically, using the site URL from astro.config.mjs.
// It tells search engines they may crawl the site and where the sitemap is.

export function GET({ site }) {
  const sitemapURL = new URL('sitemap-index.xml', site).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
