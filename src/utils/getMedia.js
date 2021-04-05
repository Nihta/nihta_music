import MusicFiles from '@yajanarao/react-native-get-music-files';

const options = {
  title: true,
  artist: true,
  album: true,
  duration: true,
  cover: false,
  blured: false,
};

function getMedia() {
  return MusicFiles.getAll(options);
}

export default getMedia;
