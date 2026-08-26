import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, RelatedServices } from '../helpers';

const AcademyInstitutionalPartners = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Academy & Managed Services" title="Corporate & Institutional Training Partnerships" description="Bulk training programs and long-term training partnerships for telecom operators, NGOs, government ministries, and TVET institutions." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Bulk training programs and long-term training partnerships for telecom operators, NGOs, government ministries, and TVET institutions. Variety EME Academy can design and deliver customized training programs for organizational workforce development.
      </SectionBlock>
      <div className="flex justify-center">
        <button onClick={() => onNavigate('home', undefined, '/contact')} className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:bg-white hover:text-brand-primary transition-colors">
          Contact Us for Institutional Programs →
        </button>
      </div>
        <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
         { label: 'Academy Overview', path: '/academy/overview' },
         { label: 'Fiber Optics Certification Programs (CFOT / CFOS)', path: '/academy/fiber-optics-certification' },
         { label: 'Industrial Automation Training', path: '/academy/telecom-automation-training' }
       ]} />
    </div>
  </SubPageLayout>
);

export default AcademyInstitutionalPartners;


