import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Box, Container, Text} from '~components';
import {PlayerScreenProps} from '~navigation';
import usePlayerStore from '~zustand/usePlayerStore';
import {Controls} from './components/Controls';
import {ProgressSlider} from './components/ProgressSlider';

export const PlayerScreen = (props: PlayerScreenProps) => {
  const track = props.route.params.track;

  const playTrack = usePlayerStore(state => state.playTrack);
  const currentTrack = usePlayerStore(state => state.currentTrack);
  React.useEffect(() => {
    if (track) {
      playTrack(track);
    }
  }, [playTrack, track]);

  if (!currentTrack) {
    return null;
  }

  return (
    <Container safeArea>
      <Box height={54} justifyContent={'center'} alignItems={'center'}>
        <Text variant={'title'}>Đang phát</Text>
      </Box>
      <Box alignItems={'center'} justifyContent={'center'} flex={1}>
        <Box width={200} height={200} borderRadius={4}>
          <FastImage
            style={styles.image}
            source={require('../../assets/music.png')}
            resizeMode={'contain'}
          />
        </Box>
      </Box>
      <Box mx={'lg'} alignItems={'center'}>
        <Text
          numberOfLines={1}
          fontSize={15}
          fontWeight={'500'}
          lineHeight={20}>
          {currentTrack.title}
        </Text>
        <Text numberOfLines={1}>{currentTrack.artist}</Text>
      </Box>

      <Box mx={'md'} mt={'md'}>
        <ProgressSlider />
      </Box>

      <Box mx={'lg'} mt={'lg'} mb={'xl'}>
        <Controls />
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
