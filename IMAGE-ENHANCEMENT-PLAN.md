# InfinEth Web Portal — Image Enhancement Plan

**Project:** InfinEth Solutions Web Portal  
**Date:** May 12, 2026  
**Phase:** Pre-Deployment Image Optimization  
**Status:** Research Complete — Ready for Execution

---

## 1. Executive Summary

The current image asset library has 7 critical issues that impact Core Web Vitals (LCP, FCP) and page weight. This plan details actions to compress, restructure, and properly size all hero and portfolio images before production deployment.

---

## 2. Image Audit Results

### 2.1 Image Inventory by Folder

| Folder | Files | Total Size | Notes |
|--------|-------|-----------|-------|
| `hero/` | 25 | ~3.4 MB | Largest files — primary optimization target |
| `portfolio/` | 11 | ~826 KB | 2 duplicates found |
| `services/` | 17 | ~54 KB | All PNG, already optimized |
| `partners/` | 9 | ~29 KB | All PNG, already optimized |
| `certifications/` | 6 | ~19 KB | All PNG, already optimized |
| `about/` | 4 | ~13 KB | All PNG, already optimized |
| `logo/` | 8 | ~20 KB | WebP + PNG, already optimized |

### 2.2 Images Referenced in Code

**Hero Slides (`src/data/heroSlides.ts`):**

| Slide | Image Path | Original | 640w | 1024w | Status |
|-------|-----------|----------|------|-------|--------|
| 1 — Identity | `/assets/images/hero/hero-overview.webp` | 261.6 KB | 85.1 KB | 96.1 KB | Has all variants, original oversized |
| 2 — Telecom | `/assets/images/hero/hero-telecom.webp` | 105.5 KB | **105.5 KB** | 104.4 KB | 640w = original (broken) |
| 3 — Power | `/assets/images/hero/power-solar.webp` | 164.5 KB | **164.5 KB** | 155.4 KB | 640w = original (broken) |
| 4 — ICT | `/assets/images/hero/hero-ict.webp` | 158 KB | — | — | Missing variants |
| 5 — Academy | `/assets/images/hero/msp.webp` | 91.2 KB | 45.7 KB | — | Missing 1024w variant |

**Portfolio Widget (`src/data/portfolioWidgetData.ts`):**

| ID | Title | Image Path | Size | Status |
|----|-------|-----------|------|--------|
| 1 | Optical Transmission Network | `/assets/images/portfolio/rural-electrification.webp` | 36.6 KB | OK |
| 2 | Ethio Telecom Tower Rollout | `/assets/images/portfolio/400-kv-tower.webp` | 30.1 KB | OK |
| 3 | 400KV Transmission Towers | `/assets/images/portfolio/400-kv-tower.webp` | 30.1 KB | OK |
| 4 | MoFED Regional Data Centers | `/assets/images/portfolio/mofed-dc.webp` | 35.7 KB | OK |
| 5 | Entoto TVET Campus ICT | `/assets/images/portfolio/portfolio/entoto-tvet-1.webp` | 34.6 KB | OK |
| 6 | EEPCO Rural Electrification | `/assets/images/portfolio/rural-electrification.webp` | 36.6 KB | OK |

**Additional hero images (SubPageLayout sub-pages):**

| Image | Size | 640w | 1024w | Status |
|-------|------|------|-------|--------|
| `data-center.webp` | **492.4 KB** | 146.8 KB | 132.2 KB | Original massively oversized |
| `power.webp` | **379.9 KB** | — | — | Missing all variants |
| `telecom.webp` | **271.4 KB** | — | — | Missing all variants |
| `hero-academy.webp` | 159.5 KB | 51.1 KB | 88 KB | OK |
| `hero-overview.webp` (2nd copy) | **261.6 KB** | 85.1 KB | 96.1 KB | Duplicate — see dedup plan |

---

## 3. Issues Identified

### 3.1 Critical (Must Fix Before Deploy)

| # | Issue | Impact | Files Affected |
|---|-------|--------|---------------|
| 1 | `data-center.webp` at 492.4 KB | Massive LCP penalty | Sub-page hero |
| 2 | `power.webp` at 379.9 KB | Massive LCP penalty | Sub-page hero |
| 3 | `telecom.webp` at 271.4 KB | LCP penalty | Sub-page hero |
| 4 | `hero-overview.webp` at 261.6 KB | LCP penalty | Slide 1, sub-page, portfolio widget |
| 5 | `hero-ict.webp` missing responsive variants | LCP on mobile/tablet | Slide 4 |

### 3.2 High Priority

