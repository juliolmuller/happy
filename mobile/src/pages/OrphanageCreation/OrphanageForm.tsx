import React, { FC, useState } from 'react'
import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'

interface OrphanageFormRouteParams {
  latitude: number
  longitude: number
}

const OrphanageForm: FC = () => {
  const { navigate } = useNavigation()
  const { latitude, longitude } = useRoute().params as OrphanageFormRouteParams

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [openOnWeekends, setOpenOnWeekends] = useState(false)
  const [photos, setPhotos] = useState<string[]>([])
  const submissionAllowed = Boolean(name && about && instructions && openingHours && photos.length)

  const handleBrowsePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      alert('Ops! Você precisa fornecer uma foto para cadastra o orfanato.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.cancelled) {
      setPhotos([...photos, result.uri])
    }
  }

  const handleFormSubmit = async () => {
    const formData = new FormData()

    formData.append('latitude', String(latitude))
    formData.append('longitude', String(longitude))
    formData.append('name', name)
    formData.append('about', about)
    formData.append('instructions', instructions)
    formData.append('opening_hours', openingHours)
    formData.append('open_on_weekends', String(openOnWeekends))
    photos.forEach((photo, index) => formData.append('photos', {
      name: `photo-${index}.jpg`,
      type: 'image/jpg',
      uri: photo,
    } as never))

    try {
      await api.post('/orphanages', formData)

      navigate('OrphanagesMap')
    } catch (error) {
      // TODO: display validation errors
      console.error(error, { ...error })
      alert('Falha ao tentar salvar os dados. Tente novamente mais tarde.')
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <Text style={styles.label}>Fotos</Text>
      <View style={styles.selectedPhotosContainer}>
        {photos.map((photo, index) => (
          <Image key={index} style={styles.selectedPhoto} source={{ uri: photo }} />
        ))}
      </View>
      <TouchableOpacity style={styles.photosInput} onPress={handleBrowsePhoto}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={openingHours}
        onChangeText={setOpeningHours}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
          value={openOnWeekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton
        style={[styles.submitBtn, submissionAllowed ? styles.btnEnabled : styles.btnDisabled]}
        onPress={handleFormSubmit}
        enabled={submissionAllowed}
      >
        <Text style={styles.SubmitBtnText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito700',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#d3e2e6',
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito600',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  selectedPhotosContainer: {
    flexDirection: 'row',
  },

  selectedPhoto: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  photosInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96d2f0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  submitBtn: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  btnEnabled: {
    backgroundColor: '#15c3d6',
  },

  btnDisabled: {
    backgroundColor: '#ccc',
  },

  SubmitBtnText: {
    fontFamily: 'Nunito800',
    fontSize: 16,
    color: '#fff',
  },
})

export default OrphanageForm
