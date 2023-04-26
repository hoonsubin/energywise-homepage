import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import '../styles/global.css';

const EnergywiseHomepage = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(EnergywiseHomepage);
