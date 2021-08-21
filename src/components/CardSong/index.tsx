import { useEffect } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { HiHeart } from 'react-icons/hi';
import { useSong } from '../../services/hooks/useSong';

import { CardContainer, BoxMain, BoxSub, ButtonFavorite } from './styles';
import { Song } from '../../services/hooks/useHome';

interface CardSongProps {
  position: number;
  song: Song;
  unfavorite?: boolean;
  isCurrentSong: boolean;
  onPlaySong: (id: number) => void;
}

export const CardSong = ({
  position,
  song,
  onPlaySong,
  isCurrentSong,
  unfavorite,
}: CardSongProps) => {
  const {
    isPlaying,
    setIsPlaying,
    audioRef,
    setupProgressListener,
    togglePlayPause,
    handleAddSongToFavorite,
    handleRemoveSongFromFavorite,
    isFavorite,
  } = useSong();

  useEffect(() => {
    if (!isCurrentSong) {
      setIsPlaying(false);
    }
  }, [isCurrentSong, setIsPlaying]);

  const positionFormatted = String(position).padStart(2, '0');

  return (
    <CardContainer isPlaying={isPlaying}>
      <span>{positionFormatted}</span>

      <BoxMain>
        <img src={song.album_cover} alt="Imagem do álbum" />
        <span>
          <h3>{song.title_short}</h3>
          <a href={song.link} target="_blank" rel="noreferrer">
            Ver completa
          </a>
        </span>
      </BoxMain>

      <BoxSub>
        <span>{song.artist_name}</span>
        <span>{song.duration_formatted}</span>

        <audio
          ref={audioRef}
          src={song.preview}
          preload="metadata"
          onLoadedMetadata={setupProgressListener}
          onPlay={() => onPlaySong(song.id)}
        />

        <button onClick={togglePlayPause}>
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>
        {unfavorite ? (
          <button onClick={() => handleRemoveSongFromFavorite(song.id)}>
            <IoClose />
          </button>
        ) : (
          <ButtonFavorite
            onClick={() => handleAddSongToFavorite(song)}
            isPlaying={isPlaying}
            isFavorite={isFavorite(song.id)}
          >
            <HiHeart />
          </ButtonFavorite>
        )}
      </BoxSub>
    </CardContainer>
  );
};
