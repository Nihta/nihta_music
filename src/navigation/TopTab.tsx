import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AlbumScreen} from '~screens/AlbumScreen';
import {HomeScreen} from '~screens/home/HomeScreen';
import {PlayerFooter} from '~screens/player/components/PlayerFooter';

const Tab = createMaterialTopTabNavigator();

export function TopTab() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: 'blue',
          },
          tabBarLabelStyle: {
            textTransform: 'uppercase',
          },
          tabBarGap: 0,
          tabBarItemStyle: {
            width: 'auto',
            alignItems: 'flex-start',
          },
          tabBarStyle: {},
          animationEnabled: true,
          tabBarPressColor: 'transparent',
        }}>
        <Tab.Screen
          name="Tracks"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Bài hát',
          }}
        />
        <Tab.Screen name="Danh sách phát" component={AlbumScreen} />
        <Tab.Screen name="Thư mục" component={AlbumScreen} />
        <Tab.Screen name="Album" component={AlbumScreen} />
        <Tab.Screen name="Nghệ sĩ" component={AlbumScreen} />
        <Tab.Screen name="Thể loại" component={AlbumScreen} />
      </Tab.Navigator>
      <PlayerFooter />
    </>
  );
}
