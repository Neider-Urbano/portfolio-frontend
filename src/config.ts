export const config = {
  VITE_APP_ENV: (import.meta.env.VITE_APP_ENV as string) || "development",
  VITE_ADA_ENV: (import.meta.env.VITE_ADA_ENV as string) || "main",
};
