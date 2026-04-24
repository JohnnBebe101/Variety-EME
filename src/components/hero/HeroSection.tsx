import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { heroSlides, HeroSlide } from '../../data/heroSlides';
import { ANIM } from '../../data/animationConstants';
import { useSlideTimer } from '../../hooks/useSlideTimer';
import HeroSlideContent from './HeroSlideContent';
import PortfolioWidget from './PortfolioWidget';

interface HeroSectionProps {
  onNavigate?: (page: string, hash?: string, routePath?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { currentSlide, progress, isPaused, pause, resume, goToSlide } = useSlideTimer(heroSlides.length);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [bgZoom, setBgZoom] = useState(1);
  
  const activeSlide = heroSlides[currentSlide];
  
  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), ANIM.SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isFirstLoad) {
      setBgZoom(1);
      const zoomInterval = setInterval(() => {
        setBgZoom((z) => Math.min(z + 0.0005, ANIM.BG_ZOOM_SCALE));
      }, 16);
      return () => clearInterval(zoomInterval);
    }
  }, [currentSlide, isFirstLoad]);

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
      className="relative h-[85vh] md:h-screen min-h-[700px] w-full overflow-hidden bg-brand-primary"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIM.SLIDE_TRANSITION / 1000 }}
            className={`absolute inset-0 bg-gradient-to-r ${activeSlide.fallbackGradient}`}
          >
            <motion.img
              src={activeSlide.image}
              alt={activeSlide.caption}
              className="w-full h-full object-cover"
              style={{
                transform: `scale(${bgZoom})`,
                transformOrigin: 'center center',
              }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 via-transparent to-brand-primary/90" />
      
      <div className="relative z-10 container mx-auto px-0 h-full flex items-center">
        <AnimatePresence mode="wait">
          <HeroSlideContent
            key={activeSlide.id}
            slide={activeSlide}
            isFirstLoad={isFirstLoad}
            isActive={true}
          />
        </AnimatePresence>
        
        <PortfolioWidget isVisible={true} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-8 md:px-12 lg:px-20">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-6 h-1.5 bg-brand-accent'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-1 text-white/40 text-xs">
            <span className="font-medium text-white">{currentSlide + 1}</span>
            <span>/</span>
            <span>{heroSlides.length}</span>
          </div>
          
          <a
            href="#services"
            onClick={handleScroll}
            className="hidden md:flex items-center gap-2 text-white/60 hover:text-brand-accent transition-colors text-xs font-medium uppercase tracking-widest"
          >
            <span>Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
        
        <div className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden">
        <a
          href="#services"
          onClick={handleScroll}
          className="flex items-center gap-2 text-white/60 hover:text-brand-accent transition-colors text-xs font-medium uppercase tracking-widest"
        >
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;