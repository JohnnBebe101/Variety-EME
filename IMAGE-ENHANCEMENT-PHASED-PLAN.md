# InfinEth Image Enhancement — Phased Actionable Plan

**Date:** May 14, 2026  
**Status:** Plan Only — No Changes Made  
**Approach:** Copy files first → Update code second → Simplifies all paths

---

## Phase 1: File Copy Operations (Step-by-Step)

### Goal: Copy all variant images from subfolders into main `hero/` folder

**Source folders:**
- `public/assets/images/hero/_640/`
- `public/assets/images/hero/_1024/`
- `public/assets/images/hero/_1920/`

**Destination:** `public/assets/images/hero/`

---

### Phase 1A: Copy _640 Images

| # | Source File | Destination File | Status |
|---|-------------|-----------------|--------|
| 1 | `_640/hero-academy-640.webp` | `hero/academy-640.webp` | Copy |
| 2 | `_640/hero-ict-640.webp` | `hero/ict-640.webp` | Copy |
| 3 | `_640/hero-msp-640.webp` | `hero/msp-640.webp` | Copy |
| 4 | `_640/hero-overview-640.webp` | `hero/overview-640.webp` | Copy |
| 5 | `_640/hero-power-640.webp` | `hero/power-640.webp` | Copy |
| 6 | `_640/hero-telecom-640.webp` | `hero/telecom-640.webp` | Copy |

**PowerShell command:**
```powershell
Copy-Item "public\assets\images\hero\_640\*.webp" "public\assets\images\hero\"
```

---

### Phase 1B: Copy _1024 Images

| # | Source File | Destination File | Status |
|---|-------------|-----------------|--------|
| 1 | `_1024/hero-academy-1024.webp` | `hero/academy-1024.webp` | Copy |
| 2 | `_1024/hero-ict-1024.webp` | `hero/ict-1024.webp` | Copy |
| 3 | `_1024/hero-msp-1024.webp` | `hero/msp-1024.webp` | Copy |
| 4 | `_1024/hero-power-1024.webp` | `hero/power-1024.webp` | Copy |
| 5 | `_1024/hero-telecom-1024.webp` | `hero/telecom-1024.webp` | Copy |

**⚠️ Note:** `_1024/hero-overview-1024.webp` not found in listing — verify exists before copying

**PowerShell command:**
```powershell
Copy-Item "public\assets\images\hero\_1024\*.webp" "public\assets\images\hero\"
```

---

### Phase 1C: Copy _1920 Images

| # | Source File | Destination File | Status |
|---|-------------|-----------------|--------|
| 1 | `_1920/hero-academy.webp` | `hero/academy.webp` | Copy (overwrite existing) |
| 2 | `_1920/hero-ict.webp` | `hero/ict.webp` | Copy (overwrite existing) |
| 3 | `_1920/hero-msp.webp` | `hero/msp.webp` | Copy (overwrite existing) |
| 4 | `_1920/hero-overview.webp` | `hero/overview.webp` | Copy (overwrite existing) |
| 5 | `_1920/hero-power.webp` | `hero/power.webp` | Copy (overwrite existing) |
| 6 | `_1920/hero-telecom.webp` | `hero/telecom.webp` | Copy (overwrite existing) |

**⚠️ Note:** This will overwrite: `msp.webp`, `power-solar.webp` — verify acceptable

**PowerShell command:**
```powershell
Copy-Item "public\assets\images/hero/_1920/*.webp" "public/assets/images/hero/"
```

---

### Phase 1D: Copy Portfolio Images

**Source:** `public\assets\images\portfolio\portfolio\`  
**Destination:** `public\assets\images\portfolio\`

**PowerShell command:**
```powershell
Copy-Item "public\assets\images\portfolio\portfolio\*.webp" "public\assets\images\portfolio\"
```

---

### Phase 1E: Copy Partner Images

**Source:** `public\assets\images\partners\_partners\`  
**Destination:** `public\assets\images\partners\`

**PowerShell command:**
```powershell
Copy-Item "public\assets\images\partners\_partners\*.webp" "public\assets\images\partners\"
```

---

### Phase 1F: Cleanup (Optional — After Verification)

**Delete subfolders (only after npm run dev confirms everything works):**
```powershell
Remove-Item "public\assets\images\hero\_640" -Recurse -Force
Remove-Item "public\assets\images\hero\_1024" -Recurse -Force
Remove-Item "public\assets\images\hero\_1924" -Recurse -Force
Remove-Item "public\assets\images\partners\_partners" -Recurse -Force
Remove-Item "public\assets\images\portfolio\portfolio" -Recurse -Force
```

---

## Phase 2: Verify Copied Files

### Goal: Confirm all images exist in main folders before code update

**Verification commands:**

```powershell
# Hero folder should have 16 files
Get-ChildItem "public\assets\images\hero\*.webp" | Measure-Object

# Portfolio folder
Get-ChildItem "public\assets\images\portfolio\*.webp" | Measure-Object

