import { Locales, type IntlayerConfig } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.GERMAN, Locales.ENGLISH],
    defaultLocale: Locales.GERMAN,
  },
};

export default config;