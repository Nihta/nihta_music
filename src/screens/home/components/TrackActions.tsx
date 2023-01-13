import React from 'react';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {Divider, List} from 'react-native-paper';
import {Box} from '~components';

type TrackActionsProps = {
  actionSheetRef: React.RefObject<ActionSheetRef>;
};

export const TrackActions = (props: TrackActionsProps) => {
  const {actionSheetRef} = props;

  return (
    <>
      <ActionSheet
        ref={actionSheetRef}
        gestureEnabled
        CustomHeaderComponent={
          <Box mt={'sm'} alignItems={'center'}>
            <Box mt={'xs'} height={4} width={48} bg={'border'} />
          </Box>
        }>
        <Box height={50} />
        <Divider horizontalInset bold />
        <Box mb={'sm'} />
        <List.Item
          onPress={() => {}}
          title="Thêm vào danh sách phát"
          left={p => <List.Icon {...p} icon="playlist-music" />}
        />
        <List.Item
          title="Xem nghệ sĩ"
          left={p => <List.Icon {...p} icon="account-supervisor" />}
        />
        <List.Item
          title="Ẩn bài hát"
          left={p => <List.Icon {...p} icon="file-hidden" />}
        />
        <List.Item
          title="Xóa tệp"
          left={p => <List.Icon {...p} icon="delete" />}
        />
      </ActionSheet>
    </>
  );
};
