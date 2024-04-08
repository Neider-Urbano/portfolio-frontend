import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./index.css";
import ThemeProvider from "./providers/theme/ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <I18nextProvider i18n={i18n} defaultNS={"translation"}>
        <BrowserRouter>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
              <ThemeProvider>
                <ThemeSwitcher />
              </ThemeProvider>
            </NextThemesProvider>
          </NextUIProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);
