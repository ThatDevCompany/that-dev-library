module.exports = {
  extends: [require.resolve("./react.js")],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-types": "off",
    "react/no-did-update-set-state": "warn",
    "react/no-did-mount-set-state": "warn",
    "react/no-this-in-sfc": "warn",
    "react/no-unsafe": "off", // REALLY WANT THIS TO ERROR EVENTUALLY
    "react/prefer-stateless-function": "off", // REALLY WANT THIS TO WARN EVENTUALLY
    "react/no-will-update-set-state": "warn",
  },
};
