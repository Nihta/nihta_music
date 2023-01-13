import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {modalScreenOptions} from './options/modalScreenOptions';
import {PlayerScreen} from '~screens/player/PlayerScreen';
import {Music} from '~utils';
import {Drawer} from './Drawer';

export type RootStackParamList = {
  HomeDrawer: undefined;
  Player: {
    track?: Music;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={modalScreenOptions}>
      <Stack.Screen name="HomeDrawer" component={Drawer} />
      <Stack.Screen name="Player" component={PlayerScreen} />
    </Stack.Navigator>
  );
};
