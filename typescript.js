module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// ecmaVersion: 2018,
		// sourceType: 'module',
		// ecmaFeatures: {
		// 	jsx: true,
		// },
	},
	extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
	rules: {
		'no-warning-comments': 'warn',
		'prefer-const': 'off',
		'prefer-spread': 'warn',
		'prefer-rest-params': 'warn',

		'import/no-unused-modules': 'error',
		'import/no-unresolved': 'off', // SJ: Not sure why this has stopped working
		'import/export': 'error',
		'import/no-duplicates': 'warn',

		// typescript does not need these
		'import/named': 'off',
		'import/namespace': 'off',
		'import/default': 'off',
		'import/no-named-as-default-member': 'off',

		// I18n
		'i18next/no-literal-string': [
			'off',
			{
				ignoreAttribute: ['idField', 'valueField'],
				ignoreProperty: [
					'key',
					'tablename',
					'defaultValue',
					'name',
					'linkTableName',
					'linkTableFKey',
					'linkTableKey',
					'queue',
					'group',
				],
				ignoreCallee: [
					'moment.locale',
					'momentTz.locale',
					'log.error',
					'log.info',
					'log.warn',
					'Assert.isDefined',
					'Assert.is',
					'format',
					'i18n.m',
					'i18n.t',
				],
			},
		],

		'@typescript-eslint/class-name-casing': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/default-param-last': ['error'],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars-experimental': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
	plugins: ['@typescript-eslint', 'import', 'i18next'],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	overrides: [
		{
			files: ['*.d.ts'],
			rules: {
				'max-len': 'off',
			},
		},
	],
}
