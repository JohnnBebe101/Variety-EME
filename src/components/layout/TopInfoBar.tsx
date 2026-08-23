import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Award } from 'lucide-react';
import { SITE } from '../../data/constants';

export const TopInfoBar: React.FC = () => {
  return (
    <header className="h-[32px] bg-[#0f0f1a] flex items-center border-b border-white/5">
      <div className="container mx-auto px-4 flex items-center justify-between overflow-hidden">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6 text-[11px] text-white/60 font-medium">
          <div className="flex items-center gap-1.5">
            <Phone size={10} className="text-brand-accent" />
            <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-accent transition-colors">
              {SITE.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={10} className="text-brand-accent" />
            <a href={`mailto:${SITE.contact.email}`} className="hover:text-brand-accent transition-colors">
              {SITE.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 hidden md:flex">
            <MapPin size={10} className="text-brand-accent" />
            <span>{SITE.contact.address.split(',')[0]}</span>
          </div>
        </div>

        {/* Right: Social Icons + Badge */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/variety-eme" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <Linkedin size={12} />
            </a>
            <a href="https://www.facebook.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <Facebook size={12} />
            </a>
            <a href="https://twitter.com/varietyeme" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
              <Twitter size={12} />
            </a>
          </div>
          <div className="flex items-center gap-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full px-3 py-1 ml-2">
            <Award size={10} className="text-brand-accent" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-brand-accent">
              Global Certified Winner
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};