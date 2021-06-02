import React from 'react';
import {TouchableOpacity} from 'react-native';

/**
 * TouchableOpacity
 * @typedef Props
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} style
 * @property {number} activeOpacity
 * @param {Props} props
 */
function PressableWrapper({
  children,
  style,
  onPress,
  activeOpacity,
  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      activeOpacity={activeOpacity}
      {...otherProps}>
      {children}
    </TouchableOpacity>
  );
}

PressableWrapper.defaultProps = {
  activeOpacity: 0.6,
};

export default PressableWrapper;
