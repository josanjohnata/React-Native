import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './loading.style';

export default function loading() {
  return (
    <View style={styles.container}>
      <Image style={styles.loadingImage} source={require('../../images/loading1.gif')}/>
      <Text style={styles.loadingTitle}>Carregando...</Text>
    </View>
  )
}
