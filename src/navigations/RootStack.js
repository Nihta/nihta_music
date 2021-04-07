import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import AppNavigation from './AppNavigation';
import PlayerScreen from '../screens/PlayerScreen';

const screenOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
  cardOverlayEnabled: true,
};

const noHeader = {headerShown: false};

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={screenOptions}>
      <Stack.Screen name="app" component={AppNavigation} options={noHeader} />
      <Stack.Screen name="player" component={PlayerScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
