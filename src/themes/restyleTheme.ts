import {createTheme, useTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#D8E9A8',
  greenPrimary: '#4E9F3D',
  greenDark: '#1E5128',

  black: '#000',
  white: '#fff',
  red: '#f44336',
};

const theme = createTheme({
  colors: {
    background: '#191A19',
    white: palette.white,
    black: palette.black,
    primary: palette.greenPrimary,
    onPrimary: palette.white,
    primaryLight: palette.greenLight,
    primaryDark: palette.greenDark,
    text: palette.white,
    textDisabled: 'rgba(255,255,255,0.4)',
    error: palette.red,
    networkImageBackground: '#777',
    border: '#999',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    small: {
      fontSize: 12,
      lineHeight: 15,
    },
    defaults: {
      fontSize: 14,
      lineHeight: 17,
      color: 'text',
    },
    title: {
      fontSize: 16,
      lineHeight: 19,
      fontWeight: '500',
    },
  },
});

export type Theme = typeof theme;
export default theme;

export const useAppTheme = useTheme<Theme>;
