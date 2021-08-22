import { useState } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';

import { CardSong } from '../../components/CardSong';
import { InfiniteScroll } from '../../components/infiniteScroll';
import { SearchBar } from '../../components/Search';
import { useHome } from '../../services/hooks/useHome';
import { Container } from './styles';

export const Home = () => {
  const [currentSongId, setCurrentSongId] = useState(0);
  const {
    handleSearch,
    searchingFor,
    playlist,
    totalPlaylist,
    isLoading,
    loadMore,
  } = useHome();

  const handlePlaySong = (id: number) => {
    setCurrentSongId(id);
  };

  return (
    <Container id="containerHome">
      <SearchBar onSearch={handleSearch} />

      <h2>{searchingFor}</h2>
      <span>{totalPlaylist} Musicas</span>

      {isLoading ? (
        <div>
          <ClipLoader color="#494849" size={25} />
        </div>
      ) : (
        <ul>
          {playlist.map((song, index) => (
            <CardSong
              key={song.id}
              position={index + 1}
              onPlaySong={handlePlaySong}
              isCurrentSong={currentSongId === song.id}
              song={song}
            />
          ))}
          <InfiniteScroll loadMore={loadMore} />
        </ul>
      )}
    </Container>
  );
};
