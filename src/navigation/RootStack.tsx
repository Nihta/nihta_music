import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {modalScreenOptions} from './options/modalScreenOptions';
import {PlayerScreen} from '~screens/player/PlayerScreen';
import {Music} from '~utils';
import {Drawer} from './Drawer';
import {SearchScreen} from '~screens/search/SearchScreen';

export type RootStackParamList = {
  HomeDrawer: undefined;
  Player: {
    track?: Music;
  };
  Search: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeDrawer" component={Drawer} />
      <Stack.Screen
        name="Player"
        component={PlayerScreen}
        options={modalScreenOptions}
      />
      <Stack.Screen name="Search" component={SearchScreen} options={{}} />
    </Stack.Navigator>
  );
};
