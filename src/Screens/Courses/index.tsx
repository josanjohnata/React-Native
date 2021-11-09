import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Courses.style';
import api from '../../Services/api/api';
import Loading from '../../Components/Loading/index';
import { ScrollView } from 'react-native-gesture-handler';

interface ICategories {
  id: string;
  title: string;
}

export default function Courses() {
  const [data, setData] = useState<ICategories[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    api.get('categories').then(
      response => {
        setData(response.data);
        setIsLoading(false);
      }
    )
  }, []);

  function handleScreen() {
    navigation.navigate('Home')
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Veja os nossos cursos.</Text>
        {data.map((cat, index) => (
          <View style={styles.card} key={index}>
            <Image style={styles.image} source={require('../../images/gamaLogo.png')} />
            <Text style={styles.cardText}> {cat.title} </Text>
          </View>
        ))}
        {/* <View style={styles.card}>
        <Image style={styles.image} source={require('../../images/gamaLogo.png')} />
        <Text style={styles.cardText}> Hacker </Text>
      </View> */}
        <Button
          color='#68de5a'
          title={'Voltar para home'}
          onPress={handleScreen}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  );
}
