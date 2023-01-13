import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {modalScreenOptions} from './options/modalScreenOptions';
import {PlayerScreen} from '~screens/player/PlayerScreen';
import {Music} from '~utils';
import {TopTab} from './TopTab';

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
      <Stack.Screen
        name="HomeTab"
        component={TopTab}
        options={{
          headerShown: true,
          headerTitle: 'Trình phát nhạc',
        }}
      />
      <Stack.Screen name="Player" component={PlayerScreen} />
    </Stack.Navigator>
  );
};
