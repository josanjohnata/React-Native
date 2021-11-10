import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#68de5a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    margin: 20,
  },
  text: {
    fontSize: 22,
    color: '#8c52e5',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    justifyContent: 'center',
    padding: 15,
    margin: 22,
  },
  cardText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#8c52e5',
  },
  buttons: {
    margin: 10,
  },
});

export default styles;