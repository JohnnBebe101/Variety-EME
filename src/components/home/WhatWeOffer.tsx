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
    <Section variant="light" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-4">
            {t('common.whatWeOffer') || 'WHAT WE OFFER'}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto">
            {t('common.whatWeOfferTitle') || 'Delivering Excellence Through Innovation & Expertise'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_OFFER_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-brand-primary/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-brand-accent transition-all duration-300">
                  <item.icon size={28} className="text-brand-primary group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                <button
                  onClick={() => handleNavigate(item.path)}
                  className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-primary transition-colors"
                >
                  Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatWeOffer;