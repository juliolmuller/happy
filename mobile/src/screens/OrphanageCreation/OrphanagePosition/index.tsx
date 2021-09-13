import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import mapMarker from '~/assets/img/map-marker.png'
import styles from './styles'

function OrphanagePosition() {
  const { navigate } = useNavigation()
  const [position, setPosition] = React.useState({
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

export default OrphanagePosition
