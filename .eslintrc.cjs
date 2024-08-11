module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // if you're using TypeScript
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint", // if you're using TypeScript
  ],
  rules: {
    // Add or override any rules you want here
    "react/react-in-jsx-scope": "off", // Example: turn off this rule if using React 17+
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
};
