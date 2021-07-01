import React from 'react';
import {StyleSheet, View} from 'react-native';

import BottomSheet, {BottomSheetListItem} from '../../components/BottomSheet';

import {editIcon, trashIcon} from '../../config/defineIcon';

function PlaylistBottomSheet({visible, setVisible, playlistItem}) {
  return (
    <>
      <BottomSheet visible={visible} onDismiss={() => setVisible(false)}>
        {handleDismiss => {
          return (
            <View>
              <BottomSheetListItem
                text="Đổi tên danh sách phát"
                iconProps={editIcon}
                iconStyle={styles.icon}
                onPress={() => {
                  handleDismiss();
                }}
              />

              <BottomSheetListItem
                text="Xóa danh sách phát"
                iconProps={trashIcon}
                iconStyle={styles.icon}
                onPress={() => {
                  handleDismiss();
                }}
              />
            </View>
          );
        }}
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 26,
  },
});

export default PlaylistBottomSheet;
