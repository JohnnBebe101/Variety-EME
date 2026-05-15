# InfinEth Image Enhancement — Technical Execution Plan

**Date:** May 14, 2026  
**Status:** Plan Only — No Code Changes Made  
**Purpose:** Detailed file-change specification for implementation

---

## Overview

This plan details exact code changes required to implement the image enhancement strategy. All image assets are already processed and ready in subfolders (`_640`, `_1024`, `_1920`). Only data file updates are needed.

---

## File Change List

### 1. `src/data/heroSlides.ts`

**Current State:** 5 slides, single `image` field per slide  
**Required State:** 6 slides, each with `image` (1920w), `tablet` (1024w), `mobile` (640w)

**Changes:**

| Slide # | Current Image | New Image (1920w) | New Tablet (1024w) | New Mobile (640w) |
|---------|---------------|-------------------|-------------------|-------------------|
| 1 | `hero-overview.webp` | `/assets/images/hero/_1920/hero-overview.webp` | `/assets/images/hero/_1024/hero-overview-1024.webp` | `/assets/images/hero/_640/hero-overview-640.webp` |
| 2 | `hero-telecom.webp` | `/assets/images/hero/_1920/hero-telecom.webp` | `/assets/images/hero/_1024/hero-telecom-1024.webp` | `/assets/images/hero/_640/hero-telecom-640.webp` |
| 3 | `power-solar.webp` | `/assets/images/hero/_1920/hero-power.webp` | `/assets/images/hero/_1024/hero-power-1024.webp` | `/assets/images/hero/_640/hero-power-640.webp` |
| 4 | `hero-ict.webp` | `/assets/images/hero/_1920/hero-ict.webp` | `/assets/images/hero/_1024/hero-ict-1024.webp` | `/assets/images/hero/_640/hero-ict-640.webp` |
| 5 | `msp.webp` | `/assets/images/hero/_1920/hero-msp.webp` | `/assets/images/hero/_1024/hero-msp-1024.webp` | `/assets/images/hero/_640/hero-msp-640.webp` |
| **6 (NEW)** | — | `/assets/images/hero/_1920/hero-academy.webp` | `/assets/images/hero/_1024/hero-academy-1024.webp` | `/assets/images/hero/_640/hero-academy-640.webp` |

**Data Structure Change:**

```typescript
// BEFORE (current)
export interface HeroSlide {
  id: number;
  image: string;
  // ...other fields
}

// AFTER (new)
export interface HeroSlide {
  id: number;
  image: string;        // 1920w - default src
  tablet?: string;      // 1024w
  mobile?: string;      // 640w
  // ...other fields
}
```

**Slide 6 (Academy) Content:**

```typescript
{
  id: 6,
  chapter: "Academy",
  category: 'academy',
  image: "/assets/images/hero/_1920/hero-academy.webp",
  tablet: "/assets/images/hero/_1024/hero-academy-1024.webp",
  mobile: "/assets/images/hero/_640/hero-academy-640.webp",
  fallbackGradient: "from-emerald-900 via-green-900 to-slate-900",
  caption: "Academy · CFOT/CFOS Certification · Managed Services",
  eyebrow: {
    icon: GraduationCap,
    text: "Academy & Managed Services",
  },
  headline: {
    line1: { text: "Certified", color: "text-white" },
    line2: { text: "Skilled", color: "text-brand-accent" },
    line3: { text: "Future-Ready", color: "text-white" },
  },
  subtitle: "Fiber optics certification (CFOT/CFOS), telecom and industrial automation training combined with managed ICT services.",
  proofChips: ["CFOT / CFOS", "Telecom Training", "Industrial Automation"],
  cta: {
    primary: { label: "View Academy", action: "link", target: "/academy" },
    secondary: { label: "Discuss Training", action: "link", target: "/contact" },
  },
}
```

---

### 2. `src/data/powerData.ts`

**Current:**
```typescript
export const powerHero = {
  heroImage: "/assets/images/hero/power-solar.webp",
  heroImageMobile: "/assets/images/hero/power-solar-640.webp",
  heroImageTablet: "/assets/images/hero/power-solar-1024.webp",
};
```

