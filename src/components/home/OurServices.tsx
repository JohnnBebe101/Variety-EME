import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HOME_SERVICE_CARDS } from '../../data/constants';
import { PageID } from '../../types';
import { Section } from '../Section';

interface OurServicesProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

const DESKTOP_CARDS_PER_SET = 3;
const MOBILE_CARDS_PER_SET = 1;
const ROTATION_INTERVAL = 6000;

export const OurServices: React.FC<OurServicesProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');
  const [currentSet, setCurrentSet] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerSet, setCardsPerSet] = useState(DESKTOP_CARDS_PER_SET);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSets = Math.ceil(HOME_SERVICE_CARDS.length / cardsPerSet);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setCardsPerSet(e.matches ? DESKTOP_CARDS_PER_SET : MOBILE_CARDS_PER_SET);
    };
    handler(mql);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    setCurrentSet(0);
  }, [cardsPerSet]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % totalSets);
      }, ROTATION_INTERVAL);
    }
    return clearTimer;
  }, [isPaused, totalSets, clearTimer]);

  const goToSet = (index: number) => {
    setCurrentSet(index);
    clearTimer();
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % totalSets);
      }, ROTATION_INTERVAL);
    }
  };

  const prevSet = () => goToSet((currentSet - 1 + totalSets) % totalSets);
  const nextSet = () => goToSet((currentSet + 1) % totalSets);

  const visibleCards = HOME_SERVICE_CARDS.slice(
    currentSet * cardsPerSet,
    currentSet * cardsPerSet + cardsPerSet
  );

  const handleNavigate = (card: typeof HOME_SERVICE_CARDS[0]) => {
    if (onNavigate) {
      onNavigate(card.page, undefined, card.path);
    }
  };

  return (
    <Section id="services" variant="light" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="max-w-lg">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t('services') || 'OUR SERVICES'}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {t('comprehensiveSolutions') || 'Comprehensive Engineering Solutions...'}
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              {t('servicesDescription') || 'We deliver end-to-end...'}
            </p>
            <button
              onClick={() => onNavigate?.('portfolio', undefined, '/portfolio')}
              className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-primary transition-colors"
            >
              {t('viewAllServices') || 'All services'}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Overflow wrapper */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSet}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group cursor-pointer"
                    onClick={() => handleNavigate(card)}
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-surface border border-gray-100 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-lg">
                        <card.icon size={18} />
                      </div>
                      {/* Title */}
                      <div className="absolute bottom-16 left-4 right-4 text-white">
                        <h3 className="text-lg font-semibold drop-shadow-md">{card.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left arrow */}
          <button
            onClick={prevSet}
            aria-label="Previous set"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSet}
            aria-label="Next set"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Service card sets">
          {Array.from({ length: totalSets }).map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === currentSet}
              aria-label={`Go to set ${idx + 1}`}
              onClick={() => goToSet(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSet
                  ? 'w-8 bg-brand-accent'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurServices;
