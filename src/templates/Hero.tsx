import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <Background color="bg-primary-800">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/hoonsubin/energywise-homepage">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {t('hero.first-line')}
              {'\n'}
              <span className="text-primary-500">{t('hero.second-line')}</span>
            </>
          }
          description={t('hero.slogan')}
          button={
            <Link href="mailto:team@energywise.solutions?subject=I'm interested in energywise&body=I would like to learn more about energywise, please keep me updated">
              <a>
                <Button xl secondary>
                  {t('hero.button')}
                </Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
