import React from 'react';

import Container from '../components/Container';

import SearchTrackList from '../containers/SearchTrackList';

function SearchScreen() {
  return (
    <Container safeArea>
      <SearchTrackList />
    </Container>
  );
}

export default SearchScreen;
