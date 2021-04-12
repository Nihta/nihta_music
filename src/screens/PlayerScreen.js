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
import {selectCurrentTrack} from '../reducers/musicPlayerReducer';
import {useSelector} from 'react-redux';
import ProgressSlider from '../components/ProgressSlider';
import Cover from '../components/Cover';
import PlaybackControl from '../components/PlaybackControl';

const PlayerWidth = Dimensions.get('window').width * 0.82;

function PlayerScreen() {
  const currentTrack = useSelector(selectCurrentTrack);

  return (
    <Background source={{uri: currentTrack?.artwork}} blurRadius={40}>
      <Gradient colors={['rgba(18, 18, 18, .4)', 'rgba(18, 18, 18, .8)']}>
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
  font-size: 18px;
  color: ${contrastColor};
  width: ${PlayerWidth}px;
  text-align: center;
`;

const Artist = styled.Text`
  font-size: 15px;
  margin-top: 4px;
  color: ${contrastTransColor(0.75)};
  width: ${PlayerWidth}px;
  text-align: center;
`;
