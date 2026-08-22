import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroSlide } from '../../data/heroSlides';
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
    <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex items-center">
      <div className="max-w-2xl">
        <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3 inline-block">
          {activeSlide.eyebrow.text}
        </span>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4">
          {activeSlide.headline.line1.text}
          <br />
          <span className="text-brand-accent">{activeSlide.headline.line2.text}</span>
          {activeSlide.headline.line3 && (
            <>
              <br />
              <span className="text-white/70">{activeSlide.headline.line3.text}</span>
            </>
          )}
        </h1>
        <p className="text-base md:text-lg text-white/60 mb-6 max-w-lg leading-relaxed">
          {activeSlide.subtitle}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {activeSlide.cta.primary && (
            <button
              onClick={() => onNavigate && activeSlide.cta.primary.target && onNavigate('home' as PageID, undefined, activeSlide.cta.primary.target)}
              className="bg-[#f5c518] text-gray-900 px-7 py-3 rounded-md font-semibold text-sm hover:bg-[#e0b414] transition-all duration-200"
            >
              {activeSlide.cta.primary.label}
            </button>
          )}
          {activeSlide.cta.secondary && (
            <button
              onClick={() => onNavigate && activeSlide.cta.secondary.target && onNavigate('home' as PageID, undefined, activeSlide.cta.secondary.target)}
              className="border-2 border-white text-white px-7 py-3 rounded-md font-semibold text-sm hover:bg-white/10 transition-all duration-200"
            >
              {activeSlide.cta.secondary.label}
            </button>
          )}
          {activeSlide.cta.tertiary && (
            <a
              href={activeSlide.cta.tertiary.target}
              className="flex items-center gap-2 text-white/70 px-4 py-3 font-semibold text-sm hover:text-brand-accent transition-all duration-200"
            >
              {activeSlide.cta.tertiary.label}
              <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center px-8 lg:px-16 py-4">
        <a
          href="#services"
          onClick={handleScroll}
          aria-label="Scroll down to services section"
          className="flex items-center gap-1.5 text-white/45 text-xs animate-bounce"
        >
          <span className="hidden sm:inline tracking-wide">Scroll</span>
        </a>
      </div>
    </div>
  );
};

export default HeroStaticLayout;
