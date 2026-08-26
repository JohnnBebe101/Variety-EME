import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const IctSystemDevelopment = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="ICT & Data Center" title="System Development & Consultancy" description="System requirements analysis, software and system development, ICT project management, technology advisory, digital transformation consulting." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        System requirements analysis, software and system development, ICT project management, technology advisory, digital transformation consulting.
      </SectionBlock>
      <ReferenceBlock items={[
        'Consultancy for Ethiopian Sugar Corporation, CSA (Central Statistical Agency), and other government and NGO clients.'
      ]} />
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Enterprise Networking, Storage & Backup', path: '/ict-datacenter/enterprise-networking' },
        { label: 'Training & ICT Consultancy', path: '/ict-datacenter/training-consultancy' }
      ]} />
    </div>
  </SubPageLayout>
);

export default IctSystemDevelopment;


