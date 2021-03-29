import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Components
import Icon from '../components/Icon';

// Screens
import AlbumsScreen from '../screens/AlbumsScreen';
import ArtistsScreen from '../screens/ArtistScreen';
import FoldersScreen from '../screens/FolderScreen';
import LibraryScreen from '../screens/LibraryScreen';
import PlaylistsScreen from '../screens/PlaylistsScreen';

const screenOptions = {
  ...TransitionPresets.ScaleFromCenterAndroid,
  headerStyle: {
    elevation: 0,
  },
  headerTitleStyle: {
    fontFamily: 'Circular',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
  },
  headerTitleAlign: 'center',
  headerBackImage: () => <Icon type="feather" name="chevron-left" size={26} />,
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
        name="playlists"
        component={PlaylistsScreen}
        options={{title: 'Danh sách phát'}}
      />
      <Stack.Screen
        name="artists"
        component={ArtistsScreen}
        options={{title: 'Nghệ Sĩ'}}
      />
      <Stack.Screen
        name="albums"
        component={AlbumsScreen}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="folders"
        component={FoldersScreen}
        options={{title: 'Thư mục'}}
      />
    </Stack.Navigator>
  );
}

export default LibraryNavigator;
