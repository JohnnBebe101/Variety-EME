import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageID } from '../../types';
import { Section } from '../Section';

interface CTABannerProps {
  onNavigate?: (page: PageID, hash?: string, routePath?: string) => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onNavigate }) => {
  const { t } = useTranslation('common');

  const handleNavigate = (path: string) => {
    if (onNavigate && path) {
      onNavigate('home' as PageID, undefined, path);
    }
  };

  return (
    <Section variant="light" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-2">
              {t('getInTouch') || 'ABOUT US'}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {t('ctaBannerTitle') || 'Get full range of premium Industrial services for your business'}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-xl">
              {t('ctaBannerDesc') || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
            </p>
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <button
                onClick={() => handleNavigate('/about')}
                className="bg-brand-accent text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-brand-primary hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                {t('readNow') || 'Read now'}
              </button>
              <button
                onClick={() => handleNavigate('/about')}
                className="border-2 border-gray-300 text-gray-900 px-6 py-2.5 rounded-md font-semibold text-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-200 whitespace-nowrap"
              >
                {t('companyHistory') || 'Company History'}
              </button>
            </div>
          </div>

          {/* Right: Social */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <span className="text-gray-500 text-xs uppercase tracking-wide">
              {t('followUs') || 'Get connected with us'}
            </span>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/variety-eme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTABanner;
