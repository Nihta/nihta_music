import React from 'react';
import {goBack} from '~navigation';
import {HeaderIcon} from '.';

const HeaderIconGoBack = () => {
  return (
    <HeaderIcon
      iconProps={{
        name: 'chevron-back-outline',
        type: 'Ionicons',
      }}
      onPress={() => goBack()}
    />
  );
};

export default HeaderIconGoBack;
