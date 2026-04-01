
import React from 'react';
import { 
  History, 
  Target, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  MapPin, 
  TowerControl as Tower, 
  Radio, 
  Layers, 
  Zap, 
  BatteryCharging, 
  CheckCircle2, 
  Activity, 
  Settings, 
  BarChart3, 
  Cpu,
  Database,
  Globe,
  Signal,
  BrainCircuit as Brain,
  LayoutDashboard,
  ArrowUpCircle,
  Construction,
  Server,
  Medal,
  FileCheck,
  GraduationCap,
  Users,
  ClipboardList,
  SearchCheck,
  Stethoscope,
  TreePine,
  HardHat
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SubPageLayout } from './SubPageLayout';
import { UI_CLASSES } from '../data/constants';
import { LogoSymbol } from './LogoSymbol';

interface PageProps {
  onBack: () => void;
}

export const CorporatePages = {
  Identity: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.identity.tag')} title={t('corporate.identity.title')} description={t('corporate.identity.description')}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="flex gap-6 group"><div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center text-white shrink-0 group-hover:rotate-6 transition-transform"><History size={28} /></div><div><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('corporate.identity.legacy_title')}</h3><p className="text-brand-muted font-medium leading-relaxed text-sm">{t('corporate.identity.legacy_desc')}</p></div></div>
            <div className="flex gap-6 group"><div className="w-14 h-14 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary shrink-0 group-hover:rotate-6 transition-transform"><Target size={28} /></div><div><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('corporate.identity.mission_title')}</h3><p className="text-brand-muted font-medium leading-relaxed text-sm">{t('corporate.identity.mission_desc')}</p></div></div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-xl h-[500px] bg-slate-200"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" className="w-full h-full object-cover" alt="Identity" referrerPolicy="no-referrer" /></div>
        </div>
      </SubPageLayout>
    );
  },
  Leadership: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const members = t('corporate.leadership.members', { returnObjects: true }) as any[];
    const safeMembers = Array.isArray(members) ? members : [];
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.leadership.tag')} title={t('corporate.leadership.title')} description={t('corporate.leadership.description')}>
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
  Board: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const items = t('corporate.board.items', { returnObjects: true }) as string[];
    const safeItems = Array.isArray(items) ? items : [];
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.board.tag')} title={t('corporate.board.title')} description={t('corporate.board.description')}>
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
  Portfolio: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const items = t('corporate.portfolio.items', { returnObjects: true }) as any[];
    const safeItems = Array.isArray(items) ? items : [];
    const images = ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800", "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=800"];
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.portfolio.tag')} title={t('corporate.portfolio.title')} description={t('corporate.portfolio.description')}>
        <div className="grid md:grid-cols-2 gap-8">
          {safeItems.map((p, i) => (
            <div key={i} className="group relative h-[380px] overflow-hidden rounded-[2.5rem] shadow-lg">
              <img src={images[i]} alt={p.t} className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-10 pointer-events-none">
                <h3 className={UI_CLASSES.cardTitle + " mb-2 group-hover:text-brand-accent transition-colors"}>{p.t}</h3><p className="text-white/60 text-xs font-medium">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </SubPageLayout>
    );
  },
  Presence: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const items = t('corporate.presence.items', { returnObjects: true }) as any[];
    const safeItems = Array.isArray(items) ? items : [];
    return (
      <SubPageLayout onBack={onBack} tag={t('corporate.presence.tag')} title={t('corporate.presence.title')} description={t('corporate.presence.description')}>
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

export const InfrastructurePages = {
  Telecom: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const items = t('infrastructure.telecom.items', { returnObjects: true }) as any[];
    const safeItems = Array.isArray(items) ? items : [];
    const icons = [Tower, Radio, Layers];
    return (
      <SubPageLayout onBack={onBack} tag={t('infrastructure.telecom.tag')} title={t('infrastructure.telecom.title')} description={t('infrastructure.telecom.description')}>
        <div className="grid lg:grid-cols-3 gap-8">
          {safeItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all"><Icon size={36} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{item.t}</h3><p className="text-brand-muted text-xs font-medium leading-relaxed">{item.d}</p></div>
            );
          })}
        </div>
      </SubPageLayout>
    );
  },
  Power: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const proficiencyItems = t('infrastructure.power.proficiency_items', { returnObjects: true }) as string[];
    const safeProficiencyItems = Array.isArray(proficiencyItems) ? proficiencyItems : [];
    return (
      <SubPageLayout onBack={onBack} tag={t('infrastructure.power.tag')} title={t('infrastructure.power.title')} description={t('infrastructure.power.description')}>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 bg-brand-primary text-brand-foreground rounded-[2rem] shadow-xl"><Zap size={28} className="text-brand-accent mb-4" /><h3 className={UI_CLASSES.cardTitle + " mb-2"}>{t('infrastructure.power.electrification_title')}</h3><p className="text-brand-muted text-xs">{t('infrastructure.power.electrification_desc')}</p></div>
            <div className="p-8 bg-brand-surface text-brand-foreground rounded-[2rem] shadow-xl border border-white/5"><BatteryCharging size={28} className="text-brand-accent mb-4" /><h3 className={UI_CLASSES.cardTitle + " mb-2"}>{t('infrastructure.power.solar_title')}</h3><p className="text-brand-muted text-xs">{t('infrastructure.power.solar_desc')}</p></div>
          </div>
          <div className="bg-brand-surface rounded-[3rem] p-12 border border-white/5 flex flex-col justify-center"><h3 className="text-2xl font-black text-brand-foreground mb-6">{t('infrastructure.power.proficiency_title')}</h3><ul className="space-y-4">{safeProficiencyItems.map(item => <li key={item} className="flex items-center gap-3 text-brand-muted font-bold text-sm"><CheckCircle2 className="text-brand-accent" size={18} />{item}</li>)}</ul></div>
        </div>
      </SubPageLayout>
    );
  },
  OM: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const items = t('infrastructure.om.items', { returnObjects: true }) as any[];
    const safeItems = Array.isArray(items) ? items : [];
    const icons = [Activity, Settings, Zap, Radio];
    return (
      <SubPageLayout onBack={onBack} tag={t('infrastructure.om.tag')} title={t('infrastructure.om.title')} description={t('infrastructure.om.description')}>
        <div className="grid lg:grid-cols-4 gap-6">
          {safeItems.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="p-8 bg-brand-surface rounded-[2rem] border border-white/5 text-center shadow-sm hover:border-brand-accent transition-colors">
                <Icon size={28} className="text-brand-accent mx-auto mb-4" /><h3 className="font-semibold text-brand-foreground uppercase tracking-widest text-[10px]">{s.l}</h3>
              </div>
            );
          })}
        </div>
      </SubPageLayout>
    );
  },
  Network: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    return (
      <SubPageLayout onBack={onBack} tag={t('infrastructure.network.tag')} title={t('infrastructure.network.title')} description={t('infrastructure.network.description')}>
         <div className="rounded-[3rem] bg-brand-surface overflow-hidden text-brand-foreground flex flex-col md:flex-row h-[420px] border border-white/5">
            <div className="md:w-1/2 p-16 flex flex-col justify-center"><h2 className="text-h3 font-semibold mb-6 tracking-tight">{t('infrastructure.network.carrier_title')}</h2><p className="text-brand-muted text-base leading-relaxed mb-8">{t('infrastructure.network.carrier_desc')}</p></div>
            <div className="md:w-1/2 h-full"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" className="w-full h-full object-cover" alt="Net" referrerPolicy="no-referrer" /></div>
         </div>
      </SubPageLayout>
    );
  },
  EnergyMgmt: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const items = t('infrastructure.energy.items', { returnObjects: true }) as any[];
    const safeItems = Array.isArray(items) ? items : [];
    const icons = [BarChart3, Cpu, Target];
    return (
      <SubPageLayout onBack={onBack} tag={t('infrastructure.energy.tag')} title={t('infrastructure.energy.title')} description={t('infrastructure.energy.description')}>
        <div className="grid md:grid-cols-3 gap-8">
          {safeItems.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 flex flex-col shadow-sm"><Icon size={28} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{s.t}</h3><p className="text-brand-muted font-medium text-xs">{s.d}</p></div>
            );
          })}
        </div>
      </SubPageLayout>
    );
  }
};

