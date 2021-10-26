import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Courses() {
  const navigation = useNavigation();

  function handleScreen() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text>Courses</Text>
      <Button title={'Voltar para home'} onPress={ handleScreen }/>
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
