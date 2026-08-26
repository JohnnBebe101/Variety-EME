import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, RelatedServices, PageCtaBar } from '../helpers';

const TelecomWarehouseManagement = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Telecommunications" title="Warehouse Management" description="Equipment receiving and inspection, inventory tracking, kitting and staging for field deployment, asset management for telecom infrastructure programs." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Equipment receiving and inspection, inventory tracking, kitting and staging for field deployment, asset management for telecom infrastructure programs.
      </SectionBlock>
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
        { label: 'Operations & Maintenance (O&M)', path: '/telecommunications/operations-maintenance' }
      ]} />
    </div>
  </SubPageLayout>
);

export default TelecomWarehouseManagement;


