import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {BASE} from '../themes/sizes';

function Content({
  style,
  children,
  contentContainerStyle,
  keyboardAwareScroll = false,
  scrollEnabled = false,
}) {
  const _style = StyleSheet.compose(styles.container, style);
  const _contentContainerStyle = StyleSheet.compose(
    styles.contentContainerStyle,
    contentContainerStyle,
  );

  if (!scrollEnabled) {
    return (
      <View style={[styles.flexOne, _contentContainerStyle]}>{children}</View>
    );
  }

  // ! KeyboardAwareScrollView chưa hoạt động như mong đợi
  return (
    <>
      {keyboardAwareScroll ? (
        <KeyboardAwareScrollView
          scrollEnabled={scrollEnabled}
          style={_style}
          contentContainerStyle={_contentContainerStyle}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <ScrollView
          scrollEnabled={scrollEnabled}
          style={_style}
          contentContainerStyle={_contentContainerStyle}>
          {children}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {},
  contentContainerStyle: {
    paddingHorizontal: BASE * 2,
    paddingVertical: BASE * 2,
  },
});

export default Content;
