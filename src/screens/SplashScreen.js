import React from 'react';
import {StyleSheet, View} from 'react-native';

import LogoSvg from '../components/svg/LogoSvg';

import AppText from '../components/AppText';

const LOGO_SIZE = 120;

function SplashScreen() {
  return (
    <View style={styles.container}>
      <LogoSvg height={LOGO_SIZE} width={LOGO_SIZE} />
      <AppText style={styles.text} text="Nihta Music" size="f18" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56ccf2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 16,
    color: '#333333',
  },
});

export default SplashScreen;
