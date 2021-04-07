import TrackPlayer from 'react-native-track-player';

// * https://react-native-track-player.js.org/getting-started/
export default async function setupPlayer() {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.updateOptions({
    stopWithApp: true,
    // Media controls capabilities
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_SEEK_TO,
      TrackPlayer.CAPABILITY_STOP,
    ],

    // Capabilities that will show up when the notification is in the compact
    // form on Android
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],

    notificationCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_SEEK_TO,
      TrackPlayer.CAPABILITY_STOP,
    ],

    // Icons for the notification on Android (if you don't like the default ones)
    // playIcon: require('./play-icon.png'),
    // pauseIcon: require('./pause-icon.png'),
    // stopIcon: require('./stop-icon.png'),
    // previousIcon: require('./previous-icon.png'),
    // nextIcon: require('./next-icon.png'),
    // icon: require('./notification-icon.png')
  });
}
