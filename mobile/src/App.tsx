import React from 'react'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import Navigation from './navigation'
import {
  Nunito_600SemiBold as Nunito600,
  Nunito_700Bold as Nunito700,
  Nunito_800ExtraBold as Nunito800,
} from '@expo-google-fonts/nunito'

function App() {
  const [fontsLoaded] = useFonts({ Nunito600, Nunito700, Nunito800 })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  )
}

export default App
