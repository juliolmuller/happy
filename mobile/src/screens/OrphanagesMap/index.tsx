import React from 'react'
import { Text, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '~/services/api'
import mapMarker from '~/assets/img/map-marker.png'
import styles from './styles'

function OrphanagesMap() {
  const { navigate } = useNavigation()
  const [orphanages, setOrphanages] = React.useState<Orphanage[]>([])

  const fetchOrphanages = async () => {
    try {
      const { data } = await api.get('/orphanages')

      setOrphanages(data)
    } catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      alert(err.message)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchOrphanages()
    }, []),
  )

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -25.4321773,
          longitude: -49.2884007,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
      >
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            coordinate={{ latitude: orphanage.latitude, longitude: orphanage.longitude }}
            calloutAnchor={{ x: 2.7, y: 0.8 }}
          >
            <Callout tooltip onPress={() => navigate('OrphanageDetails', orphanage)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orfanatos encontrados
        </Text>
        <RectButton style={styles.footerButton} onPress={() => navigate('OrphanagePosition')}>
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  )
}

export default OrphanagesMap
