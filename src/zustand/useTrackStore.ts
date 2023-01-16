import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Track} from 'react-native-track-player';

interface State {
  tracks: Track[];
  setTracks: (tracks: Track[]) => void;
}

const useTrackStore = create<State>()(
  persist(
    set => ({
      tracks: [],
      setTracks: tracks => set({tracks}),
    }),
    {
      name: '@zustand_track',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => {
        return {tracks: state.tracks};
      },
    },
  ),
);

export default useTrackStore;
