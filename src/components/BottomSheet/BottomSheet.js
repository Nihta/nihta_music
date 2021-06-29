import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {BASE} from '../../themes/sizes';

function BottomSheet({onDismiss, visible, children}) {
  const screenHeight = Dimensions.get('screen').height;

  const panY = useRef(new Animated.Value(screenHeight)).current;

  const resetPositionAnimated = Animated.timing(panY, {
    toValue: 0,
    duration: 100,
    useNativeDriver: true,
  });

  const closeAnimated = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 100,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const handleDismiss = () => closeAnimated.start(onDismiss);

  useEffect(() => {
    resetPositionAnimated.start();
  }, [resetPositionAnimated]);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, {dy: panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        // ! Chiều cao BottomSheet nhỏ có thể dẫn đến việc đóng BottomSheet nhưng
        // ! không đóng overlay
        if (gestureState.dy > 0 && gestureState.vy > 1) {
          return handleDismiss();
        }
        return resetPositionAnimated.start();
      },
    }),
  ).current;

  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      statusBarTranslucent
      onRequestClose={handleDismiss}>
      <TouchableWithoutFeedback onPress={handleDismiss}>
        <View style={styles.overlay}>
          <Animated.View
            style={{
              ...styles.container,
              transform: [{translateY: translateY}],
            }}
            {...panResponders.panHandlers}>
            <View style={styles.sliderIndicatorRow}>
              <View style={styles.sliderIndicator} />
            </View>
            {children(handleDismiss)}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    paddingHorizontal: 0,
    paddingVertical: BASE * 1.5,
    backgroundColor: '#fff',
  },
  sliderIndicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: BASE * 2,
  },
  sliderIndicator: {
    backgroundColor: '#bdbdbd',
    height: BASE * 0.5,
    width: BASE * 6,
  },
});

export default BottomSheet;
