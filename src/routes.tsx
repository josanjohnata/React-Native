import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Screens/Login/index';
import Register from './Screens/Register/index';
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
          name="Tela de Login"
          component={Login}
        />
        <Screen
          name="Register"
          component={Register}
        />
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="Courses"
          component={Courses}
        />
      </Navigator>
    </NavigationContainer>
  );
};