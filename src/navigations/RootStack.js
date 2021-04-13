import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Navigations
import AppNavigation from './AppNavigation';

// Screens
import PlayerScreen from '../screens/PlayerScreen';

// Screen options
import modalScreenOptions from './modalScreenOptions';

const noHeader = {headerShown: false};

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator mode="modal" screenOptions={modalScreenOptions}>
      <Stack.Screen name="app" component={AppNavigation} options={noHeader} />
      <Stack.Screen name="player" component={PlayerScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
