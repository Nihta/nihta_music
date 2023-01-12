import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import useTrackStore from '~zustand/useTrackStore';
import {TrackItem} from './TrackItem';

export const ListTrack = () => {
  const tracks = useTrackStore(state => state.tracks);

  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={tracks}
        renderItem={({item}) => (
          <TrackItem
            item={item}
            onPress={() =>
              navigation.navigate('Player', {
                track: item,
              })
            }
          />
        )}
      />
    </>
  );
};
