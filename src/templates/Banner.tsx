import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="ENERGYWISE - EASY.TRUSTWORTHY.RELIABLE."
      subtitle="Stay up to date and be the first to use energywise."
      button={
        <Link href="mailto:team@energywise.solutions?subject=I'm interested in energywise&body=I would like to learn more about energywise, please keep me updated">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
