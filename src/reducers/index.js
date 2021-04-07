import {combineReducers} from 'redux';

// Reducer
import mediaReducer from './mediaReducer';
import settingReducer from './settingReducer';
import musicPlayerReducer from './musicPlayer.reducer';

const rootReducer = combineReducers({
  media: mediaReducer,
  setting: settingReducer,
  musicPlayer: musicPlayerReducer,
});

export default rootReducer;
