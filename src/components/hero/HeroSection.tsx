import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroSlides, HeroSlide } from '../../data/heroSlides';
import { ANIM } from '../../data/animationConstants';
import { useSlideTimer } from '../../hooks/useSlideTimer';
import HeroSlideContent from './HeroSlideContent';
import PortfolioWidget from './PortfolioWidget';
import { PageID } from '../../types';

function generateSrcSet(basePath: string): string {
  if (!basePath) return '';
  const base = basePath.replace('.webp', '');
  const variants = [
    `${base}-640.webp 640w`,
    `${base}-1024.webp 1024w`,
    `${base}.webp 1920w`
  ].join(', ');
  return variants;
}

interface HeroSectionProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { currentSlide, progress, isPaused, pause, resume, goToSlide } = useSlideTimer(heroSlides.length);
  
  const activeSlide = heroSlides[currentSlide];
  
  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    if (target) {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
      } else if (e.key === 'ArrowRight') {
        goToSlide((currentSlide + 1) % heroSlides.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, goToSlide]);

  return (
    <section 
      className="relative h-[85vh] md:h-screen min-h-[700px] w-full overflow-hidden bg-slate-950"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Background - enhanced crossfade with zoom */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Gradient fallback */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.fallbackGradient} opacity-50`} />
{/* Hero image with responsive srcSet */}
            <img
              src={activeSlide.image}
              srcSet={generateSrcSet(activeSlide.image)}
              sizes="100vw"
              alt={activeSlide.caption}
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1920"
              height="1080"
            />
            {/* Overlay gradient for text legibility - reduced to 5-8% */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/8 via-black/4 to-black/8" />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-0 h-full flex items-center">
        <AnimatePresence mode="wait">
          <HeroSlideContent
            key={activeSlide.id}
            slide={activeSlide}
            isActive={true}
            onNavigate={onNavigate}
          />
        </AnimatePresence>
        
        <PortfolioWidget isVisible={true} onNavigate={(page) => onNavigate?.(page as PageID, undefined, `/${page}`)} />
      </div>

      {/* Bottom controls - single scroll cue */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-8 lg:px-16 py-4 bg-gradient-to-t from-black/50 to-transparent">
        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            >
              <span 
                className={`block rounded-full transition-all duration-300 pointer-events-none ${
                  index === currentSlide
                    ? 'w-6 h-1.5 bg-brand-accent'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="flex-1 mx-6 h-px bg-white/15 relative overflow-hidden hidden sm:block">
          <motion.div
            className="absolute left-0 top-0 h-full bg-brand-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Scroll cue - ONE instance only */}
        <a
          href="#services"
          onClick={handleScroll}
          aria-label="Scroll down to services section"
          className="flex items-center gap-1.5 text-white/45 text-xs animate-bounce"
        >
          <span className="hidden sm:inline tracking-wide">Scroll</span>
          <ChevronDown className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;