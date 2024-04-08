import React from "react";
import { ThemeContext, ThemeHook } from "./ThemeProvider";

export const useTheme = (): ThemeHook => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeContext`);
  }
  return context;
};
