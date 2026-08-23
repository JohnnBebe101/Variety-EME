import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  CheckCircle2 as CheckCircle, 
  Users,
  Clock,
  ChevronRight,
  Award,
  Zap,
  Radio,
  Server,
  GraduationCap
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from './SubPageLayout';
import { UI_CLASSES } from '../data/constants';
import { LogoSymbol } from './LogoSymbol';

interface PageProps {
  onBack: () => void;
  heroImage?: string;
  gradientFallback?: string;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const CorporatePages = {
  Identity: ({ onBack, heroImage, gradientFallback }: PageProps) => {
    const { t } = useTranslation();
    const isoCerts = t('corporate.identity.isos', { returnObjects: true }) as string[];
    const safeIsos = Array.isArray(isoCerts) ? isoCerts : [];
    const pillars = t('corporate.identity.pillars', { returnObjects: true }) as any;
    const whyItems = t('corporate.identity.why', { returnObjects: true }) as string[];
    const safeWhy = Array.isArray(whyItems) ? whyItems : [];
    const delivery = t('corporate.identity.delivery', { returnObjects: true }) as string[];
    const safeDelivery = Array.isArray(delivery) ? delivery : [];
    const principles = t('corporate.identity.principles', { returnObjects: true }) as string[];
    const safePrinciples = Array.isArray(principles) ? principles : [];
    
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.identity.tag')} title={t('corporate.identity.title')} description={t('corporate.identity.description')} heroImage={heroImage} gradientFallback={gradientFallback}>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          <div className="space-y-8">
            <div>
              <p className="text-brand-accent text-sm font-semibold uppercase tracking-widest mb-2">{t('corporate.identity.founded')}</p>
              <h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('corporate.identity.legacy_title')}</h3>
              <p className="text-brand-muted font-medium leading-relaxed text-sm">{t('corporate.identity.legacy_desc')}</p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-accent">20+</p>
                <p className="text-xs text-brand-muted uppercase">Years</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-accent">47+</p>
                <p className="text-xs text-brand-muted uppercase">Staff</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-accent">5</p>
                <p className="text-xs text-brand-muted uppercase">ISO Certs</p>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-xl h-[400px] bg-slate-200"><img src="/assets/images/hero/hero-overview.webp" className="w-full h-full object-cover" alt="Variety EME Office" /></div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-foreground mb-8">{t('corporate.identity.pillars_title')}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-brand-surface p-8 rounded-2xl border border-white/5">
              <Zap className="text-brand-accent mb-4" size={32} />
              <h4 className="font-bold text-brand-foreground mb-2">{t('power')}</h4>
              <p className="text-brand-muted text-sm">{pillars?.power}</p>
            </div>
            <div className="bg-brand-surface p-8 rounded-2xl border border-white/5">
              <Radio className="text-brand-accent mb-4" size={32} />
              <h4 className="font-bold text-brand-foreground mb-2">{t('telecom')}</h4>
              <p className="text-brand-muted text-sm">{pillars?.telecom}</p>
            </div>
            <div className="bg-brand-surface p-8 rounded-2xl border border-white/5">
              <Server className="text-brand-accent mb-4" size={32} />
              <h4 className="font-bold text-brand-foreground mb-2">{t('ict')}</h4>
              <p className="text-brand-muted text-sm">{pillars?.ict}</p>
            </div>
            <div className="bg-brand-surface p-8 rounded-2xl border border-white/5">
              <GraduationCap className="text-brand-accent mb-4" size={32} />
              <h4 className="font-bold text-brand-foreground mb-2">{t('academy')}</h4>
              <p className="text-brand-muted text-sm">{pillars?.academy}</p>
            </div>
          </div>
        </div>

        {(() => {
          const trackItems = t('corporate.identity.track_items', { returnObjects: true }) as any[];
          if (Array.isArray(trackItems) && trackItems.length > 0 && trackItems[0]?.metric) {
            return (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-brand-foreground mb-8">{t('corporate.identity.track_title')}</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {trackItems.map((item, i) => (
                    <div key={i} className="bg-brand-surface p-6 rounded-2xl border border-white/5 text-center">
                      <p className="text-3xl font-bold text-brand-accent mb-2">{item.metric}</p>
                      <p className="text-brand-muted text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })()}
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-foreground mb-8">{t('corporate.identity.why_title')}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {safeWhy.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={18} />
                <p className="text-brand-muted text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-foreground mb-8">{t('corporate.identity.delivery_title')}</h3>
          <div className="flex flex-wrap gap-4">
            {safeDelivery.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent text-brand-primary flex items-center justify-center font-bold">{i+1}</div>
                <p className="text-brand-foreground font-medium">{step}</p>
                {i < safeDelivery.length - 1 && <ArrowRight className="text-brand-muted" size={20} />}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-foreground mb-8">{t('corporate.identity.principles_title')}</h3>
          <div className="flex flex-wrap gap-4">
            {safePrinciples.map((principle, i) => (
              <div key={i} className="px-6 py-3 bg-brand-surface rounded-full border border-white/5">
                <p className="text-brand-foreground text-sm font-medium">{principle}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-foreground mb-8">{t('corporate.identity.iso_title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safeIsos.map((iso, i) => (
              <div key={i} className="bg-brand-surface p-4 rounded-xl border border-white/5 text-center">
                <ShieldCheck className="text-brand-accent mx-auto mb-2" size={24} />
                <p className="text-brand-foreground text-xs font-semibold">{iso}</p>
              </div>
            ))}
          </div>
        </div>

        {(() => {
          const presence = t('corporate.identity.presence', { returnObjects: true }) as any[];
          if (Array.isArray(presence) && presence.length > 0 && presence[0]?.location) {
            return (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-brand-foreground mb-8">{t('corporate.identity.presence_title')}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {presence.map((loc, i) => (
                    <div key={i} className="bg-brand-surface p-6 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="text-brand-accent" size={18} />
                        <h4 className="font-bold text-brand-foreground">{loc.location}</h4>
                      </div>
                      <p className="text-brand-accent text-xs font-medium mb-2">{loc.role}</p>
                      <p className="text-brand-muted text-xs">{loc.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })()}
        
        <div className="mb-12">
          {t('corporate.identity.org_title') && (
            <>
              <h3 className="text-2xl font-semibold text-brand-foreground mb-4">{t('corporate.identity.org_title')}</h3>
              <p className="text-brand-muted text-sm mb-8">{t('corporate.identity.org_desc')}</p>
              
              <div className="flex justify-center mb-8">
                <div className="bg-brand-primary text-white px-8 py-4 rounded-xl text-center shadow-lg">
                  <p className="text-xs uppercase tracking-widest opacity-70">{t('corporate.identity.ceo')}</p>
                  <p className="font-bold">CEO</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-4 mb-8">
                {(() => {
                  const advisors = t('corporate.identity.advisors', { returnObjects: true }) as string[];
                  return Array.isArray(advisors) ? advisors.map((advisor, i) => (
                    <div key={i} className="bg-brand-surface border border-white/5 px-6 py-3 rounded-xl text-center">
                      <p className="text-brand-foreground text-sm font-medium">{advisor}</p>
                    </div>
                  )) : null;
                })()}
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="w-px h-8 bg-white/20"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {(() => {
                  const departments = t('corporate.identity.departments', { returnObjects: true }) as any[];
                  return Array.isArray(departments) ? departments.map((dept, i) => (
                    <div key={i} className="bg-brand-surface rounded-2xl border border-white/5 p-6">
                      <h4 className="font-bold text-brand-accent text-center mb-4 pb-3 border-b border-white/10">{dept.name}</h4>
                      <div className="space-y-2">
                        {Array.isArray(dept.branches) ? dept.branches.map((branch: string, j: number) => (
                          <div key={j} className="text-brand-muted text-xs text-center py-1 px-2 bg-brand-primary/5 rounded-lg">
                            {branch}
                          </div>
                        )) : null}
                      </div>
                    </div>
                  )) : null;
                })()}
              </div>
            </>
          )}
        </div>
      </SubPageLayout>
    );
  },
  Leadership: ({ onBack, heroImage, gradientFallback }: PageProps) => {
    const { t } = useTranslation();
    const team = t('corporate.leadership.members', { returnObjects: true }) as any[];
    const safeMembers = Array.isArray(team) ? team : [];
    
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.leadership.tag')} title={t('corporate.leadership.title')} description={t('corporate.leadership.description')} heroImage={heroImage} gradientFallback={gradientFallback}>
        <div className="grid md:grid-cols-3 gap-8">
          {safeMembers.map((l, i) => (
            <div key={i} className="bg-brand-surface p-10 rounded-[2.5rem] border border-white/5 group shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-brand-primary rounded-full mb-6 flex items-center justify-center text-white font-black text-xl uppercase shadow-lg">{l.n.charAt(0)}</div>
              <h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-1.5"}>{l.n}</h3><p className="text-brand-accent text-xs font-semibold uppercase tracking-wide mb-4">{l.r}</p><p className="text-brand-muted font-medium text-xs leading-relaxed">{l.b}</p>
            </div>
          ))}
        </div>
      </SubPageLayout>
    );
  },
  Board: ({ onBack, heroImage, gradientFallback }: PageProps) => {
    const { t } = useTranslation();
    const members = t('corporate.board.items', { returnObjects: true }) as string[];
    const safeItems = Array.isArray(members) ? members : [];
    
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.board.tag')} title={t('corporate.board.title')} description={t('corporate.board.description')} heroImage={heroImage} gradientFallback={gradientFallback}>
        <div className="bg-brand-surface text-brand-foreground rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none"><LogoSymbol className="w-80 h-80 scale-150" forceInvert={true} /></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div className="space-y-6"><h3 className="text-h2 font-semibold tracking-tight text-brand-accent">{t('corporate.board.oversight_title')}</h3><p className="text-brand-muted font-medium leading-relaxed text-sm">{t('corporate.board.oversight_desc')}</p><div className="flex gap-4"><ShieldCheck size={32} className="text-brand-accent" /><Award size={32} className="text-brand-primary" /></div></div>
            <div className="space-y-4">{safeItems.map(item => <div key={item} className="pb-4 border-b border-white/10 flex justify-between items-center group cursor-pointer hover:border-brand-accent transition-colors"><span className="text-lg font-bold">{item}</span><ArrowRight size={18} className="text-brand-accent group-hover:translate-x-2 transition-transform" /></div>)}</div>
          </div>
        </div>
      </SubPageLayout>
    );
  },
  Portfolio: ({ onBack, heroImage, gradientFallback }: PageProps) => {
    const { t } = useTranslation();
    const safeProjects = Array.isArray(portfolioProjects) ? portfolioProjects : [];
    const categories = ['All', 'Telecom', 'Power', 'ICT'];
    
    const stats = [
      { value: '66', label: 'Stations', desc: 'Optical transmission deployed' },
      { value: '67', label: 'Towns', desc: 'Rural electrification coverage' },
      { value: '500+', label: 'Nodes', desc: 'Campus network deployment' },
    ];
    
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.portfolio.tag')} title={t('corporate.portfolio.title')} description={t('corporate.portfolio.description')} heroImage={heroImage} gradientFallback={gradientFallback}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeProjects.map((p, i) => (
            <div key={p.id} className="group relative h-[320px] overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-accent mb-1">{p.category}</span>
                <h3 className="text-lg font-bold mb-1 group-hover:text-brand-accent transition-colors">{p.title}</h3>
                <p className="text-white/60 text-xs">{p.description}</p>
                <p className="text-white/40 text-[10px] mt-2">{p.client}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="py-16">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-brand-accent mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-brand-foreground uppercase tracking-wide">{stat.label}</div>
                <div className="text-xs text-brand-muted mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="py-14 bg-brand-surface rounded-3xl border border-white/5">
          <div className="px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-8">Featured References</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safeProjects.slice(0, 3).map((p) => (
                <div key={p.id} className="bg-brand-primary rounded-xl border border-white/5 p-5 hover:shadow-md transition-shadow">
                  <div className="w-full h-28 rounded-lg bg-brand-surface mb-4 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-medium text-brand-accent uppercase tracking-wide">{p.category}</span>
                  <h4 className="font-semibold text-brand-foreground mt-1 mb-1 text-sm">{p.title}</h4>
                  <p className="text-xs text-brand-muted">{p.description}</p>
                  <p className="text-[10px] text-brand-muted/60 mt-2">{p.client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-semibold text-brand-foreground mb-2">One Integrated Partner</h3>
              <p className="text-sm text-brand-muted">Engineering, telecom and ICT under one roof.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-semibold text-brand-foreground mb-2">Turnkey Execution</h3>
              <p className="text-sm text-brand-muted">Survey to support. Cost-effective and timely.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-semibold text-brand-foreground mb-2">Safety-Led & Customer-First</h3>
              <p className="text-sm text-brand-muted">Zero accidents. Professionalism at every stage.</p>
            </div>
          </div>
        </div>
        
        <div className="py-8 flex justify-center">
          <div 
            className="inline-flex items-center gap-3 bg-brand-surface border border-white/10 px-8 py-4 rounded-xl opacity-50 cursor-not-allowed transition-all duration-300"
          >
            <Clock size={20} className="text-brand-accent" />
            <div className="text-left">
              <p className="text-sm font-semibold text-brand-foreground">Company Profile — Coming Soon</p>
              <p className="text-[10px] text-brand-muted">Full profile with project case studies</p>
            </div>
            <ChevronRight size={16} className="text-brand-muted" />
          </div>
        </div>
        
        <div className="bg-brand-primary py-14 border-t border-white/5 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-brand-foreground mb-2">
                Ready to start your project?
              </h3>
              <p className="text-brand-muted text-sm">
                Talk to our engineers. No obligation, just expertise.
              </p>
            </div>
          </div>
        </div>
      </SubPageLayout>
    );
  },
  Presence: ({ onBack, heroImage, gradientFallback }: PageProps) => {
    const { t } = useTranslation();
    const locations = t('corporate.presence.items', { returnObjects: true }) as any[];
    const safeItems = Array.isArray(locations) ? locations : [];
    
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.presence.tag')} title={t('corporate.presence.title')} description={t('corporate.presence.description')} heroImage={heroImage} gradientFallback={gradientFallback}>
        <div className="grid md:grid-cols-4 gap-6">
          {safeItems.map((o, i) => (
            <div key={i} className="p-8 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm text-center">
              <MapPin size={28} className="text-brand-accent mx-auto mb-4" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-1"}>{o.c}</h3><p className="text-brand-muted text-[9px] font-bold uppercase tracking-widest">{o.t}</p>
            </div>
          ))}
        </div>
      </SubPageLayout>
    );
  }
};

export default CorporatePages;