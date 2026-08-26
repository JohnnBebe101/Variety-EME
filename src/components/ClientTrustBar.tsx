
import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PARTNERS } from '../data/constants';

export const ClientTrustBar: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className="relative w-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10 z-10 py-1.5 shadow-md overflow-hidden group">
      <div className="container mx-auto px-6 flex items-center gap-8">
        <div className="hidden md:flex items-center gap-3 shrink-0 border-r border-white/10 pr-8">
          <ShieldCheck size={14} className="text-brand-cyan" />
          <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/70 leading-tight">{t('strategicAlliances')}</span>
        </div>
        <div className="flex-grow overflow-hidden relative">
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap py-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
            {PARTNERS.concat(PARTNERS).map((partner, i) => (
              <span key={i} className="inline-flex items-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-5 md:h-6 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'inline';
                    }}
                  />
                ) : null}
                <span className={`text-xs md:text-sm font-semibold text-white tracking-tight uppercase ${partner.logo ? 'hidden' : 'inline'}`}>
                  {partner.name}
                </span>
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
        </div>
        
        <div className="hidden lg:flex shrink-0 items-center gap-4">
          <div className="flex items-center gap-2">
            <Award size={12} className="text-brand-cyan" />
            <span className="text-[8px] font-semibold uppercase tracking-wide text-white/70">{t('globalPartner')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
