import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'styled-components/native';

import AppText from '../components/AppText';
import Content from '../components/Content';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';

import {BASE} from '../themes/sizes';

function Section({title, subtitle}) {
  const theme = useTheme();
  return (
    <>
      <AppText
        style={[styles.title, {color: theme.textColor}]}
        text={title}
        size="f18"
      />
      <AppText
        style={[styles.content, {color: theme.textSecondaryColor}]}
        text={subtitle}
        size="f16"
      />
    </>
  );
}

function AboutScreen() {
  return (
    <Container>
      <Content scrollEnabled={false} keyboardAwareScroll={false}>
        <View style={styles.center}>
          <Section title="Nihta Music" subtitle="Version 0.0.1" />
          <Section title="Developed by" subtitle="Nihta" />
        </View>
        <SearchInput />
      </Content>
    </Container>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: BASE,
  },
  content: {
    marginBottom: BASE * 4,
  },
});
