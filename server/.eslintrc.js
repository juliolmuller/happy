module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@lacussoft',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    'camelcase': ['error', { allow: ['purge_dotenv', 'opening_hours', 'open_on_weekends'] }],
    'arrow-body-style': 'off',
    'no-console': 'off',
  },
}
