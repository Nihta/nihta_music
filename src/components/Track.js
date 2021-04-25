import React from 'react';
import {View, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';
import styled from 'styled-components/native';

// Components
import TouchableIcon from './TouchableIcon';

// Styles
import {WINDOW_WIDTH} from '../themes/mixins';
import {SCALE_16} from '../themes/spacing';
import {FONT_SIZE_14, FONT_SIZE_16} from '../themes/typography';

const placeholder = require('../../assets/images/placeholder.jpg');

const icons = {
  more: {
    name: 'more-vertical',
    type: 'feather',
    size: 30,
  },
};

function Track(props) {
  const {item, onPress} = props;

  const coverSrc = item.artwork ? {uri: item.artwork} : placeholder;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <Image source={coverSrc} style={styles.thumbnail} />
        <View style={styles.textWrapper}>
          <Title numberOfLines={1}>{item.title}</Title>
          <Artist numberOfLines={1}>{item.artist}</Artist>
        </View>

        <TouchableIcon
          size={30}
          onPress={() => null}
          iconProps={icons.more}
          iconStyle={styles.icon}
        />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    paddingLeft: SCALE_16,
  },
  thumbnail: {
    height: 48,
    width: 48,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    height: 52,
    marginLeft: SCALE_16,
    justifyContent: 'space-evenly',
  },
  icon: {
    paddingRight: 10,
  },
});

const Title = styled.Text`
  font-size: ${FONT_SIZE_16}px;
  width: ${WINDOW_WIDTH / 1.5}px;
  color: ${props => props.theme.textColor};
`;

const Artist = styled.Text`
  font-size: ${FONT_SIZE_14}px;
  width: ${WINDOW_WIDTH / 1.5}px;
  color: ${props => props.theme.textSecondaryColor};
`;

export default Track;
