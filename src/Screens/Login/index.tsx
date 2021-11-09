import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button, Card, Checkbox, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';
import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import Login from '../../Services/auth';


export default function LoginScreen() {
  const navigation = useNavigation();

  function handleScreenRegister() {
    navigation.navigate("Register")
  }

  function handleScreenHome() {
    navigation.navigate( 'Home');
  }

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Text style={loginStyle.cardTitle}>Josan App</Text>
          <Card.Content>
            <TextInput
              label="Email"
              keyboardType="email-address"
            />
            <TextInput
              label="Password"
              secureTextEntry={true}
            />
            <Button
              uppercase={false}
              style={loginStyle.cardButton}
              color='#8c52e5'
            >
              Forgot email/password
            </Button>
            <Button
              onPress={ handleScreenHome }
              mode="contained"
              color='#8c52e5'
              style={loginStyle.cardButton}
            >
              Login
            </Button>
            <Button
              style={loginStyle.cardButton}
              onPress={ handleScreenRegister }
              color='#8c52e5'
            >
              Register
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}
