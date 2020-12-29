module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    '@lacussoft',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
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
    'camelcase': ['error', { allow: ['purge_dotenv', 'opening_hours', 'open_on_weekends', 'orphanage_id'] }],
    'arrow-body-style': 'off',
    'no-console': 'off',
  },
}
