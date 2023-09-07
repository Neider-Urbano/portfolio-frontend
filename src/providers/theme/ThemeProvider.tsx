import React, { useState } from "react";
import { useTheme } from "next-themes";

export type Theme = "dark" | "light" | undefined;
export type ThemeHook = {
  theme: Theme;
  setTheme: () => void;
  isSelected: boolean;
};

export const ThemeContext = React.createContext<ThemeHook | null>(null);

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = (
  props
) => {
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState<boolean>(theme === "dark");

  const value = React.useMemo<ThemeHook>(
    () => ({
      theme: isSelected ? "light" : "dark",
      setTheme: () => {
        setTheme(isSelected ? "light" : "dark");
        setIsSelected(!isSelected);
      },
      isSelected,
    }),
    [theme, setTheme, isSelected]
  );

  return <ThemeContext.Provider value={value} {...props} />;
};

export default ThemeProvider;
