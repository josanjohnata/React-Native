import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { loginStyle } from './login.style';
// import { useNavigation } from '@react-navigation/native'
// import { Formik } from 'formik';
import Login from '../../Services/auth';

export default function LoginScreen() {
  // const navigation = useNavigation();

  // function handleScreen() {
  //   navigation.navigate("Register")
  // }

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title title="Delivery App" titleStyle={loginStyle.cardTitle}></Card.Title>
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
              style={loginStyle.cardButton}>
              Forgot email/password
            </Button>
            <Button
              onPress={Login}
              mode="contained"
              style={loginStyle.cardButton}>
              Login
            </Button>
            <Button
              style={loginStyle.cardButton}
            // onPress={ handleScreen }
            >
              Register
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}
