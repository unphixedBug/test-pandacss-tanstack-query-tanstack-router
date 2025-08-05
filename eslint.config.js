import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist", "**/*.d.ts"]),
  {
    files: ["**/*.{ts,tsx}"],
    ignores: [
      "**/*.d.ts",
      "**/routeTree.gen.ts",
      "**/routeTree.gen.d.ts",
      "**/__root.d.ts",
      "**/index.d.ts",
      "**/country.$countryId.d.ts",
    ],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  // Configuration spécifique pour les fichiers générés (si vous voulez les linter)
  {
    files: ["**/*.d.ts", "**/routeTree.gen.ts", "**/routeTree.gen.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-types": "off",
    },
  },
]);
