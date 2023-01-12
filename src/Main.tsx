import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {Navigation} from '~navigation';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CombinedDefaultTheme} from '~themes/paperTheme';
import theme from '~themes/restyleTheme';

const Main = () => {
  React.useEffect(() => {}, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ThemeProvider theme={theme}>
        <PaperProvider theme={CombinedDefaultTheme}>
          <Navigation />
        </PaperProvider>
      </ThemeProvider>
    </>
  );
};

export default Main;
