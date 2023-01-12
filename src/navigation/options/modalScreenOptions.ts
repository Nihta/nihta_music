import {Animated} from 'react-native';
import {
  StackCardStyleInterpolator,
  TransitionPresets,
} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';

const {add, multiply} = Animated;

/**
 * Dependent on forModalPresentationIOS (@react-navigation/stack)
 */
const forModalPresentationIOS: StackCardStyleInterpolator = ({
  current,
  next,
  inverted,
  layouts: {screen},
}) => {
  const progress = add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  const translateY = multiply(
    progress.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [screen.height, 0, 0],
    }),
    inverted,
  );

  const overlayOpacity = progress.interpolate({
    inputRange: [0, 1, 1.0001, 2],
    outputRange: [0, 0.3, 1, 1],
  });

  return {
    cardStyle: {
      overflow: 'hidden',
      transform: [{translateY}],
    },
    overlayStyle: {opacity: overlayOpacity},
  };
};

export const modalScreenOptions: StackNavigationOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  gestureEnabled: true,
  headerShown: false,
  cardStyleInterpolator: forModalPresentationIOS,
  presentation: 'modal',
};
