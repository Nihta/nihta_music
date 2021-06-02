import React from 'react';
import {FlatList} from 'react-native';

// Components
import Track from '../components/Track';

/**
 * Render track list
 * @param {{trackData: *[], handlePressItem: (item) => void}}
 * @returns
 */
function TrackList({trackData, handlePressItem, handlePressMoreItem}) {
  return (
    <>
      <FlatList
        keyExtractor={asset => asset.id.toString()}
        data={trackData}
        renderItem={({item}) => (
          <Track
            item={item}
            onPress={() => handlePressItem(item)}
            onPressMore={() => handlePressMoreItem(item)}
          />
        )}
      />
    </>
  );
}

export default TrackList;
