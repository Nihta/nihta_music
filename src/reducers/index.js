import {combineReducers} from 'redux';

// Reducer
import mediaReducer from './media/mediaReducer';
import settingReducer from './settingReducer';
import musicPlayerReducer from './musicPlayerReducer';

const rootReducer = combineReducers({
  media: mediaReducer,
  setting: settingReducer,
  musicPlayer: musicPlayerReducer,
});

export default rootReducer;
