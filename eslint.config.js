import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
import globals from "globals";

export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  },
  { ignores: ["dist", ".astro"] }
];
