import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Base } from '../templates/Base';

const Index = () => <Base />;

// add custom props if needed
type Props = {};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? 'en',
      ['common', 'footer'],
      null,
      ['en', 'no']
    )),
  },
});

export default Index;
