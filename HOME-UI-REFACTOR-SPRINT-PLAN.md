# Home Page UI Refactor — Sprint Plan

**Reference:** `Home-screenshot-option.JPG`
**Scope:** Home page visual layout only — zero architectural changes
**Branch:** `final-demo`
**Date:** 2026-08-21

---

## Overview

Rebuild the Home page section flow to match the reference screenshot's alternating dark/light layout pattern. 9 new components, 4 file modifications, 0 logic changes.

---

## Sprint 1: Foundation & Theme Tokens

**Goal:** Enable alternating section backgrounds and create the top info bar.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 1.1 | Add `variant` prop to `Section` component (`"dark"` \| `"light"`) | `src/components/Section.tsx` | Modify |
| 1.2 | Create `TopInfoBar` component (contact info, social icons, badge) | `src/components/layout/TopInfoBar.tsx` | Create |
| 1.3 | Import and render `TopInfoBar` above `Header` in Layout | `src/components/layout/Layout.tsx` | Modify |
| 1.4 | Add `fontFamily: 'Rubik'` import to `index.css` (reference font) | `src/index.css` | Modify |

### Acceptance Criteria

- [ ] `Section variant="light"` renders with `bg-white text-gray-900`
- [ ] `Section variant="dark"` (default) renders with `bg-brand-primary text-brand-foreground`
- [ ] Top info bar displays above announcement bar with contact info + social icons
- [ ] Build passes (`npm run build`)

---

## Sprint 2: Hero Section Enhancement

**Goal:** Add static hero variant with text-left + image-right layout.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 2.1 | Add `mode` prop to `HeroSection` (`"slider"` \| `"static"`) | `src/components/hero/HeroSection.tsx` | Modify |
| 2.2 | In static mode: render left-aligned text + right image grid | `src/components/hero/HeroSection.tsx` | Modify |
| 2.3 | Add 3 CTA buttons in static mode: About us (primary), Explore (outline), Portfolio (text) | `src/components/hero/HeroSlideContent.tsx` | Modify |
| 2.4 | Create `HeroStaticLayout` sub-component for the right-side image grid | `src/components/hero/HeroStaticLayout.tsx` | Create |

### Acceptance Criteria

- [ ] Slider mode works unchanged (regression safe)
- [ ] Static mode renders with left text + right image grid
- [ ] 3 CTA buttons render with correct styling
- [ ] Keyboard navigation still works in slider mode

---

## Sprint 3: Our Services Section

**Goal:** Replace SuccessStoriesSection on home with OurServices (cards-left + text-right).

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 3.1 | Create `OurServices` component with 2-column layout | `src/components/home/OurServices.tsx` | Create |
| 3.2 | Left column: 3 service image cards (Telecom, Power, ICT) with images | `src/components/home/OurServices.tsx` | Create |
| 3.3 | Right column: "OUR SERVICES" label + description + "All services →" link | `src/components/home/OurServices.tsx` | Create |
| 3.4 | Use `portfolioData` or create `homeServiceCards` data for image cards | `src/data/constants.ts` | Modify |
| 3.5 | Replace `SuccessStoriesSection` import in home case with `OurServices` | `src/App.tsx` | Modify |

### Acceptance Criteria

- [ ] Light background section with 2-column layout
- [ ] Left side: 3 stacked image cards with hover effects
- [ ] Right side: heading, description, "All services" link
- [ ] Clicking cards navigates to correct service pages
- [ ] Responsive: stacks to single column on mobile

---

## Sprint 4: Testimonial Strip

**Goal:** Add dark testimonial section between Our Services and What We Offer.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 4.1 | Create `TestimonialStrip` component | `src/components/home/TestimonialStrip.tsx` | Create |
| 4.2 | Add testimonial data to constants (quote, name, designation, avatar) | `src/data/constants.ts` | Modify |
| 4.3 | Render: avatar left, quote center, name/designation below | `src/components/home/TestimonialStrip.tsx` | Create |
| 4.4 | Insert after `OurServices` in App.tsx home case | `src/App.tsx` | Modify |

### Acceptance Criteria

- [ ] Dark background strip, vertically centered content
- [ ] Avatar image left, quote text center-right
- [ ] Name and designation below quote
- [ ] Yellow accent on quote marks or divider

---

## Sprint 5: What We Offer Grid

