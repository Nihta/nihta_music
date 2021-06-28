import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'styled-components/native';

import AppText from '../components/AppText';
import Icon from './Icon';

function NodataNew({text}) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Icon
        name="search-outline"
        type="ionicon"
        color={theme.textColor}
        style={styles.icon}
      />
      <AppText
        text={text ? text : 'Không có dữ liệu'}
        size="f16"
        style={[{color: theme.textColor}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
});

export default NodataNew;
