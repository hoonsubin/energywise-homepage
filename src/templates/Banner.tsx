import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => {
  const { t } = useTranslation('common');

  return (
    <Section>
      <CTABanner
        title={t('banner.title')}
        subtitle={t('banner.description')}
        button={
          <Link href="/">
            <a>
              <Button>{t('banner.button')}</Button>
            </a>
          </Link>
        }
      />
    </Section>
  );
};

export { Banner };
