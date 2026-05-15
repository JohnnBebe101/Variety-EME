# Privacy Policy & Terms of Service Pages — Implementation Plan

## Overview
Create two professional legal pages (Privacy Policy, Terms of Service) that integrate seamlessly with the InfinEth Solutions website theme. Content must be realistic, contextual to an Ethiopian engineering/ICT company, and avoid generic AI-generated language.

---

## 1. Design & Styling Guidelines

### Visual Consistency
- **Color Palette**: Match existing theme (`bg-brand-primary`, `text-brand-foreground`, `bg-brand-surface`)
- **Typography**: Use existing font stack (Inter/sans-serif)
- **Layout**: Full-width content with max-width container (max-w-4xl)
- **Spacing**: Consistent padding (px-6 lg:px-24)
- **Header**: Standard hero section with gradient overlay

### Component Structure
```
┌─────────────────────────────────────────┐
│  Hero Section (with gradient overlay)    │
│  Title: Privacy Policy / Terms of Service│
│  Tagline: Legal / Company Policy         │
├─────────────────────────────────────────┤
│  Content Container (max-w-4xl centered)  │
│  - Section headers with accent color    │
│  - Body text with proper line-height      │
│  - Lists with bullet styling             │
│  - Last updated date                     │
├─────────────────────────────────────────┤
│  Related Links Section                   │
│  (Link to other policy page)             │
├─────────────────────────────────────────┤
│  Footer (standard)                       │
└─────────────────────────────────────────┘
```

---

## 2. Page IDs & Routes

### Add to `src/types.ts`
```typescript
| 'privacy_policy'
| 'terms_of_service'
```

### Add to `src/utils/routes.ts`
```typescript
'/privacy-policy': { page: 'privacy_policy' },
'/terms-of-service': { page: 'terms_of_service' },
```

### Add to `PAGE_PATH_MAP`
```typescript
privacy_policy: '/privacy-policy',
terms_of_service: '/terms-of-service',
```

### Add route cases in `src/App.tsx`
```typescript
case 'privacy_policy': return (
  <>
    <MetaTags title="Privacy Policy" description="InfinEth Solutions privacy policy" />
    <LegalPage type="privacy" />
  </>
);
case 'terms_of_service': return (
  <>
    <MetaTags title="Terms of Service" description="InfinEth Solutions terms of service" />
    <LegalPage type="terms" />
  />
);
```

---

## 3. Content Strategy — Avoid AI Detection

### Key Principles
1. **Be specific to InfinEth** — Mention actual services, Ethiopia context, real operational details
2. **Use realistic dates** — "Effective: January 2024" not generic "Recent"
3. **Include company details** — Registered in Ethiopia, physical address, real contact patterns
4. **Vary sentence structure** — Mix short and long sentences, avoid formulaic language
5. **Add localized context** — Reference Ethiopian regulations (Ministry of ICT, local data laws where applicable)

### Privacy Policy Content Sections
1. **Introduction** — Company identity, purpose
2. **Information We Collect** — Specific to their services (project data, client information, employee data)
3. **How We Use Information** — Project execution, communications, legal compliance
4. **Data Protection** — Security measures, Ethiopia context
5. **Information Sharing** — Partners, legal requirements
6. **Your Rights** — Access, correction, deletion
7. **Contact Details** — Physical address in Ethiopia, email format
8. **Updates** — Change notification process

### Terms of Service Content Sections
1. **Acceptance** — Agreement to terms
2. **Services Description** — Specific to InfinEth (telecom, power, ICT, academy)
3. **User Obligations** — What clients must do
4. **Payment & Pricing** — Context for Ethiopian market
5. **Intellectual Property** — Designs, drawings, technical documents
6. **Limitation of Liability** — Realistic project-based disclaimers
7. **Termination** — Project completion, cancellation terms
8. **Governing Law** — Ethiopian jurisdiction
9. **Contact Information** — Company details

---

## 4. Component Implementation

### Create `src/components/LegalPage.tsx`

```typescript
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PageID } from '../types';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: PageID, hash?: string, path?: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const content = type === 'privacy' ? privacyContent : termsContent;
  
  return (
    <div className="min-h-screen bg-brand-primary">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/90" />
        <div className="relative z-10 flex items-center px-6 lg:px-24 max-w-7xl mx-auto h-full">
          <div className="max-w-3xl">
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {content.title}
            </h1>
            <p className="text-white/60 text-lg mt-4">
              {content.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-24 max-w-4xl mx-auto">
        <div className="text-sm text-brand-muted mb-8">
          Last Updated: {content.lastUpdated}
        </div>
        
        {content.sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-xl font-semibold text-brand-foreground mb-4">
              {section.title}
            </h2>
            <div className="text-brand-muted leading-relaxed space-y-4">
              {section.content.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-brand-muted mb-6">
            For questions about these policies, please contact our team.
          </p>
          <button 
            onClick={() => onNavigate('contact', undefined, '/contact')}
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-brand-primary transition-all duration-200"
          >
            Contact Us <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

// Content objects defined separately
```

---

## 5. Footer Integration

Add links in `src/components/layout/Footer.tsx` under a "Legal" section:
```typescript
{
  title: "Legal",
  links: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-of-service" },
  ]
}
```

---

## 6. Content Drafts — Contextual & Realistic

### Privacy Policy — Key Authentic Details
- Company: "InfinEth Solutions Plc" (Ethiopian legal naming)
- Address: Use realistic Ethiopian business address pattern
- Services: Reference actual service lines (Telecom, Power, ICT, Academy)
- Data types: Project proposals, technical documentation, client communications, employee records
- Ethiopian context: Mention alignment with local regulations where applicable
- Realistic tone: Professional but not overly legalistic

### Terms of Service — Key Authentic Details
- Project types: Infrastructure projects, telecom installations, academy training programs
- Ethiopian market: Reference Ethiopian business practices
- Services context: Specific to InfinEth's engineering/ICT scope
- Liability: Realistic project-based language (not overly restrictive)
- Termination: Project completion, milestone-based terms

---

## 7. Implementation Checklist

### Phase 1: Setup
- [ ] Add PageID types to `types.ts`
- [ ] Add route mappings in `routes.ts`
- [ ] Add route cases in `App.tsx`

### Phase 2: Component
- [ ] Create `LegalPage.tsx` component
- [ ] Define content data structure
- [ ] Write authentic content for both pages

### Phase 3: Integration
- [ ] Add legal links to Footer
- [ ] Test navigation to both pages
- [ ] Verify responsive design

### Phase 4: Polish
- [ ] Check color scheme consistency
- [ ] Verify typography alignment
- [ ] Test on mobile viewport

---

## 8. File Changes Summary

| File | Change |
|------|--------|
| `src/types.ts` | Add `privacy_policy`, `terms_of_service` |
| `src/utils/routes.ts` | Add route mappings |
| `src/App.tsx` | Add route cases |
| `src/components/LegalPage.tsx` | **NEW** - Create component |
| `src/components/layout/Footer.tsx` | Add legal links |
| `public/locales/en/common.json` | Add navigation labels (optional) |

---

*Plan ready for implementation upon approval*