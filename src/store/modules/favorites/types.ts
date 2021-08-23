import { Song } from '../../../services/hooks/useHome';

export interface IFavoritesState {
  songs: Song[];
}

export interface State {
  favorites: IFavoritesState;
}
