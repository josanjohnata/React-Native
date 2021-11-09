import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8c52e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',    
  },
  image: {
    width: 250,
    height: 250,
    margin: 20,
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
});

export default styles;