import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Detector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import resources from "./@types/resources";

i18n
  .use(Backend)
  .use(Detector)
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: "en",
    supportedLngs: ["es", "en", "pt"],
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "portfolio-LNG",
    },
  });

export default i18n;
