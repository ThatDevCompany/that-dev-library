module.exports = {
	extends: [require.resolve('./typescript.js')],
	rules: {
		'jsx-a11y/no-autofocus': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': [
			'warn',
			{
				additionalHooks: '(useCallforward)',
			},
		],
		'react/no-did-update-set-state': 'error',
		'react/no-did-mount-set-state': 'error',
		'react/no-this-in-sfc': 'error',
		'react/no-unsafe': 'warn',
		'react/prefer-stateless-function': 'warn',
		'react/no-will-update-set-state': 'error',
		'react/jsx-boolean-value': 'warn',
		'react/jsx-max-depth': ['warn', { max: 8 }],
	},
	plugins: ['react', 'jsx-a11y', 'react-hooks'],
	settings: {
		react: {
			version: 'detect',
		},
	},
}
