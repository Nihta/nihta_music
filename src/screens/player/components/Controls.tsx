import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {State, usePlaybackState} from 'react-native-track-player';
import {Box, Icon} from '~components';
import usePlayerStore, {usePlaying} from '~zustand/usePlayerStore';

export const Controls = () => {
  const togglePlay = usePlayerStore(state => state.togglePlay);

  const playbackState = usePlayerStore(state => state.playbackState);
  const isPlaying = !(
    playbackState === State.Paused || playbackState === State.None
  );

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
              name={isPlaying ? 'pause' : 'play-arrow'}
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
