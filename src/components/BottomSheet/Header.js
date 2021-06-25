import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppText from '../AppText';

import {BASE} from '../../themes/sizes';

function Header({title}) {
  return (
    <View style={styles.container}>
      <AppText size="f16" text={title} bold />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: BASE,
    paddingHorizontal: BASE * 2,
  },
});

export default Header;
