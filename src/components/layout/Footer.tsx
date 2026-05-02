
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
    <footer className="bg-brand-primary text-brand-foreground pt-16 pb-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-8 items-start divide-y md:divide-y-0 lg:divide-x divide-white/10">
          {/* Column 1: Company Info */}
          <div className="lg:px-4 py-6 lg:py-0">
            <Brand onClick={() => navigateTo('home')} titleClass="text-lg font-bold tracking-tight" />
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Integrated power, telecom and ICT solutions for enterprise and public-sector clients.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://et.linkedin.com/company/infineth" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors">LinkedIn</a>
              <a href="https://share.google/No2zCd3Ofs8Sd0UXZ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors">Twitter</a>
              <a href="https://www.facebook.com/Infineth-solutions-plc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors">Facebook</a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:px-4 py-6 lg:py-0">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Quick Links</h5>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('home')}>Home</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('identity', undefined, '/about')}>About Us</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('contact', undefined, '/contact')}>Contact</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('portfolio-detailed')}>Portfolio</li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="lg:px-4 py-6 lg:py-0">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Services</h5>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('telecommunications')}>Telecom</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('ict_datacenter')}>ICT & Data Center</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('power')}>Power</li>
              <li className="hover:text-white cursor-pointer" onClick={() => navigateTo('academy_overview')}>Academy</li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="lg:px-4 py-6 lg:py-0">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="text-brand-accent flex-shrink-0" size={16} />
                <span>{SITE.contact.address.split('\n')[0]}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-accent flex-shrink-0" size={16} />
                <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-accent transition-colors">
                  {SITE.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent flex-shrink-0 text-xs">@</span>
                <a href={`mailto:${SITE.contact.email}`} className="hover:text-brand-accent transition-colors">
                  {SITE.contact.email}
                </a>
              </li>
            </ul>
            <button 
              onClick={() => navigateTo('contact', undefined, '/contact')}
              className="mt-4 text-brand-accent text-sm font-medium hover:underline"
            >
              Get in Touch →
            </button>
            <button 
              onClick={() => navigateTo('contact', undefined, '/contact?subject=General+Project+Inquiry')}
              className="mt-2 text-sm text-gray-400 hover:text-brand-accent transition-colors"
            >
              Ready to start your next project? <span className="underline">Request a Site Assessment →</span>
            </button>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <div>© {currentYear} {SITE.name}. All rights reserved.</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <button onClick={() => navigateTo('identity', undefined, '/about')} className="hover:text-white cursor-pointer">Privacy Policy</button>
            <span className="text-white/20">|</span>
            <button onClick={() => navigateTo('identity', undefined, '/about')} className="hover:text-white cursor-pointer">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
