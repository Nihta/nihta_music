import React from 'react';
import {Dimensions, TouchableNativeFeedback} from 'react-native';
import styled from 'styled-components/native';

// Components
import Icon from './Icon';

// Theme
import {contrastColor, contrastTransColor} from '../themes/styles';

const ScreenWidth = Dimensions.get('window').width;

function ListItem({
  title,
  subtitle,
  titleStyle,
  rightElement,
  onPress,
  onLongPress,
  delayLongPress,
  iconProps,
}) {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}>
      <Wrapper>
        <StyledIcon {...iconProps} />
        <TextWrapper>
          <Title style={titleStyle} numberOfLines={1}>
            {title}
          </Title>
          {subtitle && <SubTitle style={subtitle}>{subtitle}</SubTitle>}
        </TextWrapper>
        <RightWrapper>{rightElement && rightElement}</RightWrapper>
      </Wrapper>
    </TouchableNativeFeedback>
  );
}

export default ListItem;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const StyledIcon = styled(Icon)`
  padding: 5px;
  margin-left: 12px;
  margin-right: 12px;
  color: ${contrastColor};
`;

const TextWrapper = styled.View`
  height: 85%;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Title = styled.Text`
  font-size: 16px;
  color: ${contrastColor};
  width: ${ScreenWidth / 2}px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  color: ${contrastTransColor(0.75)};
`;

const RightWrapper = styled.View`
  margin-right: 10px;
`;
