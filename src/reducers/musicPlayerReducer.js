import TrackPlayer from 'react-native-track-player';

// * Action types --------------------------------------------------------------
export const CURRENT_TRACK = 'musicPlayer/CURRENT_TRACK';
export const PLAYBACK = 'musicPlayer/PLAYBACK';
export const LOOP_MODE = 'musicPlayer/LOOP_MODE';
export const SHUFFLE_MODE = 'musicPlayer/SHUFFLE_MODE';

// * Actions -------------------------------------------------------------------

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
 * Lấy track hiện tại (đang phát hoặc tạm dừng)
 * @param {*} state
 * @returns
 */
export const currentTrackSelector = state => state.musicPlayer.currentTrack;

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
