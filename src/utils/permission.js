import {Alert, PermissionsAndroid} from 'react-native';

export const getStoragePermission = async () => {
  const permissions = await PermissionsAndroid.requestMultiple(
    [
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ],
    {
      title: 'Storage Permission',
      message: 'Ứng dụng cần có quyền truy cập vào bộ nhớ của bạn',
    },
  );

  if (permissions['android.permission.READ_EXTERNAL_STORAGE'] === 'granted') {
    return;
  } else {
    Alert.alert(
      'Permission required',
      'Chấp nhận ứng dụng truy cập vào bộ nhớ của bạn',
      [{text: 'OK', onPress: async () => await getStoragePermission()}],
      {cancelable: false},
    );
  }
};

export const checkStoragePermission = async () => {
  const granted = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );

  return granted;
};
