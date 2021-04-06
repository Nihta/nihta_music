import {ToastAndroid} from 'react-native';

/**
 * Toast android
 * @param {string} message
 */
function Toast(message) {
  return ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    0,
    300,
  );
}

export default Toast;
