
import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ssrSafeLazy } from '../../utils/ssrSafeLazy';

const ContactModal = ssrSafeLazy(() => import('../ContactModal'), '/src/components/ContactModal');
import { PageID } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Brand } from '../Brand';
import { X, ChevronRight, ArrowRight } from 'lucide-react';
import { NAV_CONFIG } from '../../data/constants';
import { getPathFromPageId } from '../../utils/routes';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageID;
  navigateTo: (page: PageID, hash?: string, routePath?: string) => void;
  isContactOpen?: boolean;
  setIsContactOpen?: (open: boolean) => void;
  contactSubject?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, navigateTo, isContactOpen: externalIsContactOpen, setIsContactOpen: externalSetIsContactOpen, contactSubject = '' }) => {
  const { t } = useTranslation();
  const [isContactOpen, setIsContactOpen] = useState(externalIsContactOpen ?? false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (label: string) => {
    setExpandedCategory(prev => prev === label ? null : label);
  };

  // Sync external state if provided
  useEffect(() => {
    if (externalIsContactOpen !== undefined) {
      setIsContactOpen(externalIsContactOpen);
    }
  }, [externalIsContactOpen]);

  const handleCloseContact = () => {
    setIsContactOpen(false);
    externalSetIsContactOpen?.(false);
  };

  useEffect(() => {
    const h = () => {
      setIsScrolled(window.scrollY > 30);
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('scroll', h);
    window.addEventListener('resize', h);
    return () => {
      window.removeEventListener('scroll', h);
      window.removeEventListener('resize', h);
    };
  }, []);

  const handleNavigate = (page: PageID, hash?: string, routePath?: string) => {
    navigateTo(page, hash, routePath);
    setIsMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <div 
      className="min-h-screen bg-brand-primary selection:bg-brand-accent selection:text-brand-primary"
      suppressHydrationWarning={true}
    >
      <Header 
        isScrolled={isScrolled}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        navigateTo={handleNavigate}
        setIsMobileOpen={setIsMobileOpen}
      />

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileOpen(false)} className="fixed inset-0 z-[140] bg-brand-primary/80 backdrop-blur-sm lg:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-y-0 right-0 z-[150] w-full max-w-[320px] bg-brand-surface text-white shadow-2xl flex flex-col lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
               <div className="flex justify-between items-center p-8 border-b border-white/10">
                 <Brand forceInvert={true} onClick={() => handleNavigate('home')} className="scale-90 origin-left" />
                 <button onClick={() => setIsMobileOpen(false)} className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-brand-accent active:scale-90" aria-label="Close menu"><X size={32} /></button>
               </div>
<nav className="flex-grow overflow-y-auto p-6 space-y-6">
                   {NAV_CONFIG.map(cat => {
                     const hasSubItems = cat.items.length > 0;
                     const isExpanded = expandedCategory === cat.label;
                     return (
                     <div key={cat.label} className="space-y-2">
                       <div className="flex items-center justify-between">
                         {cat.page ? (
                           <button 
                             onClick={() => handleNavigate(cat.page as PageID, undefined, cat.path)}
                             className="flex items-center gap-3 text-brand-accent min-w-0"
                           >
                             {cat.icon ? <cat.icon size={16} className="text-brand-accent flex-shrink-0" /> : null}
                             <span className="text-base font-bold uppercase tracking-wide">{cat.label}</span>
                           </button>
                         ) : (
                           <div className="flex items-center gap-3 text-brand-accent/40">
                             {cat.icon ? <cat.icon size={14} className="text-brand-accent/40" /> : null}
                             <span className="text-xs font-semibold uppercase tracking-wide">{cat.label}</span>
                           </div>
                         )}
                         {hasSubItems && (
                           <button 
                             onClick={() => toggleCategory(cat.label)}
                             className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                             aria-expanded={isExpanded}
                             aria-label={`Expand ${cat.label} menu`}
                           >
                             <ChevronRight size={20} className={`text-brand-accent transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                           </button>
                         )}
                       </div>
                       {hasSubItems && (
                         <AnimatePresence>
                           {isExpanded && (
                             <motion.div 
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.2 }}
                               className="grid gap-1 pl-4 border-l border-white/5 overflow-hidden"
                             >
                               {cat.items.map(item => (
                                 <button 
                                   key={item.label} 
                                   onClick={() => handleNavigate(item.page as PageID, undefined, item.path || getPathFromPageId(item.page as PageID))} 
                                   className="text-base font-medium text-left text-white/60 hover:text-brand-accent transition-all py-3 min-h-[44px] flex items-center justify-between group"
                                 >
                                   {item.label}
                                   <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-accent" />
                                 </button>
                               ))}
                             </motion.div>
                           )}
                         </AnimatePresence>
                       )}
                     </div>
                   )})}
                </nav>
               <div className="p-8 border-t border-white/10 bg-brand-primary/30"><button onClick={() => { handleNavigate('home', undefined, '/contact'); }} className="w-full bg-brand-accent text-brand-primary py-5 min-h-[44px] rounded-2xl font-semibold uppercase text-sm tracking-wide shadow-xl active:scale-95 hover:bg-white transition-all flex items-center justify-center gap-3">{t('contact')} <ArrowRight size={16} /></button></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        {children}
      </main>

      <Footer navigateTo={handleNavigate} />
      
      <Suspense fallback={null}>
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} subject={contactSubject} />
      </Suspense>
    </div>
  );
};
