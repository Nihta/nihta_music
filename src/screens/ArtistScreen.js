import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

// Redux
import {getArtists, selectArtists} from '../reducers/mediaReducer';

// Components
import Container from '../components/Container';
import ListItem from '../components/ListItem';
import TouchableIcon from '../components/TouchableIcon';
import NoData from '../components/NoData';

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

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  if (artists.length === 0) {
    return <NoData title="Không có nghệ sĩ nào" />;
  }

  const handlePressListItem = item => {
    navigation.navigate('track-list-filter', {
      name: item.artist,
      trackData: item.tracks,
    });
  };

  return (
    <>
      <Container>
        <FlatList
          keyExtractor={item => item.artist}
          data={artists}
          renderItem={({item}) => (
            <ListItem
              title={item.artist}
              subtitle={`${item.tracks.length} bài hát`}
              iconProps={icons.folder}
              style={styles.listItem}
              rightElement={<TouchableIcon iconProps={icons.more} />}
              onPress={() => handlePressListItem(item)}
            />
          )}
        />
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingRight: 6,
  },
});

export default ArtistsScreen;
