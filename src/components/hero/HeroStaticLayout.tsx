import React from 'react';
import { ChevronDown } from 'lucide-react';
import { heroSlides, HeroSlide } from '../../data/heroSlides';
import { PageID } from '../../types';

interface HeroStaticLayoutProps {
  activeSlide: HeroSlide;
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = e.currentTarget.getAttribute('href');
  if (target) {
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
};

export const HeroStaticLayout: React.FC<HeroStaticLayoutProps> = ({ activeSlide, onNavigate }) => {
  return (
    <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
            {activeSlide.eyebrow.text}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {activeSlide.headline.line1.text}
            <br />
            <span className="text-brand-accent">{activeSlide.headline.line2.text}</span>
            {activeSlide.headline.line3 && (
              <>
                <br />
                <span className="text-brand-muted">{activeSlide.headline.line3.text}</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl">
            {activeSlide.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {activeSlide.cta.primary && (
              <button
                onClick={() => onNavigate && activeSlide.cta.primary.target && onNavigate('home' as PageID, undefined, activeSlide.cta.primary.target)}
                className="bg-brand-accent text-brand-primary px-8 py-4 rounded-lg font-semibold tracking-wide text-base shadow-lg hover:bg-white hover:text-brand-primary transition-all duration-200 uppercase"
              >
                {activeSlide.cta.primary.label}
              </button>
            )}
            {activeSlide.cta.secondary && (
              <button
                onClick={() => onNavigate && activeSlide.cta.secondary.target && onNavigate('home' as PageID, undefined, activeSlide.cta.secondary.target)}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold tracking-wide text-base hover:bg-white/10 transition-all duration-200 uppercase"
              >
                {activeSlide.cta.secondary.label}
              </button>
            )}
            {activeSlide.cta.tertiary && (
              <a
                href={activeSlide.cta.tertiary.target}
                className="flex items-center gap-2 text-white/70 px-8 py-4 rounded-lg font-semibold tracking-wide text-base hover:text-brand-accent transition-all duration-200"
              >
                {activeSlide.cta.tertiary.label}
                <ChevronDown size={18} className="rotate-90" />
              </a>
            )}
          </div>
        </div>

        {/* Right: Image Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Main large image */}
          <div className="lg:col-span-2 aspect-[4/3] rounded-xl overflow-hidden relative">
            <img
              src={activeSlide.image}
              alt={activeSlide.caption}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/30" />
          </div>
          {/* Thumbnail images */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-2 h-full">
              {heroSlides.slice(1, 5).map((slide, idx) => (
                <div key={slide.id} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {slide.headline.line1.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center px-8 lg:px-16 py-4">
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
    </div>
  );
};

export default HeroStaticLayout;