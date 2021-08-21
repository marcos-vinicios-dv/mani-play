import { Song } from '../../../services/hooks/useHome';

export const addSongToFavorite = (song: Song) => {
  return {
    type: 'ADD_SONG_TO_FAVORITE',
    payload: {
      song,
    },
  };
};

export const removeSongFromFavorite = (id: number) => {
  return {
    type: 'REMOVE_SONG_FROM_FAVORITES',
    payload: {
      id,
    },
  };
};
