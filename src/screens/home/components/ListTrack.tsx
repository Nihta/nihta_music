import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {FlatList} from 'react-native';
import {ActionSheetRef} from 'react-native-actions-sheet';
import useTrackStore from '~zustand/useTrackStore';
import {TrackActions} from './TrackActions';
import {TrackItem} from './TrackItem';

export const ListTrack = () => {
  const tracks = useTrackStore(state => state.tracks);

  const navigation = useNavigation();

  const actionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <>
      <TrackActions actionSheetRef={actionSheetRef} />
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
            onMoreAction={() => actionSheetRef.current?.show()}
          />
        )}
      />
    </>
  );
};
