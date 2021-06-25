import React from 'react';
import {StyleSheet, Text} from 'react-native';

function AppText({
  text,
  style,
  children,
  size = 'f16',
  bold = false,
  ...otherProps
}) {
  let fontSize = {};

  if (size === 'f16') {
    fontSize = styles.f16;
  } else if (size === 'f18') {
    fontSize = styles.f18;
  }

  return (
    <>
      <Text
        style={[styles.text, fontSize, bold && styles.fontBold, style]}
        {...otherProps}>
        {text ? text : children}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
  },
  f16: {
    fontSize: 16,
    lineHeight: 20,
  },
  f18: {
    fontSize: 18,
    lineHeight: 22,
  },
  fontBold: {
    fontWeight: 'bold',
  },
});

export default AppText;
