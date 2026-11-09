// /<category>/ideas.json: a small data file with every idea's card details.
// The category page's "Load more", filters and search read this file.
// It is generated automatically at build time from src/content/ideas.
import { CATEGORIES } from '../../data/content.js';
import { getIdeas, toFeedItem } from '../../lib/ideas.js';

export function getStaticPaths() {
  return CATEGORIES.map((c) => ({ params: { category: c.slug } }));
}

export async function GET({ params }) {
  const ideas = await getIdeas(params.category);
  const items = await Promise.all(ideas.map(toFeedItem));
  return new Response(JSON.stringify({ category: params.category, total: items.length, items }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
