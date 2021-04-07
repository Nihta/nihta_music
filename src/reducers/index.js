import {combineReducers} from 'redux';

// Reducer
import settingReducer from './setting.reducer';
import mediaReducer from './mediaReducer';
import musicPlayerReducer from './musicPlayer.reducer';

const rootReducer = combineReducers({
  setting: settingReducer,
  media: mediaReducer,
  musicPlayer: musicPlayerReducer,
});

export default rootReducer;
