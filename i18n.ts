import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./trasnslations/english.json";
import hebrew from "./trasnslations/hebrew.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: english,
  },
  he: {
    translation: hebrew,
  },
};

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    supportedLngs: ["he", "en"],
    fallbackLng: "he",
    resources,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
