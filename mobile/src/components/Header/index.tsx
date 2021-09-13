import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import styles from './styles'

interface HeaderProps {
  title: string
  cancelBtn?: boolean
}

function Header({ title, cancelBtn }: HeaderProps) {
  const { goBack, navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b5d6" />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {cancelBtn ? (
        <BorderlessButton onPress={() => navigate('OrphanagesMap')}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  )
}

export default Header
