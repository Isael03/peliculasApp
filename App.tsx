import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import FadeScreen from './src/screens/FadeScreen';
import GradientProvider from './src/context/GradientContext';

function AppState({children}: any) {
  return <GradientProvider>{children}</GradientProvider>;
}

export default function App({children}: any) {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
}
