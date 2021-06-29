import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Slider from '@react-native-community/slider';
import {withTheme} from 'styled-components/native';
import TrackPlayer, {ProgressComponent} from 'react-native-track-player';

import {selectCurrentTrack} from '../reducers/musicPlayerReducer';

import {WINDOW_WIDTH} from '../themes/sizes';
import AppText from './AppText';

const SliderWidth = WINDOW_WIDTH * 0.9;

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
          minimumTrackTintColor={'#27AE60'}
          maximumTrackTintColor={'#F2F2F2'}
          thumbTintColor={'#219653'}
          onValueChange={this.seekTo}
        />
        <View style={styles.timeWrapper}>
          <AppText style={styles.time}>
            {this.timePassed(currentTrack.duration)}
          </AppText>

          <AppText style={styles.time}>
            {this.secToTimeDuration(currentTrack.duration)}
          </AppText>
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
  time: {
    fontSize: 14,
    color: '#fff',
  },
  sliderStyle: {
    width: SliderWidth,
  },
});

const mapStateToProps = state => ({
  currentTrack: selectCurrentTrack(state),
});

export default connect(mapStateToProps, null)(withTheme(ProgressSlider));
