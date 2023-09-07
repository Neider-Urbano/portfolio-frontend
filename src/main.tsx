import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./index.css";
import ThemeProvider from "./providers/theme/ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>
);
