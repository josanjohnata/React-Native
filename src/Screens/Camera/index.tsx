import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Camera.style';
import { Camera } from 'expo-camera'

export default function CameraDevice() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.containerError}>
          Algo deu errado
        </Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.containerError}>
        <Text style={styles.containerError}>
          Você precisa da permissão para acessar sua comera
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === 2 ? 1 : 2
              );
            }}
          >
            <Text style={styles.text}>Mudar camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
