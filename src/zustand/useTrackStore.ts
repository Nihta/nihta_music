import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Music} from '~utils';

interface State {
  tracks: Music[];
  setTracks: (tracks: Music[]) => void;
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
