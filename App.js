import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {Provider as DataProvider} from './src/context/DataContext';

const AppWithContext = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default () => {
  return (
    <DataProvider>
      <AppWithContext/>
    </DataProvider>
  )
}