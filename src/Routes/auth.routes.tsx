import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login/index';
import Register from '../Screens/Register/index';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f2f2' } }}
  >
    <AuthStack.Screen
      name="Tela de Login"
      component={Login}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
