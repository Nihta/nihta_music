import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'styled-components/native';

function AboutScreen() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: theme.textColor}]}>Nihta music</Text>
      <Text style={[styles.content, {color: theme.textSecondaryColor}]}>
        Version 0.0.1
      </Text>
      <Text style={[styles.title, {color: theme.textColor}]}>Developed by</Text>
      <Text style={[styles.content, {color: theme.textSecondaryColor}]}>
        Nihta
      </Text>
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
    fontSize: 16,
    marginBottom: 40,
  },
});
