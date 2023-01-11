import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DarkTheme} from '@react-navigation/native';
import {navigationRef} from './utils';
import {RootStack} from './RootStack';

export const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DarkTheme,
      }}
      onReady={() => {
        console.log('[Navigation] onReady');
      }}>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
