import TrackPlayer from 'react-native-track-player';

// Redux
import store from '../config/store';
import {
  musicPlayerJump,
  selectCurrentTrack,
  selectLoop,
  setCurrentTrack,
  setIsPlaying,
} from '../reducers/musicPlayerReducer';

// * https://react-native-track-player.js.org/getting-started/#playback-service
// * https://react-native-track-player.js.org/documentation/#events

/**
 * ! Cần phải đóng ứng dụng rồi mở lại để nhũng thay đổi code được áp dụng
 */
export default async function () {
  /**
   * Fired when the user presses the play button.
   * Only fired if the CAPABILITY_PLAY is allowed.
   */
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
    store.dispatch(setIsPlaying(true));
  });

  /**
   * Fired when the user presses the pause button.
   * Only fired if the CAPABILITY_PAUSE is allowed or if there’s a change in
   * outputs (e.g.: headphone disconnected).
   */
  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
    store.dispatch(setIsPlaying(false));
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy();
  });

  /**
   * Fired when the user presses the next track button.
   * Only fired if the CAPABILITY_SKIP_TO_NEXT is allowed.
   */
  TrackPlayer.addEventListener('remote-next', () => {
    store.dispatch(musicPlayerJump('next'));
  });

  /**
   * Fired when the user presses the previous track button.
   * Only fired if the CAPABILITY_SKIP_TO_PREVIOUS is allowed.
   */
  TrackPlayer.addEventListener('remote-previous', () => {
    store.dispatch(musicPlayerJump('previous'));
  });

  /**
   * Fired when the queue reaches the end.
   */
  TrackPlayer.addEventListener('playback-queue-ended', ({position}) => {
    const state = store.getState();
    const loop = selectLoop(state);
    const currentTrack = selectCurrentTrack(state);

    if (position > 0) {
      if (loop) {
        store.dispatch(setCurrentTrack(currentTrack));
      } else {
        store.dispatch(musicPlayerJump('next'));
      }
    }
  });
}
