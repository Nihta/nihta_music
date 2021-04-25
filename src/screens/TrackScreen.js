import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Redux
import {
  selectCurrentTrack,
  setCurrentTrack,
} from '../reducers/musicPlayerReducer';
import {getMedia, selectMediaFiles} from '../reducers/mediaReducer';

// Components
import Toast from '../components/Toast';
import Track from '../components/Track';

// Services
import setupPlayer from '../services/setupPlayer';

// Utils
import {checkStoragePermission, getStoragePermission} from '../utils';

// Themes
import {FONT_SIZE_14, FONT_SIZE_16} from '../themes/typography';

function TracksScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const trackData = useSelector(selectMediaFiles);
  const currentTrack = useSelector(selectCurrentTrack);

  useEffect(() => {
    try {
      (async () => {
        const granted = await checkStoragePermission();
        if (!granted) {
          await getStoragePermission();
        }
        dispatch(getMedia());
        Toast('Quyét nhạc xong!');
      })();
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    setupPlayer()
      .then(() => {
        console.log('The player is ready to be used!');
      })
      .catch(reason => console.error(reason));
  }, []);

  if (!trackData || trackData.length === 0) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <Text style={styles.message} numberOfLines={2}>
          Không tìm thấy bất kì bản nhạc nào trên thiết bị của bạn
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={asset => asset.id.toString()}
        data={trackData}
        renderItem={({item}) => (
          <Track
            item={item}
            onPress={async () => {
              if (!currentTrack || item.id !== currentTrack.id) {
                await dispatch(setCurrentTrack(item));
              }

              navigation.navigate('player');
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: FONT_SIZE_16,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});

export default TracksScreen;
