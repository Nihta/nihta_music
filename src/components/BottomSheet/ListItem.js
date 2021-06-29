import React from 'react';
import {StyleSheet, View} from 'react-native';

import Icon from '../Icon';
import AppText from '../AppText';
import TouchableItem from '../TouchableItem/TouchableItem';

import {BASE} from '../../themes/sizes';

function ListItem({iconProps, iconStyle, style, text, onPress}) {
  return (
    <TouchableItem onPress={onPress}>
      <View style={[styles.container, style]}>
        <Icon {...iconProps} style={[styles.icon, iconStyle]} />
        <AppText style={styles.text} text={text} size="f16" numberOfLines={1} />
      </View>
    </TouchableItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: BASE * 1.5,
    paddingHorizontal: BASE * 2,
  },
  icon: {
    fontSize: 24,
  },
  text: {
    paddingHorizontal: BASE * 1.5,
    color: '#000',
  },
});

export default ListItem;
