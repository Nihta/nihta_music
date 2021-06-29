import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

// Theme
import {contrastTransColor} from '../themes/styles';

// Redux
import {selectCurrentTrack} from '../reducers/musicPlayerReducer';

// Components
import ProgressSlider from '../components/ProgressSlider';
import Cover from '../components/Cover';
import TouchableIcon from '../components/TouchableIcon';

// Containers
import PlaybackControl from '../containers/PlaybackControl';
import TrackBottomSheet from '../containers/TrackBottomSheet';

// Themes
import {WINDOW_WIDTH} from '../themes/mixins';
import {SCALE_10, SCALE_4} from '../themes/spacing';
import {FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_18} from '../themes/typography';

const PlayerWidth = WINDOW_WIDTH * 0.82;
const icons = {
  chevronDown: {
    name: 'expand-more',
    type: 'material',
    size: 30,
  },
  more: {
    name: 'more-vertical',
    type: 'feather',
    size: 30,
  },
};

function PlayerScreen() {
  const insets = useSafeAreaInsets();
  const currentTrack = useSelector(selectCurrentTrack);
  const navigation = useNavigation();

  const [visibleBts, setVisibleBts] = useState(false);

  const onDismissBottomSheet = () => {
    setVisibleBts(false);
  };

  return (
    <>
      <TrackBottomSheet
        trackItem={currentTrack}
        visible={visibleBts}
        onDismiss={onDismissBottomSheet}
        onPressItem={() => {
          setVisibleBts(false);
        }}
      />
      <ImageBackground
        style={styles.container}
        source={{uri: currentTrack?.artwork}}
        blurRadius={40}>
        <LinearGradient
          style={[styles.container]}
          colors={['rgba(18, 18, 18, .2)', 'rgba(18, 18, 18, .4)']}>
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
            <View style={styles.header}>
              <TouchableIcon
                size={30}
                onPress={() => navigation.goBack()}
                iconProps={icons.chevronDown}
                iconStyle={styles.icon}
              />

              <HeaderText>Đang phát</HeaderText>

              <TouchableIcon
                size={30}
                onPress={() => setVisibleBts(true)}
                iconProps={icons.more}
                iconStyle={styles.icon}
              />
            </View>

            <View style={styles.wrapper}>
              <Cover src={currentTrack.artwork} />

              <View style={styles.textWrapper}>
                <Title numberOfLines={1}>
                  {currentTrack?.title || 'unknown'}
                </Title>
                <Artist numberOfLines={1}>{currentTrack?.artist}</Artist>
              </View>

              <ProgressSlider />

              <PlaybackControl />
            </View>
          </View>
        </LinearGradient>
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
  icon: {
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SCALE_10,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const HeaderText = styled.Text`
  font-size: ${FONT_SIZE_18}px;
  font-weight: normal;
  color: ${contrastTransColor(0.75)};
`;

const Title = styled.Text`
  font-size: ${FONT_SIZE_16}px;
  color: ${props => props.theme.textLight};
  width: ${PlayerWidth}px;
  text-align: center;
`;

const Artist = styled.Text`
  font-size: ${FONT_SIZE_14}px;
  margin-top: ${SCALE_4}px;
  color: ${props => props.theme.textLight};
  width: ${PlayerWidth}px;
  text-align: center;
`;
