import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, CalloutBox, RelatedServices, PageCtaBar } from '../helpers';

const IctCybersecurityManaged = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="ICT & Data Center" title="Cybersecurity & Managed Services" description="Information security assessments, security policy development, managed security services, business continuity planning, network monitoring, incident response support." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Information security assessments, security policy development, managed security services, business continuity planning, network monitoring, incident response support.
      </SectionBlock>
      <CalloutBox>
        ISO 27001:2022 — Information Security Management
        <br />
        ISO 22301:2019 — Business Continuity Management
      </CalloutBox>
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Data Center Design & Build', path: '/ict-datacenter/data-center-design' },
        { label: 'Enterprise Networking, Storage & Backup', path: '/ict-datacenter/enterprise-networking' },
        { label: 'Academy Managed Services', path: '/academy/managed-services' }
      ]} />
    </div>
  </SubPageLayout>
);

export default IctCybersecurityManaged;
