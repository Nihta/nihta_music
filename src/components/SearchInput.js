import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useTheme} from 'styled-components/native';

import Icon from './Icon';

function SearchInput({
  style,
  onFocus,
  onBlur,
  value,
  setSearchInput,
  placeholder,
  onChange,
}) {
  const theme = useTheme();

  return (
    <>
      <View
        style={[styles.container, style, {backgroundColor: theme.background}]}>
        <Icon
          name="search-outline"
          type="ionicon"
          color={theme.textColor}
          style={styles.icon}
        />
        <TextInput
          placeholder={placeholder}
          allowFontScaling={false}
          clearButtonMode="while-editing"
          placeholderTextColor={'#ccc'}
          autoCorrect={false}
          returnKeyType="search"
          value={value}
          onChangeText={setSearchInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          style={[styles.input, {color: theme.textColor}]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    paddingRight: 30,
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 26,
    marginLeft: 18,
    marginRight: 10,
  },
});

export default SearchInput;
