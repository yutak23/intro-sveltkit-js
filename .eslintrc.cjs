module.exports = {
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	root: true,
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			extends: ['plugin:svelte/recommended'],
			rules: {}
		}
	],
	rules: { 'import/no-extraneous-dependencies': 'off', 'import/no-unresolved': 'warn' }
};
