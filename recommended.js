module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    require.resolve("./typescript.js"),
    // 'plugin:import/typescript', needs quite a bit of work because we are mixing default and normal imports
  ],
  rules: {
    // eslint
    "no-console": "warn",
    "guard-for-in": "warn",
    eqeqeq: "error",
    "no-else-return": "warn",
    "no-extra-bind": "error",
    "no-sequences": "warn",
    "no-throw-literal": "error",
    yoda: [
      "error",
      "never",
      {
        onlyEquality: true,
      },
    ],
    "max-depth": ["error", 4],
    "max-len": ["error", 120],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["warn", 4],
    "no-lonely-if": "error",
    "no-warning-comments": "warn",
    "no-var": "error",
    "prefer-arrow-callback": "warn",
    "prefer-template": "warn",
    "one-var-declaration-per-line": ["error", "always"],
    "one-var": ["error", "never"],
    "accessor-pairs": [
      "error",
      {
        setWithoutGet: true,
        getWithoutSet: false,
      },
    ],
    "import/first": "warn",

    // typescript
    "@typescript-eslint/array-type": ["warn", { default: "array" }],
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/consistent-type-assertions": [
      1,
      { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error"],
  },
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "max-len": "off",
      },
    },
  ],
};
