// @ts-ignore
import MusicFiles from '@yajanarao/react-native-get-music-files';

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
