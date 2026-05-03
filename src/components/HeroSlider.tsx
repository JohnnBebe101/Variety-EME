
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HERO, UI_CLASSES } from '../data/constants';
import PortfolioSlider from './PortfolioSlider';

import { PageID } from '../types';

interface HeroSliderProps {
  onOpenContact: () => void;
  navigateTo?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenContact, navigateTo }) => {
  const { t } = useTranslation(['common', 'hero']);
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = HERO.slides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO.slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen min-h-[700px] w-full overflow-hidden bg-brand-primary">
      <div className="absolute inset-0">
        <motion.picture
          key={slide.webp}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <source srcSet={slide.webp} type="image/webp" />
          <img
            src={slide.jpeg}
            className="w-full h-full object-cover brightness-[0.70]"
            alt={slide.alt}
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            role="presentation"
            decoding="async"
          />
        </motion.picture>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/30 via-transparent to-brand-primary/80" />
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-brand-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">{t(HERO.badge)}</span>
          </div>
          <h1 className="text-display font-bold leading-tight tracking-tight text-white mb-10">{t(HERO.heading)}</h1>
          <p className="text-body-lg font-normal text-white/80 max-w-2xl mb-12 leading-relaxed">{t(HERO.subheading)}</p>
          <div className="flex flex-wrap gap-5">
            <button
              onClick={() => navigateTo ? navigateTo('about', undefined, '/about') : onOpenContact()}
              className="px-10 py-5 bg-brand-accent text-brand-primary rounded-xl font-semibold tracking-wide text-sm uppercase hover:bg-white hover:text-brand-primary active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-200 shadow-xl flex items-center gap-3 group"
            >
              {t('startPartnership')} <ArrowRight size={16} />
            </button>
            <button
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-semibold tracking-wide text-sm uppercase hover:bg-white/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-200"
            >
              {t('capabilityView')}
            </button>
          </div>
          <div className="mt-10 flex gap-3">
            {HERO.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show hero slide ${index + 1}`}
                className={`w-11 h-11 flex items-center justify-center rounded-full transition ${
                  index === activeSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
              >
                <span className={`w-3 h-3 rounded-full block ${
                  index === activeSlide ? 'bg-brand-primary' : 'bg-white'
                }`} />
              </button>
            ))}
          </div>
        </motion.div>
        <PortfolioSlider />
      </div>
    </section>
  );
};
