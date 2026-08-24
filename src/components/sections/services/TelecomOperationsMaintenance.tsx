import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const TelecomOperationsMaintenance = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Telecommunications" title="Operations & Maintenance (O&M)" description="Preventive and corrective maintenance contracts, SLA-based network support, network performance monitoring, spare parts management." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Preventive and corrective maintenance contracts, SLA-based network support, network performance monitoring, spare parts management.
      </SectionBlock>
      <ReferenceBlock items={['ESCO telecom power framework; ongoing support for Nokia and Ericsson project portfolios.']} />
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
        { label: 'Managed Services', path: '/academy/managed-services' },
        { label: 'Warehouse Management', path: '/telecommunications/warehouse-management' }
      ]} />
    </div>
  </SubPageLayout>
);

export default TelecomOperationsMaintenance;
