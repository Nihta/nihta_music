import React from 'react';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {modalScreenOptions} from './options/modalScreenOptions';
import {PlayerScreen} from '~screens/player/PlayerScreen';
import {Music} from '~utils';
import {HomeBottomTabs} from './HomeBottomTabs';

export type RootStackParamList = {
  HomeTab: undefined;
  Player: {
    track?: Music;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={modalScreenOptions}>
      <Stack.Screen name="HomeTab" component={HomeBottomTabs} />
      <Stack.Screen name="Player" component={PlayerScreen} />
    </Stack.Navigator>
  );
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'HomeTab'>;
export type PlayerScreenProps = StackScreenProps<RootStackParamList, 'Player'>;
