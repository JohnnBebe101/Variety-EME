import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, LucideIcon } from 'lucide-react';
import { HeroSlide } from '../../data/heroSlides';
import { PageID } from '../../types';

interface HeroSlideContentProps {
  slide: HeroSlide;
  isActive: boolean;
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

const HeroSlideContent: React.FC<HeroSlideContentProps> = ({ slide, isActive, onNavigate }) => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setEntered(false);
      return;
    }
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, [isActive]);

  const headlineLines = [slide.headline.line1, slide.headline.line2];
  if (slide.headline.line3) {
    headlineLines.push(slide.headline.line3);
  }

  const EyebrowIcon: LucideIcon = slide.eyebrow.icon;

  const handlePrimaryCta = () => {
    if (slide.cta.primary.action === 'scroll') {
      const el = document.querySelector(slide.cta.primary.target);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      const pageId = slide.cta.primary.target.replace('/', '') as PageID;
      onNavigate(pageId, undefined, slide.cta.primary.target);
    }
  };

  const handleSecondaryCta = () => {
    if (onNavigate) {
      const pageId = slide.cta.secondary.target.replace('/', '') as PageID;
      onNavigate(pageId, undefined, slide.cta.secondary.target);
    }
  };

  return (
    <div
      className={`
        relative z-10 flex flex-col justify-center
        h-full px-8 md:px-12 lg:px-20 xl:px-24
        max-w-[58%]
        transition-opacity duration-300
        ${entered ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Eyebrow */}
      <div
        className={`
          inline-flex items-center gap-2 w-fit mb-5
          bg-white/10 backdrop-blur-sm border border-white/20
          rounded-full px-4 py-1.5
          ${entered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
          transition-all duration-300
        `}
      >
        <EyebrowIcon className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
        <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
          {slide.eyebrow.text}
        </span>
      </div>

      {/* Headline - simplified, no word splitting */}
      <h1 className={`mb-5 leading-[1.05] ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} transition-all duration-300`}>
        {headlineLines.map((line, li) => (
          <span
            key={li}
            className={`block font-bold tracking-tight ${line.color} text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl`}
          >
            {line.text}
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p
        className={`
          text-white/75 text-sm sm:text-base lg:text-lg
          leading-relaxed max-w-xl mb-6 font-normal
          ${entered ? 'opacity-100' : 'opacity-0'}
          transition-opacity duration-300
        `}
      >
        {slide.subtitle}
      </p>

      {/* Proof chips */}
      <div className={`mb-7 ${entered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        {slide.proofChipsLabel && (
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
            {slide.proofChipsLabel}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {slide.proofChips.map((chip, ci) => (
            <span
              key={ci}
              className="bg-white/10 border border-white/15 rounded-full px-3 py-1 text-white/70 text-xs font-medium"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className={`flex flex-wrap gap-3 ${entered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        <button
          onClick={handlePrimaryCta}
          className="inline-flex items-center gap-2 bg-brand-accent text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-brand-accent/90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          {slide.cta.primary.label}
          {slide.cta.primary.action === 'scroll' ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </button>

        <button
          onClick={handleSecondaryCta}
          className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-white/10 active:scale-[0.98] transition-all duration-200 cursor-pointer"
        >
          {slide.cta.secondary.label}
        </button>
      </div>
    </div>
  );
};

export default HeroSlideContent;