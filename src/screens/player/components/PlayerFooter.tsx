import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {useProgress} from 'react-native-track-player';
import {Box, Text} from '~components';
import {useAppTheme} from '~themes/restyleTheme';
import usePlayerStore from '~zustand/usePlayerStore';

export const PlayerFooter = () => {
  const track = usePlayerStore(state => state.currentTrack);

  const {colors} = useAppTheme();
  const navigation = useNavigation();

  const {position, duration} = useProgress();
  const progress = position / duration;
  const {colors: ngColors} = useTheme();

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
      <Box
        style={{
          backgroundColor: ngColors.card,
        }}>
        <ProgressBar
          progress={isNaN(progress) ? 0 : +progress.toFixed(3)}
          style={[styles.progress]}
          color={colors.primary}
        />
        <Box flexDirection={'row'} mx={'lg'} my={'sm'}>
          <Box bg={'primaryDark'} width={44} height={44} borderRadius={21} />
          <Box ml={'sm'} justifyContent={'center'} flex={1}>
            <Text fontWeight={'500'} numberOfLines={1}>
              {track.title}
            </Text>
            <Text variant={'small'} numberOfLines={1}>
              {track.artist}
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  progress: {
    height: 2,
  },
});
