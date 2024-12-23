import eslintPluginAstro from "eslint-plugin-astro"
import js from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
  // add more generic rule sets here, such as:
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro, **/*.tsx, **/*.jsx, **/*.ts, **/*.js"],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  }
)
