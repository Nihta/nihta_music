import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeScreen} from '~screens/home/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Movie: {
    slug: string;
  };
  Search: undefined;
  Setting: undefined;
  Notification: undefined;
  ListMovie: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type MovieScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Movie'
>;
