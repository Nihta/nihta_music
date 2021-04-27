import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FONT_SIZE_16} from '../themes/typography';

/**
 * @typedef {object} Props
 * @property {string?} title
 * @property {import('react-native').StyleProp<import('react-native').TextStyle} style
 * @param {Props}
 */
function NoData({title, style}) {
  return (
    <>
      <View style={[styles.container, styles.cetnered, style]}>
        <Text style={styles.message} numberOfLines={2}>
          {title ? title : 'Không có dữ liệu!'}
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    marginBottom: 60,
  },
  cetnered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: FONT_SIZE_16,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});

export default NoData;
