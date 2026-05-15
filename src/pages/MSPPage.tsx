import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Zap, Users, ChevronDown, Menu } from 'lucide-react';
import { mspVerticals, mspProjects, mspHero, MSPVertical } from '../data/mspData';
import { PageID } from '../types';

interface NavItem {
  label: string;
  path: string;
  pageId: string;
  verticalId?: number;
}

const MSPPage: React.FC<{ onNavigate: (page: PageID, hash?: string, path?: string) => void }> = ({ onNavigate }) => {
  const [expandedVertical, setExpandedVertical] = useState<number | null>(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState<number>(0);
  
  const handleNavClick = (path: string, index: number, verticalId?: number) => {
    const pageId = getPageIdFromPath(path);
    onNavigate(pageId, undefined, path);
    setActiveNavIndex(index);
    if (verticalId) {
      setExpandedVertical(verticalId);
    }
  };

  const getPageIdFromPath = (path: string): PageID => {
    const pathToPageId: Record<string, PageID> = {
      '/msp': 'msp',
      '/msp/ict-connectivity': 'msp_ict_connectivity',
      '/msp/security-access': 'msp_security_access',
      '/msp/fire-safety': 'msp_fire_safety',
      '/msp/hvac': 'msp_hvac',
      '/msp/power-energy': 'msp_power_energy',
    };
    return pathToPageId[path] || 'msp';
  };

  const toggleVertical = (id: number) => {
    setExpandedVertical(expandedVertical === id ? null : id);
    setActiveNavIndex(id - 1);
  };

  const navLinks: NavItem[] = [
    { label: 'Overview', path: '/msp', pageId: 'msp', verticalId: undefined },
    { label: 'ICT & Connectivity', path: '/msp/ict-connectivity', pageId: 'msp_ict_connectivity', verticalId: 1 },
    { label: 'Security & Access', path: '/msp/security-access', pageId: 'msp_security_access', verticalId: 2 },
    { label: 'Fire Safety', path: '/msp/fire-safety', pageId: 'msp_fire_safety', verticalId: 3 },
    { label: 'HVAC & Environment', path: '/msp/hvac', pageId: 'msp_hvac', verticalId: 4 },
    { label: 'Power & Energy', path: '/msp/power-energy', pageId: 'msp_power_energy', verticalId: 5 },
  ];

  const activeVertical = mspVerticals.find(v => v.id === (activeNavIndex === 0 ? 1 : activeNavIndex)) || mspVerticals[0];

  const renderActiveContent = () => {
    if (activeNavIndex === 0) {
      return (
        <>
          {/* Overview Content */}
          <section className="py-12">
            <div className="max-w-3xl">
              <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
                {mspHero.eyebrows}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground mb-5">
                Comprehensive Facility Management
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-8">
                From ICT infrastructure to fire safety, HVAC, and power solutions — InfinEth delivers integrated managed services that keep your facilities running safely, efficiently, and compliant.
              </p>
              <p className="text-brand-muted text-lg leading-relaxed">
                Our managed services portfolio covers the entire spectrum of facility operations, ensuring you have a single trusted partner for all your infrastructure needs.
              </p>
            </div>
          </section>

          {/* All Verticals Grid */}
          <section id="services" className="pb-8">
            <h3 className="text-xl font-semibold text-brand-foreground mb-6">Our Service Verticals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mspVerticals.map((vertical) => {
                const IconComponent = vertical.icon;
                const isExpanded = expandedVertical === vertical.id;
                
                return (
                  <div 
                    key={vertical.id}
                    className={`bg-brand-surface border rounded-xl overflow-hidden transition-all duration-300 ${isExpanded ? `${vertical.borderColor} shadow-lg` : 'border-white/5 hover:border-white/10'}`}
                  >
                    <button
                      onClick={() => toggleVertical(vertical.id)}
                      className="w-full p-5 text-left flex items-start gap-3"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${vertical.color.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                        <IconComponent className={`w-5 h-5 ${vertical.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{vertical.emoji}</span>
                          <h4 className="font-semibold text-brand-foreground text-sm">
                            {vertical.title}
                          </h4>
                        </div>
                        <p className="text-xs text-brand-muted line-clamp-2">
                          {vertical.description}
                        </p>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-brand-muted flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-5 pb-4 pt-2 border-t border-white/5">
                        <div className="space-y-3">
                          {vertical.services.map((service, idx) => (
                            <div key={idx} className="bg-brand-primary/50 rounded-lg p-3">
                              <h5 className="font-medium text-brand-foreground text-sm mb-1">{service.title}</h5>
                              <p className="text-xs text-brand-muted leading-relaxed">{service.description}</p>
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={() => onNavigate(vertical.page as PageID, undefined, vertical.path)}
                          className={`mt-3 w-full py-2 px-3 rounded-lg text-xs font-medium ${vertical.color.replace('text-', 'bg-')}/10 ${vertical.color} flex items-center justify-center gap-1`}
                        >
                          View Details
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      );
    }

    const vertical = mspVerticals[activeNavIndex - 1];
    if (!vertical) return null;

    const IconComponent = vertical.icon;

    return (
      <section className="py-12">
        <div className="max-w-3xl">
          {/* Vertical Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-xl ${vertical.color.replace('text-', 'bg-')}/20 flex items-center justify-center`}>
              <IconComponent className={`w-8 h-8 ${vertical.color}`} />
            </div>
            <div>
              <span className="text-3xl">{vertical.emoji}</span>
              <h2 className="text-3xl font-bold text-brand-foreground">{vertical.title}</h2>
            </div>
          </div>
          
          <p className="text-brand-muted text-lg leading-relaxed mb-8">
            {vertical.description}
          </p>

          {/* Services List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-foreground">Services Included</h3>
            {vertical.services.map((service, idx) => (
              <div key={idx} className="bg-brand-surface border border-white/5 rounded-xl p-6 hover:border-brand-accent/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${vertical.color.replace('text-', 'bg-')}/10 flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-5 h-5 ${vertical.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-foreground mb-2">{service.title}</h4>
                    <p className="text-brand-muted leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate(vertical.page as PageID, undefined, vertical.path)}
            className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${vertical.color.replace('text-', 'bg-')}/10 ${vertical.color} hover:${vertical.color.replace('text-', 'bg-')}/20 transition-colors`}
          >
            Explore {vertical.title} Services
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-brand-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={mspHero.heroImage} alt={mspHero.heroAlt} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${mspHero.gradientFallback}`} />
        </div>
        <div className="absolute inset-0 flex items-center px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-6">
              <mspHero.icon className="w-7 h-7 text-brand-accent" />
            </div>
            <p className="text-brand-accent text-xs font-semibold uppercase tracking-widest mb-3">
              {mspHero.eyebrows}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {mspHero.pageTitle}
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
              {mspHero.pageSubtitle}
            </p>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-brand-primary transition-all duration-200 w-fit">
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="relative">
        {/* Mobile Toggle */}
        <div className="lg:hidden bg-brand-surface border-b border-white/5 px-6 py-3">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-brand-muted hover:text-brand-accent"
          >
            <Menu size={20} />
            <span className="text-sm font-medium">Menu</span>
          </button>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Vertical Sidebar Navigation */}
          <aside className={`
            ${isMobileMenuOpen ? 'block' : 'hidden'}
            lg:block 
            w-full lg:w-64 
            bg-brand-surface lg:bg-transparent
            border-b lg:border-b-0 lg:border-r lg:border-white/5
            flex-shrink-0
          `}>
            <div className="px-6 lg:px-6 py-4 lg:py-6 lg:pr-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">
                Service Categories
              </h3>
              <nav className="space-y-1">
                {navLinks.map((link, index) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path, index, link.verticalId)}
                    className={`
                      w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-between
                      ${activeNavIndex === index 
                        ? 'bg-brand-accent/10 text-brand-accent border-l-2 border-brand-accent' 
                        : 'text-brand-muted hover:text-brand-accent hover:bg-white/5 border-l-2 border-transparent'}
                    `}
                  >
                    <span>{link.label}</span>
                    {activeNavIndex === index && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 px-6 lg:px-12 max-w-5xl">
            {/* Dynamic Content Based on Active Nav */}
            {renderActiveContent()}

            {/* Reference Projects - Show only on Overview */}
            {activeNavIndex === 0 && (
              <section className="py-12 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-8">
                  Reference Projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mspProjects.map((p) => (
                    <div key={p.id} className="bg-brand-surface rounded-xl border border-white/5 p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="w-full h-40 rounded-lg bg-brand-surface mb-4 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-medium text-brand-accent uppercase tracking-wide">{p.category}</span>
                      <h4 className="font-semibold text-brand-foreground mt-1 mb-1">{p.title}</h4>
                      <p className="text-sm text-brand-muted">{p.stat}</p>
                      <p className="text-xs text-brand-muted/60 mt-2">{p.client}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Why InfinEth Strip */}
            <section className="py-12 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="font-semibold text-brand-foreground mb-2">One Integrated Partner</h3>
                  <p className="text-sm text-brand-muted">ICT, security, fire safety, HVAC, and power — all from a single trusted provider.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="font-semibold text-brand-foreground mb-2">Turnkey Execution</h3>
                  <p className="text-sm text-brand-muted">Design → Install → Commission → Support. Complete lifecycle management.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="font-semibold text-brand-foreground mb-2">Safety-Led & Compliant</h3>
                  <p className="text-sm text-brand-muted">Zero accidents mindset with full compliance to local and international standards.</p>
                </div>
              </div>
            </section>

            {/* CTA Banner */}
            <section className="py-12 border-t border-white/10">
              <div className="bg-brand-surface rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-foreground mb-2">
                    Ready to optimize your facility operations?
                  </h3>
                  <p className="text-brand-muted text-sm">
                    Talk to our managed services specialists — tailored solutions for your needs.
                  </p>
                </div>
                <button onClick={() => onNavigate('contact', undefined, '/contact')} className="flex-shrink-0 bg-brand-accent text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-all duration-200">
                  Discuss Your Project →
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MSPPage;