import React from 'react';
import {Provider} from 'react-redux';

import RootNavigation from './src/navigations';

import configureStore from './src/store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
