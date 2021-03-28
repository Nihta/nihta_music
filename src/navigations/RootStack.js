import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import AppNavigation from './AppNavigation';

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
    </Stack.Navigator>
  );
}

export default RootStack;
