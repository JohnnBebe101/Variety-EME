import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const IctSystemDevelopment = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="System Development & Consultancy" description="System requirements analysis, software and system development, ICT project management, technology advisory, digital transformation consulting." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
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
);

export default IctSystemDevelopment;
