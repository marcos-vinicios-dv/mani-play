import { BiHeart } from 'react-icons/bi';
import { BsPlay } from 'react-icons/bs';

import Cover from '../../assets/images/Cover.png';
import { CardContainer, BoxMain, BoxSub } from './styles';

interface CardSongProps {
  position: string;
  url_image_album: string;
  url_musica: string;
  artist: string;
  durations: string;
  unfavorite?: boolean;
}
// {}: CardSongProps
export const CardSong = () => {
  return (
    <CardContainer>
      <span>01</span>

      <BoxMain>
        <img src={Cover} alt="Imagem do álbum" />
        <span>
          <h3>Meu Pedaço de pecado</h3>
          <a href="http://localhost:3000/">Ver completa</a>
        </span>
      </BoxMain>

      <BoxSub>
        <span>João Gomes</span>
        <span>2:15</span>

        <button>
          <BsPlay />
        </button>
        <button>
          <BiHeart />
        </button>
      </BoxSub>
    </CardContainer>
  );
};

//BsPause