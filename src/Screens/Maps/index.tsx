import React, { useState, useEffect }from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './Maps.style';

interface IFind {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export default function MapsComponent() {
  const [find, setFind] = useState({
    latitude: 16.8680495,
    longitude: -99.8940182,
    latitudeDelta: 0.0008,
    longitudeDelta:0.0008
  });
  const [initialMarker, setInitialMarker] = useState<IFind>({
    latitude: 16.8680495,
    longitude: -99.8940182,
    latitudeDelta: 0.0008,
    longitudeDelta:0.0008
  });

  return (
    <View style={styles.container}>
      xablau
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialMarker}
      >
        <Marker
          icon={require('../../images/zoro.jpg')}
          coordinate={{
            latitude: 16.8680495,
            longitude: -99.8940182
          }}
        >
          <Callout>
            <View style={styles.calloutContainer}>
              <Text>Olá, estou aqui!</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}
