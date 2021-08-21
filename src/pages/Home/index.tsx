import { useState } from 'react';

import { CardSong } from '../../components/CardSong';
import { SearchBar } from '../../components/Search';
import { useHome } from '../../services/hooks/useHome';
import { Container } from './styles';

export const Home = () => {
  const [currentSongId, setCurrentSongId] = useState(0);
  const { handleSearch, searchingFor, songs } = useHome();

  const handlePlaySong = (id: number) => {
    setCurrentSongId(id);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />

      <h2>{searchingFor}</h2>
      <span>{songs.length} Musicas</span>

      <ul>
        {songs.map((song, index) => (
          <CardSong
            key={song.id}
            position={index + 1}
            onPlaySong={handlePlaySong}
            isCurrentSong={currentSongId === song.id}
            song={song}
          />
        ))}
      </ul>
    </Container>
  );
};
