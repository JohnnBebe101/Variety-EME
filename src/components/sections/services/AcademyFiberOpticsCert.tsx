import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, RelatedServices } from '../helpers';

const AcademyFiberOpticsCert = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Academy & Managed Services" title="Fiber Optics Certification Programs (CFOT / CFOS)" description="FOA-aligned fiber optics certification programs for technicians and specialist tracks." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="TRACK 1 — CFOT: Certified Fiber Optic Technician">
        Foundational certification. Covers fiber optic theory, installation methods, connectors, splicing, and basic testing. Required entry point for all field technicians and prerequisite for all CFOS tracks.
      </SectionBlock>
      <SectionBlock title="TRACK 2 — CFOS: Certified Fiber Optic Specialist">
        Advanced specialist certifications. Available tracks: CFOS/O — Outside Plant (OSP) Installation; CFOS/D — Fiber Optic Network Design & Project Management; CFOS/T — Testing & Commissioning; CFOS/W — Fiber for Wireless (cell tower backhaul, DAS, small cells).
      </SectionBlock>
      <SectionBlock title="Certification Standard">
        "Programs are aligned with the FOA (Fiber Optic Association) international certification framework." <a href="https://www.thefoa.org" className="underline hover:text-brand-accent">Learn about FOA certifications</a>
      </SectionBlock>
      <div className="flex justify-center">
        <button onClick={() => onNavigate('home', undefined, '/contact')} className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
          Enroll or Inquire About Programs →
        </button>
      </div>
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Academy Overview', path: '/academy/overview' },
        { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
        { label: 'Corporate & Institutional Training Partnerships', path: '/academy/institutional-partnerships' }
      ]} />
    </div>
  </SubPageLayout>
);

export default AcademyFiberOpticsCert;


