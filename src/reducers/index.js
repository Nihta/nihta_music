import {combineReducers} from 'redux';

import settingReducer from './setting.reducer';

const rootReducer = combineReducers({
  setting: settingReducer,
});

export default rootReducer;
