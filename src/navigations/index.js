import React, {useEffect, useState} from 'react';
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

// Navigations
import {navigationRef} from './utils/navigationServices';
import RootStack from './RootStack';

// Screens
import SplashScreen from '../screens/SplashScreen';

const getReactNavigationTheme = theme => {
  // https://reactnavigation.org/docs/themes/
  const baseTheme = theme === 'light' ? DefaultTheme : DarkTheme;

  const resTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
    },
    dark: true,
  };

  return resTheme;
};

const getStatusBarStyle = theme => {
  return `${theme === 'light' ? 'dark-content' : 'light-content'}`;
};

function RootNavigation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Lấy theme hiện tại
  const theme = useSelector(selectTheme);
  const barStyle = getStatusBarStyle(theme);
  const naviTheme = getReactNavigationTheme(theme);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} theme={naviTheme}>
          <ThemeProvider theme={themes[theme]}>
            <StatusBar
              barStyle={barStyle}
              translucent={true}
              backgroundColor={'transparent'}
            />
            {isLoading ? <SplashScreen /> : <RootStack />}
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default RootNavigation;