**Goal:** Replace Capabilities section with 2x2 feature grid.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 5.1 | Create `WhatWeOffer` component with 2x2 grid | `src/components/home/WhatWeOffer.tsx` | Create |
| 5.2 | 4 feature cards: Advanced Technology, Expert Engineers, Customer Support, Delivery On time | `src/components/home/WhatWeOffer.tsx` | Create |
| 5.3 | Each card: icon + title + description + "Details →" link | `src/components/home/WhatWeOffer.tsx` | Create |
| 5.4 | Add `WHAT_WE_OFFER` data array to constants | `src/data/constants.ts` | Modify |
| 5.5 | Replace `Section id="capabilities"` in App.tsx with `WhatWeOffer` | `src/App.tsx` | Modify |

### Acceptance Criteria

- [ ] Light background, 2x2 grid on desktop, single column on mobile
- [ ] Each card has icon, title, description, "Details →" link
- [ ] Hover effect on cards (subtle lift or border)
- [ ] Consistent spacing between cards (gap-6 or gap-8)

---

## Sprint 6: Recent Projects Strip

**Goal:** Add dark strip with 3 project images.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 6.1 | Create `RecentProjects` component | `src/components/home/RecentProjects.tsx` | Create |
| 6.2 | "RECENT PROJECTS" heading centered + subtext | `src/components/home/RecentProjects.tsx` | Create |
| 6.3 | 3-column image grid using `portfolioData` | `src/components/home/RecentProjects.tsx` | Create |
| 6.4 | Insert after `WhatWeOffer` in App.tsx | `src/App.tsx` | Modify |

### Acceptance Criteria

- [ ] Dark background strip
- [ ] Centered heading with subtext
- [ ] 3 equal-width image cards in a row
- [ ] Responsive: stacks to 1 column on mobile

---

## Sprint 7: CTA Banner

**Goal:** Replace "Our Promise" section with left-text + right-buttons CTA.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 7.1 | Create `CTABanner` component | `src/components/home/CTABanner.tsx` | Create |
| 7.2 | Left: "Get full range of premium services..." heading | `src/components/home/CTABanner.tsx` | Create |
| 7.3 | Right: "Read now" (primary) + "Company History" (outline) buttons | `src/components/home/CTABanner.tsx` | Create |
| 7.4 | Below buttons: social icons row | `src/components/home/CTABanner.tsx` | Create |
| 7.5 | Replace CTA "Our Promise" section in App.tsx | `src/App.tsx` | Modify |

### Acceptance Criteria

- [ ] Light background, 2-column layout
- [ ] Left: bold heading text
- [ ] Right: 2 CTA buttons + social icons below
- [ ] Responsive: stacks on mobile

---

## Sprint 8: FAQ Section

**Goal:** Add accordion FAQ section.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 8.1 | Create `FAQSection` component with accordion | `src/components/home/FAQSection.tsx` | Create |
| 8.2 | Add FAQ data (3-4 questions + answers) to constants | `src/data/constants.ts` | Modify |
| 8.3 | Accordion: expand/collapse with smooth animation | `src/components/home/FAQSection.tsx` | Create |
| 8.4 | Insert after `CTABanner` in App.tsx | `src/App.tsx` | Modify |

### Acceptance Criteria

- [ ] Light background section
- [ ] Centered heading
- [ ] 3-4 accordion items with expand/collapse
- [ ] Smooth height animation on toggle
- [ ] Only one item open at a time (optional)

---

## Sprint 9: Partners, Contact Form, Recent News

**Goal:** Add partner logos, contact/quote form, and news cards.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 9.1 | Create `PartnersSection` (extract from current marquee) | `src/components/home/PartnersSection.tsx` | Create |
| 9.2 | Create `ContactQuoteForm` (2-column: info left, form right) | `src/components/home/ContactQuoteForm.tsx` | Create |
| 9.3 | Create `RecentNews` (3 news cards with images) | `src/components/home/RecentNews.tsx` | Create |
| 9.4 | Add news data to constants (placeholder) | `src/data/constants.ts` | Modify |
| 9.5 | Insert all 3 in App.tsx home case | `src/App.tsx` | Modify |

### Acceptance Criteria

- [ ] Partners: logo carousel on light background
- [ ] Contact form: left info (phone, email, address) + right form (name, email, subject, message, submit)
- [ ] Recent news: 3 cards with image, date, title, excerpt
- [ ] All responsive

