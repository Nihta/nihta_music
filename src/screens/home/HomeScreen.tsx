import React from 'react';
import {Container} from '~components';
import {getAllTracks} from '~utils';
import {useWatchPlaybackState} from '~zustand/usePlayerStore';
import useTrackStore from '~zustand/useTrackStore';
import {ListTrack} from './components/ListTrack';

export const HomeScreen = () => {
  const setTracks = useTrackStore(state => state.setTracks);

  React.useEffect(() => {
    getAllTracks().then(tracks => {
      setTracks(tracks);
    });
  }, [setTracks]);

  return (
    <Container>
      <ListTrack />
    </Container>
  );
};
