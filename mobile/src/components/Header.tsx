import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

interface HeaderProps {
  title: string
  cancelBtn?: boolean
}

const Header: FC<HeaderProps> = (props) => {
  const { goBack, navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b5d6" />
      </BorderlessButton>

      <Text style={styles.title}>
        {props.title}
      </Text>

      {props.cancelBtn ? (
        <BorderlessButton onPress={() => navigate('OrphanagesMap')}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 44,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Nunito600',
    color: '#8fa7b3',
    fontSize: 16,
  },
})

export default Header
