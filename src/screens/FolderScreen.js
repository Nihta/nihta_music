import React from 'react';
import {FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import PressableIcon from '../components/PressableIcon';

const icons = {
  folder: {
    name: 'folder-open-outline',
    type: 'ionicon',
    size: 26,
  },
};

function FolderScreen(props) {
  const folderData = [
    {
      id: 1,
      name: 'Tên thư mục',
      numOfTrack: 3,
    },
    {
      id: 2,
      name: 'Tên thư mục 2',
      numOfTrack: 4,
    },
  ];

  return (
    <>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={folderData}
        renderItem={({item}) => (
          <ListItem
            title={item.name}
            subtitle={`${item.numOfTrack} bài hát`}
            iconProps={icons.folder}
            rightElement={
              <PressableIcon
                iconProps={{
                  type: 'ionicon',
                  name: 'ios-ellipsis-vertical',
                  size: 25,
                }}
              />
            }
          />
        )}
      />
    </>
  );
}

export default FolderScreen;
