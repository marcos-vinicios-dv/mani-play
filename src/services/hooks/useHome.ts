import { useState, useEffect, useCallback } from 'react';
import { useApi } from './useApi';

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
  totalPlaylist: number;
  isLoading: boolean;
  playlist: Song[];
  handleSearch: (value: string) => Promise<void>;
  loadMore: () => Promise<void>;
}

export const useHome = (): useHomeData => {
  const [searchingFor, setSearchingFor] = useState('Mais Populares');
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [totalPlaylist, setTotalPlaylist] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPageIndex, setNextPageIndex] = useState<string | undefined>('');

  const { getMostPopularSongs, getSongsBySearch, loadMoreSongs } = useApi();

  useEffect(() => {
    async function loadMostPopularSongs() {
      const { dataFormatted, next, total } = await getMostPopularSongs('0');

      setNextPageIndex(next);
      setTotalPlaylist(total);
      setPlaylist(dataFormatted);
      setIsLoading(false);
    }
    loadMostPopularSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback(
    async (value: string) => {
      try {
        setIsLoading(true);
        setNextPageIndex('0');
        const { dataFormatted, total, next } = await getSongsBySearch(
          value,
          '0'
        );

        if (!!dataFormatted.length) {
          setTotalPlaylist(total);
          setPlaylist(dataFormatted);
          setSearchingFor(`Resultados da busca por "${value}"`);
          setIsLoading(false);

          !!next && setNextPageIndex(next);
        } else {
          setPlaylist([]);
          setTotalPlaylist(0);
          setIsLoading(false);
        }
      } catch {
        setSearchingFor(`Nada foi encontrado`);
        console.log(`Erro ao fazer a busca!`);
      }
    },
    [getSongsBySearch]
  );

  const loadMore = useCallback(async () => {
    if (!isLoading && !!nextPageIndex) {
      try {
        const { dataFormatted, next } = await loadMoreSongs(nextPageIndex);
        setNextPageIndex(next);
        if (!!dataFormatted.length) {
          setPlaylist((prevPlayList) => prevPlayList.concat(dataFormatted));
        }
      } catch {
        setSearchingFor(`Nada foi encontrado`);
        console.log(`Erro ao fazer a busca!`);
      }
    } else {
      return;
    }
  }, [isLoading, loadMoreSongs, nextPageIndex]);

  return {
    searchingFor,
    playlist,
    isLoading,
    totalPlaylist,
    handleSearch,
    loadMore,
  };
};
