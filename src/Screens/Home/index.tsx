import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();

  function handleScreen() {
    navigation.navigate('Cursos')
  }

  return (
    <View style={styles.container}>
      <Text>Hello World! Essa é minha Home!</Text>
      <Button title={'Ver cursos'} onPress={ handleScreen }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
