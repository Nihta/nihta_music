import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {selectCurrentTrack} from '../reducers/musicPlayerReducer';

import {PLAYER_FOOTER_HEIGHT} from '../themes/sizes';

function Container({children, style, safeArea = false}) {
  const currentTrack = useSelector(selectCurrentTrack);

  // Trường hợp playerFooter ẩn hiển
  const mb = currentTrack === null ? 0 : PLAYER_FOOTER_HEIGHT;
  return (
    <>
      {safeArea && (
        <SafeAreaView style={[styles.container, {marginBottom: mb}, style]}>
          {children}
        </SafeAreaView>
      )}

      {!safeArea && (
        <View style={[styles.container, {marginBottom: mb}, style]}>
          {children}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mbWithPlayerFooter: {
    marginBottom: PLAYER_FOOTER_HEIGHT,
  },
  mb0: {
    marginBottom: 0,
  },
});

export default Container;
