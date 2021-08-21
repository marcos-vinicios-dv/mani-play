import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardSong } from '../../components/CardSong';
import { Song } from '../../services/hooks/useHome';
import { State } from '../../store/modules/favorites/types';
import { Container } from './styles';

export const Favorites = () => {
  const songs = useSelector<State, Song[]>((state) => state.favorites.songs);
  const [currentSongId, setCurrentSongId] = useState(0);

  const handlePlaySong = (id: number) => {
    setCurrentSongId(id);
  };

  return (
    <Container>
      <h2>Meus Favoritos</h2>
      <span>{songs.length} Musicas</span>

      <ul>
        {songs.map((song, index) => (
          <CardSong
            key={song.id}
            position={index + 1}
            song={song}
            onPlaySong={handlePlaySong}
            isCurrentSong={currentSongId === song.id}
            unfavorite
          />
        ))}
      </ul>
    </Container>
  );
};
