import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  checkStoragePermissions,
  getStoragePermission,
} from '../utils/Permissions';

function SearchScreen(props) {
  useEffect(() => {
    const cpdm = async () => {
      let granted = await checkStoragePermissions();

      console.log(granted);
      if (!granted) {
        await getStoragePermission();
      }
    };

    try {
      cpdm();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <View>
        <Text>SearchScreen</Text>
      </View>
    </>
  );
}

export default SearchScreen;
