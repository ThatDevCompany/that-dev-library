module.exports = {
  extends: [require.resolve("./recommended.js")],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "off",
    "@typescript-eslint/ban-types": "off",
    "no-console": "warn",
  },
};
