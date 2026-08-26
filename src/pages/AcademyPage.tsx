import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Zap, Users, Menu } from 'lucide-react';
import { academyServices, academyHero } from '../data/academyData';
import { PageID } from '../types';
import { PageSidebar, SIDEBAR_CONFIG } from '../components/PageSidebar';

const AcademyPage: React.FC<{ onNavigate: (page: PageID, hash?: string, path?: string) => void }> = ({ onNavigate }) => {
  const SectionIcon = academyHero.icon;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const handleNavClick = (path: string) => {
    onNavigate('home' as PageID, undefined, path);
  };
  
  const sidebarCategory = SIDEBAR_CONFIG.academy;

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
        <PageSidebar category={sidebarCategory} currentPath="/academy" currentCategory="academy" onNavigate={handleNavClick} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </aside>
      
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-32 w-60">
        <PageSidebar category={sidebarCategory} currentPath="/academy" currentCategory="academy" onNavigate={handleNavClick} isOpen={false} onClose={() => {}} />
      </aside>
      
      {/* Main Content with sidebar offset */}
      <div className="lg:ml-60">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={academyHero.heroImage} alt={academyHero.heroAlt} className="w-full h-full object-cover" loading="eager" />
          <div className={`absolute inset-0 bg-gradient-to-r ${academyHero.gradientFallback}`} />
        </div>
        <div className="absolute inset-0 flex items-center px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-6">
              <SectionIcon className="w-7 h-7 text-brand-accent" />
            </div>
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              {academyHero.eyebrow}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {academyHero.pageTitle}
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
              {academyHero.pageSubtitle}
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
            <span className="text-brand-foreground font-medium">{academyHero.eyebrow}</span>
          </div>
        </div>
      </nav>

       {/* Section Intro */}
       <section className="py-16 px-12 lg:px-24 max-w-7xl mx-auto">
         <div className="max-w-3xl">
           <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
             {academyHero.eyebrow}
           </p>
           <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground mb-5">
             Professional Training & Development
           </h2>
           <p className="text-brand-muted text-lg leading-relaxed">
             Variety EME Academy delivers practitioner-led training programs in fiber optics and industrial automation that build the expertise your team needs.
           </p>
         </div>
       </section>

      {/* Service Cards Grid */}
      <section id="services" className="pb-16 px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academyServices.map((service) => {
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



      {/* Why Variety EME Strip */}
      <section className="py-16 px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-semibold text-brand-foreground mb-2">Industry-Recognized Certifications</h3>
            <p className="text-sm text-brand-muted">CFOT/CFOS aligned with ETA International standards.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-semibold text-brand-foreground mb-2">Practitioner-Led Training</h3>
            <p className="text-sm text-brand-muted">Learn from field experts with 1,200+ project experience.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="font-semibold text-brand-foreground mb-2">Institutional Partnerships</h3>
            <p className="text-sm text-brand-muted">Curriculum aligned with universities and TVET institutions.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-primary py-14 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-foreground mb-2">
              Ready to train with Variety EME Academy?
            </h3>
            <p className="text-brand-muted text-sm">
              Talk to our training specialists — no obligation, just expertise.
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

export default AcademyPage;