import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PARTNERS } from '../../data/constants';
import { Section } from '../Section';

export const PartnersSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Section variant="light" className="py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-4">
            {t('strategicAlliances') || 'STRATEGIC ALLIANCES'}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto">
            {t('globalPartnerNetwork') || 'Global Partner Network'}
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap py-4 opacity-60 hover:opacity-100 transition-opacity duration-700">
            {PARTNERS.concat(PARTNERS).map((partner, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs md:text-sm font-semibold text-gray-900 tracking-tight uppercase">
                    {partner.name}
                  </span>
                )}
              </motion.span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </Section>
  );
};

export default PartnersSection;