
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Home, ChevronRight, Menu, ImageOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Brand } from './Brand';
import { UI_CLASSES } from '../data/constants';
import { PageSidebar, SIDEBAR_CONFIG, getCategoryFromPath } from './PageSidebar';
import { QuickStats } from './QuickStats';

interface SubPageLayoutProps {
  children?: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  color?: string;
  heroImage?: string;
  heroImageMobile?: string;
  heroImageTablet?: string;
  gradientFallback?: string;
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onBack: () => void;
}

export const SubPageLayout: React.FC<SubPageLayoutProps> = ({ 
  children, 
  tag, 
  title, 
  description, 
  color = "text-brand-accent", 
  heroImage, 
  heroImageMobile,
  heroImageTablet,
  gradientFallback = "from-black/5 to-transparent", 
  currentPath = '',
  onNavigate,
  onBack 
}) => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Get sidebar category based on current path
  const sidebarCategory = useMemo(() => {
    const categoryKey = getCategoryFromPath(currentPath);
    return categoryKey ? SIDEBAR_CONFIG[categoryKey] : null;
  }, [currentPath]);

  const hasSidebar = !!sidebarCategory && onNavigate;

  // Image error handler
  const [imageError, setImageError] = useState(false);

  const handleNavClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
    setIsSidebarOpen(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="min-h-screen bg-brand-primary text-brand-foreground">
      {/* Hero Section with Image */}
      {heroImage && !imageError && (
        <div className="relative h-[35vh] min-h-[280px] overflow-hidden">
          <img 
            src={`/assets/images/hero/${heroImage}`}
            srcSet={`
              ${heroImageMobile ? `/assets/images/hero/${heroImageMobile} 640w, ` : ''}
              ${heroImageTablet ? `/assets/images/hero/${heroImageTablet} 1024w, ` : ''}
              /assets/images/hero/${heroImage} 1920w
            `.trim()}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            alt={title} 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={() => setImageError(true)}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${gradientFallback}`} />
        </div>
      )}
      {/* Fallback gradient if image fails or no image */}
      {(imageError || !heroImage) && (
        <div className={`relative h-[35vh] min-h-[280px] overflow-hidden bg-gradient-to-r ${gradientFallback}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/20">
              <ImageOff size={48} />
            </div>
          </div>
        </div>
      )}
      
      <div className="flex">
        {/* Sidebar - Desktop */}
        {hasSidebar && (
          <div className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-28 pt-8">
              <PageSidebar 
                category={sidebarCategory}
                currentPath={currentPath}
                onNavigate={handleNavClick}
                isOpen={false}
                onClose={() => {}}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="container mx-auto px-6">
            {/* Mobile Sidebar Toggle & Breadcrumb */}
            <div className={`flex items-center gap-4 ${heroImage ? 'pt-8' : 'pt-32'}`}>
              {/* Mobile Menu Toggle */}
              {hasSidebar && (
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-brand-muted"
                >
                  <Menu size={20} />
                </button>
              )}
              
              <nav className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wide flex-1">
                <button onClick={onBack} className="flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors py-3 min-h-[44px]">
                  <Home size={14} /> {t('common.home')}
                </button>
                <ChevronRight size={12} className="text-white/10" />
                <span className={color}>{tag}</span>
              </nav>
            </div>

            {/* Title Section */}
            <div className="mb-12">
              <span className={`${color} ${UI_CLASSES.tag} mb-4`}>{tag}</span>
              <h2 className={`${UI_CLASSES.sectionTitle} text-brand-foreground mb-4 max-w-5xl`}>{title}</h2>
              <p className={`text-brand-muted max-w-3xl ${UI_CLASSES.bodyLarge} mb-6`}>{description}</p>
              {currentPath && (
                <QuickStats category={getCategoryFromPath(currentPath) || ''} />
              )}
            </div>

            {/* Page Content */}
            {children}

            {/* Back to Overview */}
            <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center">
              <button onClick={onBack} className="flex items-center gap-4 text-brand-accent font-semibold uppercase text-xs tracking-wide group py-3 min-h-[44px]">
                <div className="w-10 h-10 rounded-full border border-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition-all active:scale-90"><ChevronRight className="rotate-180" size={16} /></div>
                {t('common.backToOverview')}
              </button>
              <Brand forceInvert={true} onClick={onBack} className="opacity-20 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {hasSidebar && (
        <PageSidebar 
          category={sidebarCategory}
          currentPath={currentPath}
          onNavigate={handleNavClick}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </motion.div>
  );
};
