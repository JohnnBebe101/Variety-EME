import React from 'react';
import { MapPin, Phone, Linkedin, Facebook } from 'lucide-react';
import { Brand } from '../Brand';
import { SITE } from '../../data/constants';
import { PageID } from '../../types';

interface FooterProps {
  navigateTo: (page: PageID, hash?: string, routePath?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-foreground pt-16 pb-8 px-4 md:px-8 lg:px-12 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(var(--color-brand-accent)/0.04),transparent)]">
      <div className="max-w-7xl mx-auto">
        
        {/* ZONE A — Brand row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Brand onClick={() => navigateTo('home')} titleClass="text-lg font-bold tracking-tight" />
            <p className="text-brand-foreground/50 text-sm max-w-xs hidden lg:block">
              Innovative and intelligent electromechanical solutions for enterprise and public-sector clients.
            </p>
          </div>
          <div className="flex gap-4">
            <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors"><Linkedin size={18} /></a>
            <a href={SITE.social.google} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors" aria-label="Google Business Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
              </svg>
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors"><Facebook size={18} /></a>
          </div>
        </div>

        {/* ZONE B — Navigation columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Column 1: Quick Links */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">Quick Links</h5>
            <ul className="space-y-2.5">
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('home')}>Home</li>
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('about')}>About Us</li>
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('contact', undefined, '/contact')}>Contact</li>
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('portfolio')}>Portfolio</li>
            </ul>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">Services</h5>
            <ul className="space-y-2.5">
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('telecommunications')}>Telecom</li>
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('ict_datacenter')}>ICT & Data Center</li>
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('power')}>Power</li>
              <li className="text-sm text-brand-foreground/50 hover:text-white transition-colors duration-200 cursor-pointer" onClick={() => navigateTo('academy')}>Training</li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">Contact</h5>
            <ul className="space-y-3 text-sm text-brand-foreground/50">
              <li className="flex gap-3">
                <MapPin className="text-brand-accent flex-shrink-0" size={16} />
                <span>{SITE.contact.address.split('\n')[0]}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-accent flex-shrink-0" size={16} />
                <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-accent transition-colors">{SITE.contact.phone}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-accent flex-shrink-0 text-xs">@</span>
                <a href={`mailto:${SITE.contact.email}`} className="hover:text-brand-accent transition-colors">{SITE.contact.email}</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: CTA */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">Start a Project</h5>
            <p className="text-sm text-brand-foreground/50 mb-3">
              Ready to deliver your next infrastructure project?
            </p>
            <button onClick={() => navigateTo('contact', undefined, '/contact')} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-white transition-colors mt-2">
              Get in Touch →
            </button>
            <button onClick={() => navigateTo('contact', undefined, '/contact')} className="inline-flex items-center gap-2 text-sm text-brand-foreground/50 hover:text-white transition-colors mt-2 block">
              Request Site Assessment →
            </button>
          </div>
        </div>
        
        {/* ZONE C — Legal bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/5 gap-2">
          <p className="text-xs text-brand-foreground/30">© {currentYear} Variety ElectroMechanical Engineering. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => navigateTo('privacy_policy', undefined, '/privacy-policy')} className="text-xs text-brand-foreground/30 hover:text-white transition-colors">Privacy Policy</button>
            <span className="text-white/20">|</span>
            <button onClick={() => navigateTo('terms_of_service', undefined, '/terms-of-service')} className="text-xs text-brand-foreground/30 hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};