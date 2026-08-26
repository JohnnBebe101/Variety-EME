import { PageID } from '../../types';

/**
 * Props for corporate/overview pages (Identity, Portfolio, About, etc.)
 * Used by: CorporatePages.Identity, CorporatePages.Portfolio
 */
export interface CorporatePageProps {
  /** Callback to navigate back to parent/overview page */
  onBack: () => void;
  /** Hero image path for SubPageLayout */
  heroImage?: string;
  /** CSS gradient fallback for hero */
  gradientFallback?: string;
  /** Current canonical path (for sidebar active state) */
  currentPath?: string;
  /** Navigation callback for related service links */
  onNavigate?: (path: string) => void;
}

/**
 * Props for service detail pages (Telecom, ICT, Power, Academy, MSP sub-pages)
 * Used by: All service section components under sections/services/
 */
export interface ServicePageProps {
  onBack: () => void;
  onParentOverview?: () => void;
  heroImage?: string;
  gradientFallback?: string;
  /** Canonical path of this service page — REQUIRED for sidebar active state */
  currentPath: string;
  /** Navigation callback for related services / sidebar links */
  onNavigate: (page: PageID, hash?: string, routePath?: string) => void;
}

/** @deprecated Use CorporatePageProps or ServicePageProps instead. Kept for backward compatibility with archived components. */
export type PageProps = CorporatePageProps | ServicePageProps;