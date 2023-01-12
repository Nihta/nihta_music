import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {Box, Text} from '~components';
import {useAppTheme} from '~themes/restyleTheme';
import usePlayerStore from '~zustand/usePlayerStore';
import useTrackStore from '~zustand/useTrackStore';
import ProgressBar from './ProgressBar';

export const PlayerFooter = () => {
  const track = usePlayerStore(state => state.currentTrack);

  const {colors} = useAppTheme();
  const navigation = useNavigation();

  const {position, duration} = useProgress();
  const progress = position / duration;

  if (!track) {
    return null;
  }

  const openPlayer = () => {
    if (track) {
      navigation.navigate('Player', {
        track: undefined,
      });
    }
  };

  return (
    <Pressable onPress={openPlayer}>
      <Box bg={'primaryLight'} style={styles.container}>
        <ProgressBar
          style={[
            styles.progress,
            {
              backgroundColor: colors.border,
            },
          ]}
          progress={isNaN(progress) ? 0 : +progress.toFixed(3)}
          color={colors.primary}
        />
        <Box flexDirection={'row'} mx={'lg'} my={'xs'}>
          <Box bg={'primaryDark'} width={44} height={44} borderRadius={21} />
          <Box ml={'sm'} justifyContent={'center'} flex={1}>
            <Text fontWeight={'500'} numberOfLines={1}>
              {track.title}
            </Text>
            <Text variant={'small'} numberOfLines={1}>
              {track.author}
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 49,
    left: 0,
    right: 0,
  },
  progress: {
    height: 2,
  },
});
