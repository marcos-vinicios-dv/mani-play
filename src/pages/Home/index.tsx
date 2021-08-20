import { useEffect } from 'react';
import { useState } from 'react';
import { CardSong } from '../../components/CardSong';
import { SearchBar } from '../../components/Search';
import { api } from '../../services/api';
import { Container } from './styles';

interface SongData {
  id: number;
  position: number;
  duration_formatted: string;
  link: string;
  preview: string;
  title_short: string;
  album_cover: string;
  artist_name: string;
}

//mover para hook
const formatApiData = (song, index) => {
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration % 60;

  return {
    duration_formatted: `${minutes}:${String(seconds).padStart(2, '0')}`,
    album_cover: song.album.cover,
    artist_name: song.artist.name,
    position: String(index + 1).padStart(2, '0'),
    ...song,
  };
};

export const Home = () => {
  const [searchingFor, setSearchingFor] = useState('Mais Populares');
  const [songs, setSongs] = useState<SongData[]>([]);

  useEffect(() => {
    async function loadInitialSongs() {
      const response = (
        await api.get('playlist/3155776842/tracks?index=0&limit=10')
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

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />

      <h2>{searchingFor}</h2>
      <span>{songs.length} Musicas</span>

      <ul>
        {songs.map(
          ({
            id,
            position,
            duration_formatted,
            link,
            preview,
            title_short,
            album_cover,
            artist_name,
          }) => (
            <CardSong
              key={id}
              position={position}
              duration={duration_formatted}
              link={link}
              preview={preview}
              title_short={title_short}
              album_cover={album_cover}
              artist_name={artist_name}
            />
          )
        )}
      </ul>
    </Container>
  );
};
