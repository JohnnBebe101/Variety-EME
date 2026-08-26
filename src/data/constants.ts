// Barrel re-export for backward compatibility.
// New code should import from specific files:
//   import { SITE } from './siteConfig';
//   import { NAV_CONFIG } from './navigationConfig';
//   import { HERO, PARTNERS, STATS } from './homeContent';
//   etc.

export { SITE } from './siteConfig';
export { NAV_CONFIG } from './navigationConfig';
export { HERO, PARTNERS, STATS, UI_CLASSES, HOME_SERVICE_CARDS, TESTIMONIAL_DATA, WHAT_WE_OFFER_ITEMS } from './homeContent';
export type { HomeServiceCard, TestimonialData, WhatWeOfferItem } from './homeContent';
export { FAQ_DATA } from './faqData';
export type { FAQItem } from './faqData';
export { NEWS_DATA } from './newsData';
export type { NewsItem } from './newsData';
export { ISO_DATA } from './isoData';
export type { ISOEntry } from './isoData';
