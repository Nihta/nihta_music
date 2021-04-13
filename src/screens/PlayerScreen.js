import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Theme
import {contrastTransColor} from '../themes/styles';

// Redux
import {selectCurrentTrack} from '../reducers/musicPlayerReducer';
import ProgressSlider from '../components/ProgressSlider';
import Cover from '../components/Cover';
import PlaybackControl from '../containers/PlaybackControl';

const PlayerWidth = Dimensions.get('window').width * 0.82;

function PlayerScreen() {
  const insets = useSafeAreaInsets();
  const currentTrack = useSelector(selectCurrentTrack);

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={{uri: currentTrack?.artwork}}
        blurRadius={60}>
        <Gradient colors={['rgba(18, 18, 18, .4)', 'rgba(18, 18, 18, .8)']}>
          <View
            style={[
              styles.container,
              {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
              },
            ]}>
            <Header>
              <HeaderText>Đang phát</HeaderText>
            </Header>
            <Wrapper>
              <Cover src={currentTrack.artwork} />
              <View style={styles.textWrapper}>
                <Title numberOfLines={1}>
                  {currentTrack?.title || 'unknown'}
                </Title>
                <Artist numberOfLines={1}>{currentTrack?.artist}</Artist>
              </View>
              <ProgressSlider />
              <PlaybackControl />
            </Wrapper>
          </View>
        </Gradient>
      </ImageBackground>
    </>
  );
}

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
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

const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.textLight};
  width: ${PlayerWidth}px;
  text-align: center;
`;

const Artist = styled.Text`
  font-size: 15px;
  margin-top: 4px;
  color: ${props => props.theme.textLight};
  width: ${PlayerWidth}px;
  text-align: center;
`;
