export type LanguageValue = "es" | "en" | "pt";

export type LanguageLabel = "Es" | "En" | "Pt";

export type LanguageStatus = "active" | "paused";

export type Language = {
  label: LanguageLabel;
  value: LanguageValue;
  status: LanguageStatus;
  avatar: string;
};

export const Languages: Array<Language> = [
  {
    label: "Es",
    value: "es",
    status: "active",
    avatar: "https://flagcdn.com/es.svg",
  },
  {
    label: "En",
    value: "en",
    status: "paused",
    avatar: "https://flagcdn.com/us.svg",
  },
  {
    label: "Pt",
    value: "pt",
    status: "active",
    avatar: "https://flagcdn.com/pt.svg",
  },
];
