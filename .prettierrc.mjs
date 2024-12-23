// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  printWidth: 120,
  trailingComma: "es5",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
