import React from 'react';
import {StyleSheet, View} from 'react-native';

import BottomSheet, {BottomSheetListItem} from '../../components/BottomSheet';
import ListItem from '../../components/ListItem';

import {trashIcon, hideIcon, listIcon} from '../../config/defineIcon';
import {BASE} from '../../themes/sizes';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
  more: {
    type: 'ionicon',
    name: 'ios-ellipsis-vertical',
    size: 26,
  },
};

const getUrlFolerFromUrlTrack = urlTrack => {
  return urlTrack.substring(0, urlTrack.lastIndexOf('/'));
};

function TrackBottomSheet({visible, folderItem, onDismiss, onPressItem}) {
  return (
    <BottomSheet visible={visible} onDismiss={onDismiss}>
      {handleDismiss => {
        return (
          <View>
            {folderItem && (
              <>
                <ListItem
                  title={folderItem.folder}
                  subtitle={getUrlFolerFromUrlTrack(folderItem.tracks[0].url)}
                  iconProps={icons.folder}
                />
                <View style={styles.hr} />
              </>
            )}

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
              text="Ẩn nhạc của thư mục"
              iconProps={hideIcon}
              iconStyle={styles.icon}
              onPress={() => {
                handleDismiss();
                onPressItem();
              }}
            />

            <BottomSheetListItem
              text="Xóa thư mục"
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
