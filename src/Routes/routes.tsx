import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login/index";

import Home from "../Screens/Home/index";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator
        screenOptions = {{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#f2f2f2'
          }
        }}
      >
        <Screen
          name="Login"
          component={Login}
        />
        <Screen
          name="Home"
          component={Home}
        />
      </Navigator>
    </NavigationContainer>
  );
}