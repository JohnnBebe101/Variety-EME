import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { WHAT_WE_OFFER_ITEMS } from '../../data/constants';
import { PageID } from '../../types';
import { Section } from '../Section';

interface WhatWeOfferProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');

  const handleNavigate = (path: string) => {
    if (onNavigate && path) {
      onNavigate('home' as PageID, undefined, path);
    }
  };

  return (
    <Section variant="light" className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left: Heading + Description + CTA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('whatWeOffer') || 'WHAT WE OFFER'}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-sm">
              {t('whatWeOfferDescription') || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
            </p>
            <button
              onClick={() => handleNavigate('/about')}
              className="bg-brand-accent text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-brand-accent/90 transition-colors"
            >
              {t('readMore') || 'Read More'}
            </button>
          </div>

          {/* Right: 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHAT_WE_OFFER_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="w-11 h-11 bg-brand-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <item.icon size={20} className="text-brand-primary" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2">{item.description}</p>
                <button
                  onClick={() => handleNavigate(item.path)}
                  className="inline-flex items-center gap-1.5 text-brand-accent font-semibold text-sm hover:text-brand-primary transition-colors"
                >
                  Details
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhatWeOffer;
