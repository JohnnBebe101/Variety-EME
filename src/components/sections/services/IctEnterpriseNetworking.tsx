import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const IctEnterpriseNetworking = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Enterprise Networking, Storage & Backup" description="LAN/WAN design and deployment, structured cabling, network switches and routing, NAS/SAN storage, backup and disaster recovery systems." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        LAN/WAN design and deployment, structured cabling, network switches and routing, NAS/SAN storage, backup and disaster recovery systems.
      </SectionBlock>
      <ReferenceBlock items={[
        'LAN deployment across 12 buildings, 500+ nodes — Entoto TVET',
        'OXFAM-America ICT support',
        'Clinton Foundation LAN work'
      ]} />
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Data Center Design & Build', path: '/ict-datacenter/data-center-design' },
        { label: 'System Development & Consultancy', path: '/ict-datacenter/system-development' },
        { label: 'Cybersecurity & Managed Services', path: '/ict-datacenter/cybersecurity-managed' }
      ]} />
    </div>
  </SubPageLayout>
);

export default IctEnterpriseNetworking;
