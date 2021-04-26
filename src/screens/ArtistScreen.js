import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

// Redux
import {getArtists, selectArtists} from '../reducers/mediaReducer';

// Components
import PressableIcon from '../components/PressableIcon';
import ListItem from '../components/ListItem';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
};

function ArtistsScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
              onPress={() => {
                navigation.navigate('track-list-filter', {
                  name: item.artist,
                  trackData: item.tracks,
                });
              }}
            />
          )}
        />
      </View>
    </>
  );
}

export default ArtistsScreen;
