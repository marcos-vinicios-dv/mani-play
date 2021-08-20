import { FiPlay } from 'react-icons/fi';
import { HiHeart } from 'react-icons/hi';

import { CardContainer, BoxMain, BoxSub } from './styles';

interface CardSongProps {
  position: number;
  duration: string;
  link: string;
  preview: string;
  title_short: string;
  album_cover: string;
  artist_name: string;
  unfavorite?: boolean;
}

export const CardSong = ({
  position,
  duration,
  link,
  // preview,
  artist_name,
  title_short,
  album_cover,
}: // unfavorite,
CardSongProps) => {
  return (
    <CardContainer>
      <span>{position}</span>

      <BoxMain>
        <img src={album_cover} alt="Imagem do álbum" />
        <span>
          <h3>{title_short}</h3>
          <a href={link} target="_blank" rel="noreferrer">
            Ver completa
          </a>
        </span>
      </BoxMain>

      <BoxSub>
        <span>{artist_name}</span>
        <span>{duration}</span>

        <button>
          <FiPlay />
        </button>
        <button>
          <HiHeart />
        </button>
      </BoxSub>
    </CardContainer>
  );
};

//BsPause
