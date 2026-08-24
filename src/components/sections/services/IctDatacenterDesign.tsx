import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, CalloutBox, RelatedServices, PageCtaBar } from '../helpers';

const IctDatacenterDesign = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Data Center Design & Build" description="Data center site assessment, rack and cabling infrastructure, power and cooling systems, structured cabling, server room build-out, acceptance testing." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Data center site assessment, rack and cabling infrastructure, power and cooling systems, structured cabling, server room build-out, acceptance testing.
      </SectionBlock>
      <ReferenceBlock items={[
        '30m² data center build at Entoto TVET campus including LAN deployment across 12 buildings, 500+ nodes (Huawei / AAICTDA)',
        'MoFED regional data centers'
      ]} />
      <CalloutBox>
        ISO 27001:2022 — Information Security Management
      </CalloutBox>
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Enterprise Networking, Storage & Backup', path: '/ict-datacenter/enterprise-networking' },
        { label: 'Cybersecurity & Managed Services', path: '/ict-datacenter/cybersecurity-managed' }
      ]} />
    </div>
  </SubPageLayout>
);

export default IctDatacenterDesign;
