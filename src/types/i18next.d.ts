/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
// place it where you store your types
// import all namespaces for default language only
import common from '../public/locales/en/common.json';
import footer from '../public/locales/en/footer.json';

export interface Resources {
  common: typeof common;
  footer: typeof footer;
  // as many as files you have
}
