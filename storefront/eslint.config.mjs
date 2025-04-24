import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "import/no-extraneous-dependencies": [
        "warn",
        {
          packageDir: ".",
          devDependencies: [
            "**/jest.*",
            "**/*.test.[jt]s?(x)",
            "**/*.spec.[jt]s?(x)",
            "**/*.cy.[jt]s?(x)",
            "**/*.stories.[jt]s?(x)",
            "**/test-libs/**",
            "**/__mocks__/**",
            "**/cypress.*",
            "**/cypress/**",
          ],
        },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "unused-imports/no-unused-imports": "error",
      "import/prefer-default-export": "warn",
      "react/forbid-prop-types": "warn",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "max-len": [
        "warn",
        {
          code: 160,
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "no-console": [
        "error",
        {
          allow: ["warn", "error", "time", "info", "table", "timeEnd"],
        },
      ],
      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],
      "consistent-return": [
        "warn",
        {
          treatUndefinedAsUnspecified: false,
        },
      ],
      "react/no-array-index-key": ["warn"],
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link", "a"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      "no-eval": "warn",
      "class-methods-use-this": [
        "error",
        {
          enforceForClassFields: false,
        },
      ],
      "no-useless-escape": "warn",
      camelcase: "warn",
      "react/no-unknown-property": "warn",
      /* Custom rules */
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "moment",
              message: "Instead of using moment use native methods.",
            },
          ],
          patterns: [
            {
              group: ["react-toastify", "toast", "@utils/toast"],
              message: "Instead of using toast use useToast() from `@hooks/useToast`",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
