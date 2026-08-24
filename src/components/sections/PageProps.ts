export interface PageProps {
  onBack: () => void;
  heroImage?: string;
  gradientFallback?: string;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}
