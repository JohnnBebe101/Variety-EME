import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Award, ShoppingCart } from 'lucide-react';
import { Brand } from '../Brand';
import { NAV_CONFIG } from '../../data/constants';
import { PageID } from '../../types';
import { SITE } from '../../data/constants';

const ANNOUNCEMENT_PHRASES = [
  "ISO Certified · Quality, Safety & Security Assured",
  "Turnkey Engineering · Assess · Design · Build · Commission · Support",
  "One Partner. Electromechanical, Power & HVAC — Condensed Into One Clear Offer.",
  "Safety-Led · Customer-First · East Africa's Electromechanical Engineering Partner",
  "Innovative & Intelligent Solutions · Bridging Market Gaps in the EME Sector",
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
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearDropdownTimeout = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, navLabel: string) => {
    const navIndex = NAV_CONFIG.findIndex(n => n.label === navLabel);
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (navIndex < NAV_CONFIG.length - 1) {
          const nextNav = NAV_CONFIG[navIndex + 1];
          if (nextNav.items.length > 0) {
            setActiveMenu(nextNav.label);
          }
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (navIndex > 0) {
          const prevNav = NAV_CONFIG[navIndex - 1];
          if (prevNav.items.length > 0) {
            setActiveMenu(prevNav.label);
          }
        }
        break;
      case 'Escape':
        e.preventDefault();
        clearDropdownTimeout();
        setActiveMenu(null);
        break;
      case 'Enter':
      case ' ':
        if (!activeMenu) {
          setActiveMenu(navLabel);
        }
        break;
    }
  }, [setActiveMenu, activeMenu, clearDropdownTimeout]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        clearDropdownTimeout();
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setActiveMenu, clearDropdownTimeout]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % ANNOUNCEMENT_PHRASES.length);
        setIsAnimating(false);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Info Bar - Contact Info, Social, Badge */}
      <header className="fixed top-0 left-0 w-full h-[32px] bg-[#0f0f1a] z-[120] flex items-center border-b border-white/5">
        <div className="container mx-auto px-4 flex items-center justify-between overflow-hidden">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6 text-[11px] text-white/60 font-medium">
            <div className="flex items-center gap-1.5">
              <Phone size={10} className="text-brand-accent" />
              <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-accent transition-colors">
                {SITE.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={10} className="text-brand-accent" />
              <a href={`mailto:${SITE.contact.email}`} className="hover:text-brand-accent transition-colors">
                {SITE.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-1.5 hidden md:flex">
              <MapPin size={10} className="text-brand-accent" />
              <span>{SITE.contact.address.split(',')[0]}</span>
            </div>
          </div>

          {/* Right: Social Icons + Badge */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/variety-eme" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
                <Linkedin size={12} />
              </a>
              <a href="https://www.facebook.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
                <Facebook size={12} />
              </a>
              <a href="https://twitter.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
                <Twitter size={12} />
              </a>
            </div>
            <div className="flex items-center gap-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-3 py-1 ml-2">
              <Award size={10} className="text-brand-accent" />
              <span className="text-[10px] font-semibold uppercase tracking-wide text-brand-accent">
                Global Certified Winner
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Bar - Marquee Animation */}
      <header className="fixed top-[32px] left-0 w-full h-[28px] bg-brand-accent z-[115] flex items-center overflow-hidden border-b border-black/5">
        <div className="container mx-auto px-4 flex items-center justify-center overflow-hidden">
          <div className="relative h-[20px] w-full max-w-[700px] overflow-hidden">
            <span className="inline-block animate-marquee whitespace-nowrap text-brand-primary font-semibold text-xs tracking-wide uppercase">
              {ANNOUNCEMENT_PHRASES[0]}&nbsp;•&nbsp;{ANNOUNCEMENT_PHRASES[0]}
            </span>
          </div>
        </div>
      </header>

      {/* Main Navbar - Logo Left, Nav Center */}
      <header className="fixed top-[60px] left-0 w-full z-[100] h-14 bg-brand-primary/95 border-b border-white/10 shadow-2xl backdrop-blur-md overflow-visible">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
            <Brand forceInvert={true} headerMode={true} />
          </div>
          
          {/* Center: Nav Links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 flex-nowrap flex-1 px-8">
            {NAV_CONFIG.map((nav) => {
              const isHovered = activeMenu === nav.label;
              const hasDropdown = nav.items.length > 0;
              
              return (
                <div 
                  key={nav.label} 
                  className="relative px-2 py-1.5 group nav-dropdown-container"
                  onMouseEnter={() => hasDropdown && setActiveMenu(nav.label)}
                >
                  <button 
                    onClick={() => nav.page && navigateTo(nav.page, undefined, nav.path)}
                    onMouseEnter={() => {
                      clearDropdownTimeout();
                      hasDropdown && setActiveMenu(nav.label);
                    }}
                    onMouseLeave={() => {
                      if (hasDropdown) {
                        clearDropdownTimeout();
                        dropdownTimeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
                      }
                    }}
                    onKeyDown={(e) => hasDropdown && handleKeyDown(e, nav.label)}
                    aria-expanded={isHovered && hasDropdown}
                    aria-haspopup={hasDropdown ? 'menu' : undefined}
                    aria-controls={hasDropdown ? `menu-${nav.label}` : undefined}
                    role={hasDropdown ? 'button' : undefined}
                    tabIndex={0}
                    className={`flex items-center gap-1.5 cursor-pointer text-sm font-medium tracking-wide transition-all duration-200 uppercase whitespace-nowrap min-w-0 outline-none hover:text-brand-accent focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary ${isHovered ? 'text-brand-accent' : 'text-white/80'}`}
                  >
                    {nav.label}
                    {hasDropdown && <ChevronDown size={12} className={`transition-all duration-200 ${isHovered ? 'rotate-180 text-brand-accent' : 'text-white/40'}`} />}
                  </button>
                  <AnimatePresence>
                    {hasDropdown && isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        role="menu"
                        aria-label={`${nav.label} menu`}
                        id={`menu-${nav.label}`}
                        className="absolute top-full pt-2 left-1/2 -translate-x-1/2 w-[420px] bg-white shadow-2xl rounded-[1rem] overflow-hidden grid grid-cols-12 border border-slate-100/50 z-[130]"
                        onMouseEnter={() => {
                          clearDropdownTimeout();
                          setActiveMenu(nav.label);
                        }}
                        onMouseLeave={() => {
                          clearDropdownTimeout();
                          dropdownTimeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
                        }}
                      >
                        <div className="col-span-5 bg-brand-primary p-6 text-white">
                          <span className="text-[8px] font-semibold uppercase tracking-widest text-brand-accent mb-2.5 block">{nav.overview.tag}</span>
                          <h3 className="text-h3 font-semibold mb-2">{nav.overview.title}</h3>
                          <p className="text-white/60 text-xs">{nav.overview.description}</p>
                          <button onClick={() => nav.page && navigateTo(nav.page, undefined, nav.path)} className="text-xs font-semibold uppercase tracking-wide text-white hover:text-brand-accent mt-4">{nav.overview.cta} →</button>
                        </div>
                        <div className="col-span-7 bg-white p-4 grid grid-cols-1 gap-1">
                          {nav.items.slice(0, 5).map((item) => (
                            <button 
                              key={item.label} 
                              onClick={() => navigateTo(item.page as PageID, undefined, item.path)} 
                              role="menuitem"
                              tabIndex={0}
                              className="text-left px-4 py-3 text-sm text-gray-700 hover:bg-brand-primary/5 hover:text-brand-accent rounded-lg transition-colors focus:bg-brand-primary/5 focus:text-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                            >
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
              className="ml-2 px-4 py-2 rounded-lg bg-transparent border border-brand-accent text-brand-accent text-sm font-semibold tracking-wide uppercase hover:bg-brand-accent hover:text-brand-primary transition-all duration-200"
            >
              Request Quote
            </button>
            <button 
              className="ml-2 p-2 text-white/60 hover:text-brand-accent transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
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