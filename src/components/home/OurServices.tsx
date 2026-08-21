import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HOME_SERVICE_CARDS } from '../../data/constants';
import { PageID } from '../../types';
import { Section } from '../Section';

interface OurServicesProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const OurServices: React.FC<OurServicesProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');

  const handleNavigate = (card: typeof HOME_SERVICE_CARDS[0]) => {
    if (onNavigate) {
      onNavigate(card.page, undefined, card.path);
    }
  };

  return (
    <Section variant="light" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Service Image Cards */}
          <div className="space-y-6">
            <div className="hidden lg:block">
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
                {t('common.services') || 'OUR SERVICES'}
              </span>
            </div>
            {HOME_SERVICE_CARDS.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleNavigate(card)}
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-brand-surface mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{card.title}</h3>
                    <p className="text-white/80 text-sm md:text-base max-w-xl">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Description & CTA */}
          <div className="lg:pl-8">
            <div className="flex flex-col justify-center h-full">
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest lg:hidden mb-4">
                {t('common.services') || 'OUR SERVICES'}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t('common.comprehensiveSolutions') || 'Comprehensive Engineering Solutions for Ethiopia\'s Growth'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
                {t('common.servicesDescription') || 'We deliver end-to-end electromechanical, telecommunications, power, and ICT solutions tailored to Ethiopia\'s unique infrastructure challenges. From concept to commissioning, our integrated approach ensures quality, safety, and on-time delivery.'}
              </p>
              <button
                onClick={() => onNavigate?.('portfolio', undefined, '/portfolio')}
                className="inline-flex items-center gap-2 text-brand-accent font-semibold text-lg hover:text-brand-primary transition-colors w-fit"
              >
                {t('common.viewAllServices') || 'All services'}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurServices;