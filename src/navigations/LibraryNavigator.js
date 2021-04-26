import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Components
// import Icon from '../components/Icon';

// Screens
import AlbumScreen from '../screens/AlbumsScreen';
import ArtistScreen from '../screens/ArtistScreen';
import FolderScreen from '../screens/FolderScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PlaylistScreen from '../screens/PlaylistScreen';

/**
 * @type {import('@react-navigation/stack').StackNavigationOptions}
 */
const screenOptions = {
  ...TransitionPresets.ScaleFromCenterAndroid,
  headerStyle: {
    elevation: 0,
  },
  headerTitleStyle: {
    // fontSize: 20,
  },
  headerTitleAlign: 'center',
  // headerBackImage: () => (
  //   <Icon type="ionicon" name="chevron-back-outline" size={26} />
  // ),
};

const Stack = createStackNavigator();

function LibraryNavigator() {
  return (
    <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
      <Stack.Screen
        name="library"
        component={LibraryScreen}
        options={{title: 'Thư viện phát'}}
      />

      <Stack.Screen
        name="playlist"
        component={PlaylistScreen}
        options={{title: 'Danh sách phát'}}
      />

      <Stack.Screen
        name={'artist'}
        component={ArtistScreen}
        options={{title: 'Nghệ Sĩ'}}
      />

      <Stack.Screen
        name="album"
        component={AlbumScreen}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="folder"
        component={FolderScreen}
        options={{title: 'Thư mục'}}
      />
    </Stack.Navigator>
  );
}

export default LibraryNavigator;
