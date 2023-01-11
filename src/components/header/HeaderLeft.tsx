import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '~components/base';

import Header from './Header';

type HeaderLeftProps = {
  title?: string;
  rightComponent?: React.ReactElement<{}>;
  shadow?: boolean;
};

const HeaderLeft = (props: HeaderLeftProps) => {
  const {title, rightComponent, shadow} = props;
  return (
    <>
      <Header
        containerStyle={shadow && styles.shadow}
        leftComponent={
          <Text fontSize={17} lineHeight={22} fontWeight={'500'} ml={'sm'}>
            {title}
          </Text>
        }
        leftContainerStyle={styles.headerContainer}
        rightComponent={rightComponent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
  },
  headerContainer: {
    flex: 0,
  },
});

export default HeaderLeft;
