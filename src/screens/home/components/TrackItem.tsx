import React from 'react';
import {StyleSheet} from 'react-native';
import {List, TouchableRipple} from 'react-native-paper';
import {Track} from 'react-native-track-player';
import {Box} from '~components';

type TrackItemProps = {
  item: Track;
  onPress?: () => void;
  onMoreAction?: () => void;
};

export const TrackItem = (props: TrackItemProps) => {
  const {item, onPress, onMoreAction} = props;

  // todo: art work
  return (
    <List.Item
      onPress={onPress}
      title={item.title}
      description={item.artist}
      left={({style}) => {
        return (
          <List.Image
            variant="image"
            style={[style, styles.image]}
            source={require('../../../assets/music.png')}
          />
        );
      }}
      right={() => {
        return (
          <Box justifyContent={'center'}>
            <TouchableRipple
              style={styles.icon}
              borderless
              onPress={onMoreAction}>
              <List.Icon icon="dots-vertical" />
            </TouchableRipple>
          </Box>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 24 - 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
  },
});