| # | Issue | Impact | Files Affected |
|---|-------|--------|---------------|
| 6 | `hero-telecom-640.webp` = 105.5 KB = original (not resized) | Wasted bandwidth on mobile | Slide 2 |
| 7 | `power-solar-640.webp` = 164.5 KB = original (not resized) | Wasted bandwidth on mobile | Slide 3 |
| 8 | `hero-overview-640.webp` (85 KB) > `hero-overview-1024.webp` (96 KB) | Inverted sizing wastes bandwidth | Slide 1 |
| 9 | `msp.webp` missing 1024w variant | Tablet fallback to full 91 KB | Slide 5 |
| 10 | `power.webp` missing all variants | Mobile loads 380 KB full image | Sub-page |

### 3.3 Medium Priority

| # | Issue | Impact | Files Affected |
|---|-------|--------|---------------|
| 11 | `hero-overview.webp` duplicated in `/portfolio/` folder (261.6 KB) | 261 KB wasted storage | portfolio/ |
| 12 | `safaricom-rollout.webp` (271.4 KB) ≈ `telecom.webp` (271.4 KB) | Possible duplicate | portfolio/, hero/ |
| 13 | `hero-overview-1-1024.webp` and `hero-overview-2-1024.webp` naming mismatch | Orphaned files, unused | hero/ |
| 14 | `Power-400-kv-tower-erection-1024.webp` naming mismatch | Orphaned file, unused | hero/ |
| 15 | `hero-telecom-1024.webp` (104.4 KB) ≈ original (105.5 KB) | 1024w not meaningfully smaller | Slide 2 |

---

## 4. Target Specifications

### 4.1 Breakpoints
Per existing `generateSrcSet()` in `src/components/hero/HeroSection.tsx`:

| Breakpoint | Width | Use Case |
|------------|-------|---------|
| Mobile | 640w | Phones, small tablets |
| Tablet | 1024w | Tablets, small laptops |
| Desktop | 1920w (original) | Desktop, large screens |

### 4.2 Size Targets (per image)

| Image Type | Target 640w | Target 1024w | Target 1920w (original) |
|------------|------------|-------------|------------------------|
| Hero slide images | 40–60 KB | 80–120 KB | 100–150 KB max |
| Sub-page hero images | 50–80 KB | 100–150 KB | 150–200 KB max |
| Portfolio images | 20–40 KB | 40–60 KB | N/A (portfolio uses single size) |

### 4.3 Format
- Format: **WebP** (already in use)
- Quality: **75–80%** (sane default for WebP)
- No PNG for hero images (all should be WebP)
- No GIF or animated formats

---

## 5. Action Plan

### Phase 1: Compress Original (1920w) Hero Images

Compress the 5 original hero images to target sizes. These are the files that load on desktop and are the primary LCP culprit.

| # | File | Current | Target | Action |
|---|------|---------|--------|--------|
| 1 | `hero/images/data-center.webp` | 492.4 KB | ~150 KB | Re-export at 75% quality, resize to 1920w |
| 2 | `hero/images/power.webp` | 379.9 KB | ~150 KB | Re-export at 75% quality, resize to 1920w |
| 3 | `hero/images/telecom.webp` | 271.4 KB | ~120 KB | Re-export at 75% quality, resize to 1920w |
| 4 | `hero/images/hero-overview.webp` | 261.6 KB | ~120 KB | Re-export at 75% quality, resize to 1920w |
| 5 | `hero/images/hero-telecom.webp` | 105.5 KB | ~100 KB | Re-export at 80% quality (already good) |
| 6 | `hero/images/hero-ict.webp` | 158 KB | ~120 KB | Re-export at 75% quality |
| 7 | `hero/images/power-solar.webp` | 164.5 KB | ~120 KB | Re-export at 75% quality |
| 8 | `hero/images/msp.webp` | 91.2 KB | ~90 KB | Keep as-is or re-export at 80% |
| 9 | `hero/images/hero-academy.webp` | 159.5 KB | ~120 KB | Re-export at 75% quality |

**Tools:** Squoosh.app, Sharp CLI, ImageMagick, or Photoshop "Save for Web"

### Phase 2: Generate Missing Responsive Variants

Create properly sized 640w and 1024w variants for images that are missing them.

| # | Image | Missing | Action |
|---|-------|---------|--------|
| 1 | `hero-ict.webp` | 640w + 1024w | Resize original → 640w (~50 KB) + 1024w (~100 KB) |
| 2 | `msp.webp` | 1024w | Resize original → 1024w (~70 KB) |
| 3 | `power.webp` | 640w + 1024w | Use compressed original → 640w (~50 KB) + 1024w (~100 KB) |
| 4 | `telecom.webp` | 640w + 1024w | Use compressed original → 640w (~50 KB) + 1024w (~100 KB) |

### Phase 3: Fix Broken Variants

Regenerate variants that are currently identical to the original (wasting bandwidth).

