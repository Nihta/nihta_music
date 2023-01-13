import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Appbar} from 'react-native-paper';
import {Icon} from '~components';
import {TopTab} from './TopTab';

const DrawerNavigator = createDrawerNavigator();

export function Drawer() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen
        name="TopTab"
        options={{
          headerShown: true,
          headerTitle: 'Trình phát nhạc',
          drawerLabel: 'Thư viện',
          drawerIcon: ({color, size}) => (
            <Icon
              type="MaterialIcons"
              name="my-library-music"
              color={color}
              size={size}
            />
          ),
          headerRight: () => (
            <Appbar.Action
              icon="magnify"
              onPress={() => {
                console.log('search');
              }}
            />
          ),
        }}
        component={TopTab}
      />
    </DrawerNavigator.Navigator>
  );
}
