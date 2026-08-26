import { SubPageLayout } from '../../SubPageLayout';
import { ServicePageProps } from '../PageProps';
import { SectionBlock, RelatedServices, PageCtaBar } from '../helpers';

const PowerBuildingElectromechanical = ({ onBack, heroImage, gradientFallback, currentPath, onNavigate, onParentOverview }: ServicePageProps) => (
  <SubPageLayout onBack={onBack} onParentOverview={onParentOverview} tag="Power" title="Building Electromechanical Works" description="Industrial electrical installations, building wiring and fit-out, panel board and switchgear installation, earthing and lightning protection systems." heroImage={heroImage} gradientFallback={gradientFallback} currentPath={currentPath} onNavigate={(path) => onNavigate('home', undefined, path)}>
    <div className="space-y-10">
      <SectionBlock title="Capability Detail">
        Industrial electrical installations, building wiring and fit-out, panel board and switchgear installation, earthing and lightning protection systems.
      </SectionBlock>
      <PageCtaBar onNavigate={(path) => onNavigate('home', undefined, path)} />
      <div className="text-brand-muted text-sm leading-relaxed bg-brand-surface border border-white/10 rounded-[2rem] p-6">
        Specialist vertical transport systems (elevators and escalators) are available through our VTS subsidiary partner.
      </div>
      <RelatedServices onNavigate={(path) => onNavigate('home', undefined, path)} links={[
        { label: 'Transmission, Distribution & Substation', path: '/power/transmission-distribution' },
        { label: 'Backup Power Systems (DG, Solar & Hybrid)', path: '/power/backup-power' }
      ]} />
    </div>
  </SubPageLayout>
);

export default PowerBuildingElectromechanical;


