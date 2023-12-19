// eslintConfig.js
import eslintRecommended from "eslint:recommended";
import reactRecommended from "plugin:react/recommended";
import reactHooksRecommended from "plugin:react-hooks/recommended";

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": "off",
  },
};
