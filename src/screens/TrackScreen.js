import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import TrackPlayer, {setupPlayer} from 'react-native-track-player';
import styled from 'styled-components/native';

// Components
import Toast from '../components/Toast';
import Track from '../components/Track';

// Utils
import getMedia from '../utils/getMedia';
import {
  checkStoragePermission,
  getStoragePermission,
} from '../utils/permission';

function TracksScreen(props) {
  const [trackData, setTrackData] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        let granted = await checkStoragePermission();
        if (!granted) {
          await getStoragePermission();
          const data = await getMedia();
          Toast('Quét nhạc xong');
          setTrackData(data);
        } else {
          const data = await getMedia();
          Toast('Quét nhạc xong');
          setTrackData(data);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setupPlayer()
      .then(() => {
        console.log('Setup player done!');
      })
      .catch(reason => console.log(reason));
  }, []);

  if (trackData.length === 0) {
    return (
      <MessageWrapper>
        <Message numberOfLines={2}>
          {'Không tìm thấy bất kì bản nhạc nào trên thiết bị của bạn'}
        </Message>
      </MessageWrapper>
    );
  }

  return (
    <>
      <FlatList
        keyExtractor={asset => asset.id.toString()}
        data={trackData}
        renderItem={({item}) => <Track item={item} />}
      />
    </>
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
