import React from 'react'
import { Image, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'
import api from '../../../services/api'
import styles from './styles'

interface OrphanageFormRouteParams {
  latitude: number
  longitude: number
}

function OrphanageForm() {
  const { navigate } = useNavigation()
  const { latitude, longitude } = useRoute().params as OrphanageFormRouteParams

  const [name, setName] = React.useState('')
  const [about, setAbout] = React.useState('')
  const [instructions, setInstructions] = React.useState('')
  const [openingHours, setOpeningHours] = React.useState('')
  const [openOnWeekends, setOpenOnWeekends] = React.useState(false)
  const [photos, setPhotos] = React.useState<string[]>([])
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
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
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

export default OrphanageForm
