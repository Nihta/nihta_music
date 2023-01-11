import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Text} from '~components';
import {Music} from '~utils';

type TrackItemProps = {
  item: Music;
  onPress?: () => void;
};

export const TrackItem = (props: TrackItemProps) => {
  const {item, onPress} = props;

  // todo: art work
  return (
    <TouchableOpacity onPress={onPress}>
      <Box flexDirection={'row'} mx={'lg'} mb={'md'}>
        <Box bg={'primaryLight'} width={48} height={48} borderRadius={4} />
        <Box ml={'sm'} justifyContent={'center'} flex={1}>
          <Text fontSize={15} fontWeight={'500'} numberOfLines={1}>
            {item.title}
          </Text>
          <Text numberOfLines={1}>{item.author}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
