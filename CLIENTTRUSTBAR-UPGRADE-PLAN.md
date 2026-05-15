# ClientTrustBar Image Upgrade — Actionable Plan

## Current State
- **Component:** `src/components/ClientTrustBar.tsx`
- **Current display:** Partner names as text (text-only marquee)
- **Data source:** `PARTNERS` in `src/data/constants.ts` (now points to WebP images)
- **Animation:** Marquee with duplicated list (`PARTNERS.concat(PARTNERS)`)

---

## Target State
- Display partner **logo images** instead of text names
- Keep marquee animation for visual consistency
- Use WebP images already in `PARTNERS` (5 WebP available, 3 fallback to PNG)
- Responsive: show logos on desktop, text on mobile (or scale down)

---

## Files to Modify

### 1. `src/components/ClientTrustBar.tsx`
**Change type:** Full component update

**Current code:**
```tsx
<div className="flex gap-16 items-center animate-marquee whitespace-nowrap py-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
  {PARTNERS.concat(PARTNERS).map((partner, i) => (
    <span key={i} className="text-sm md:text-base font-semibold text-white tracking-tighter uppercase inline-block">
      {partner.name}
    </span>
  ))}
</div>
```

**New code:**
```tsx
<div className="flex gap-12 items-center animate-marquee whitespace-nowrap py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
  {PARTNERS.concat(PARTNERS).map((partner, i) => (
    <img 
      key={i}
      src={partner.logo}
      alt={partner.name}
      className="h-6 w-auto max-w-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
      loading="lazy"
    />
  ))}
</div>
```

---

### 2. Update PARTNERS data (if needed)
**Check:** Ensure all partners have valid logo paths

**Current state:**
| Partner | Logo Path | Status |
|---------|-----------|--------|
| NOKIA | `/assets/images/partners/NOKIA.webp` | ✅ WebP |
| SAFARICOM | `/assets/images/partners/Safaricom.webp` | ✅ WebP |
| UN | `/assets/images/partners/un.webp` | ✅ WebP |
| ETHIO TELECOM | `/assets/images/partners/ethio-telecom.webp` | ✅ WebP |
| HUAWEI | `/assets/images/partners/Huawei.webp` | ✅ WebP |
| ERICSSON | `/assets/images/partners/ericsson.png` | ⚠️ PNG (no WebP) |
| ZTE | `/assets/images/partners/zte.png` | ⚠️ PNG (no WebP) |
| ABB | `/assets/images/partners/abb.png` | ⚠️ PNG (no WebP) |

**Fix needed:** If WebP doesn't exist for Ericsson, ZTE, ABB — either:
- Keep as PNG (works fine)
- Or check if WebP versions exist elsewhere

---

## Implementation Steps

### Step 1: Verify image assets
```bash
Get-ChildItem "public\assets\images\partners" -Filter "*.webp" | Select-Object Name
```

### Step 2: Update ClientTrustBar.tsx
- Replace text spans with `<img>` tags
- Add CSS for logo sizing and grayscale effect
- Keep marquee animation

### Step 3: Add styling refinements
- Logo height: `h-6` to `h-8` (24-32px)
- Max width: `max-w-[80px]` to prevent large logos
- Grayscale to color on hover for interactivity
- Object-fit: `object-contain` to maintain aspect ratio

### Step 4: Verify build
```bash
npm run build
```

### Step 5: Test in browser
- Verify logos render correctly
- Verify marquee animation works
- Check mobile view (may need text fallback)

---

## Styling Options

### Option A: Logo Only (Recommended)
```tsx
<img 
  src={partner.logo}
  alt={partner.name}
  className="h-7 w-auto max-w-[90px] object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
/>
```

### Option B: Logo + Text
```tsx
<div className="flex items-center gap-2">
  <img src={partner.logo} className="h-6 w-auto max-w-[60px]" />
  <span className="text-xs font-semibold">{partner.name}</span>
</div>
```

### Option C: Grid Instead of Marquee
Convert from marquee to static grid (requires more code change)

---

## Pre-Implementation Checklist

- [ ] Verify all 5 WebP partner images exist
- [ ] Check if Ericsson/ZTE/ABB have WebP versions (if not, PNG fallback works)
- [ ] Run baseline build before changes
- [ ] Test on mobile - may need text fallback for small screens

---

## Expected Result

| Before | After |
|--------|-------|
| Text names: "NOKIA SAFARICOM UN ETHIO TELECOM HUAWEI..." | Logo images with hover effect |
| Plain text, no visual hierarchy | Grayscale logos → color on hover |
| Same animation | Same marquee animation |

---

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| PNG partners (Ericsson, ZTE, ABB) may look different | WebP 5/8 partners work; PNGs fallback gracefully |
| Logo sizes inconsistent | Use `h-7 max-w-[80px] object-contain` to standardize |
| Mobile too crowded | Can add responsive: hide logos on mobile, show text |

---

*Plan ready — proceed with implementation when approved*