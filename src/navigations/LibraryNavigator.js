import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import AlbumScreen from '../screens/AlbumsScreen';
import ArtistScreen from '../screens/ArtistScreen';
import FolderScreen from '../screens/FolderScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import TrackListFilterScreen from '../screens/TrackListFilterScreen';

import {stackScreenOptions} from './options/stackScreenOptions';

const Stack = createStackNavigator();

function LibraryNavigator() {
  return (
    <Stack.Navigator headerMode="screen" screenOptions={stackScreenOptions}>
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

      <Stack.Screen
        name="track-list-filter"
        component={TrackListFilterScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
}

export default LibraryNavigator;
