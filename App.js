import React from 'react';
import {Provider} from 'react-redux';

import store from './src/config/store';

import RootNavigation from './src/navigations';

function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
