import React from 'react';
import {BASE} from '../../themes/sizes';

import Icon from '../Icon';
import PressableWrapper from '../PressableWrapper';

import {StyleSheet, Text, View} from 'react-native';

function ListItem({iconProps, iconStyle, style, text, onPress}) {
  return (
    <PressableWrapper onPress={onPress}>
      <View style={[styles.container, style]}>
        <Icon {...iconProps} style={[styles.icon, iconStyle]} />
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      </View>
    </PressableWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: BASE,
    paddingHorizontal: BASE * 2,
  },
  icon: {
    fontSize: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: BASE * 1.5,
  },
});

export default ListItem;
