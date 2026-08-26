import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, CalloutBox, RelatedServices, PageCtaBar } from '../helpers';

const IctCybersecurityManaged = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="ICT & Data Center" title="Cybersecurity & Managed Services" description="Information security assessments, security policy development, managed security services, business continuity planning, network monitoring, incident response support." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Information security assessments, security policy development, managed security services, business continuity planning, network monitoring, incident response support.
      </SectionBlock>
      <CalloutBox>
        ISO 27001:2022 — Information Security Management
        <br />
        ISO 22301:2019 — Business Continuity Management
      </CalloutBox>
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Data Center Design & Build', path: '/ict-datacenter/data-center-design' },
        { label: 'Enterprise Networking, Storage & Backup', path: '/ict-datacenter/enterprise-networking' },
        { label: 'Academy Managed Services', path: '/msp' }
      ]} />
    </div>
  </SubPageLayout>
);

export default IctCybersecurityManaged;


