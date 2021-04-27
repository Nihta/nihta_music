import {ToastAndroid} from 'react-native';

/**
 * Toast android
 * @param {string} message
 * @param {number} xOffset
 * @param {number} yOffset
 */
function Toast(message, xOffset, yOffset) {
  return ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    xOffset || 0,
    yOffset || 320,
  );
}

export default Toast;
