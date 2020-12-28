import dotenv from 'dotenv-flow'
import npmConfig from './package.json'

const config = dotenv.config({ purge_dotenv: true })

if (config.error) {
  throw config.error
}

export default {
  expo: {
    name: 'Happy',
    version: npmConfig.version,
    extra: {
      ...config.parsed,
    },
    orientation: 'portrait',
    platforms: ['android', 'ios'],
    icon: './src/images/icon.png',
    splash: {
      backgroundColor: '#15c3d6',
      image: './src/images/splash.png',
      resizeMode: 'cover',
    },
    assetBundlePatterns: [
      '**/*',
    ],
    updates: {
      fallbackToCacheTimeout: 0,
    },
    android: {
      package: 'juliolmuller.happy',
      versionCode: 1,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'juliolmuller.happy',
      buildNumber: '1.0.0',
    },
    web: {
      favicon: './src/images/favicon.png',
    },
  },
}
