import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

const placeholder = require('../../assets/images/placeholder.jpg');

const ImageSize = Dimensions.get('window').width * 0.82;

function Cover(props) {
  const imgSrc = props.src ? {uri: props.src} : placeholder;

  return <Image style={styles.cover} source={imgSrc} />;
}

const styles = StyleSheet.create({
  cover: {
    height: ImageSize,
    width: ImageSize,
    borderRadius: 8,
  },
});

export default Cover;
