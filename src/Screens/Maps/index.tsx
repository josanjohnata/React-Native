import React, { useState, useEffect }from 'react';
import { Alert, Linking, View, Text } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import styles from './Maps.style';

import { FontAwesome } from "@expo/vector-icons";
import { RectButton, TextInput } from "react-native-gesture-handler";
import * as Location from "expo-location";
import { fetchUserGithub, fetchLocalMapBox } from "../../Services/api/api";

interface Dev {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  location: string;
  latitude?: number;
  longitude?: number;
  html_url: string;
}

const initialRegion = {
  latitude: 49.2576508,
  longitude: -123.2639868,
  latitudeDelta: 100,
  longitudeDelta: 100,
};

export default function App() {
  const [devs, setDevs] = useState<Dev[]>([]);
  const [username, setUsername] = useState("");
  const [region, setRegion] = useState<Region>();

  const getCurrentPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Ops!", "Permissão de acesso a localização negada.");
    }

    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setRegion({ latitude, longitude, latitudeDelta: 100, longitudeDelta: 100 });
  };

  // ERRATA
  // https://stackoverflow.com/questions/32106849/getcurrentposition-and-watchposition-are-deprecated-on-insecure-origins
  // const getCurrentPosition_deprecated = () => {
  //   try {
  //     navigator.geolocation.getCurrentPosition(
  //       (position: any) => {
  //         console.log(position);
  //         const region = {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: 100,
  //           longitudeDelta: 100,
  //         };
  //         setRegion(region);
  //       },
  //       (error: any) => {
  //         if (error.code === 1) {
  //           Alert.alert("Ei!", "Dê permissão para acessar a sua localização!");
  //         } else {
  //           Alert.alert("Ops x(", "Erro ao detectar a localização.");
  //         }
  //       }
  //     );
  //   } catch (e) {
  //     Alert.alert(e.message || "");
  //   }
  // };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  function handleOpenGithub(url: string) {
    Linking.openURL(url);
  }

  async function handleSearchUser() {
    let dev: Dev;

    if (!username) return;

    const githubUser = await fetchUserGithub(username);

    if (!githubUser || !githubUser.location) {
      Alert.alert(
        "Ops!",
        "Usuário não encontrado ou não tem a localização definida no Github"
      );
      return;
    }

    const localMapBox = await fetchLocalMapBox(githubUser.location);

    if (!localMapBox || !localMapBox.features[0].center) {
      Alert.alert(
        "Ops!",
        "Erro ao converter a localidade do usuário em coordenadas geográficas!"
      );
      return;
    }

    const [longitude, latitude] = localMapBox.features[0].center;

    dev = {
      ...githubUser,
      latitude,
      longitude,
    };

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 3,
      longitudeDelta: 3,
    });

    const devAlreadyExists = dev && devs.find((user) => user.id === dev.id);

    if (devAlreadyExists) return;

    setDevs([...devs, dev]);
    setUsername("");
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        initialRegion={initialRegion}
      >
        {devs.map((dev) => (
          <Marker
            key={dev.id}
            image={{ uri: `${dev.avatar_url}&s=120` }}
            calloutAnchor={{
              x: 2.9,
              y: 0.8,
            }}
            coordinate={{
              latitude: Number(dev.latitude),
              longitude: Number(dev.longitude),
            }}
          >
            <Callout tooltip onPress={() => handleOpenGithub(dev.html_url)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{dev.name}</Text>
                <Text style={styles.calloutSmallText}>{dev.bio}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
        <TextInput
          placeholder={`${devs.length} Dev's encontrados`}
          style={styles.footerText}
          onChangeText={setUsername}
          value={username}
        />

        <RectButton style={styles.searchUserButton} onPress={handleSearchUser}>
          <FontAwesome name="github" size={24} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}



// interface IFind {
//   latitude: number;
//   longitude: number;
//   latitudeDelta: number;
//   longitudeDelta: number;
// };

// export default function MapsComponent() {
//   const [find, setFind] = useState({
//     latitude: 16.8680495,
//     longitude: -99.8940182,
//     latitudeDelta: 0.0008,
//     longitudeDelta:0.0008
//   });
//   const [initialMarker, setInitialMarker] = useState<IFind>({
//     latitude: 16.8680495,
//     longitude: -99.8940182,
//     latitudeDelta: 0.0008,
//     longitudeDelta:0.0008
//   });
//   const [devs, setDevs] = useState<Dev[]>([]);

//   useEffect(() => {
//     getCurrentPosition();
// }, []);

//   return (
//     <View style={styles.container}>
//       <Text>Maps</Text>
//       <MapView
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={initialMarker}
//       >
//         <Marker
//           icon={require('../../images/zoro.jpg')}
//           coordinate={{
//             latitude: 16.8680495,
//             longitude: -99.8940182
//           }}
//         >
//           <Callout>
//             <View style={styles.calloutContainer}>
//               <Text>Olá, estou aqui!</Text>
//             </View>
//           </Callout>
//         </Marker>
//       </MapView>

      
//     </View>
//   );
// }
