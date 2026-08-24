import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const PowerTransmissionDistribution = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Power" title="Transmission, Distribution & Substation" description="HV/MV transmission line construction, substation design and build, distribution network rollout, transformer installation and commissioning, line stringing and pole erection." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        HV/MV transmission line construction, substation design and build, distribution network rollout, transformer installation and commissioning, line stringing and pole erection.
      </SectionBlock>
      <ReferenceBlock items={[
        '400KV transmission tower foundations and erection (KEC International)',
        'Three EEPCO rural electrification programs covering 67 towns total (28 towns, 10 towns, 29 towns) — survey, poles, stringing, transformer work and commissioning'
      ]} />
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Minigrid Systems', path: '/power/minigrid-systems' },
        { label: 'Building Electromechanical Works', path: '/power/building-electromechanical' },
        { label: 'Tower & Civil Works', path: '/telecommunications/tower-civil-works' }
      ]} />
    </div>
  </SubPageLayout>
);

export default PowerTransmissionDistribution;
