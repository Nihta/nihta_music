/**
 *
 * @param {any[]} mediaData
 * @returns
 */
const handleMediaData = mediaData => {
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

export default handleMediaData;
