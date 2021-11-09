import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Courses.style';

export default function Courses() {
  const navigation = useNavigation();

  function handleScreen() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Veja os nossos cursos.</Text>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../../images/gamaLogo.png')} />
        <Text style={styles.cardText}> Hacker </Text>
      </View>
      <Button color='#68de5a' title={'Voltar para home'} onPress={handleScreen} />
      <StatusBar style="auto" />
    </View>
  );
}
