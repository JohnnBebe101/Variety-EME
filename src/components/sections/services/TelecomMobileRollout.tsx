import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const TelecomMobileRollout = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Telecommunications" title="Mobile Telecom Rollout (RAN + Power)" description="Radio Access Network deployment integrated with telecom power infrastructure as a single turnkey scope." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
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
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Fiber Optics', path: '/telecommunications/fiber-optics' },
        { label: 'Tower & Civil Works', path: '/telecommunications/tower-civil-works' },
        { label: 'Operations & Maintenance (O&M)', path: '/telecommunications/operations-maintenance' }
      ]} />
    </div>
  </SubPageLayout>
);

export default TelecomMobileRollout;


