import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="energywise"
    description="Energywise provides personalized solutions and expert guidance for all your EV charging needs."
  >
    <VerticalFeatureRow
      title="Charging station assessment"
      description="This survey will ask the customer questions about their daily driving habits, the type of EV they own, their home's electrical setup, and other relevant factors to determine the most suitable charging options for them."
      image="/assets/images/mobile-mockup.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Charging station directory"
      description="energywise will provide the customer with a list of charging station hardware and software options that best meet their needs, along with pricing information and installation options."
      image="/assets/images/mobile-mockup2.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Technician directory"
      description="By simply entering their location, customers can access a list of reliable technicians in their area, complete with contact information and customer reviews."
      image="/assets/images/feature2.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="About us"
      description="We, a group of students from Hochschule Müchen, created energywise to be your partner in your journey towards sustainable transportation by getting to know your needs and offering persosonalized information and guidance."
      image="/assets/images/feature3.png"
      imageAlt="Forth feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
