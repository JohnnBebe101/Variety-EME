import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, LucideIcon } from 'lucide-react';
import { ANIM } from '../../data/animationConstants';
import { HeroSlide } from '../../data/heroSlides';
import { PageID } from '../../types';

interface HeroSlideContentProps {
  slide: HeroSlide;
  isFirstLoad: boolean;
  isActive: boolean;
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

const HeroSlideContent: React.FC<HeroSlideContentProps> = ({ slide, isFirstLoad, isActive, onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setVisible(false);
      return;
    }
    const delay = isFirstLoad ? ANIM.EYEBROW_DELAY : ANIM.CONTENT_IN_DELAY;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [isActive, isFirstLoad]);

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
        max-w-[58%] transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      <div
        className={`
          inline-flex items-center gap-2 w-fit mb-6
          bg-white/10 backdrop-blur-sm border border-white/20
          rounded-full px-4 py-1.5
          transition-all duration-400
          ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
        `}
        style={{ transitionDelay: isFirstLoad ? `${ANIM.EYEBROW_DELAY}ms` : '0ms' }}
      >
        <EyebrowIcon className="w-3.5 h-3.5 text-brand-accent" />
        <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
          {slide.eyebrow.text}
        </span>
      </div>

      <h1 className="mb-5 leading-[1.1]">
        {headlineLines.map((line, li) => (
          <span key={li} className="block">
            {line.text.split(' ').map((word, wi) => (
              <span
                key={wi}
                className={`
                  inline-block mr-[0.25em]
                  transition-all duration-300
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                  ${line.color}
                  text-4xl md:text-5xl lg:text-6xl font-bold
                `}
                style={{
                  transitionDelay: visible
                    ? `${(isFirstLoad ? ANIM.HEADLINE_START : ANIM.CONTENT_IN_DELAY) + (li * 3 + wi) * ANIM.HEADLINE_WORD_STAGGER}ms`
                    : '0ms',
                }}
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p
        className={`
          text-white/75 text-base lg:text-lg leading-relaxed
          max-w-xl mb-6
          transition-all duration-400
          ${visible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          transitionDelay: isFirstLoad
            ? `${ANIM.SUBTITLE_DELAY}ms`
            : `${ANIM.CONTENT_IN_DELAY + 100}ms`,
        }}
      >
        {slide.subtitle}
      </p>

      <div className="mb-8">
        {slide.proofChipsLabel && (
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">
            {slide.proofChipsLabel}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {slide.proofChips.map((chip, ci) => (
            <span
              key={ci}
              className={`
                bg-white/10 border border-white/15 rounded-full
                px-3 py-1 text-white/70 text-xs font-medium
                transition-all duration-300
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}
              style={{
                transitionDelay: isFirstLoad
                  ? `${ANIM.CHIPS_DELAY + ci * ANIM.CHIPS_STAGGER}ms`
                  : `${ANIM.CONTENT_IN_DELAY + 150 + ci * 40}ms`,
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`
          flex flex-wrap gap-4
          transition-all duration-350
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        `}
        style={{
          transitionDelay: isFirstLoad ? `${ANIM.CTA_DELAY}ms` : `${ANIM.CONTENT_IN_DELAY + 200}ms`,
        }}
      >
        <button
          onClick={handlePrimaryCta}
          className="inline-flex items-center gap-2 bg-brand-accent text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-brand-accent/90 active:scale-95 transition-all duration-200 cursor-pointer"
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
          className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          {slide.cta.secondary.label}
        </button>
      </div>
    </div>
  );
};

export default HeroSlideContent;