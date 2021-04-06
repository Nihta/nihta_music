import {
  CURRENT_TRACK,
  LOOP_MODE,
  SHUFFLE_MODE,
  PLAYBACK,
} from '../actions/musicPlayer.actions';

const INITIAL_STATE = {
  currentTrack: null,
  loop: false,
  shuffle: false,
  isPlaying: false,
};

export default function (state = INITIAL_STATE, {type, payload}) {
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
}