# Partners folder
Get-ChildItem "public\assets\images\partners\*.webp" | Measure-Object
```

**Expected hero files after copy:**
```
academy-640.webp      (new)
academy-1024.webp     (new)
academy.webp          (new/overwrite)
ict-640.webp          (new)
ict-1024.webp         (new)
ict.webp              (new/overwrite)
msp-640.webp          (new)
msp-1024.webp         (new)
msp.webp              (new/overwrite)
overview-640.webp     (new)
overview-1024.webp    (new - verify exists)
overview.webp         (new/overwrite)
power-640.webp        (new)
power-1024.webp       (new)
power.webp            (new/overwrite)
telecom-640.webp      (new)
telecom-1024.webp     (new)
telecom.webp          (new/overwrite)
```

---

## Phase 3: Update Data Files

### Simplified Path Format (after copy)

**Pattern:** `/assets/images/hero/{name}-{width}.webp`

| Image | 1920w (src) | 1024w (tablet) | 640w (mobile) |
|-------|-------------|-----------------|---------------|
| Academy | `academy.webp` | `academy-1024.webp` | `academy-640.webp` |
| ICT | `ict.webp` | `ict-1024.webp` | `ict-640.webp` |
| MSP | `msp.webp` | `msp-1024.webp` | `msp-640.webp` |
| Overview | `overview.webp` | `overview-1024.webp` | `overview-640.webp` |
| Power | `power.webp` | `power-1024.webp` | `power-640.webp` |
| Telecom | `telecom.webp` | `telecom-1024.webp` | `telecom-640.webp` |

---

### 3.1 `src/data/heroSlides.ts`

**Changes:**
1. Expand from 5 → 6 slides
2. Update slide 3: `power-solar.webp` → `power.webp`
3. Update slide 5: `msp.webp` → `msp.webp` (same name, new file)
4. Add slide 6: Academy
5. Update all image paths to use simplified naming

**BEFORE:**
```typescript
// Slide 3 (Power)
image: "/assets/images/hero/power-solar.webp",

// Slide 5 (Academy/MSP)  
image: "/assets/images/hero/msp.webp",
```

**AFTER:**
```typescript
// Slide 3 (Power)
image: "/assets/images/hero/power.webp",
tablet: "/assets/images/hero/power-1024.webp",
mobile: "/assets/images/hero/power-640.webp",

// Slide 5 (MSP)
image: "/assets/images/hero/msp.webp",
tablet: "/assets/images/hero/msp-1024.webp", 
mobile: "/assets/images/hero/msp-640.webp",

// NEW Slide 6 (Academy)
{
  id: 6,
  image: "/assets/images/hero/academy.webp",
  tablet: "/assets/images/hero/academy-1024.webp",
  mobile: "/assets/images/hero/academy-640.webp",
  // ... rest of content
}
```

---

### 3.2 `src/data/powerData.ts`

**BEFORE:**
```typescript
heroImage: "/assets/images/hero/power-solar.webp",
heroImageMobile: "/assets/images/hero/power-solar-640.webp",
heroImageTablet: "/assets/images/hero/power-solar-1024.webp",
```

**AFTER:**
```typescript
heroImage: "/assets/images/hero/power.webp",
heroImageMobile: "/assets/images/hero/power-640.webp",
heroImageTablet: "/assets/images/hero/power-1024.webp",
```

---

### 3.3 `src/data/ictData.ts`

**BEFORE:**
```typescript
heroImage: "/assets/images/hero/hero-ict.webp",
heroImageMobile: "/assets/images/hero/data-center-640.webp",
heroImageTablet: "/assets/images/hero/data-center-1024.webp",
```

**AFTER:**
```typescript
heroImage: "/assets/images/hero/ict.webp",
heroImageMobile: "/assets/images/hero/ict-640.webp",
heroImageTablet: "/assets/images/hero/ict-1024.webp",
```

---

### 3.4 `src/data/mspData.ts`

**BEFORE:**
```typescript
heroImage: "/assets/images/hero/msp.webp",
heroImageMobile: "/assets/images/hero/msp-640.webp",
heroImageTablet: "/assets/images/hero/msp-640.webp",  // WRONG - should be 1024
```

**AFTER:**
```typescript
heroImage: "/assets/images/hero/msp.webp",
heroImageMobile: "/assets/images/hero/msp-640.webp",
heroImageTablet: "/assets/images/hero/msp-1024.webp",
```

---

### 3.5 `src/data/portfolioWidgetData.ts`

**Update all image paths:**

**BEFORE:**
```typescript
image: "/assets/images/portfolio/rural-electrification.webp",
image: "/assets/images/portfolio/400-kv-tower.webp",
image: "/assets/images/portfolio/mofed-dc.webp",
image: "/assets/images/portfolio/entoto-tvet-1.webp",
```

**AFTER:** (using simplified names from portfolio folder)
```typescript
image: "/assets/images/portfolio/rural-electrification.webp",
image: "/assets/images/portfolio/400kv-transmission.webp",  // Verify actual filename
image: "/assets/images/portfolio/mofed-data-center.webp",  // Verify actual filename
image: "/assets/images/portfolio/entoto-tvet-ict.webp",     // Verify actual filename
```

**⚠️ Action needed:** Verify actual filenames in `portfolio/` folder before implementing

---

## Phase 4: Update Components

### 4.1 `src/components/hero/HeroSection.tsx`

**Goal:** Update srcset generation to use simplified naming pattern

**Current function:**
```typescript
function generateSrcSet(basePath: string): string {
  const base = basePath.replace('.webp', '');
  return `${base}-640.webp 640w, ${base}-1024.webp 1024w, ${base}.webp 1920w`;
}
```

**Update to:**
```typescript
// Simplified: Extract base name and append -640 / -1024 suffixes
function generateSrcSet(heroImage: string): string {
  // heroImage format: "/assets/images/hero/{name}.webp"
  const base = heroImage.replace('/assets/images/hero/', '').replace('.webp', '');
  return `/assets/images/hero/${base}-640.webp 640w, /assets/images/hero/${base}-1024.webp 1024w, ${heroImage} 1920w`;
}
```

**Updated image tag:**
```typescript
<img
  src={activeSlide.image}
  srcSet={generateSrcSet(activeSlide.image)}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
  loading="eager"
  fetchPriority="high"
  // ...rest