| # | File | Current | Should Be | Fix |
|---|------|---------|-----------|-----|
| 1 | `hero/images/hero-telecom-640.webp` | 105.5 KB (= original) | ~50 KB | Delete and regenerate at 640w |
| 2 | `hero/images/power-solar-640.webp` | 164.5 KB (= original) | ~50 KB | Delete and regenerate at 640w |

### Phase 4: Fix Inverted Variant Sizes

The 640w variant should be smaller than the 1024w variant.

| # | Image | Current 640w | Current 1024w | Fix |
|---|-------|-------------|---------------|-----|
| 1 | `hero-overview` | 85.1 KB | 96.1 KB | Regenerate 640w at ~50 KB |

### Phase 5: Delete Orphaned / Duplicate Files

| # | File | Reason | Action |
|---|------|--------|--------|
| 1 | `portfolio/images/hero-overview.webp` | Duplicate of `hero/images/hero-overview.webp` | Delete — use path from hero folder |
| 2 | `hero/images/hero-overview-1-1024.webp` | Naming mismatch, unused | Delete |
| 3 | `hero/images/hero-overview-2-1024.webp` | Naming mismatch, unused | Delete |
| 4 | `hero/images/Power-400-kv-tower-erection-1024.webp` | Naming mismatch, unused | Delete |
| 5 | `hero/images/power-substations-1024.webp` | Naming mismatch, unused | Delete |

### Phase 6: Investigate Duplicate Images

| # | Suspected Duplicate | Action |
|---|---------------------|--------|
| 1 | `portfolio/safaricom-rollout.webp` (271.4 KB) vs `hero/telecom.webp` (271.4 KB) | Compare visually. If same image, delete one. If different, compress both. |

### Phase 7: Code Review — Verify Image Path Consistency

After file restructuring, verify these data files reference the correct paths:

| File | Check |
|------|-------|
| `src/data/heroSlides.ts` | All 5 slide images point to `/assets/images/hero/*.webp` |
| `src/data/portfolioWidgetData.ts` | All 6 project images point to `/assets/images/portfolio/*.webp` |
| All page files using `heroImage` prop on `SubPageLayout` | Verify they use bare filenames that resolve to `/assets/images/hero/` |

---

## 6. Implementation Notes

### 6.1 Compression Settings Reference

For Squoosh.app (recommended):
- Format: WebP
- Quality: 75%
- Resize: Target dimensions (640, 1024, 1920 width, auto height)

For Sharp CLI:
```bash
sharp input.webp
  .resize(640, null, { withoutEnlargement: true })
  .webp({ quality: 75 })
  .toFile('output-640.webp')
```

### 6.2 Sub-page Hero Images — Usage Map

| Page | Data File Prop | Resolved Path |
|------|---------------|---------------|
| /telecommunications | `heroImage="hero-telecom.webp"` | `/assets/images/hero/hero-telecom.webp` |
| /power | `heroImage="power-solar.webp"` | `/assets/images/hero/power-solar.webp` |
| /ict-datacenter | `heroImage="hero-ict.webp"` or `"data-center.webp"` | `/assets/images/hero/hero-ict.webp` or `/assets/images/hero/data-center.webp` |
| /academy | `heroImage="msp.webp"` | `/assets/images/hero/msp.webp` |

### 6.3 Naming Convention

Follow the established pattern: `{base-name}-{width}.webp`
- Examples: `hero-overview-640.webp`, `hero-overview-1024.webp`, `hero-overview.webp`
- Do NOT use: `hero-overview-1-1024.webp`, `Power-400-kv-tower-erection-1024.webp`
- Do NOT include hyphens in width suffix position

---

## 7. Expected Outcome

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Largest hero image | 492.4 KB | ~150 KB | **70% reduction** |
| Mobile hero (640w) — telecom slide | 105.5 KB | ~50 KB | **53% reduction** |
| Total hero folder size | ~3.4 MB | ~1.5 MB | **56% reduction** |
| Duplicate storage | ~523 KB | 0 KB | **100% removed** |
| Orphaned files | ~380 KB | 0 KB | **100% removed** |
| Missing responsive variants | 7 images | 0 | **100% covered** |
| Broken variants | 2 images | 0 | **100% fixed** |

---

## 8. Pre-Deployment Checklist

- [ ] All original (1920w) hero images compressed to target sizes
- [ ] All 640w variants generated and smaller than 1024w
- [ ] All 1024w variants generated
- [ ] Broken/inverted variants regenerated
- [ ] Duplicate files deleted
- [ ] Orphaned files deleted
- [ ] `npm run build` passes
- [ ] `npm run preview` — verify all hero images load on home page
- [ ] Lighthouse LCP score — target under 2.5s
- [ ] Verify SubPageLayout hero images load on all sub-pages
