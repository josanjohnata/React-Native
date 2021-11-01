import React from 'react';
import { theme } from './App.style';
import { Provider as PaperProvider } from 'react-native-paper';
import { RegisterScreen } from './src/Screens/Register/register.screen';
import Home from './src/Screens/Home';

export default function App() {
  
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
