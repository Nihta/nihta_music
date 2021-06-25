import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'styled-components/native';

import AppText from '../components/AppText';

function AboutScreen() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <AppText
        style={[styles.title, {color: theme.textColor}]}
        text="Nihta Music"
        size="f18"
      />
      <AppText
        style={[styles.content, {color: theme.textSecondaryColor}]}
        text="Version 0.0.1"
        size="f16"
      />

      <AppText
        style={[styles.title, {color: theme.textColor}]}
        text="Developed by"
        size="f18"
      />

      <AppText
        style={[styles.content, {color: theme.textSecondaryColor}]}
        text="Nihta"
        size="f16"
      />
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  content: {
    marginBottom: 40,
  },
});
