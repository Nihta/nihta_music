import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

// Components
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

        console.log(granted);
        if (!granted) {
          await getStoragePermission();

          const data = await getMedia();
          setTrackData(data);
        } else {
          const data = await getMedia();
          setTrackData(data);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const trackData = [
  //   {
  //     id: '000',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '001',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '002',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '003',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '004',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '005',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '006',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '007',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '008',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '009',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },

  //   {
  //     id: '010',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '011',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '012',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },

  //   {
  //     id: '013',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '014',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '015',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '016',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '017',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '018',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '019',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  //   {
  //     id: '020',
  //     title: 'Tên bài hát',
  //     artist: 'Ca sĩ',
  //   },
  // ];

  if (trackData === 0) {
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
