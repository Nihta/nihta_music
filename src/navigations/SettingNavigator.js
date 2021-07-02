import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingScreen';

import {stackScreenOptions} from './options/stackScreenOptions';

const Stack = createStackNavigator();

function SettingNavigator() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="setting"
        component={SettingsScreen}
        options={{
          title: 'Cài đặt',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: 'Giới thiệu',
        }}
        component={AboutScreen}
      />
    </Stack.Navigator>
  );
}

export default SettingNavigator;
