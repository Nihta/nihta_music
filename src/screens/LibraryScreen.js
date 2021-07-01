import React from 'react';
import {StyleSheet} from 'react-native';

// Components
import Container from '../components/Container';
import ListItem from '../components/ListItem';

const icons = {
  playlists: {
    name: 'headset-outline',
    type: 'ionicon',
    size: 28,
  },
  artists: {
    name: 'person-outline',
    type: 'ionicon',
    size: 26,
  },
  albums: {
    name: 'albums-outline',
    type: 'ionicon',
    size: 28,
  },
  folders: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
};

function LibraryScreen(props) {
  return (
    <Container>
      <ListItem
        title="Danh sách phát"
        iconProps={icons.playlists}
        titleStyle={styles.title}
        onPress={() => props.navigation.navigate('playlist')}
      />
      <ListItem
        title="Nghệ sĩ"
        iconProps={icons.artists}
        titleStyle={styles.title}
        onPress={() => props.navigation.navigate('artist')}
      />
      <ListItem
        title="Albums"
        iconProps={icons.albums}
        titleStyle={styles.title}
        onPress={() => props.navigation.navigate('album')}
      />
      <ListItem
        title="Thư mục"
        iconProps={icons.folders}
        titleStyle={styles.title}
        onPress={() => props.navigation.navigate('folder')}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default LibraryScreen;
