// Helper functions for design ideas (used by category pages, idea pages and the JSON feed).
import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';
import { getCategory } from '../data/content.js';
import { typeLabel, sizeLabel, budgetLabel } from '../data/ideas.js';

// The last part of the file path, e.g. "bedroom/japandi-calm-bedroom" -> "japandi-calm-bedroom"
export const ideaSlug = (idea) => idea.id.split('/').pop();
export const ideaUrl = (idea) => `/${idea.data.category}/ideas/${ideaSlug(idea)}`;

// All published ideas (optionally for one category), newest first.
export async function getIdeas(category) {
  const ideas = await getCollection(
    'ideas',
    ({ data }) => !data.draft && (!category || data.category === category),
  );
  return ideas.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Sections for a category page. Each idea appears in only one highlight
// section, so the page never repeats the same card.
export function getCategorySections(ideas) {
  const used = new Set();
  const take = (list, n) => {
    const picked = list.filter((i) => !used.has(i.id)).slice(0, n);
    picked.forEach((i) => used.add(i.id));
    return picked;
  };
  const featured = take(ideas.filter((i) => i.data.featured), 1);
  const popular = take(ideas.filter((i) => i.data.popular), 6);
  const trending = take(ideas.filter((i) => i.data.trending), 8);
  return { featured: featured[0], popular, trending };
}

// Related ideas: same category with the most shared idea types first,
// then ideas from other categories that share types.
export function getRelatedIdeas(all, current, limit = 3) {
  const score = (idea) => {
    const shared = idea.data.types.filter((t) => current.data.types.includes(t)).length;
    return shared + (idea.data.category === current.data.category ? 10 : 0);
  };
  return all
    .filter((i) => i.id !== current.id)
    .map((i) => ({ idea: i, s: score(i) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s || b.idea.data.pubDate - a.idea.data.pubDate)
    .slice(0, limit)
    .map(({ idea }) => idea);
}

// Short meta line for cards, e.g. "Japandi · Budget"
export const ideaMeta = (data) => `${data.designStyle} · ${budgetLabel(data.budget)}`;

// Lightweight data for the browser "Load more" feed (/<category>/ideas.json).
export async function toFeedItem(idea) {
  const { data } = idea;
  const width = 600;
  const thumb = await getImage({ src: data.cover, width, format: 'webp' });
  return {
    url: ideaUrl(idea),
    title: data.title,
    description: data.description,
    meta: ideaMeta(data),
    designStyle: data.designStyle,
    types: data.types,
    typeLabels: data.types.map(typeLabel),
    roomSize: data.roomSize,
    roomSizeLabel: sizeLabel(data.roomSize),
    budget: data.budget,
    budgetLabel: budgetLabel(data.budget),
    category: getCategory(data.category)?.name ?? data.category,
    image: {
      src: thumb.src,
      width,
      height: Math.round((width * data.cover.height) / data.cover.width),
      alt: data.coverAlt,
    },
    date: data.pubDate.toISOString().slice(0, 10),
  };
}
