
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
              <img src={images[i]} alt={p.t} className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
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
            <div className="md:w-1/2 h-full"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" className="w-full h-full object-cover" alt="Net" referrerPolicy="no-referrer" loading="lazy" /></div>
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

const SectionBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4 mb-10">
    <h3 className="text-h4 font-semibold tracking-tight text-brand-foreground">{title}</h3>
    <div className="text-brand-muted text-sm leading-relaxed">{children}</div>
  </div>
);

const ReferenceBlock = ({ items }: { items: string[] }) => (
  <div className="bg-brand-surface border border-white/10 rounded-[2rem] p-8 mb-10">
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">Reference Projects</h3>
    <ul className="list-disc list-inside space-y-3 text-brand-muted text-sm">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

const CalloutBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/5 border border-brand-accent/20 rounded-[2rem] p-8 mb-10 text-brand-foreground">
    <p className="text-sm font-semibold leading-relaxed">{children}</p>
  </div>
);

const RelatedServices = ({ links }: { links: Array<{ label: string; path: string }> }) => (
  <div className="bg-brand-surface border border-white/10 rounded-[2rem] p-8">
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-6">Related Services</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {links.map((link) => (
        <a key={link.path} href={link.path} className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-brand-foreground hover:border-brand-accent hover:bg-white/10 transition-colors">
          {link.label} →
        </a>
      ))}
    </div>
  </div>
);

const PageCtaBar = () => (
  <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-[2rem] p-8 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <p className="text-brand-foreground font-semibold">Discuss Your Project</p>
    <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
      Discuss Your Project →
    </a>
  </div>
);

