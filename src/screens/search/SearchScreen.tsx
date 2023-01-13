import React from 'react';
import {Searchbar} from 'react-native-paper';
import {Container} from '~components';
import {goBack} from '~navigation';

export const SearchScreen = () => {
  return (
    <Container safeArea>
      <Searchbar
        placeholder="Tìm kiếm"
        value={''}
        icon="arrow-left"
        onIconPress={goBack}
      />
    </Container>
  );
};
