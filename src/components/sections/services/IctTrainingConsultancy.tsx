import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, CalloutBox, RelatedServices, PageCtaBar } from '../helpers';

const IctTrainingConsultancy = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Training & ICT Consultancy" description="ICT training programs and consultancy services for enterprise and institutional clients." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        ICT training programs and consultancy services for enterprise and institutional clients.
      </SectionBlock>
      <CalloutBox>
        <a href="/academy" className="underline hover:text-brand-accent">View the full training and certification catalog at Variety EME Academy →</a>
      </CalloutBox>
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'System Development & Consultancy', path: '/ict-datacenter/system-development' },
        { label: 'Academy Overview', path: '/academy/overview' }
      ]} />
    </div>
  </SubPageLayout>
);

export default IctTrainingConsultancy;
