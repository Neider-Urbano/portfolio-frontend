/* eslint-env node */

module.exports = {
  settings: { react: { version: "detect" } },
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "import", "@typescript-eslint", "jest"],
  rules: {
    "no-console": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "linebreak-style": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-restricted-globals": "off",
    "no-nested-ternary": "off",
    "react/jsx-props-no-spreading": [
      "error",
      {
        custom: "ignore",
      },
    ],
    "react/require-default-props": "off",
    "react/no-unescaped-entities": "off",
    "no-underscore-dangle": ["error", { allow: ["__typename"] }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "property",
        format: null,
        filter: {
          regex: "^__typename$",
          match: false,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
