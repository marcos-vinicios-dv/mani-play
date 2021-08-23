import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addSongToFavorite,
  removeSongFromFavorite,
} from '../../store/modules/favorites/actions';
import { State } from '../../store/modules/favorites/types';
import { Song } from './useHome';

interface useSongData {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  togglePlayPause: () => void;
  handleAddSongToFavorite: (song: Song) => void;
  handleRemoveSongFromFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useSong = (): useSongData => {
  const [isPlaying, setIsPlaying] = useState(false);
  const songs = useSelector<State, Song[]>((state) => state.favorites.songs);
  const dispatch = useDispatch();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    try {
      const serialState = JSON.stringify({ songs });
      localStorage.setItem('favoriteList', serialState);
    } catch (e) {
      console.warn(e);
    }
  }, [songs]);

  const handleAddSongToFavorite = useCallback(
    (song) => {
      dispatch(addSongToFavorite(song));
    },
    [dispatch]
  );

  const handleRemoveSongFromFavorite = useCallback(
    (id) => {
      dispatch(removeSongFromFavorite(id));
    },
    [dispatch]
  );

  const isFavorite = (id: number) => {
    return songs.some((song) => id === song.id);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return {
    isPlaying,
    audioRef,
    togglePlayPause,
    handleAddSongToFavorite,
    handleRemoveSongFromFavorite,
    setIsPlaying,
    isFavorite,
  };
};
