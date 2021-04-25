import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const ANDROID_VERSION_LOLLIPOP = 21;

/**
 * @typedef {object} Props
 * @prop {string} pressColor
 * @prop {boolean} disabled
 * @prop {boolean} borderless
 * @prop {number} delayPressIn
 * @prop {() => void} onPress
 * @param {Props} props
 */
function TouchableItem(props) {
  const {
    borderless = false,
    pressColor = 'rgba(0, 0, 0, .32)',
    style,
    children,
    ...rest
  } = props;

  /*
   * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
   * therefore only enable it on Android Lollipop and above.
   *
   * All touchables on Android should have the ripple effect according to
   * platform design guidelines.
   * We need to pass the background prop to specify a borderless ripple effect.
   */
  if (
    Platform.OS === 'android' &&
    Platform.Version >= ANDROID_VERSION_LOLLIPOP
  ) {
    return (
      <TouchableNativeFeedback
        {...rest}
        useForeground={TouchableNativeFeedback.canUseNativeForeground()}
        background={TouchableNativeFeedback.Ripple(pressColor, borderless)}>
        <View style={style}>{React.Children.only(children)}</View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity style={style} {...rest}>
        {children}
      </TouchableOpacity>
    );
  }
}

export default TouchableItem;
