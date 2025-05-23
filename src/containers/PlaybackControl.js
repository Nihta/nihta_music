import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Redux
import {
  setLoop,
  selectLoop,
  setShuffle,
  setIsPlaying,
  selectShuffle,
  selectIsPlaying,
  musicPlayerJump,
} from '../reducers/musicPlayerReducer';

// Utils

// Components
import Icon from '../components/Icon';
import PressableIcon from '../components/PressableIcon';
import Toast from '../components/Toast';

// Themes
import {WINDOW_WIDTH} from '../themes/mixins';

const WrapperWidth = WINDOW_WIDTH * 0.8;

const icons = {
  play: {
    name: 'play-arrow',
    type: 'material',
    size: 32,
  },
  pause: {
    name: 'pause',
    type: 'material',
    size: 32,
  },
  skipNext: {
    name: 'skip-next',
    type: 'material',
    size: 40,
  },
  skipPrevious: {
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
  const shuffle = useSelector(selectShuffle);
  const isPlaying = useSelector(selectIsPlaying);

  const skipNext = () => {
    dispatch(musicPlayerJump('next'));
  };

  const skipPrevious = () => {
    dispatch(musicPlayerJump('previous'));
  };

  const onLoopPress = () => {
    if (loop) {
      Toast('Lặp lại tất cả bài hát');
      dispatch(setLoop(false));
    } else {
      Toast('Lặp lại bài hát hiện tại');
      dispatch(setLoop(true));
    }
  };

  const onPlayPress = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  const onShufflePress = () => {
    if (shuffle) {
      Toast('Phát tuần tự');
      dispatch(setShuffle(false));
    } else {
      Toast('Phát ngẫu nhiên');
      dispatch(setShuffle(true));
    }
  };

  return (
    <>
      <View style={styles.mainWrapper}>
        <PressableIcon
          onPress={onShufflePress}
          iconProps={icons.shuffle}
          iconStyle={[
            styles.icon,
            shuffle ? styles.iconActive : styles.iconDisable,
          ]}
        />

        <PressableIcon
          onPress={skipPrevious}
          iconProps={icons.skipPrevious}
          iconStyle={styles.icon}
        />

        <TouchableWithoutFeedback onPress={onPlayPress}>
          <View style={styles.btnPlayWrapper}>
            {isPlaying ? (
              <Icon style={styles.icon} {...icons.pause} />
            ) : (
              <Icon style={styles.icon} {...icons.play} />
            )}
          </View>
        </TouchableWithoutFeedback>

        <PressableIcon
          onPress={skipNext}
          iconProps={icons.skipNext}
          iconStyle={styles.icon}
        />

        <PressableIcon
          onPress={onLoopPress}
          iconProps={loop ? icons.loopOne : icons.loop}
          iconStyle={styles.icon}
        />
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
  btnPlayWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#fff',
    width: 60,
    height: 60,
  },
  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
  iconActive: {
    color: '#fff',
  },
  iconDisable: {
    color: 'rgba(255,255,255,0.4)',
  },
});

export default PlaybackControl;
