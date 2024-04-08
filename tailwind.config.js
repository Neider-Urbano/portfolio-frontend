/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

const bgLightPrimary = "#FFFFFF";
const textBlackLight = "#11141D";
const bgDarkPrimary = "#252338";
const textWhiteDark = "#FFFFFF";
const extendColorSecondary = {
  950: "#B550F8",
};
const extendColorOrange = {
  950: "#EF6C57",
};
const extendColorYellow = {
  950: "#F7CC47",
};
const extendColorGray = {
  950: "#F6F6F6",
  960: "#B8B7BF",
  970: "#646464",
  980: "#37373F",
};
const extendColorNeutral = {
  950: "#312F44",
  960: bgDarkPrimary,
  970: textBlackLight,
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    extend: {
      colors: {
        secondary: extendColorSecondary,
        orange: extendColorOrange,
        yellow: extendColorYellow,
        gray: extendColorGray,
        neutral: extendColorNeutral,
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: bgLightPrimary,
            foreground: textBlackLight,
          },
        },
        dark: {
          colors: {
            background: bgDarkPrimary,
            foreground: textWhiteDark,
          },
        },
      },
    }),
  ],
};
