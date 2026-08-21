import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Zap, Users, Menu } from 'lucide-react';
import { telecomServices, telecomProjects, telecomHero } from '../data/telecomData';
import { PageID } from '../types';
import { PageSidebar, SIDEBAR_CONFIG, getCategoryFromPath } from '../components/PageSidebar';

interface ServicePageProps {
  onNavigate: (page: PageID, hash?: string, path?: string) => void;
}

const TelecomPage: React.FC<ServicePageProps> = ({ onNavigate }) => {
  const SectionIcon = telecomHero.icon;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const handleNavClick = (path: string) => {
    onNavigate('home' as PageID, undefined, path);
  };
  
  const sidebarCategory = SIDEBAR_CONFIG.telecommunications;

  return (
    <div className="min-h-screen bg-brand-primary">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
      
      {/* Mobile Sidebar */}
      <aside className={`
        fixed lg:hidden top-0 left-0 h-full w-72 bg-brand-surface border-r border-white/10 z-50
        transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        pt-20
      `}>
        <PageSidebar category={sidebarCategory} currentPath="/telecommunications" onNavigate={handleNavClick} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </aside>
      
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-32 w-60">
        <PageSidebar category={sidebarCategory} currentPath="/telecommunications" onNavigate={handleNavClick} isOpen={false} onClose={() => {}} />
      </aside>
      
      {/* Main Content with sidebar offset */}
      <div className="lg:ml-60">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={telecomHero.heroImage} alt={telecomHero.heroAlt} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${telecomHero.gradientFallback}`} />
        </div>
        <div className="absolute inset-0 flex items-center px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-6">
              <SectionIcon className="w-7 h-7 text-brand-accent" />
            </div>
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              {telecomHero.eyebrow}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {telecomHero.pageTitle}
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
              {telecomHero.pageSubtitle}
            </p>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-brand-primary transition-all duration-200 w-fit">
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-brand-surface border-b border-white/5 px-6 lg:px-24 py-3">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-brand-muted">
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 text-sm text-brand-muted">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors">Home</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-foreground font-medium">{telecomHero.eyebrow}</span>
          </div>
        </div>
      </nav>

      {/* Section Intro */}
      <section className="py-16 px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
            {telecomHero.eyebrow}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground mb-5">
            Comprehensive Telecom Engineering Solutions
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            From nationwide tower rollout and fiber optic network deployment to operations and maintenance — Variety EME delivers end-to-end telecommunications infrastructure across Ethiopia and East Africa.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section id="services" className="pb-16 px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {telecomServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => onNavigate(service.page as PageID, undefined, service.path)}
                className="group flex gap-5 p-6 bg-brand-surface border border-white/5 rounded-xl hover:border-brand-accent hover:shadow-lg transition-all duration-300 text-left w-full"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors duration-200">
                  <IconComponent className="w-6 h-6 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-brand-foreground mb-1 group-hover:text-brand-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-brand-muted ml-auto self-center group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </button>
            );
          })}
        </div>
      </section>

      {/* Reference Projects */}
      <section className="py-14 bg-brand-surface border-y border-white/5">
        <div className="px-12 lg:px-24 max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-8">
            Reference Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {telecomProjects.map((p) => (
              <div key={p.id} className="bg-brand-primary rounded-xl border border-white/5 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="w-full h-36 rounded-lg bg-brand-surface mb-4 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-medium text-brand-accent uppercase tracking-wide">{p.category}</span>
                <h4 className="font-semibold text-brand-foreground mt-1 mb-1">{p.title}</h4>
                <p className="text-sm text-brand-muted">{p.stat}</p>
                <p className="text-xs text-brand-muted/60 mt-2">{p.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Variety EME Strip */}
      <section className="py-16 px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-semibold text-brand-foreground mb-2">One Integrated Partner</h3>
            <p className="text-sm text-brand-muted">Engineering, telecom and ICT under one roof — no siloed vendors.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-semibold text-brand-foreground mb-2">Turnkey Execution</h3>
            <p className="text-sm text-brand-muted">Survey → Design → Build → Commission → Support. Cost-effective and timely.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-semibold text-brand-foreground mb-2">Safety-Led & Customer-First</h3>
            <p className="text-sm text-brand-muted">Zero accidents mindset. Professionalism and customer satisfaction at every stage.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-primary py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-foreground mb-2">
              Ready to start your telecom project?
            </h3>
            <p className="text-brand-muted text-sm">
              Talk to our engineers — no obligation, just expertise.
            </p>
          </div>
          <button onClick={() => onNavigate('contact', undefined, '/contact')} className="flex-shrink-0 bg-brand-accent text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-all duration-200">
            Discuss Your Project →
          </button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default TelecomPage;