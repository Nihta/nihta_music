import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';

function configureStore() {
  const composeEnhancers = composeWithDevTools({});

  const middlewares = [ReduxThunk];

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}

export default configureStore;
