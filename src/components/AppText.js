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
  fontBold: {
    fontWeight: 'bold',
  },
});

export default AppText;
