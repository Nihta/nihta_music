import React from 'react';
import {StyleSheet, View} from 'react-native';

import BottomSheet, {BottomSheetListItem} from '../components/BottomSheet';
import Track from '../components/Track';

import {
  trashIcon,
  albumsIcon,
  artistIcon,
  hideIcon,
  listIcon,
} from '../config/defineIcon';
import {BASE} from '../themes/sizes';

function TrackBottomSheet({visible, trackItem, onDismiss, onPressItem}) {
  return (
    <BottomSheet visible={visible} onDismiss={onDismiss}>
      {handleDismiss => {
        return (
          <View>
            {trackItem && <Track item={trackItem} />}

            <View style={styles.hr} />

            <BottomSheetListItem
              text="Thêm vào playlist"
              iconStyle={styles.icon}
              iconProps={listIcon}
              onPress={() => {
                handleDismiss();
                onPressItem();
              }}
            />
            <BottomSheetListItem
              text="Xem album"
              iconProps={albumsIcon}
              iconStyle={styles.icon}
              onPress={() => {
                handleDismiss();
                onPressItem();
              }}
            />
            <BottomSheetListItem
              text="Xem nghệ sĩ"
              iconProps={artistIcon}
              iconStyle={styles.icon}
              onPress={() => {
                handleDismiss();
                onPressItem();
              }}
            />
            <BottomSheetListItem
              text="Ẩn"
              iconProps={hideIcon}
              iconStyle={styles.icon}
              onPress={() => {
                handleDismiss();
                onPressItem();
              }}
            />

            <BottomSheetListItem
              text="Xóa file"
              iconProps={trashIcon}
              iconStyle={styles.icon}
              onPress={() => {
                handleDismiss();
                onPressItem();
              }}
            />
          </View>
        );
      }}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
  hr: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: BASE * 2,
    marginVertical: BASE * 2,
  },
});

export default TrackBottomSheet;
