import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  { ignores: ["dist/", ".astro/"] },
  ...tseslint.configs.strict,
  ...eslintPluginAstro.configs.recommended,
];
