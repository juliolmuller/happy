module.exports = {
  root: true,
  extends: [
    'react-app',
    'lacussoft',
    'lacussoft/react',
    'lacussoft/typescript',
  ],
  ignorePatterns: [
    'build/',
  ],
  rules: {
    camelcase: ['error', {
      allow: [
        'opening_hours',
        'open_on_weekends',
      ],
    }],
  },
}
