import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={() => ({
        headerShown: false,
        cardStyle: {
          //backgroundColor: 'white',
        },
      })}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
