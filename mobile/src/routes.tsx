import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import OrphanageForm from './pages/OrphanageForm'

const { Navigator, Screen } = createStackNavigator()

const Routes: FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="OrphanageDetails" component={OrphanageDetails} />
      <Screen name="OrphanageForm" component={OrphanageForm} />
    </Navigator>
  </NavigationContainer>
)

export default Routes
