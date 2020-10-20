module.exports = {
  root: true,
  extends: [
    '@lacussoft/standard',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
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
    'camelcase': ['error', {allow: ['opening_hours', 'open_on_weekends']}],
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { ImportDeclaration: { multiline: true, minProperties: 9 } }],
    'operator-linebreak': ['error', 'before', { 'overrides': { '&&': 'after' } }],
    '@typescript-eslint/no-use-before-define': 'off',
  },
}
