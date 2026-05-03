
import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PARTNERS } from '../data/constants';

export const ClientTrustBar: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className="sticky bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/5 z-[90] py-4 shadow-2xl overflow-hidden group">
      <div className="container mx-auto px-6 flex items-center gap-10">
        <div className="hidden md:flex items-center gap-3 shrink-0 border-r border-white/10 pr-10">
          <ShieldCheck size={16} className="text-brand-cyan" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70 leading-tight">{t('strategicAlliances')}</span>
        </div>
        <div className="flex-grow overflow-hidden relative">
          <div className="flex gap-16 items-center animate-marquee whitespace-nowrap py-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
            {PARTNERS.concat(PARTNERS).map((partner, i) => (
              <span key={i} className="text-sm md:text-base font-semibold text-white tracking-tighter uppercase inline-block">
                {partner.name}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
        </div>
        
        <div className="hidden lg:flex shrink-0 items-center gap-5">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-brand-cyan" />
            <span className="text-[9px] font-semibold uppercase tracking-wide text-white/70">{t('globalPartner')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
