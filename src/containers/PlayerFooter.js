import React from 'react';
import {Dimensions, TouchableWithoutFeedback} from 'react-native';
import styled, {useTheme, withTheme} from 'styled-components/native';
import {useTrackPlayerProgress} from 'react-native-track-player/lib/hooks';
import Icon from '../components/Icon';
import ProgressBar from '../components/ProgressBar';
import {useSelector} from 'react-redux';
import {selectCurrentTrack, setIsPlaying} from '../reducers/musicPlayerReducer';

import {navigate} from '../navigations/utils/navigationServices';

const placeholder = require('../../assets/images/placeholder.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;

function PlayerFooter(props) {
  const theme = useTheme();
  const currentTrack = useSelector(selectCurrentTrack);
  const isPlaying = useSelector(setIsPlaying);

  const renderFooter = isPlaying;

  const {position, duration} = useTrackPlayerProgress(100);

  function togglePlayback() {}

  const progress = position / duration;
  const coverSrc = currentTrack?.artwork
    ? {uri: currentTrack.artwork}
    : placeholder;
  return renderFooter && currentTrack.id !== '000' ? (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate('player');
      }}>
      <MainWrapper>
        <Thumbnail source={coverSrc} />
        <TextWrapper>
          <Title numberOfLines={1}>{currentTrack.title || 'unknown'}</Title>
          <Artist numberOfLines={1}>{currentTrack.artist || 'unknown'}</Artist>
        </TextWrapper>
        {isPlaying ? (
          <StyledIcon {...icons.pauseIcon} onPress={togglePlayback} />
        ) : (
          <StyledIcon {...icons.playIcon} onPress={togglePlayback} />
        )}
        <ProgressWrapper>
          <Progress
            progress={isNaN(progress) ? 0 : +progress.toFixed(3)}
            color={theme.foreground}
          />
        </ProgressWrapper>
      </MainWrapper>
    </TouchableWithoutFeedback>
  ) : null;
}

export default PlayerFooter;

const MainWrapper = styled.View`
  height: 60px;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 49px;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  background-color: red;
`;

const Thumbnail = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
`;

const TextWrapper = styled.View`
  height: 75%;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 15px;
`;

const Title = styled.Text`
  font-family: 'CircularBold';
  font-size: 14px;
  color: white;
  width: ${SCREEN_WIDTH / 2}px;
`;

const Artist = styled.Text`
  font-family: 'CircularLight';
  font-size: 12px;
  color: #ccc;
  width: ${SCREEN_WIDTH / 2}px;
`;

const StyledIcon = styled(Icon)`
  color: white;
  padding: 18px;
`;

const ProgressWrapper = styled.View`
  position: absolute;
  top: 0;
`;

const Progress = styled(ProgressBar)`
  height: 2px;
  width: ${SCREEN_WIDTH}px;
  background-color: #cfc;
`;

const icons = {
  playIcon: {
    name: 'play-arrow',
    type: 'material',
    size: 24,
  },
  pauseIcon: {
    name: 'pause',
    type: 'material',
    size: 24,
  },
};
