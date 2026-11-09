// Website content data: categories, demo articles and popular ideas.
// Images are imported from src/assets so Astro can optimize them automatically.
// Photos: Unsplash (free to use under the Unsplash License).

import bedroom from '../assets/images/bedroom.jpg';
import kitchen from '../assets/images/kitchen.jpg';
import closetShelving from '../assets/images/closet-shelving.jpg';
import smallApartment from '../assets/images/small-apartment.jpg';
import bedroomBench from '../assets/images/bedroom-bench.jpg';
import kitchenCooking from '../assets/images/kitchen-cooking.jpg';
import bohoLivingRoom from '../assets/images/boho-living-room.jpg';

/* ---------------------------------------------------------
   Categories (used on the homepage and the category pages)
   --------------------------------------------------------- */
export const CATEGORIES = [
  {
    slug: 'bedroom',
    href: '/bedroom',
    name: 'Bedroom',
    title: 'Bedroom Design & Organization',
    theme: { tint: '#f1e7df', deep: '#e3d1c4', mood: 'Restful', number: '01' },
    blurb: 'Calm, clutter-free bedrooms with storage that works quietly in the background.',
    image: bedroom,
    alt: 'Bright bedroom with a tufted cream headboard, grey bedding, matching bedside lamps and an upholstered bench at the foot of the bed',
    seoTitle: 'Bedroom Design & Organization Ideas',
    seoDescription:
      'Bedroom design ideas from Japandi to luxury, plus small-bedroom storage, colour palettes and organization tips. Filter by style, size and budget.',
    intro:
      'Your bedroom should be the calmest room in your home. These ideas focus on hidden storage, soft colour and small daily habits that keep clutter away.',
    tips: [
      { title: 'Use the space under the bed', text: 'Lidded boxes or drawers on castors keep spare bedding and out-of-season clothes dust-free and out of sight.' },
      { title: 'Give the bedside a job', text: 'Keep only what you use at night (a lamp, a book, a glass of water) and move everything else to a drawer.' },
      { title: 'Add a bench at the foot of the bed', text: 'A storage bench gives you a place to sit, plus room for throws and extra pillows.' },
      { title: 'Choose a soft, restful palette', text: 'Warm whites, oatmeal and muted greens make a room feel bigger and quieter.' },
    ],
  },
  {
    slug: 'kitchen',
    href: '/kitchen',
    name: 'Kitchen',
    title: 'Kitchen Design & Organization',
    theme: { tint: '#e4eadc', deep: '#cfdac3', mood: 'Fresh', number: '02' },
    blurb: 'Smart zones, tidy cupboards and clear worktops for a kitchen that is a joy to cook in.',
    image: kitchen,
    alt: 'White modern kitchen with stainless steel appliances, black pendant lights and a breakfast island with two black stools',
    seoTitle: 'Kitchen Design & Organization Ideas',
    seoDescription:
      'Kitchen design ideas: open shelving, two-tone colour schemes, island layouts and storage, with organization tips for US and UK kitchens.',
    intro:
      'A well-organized kitchen saves time every single day. Start with zones, then make every cupboard and drawer easy to reach and easy to reset.',
    tips: [
      { title: 'Organize by zones', text: 'Keep pans near the hob, plates near the dishwasher and prep tools near your main worktop.' },
      { title: 'Clear the worktops', text: 'Only keep appliances you use daily on the counter. Everything else lives in a cupboard.' },
      { title: 'Decant dry goods', text: 'Matching clear containers make it easy to see what you have and when to restock.' },
      { title: 'Use vertical space', text: 'Shelf risers, door racks and wall rails double the storage of a small kitchen.' },
    ],
  },
  {
    slug: 'closet',
    href: '/closet',
    name: 'Closet',
    title: 'Closet & Wardrobe Design',
    theme: { tint: '#ede4d7', deep: '#dccdb8', mood: 'Curated', number: '03' },
    blurb: 'Wardrobes and closets that make getting dressed simple, with a place for everything.',
    image: closetShelving,
    alt: 'Tall wooden open shelving unit with folded towels and toiletries arranged neatly in cubbies',
    seoTitle: 'Closet & Wardrobe Design Ideas',
    seoDescription:
      'Closet and wardrobe design ideas: open wardrobe systems, capsule rails, colour sorting and folding methods, with simple organization tips.',
    intro:
      'Whether you call it a closet or a wardrobe, the goal is the same: see everything you own and find it in seconds.',
    tips: [
      { title: 'Declutter first', text: 'Before buying any organizers, remove what you no longer wear. You may need less storage than you think.' },
      { title: 'Use matching hangers', text: 'Slim, matching hangers save space and instantly make a wardrobe look calmer.' },
      { title: 'Fold knitwear', text: 'Fold heavy jumpers and sweaters onto shelves so they keep their shape.' },
      { title: 'Rotate by season', text: 'Store off-season clothes in labelled boxes high up or under the bed.' },
    ],
  },
  {
    slug: 'small-spaces',
    href: '/small-spaces',
    name: 'Small Spaces',
    title: 'Small Spaces Design & Organization',
    theme: { tint: '#f3eee4', deep: '#e2d9c8', mood: 'Clever', number: '04' },
    blurb: 'Make a compact flat or apartment feel open, bright and full of personality.',
    image: smallApartment,
    alt: 'Cosy small living room with a grey sofa, wooden chairs, bookshelves and many houseplants beside a sunny window',
    seoTitle: 'Small Space Design & Apartment Decor Ideas',
    seoDescription:
      'Small space design ideas for apartments and flats: studio layouts, compact living rooms, home office corners and clever storage.',
    intro:
      'Small homes can feel spacious with the right layout. Think light, multi-purpose furniture and storage that climbs the walls.',
    tips: [
      { title: 'Choose multi-purpose furniture', text: 'Ottomans with storage, extendable tables and sofa beds work twice as hard.' },
      { title: 'Go vertical', text: 'Tall shelves and wall-mounted storage free up valuable floor space.' },
      { title: 'Use mirrors and light', text: 'A large mirror opposite a window bounces light around and makes a room feel bigger.' },
      { title: 'Keep a clear path', text: 'Leave open walkways so a small room feels easy to move through.' },
    ],
  },
];

/* ---------------------------------------------------------
   Popular ideas: DEMO CONTENT ONLY.
   --------------------------------------------------------- */
export const POPULAR_IDEAS = [
  {
    title: 'Small Bedroom Storage Ideas',
    excerpt: 'Benches, under-bed drawers and wall hooks that make a small bedroom feel twice the size.',
    category: 'bedroom',
    image: bedroomBench,
    alt: 'Bedroom with white bedding, patterned cushions and two orange upholstered stools at the foot of the bed',
  },
  {
    title: 'Smart Kitchen Organization',
    excerpt: 'Set up cooking zones and open shelves so everything you need is within arm’s reach.',
    category: 'kitchen',
    image: kitchenCooking,
    alt: 'Two people cooking together at a stove in a bright kitchen with red pots on open wooden shelves',
  },
  {
    title: 'Budget-Friendly Home Decor',
    excerpt: 'Plants, textiles and thrifted finds that refresh a room without a big spend.',
    category: 'small-spaces',
    image: bohoLivingRoom,
    alt: 'Boho living room with a tan leather sofa, macramé wall hanging, pink armchairs and large potted plants',
  },
];

// Helper: find a category by its slug.
export function getCategory(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}
