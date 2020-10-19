import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrphanagesMap from './pages/OrphanagesMap'
import OrphanagePosition from './pages/OrphanageCreation/OrphanagePosition'
import OrphanageForm from './pages/OrphanageCreation/OrphanageForm'
import OrphanageDetails from './pages/OrphanageDetails'
import Header from './components/Header'

const { Navigator, Screen } = createStackNavigator()

const Routes: FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#f2f3f5',
      },
    }}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />

      <Screen name="OrphanageDetails" component={OrphanageDetails} options={{
        headerShown: true,
        header: () => <Header title="Orfanato" cancelBtn />,
      }} />

      <Screen name="OrphanagePosition" component={OrphanagePosition} options={{
        headerShown: true,
        header: () => <Header title="Localização do orfanato" />,
      }} />

      <Screen name="OrphanageForm" component={OrphanageForm} options={{
        headerShown: true,
        header: () => <Header title="Dados do orfanato" />,
      }} />

    </Navigator>
  </NavigationContainer>
)

export default Routes
