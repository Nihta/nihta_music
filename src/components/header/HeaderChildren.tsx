import React from 'react';
import {StyleProp, ViewStyle, View, FlexAlignType} from 'react-native';

export type Placement = 'left' | 'center' | 'right';

const ALIGN_STYLE: Record<Placement, FlexAlignType> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

type HeaderChildrenProps = {
  placement: Placement;
  style: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const HeaderChildren = (props: HeaderChildrenProps) => {
  const {style, placement, children} = props;

  return (
    <View style={[{alignItems: ALIGN_STYLE[placement]}, style]}>
      {children}
    </View>
  );
};

export default HeaderChildren;
