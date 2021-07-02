import MusicFiles from '@yajanarao/react-native-get-music-files';
// * https://github.com/reduxjs/reselect
// import {createSelector} from 'reselect';

import handleMediaData, {
  handleDataAlbums,
  handleDataArtists,
  handleDataFolders,
} from './handleMediaData';

// * Đặt tên action kiểu domain/action
const SET_MEDIA_FILES = 'media/SET_MEDIA_FILES';
const SET_ARTISTS = 'media/SET_ARTISTS';
const SET_ALBUMS = 'media/SET_ALBUMS';
const SET_FOLDERS = 'media/setFolders';

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

export const getArtists = () => async (dispatch, getState) => {
  const state = getState();
  const mediaDataFormatted = selectMediaFiles(state);

  dispatch({
    type: SET_ARTISTS,
    payload: handleDataArtists(mediaDataFormatted),
  });
};

export const getAlbums = () => async (dispatch, getState) => {
  const state = getState();
  const mediaDataFormatted = selectMediaFiles(state);

  dispatch({
    type: SET_ALBUMS,
    payload: handleDataAlbums(mediaDataFormatted),
  });
};

export const getFolders = () => async (dispatch, getState) => {
  const state = getState();
  const mediaDataFormatted = selectMediaFiles(state);

  dispatch({
    type: SET_FOLDERS,
    payload: handleDataFolders(mediaDataFormatted),
  });
};

// * Selector ------------------------------------------------------------------
export const selectMediaFiles = state => state.media.mediaFiles;
export const selectArtists = state => state.media.artists;
export const selectAlbums = state => state.media.albums;
export const selectFolders = state => state.media.folders;

// * Reducer -------------------------------------------------------------------
const initialState = {
  mediaFiles: [],
  artists: [],
  albums: [],
  mediaLoaded: false,
  folders: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MEDIA_FILES:
      return {
        ...state,
        mediaFiles: payload,
      };
    case SET_ARTISTS:
      return {
        ...state,
        artists: payload,
      };
    case SET_ALBUMS:
      return {
        ...state,
        albums: payload,
      };
    case SET_FOLDERS:
      return {
        ...state,
        folders: payload,
      };
    default:
      return state;
  }
};
