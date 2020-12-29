module.exports = {
  root: true,
  extends: [
    'react-app',
    '@lacussoft',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  ignorePatterns: [
    'build/',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'camelcase': ['error', { allow: ['opening_hours', 'open_on_weekends'] }],
    'no-use-before-define': 'off',
    'operator-linebreak': ['error', 'before', { overrides: { '&&': 'after' } }],
    '@typescript-eslint/no-use-before-define': 'off',
  },
}
