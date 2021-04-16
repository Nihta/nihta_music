import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Redux
import {getAlbums, selectAlbums} from '../reducers/mediaReducer';

// Components
import ListItem from '../components/ListItem';
import PressableIcon from '../components/PressableIcon';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
};

function AlbumsScreen() {
  const dispatch = useDispatch();
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

  return (
    <>
      <View>
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
            />
          )}
        />
      </View>
    </>
  );
}

export default AlbumsScreen;
