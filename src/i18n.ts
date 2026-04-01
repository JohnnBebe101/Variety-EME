
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en', // Force English
    debug: false,
    ns: ['translation', 'common', 'hero'],
    defaultNS: 'translation',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // Not needed for React
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
