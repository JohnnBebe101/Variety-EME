
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  Radio,
  Phone,
  MapPin,
  Cpu, 
  Server, 
  Layers, 
  CheckCircle2, 
  Zap,
} from 'lucide-react';

import { PageID } from './types';
import { getPathFromPageId, getRouteFromPath } from './utils/routes';
import { SITE, HERO, PARTNERS, STATS, UI_CLASSES, NAV_CONFIG, ISO_DATA } from './data/constants';
import { Layout } from './components/layout/Layout';
import { LogoSymbol } from './components/LogoSymbol';
import { Brand } from './components/Brand';
import { HeroSlider } from './components/HeroSlider';
import { ClientTrustBar } from './components/ClientTrustBar';
import { ServiceCard } from './components/ServiceCard';
import { ContactModal } from './components/ContactModal';
import { CountUp } from './components/CountUp';
import { Section } from './components/Section';
import { PageStub } from './components/PageStub';
import { 
  CorporatePages, 
  InfrastructurePages, 
  InnovationPages, 
  ExcellencePages 
} from './components/PageSections';

import { MetaTags } from './components/MetaTags';

interface AppProps {
  initialPage?: PageID;
  i18n?: any;
}

const App: React.FC<AppProps> = ({ initialPage = 'home', i18n: i18nProp }) => {
  const { t } = useTranslation(undefined, { i18n: i18nProp });
  const { t: heroT } = useTranslation('hero', { i18n: i18nProp });
  const initialRoute = (() => {
    if (initialPage !== 'home') {
      return { page: initialPage, openContact: false };
    }

    if (typeof window === 'undefined') {
      return { page: 'home' as PageID, openContact: false };
    }

    return getRouteFromPath(window.location.pathname);
  })();

  const [currentPage, setCurrentPage] = useState<PageID>(initialRoute.page);
  const [isContactOpen, setIsContactOpen] = useState(initialRoute.openContact ?? false);
  const [activeISO, setActiveISO] = useState("9001");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setIsScrolled(window.scrollY > 30);
    const handlePopState = () => {
      const route = getRouteFromPath(window.location.pathname);
      setCurrentPage(route.page);
      setIsContactOpen(route.openContact ?? false);
    };

    window.addEventListener('scroll', h);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', h);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (page: PageID, hash?: string, routePath?: string) => {
    const path = routePath || getPathFromPageId(page);
    const route = getRouteFromPath(path);

    setCurrentPage(route.page);
    setIsContactOpen(route.openContact ?? false);
    setIsMobileOpen(false);
    setActiveMenu(null);

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (hash && route.page === 'home') {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  const renderContent = () => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": SITE.name,
      "url": "https://infine-th.com",
      "logo": "https://infine-th.com/logo.png",
      "description": heroT('heroSub'),
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Addis Ababa",
        "addressCountry": "Ethiopia"
      }
    };

    switch(currentPage) {
      case 'identity': return (
        <>
          <MetaTags title={t('nav.identity')} description="InfinEth Solutions Corporate Identity" />
          <CorporatePages.Identity onBack={() => navigateTo('home')} />
        </>
      );
      case 'leadership': return (
        <>
          <MetaTags title={t('nav.leadership')} description="Our Leadership Team" />
          <CorporatePages.Leadership onBack={() => navigateTo('home')} />
        </>
      );
      case 'board': return (
        <>
          <MetaTags title={t('nav.board')} description="Our Board of Directors" />
          <CorporatePages.Board onBack={() => navigateTo('home')} />
        </>
      );
      case 'portfolio-detailed': return (
        <>
          <MetaTags title={t('nav.portfolio')} description="Our Project Portfolio" />
          <CorporatePages.Portfolio onBack={() => navigateTo('home')} />
        </>
      );
      case 'portfolio': return (
        <>
          <MetaTags title={t('nav.portfolio')} description="Our Project Portfolio" />
          <CorporatePages.Portfolio onBack={() => navigateTo('home')} />
        </>
      );
      case 'about': return (
        <>
          <MetaTags title={t('nav.identity')} description="InfinEth Solutions Corporate Identity" />
          <CorporatePages.Identity onBack={() => navigateTo('home')} />
        </>
      );
      case 'presence': return (
        <>
          <MetaTags title={t('nav.presence')} description="Our Regional Presence" />
          <CorporatePages.Presence onBack={() => navigateTo('home')} />
        </>
      );
      case 'telecom': return (
        <>
          <MetaTags title={t('common.services.telecom.title')} description={t('common.services.telecom.items', { returnObjects: true })[0]} />
          <InfrastructurePages.Telecom onBack={() => navigateTo('home')} />
        </>
      );
      case 'telecommunications': return (
        <>
          <MetaTags title={t('common.services.telecom.title')} description={t('common.services.telecom.items', { returnObjects: true })[0]} />
          <InfrastructurePages.Telecom onBack={() => navigateTo('home')} />
        </>
      );
      case 'telecommunications_mobile_rollout': return (
        <>
          <MetaTags title="Mobile Rollout" description="Telecommunications mobile rollout services" />
          <InfrastructurePages.Network onBack={() => navigateTo('home')} />
        </>
      );
      case 'telecommunications_fiber_optics': return (
        <>
          <MetaTags title="Fiber Optics" description="Telecommunications fiber optics services" />
          <InfrastructurePages.Telecom onBack={() => navigateTo('home')} />
        </>
      );
      case 'telecommunications_tower_civil_works': return (
        <>
          <MetaTags title="Tower & Civil Works" description="Telecommunications tower and civil works" />
          <PageStub title="Tower & Civil Works" />
        </>
      );
      case 'telecommunications_operations_maintenance': return (
        <>
          <MetaTags title={t('nav.om')} description="Operations & Maintenance Services" />
          <InfrastructurePages.OM onBack={() => navigateTo('home')} />
        </>
      );
      case 'telecommunications_warehouse_management': return (
        <>
          <MetaTags title="Warehouse Management" description="Telecommunications warehouse management services" />
          <PageStub title="Warehouse Management" />
        </>
      );
      case 'power': return (
        <>
          <MetaTags title={t('common.services.power.title')} description={t('common.services.power.items', { returnObjects: true })[0]} />
          <InfrastructurePages.Power onBack={() => navigateTo('home')} />
        </>
      );
      case 'power_transmission_distribution': return (
        <>
          <MetaTags title="Transmission & Distribution" description="Power transmission and distribution services" />
          <InfrastructurePages.Power onBack={() => navigateTo('home')} />
        </>
      );
      case 'power_minigrid_systems': return (
        <>
          <MetaTags title="Mini-grid Systems" description="Power mini-grid and renewable systems" />
          <InfrastructurePages.Network onBack={() => navigateTo('home')} />
        </>
      );
      case 'power_backup_power': return (
        <>
          <MetaTags title="Backup Power" description="Power backup systems and battery solutions" />
          <InfrastructurePages.Network onBack={() => navigateTo('home')} />
        </>
      );
      case 'power_building_electromechanical': return (
        <>
          <MetaTags title="Building Electromechanical" description="Building electromechanical power solutions" />
          <InfrastructurePages.Power onBack={() => navigateTo('home')} />
        </>
      );
      case 'om': return (
        <>
          <MetaTags title={t('nav.om')} description="Operations & Maintenance Services" />
          <InfrastructurePages.OM onBack={() => navigateTo('home')} />
        </>
      );
      case 'mobile-network': return (
        <>
          <MetaTags title={t('nav.network')} description="Mobile Network Infrastructure" />
          <InfrastructurePages.Network onBack={() => navigateTo('home')} />
        </>
      );
      case 'energy-mgmt': return (
        <>
          <MetaTags title={t('nav.energy')} description="Energy Management Solutions" />
          <InfrastructurePages.Network onBack={() => navigateTo('home')} />
        </>
      );
      case 'ict': return (
        <>
          <MetaTags title={t('common.services.ict.title')} description={t('common.services.ict.items', { returnObjects: true })[0]} />
          <InnovationPages.ICT onBack={() => navigateTo('home')} />
        </>
      );
      case 'ict_datacenter': return (
        <>
          <MetaTags title={t('common.services.ict.title')} description={t('common.services.ict.items', { returnObjects: true })[0]} />
          <InnovationPages.ICT onBack={() => navigateTo('home')} />
        </>
      );
      case 'ict_datacenter_data_center_design': return (
        <>
          <MetaTags title="Data Center Design" description="Data center design solutions" />
          <InnovationPages.DataCenters onBack={() => navigateTo('home')} />
        </>
      );
      case 'ict_datacenter_enterprise_networking': return (
        <>
          <MetaTags title="Enterprise Networking" description="ICT enterprise networking services" />
          <InnovationPages.ICT onBack={() => navigateTo('home')} />
        </>
      );
      case 'ict_datacenter_system_development': return (
        <>
          <MetaTags title="System Development" description="ICT system development services" />
          <ExcellencePages.Consultancy onBack={() => navigateTo('home')} />
        </>
      );
      case 'ict_datacenter_cybersecurity_managed': return (
        <>
          <MetaTags title="Cybersecurity & Managed Services" description="ICT cybersecurity and managed services" />
          <ExcellencePages.Consultancy onBack={() => navigateTo('home')} />
        </>
      );
      case 'ict_datacenter_training_consultancy': return (
        <>
          <MetaTags title="Training & Consultancy" description="ICT training and consultancy services" />
          <ExcellencePages.Academy onBack={() => navigateTo('home')} />
        </>
      );
      case 'coresite': return (
        <>
          <MetaTags title={t('nav.coresite')} description="Core Site Infrastructure" />
          <InnovationPages.CoreSite onBack={() => navigateTo('home')} />
        </>
      );
      case 'ai-iot': return (
        <>
          <MetaTags title={t('common.services.ai_iot.title')} description={t('common.services.ai_iot.items', { returnObjects: true })[0]} />
          <InnovationPages.AIoT onBack={() => navigateTo('home')} />
        </>
      );
      case 'mobility': return (
        <>
          <MetaTags title={t('common.services.mobility.title')} description={t('common.services.mobility.items', { returnObjects: true })[0]} />
          <InnovationPages.Mobility onBack={() => navigateTo('home')} />
        </>
      );
      case 'datacenters': return (
        <>
          <MetaTags title={t('nav.datacenters')} description="Data Center Solutions" />
          <InnovationPages.DataCenters onBack={() => navigateTo('home')} />
        </>
      );
      case 'awards': return (
        <>
          <MetaTags title={t('nav.awards')} description="Awards & Recognition" />
          <ExcellencePages.Awards onBack={() => navigateTo('home')} />
        </>
      );
      case 'iso': return (
        <>
          <MetaTags title={t('nav.iso')} description="ISO Certifications & Quality Standards" />
          <ExcellencePages.ISO onBack={() => navigateTo('home')} />
        </>
      );
      case 'academy': return (
        <>
          <MetaTags title={t('nav.academy')} description="InfinEth Academy" />
          <ExcellencePages.Academy onBack={() => navigateTo('home')} />
        </>
      );
      case 'academy_overview': return (
        <>
          <MetaTags title="Academy Overview" description="InfinEth Academy overview" />
          <ExcellencePages.Academy onBack={() => navigateTo('home')} />
        </>
      );
      case 'academy_fiber_optics_certification': return (
        <>
          <MetaTags title="Fiber Optics Certification" description="Academy fiber optics certification" />
          <PageStub title="Fiber Optics Certification" />
        </>
      );
      case 'academy_telecom_automation_training': return (
        <>
          <MetaTags title="Telecom Automation Training" description="Academy telecom automation training" />
          <ExcellencePages.Academy onBack={() => navigateTo('home')} />
        </>
      );
      case 'academy_managed_services': return (
        <>
          <MetaTags title="Managed Services" description="Academy managed services" />
          <ExcellencePages.Consultancy onBack={() => navigateTo('home')} />
        </>
      );
      case 'academy_institutional_partnerships': return (
        <>
          <MetaTags title="Institutional Partnerships" description="Academy institutional partnerships" />
          <CorporatePages.Presence onBack={() => navigateTo('home')} />
        </>
      );
      case 'consultancy': return (
        <>
          <MetaTags title={t('nav.consultancy')} description="Consultancy Services" />
          <ExcellencePages.Consultancy onBack={() => navigateTo('home')} />
        </>
      );
      case 'ehs': return (
        <>
          <MetaTags title={t('nav.ehs')} description="Environmental Health & Safety" />
          <ExcellencePages.EHS onBack={() => navigateTo('home')} />
        </>
      );
      default: return (
        <>
          <MetaTags 
            title={SITE.name + " | " + SITE.tagline} 
            description={heroT('heroSub')}
            schema={organizationSchema}
          />
          <HeroSlider onOpenContact={() => setIsContactOpen(true)} />
          <ClientTrustBar />
          
          <Section className="bg-brand-primary overflow-hidden border-b border-white/5">
             <div className="mb-8 flex items-center gap-3"><LogoSymbol className="w-6 h-6 opacity-30" /><span className={UI_CLASSES.tag + " text-brand-muted/30"}>{t('common.strategicDeliveryNetwork')}</span></div>
             <div className="flex gap-20 items-center animate-marquee whitespace-nowrap opacity-[0.1] hover:opacity-[0.8] transition-opacity duration-700">{PARTNERS.concat(PARTNERS).map((n, i) => (<span key={i} className="text-sm md:text-base font-semibold text-brand-foreground tracking-tighter uppercase">{n.name}</span>))}</div>
          </Section>
          
          <Section id="capabilities" className="bg-brand-primary">
             <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
               <div className="max-w-2xl"><span className={`text-brand-accent ${UI_CLASSES.tag} mb-6`}>Core Capabilities</span><h2 className={`${UI_CLASSES.sectionTitle} text-brand-foreground`}>Comprehensive engineering, ICT and academy services built for Ethiopia’s next wave of digital growth.</h2></div>
               <p className="text-body text-gray-400 max-w-sm leading-relaxed">End-to-end solutions across Telecommunications, Power, ICT & Data Center, and Academy & Managed Services.</p>
             </div>
             <div className="grid lg:grid-cols-2 gap-10">
               {NAV_CONFIG.filter(cat => cat.items.length > 0).map(cat => (
                 <ServiceCard
                   key={cat.label}
                   title={cat.label}
                   icon={cat.icon ?? Radio}
                   color="bg-brand-accent"
                   items={cat.items.slice(0, 4).map(item => item.label)}
                   onClick={() => navigateTo(cat.page as PageID, undefined, cat.path)}
                 />
               ))}
             </div>
          </Section>

          <Section id="excellence" className="bg-brand-primary overflow-hidden">
            <div className="max-w-3xl mb-16"><span className={`text-brand-accent ${UI_CLASSES.tag} mb-6`}>{t('common.pillar3')}</span><h2 className={`${UI_CLASSES.sectionTitle} text-brand-foreground mb-8`}>{t('common.integrityFramework')}</h2></div>
            <div className="bg-brand-surface rounded-[3rem] overflow-hidden grid lg:grid-cols-5 shadow-xl">
              <div className="lg:col-span-2 min-h-[450px] flex flex-col items-center justify-center p-12 bg-gradient-to-br from-brand-surface to-brand-primary">
                <AnimatePresence mode="wait"><motion.div key={activeISO} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-64 h-64 bg-white rounded-full p-10 shadow-xl flex flex-col items-center justify-center relative"><span className="text-xs font-bold uppercase tracking-widest text-brand-primary/40 mb-2">{t('common.certified')}</span><span className="text-sm font-semibold text-brand-primary tracking-tight">ISO {activeISO}</span></motion.div></AnimatePresence>
              </div>
              <div className="lg:col-span-3 p-10 md:p-16 bg-white/5 divide-y divide-white/5">{ISO_DATA.map((iso) => (<div key={iso.id} className="py-8 cursor-pointer group" onClick={() => setActiveISO(iso.id)}><div className="flex items-center justify-between"><div className="flex items-center gap-8"><div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeISO === iso.id ? 'bg-brand-accent text-brand-primary' : 'bg-white/5 text-white/10'}`}><CheckCircle2 size={24} /></div><h3 className={`text-sm font-semibold tracking-tight ${activeISO === iso.id ? 'text-brand-foreground' : 'text-brand-foreground/20'}`}>{t(iso.title)}</h3></div><ChevronDown size={28} className={`transition-all ${activeISO === iso.id ? 'rotate-180 text-brand-accent' : 'text-white/5'}`} /></div>{activeISO === iso.id && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-sm text-gray-400 leading-relaxed mt-6 pl-20">{t(iso.description)}</motion.p>}</div>))}</div>
            </div>
          </Section>

          <Section className="bg-brand-primary text-brand-foreground relative z-10 text-center">
            <div className="grid md:grid-cols-4 gap-16">
              {STATS.map((st, i) => (
                <div key={i}>
                  <div className="text-h2 font-bold tabular-nums mb-3 tracking-tight leading-none"><CountUp value={st.value} suffix={st.suffix || ""} /></div>
                  <p className="text-sm font-medium uppercase tracking-widest text-gray-400">{t(st.label)}</p>
                </div>
              ))}
            </div>
          </Section>
          
          <Section className="bg-brand-surface text-center py-32">
            <h2 className={UI_CLASSES.displayLarge + " text-brand-foreground mb-16"}>{t('common.preciseEngineering')}</h2>
            <button 
              onClick={() => setIsContactOpen(true)} 
              className="bg-brand-accent text-brand-primary px-16 py-8 rounded-2xl font-semibold tracking-wide text-sm shadow-2xl hover:bg-white hover:text-brand-primary active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-200 uppercase"
            >
              {t('common.partnershipCta')}
            </button>
          </Section>
        </>
      );
    }
  };

  const content = (
    <Layout currentPage={currentPage} navigateTo={navigateTo}>
      {renderContent()}
    </Layout>
  );

  if (i18nProp) {
    return (
      <ErrorBoundary>
        <I18nextProvider i18n={i18nProp}>
          {content}
        </I18nextProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      {content}
    </ErrorBoundary>
  );
};

export { HelmetProvider };
export default App;
