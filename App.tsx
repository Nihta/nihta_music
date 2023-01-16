import React from 'react';
import Main from '~Main';
import setupPlayer from '~services/setupPlayer';

setupPlayer()
  .then(() => {
    console.info('The player is ready to be used!');
  })
  .catch(reason => console.error(reason));

export const App = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default App;
