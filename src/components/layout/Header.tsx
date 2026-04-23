import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu } from 'lucide-react';
import { Brand } from '../Brand';
import { LogoSymbol } from '../LogoSymbol';
import { NAV_CONFIG } from '../../data/constants';
import { PageID } from '../../types';

const ANNOUNCEMENT_PHRASES = [
  "ISO Certified · Quality, Safety & Security Assured",
  "Turnkey Engineering · Assess · Design · Build · Commission · Support",
  "One Partner. Power, Telecom & ICT — Condensed Into One Clear Offer.",
  "Safety-Led · Customer-First · East Africa's Engineering Partner Since 2004",
  "1,200+ Projects Delivered · 450+ Field Staff · 99.9% Uptime",
];

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
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ANNOUNCEMENT_PHRASES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const leftNavs = NAV_CONFIG.slice(0, 2);
  const rightNavs = NAV_CONFIG.slice(2);

  return (
    <>
      {/* Announcement Bar */}
      <header className="fixed top-0 left-0 w-full h-[36px] bg-brand-accent z-[120] flex items-center justify-center overflow-hidden border-b border-black/5">
        <div className="container mx-auto px-6 flex items-center justify-center gap-4 text-brand-primary font-semibold text-xs tracking-wide uppercase">
          <LogoSymbol className="w-4 h-4" />
          <div className="relative h-[20px] overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={phraseIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute whitespace-nowrap will-change-transform"
              >
                {ANNOUNCEMENT_PHRASES[phraseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Main Navbar - Centered Logo with Flanking Nav */}
      <header className="fixed top-[36px] left-0 w-full z-[100] h-16 bg-brand-primary/95 border-b border-white/10 shadow-2xl backdrop-blur-md">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Left Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 flex-nowrap">
            {leftNavs.map((nav) => {
              const isHovered = activeMenu === nav.label;
              const hasDropdown = nav.items.length > 0;
              
              return (
                <div 
                  key={nav.label} 
                  className="relative px-4 py-2 group" 
                  onMouseEnter={() => hasDropdown && setActiveMenu(nav.label)} 
                  onMouseLeave={() => hasDropdown && setActiveMenu(null)}
                >
                  <button 
                    onClick={() => nav.page && navigateTo(nav.page, undefined, nav.path)}
                    className={`flex items-center gap-1.5 cursor-pointer text-sm font-medium tracking-wide transition-all duration-200 uppercase whitespace-nowrap min-w-0 outline-none hover:text-brand-accent ${isHovered ? 'text-brand-accent' : 'text-white/80'}`}
                  >
                    {nav.label}
                    {hasDropdown && <ChevronDown size={12} className={`transition-all duration-200 ${isHovered ? 'rotate-180 text-brand-accent' : 'text-white/40'}`} />}
                  </button>
                  <AnimatePresence>
                    {hasDropdown && isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 8 }} 
                        transition={{ duration: 0.2 }} 
                        className="absolute top-full mt-2 left-0 w-[420px] bg-white shadow-2xl rounded-[1rem] overflow-hidden grid grid-cols-12 border border-slate-100/50 z-[110]"
                      >
                        <div className="col-span-5 bg-brand-primary p-6 text-white">
                          <span className="text-[8px] font-semibold uppercase tracking-widest text-brand-accent mb-2.5 block">{nav.overview.tag}</span>
                          <h3 className="text-h3 font-semibold mb-2">{nav.overview.title}</h3>
                          <p className="text-white/60 text-xs">{nav.overview.description}</p>
                          <button onClick={() => nav.page && navigateTo(nav.page, undefined, nav.path)} className="text-xs font-semibold uppercase tracking-wide text-white hover:text-brand-accent mt-4">{nav.overview.cta} →</button>
                        </div>
                        <div className="col-span-7 bg-white p-4 grid grid-cols-1 gap-1">
                          {nav.items.slice(0, 5).map((item) => (
                            <button key={item.label} onClick={() => navigateTo(item.page as PageID, undefined, item.path)} className="text-left px-4 py-3 text-sm text-gray-700 hover:bg-brand-primary/5 hover:text-brand-accent rounded-lg transition-colors">
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
          
          {/* Centered Logo */}
          <div className="flex flex-col items-center gap-0.5 cursor-pointer" onClick={() => navigateTo('home')}>
            <Brand forceInvert={true} />
          </div>
          
          {/* Right Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 flex-nowrap">
            {rightNavs.map((nav) => {
              const isHovered = activeMenu === nav.label;
              const hasDropdown = nav.items.length > 0;
              
              return (
                <div 
                  key={nav.label} 
                  className="relative px-4 py-2 group" 
                  onMouseEnter={() => hasDropdown && setActiveMenu(nav.label)} 
                  onMouseLeave={() => hasDropdown && setActiveMenu(null)}
                >
                  <button 
                    onClick={() => nav.page && navigateTo(nav.page, undefined, nav.path)}
                    className={`flex items-center gap-1.5 cursor-pointer text-sm font-medium tracking-wide transition-all duration-200 uppercase whitespace-nowrap min-w-0 outline-none hover:text-brand-accent ${isHovered ? 'text-brand-accent' : 'text-white/80'}`}
                  >
                    {nav.label}
                    {hasDropdown && <ChevronDown size={12} className={`transition-all duration-200 ${isHovered ? 'rotate-180 text-brand-accent' : 'text-white/40'}`} />}
                  </button>
                  <AnimatePresence>
                    {hasDropdown && isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 8 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 8 }} 
                        transition={{ duration: 0.2 }} 
                        className="absolute top-full mt-2 right-0 w-[420px] bg-white shadow-2xl rounded-[1rem] overflow-hidden grid grid-cols-12 border border-slate-100/50 z-[110]"
                      >
                        <div className="col-span-5 bg-brand-primary p-6 text-white">
                          <span className="text-[8px] font-semibold uppercase tracking-widest text-brand-accent mb-2.5 block">{nav.overview.tag}</span>
                          <h3 className="text-h3 font-semibold mb-2">{nav.overview.title}</h3>
                          <p className="text-white/60 text-xs">{nav.overview.description}</p>
                          <button onClick={() => nav.page && navigateTo(nav.page, undefined, nav.path)} className="text-xs font-semibold uppercase tracking-wide text-white hover:text-brand-accent mt-4">{nav.overview.cta} →</button>
                        </div>
                        <div className="col-span-7 bg-white p-4 grid grid-cols-1 gap-1">
                          {nav.items.slice(0, 5).map((item) => (
                            <button key={item.label} onClick={() => navigateTo(item.page as PageID, undefined, item.path)} className="text-left px-4 py-3 text-sm text-gray-700 hover:bg-brand-primary/5 hover:text-brand-accent rounded-lg transition-colors">
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <button 
              onClick={() => navigateTo('contact', undefined, '/contact')} 
              className="ml-2 px-4 py-2 rounded-lg bg-brand-accent text-brand-primary text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              Contact Us
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileOpen(true)} 
            className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
    </>
  );
};