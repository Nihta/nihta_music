import React from 'react';
import {StyleProp, ViewStyle, View, StyleSheet} from 'react-native';

import HeaderChildren from './HeaderChildren';

type HeaderProps = {
  /** Define your left component here. */
  leftComponent?: React.ReactElement<{}>;

  /** Define your center component here. */
  centerComponent?: React.ReactElement<{}>;

  /** Define your right component here. */
  rightComponent?: React.ReactElement<{}>;

  /** Alignment for title. */
  placement?: 'left' | 'center' | 'right';

  /** Styling around the main container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Styling for container around the centerComponent. */
  centerContainerStyle?: StyleProp<ViewStyle>;

  /** Styling for container around the leftComponent. */
  leftContainerStyle?: StyleProp<ViewStyle>;

  /** Styling for container around the rightComponent. */
  rightContainerStyle?: StyleProp<ViewStyle>;

  /** Add children component to the header. */
  children?: JSX.Element | JSX.Element[];

  /**
   * Elevation for header
   * ! Not working
   * */
  elevated?: boolean;
};

const Header = (props: HeaderProps) => {
  const {
    placement = 'center',
    containerStyle,
    leftComponent,
    leftContainerStyle,
    centerComponent,
    centerContainerStyle,
    rightComponent,
    rightContainerStyle,
    elevated = false,
  } = props;

  return (
    <View
      style={[
        styles.container,
        elevated && styles.elevatedHeader,
        containerStyle,
      ]}>
      <HeaderChildren
        style={StyleSheet.flatten([
          placement === 'center' && styles.flexOne,
          leftContainerStyle,
        ])}
        placement="left">
        {leftComponent}
      </HeaderChildren>

      <HeaderChildren
        style={StyleSheet.flatten([
          styles.centerContainer,
          placement !== 'center' && {
            paddingHorizontal: 16,
          },
          centerContainerStyle,
        ])}
        placement={placement}>
        {centerComponent}
      </HeaderChildren>

      <HeaderChildren
        style={[placement === 'center' && styles.flexOne, rightContainerStyle]}
        placement="right">
        {rightComponent}
      </HeaderChildren>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    zIndex: 10,
  },
  centerContainer: {
    flex: 3,
  },
  flexOne: {
    flex: 1,
  },
  elevatedHeader: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8.0,
    elevation: 24,
  },
});

export default Header;
