import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, RelatedServices } from '../helpers';

const AcademyTelecomAutomation = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Academy & Managed Services" title="Industrial Automation Training" description="Training programs for industrial operators and technical staff." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="CENTER 1 — Telecommunications Training">
        Wireless communications, network fundamentals, telecom systems operations. Relevant for telecom operators, network engineers, and field technicians.
      </SectionBlock>
      <SectionBlock title="CENTER 2 — Industrial Automation Training (Center of Excellence)">
        DCS (Distributed Control Systems), SCADA (Supervisory Control and Data Acquisition) and PLC (Programmable Logic Controllers). Relevant for manufacturing facilities, utility companies, and industrial operators.
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
);

export default AcademyTelecomAutomation;
