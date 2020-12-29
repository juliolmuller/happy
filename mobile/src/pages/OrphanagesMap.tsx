import React, { FC, useCallback, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../services/api'
import mapMarker from '../images/map-marker.png'

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

const OrphanagesMap: FC = () => {
  const { navigate } = useNavigation()
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  const fetchOrphanages = async () => {
    try {
      const { data } = await api.get('/orphanages')
      setOrphanages(data)
    } catch (err) {
      alert(err.message)
    }
  }

  useFocusEffect(
    useCallback(() => {
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

export default OrphanagesMap