export const InnovationPages = {
  ICT: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [Radio, ShieldCheck, Server];
    return (
      <SubPageLayout onBack={onBack} tag={t('innovation.ict.tag')} title={t('innovation.ict.title')} description={t('innovation.ict.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('innovation.ict.solution_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('innovation.ict.solution_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  CoreSite: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [Database, Globe, Signal];
    return (
      <SubPageLayout onBack={onBack} tag={t('innovation.coresite.tag')} title={t('innovation.coresite.title')} description={t('innovation.coresite.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('innovation.coresite.solution_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('innovation.coresite.solution_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  AIoT: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [Brain, Activity, LayoutDashboard];
    return (
      <SubPageLayout onBack={onBack} tag={t('innovation.ai_iot.tag')} title={t('innovation.ai_iot.title')} description={t('innovation.ai_iot.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('innovation.ai_iot.solution_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('innovation.ai_iot.solution_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  Mobility: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [ArrowUpCircle, Settings, Construction];
    return (
      <SubPageLayout onBack={onBack} tag={t('innovation.mobility.tag')} title={t('innovation.mobility.title')} description={t('innovation.mobility.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('innovation.mobility.solution_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('innovation.mobility.solution_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  DataCenters: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [Server, Database, Zap];
    return (
      <SubPageLayout onBack={onBack} tag={t('innovation.datacenters.tag')} title={t('innovation.datacenters.title')} description={t('innovation.datacenters.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('innovation.datacenters.solution_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('innovation.datacenters.solution_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  }
};

export const ExcellencePages = {
  Awards: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [Medal, ShieldCheck, Award];
    return (
      <SubPageLayout onBack={onBack} tag={t('excellence.awards.tag')} title={t('excellence.awards.title')} description={t('excellence.awards.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:border-brand-accent/20 transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('excellence.awards.pillar_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('excellence.awards.pillar_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  ISO: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [FileCheck, CheckCircle2, ShieldCheck];
    return (
      <SubPageLayout onBack={onBack} tag={t('excellence.iso.tag')} title={t('excellence.iso.title')} description={t('excellence.iso.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:border-brand-accent/20 transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('excellence.iso.pillar_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('excellence.iso.pillar_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  Academy: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [GraduationCap, Users, History];
    return (
      <SubPageLayout onBack={onBack} tag={t('excellence.academy.tag')} title={t('excellence.academy.title')} description={t('excellence.academy.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:border-brand-accent/20 transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('excellence.academy.pillar_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('excellence.academy.pillar_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  Consultancy: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [ClipboardList, SearchCheck, Target];
    return (
      <SubPageLayout onBack={onBack} tag={t('excellence.consultancy.tag')} title={t('excellence.consultancy.title')} description={t('excellence.consultancy.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:border-brand-accent/20 transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('excellence.consultancy.pillar_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('excellence.consultancy.pillar_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  },
  EHS: ({ onBack }: PageProps) => {
    const { t } = useTranslation();
    const icons = [Stethoscope, TreePine, HardHat];
    return (
      <SubPageLayout onBack={onBack} tag={t('excellence.ehs.tag')} title={t('excellence.ehs.title')} description={t('excellence.ehs.description')} color="text-brand-accent">
         <div className="grid md:grid-cols-3 gap-8">
            {icons.map((Icon, i) => (
              <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:border-brand-accent/20 transition-all">
                <Icon size={40} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('excellence.ehs.pillar_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('excellence.ehs.pillar_desc')}</p>
              </div>
            ))}
         </div>
      </SubPageLayout>
    );
  }
};
