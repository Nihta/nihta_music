import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';

// * https://react-native-track-player.js.org/getting-started/
export default async function setupPlayer() {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.updateOptions({
    android: {
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
    },
    // Media controls capabilities
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.SeekTo,
      Capability.Stop,
    ],

    // Capabilities that will show up when the notification is in the compact
    // form on Android
    compactCapabilities: [Capability.Play, Capability.Pause],

    notificationCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.SeekTo,
      Capability.Stop,
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
