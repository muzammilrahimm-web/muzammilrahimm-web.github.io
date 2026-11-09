// Content collections: tells Astro where content lives and which details
// (frontmatter) every file must have. If a file is missing a required field,
// the build stops with a clear error message.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { IDEA_TYPE_SLUGS, ROOM_SIZE_SLUGS, BUDGET_SLUGS } from './data/ideas.js';

const CATEGORY_SLUGS = ['bedroom', 'kitchen', 'closet', 'small-spaces'];

/* ---------- Blog articles: src/content/blog/*.md ---------- */
const blog = defineCollection({
  // The file name becomes the URL, e.g. small-bedroom-storage-ideas.md -> /blog/small-bedroom-storage-ideas
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(90),
      // Used as the meta description: keep it under ~160 characters.
      description: z.string().max(170),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(CATEGORY_SLUGS),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean().default(false),
    }),
});

/* ---------- Design ideas: src/content/ideas/<category>/*.md ----------
   Add as many as you like. Each file becomes a page at
   /<category>/ideas/<file-name>, e.g. /bedroom/ideas/japandi-calm-bedroom */
const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ideas' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(90),
      description: z.string().min(50).max(170),
      category: z.enum(CATEGORY_SLUGS),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      // Shown on the idea page, e.g. "Japandi", "Scandinavian", "Modern farmhouse"
      designStyle: z.string().max(40),
      // One or more idea types from src/data/ideas.js
      types: z.array(z.enum(IDEA_TYPE_SLUGS)).min(1),
      roomSize: z.enum(ROOM_SIZE_SLUGS),
      budget: z.enum(BUDGET_SLUGS),

      // 2 to 6 colours with a name and a hex code like #e8dfd3
      palette: z
        .array(z.object({ name: z.string(), hex: z.string().regex(/^#[0-9a-fA-F]{6}$/) }))
        .min(2)
        .max(6),
      // Furniture & decor suggestions, and organization tips
      suggestions: z.array(z.string()).min(3),
      tips: z.array(z.string()).min(3),

      cover: image(),
      coverAlt: z.string().min(10),

      // Optional "before" photo for Before & After ideas (use your own real photo)
      before: z.object({ image: image(), alt: z.string() }).optional(),

      // Editorial highlights chosen by the Nestora team
      featured: z.boolean().default(false),
      popular: z.boolean().default(false),
      trending: z.boolean().default(false),

      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, ideas };
