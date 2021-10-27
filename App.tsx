import React from 'react';
import Routes from './src/routes';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { theme } from './App.style';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
