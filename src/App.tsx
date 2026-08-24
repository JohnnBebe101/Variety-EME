
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';

import { PageID } from './types';
import { getPathFromPageId, getRouteFromPath } from './utils/routes';
import { Layout } from './components/layout/Layout';
import { MetaTags } from './components/MetaTags';
import { ssrSafeLazy } from './utils/ssrSafeLazy';

// ── Lazy-loaded route components (code-split) ──────────────────────────
const CorporatePages = lazy(() => import('./components/CorporatePages'));
const ServicePages = lazy(() => import('./components/sections/services/index'));
const ExcellencePages = lazy(() => import('./components/sections/excellence/index'));
const TelecomOverview = lazy(() => import('./components/sections/infrastructure/TelecomOverview'));
const HomePage = ssrSafeLazy(() => import('./components/home/HomePage'), '/src/components/home/HomePage');
const TelecomPage = ssrSafeLazy(() => import('./pages/TelecomPage'), '/src/pages/TelecomPage');
const ICTPage = ssrSafeLazy(() => import('./pages/ICTPage'), '/src/pages/ICTPage');
const PowerPage = ssrSafeLazy(() => import('./pages/PowerPage'), '/src/pages/PowerPage');
const MSPPage = ssrSafeLazy(() => import('./pages/MSPPage'), '/src/pages/MSPPage');
const AcademyPage = ssrSafeLazy(() => import('./pages/AcademyPage'), '/src/pages/AcademyPage');
const LegalPage = ssrSafeLazy(() => import('./components/LegalPage'), '/src/components/LegalPage');

interface AppProps {
  initialPage?: PageID;
  i18n?: any;
}

