import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import TracksScreen from '../screens/TracksScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LibraryScreen from '../screens/LibraryScreen';

// Components
import Icon from '../components/Icon';

const BottomTabs = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    borderTopWidth: 0,
  },
  allowFontScaling: false,
};

function AppNavigation(props) {
  function iconProvider(route) {
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
  }

  return (
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
        component={LibraryScreen}
        options={{tabBarIcon: iconProvider('Library')}}
      />
      <BottomTabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{tabBarIcon: iconProvider('Settings')}}
      />
    </BottomTabs.Navigator>
  );
}

export default AppNavigation;
