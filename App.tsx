import React from 'react';
import Routes from './src/routes';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import LoginScreen from './src/Screens/Login';
import { theme } from './App.style';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen/>
    </PaperProvider>
  );
}
