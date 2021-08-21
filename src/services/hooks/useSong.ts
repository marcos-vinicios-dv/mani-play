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
  setupProgressListener: () => void;
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
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // PROBLEMA AO PESQUISAR ENQUANTO OUVE
  const setupProgressListener = () => {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      const currentTime = audioRef.current.currentTime;

      if (currentTime === audioRef.current.duration) {
        setIsPlaying(false);
      }
    });
  };

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

  return {
    isPlaying,
    audioRef,
    togglePlayPause,
    setupProgressListener,
    handleAddSongToFavorite,
    handleRemoveSongFromFavorite,
    setIsPlaying,
    isFavorite,
  };
};
