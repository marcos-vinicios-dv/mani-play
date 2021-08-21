import { Reducer } from 'redux';
import produce from 'immer';

import { IFavoritesState } from './types';

const INITIAL_STATE: IFavoritesState = {
  songs: [],
};

const favorites: Reducer<IFavoritesState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_SONG_TO_FAVORITE':
        const { song } = action.payload;

        const songIdInFavorites = state.songs.some(
          (songInState) => songInState.id === song.id
        );

        if (songIdInFavorites) {
          return;
        } else {
          draft.songs.push(song);
        }

        break;

      case 'REMOVE_SONG_FROM_FAVORITES':
        const { id } = action.payload;

        draft.songs.splice(draft.songs.indexOf(id), 1);
        break;

      default: {
        return draft;
      }
    }
  });
};

export default favorites;
