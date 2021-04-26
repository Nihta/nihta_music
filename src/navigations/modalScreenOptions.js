import {Animated} from 'react-native';
import {TransitionPresets} from '@react-navigation/stack';

const {add, multiply} = Animated;

/**
 * Đựa trên forModalPresentationIOS (@react-navigation/stack)
 */
const forModalPresentationIOS = ({
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

const modalScreenOptions = {
  ...TransitionPresets.ModalPresentationIOS,
  // ! Comment dòng này để giải quyết: "Warning: Can't perform a React state update on an unmounted component ..."
  gestureEnabled: true,
  headerShown: false,
  cardStyleInterpolator: forModalPresentationIOS,
};

export default modalScreenOptions;
