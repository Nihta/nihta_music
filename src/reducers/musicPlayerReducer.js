import TrackPlayer from 'react-native-track-player';

// * Action types --------------------------------------------------------------
export const CURRENT_TRACK = 'musicPlayer/CURRENT_TRACK';
export const PLAYBACK = 'musicPlayer/PLAYBACK';
export const LOOP_MODE = 'musicPlayer/LOOP_MODE';
export const SHUFFLE_MODE = 'musicPlayer/SHUFFLE_MODE';

// * Actions -------------------------------------------------------------------

/**
 * Đặt trạng thái cho player
 * @param {boolean} isPlaying true để phát, false để tạm dừng
 */
export const setIsPlaying = isPlaying => async dispatch => {
  if (isPlaying) {
    await TrackPlayer.play();
    dispatch({
      type: PLAYBACK,
      payload: true,
    });
  } else {
    await TrackPlayer.pause();
    dispatch({
      type: PLAYBACK,
      payload: false,
    });
  }
};

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

// * Selector ------------------------------------------------------------------
/**
 *
 * @param {*} state
 * @returns {boolean}
 */
export const selectIsPlaying = state => state.musicPlayer.isPlaying;

/**
 * Lấy track hiện tại (đang phát hoặc tạm dừng)
 * @param {*} state
 */
export const currentTrackSelector = state => state.musicPlayer.currentTrack;

export const selectLoop = state => state.musicPlayer.loop;

export const selectShuffle = state => state.musicPlayer.shuffle;

// * Reducer -------------------------------------------------------------------
const initialState = {
  currentTrack: null,
  loop: false,
  shuffle: false,
  isPlaying: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CURRENT_TRACK:
      return {
        ...state,
        currentTrack: payload,
      };
    case LOOP_MODE:
      return {
        ...state,
        loop: payload,
      };
    case SHUFFLE_MODE:
      return {
        ...state,
        shuffle: payload,
      };
    case PLAYBACK:
      return {
        ...state,
        isPlaying: payload,
      };
    default:
      return state;
  }
};
