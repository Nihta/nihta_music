import RNTrackPlayer from 'react-native-track-player';
import store from '../store';

import {setCurrentTrack, setIsPlaying} from '../reducers/musicPlayerReducer';

const backgroundPlayback = async track => {
  await RNTrackPlayer.reset();

  await RNTrackPlayer.add(track);
  store.dispatch(setCurrentTrack(track));

  await RNTrackPlayer.play();
  store.dispatch(setIsPlaying(true));
};

export default backgroundPlayback;