**Required:**
```typescript
export const powerHero = {
  heroImage: "/assets/images/hero/_1920/hero-power.webp",
  heroImageMobile: "/assets/images/hero/_640/hero-power-640.webp",
  heroImageTablet: "/assets/images/hero/_1024/hero-power-1024.webp",
};
```

---

### 3. `src/data/ictData.ts`

**Current:**
```typescript
export const ictHero = {
  heroImage: "/assets/images/hero/hero-ict.webp",
  heroImageMobile: "/assets/images/hero/data-center-640.webp",   // INCONSISTENT
  heroImageTablet: "/assets/images/hero/data-center-1024.webp",  // INCONSISTENT
};
```

**Required:**
```typescript
export const ictHero = {
  heroImage: "/assets/images/hero/_1920/hero-ict.webp",
  heroImageMobile: "/assets/images/hero/_640/hero-ict-640.webp",
  heroImageTablet: "/assets/images/hero/_1024/hero-ict-1024.webp",
};
```

---

### 4. `src/data/mspData.ts`

**Current:**
```typescript
export const mspHero = {
  heroImage: "/assets/images/hero/msp.webp",
  heroImageMobile: "/assets/images/hero/msp-640.webp",
  heroImageTablet: "/assets/images/hero/msp-640.webp",  // DUPLICATE (should be 1024)
};
```

**Required:**
```typescript
export const mspHero = {
  heroImage: "/assets/images/hero/_1920/hero-msp.webp",
  heroImageMobile: "/assets/images/hero/_640/hero-msp-640.webp",
  heroImageTablet: "/assets/images/hero/_1024/hero-msp-1024.webp",
};
```

**Note:** Verify `hero-msp-1024.webp` exists in `_1024/` folder before implementation.

---

### 5. `src/components/hero/HeroSection.tsx`

**Current:** Uses `generateSrcSet()` function that builds srcset from single path  

**Required:** Update to use new `tablet` and `mobile` fields from heroSlides data

```typescript
// Current function (needs update)
function generateSrcSet(basePath: string): string {
  if (!basePath) return '';
  const base = basePath.replace('.webp', '');
  const variants = [
    `${base}-640.webp 640w`,
    `${base}-1024.webp 1024w`,
    `${base}.webp 1920w`
  ].join(', ');
  return variants;
}

// New implementation
function buildSrcSet(slide: HeroSlide): string {
  const parts = [];
  if (slide.mobile) parts.push(`${slide.mobile} 640w`);
  if (slide.tablet) parts.push(`${slide.tablet} 1024w`);
  if (slide.image) parts.push(`${slide.image} 1920w`);
  return parts.join(', ');
}
```

**Image tag update:**

```typescript
// BEFORE
<img
  src={activeSlide.image}
  srcSet={generateSrcSet(activeSlide.image)}
  sizes="100vw"
  // ...
/>

// AFTER
<img
  src={activeSlide.image}
  srcSet={buildSrcSet(activeSlide)}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
  // ...
/>
```

---

### 6. `src/components/SubPageLayout.tsx`

**Current:** Uses `resolveHeroImagePath()` with separate `heroImageMobile` and `heroImageTablet` props  

**Required:** Already structured correctly — verify paths point to new folders

**Verification needed:** Check how page data files pass heroImage props to SubPageLayout

```typescript
// SubPageLayout already supports:
// heroImage: string
// heroImageMobile?: string
// heroImageTablet?: string

// The resolveHeroImagePath function already handles:
// - Bare filename → /assets/images/hero/{filename}
// - Absolute path → unchanged

// No code change needed if heroImageMobile/Tablet paths updated in data files
```

---

### 7. `src/data/portfolioWidgetData.ts`

**Current:** 6 projects with images in `/assets/images/portfolio/`  

