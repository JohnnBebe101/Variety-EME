import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const TelecomTowerCivilWorks = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Telecommunications" title="Tower & Civil Works" description="Greenfield tower construction, rooftop installations, tower reinforcement, civil site preparation, foundation works, right-of-way management." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Greenfield tower construction, rooftop installations, tower reinforcement, civil site preparation, foundation works, right-of-way management.
      </SectionBlock>
      <ReferenceBlock items={['400KV transmission tower foundations and erection (KEC International).']} />
      <PageCtaBar />
      <RelatedServices links={[
        { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
        { label: 'Fiber Optics', path: '/telecommunications/fiber-optics' },
        { label: 'Transmission, Distribution & Substation', path: '/power/transmission-distribution' }
      ]} />
    </div>
  </SubPageLayout>
);

export default TelecomTowerCivilWorks;
