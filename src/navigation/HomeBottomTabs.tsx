import React from 'react';
import {HomeScreen} from '~screens/home/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AlbumScreen} from '~screens/AlbumScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const BottomTabs = createMaterialBottomTabNavigator();

export function HomeBottomTabs() {
  return (
    <>
      <BottomTabs.Navigator initialRouteName="Home" backBehavior="initialRoute">
        <BottomTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons name="music" color={color} size={26} />
              );
            },
            tabBarLabel: 'Music',
          }}
        />
        <BottomTabs.Screen
          name="Album"
          component={AlbumScreen}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons name="album" color={color} size={26} />
              );
            },
            tabBarLabel: 'Albums',
          }}
        />
      </BottomTabs.Navigator>
    </>
  );
}
