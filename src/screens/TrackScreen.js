import React, {useEffect} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Redux
import {
  selectCurrentTrack,
  setCurrentTrack,
} from '../reducers/musicPlayerReducer';

// Components
import Toast from '../components/Toast';
import Track from '../components/Track';
import {getMedia, selectMediaFiles} from '../reducers/mediaReducer';
import setupPlayer from '../services/setupPlayer';

// Utils
import {checkStoragePermission, getStoragePermission} from '../utils';

function TracksScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const trackData = useSelector(selectMediaFiles);
  const currentTrack = useSelector(selectCurrentTrack);

  useEffect(() => {
    try {
      (async () => {
        const granted = await checkStoragePermission();
        if (!granted) {
          await getStoragePermission();
        }
        dispatch(getMedia());
        Toast('Quyét nhạc xong!');
      })();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    setupPlayer()
      .then(() => {
        console.log('The player is ready to be used!');
      })
      .catch(reason => console.log(reason));
  }, []);

  if (!trackData || trackData.length === 0) {
    return (
      <MessageWrapper>
        <Message numberOfLines={2}>
          Không tìm thấy bất kì bản nhạc nào trên thiết bị của bạn
        </Message>
      </MessageWrapper>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={asset => asset.id.toString()}
        data={trackData}
        renderItem={({item}) => (
          <Track
            item={item}
            onPress={async () => {
              if (!currentTrack || item.id !== currentTrack.id) {
                await dispatch(setCurrentTrack(item));
              }

              navigation.navigate('player');
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const MessageWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text`
  font-size: 16px;
  margin: 0 55px 0 55px;
  text-align: center;
`;

export default TracksScreen;
