import React from 'react';
import {StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {Box, Text} from '~components';

const formatDuration = (duration: number) => {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration % 60);
  return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
};

export const ProgressSlider = () => {
  const {position, duration} = useProgress();

  const seekTo = (pos: number) => {
    TrackPlayer.seekTo(pos);
  };

  return (
    <>
      <Slider
        value={position}
        style={styles.sliderStyle}
        minimumTrackTintColor={'#27AE60'}
        maximumTrackTintColor={'black'}
        thumbTintColor={'#219653'}
        onSlidingComplete={seekTo}
        maximumValue={duration}
      />
      <Box flexDirection={'row'} justifyContent={'space-between'} mx={'md'}>
        <Text>{formatDuration(position)}</Text>
        <Text>{formatDuration(duration)}</Text>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  sliderStyle: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
    paddingLeft: 0,
    marginLeft: 0,
    margin: 0,
  },
});
