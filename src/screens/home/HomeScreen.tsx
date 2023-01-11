import React from 'react';
import {Container} from '~components';
import {getMedia} from '~utils';
import useTrackStore from '~zustand/useTrackStore';
import {ListTrack} from './components/ListTrack';

export const HomeScreen = () => {
  const setTracks = useTrackStore(state => state.setTracks);

  React.useEffect(() => {
    getMedia().then(media => {
      setTracks(media);
    });
  }, [setTracks]);

  return (
    <Container safeArea>
      <ListTrack />
    </Container>
  );
};