**Required:** Update image paths to new portfolio images in `public\assets\images\portfolio\portfolio\`

**Note:** Strategy states "The New portfolio Images are in folder ready for portfolio copy path 'public\assets\images\portfolio\portfolio'"

**Assumed mapping (based on strategy):**

| ID | Current Image | New Image Path |
|----|---------------|-----------------|
| 1 | `rural-electrification.webp` | `/assets/images/portfolio/portfolio/rural-electrification.webp` |
| 2 | `400-kv-tower.webp` | `/assets/images/portfolio/portfolio/400kv-transmission.webp` |
| 3 | `400-kv-tower.webp` | `/assets/images/portfolio/portfolio/400kv-transmission.webp` |
| 4 | `mofed-dc.webp` | `/assets/images/portfolio/portfolio/mofed-data-center.webp` |
| 5 | `entoto-tvet-1.webp` | `/assets/images/portfolio/portfolio/entoto-tvet-ict.webp` |
| 6 | `rural-electrification.webp` | `/assets/images/portfolio/portfolio/rural-electrification.webp` |

**⚠️ Clarification needed:** Exact new filename mapping not provided in strategy. Verify actual filenames in `public\assets\images\portfolio\portfolio\` folder before implementing.

---

### 8. Partners Grid (New or Update)

**Strategy:** "Implement a new PartnersGrid component or update the existing 'Strategic Alliances' section"

**Current:** No PartnersGrid component found in codebase  

**Required:** Create new component or find existing section to update

**Image paths from `_partners` folder:**
| Partner | New Image Path |
|---------|----------------|
| ESA | `/assets/images/partners/_partners/ESA.webp` |
| Ethio Telecom | `/assets/images/partners/_partners/ethio-telecom.webp` |
| Huawei | `/assets/images/partners/_partners/Huawei.webp` |
| NOKIA | `/assets/images/partners/_partners/NOKIA.webp` |
| Safaricom | `/assets/images/partners/_partners/Safaricom.webp` |
| UN | `/assets/images/partners/_partners/un.webp` |
| UNDP | `/assets/images/partners/_partners/UNDP.webp` |

**Grid specification:** 640×360 WebP images in standardized grid layout

**⚠️ Clarification needed:**
- Is there an existing "Strategic Alliances" section to update, or create entirely new?
- Where in the page structure should this appear (which page/component)?

---

## Summary Table

| File | Change Type | Priority |
|------|-------------|----------|
| `src/data/heroSlides.ts` | Expand to 6 slides + add tablet/mobile fields | HIGH |
| `src/data/powerData.ts` | Update heroImage paths to new folder structure | HIGH |
| `src/data/ictData.ts` | Fix inconsistent mobile/tablet base names | HIGH |
| `src/data/mspData.ts` | Add 1024 variant + standardize naming | MEDIUM |
| `src/components/hero/HeroSection.tsx` | Update srcset logic to use new data structure | MEDIUM |
| `src/components/SubPageLayout.tsx` | No changes — verify data file paths | LOW |
| `src/data/portfolioWidgetData.ts` | Update image paths (needs filename mapping) | MEDIUM |
| Partners component | Create or update (needs location clarification) | MEDIUM |

---

## Pre-Implementation Checklist

- [ ] Verify `hero-overview-1024.webp` exists in `_1024/` folder
- [ ] Verify `hero-msp-1024.webp` exists in `_1024/` folder  
- [ ] List exact filenames in `public\assets\images\portfolio\portfolio\` for portfolio mapping
- [ ] Identify Partners section location (create new or find existing)
- [ ] Run `npm run build` before making changes for baseline
- [ ] Test mobile/tablet breakpoints after implementation

---

## Questions for Strategy Clarification

1. **Portfolio filenames:** What are the exact new filenames in `portfolio/portfolio/` folder?
2. **Partners location:** Which page/section should the Partners grid appear in?
3. **hero-overview-1024:** Should use `hero-overview-1024.webp` from `_1024/` folder — is it available?
4. **Academy slide content:** Is the proposed slide 6 content accurate, or should it differ?

---

*Plan generated — ready for implementation upon user approval*