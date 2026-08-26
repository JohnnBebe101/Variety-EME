import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, CalloutBox, RelatedServices, PageCtaBar } from '../helpers';

const IctTrainingConsultancy = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="ICT & Data Center" title="Training & ICT Consultancy" description="ICT training programs and consultancy services for enterprise and institutional clients." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        ICT training programs and consultancy services for enterprise and institutional clients.
      </SectionBlock>
      <CalloutBox>
        <button onClick={() => onNavigate('home', undefined, '/academy')} className="underline hover:text-brand-accent">View the full training and certification catalog at Variety EME Academy →</button>
      </CalloutBox>
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'System Development & Consultancy', path: '/ict-datacenter/system-development' },
        { label: 'Academy Overview', path: '/academy/overview' }
      ]} />
    </div>
  </SubPageLayout>
);

export default IctTrainingConsultancy;


