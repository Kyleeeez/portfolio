const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;

const LINE_WIDTH = 120; // Uses the IntelliJ's default

module.exports = {
  extends: [require.resolve('eslint-config-airbnb'), require.resolve('eslint-config-prettier')],
  ignorePatterns: ['*.d.ts'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    linkComponents: [
      'Hyperlink',
      { name: 'Link', linkAttribute: 'href' },
      { name: 'StyledLink', linkAttribute: 'href' },
    ],
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'arrow-parens': ['error', 'always'], // Easier refactors
    'import/prefer-default-export': 'off', // Easier refactors
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-no-target-blank': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'always',
        printWidth: LINE_WIDTH,
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        // Allow arrow functions for named components
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
        unnamedComponents: 'function-expression',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: Object.assign(typescriptEslintRecommended.rules, {
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
        'react/prop-types': 'off',
        'react/jsx-filename-extension': ['off', { extensions: ['.tsx'] }],
        'no-useless-constructor': 'off', // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#rule-changes
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react/react-in-jsx-scope': 'off', // Not needed since react 17
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
      }),
    },
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
};
