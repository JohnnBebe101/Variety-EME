
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight, Menu, ChevronRight } from 'lucide-react';
import { Brand } from '../Brand';
import { LogoSymbol } from '../LogoSymbol';
import { NAV_CONFIG } from '../../data/constants';
import { getPathFromPageId } from '../../utils/routes';
import { PageID } from '../../types';

interface HeaderProps {
  isScrolled: boolean;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  navigateTo: (page: PageID, hash?: string, routePath?: string) => void;
  setIsMobileOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled,
  activeMenu,
  setActiveMenu,
  navigateTo,
  setIsMobileOpen
}) => {
  const { t } = useTranslation();

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[36px] bg-brand-accent z-[120] flex items-center justify-center overflow-hidden border-b border-black/5">
        <div className="container mx-auto px-6 flex items-center justify-center gap-4 text-brand-primary font-semibold text-xs tracking-wide uppercase">
          <LogoSymbol className="w-4 h-4" />
          <p>{t('common.securityExcellence')}</p>
        </div>
      </header>
      <header className={`fixed top-[36px] left-0 w-full z-[100] h-16 transition-all duration-500 border-b ${isScrolled ? 'bg-brand-primary/95 border-white/10 shadow-2xl backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Brand forceInvert={true} onClick={() => navigateTo('home')} />
          <nav className="hidden lg:flex items-center gap-1 flex-nowrap">
            {NAV_CONFIG.map((nav, idx) => {
              const isHovered = activeMenu === nav.label;
              const hasDropdown = nav.items.length > 0;
              const dropdownPosition = idx === 0 ? 'left-0' : (idx === 1 ? 'left-1/2 -translate-x-1/2' : (idx === 2 ? 'left-1/2 -translate-x-1/2' : 'right-0'));
              const handleNavClick = () => {
                if (nav.page) {
                  navigateTo(nav.page, undefined, nav.path);
                }
              };

              return (
                <div 
                  key={nav.label} 
                  className="relative px-3 py-2 group" 
                  onMouseEnter={() => hasDropdown && setActiveMenu(nav.label)} 
                  onMouseLeave={() => hasDropdown && setActiveMenu(null)}
                  onFocusCapture={() => hasDropdown && setActiveMenu(nav.label)}
                  onBlurCapture={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setActiveMenu(null);
                    }
                  }}
                >
                  <button 
                    onClick={handleNavClick}
                    aria-expanded={hasDropdown ? isHovered : undefined}
                    aria-haspopup={hasDropdown ? 'true' : undefined}
                    className={`flex items-center gap-1.5 cursor-pointer text-sm font-medium tracking-wide transition-all duration-300 uppercase whitespace-nowrap min-w-0 outline-none ${isHovered ? 'text-brand-accent' : 'text-white/80 hover:text-white'}`}
                  >
                    {nav.label}
                    {hasDropdown && <ChevronDown size={12} className={`transition-all duration-300 ease-out ${isHovered ? 'rotate-180 text-brand-accent scale-110' : 'opacity-40 group-hover:opacity-100'}`} />}
                  </button>
                  <AnimatePresence>
                    {hasDropdown && isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8, scale: 0.98 }} 
                        animate={{ opacity: 1, y: 0, scale: 1 }} 
                        exit={{ opacity: 0, y: 8, scale: 0.98 }} 
                        transition={{ duration: 0.2 }} 
                        className={`absolute top-full mt-2 w-[420px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl rounded-[1rem] overflow-hidden grid grid-cols-12 border border-slate-100/50 z-[110] ${dropdownPosition}`}
                      >
                        <div className="col-span-5 bg-brand-primary p-6 text-white relative overflow-hidden flex flex-col justify-between">
                          <div className="relative z-10">
                            <span className="text-[8px] font-semibold uppercase tracking-widest text-brand-accent mb-2.5 block">{nav.overview.tag}</span>
                            <h3 className="text-h3 font-semibold tracking-tight mb-2 leading-tight">{nav.overview.title}</h3>
                            <p className="text-white/30 text-xs font-medium leading-relaxed">{nav.overview.description}</p>
                          </div>
                          <button onClick={handleNavClick} className="group flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:text-brand-accent mt-5 outline-none focus-visible:text-brand-accent">
                            <span className="border-b border-white/10 group-hover:border-brand-accent transition-colors pb-0.5">{nav.overview.cta}</span>
                            <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                        <div className="col-span-7 p-3.5 bg-white">
                          <div className="grid grid-cols-1 gap-0.5">
                            {nav.items.map((item, i) => (
                              <button 
                                key={i} 
                                onClick={() => navigateTo(item.page as PageID, undefined, item.path || getPathFromPageId(item.page as PageID))} 
                                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-brand-accent group transition-all outline-none focus-visible:bg-slate-50 focus-visible:text-brand-accent"
                              >
                                <div className="flex flex-col text-left">
                                  <span className="font-semibold text-sm tracking-tight leading-none mb-0.5">{item.label}</span>
                                  <span className="text-[8px] font-semibold text-slate-300 uppercase tracking-[0.25em]">{item.category}</span>
                                </div>
                                <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all text-brand-accent" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <button 
              onClick={() => navigateTo('contact', undefined, '/contact')} 
              className="ml-4 px-6 py-3 min-h-[44px] rounded-lg bg-brand-accent text-brand-primary text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-brand-primary active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-200 shadow-lg border border-brand-accent/20"
            >
              Contact Us
            </button>
          </nav>
          <button 
            onClick={() => setIsMobileOpen(true)} 
            className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
    </>
  );
};
