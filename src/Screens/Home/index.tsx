import React from 'react';
import { View, SafeAreaView, Button, Image, Text } from 'react-native';
// import { Title } from 'react-native-paper';
import styles from './Home.style';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../Components/Header/index';

export default function Home() {
  const navigation = useNavigation();

  function handleScreenCourse(route: string) {
    navigation.navigate(route)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Olá, seja bem vindo</Text>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../../images/gamanewlogo.png')} />
        <Text style={styles.cardText}> Josan App </Text>
      </View>
      <Button color='#8c52e5' title={"Ver Cursos"} onPress={ () => handleScreenCourse('Ver Cursos') } />
      <Button color='#8c52e5' title={"Acessar camera"} onPress={ () => handleScreenCourse('Camera') } />
    </SafeAreaView>
  );
}
