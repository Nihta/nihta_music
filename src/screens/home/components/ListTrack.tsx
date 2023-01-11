import React from 'react';
import {FlatList} from 'react-native';
import useTrackStore from '~zustand/useTrackStore';
import {TrackItem} from './TrackItem';

export const ListTrack = () => {
  const tracks = useTrackStore(state => state.tracks);

  return (
    <>
      <FlatList
        data={tracks}
        renderItem={({item}) => <TrackItem item={item} />}
      />
    </>
  );
};
