import { useState, useEffect } from 'react';
import { api } from '../api';

export interface Song {
  id: number;
  duration_formatted: string;
  link: string;
  preview: string;
  title_short: string;
  album_cover: string;
  artist_name: string;
}

interface useHomeData {
  searchingFor: string;
  songs: Song[];
  handleSearch: (value: string) => Promise<void>;
}

const formatApiData = (song, index): useHomeData => {
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration % 60;

  return {
    duration_formatted: `${minutes}:${String(seconds).padStart(2, '0')}`,
    album_cover: song.album.cover,
    artist_name: song.artist.name,
    ...song,
  };
};

export const useHome = () => {
  const [searchingFor, setSearchingFor] = useState('Mais Populares');
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    async function loadInitialSongs() {
      const response = (
        await api.get('playlist/3155776842/tracks?index=0&limit=20')
      ).data;
      setSongs(response.data.map(formatApiData));
    }
    loadInitialSongs();
  }, []);

  const handleSearch = async (value: string) => {
    const response = (await api.get(`search/track?q=${value}`)).data;

    setSongs(response.data.map(formatApiData));
    setSearchingFor(`Resultados da busca por "${value}"`);
  };
  return { searchingFor, songs, handleSearch };
};
