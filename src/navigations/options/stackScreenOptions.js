import {TransitionPresets} from '@react-navigation/stack';

/**
 * @type {import('@react-navigation/stack').StackNavigationOptions}
 */
export const stackScreenOptions = {
  ...TransitionPresets.ScaleFromCenterAndroid,
  headerStyle: {
    elevation: 0,
  },
  headerTitleStyle: {
    // fontSize: 20,
  },
  headerTitleAlign: 'center',
  // headerBackImage: () => (
  //   <Icon type="ionicon" name="chevron-back-outline" size={26} />
  // ),
};
