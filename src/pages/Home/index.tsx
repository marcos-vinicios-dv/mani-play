import { useEffect } from 'react';
import { useState } from 'react';
import { CardSong } from '../../components/CardSong';
import { SearchBar } from '../../components/Search';
import { api } from '../../services/api';
import { Container } from './styles';

export const Home = () => {
  const [searchingFor, setSearchingFor] = useState('Mais Populares');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function loadInitialSongs() {
      const { data } = await api.get('chart/0/tracks');
      console.log(data);
    }
    loadInitialSongs();
  }, []);

  return (
    <Container>
      <SearchBar />

      <h2>{searchingFor}</h2>
      <span>{songs.length} Musicas</span>

      <ul>
        {songs.map((song) => (
          <CardSong />
        ))}
      </ul>
    </Container>
  );
};
