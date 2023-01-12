import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {Music} from '~utils';

type TrackItemProps = {
  item: Music;
  onPress?: () => void;
};

export const TrackItem = (props: TrackItemProps) => {
  const {item, onPress} = props;

  // todo: art work
  return (
    <List.Item
      onPress={onPress}
      title={item.title}
      description={item.author}
      left={({style}) => {
        return (
          <List.Image
            variant="image"
            style={[style, styles.image]}
            source={require('../../../assets/music.png')}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
  },
});
