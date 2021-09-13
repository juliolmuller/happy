import React from 'react'
import { Image, Linking, ScrollView, Text, View } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { Feather, FontAwesome } from '@expo/vector-icons'
import mapMarker from '~/assets/img/map-marker.png'
import styles from './styles'

function OrphanageDetails() {
  const orphanage = useRoute().params as Orphanage

  function handleOpenGoogleMaps() {
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

export default OrphanageDetails
