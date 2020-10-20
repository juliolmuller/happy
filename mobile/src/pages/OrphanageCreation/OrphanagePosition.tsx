import React, { FC, useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import MapView, { MapEvent, Marker } from 'react-native-maps'
import mapMarker from '../../images/map-marker.png'

const OrphanagePosition: FC = () => {
  const { navigate } = useNavigation()

  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  })

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -25.4321773,
          longitude: -49.2884007,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
        onPress={({ nativeEvent }) => setPosition(nativeEvent.coordinate)}
      >
        {position.latitude !== 0 && position.longitude !== 0 && (
          <Marker icon={mapMarker} coordinate={position} />
        )}
      </MapView>

      {position.latitude !== 0 && position.longitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={() => navigate('OrphanageForm', position)}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito800',
    fontSize: 16,
    color: '#FFF',
  },
})

export default OrphanagePosition
