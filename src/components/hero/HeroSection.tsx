import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroSlides, HeroSlide } from '../../data/heroSlides';
import { ANIM } from '../../data/animationConstants';
import { useSlideTimer } from '../../hooks/useSlideTimer';
import HeroSlideContent from './HeroSlideContent';
import ProjectProofWidget from './PortfolioWidget';
import { HeroStaticLayout } from './HeroStaticLayout';
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
  mode?: 'slider' | 'static';
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, mode = 'slider' }) => {
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

  // Static mode - render HeroStaticLayout
  if (mode === 'static') {
    return (
      <section 
        className="relative h-[85vh] md:h-screen min-h-[700px] w-full overflow-hidden bg-slate-950"
      >
        {/* Static LCP background - no motion wrapper for immediate render */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.fallbackGradient} opacity-50`} />
          <img
            src={activeSlide.image}
            srcSet={generateSrcSet(activeSlide.image)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            alt={activeSlide.caption}
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-brand-primary/80" />
        </div>
       
        <HeroStaticLayout activeSlide={activeSlide} onNavigate={onNavigate} />
      </section>
    );
  }

  // Slider mode (original behavior)
  return (
    <section 
      className="relative h-[85vh] md:h-screen min-h-[700px] w-full overflow-hidden bg-slate-950"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
       {/* Static LCP background - no motion wrapper for immediate render */}
       <div className="absolute inset-0">
         <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.fallbackGradient} opacity-50`} />
         <motion.div
           className="absolute inset-0"
           initial={{ scale: 1 }}
           animate={{ scale: ANIM.IMAGE_ZOOM_SCALE[1] }}
           transition={{ duration: ANIM.IMAGE_ZOOM_DURATION / 1000, ease: "easeOut" }}
         >
           <img
             src={activeSlide.image}
             srcSet={generateSrcSet(activeSlide.image)}
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
             alt={activeSlide.caption}
             className="w-full h-full object-cover object-center"
             loading="eager"
             fetchPriority="high"
             decoding="async"
             width="1920"
             height="1080"
           />
         </motion.div>
         <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-brand-primary/80" />
       </div>
      
      {/* Animated content only */}
      <div className="relative z-10 container mx-auto px-0 h-full flex items-center">
        <AnimatePresence mode="wait">
          <HeroSlideContent
            key={activeSlide.id}
            slide={activeSlide}
            isActive={true}
            onNavigate={onNavigate}
          />
        </AnimatePresence>
        
        <ProjectProofWidget />
        
        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white/50 hover:text-white flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 z-20"
          aria-label="Previous slide"
        >
          <ChevronDown size={18} className="rotate-90" />
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white/50 hover:text-white flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 z-20"
          aria-label="Next slide"
        >
          <ChevronDown size={18} className="-rotate-90" />
        </button>
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