import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import Courses from './Screens/Courses';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f2f2' } }}
      >
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Cursos"
          component={Courses}
        />
      </Navigator>
    </NavigationContainer>
  );
};