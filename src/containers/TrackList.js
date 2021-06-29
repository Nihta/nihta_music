import React from 'react';
import {FlatList} from 'react-native';

// Components
import Track from '../components/Track';

/**
 * Render track list (FlatList)
 * @param {{trackData: *[], handlePressItem: (item) => void}}
 * @returns
 */
function TrackList({
  contentContainerStyle,
  trackData,
  handlePressItem,
  handlePressMoreItem,
  ListEmptyComponent,
  otherProps,
}) {
  return (
    <>
      <FlatList
        contentContainerStyle={contentContainerStyle}
        keyExtractor={asset => asset.id.toString()}
        data={trackData}
        renderItem={({item}) => (
          <Track
            item={item}
            onPress={() => handlePressItem(item)}
            onPressMore={() => handlePressMoreItem(item)}
          />
        )}
        initialNumToRender={10}
        ListEmptyComponent={ListEmptyComponent}
        {...otherProps}
      />
    </>
  );
}

export default TrackList;
