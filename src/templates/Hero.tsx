import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
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
            {'The simplest way to get started with your\n'}
            <span className="text-primary-500">home EV charging station</span>
          </>
        }
        description="Get started to charge your world from your finger tips."
        button={
          <Link href="/">
            <a>
              <Button xl secondary>
                Join the list
              </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
