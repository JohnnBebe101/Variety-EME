import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, RelatedServices, PageCtaBar } from '../helpers';

const TelecomTowerCivilWorks = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Telecommunications" title="Tower & Civil Works" description="Greenfield tower construction, rooftop installations, tower reinforcement, civil site preparation, foundation works, right-of-way management." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Greenfield tower construction, rooftop installations, tower reinforcement, civil site preparation, foundation works, right-of-way management.
      </SectionBlock>
      <ReferenceBlock items={['400KV transmission tower foundations and erection (KEC International).']} />
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
        { label: 'Fiber Optics', path: '/telecommunications/fiber-optics' },
        { label: 'Transmission, Distribution & Substation', path: '/power/transmission-distribution' }
      ]} />
    </div>
  </SubPageLayout>
);

export default TelecomTowerCivilWorks;


