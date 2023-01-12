import TrackPlayer, {Event} from 'react-native-track-player';

/**
 * ! Cần phải đóng ứng dụng rồi mở lại để những thay đổi code được áp dụng
 */
export default async function () {
  /**
   * Fired when the user presses the play button.
   * Only fired if the CAPABILITY_PLAY is allowed.
   */
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
    // store.dispatch(setIsPlaying(true));
  });

  /**
   * Fired when the user presses the pause button.
   * Only fired if the CAPABILITY_PAUSE is allowed or if there’s a change in
   * outputs (e.g.: headphone disconnected).
   */
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
    // store.dispatch(setIsPlaying(false));
  });

  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    // !destroy and stop have been removed
    // TrackPlayer.destroy();
  });

  /**
   * Fired when the user presses the next track button.
   * Only fired if the CAPABILITY_SKIP_TO_NEXT is allowed.
   */
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    // store.dispatch(musicPlayerJump('next'));
  });

  /**
   * Fired when the user presses the previous track button.
   * Only fired if the CAPABILITY_SKIP_TO_PREVIOUS is allowed.
   */
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    // store.dispatch(musicPlayerJump('previous'));
  });

  /**
   * Fired when the queue reaches the end.
   */
  TrackPlayer.addEventListener(Event.PlaybackQueueEnded, ({position}) => {
    console.log(`PlaybackQueueEnded: ${position}`);

    // const state = store.getState();
    // const loop = selectLoop(state);
    // const currentTrack = selectCurrentTrack(state);
    // if (position > 0) {
    //   if (loop) {
    //     store.dispatch(setCurrentTrack(currentTrack));
    //   } else {
    //     store.dispatch(musicPlayerJump('next'));
    //   }
    // }
  });
}
