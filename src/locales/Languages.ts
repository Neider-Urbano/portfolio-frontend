export type LanguageValue = "es" | "en" | "pt";

export type LanguageLabel = "Español" | "Ingles" | "Portugal";

export type LanguageStatus = "active" | "paused";

export type Language = {
  label: LanguageLabel;
  value: LanguageValue;
  status: LanguageStatus;
  avatar: string;
};

export const Languages: Array<Language> = [
  {
    label: "Español",
    value: "es",
    status: "active",
    avatar: "https://flagcdn.com/es.svg",
  },
  {
    label: "Ingles",
    value: "en",
    status: "paused",
    avatar: "https://flagcdn.com/us.svg",
  },
  {
    label: "Portugal",
    value: "pt",
    status: "active",
    avatar: "https://flagcdn.com/pt.svg",
  },
];
