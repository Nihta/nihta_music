import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppTheme} from '~themes/restyleTheme';

type ContainerProps = {
  style?: StyleProp<ViewStyle>;
  safeArea?: boolean;
  children: React.ReactNode;
};

const Container = ({children, style, safeArea = false}: ContainerProps) => {
  const {colors} = useAppTheme();

  return (
    <>
      {safeArea && (
        <SafeAreaView
          style={[
            styles.container,
            {
              backgroundColor: colors.background,
            },
            style,
          ]}>
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
