import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SITE, PARTNERS, STATS, UI_CLASSES, ISO_DATA, FAQ_DATA } from '../../data/constants';
import { PageID } from '../../types';
import { MetaTags } from '../MetaTags';
import HeroSection from '../hero/HeroSection';
import { ClientTrustBar } from '../ClientTrustBar';
import { CountUp } from '../CountUp';
import { Section } from '../Section';
import { LogoSymbol } from '../LogoSymbol';
import { OurServices } from './OurServices';
import { TestimonialStrip } from './TestimonialStrip';
import { WhatWeOffer } from './WhatWeOffer';
import { RecentProjects } from './RecentProjects';
import { CTABanner } from './CTABanner';
import { FAQSection } from './FAQSection';
import { PartnersSection } from './PartnersSection';
import { ContactQuoteForm } from './ContactQuoteForm';
import { RecentNews } from './RecentNews';

interface HomePageProps {
  onNavigate: (page: PageID, hash?: string, path?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useTranslation();
  const { t: heroT } = useTranslation('hero');
  const [activeISO, setActiveISO] = useState("9001");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE.name,
    "url": "https://varietyeme.com",
    "logo": "https://varietyeme.com/logo.png",
    "description": heroT('heroSub'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <MetaTags
        title={SITE.name + " | " + SITE.tagline}
        description={heroT('heroSub')}
        schema={organizationSchema}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="pt-20 md:pt-24 lg:pt-28">
        <HeroSection onNavigate={onNavigate} mode="static" />
      </div>
      <OurServices onNavigate={onNavigate} />
      <TestimonialStrip />
      <ClientTrustBar />

      <Section className="bg-brand-primary overflow-hidden border-b border-white/5">
        <div className="mb-8 flex items-center gap-3">
          <LogoSymbol className="w-6 h-6 opacity-30" />
          <span className={UI_CLASSES.tag + " text-brand-muted/70 border-l-2 border-brand-accent pl-3"}>
            {t('strategicDeliveryNetwork')}
          </span>
        </div>
        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap opacity-[0.1] hover:opacity-[0.8] transition-opacity duration-700">
          {PARTNERS.concat(PARTNERS).map((n, i) => (
            <span key={i} className="text-sm md:text-base font-semibold text-brand-foreground tracking-tighter uppercase">
              {n.name}
            </span>
          ))}
        </div>
      </Section>

      <div className="w-16 h-px bg-brand-accent/30 mx-auto" />

      <WhatWeOffer onNavigate={onNavigate} />

      <RecentProjects onNavigate={onNavigate} />

      <Section id="excellence" className="bg-brand-primary overflow-hidden py-8">
        <div className="max-w-2xl mb-6">
          <span className={`text-brand-accent ${UI_CLASSES.tag} mb-2 border-l-2 border-brand-accent pl-3`}>
            Our Certifications
          </span>
          <h2 className={`${UI_CLASSES.sectionTitle} text-brand-foreground text-lg`}>
            {t('integrityFramework')}
          </h2>
        </div>
        <div className="bg-brand-surface rounded-xl overflow-hidden grid lg:grid-cols-3 shadow-lg">
          <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-brand-surface to-brand-primary">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeISO}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-28 h-28 bg-white rounded-full p-4 shadow-lg flex flex-col items-center justify-center"
              >
                <span className="text-[6px] font-bold uppercase tracking-widest text-brand-primary/40 mb-0.5">
                  Certified
                </span>
                <span className="text-xs font-semibold text-brand-primary tracking-tight">
                  {ISO_DATA.find(i => i.id === activeISO)?.standard || `ISO ${activeISO}`}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="lg:col-span-2 p-3 md:p-4 bg-white/5 divide-y divide-white/5">
            {ISO_DATA.map((iso) => (
              <div key={iso.id} className="py-2 cursor-pointer group relative" onClick={() => setActiveISO(iso.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center ${
                      activeISO === iso.id
                        ? (iso.id === 'ecovadis' ? 'bg-violet-500 text-white' : 'bg-brand-accent text-brand-primary')
                        : 'bg-white/5 text-white/10'
                    }`}>
                      <CheckCircle2 size={14} />
                    </div>
                    <h3 className={`text-xs font-semibold tracking-tight ${
                      activeISO === iso.id ? 'text-brand-foreground' : 'text-brand-foreground/30'
                    }`}>
                      {iso.standard}
                    </h3>
                    {(iso.status === 'certified' || iso.status === 'rated') && (
                      <span className={`absolute right-8 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                        iso.status === 'certified'
                          ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                          : 'bg-violet-500/20 border border-violet-500/40 text-violet-400'
                      }`}>
                        {iso.status === 'rated' ? 'Rated' : 'Certified'}
                      </span>
                    )}
                  </div>
                  <ChevronDown size={16} className={`transition-all ${
                    activeISO === iso.id ? 'rotate-180 text-brand-accent' : 'text-white/5'
                  }`} />
                </div>
                {activeISO === iso.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-xs text-gray-400 leading-relaxed mt-2 pl-11"
                  >
                    {iso.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="w-16 h-px bg-brand-accent/30 mx-auto" />

      <Section className="bg-brand-primary text-brand-foreground relative z-10 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {STATS.map((st, i) => (
            <div key={i}>
              <div className="text-h2 font-bold tabular-nums mb-3 tracking-tight leading-none">
                <CountUp value={st.value} suffix={st.suffix || ""} />
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
                {t(st.label)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner onNavigate={onNavigate} />

      <FAQSection />

      <PartnersSection />

      <ContactQuoteForm onNavigate={onNavigate} />

      <RecentNews onNavigate={onNavigate} />
    </>
  );
}
