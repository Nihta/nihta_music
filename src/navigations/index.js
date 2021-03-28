import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootStack from './RootStack';

import {navigationRef} from './utils/NavigationService';

function RootNavigation(props) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default RootNavigation;
