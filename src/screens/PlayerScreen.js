import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Redux
import {selectCurrentTrack} from '../reducers/musicPlayerReducer';

// Components
import Cover from '../components/Cover';
import AppText from '../components/AppText';
import TouchableIcon from '../components/TouchableIcon';
import ProgressSlider from '../components/ProgressSlider';

// Containers
import PlaybackControl from '../containers/PlaybackControl';
import TrackBottomSheet from '../containers/TrackBottomSheet';

// Themes
import {WINDOW_WIDTH} from '../themes/mixins';
import {SCALE_10, SCALE_4} from '../themes/spacing';

const PLAYER_WIDTH = WINDOW_WIDTH * 0.82;

const icons = {
  chevronDown: {
    name: 'expand-more',
    type: 'material',
    size: 30,
  },
  more: {
    name: 'more-vertical',
    type: 'feather',
    size: 30,
  },
};

function PlayerScreen() {
  const insets = useSafeAreaInsets();
  const currentTrack = useSelector(selectCurrentTrack);
  const navigation = useNavigation();

  const [visibleBts, setVisibleBts] = useState(false);

  const onDismissBottomSheet = () => {
    setVisibleBts(false);
  };

  return (
    <>
      <TrackBottomSheet
        trackItem={currentTrack}
        visible={visibleBts}
        onDismiss={onDismissBottomSheet}
        onPressItem={() => {
          setVisibleBts(false);
        }}
      />
      <ImageBackground
        style={styles.container}
        source={{uri: currentTrack?.artwork}}
        blurRadius={40}>
        <LinearGradient
          style={[styles.container]}
          colors={['rgba(18, 18, 18, .2)', 'rgba(18, 18, 18, .4)']}>
          <View
            style={[
              styles.container,
              {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              },
            ]}>
            <View style={styles.header}>
              <TouchableIcon
                size={30}
                onPress={() => navigation.goBack()}
                iconProps={icons.chevronDown}
                iconStyle={styles.icon}
              />

              <AppText text="Đang phát" size="f18" style={styles.title} />

              <TouchableIcon
                size={30}
                onPress={() => setVisibleBts(true)}
                iconProps={icons.more}
                iconStyle={styles.icon}
              />
            </View>

            <View style={styles.wrapper}>
              <Cover src={currentTrack.artwork} />

              <View style={styles.textWrapper}>
                <AppText style={styles.trackTitle} numberOfLines={1} size="f16">
                  {currentTrack?.title || 'unknown'}
                </AppText>
                <AppText style={styles.trackArtist} numberOfLines={1}>
                  {currentTrack?.artist}
                </AppText>
              </View>

              <ProgressSlider />

              <PlaybackControl />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </>
  );
}

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SCALE_10,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
  trackTitle: {
    color: '#fff',
    textAlign: 'center',
    width: PLAYER_WIDTH,
  },
  trackArtist: {
    fontSize: 14,
    color: '#f2f2f2',
    textAlign: 'center',
    width: PLAYER_WIDTH,
    marginTop: SCALE_4,
  },
});
