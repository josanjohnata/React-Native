import React from 'react';
import Home from '../Screens/Home';
import Courses from '../Screens/Courses';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Home}
    />
    <AppStack.Screen
      name="Courses"
      component={Courses}
    />
  </AppStack.Navigator>
);

export default AppRoutes;