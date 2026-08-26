import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, ReferenceBlock, CalloutBox, RelatedServices, PageCtaBar } from '../helpers';

const TelecomFiberOptics = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Telecommunications" title="Fiber Optics" description="Long-haul and metropolitan fiber optic network design, outside plant installation, splicing, termination, OTDR testing and acceptance commissioning." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Long-haul and metropolitan fiber optic network design, outside plant installation, splicing, termination, OTDR testing and acceptance commissioning.
      </SectionBlock>
      <ReferenceBlock items={[
        '66 stations of optical transmission equipment installed and commissioned on three national routes: Addis Ababa–Mekele, Addis Ababa–Gonder, Addis Ababa–Sululta (Huawei / AAICTDA)'
      ]} />
      <CalloutBox>
        <button onClick={() => onNavigate('home', undefined, '/academy/fiber-optics-certification')} className="underline hover:text-brand-accent">Train your team in fiber optics → FOA-certified programs at Variety EME Academy</button>
      </CalloutBox>
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Mobile Telecom Rollout (RAN + Power)', path: '/telecommunications/mobile-rollout' },
        { label: 'Tower & Civil Works', path: '/telecommunications/tower-civil-works' },
        { label: 'Fiber Optics Certification', path: '/academy/fiber-optics-certification' }
      ]} />
    </div>
  </SubPageLayout>
);

export default TelecomFiberOptics;