export const ServicePages = {
  TelecommunicationsMobileRollout: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Telecommunications" title="Mobile Telecom Rollout (RAN + Power)" description="Radio Access Network deployment integrated with telecom power infrastructure as a single turnkey scope.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          BTS/NodeB/eNodeB installation, antenna and feeder systems, telecom power systems (rectifiers, batteries, generators), site integration and commissioning.
        </SectionBlock>
        <ReferenceBlock items={[
          'Nokia',
          'Nokia-Siemens',
          'Ericsson',
          'ZTE',
          'Safaricom rollout support',
          'ESCO telecom power framework'
        ]} />
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Fiber Optics', path: '/telecommunications/fiber-optics' },
          { label: 'Tower & Civil Works', path: '/telecommunications/tower-civil-works' },
          { label: 'Operations & Maintenance (O&M)', path: '/telecommunications/operations-maintenance' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  TelecommunicationsFiberOptics: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Telecommunications" title="Fiber Optics" description="Long-haul and metropolitan fiber optic network design, outside plant installation, splicing, termination, OTDR testing and acceptance commissioning.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Long-haul and metropolitan fiber optic network design, outside plant installation, splicing, termination, OTDR testing and acceptance commissioning.
        </SectionBlock>
        <ReferenceBlock items={[
          '66 stations of optical transmission equipment installed and commissioned on three national routes: Addis Ababa–Mekele, Addis Ababa–Gonder, Addis Ababa–Sululta (Huawei / AAICTDA)'
        ]} />
        <CalloutBox>
          <a href="/academy/fiber-optics-certification" className="underline hover:text-brand-accent">Train your team in fiber optics → FOA-certified programs at InfinEth Academy</a>
        </CalloutBox>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
          { label: 'Tower & Civil Works', path: '/telecommunications/tower-civil-works' },
          { label: 'Fiber Optics Certification', path: '/academy/fiber-optics-certification' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  TelecommunicationsTowerCivilWorks: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Telecommunications" title="Tower & Civil Works" description="Greenfield tower construction, rooftop installations, tower reinforcement, civil site preparation, foundation works, right-of-way management.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Greenfield tower construction, rooftop installations, tower reinforcement, civil site preparation, foundation works, right-of-way management.
        </SectionBlock>
        <ReferenceBlock items={['400KV transmission tower foundations and erection (KEC International).']} />
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
          { label: 'Fiber Optics', path: '/telecommunications/fiber-optics' },
          { label: 'Transmission, Distribution & Substation', path: '/power/transmission-distribution' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  TelecommunicationsOperationsMaintenance: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Telecommunications" title="Operations & Maintenance (O&M)" description="Preventive and corrective maintenance contracts, SLA-based network support, network performance monitoring, spare parts management.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Preventive and corrective maintenance contracts, SLA-based network support, network performance monitoring, spare parts management.
        </SectionBlock>
        <ReferenceBlock items={['ESCO telecom power framework; ongoing support for Nokia and Ericsson project portfolios.']} />
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
          { label: 'Managed Services', path: '/academy/managed-services' },
          { label: 'Warehouse Management', path: '/telecommunications/warehouse-management' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  TelecommunicationsWarehouseManagement: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Telecommunications" title="Warehouse Management" description="Equipment receiving and inspection, inventory tracking, kitting and staging for field deployment, asset management for telecom infrastructure programs.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Equipment receiving and inspection, inventory tracking, kitting and staging for field deployment, asset management for telecom infrastructure programs.
        </SectionBlock>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
          { label: 'Operations & Maintenance (O&M)', path: '/telecommunications/operations-maintenance' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  IctDatacenterDataCenterDesign: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Data Center Design & Build" description="Data center site assessment, rack and cabling infrastructure, power and cooling systems, structured cabling, server room build-out, acceptance testing.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Data center site assessment, rack and cabling infrastructure, power and cooling systems, structured cabling, server room build-out, acceptance testing.
        </SectionBlock>
        <ReferenceBlock items={[
          '30m² data center build at Entoto TVET campus including LAN deployment across 12 buildings, 500+ nodes (Huawei / AAICTDA)',
          'MoFED regional data centers'
        ]} />
        <CalloutBox>
          ISO 27001:2022 — Information Security Management
        </CalloutBox>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Enterprise Networking, Storage & Backup', path: '/ict-datacenter/enterprise-networking' },
          { label: 'Cybersecurity & Managed Services', path: '/ict-datacenter/cybersecurity-managed' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  IctDatacenterEnterpriseNetworking: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Enterprise Networking, Storage & Backup" description="LAN/WAN design and deployment, structured cabling, network switches and routing, NAS/SAN storage, backup and disaster recovery systems.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          LAN/WAN design and deployment, structured cabling, network switches and routing, NAS/SAN storage, backup and disaster recovery systems.
        </SectionBlock>
        <ReferenceBlock items={[
          'LAN deployment across 12 buildings, 500+ nodes — Entoto TVET',
          'OXFAM-America ICT support',
          'Clinton Foundation LAN work'
        ]} />
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Data Center Design & Build', path: '/ict-datacenter/data-center-design' },
          { label: 'System Development & Consultancy', path: '/ict-datacenter/system-development' },
          { label: 'Cybersecurity & Managed Services', path: '/ict-datacenter/cybersecurity-managed' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  IctDatacenterSystemDevelopment: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="System Development & Consultancy" description="System requirements analysis, software and system development, ICT project management, technology advisory, digital transformation consulting.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          System requirements analysis, software and system development, ICT project management, technology advisory, digital transformation consulting.
        </SectionBlock>
        <ReferenceBlock items={[
          'Consultancy for Ethiopian Sugar Corporation, CSA (Central Statistical Agency), and other government and NGO clients.'
        ]} />
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Enterprise Networking, Storage & Backup', path: '/ict-datacenter/enterprise-networking' },
          { label: 'Training & ICT Consultancy', path: '/ict-datacenter/training-consultancy' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  IctDatacenterCybersecurityManaged: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Cybersecurity & Managed Services" description="Information security assessments, security policy development, managed security services, business continuity planning, network monitoring, incident response support.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Information security assessments, security policy development, managed security services, business continuity planning, network monitoring, incident response support.
        </SectionBlock>
        <CalloutBox>
          ISO 27001:2022 — Information Security Management
          <br />
          ISO 22301:2019 — Business Continuity Management
        </CalloutBox>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Data Center Design & Build', path: '/ict-datacenter/data-center-design' },
          { label: 'Enterprise Networking, Storage & Backup', path: '/ict-datacenter/enterprise-networking' },
          { label: 'Academy Managed Services', path: '/academy/managed-services' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  IctDatacenterTrainingConsultancy: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Training & ICT Consultancy" description="ICT training programs and consultancy services for enterprise and institutional clients.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          ICT training programs and consultancy services for enterprise and institutional clients.
        </SectionBlock>
        <CalloutBox>
          <a href="/academy" className="underline hover:text-brand-accent">View the full training and certification catalog at InfinEth Academy →</a>
        </CalloutBox>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'System Development & Consultancy', path: '/ict-datacenter/system-development' },
          { label: 'Academy Overview', path: '/academy/overview' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  PowerTransmissionDistribution: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Power" title="Transmission, Distribution & Substation" description="HV/MV transmission line construction, substation design and build, distribution network rollout, transformer installation and commissioning, line stringing and pole erection.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          HV/MV transmission line construction, substation design and build, distribution network rollout, transformer installation and commissioning, line stringing and pole erection.
        </SectionBlock>
        <ReferenceBlock items={[
          '400KV transmission tower foundations and erection (KEC International)',
          'Three EEPCO rural electrification programs covering 67 towns total (28 towns, 10 towns, 29 towns) — survey, poles, stringing, transformer work and commissioning'
        ]} />
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Minigrid Systems', path: '/power/minigrid-systems' },
          { label: 'Building Electromechanical Works', path: '/power/building-electromechanical' },
          { label: 'Tower & Civil Works', path: '/telecommunications/tower-civil-works' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  PowerMinigridSystems: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Power" title="Minigrid Systems" description="Minigrid feasibility and design, hybrid power systems, grid integration, community electrification, metering and monitoring.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Minigrid feasibility and design, hybrid power systems, grid integration, community electrification, metering and monitoring.
        </SectionBlock>
        <ReferenceBlock items={[
          'EEPCO rural electrification programs',
          'GIZ and WFP project support'
        ]} />
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Transmission, Distribution & Substation', path: '/power/transmission-distribution' },
          { label: 'Backup Power Systems (DG, Solar & Hybrid)', path: '/power/backup-power' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  PowerBackupPower: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Power" title="Backup Power Systems (DG, Solar & Hybrid)" description="Diesel Generator (DG) installation and commissioning, solar PV design and installation, battery storage systems, hybrid controller integration, UPS systems, telecom power systems (rectifiers and batteries).">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Diesel Generator (DG) installation and commissioning, solar PV design and installation, battery storage systems, hybrid controller integration, UPS systems, telecom power systems (rectifiers and batteries).
        </SectionBlock>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Minigrid Systems', path: '/power/minigrid-systems' },
          { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
          { label: 'Building Electromechanical Works', path: '/power/building-electromechanical' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  PowerBuildingElectromechanical: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Power" title="Building Electromechanical Works" description="Industrial electrical installations, building wiring and fit-out, panel board and switchgear installation, earthing and lightning protection systems.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Industrial electrical installations, building wiring and fit-out, panel board and switchgear installation, earthing and lightning protection systems.
        </SectionBlock>
        <PageCtaBar />
        <div className="text-brand-muted text-sm leading-relaxed bg-brand-surface border border-white/10 rounded-[2rem] p-6">
          Specialist vertical transport systems (elevators and escalators) are available through our VTS subsidiary partner.
        </div>
        <RelatedServices links={[
          { label: 'Transmission, Distribution & Substation', path: '/power/transmission-distribution' },
          { label: 'Backup Power Systems (DG, Solar & Hybrid)', path: '/power/backup-power' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  AcademyOverview: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Academy & Managed Services" title="Academy Overview" description="InfinEth Academy is Ethiopia's practitioner-led engineering and ICT training center, delivering internationally aligned certifications backed by 20+ years of field execution experience.">
      <div className="space-y-10">
        <SectionBlock title="Overview">
          InfinEth Academy is Ethiopia's practitioner-led engineering and ICT training center, delivering internationally aligned certifications backed by 20+ years of field execution experience. Our training is delivered by engineers and technicians who have worked on live infrastructure projects across Ethiopia and East Africa. Primary focus: FOA-standard fiber optics certification programs. Secondary focus: Telecommunications and Industrial Automation training through our Center of Excellence.
        </SectionBlock>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Fiber Optics Certification Programs (CFOT / CFOS)', path: '/academy/fiber-optics-certification' },
          { label: 'Telecommunications & Industrial Automation Training', path: '/academy/telecom-automation-training' },
          { label: 'Corporate & Institutional Training Partnerships', path: '/academy/institutional-partnerships' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  AcademyFiberOpticsCertification: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Academy & Managed Services" title="Fiber Optics Certification Programs (CFOT / CFOS)" description="FOA-aligned fiber optics certification programs for technicians and specialist tracks.">
      <div className="space-y-10">
        <SectionBlock title="TRACK 1 — CFOT: Certified Fiber Optic Technician">
          Foundational certification. Covers fiber optic theory, installation methods, connectors, splicing, and basic testing. Required entry point for all field technicians and prerequisite for all CFOS tracks.
        </SectionBlock>
        <SectionBlock title="TRACK 2 — CFOS: Certified Fiber Optic Specialist">
          Advanced specialist certifications. Available tracks: CFOS/O — Outside Plant (OSP) Installation; CFOS/D — Fiber Optic Network Design & Project Management; CFOS/T — Testing & Commissioning; CFOS/W — Fiber for Wireless (cell tower backhaul, DAS, small cells).
        </SectionBlock>
        <SectionBlock title="Certification Standard">
          “Programs are aligned with the FOA (Fiber Optic Association) international certification framework.” <a href="https://www.thefoa.org" className="underline hover:text-brand-accent">Learn about FOA certifications</a>
        </SectionBlock>
        <div className="flex justify-center">
          <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
            Enroll or Inquire About Programs →
          </a>
        </div>
        <RelatedServices links={[
          { label: 'Academy Overview', path: '/academy/overview' },
          { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
          { label: 'Corporate & Institutional Training Partnerships', path: '/academy/institutional-partnerships' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  AcademyTelecomAutomationTraining: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Academy & Managed Services" title="Telecommunications & Industrial Automation Training" description="Training programs for telecom operators, network engineers, industrial operators and technical staff.">
      <div className="space-y-10">
        <SectionBlock title="CENTER 1 — Telecommunications Training">
          Wireless communications, network fundamentals, telecom systems operations. Relevant for telecom operators, network engineers, and field technicians.
        </SectionBlock>
        <SectionBlock title="CENTER 2 — Industrial Automation Training (Center of Excellence)">
          DCS (Distributed Control Systems) and PLC (Programmable Logic Controllers). Relevant for manufacturing facilities, utility companies, and industrial operators.
        </SectionBlock>
        <div className="flex justify-center">
          <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
            Inquire About Training Programs →
          </a>
        </div>
        <RelatedServices links={[
          { label: 'Academy Overview', path: '/academy/overview' },
          { label: 'Fiber Optics Certification Programs (CFOT / CFOS)', path: '/academy/fiber-optics-certification' },
          { label: 'Corporate & Institutional Training Partnerships', path: '/academy/institutional-partnerships' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  AcademyManagedServices: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Academy & Managed Services" title="Managed Services" description="Ongoing operational support contracts — network operations and monitoring, IT infrastructure management, SLA-based support contracts, helpdesk and remote support, periodic maintenance programs.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Ongoing operational support contracts — network operations and monitoring, IT infrastructure management, SLA-based support contracts, helpdesk and remote support, periodic maintenance programs.
        </SectionBlock>
        <CalloutBox>
          ISO 22301:2019 — Business Continuity Management
        </CalloutBox>
        <PageCtaBar />
        <RelatedServices links={[
          { label: 'Cybersecurity & Managed Services', path: '/ict-datacenter/cybersecurity-managed' },
          { label: 'Operations & Maintenance (O&M)', path: '/telecommunications/operations-maintenance' }
        ]} />
      </div>
    </SubPageLayout>
  ),
  AcademyInstitutionalPartnerships: ({ onBack }: PageProps) => (
    <SubPageLayout onBack={onBack} tag="Academy & Managed Services" title="Corporate & Institutional Training Partnerships" description="Bulk training programs and long-term training partnerships for telecom operators, NGOs, government ministries, and TVET institutions.">
      <div className="space-y-10">
        <SectionBlock title="Capability Detail">
          Bulk training programs and long-term training partnerships for telecom operators, NGOs, government ministries, and TVET institutions. InfinEth Academy can design and deliver customized training programs for organizational workforce development.
        </SectionBlock>
        <div className="flex justify-center">
          <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
            Contact Us for Institutional Programs →
          </a>
        </div>
        <RelatedServices links={[
          { label: 'Academy Overview', path: '/academy/overview' },
          { label: 'Fiber Optics Certification Programs (CFOT / CFOS)', path: '/academy/fiber-optics-certification' },
          { label: 'Telecommunications & Industrial Automation Training', path: '/academy/telecom-automation-training' }
        ]} />
      </div>
    </SubPageLayout>
  )
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
