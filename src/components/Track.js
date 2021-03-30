import React from 'react';
import {Dimensions, TouchableNativeFeedback} from 'react-native';
import styled from 'styled-components/native';

// Components
import Icon from './Icon';

const placeholder = require('../../assets/images/placeholder.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;

function Track(props) {
  const {item} = props;

  const coverSrc = placeholder;

  return (
    <TouchableNativeFeedback>
      <Wrapper>
        <Thumbnail source={coverSrc} />
        <TextWrapper>
          <Title numberOfLines={1}>{item.title}</Title>
          <Artist numberOfLines={1}>{item.artist}</Artist>
        </TextWrapper>
        <StyledIcon name="ellipsis-vertical" type="ionicon" size={25} />
      </Wrapper>
    </TouchableNativeFeedback>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 65px;
  padding-left: 15px;
`;

const Thumbnail = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 8px;
`;

const TextWrapper = styled.View`
  flex-direction: column;
  flex: 1;
  height: 52px;
  margin-left: 15px;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  font-size: 16px;
  width: ${SCREEN_WIDTH / 2}px;
`;

const Artist = styled.Text`
  font-size: 14px;
  width: ${SCREEN_WIDTH / 2}px;
`;

const StyledIcon = styled(Icon)`
  padding: 10px;
`;

export default Track;
