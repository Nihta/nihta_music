import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const getStatusBarStyle = theme => {
  return `${theme === 'light' ? 'dark-content' : 'light-content'}`;
};

export const getReactNavigationTheme = theme => {
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
