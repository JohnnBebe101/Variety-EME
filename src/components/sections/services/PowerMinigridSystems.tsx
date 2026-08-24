import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const PowerMinigridSystems = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Power" title="Minigrid Systems" description="Minigrid feasibility and design, hybrid power systems, grid integration, community electrification, metering and monitoring." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Minigrid feasibility and design, hybrid power systems, grid integration, community electrification, metering and monitoring.
      </SectionBlock>
      <ReferenceBlock items={[
        'EEPCO rural electrification programs',
        'GIZ and WFP project support'
      ]} />
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Transmission, Distribution & Substation', path: '/power/transmission-distribution' },
        { label: 'Backup Power Systems (DG, Solar & Hybrid)', path: '/power/backup-power' }
      ]} />
    </div>
  </SubPageLayout>
);

export default PowerMinigridSystems;
