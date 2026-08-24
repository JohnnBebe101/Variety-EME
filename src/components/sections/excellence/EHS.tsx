import { useTranslation } from 'react-i18next';
import { SubPageLayout } from '../../SubPageLayout';
import { UI_CLASSES } from '../../../data/constants';
import { PageProps } from '../PageProps';

const EHS = ({ onBack, heroImage, gradientFallback }: PageProps) => {
  const { t } = useTranslation();
  return (
    <SubPageLayout onBack={onBack} tag={t('excellence.ehs.tag')} title={t('excellence.ehs.title')} description={t('excellence.ehs.description')} color="text-brand-accent" heroImage={heroImage} gradientFallback={gradientFallback}>
       <div className="grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="p-10 bg-brand-surface rounded-[2rem] border border-white/5 shadow-sm hover:border-brand-accent/20 transition-all">
              <h3 className={UI_CLASSES.cardTitle + " text-brand-foreground mb-3"}>{t('excellence.ehs.pillar_title')} {i+1}</h3><p className="text-brand-muted font-medium text-xs">{t('excellence.ehs.pillar_desc')}</p>
            </div>
          ))}
       </div>
    </SubPageLayout>
  );
};

export default EHS;
