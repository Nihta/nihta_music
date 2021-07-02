import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '../components/Icon';

import LibraryNavigator from './LibraryNavigator';
import SettingNavigator from './SettingNavigator';

import TracksScreen from '../screens/TrackScreen';
import SearchScreen from '../screens/SearchScreen';
import PlayerFooter from '../containers/PlayerFooter';

import {tabBarOptions} from './options/tabBarOptions';

const BottomTabs = createBottomTabNavigator();

const iconProvider = route => {
  return ({focused, color}) => {
    switch (route) {
      case 'Tracks':
        return (
          <Icon
            name="musical-notes-outline"
            type="ionicon"
            size={focused ? 26 : 23}
            color={color}
          />
        );
      case 'Search':
        return (
          <Icon
            name="search-outline"
            type="ionicon"
            size={focused ? 26 : 23}
            color={color}
          />
        );

      case 'Library':
        return (
          <Icon
            name="library-outline"
            type="ionicon"
            size={focused ? 26 : 23}
            color={color}
          />
        );
      case 'Settings':
        return (
          <Icon
            name="settings-outline"
            type="ionicon"
            size={focused ? 26 : 23}
            color={color}
          />
        );
    }
  };
};

function AppNavigation() {
  return (
    <>
      <BottomTabs.Navigator
        initialRouteName="Tracks"
        backBehavior="initialRoute"
        tabBarOptions={tabBarOptions}>
        <BottomTabs.Screen
          name="Tracks"
          component={TracksScreen}
          options={{
            tabBarIcon: iconProvider('Tracks'),
          }}
        />

        <BottomTabs.Screen
          name="Search"
          component={SearchScreen}
          options={{tabBarIcon: iconProvider('Search')}}
        />

        <BottomTabs.Screen
          name="Library"
          component={LibraryNavigator}
          options={{tabBarIcon: iconProvider('Library')}}
        />

        <BottomTabs.Screen
          name="Settings"
          component={SettingNavigator}
          options={{tabBarIcon: iconProvider('Settings')}}
        />
      </BottomTabs.Navigator>

      <PlayerFooter />
    </>
  );
}

export default AppNavigation;
