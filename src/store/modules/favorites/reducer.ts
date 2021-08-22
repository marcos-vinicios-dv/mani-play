import { Reducer } from 'redux';
import produce from 'immer';

import { IFavoritesState } from './types';

const loadListFromLocalStorage = () => {
  try {
    const serialState = localStorage.getItem('favoriteList');

    if (serialState === null) return { songs: [] };

    return JSON.parse(serialState);
  } catch (e) {
    console.warn(e);
    return { songs: [] };
  }
};

const INITIAL_STATE: IFavoritesState = loadListFromLocalStorage();

const favorites: Reducer<IFavoritesState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_SONG_TO_FAVORITE':
        const { song } = action.payload;

        const songAlreadyExists = state.songs.some(
          (songInState) => songInState.id === song.id
        );

        if (songAlreadyExists) {
          return;
        } else {
          draft.songs.push(song);
        }

        break;

      case 'REMOVE_SONG_FROM_FAVORITES':
        const { id } = action.payload;
        const songIndex = draft.songs.findIndex((p) => p.id === id);

        draft.songs.splice(songIndex, 1);
        break;

      default: {
        return draft;
      }
    }
  });
};

export default favorites;
