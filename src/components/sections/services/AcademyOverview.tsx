import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, RelatedServices, PageCtaBar } from '../helpers';

const AcademyOverview = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Academy & Managed Services" title="Academy Overview" description="Variety EME Academy is Ethiopia's practitioner-led engineering and ICT training center, delivering internationally aligned certifications backed by 20+ years of field execution experience." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
       <SectionBlock title="Overview">
         Variety EME Academy is Ethiopia's practitioner-led engineering and ICT training center, delivering internationally aligned certifications backed by 20+ years of field execution experience. Our training is delivered by engineers and technicians who have worked on live infrastructure projects across Ethiopia and East Africa. Primary focus: FOA-standard fiber optics certification programs. Secondary focus: Industrial Automation training through our Center of Excellence.
       </SectionBlock>
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
       <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
         { label: 'Fiber Optics Certification Programs (CFOT / CFOS)', path: '/academy/fiber-optics-certification' },
         { label: 'Industrial Automation Training', path: '/academy/telecom-automation-training' },
         { label: 'Corporate & Institutional Training Partnerships', path: '/academy/institutional-partnerships' }
       ]} />
    </div>
  </SubPageLayout>
);

export default AcademyOverview;


