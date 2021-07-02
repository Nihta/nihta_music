import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import Container from '../components/Container';
import ListItem from '../components/ListItem';
import PressableIcon from '../components/PressableIcon';

import {getAlbums, selectAlbums} from '../reducers/media/mediaReducer';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
};

function AlbumsScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const albums = useSelector(selectAlbums);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  if (albums.length === 0) {
    return (
      <View>
        <Text>Không có album nào</Text>
      </View>
    );
  }

  const handlePressListItem = item => {
    navigation.navigate('track-list-filter', {
      name: item.album,
      trackData: item.tracks,
    });
  };

  return (
    <>
      <Container>
        <FlatList
          keyExtractor={item => item.album}
          data={albums}
          renderItem={({item}) => (
            <ListItem
              title={item.album}
              subtitle={`${item.tracks.length} bài hát`}
              iconProps={icons.folder}
              rightElement={
                <PressableIcon
                  iconProps={{
                    type: 'ionicon',
                    name: 'ios-ellipsis-vertical',
                    size: 25,
                  }}
                />
              }
              onPress={() => handlePressListItem(item)}
            />
          )}
        />
      </Container>
    </>
  );
}

export default AlbumsScreen;
