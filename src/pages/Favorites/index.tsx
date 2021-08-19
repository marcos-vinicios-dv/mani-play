import { CardSong } from '../../components/CardSong';
import { Container } from './styles';

export const Favorites = () => {
  return (
    <Container>
      <h2>Meus Favoritos</h2>
      <span>10 Musicas</span>

      <ul>
        <CardSong />
        <CardSong />
        <CardSong />
      </ul>
    </Container>
  );
};
