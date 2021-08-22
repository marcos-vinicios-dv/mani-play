import axios from 'axios';
import { useCallback } from 'react';
import { api } from '../api';
import { Song } from './useHome';

interface ApiResponse {
  dataFormatted: Array<Song>;
  next?: string;
  total: number;
}

interface useApiData {
  formatApiData: (song) => Song;
  getMostPopularSongs: (index: string) => Promise<ApiResponse>;
  getSongsBySearch: (value: string, index: string) => Promise<ApiResponse>;
  loadMoreSongs: (url: string) => Promise<ApiResponse>;
}

export const useApi = (): useApiData => {
  const formatApiData = useCallback((song): Song => {
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;

    return {
      duration_formatted: `${minutes}:${String(seconds).padStart(2, '0')}`,
      album_cover: song.album.cover,
      artist_name: song.artist.name,
      ...song,
    };
  }, []);

  const getMostPopularSongs = useCallback(
    async (index: string) => {
      const response = (
        await api.get(`playlist/3155776842/tracks?index=${index}`)
      ).data;

      const dataFormatted = response.data.map(formatApiData);

      return { dataFormatted, ...response };
    },
    [formatApiData]
  );

  const getSongsBySearch = useCallback(
    async (value: string, index: string) => {
      const response = (await api.get(`search/track?q=${value}&index=${index}`))
        .data;
      const dataFormatted = response.data.map(formatApiData);

      return { dataFormatted, ...response };
    },
    [formatApiData]
  );

  const loadMoreSongs = useCallback(
    async (url) => {
      const response = (await axios.get(`http://localhost:8080/${url}`)).data;
      const dataFormatted = response.data.map(formatApiData);

      return { dataFormatted, ...response };
    },
    [formatApiData]
  );

  return {
    formatApiData,
    getMostPopularSongs,
    getSongsBySearch,
    loadMoreSongs,
  };
};
