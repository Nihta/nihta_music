import React from 'react';
import {StatusBar} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Redux
import {selectTheme} from '../reducers/settingReducer';

// Theme
import * as themes from '../themes';

// Navigation
import RootStack from './RootStack';
import {navigationRef} from './utils/NavigationService';

function RootNavigation(props) {
  // const isDarkMode = useColorScheme() === 'dark';

  // Lấy theme hiện tại
  const theme = useSelector(selectTheme);

  const barStyle = `${theme === 'light' ? 'dark-content' : 'light-content'}`;

  // https://reactnavigation.org/docs/themes/
  const baseTheme = theme === 'light' ? DefaultTheme : DarkTheme;
  const myTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
    },
    dark: true,
  };

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} theme={myTheme}>
          <ThemeProvider theme={themes[theme]}>
            <StatusBar barStyle={barStyle} />
            <RootStack />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default RootNavigation;
