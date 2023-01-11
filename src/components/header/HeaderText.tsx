import React from 'react';
import {Box, Text} from '~components/base';

type TextHeaderProps = {
  title: string;
  subTitle?: string;
};

const HeaderText = (props: TextHeaderProps) => {
  const {title, subTitle} = props;

  return (
    <Box alignItems={'center'}>
      <Text variant={'title'} numberOfLines={1}>
        {title}
      </Text>
      {subTitle && <Text numberOfLines={1}>{subTitle}</Text>}
    </Box>
  );
};

export default HeaderText;
