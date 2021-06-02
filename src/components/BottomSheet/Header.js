import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BASE} from '../../themes/sizes';

function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: BASE,
    paddingHorizontal: BASE * 2,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
  textBold: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});

export default Header;
