// Central place for site-wide settings.
// Change values here once and they update everywhere on the website.

export const SITE = {
  // Brand name (shown in page titles, header and footer).
  name: 'Nestora',

  // Short tagline used in the homepage title.
  tagline: 'Home Decor & Organization Ideas',

  // Your real domain. IMPORTANT: replace this before going live.
  // It is used for canonical links, the sitemap and social sharing.
  url: 'https://muzammilrahimm-web.github.io',

  // Default description used when a page does not provide its own.
  description:
    'Nestora shares simple home decor and organization ideas for bedrooms, kitchens, closets and small spaces, for homes in the US and UK.',

  // Public contact email (shown on the Contact page).
  email: 'muzammilrahimm@gmail.com',

  // Language of the content.
  lang: 'en',

  // Primary locale for social sharing, plus the UK as an alternate audience.
  locale: 'en_US',
  alternateLocales: ['en_GB'],
};

// Main navigation links (header).
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Bedroom', href: '/bedroom' },
  { label: 'Kitchen', href: '/kitchen' },
  { label: 'Closet', href: '/closet' },
  { label: 'Small Spaces', href: '/small-spaces' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

// Footer link groups.
export const FOOTER_LINKS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Bedroom', href: '/bedroom' },
      { label: 'Kitchen', href: '/kitchen' },
      { label: 'Closet', href: '/closet' },
      { label: 'Small Spaces', href: '/small-spaces' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Nestora',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Sign up', href: '/signup' },
      { label: 'Log in', href: '/login' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms and Conditions', href: '/terms' },
    ],
  },
];
