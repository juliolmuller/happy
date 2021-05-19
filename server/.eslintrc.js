module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'lacussoft',
    'lacussoft/typescript',
  ],
  ignorePatterns: [
    'build/',
  ],
  rules: {
    'camelcase': ['error', {
      allow: [
        'purge_dotenv',
        'opening_hours',
        'open_on_weekends',
        'orphanage_id',
      ],
    }],
    'no-console': 'off',
  },
}
