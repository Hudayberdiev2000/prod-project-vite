import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from "eslint-plugin-i18next"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: "./tsconfig.json",
      ecmaFeatures: {
        jsx: true,
      }
    },
    globals: globals.browser
  } },

  tseslint.configs.recommended,
  {
  ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-indent": [2,2],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    // Add React Hooks plugin configuration
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      i18next
    },
    rules: {
      "i18next/no-literal-string": [
          "warn",
        {
          markupOnly: true,
          ignoreAttribute: ["data-testid", "to"]
        }
      ]
    }
  }
]);