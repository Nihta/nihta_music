import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Redux
import {selectTheme} from '../reducers/settingReducer';

// Theme
import * as themes from '../themes';

// Navigations
import {navigationRef} from './navigationServices';
import RootStack from './RootStack';

// Screens
import SplashScreen from '../screens/SplashScreen';

// Ultis
import {getReactNavigationTheme, getStatusBarStyle} from '../utils/theme';

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
