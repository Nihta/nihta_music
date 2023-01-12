import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {HomeScreen} from '~screens/home/HomeScreen';
import {modalScreenOptions} from './options/modalScreenOptions';
import {PlayerScreen} from '~screens/player/PlayerScreen';
import {Music} from '~utils';

export type RootStackParamList = {
  Home: undefined;
  Player: {
    track: Music;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={modalScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Player" component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type PlayerScreenProps = StackScreenProps<RootStackParamList, 'Player'>;
