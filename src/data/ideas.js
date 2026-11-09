// Design ideas taxonomy: the labels used for filtering ideas.
// To add a new type, room size or budget level, add it here once;
// the filters, cards and idea pages pick it up automatically.

// Idea types (a design idea can have several).
export const IDEA_TYPES = [
  { slug: 'modern', label: 'Modern' },
  { slug: 'minimalist', label: 'Minimalist' },
  { slug: 'luxury', label: 'Luxury' },
  { slug: 'budget-friendly', label: 'Budget-friendly' },
  { slug: 'small-space', label: 'Small-space' },
  { slug: 'diy', label: 'DIY' },
  { slug: 'before-after', label: 'Before & After' },
  { slug: 'storage', label: 'Storage solutions' },
  { slug: 'color', label: 'Color combinations' },
  { slug: 'furniture-layout', label: 'Furniture arrangement' },
  { slug: 'seasonal', label: 'Seasonal' },
];

export const ROOM_SIZES = [
  { slug: 'small', label: 'Small room' },
  { slug: 'medium', label: 'Medium room' },
  { slug: 'large', label: 'Large room' },
];

export const BUDGETS = [
  { slug: 'low', label: 'Budget' },
  { slug: 'mid', label: 'Mid-range' },
  { slug: 'high', label: 'Investment' },
];

// How many idea cards to show at once before "Load more".
export const IDEAS_PAGE_SIZE = 12;

// Slugs only (used by the content collection schema).
export const IDEA_TYPE_SLUGS = IDEA_TYPES.map((t) => t.slug);
export const ROOM_SIZE_SLUGS = ROOM_SIZES.map((s) => s.slug);
export const BUDGET_SLUGS = BUDGETS.map((b) => b.slug);

const labelOf = (list, slug) => list.find((item) => item.slug === slug)?.label ?? slug;
export const typeLabel = (slug) => labelOf(IDEA_TYPES, slug);
export const sizeLabel = (slug) => labelOf(ROOM_SIZES, slug);
export const budgetLabel = (slug) => labelOf(BUDGETS, slug);
