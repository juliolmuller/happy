/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair, camelcase */
import dotenv from 'dotenv-flow'
import { type ExpoConfig } from 'expo/config';
import npmConfig from './package.json' with { type: 'json' }

const config = dotenv.config({ purge_dotenv: true })

if (config.error) {
  throw config.error
}

export default {
  name: 'Happy',
  slug: 'happy',
  scheme: 'happy',
  version: npmConfig.version,
  owner: 'juliolmuller',
  orientation: 'portrait',
  icon: './src/assets/img/favicon.png',
  userInterfaceStyle: 'light',
  assetBundlePatterns: ['**/*'],
  plugins: [
    'expo-font',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#15c3d6',
        image: './src/assets/img/splash.png',
        resizeMode: 'contain',
        enableFullScreenImage_legacy: true,
      },
    ],
    [
      'expo-build-properties',
      {
        android: {
          usesCleartextTraffic: true,
        },
      },
    ],
  ],
  extra: {
    ...config.parsed,
    eas: {
      projectId: 'b4eb910c-e6bd-4486-a296-b808b386596f',
    },
  },
  android: {
    package: 'com.juliolmuller.happy',
    adaptiveIcon: {
      foregroundImage: './src/assets/img/favicon.png',
      backgroundColor: '#ffffff',
    },
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'juliolmuller.happy',
  },
  web: {
    favicon: './src/assets/img/favicon.png',
  },
} satisfies ExpoConfig;
