import { SubPageLayout } from '../../SubPageLayout';
import { PageProps } from '../PageProps';
import { SectionBlock, RelatedServices, PageCtaBar } from '../helpers';

const AcademyOverview = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate }: PageProps) => (
  <SubPageLayout onBack={onBack} tag="Academy & Managed Services" title="Academy Overview" description="Variety EME Academy is Ethiopia's practitioner-led engineering and ICT training center, delivering internationally aligned certifications backed by 20+ years of field execution experience." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={onNavigate}>
    <div className="space-y-10">
       <SectionBlock title="Overview">
         Variety EME Academy is Ethiopia's practitioner-led engineering and ICT training center, delivering internationally aligned certifications backed by 20+ years of field execution experience. Our training is delivered by engineers and technicians who have worked on live infrastructure projects across Ethiopia and East Africa. Primary focus: FOA-standard fiber optics certification programs. Secondary focus: Industrial Automation training through our Center of Excellence.
       </SectionBlock>
      <PageCtaBar />
       <RelatedServices links={[
         { label: 'Fiber Optics Certification Programs (CFOT / CFOS)', path: '/academy/fiber-optics-certification' },
         { label: 'Industrial Automation Training', path: '/academy/telecom-automation-training' },
         { label: 'Corporate & Institutional Training Partnerships', path: '/academy/institutional-partnerships' }
       ]} />
    </div>
  </SubPageLayout>
);

export default AcademyOverview;
