import en from "../assets/translations/en/translation.json";
import es from "../assets/translations/es/translation.json";
import pt from "../assets/translations/pt/translation.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  pt: {
    translation: pt,
  },
} as const;

export default resources;
