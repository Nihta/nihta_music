import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import TrackPlayer, {ProgressComponent} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {selectCurrentTrack} from '../reducers/musicPlayerReducer';
import {connect} from 'react-redux';

const ScreenWidth = Dimensions.get('window').width;
const SliderWidth = ScreenWidth * 0.9;

// * https://react-native-track-player.js.org/documentation/#progresscomponent
class ProgressSlider extends ProgressComponent {
  secToTime(secs) {
    if (secs < 0) {
      return '0:00';
    }
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return seconds <= 9 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  timePassed(duration) {
    return this.secToTime(this.getProgress() * duration);
  }

  secToTimeDuration(duration) {
    return this.secToTime(duration);
  }

  seekTo = value => {
    const seekPosition = value * this.props.currentTrack.duration;
    TrackPlayer.seekTo(seekPosition);
  };

  render() {
    const {currentTrack} = this.props;
    return (
      <View style={styles.wrapper}>
        <Slider
          value={this.getProgress()}
          style={styles.sliderStyle}
          minimumTrackTintColor="purple"
          maximumTrackTintColor="#ccc"
          onValueChange={this.seekTo}
        />
        <View style={styles.timeWrapper}>
          <TimeStyled>{this.timePassed(currentTrack.duration)}</TimeStyled>
          <TimeStyled>
            {this.secToTimeDuration(currentTrack.duration)}
          </TimeStyled>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SliderWidth,
    paddingHorizontal: 15,
  },
  sliderStyle: {
    width: SliderWidth,
  },
});

const TimeStyled = styled.Text`
  font-size: 14px;
  color: white;
`;

const mapStateToProps = state => ({
  currentTrack: selectCurrentTrack(state),
});

export default connect(mapStateToProps, null)(ProgressSlider);
