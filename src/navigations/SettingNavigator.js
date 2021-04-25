import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import SettingsScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';

const noHeader = {headerShown: false};

const Stack = createStackNavigator();

function SettingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="setting"
        component={SettingsScreen}
        options={noHeader}
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
