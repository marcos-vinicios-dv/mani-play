import { CardSong } from '../../components/CardSong';
import { SearchBar } from '../../components/Search';
import { Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <SearchBar />

      <h2>Mais Populares</h2>
      <span>10 Musicas</span>

      <ul>
        <CardSong />
      </ul>
    </Container>
  );
};
