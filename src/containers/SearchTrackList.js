import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import NodataNew from '../components/NodataNew';
import SearchInput from '../components/SearchInput';
import TrackList from '../containers/TrackList';

import TrackBottomSheet from './TrackBottomSheet';

import {selectMediaFiles} from '../reducers/mediaReducer';
import {
  selectCurrentTrack,
  setCurrentTrack,
} from '../reducers/musicPlayerReducer';

const icons = {
  search: {
    name: 'search-outline',
    type: 'ionicon',
  },
};

function ListEmptyComponent({isShow = true}) {
  return <>{isShow && <NodataNew text="Không tìm thấy bài hát nào!" />}</>;
}

function SearchTrackList() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentTrack = useSelector(selectCurrentTrack);

  // Tất cả bài hát
  const allData = useSelector(selectMediaFiles);
  // Từ khóa tìm kiếm
  const [textFind, setTextFind] = useState('');
  // Bài sau khi lọc (các bài được hiển thị lên màn hình)
  const [data, setData] = useState([]);
  // Trạng thái đang gõ từ khóa và chưa chạy hàm filter
  const [isTyping, setIsTyping] = useState(false);

  const [visibleBts, setVisibleBts] = useState(false);
  const [trackCliked, setTrackCliked] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setIsTyping(true);

      // Nếu như input trống
      if (textFind.trim() === '') {
        setData([]);
        return;
      }

      // Lọc bài hát theo từ khóa
      const dataFilter = allData.filter(item => {
        const itemData = ` ${item.title} ${item.artist}`.toLocaleLowerCase();
        const textSearchData = ' ' + textFind.trim().toLocaleLowerCase();
        return itemData.indexOf(textSearchData) > -1;
      });

      setData(dataFilter);
      setIsTyping(false);
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [allData, textFind]);

  // Bấm vào một bài hát
  const handlePressTrackItem = async item => {
    if (!currentTrack || item.id !== currentTrack.id) {
      await dispatch(setCurrentTrack(item));
    }
    navigation.navigate('player');
  };

  const onDismissBottomSheet = () => {
    setVisibleBts(false);
    setTrackCliked(null);
  };

  const handlePressMoreItem = item => {
    setVisibleBts(true);
    setTrackCliked(item);
  };

  return (
    <>
      <TrackBottomSheet
        trackItem={trackCliked}
        visible={visibleBts}
        onPressItem={() => {
          setVisibleBts(false);
        }}
        onDismiss={onDismissBottomSheet}
      />

      <SearchInput
        placeholder="Nhập tên bài hát, nghệ sĩ"
        setSearchInput={setTextFind}
        value={textFind}
      />
      {textFind.length === 0 ? (
        <NodataNew
          text="Nhập tên bài hát hoặc ca sĩ để tìm kiếm"
          iconProps={icons.search}
        />
      ) : (
        <TrackList
          trackData={data}
          indicatorStyle={'white'}
          contentContainerStyle={styles.trackList}
          handlePressItem={handlePressTrackItem}
          handlePressMoreItem={handlePressMoreItem}
          ListEmptyComponent={<ListEmptyComponent isShow={!isTyping} />}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    marginTop: 16,
  },
  trackList: {
    flex: 1,
  },
});

export default SearchTrackList;
