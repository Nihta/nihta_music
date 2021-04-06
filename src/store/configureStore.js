import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

const logger = createLogger({
  colors: false,
});

function configureStore() {
  const composeEnhancers = composeWithDevTools({});

  const middlewares = [ReduxThunk, logger];

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}

export default configureStore;
