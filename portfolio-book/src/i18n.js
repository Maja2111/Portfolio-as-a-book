import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationDE from './locales/de.json';
import translationEN from './locales/en.json';

const resources = {
  de: { translation: translationDE },
  en: { translation: translationEN }
};

i18n
  .use(LanguageDetector) // Erkennt automatisch die Browsersprache
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React schützt bereits vor XSS
    }
  });

export default i18n;