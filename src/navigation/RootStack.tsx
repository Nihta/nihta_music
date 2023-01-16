import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {modalScreenOptions} from './options/modalScreenOptions';
import {PlayerScreen} from '~screens/player/PlayerScreen';
import {Drawer} from './Drawer';
import {SearchScreen} from '~screens/search/SearchScreen';
import {RootStackScreenProps} from './types';
import {Track} from 'react-native-track-player';

export type RootStackParamList = {
  HomeDrawer: undefined;
  Player: {
    track?: Track;
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

export type PlayerScreenProps = RootStackScreenProps<'Player'>;
