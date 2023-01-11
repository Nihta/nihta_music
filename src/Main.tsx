import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from '~themes/restyleTheme';
import {Navigation} from '~navigation';
import {StatusBar} from 'react-native';

const Main = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </>
  );
};

export default Main;
