import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

// Redux
import {getArtists, selectArtists} from '../reducers/mediaReducer';

// Components
import ListItem from '../components/ListItem';
import TouchableIcon from '../components/TouchableIcon';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 30,
  },
  more: {
    type: 'ionicon',
    name: 'ios-ellipsis-vertical',
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
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                paddingRight: 6,
              }}
              rightElement={<TouchableIcon iconProps={icons.more} />}
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
