// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Appbar } from "react-native-paper";

export const HeaderComponent = ( props: HeaderComponentParams) => {
  // const navigation = useNavigation();

  // function handleScreen() {
  //   navigation.navigate("Tela de Login")
  // }

  return (
    <Appbar>
      {/* <Appbar.BackAction onPress={ handleScreen } /> */}
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

interface HeaderComponentParams {
  title: string;
}