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
    <Section variant="light" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest block mb-4">
              {t('common.getInTouch') || 'GET IN TOUCH'}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('common.ctaBannerTitle') || 'Get full range of premium Industrial services for your business'}
            </h2>
          </div>

          {/* Right: Buttons + Social */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-6 w-full lg:w-auto">
            <button
              onClick={() => handleNavigate('/about')}
              className="bg-brand-accent text-white px-8 py-4 rounded-lg font-semibold tracking-wide text-base shadow-lg hover:bg-brand-primary hover:text-white transition-all duration-200 uppercase whitespace-nowrap"
            >
              {t('common.readNow') || 'Read now'}
            </button>
            <button
              onClick={() => handleNavigate('/about')}
              className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold tracking-wide text-base hover:border-brand-accent hover:text-brand-accent transition-all duration-200 uppercase whitespace-nowrap"
            >
              {t('common.companyHistory') || 'Company History'}
            </button>
            <div className="flex items-center gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6 lg:ml-4">
              <span className="text-gray-500 text-sm hidden sm:block">
                {t('common.followUs') || 'Follow us:'}
              </span>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/variety-eme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.facebook.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTABanner;