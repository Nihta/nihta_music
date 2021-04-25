import React from 'react';
import {Platform, StyleSheet} from 'react-native';

// Components
import Icon from './Icon';
import TouchableItem from './TouchableItem/TouchableItem';

function TouchableIcon({
  disabled = false,
  onPress,
  iconProps: {type, name, size: iconSize, ...rest},
  style,
  iconStyle,
  size = 30,
}) {
  return (
    <TouchableItem
      delayPressIn={0}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      style={[
        styles.container,
        {width: size},
        disabled && styles.disabled,
        style,
      ]}
      borderless>
      <Icon
        type={type}
        name={name}
        size={iconSize}
        style={iconStyle}
        {...rest}
      />
    </TouchableItem>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 10,
      },
    }),
  },
  disabled: {
    opacity: 0.5,
  },
});

export default TouchableIcon;
