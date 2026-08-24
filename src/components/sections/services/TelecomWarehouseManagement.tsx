import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, RelatedServices, PageCtaBar } from '../helpers';

const TelecomWarehouseManagement = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Telecommunications" title="Warehouse Management" description="Equipment receiving and inspection, inventory tracking, kitting and staging for field deployment, asset management for telecom infrastructure programs." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
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
);

export default TelecomWarehouseManagement;
