import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Redux
import {getArtists, selectArtists} from '../reducers/mediaReducer';
import ListItem from '../components/ListItem';
import PressableIcon from '../components/PressableIcon';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
};

function ArtistsScreen(props) {
  const dispatch = useDispatch();
  const artists = useSelector(selectArtists);

  console.log(artists);

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  if (artists.length === 0) {
    return (
      <View>
        <Text>Không có nghệ sĩ nào</Text>
      </View>
    );
  }

  return (
    <>
      <View>
        <FlatList
          keyExtractor={item => item.artist}
          data={artists}
          renderItem={({item}) => (
            <ListItem
              title={item.artist}
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

export default ArtistsScreen;
