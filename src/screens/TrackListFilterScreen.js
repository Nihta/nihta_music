import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

// Containers
import TrackList from '../containers/TrackList';

// Redux
import {
  selectCurrentTrack,
  setCurrentTrack,
} from '../reducers/musicPlayerReducer';

function TrackListFilterScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const trackData = props.route.params.trackData;
  const currentTrack = useSelector(selectCurrentTrack);

  return (
    <>
      <TrackList
        trackData={trackData}
        handlePressItem={async item => {
          if (!currentTrack || item.id !== currentTrack.id) {
            await dispatch(setCurrentTrack(item));
          }
          navigation.navigate('player');
        }}
      />
    </>
  );
}

export default TrackListFilterScreen;
