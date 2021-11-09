import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Appbar } from "react-native-paper";

const HeaderComponent = ( props: HeaderComponentParams) => {
  const navigation = useNavigation();

  function handleScreen() {
    navigation.navigate("Login")
  }

  return (
    <Appbar>
      <Appbar.BackAction onPress={ handleScreen } />
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};

export default HeaderComponent;

interface HeaderComponentParams {
  title: string;
}