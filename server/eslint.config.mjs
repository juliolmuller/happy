import anyConfig from 'eslint-config-any';

export default [
  ...anyConfig.node,
  {
    files: ['**/*.{test,spec}.*'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    rules: {
      camelcase: [
        'error',
        {
          allow: ['purge_dotenv', 'opening_hours', 'open_on_weekends', 'orphanage_id'],
        },
      ],
    },
  },
];
