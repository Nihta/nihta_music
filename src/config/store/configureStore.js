import ReduxThunk from 'redux-thunk';
// import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../../reducers';

// const logger = createLogger({});

function configureStore() {
  const composeEnhancers = composeWithDevTools({});

  const middlewares = [ReduxThunk];

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}

export default configureStore;
