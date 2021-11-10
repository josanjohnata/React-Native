import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/Login/index";
import Courses from '../Screens/Courses/index';
import Home from "../Screens/Home/index";
import Register from "../Screens/Register/register.screen";
import Camera from "../Screens/Camera/index";

interface screens {
  name: string;
}

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
        {/* <Screen
          name="Login"
          component={Login}
        />
          <Screen
            name="Register"
            component={Register}
          /> */}
        {/* <Screen
          name="Home"
          component={Home}
        /> */}
        {/* <Screen
          name="Ver Cursos"
          component={Courses}
        /> */}
        <Screen
          name="Camera"
          component={Camera}
        />
      </Navigator>
    </NavigationContainer>
  );
}