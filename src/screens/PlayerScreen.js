import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

// Theme
import {
  backgroundColor,
  contrastTransColor,
  contrastColor,
} from '../themes/styles';

// Redux
import {currentTrackSelector} from '../reducers/musicPlayerReducer';
import {useSelector} from 'react-redux';
import ProgressSlider from '../components/ProgressSlider';
import Cover from '../components/Cover';
import PlaybackControl from '../components/PlaybackControl';

const PlayerWidth = Dimensions.get('window').width * 0.82;

function PlayerScreen(props) {
  const currentTrack = useSelector(currentTrackSelector);

  return (
    <Background source={{uri: currentTrack?.artwork}} blurRadius={40}>
      <Gradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Header>
          <HeaderText>Đang phát</HeaderText>
        </Header>
        <Wrapper>
          <Cover src={currentTrack.artwork} />
          <TextWrapper>
            <Title numberOfLines={1}>{currentTrack?.title || 'unknown'}</Title>
            <Artist numberOfLines={1}>{currentTrack?.artist}</Artist>
          </TextWrapper>
          <ProgressSlider />
          <PlaybackControl />
        </Wrapper>
      </Gradient>
    </Background>
  );
}
export default PlayerScreen;

const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Background = styled.ImageBackground`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${PlayerWidth + 10}px;
  margin-top: 10px;
`;

const HeaderText = styled.Text`
  font-family: 'Circular';
  font-size: 15px;
  color: ${contrastTransColor(0.75)};
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

const TextWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-family: 'CircularBold';
  font-size: 18px;
  color: ${contrastColor};
  width: ${PlayerWidth}px;
  text-align: center;
`;

const Artist = styled.Text`
  font-family: 'CircularLight';
  font-size: 15px;
  margin-top: 4px;
  color: ${contrastTransColor(0.75)};
  width: ${PlayerWidth}px;
  text-align: center;
`;

// const StyledIcon = styled(Icon)`
//   color: ${contrastTransColor(0.75)};
//   padding: 5px;
// `;

const icons = {
  collapse: {
    name: 'chevron-down',
    type: 'feather',
    size: 26,
  },
  options: {
    name: 'more-horizontal',
    type: 'feather',
    size: 26,
  },
};
