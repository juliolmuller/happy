import dotenv from 'dotenv-flow'

const config = dotenv.config({ purge_dotenv: true })

if (config.error) {
  throw config.error
}

export default {
  expo: {
    name: 'Happy',
    version: '1.1.0',
    orientation: 'portrait',
    icon: './src/images/icon.png',
    splash: {
      backgroundColor: '#15c3d6',
      image: './src/images/splash.png',
      resizeMode: 'cover',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './src/images/favicon.png',
    },
    extra: {
      API_URL: process.env.API_URL,
    },
  },
}
