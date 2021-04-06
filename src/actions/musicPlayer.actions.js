import TrackPlayer from 'react-native-track-player';

// * Đặt tên action kiểu domain/eventName
export const CURRENT_TRACK = 'musicPlayer/CURRENT_TRACK';
export const PLAYBACK = 'musicPlayer/PLAYBACK';
export const LOOP_MODE = 'musicPlayer/LOOP_MODE';
export const SHUFFLE_MODE = 'musicPlayer/SHUFFLE_MODE';

export const setCurrentTrack = currentTrack => async dispatch => {
  try {
    await TrackPlayer.reset();

    await TrackPlayer.add(currentTrack);
    dispatch({
      type: CURRENT_TRACK,
      payload: currentTrack,
    });

    TrackPlayer.play();
    dispatch({
      type: PLAYBACK,
      payload: true,
    });
  } catch (reason) {
    throw reason;
  }
};

export const setLoop = isLoop => {
  return {
    type: LOOP_MODE,
    payload: isLoop,
  };
};

export const setShuffle = isShuffle => {
  return {
    type: SHUFFLE_MODE,
    payload: isShuffle,
  };
};
