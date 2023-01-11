import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from '~themes/restyleTheme';
import {Text, View} from 'react-native';

const Main = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <View>
          <Text>Ok</Text>
        </View>
      </ThemeProvider>
    </>
  );
};

export default Main;
