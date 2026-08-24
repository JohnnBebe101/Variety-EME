import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '../../SubPageLayout';
import { UI_CLASSES } from '../../../data/constants';
import { PageProps } from '../PageProps';
import { TowerControl as Tower, Radio, Layers } from 'lucide-react';

const TelecomOverview = ({ onBack, heroImage, gradientFallback }: PageProps) => {
  const { t } = useTranslation();
  const items = t('infrastructure.telecom.items', { returnObjects: true }) as any[];
  const safeItems = Array.isArray(items) ? items : [];
  const icons = [Tower, Radio, Layers];
  return (
    <SubPageLayout onBack={onBack} tag={t('infrastructure.telecom.tag')} title={t('infrastructure.telecom.title')} description={t('infrastructure.telecom.description')} heroImage={heroImage} gradientFallback={gradientFallback}>
      <div className="grid lg:grid-cols-3 gap-8">
        {safeItems.map((item, i) => {
          const Icon = icons[i];
          return (
            <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all"><Icon size={36} className="text-brand-accent mb-6" /><h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{item.t}</h3><p className="text-brand-muted text-xs font-medium leading-relaxed">{item.d}</p></div>
          );
        })}
      </div>
    </SubPageLayout>
  );
};

export default TelecomOverview;
