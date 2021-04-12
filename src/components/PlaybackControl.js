import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';

// Redux
import {
  setLoop,
  selectLoop,
  setShuffle,
  setIsPlaying,
  selectShuffle,
  selectIsPlaying,
  selectCurrentTrack,
  setCurrentTrack,
} from '../reducers/musicPlayerReducer';
import {selectMediaFiles} from '../reducers/mediaReducer';

// Utils
import {randomIntegerInRange} from '../utils';

// Theme
import {contrastColor, contrastTransColor} from '../themes/styles';

// Components
import Icon from '../components/Icon';

const WrapperWidth = Dimensions.get('window').width * 0.82;

const icons = {
  play: {
    name: 'play',
    type: 'ionicon',
    size: 32,
  },
  pause: {
    name: 'pause',
    type: 'material',
    size: 32,
  },
  skipForward: {
    name: 'skip-next',
    type: 'material',
    size: 40,
  },
  skipBackward: {
    name: 'skip-previous',
    type: 'material',
    size: 40,
  },
  loop: {
    name: 'repeat',
    type: 'material',
    size: 22,
  },
  loopOne: {
    name: 'repeat-one',
    type: 'material',
    size: 22,
  },
  shuffle: {
    name: 'shuffle',
    type: 'feather',
    size: 17,
  },
};

function PlaybackControl() {
  const dispatch = useDispatch();

  const loop = useSelector(selectLoop);
  const media = useSelector(selectMediaFiles);
  const shuffle = useSelector(selectShuffle);
  const isPlaying = useSelector(selectIsPlaying);
  const currentTrack = useSelector(selectCurrentTrack);

  const skipBackward = () => {
    const idxCurrentTrack = parseInt(currentTrack.id, 10);

    const idxNextTrack = shuffle
      ? randomIntegerInRange(0, media.length, idxCurrentTrack)
      : idxCurrentTrack === 0
      ? media.length - 1
      : idxCurrentTrack - 1;

    dispatch(setCurrentTrack(media[idxNextTrack]));
  };

  const skipForward = () => {
    const idxCurrentTrack = parseInt(currentTrack.id, 10);

    const idxNextTrack = shuffle
      ? randomIntegerInRange(0, media.length, idxCurrentTrack)
      : idxCurrentTrack === media.length - 1
      ? 0
      : idxCurrentTrack + 1;

    dispatch(setCurrentTrack(media[idxNextTrack]));
  };

  const onLoopPress = () => {
    dispatch(setLoop(!loop));
  };

  const onPlayPress = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  const onShufflePress = () => {
    dispatch(setShuffle(!shuffle));
  };

  return (
    <>
      <View style={styles.mainWrapper}>
        <TouchableWithoutFeedback onPress={onShufflePress}>
          <IconWrapper>
            {shuffle ? (
              <TransIcon {...icons.shuffle} />
            ) : (
              <DisabledIcon {...icons.shuffle} />
            )}
          </IconWrapper>
        </TouchableWithoutFeedback>
        <StyledIcon {...icons.skipBackward} onPress={skipBackward} />
        <TouchableWithoutFeedback onPress={onPlayPress}>
          <PlayWrapper>
            {isPlaying ? (
              <StyledIcon {...icons.pause} />
            ) : (
              <StyledIcon {...icons.play} />
            )}
          </PlayWrapper>
        </TouchableWithoutFeedback>
        <StyledIcon {...icons.skipForward} onPress={skipForward} />
        <TouchableWithoutFeedback onPress={onLoopPress}>
          <IconWrapper>
            {loop ? (
              <TransIcon {...icons.loopOne} />
            ) : (
              <TransIcon {...icons.loop} />
            )}
          </IconWrapper>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WrapperWidth + 10,
  },
});

const PlayWrapper = styled.View`
  justify-content: center;
  align-items: center;
  border-width: 3px;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  border-color: ${contrastColor};
`;

const StyledIcon = styled(Icon)`
  color: ${contrastColor};
  padding: 5px;
`;

const TransIcon = styled(Icon)`
  color: ${contrastTransColor(0.9)};
`;

const DisabledIcon = styled(Icon)`
  color: ${contrastTransColor(0.35)};
`;

const IconWrapper = styled.View`
  height: 28px;
  width: 28px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;

export default PlaybackControl;
