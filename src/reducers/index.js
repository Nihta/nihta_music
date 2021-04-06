import {combineReducers} from 'redux';

// Reducer
import settingReducer from './setting.reducer';
import musicPlayerReducer from './musicPlayer.reducer';

const rootReducer = combineReducers({
  setting: settingReducer,
  musicPlayer: musicPlayerReducer,
});

export default rootReducer;
