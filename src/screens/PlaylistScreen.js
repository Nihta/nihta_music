import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import TouchableIcon from '../components/TouchableIcon';
import PlaylistBottomSheet from '../containers/bottom-sheet/PlaylistBottomSheet';

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

import {BASE} from '../themes/sizes';

// eslint-disable-next-line no-unused-vars
const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@playLists', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@playLists');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

// const playLists = [
//   {
//     playListName: 'Play list name',
//     tracks: [],
//   },
// ];

function PlaylistScreen(props) {
  const [visibleBts, setVisibleBts] = useState(false);
  const [playlistCliked, setPlaylistCliked] = useState(null);
  const [playLists, setPlaylists] = useState([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getData();

      setPlaylists(data);
    };

    getDataFromStorage();
  }, []);

  const handlePressMoreItem = item => {
    setVisibleBts(true);
    setPlaylistCliked(item);
  };
  return (
    <>
      <View>
        <PlaylistBottomSheet
          playlistItem={playlistCliked}
          setVisible={setVisibleBts}
          visible={visibleBts}
        />

        <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
          <AppText style={styles.text} text="Thêm danh sách" size="f18" />
        </TouchableOpacity>

        <FlatList
          keyExtractor={item => item.playListName}
          data={playLists}
          renderItem={({item}) => (
            <ListItem
              title={item.playListName}
              subtitle={`${item.tracks.length} bài hát`}
              iconProps={icons.folder}
              style={styles.listItem}
              rightElement={
                <TouchableIcon
                  iconProps={icons.more}
                  onPress={() => handlePressMoreItem(item)}
                />
              }
              onPress={() => null}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: BASE,
    marginHorizontal: BASE * 2,
    backgroundColor: '#56CCF2',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#000',
  },
});

export default PlaylistScreen;
