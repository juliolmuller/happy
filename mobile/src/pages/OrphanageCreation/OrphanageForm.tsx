import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OrphanageForm: FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, OrphanageForm!</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2ab5d1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 20,
  },
})

export default OrphanageForm
