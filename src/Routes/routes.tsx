import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login/index";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login"
          component={Login}
        />
      </Navigator>
    </NavigationContainer>
  );
}