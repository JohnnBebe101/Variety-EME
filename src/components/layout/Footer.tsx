
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone } from 'lucide-react';
import { Brand } from '../Brand';
import { SITE } from '../../data/constants';
import { PageID } from '../../types';

interface FooterProps {
  navigateTo: (page: PageID, hash?: string, routePath?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-foreground pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company Info */}
          <div>
            <Brand onClick={() => navigateTo('home')} titleClass="text-lg font-bold tracking-tight" />
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Integrated power, telecom and ICT solutions for enterprise and public-sector clients.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-accent">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-brand-accent">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-brand-accent">Facebook</a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home')}>Home</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('identity', undefined, '/about')}>About Us</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('contact', undefined, '/contact')}>Contact</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('portfolio-detailed')}>Portfolio</li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">Services</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('telecommunications')}>Telecom</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('ict_datacenter')}>ICT & Data Center</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('power')}>Power</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('academy_overview')}>Academy</li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">Contact</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="text-brand-accent flex-shrink-0" size={18} />
                <span>{SITE.contact.address.split('\n')[0]}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-accent flex-shrink-0" size={18} />
                <span>{SITE.contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent flex-shrink-0 text-xs">@</span>
                <span>{SITE.contact.email}</span>
              </li>
            </ul>
            <button 
              onClick={() => navigateTo('contact', undefined, '/contact')}
              className="mt-6 text-brand-accent text-sm font-medium hover:underline"
            >
              Get in Touch →
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <div>© {currentYear} {SITE.name}. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>{t('common.telecom')}</span>
            <span>{t('common.power')}</span>
            <span>{t('common.ict')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
