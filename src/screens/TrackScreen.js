import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
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
import NoData from '../components/NoData';

// Services
import setupPlayer from '../services/setupPlayer';

// Utils
import {checkStoragePermission, getStoragePermission} from '../utils';

// Themes
import TrackList from '../containers/TrackList';

import TrackBottomSheet from '../containers/TrackBottomSheet';

function TracksScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [visibleBts, setVisibleBts] = useState(false);
  const [trackCliked, setTrackCliked] = useState(null);

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
        console.info('The player is ready to be used!');
      })
      .catch(reason => console.error(reason));
  }, []);

  if (!trackData || trackData.length === 0) {
    return (
      <NoData
        title="Không tìm thấy bất kì bản nhạc nào trên thiết bị của bạn"
        style={styles.mb0}
      />
    );
  }

  const onDismissBottomSheet = () => {
    setVisibleBts(false);
    setTrackCliked(null);
  };

  return (
    <>
      <TrackBottomSheet
        trackItem={trackCliked}
        visible={visibleBts}
        onDismiss={onDismissBottomSheet}
        onPressItem={() => {
          setVisibleBts(false);
        }}
      />
      <SafeAreaView>
        <TrackList
          trackData={trackData}
          handlePressItem={async item => {
            if (!currentTrack || item.id !== currentTrack.id) {
              await dispatch(setCurrentTrack(item));
            }
            navigation.navigate('player');
          }}
          handlePressMoreItem={item => {
            setVisibleBts(true);
            setTrackCliked(item);
          }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mb0: {
    marginBottom: 0,
  },
});

export default TracksScreen;
