import React from 'react';
import Lottie from 'lottie-react-native';
import {Box} from '~components/base';
import {useAppTheme} from '~themes/restyleTheme';

const LoadingView = () => {
  const {colors} = useAppTheme();

  return (
    <Box
      position={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={999}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'background'}>
      <Box width={140} height={140}>
        <Lottie
          source={require('../../assets/lottie/loading.json')}
          autoPlay
          loop
          speed={1}
          cacheStrategy={'strong'}
          colorFilters={[
            {
              keypath: 'body',
              color: colors.primaryLight,
            },
            {
              keypath: 'l leg',
              color: colors.primary,
            },
            {
              keypath: 'r leg',
              color: colors.primary,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default LoadingView;
