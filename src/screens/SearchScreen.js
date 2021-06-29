import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import SearchTrackList from '../containers/SearchTrackList';

function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchTrackList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    marginTop: 16,
  },
  trackList: {
    flex: 1,
  },
});

export default SearchScreen;
