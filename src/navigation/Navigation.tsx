import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './utils';
import {RootStack} from './RootStack';
import {CombinedDefaultTheme} from '~themes/paperTheme';

export const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={CombinedDefaultTheme}
      onReady={() => {
        console.log('[Navigation] onReady');
      }}>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
