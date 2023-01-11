import React from 'react';
import {TouchableOpacity, GestureResponderEvent} from 'react-native';
import {Icon, IconProps} from '~components/base';
import {useAppTheme} from '~themes/restyleTheme';

type HeaderIconProps = {
  onPress?: (event: GestureResponderEvent) => void;
  iconProps: IconProps;
  activeOpacity?: number;
};

const HeaderIcon = (props: HeaderIconProps) => {
  const {onPress, iconProps, activeOpacity = 0.4} = props;

  const {colors, spacing} = useAppTheme();

  return (
    <TouchableOpacity
      style={{
        padding: spacing.sm,
      }}
      activeOpacity={activeOpacity}
      onPress={onPress}>
      <Icon color={colors.white} {...iconProps} />
    </TouchableOpacity>
  );
};

export default HeaderIcon;
