import TrackPlayer from 'react-native-track-player';
import {create} from 'zustand';
import setupPlayer from '~services/setupPlayer';
import {Music} from '~utils';

setupPlayer()
  .then(() => {
    console.info('The player is ready to be used!');
  })
  .catch(reason => console.error(reason));

interface State {
  currentTrack?: Music;
  playTrack: (track: Music) => void;
}

const usePlayerStore = create<State>()(set => ({
  currentTrack: undefined,
  playTrack: async track => {
    await TrackPlayer.reset();
    await TrackPlayer.add({
      url: track.path,
      artist: track.author,
      title: track.title,
      duration: parseInt(track.duration, 10) / 1000,
    });
    await TrackPlayer.play();
    set({currentTrack: track});
  },
}));

export default usePlayerStore;
