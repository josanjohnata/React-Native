import React from 'react';
import { theme } from './App.style';
import { Provider as PaperProvider } from 'react-native-paper';
import { RegisterScreen } from './src/Screens/Register/register.screen';
import Routes from './src/Routes/routes';

export default function App() {
  
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
