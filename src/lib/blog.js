// Helper functions for the blog, shared by the homepage, blog pages and category pages.
import { getCollection } from 'astro:content';

// All published articles, newest first.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Related articles: same category first, then the newest others.
export function getRelated(posts, current, limit = 3) {
  const others = posts.filter((p) => p.id !== current.id);
  const same = others.filter((p) => p.data.category === current.data.category);
  const rest = others.filter((p) => p.data.category !== current.data.category);
  return [...same, ...rest].slice(0, limit);
}

// Articles for a category page: that category first, then other articles to fill the row.
export function getPostsForCategory(posts, slug, limit = 3) {
  const same = posts.filter((p) => p.data.category === slug);
  const rest = posts.filter((p) => p.data.category !== slug);
  return { inCategory: same, list: [...same, ...rest].slice(0, limit) };
}

// "9 November 2026" style date (clear for both US and UK readers).
export function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

// Estimated reading time from the article's word count (about 200 words per minute).
export function readingTime(markdown = '') {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Converts an article into the props that <ArticleCard> expects.
export function toCardProps(post) {
  return {
    title: post.data.title,
    excerpt: post.data.description,
    category: post.data.category,
    image: post.data.cover,
    alt: post.data.coverAlt,
    href: `/blog/${post.id}`,
    date: post.data.pubDate,
    demo: false,
  };
}
