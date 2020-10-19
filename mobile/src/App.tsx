import React, { FC } from 'react'
import { useFonts } from 'expo-font'
import Routes from './routes'
import {
  Nunito_600SemiBold as Nunito600,
  Nunito_700Bold as Nunito700,
  Nunito_800ExtraBold as Nunito800,
} from '@expo-google-fonts/nunito'

const App: FC = () => {
  const [fontsLoaded] = useFonts({ Nunito600, Nunito700, Nunito800 })

  return fontsLoaded ? <Routes /> : null
}

export default App
