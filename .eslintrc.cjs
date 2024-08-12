// module.exports = {
//   env: {
//     browser: true,
//     node: true,
//     es2021: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended", // if you're using TypeScript
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: [
//     "react",
//     "@typescript-eslint", // if you're using TypeScript
//   ],
//   rules: {
//     // Add or override any rules you want here
//     "react/react-in-jsx-scope": "off", // Example: turn off this rule if using React 17+
//   },
//   settings: {
//     react: {
//       version: "detect", // Automatically detect the react version
//     },
//   },
// };
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
