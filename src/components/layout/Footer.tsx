
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone } from 'lucide-react';
import { Brand } from '../Brand';
import { SITE } from '../../data/constants';
import { PageID } from '../../types';

interface FooterProps {
  navigateTo: (page: PageID, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-foreground pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 space-y-10">
            <Brand onClick={() => navigateTo('home')} titleClass="text-lg font-bold tracking-tight" />
            <p className="text-sm text-gray-400 max-w-lg leading-relaxed">{t('footer.tagline')}</p>
          </div>
          <div className="space-y-8">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500">{t('common.hqAddis')}</h5>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex gap-4">
                <MapPin className="text-brand-accent" size={20} />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-accent" size={20} />
                <span>{SITE.contact.phone}</span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500">{t('common.links')}</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home', '#infrastructure')}>{t('common.infrastructure')}</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home', '#innovation')}>{t('common.innovation')}</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home', '#excellence')}>{t('common.academy')}</li>
            </ul>
          </div>
        </div>
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <div>© {currentYear} {SITE.name}</div>
          <div className="flex gap-8">
            <span>{t('common.telecom')}</span>
            <span>{t('common.power')}</span>
            <span>{t('common.ict')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
