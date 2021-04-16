import _ from 'lodash/';

/**
 *
 * @param {any[]} mediaData
 * @returns
 */
const handleMediaData = mediaData => {
  // console.log(mediaData);

  const newMediaData = mediaData.map((media, idx) => {
    // * https://react-native-track-player.js.org/documentation/#track-object
    return {
      id: idx.toString(),
      title:
        media.title || media.fileName.replace(/.mp3|.aac|.wav|.amr|.flac/, ''),
      duration: Math.trunc(media.duration / 1000),
      url: media.path,
      artwork: media.cover || null,
      artist: media.author === '<unknown>' ? 'unknown' : media.author,
      album: media.album === '<unknown>' ? 'unknown' : media.album,
      // contentType,
      // date,
      // description,
      // genre,
      // pitchAlgorithm,
      // rating,
      // type,
      // userAgent,
      folder: getFolder(media.path),
    };
  });

  return newMediaData;
};

const getFolder = path => {
  const dirArr = path.split('/');
  return dirArr[dirArr.length - 2];
};

// TODO tạo một action trong reducer
/**
 * Lấy danh sách các nghệ sĩ và lọc ra bài hát của họ
 * @param mediaDataFormatted
 * @returns {{artist: string, tracks: *[]}[]}
 */
export const handleDataArtists = mediaDataFormatted => {
  const data = _.groupBy(mediaDataFormatted, 'artist');

  const artists = Object.keys(data);

  /**
   * @type {{artist: string, tracks: *[]}[]}
   */
  const dataArtists = artists.map(artist => ({
    artist,
    tracks: data[artist],
  }));

  return _.sortBy(dataArtists, 'artist');
};

/**
 * Lấy danh sác các album và các bài hát thuộc album đó
 * @param mediaDataFormatted
 * @returns {{artist: string, tracks: *[]}[]}
 */
export const handleDataAlbums = mediaDataFormatted => {
  const data = _.groupBy(mediaDataFormatted, 'album');

  const albums = Object.keys(data);

  /**
   * @type {{album: string, tracks: *[]}[]}
   */
  const dataAlbums = albums.map(album => ({
    album,
    tracks: data[album],
  }));

  return _.sortBy(dataAlbums, 'album');
};

export default handleMediaData;
