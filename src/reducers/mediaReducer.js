import MusicFiles from '@yajanarao/react-native-get-music-files';
// * https://github.com/reduxjs/reselect
// import {createSelector} from 'reselect';

import handleMediaData from './utils/handleMediaData';

// * Đặt tên action kiểu domain/action
export const SET_MEDIA_FILES = 'media/SET_MEDIA_FILES';

// * Actions -------------------------------------------------------------------
const options = {
  title: true,
  artist: true,
  album: true,
  duration: true,
  cover: true,
  coverFolder: '.nihta_music',
  blured: false,
  genre: true,
};

/**
 * Tìm files nhạc có trên máy
 */
export const getMedia = () => async dispatch => {
  try {
    const data = await MusicFiles.getAll(options);

    dispatch({
      type: SET_MEDIA_FILES,
      payload: handleMediaData(data),
    });
  } catch (reason) {
    throw reason;
  }
};

// * Selector ------------------------------------------------------------------
export const mediaFilesSelector = state => state.media.mediaFiles;

// * Reducer -------------------------------------------------------------------
const initialState = {
  mediaFiles: [],
  artists: [],
  albums: [],
  mediaLoaded: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MEDIA_FILES:
      return {
        ...state,
        mediaFiles: payload,
      };

    default:
      return state;
  }
};
