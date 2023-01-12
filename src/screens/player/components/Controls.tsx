import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {Box, Icon} from '~components';

export const Controls = () => {
  const playerState = usePlaybackState();
  const paused = playerState === State.Paused;

  console.log('playerState', playerState);

  const togglePlay = () => {
    if (!paused) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <Box
      mx={'lg'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}>
      <TouchableOpacity>
        <Icon type="Feather" name="shuffle" size={18} />
      </TouchableOpacity>
      <Box
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}>
        <TouchableOpacity>
          <Icon type="MaterialIcons" name="skip-previous" size={40} />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlay}>
          <Box
            mx={'md'}
            borderColor={'black'}
            borderWidth={2}
            width={60}
            height={60}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={30}>
            <Icon
              type="MaterialIcons"
              name={!paused ? 'pause' : 'play-arrow'}
              size={32}
            />
          </Box>
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon type="MaterialIcons" name="skip-next" size={40} />
        </TouchableOpacity>
      </Box>

      <TouchableOpacity>
        <Icon type="MaterialIcons" name="repeat" size={22} />
      </TouchableOpacity>
    </Box>
  );
};
