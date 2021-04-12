import React from 'react';
import {TouchableNativeFeedback, View, StyleSheet} from 'react-native';

import Icon from './Icon';

function PressableIcon({
  size = 50,
  onPress,
  iconProps: {type, name, size: iconSize},
  iconStyle,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.wrapperIcon}>
          <Icon type={type} name={name} size={iconSize} style={iconStyle} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  wrapperIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PressableIcon;
