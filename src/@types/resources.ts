import en from "/translations/en/translation.json?url";
import es from "/translations/es/translation.json?url";
import pt from "/translations/pt/translation.json?url";

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
