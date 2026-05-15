# Sub-Page Hero Image Fix Plan

## Issues Identified

### Issue 1: Broken Hero Images (4 pages)
These pages have `heroImage` pointing to PNG files in `/services/` folder, but the images fail to load, triggering the placeholder fallback.

| Page | Current heroImage | Issue |
|------|-------------------|-------|
| `/telecommunications/warehouse-management` | `/assets/images/services/warehouse.png` | Image fails to load → placeholder shown |
| `/ict-datacenter/cybersecurity-managed` | `/assets/images/services/cybersecurity.png` | Image fails to load → placeholder shown |
| `/ict-datacenter/training-consultancy` | `/assets/images/services/training-consultancy.png` | Image fails to load → placeholder shown |
| `/power/building-electromechanical` | `/assets/images/services/building-electromechanical.png` | Image fails to load → placeholder shown |

**Root cause:** PNG images in `/services/` folder exist but may have loading issues. The SubPageLayout shows placeholder (ImageOff) when `onError` triggers.

### Issue 2: Missing Route (1 page)
The page `academy_institutional_partnerships` has no case in App.tsx switch statement → falls through to `default` case → renders home page.

---

## Fix Plan

### Fix 1: Update heroImage for broken pages

Change these 4 pages to use parent category hero images (WebP with variants):

**File:** `src/App.tsx`

| Page | Current | Change To |
|------|---------|-----------|
| `TelecommunicationsWarehouseManagement` (line 241) | `/assets/images/services/warehouse.png` | `/assets/images/hero/hero-telecom.webp` |
| `IctDatacenterCybersecurityManaged` (line 289) | `/assets/images/services/cybersecurity.png` | `/assets/images/hero/hero-ict.webp` |
| `IctDatacenterTrainingConsultancy` (line 295) | `/assets/images/services/training-consultancy.png` | `/assets/images/hero/hero-ict.webp` |
| `PowerBuildingElectromechanical` (line 265) | `/assets/images/services/building-electromechanical.png` | `/assets/images/hero/hero-power.webp` |

**Add variants** for proper responsive behavior:
```typescript
heroImage="/assets/images/hero/hero-telecom.webp"
heroImageMobile="/assets/images/hero/hero-telecom-640.webp"
heroImageTablet="/assets/images/hero/hero-telecom-1024.webp"
```

### Fix 2: Add missing route case

**File:** `src/App.tsx`

Add new case for `academy_institutional_partnerships`:

```typescript
case 'academy_institutional_partnerships': return (
  <>
    <MetaTags title="Institutional Partnerships" description="Corporate & Institutional Training Partnerships" />
    <ServicePages.AcademyInstitutionalPartnerships 
      onBack={() => navigateTo('home')} 
      heroImage="/assets/images/hero/hero-academy.webp"
      heroImageMobile="/assets/images/hero/hero-academy-640.webp"
      heroImageTablet="/assets/images/hero/hero-academy-1024.webp"
      gradientFallback="from-black/5 to-transparent" 
      currentPath="/academy/institutional-partnerships" 
      onNavigate={(path) => navigateTo('home', undefined, path)} 
    />
  </>
);
```

**Also need to verify:** Page component `AcademyInstitutionalPartnerships` exists in PageSections.tsx (should already exist based on grep results)

---

## Implementation Steps

### Step 1: Update App.tsx - Fix 4 broken hero images

Edit lines 241, 265, 289, 295 in App.tsx to use parent category hero with variants:

**Line 241 (warehouse-management):**
```typescript
// Before:
heroImage="/assets/images/services/warehouse.png"
// After:
heroImage="/assets/images/hero/hero-telecom.webp"
heroImageMobile="/assets/images/hero/hero-telecom-640.webp"
heroImageTablet="/assets/images/hero/hero-telecom-1024.webp"
```

**Line 265 (building-electromechanical):**
```typescript
// Before:
heroImage="/assets/images/services/building-electromechanical.png"
// After:
heroImage="/assets/images/hero/hero-power.webp"
heroImageMobile="/assets/images/hero/hero-power-640.webp"
heroImageTablet="/assets/images/hero/hero-power-1024.webp"
```

**Line 289 (cybersecurity-managed):**
```typescript
// Before:
heroImage="/assets/images/services/cybersecurity.png"
// After:
heroImage="/assets/images/hero/hero-ict.webp"
heroImageMobile="/assets/images/hero/hero-ict-640.webp"
heroImageTablet="/assets/images/hero/hero-ict-1024.webp"
```

**Line 295 (training-consultancy):**
```typescript
// Before:
heroImage="/assets/images/services/training-consultancy.png"
// After:
heroImage="/assets/images/hero/hero-ict.webp"
heroImageMobile="/assets/images/hero/hero-ict-640.webp"
heroImageTablet="/assets/images/hero/hero-ict-1024.webp"
```

### Step 2: Add missing route case

Find a good location in App.tsx (after `academy_telecom_automation_training` case) and add:

```typescript
case 'academy_institutional_partnerships': return (
  <>
    <MetaTags title="Institutional Partnerships" description="Corporate and institutional training partnerships" />
    <ServicePages.AcademyInstitutionalPartnerships 
      onBack={() => navigateTo('home')} 
      heroImage="/assets/images/hero/hero-academy.webp"
      heroImageMobile="/assets/images/hero/hero-academy-640.webp"
      heroImageTablet="/assets/images/hero/hero-academy-1024.webp"
      gradientFallback="from-black/5 to-transparent" 
      currentPath="/academy/institutional-partnerships" 
      onNavigate={(path) => navigateTo('home', undefined, path)} 
    />
  </>
);
```

### Step 3: Verify build

```bash
npm run build
```

### Step 4: Manual verification

Test these URLs:
- [ ] http://localhost:3000/telecommunications/warehouse-management
- [ ] http://localhost:3000/ict-datacenter/cybersecurity-managed
- [ ] http://localhost:3000/ict-datacenter/training-consultancy
- [ ] http://localhost:3000/power/building-electromechanical
- [ ] http://localhost:3000/academy/institutional-partnerships

---

## Expected Result

| Page | Before | After |
|------|--------|-------|
| warehouse-management | Placeholder icon | Telecom hero (WebP with variants) |
| cybersecurity-managed | Placeholder icon | ICT hero (WebP with variants) |
| training-consultancy | Placeholder icon | ICT hero (WebP with variants) |
| building-electromechanical | Placeholder icon | Power hero (WebP with variants) |
| institutional-partnerships | Goes to home page | Academy page with hero |

---

*Ready for implementation*