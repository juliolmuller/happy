import React, { FC } from 'react'
import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { Feather, FontAwesome } from '@expo/vector-icons'
import mapMarker from '../images/map-marker.png'

interface Orphanage {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  photos: Array<{
    url: string
  }>
}

const OrphanageDetails: FC = () => {
  const route = useRoute()
  const orphanage = route.params as Orphanage

  const handleOpenGoogleMaps = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {orphanage.photos.map((photo, index) => (
            <Image key={index} style={styles.image} source={{ uri: photo.url }} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{orphanage.name}</Text>
        {orphanage.about.split('\n').map((paragraph, index) => (
          <Text key={index} style={styles.description}>{paragraph}</Text>
        ))}

        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              icon={mapMarker}
              coordinate={{ latitude: orphanage.latitude, longitude: orphanage.longitude }}
            />
          </MapView>

          <TouchableOpacity style={styles.routesContainer} onPress={handleOpenGoogleMaps}>
            <Text style={styles.routesText}>
              Ver rotas no Google Maps
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <Text style={styles.title}>Instruções para visita</Text>
        {orphanage.instructions.split('\n').map((paragraph, index) => (
          <Text key={index} style={styles.description}>{paragraph}</Text>
        ))}

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2ab5d1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>
              Segunda à Sexta {orphanage.opening_hours}
            </Text>
          </View>
          {orphanage.open_on_weekends ? (
            <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
              <Feather name="info" size={40} color="#39cc83" />
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>Atendemos fim de semana</Text>
            </View>
          ) : (
            <View style={[styles.scheduleItem, styles.scheduleItemRed]}>
              <Feather name="info" size={40} color="#ff669d" />
              <Text style={[styles.scheduleText, styles.scheduleTextRed]}>Não atendemos fim de semana</Text>
            </View>
          )}
        </View>

        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#fff" />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: '#4d6f80',
    fontSize: 30,
    fontFamily: 'Nunito700',
  },

  description: {
    fontFamily: 'Nunito600',
    color: '#5c8599',
    lineHeight: 24,
    marginTop: 16,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#b3dae2',
    marginTop: 40,
    backgroundColor: '#e6f7fb',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routesText: {
    fontFamily: 'Nunito700',
    color: '#0089a5',
  },

  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#d3e2e6',
    marginVertical: 40,
  },

  scheduleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  scheduleItem: {
    width: '48%',
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: '#e6f7fb',
    borderWidth: 1,
    borderColor: '#b3dae2',
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: '#edfff6',
    borderWidth: 1,
    borderColor: '#a1e9c5',
    borderRadius: 20,
  },

  scheduleItemRed: {
    backgroundColor: '#fef6f9',
    borderWidth: 1,
    borderColor: '#ffbcd4',
    borderRadius: 20,
  },

  scheduleText: {
    fontFamily: 'Nunito600',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  scheduleTextBlue: {
    color: '#5c8599',
  },

  scheduleTextGreen: {
    color: '#37c77f',
  },

  scheduleTextRed: {
    color: '#ff669d',
  },

  contactButton: {
    backgroundColor: '#3cdc8c',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 40,
  },

  contactButtonText: {
    fontFamily: 'Nunito800',
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
  },
})

export default OrphanageDetails
