import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

// Components
import ListItem from '../components/ListItem';
import TouchableIcon from '../components/TouchableIcon';
import NoData from '../components/NoData';

import {getFolders, selectFolders} from '../reducers/mediaReducer';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
  more: {
    type: 'ionicon',
    name: 'ios-ellipsis-vertical',
    size: 26,
  },
};

function FolderScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const folders = useSelector(selectFolders);

  useEffect(() => {
    dispatch(getFolders());
  }, [dispatch]);

  if (folders.length === 0) {
    return <NoData title="Không có thư mục nào" />;
  }

  const handlePressListItem = item => {
    navigation.navigate('track-list-filter', {
      name: item.folder,
      trackData: item.tracks,
    });
  };

  return (
    <>
      <FlatList
        keyExtractor={item => item.folder}
        data={folders}
        renderItem={({item}) => (
          <ListItem
            title={item.folder}
            subtitle={`${item.tracks.length} bài hát`}
            iconProps={icons.folder}
            style={styles.listItem}
            rightElement={<TouchableIcon iconProps={icons.more} />}
            onPress={() => handlePressListItem(item)}
          />
        )}
      />
    </>
  );
}
const styles = StyleSheet.create({
  listItem: {
    paddingRight: 6,
  },
});

export default FolderScreen;
