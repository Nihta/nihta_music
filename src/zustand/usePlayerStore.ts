import React from 'react';
import TrackPlayer, {
  State as PlaybackState,
  Track,
  usePlaybackState,
} from 'react-native-track-player';
import {create} from 'zustand';

interface PlayerStoreState {
  currentTrack?: Track;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  playbackState: PlaybackState;
  setPlaybackState: (playbackState: PlaybackState) => void;
}

const usePlayerStore = create<PlayerStoreState>()((set, get) => ({
  currentTrack: undefined,
  playbackState: PlaybackState.None,
  setPlaybackState: playbackState => set({playbackState}),
  playTrack: async track => {
    await TrackPlayer.reset();
    await TrackPlayer.add(track);
    await TrackPlayer.play();
    set({currentTrack: track});
  },
  togglePlay: () => {
    const {playbackState, currentTrack, playTrack} = get();

    if (playbackState === PlaybackState.None && currentTrack) {
      playTrack(currentTrack);
    } else {
      if (playbackState === PlaybackState.Paused) {
        TrackPlayer.play();
      } else {
        TrackPlayer.pause();
      }
    }
  },
}));

export default usePlayerStore;

export const useWatchPlaybackState = () => {
  const playerState = usePlaybackState();
  const setPlaybackState = usePlayerStore(state => state.setPlaybackState);
  React.useEffect(() => {
    console.log('playerState', playerState);
    setPlaybackState(playerState);
  }, [playerState, setPlaybackState]);
};

export const useWatchForPlayerStore = () => {
  useWatchPlaybackState();
};
