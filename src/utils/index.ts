// @ts-ignore
import MusicFiles from '@yajanarao/react-native-get-music-files';
import {Track} from 'react-native-track-player';

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

export interface Music {
  album: string;
  author: string;
  duration: string;
  fileName: string;
  genre: any;
  id: string;
  path: string;
  title: string;
}

export const getMedia = async () => {
  try {
    const data = await MusicFiles.getAll(options);

    console.log(data[0]);

    return data as Music[];
  } catch (reason) {
    throw reason;
  }
};

export const coverMusicFileToTrack = (music: Music): Track => {
  return {
    // id: music.id,
    url: music.path,
    title: music.title,
    artist: music.author,
    album: music.album,
    genre: music.genre,
    duration: parseInt(music.duration, 10) / 1000,
    // artwork: music.cover,
  };
};

export const getAllTracks = async () => {
  const media = await getMedia();
  const tracks = media.map(coverMusicFileToTrack);
  return tracks;
};
