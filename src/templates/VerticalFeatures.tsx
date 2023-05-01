import { useTranslation } from 'next-i18next';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {/* Note: we need to add `|| ''` at the end because of the the optional types */}
      <Section
        title={t('features.section-head.title') || ''}
        description={t('features.section-head.description') || ''}
      >
        <VerticalFeatureRow
          title={t('features.feature1.title')}
          description={t('features.feature1.description')}
          image="/assets/images/mobile-mockup.png"
          imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
          title={t('features.feature2.title')}
          description={t('features.feature2.description')}
          image="/assets/images/mobile-mockup2.png"
          imageAlt="Second feature alt text"
          reverse
        />
        <VerticalFeatureRow
          title={t('features.feature3.title')}
          description={t('features.feature3.description')}
          image="/assets/images/feature2.png"
          imageAlt="Third feature alt text"
        />
        <VerticalFeatureRow
          title={t('features.feature4.title')}
          description={t('features.feature4.description')}
          image="/assets/images/feature3.png"
          imageAlt="Forth feature alt text"
          reverse
        />
      </Section>
    </>
  );
};

export { VerticalFeatures };