/>
```

---

### 4.2 `src/components/SubPageLayout.tsx`

**No changes needed** — already supports heroImageMobile/heroImageTablet props correctly

---

### 4.3 Partners Grid (New or Update)

**Location:** Create new component at `src/components/PartnersGrid.tsx` OR find existing section

**Simplified paths after copy:**
```typescript
const partners = [
  { name: 'ESA', image: '/assets/images/partners/ESA.webp' },
  { name: 'Ethio Telecom', image: '/assets/images/partners/ethio-telecom.webp' },
  { name: 'Huawei', image: '/assets/images/partners/Huawei.webp' },
  { name: 'NOKIA', image: '/assets/images/partners/NOKIA.webp' },
  { name: 'Safaricom', image: '/assets/images/partners/Safaricom.webp' },
  { name: 'UN', image: '/assets/images/partners/un.webp' },
  { name: 'UNDP', image: '/assets/images/partners/UNDP.webp' },
];
```

**⚠️ Clarification needed:** Where to place PartnersGrid in the page structure?

---

## Phase 5: Test & Verify

### Step-by-step verification:

```powershell
# 1. Run build
npm run build

# 2. Run dev server
npm run dev
```

**Manual verification checklist:**

| # | Check | Expected |
|---|-------|----------|
| 1 | Home page hero slider | 6 slides cycling |
| 2 | Mobile view (375px) | 640w variants load |
| 3 | Tablet view (1024px) | 1024w variants load |
| 4 | Desktop view (1920px) | Original variants load |
| 5 | /telecommunications | Telecom hero with variants |
| 6 | /power | Power hero with variants |
| 7 | /ict-datacenter | ICT hero with variants |
| 8 | /academy | Academy hero with variants |
| 9 | /msp | MSP hero with 1024 variant |
| 10 | DevTools Network tab | No 404s on image load |

**Lighthouse verification:**
- LCP < 2.5s
- All hero images loading correctly
- No render-blocking images

---

## Execution Order Summary

```
PHASE 1 ───────────────────────────────────────────────────────
│ 1A. Copy _640 files → hero/                                  │
│ 1B. Copy _1024 files → hero/                                 │
│ 1C. Copy _1920 files → hero/ (overwrite existing)           │
│ 1D. Copy portfolio images → portfolio/                       │
│ 1E. Copy partners images → partners/                        │
│ 1F. [OPTIONAL] Delete subfolders after verification         │
─────────────────────────────────────────────────────────────────

PHASE 2 ───────────────────────────────────────────────────────
│ Verify all files exist in main folders                       │
─────────────────────────────────────────────────────────────────

PHASE 3 ───────────────────────────────────────────────────────
│ 3.1 Update heroSlides.ts (6 slides + paths)                │
│ 3.2 Update powerData.ts (power naming)                     │
│ 3.3 Update ictData.ts (ict naming)                          │
│ 3.4 Update mspData.ts (msp 1024 variant)                   │
│ 3.5 Update portfolioWidgetData.ts (paths)                  │
─────────────────────────────────────────────────────────────────

PHASE 4 ───────────────────────────────────────────────────────
│ 4.1 Update HeroSection.tsx (srcset logic)                   │
│ 4.2 SubPageLayout.tsx (no changes needed)                  │
│ 4.3 Create/update PartnersGrid component                   │
─────────────────────────────────────────────────────────────────

PHASE 5 ───────────────────────────────────────────────────────
│ Build → Dev → Manual verification → Lighthouse              │
─────────────────────────────────────────────────────────────────
```

---

## Pre-Execution Checklist

- [ ] Backup current image folders before copy
- [ ] Verify `_1024/hero-overview-1024.webp` exists
- [ ] Verify `_1024/hero-msp-1024.webp` exists  
- [ ] Get exact portfolio filenames for mapping
- [ ] Confirm PartnersGrid placement location
- [ ] Run `npm run build` as baseline
- [ ] Document current hero image paths for rollback

---

*Plan complete — ready for execution upon user approval*