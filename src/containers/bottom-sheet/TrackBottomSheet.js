import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BottomSheet, {BottomSheetListItem} from '../../components/BottomSheet';
import Track from '../../components/Track';

import {
  trashIcon,
  albumsIcon,
  artistIcon,
  hideIcon,
  listIcon,
} from '../../config/defineIcon';
import {BASE} from '../../themes/sizes';

function TrackBottomSheet({visible, trackItem, onDismiss, onPressItem}) {
  const navigation = useNavigation();

  const handlePressViewAlbum = () => {
    // TODO: Xử lý lấy dữ liệu track
    navigation.navigate('track-list-filter', {
      name: trackItem.album,
      // trackData: item.tracks,
    });
  };

  return (
    <BottomSheet visible={visible} onDismiss={onDismiss}>
      {handleDismiss => {
        return (
          <View>
            {trackItem && (
              <Track item={trackItem} titleStyle={styles.trackTitle} />
            )}

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
                handlePressViewAlbum();
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
  trackTitle: {
    color: '#000',
  },
  hr: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: BASE * 2,
    marginVertical: BASE * 2,
  },
});

export default TrackBottomSheet;
