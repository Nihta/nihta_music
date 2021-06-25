import React from 'react';
import {StyleSheet, View} from 'react-native';

import Icon from '../Icon';
import AppText from '../AppText';
import PressableWrapper from '../PressableWrapper';

import {BASE} from '../../themes/sizes';

function ListItem({iconProps, iconStyle, style, text, onPress}) {
  return (
    <PressableWrapper onPress={onPress}>
      <View style={[styles.container, style]}>
        <Icon {...iconProps} style={[styles.icon, iconStyle]} />
        <AppText style={styles.text} text={text} size="f16" numberOfLines={1} />
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
    paddingHorizontal: BASE * 1.5,
  },
});

export default ListItem;