---

## Sprint 10: Footer & Final Assembly

**Goal:** Update footer columns and wire everything together.

### Tasks

| # | Task | File | Type |
|---|------|------|------|
| 10.1 | Update Footer to 4-column layout (Services, Navigation, Contact, CTA) | `src/components/layout/Footer.tsx` | Modify |
| 10.2 | Final App.tsx home case assembly with all new sections | `src/App.tsx` | Modify |
| 10.3 | Remove unused imports (old SuccessStoriesSection, etc.) from App.tsx | `src/App.tsx` | Modify |
| 10.4 | Run full build verification | `npm run build` | Verify |
| 10.5 | Run lint check | `npm run lint` | Verify |
| 10.6 | Visual regression test (manual) | Browser | Verify |

### Acceptance Criteria

- [ ] All 12 sections render in correct order
- [ ] Dark/light alternation matches reference
- [ ] Build passes with 0 errors
- [ ] Lint passes (or pre-existing errors only)
- [ ] No console errors in browser

---

## Final Section Order (App.tsx home case)

```
1.  TopInfoBar          [dark]   — NEW
2.  Header              [dark]   — existing
3.  HeroSection         [dark]   — existing (static mode)
4.  OurServices         [light]  — NEW (replaces SuccessStoriesSection)
5.  TestimonialStrip    [dark]   — NEW
6.  WhatWeOffer         [light]  — NEW (replaces Capabilities)
7.  RecentProjects      [dark]   — NEW
8.  CTABanner           [light]  — NEW (replaces CTA "Our Promise")
9.  FAQSection          [light]  — NEW
10. PartnersSection     [light]  — NEW (extracted from marquee)
11. ContactQuoteForm    [light]  — NEW
12. RecentNews          [light]  — NEW
13. Footer              [dark]   — existing (updated columns)
```

---

## Files Summary

### New Files (11)

| File | Sprint |
|------|--------|
| `src/components/layout/TopInfoBar.tsx` | S1 |
| `src/components/hero/HeroStaticLayout.tsx` | S2 |
| `src/components/home/OurServices.tsx` | S3 |
| `src/components/home/TestimonialStrip.tsx` | S4 |
| `src/components/home/WhatWeOffer.tsx` | S5 |
| `src/components/home/RecentProjects.tsx` | S6 |
| `src/components/home/CTABanner.tsx` | S7 |
| `src/components/home/FAQSection.tsx` | S8 |
| `src/components/home/PartnersSection.tsx` | S9 |
| `src/components/home/ContactQuoteForm.tsx` | S9 |
| `src/components/home/RecentNews.tsx` | S9 |

### Modified Files (6)

| File | Sprint(s) |
|------|-----------|
| `src/components/Section.tsx` | S1 |
| `src/components/layout/Layout.tsx` | S1 |
| `src/components/layout/Footer.tsx` | S10 |
| `src/components/hero/HeroSection.tsx` | S2 |
| `src/data/constants.ts` | S3-S9 |
| `src/App.tsx` | S3-S10 |
| `src/index.css` | S1 |

### Untouched Files

- All page components (TelecomPage, ICTPage, PowerPage, MSPPage, AcademyPage)
- All hooks (useSlideTimer, useScrollAnimation)
- All utility files (routes.ts, api.ts)
- i18n configuration
- Build scripts (prerender.ts, generate-sitemap.ts)
- TypeScript types (types.ts)

---

## Risk Log

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Existing TS errors in PageSections.tsx | Low | Pre-existing; no new errors expected |
| Hero static mode breaks slider | Medium | Add `mode` prop with backward-compatible default |
| New components cause bundle bloat | Low | All are lightweight; lazy-load not needed |
| Alternating sections break responsive | Medium | Test each sprint at 375px, 768px, 1280px |
| Contact form duplicates existing modal | Low | Different UX pattern (inline vs modal) |

---

## Verification Checklist (Post-Sprint 10)

- [ ] `npm run build` — passes
- [ ] `npm run dev` — no console errors
- [ ] Home page renders all 12 sections
- [ ] Dark/light alternation matches reference
- [ ] All CTAs navigate correctly
- [ ] Mobile responsive (375px)
- [ ] Tablet responsive (768px)
- [ ] Desktop (1280px+)
- [ ] No regressions on other pages
