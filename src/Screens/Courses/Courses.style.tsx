import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#8c52e5'
  },
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
    paddingTop: 20,   
  },
  image: {
    width: 250,
    height: 250,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 330,
    margin: 22,
  },
  cardText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#8c52e5',
    marginBottom: 20,
  },
  cardButton: {
    marginBottom: 20,
  },
});

export default styles;