import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ContainerProps = {
  style?: StyleProp<ViewStyle>;
  safeArea?: boolean;
  children: React.ReactNode;
};

const Container = ({children, style, safeArea = false}: ContainerProps) => {
  return (
    <>
      {safeArea && (
        <SafeAreaView style={[styles.container, style]}>
          {children}
        </SafeAreaView>
      )}

      {!safeArea && <View style={[styles.container, style]}>{children}</View>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
