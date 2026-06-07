import anyConfig from 'eslint-config-any';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...anyConfig.react,
  {
    settings: {
      'import/ignore': ['react-native', '@react-navigation/native'],
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      camelcase: [
        'error',
        {
          allow: ['opening_hours', 'open_on_weekends'],
        },
      ],
    },
  },
]);