const App: React.FC<AppProps> = ({ initialPage = 'home', i18n: i18nProp }) => {
  const { t } = useTranslation(undefined, { i18n: i18nProp });
  const initialRoute = (() => {
    if (initialPage !== 'home') {
      return { page: initialPage, openContact: false };
    }

    if (typeof window === 'undefined') {
      return { page: 'home' as PageID, openContact: false };
    }

    const route = getRouteFromPath(window.location.pathname);
    if (route.openContact) {
      return { page: 'home' as PageID, openContact: true };
    }
    return route;
  })();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    if (subject) {
      setContactSubject(subject);
      setIsContactOpen(true);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState<PageID>(initialRoute.page);
  const [isContactOpen, setIsContactOpen] = useState(initialRoute.openContact ?? false);
  const [contactSubject, setContactSubject] = useState<string>('');

  const navigateTo = (page: PageID, hash?: string, routePath?: string) => {
    const path = routePath || getPathFromPageId(page);
    const route = getRouteFromPath(path);

    if (route.openContact) {
      setIsContactOpen(true);
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', path);
      }
    } else {
      setCurrentPage(route.page);
      setIsContactOpen(false);

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
    }
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'identity': return (
        <>
          <MetaTags title={t('nav.identity')} description="Variety EME Corporate Identity" />
          <CorporatePages.Identity onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'leadership': return (
        <>
          <MetaTags title={t('nav.leadership')} description="Our Leadership Team" />
          <CorporatePages.Leadership onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'board': return (
        <>
          <MetaTags title={t('nav.board')} description="Our Board of Directors" />
          <CorporatePages.Board onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'portfolio-detailed': return (
        <>
          <MetaTags title={t('nav.portfolio')} description="Our Project Portfolio" />
          <CorporatePages.Portfolio onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'portfolio': return (
        <>
          <MetaTags title={t('nav.portfolio')} description="Our Project Portfolio" />
          <CorporatePages.Portfolio onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'about': return (
        <>
          <MetaTags title={t('nav.identity')} description="Variety EME Corporate Identity" />
          <CorporatePages.Identity onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'presence': return (
        <>
          <MetaTags title={t('nav.presence')} description="Our Regional Presence" />
          <CorporatePages.Presence onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'telecom': return (
        <>
          <MetaTags title={t('telecomTitle')} description={t('telecomItems', { returnObjects: true })[0]} />
          <TelecomOverview onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'telecommunications': return (
        <>
          <MetaTags title={t('telecomTitle')} description={t('telecomItems', { returnObjects: true })[0]} />
          <TelecomPage onNavigate={navigateTo} />
        </>
      );
      case 'telecommunications_mobile_rollout': return (
        <>
          <MetaTags title="Mobile Telecom Rollout (RAN + Power)" description="Radio Access Network deployment integrated with telecom power infrastructure as a single turnkey scope." />
          <ServicePages.TelecommunicationsMobileRollout onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" currentPath="/telecommunications/mobile-rollout" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'telecommunications_fiber_optics': return (
        <>
          <MetaTags title="Fiber Optics" description="Long-haul and metropolitan fiber optic network design, installation, splicing, termination, testing and commissioning." />
          <ServicePages.TelecommunicationsFiberOptics onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/optical-tansmission-network.webp" gradientFallback="from-black/5 to-transparent" currentPath="/telecommunications/fiber-optics" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'telecommunications_tower_civil_works': return (
        <>
          <MetaTags title="Tower & Civil Works" description="Greenfield tower construction, rooftop installations, tower reinforcement and civil site preparation." />
          <ServicePages.TelecommunicationsTowerCivilWorks onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/ethio-telecom-tower-rollout.webp" gradientFallback="from-black/5 to-transparent" currentPath="/telecommunications/tower-civil-works" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'telecommunications_operations_maintenance': return (
        <>
          <MetaTags title="Operations & Maintenance (O&M)" description="Preventive and corrective maintenance contracts with SLA-based network support." />
          <ServicePages.TelecommunicationsOperationsMaintenance onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" currentPath="/telecommunications/operations-maintenance" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'telecommunications_warehouse_management': return (
        <>
          <MetaTags title="Warehouse Management" description="Equipment receiving, inspection, inventory tracking and asset management for telecom programs." />
          <ServicePages.TelecommunicationsWarehouseManagement 
            onBack={() => navigateTo('home')} 
            heroImage="/assets/images/hero/hero-telecom.webp"
            gradientFallback="from-black/5 to-transparent" 
            currentPath="/telecommunications/warehouse-management" 
            onNavigate={(path) => navigateTo('home', undefined, path)} 
          />
        </>
      );
      case 'power_transmission_distribution': return (
        <>
          <MetaTags title="Transmission, Distribution & Substation" description="HV/MV transmission line construction, substations and distribution network rollout." />
          <ServicePages.PowerTransmissionDistribution onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/400-kv-tower.webp" gradientFallback="from-black/5 to-transparent" currentPath="/power/transmission-distribution" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'power_minigrid_systems': return (
        <>
          <MetaTags title="Minigrid Systems" description="Minigrid design, hybrid power systems, grid integration and community electrification." />
          <ServicePages.PowerMinigridSystems onBack={() => navigateTo('home')} heroImage="/assets/images/hero/power.webp" gradientFallback="from-black/5 to-transparent" currentPath="/power/minigrid-systems" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'power_backup_power': return (
        <>
          <MetaTags title="Backup Power Systems (DG, Solar & Hybrid)" description="Diesel generator, solar PV, battery storage and UPS systems for backup power." />
          <ServicePages.PowerBackupPower onBack={() => navigateTo('home')} heroImage="/assets/images/hero/power.webp" gradientFallback="from-black/5 to-transparent" currentPath="/power/backup-power" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'power_building_electromechanical': return (
        <>
          <MetaTags title="Building Electromechanical Works" description="Industrial electrical installations, panel boards, earthing and lightning protection systems." />
          <ServicePages.PowerBuildingElectromechanical onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-power.webp" gradientFallback="from-black/5 to-transparent" currentPath="/power/building-electromechanical" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'ict_datacenter_data_center_design': return (
        <>
          <MetaTags title="Data Center Design & Build" description="Data center assessment, rack and cabling infrastructure, power and cooling systems." />
          <ServicePages.IctDatacenterDataCenterDesign onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/mofed-dc.webp" gradientFallback="from-black/5 to-transparent" currentPath="/ict-datacenter/data-center-design" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'ict_datacenter_enterprise_networking': return (
        <>
          <MetaTags title="Enterprise Networking, Storage & Backup" description="LAN/WAN design, structured cabling, storage and backup systems." />
          <ServicePages.IctDatacenterEnterpriseNetworking onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/entoto-tvet-1.webp" gradientFallback="from-black/5 to-transparent" currentPath="/ict-datacenter/enterprise-networking" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'ict_datacenter_system_development': return (
        <>
          <MetaTags title="System Development & Consultancy" description="System requirements analysis, software development and ICT project management." />
          <ServicePages.IctDatacenterSystemDevelopment onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-ict.webp" gradientFallback="from-black/5 to-transparent" currentPath="/ict-datacenter/system-development" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'ict_datacenter_cybersecurity_managed': return (
        <>
          <MetaTags title="Cybersecurity & Managed Services" description="Information security assessments, managed services and incident response support." />
          <ServicePages.IctDatacenterCybersecurityManaged onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-ict.webp" gradientFallback="from-black/5 to-transparent" currentPath="/ict-datacenter/cybersecurity-managed" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'ict_datacenter_training_consultancy': return (
        <>
          <MetaTags title="Training & ICT Consultancy" description="ICT training programs and consultancy services for enterprise and institutional clients." />
          <ServicePages.IctDatacenterTrainingConsultancy onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-ict.webp" gradientFallback="from-black/5 to-transparent" currentPath="/ict-datacenter/training-consultancy" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'academy_overview': return (
        <>
          <MetaTags title="Training Overview" description="Variety EME Training is Ethiopia's practitioner-led engineering and ICT training center." />
          <ServicePages.AcademyOverview onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-academy.webp" gradientFallback="from-black/5 to-transparent" currentPath="/academy/overview" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'academy_fiber_optics_certification': return (
        <>
          <MetaTags title="Fiber Optics Certification Programs (CFOT / CFOS)" description="FOA-aligned fiber optics certification programs for technicians and specialists." />
          <ServicePages.AcademyFiberOpticsCertification onBack={() => navigateTo('home')} heroImage="/assets/images/portfolio/Academy-practical-class.webp" gradientFallback="from-black/5 to-transparent" currentPath="/academy/fiber-optics-certification" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'academy_telecom_automation_training': return (
        <>
          <MetaTags title="Telecommunications & Industrial Automation Training" description="Telecom and industrial automation training programs for operators and engineers." />
          <ServicePages.AcademyTelecomAutomationTraining onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-academy.webp" gradientFallback="from-black/5 to-transparent" currentPath="/academy/telecom-automation-training" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
);
      case 'academy_institutional_partnerships': return (
        <>
          <MetaTags title="Institutional Partnerships" description="Corporate and institutional training partnerships" />
          <ServicePages.AcademyInstitutionalPartnerships onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-academy.webp" gradientFallback="from-black/5 to-transparent" currentPath="/academy/institutional-partnerships" onNavigate={(path) => navigateTo('home', undefined, path)} />
        </>
      );
      case 'consultancy': return (
        <>
          <MetaTags title={t('nav.consultancy')} description="Consultancy Services" />
          <ExcellencePages.Consultancy onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'ehs': return (
        <>
          <MetaTags title={t('nav.ehs')} description="Environmental Health & Safety" />
          <ExcellencePages.EHS onBack={() => navigateTo('home')} heroImage="/assets/images/hero/hero-overview.webp" gradientFallback="from-black/5 to-transparent" />
        </>
      );
      case 'privacy_policy': return (
        <>
          <MetaTags title="Privacy Policy" description="Variety EME Privacy Policy" />
          <LegalPage type="privacy" onNavigate={navigateTo} />
        </>
      );
      case 'terms_of_service': return (
        <>
          <MetaTags title="Terms of Service" description="Variety EME Terms of Service" />
          <LegalPage type="terms" onNavigate={navigateTo} />
        </>
      );
      case 'ict_datacenter': return (
        <>
          <MetaTags title={t('ictTitle')} description={t('ictDescription')} />
          <ICTPage onNavigate={navigateTo} />
        </>
      );
      case 'power': return (
        <>
          <MetaTags title={t('powerTitle')} description={t('powerDescription')} />
          <PowerPage onNavigate={navigateTo} />
        </>
      );
      case 'academy': return (
        <>
          <MetaTags title={t('nav.academy')} description="Variety EME Training - Practitioner-led training" />
          <AcademyPage onNavigate={navigateTo} />
        </>
      );
      case 'msp': return (
        <>
          <MetaTags title="Managed ICT Services" description="Ongoing IT and infrastructure managed services" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_overview': return (
        <>
          <MetaTags title="Managed Services Overview" description="Managed IT and infrastructure services" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_noc': return (
        <>
          <MetaTags title="Network Operations Center" description="24/7 NOC monitoring and management services" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_infrastructure': return (
        <>
          <MetaTags title="Infrastructure Management" description="Server, storage and network device management" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_cybersecurity': return (
        <>
          <MetaTags title="Managed Cybersecurity" description="Security monitoring and incident response" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_ict_connectivity': return (
        <>
          <MetaTags title="ICT & Connectivity" description="Enterprise networking, structured cabling, and managed support services" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_security_access': return (
        <>
          <MetaTags title="Security & Access Control" description="Smart CCTV surveillance and biometric access control systems" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_fire_safety': return (
        <>
          <MetaTags title="Fire Safety & Protection" description="Fire detection, suppression systems, and compliance monitoring" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_hvac': return (
        <>
          <MetaTags title="HVAC & Environmental Control" description="Climate management and Building Management System integration" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      case 'msp_power_energy': return (
        <>
          <MetaTags title="Power & Energy Solutions" description="UPS backup power and energy management solutions" />
          <MSPPage onNavigate={navigateTo} />
        </>
      );
      default: return <HomePage onNavigate={navigateTo} />;
    }
  };

  const content = (
    <Layout currentPage={currentPage} navigateTo={navigateTo} isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} contactSubject={contactSubject}>
      <Suspense fallback={
        <div className="min-h-screen bg-brand-primary flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent/60">Loading...</span>
          </div>
        </div>
      }>
        {renderContent()}
      </Suspense>
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
