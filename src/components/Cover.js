import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {WINDOW_WIDTH} from '../themes/mixins';

const ImageSize = WINDOW_WIDTH * 0.8;

/**
 *
 * @typedef {object} Props
 * @property {string} src
 * @property {import('react-native').StyleProp<import('react-native').TextStyle} style
 * @param {Props} props
 */
function Cover(props) {
  const imgSrc = props.src
    ? {uri: props.src}
    : require('../../assets/images/placeholder.jpg');

  return <Image style={[styles.cover, props.style]} source={imgSrc} />;
}

const styles = StyleSheet.create({
  cover: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: 8,
  },
});

export default Cover;
