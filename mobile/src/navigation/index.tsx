import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Header from '~/components/Header';
import OrphanageForm from '~/screens/OrphanageCreation/OrphanageForm';
import OrphanagePosition from '~/screens/OrphanageCreation/OrphanagePosition';
import OrphanageDetails from '~/screens/OrphanageDetails';
import OrphanagesMap from '~/screens/OrphanagesMap';

const { Navigator, Screen } = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#f2f3f5',
          },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" cancelBtn />,
          }}
        />

        <Screen
          name="OrphanagePosition"
          component={OrphanagePosition}
          options={{
            headerShown: true,
            header: () => <Header title="Localização do orfanato" />,
          }}
        />

        <Screen
          name="OrphanageForm"
          component={OrphanageForm}
          options={{
            headerShown: true,
            header: () => <Header title="Dados do orfanato" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
