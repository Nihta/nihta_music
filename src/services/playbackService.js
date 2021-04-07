import TrackPlayer from 'react-native-track-player';

import store from '../store';

import {PLAYBACK} from '../actions/musicPlayer.actions';

// * https://react-native-track-player.js.org/getting-started/#playback-service
// * https://react-native-track-player.js.org/documentation/#events
export default async function () {
  /**
   * Fired when the user presses the play button.
   * Only fired if the CAPABILITY_PLAY is allowed.
   */
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
    store.dispatch({type: PLAYBACK, payload: true});
  });

  /**
   * Fired when the user presses the pause button.
   * Only fired if the CAPABILITY_PAUSE is allowed or if there’s a change in
   * outputs (e.g.: headphone disconnected).
   */
  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
    store.dispatch({type: PLAYBACK, payload: false});
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy();
    console.log('destroy');
  });

  /**
   * Fired when the user presses the next track button.
   * Only fired if the CAPABILITY_SKIP_TO_NEXT is allowed.
   */
  TrackPlayer.addEventListener('remote-next', () => {});

  /**
   * Fired when the user presses the previous track button.
   * Only fired if the CAPABILITY_SKIP_TO_PREVIOUS is allowed.
   */
  TrackPlayer.addEventListener('remote-previous', () => {});

  /**
   * Fired when the queue reaches the end.
   */
  TrackPlayer.addEventListener(
    'playback-queue-ended',
    ({position, track}) => {},
  );
}
