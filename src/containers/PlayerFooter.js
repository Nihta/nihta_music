import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'styled-components/native';
import {useTrackPlayerProgress} from 'react-native-track-player/lib/hooks';

// Navigations
import {navigate} from '../navigations/utils/navigationServices';

// Redux
import {
  selectCurrentTrack,
  selectIsPlaying,
  setIsPlaying,
} from '../reducers/musicPlayerReducer';

// Components
import ProgressBar from '../components/ProgressBar';
import PressableIcon from '../components/PressableIcon';

const placeholder = require('../../assets/images/placeholder.jpg');

const icons = {
  playIcon: {
    name: 'play-arrow',
    type: 'material',
    size: 24,
  },
  pauseIcon: {
    name: 'pause',
    type: 'material',
    size: 24,
  },
};

function PlayerFooter() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const currentTrack = useSelector(selectCurrentTrack);

  const togglePlayback = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  const showFooter = !!currentTrack;
  const coverSrc = currentTrack?.artwork
    ? {uri: currentTrack.artwork}
    : placeholder;
  const {position, duration} = useTrackPlayerProgress(100);
  const progress = position / duration;

  return (
    <>
      {showFooter && (
        <>
          <TouchableWithoutFeedback
            onPress={() => {
              navigate('player');
            }}>
            <View style={styles.mainWrapper}>
              <Image style={styles.thumbnail} source={coverSrc} />

              <View style={styles.textWrapper}>
                <Text
                  style={[styles.title, {color: theme.textColor}]}
                  numberOfLines={1}>
                  {currentTrack.title || 'unknown'}
                </Text>
                <Text
                  style={[styles.artist, {color: theme.textSecondaryColor}]}
                  numberOfLines={1}>
                  {currentTrack.artist || 'unknown'}
                </Text>
              </View>

              <PressableIcon
                iconStyle={[styles.icon, {color: theme.textColor}]}
                iconProps={isPlaying ? icons.pauseIcon : icons.playIcon}
                onPress={togglePlayback}
              />

              <View style={styles.progressWrapper}>
                <ProgressBar
                  style={styles.progress}
                  progress={isNaN(progress) ? 0 : +progress.toFixed(3)}
                  color={theme.primary}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
}

export default PlayerFooter;

const styles = StyleSheet.create({
  mainWrapper: {
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 49,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: 'white',
  },
  icon: {},
  thumbnail: {
    height: 42,
    width: 42,
    borderRadius: 21,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '75%',
    marginLeft: 15,
  },
  progressWrapper: {
    position: 'absolute',
    top: 0,
  },
  progress: {
    height: 2,
    width: '100%',
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 14,
    width: '100%',
  },
  artist: {
    fontSize: 12,
    width: '100%',
  },
});
