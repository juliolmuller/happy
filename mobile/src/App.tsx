import React, { ReactElement } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import mapMarker from './images/map-marker.png'
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import {
  Nunito_600SemiBold as Nunito600,
  Nunito_700Bold as Nunito700,
  Nunito_800ExtraBold as Nunito800,
} from '@expo-google-fonts/nunito'

function App(): ReactElement | null {
  const [fontsLoaded] = useFonts({ Nunito600, Nunito700, Nunito800 })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -25.4321773,
          longitude: -49.2884007,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{ latitude: -25.4321773, longitude: -49.2884007 }}
          calloutAnchor={{ x: 2.7, y: 0.8 }}
        >
          <Callout tooltip onPress={() => {}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar dos Boys</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          2 orfanatos encontrados
        </Text>
        <TouchableOpacity style={styles.footerButton} onPress={() => {}}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    fontFamily: 'Nunito700',
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    height: 56,
    position: 'absolute',
    right: 24,
    left: 24,
    bottom: 32,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito700',
    color: '#8fa7b3',
  },

  footerButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
