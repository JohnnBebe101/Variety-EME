import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, RelatedServices, PageCtaBar } from '../helpers';

const PowerBackupPower = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Power" title="Backup Power Systems (DG, Solar & Hybrid)" description="Diesel Generator (DG) installation and commissioning, solar PV design and installation, battery storage systems, hybrid controller integration, UPS systems, telecom power systems (rectifiers and batteries)." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Diesel Generator (DG) installation and commissioning, solar PV design and installation, battery storage systems, hybrid controller integration, UPS systems, telecom power systems (rectifiers and batteries).
      </SectionBlock>
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Minigrid Systems', path: '/power/minigrid-systems' },
        { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
        { label: 'Building Electromechanical Works', path: '/power/building-electromechanical' }
      ]} />
    </div>
  </SubPageLayout>
);

export default PowerBackupPower;
