import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

// Containers
import Container from '../components/Container';
import TrackList from '../containers/TrackList';
import TrackBottomSheet from '../containers/TrackBottomSheet';

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

  const [visibleBts, setVisibleBts] = useState(false);
  const [trackCliked, setTrackCliked] = useState(null);

  const onDismissBottomSheet = () => {
    setVisibleBts(false);
    setTrackCliked(null);
  };

  const handlePressMoreItem = item => {
    setVisibleBts(true);
    setTrackCliked(item);
  };

  return (
    <>
      <TrackBottomSheet
        trackItem={trackCliked}
        visible={visibleBts}
        onPressItem={() => {
          setVisibleBts(false);
        }}
        onDismiss={onDismissBottomSheet}
      />

      <Container>
        <TrackList
          trackData={trackData}
          handlePressItem={async item => {
            if (!currentTrack || item.id !== currentTrack.id) {
              await dispatch(setCurrentTrack(item));
            }
            navigation.navigate('player');
          }}
          handlePressMoreItem={handlePressMoreItem}
        />
      </Container>
    </>
  );
}

export default TrackListFilterScreen;
