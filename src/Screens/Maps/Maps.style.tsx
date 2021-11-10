import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 30,
    justifyContent: 'center',
  },
});

export default styles;